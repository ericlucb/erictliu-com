// Painted rear details share the live sun and soft reflected garden light.
export function gardenLighting(material, sun, shadow, shadowFragment, live, turf=false, flowerPaint=null) {
  material.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, {
      uGardenSun:sun,uGardenLive:live,uShMatrix:shadow.matrix,
      uShMap:shadow.map,uShSize:shadow.size,uShOn:shadow.on,
    });
    if(flowerPaint) {
      sh.uniforms.uSillFlowerDetail={value:flowerPaint};
      sh.vertexShader='varying vec2 vSillUv; varying float vSillHeight;\n'+sh.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
        vSillUv=uv; vSillHeight=position.y;`);
      sh.fragmentShader='uniform sampler2D uSillFlowerDetail; varying vec2 vSillUv; varying float vSillHeight;\n'+sh.fragmentShader;
    }
    sh.vertexShader=sh.vertexShader.replace('#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )','#if 1');
    sh.vertexShader='uniform mat4 uShMatrix; varying vec2 vGardenGround; varying vec3 vGardenNormal; varying vec4 vShCoord;\n'+sh.vertexShader.replace('#include <project_vertex>',`
      vGardenNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
      vec3 gardenWorld=(modelMatrix*vec4(transformed,1.)).xyz; vGardenGround=gardenWorld.xz;
      vShCoord=uShMatrix*vec4(gardenWorld+vGardenNormal*.025,1.);
      #include <project_vertex>`);
    sh.fragmentShader='uniform vec3 uGardenSun; uniform float uGardenLive; varying vec2 vGardenGround; varying vec3 vGardenNormal;\n'+shadowFragment+sh.fragmentShader.replace('#include <opaque_fragment>',`
      vec3 key=normalize(mix(vec3(.840,.242,.485),uGardenSun,uGardenLive));
      float facing=sceneFacing(vGardenNormal,key);
      float visibility=mix(1.,meadowShadow(),uGardenLive);
      outgoingLight=${turf?'sceneMeadowPigment(diffuseColor.rgb,vGardenGround)':'diffuseColor.rgb'}*${turf?'sceneTurfLight(visibility)':'(.72+.60*facing*visibility)*sceneShadowContrast(facing*visibility)'};
      ${flowerPaint?`// Retain small dark petunia throats and leaf veins from the source
      // ingredient, while vertex pigments control the final palette.
      vec3 detail=texture2D(uSillFlowerDetail,vSillUv).rgb;
      float value=max(detail.r,max(detail.g,detail.b));
      float pigmentDetail=.36+.86*smoothstep(.015,.72,value);
      float foliage=smoothstep(1.14,1.19,vSillHeight);
      outgoingLight*=mix(.96,pigmentDetail,foliage);`:''}
      #include <opaque_fragment>`);
  };
  material.customProgramCacheKey=()=> 'garden-paint-v180-'+turf+'-'+!!flowerPaint;
}
