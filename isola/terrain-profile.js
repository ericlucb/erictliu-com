// Apply the checked-in Blender terrain profile once, before material, wind,
// collision or cloth setup. Cached texture/scatter identities remain intact.
export function flattenedHeight(y,profile){
 const [a,b]=profile.transition,t=Math.max(0,Math.min(1,(y-a)/(b-a)));
 return y*(1-profile.reduction*t*t*(3-2*t));
}
export function sampleOriginalGround(x,z,profile){
 const g=profile.originalGround;
 const fx=Math.max(0,Math.min(g.N-1,(x-g.x0)/g.cw-.5));
 const fz=Math.max(0,Math.min(g.N-1,(z-g.z0)/g.ch-.5));
 const i=Math.min(g.N-2,Math.floor(fx)),j=Math.min(g.N-2,Math.floor(fz));
 const tx=fx-i,tz=fz-j,a=g.h[j*g.N+i],b=g.h[j*g.N+i+1],c=g.h[(j+1)*g.N+i],d=g.h[(j+1)*g.N+i+1];
 return (a+(b-a)*tx)*(1-tz)+(c+(d-c)*tx)*tz;
}
export function applyTerrainProfile(root,THREE,profile){
 if(root.userData.terrainProfile===profile.version){console.info("terrain: baked profile "+profile.version);return;}
 root.updateMatrixWorld(true);
 for(const [name,dy] of Object.entries(profile.offsets)){
  const node=root.getObjectByName(name);if(!node)throw Error('Missing grounded landmark: '+name);
  const offset=new THREE.Vector3(0,dy,0);
  if(node.parent){const inverse=node.parent.matrixWorld.clone().invert();offset.applyMatrix3(new THREE.Matrix3().setFromMatrix4(inverse));}
  node.position.add(offset);
  if(name==='WEB_HM_tree_og')node.traverse(o=>{
   if(!o.isMesh)return;
   for(const key of ['_broot','_sroot','_leaf_pivot']){
    const a=o.geometry.attributes[key];if(!a)continue;
    for(let i=0;i<a.count;i++)a.setY(i,a.getY(i)+dy);a.needsUpdate=true;
   }
  });
 }
 root.updateMatrixWorld(true);
 const island=root.getObjectByName('WEB_island');if(!island)throw Error('Missing island');
 const point=new THREE.Vector3();
 island.traverse(o=>{
  if(!o.isMesh)return;
  const ground=o.material.name==='WEB_island_mat';
  const inverse=o.matrixWorld.clone().invert(),a=o.geometry.attributes.position;
  for(let i=0;i<a.count;i++){
   point.fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld);
   if(ground)point.y=flattenedHeight(point.y,profile);
   else {const h=sampleOriginalGround(point.x,point.z,profile);point.y+=flattenedHeight(h,profile)-h;}
   point.applyMatrix4(inverse);a.setXYZ(i,point.x,point.y,point.z);
  }
  a.needsUpdate=true;
  if(ground)o.geometry.computeVertexNormals();
  o.geometry.computeBoundingBox();o.geometry.computeBoundingSphere();
 });
 root.userData.terrainProfile=profile.version;
}
