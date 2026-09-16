// Sill planting follows the meadow's damped wind field. The timber and the
// buried stems remain fixed; displacement grows toward the flower tips.
const SILL_WIND_GLSL = `
uniform sampler2D uSillField;
uniform vec2 uSillFieldMin, uSillFieldSize;
uniform float uSillTime;
uniform mat3 uSillWorldToLocal;
vec3 sillBreeze(vec3 p) {
  vec3 world = (modelMatrix * vec4(p, 1.)).xyz;
  vec2 uv = clamp((world.xz-uSillFieldMin)/uSillFieldSize, 0., 1.);
  vec3 field = texture2D(uSillField, uv).xyz;
  vec2 direction = length(field.xy)>.00001 ? normalize(field.xy) : normalize(vec2(.92,.39));
  vec2 bow = field.xy*.9;
  bow *= inversesqrt(1.+dot(bow,bow)/(.035*.035));
  float phase = p.x*.85+p.z*.35;
  float amplitude = min(.034,field.z*.012);
  vec2 rock = direction*sin(uSillTime*1.55+phase)
    +vec2(-direction.y,direction.x)*sin(uSillTime*1.13+phase+.8)*.20;
  vec2 offset = bow+rock*amplitude;
  return uSillWorldToLocal*vec3(offset.x,0.,offset.y);
}
float sillFlex(vec3 p) { return clamp((p.y-1.12)/.357,0.,1.); }
`;

// Chain onto the painted material, and use this same hook for its depth pass.
export function sillWind(material, field, time, worldToLocal) {
  const previous=material.onBeforeCompile;
  const cache=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=sh=>{
    previous(sh);
    Object.assign(sh.uniforms,{
      uSillField:field.uTex,uSillFieldMin:field.uMin,uSillFieldSize:field.uSize,
      uSillTime:time,uSillWorldToLocal:{value:worldToLocal},
    });
    sh.vertexShader=SILL_WIND_GLSL+sh.vertexShader;
    sh.vertexShader=sh.vertexShader.replace('#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )','#if 1');
    sh.vertexShader=sh.vertexShader.replace('#include <beginnormal_vertex>',`#include <beginnormal_vertex>
      float sillSlope=2.*sillFlex(position)/.357;
      objectNormal.y-=dot(objectNormal,sillBreeze(position))*sillSlope;`);
    sh.vertexShader=sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
      float sillWeight=sillFlex(position);
      transformed+=sillBreeze(position)*sillWeight*sillWeight;`);
  };
  material.customProgramCacheKey=()=>cache()+'-sill-wind-v180';
}
