import { ClothPatch } from './cloth-physics.js';
import { bakeWorldTransform } from './bake-world-transform.js';

// V214: the garment rig in the flat form the worker and the identity test
// consume - one typed array per field instead of an object per vertex.
export function packGarments(rig){
 return rig.garments.map(({patch,binding})=>({
  nx:patch.nx,ny:patch.ny,positions:Array.from(patch.rest),pins:Array.from(patch.pins),
  ids:Int32Array.from(binding.map(b=>b.id)),
  keys:Int32Array.from(binding.flatMap(b=>b.keys)),
  // doubles, exactly as the synchronous skinning multiplies them
  weights:Float64Array.from(binding.flatMap(b=>b.weights)),
  blend:Float64Array.from(binding.map(b=>b.blend)),
 }));
}

// This scan is one welded mesh (rope, pegs and textiles). Cut the rope from
// its connectivity graph, rather than cutting shirts wherever a sleeve ends.
// worker (V214, optional): {url, dir:[x,z], top, state:()=>[U,adv]} - when
// given and Workers exist, the solver runs off the main thread (cloth-worker.js)
// and step() only applies its last result; otherwise the synchronous path
// below runs, which is what node and the tests use.
export function createLaundry(THREE,wind,worker=null){
 return {
  garments:[],mesh:null,
  worker:null,workerReady:false,inFlight:false,pendingDt:0,affected:null,buffer:null,cfg:null,lastMaxStretch:1,
  init(mesh){
    this.mesh=mesh;const g=mesh.geometry,P=g.attributes.position;
    const local=Float32Array.from(P.array),count=P.count;
    mesh.updateWorldMatrix(true,false);
    // glTF stores Y-up local coordinates; authored scan coordinates are Z-up.
    for(let i=0;i<count;i++){local[i*3+1]=-P.getZ(i);local[i*3+2]=P.getY(i);}
    const matrix=mesh.matrixWorld.clone().multiply(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    const u=new THREE.Vector3(1,0,0).transformDirection(matrix);
    const normal=new THREE.Vector3(u.z,0,-u.x);
    const ropeZ=x=>.208+.12*x*x;
    const active=new Uint8Array(count),parent=Int32Array.from({length:count},(_,i)=>i);
    const find=i=>{while(parent[i]!==i){parent[i]=parent[parent[i]];i=parent[i];}return i;};
    const join=(a,b)=>{if(active[a]&&active[b])parent[find(a)]=find(b);};
    const weld=new Map();
    for(let i=0;i<count;i++){
      const x=local[i*3],z=local[i*3+2];
      active[i]=Math.abs(x)<.858&&z<ropeZ(x)-.012;
      if(!active[i])continue;
      // The two rightmost items share a fused scan edge at their common peg.
      const side=x>.704?1:0;
      const key=`${Math.round(x*10000)},${Math.round(local[i*3+1]*10000)},${Math.round(z*10000)},${side}`;
      if(weld.has(key))join(i,weld.get(key));else weld.set(key,i);
    }
    const indices=g.index?.array||Uint32Array.from({length:count},(_,i)=>i);
    for(let k=0;k<indices.length;k+=3)for(let e=0;e<3;e++){
      const a=indices[k+e],b=indices[k+(e+1)%3];
      if((local[a*3]>.704)===(local[b*3]>.704))join(a,b);
    }
    const components=new Map();
    for(let i=0;i<count;i++)if(active[i]){const id=find(i);if(!components.has(id))components.set(id,[]);components.get(id).push(i);}
    const groups=[...components.values()].filter(a=>a.length>150);
    // Only bind loose scan fragments if they actually touch a textile.
    // Nearest-X ownership caught the inner faces of both wooden posts and
    // stretched them into rectangular flaps when the outer garments moved.
    const cell=.004,near=.003,grid=new Map(),owned=new Uint8Array(count);
    const key=(x,y,z)=>`${x},${y},${z}`;
    for(let garment=0;garment<groups.length;garment++)for(const id of groups[garment]){
      owned[id]=1;
      const k=key(...[0,1,2].map(c=>Math.floor(local[id*3+c]/cell)));
      if(!grid.has(k))grid.set(k,[]);grid.get(k).push({id,garment});
    }
    for(let i=0;i<count;i++)if(active[i]&&!owned[i]){
      const p=[0,1,2].map(c=>local[i*3+c]),q=p.map(v=>Math.floor(v/cell));
      let best=-1,d=near*near;
      for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++)for(let z=-1;z<=1;z++){
        for(const candidate of grid.get(key(q[0]+x,q[1]+y,q[2]+z))||[]){
          const ds=p.reduce((sum,v,c)=>sum+(v-local[candidate.id*3+c])**2,0);
          if(ds<d){d=ds;best=candidate.garment;}
        }
      }
      if(best>=0)groups[best].push(i);
    }
    bakeWorldTransform(mesh);mesh.frustumCulled=false;
    this.position=g.attributes.position;this.normal=g.attributes.normal;
    this.rest=Float32Array.from(this.position.array);this.restNormal=Float32Array.from(this.normal.array);
    this.garments=[];
    for(const ids of groups){
      let xmin=Infinity,xmax=-Infinity,zmin=Infinity;
      for(const i of ids){xmin=Math.min(xmin,local[i*3]);xmax=Math.max(xmax,local[i*3]);zmin=Math.min(zmin,local[i*3+2]);}
      const scale=matrix.getMaxScaleOnAxis(),width=(xmax-xmin)*scale;
      const nx=Math.max(5,Math.ceil(width/.09)+1),ny=Math.max(5,Math.ceil((ropeZ((xmin+xmax)/2)-zmin)*scale/.09)+1);
      const positions=[],point=new THREE.Vector3();
      for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){
        const x=xmin+(xmax-xmin)*i/(nx-1),t=j/(ny-1);
        point.set(x,0,ropeZ(x)+(zmin-ropeZ(x))*t).applyMatrix4(matrix);positions.push(...point.toArray());
      }
      const patch=new ClothPatch({nx,ny,positions,pins:[0,nx-1]});
      const binding=[];
      for(const id of ids){
        const x=local[id*3],z=local[id*3+2];
        const fx=Math.max(0,Math.min(nx-1.00001,(x-xmin)/(xmax-xmin)*(nx-1)));
        const fy=Math.max(0,Math.min(ny-1.00001,(ropeZ(x)-z)/(ropeZ(x)-zmin)*(ny-1)));
        const ix=Math.floor(fx),iy=Math.floor(fy),a=fx-ix,b=fy-iy;
        const keys=[iy*nx+ix,iy*nx+ix+1,(iy+1)*nx+ix,(iy+1)*nx+ix+1],weights=[(1-a)*(1-b),a*(1-b),(1-a)*b,a*b];
        // A short attachment band blends to zero at the real rope; no
        // arbitrary stationary islands inside sleeves or hems.
        const depth=(ropeZ(x)-z)*scale;
        const blend=Math.min(1,Math.max(0,(depth-.03)/.09));
        binding.push({id,keys,weights,blend});
      }
      this.garments.push({patch,binding,normal});
    }
    console.info('cloth rig:',this.garments.length,'connected textiles;',this.garments.reduce((n,g)=>n+g.binding.length,0),'bound vertices');
    if(worker&&typeof Worker!=='undefined')this.startWorker(worker);
  },
  startWorker(cfg){
    let w;
    try{w=new Worker(cfg.url,{type:'module'});}catch(err){console.warn('cloth worker unavailable, solving on the main thread',err);return;}
    const g=this.mesh.geometry;
    const index=g.index?Int32Array.from(g.index.array):Int32Array.from({length:this.position.count},(_,i)=>i);
    w.onmessage=(e)=>{
      const m=e.data;
      if(m.type==='ready'){this.affected=m.affected;this.normal.array.set(m.normals);this.normal.needsUpdate=true;this.workerReady=true;return;}
      if(m.type==='result'){
        const d=new Float32Array(m.data),P=this.position.array,N=this.normal.array,A=this.affected;
        for(let n=0;n<A.length;n++){const o=A[n]*3,k=n*6;P[o]=d[k];P[o+1]=d[k+1];P[o+2]=d[k+2];N[o]=d[k+3];N[o+1]=d[k+4];N[o+2]=d[k+5];}
        this.position.needsUpdate=true;this.normal.needsUpdate=true;
        this.buffer=m.data;this.inFlight=false;this.lastMaxStretch=m.maxStretch;
      }
    };
    w.onerror=(err)=>{console.warn('cloth worker failed, solving on the main thread',err.message||err);this.worker=null;this.workerReady=false;this.inFlight=false;};
    w.postMessage({type:'init',rest:Float32Array.from(this.rest),index,garments:packGarments(this),dir:cfg.dir,top:cfg.top});
    this.worker=w;this.cfg=cfg;
  },
  step(dt){
    if(!this.mesh)return;
    if(this.worker){
      // one step in flight at a time; a late result folds its frame into the next
      this.pendingDt+=dt;
      if(this.workerReady&&!this.inFlight){
        const [U,adv]=this.cfg.state();const buf=this.buffer;this.buffer=null;
        this.worker.postMessage({type:'step',dt:this.pendingDt,U,adv,buffer:buf},buf?[buf]:[]);
        this.pendingDt=0;this.inFlight=true;
      }
      return;
    }
    const P=this.position.array,N=this.normal.array;
    for(const {patch,binding} of this.garments){
      patch.step(dt,wind);
      for(const {id,keys,weights,blend} of binding){
        for(let c=0;c<3;c++){
          let delta=0;for(let k=0;k<4;k++)delta+=(patch.x[keys[k]*3+c]-patch.rest[keys[k]*3+c])*weights[k];
          P[id*3+c]=this.rest[id*3+c]+delta*blend;
          N[id*3+c]=this.restNormal[id*3+c];
        }
      }
    }
    // The mesh is textured and double sided; recompute its actual deformed
    // triangle normals instead of replacing folds with flat proxy normals.
    this.position.needsUpdate=true;this.mesh.geometry.computeVertexNormals();
  },
 };
}
