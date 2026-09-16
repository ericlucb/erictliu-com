// A single shadow footprint for paint, vegetation, wood and stone.
// Receiver-plane depth avoids stair steps on sloping surfaces. Four bilinear
// comparisons give continuous coverage with sixteen depth taps per fragment.
export const SCENE_SHADOW_FRAG = `
uniform sampler2D uShMap;
uniform vec2 uShSize;
uniform float uShOn;
varying vec4 vShCoord;
float sceneDepth(vec2 uv){return dot(texture2D(uShMap,uv),vec4(255./256.)/vec4(16777216.,65536.,256.,1.));}
float sceneCompare(vec2 uv,vec3 c,vec2 slope){
 // V223: the receiver-plane term comes from screen derivatives, which are
 // garbage across a silhouette (a chimney a few pixels wide at 50 m read
 // its neighbours' depth and speckled); cap it at a few depth units
 return step(c.z+clamp(dot(slope,uv-c.xy),-.0008,.0008)-.00013,sceneDepth(uv));
}
float sceneBilinear(vec2 uv,vec3 c,vec2 slope){
 vec2 p=uv*uShSize-.5,b=(floor(p)+.5)/uShSize,f=fract(p),t=1./uShSize;
 return mix(mix(sceneCompare(b,c,slope),sceneCompare(b+vec2(t.x,0.),c,slope),f.x),
            mix(sceneCompare(b+vec2(0.,t.y),c,slope),sceneCompare(b+t,c,slope),f.x),f.y);
}
float meadowShadow(){
 if(uShOn<.5)return 1.;
 vec3 c=vShCoord.xyz/vShCoord.w;
 vec3 dx=dFdx(c),dy=dFdy(c);float det=dx.x*dy.y-dx.y*dy.x;
 vec2 slope=abs(det)>1e-10?vec2(dy.y*dx.z-dx.y*dy.z,dx.x*dy.z-dy.x*dx.z)/det:vec2(0.);
 if(c.x<0.||c.x>1.||c.y<0.||c.y>1.||c.z<0.||c.z>1.)return 1.;
 vec2 r=vec2(1.5)/uShSize;
 return .25*(sceneBilinear(c.xy+r,c,slope)+sceneBilinear(c.xy-r,c,slope)
             +sceneBilinear(c.xy+vec2(r.x,-r.y),c,slope)+sceneBilinear(c.xy+vec2(-r.x,r.y),c,slope));
}
// Earthy pigment varies in broad meter-scale patches, shared by turf and blades.
vec3 sceneMeadowPigment(vec3 c,vec2 p){
 float l=dot(c,vec3(.2126,.7152,.0722));
 float pigmentRegion=.5+.26*sin(p.x*.29+p.y*.13)+.18*sin(p.y*.43-p.x*.16);
 vec3 hue=mix(vec3(1.02,.98,.78),vec3(1.12,.98,.65),clamp(pigmentRegion,0.,1.));
 vec3 earthy=mix(vec3(l),c,.75)*hue;
 vec3 closeCol=earthy*(.88-.10*smoothstep(.28,.75,l));
 // V209 (2026-09-15): at the painting's distance the island is a pale
 // straw-olive wash - #8f857b, chroma 7 against the meadow's 29 up close.
 // Beyond ~30 m the pigment drifts to that colour, keeping 40 % of its own
 // value variation as the stroke texture; the approved close palette is
 // untouched inside 30 m (the flowers and garden cameras).
 // V219 (Eric, 2026-09-15: 'the grass is now not green from far away') -
 // the plate's khaki median was rejected in favour of a green meadow at every
 // distance; what remains of V209 is a mild sunlit lift and softening beyond
 // 30 m toward a light yellow-green (#8f975e), never a drift to grey.
 float dcam=length(cameraPosition.xz-p);
 float distant=.35*smoothstep(30.,110.,dcam);
 vec3 target=vec3(.270,.310,.110);
 float lc=dot(closeCol,vec3(.2126,.7152,.0722));
 vec3 distCol=mix(target*(lc/.287),target,.45);
 return mix(closeCol,distCol,distant);
}
// Shadows remove direct sunlight, never the diffuse sky/garden fill.
float sceneShadowContrast(float sunlight){return mix(.70,1.,smoothstep(0.,.85,sunlight));}
float sceneTurfLight(float visibility){return mix(.62,1.,visibility)*sceneShadowContrast(visibility);}
float sceneFacing(vec3 n,vec3 sun){return smoothstep(-.12,.8,dot(normalize(n),normalize(sun)));}
float sceneSurfaceLight(float facing,float visibility){return (.62+.46*facing*visibility)*sceneShadowContrast(facing*visibility);}
`;

