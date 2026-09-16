// Reduced elastic tree: a slow trunk mode and six faster, spatially sampled
// bough modes. Units are metres/seconds. A fixed timestep and progressive
// stiffness keep gusts responsive without clipping positions at a hard limit.
const FIXED_DT=1/120;
const hash=i=>{const x=Math.sin(i*127.1+37.7)*43758.5453;return x-Math.floor(x);};
function mode(hz,damping,drag,stiffening){
  return {d:[0,0],v:[0,0],a:[0,0],w:2*Math.PI*hz,damping,drag,stiffening};
}
export function createTreeDynamics(){
  return {remainder:0,trunk:mode(.29,.38,.45,1.8),
    branches:Array.from({length:6},(_,i)=>mode(.53+.30*hash(i),.30+.12*hash(i+9),.95+.35*hash(i+3),2.2))};
}
function integrate(body,wind,parentAcceleration,dt){
  const speed=Math.hypot(...wind);
  // Flexible foliage reconfigures in strong wind, reducing projected drag.
  const drag=body.drag*speed/(1+speed*speed/36);
  const stiffness=body.w*body.w*(1+body.stiffening*(body.d[0]**2+body.d[1]**2));
  for(let k=0;k<2;k++){
    body.a[k]=drag*wind[k]-stiffness*body.d[k]-2*body.damping*body.w*body.v[k]-.24*(parentAcceleration?.[k]||0);
    body.v[k]+=body.a[k]*dt;
    body.d[k]+=body.v[k]*dt;
  }
}
export function stepTreeDynamics(state,dt,trunkWind,branchWinds){
  if(!Number.isFinite(dt)||dt<=0)return;
  state.remainder+=Math.min(dt,.1);
  while(state.remainder+1e-10>=FIXED_DT){
    integrate(state.trunk,trunkWind,null,FIXED_DT);
    state.branches.forEach((b,i)=>integrate(b,branchWinds[i],state.trunk.a,FIXED_DT));
    state.remainder-=FIXED_DT;
  }
}
