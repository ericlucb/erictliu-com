// Descendants inherit their parent's attachment transform. Apply leaf flutter,
// shoot flex, bough flex, then the slower trunk curvature, in that order.
// V248: the file ships these int16 over a centre / half-range; with TREE_Q
// they stay so on the GPU (a third of the bytes) and are read through the
// uniforms, under the same names. Without it, float32 as before.
export const BRANCH_WIND_GLSL = `
#ifdef TREE_TAB
// V251: one row per sub-branch / leaf in a float texture, five texels a row
// (broot.xyz bmeta.x | bmeta.yz sroot.xy | sroot.z smeta.xyz | pivot.xyz axis.x | axis.yz seed -);
// the vertex carries the row's id
attribute float _tree_id;
uniform highp sampler2D uTreeTab; uniform float uTreeTabW;
vec4 treeRow(int k) { int i = int(_tree_id + 0.5) * 5 + k; int w = int(uTreeTabW); return texelFetch(uTreeTab, ivec2(i - (i / w) * w, i / w), 0); }
#define _broot (treeRow(0).xyz)
#define _bmeta (vec3(treeRow(0).w, treeRow(1).xy))
#define _sroot (vec3(treeRow(1).zw, treeRow(2).x))
#define _smeta (treeRow(2).yzw)
#elif defined(TREE_Q)
attribute vec3 _brootq; attribute vec3 _bmetaq; attribute vec3 _srootq; attribute vec3 _smetaq;
uniform vec3 uBrootC, uBrootH, uBmetaC, uBmetaH, uSrootC, uSrootH, uSmetaC, uSmetaH;
#define _broot (uBrootC + uBrootH * _brootq)
#define _bmeta (uBmetaC + uBmetaH * _bmetaq)
#define _sroot (uSrootC + uSrootH * _srootq)
#define _smeta (uSmetaC + uSmetaH * _smetaq)
#else
attribute vec3 _broot;
attribute vec3 _bmeta;
attribute vec3 _sroot;
attribute vec3 _smeta;
#endif
mat3 windRotation(vec2 bend,float angle) {
 float magnitude=length(bend);
 if(magnitude<1e-7)return mat3(1.0);
 vec3 axis=vec3(bend.y,0.0,-bend.x)/magnitude;
 float c=cos(angle),s=sin(angle),t=1.0-c;
 float x=axis.x,z=axis.z;
 return mat3(t*x*x+c,s*z,t*x*z,-s*z,c,s*x,t*x*z,-s*x,t*z*z+c);
}
mat3 branchRotation(vec3 meta,float gain) {
 float mode=meta.x*4.999;
 int i=int(floor(mode));
 vec2 bend=mix(uBranch[i],uBranch[i+1],fract(mode));
 float magnitude=length(bend)*gain;
 // Smooth elastic range: no hard angular cap and no artificial wave on wood.
 float angle=magnitude/sqrt(1.0+magnitude*magnitude/(.30*.30));
 return windRotation(bend,angle*meta.y*meta.z);
}
vec3 moveBranch(vec3 point) {
 point=_sroot+branchRotation(_smeta,.85)*(point-_sroot);
 return _broot+branchRotation(_bmeta,.55)*(point-_broot);
}
vec3 treeAnchor(vec3 point) {
 // An entire bough and all its descendants share the trunk tangent at the
 // bough's actual attachment. Varying height per leaf would stretch the crown.
 return _bmeta.z>.5?_broot:point;
}
mat3 trunkRotation(float y) {
 float height=max(uTreeH-.35,.5);
 float h=clamp((y-uTreeBase-.35)/height,0.0,1.0);
 return windRotation(uTrunk,2.0*length(uTrunk)/height*h);
}
vec3 moveTrunk(vec3 point,vec3 anchor) {
 float height=max(uTreeH-.35,.5);
 float h=clamp((anchor.y-uTreeBase-.35)/height,0.0,1.0);
 float angle=2.0*length(uTrunk)/height;
 vec3 shift=vec3(0.0);
 if(angle>.0001) {
   // Arc-length-preserving centerline; lower 35 cm and roots remain fixed.
   float arc=angle*h;
   float sideways=height*(2.0*sin(arc*.5)*sin(arc*.5))/angle;
   vec2 direction=normalize(uTrunk);
   shift=vec3(direction.x*sideways,height*(sin(arc)/angle-h),direction.y*sideways);
 }
 return anchor+shift+trunkRotation(anchor.y)*(point-anchor);
}
`;