// Chain after wind/shore hooks. Sample at the final deformed vertex, so cloth
// and bending wood receive shadows where they are, not in their resting pose.
// V219 options: bark - deeper shade on the trunk's away side; soft - the
// laundry's folds read as cotton, not corrugation; trim - the roof perimeter's
// underside and inward faces go dark like the reference's bargeboards.
export function sceneLighting(material,sun,shadow,live,{wind=false,turf=false,glass=false,roof=false,bark=false,soft=false,trim=false,houseCentre=null}={}) {
 const previous=material.onBeforeCompile;
 const cache=material.customProgramCacheKey.bind(material);
 material.onBeforeCompile=sh=>{
  previous(sh);
  sh.vertexShader=sh.vertexShader.replace('#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )','#if 1');
  Object.assign(sh.uniforms,{uSceneSun:sun,uSceneLive:live,uShMatrix:shadow.matrix,
   uShMap:shadow.map,uShSize:shadow.size,uShOn:shadow.on});
  if(trim)sh.uniforms.uHouseCentre={value:houseCentre};
  sh.vertexShader='varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;\n'+(wind?'':'uniform mat4 uShMatrix; varying vec4 vShCoord;\n')+sh.vertexShader.replace('#include <project_vertex>',`
   vSceneWorld=(modelMatrix*vec4(transformed,1.)).xyz;
   vSceneGround=vSceneWorld.xz;
   vSceneNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
   ${wind?'':`vShCoord=uShMatrix*vec4((modelMatrix*vec4(transformed,1.)).xyz+vSceneNormal*${roof?'.012':'.025'},1.);`}
   #include <project_vertex>`);
  const lighting=`
   vec3 sceneKey=normalize(mix(vec3(.840,.242,.485),uSceneSun,uSceneLive));
   float sceneVisibility=mix(1.,meadowShadow(),uSceneLive);
   ${turf?'outgoingLight=sceneMeadowPigment(outgoingLight,vSceneGround);':''}
   ${bark?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
      outgoingLight *= mix(1.,(.40+.72*f)*sceneShadowContrast(f),uSceneLive); }`
    :soft?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
      outgoingLight *= mix(1.,(.80+.28*f)*mix(.86,1.,smoothstep(0.,.85,f)),uSceneLive); }`
    :`outgoingLight *= mix(1.,${turf?'sceneTurfLight(sceneVisibility)':'sceneSurfaceLight(sceneFacing(vSceneNormal,sceneKey),sceneVisibility)'},uSceneLive);`}
   ${trim?`{ vec3 tn=normalize(vSceneNormal);
      vec2 toCentre=normalize(uHouseCentre.xz-vSceneWorld.xz);
      float under=smoothstep(-.05,-.5,tn.y);
      float inward=smoothstep(.35,.8,dot(normalize(tn.xz+vec2(1e-5)),toCentre))*(1.-smoothstep(.6,.9,abs(tn.y)));
      outgoingLight *= mix(1.,.28,max(under,inward)); }`:''}
   ${roof?`{
    // V211: at 120 m Oga's roof reads as horizontal course lines where the
    // modeled shells average to a dot grid. Draw the course shadows along the
    // slope at the plate's rhythm (every second modeled course), faded in
    // beyond 40 m so close views keep the modeled tiles.
    vec3 roofN=normalize(vSceneNormal);
    vec3 downSlope=normalize(vec3(0.,-1.,0.)-roofN*dot(vec3(0.,-1.,0.),roofN));
    float courseF=fract(dot(vSceneWorld,downSlope)/1.22);
    float lip=1.-smoothstep(0.,.16,min(courseF,1.-courseF)*2.);
    float roofFar=smoothstep(40.,90.,length(cameraPosition-vSceneWorld));
    outgoingLight*=1.-.28*lip*roofFar;
   }`:''}
  `;
  // Reflected sky and warm interior are composited after the frame/linen paint.
  const marker=glass?'vec2 q = vGlassUv;':'#include <opaque_fragment>';
  sh.fragmentShader='uniform vec3 uSceneSun; uniform float uSceneLive; varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;'+(trim?' uniform vec3 uHouseCentre;':'')+'\n'+SCENE_SHADOW_FRAG+sh.fragmentShader.replace(marker,lighting+marker);
 };
 material.customProgramCacheKey=()=>cache()+'-scene-light-v223-'+[wind,turf,glass,roof,bark,soft,trim].join('-');
 material.needsUpdate=true;
}

// Exporters rename mesh nodes when joining primitives. Material identity is
// stable across scoped exports, so cast roles must not depend on node names.
export function castsSceneShadow(name,material='') {
 return /home|tree|bench|clothes/.test(name)
   || /^WEB_HM_(home|bench|clothes|shore)_/.test(material)
   || /^WEB_Illustrated(Bark|Leaf)/.test(material)
   || /^WEB_petal_/.test(material);
}
