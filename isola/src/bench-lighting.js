// Preserve sunny worn edges while giving shaded timber and slat joints depth.
// Texture variation, fasteners and worn edges remain in the authored map.
export function benchLighting(material, sun, shadow, shadowFragment, live) {
  material.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, {
      uBenchSun:sun, uBenchLive:live, uShMatrix:shadow.matrix,
      uShMap:shadow.map, uShSize:shadow.size, uShOn:shadow.on,
    });
    sh.vertexShader = 'uniform mat4 uShMatrix; varying vec3 vBenchNormal; varying vec4 vShCoord;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vBenchNormal=inverseTransformDirection(normalize(normalMatrix*normal),viewMatrix);
      vec3 benchWorld=(modelMatrix*vec4(position,1.)).xyz;
      vShCoord=uShMatrix*vec4(benchWorld+vBenchNormal*.015,1.);`);
    sh.fragmentShader = 'uniform vec3 uBenchSun; uniform float uBenchLive; varying vec3 vBenchNormal;\n' + shadowFragment + sh.fragmentShader.replace('#include <opaque_fragment>', `
      vec3 key=normalize(mix(vec3(.840,.242,.485),uBenchSun,uBenchLive));
      float facing=sceneFacing(vBenchNormal,key);
      float visibility=mix(1.,meadowShadow(),uBenchLive);
      float sunlight=facing*visibility;
      // The former uniform lift also washed out the authored joint shadows.
      // Recover their pigment in shade while retaining the lit wood treatment.
      float pigmentLift=mix(.70,.62,smoothstep(.08,.78,sunlight));
      vec3 wood=pow(max(diffuseColor.rgb,vec3(0.)),vec3(pigmentLift));
      outgoingLight=wood*mix(.56,1.48,pow(sunlight,1.12))*sceneShadowContrast(sunlight);
      #include <opaque_fragment>`);
  };
  material.customProgramCacheKey=()=> 'bench-surface-depth-v199';
}
