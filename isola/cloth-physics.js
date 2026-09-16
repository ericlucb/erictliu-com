// Fixed-step XPBD cotton patches. Pins are actual attachment points only.
export class ClothPatch {
  constructor({ nx, ny, positions, pins }) {
    this.nx=nx;this.ny=ny;this.rest=Float64Array.from(positions);
    this.x=Float64Array.from(positions);this.previous=Float64Array.from(positions);
    this.velocity=new Float64Array(positions.length);this.inv=new Float64Array(positions.length/3).fill(1);
    for(const p of pins)this.inv[p]=0;
    this.pins=pins;this.constraints=[];this.accumulator=0;this.time=0;
    const add=(a,b,compliance)=>{
      const d=Math.hypot(...[0,1,2].map(k=>positions[a*3+k]-positions[b*3+k]));
      this.constraints.push({a,b,length:d,compliance,lambda:0});
    };
    for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){
      const k=j*nx+i;
      if(i+1<nx)add(k,k+1,1e-8);
      if(j+1<ny)add(k,k+nx,1e-8);
      if(i+1<nx&&j+1<ny){add(k,k+nx+1,5e-8);add(k+1,k+nx,5e-8);}
      if(i+2<nx)add(k,k+2,2e-4);
      if(j+2<ny)add(k,k+2*nx,2e-4);
    }
    this.tethers=[];
    for(let k=0;k<this.inv.length;k++){
      let pin=pins[0],length=Infinity;
      for(const p of pins){const d=Math.hypot(...[0,1,2].map(a=>positions[k*3+a]-positions[p*3+a]));if(d<length){length=d;pin=p;}}
      this.tethers.push({pin,length:length*1.015});
    }
  }
  step(frameDt,wind,ground=-Infinity){
    const dt=1/120;
    this.accumulator=Math.min(this.accumulator+Math.max(0,Math.min(frameDt,.1)),.1);
    while(this.accumulator+1e-10>=dt){this.substep(dt,wind,ground);this.accumulator-=dt;}
  }
  substep(dt,wind,ground){
    const {x,previous,velocity:v,inv,rest}=this;previous.set(x);this.time+=dt;
    for(let k=0;k<inv.length;k++){
      const a=k*3;if(!inv[k]){for(let c=0;c<3;c++){x[a+c]=rest[a+c];v[a+c]=0;}continue;}
      const row=Math.floor(k/this.nx),col=k%this.nx;
      const l=(k-(col>0?1:0))*3,r=(k+(col+1<this.nx?1:0))*3;
      const t=(k-(row>0?this.nx:0))*3,b=(k+(row+1<this.ny?this.nx:0))*3;
      const ux=previous[r]-previous[l],uy=previous[r+1]-previous[l+1],uz=previous[r+2]-previous[l+2];
      const vx=previous[b]-previous[t],vy=previous[b+1]-previous[t+1],vz=previous[b+2]-previous[t+2];
      let nx=uy*vz-uz*vy,ny=uz*vx-ux*vz,nz=ux*vy-uy*vx;
      const len=Math.hypot(nx,ny,nz)||1;nx/=len;ny/=len;nz/=len;
      const w=wind(previous[a],previous[a+1],previous[a+2]);
      const rx=w[0]-v[a],ry=-v[a+1],rz=w[1]-v[a+2];
      const vn=rx*nx+ry*ny+rz*nz;
      // Normal pressure plus drag along the folded fabric. The latter matters
      // when the shared meadow wind blows almost parallel to the line.
      // Extra response for light cotton in the default breeze, fading out
      // before strong gusts. Use ambient air speed (not relative velocity)
      // so a moving hem cannot repeatedly switch to the high-gain regime.
      const breeze=Math.max(0,Math.min(1,(3.5-Math.hypot(...w))/1.5));
      const catchAir=1+3*breeze*breeze*(3-2*breeze);
      // Cloth flutters even when the prevailing breeze runs along the line.
      // Small cross-flow eddies act as pressure, not a mesh animation. Their
      // phase travels through each panel; no air means no flutter force.
      const airSpeed=Math.hypot(...w);
      const phase=rest[a]*.72+rest[a+2]*.61;
      const eddy=breeze*Math.min(1.3,airSpeed*1.35)*(
        .72*Math.sin(this.time*2.6+phase+rest[a+1]*.65)
        +.28*Math.sin(this.time*4.3+phase*1.7-rest[a+1]*1.2));
      const normalAir=vn+eddy;
      const pressure=Math.max(-28,Math.min(28,1.05*catchAir*normalAir*Math.abs(normalAir)));
      const drag=(.06+.18*Math.min(10,Math.hypot(rx,ry,rz)))*(1+1.8*breeze);
      const acceleration=[pressure*nx+drag*(rx-vn*nx),pressure*ny+drag*(ry-vn*ny)-9.81,pressure*nz+drag*(rz-vn*nz)];
      for(let c=0;c<3;c++){v[a+c]=(v[a+c]+acceleration[c]*dt)*Math.exp(-.7*dt);x[a+c]+=v[a+c]*dt;}
    }
    for(const c of this.constraints)c.lambda=0;
    for(let iteration=0;iteration<28;iteration++){
      for(const c of this.constraints){
        const a=c.a*3,b=c.b*3,wa=inv[c.a],wb=inv[c.b];if(wa+wb===0)continue;
        const dx=x[b]-x[a],dy=x[b+1]-x[a+1],dz=x[b+2]-x[a+2];
        const len=Math.hypot(dx,dy,dz)||1e-9,alpha=c.compliance/(dt*dt);
        const dl=(-(len-c.length)-alpha*c.lambda)/(wa+wb+alpha);c.lambda+=dl;
        const f=dl/len;
        x[a]-=wa*f*dx;x[a+1]-=wa*f*dy;x[a+2]-=wa*f*dz;
        x[b]+=wb*f*dx;x[b+1]+=wb*f*dy;x[b+2]+=wb*f*dz;
      }
      for(let k=0;k<inv.length;k++)if(inv[k]){
        const a=k*3,{pin,length}=this.tethers[k],p=pin*3;
        const dx=x[a]-rest[p],dy=x[a+1]-rest[p+1],dz=x[a+2]-rest[p+2],d=Math.hypot(dx,dy,dz);
        if(d>length){const f=length/d;x[a]=rest[p]+dx*f;x[a+1]=rest[p+1]+dy*f;x[a+2]=rest[p+2]+dz*f;}
        x[a+1]=Math.max(x[a+1],ground);
      }
    }
    for(let k=0;k<inv.length;k++)if(inv[k])for(let c=0;c<3;c++){const a=k*3+c;v[a]=(x[a]-previous[a])/dt;}
  }
  maxStretch(){return Math.max(...this.constraints.filter(c=>c.compliance<1e-6).map(c=>Math.hypot(...[0,1,2].map(k=>this.x[c.a*3+k]-this.x[c.b*3+k]))/c.length));}
}
