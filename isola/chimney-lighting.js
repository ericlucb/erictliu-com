// Mineral pigment stays quiet; the moving sun defines the chimney's form.
export function chimneyLighting(material,THREE,sun,shadow,shadowFragment,live,flashing=false) {
 const linear=rgb=>new THREE.Color(...rgb.map(x=>x/255)).convertSRGBToLinear();
 material.onBeforeCompile=sh=>{
  Object.assign(sh.uniforms,{uChimneySun:sun,uChimneyLive:live,
   uChimneyLit:{value:linear(flashing?[103,106,98]:[169,155,128])},
   uChimneyShade:{value:linear(flashing?[43,47,43]:[49,54,45])},
   uChimneyMedian:{value:linear(flashing?[147,151,149]:[197, 177, 151])},
   uShMatrix:shadow.matrix,uShMap:shadow.map,uShSize:shadow.size,uShOn:shadow.on});
  sh.vertexShader='uniform mat4 uShMatrix; varying vec4 vShCoord; varying vec3 vChimneyNormal;\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vec3 world=(modelMatrix*vec4(position,1.)).xyz;
   vChimneyNormal=inverseTransformDirection(normalize(normalMatrix*normal),viewMatrix);
   vShCoord=uShMatrix*vec4(world+vChimneyNormal*.055,1.);`);
  sh.fragmentShader='uniform vec3 uChimneySun,uChimneyLit,uChimneyShade,uChimneyMedian; uniform float uChimneyLive; varying vec3 vChimneyNormal;\n'+shadowFragment+sh.fragmentShader.replace('#include <opaque_fragment>',`
   vec3 n=normalize(vChimneyNormal);
   vec3 key=normalize(mix(vec3(.840,.242,.485),uChimneySun,uChimneyLive));
   float facing=smoothstep(-.025,.72,dot(n,key));
   float visibility=mix(1.,meadowShadow(),uChimneyLive);
   vec3 pigment=mix(vec3(1.),clamp(diffuseColor.rgb/uChimneyMedian,vec3(.48),vec3(1.48)),.94);
   outgoingLight=mix(mix(uChimneyShade,uChimneyLit,.09),uChimneyLit,facing*visibility)*pigment*sceneShadowContrast(facing*visibility);
   #include <opaque_fragment>`);
 };
 material.customProgramCacheKey=()=> 'weathered-chimney-v174-'+flashing;
}
