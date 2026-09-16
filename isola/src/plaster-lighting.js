// Reference-calibrated paint response: one pigment, directional warm key and
// cool bounced fill. The same response covers wall bodies and wall feet.
export function plasterLighting(material, THREE, data, sun, shadow, shadowFragment, live) {
  const color = rgb => new THREE.Color(...rgb.map(c => c / 255)).convertSRGBToLinear();
  const uniforms = {
    uPlasterCenter: {value: new THREE.Vector3(...data.center)},
    uPlasterLit: {value: color(data.lit_srgb)},
    uFrontLit: {value: color(data.front_lit_srgb || data.lit_srgb)},
    uPlasterShade: {value: color(data.shade_srgb)},
    uRearShade: {value: color(data.rear_shade_srgb)},
    uPlasterMedian: {value: color(data.source_median_srgb)},
    uWearBounds: {value:new THREE.Vector4(...data.weathered_corners)},
    uSideTextureStrength: {value:data.side_texture_strength ?? .22},
    uGablePaint: {value:material.name.startsWith('WEB_HM_home_plaster_38')?1:0},
    uGableMedian: {value:color([127,128,110])},
    uPlasterSun: sun, uPlasterLive: live,
    uShMatrix: shadow.matrix, uShMap: shadow.map, uShSize: shadow.size, uShOn: shadow.on,
  };
  material.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = `uniform mat4 uShMatrix; uniform vec4 uWearBounds; varying float vQuietSide; uniform vec3 uPlasterCenter; varying vec4 vShCoord;
      varying vec3 vPlasterWorld; varying vec3 vPlasterNormal; varying vec3 vPlasterLocal; varying float vWallAxis;\n` + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      vPlasterWorld=(modelMatrix*vec4(position,1.0)).xyz;
      vPlasterLocal=vec3(position.x,-position.z,position.y);
      // The mesh is y-up: the plan's depth axis is z, y is height. V219-V220
      // compared |x| against |y| here, so any front/rear face whose normal
      // carried a hair of x (the kit's faces jitter by ~0.05) counted as a
      // gable end and took the whole corner meld: flat-wash rectangles over
      // the front (Eric: 'pixelated') and a stepped block at the rear corner.
      vWallAxis=abs(normal.x)>abs(normal.z) ? 1. : 0.;   // 1: a gable end (x-facing), 0: front/back
      vQuietSide=(abs(normal.x)>.75 && position.x<uWearBounds.x+.10) ? 1. : 0.;
      vec3 wallNormal=abs(normal.x)>abs(normal.z) ? vec3(sign(normal.x),0.,0.) : vec3(0.,0.,sign(normal.z));
      if(abs(normal.y)>.9) wallNormal=vec3(0.,sign(normal.y),0.);
      vPlasterNormal=inverseTransformDirection(normalize(normalMatrix*wallNormal),viewMatrix);
      vec3 radial=vec3(vPlasterWorld.x-uPlasterCenter.x,0.,vPlasterWorld.z-uPlasterCenter.z);
      if(dot(vPlasterNormal,radial)<0.)vPlasterNormal=-vPlasterNormal;
      vShCoord=uShMatrix*vec4(vPlasterWorld+vPlasterNormal*.025,1.0);`);
    sh.fragmentShader=sh.fragmentShader.replace('#include <map_fragment>', `
      #ifdef USE_MAP
      diffuseColor*=plasterPaint(map,vMapUv);
      #endif`);
    sh.fragmentShader = `
      vec4 plasterPaint(sampler2D pigmentMap,vec2 uv){
        // Each elevation occupies one unique quadrant. UVs are fixed to the
        // complete building surface; do not tile, scramble or blend motifs.
        return texture2D(pigmentMap,uv);
      }
      uniform vec3 uPlasterCenter,uFrontLit,uPlasterLit,uPlasterShade,uRearShade,uPlasterMedian,uPlasterSun;
      uniform float uPlasterLive,uSideTextureStrength,uGablePaint; uniform vec3 uGableMedian; varying float vQuietSide; uniform vec4 uWearBounds; varying vec3 vPlasterWorld,vPlasterNormal,vPlasterLocal; varying float vWallAxis;\n` + shadowFragment + sh.fragmentShader.replace('#include <opaque_fragment>', `
      vec3 n=normalize(vPlasterNormal);
      // Old two-sided infill faces can have inward winding. Orient their
      // illumination outward without moving any of the locked geometry.
      vec3 radial=vec3(vPlasterWorld.x-uPlasterCenter.x,0.,vPlasterWorld.z-uPlasterCenter.z);
      if(dot(n,radial)<0.) n=-n;
      // V219 (Eric: 'where the walls meet should be rounder... the textures
      // meld'): the arrises are shaded as if rounded to 0.45 m. Within that
      // reach of a corner the shading normal turns toward the neighbouring
      // wall's, so the lit front wraps into the shaded side instead of
      // meeting it on a hard seam. Geometry untouched.
      float meld=0.;
      {
        vec2 q=vPlasterLocal.xy;
        float dxE=min(abs(q.x-uWearBounds.x),abs(q.x-uWearBounds.z));
        float dyE=min(abs(q.y-uWearBounds.y),abs(q.y-uWearBounds.w));
        float dCorner=vWallAxis>.5 ? dyE : dxE;      // distance to the nearest arris along this wall
        // V220: the fillet is a real 0.30 m arc now (rounded_corners.py); its
        // two halves carry the two walls' axis normals and meet 0.088 m from
        // the arris, so the blend reaches exactly one half there
        meld=1.-smoothstep(.088,.50,dCorner);
        vec3 other=vec3(n.z,0.,-n.x);                // the neighbouring wall's normal: 90 deg about up
        if(dot(other,radial)<0.) other=-other;
        n=normalize(mix(n,other,.5*meld));
      }
      vec3 key=normalize(mix(vec3(.840,.242,.485),uPlasterSun,uPlasterLive));
      float facing=smoothstep(-.04,.72,dot(n,key));
      float visibility=mix(1.,meadowShadow(),uPlasterLive);
      float light=facing*visibility;
      vec3 pigment=mix(vec3(1.),clamp(diffuseColor.rgb/uPlasterMedian,vec3(.52),vec3(1.45)),.88);
      // Wear accumulates near an arris and the damp ground, but follows the
      // irregular generated flake shapes rather than a straight painted band.
      vec2 q=vPlasterLocal.xy;
      float rearPaint=smoothstep(uWearBounds.w-.06,uWearBounds.w-.015,q.y)*(1.-vQuietSide);
      pigment=mix(pigment,vec3(1.)+(pigment-vec3(1.))*1.22,rearPaint);
      float edge=min(min(length(q-uWearBounds.xy),length(q-uWearBounds.zy)),
                     min(length(q-uWearBounds.zw),length(q-uWearBounds.xw)));
      float corner=1.-smoothstep(.025,.34,edge);
      float foot=1.-smoothstep(.02,.72,vPlasterLocal.z);
      float exposed=1.-smoothstep(.76,.97,dot(diffuseColor.rgb/uPlasterMedian,vec3(.3333)));
      pigment*=1.-exposed*(.18*corner+.085*foot);
      // Keep a trace of the authored brushwork, without dark peeling islands.
      // This is attached to the west wall, so moving sunlight/shadows stay intact.
      pigment=mix(pigment,mix(vec3(1.),pigment,uSideTextureStrength),vQuietSide);
      if(uGablePaint>.5) pigment=clamp(vec3(1.)+(diffuseColor.rgb/uGableMedian-vec3(1.))*1.65,vec3(.68),vec3(1.90));
      // V220 (Eric: 'make sure the textures across walls actually meld'): over
      // the fillet each elevation's paint fades to its plain wash, so at the
      // arris both walls show the same lit/shade colour under the same
      // (blended) normal - no seam of pattern where the two paintings meet
      pigment=mix(pigment,vec3(1.),.85*meld);
      vec3 shade=mix(uPlasterShade,uRearShade,smoothstep(uWearBounds.w-.20,uWearBounds.w-.05,vPlasterLocal.y));
      float front=1.-smoothstep(uWearBounds.y+.05,uWearBounds.y+.20,vPlasterLocal.y);
      vec3 lit=mix(uPlasterLit,uFrontLit,front);
      // The projecting eave softly occludes the wall directly below it.
      // V211: Oga's front carries a firm dark band under the eave (~0.4 m);
      // the old 0.28 m at 20 % vanished at the hero distance.
      float nearEave=(1.-smoothstep(.06,.42,4.39-vPlasterLocal.z))*step(vPlasterLocal.z,4.43);
      float longWall=1.-smoothstep(.10,.24,min(abs(vPlasterLocal.y-uWearBounds.y),abs(vPlasterLocal.y-uWearBounds.w)));
      float eaveOcclusion=1.-.30*nearEave*longWall;
      outgoingLight=mix(mix(shade,lit,.065),lit,light)*pigment*sceneShadowContrast(light)*eaveOcclusion;
      #include <opaque_fragment>`);
  };
  material.customProgramCacheKey=()=> 'reference-gable-v221';
}
