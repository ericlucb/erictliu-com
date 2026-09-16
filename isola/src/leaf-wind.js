// Each leaf rotates about its authored petiole. The same transform drives
// visible geometry, changing normals, water reflections and the shadow pass.
export const LEAF_WIND_GLSL = `
#ifdef TREE_Q
attribute vec3 _leaf_pivotq; attribute vec3 _leaf_axisq; attribute float _leaf_seedq;
uniform vec3 uLeafPivotC, uLeafPivotH, uLeafAxisC, uLeafAxisH; uniform float uLeafSeedC, uLeafSeedH;
#define _leaf_pivot (uLeafPivotC + uLeafPivotH * _leaf_pivotq)
#define _leaf_axis (uLeafAxisC + uLeafAxisH * _leaf_axisq)
#define _leaf_seed (uLeafSeedC + uLeafSeedH * _leaf_seedq)
#else
attribute vec3 _leaf_pivot;
attribute vec3 _leaf_axis;
attribute float _leaf_seed;
#endif
mat3 leafAxisRotation(vec3 axis,float angle) {
 float c=cos(angle),s=sin(angle),t=1.0-c;
 float x=axis.x,y=axis.y,z=axis.z;
 return mat3(t*x*x+c,t*x*y+s*z,t*x*z-s*y,
             t*x*y-s*z,t*y*y+c,t*y*z+s*x,
             t*x*z+s*y,t*y*z-s*x,t*z*z+c);
}
mat3 leafMotion() {
 float seed=_leaf_seed;
 vec3 vein=normalize(_leaf_axis+vec3(1e-8));
 vec3 crossAxis=normalize(cross(vein,abs(vein.y)<.9?vec3(0,1,0):vec3(1,0,0)));
 float phase=seed*213.7;
 float rate=6.0+7.0*fract(seed*37.17);
 float gust=.62+.38*wnoise(_leaf_pivot.xz*.43+vec2(uWt*.32,seed*17.0));
 float amplitude=min(.34,max(0.0,uFlutter)*.075)*gust;
 float flutter=sin(uWt*rate+phase)*.65+sin(uWt*(rate*1.731)+phase*.37)*.35;
 float twist=sin(uWt*(4.0+9.0*fract(seed*93.1))+phase*1.31)*.7
            +sin(uWt*19.3+phase*2.9)*.3;
 return leafAxisRotation(crossAxis,amplitude*flutter)*leafAxisRotation(vein,amplitude*.65*twist);
}
`;
