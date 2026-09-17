var gb=Object.defineProperty;var vb=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var hp=(s,e)=>{for(var t in e)gb(s,t,{get:e[t],enumerable:!0})};var Av={};hp(Av,{installDevPanel:()=>K1});async function K1(s){let{Vector3:e,MathUtils:t,camera:n,FLY:i,setCamMode:r,restoreHero:a,LOOKAT:o,HOME_DROP:l,postMat:c,Wind:h,WIND:u,placeSun:d,HORIZON:f,applyHorizon:p,scene:v,COLLIDE:m,groundY:g,windowVariants:x,TERRAIN_PROFILE:b,setPainterly:_,setLiveLight:E,VISIBLE_SUN:M,BUILD:A}=s;document.body.insertAdjacentHTML("beforeend",j1);let C=P=>document.getElementById(P);function y(P,L,k,X=2){let U=C(P);U.addEventListener("input",()=>{C(L).textContent=(+U.value).toFixed(X),k(+U.value)})}y("c-mix","o-mix",P=>c.uniforms.uMix.value=P),y("c-rad","o-rad",P=>c.uniforms.uRadius.value=P,0),y("c-edge","o-edge",P=>c.uniforms.uEdge.value=P),y("c-grain","o-grain",P=>c.uniforms.uGrain.value=P),y("c-sat","o-sat",P=>c.uniforms.uSat.value=P),y("c-cel","o-cel",P=>c.uniforms.uCel.value=P),y("c-sepia","o-sepia",P=>c.uniforms.uSepia.value=P),C("c-wind").addEventListener("change",()=>u.on=C("c-wind").checked),C("c-wind").checked=u.on,y("c-wspd","o-wspd",P=>h.mean=P,1),y("c-sun","o-sun",P=>d(P)),y("c-hz","o-hz",P=>{f.shift=P,p()},3),y("c-hcone","o-hcone",P=>v.heroCone=P,0),y("c-hnear","o-hnear",P=>v.heroNear=P),C("c-cam").addEventListener("change",()=>r(C("c-cam").value)),C("c-shore").addEventListener("click",()=>{r("fly");let P=new e(-7.5,.25,-21.1),L=new e(-13.5,4.8,-31).sub(P).multiplyScalar(Math.max(1,.9/n.aspect)).add(P);o(...L.toArray(),...P.toArray())}),C("c-hero").addEventListener("click",a),C("c-house").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(1.5126,4.443,-1.6429),L=new e(10.0855,4.943,6.8075).sub(P).multiplyScalar(Math.max(1,1.5/n.aspect)).add(P);L.y+=l,P.y+=l,o(...L.toArray(),...P.toArray())}),C("c-rear").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(-5.0129,5.793,-7.1303),L=new e(-25.8342,8.893,-18.1064).sub(P).multiplyScalar(Math.max(1,1.5/n.aspect)).add(P);L.y+=l,P.y+=l,o(...L.toArray(),...P.toArray())});let w=await fetch("./rear-remodel-cameras.json?v="+A).then(P=>P.json());for(let P of Object.values(w))for(let L of["eye","target"])P[L][1]+=l;for(let[P,L]of[["c-chimney","chimney"],["c-chimney-back","chimney_reverse"],["c-rear-detail","rear_detail"]])C(P).addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=50,n.updateProjectionMatrix();let k=w[L],X=new e(...k.target),U=new e(...k.eye).sub(X).multiplyScalar(Math.max(1,.9/n.aspect)).add(X);o(...U.toArray(),...X.toArray())});C("c-gable").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(2.4011,5.793,-9.3231),L=new e(14.2643,8.493,-28.0919).sub(P).multiplyScalar(Math.max(1,1.5/n.aspect)).add(P);L.y+=l,P.y+=l,o(...L.toArray(),...P.toArray())}),C("c-pier").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(-7.8551,.2,-19.7783),L=new e(-13.3603,1.05,-24.1752).sub(P).multiplyScalar(Math.max(1,1.35/n.aspect)).add(P);o(...L.toArray(),...P.toArray())}),C("c-path").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(-5.8992,2.543,-8.8731),L=new e(-9.8791,3.893,-12.2198).sub(P).multiplyScalar(Math.max(1,1.2/n.aspect)).add(P);L.y+=l,P.y+=l,o(...L.toArray(),...P.toArray())}),C("c-flowers").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let P=new e(16.0026,1.64,2.9909),L=new e(16.4526,2.02,4.0409).sub(P).multiplyScalar(Math.max(1,1.2/n.aspect)).add(P);L.y=Math.max(L.y,g(L.x,L.z)+m.eye+.02),o(...L.toArray(),...P.toArray())});let F=await fetch("./front-approach-camera.json").then(P=>P.json());for(let P of[F])for(let L of["eye","target"])P[L][1]+=l;C("c-entry").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let P=new e(...F.target),L=new e(...F.eye).sub(P).multiplyScalar(Math.max(1,1.15/n.aspect)).add(P);o(...L.toArray(),...P.toArray())});for(let[P,L]of Object.entries(x.views)){let k=document.createElement("option");k.value=P,k.textContent=L.label,C("c-window-variant").appendChild(k)}C("c-window-variant").addEventListener("change",()=>{let P=x.views[C("c-window-variant").value];if(!P)return;r("fly"),n.clearViewOffset(),n.fov=i.fov0=P.fov,n.updateProjectionMatrix();let L=[...P.eye];L[1]=Math.max(L[1],g(L[0],L[2])+m.eye+.05),o(...L,...P.target)});let O=await fetch("./joinery-cameras.json").then(P=>P.json());for(let P of Object.values(O))for(let L of["eye","target"])P[L][1]+=l;C("c-eave").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let P=O.window_angle;o(P.eye[0]+.8,P.eye[1]+1.15,P.eye[2]+1.3,P.target[0],P.target[1]+1.15,P.target[2])});for(let P of["window_detail","window_angle","door_detail"])C("c-"+P.replace("_","-")).addEventListener("click",()=>{let L=O[P];r("fly"),n.clearViewOffset(),n.fov=i.fov0=L.fov,n.updateProjectionMatrix();let k=[...L.eye];k[1]=Math.max(k[1],g(k[0],k[2])+m.eye+.05),o(...k,...L.target)});let I=await fetch("./review-cameras.json?v="+A).then(P=>P.json());C("c-review").addEventListener("change",()=>{let P=C("c-review").value;if(P==="hero_camera"){a();return}if(P==="tree_reference"){r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(24.1758/240)),n.updateProjectionMatrix(),o(23.94,8.462,116.774,28.936,8.462,-3.122);return}let L=I[P];L&&(r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(36/(2*L.lens*n.aspect))),n.updateProjectionMatrix(),o(...L.eye,...L.target))}),C("c-plaster").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(11.65,5.15,-6.06,5.665,3.64,-6.579)}),C("c-bench").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(17,4,5.2,23.42,2.2,3.25)}),C("c-tree").addEventListener("click",()=>{r("fly");let P=new e(30,8,-.5),L=new e(26,10.5,32).sub(P).multiplyScalar(Math.max(1,.8/n.aspect)).add(P);L.y+=b.offsets.WEB_HM_tree_og,P.y+=b.offsets.WEB_HM_tree_og,o(...L.toArray(),...P.toArray())}),C("c-laundry").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let P=new e(11.5,3.25,-7.7),L=new e(10.5,3.7,1.2).sub(P).multiplyScalar(Math.max(1,1.3/n.aspect)).add(P);L.y+=b.offsets.WEB_HM_clothes_line,P.y+=b.offsets.WEB_HM_clothes_line,o(...L.toArray(),...P.toArray())}),C("c-tree-side").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let P=new e(31,9.8,-3),L=new e(51,11,-2).sub(P).multiplyScalar(Math.max(1,.8/n.aspect)).add(P);L.y+=b.offsets.WEB_HM_tree_og,P.y+=b.offsets.WEB_HM_tree_og,o(...L.toArray(),...P.toArray())}),C("c-twigs").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(29.2,12.6,3.8,30.5,12.5,-.6)}),C("c-bark").addEventListener("click",()=>{r("fly"),o(25.5,5,8.5,29.2,4.5,-2.3)}),C("c-leaves").addEventListener("click",()=>{r("fly"),o(27,13,9,31,13,-.5)}),C("c-on").addEventListener("change",()=>_(C("c-on").checked)),C("c-sun-view").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=40,n.updateProjectionMatrix();let P=n.position.clone(),L=P.clone().addScaledVector(M.value,100);o(...P.toArray(),...L.toArray())}),C("c-light").addEventListener("change",()=>E(C("c-light").value==="sun"))}var j1,Tv=vb(()=>{j1=`<details id="panel" class="hud-panel">
  <summary>look</summary>
  <div class="row"><label>painterly</label><input id="c-on" type="checkbox" checked></div>
  <div class="row"><label>kuwahara</label><input id="c-mix" type="range" min="0" max="1" step="0.05" value="0.12"><output id="o-mix">0.12</output></div>
  <div class="row"><label>radius</label><input id="c-rad" type="range" min="1" max="6" step="1" value="4"><output id="o-rad">4</output></div>
  <div class="row"><label>ink line</label><input id="c-edge" type="range" min="0" max="1" step="0.05" value="0.35"><output id="o-edge">0.35</output></div>
  <div class="row"><label>grain</label><input id="c-grain" type="range" min="0" max="0.1" step="0.005" value="0.04"><output id="o-grain">0.04</output></div>
  <div class="row"><label>saturation</label><input id="c-sat" type="range" min="0.9" max="1.3" step="0.01" value="1.10"><output id="o-sat">1.10</output></div>
  <div class="row"><label>sepia</label><input id="c-sepia" type="range" min="0" max="1" step="0.05" value="0.10"><output id="o-sepia">0.10</output></div>
  <div class="row"><label>cel shading</label><input id="c-cel" type="range" min="0" max="1" step="0.05" value="0"><output id="o-cel">0.00</output></div>
  <div class="row"><label>wind</label><input id="c-wind" type="checkbox" checked></div>
  <div class="row"><label>wind m/s</label><input id="c-wspd" type="range" min="0" max="8" step="0.1" value="1.8"><output id="o-wspd">1.8</output></div>
  <div class="row"><label>lighting</label><select id="c-light">
    <option value="painted">painted (baked)</option>
    <option value="sun" selected>live sun</option>
  </select></div>
  <div class="row"><label>sun angle</label><input id="c-sun" type="range" min="0" max="1" step="0.01" value="0.5"><output id="o-sun">0.50</output><button id="c-sun-view" type="button">look at sun</button></div>
  <div class="row"><label>camera</label><select id="c-cam"><option value="fly">fly (WASD)</option><option value="orbit">orbit</option></select></div>
  <div class="row"><label>visit</label><button id="c-shore" type="button">boat &amp; pier</button><button id="c-pier" type="button">pier supports</button><button id="c-hero" type="button">hero</button><button id="c-laundry" type="button">laundry</button></div>
  <div class="row"><label>cottage</label><button id="c-house" type="button">facade detail</button><button id="c-rear" type="button">rear facade</button><button id="c-plaster" type="button">plaster corner</button><button id="c-gable" type="button">gable side</button><button id="c-rear-detail" type="button">rear joinery</button><button id="c-chimney" type="button">chimney</button><button id="c-eave" type="button">roof edge</button><button id="c-chimney-back" type="button">chimney reverse</button></div>
  <div class="row"><label for="c-window-variant">windows</label><select id="c-window-variant"><option value="">choose an opening</option></select></div>
  <div class="row"><label>joinery</label><button id="c-window-detail" type="button">window detail</button><button id="c-window-angle" type="button">window angle</button><button id="c-door-detail" type="button">door detail</button></div>
  <div class="row"><label>meadow</label><button id="c-flowers" type="button">flowers</button><button id="c-path" type="button">garden approach</button><button id="c-entry" type="button">front approach</button></div>
  <div class="row"><label>review</label><select id="c-review"><option value="">choose view</option><option value="hero_camera">hero comparison</option><option value="corner_front_west">front west corner</option><option value="corner_front_east">front east corner</option><option value="corner_rear_east">rear east corner</option><option value="corner_rear_west">rear west corner</option><option value="flower_meadow">flower and grass motion</option><option value="shore_near">shoreline near</option><option value="shore_far">shoreline distant zoom</option><option value="front_steps">front doorstep</option><option value="tree_reference">tree reference scale</option><option value="west_gable">west gable paint</option><option value="west_seam">west gable seam</option><option value="rear_crafted">rear crafted facade</option><option value="sill_flowers">kitchen flower box</option><option value="orbit_000">orbit 000</option><option value="orbit_045">orbit 045</option><option value="orbit_090">orbit 090</option><option value="orbit_135">orbit 135</option><option value="orbit_180">orbit 180</option><option value="orbit_225">orbit 225</option><option value="orbit_270">orbit 270</option><option value="orbit_315">orbit 315</option></select></div>
  <div class="row"><label>tree</label><button id="c-bench" type="button">bench</button><button id="c-tree" type="button">whole tree</button><button id="c-bark" type="button">bark</button><button id="c-leaves" type="button">leaves</button><button id="c-tree-side" type="button">tree side</button><button id="c-twigs" type="button">twigs &amp; leaves</button></div>
  <div class="row"><label>horizon</label><input id="c-hz" type="range" min="0" max="0.30" step="0.001" value="0.122"><output id="o-hz">0.122</output></div>
  <div class="row"><label>paint cone</label><input id="c-hcone" type="range" min="5" max="45" step="1" value="20"><output id="o-hcone">20</output></div>
  <div class="row"><label>paint fade</label><input id="c-hnear" type="range" min="0" max="0.8" step="0.01" value="0.45"><output id="o-hnear">0.45</output></div>
</details>`});var Xt={};hp(Xt,{ACESFilmicToneMapping:()=>yg,AddEquation:()=>ji,AddOperation:()=>vg,AdditiveAnimationBlendMode:()=>Ud,AdditiveBlending:()=>Bh,AgXToneMapping:()=>Mg,AlphaFormat:()=>Cg,AlwaysCompare:()=>Xg,AlwaysDepth:()=>hg,AlwaysStencilFunc:()=>mu,AmbientLight:()=>ol,AnimationAction:()=>vl,AnimationClip:()=>Pi,AnimationLoader:()=>Vu,AnimationMixer:()=>id,AnimationObjectGroup:()=>nd,AnimationUtils:()=>US,ArcCurve:()=>Lc,ArrayCamera:()=>Sc,ArrowHelper:()=>Sd,AttachedBindMode:()=>Vh,Audio:()=>ml,AudioAnalyser:()=>ed,AudioContext:()=>to,AudioListener:()=>Zu,AudioLoader:()=>Ju,AxesHelper:()=>Ed,BackSide:()=>Gt,BasicDepthPacking:()=>kg,BasicShadowMap:()=>_b,BatchedMesh:()=>Rc,Bone:()=>zr,BooleanKeyframeTrack:()=>Ri,Box2:()=>ud,Box3:()=>dt,Box3Helper:()=>wd,BoxGeometry:()=>Or,BoxHelper:()=>yd,BufferAttribute:()=>Oe,BufferGeometry:()=>Ve,BufferGeometryLoader:()=>fl,ByteType:()=>Ag,Cache:()=>_i,Camera:()=>Ps,CameraHelper:()=>_d,CanvasTexture:()=>Ba,CapsuleGeometry:()=>Uc,CatmullRomCurve3:()=>Dc,CineonToneMapping:()=>_g,CircleGeometry:()=>Bs,ClampToEdgeWrapping:()=>It,Clock:()=>pl,Color:()=>xe,ColorKeyframeTrack:()=>$a,ColorManagement:()=>rt,CompressedArrayTexture:()=>Ou,CompressedCubeTexture:()=>Uu,CompressedTexture:()=>Us,CompressedTextureLoader:()=>Gu,ConeGeometry:()=>kc,ConstantAlphaFactor:()=>og,ConstantColorFactor:()=>sg,CubeCamera:()=>wc,CubeReflectionMapping:()=>Mi,CubeRefractionMapping:()=>Yi,CubeTexture:()=>Ur,CubeTextureLoader:()=>Wu,CubeUVReflectionMapping:()=>Ws,CubicBezierCurve:()=>za,CubicBezierCurve3:()=>Ic,CubicInterpolant:()=>rl,CullFaceBack:()=>kh,CullFaceFront:()=>Wm,CullFaceFrontBack:()=>xb,CullFaceNone:()=>Gm,Curve:()=>wn,CurvePath:()=>Oc,CustomBlending:()=>qm,CustomToneMapping:()=>wg,CylinderGeometry:()=>$i,Cylindrical:()=>hd,Data3DTexture:()=>Da,DataArrayTexture:()=>Ts,DataTexture:()=>un,DataTextureLoader:()=>qu,DataUtils:()=>Hd,DecrementStencilOp:()=>Rb,DecrementWrapStencilOp:()=>Pb,DefaultLoadingManager:()=>u0,DepthFormat:()=>Dr,DepthStencilFormat:()=>Es,DepthTexture:()=>Br,DetachedBindMode:()=>Eg,DirectionalLight:()=>er,DirectionalLightHelper:()=>xd,DiscreteInterpolant:()=>sl,DisplayP3ColorSpace:()=>yl,DodecahedronGeometry:()=>Bc,DoubleSide:()=>Vt,DstAlphaFactor:()=>eg,DstColorFactor:()=>ng,DynamicCopyUsage:()=>qb,DynamicDrawUsage:()=>Bb,DynamicReadUsage:()=>Vb,EdgesGeometry:()=>zc,EllipseCurve:()=>ks,EqualCompare:()=>Vg,EqualDepth:()=>dg,EqualStencilFunc:()=>Nb,EquirectangularReflectionMapping:()=>wa,EquirectangularRefractionMapping:()=>Ma,Euler:()=>_n,EventDispatcher:()=>xn,ExtrudeGeometry:()=>Hc,FileLoader:()=>fn,Float16BufferAttribute:()=>Mu,Float32BufferAttribute:()=>Ce,FloatType:()=>ln,Fog:()=>Ls,FogExp2:()=>Ec,FramebufferTexture:()=>Fu,FrontSide:()=>kn,Frustum:()=>kr,GLBufferAttribute:()=>od,GLSL1:()=>jb,GLSL3:()=>Ca,GreaterCompare:()=>Gg,GreaterDepth:()=>pg,GreaterEqualCompare:()=>qg,GreaterEqualDepth:()=>fg,GreaterEqualStencilFunc:()=>kb,GreaterStencilFunc:()=>Ob,GridHelper:()=>vd,Group:()=>hn,HalfFloatType:()=>Xn,HemisphereLight:()=>zs,HemisphereLightHelper:()=>gd,IcosahedronGeometry:()=>Vc,ImageBitmapLoader:()=>eo,ImageLoader:()=>qr,ImageUtils:()=>_c,IncrementStencilOp:()=>Tb,IncrementWrapStencilOp:()=>Cb,InstancedBufferAttribute:()=>Vn,InstancedBufferGeometry:()=>dl,InstancedInterleavedBuffer:()=>ad,InstancedMesh:()=>Ns,Int16BufferAttribute:()=>yu,Int32BufferAttribute:()=>wu,Int8BufferAttribute:()=>bu,IntType:()=>Pd,InterleavedBuffer:()=>Hn,InterleavedBufferAttribute:()=>yn,Interpolant:()=>Ti,InterpolateDiscrete:()=>Fr,InterpolateLinear:()=>Ji,InterpolateSmooth:()=>vc,InvertStencilOp:()=>Lb,KeepStencilOp:()=>Sr,KeyframeTrack:()=>Mn,LOD:()=>Tc,LatheGeometry:()=>qa,Layers:()=>Rs,LessCompare:()=>Hg,LessDepth:()=>ug,LessEqualCompare:()=>Bd,LessEqualDepth:()=>ya,LessEqualStencilFunc:()=>Fb,LessStencilFunc:()=>Ib,Light:()=>ri,LightProbe:()=>hl,Line:()=>Cn,Line3:()=>dd,LineBasicMaterial:()=>Ut,LineCurve:()=>Ha,LineCurve3:()=>Nc,LineDashedMaterial:()=>il,LineLoop:()=>Fs,LineSegments:()=>dn,LinearDisplayP3ColorSpace:()=>so,LinearFilter:()=>st,LinearInterpolant:()=>Ja,LinearMipMapLinearFilter:()=>Sb,LinearMipMapNearestFilter:()=>Mb,LinearMipmapLinearFilter:()=>vn,LinearMipmapNearestFilter:()=>Lr,LinearSRGBColorSpace:()=>kt,LinearToneMapping:()=>bg,LinearTransfer:()=>Ea,Loader:()=>qt,LoaderUtils:()=>qn,LoadingManager:()=>Za,LoopOnce:()=>Fg,LoopPingPong:()=>Ug,LoopRepeat:()=>Og,LuminanceAlphaFormat:()=>Dg,LuminanceFormat:()=>Lg,MOUSE:()=>tr,Material:()=>Tt,MaterialLoader:()=>ul,MathUtils:()=>en,Matrix3:()=>Ge,Matrix4:()=>De,MaxEquation:()=>Ym,Mesh:()=>it,MeshBasicMaterial:()=>Dt,MeshDepthMaterial:()=>ti,MeshDistanceMaterial:()=>Oa,MeshLambertMaterial:()=>tl,MeshMatcapMaterial:()=>nl,MeshNormalMaterial:()=>el,MeshPhongMaterial:()=>Zc,MeshPhysicalMaterial:()=>sn,MeshStandardMaterial:()=>Qi,MeshToonMaterial:()=>Qc,MinEquation:()=>Km,MirroredRepeatWrapping:()=>Nr,MixOperation:()=>gg,MultiplyBlending:()=>Hh,MultiplyOperation:()=>no,NearestFilter:()=>_t,NearestMipMapLinearFilter:()=>wb,NearestMipMapNearestFilter:()=>yb,NearestMipmapLinearFilter:()=>Ki,NearestMipmapNearestFilter:()=>io,NeutralToneMapping:()=>Sg,NeverCompare:()=>zg,NeverDepth:()=>lg,NeverStencilFunc:()=>Db,NoBlending:()=>yi,NoColorSpace:()=>On,NoToneMapping:()=>Un,NormalAnimationBlendMode:()=>_l,NormalBlending:()=>Pr,NotEqualCompare:()=>Wg,NotEqualDepth:()=>mg,NotEqualStencilFunc:()=>Ub,NumberKeyframeTrack:()=>ni,Object3D:()=>nt,ObjectLoader:()=>Yu,ObjectSpaceNormalMap:()=>Bg,OctahedronGeometry:()=>Ya,OneFactor:()=>$m,OneMinusConstantAlphaFactor:()=>cg,OneMinusConstantColorFactor:()=>ag,OneMinusDstAlphaFactor:()=>tg,OneMinusDstColorFactor:()=>ig,OneMinusSrcAlphaFactor:()=>xc,OneMinusSrcColorFactor:()=>Qm,OrthographicCamera:()=>ei,P3Primaries:()=>Ta,PCFShadowMap:()=>Rd,PCFSoftShadowMap:()=>bl,PMREMGenerator:()=>Fa,Path:()=>Vr,PerspectiveCamera:()=>vt,Plane:()=>cn,PlaneGeometry:()=>Ei,PlaneHelper:()=>Md,PointLight:()=>Vs,PointLightHelper:()=>md,Points:()=>Os,PointsMaterial:()=>Hr,PolarGridHelper:()=>bd,PolyhedronGeometry:()=>Zi,PositionalAudio:()=>Qu,PropertyBinding:()=>ct,PropertyMixer:()=>gl,QuadraticBezierCurve:()=>Va,QuadraticBezierCurve3:()=>Ga,Quaternion:()=>ht,QuaternionKeyframeTrack:()=>Gn,QuaternionLinearInterpolant:()=>al,RED_GREEN_RGTC2_Format:()=>fu,RED_RGTC1_Format:()=>Ng,REVISION:()=>bb,RGBADepthPacking:()=>Xr,RGBAFormat:()=>Kt,RGBAIntegerFormat:()=>Od,RGBA_ASTC_10x10_Format:()=>ou,RGBA_ASTC_10x5_Format:()=>ru,RGBA_ASTC_10x6_Format:()=>su,RGBA_ASTC_10x8_Format:()=>au,RGBA_ASTC_12x10_Format:()=>cu,RGBA_ASTC_12x12_Format:()=>lu,RGBA_ASTC_4x4_Format:()=>Jh,RGBA_ASTC_5x4_Format:()=>$h,RGBA_ASTC_5x5_Format:()=>Zh,RGBA_ASTC_6x5_Format:()=>Qh,RGBA_ASTC_6x6_Format:()=>eu,RGBA_ASTC_8x5_Format:()=>tu,RGBA_ASTC_8x6_Format:()=>nu,RGBA_ASTC_8x8_Format:()=>iu,RGBA_BPTC_Format:()=>gc,RGBA_ETC2_EAC_Format:()=>Yh,RGBA_PVRTC_2BPPV1_Format:()=>Xh,RGBA_PVRTC_4BPPV1_Format:()=>qh,RGBA_S3TC_DXT1_Format:()=>fc,RGBA_S3TC_DXT3_Format:()=>pc,RGBA_S3TC_DXT5_Format:()=>mc,RGBFormat:()=>Pg,RGB_BPTC_SIGNED_Format:()=>hu,RGB_BPTC_UNSIGNED_Format:()=>uu,RGB_ETC1_Format:()=>jh,RGB_ETC2_Format:()=>Kh,RGB_PVRTC_2BPPV1_Format:()=>Wh,RGB_PVRTC_4BPPV1_Format:()=>Gh,RGB_S3TC_DXT1_Format:()=>dc,RGFormat:()=>Ig,RGIntegerFormat:()=>Fd,RawShaderMaterial:()=>$c,Ray:()=>Qn,Raycaster:()=>cd,Rec709Primaries:()=>Aa,RectAreaLight:()=>cl,RedFormat:()=>Id,RedIntegerFormat:()=>Nd,ReinhardToneMapping:()=>xg,RenderTarget:()=>yc,RepeatWrapping:()=>Bn,ReplaceStencilOp:()=>Ab,ReverseSubtractEquation:()=>jm,RingGeometry:()=>Gc,SIGNED_RED_GREEN_RGTC2_Format:()=>pu,SIGNED_RED_RGTC1_Format:()=>du,SRGBColorSpace:()=>mt,SRGBTransfer:()=>gt,Scene:()=>Ai,ShaderChunk:()=>He,ShaderLib:()=>Fn,ShaderMaterial:()=>Wt,ShadowMaterial:()=>Jc,Shape:()=>wi,ShapeGeometry:()=>Wc,ShapePath:()=>Ad,ShapeUtils:()=>Zn,ShortType:()=>Tg,Skeleton:()=>Is,SkeletonHelper:()=>pd,SkinnedMesh:()=>Ds,Source:()=>bi,Sphere:()=>Mt,SphereGeometry:()=>Wr,Spherical:()=>Gs,SphericalHarmonics3:()=>ll,SplineCurve:()=>Wa,SpotLight:()=>Hs,SpotLightHelper:()=>fd,Sprite:()=>Ac,SpriteMaterial:()=>ka,SrcAlphaFactor:()=>bc,SrcAlphaSaturateFactor:()=>rg,SrcColorFactor:()=>Zm,StaticCopyUsage:()=>Wb,StaticDrawUsage:()=>Ra,StaticReadUsage:()=>Hb,StereoCamera:()=>$u,StreamCopyUsage:()=>Xb,StreamDrawUsage:()=>zb,StreamReadUsage:()=>Gb,StringKeyframeTrack:()=>Ci,SubtractEquation:()=>Xm,SubtractiveBlending:()=>zh,TOUCH:()=>nr,TangentSpaceNormalMap:()=>ir,TetrahedronGeometry:()=>qc,Texture:()=>St,TextureLoader:()=>Wn,TorusGeometry:()=>Xc,TorusKnotGeometry:()=>jc,Triangle:()=>xi,TriangleFanDrawMode:()=>Xs,TriangleStripDrawMode:()=>ro,TrianglesDrawMode:()=>kd,TubeGeometry:()=>Kc,UVMapping:()=>xl,Uint16BufferAttribute:()=>Ia,Uint32BufferAttribute:()=>Na,Uint8BufferAttribute:()=>xu,Uint8ClampedBufferAttribute:()=>_u,Uniform:()=>rd,UniformsGroup:()=>sd,UniformsLib:()=>Me,UniformsUtils:()=>wl,UnsignedByteType:()=>zn,UnsignedInt248Type:()=>qs,UnsignedInt5999Type:()=>Rg,UnsignedIntType:()=>Si,UnsignedShort4444Type:()=>Ld,UnsignedShort5551Type:()=>Dd,UnsignedShortType:()=>Cd,VSMShadowMap:()=>Jn,Vector2:()=>Y,Vector3:()=>T,Vector4:()=>et,VectorKeyframeTrack:()=>ii,VideoTexture:()=>Nu,WebGL3DRenderTarget:()=>vu,WebGLArrayRenderTarget:()=>gu,WebGLCoordinateSystem:()=>$n,WebGLCubeRenderTarget:()=>Mc,WebGLMultipleRenderTargets:()=>Td,WebGLRenderTarget:()=>Nt,WebGLRenderer:()=>Ua,WebGLUtils:()=>r0,WebGPUCoordinateSystem:()=>Pa,WireframeGeometry:()=>Yc,WrapAroundEnding:()=>Sa,ZeroCurvatureEnding:()=>Tr,ZeroFactor:()=>Jm,ZeroSlopeEnding:()=>Rr,ZeroStencilOp:()=>Eb,createCanvasElement:()=>Kg});var bb="164",tr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gm=0,kh=1,Wm=2,xb=3,_b=0,Rd=1,bl=2,Jn=3,kn=0,Gt=1,Vt=2,yi=0,Pr=1,Bh=2,zh=3,Hh=4,qm=5,ji=100,Xm=101,jm=102,Km=103,Ym=104,Jm=200,$m=201,Zm=202,Qm=203,bc=204,xc=205,eg=206,tg=207,ng=208,ig=209,rg=210,sg=211,ag=212,og=213,cg=214,lg=0,hg=1,ug=2,ya=3,dg=4,fg=5,pg=6,mg=7,no=0,gg=1,vg=2,Un=0,bg=1,xg=2,_g=3,yg=4,wg=5,Mg=6,Sg=7,Vh="attached",Eg="detached",xl=300,Mi=301,Yi=302,wa=303,Ma=304,Ws=306,Bn=1e3,It=1001,Nr=1002,_t=1003,io=1004,yb=1004,Ki=1005,wb=1005,st=1006,Lr=1007,Mb=1007,vn=1008,Sb=1008,zn=1009,Ag=1010,Tg=1011,Cd=1012,Pd=1013,Si=1014,ln=1015,Xn=1016,Ld=1017,Dd=1018,qs=1020,Rg=35902,Cg=1021,Pg=1022,Kt=1023,Lg=1024,Dg=1025,Dr=1026,Es=1027,Id=1028,Nd=1029,Ig=1030,Fd=1031,Od=1033,dc=33776,fc=33777,pc=33778,mc=33779,Gh=35840,Wh=35841,qh=35842,Xh=35843,jh=36196,Kh=37492,Yh=37496,Jh=37808,$h=37809,Zh=37810,Qh=37811,eu=37812,tu=37813,nu=37814,iu=37815,ru=37816,su=37817,au=37818,ou=37819,cu=37820,lu=37821,gc=36492,hu=36494,uu=36495,Ng=36283,du=36284,fu=36285,pu=36286,Fg=2200,Og=2201,Ug=2202,Fr=2300,Ji=2301,vc=2302,Tr=2400,Rr=2401,Sa=2402,_l=2500,Ud=2501,kd=0,ro=1,Xs=2,kg=3200,Xr=3201,ir=0,Bg=1,On="",mt="srgb",kt="srgb-linear",yl="display-p3",so="display-p3-linear",Ea="linear",gt="srgb",Aa="rec709",Ta="p3",Eb=0,Sr=7680,Ab=7681,Tb=7682,Rb=7683,Cb=34055,Pb=34056,Lb=5386,Db=512,Ib=513,Nb=514,Fb=515,Ob=516,Ub=517,kb=518,mu=519,zg=512,Hg=513,Vg=514,Bd=515,Gg=516,Wg=517,qg=518,Xg=519,Ra=35044,Bb=35048,zb=35040,Hb=35045,Vb=35049,Gb=35041,Wb=35046,qb=35050,Xb=35042,jb="100",Ca="300 es",$n=2e3,Pa=2001,xn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],up=1234567,Ir=Math.PI/180,As=180/Math.PI;function bn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function zd(s,e){return(s%e+e)%e}function Kb(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Yb(s,e,t){return s!==e?(t-s)/(e-s):0}function va(s,e,t){return(1-t)*s+t*e}function Jb(s,e,t,n){return va(s,e,1-Math.exp(-t*n))}function $b(s,e=1){return e-Math.abs(zd(s,e*2)-e)}function Zb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ex(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tx(s,e){return s+Math.random()*(e-s)}function nx(s){return s*(.5-Math.random())}function ix(s){s!==void 0&&(up=s);let e=up+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rx(s){return s*Ir}function sx(s){return s*As}function ax(s){return(s&s-1)===0&&s!==0}function ox(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lx(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var en={DEG2RAD:Ir,RAD2DEG:As,generateUUID:bn,clamp:At,euclideanModulo:zd,mapLinear:Kb,inverseLerp:Yb,lerp:va,damp:Jb,pingpong:$b,smoothstep:Zb,smootherstep:Qb,randInt:ex,randFloat:tx,randFloatSpread:nx,seededRandom:ix,degToRad:rx,radToDeg:sx,isPowerOfTwo:ax,ceilPowerOfTwo:ox,floorPowerOfTwo:cx,setQuaternionFromProperEuler:lx,normalize:Ye,denormalize:rn},Y=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],v=i[0],m=i[3],g=i[6],x=i[1],b=i[4],_=i[7],E=i[2],M=i[5],A=i[8];return r[0]=a*v+o*x+l*E,r[3]=a*m+o*b+l*M,r[6]=a*g+o*_+l*A,r[1]=c*v+h*x+u*E,r[4]=c*m+h*b+u*M,r[7]=c*g+h*_+u*A,r[2]=d*v+f*x+p*E,r[5]=d*m+f*b+p*M,r[8]=d*g+f*_+p*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,p=t*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eh=new Ge;function jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var hx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function _s(s,e){return new hx[s](e)}function La(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kg(){let s=La("canvas");return s.style.display="block",s}var dp={};function Yg(s){s in dp||(dp[s]=!0,console.warn(s))}var fp=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pp=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_o={[kt]:{transfer:Ea,primaries:Aa,toReference:s=>s,fromReference:s=>s},[mt]:{transfer:gt,primaries:Aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[so]:{transfer:Ea,primaries:Ta,toReference:s=>s.applyMatrix3(pp),fromReference:s=>s.applyMatrix3(fp)},[yl]:{transfer:gt,primaries:Ta,toReference:s=>s.convertSRGBToLinear().applyMatrix3(pp),fromReference:s=>s.applyMatrix3(fp).convertLinearToSRGB()}},ux=new Set([kt,so]),rt={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!ux.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=_o[e].toReference,i=_o[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return _o[s].primaries},getTransfer:function(s){return s===On?Ea:_o[s].transfer}};function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function th(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Zr,_c=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zr===void 0&&(Zr=La("canvas")),Zr.width=e.width,Zr.height=e.height;let n=Zr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=La("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ms(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dx=0,bi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(nh(i[a].image)):r.push(nh(i[a]))}else r=nh(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function nh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_c.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var fx=0,St=class s extends xn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=It,i=It,r=st,a=vn,o=Kt,l=zn,c=s.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=bn(),this.name="",this.source=new bi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case It:e.x=e.x<0?0:1;break;case Nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case It:e.y=e.y<0?0:1;break;case Nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=xl;St.DEFAULT_ANISOTROPY=1;var et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(f+1)/2,E=(g+1)/2,M=(h+d)/4,A=(u+v)/4,C=(p+m)/4;return b>_&&b>E?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=M/n,r=A/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=M/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=A/r,i=C/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends xn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:st,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new St(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new bi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ts=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},gu=class extends Nt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ts(null,e,t,n),this.texture.isRenderTargetTexture=!0}},Da=class extends St{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_t,this.minFilter=_t,this.wrapR=It,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vu=class extends Nt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Da(null,e,t,n),this.texture.isRenderTargetTexture=!0}},ht=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==p){let m=1-o,g=l*d+c*f+h*p+u*v,x=g>=0?1:-1,b=1-g*g;if(b>Number.EPSILON){let E=Math.sqrt(b),M=Math.atan2(E,g*x);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E}let _=o*x;if(l=l*m+d*_,c=c*m+f*_,h=h*m+p*_,u=u*m+v*_,m===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*f-c*d,e[t+1]=l*p+h*d+c*u-o*f,e[t+2]=c*p+h*f+o*d-l*u,e[t+3]=h*p-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ih=new T,mp=new ht,dt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),wo.subVectors(this.max,ia),Qr.subVectors(e.a,ia),es.subVectors(e.b,ia),ts.subVectors(e.c,ia),Bi.subVectors(es,Qr),zi.subVectors(ts,es),dr.subVectors(Qr,ts);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-dr.z,dr.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,dr.z,0,-dr.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-dr.y,dr.x,0];return!rh(t,Qr,es,ts,wo)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,Qr,es,ts,wo))?!1:(Mo.crossVectors(Bi,zi),t=[Mo.x,Mo.y,Mo.z],rh(t,Qr,es,ts,wo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new T,new T,new T,new T,new T,new T,new T,new T],Dn=new T,yo=new dt,Qr=new T,es=new T,ts=new T,Bi=new T,zi=new T,dr=new T,ia=new T,wo=new T,Mo=new T,fr=new T;function rh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fr.fromArray(s,r);let o=i.x*Math.abs(fr.x)+i.y*Math.abs(fr.y)+i.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),h=n.dot(fr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var px=new dt,ra=new T,sh=new T,Mt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):px.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);let t=ra.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ra,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(sh)),this.expandByPoint(ra.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new T,ah=new T,So=new T,Hi=new T,oh=new T,Eo=new T,ch=new T,Qn=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ah.copy(e).add(t).multiplyScalar(.5),So.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(ah);let r=e.distanceTo(t)*.5,a=-this.direction.dot(So),o=Hi.dot(this.direction),l=-Hi.dot(So),c=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,f,p;if(h>0)if(u=a*l-o,d=a*o-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ah).addScaledVector(So,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),i=di.dot(di)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,r){oh.subVectors(t,e),Eo.subVectors(n,e),ch.crossVectors(oh,Eo);let a=this.direction.dot(ch),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let l=o*this.direction.dot(Eo.crossVectors(Hi,Eo));if(l<0)return null;let c=o*this.direction.dot(oh.cross(Hi));if(c<0||l+c>a)return null;let h=-o*Hi.dot(ch);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,p,v,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,v,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,p=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=p*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+p,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-p,t[2]=p*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,n){let i=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Vi.crossVectors(n,mn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Vi.crossVectors(n,mn)),Vi.normalize(),Ao.crossVectors(mn,Vi),i[0]=Vi.x,i[4]=Ao.x,i[8]=mn.x,i[1]=Vi.y,i[5]=Ao.y,i[9]=mn.y,i[2]=Vi.z,i[6]=Ao.z,i[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],v=n[6],m=n[10],g=n[14],x=n[3],b=n[7],_=n[11],E=n[15],M=i[0],A=i[4],C=i[8],y=i[12],w=i[1],F=i[5],O=i[9],I=i[13],P=i[2],L=i[6],k=i[10],X=i[14],U=i[3],V=i[7],j=i[11],ie=i[15];return r[0]=a*M+o*w+l*P+c*U,r[4]=a*A+o*F+l*L+c*V,r[8]=a*C+o*O+l*k+c*j,r[12]=a*y+o*I+l*X+c*ie,r[1]=h*M+u*w+d*P+f*U,r[5]=h*A+u*F+d*L+f*V,r[9]=h*C+u*O+d*k+f*j,r[13]=h*y+u*I+d*X+f*ie,r[2]=p*M+v*w+m*P+g*U,r[6]=p*A+v*F+m*L+g*V,r[10]=p*C+v*O+m*k+g*j,r[14]=p*y+v*I+m*X+g*ie,r[3]=x*M+b*w+_*P+E*U,r[7]=x*A+b*F+_*L+E*V,r[11]=x*C+b*O+_*k+E*j,r[15]=x*y+b*I+_*X+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+v*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+g*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=u*m*c-v*d*c+v*l*f-o*m*f-u*l*g+o*d*g,b=p*d*c-h*m*c-p*l*f+a*m*f+h*l*g-a*d*g,_=h*v*c-p*u*c+p*o*f-a*v*f-h*o*g+a*u*g,E=p*u*l-h*v*l-p*o*d+a*v*d+h*o*m-a*u*m,M=t*x+n*b+i*_+r*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/M;return e[0]=x*A,e[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*g-n*d*g)*A,e[2]=(o*m*r-v*l*r+v*i*c-n*m*c-o*i*g+n*l*g)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*A,e[4]=b*A,e[5]=(h*m*r-p*d*r+p*i*f-t*m*f-h*i*g+t*d*g)*A,e[6]=(p*l*r-a*m*r-p*i*c+t*m*c+a*i*g-t*l*g)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*A,e[8]=_*A,e[9]=(p*u*r-h*v*r-p*n*f+t*v*f+h*n*g-t*u*g)*A,e[10]=(a*v*r-p*o*r+p*n*c-t*v*c-a*n*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=E*A,e[13]=(h*v*i-p*u*i+p*n*d-t*v*d-h*n*m+t*u*m)*A,e[14]=(p*o*i-a*v*i-p*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,p=r*u,v=a*h,m=a*u,g=o*u,x=l*c,b=l*h,_=l*u,E=n.x,M=n.y,A=n.z;return i[0]=(1-(v+g))*E,i[1]=(f+_)*E,i[2]=(p-b)*E,i[3]=0,i[4]=(f-_)*M,i[5]=(1-(d+g))*M,i[6]=(m+x)*M,i[7]=0,i[8]=(p+b)*A,i[9]=(m-x)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=ns.set(i[0],i[1],i[2]).length(),a=ns.set(i[4],i[5],i[6]).length(),o=ns.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);let c=1/r,h=1/a,u=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=$n){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,p;if(o===$n)f=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Pa)f=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=$n){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h,p,v;if(o===$n)p=(a+r)*u,v=-2*u;else if(o===Pa)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ns=new T,In=new De,mx=new T(0,0,0),gx=new T(1,1,1),Vi=new T,Ao=new T,mn=new T,gp=new De,vp=new ht,_n=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var Rs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vx=0,bp=new T,is=new ht,fi=new De,To=new T,sa=new T,bx=new T,xx=new ht,xp=new T(1,0,0),_p=new T(0,1,0),yp=new T(0,0,1),wp={type:"added"},_x={type:"removed"},rs={type:"childadded",child:null},lh={type:"childremoved",child:null},nt=class s extends xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new _n,n=new ht,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ge}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,t){return bp.copy(e).applyQuaternion(this.quaternion),this.position.add(bp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(sa,To,this.up):fi.lookAt(To,sa,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),is.setFromRotationMatrix(fi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wp),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_x),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wp),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};nt.DEFAULT_UP=new T(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new T,pi=new T,hh=new T,mi=new T,ss=new T,as=new T,Mp=new T,uh=new T,dh=new T,fh=new T,xi=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),pi.subVectors(n,t),hh.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(pi),l=Nn.dot(hh),c=pi.dot(pi),h=pi.dot(hh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),pi.subVectors(e,t),Nn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Nn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ss.subVectors(i,n),as.subVectors(r,n),uh.subVectors(e,n);let l=ss.dot(uh),c=as.dot(uh);if(l<=0&&c<=0)return t.copy(n);dh.subVectors(e,i);let h=ss.dot(dh),u=as.dot(dh);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ss,a);fh.subVectors(e,r);let f=ss.dot(fh),p=as.dot(fh);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(as,o);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Mp.subVectors(r,i),o=(u-h)/(u-h+(f-p)),t.copy(i).addScaledVector(Mp,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(ss,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function ph(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=zd(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ph(a,r,e+1/3),this.g=ph(a,r,e),this.b=ph(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Jg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=th(e.r),this.g=th(e.g),this.b=th(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return rt.fromWorkingColorSpace(Zt.copy(this),e),Math.round(At(Zt.r*255,0,255))*65536+Math.round(At(Zt.g*255,0,255))*256+Math.round(At(Zt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,i=Zt.g,r=Zt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=mt){rt.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,i=Zt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(Ro);let n=va(Gi.h,Ro.h,t),i=va(Gi.s,Ro.s,t),r=va(Gi.l,Ro.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new xe;xe.NAMES=Jg;var yx=0,Tt=class extends xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=bn(),this.name="",this.type="Material",this.blending=Pr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=xc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dt=class extends Tt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vi=wx();function wx(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function on(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=At(s,-65504,65504),vi.floatView[0]=s;let e=vi.uint32View[0],t=e>>23&511;return vi.baseTable[t]+((e&8388607)>>vi.shiftTable[t])}function ma(s){let e=s>>10;return vi.uint32View[0]=vi.mantissaTable[vi.offsetTable[e]+(s&1023)]+vi.exponentTable[e],vi.floatView[0]}var Hd={toHalfFloat:on,fromHalfFloat:ma},Lt=new T,Co=new Y,Oe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Co.fromBufferAttribute(this,t),Co.applyMatrix3(e),this.setXY(t,Co.x,Co.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ra&&(e.usage=this.usage),e}},bu=class extends Oe{constructor(e,t,n){super(new Int8Array(e),t,n)}},xu=class extends Oe{constructor(e,t,n){super(new Uint8Array(e),t,n)}},_u=class extends Oe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},yu=class extends Oe{constructor(e,t,n){super(new Int16Array(e),t,n)}},Ia=class extends Oe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},wu=class extends Oe{constructor(e,t,n){super(new Int32Array(e),t,n)}},Na=class extends Oe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Mu=class extends Oe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ma(this.array[e*this.itemSize]);return this.normalized&&(t=rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=on(t),this}getY(e){let t=ma(this.array[e*this.itemSize+1]);return this.normalized&&(t=rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=on(t),this}getZ(e){let t=ma(this.array[e*this.itemSize+2]);return this.normalized&&(t=rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=on(t),this}getW(e){let t=ma(this.array[e*this.itemSize+3]);return this.normalized&&(t=rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=on(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(i),this.array[e+3]=on(r),this}},Ce=class extends Oe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mx=0,Rn=new De,mh=new nt,os=new T,gn=new dt,aa=new dt,Ht=new T,Ve=class s extends xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jg(e)?Na:Ia)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,aa.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,aa.max),gn.expandByPoint(Ht)):(gn.expandByPoint(aa.min),gn.expandByPoint(aa.max))}gn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ht.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Ht.add(os)),i=Math.max(i,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new T,l[C]=new T;let c=new T,h=new T,u=new T,d=new Y,f=new Y,p=new Y,v=new T,m=new T;function g(C,y,w){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,y),p.fromBufferAttribute(r,w),h.sub(c),u.sub(c),f.sub(d),p.sub(d);let F=1/(f.x*p.y-p.x*f.y);isFinite(F)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(F),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(F),o[C].add(v),o[y].add(v),o[w].add(v),l[C].add(m),l[y].add(m),l[w].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,y=x.length;C<y;++C){let w=x[C],F=w.start,O=w.count;for(let I=F,P=F+O;I<P;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let b=new T,_=new T,E=new T,M=new T;function A(C){E.fromBufferAttribute(i,C),M.copy(E);let y=o[C];b.copy(y),b.sub(E.multiplyScalar(E.dot(y))).normalize(),_.crossVectors(M,y);let F=_.dot(l[C])<0?-1:1;a.setXYZW(C,b.x,b.y,b.z,F)}for(let C=0,y=x.length;C<y;++C){let w=x[C],F=w.start,O=w.count;for(let I=F,P=F+O;I<P;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sp=new De,pr=new Qn,Po=new Mt,Ep=new T,cs=new T,ls=new T,hs=new T,gh=new T,Lo=new T,Do=new Y,Io=new Y,No=new Y,Ap=new T,Tp=new T,Rp=new T,Fo=new T,Oo=new T,it=class extends nt{constructor(e=new Ve,t=new Dt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(gh.fromBufferAttribute(u,e),a?Lo.addScaledVector(gh,h):Lo.addScaledVector(gh.sub(t),h))}t.add(Lo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),pr.copy(e.ray).recast(e.near),!(Po.containsPoint(pr.origin)===!1&&(pr.intersectSphere(Po,Ep)===null||pr.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Sp.copy(r).invert(),pr.copy(e.ray).applyMatrix4(Sp),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,E=b;_<E;_+=3){let M=o.getX(_),A=o.getX(_+1),C=o.getX(_+2);i=Uo(this,g,e,n,c,h,u,M,A,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);i=Uo(this,a,e,n,c,h,u,x,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){let m=d[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,E=b;_<E;_+=3){let M=_,A=_+1,C=_+2;i=Uo(this,g,e,n,c,h,u,M,A,C),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=m,b=m+1,_=m+2;i=Uo(this,a,e,n,c,h,u,x,b,_),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Sx(s,e,t,n,i,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===kn,o),l===null)return null;Oo.copy(o),Oo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Oo);return c<t.near||c>t.far?null:{distance:c,point:Oo.clone(),object:s}}function Uo(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,cs),s.getVertexPosition(l,ls),s.getVertexPosition(c,hs);let h=Sx(s,e,t,n,cs,ls,hs,Fo);if(h){i&&(Do.fromBufferAttribute(i,o),Io.fromBufferAttribute(i,l),No.fromBufferAttribute(i,c),h.uv=xi.getInterpolation(Fo,cs,ls,hs,Do,Io,No,new Y)),r&&(Do.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,l),No.fromBufferAttribute(r,c),h.uv1=xi.getInterpolation(Fo,cs,ls,hs,Do,Io,No,new Y)),a&&(Ap.fromBufferAttribute(a,o),Tp.fromBufferAttribute(a,l),Rp.fromBufferAttribute(a,c),h.normal=xi.getInterpolation(Fo,cs,ls,hs,Ap,Tp,Rp,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};xi.getNormal(cs,ls,hs,u.normal),h.face=u}return h}var Or=class s extends Ve{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function p(v,m,g,x,b,_,E,M,A,C,y){let w=_/A,F=E/C,O=_/2,I=E/2,P=M/2,L=A+1,k=C+1,X=0,U=0,V=new T;for(let j=0;j<k;j++){let ie=j*F-I;for(let be=0;be<L;be++){let _e=be*w-O;V[v]=_e*x,V[m]=ie*b,V[g]=P,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[g]=M>0?1:-1,h.push(V.x,V.y,V.z),u.push(be/A),u.push(1-j/C),X+=1}}for(let j=0;j<C;j++)for(let ie=0;ie<A;ie++){let be=d+ie+L*j,_e=d+ie+L*(j+1),W=d+(ie+1)+L*(j+1),te=d+(ie+1)+L*j;l.push(be,_e,te),l.push(_e,W,te),U+=6}o.addGroup(f,U,y),f+=U,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(s){let e={};for(let t=0;t<s.length;t++){let n=Cs(s[t]);for(let i in n)e[i]=n[i]}return e}function Ex(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $g(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var wl={clone:Cs,merge:nn},Ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends Tt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ax,this.fragmentShader=Tx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=Ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ps=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=$n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new T,Cp=new Y,Pp=new Y,vt=class extends Ps{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=As*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,Cp,Pp),t.subVectors(Pp,Cp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},us=-90,ds=1,wc=class extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new vt(us,ds,e,t);i.layers=this.layers,this.add(i);let r=new vt(us,ds,e,t);r.layers=this.layers,this.add(r);let a=new vt(us,ds,e,t);a.layers=this.layers,this.add(a);let o=new vt(us,ds,e,t);o.layers=this.layers,this.add(o);let l=new vt(us,ds,e,t);l.layers=this.layers,this.add(l);let c=new vt(us,ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ur=class extends St{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ur(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:st}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Or(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:yi});r.uniforms.tEquirect.value=t;let a=new it(i,r),o=t.minFilter;return t.minFilter===vn&&(t.minFilter=st),new wc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},vh=new T,Rx=new T,Cx=new Ge,cn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vh.subVectors(n,t).cross(Rx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(vh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Cx.getNormalMatrix(e),i=this.coplanarPoint(vh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mr=new Mt,ko=new T,kr=class{constructor(e=new cn,t=new cn,n=new cn,i=new cn,r=new cn,a=new cn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],p=i[9],v=i[10],m=i[11],g=i[12],x=i[13],b=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,m-f,_-g).normalize(),n[1].setComponents(l+r,d+c,m+f,_+g).normalize(),n[2].setComponents(l+a,d+h,m+p,_+x).normalize(),n[3].setComponents(l-a,d-h,m-p,_-x).normalize(),n[4].setComponents(l-o,d-u,m-v,_-b).normalize(),t===$n)n[5].setComponents(l+o,d+u,m+v,_+b).normalize();else if(t===Pa)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Zg(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Px(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,p=d.length;f<p;f++){let v=d[f];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ei=class s extends Ve{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let x=g*d-a;for(let b=0;b<c;b++){let _=b*u-r;p.push(_,-x,0),v.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let b=x+c*g,_=x+c*(g+1),E=x+1+c*(g+1),M=x+1+c*g;f.push(b,_,M),f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ux=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$x=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,e_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,l_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,__=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,M_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,D_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,X_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,j_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,K_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ty=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ry=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ay=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ly=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,fy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,my=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,My=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ey=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Py=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Uy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ky=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,By=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$y=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ew=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:Lx,alphahash_pars_fragment:Dx,alphamap_fragment:Ix,alphamap_pars_fragment:Nx,alphatest_fragment:Fx,alphatest_pars_fragment:Ox,aomap_fragment:Ux,aomap_pars_fragment:kx,batching_pars_vertex:Bx,batching_vertex:zx,begin_vertex:Hx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:qx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Yx,color_fragment:Jx,color_pars_fragment:$x,color_pars_vertex:Zx,color_vertex:Qx,common:e_,cube_uv_reflection_fragment:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:a_,colorspace_fragment:o_,colorspace_pars_fragment:c_,envmap_fragment:l_,envmap_common_pars_fragment:h_,envmap_pars_fragment:u_,envmap_pars_vertex:d_,envmap_physical_pars_fragment:M_,envmap_vertex:f_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:v_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:x_,lights_lambert_fragment:__,lights_lambert_pars_fragment:y_,lights_pars_begin:w_,lights_toon_fragment:S_,lights_toon_pars_fragment:E_,lights_phong_fragment:A_,lights_phong_pars_fragment:T_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:L_,lights_fragment_end:D_,logdepthbuf_fragment:I_,logdepthbuf_pars_fragment:N_,logdepthbuf_pars_vertex:F_,logdepthbuf_vertex:O_,map_fragment:U_,map_pars_fragment:k_,map_particle_fragment:B_,map_particle_pars_fragment:z_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:V_,morphinstance_vertex:G_,morphcolor_vertex:W_,morphnormal_vertex:q_,morphtarget_pars_vertex:X_,morphtarget_vertex:j_,normal_fragment_begin:K_,normal_fragment_maps:Y_,normal_pars_fragment:J_,normal_pars_vertex:$_,normal_vertex:Z_,normalmap_pars_fragment:Q_,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ty,clearcoat_pars_fragment:ny,iridescence_pars_fragment:iy,opaque_fragment:ry,packing:sy,premultiplied_alpha_fragment:ay,project_vertex:oy,dithering_fragment:cy,dithering_pars_fragment:ly,roughnessmap_fragment:hy,roughnessmap_pars_fragment:uy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:fy,shadowmap_vertex:py,shadowmask_pars_fragment:my,skinbase_vertex:gy,skinning_pars_vertex:vy,skinning_vertex:by,skinnormal_vertex:xy,specularmap_fragment:_y,specularmap_pars_fragment:yy,tonemapping_fragment:wy,tonemapping_pars_fragment:My,transmission_fragment:Sy,transmission_pars_fragment:Ey,uv_pars_fragment:Ay,uv_pars_vertex:Ty,uv_vertex:Ry,worldpos_vertex:Cy,background_vert:Py,background_frag:Ly,backgroundCube_vert:Dy,backgroundCube_frag:Iy,cube_vert:Ny,cube_frag:Fy,depth_vert:Oy,depth_frag:Uy,distanceRGBA_vert:ky,distanceRGBA_frag:By,equirect_vert:zy,equirect_frag:Hy,linedashed_vert:Vy,linedashed_frag:Gy,meshbasic_vert:Wy,meshbasic_frag:qy,meshlambert_vert:Xy,meshlambert_frag:jy,meshmatcap_vert:Ky,meshmatcap_frag:Yy,meshnormal_vert:Jy,meshnormal_frag:$y,meshphong_vert:Zy,meshphong_frag:Qy,meshphysical_vert:ew,meshphysical_frag:tw,meshtoon_vert:nw,meshtoon_frag:iw,points_vert:rw,points_frag:sw,shadow_vert:aw,shadow_frag:ow,sprite_vert:cw,sprite_frag:lw},Me={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Fn={basic:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:nn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:nn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:nn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:nn([Me.points,Me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:nn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:nn([Me.common,Me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:nn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:nn([Me.sprite,Me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:nn([Me.common,Me.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:nn([Me.lights,Me.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Fn.physical={uniforms:nn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Bo={r:0,b:0,g:0},gr=new _n,hw=new De;function uw(s,e,t,n,i,r,a){let o=new xe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function p(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1,_=p(x);_===null?g(o,l):_&&_.isColor&&(g(_,1),b=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function m(x,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===Ws)?(h===void 0&&(h=new it(new Or(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:Cs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),gr.copy(b.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(gr)),h.material.toneMapped=rt.getTransfer(_.colorSpace)!==gt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new Ei(2,2),new Wt({name:"BackgroundMaterial",uniforms:Cs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,b){x.getRGB(Bo,$g(s)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),l=b,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:v,addToRenderList:m}}function dw(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(w,F,O,I,P){let L=!1,k=u(I,O,F);r!==k&&(r=k,c(r.object)),L=f(w,I,O,P),L&&p(w,I,O,P),P!==null&&e.update(P,s.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,_(w,F,O,I),P!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return s.createVertexArray()}function c(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,F,O){let I=O.wireframe===!0,P=n[w.id];P===void 0&&(P={},n[w.id]=P);let L=P[F.id];L===void 0&&(L={},P[F.id]=L);let k=L[I];return k===void 0&&(k=d(l()),L[I]=k),k}function d(w){let F=[],O=[],I=[];for(let P=0;P<t;P++)F[P]=0,O[P]=0,I[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:I,object:w,attributes:{},index:null}}function f(w,F,O,I){let P=r.attributes,L=F.attributes,k=0,X=O.getAttributes();for(let U in X)if(X[U].location>=0){let j=P[U],ie=L[U];if(ie===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;k++}return r.attributesNum!==k||r.index!==I}function p(w,F,O,I){let P={},L=F.attributes,k=0,X=O.getAttributes();for(let U in X)if(X[U].location>=0){let j=L[U];j===void 0&&(U==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),U==="instanceColor"&&w.instanceColor&&(j=w.instanceColor));let ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),P[U]=ie,k++}r.attributes=P,r.attributesNum=k,r.index=I}function v(){let w=r.newAttributes;for(let F=0,O=w.length;F<O;F++)w[F]=0}function m(w){g(w,0)}function g(w,F){let O=r.newAttributes,I=r.enabledAttributes,P=r.attributeDivisors;O[w]=1,I[w]===0&&(s.enableVertexAttribArray(w),I[w]=1),P[w]!==F&&(s.vertexAttribDivisor(w,F),P[w]=F)}function x(){let w=r.newAttributes,F=r.enabledAttributes;for(let O=0,I=F.length;O<I;O++)F[O]!==w[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function b(w,F,O,I,P,L,k){k===!0?s.vertexAttribIPointer(w,F,O,P,L):s.vertexAttribPointer(w,F,O,I,P,L)}function _(w,F,O,I){v();let P=I.attributes,L=O.getAttributes(),k=F.defaultAttributeValues;for(let X in L){let U=L[X];if(U.location>=0){let V=P[X];if(V===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),V!==void 0){let j=V.normalized,ie=V.itemSize,be=e.get(V);if(be===void 0)continue;let _e=be.buffer,W=be.type,te=be.bytesPerElement,pe=W===s.INT||W===s.UNSIGNED_INT||V.gpuType===Pd;if(V.isInterleavedBufferAttribute){let oe=V.data,Re=oe.stride,we=V.offset;if(oe.isInstancedInterleavedBuffer){for(let B=0;B<U.locationSize;B++)g(U.location+B,oe.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let B=0;B<U.locationSize;B++)m(U.location+B);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let B=0;B<U.locationSize;B++)b(U.location+B,ie/U.locationSize,W,j,Re*te,(we+ie/U.locationSize*B)*te,pe)}else{if(V.isInstancedBufferAttribute){for(let oe=0;oe<U.locationSize;oe++)g(U.location+oe,V.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let oe=0;oe<U.locationSize;oe++)m(U.location+oe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let oe=0;oe<U.locationSize;oe++)b(U.location+oe,ie/U.locationSize,W,j,ie*te,ie/U.locationSize*oe*te,pe)}}else if(k!==void 0){let j=k[X];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(U.location,j);break;case 3:s.vertexAttrib3fv(U.location,j);break;case 4:s.vertexAttrib4fv(U.location,j);break;default:s.vertexAttrib1fv(U.location,j)}}}}x()}function E(){C();for(let w in n){let F=n[w];for(let O in F){let I=F[O];for(let P in I)h(I[P].object),delete I[P];delete F[O]}delete n[w]}}function M(w){if(n[w.id]===void 0)return;let F=n[w.id];for(let O in F){let I=F[O];for(let P in I)h(I[P].object),delete I[P];delete F[O]}delete n[w.id]}function A(w){for(let F in n){let O=n[F];if(O[w.id]===void 0)continue;let I=O[w.id];for(let P in I)h(I[P].object),delete I[P];delete O[w.id]}}function C(){y(),a=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function fw(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];t.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],h[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];for(let v=0;v<d.length;v++)t.update(p,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pw(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==Kt&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){let A=M===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==zn&&n.convert(M)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==ln&&!A)}function l(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,maxSamples:E}}function mw(s){let e=this,t=null,n=0,i=!1,r=!1,a=new cn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:n,b=x*4,_=g.clippingState||null;l.value=_,_=h(p,d,b,f);for(let E=0;E!==b;++E)_[E]=t[E];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,p){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gw(s){let e=new WeakMap;function t(a,o){return o===wa?a.mapping=Mi:o===Ma&&(a.mapping=Yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wa||o===Ma)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ei=class extends Ps{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ys=4,Lp=[.125,.215,.35,.446,.526,.582],Ar=20,bh=new ei,Dp=new xe,xh=null,_h=0,yh=0,wh=!1,Er=(1+Math.sqrt(5))/2,fs=1/Er,Ip=[new T(-Er,fs,0),new T(Er,fs,0),new T(-fs,0,Er),new T(fs,0,Er),new T(0,Er,-fs),new T(0,Er,fs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Fa=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,_h,yh),this._renderer.xr.enabled=wh,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),yh=this._renderer.getActiveMipmapLevel(),wh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:st,minFilter:st,generateMipmaps:!1,type:Xn,format:Kt,colorSpace:kt,depthBuffer:!1},i=Np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vw(r)),this._blurMaterial=bw(r,e,t)}return i}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,bh)}_sceneToCubeUV(e,t,n,i){let o=new vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dp),h.toneMapping=Un,h.autoClear=!1;let f=new Dt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),p=new it(new Or,f),v=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(Dp),v=!0);for(let g=0;g<6;g++){let x=g%3;x===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):x===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));let b=this._cubeSize;zo(i,x*b,g>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mi||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,bh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ip[(i-r-1)%Ip.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ar-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):Ar;m>Ar&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);let g=[],x=0;for(let A=0;A<Ar;++A){let C=A/v,y=Math.exp(-C*C/2);g.push(y),A===0?x+=y:A<m&&(x+=2*y)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=p,d.mipInt.value=b-n;let _=this._sizeLods[i],E=3*_*(i>b-ys?i-b+ys:0),M=4*(this._cubeSize-_);zo(t,E,M,3*_,2*_),l.setRenderTarget(t),l.render(u,bh)}};function vw(s){let e=[],t=[],n=[],i=s,r=s-ys+1+Lp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-ys?l=Lp[a-s+ys-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,p=6,v=3,m=2,g=1,x=new Float32Array(v*p*f),b=new Float32Array(m*p*f),_=new Float32Array(g*p*f);for(let M=0;M<f;M++){let A=M%3*2/3-1,C=M>2?0:-1,y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];x.set(y,v*p*M),b.set(d,m*p*M);let w=[M,M,M,M,M,M];_.set(w,g*p*M)}let E=new Ve;E.setAttribute("position",new Oe(x,v)),E.setAttribute("uv",new Oe(b,m)),E.setAttribute("faceIndex",new Oe(_,g)),e.push(E),i>ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Np(s,e,t){let n=new Nt(s,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bw(s,e,t){let n=new Float32Array(Ar),i=new T(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Fp(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Op(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xw(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===wa||l===Ma,h=l===Mi||l===Yi;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fa(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Fa(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _w(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yw(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let p in d.attributes)e.remove(d.attributes[p]);for(let p in d.morphAttributes){let v=d.morphAttributes[p];for(let m=0,g=v.length;m<g;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let p in f){let v=f[p];for(let m=0,g=v.length;m<g;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,p=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let b=0,_=x.length;b<_;b+=3){let E=x[b+0],M=x[b+1],A=x[b+2];d.push(E,M,M,A,A,E)}}else if(p!==void 0){let x=p.array;v=p.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let E=b+0,M=b+1,A=b+2;d.push(E,M,M,A,A,E)}}else return;let m=new(jg(d)?Na:Ia)(d,1);m.version=v;let g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ww(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(s.drawElementsInstanced(n,f,r,d*a,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<p;m++)this.render(d[m]/a,f[m]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];t.update(m,n,1)}}function u(d,f,p,v){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x];for(let x=0;x<v.length;x++)t.update(g,n,v[x])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mw(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Sw(s,e,t){let n=new WeakMap,i=new et;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let M=new Float32Array(_*E*4*u),A=new Ts(M,_,E,u);A.type=ln,A.needsUpdate=!0;let C=b*4;for(let w=0;w<u;w++){let F=m[w],O=g[w],I=x[w],P=_*E*4*w;for(let L=0;L<F.count;L++){let k=L*C;f===!0&&(i.fromBufferAttribute(F,L),M[P+k+0]=i.x,M[P+k+1]=i.y,M[P+k+2]=i.z,M[P+k+3]=0),p===!0&&(i.fromBufferAttribute(O,L),M[P+k+4]=i.x,M[P+k+5]=i.y,M[P+k+6]=i.z,M[P+k+7]=0),v===!0&&(i.fromBufferAttribute(I,L),M[P+k+8]=i.x,M[P+k+9]=i.y,M[P+k+10]=i.z,M[P+k+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Y(_,E)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ew(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Br=class extends St{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Dr,h!==Dr&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dr&&(n=Si),n===void 0&&h===Es&&(n=qs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:_t,this.minFilter=l!==void 0?l:_t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qg=new St,e0=new Br(1,1);e0.compareFunction=Bd;var t0=new Ts,n0=new Da,i0=new Ur,Up=[],kp=[],Bp=new Float32Array(16),zp=new Float32Array(9),Hp=new Float32Array(4);function js(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Up[i];if(r===void 0&&(r=new Float32Array(i),Up[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ml(s,e){let t=kp[e];t===void 0&&(t=new Int32Array(e),kp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Aw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Tw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function Rw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function Cw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Pw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Hp.set(n),s.uniformMatrix2fv(this.addr,!1,Hp),Ot(t,n)}}function Lw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;zp.set(n),s.uniformMatrix3fv(this.addr,!1,zp),Ot(t,n)}}function Dw(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Bp.set(n),s.uniformMatrix4fv(this.addr,!1,Bp),Ot(t,n)}}function Iw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Nw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function Fw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function Ow(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function Uw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function Bw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function zw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function Hw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?e0:Qg;t.setTexture2D(e||r,i)}function Vw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||n0,i)}function Gw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||i0,i)}function Ww(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||t0,i)}function qw(s){switch(s){case 5126:return Aw;case 35664:return Tw;case 35665:return Rw;case 35666:return Cw;case 35674:return Pw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Iw;case 35667:case 35671:return Nw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return Uw;case 36294:return kw;case 36295:return Bw;case 36296:return zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Hw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Gw;case 36289:case 36303:case 36311:case 36292:return Ww}}function Xw(s,e){s.uniform1fv(this.addr,e)}function jw(s,e){let t=js(e,this.size,2);s.uniform2fv(this.addr,t)}function Kw(s,e){let t=js(e,this.size,3);s.uniform3fv(this.addr,t)}function Yw(s,e){let t=js(e,this.size,4);s.uniform4fv(this.addr,t)}function Jw(s,e){let t=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $w(s,e){let t=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zw(s,e){let t=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Qw(s,e){s.uniform1iv(this.addr,e)}function eM(s,e){s.uniform2iv(this.addr,e)}function tM(s,e){s.uniform3iv(this.addr,e)}function nM(s,e){s.uniform4iv(this.addr,e)}function iM(s,e){s.uniform1uiv(this.addr,e)}function rM(s,e){s.uniform2uiv(this.addr,e)}function sM(s,e){s.uniform3uiv(this.addr,e)}function aM(s,e){s.uniform4uiv(this.addr,e)}function oM(s,e,t){let n=this.cache,i=e.length,r=Ml(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qg,r[a])}function cM(s,e,t){let n=this.cache,i=e.length,r=Ml(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||n0,r[a])}function lM(s,e,t){let n=this.cache,i=e.length,r=Ml(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||i0,r[a])}function hM(s,e,t){let n=this.cache,i=e.length,r=Ml(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||t0,r[a])}function uM(s){switch(s){case 5126:return Xw;case 35664:return jw;case 35665:return Kw;case 35666:return Yw;case 35674:return Jw;case 35675:return $w;case 35676:return Zw;case 5124:case 35670:return Qw;case 35667:case 35671:return eM;case 35668:case 35672:return tM;case 35669:case 35673:return nM;case 5125:return iM;case 36294:return rM;case 36295:return sM;case 36296:return aM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return hM}}var Su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=qw(t.type)}},Eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uM(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Vp(s,e){s.seq.push(e),s.map[e.id]=e}function dM(s,e,t){let n=s.name,i=n.length;for(Mh.lastIndex=0;;){let r=Mh.exec(n),a=Mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Vp(t,c===void 0?new Su(o,s,e):new Eu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Au(o),Vp(t,u)),t=u}}}var Ss=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);dM(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Gp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var fM=37297,pM=0;function mM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function gM(s){let e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s),n;switch(e===t?n="":e===Ta&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ta&&(n="LinearSRGBToLinearDisplayP3"),s){case kt:case so:return[n,"LinearTransferOETF"];case mt:case yl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Wp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+mM(s.getShaderSource(e),a)}else return i}function vM(s,e){let t=gM(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bM(s,e){let t;switch(e){case bg:t="Linear";break;case xg:t="Reinhard";break;case _g:t="OptimizedCineon";break;case yg:t="ACESFilmic";break;case Mg:t="AgX";break;case Sg:t="Neutral";break;case wg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function _M(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ga(s){return s!==""}function qp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(s){return s.replace(wM,SM)}var MM=new Map;function SM(s,e){let t=He[e];if(t===void 0){let n=MM.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}var EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(s){return s.replace(EM,AM)}function AM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Kp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===bl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function RM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CM(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Yi&&(e="ENVMAP_MODE_REFRACTION"),e}function PM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case no:e="ENVMAP_BLENDING_MULTIPLY";break;case gg:e="ENVMAP_BLENDING_MIX";break;case vg:e="ENVMAP_BLENDING_ADD";break}return e}function LM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function DM(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=TM(t),c=RM(t),h=CM(t),u=PM(t),d=LM(t),f=xM(t),p=_M(r),v=i.createProgram(),m,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ga).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ga).join(`
`),g.length>0&&(g+=`
`)):(m=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),g=[Kp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?He.tonemapping_pars_fragment:"",t.toneMapping!==Un?bM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,vM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),a=Tu(a),a=qp(a,t),a=Xp(a,t),o=Tu(o),o=qp(o,t),o=Xp(o,t),a=jp(a),o=jp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ca?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ca?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=x+m+a,_=x+g+o,E=Gp(i,i.VERTEX_SHADER,b),M=Gp(i,i.FRAGMENT_SHADER,_);i.attachShader(v,E),i.attachShader(v,M),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(F){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(E).trim(),P=i.getShaderInfoLog(M).trim(),L=!0,k=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(L=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,E,M);else{let X=Wp(i,E,"vertex"),U=Wp(i,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+X+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||P==="")&&(k=!1);k&&(F.diagnostics={runnable:L,programLog:O,vertexShader:{log:I,prefix:m},fragmentShader:{log:P,prefix:g}})}i.deleteShader(E),i.deleteShader(M),C=new Ss(i,v),y=yM(i,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,fM)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=M,this}var IM=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cu(e),t.set(e,n)),n}},Cu=class{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}};function NM(s,e,t,n,i,r,a){let o=new Rs,l=new Ru,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,w,F,O,I){let P=O.fog,L=I.geometry,k=y.isMeshStandardMaterial?O.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||k),U=X&&X.mapping===Ws?X.image.height:null,V=p[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ie=j!==void 0?j.length:0,be=0;L.morphAttributes.position!==void 0&&(be=1),L.morphAttributes.normal!==void 0&&(be=2),L.morphAttributes.color!==void 0&&(be=3);let _e,W,te,pe;if(V){let Xe=Fn[V];_e=Xe.vertexShader,W=Xe.fragmentShader}else _e=y.vertexShader,W=y.fragmentShader,l.update(y),te=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);let oe=s.getRenderTarget(),Re=I.isInstancedMesh===!0,we=I.isBatchedMesh===!0,B=!!y.map,fe=!!y.matcap,Z=!!X,se=!!y.aoMap,ee=!!y.lightMap,he=!!y.bumpMap,re=!!y.normalMap,Ee=!!y.displacementMap,Pe=!!y.emissiveMap,N=!!y.metalnessMap,R=!!y.roughnessMap,q=y.anisotropy>0,ne=y.clearcoat>0,ae=y.dispersion>0,z=y.iridescence>0,me=y.sheen>0,ce=y.transmission>0,de=q&&!!y.anisotropyMap,Te=ne&&!!y.clearcoatMap,ue=ne&&!!y.clearcoatNormalMap,Se=ne&&!!y.clearcoatRoughnessMap,Le=z&&!!y.iridescenceMap,ye=z&&!!y.iridescenceThicknessMap,ge=me&&!!y.sheenColorMap,Fe=me&&!!y.sheenRoughnessMap,ze=!!y.specularMap,at=!!y.specularColorMap,We=!!y.specularIntensityMap,S=ce&&!!y.transmissionMap,H=ce&&!!y.thicknessMap,K=!!y.gradientMap,le=!!y.alphaMap,ve=y.alphaTest>0,qe=!!y.alphaHash,Je=!!y.extensions,ke=Un;y.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ke=s.toneMapping);let ot={shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:W,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:we,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:kt,alphaToCoverage:!!y.alphaToCoverage,map:B,matcap:fe,envMap:Z,envMapMode:Z&&X.mapping,envMapCubeUVHeight:U,aoMap:se,lightMap:ee,bumpMap:he,normalMap:re,displacementMap:d&&Ee,emissiveMap:Pe,normalMapObjectSpace:re&&y.normalMapType===Bg,normalMapTangentSpace:re&&y.normalMapType===ir,metalnessMap:N,roughnessMap:R,anisotropy:q,anisotropyMap:de,clearcoat:ne,clearcoatMap:Te,clearcoatNormalMap:ue,clearcoatRoughnessMap:Se,dispersion:ae,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:ge,sheenRoughnessMap:Fe,specularMap:ze,specularColorMap:at,specularIntensityMap:We,transmission:ce,transmissionMap:S,thicknessMap:H,gradientMap:K,opaque:y.transparent===!1&&y.blending===Pr&&y.alphaToCoverage===!1,alphaMap:le,alphaTest:ve,alphaHash:qe,combine:y.combine,mapUv:B&&v(y.map.channel),aoMapUv:se&&v(y.aoMap.channel),lightMapUv:ee&&v(y.lightMap.channel),bumpMapUv:he&&v(y.bumpMap.channel),normalMapUv:re&&v(y.normalMap.channel),displacementMapUv:Ee&&v(y.displacementMap.channel),emissiveMapUv:Pe&&v(y.emissiveMap.channel),metalnessMapUv:N&&v(y.metalnessMap.channel),roughnessMapUv:R&&v(y.roughnessMap.channel),anisotropyMapUv:de&&v(y.anisotropyMap.channel),clearcoatMapUv:Te&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(y.sheenRoughnessMap.channel),specularMapUv:ze&&v(y.specularMap.channel),specularColorMapUv:at&&v(y.specularColorMap.channel),specularIntensityMapUv:We&&v(y.specularIntensityMap.channel),transmissionMapUv:S&&v(y.transmissionMap.channel),thicknessMapUv:H&&v(y.thicknessMap.channel),alphaMapUv:le&&v(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(re||q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(B||le),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,useLegacyLights:s._useLegacyLights,decodeVideoTexture:B&&y.map.isVideoTexture===!0&&rt.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vt,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function g(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let F in y.defines)w.push(F),w.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(x(w,y),b(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function _(y){let w=p[y.type],F;if(w){let O=Fn[w];F=wl.clone(O.uniforms)}else F=y.uniforms;return F}function E(y,w){let F;for(let O=0,I=h.length;O<I;O++){let P=h[O];if(P.cacheKey===w){F=P,++F.usedTimes;break}}return F===void 0&&(F=new DM(s,w,y,r),h.push(F)),F}function M(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:E,releaseProgram:M,releaseShaderCache:A,programs:h,dispose:C}}function FM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function OM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Yp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Jp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,p,v,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function o(u,d,f,p,v,m){let g=a(u,d,f,p,v,m);f.transmission>0?n.push(g):f.transparent===!0?i.push(g):t.push(g)}function l(u,d,f,p,v,m){let g=a(u,d,f,p,v,m);f.transmission>0?n.unshift(g):f.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||OM),n.length>1&&n.sort(d||Yp),i.length>1&&i.sort(d||Yp)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function UM(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Jp,s.set(n,[a])):i>=r.length?(a=new Jp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function kM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new xe};break;case"SpotLight":t={position:new T,direction:new T,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function BM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var zM=0;function HM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VM(s){let e=new kM,t=BM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new De,a=new De;function o(c,h){let u=0,d=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,v=0,m=0,g=0,x=0,b=0,_=0,E=0,M=0,A=0,C=0;c.sort(HM);let y=h===!0?Math.PI:1;for(let F=0,O=c.length;F<O;F++){let I=c[F],P=I.color,L=I.intensity,k=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=P.r*L*y,d+=P.g*L*y,f+=P.b*L*y;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],L);C++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){let V=I.shadow,j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=I.shadow.matrix,b++}n.directional[p]=U,p++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(P).multiplyScalar(L*y),U.distance=k,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[m]=U;let V=I.shadow;if(I.map&&(n.spotLightMap[M]=I.map,M++,V.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[m]=V.matrix,I.castShadow){let j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[m]=j,n.spotShadowMap[m]=X,E++}m++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(P).multiplyScalar(L),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=U,g++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*y),U.distance=I.distance,U.decay=I.decay,I.castShadow){let V=I.shadow,j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[v]=j,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=I.shadow.matrix,_++}n.point[v]=U,v++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(L*y),U.groundColor.copy(I.groundColor).multiplyScalar(L*y),n.hemi[x]=U,x++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==p||w.pointLength!==v||w.spotLength!==m||w.rectAreaLength!==g||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==_||w.numSpotShadows!==E||w.numSpotMaps!==M||w.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=g,n.point.length=v,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=E+M-A,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,w.directionalLength=p,w.pointLength=v,w.spotLength=m,w.rectAreaLength=g,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=_,w.numSpotShadows=E,w.numSpotMaps=M,w.numLightProbes=C,n.version=zM++)}function l(c,h){let u=0,d=0,f=0,p=0,v=0,m=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){let b=c[g];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),u++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let _=n.rectArea[p];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function $p(s){let e=new VM(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(h){e.setup(t,h)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function GM(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new $p(s),e.set(i,[o])):r>=a.length?(o=new $p(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ti=class extends Tt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oa=class extends Tt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},WM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function XM(s,e,t){let n=new kr,i=new Y,r=new Y,a=new et,o=new ti({depthPacking:Xr}),l=new Oa,c={},h=t.maxTextureSize,u={[kn]:Gt,[Gt]:kn,[Vt]:Vt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:WM,fragmentShader:qM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ve;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new it(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let g=this.type;this.render=function(M,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let y=s.getRenderTarget(),w=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),O=s.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let I=g!==Jn&&this.type===Jn,P=g===Jn&&this.type!==Jn;for(let L=0,k=M.length;L<k;L++){let X=M[L],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();if(i.multiply(V),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||I===!0||P===!0){let ie=this.type!==Jn?{minFilter:_t,magFilter:_t}:{};U.map!==null&&U.map.dispose(),U.map=new Nt(i.x,i.y,ie),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();let j=U.getViewportCount();for(let ie=0;ie<j;ie++){let be=U.getViewport(ie);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(a),U.updateMatrices(X,ie),n=U.getFrustum(),_(A,C,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===Jn&&x(U,C),U.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,F)};function x(M,A){let C=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Nt(i.x,i.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,C,d,v,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,C,f,v,null)}function b(M,A,C,y){let w=null,F=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(F!==void 0)w=F;else if(w=C.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let O=w.uuid,I=A.uuid,P=c[O];P===void 0&&(P={},c[O]=P);let L=P[I];L===void 0&&(L=w.clone(),P[I]=L,A.addEventListener("dispose",E)),w=L}if(w.visible=A.visible,w.wireframe=A.wireframe,y===Jn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=s.properties.get(w);O.light=C}return w}function _(M,A,C,y,w){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Jn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);let I=e.update(M),P=M.material;if(Array.isArray(P)){let L=I.groups;for(let k=0,X=L.length;k<X;k++){let U=L[k],V=P[U.materialIndex];if(V&&V.visible){let j=b(M,V,y,w);M.onBeforeShadow(s,M,A,C,I,j,U),s.renderBufferDirect(C,null,I,j,M,U),M.onAfterShadow(s,M,A,C,I,j,U)}}}else if(P.visible){let L=b(M,P,y,w);M.onBeforeShadow(s,M,A,C,I,L,null),s.renderBufferDirect(C,null,I,L,M,null),M.onAfterShadow(s,M,A,C,I,L,null)}}let O=M.children;for(let I=0,P=O.length;I<P;I++)_(O[I],A,C,y,w)}function E(M){M.target.removeEventListener("dispose",E);for(let C in c){let y=c[C],w=M.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function jM(s){function e(){let S=!1,H=new et,K=null,le=new et(0,0,0,0);return{setMask:function(ve){K!==ve&&!S&&(s.colorMask(ve,ve,ve,ve),K=ve)},setLocked:function(ve){S=ve},setClear:function(ve,qe,Je,ke,ot){ot===!0&&(ve*=ke,qe*=ke,Je*=ke),H.set(ve,qe,Je,ke),le.equals(H)===!1&&(s.clearColor(ve,qe,Je,ke),le.copy(H))},reset:function(){S=!1,K=null,le.set(-1,0,0,0)}}}function t(){let S=!1,H=null,K=null,le=null;return{setTest:function(ve){ve?pe(s.DEPTH_TEST):oe(s.DEPTH_TEST)},setMask:function(ve){H!==ve&&!S&&(s.depthMask(ve),H=ve)},setFunc:function(ve){if(K!==ve){switch(ve){case lg:s.depthFunc(s.NEVER);break;case hg:s.depthFunc(s.ALWAYS);break;case ug:s.depthFunc(s.LESS);break;case ya:s.depthFunc(s.LEQUAL);break;case dg:s.depthFunc(s.EQUAL);break;case fg:s.depthFunc(s.GEQUAL);break;case pg:s.depthFunc(s.GREATER);break;case mg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ve}},setLocked:function(ve){S=ve},setClear:function(ve){le!==ve&&(s.clearDepth(ve),le=ve)},reset:function(){S=!1,H=null,K=null,le=null}}}function n(){let S=!1,H=null,K=null,le=null,ve=null,qe=null,Je=null,ke=null,ot=null;return{setTest:function(Xe){S||(Xe?pe(s.STENCIL_TEST):oe(s.STENCIL_TEST))},setMask:function(Xe){H!==Xe&&!S&&(s.stencilMask(Xe),H=Xe)},setFunc:function(Xe,yt,pt){(K!==Xe||le!==yt||ve!==pt)&&(s.stencilFunc(Xe,yt,pt),K=Xe,le=yt,ve=pt)},setOp:function(Xe,yt,pt){(qe!==Xe||Je!==yt||ke!==pt)&&(s.stencilOp(Xe,yt,pt),qe=Xe,Je=yt,ke=pt)},setLocked:function(Xe){S=Xe},setClear:function(Xe){ot!==Xe&&(s.clearStencil(Xe),ot=Xe)},reset:function(){S=!1,H=null,K=null,le=null,ve=null,qe=null,Je=null,ke=null,ot=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,m=null,g=null,x=null,b=null,_=null,E=null,M=new xe(0,0,0),A=0,C=!1,y=null,w=null,F=null,O=null,I=null,P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,k=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),L=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),L=k>=2);let U=null,V={},j=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),be=new et().fromArray(j),_e=new et().fromArray(ie);function W(S,H,K,le){let ve=new Uint8Array(4),qe=s.createTexture();s.bindTexture(S,qe),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<K;Je++)S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(H+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return qe}let te={};te[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pe(s.DEPTH_TEST),r.setFunc(ya),he(!1),re(kh),pe(s.CULL_FACE),se(yi);function pe(S){c[S]!==!0&&(s.enable(S),c[S]=!0)}function oe(S){c[S]!==!1&&(s.disable(S),c[S]=!1)}function Re(S,H){return h[S]!==H?(s.bindFramebuffer(S,H),h[S]=H,S===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=H),S===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=H),!0):!1}function we(S,H){let K=d,le=!1;if(S){K=u.get(H),K===void 0&&(K=[],u.set(H,K));let ve=S.textures;if(K.length!==ve.length||K[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Je=ve.length;qe<Je;qe++)K[qe]=s.COLOR_ATTACHMENT0+qe;K.length=ve.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);le&&s.drawBuffers(K)}function B(S){return f!==S?(s.useProgram(S),f=S,!0):!1}let fe={[ji]:s.FUNC_ADD,[Xm]:s.FUNC_SUBTRACT,[jm]:s.FUNC_REVERSE_SUBTRACT};fe[Km]=s.MIN,fe[Ym]=s.MAX;let Z={[Jm]:s.ZERO,[$m]:s.ONE,[Zm]:s.SRC_COLOR,[bc]:s.SRC_ALPHA,[rg]:s.SRC_ALPHA_SATURATE,[ng]:s.DST_COLOR,[eg]:s.DST_ALPHA,[Qm]:s.ONE_MINUS_SRC_COLOR,[xc]:s.ONE_MINUS_SRC_ALPHA,[ig]:s.ONE_MINUS_DST_COLOR,[tg]:s.ONE_MINUS_DST_ALPHA,[sg]:s.CONSTANT_COLOR,[ag]:s.ONE_MINUS_CONSTANT_COLOR,[og]:s.CONSTANT_ALPHA,[cg]:s.ONE_MINUS_CONSTANT_ALPHA};function se(S,H,K,le,ve,qe,Je,ke,ot,Xe){if(S===yi){p===!0&&(oe(s.BLEND),p=!1);return}if(p===!1&&(pe(s.BLEND),p=!0),S!==qm){if(S!==v||Xe!==C){if((m!==ji||b!==ji)&&(s.blendEquation(s.FUNC_ADD),m=ji,b=ji),Xe)switch(S){case Pr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFunc(s.ONE,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Pr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}g=null,x=null,_=null,E=null,M.set(0,0,0),A=0,v=S,C=Xe}return}ve=ve||H,qe=qe||K,Je=Je||le,(H!==m||ve!==b)&&(s.blendEquationSeparate(fe[H],fe[ve]),m=H,b=ve),(K!==g||le!==x||qe!==_||Je!==E)&&(s.blendFuncSeparate(Z[K],Z[le],Z[qe],Z[Je]),g=K,x=le,_=qe,E=Je),(ke.equals(M)===!1||ot!==A)&&(s.blendColor(ke.r,ke.g,ke.b,ot),M.copy(ke),A=ot),v=S,C=!1}function ee(S,H){S.side===Vt?oe(s.CULL_FACE):pe(s.CULL_FACE);let K=S.side===Gt;H&&(K=!K),he(K),S.blending===Pr&&S.transparent===!1?se(yi):se(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),i.setMask(S.colorWrite);let le=S.stencilWrite;a.setTest(le),le&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Pe(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):oe(s.SAMPLE_ALPHA_TO_COVERAGE)}function he(S){y!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),y=S)}function re(S){S!==Gm?(pe(s.CULL_FACE),S!==w&&(S===kh?s.cullFace(s.BACK):S===Wm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):oe(s.CULL_FACE),w=S}function Ee(S){S!==F&&(L&&s.lineWidth(S),F=S)}function Pe(S,H,K){S?(pe(s.POLYGON_OFFSET_FILL),(O!==H||I!==K)&&(s.polygonOffset(H,K),O=H,I=K)):oe(s.POLYGON_OFFSET_FILL)}function N(S){S?pe(s.SCISSOR_TEST):oe(s.SCISSOR_TEST)}function R(S){S===void 0&&(S=s.TEXTURE0+P-1),U!==S&&(s.activeTexture(S),U=S)}function q(S,H,K){K===void 0&&(U===null?K=s.TEXTURE0+P-1:K=U);let le=V[K];le===void 0&&(le={type:void 0,texture:void 0},V[K]=le),(le.type!==S||le.texture!==H)&&(U!==K&&(s.activeTexture(K),U=K),s.bindTexture(S,H||te[S]),le.type=S,le.texture=H)}function ne(){let S=V[U];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Te(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ue(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ye(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(S){be.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),be.copy(S))}function Fe(S){_e.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),_e.copy(S))}function ze(S,H){let K=l.get(H);K===void 0&&(K=new WeakMap,l.set(H,K));let le=K.get(S);le===void 0&&(le=s.getUniformBlockIndex(H,S.name),K.set(S,le))}function at(S,H){let le=l.get(H).get(S);o.get(H)!==le&&(s.uniformBlockBinding(H,le,S.__bindingPointIndex),o.set(H,le))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},U=null,V={},h={},u=new WeakMap,d=[],f=null,p=!1,v=null,m=null,g=null,x=null,b=null,_=null,E=null,M=new xe(0,0,0),A=0,C=!1,y=null,w=null,F=null,O=null,I=null,be.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:pe,disable:oe,bindFramebuffer:Re,drawBuffers:we,useProgram:B,setBlending:se,setMaterial:ee,setFlipSided:he,setCullFace:re,setLineWidth:Ee,setPolygonOffset:Pe,setScissorTest:N,activeTexture:R,bindTexture:q,unbindTexture:ne,compressedTexImage2D:ae,compressedTexImage3D:z,texImage2D:Le,texImage3D:ye,updateUBOMapping:ze,uniformBlockBinding:at,texStorage2D:ue,texStorage3D:Se,texSubImage2D:me,texSubImage3D:ce,compressedTexSubImage2D:de,compressedTexSubImage3D:Te,scissor:ge,viewport:Fe,reset:We}}function KM(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(N,R){return f?new OffscreenCanvas(N,R):La("canvas")}function v(N,R,q){let ne=1,ae=Pe(N);if((ae.width>q||ae.height>q)&&(ne=q/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let z=Math.floor(ne*ae.width),me=Math.floor(ne*ae.height);u===void 0&&(u=p(z,me));let ce=R?p(z,me):u;return ce.width=z,ce.height=me,ce.getContext("2d").drawImage(N,0,0,z,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+z+"x"+me+")."),ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),N;return N}function m(N){return N.generateMipmaps&&N.minFilter!==_t&&N.minFilter!==st}function g(N){s.generateMipmap(N)}function x(N,R,q,ne,ae=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let z=R;if(R===s.RED&&(q===s.FLOAT&&(z=s.R32F),q===s.HALF_FLOAT&&(z=s.R16F),q===s.UNSIGNED_BYTE&&(z=s.R8)),R===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.R8UI),q===s.UNSIGNED_SHORT&&(z=s.R16UI),q===s.UNSIGNED_INT&&(z=s.R32UI),q===s.BYTE&&(z=s.R8I),q===s.SHORT&&(z=s.R16I),q===s.INT&&(z=s.R32I)),R===s.RG&&(q===s.FLOAT&&(z=s.RG32F),q===s.HALF_FLOAT&&(z=s.RG16F),q===s.UNSIGNED_BYTE&&(z=s.RG8)),R===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(z=s.RG8UI),q===s.UNSIGNED_SHORT&&(z=s.RG16UI),q===s.UNSIGNED_INT&&(z=s.RG32UI),q===s.BYTE&&(z=s.RG8I),q===s.SHORT&&(z=s.RG16I),q===s.INT&&(z=s.RG32I)),R===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),R===s.RGBA){let me=ae?Ea:rt.getTransfer(ne);q===s.FLOAT&&(z=s.RGBA32F),q===s.HALF_FLOAT&&(z=s.RGBA16F),q===s.UNSIGNED_BYTE&&(z=me===gt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function b(N,R){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==_t&&N.minFilter!==st?Math.log2(Math.max(R.width,R.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?R.mipmaps.length:1}function _(N){let R=N.target;R.removeEventListener("dispose",_),M(R),R.isVideoTexture&&h.delete(R)}function E(N){let R=N.target;R.removeEventListener("dispose",E),C(R)}function M(N){let R=n.get(N);if(R.__webglInit===void 0)return;let q=N.source,ne=d.get(q);if(ne){let ae=ne[R.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&A(N),Object.keys(ne).length===0&&d.delete(q)}n.remove(N)}function A(N){let R=n.get(N);s.deleteTexture(R.__webglTexture);let q=N.source,ne=d.get(q);delete ne[R.__cacheKey],a.memory.textures--}function C(N){let R=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(R.__webglFramebuffer[ne]))for(let ae=0;ae<R.__webglFramebuffer[ne].length;ae++)s.deleteFramebuffer(R.__webglFramebuffer[ne][ae]);else s.deleteFramebuffer(R.__webglFramebuffer[ne]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[ne])}else{if(Array.isArray(R.__webglFramebuffer))for(let ne=0;ne<R.__webglFramebuffer.length;ne++)s.deleteFramebuffer(R.__webglFramebuffer[ne]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ne=0;ne<R.__webglColorRenderbuffer.length;ne++)R.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[ne]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let q=N.textures;for(let ne=0,ae=q.length;ne<ae;ne++){let z=n.get(q[ne]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(q[ne])}n.remove(N)}let y=0;function w(){y=0}function F(){let N=y;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),y+=1,N}function O(N){let R=[];return R.push(N.wrapS),R.push(N.wrapT),R.push(N.wrapR||0),R.push(N.magFilter),R.push(N.minFilter),R.push(N.anisotropy),R.push(N.internalFormat),R.push(N.format),R.push(N.type),R.push(N.generateMipmaps),R.push(N.premultiplyAlpha),R.push(N.flipY),R.push(N.unpackAlignment),R.push(N.colorSpace),R.join()}function I(N,R){let q=n.get(N);if(N.isVideoTexture&&re(N),N.isRenderTargetTexture===!1&&N.version>0&&q.__version!==N.version){let ne=N.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(q,N,R);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+R)}function P(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){be(q,N,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+R)}function L(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){be(q,N,R);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+R)}function k(N,R){let q=n.get(N);if(N.version>0&&q.__version!==N.version){_e(q,N,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+R)}let X={[Bn]:s.REPEAT,[It]:s.CLAMP_TO_EDGE,[Nr]:s.MIRRORED_REPEAT},U={[_t]:s.NEAREST,[io]:s.NEAREST_MIPMAP_NEAREST,[Ki]:s.NEAREST_MIPMAP_LINEAR,[st]:s.LINEAR,[Lr]:s.LINEAR_MIPMAP_NEAREST,[vn]:s.LINEAR_MIPMAP_LINEAR},V={[zg]:s.NEVER,[Xg]:s.ALWAYS,[Hg]:s.LESS,[Bd]:s.LEQUAL,[Vg]:s.EQUAL,[qg]:s.GEQUAL,[Gg]:s.GREATER,[Wg]:s.NOTEQUAL};function j(N,R){if(R.type===ln&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===st||R.magFilter===Lr||R.magFilter===Ki||R.magFilter===vn||R.minFilter===st||R.minFilter===Lr||R.minFilter===Ki||R.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,X[R.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,X[R.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,X[R.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[R.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[R.minFilter]),R.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,V[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_t||R.minFilter!==Ki&&R.minFilter!==vn||R.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ie(N,R){let q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,R.addEventListener("dispose",_));let ne=R.source,ae=d.get(ne);ae===void 0&&(ae={},d.set(ne,ae));let z=O(R);if(z!==N.__cacheKey){ae[z]===void 0&&(ae[z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ae[z].usedTimes++;let me=ae[N.__cacheKey];me!==void 0&&(ae[N.__cacheKey].usedTimes--,me.usedTimes===0&&A(R)),N.__cacheKey=z,N.__webglTexture=ae[z].texture}return q}function be(N,R,q){let ne=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ne=s.TEXTURE_3D);let ae=ie(N,R),z=R.source;t.bindTexture(ne,N.__webglTexture,s.TEXTURE0+q);let me=n.get(z);if(z.version!==me.__version||ae===!0){t.activeTexture(s.TEXTURE0+q);let ce=rt.getPrimaries(rt.workingColorSpace),de=R.colorSpace===On?null:rt.getPrimaries(R.colorSpace),Te=R.colorSpace===On||ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ue=v(R.image,!1,i.maxTextureSize);ue=Ee(R,ue);let Se=r.convert(R.format,R.colorSpace),Le=r.convert(R.type),ye=x(R.internalFormat,Se,Le,R.colorSpace,R.isVideoTexture);j(ne,R);let ge,Fe=R.mipmaps,ze=R.isVideoTexture!==!0,at=me.__version===void 0||ae===!0,We=z.dataReady,S=b(R,ue);if(R.isDepthTexture)ye=s.DEPTH_COMPONENT16,R.type===ln?ye=s.DEPTH_COMPONENT32F:R.type===Si?ye=s.DEPTH_COMPONENT24:R.type===qs&&(ye=s.DEPTH24_STENCIL8),at&&(ze?t.texStorage2D(s.TEXTURE_2D,1,ye,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,ye,ue.width,ue.height,0,Se,Le,null));else if(R.isDataTexture)if(Fe.length>0){ze&&at&&t.texStorage2D(s.TEXTURE_2D,S,ye,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)ge=Fe[H],ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,Se,Le,ge.data):t.texImage2D(s.TEXTURE_2D,H,ye,ge.width,ge.height,0,Se,Le,ge.data);R.generateMipmaps=!1}else ze?(at&&t.texStorage2D(s.TEXTURE_2D,S,ye,ue.width,ue.height),We&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue.width,ue.height,Se,Le,ue.data)):t.texImage2D(s.TEXTURE_2D,0,ye,ue.width,ue.height,0,Se,Le,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ze&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,S,ye,Fe[0].width,Fe[0].height,ue.depth);for(let H=0,K=Fe.length;H<K;H++)ge=Fe[H],R.format!==Kt?Se!==null?ze?We&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ue.depth,Se,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,ye,ge.width,ge.height,ue.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?We&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ge.width,ge.height,ue.depth,Se,Le,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,ye,ge.width,ge.height,ue.depth,0,Se,Le,ge.data)}else{ze&&at&&t.texStorage2D(s.TEXTURE_2D,S,ye,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)ge=Fe[H],R.format!==Kt?Se!==null?ze?We&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,Se,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,H,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ge.width,ge.height,Se,Le,ge.data):t.texImage2D(s.TEXTURE_2D,H,ye,ge.width,ge.height,0,Se,Le,ge.data)}else if(R.isDataArrayTexture)ze?(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,S,ye,ue.width,ue.height,ue.depth),We&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,Le,ue.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ye,ue.width,ue.height,ue.depth,0,Se,Le,ue.data);else if(R.isData3DTexture)ze?(at&&t.texStorage3D(s.TEXTURE_3D,S,ye,ue.width,ue.height,ue.depth),We&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,Le,ue.data)):t.texImage3D(s.TEXTURE_3D,0,ye,ue.width,ue.height,ue.depth,0,Se,Le,ue.data);else if(R.isFramebufferTexture){if(at)if(ze)t.texStorage2D(s.TEXTURE_2D,S,ye,ue.width,ue.height);else{let H=ue.width,K=ue.height;for(let le=0;le<S;le++)t.texImage2D(s.TEXTURE_2D,le,ye,H,K,0,Se,Le,null),H>>=1,K>>=1}}else if(Fe.length>0){if(ze&&at){let H=Pe(Fe[0]);t.texStorage2D(s.TEXTURE_2D,S,ye,H.width,H.height)}for(let H=0,K=Fe.length;H<K;H++)ge=Fe[H],ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Se,Le,ge):t.texImage2D(s.TEXTURE_2D,H,ye,Se,Le,ge);R.generateMipmaps=!1}else if(ze){if(at){let H=Pe(ue);t.texStorage2D(s.TEXTURE_2D,S,ye,H.width,H.height)}We&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,Le,ue)}else t.texImage2D(s.TEXTURE_2D,0,ye,Se,Le,ue);m(R)&&g(ne),me.__version=z.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function _e(N,R,q){if(R.image.length!==6)return;let ne=ie(N,R),ae=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+q);let z=n.get(ae);if(ae.version!==z.__version||ne===!0){t.activeTexture(s.TEXTURE0+q);let me=rt.getPrimaries(rt.workingColorSpace),ce=R.colorSpace===On?null:rt.getPrimaries(R.colorSpace),de=R.colorSpace===On||me===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Te=R.isCompressedTexture||R.image[0].isCompressedTexture,ue=R.image[0]&&R.image[0].isDataTexture,Se=[];for(let K=0;K<6;K++)!Te&&!ue?Se[K]=v(R.image[K],!0,i.maxCubemapSize):Se[K]=ue?R.image[K].image:R.image[K],Se[K]=Ee(R,Se[K]);let Le=Se[0],ye=r.convert(R.format,R.colorSpace),ge=r.convert(R.type),Fe=x(R.internalFormat,ye,ge,R.colorSpace),ze=R.isVideoTexture!==!0,at=z.__version===void 0||ne===!0,We=ae.dataReady,S=b(R,Le);j(s.TEXTURE_CUBE_MAP,R);let H;if(Te){ze&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,S,Fe,Le.width,Le.height);for(let K=0;K<6;K++){H=Se[K].mipmaps;for(let le=0;le<H.length;le++){let ve=H[le];R.format!==Kt?ye!==null?ze?We&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Fe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,ve.width,ve.height,ye,ge,ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Fe,ve.width,ve.height,0,ye,ge,ve.data)}}}else{if(H=R.mipmaps,ze&&at){H.length>0&&S++;let K=Pe(Se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,S,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(ue){ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Se[K].width,Se[K].height,ye,ge,Se[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Se[K].width,Se[K].height,0,ye,ge,Se[K].data);for(let le=0;le<H.length;le++){let qe=H[le].image[K].image;ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,qe.width,qe.height,ye,ge,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Fe,qe.width,qe.height,0,ye,ge,qe.data)}}else{ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ye,ge,Se[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,ye,ge,Se[K]);for(let le=0;le<H.length;le++){let ve=H[le];ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,ye,ge,ve.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Fe,ye,ge,ve.image[K])}}}m(R)&&g(s.TEXTURE_CUBE_MAP),z.__version=ae.version,R.onUpdate&&R.onUpdate(R)}N.__version=R.version}function W(N,R,q,ne,ae,z){let me=r.convert(q.format,q.colorSpace),ce=r.convert(q.type),de=x(q.internalFormat,me,ce,q.colorSpace);if(!n.get(R).__hasExternalTextures){let ue=Math.max(1,R.width>>z),Se=Math.max(1,R.height>>z);ae===s.TEXTURE_3D||ae===s.TEXTURE_2D_ARRAY?t.texImage3D(ae,z,de,ue,Se,R.depth,0,me,ce,null):t.texImage2D(ae,z,de,ue,Se,0,me,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),he(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,ae,n.get(q).__webglTexture,0,ee(R)):(ae===s.TEXTURE_2D||ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,ae,n.get(q).__webglTexture,z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(N,R,q){if(s.bindRenderbuffer(s.RENDERBUFFER,N),R.depthBuffer&&!R.stencilBuffer){let ne=s.DEPTH_COMPONENT24;if(q||he(R)){let ae=R.depthTexture;ae&&ae.isDepthTexture&&(ae.type===ln?ne=s.DEPTH_COMPONENT32F:ae.type===Si&&(ne=s.DEPTH_COMPONENT24));let z=ee(R);he(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,ne,R.width,R.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,z,ne,R.width,R.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,R.width,R.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(R.depthBuffer&&R.stencilBuffer){let ne=ee(R);q&&he(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,R.width,R.height):he(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let ne=R.textures;for(let ae=0;ae<ne.length;ae++){let z=ne[ae],me=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),de=x(z.internalFormat,me,ce,z.colorSpace),Te=ee(R);q&&he(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,de,R.width,R.height):he(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Te,de,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,de,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(N,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),I(R.depthTexture,0);let ne=n.get(R.depthTexture).__webglTexture,ae=ee(R);if(R.depthTexture.format===Dr)he(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(R.depthTexture.format===Es)he(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,ae):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function oe(N){let R=n.get(N),q=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!R.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pe(R.__webglFramebuffer,N)}else if(q){R.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[ne]),R.__webglDepthbuffer[ne]=s.createRenderbuffer(),te(R.__webglDepthbuffer[ne],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),te(R.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(N,R,q){let ne=n.get(N);R!==void 0&&W(ne.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&oe(N)}function we(N){let R=N.texture,q=n.get(N),ne=n.get(R);N.addEventListener("dispose",E);let ae=N.textures,z=N.isWebGLCubeRenderTarget===!0,me=ae.length>1;if(me||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=R.version,a.memory.textures++),z){q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer[ce]=[];for(let de=0;de<R.mipmaps.length;de++)q.__webglFramebuffer[ce][de]=s.createFramebuffer()}else q.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){q.__webglFramebuffer=[];for(let ce=0;ce<R.mipmaps.length;ce++)q.__webglFramebuffer[ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(me)for(let ce=0,de=ae.length;ce<de;ce++){let Te=n.get(ae[ce]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&he(N)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ce=0;ce<ae.length;ce++){let de=ae[ce];q.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[ce]);let Te=r.convert(de.format,de.colorSpace),ue=r.convert(de.type),Se=x(de.internalFormat,Te,ue,de.colorSpace,N.isXRRenderTarget===!0),Le=ee(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Se,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),te(q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),j(s.TEXTURE_CUBE_MAP,R);for(let ce=0;ce<6;ce++)if(R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)W(q.__webglFramebuffer[ce][de],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else W(q.__webglFramebuffer[ce],N,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(R)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ce=0,de=ae.length;ce<de;ce++){let Te=ae[ce],ue=n.get(Te);t.bindTexture(s.TEXTURE_2D,ue.__webglTexture),j(s.TEXTURE_2D,Te),W(q.__webglFramebuffer,N,Te,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),m(Te)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ne.__webglTexture),j(ce,R),R.mipmaps&&R.mipmaps.length>0)for(let de=0;de<R.mipmaps.length;de++)W(q.__webglFramebuffer[de],N,R,s.COLOR_ATTACHMENT0,ce,de);else W(q.__webglFramebuffer,N,R,s.COLOR_ATTACHMENT0,ce,0);m(R)&&g(ce),t.unbindTexture()}N.depthBuffer&&oe(N)}function B(N){let R=N.textures;for(let q=0,ne=R.length;q<ne;q++){let ae=R[q];if(m(ae)){let z=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(ae).__webglTexture;t.bindTexture(z,me),g(z),t.unbindTexture()}}}let fe=[],Z=[];function se(N){if(N.samples>0){if(he(N)===!1){let R=N.textures,q=N.width,ne=N.height,ae=s.COLOR_BUFFER_BIT,z=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(N),ce=R.length>1;if(ce)for(let de=0;de<R.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let de=0;de<R.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ae|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ae|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let Te=n.get(R[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Te,0)}s.blitFramebuffer(0,0,q,ne,0,0,q,ne,ae,s.NEAREST),l===!0&&(fe.length=0,Z.length=0,fe.push(s.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.resolveDepthBuffer===!1&&(fe.push(z),Z.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let de=0;de<R.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,me.__webglColorRenderbuffer[de]);let Te=n.get(R[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Te,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let R=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function ee(N){return Math.min(i.maxSamples,N.samples)}function he(N){let R=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function re(N){let R=a.render.frame;h.get(N)!==R&&(h.set(N,R),N.update())}function Ee(N,R){let q=N.colorSpace,ne=N.format,ae=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||q!==kt&&q!==On&&(rt.getTransfer(q)===gt?(ne!==Kt||ae!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),R}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=w,this.setTexture2D=I,this.setTexture2DArray=P,this.setTexture3D=L,this.setTextureCube=k,this.rebindTextures=Re,this.setupRenderTarget=we,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=W,this.useMultisampledRTT=he}function r0(s,e){function t(n,i=On){let r,a=rt.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dd)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Rg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ag)return s.BYTE;if(n===Tg)return s.SHORT;if(n===Cd)return s.UNSIGNED_SHORT;if(n===Pd)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===ln)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===Cg)return s.ALPHA;if(n===Pg)return s.RGB;if(n===Kt)return s.RGBA;if(n===Lg)return s.LUMINANCE;if(n===Dg)return s.LUMINANCE_ALPHA;if(n===Dr)return s.DEPTH_COMPONENT;if(n===Es)return s.DEPTH_STENCIL;if(n===Id)return s.RED;if(n===Nd)return s.RED_INTEGER;if(n===Ig)return s.RG;if(n===Fd)return s.RG_INTEGER;if(n===Od)return s.RGBA_INTEGER;if(n===dc||n===fc||n===pc||n===mc)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===qh||n===Xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===Kh||n===Yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jh||n===Kh)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jh||n===$h||n===Zh||n===Qh||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===cu||n===lu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===iu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ru)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===su)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===au)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===gc||n===hu||n===uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===gc)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ng||n===du||n===fu||n===pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var Sc=class extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},hn=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},YM={type:"move"},ba=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new St,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Wt({vertexShader:JM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new it(new Ei(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Lu=class extends xn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,v=new Pu,m=t.getContextAttributes(),g=null,x=null,b=[],_=[],E=new Y,M=null,A=new vt;A.layers.enable(1),A.viewport=new et;let C=new vt;C.layers.enable(2),C.viewport=new et;let y=[A,C],w=new Sc;w.layers.enable(1),w.layers.enable(2);let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=b[W];return te===void 0&&(te=new ba,b[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=b[W];return te===void 0&&(te=new ba,b[W]=te),te.getGripSpace()},this.getHand=function(W){let te=b[W];return te===void 0&&(te=new ba,b[W]=te),te.getHandSpace()};function I(W){let te=_.indexOf(W.inputSource);if(te===-1)return;let pe=b[te];pe!==void 0&&(pe.update(W.inputSource,W.frame,c||a),pe.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",L);for(let W=0;W<b.length;W++){let te=_[W];te!==null&&(_[W]=null,b[W].disconnect(te))}F=null,O=null,v.reset(),e.setRenderTarget(g),f=null,d=null,u=null,i=null,x=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",P),i.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nt(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Es:Dr,pe=m.stencil?qs:Si);let Re={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Nt(d.textureWidth,d.textureHeight,{format:Kt,type:zn,depthTexture:new Br(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(W){for(let te=0;te<W.removed.length;te++){let pe=W.removed[te],oe=_.indexOf(pe);oe>=0&&(_[oe]=null,b[oe].disconnect(pe))}for(let te=0;te<W.added.length;te++){let pe=W.added[te],oe=_.indexOf(pe);if(oe===-1){for(let we=0;we<b.length;we++)if(we>=_.length){_.push(pe),oe=we;break}else if(_[we]===null){_[we]=pe,oe=we;break}if(oe===-1)break}let Re=b[oe];Re&&Re.connect(pe)}}let k=new T,X=new T;function U(W,te,pe){k.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(pe.matrixWorld);let oe=k.distanceTo(X),Re=te.projectionMatrix.elements,we=pe.projectionMatrix.elements,B=Re[14]/(Re[10]-1),fe=Re[14]/(Re[10]+1),Z=(Re[9]+1)/Re[5],se=(Re[9]-1)/Re[5],ee=(Re[8]-1)/Re[0],he=(we[8]+1)/we[0],re=B*ee,Ee=B*he,Pe=oe/(-ee+he),N=Pe*-ee;te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(N),W.translateZ(Pe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let R=B+Pe,q=fe+Pe,ne=re-N,ae=Ee+(oe-N),z=Z*fe/q*R,me=se*fe/q*R;W.projectionMatrix.makePerspective(ne,ae,z,me,R,q),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function V(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),w.near=C.near=A.near=W.near,w.far=C.far=A.far=W.far,(F!==w.near||O!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),F=w.near,O=w.far,A.near=F,A.far=O,C.near=F,C.far=O,A.updateProjectionMatrix(),C.updateProjectionMatrix(),W.updateProjectionMatrix());let te=W.parent,pe=w.cameras;V(w,te);for(let oe=0;oe<pe.length;oe++)V(pe[oe],te);pe.length===2?U(w,A,C):w.projectionMatrix.copy(A.projectionMatrix),j(W,w,te)};function j(W,te,pe){pe===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(pe.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=As*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let ie=null;function be(W,te){if(h=te.getViewerPose(c||a),p=te,h!==null){let pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,oe=!0);for(let we=0;we<pe.length;we++){let B=pe[we],fe=null;if(f!==null)fe=f.getViewport(B);else{let se=u.getViewSubImage(d,B);fe=se.viewport,we===0&&(e.setRenderTargetTextures(x,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),e.setRenderTarget(x))}let Z=y[we];Z===void 0&&(Z=new vt,Z.layers.enable(we),Z.viewport=new et,y[we]=Z),Z.matrix.fromArray(B.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(B.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(fe.x,fe.y,fe.width,fe.height),we===0&&(w.matrix.copy(Z.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),oe===!0&&w.cameras.push(Z)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let we=u.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&v.init(e,we,i.renderState)}}for(let pe=0;pe<b.length;pe++){let oe=_[pe],Re=b[pe];oe!==null&&Re!==void 0&&Re.update(oe,te,c||a)}v.render(e,w),ie&&ie(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let _e=new Zg;_e.setAnimationLoop(be),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}},vr=new _n,ZM=new De;function QM(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$g(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,x,b,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Gt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Gt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),b=x.envMap,_=x.envMapRotation;if(b&&(m.envMap.value=b,vr.copy(_),vr.x*=-1,vr.y*=-1,vr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),m.envMapRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(vr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap){m.lightMap.value=g.lightMap;let E=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=g.lightMapIntensity*E,t(g.lightMap,m.lightMapTransform)}g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Gt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eS(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let _=b.program;n.uniformBlockBinding(x,_)}function c(x,b){let _=i[x.id];_===void 0&&(p(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",m));let E=b.program;n.updateUBOMapping(x,E);let M=e.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function h(x){let b=u();x.__bindingPointIndex=b;let _=s.createBuffer(),E=x.__size,M=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let b=i[x.id],_=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,A=_.length;M<A;M++){let C=Array.isArray(_[M])?_[M]:[_[M]];for(let y=0,w=C.length;y<w;y++){let F=C[y];if(f(F,M,y,E)===!0){let O=F.__offset,I=Array.isArray(F.value)?F.value:[F.value],P=0;for(let L=0;L<I.length;L++){let k=I[L],X=v(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,O+P,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,_,E){let M=x.value,A=b+"_"+_;if(E[A]===void 0)return typeof M=="number"||typeof M=="boolean"?E[A]=M:E[A]=M.clone(),!0;{let C=E[A];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return E[A]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function p(x){let b=x.uniforms,_=0,E=16;for(let A=0,C=b.length;A<C;A++){let y=Array.isArray(b[A])?b[A]:[b[A]];for(let w=0,F=y.length;w<F;w++){let O=y[w],I=Array.isArray(O.value)?O.value:[O.value];for(let P=0,L=I.length;P<L;P++){let k=I[P],X=v(k),U=_%E;U!==0&&E-U<X.boundary&&(_+=E-U),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=X.storage}}}let M=_%E;return M>0&&(_+=E-M),x.__size=_,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){let b=x.target;b.removeEventListener("dispose",m);let _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function g(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:g}}var Ua=class{constructor(e={}){let{canvas:t=Kg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),p=new Int32Array(4),v=null,m=null,g=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let b=this,_=!1,E=0,M=0,A=null,C=-1,y=null,w=new et,F=new et,O=null,I=new xe(0),P=0,L=t.width,k=t.height,X=1,U=null,V=null,j=new et(0,0,L,k),ie=new et(0,0,L,k),be=!1,_e=new kr,W=!1,te=!1,pe=new De,oe=new T,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return A===null?X:1}let B=n;function fe(D,G){return t.getContext(D,G)}try{let D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",K,!1),B===null){let G="webgl2";if(B=fe(G,D),B===null)throw fe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Z,se,ee,he,re,Ee,Pe,N,R,q,ne,ae,z,me,ce,de,Te,ue,Se,Le,ye,ge,Fe,ze;function at(){Z=new _w(B),Z.init(),ge=new r0(B,Z),se=new pw(B,Z,e,ge),ee=new jM(B),he=new Mw(B),re=new FM,Ee=new KM(B,Z,ee,re,se,ge,he),Pe=new gw(b),N=new xw(b),R=new Px(B),Fe=new dw(B,R),q=new yw(B,R,he,Fe),ne=new Ew(B,q,R,he),Se=new Sw(B,se,Ee),de=new mw(re),ae=new NM(b,Pe,N,Z,se,Fe,de),z=new QM(b,re),me=new UM,ce=new GM(Z),ue=new uw(b,Pe,N,ee,ne,d,l),Te=new XM(b,ne,se),ze=new eS(B,he,se,ee),Le=new fw(B,Z,he),ye=new ww(B,Z,he),he.programs=ae.programs,b.capabilities=se,b.extensions=Z,b.properties=re,b.renderLists=me,b.shadowMap=Te,b.state=ee,b.info=he}at();let We=new Lu(b,B);this.xr=We,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let D=Z.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=Z.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(L,k,!1))},this.getSize=function(D){return D.set(L,k)},this.setSize=function(D,G,Q=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=D,k=G,t.width=Math.floor(D*X),t.height=Math.floor(G*X),Q===!0&&(t.style.width=D+"px",t.style.height=G+"px"),this.setViewport(0,0,D,G)},this.getDrawingBufferSize=function(D){return D.set(L*X,k*X).floor()},this.setDrawingBufferSize=function(D,G,Q){L=D,k=G,X=Q,t.width=Math.floor(D*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,D,G)},this.getCurrentViewport=function(D){return D.copy(w)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,G,Q,J){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,G,Q,J),ee.viewport(w.copy(j).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(ie)},this.setScissor=function(D,G,Q,J){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,G,Q,J),ee.scissor(F.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(D){ee.setScissorTest(be=D)},this.setOpaqueSort=function(D){U=D},this.setTransparentSort=function(D){V=D},this.getClearColor=function(D){return D.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(D=!0,G=!0,Q=!0){let J=0;if(D){let $=!1;if(A!==null){let Ae=A.texture.format;$=Ae===Od||Ae===Fd||Ae===Nd}if($){let Ae=A.texture.type,Ie=Ae===zn||Ae===Si||Ae===Cd||Ae===qs||Ae===Ld||Ae===Dd,Ne=ue.getClearColor(),Be=ue.getClearAlpha(),je=Ne.r,$e=Ne.g,Qe=Ne.b;Ie?(f[0]=je,f[1]=$e,f[2]=Qe,f[3]=Be,B.clearBufferuiv(B.COLOR,0,f)):(p[0]=je,p[1]=$e,p[2]=Qe,p[3]=Be,B.clearBufferiv(B.COLOR,0,p))}else J|=B.COLOR_BUFFER_BIT}G&&(J|=B.DEPTH_BUFFER_BIT),Q&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",K,!1),me.dispose(),ce.dispose(),re.dispose(),Pe.dispose(),N.dispose(),ne.dispose(),Fe.dispose(),ze.dispose(),ae.dispose(),We.dispose(),We.removeEventListener("sessionstart",Xe),We.removeEventListener("sessionend",yt),pt.stop()};function S(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let D=he.autoReset,G=Te.enabled,Q=Te.autoUpdate,J=Te.needsUpdate,$=Te.type;at(),he.autoReset=D,Te.enabled=G,Te.autoUpdate=Q,Te.needsUpdate=J,Te.type=$}function K(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function le(D){let G=D.target;G.removeEventListener("dispose",le),ve(G)}function ve(D){qe(D),re.remove(D)}function qe(D){let G=re.get(D).programs;G!==void 0&&(G.forEach(function(Q){ae.releaseProgram(Q)}),D.isShaderMaterial&&ae.releaseShaderCache(D))}this.renderBufferDirect=function(D,G,Q,J,$,Ae){G===null&&(G=Re);let Ie=$.isMesh&&$.matrixWorld.determinant()<0,Ne=db(D,G,Q,J,$);ee.setMaterial(J,Ie);let Be=Q.index,je=1;if(J.wireframe===!0){if(Be=q.getWireframeAttribute(Q),Be===void 0)return;je=2}let $e=Q.drawRange,Qe=Q.attributes.position,Pt=$e.start*je,Yt=($e.start+$e.count)*je;Ae!==null&&(Pt=Math.max(Pt,Ae.start*je),Yt=Math.min(Yt,(Ae.start+Ae.count)*je)),Be!==null?(Pt=Math.max(Pt,0),Yt=Math.min(Yt,Be.count)):Qe!=null&&(Pt=Math.max(Pt,0),Yt=Math.min(Yt,Qe.count));let pn=Yt-Pt;if(pn<0||pn===1/0)return;Fe.setup($,J,Ne,Q,Be);let hi,lt=Le;if(Be!==null&&(hi=R.get(Be),lt=ye,lt.setIndex(hi)),$.isMesh)J.wireframe===!0?(ee.setLineWidth(J.wireframeLinewidth*we()),lt.setMode(B.LINES)):lt.setMode(B.TRIANGLES);else if($.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),ee.setLineWidth(Ke*we()),$.isLineSegments?lt.setMode(B.LINES):$.isLineLoop?lt.setMode(B.LINE_LOOP):lt.setMode(B.LINE_STRIP)}else $.isPoints?lt.setMode(B.POINTS):$.isSprite&&lt.setMode(B.TRIANGLES);if($.isBatchedMesh)$._multiDrawInstances!==null?lt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances):lt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)lt.renderInstances(Pt,pn,$.count);else if(Q.isInstancedBufferGeometry){let Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,ta=Math.min(Q.instanceCount,Ke);lt.renderInstances(Pt,pn,ta)}else lt.render(Pt,pn)};function Je(D,G,Q){D.transparent===!0&&D.side===Vt&&D.forceSinglePass===!1?(D.side=Gt,D.needsUpdate=!0,xo(D,G,Q),D.side=kn,D.needsUpdate=!0,xo(D,G,Q),D.side=Vt):xo(D,G,Q)}this.compile=function(D,G,Q=null){Q===null&&(Q=D),m=ce.get(Q),m.init(G),x.push(m),Q.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),D!==Q&&D.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(b._useLegacyLights);let J=new Set;return D.traverse(function($){let Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){let Ne=Ae[Ie];Je(Ne,Q,$),J.add(Ne)}else Je(Ae,Q,$),J.add(Ae)}),x.pop(),m=null,J},this.compileAsync=function(D,G,Q=null){let J=this.compile(D,G,Q);return new Promise($=>{function Ae(){if(J.forEach(function(Ie){re.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){$(D);return}setTimeout(Ae,10)}Z.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ke=null;function ot(D){ke&&ke(D)}function Xe(){pt.stop()}function yt(){pt.start()}let pt=new Zg;pt.setAnimationLoop(ot),typeof self<"u"&&pt.setContext(self),this.setAnimationLoop=function(D){ke=D,We.setAnimationLoop(D),D===null?pt.stop():pt.start()},We.addEventListener("sessionstart",Xe),We.addEventListener("sessionend",yt),this.render=function(D,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),D.isScene===!0&&D.onBeforeRender(b,D,G,A),m=ce.get(D,x.length),m.init(G),x.push(m),pe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),_e.setFromProjectionMatrix(pe),te=this.localClippingEnabled,W=de.init(this.clippingPlanes,te),v=me.get(D,g.length),v.init(),g.push(v),En(D,G,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(U,V);let Q=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1;Q&&ue.addToRenderList(v,D),this.info.render.frame++,W===!0&&de.beginShadows();let J=m.state.shadowsArray;Te.render(J,D,G),W===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let $=v.opaque,Ae=v.transmissive;if(m.setupLights(b._useLegacyLights),G.isArrayCamera){let Ie=G.cameras;if(Ae.length>0)for(let Ne=0,Be=Ie.length;Ne<Be;Ne++){let je=Ie[Ne];Ui($,Ae,D,je)}Q&&ue.render(D);for(let Ne=0,Be=Ie.length;Ne<Be;Ne++){let je=Ie[Ne];An(v,D,je,je.viewport)}}else Ae.length>0&&Ui($,Ae,D,G),Q&&ue.render(D),An(v,D,G);A!==null&&(Ee.updateMultisampleRenderTarget(A),Ee.updateRenderTargetMipmap(A)),D.isScene===!0&&D.onAfterRender(b,D,G),Fe.resetDefaultState(),C=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],W===!0&&de.setGlobalState(b.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function En(D,G,Q,J){if(D.visible===!1)return;if(D.layers.test(G.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(G);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||_e.intersectsSprite(D)){J&&oe.setFromMatrixPosition(D.matrixWorld).applyMatrix4(pe);let Ie=ne.update(D),Ne=D.material;Ne.visible&&v.push(D,Ie,Ne,Q,oe.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||_e.intersectsObject(D))){let Ie=ne.update(D),Ne=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),oe.copy(D.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),oe.copy(Ie.boundingSphere.center)),oe.applyMatrix4(D.matrixWorld).applyMatrix4(pe)),Array.isArray(Ne)){let Be=Ie.groups;for(let je=0,$e=Be.length;je<$e;je++){let Qe=Be[je],Pt=Ne[Qe.materialIndex];Pt&&Pt.visible&&v.push(D,Ie,Pt,Q,oe.z,Qe)}}else Ne.visible&&v.push(D,Ie,Ne,Q,oe.z,null)}}let Ae=D.children;for(let Ie=0,Ne=Ae.length;Ie<Ne;Ie++)En(Ae[Ie],G,Q,J)}function An(D,G,Q,J){let $=D.opaque,Ae=D.transmissive,Ie=D.transparent;m.setupLightsView(Q),W===!0&&de.setGlobalState(b.clippingPlanes,Q),J&&ee.viewport(w.copy(J)),$.length>0&&li($,G,Q),Ae.length>0&&li(Ae,G,Q),Ie.length>0&&li(Ie,G,Q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ui(D,G,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Nt(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Xn:zn,minFilter:vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let Ae=m.state.transmissionRenderTarget[J.id],Ie=J.viewport||w;Ae.setSize(Ie.z,Ie.w);let Ne=b.getRenderTarget();b.setRenderTarget(Ae),b.getClearColor(I),P=b.getClearAlpha(),P<1&&b.setClearColor(16777215,.5),b.clear();let Be=b.toneMapping;b.toneMapping=Un;let je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),W===!0&&de.setGlobalState(b.clippingPlanes,J),li(D,Q,J),Ee.updateMultisampleRenderTarget(Ae),Ee.updateRenderTargetMipmap(Ae),Z.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Qe=0,Pt=G.length;Qe<Pt;Qe++){let Yt=G[Qe],pn=Yt.object,hi=Yt.geometry,lt=Yt.material,Ke=Yt.group;if(lt.side===Vt&&pn.layers.test(J.layers)){let ta=lt.side;lt.side=Gt,lt.needsUpdate=!0,ea(pn,Q,J,hi,lt,Ke),lt.side=ta,lt.needsUpdate=!0,$e=!0}}$e===!0&&(Ee.updateMultisampleRenderTarget(Ae),Ee.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ne),b.setClearColor(I,P),je!==void 0&&(J.viewport=je),b.toneMapping=Be}function li(D,G,Q){let J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,Ae=D.length;$<Ae;$++){let Ie=D[$],Ne=Ie.object,Be=Ie.geometry,je=J===null?Ie.material:J,$e=Ie.group;Ne.layers.test(Q.layers)&&ea(Ne,G,Q,Be,je,$e)}}function ea(D,G,Q,J,$,Ae){D.onBeforeRender(b,G,Q,J,$,Ae),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),$.onBeforeRender(b,G,Q,J,D,Ae),$.transparent===!0&&$.side===Vt&&$.forceSinglePass===!1?($.side=Gt,$.needsUpdate=!0,b.renderBufferDirect(Q,G,J,$,D,Ae),$.side=kn,$.needsUpdate=!0,b.renderBufferDirect(Q,G,J,$,D,Ae),$.side=Vt):b.renderBufferDirect(Q,G,J,$,D,Ae),D.onAfterRender(b,G,Q,J,$,Ae)}function xo(D,G,Q){G.isScene!==!0&&(G=Re);let J=re.get(D),$=m.state.lights,Ae=m.state.shadowsArray,Ie=$.state.version,Ne=ae.getParameters(D,$.state,Ae,G,Q),Be=ae.getProgramCacheKey(Ne),je=J.programs;J.environment=D.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(D.isMeshStandardMaterial?N:Pe).get(D.envMap||J.environment),J.envMapRotation=J.environment!==null&&D.envMap===null?G.environmentRotation:D.envMapRotation,je===void 0&&(D.addEventListener("dispose",le),je=new Map,J.programs=je);let $e=je.get(Be);if($e!==void 0){if(J.currentProgram===$e&&J.lightsStateVersion===Ie)return op(D,Ne),$e}else Ne.uniforms=ae.getUniforms(D),D.onBuild(Q,Ne,b),D.onBeforeCompile(Ne,b),$e=ae.acquireProgram(Ne,Be),je.set(Be,$e),J.uniforms=Ne.uniforms;let Qe=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qe.clippingPlanes=de.uniform),op(D,Ne),J.needsLights=pb(D),J.lightsStateVersion=Ie,J.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=$e,J.uniformsList=null,$e}function ap(D){if(D.uniformsList===null){let G=D.currentProgram.getUniforms();D.uniformsList=Ss.seqWithValue(G.seq,D.uniforms)}return D.uniformsList}function op(D,G){let Q=re.get(D);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function db(D,G,Q,J,$){G.isScene!==!0&&(G=Re),Ee.resetTextureUnits();let Ae=G.fog,Ie=J.isMeshStandardMaterial?G.environment:null,Ne=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:kt,Be=(J.isMeshStandardMaterial?N:Pe).get(J.envMap||Ie),je=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$e=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!Q.morphAttributes.position,Pt=!!Q.morphAttributes.normal,Yt=!!Q.morphAttributes.color,pn=Un;J.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pn=b.toneMapping);let hi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=hi!==void 0?hi.length:0,Ke=re.get(J),ta=m.state.lights;if(W===!0&&(te===!0||D!==y)){let Tn=D===y&&J.id===C;de.setState(J,D,Tn)}let xt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ta.state.version||Ke.outputColorSpace!==Ne||$.isBatchedMesh&&Ke.batching===!1||!$.isBatchedMesh&&Ke.batching===!0||$.isInstancedMesh&&Ke.instancing===!1||!$.isInstancedMesh&&Ke.instancing===!0||$.isSkinnedMesh&&Ke.skinning===!1||!$.isSkinnedMesh&&Ke.skinning===!0||$.isInstancedMesh&&Ke.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ke.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ke.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ke.instancingMorph===!1&&$.morphTexture!==null||Ke.envMap!==Be||J.fog===!0&&Ke.fog!==Ae||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==de.numPlanes||Ke.numIntersection!==de.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==$e||Ke.morphTargets!==Qe||Ke.morphNormals!==Pt||Ke.morphColors!==Yt||Ke.toneMapping!==pn||Ke.morphTargetsCount!==lt)&&(xt=!0):(xt=!0,Ke.__version=J.version);let ur=Ke.currentProgram;xt===!0&&(ur=xo(J,G,$));let cp=!1,na=!1,$l=!1,Jt=ur.getUniforms(),ki=Ke.uniforms;if(ee.useProgram(ur.program)&&(cp=!0,na=!0,$l=!0),J.id!==C&&(C=J.id,na=!0),cp||y!==D){Jt.setValue(B,"projectionMatrix",D.projectionMatrix),Jt.setValue(B,"viewMatrix",D.matrixWorldInverse);let Tn=Jt.map.cameraPosition;Tn!==void 0&&Tn.setValue(B,oe.setFromMatrixPosition(D.matrixWorld)),se.logarithmicDepthBuffer&&Jt.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Jt.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),y!==D&&(y=D,na=!0,$l=!0)}if($.isSkinnedMesh){Jt.setOptional(B,$,"bindMatrix"),Jt.setOptional(B,$,"bindMatrixInverse");let Tn=$.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Jt.setValue(B,"boneTexture",Tn.boneTexture,Ee))}$.isBatchedMesh&&(Jt.setOptional(B,$,"batchingTexture"),Jt.setValue(B,"batchingTexture",$._matricesTexture,Ee));let Zl=Q.morphAttributes;if((Zl.position!==void 0||Zl.normal!==void 0||Zl.color!==void 0)&&Se.update($,Q,ur),(na||Ke.receiveShadow!==$.receiveShadow)&&(Ke.receiveShadow=$.receiveShadow,Jt.setValue(B,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(ki.envMap.value=Be,ki.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(ki.envMapIntensity.value=G.environmentIntensity),na&&(Jt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Ke.needsLights&&fb(ki,$l),Ae&&J.fog===!0&&z.refreshFogUniforms(ki,Ae),z.refreshMaterialUniforms(ki,J,X,k,m.state.transmissionRenderTarget[D.id]),Ss.upload(B,ap(Ke),ki,Ee)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ss.upload(B,ap(Ke),ki,Ee),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Jt.setValue(B,"center",$.center),Jt.setValue(B,"modelViewMatrix",$.modelViewMatrix),Jt.setValue(B,"normalMatrix",$.normalMatrix),Jt.setValue(B,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let Tn=J.uniformsGroups;for(let Ql=0,mb=Tn.length;Ql<mb;Ql++){let lp=Tn[Ql];ze.update(lp,ur),ze.bind(lp,ur)}}return ur}function fb(D,G){D.ambientLightColor.needsUpdate=G,D.lightProbe.needsUpdate=G,D.directionalLights.needsUpdate=G,D.directionalLightShadows.needsUpdate=G,D.pointLights.needsUpdate=G,D.pointLightShadows.needsUpdate=G,D.spotLights.needsUpdate=G,D.spotLightShadows.needsUpdate=G,D.rectAreaLights.needsUpdate=G,D.hemisphereLights.needsUpdate=G}function pb(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(D,G,Q){re.get(D.texture).__webglTexture=G,re.get(D.depthTexture).__webglTexture=Q;let J=re.get(D);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,G){let Q=re.get(D);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(D,G=0,Q=0){A=D,E=G,M=Q;let J=!0,$=null,Ae=!1,Ie=!1;if(D){let Be=re.get(D);Be.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(B.FRAMEBUFFER,null),J=!1):Be.__webglFramebuffer===void 0?Ee.setupRenderTarget(D):Be.__hasExternalTextures&&Ee.rebindTextures(D,re.get(D.texture).__webglTexture,re.get(D.depthTexture).__webglTexture);let je=D.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);let $e=re.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($e[G])?$=$e[G][Q]:$=$e[G],Ae=!0):D.samples>0&&Ee.useMultisampledRTT(D)===!1?$=re.get(D).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[Q]:$=$e,w.copy(D.viewport),F.copy(D.scissor),O=D.scissorTest}else w.copy(j).multiplyScalar(X).floor(),F.copy(ie).multiplyScalar(X).floor(),O=be;if(ee.bindFramebuffer(B.FRAMEBUFFER,$)&&J&&ee.drawBuffers(D,$),ee.viewport(w),ee.scissor(F),ee.setScissorTest(O),Ae){let Be=re.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,Q)}else if(Ie){let Be=re.get(D.texture),je=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,je)}C=-1},this.readRenderTargetPixels=function(D,G,Q,J,$,Ae,Ie){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=re.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){ee.bindFramebuffer(B.FRAMEBUFFER,Ne);try{let Be=D.texture,je=Be.format,$e=Be.type;if(!se.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=D.width-J&&Q>=0&&Q<=D.height-$&&B.readPixels(G,Q,J,$,ge.convert(je),ge.convert($e),Ae)}finally{let Be=A!==null?re.get(A).__webglFramebuffer:null;ee.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(D,G,Q=0){let J=Math.pow(2,-Q),$=Math.floor(G.image.width*J),Ae=Math.floor(G.image.height*J);Ee.setTexture2D(G,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,D.x,D.y,$,Ae),ee.unbindTexture()},this.copyTextureToTexture=function(D,G,Q,J=0){let $=G.image.width,Ae=G.image.height,Ie=ge.convert(Q.format),Ne=ge.convert(Q.type);Ee.setTexture2D(Q,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,J,D.x,D.y,$,Ae,Ie,Ne,G.image.data):G.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,J,D.x,D.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,J,D.x,D.y,Ie,Ne,G.image),J===0&&Q.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(D,G,Q,J,$=0){let Ae=D.max.x-D.min.x,Ie=D.max.y-D.min.y,Ne=D.max.z-D.min.z,Be=ge.convert(J.format),je=ge.convert(J.type),$e;if(J.isData3DTexture)Ee.setTexture3D(J,0),$e=B.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)Ee.setTexture2DArray(J,0),$e=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,J.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,J.unpackAlignment);let Qe=B.getParameter(B.UNPACK_ROW_LENGTH),Pt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Yt=B.getParameter(B.UNPACK_SKIP_PIXELS),pn=B.getParameter(B.UNPACK_SKIP_ROWS),hi=B.getParameter(B.UNPACK_SKIP_IMAGES),lt=Q.isCompressedTexture?Q.mipmaps[$]:Q.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,D.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,D.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?B.texSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Ne,Be,je,lt.data):J.isCompressedArrayTexture?B.compressedTexSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Ne,Be,lt.data):B.texSubImage3D($e,$,G.x,G.y,G.z,Ae,Ie,Ne,Be,je,lt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Qe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Yt),B.pixelStorei(B.UNPACK_SKIP_ROWS,pn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,hi),$===0&&J.generateMipmaps&&B.generateMipmap($e),ee.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ee.setTextureCube(D,0):D.isData3DTexture?Ee.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ee.setTexture2DArray(D,0):Ee.setTexture2D(D,0),ee.unbindTexture()},this.resetState=function(){E=0,M=0,A=null,ee.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===yl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===so?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Ec=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new xe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ls=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new xe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ra,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Yg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new T,yn=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Oe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ka=class extends Tt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ps,oa=new T,ms=new T,gs=new T,vs=new Y,ca=new Y,s0=new De,Ho=new T,la=new T,Vo=new T,Zp=new Y,Sh=new Y,Qp=new Y,Ac=class extends nt{constructor(e=new ka){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Ve;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hn(t,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new yn(n,3,0,!1)),ps.setAttribute("uv",new yn(n,2,3,!1))}this.geometry=ps,this.material=e,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),s0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Go(Ho.set(-.5,-.5,0),gs,a,ms,i,r),Go(la.set(.5,-.5,0),gs,a,ms,i,r),Go(Vo.set(.5,.5,0),gs,a,ms,i,r),Zp.set(0,0),Sh.set(1,0),Qp.set(1,1);let o=e.ray.intersectTriangle(Ho,la,Vo,!1,oa);if(o===null&&(Go(la.set(-.5,.5,0),gs,a,ms,i,r),Sh.set(0,1),o=e.ray.intersectTriangle(Ho,Vo,la,!1,oa),o===null))return;let l=e.ray.origin.distanceTo(oa);l<e.near||l>e.far||t.push({distance:l,point:oa.clone(),uv:xi.getInterpolation(oa,Ho,la,Vo,Zp,Sh,Qp,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Go(s,e,t,n,i,r){vs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ca.x=r*vs.x-i*vs.y,ca.y=i*vs.x+r*vs.y):ca.copy(vs),s.copy(e),s.x+=ca.x,s.y+=ca.y,s.applyMatrix4(s0)}var Wo=new T,em=new T,Tc=class extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Wo.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Wo);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Wo.setFromMatrixPosition(e.matrixWorld),em.setFromMatrixPosition(this.matrixWorld);let n=Wo.distanceTo(em)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},tm=new T,nm=new et,im=new et,tS=new T,rm=new De,qo=new T,Eh=new Mt,sm=new De,Ah=new Qn,Ds=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Vh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingBox.expandByPoint(qo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,qo),this.boundingSphere.expandByPoint(qo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Eh.copy(this.boundingSphere),Eh.applyMatrix4(i),e.ray.intersectsSphere(Eh)!==!1&&(sm.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(sm),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Vh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Eg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;nm.fromBufferAttribute(i.attributes.skinIndex,e),im.fromBufferAttribute(i.attributes.skinWeight,e),tm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=im.getComponent(r);if(a!==0){let o=nm.getComponent(r);rm.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tS.copy(tm).applyMatrix4(rm),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},zr=class extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},un=class extends St{constructor(e=null,t=1,n=1,i,r,a,o,l,c=_t,h=_t,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},am=new De,nS=new De,Is=class s{constructor(e=[],t=[]){this.uuid=bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:nS;am.multiplyMatrices(o,t[r]),am.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new un(t,e,e,Kt,ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new zr),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Vn=class extends Oe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},bs=new De,om=new De,Xo=[],cm=new dt,iS=new De,ha=new it,ua=new Mt,Ns=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Vn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,iS)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),cm.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(cm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,bs),ua.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(ha.geometry=this.geometry,ha.material=this.material,ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,bs),om.multiplyMatrices(n,bs),ha.matrixWorld=om,ha.raycast(e,Xo);for(let a=0,o=Xo.length;a<o;a++){let l=Xo[a];l.instanceId=r,l.object=this,t.push(l)}Xo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Vn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new un(new Float32Array(i*this.count),i,this.count,Id,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function rS(s,e){return s.z-e.z}function sS(s,e){return e.z-s.z}var Du=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}},xs="batchId",qi=new De,lm=new De,aS=new De,hm=new De,Th=new kr,jo=new dt,br=new Mt,da=new T,Rh=new Du,Qt=new it,Ko=[];function oS(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}var Rc=class extends it{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Ve,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new un(t,e,e,Kt,ln);this._matricesTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let o in e.attributes){let l=e.getAttribute(o),{array:c,itemSize:h,normalized:u}=l,d=new c.constructor(n*h),f=new Oe(d,h,u);t.setAttribute(o,f)}if(e.getIndex()!==null){let o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Oe(o,1))}let a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(xs,new Oe(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(xs))throw new Error(`BatchedMesh: Geometry cannot use attribute "${xs}"`);let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(n===xs)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,qi),this.getBoundingBoxAt(i,jo).applyMatrix4(qi),t.union(jo))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mt);let e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,qi),this.getBoundingSphereAt(i,br).applyMatrix4(qi),t.union(br))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._visibility,d=this._active,f=this._matricesTexture,p=this._matricesTexture.image.data;u.push(!0),d.push(!0);let v=this._geometryCount;this._geometryCount++,aS.toArray(p,v*16),f.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new dt,sphereInitialized:!1,sphere:new Mt});let m=this.geometry.getAttribute(xs);for(let g=0;g<i.vertexCount;g++)m.setX(i.vertexStart+g,v);return m.needsUpdate=!0,this.setGeometryAt(v,e),v}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.vertexCount;for(let f in n.attributes){if(f===xs)continue;let p=t.getAttribute(f),v=n.getAttribute(f);oS(p,v,l);let m=p.itemSize;for(let g=p.count,x=c;g<x;g++){let b=l+g;for(let _=0;_<m;_++)v.setComponent(b,_,0)}v.needsUpdate=!0,v.addUpdateRange(l*m,c*m)}if(i){let f=o.indexStart;for(let p=0;p<a.count;p++)r.setX(f+p,l+a.getX(p));for(let p=a.count,v=o.indexCount;p<v;p++)r.setX(f+p,l);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}let h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[e],d=t.getAttribute("position");return u.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;o&&(d=o.getX(d)),r.expandByPoint(da.fromBufferAttribute(l,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,jo),jo.getCenter(r.center);let o=a.index,l=a.attributes.position,c=this._drawRanges[e],h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;o&&(f=o.getX(f)),da.fromBufferAttribute(l,f),h=Math.max(h,r.center.distanceToSquared(da))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){let n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){let n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Qt.material=this.material,Qt.geometry.index=l.index,Qt.geometry.attributes=l.attributes,Qt.geometry.boundingBox===null&&(Qt.geometry.boundingBox=new dt),Qt.geometry.boundingSphere===null&&(Qt.geometry.boundingSphere=new Mt);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;let h=r[c];Qt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,Qt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Qt.geometry.boundingBox),this.getBoundingSphereAt(c,Qt.geometry.boundingSphere),Qt.raycast(e,Ko);for(let u=0,d=Ko.length;u<d;u++){let f=Ko[u];f.object=this,f.batchId=c,t.push(f)}Ko.length=0}Qt.material=null,Qt.geometry.index=null,Qt.geometry.attributes={},Qt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(hm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Th.setFromProjectionMatrix(hm,e.coordinateSystem));let p=0;if(this.sortObjects){lm.copy(this.matrixWorld).invert(),da.setFromMatrixPosition(n.matrixWorld).applyMatrix4(lm);for(let g=0,x=c.length;g<x;g++)if(c[g]&&l[g]){this.getMatrixAt(g,qi),this.getBoundingSphereAt(g,br).applyMatrix4(qi);let b=!1;if(f&&(b=!Th.intersectsSphere(br)),!b){let _=da.distanceTo(br.center);Rh.push(d[g],_)}}let v=Rh.list,m=this.customSort;m===null?v.sort(r.transparent?sS:rS):m.call(this,v,n);for(let g=0,x=v.length;g<x;g++){let b=v[g];h[p]=b.start*o,u[p]=b.count,p++}Rh.reset()}else for(let v=0,m=c.length;v<m;v++)if(c[v]&&l[v]){let g=!1;if(f&&(this.getMatrixAt(v,qi),this.getBoundingSphereAt(v,br).applyMatrix4(qi),g=!Th.intersectsSphere(br)),!g){let x=d[v];h[p]=x.start*o,u[p]=x.count,p++}}this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},Ut=class extends Tt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Cc=new T,Pc=new T,um=new De,fa=new Qn,Yo=new Mt,Ch=new T,dm=new T,Cn=class extends nt{constructor(e=new Ve,t=new Ut){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Cc.fromBufferAttribute(t,i-1),Pc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=r,e.ray.intersectsSphere(Yo)===!1)return;um.copy(i).invert(),fa.copy(e.ray).applyMatrix4(um);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=h.getX(v),x=h.getX(v+1),b=Jo(this,e,fa,l,g,x);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(p-1),m=h.getX(f),g=Jo(this,e,fa,l,v,m);g&&t.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,m=p-1;v<m;v+=c){let g=Jo(this,e,fa,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){let v=Jo(this,e,fa,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jo(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Cc.fromBufferAttribute(a,i),Pc.fromBufferAttribute(a,r),t.distanceSqToSegment(Cc,Pc,Ch,dm)>n)return;Ch.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ch);if(!(l<e.near||l>e.far))return{distance:l,point:dm.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}var fm=new T,pm=new T,dn=class extends Cn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)fm.fromBufferAttribute(t,i),pm.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fm.distanceTo(pm);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fs=class extends Cn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Hr=class extends Tt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mm=new De,Iu=new Qn,$o=new Mt,Zo=new T,Os=class extends nt{constructor(e=new Ve,t=new Hr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;mm.copy(i).invert(),Iu.copy(e.ray).applyMatrix4(mm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){let m=c.getX(p);Zo.fromBufferAttribute(u,m),gm(Zo,m,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let p=d,v=f;p<v;p++)Zo.fromBufferAttribute(u,p),gm(Zo,p,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gm(s,e,t,n,i,r,a){let o=Iu.distanceSqToPoint(s);if(o<t){let l=new T;Iu.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Nu=class extends St{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:st,this.magFilter=r!==void 0?r:st,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Fu=class extends St{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=_t,this.minFilter=_t,this.generateMipmaps=!1,this.needsUpdate=!0}},Us=class extends St{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Ou=class extends Us{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=It}},Uu=class extends Us{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Mi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Ba=class extends St{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Y:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],r=[],a=[],o=new T,l=new De;for(let f=0;f<=e;f++){let p=f/e;i[f]=this.getTangentAt(p,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(At(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ks=class extends wn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Lc=class extends ks{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gd(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Qo=new T,Ph=new Gd,Lh=new Gd,Dh=new Gd,Dc=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(Qo.subVectors(i[0],i[1]).add(i[0]),c=Qo);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Qo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Ph.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,p,v,m),Lh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,p,v,m),Dh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Lh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Dh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ph.calc(l),Lh.calc(l),Dh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vm(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function cS(s,e){let t=1-s;return t*t*e}function lS(s,e){return 2*(1-s)*s*e}function hS(s,e){return s*s*e}function xa(s,e,t,n){return cS(s,e)+lS(s,t)+hS(s,n)}function uS(s,e){let t=1-s;return t*t*t*e}function dS(s,e){let t=1-s;return 3*t*t*s*e}function fS(s,e){return 3*(1-s)*s*s*e}function pS(s,e){return s*s*s*e}function _a(s,e,t,n,i){return uS(s,e)+dS(s,t)+fS(s,n)+pS(s,i)}var za=class extends wn{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,i.x,r.x,a.x,o.x),_a(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ic=class extends wn{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(_a(e,i.x,r.x,a.x,o.x),_a(e,i.y,r.y,a.y,o.y),_a(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ha=class extends wn{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nc=class extends wn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends wn{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xa(e,i.x,r.x,a.x),xa(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends wn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(xa(e,i.x,r.x,a.x),xa(e,i.y,r.y,a.y),xa(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(vm(o,l.x,c.x,h.x,u.x),vm(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Y().fromArray(i))}return this}},Fc=Object.freeze({__proto__:null,ArcCurve:Lc,CatmullRomCurve3:Dc,CubicBezierCurve:za,CubicBezierCurve3:Ic,EllipseCurve:ks,LineCurve:Ha,LineCurve3:Nc,QuadraticBezierCurve:Va,QuadraticBezierCurve3:Ga,SplineCurve:Wa}),Oc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Fc[i.type]().fromJSON(i))}return this}},Vr=class extends Oc{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ha(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Va(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new za(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new ks(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qa=class s extends Ve{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new Y,f=new T,p=new T,v=new T,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=t;x++){let b=n+x*h*i,_=Math.sin(b),E=Math.cos(b);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*_,u.y=e[M].y,u.z=e[M].x*E,a.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);let A=l[3*M+0]*_,C=l[3*M+1],y=l[3*M+0]*E;c.push(A,C,y)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let _=b+x*e.length,E=_,M=_+e.length,A=_+e.length+1,C=_+1;r.push(E,M,C),r.push(A,C,M)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Uc=class s extends qa{constructor(e=1,t=1,n=4,i=8){let r=new Vr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Bs=class s extends Ve{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new T,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$i=class s extends Ve{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],p=0,v=[],m=n/2,g=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function x(){let _=new T,E=new T,M=0,A=(t-e)/n;for(let C=0;C<=r;C++){let y=[],w=C/r,F=w*(t-e)+e;for(let O=0;O<=i;O++){let I=O/i,P=I*l+o,L=Math.sin(P),k=Math.cos(P);E.x=F*L,E.y=-w*n+m,E.z=F*k,u.push(E.x,E.y,E.z),_.set(L,A,k).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-w),y.push(p++)}v.push(y)}for(let C=0;C<i;C++)for(let y=0;y<r;y++){let w=v[y][C],F=v[y+1][C],O=v[y+1][C+1],I=v[y][C+1];h.push(w,F,I),h.push(F,O,I),M+=6}c.addGroup(g,M,0),g+=M}function b(_){let E=p,M=new Y,A=new T,C=0,y=_===!0?e:t,w=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),p++;let F=p;for(let O=0;O<=i;O++){let P=O/i*l+o,L=Math.cos(P),k=Math.sin(P);A.x=y*k,A.y=m*w,A.z=y*L,u.push(A.x,A.y,A.z),d.push(0,w,0),M.x=L*.5+.5,M.y=k*.5*w+.5,f.push(M.x,M.y),p++}for(let O=0;O<i;O++){let I=E+O,P=F+O;_===!0?h.push(P,P+1,I):h.push(P+1,P,I),C+=3}c.addGroup(g,C,_===!0?1:2),g+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},kc=class s extends $i{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zi=class s extends Ve{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new T,_=new T,E=new T;for(let M=0;M<t.length;M+=3)f(t[M+0],b),f(t[M+1],_),f(t[M+2],E),l(b,_,E,x)}function l(x,b,_,E){let M=E+1,A=[];for(let C=0;C<=M;C++){A[C]=[];let y=x.clone().lerp(_,C/M),w=b.clone().lerp(_,C/M),F=M-C;for(let O=0;O<=F;O++)O===0&&C===M?A[C][O]=y:A[C][O]=y.clone().lerp(w,O/F)}for(let C=0;C<M;C++)for(let y=0;y<2*(M-C)-1;y++){let w=Math.floor(y/2);y%2===0?(d(A[C][w+1]),d(A[C+1][w]),d(A[C][w])):(d(A[C][w+1]),d(A[C+1][w+1]),d(A[C+1][w]))}}function c(x){let b=new T;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let x=new T;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=m(x)/2/Math.PI+.5,E=g(x)/Math.PI+.5;a.push(_,1-E)}p(),u()}function u(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],E=a[x+4],M=Math.max(b,_,E),A=Math.min(b,_,E);M>.9&&A<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,b){let _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function p(){let x=new T,b=new T,_=new T,E=new T,M=new Y,A=new Y,C=new Y;for(let y=0,w=0;y<r.length;y+=9,w+=6){x.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),M.set(a[w+0],a[w+1]),A.set(a[w+2],a[w+3]),C.set(a[w+4],a[w+5]),E.copy(x).add(b).add(_).divideScalar(3);let F=m(E);v(M,w+0,x,F),v(A,w+2,b,F),v(C,w+4,_,F)}}function v(x,b,_,E){E<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Bc=class s extends Zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ec=new T,tc=new T,Ih=new T,nc=new xi,zc=class extends Ve{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Ir*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:v,b:m,c:g}=nc;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),nc.getNormal(Ih),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let b=(x+1)%3,_=u[x],E=u[b],M=nc[h[x]],A=nc[h[b]],C=`${_}_${E}`,y=`${E}_${_}`;y in d&&d[y]?(Ih.dot(d[y].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(A.x,A.y,A.z)),d[y]=null):C in d||(d[C]={index0:c[x],index1:c[b],normal:Ih.clone()})}}for(let p in d)if(d[p]){let{index0:v,index1:m}=d[p];ec.fromBufferAttribute(o,v),tc.fromBufferAttribute(o,m),f.push(ec.x,ec.y,ec.z),f.push(tc.x,tc.y,tc.z)}this.setAttribute("position",new Ce(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wi=class extends Vr{constructor(e){super(e),this.uuid=bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Vr().fromJSON(i))}return this}},mS={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=a0(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=_S(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],d=s[p+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Xa(r,a,t,o,l,f,0),a}};function a0(s,e,t,n,i){let r,a;if(i===LS(s,e,t,n)>0)for(r=e;r<t;r+=n)a=bm(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=bm(r,s[r],s[r+1],a);return a&&Sl(a,a.next)&&(Ka(a),a=a.next),a}function Gr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Sl(t,t.next)||wt(t.prev,t,t.next)===0)){if(Ka(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Xa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&ES(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?vS(s,n,i,r):gS(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Ka(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=bS(Gr(s),e,t),Xa(s,e,t,n,i,r,2)):a===2&&xS(s,e,t,n,i,r):Xa(Gr(s),e,t,n,i,r,1);break}}}function gS(s){let e=s.prev,t=s,n=s.next;if(wt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=d&&p.y>=u&&p.y<=f&&ws(i,o,r,l,a,c,p.x,p.y)&&wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function vS(s,e,t,n){let i=s.prev,r=s,a=s.next;if(wt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=h<u?h<d?h:d:u<d?u:d,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=ku(f,p,e,t,n),x=ku(v,m,e,t,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=g&&_&&_.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==a&&ws(o,h,l,u,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&ws(o,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=v&&b.y>=p&&b.y<=m&&b!==i&&b!==a&&ws(o,h,l,u,c,d,b.x,b.y)&&wt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=m&&_!==i&&_!==a&&ws(o,h,l,u,c,d,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function bS(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Sl(i,r)&&o0(i,n,n.next,r)&&ja(i,r)&&ja(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ka(n),Ka(n.next),n=s=r),n=n.next}while(n!==s);return Gr(n)}function xS(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&RS(a,o)){let l=c0(a,o);a=Gr(a,a.next),l=Gr(l,l.next),Xa(a,e,t,n,i,r,0),Xa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function _S(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=a0(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(TS(c));for(i.sort(yS),r=0;r<i.length;r++)t=wS(i[r],t);return t}function yS(s,e){return s.x-e.x}function wS(s,e){let t=MS(s,e);if(!t)return e;let n=c0(t,s);return Gr(n,n.next),Gr(t,t.next)}function MS(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ws(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),ja(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&SS(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function SS(s,e){return wt(s.prev,s,e.prev)<0&&wt(e.next,s,s.next)<0}function ES(s,e,t,n){let i=s;do i.z===0&&(i.z=ku(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,AS(i)}function AS(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function ku(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function TS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ws(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function RS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!CS(s,e)&&(ja(s,e)&&ja(e,s)&&PS(s,e)&&(wt(s.prev,s,e.prev)||wt(s,e.prev,e))||Sl(s,e)&&wt(s.prev,s,s.next)>0&&wt(e.prev,e,e.next)>0)}function wt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Sl(s,e){return s.x===e.x&&s.y===e.y}function o0(s,e,t,n){let i=rc(wt(s,e,t)),r=rc(wt(s,e,n)),a=rc(wt(t,n,s)),o=rc(wt(t,n,e));return!!(i!==r&&a!==o||i===0&&ic(s,t,e)||r===0&&ic(s,n,e)||a===0&&ic(t,s,n)||o===0&&ic(t,e,n))}function ic(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function rc(s){return s>0?1:s<0?-1:0}function CS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ja(s,e){return wt(s.prev,s,s.next)<0?wt(s,e,s.next)>=0&&wt(s,s.prev,e)>=0:wt(s,e,s.prev)<0||wt(s,s.next,e)<0}function PS(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function c0(s,e){let t=new Bu(s.i,s.x,s.y),n=new Bu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bm(s,e,t,n){let i=new Bu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ka(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Bu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function LS(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Zn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];xm(e),_m(n,e);let a=e.length;t.forEach(xm);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,_m(n,t[l]);let o=mS.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function xm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function _m(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Hc=class s extends Ve{constructor(e=new wi([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:DS,b,_=!1,E,M,A,C;g&&(b=g.getSpacedPoints(h),_=!0,d=!1,E=g.computeFrenetFrames(h,!1),M=new T,A=new T,C=new T),d||(m=0,f=0,p=0,v=0);let y=o.extractPoints(c),w=y.shape,F=y.holes;if(!Zn.isClockWise(w)){w=w.reverse();for(let Z=0,se=F.length;Z<se;Z++){let ee=F[Z];Zn.isClockWise(ee)&&(F[Z]=ee.reverse())}}let I=Zn.triangulateShape(w,F),P=w;for(let Z=0,se=F.length;Z<se;Z++){let ee=F[Z];w=w.concat(ee)}function L(Z,se,ee){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(se,ee)}let k=w.length,X=I.length;function U(Z,se,ee){let he,re,Ee,Pe=Z.x-se.x,N=Z.y-se.y,R=ee.x-Z.x,q=ee.y-Z.y,ne=Pe*Pe+N*N,ae=Pe*q-N*R;if(Math.abs(ae)>Number.EPSILON){let z=Math.sqrt(ne),me=Math.sqrt(R*R+q*q),ce=se.x-N/z,de=se.y+Pe/z,Te=ee.x-q/me,ue=ee.y+R/me,Se=((Te-ce)*q-(ue-de)*R)/(Pe*q-N*R);he=ce+Pe*Se-Z.x,re=de+N*Se-Z.y;let Le=he*he+re*re;if(Le<=2)return new Y(he,re);Ee=Math.sqrt(Le/2)}else{let z=!1;Pe>Number.EPSILON?R>Number.EPSILON&&(z=!0):Pe<-Number.EPSILON?R<-Number.EPSILON&&(z=!0):Math.sign(N)===Math.sign(q)&&(z=!0),z?(he=-N,re=Pe,Ee=Math.sqrt(ne)):(he=Pe,re=N,Ee=Math.sqrt(ne/2))}return new Y(he/Ee,re/Ee)}let V=[];for(let Z=0,se=P.length,ee=se-1,he=Z+1;Z<se;Z++,ee++,he++)ee===se&&(ee=0),he===se&&(he=0),V[Z]=U(P[Z],P[ee],P[he]);let j=[],ie,be=V.concat();for(let Z=0,se=F.length;Z<se;Z++){let ee=F[Z];ie=[];for(let he=0,re=ee.length,Ee=re-1,Pe=he+1;he<re;he++,Ee++,Pe++)Ee===re&&(Ee=0),Pe===re&&(Pe=0),ie[he]=U(ee[he],ee[Ee],ee[Pe]);j.push(ie),be=be.concat(ie)}for(let Z=0;Z<m;Z++){let se=Z/m,ee=f*Math.cos(se*Math.PI/2),he=p*Math.sin(se*Math.PI/2)+v;for(let re=0,Ee=P.length;re<Ee;re++){let Pe=L(P[re],V[re],he);oe(Pe.x,Pe.y,-ee)}for(let re=0,Ee=F.length;re<Ee;re++){let Pe=F[re];ie=j[re];for(let N=0,R=Pe.length;N<R;N++){let q=L(Pe[N],ie[N],he);oe(q.x,q.y,-ee)}}}let _e=p+v;for(let Z=0;Z<k;Z++){let se=d?L(w[Z],be[Z],_e):w[Z];_?(A.copy(E.normals[0]).multiplyScalar(se.x),M.copy(E.binormals[0]).multiplyScalar(se.y),C.copy(b[0]).add(A).add(M),oe(C.x,C.y,C.z)):oe(se.x,se.y,0)}for(let Z=1;Z<=h;Z++)for(let se=0;se<k;se++){let ee=d?L(w[se],be[se],_e):w[se];_?(A.copy(E.normals[Z]).multiplyScalar(ee.x),M.copy(E.binormals[Z]).multiplyScalar(ee.y),C.copy(b[Z]).add(A).add(M),oe(C.x,C.y,C.z)):oe(ee.x,ee.y,u/h*Z)}for(let Z=m-1;Z>=0;Z--){let se=Z/m,ee=f*Math.cos(se*Math.PI/2),he=p*Math.sin(se*Math.PI/2)+v;for(let re=0,Ee=P.length;re<Ee;re++){let Pe=L(P[re],V[re],he);oe(Pe.x,Pe.y,u+ee)}for(let re=0,Ee=F.length;re<Ee;re++){let Pe=F[re];ie=j[re];for(let N=0,R=Pe.length;N<R;N++){let q=L(Pe[N],ie[N],he);_?oe(q.x,q.y+b[h-1].y,b[h-1].x+ee):oe(q.x,q.y,u+ee)}}}W(),te();function W(){let Z=i.length/3;if(d){let se=0,ee=k*se;for(let he=0;he<X;he++){let re=I[he];Re(re[2]+ee,re[1]+ee,re[0]+ee)}se=h+m*2,ee=k*se;for(let he=0;he<X;he++){let re=I[he];Re(re[0]+ee,re[1]+ee,re[2]+ee)}}else{for(let se=0;se<X;se++){let ee=I[se];Re(ee[2],ee[1],ee[0])}for(let se=0;se<X;se++){let ee=I[se];Re(ee[0]+k*h,ee[1]+k*h,ee[2]+k*h)}}n.addGroup(Z,i.length/3-Z,0)}function te(){let Z=i.length/3,se=0;pe(P,se),se+=P.length;for(let ee=0,he=F.length;ee<he;ee++){let re=F[ee];pe(re,se),se+=re.length}n.addGroup(Z,i.length/3-Z,1)}function pe(Z,se){let ee=Z.length;for(;--ee>=0;){let he=ee,re=ee-1;re<0&&(re=Z.length-1);for(let Ee=0,Pe=h+m*2;Ee<Pe;Ee++){let N=k*Ee,R=k*(Ee+1),q=se+he+N,ne=se+re+N,ae=se+re+R,z=se+he+R;we(q,ne,ae,z)}}}function oe(Z,se,ee){l.push(Z),l.push(se),l.push(ee)}function Re(Z,se,ee){B(Z),B(se),B(ee);let he=i.length/3,re=x.generateTopUV(n,i,he-3,he-2,he-1);fe(re[0]),fe(re[1]),fe(re[2])}function we(Z,se,ee,he){B(Z),B(se),B(he),B(se),B(ee),B(he);let re=i.length/3,Ee=x.generateSideWallUV(n,i,re-6,re-3,re-2,re-1);fe(Ee[0]),fe(Ee[1]),fe(Ee[3]),fe(Ee[1]),fe(Ee[2]),fe(Ee[3])}function B(Z){i.push(l[Z*3+0]),i.push(l[Z*3+1]),i.push(l[Z*3+2])}function fe(Z){r.push(Z.x),r.push(Z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return IS(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Fc[i.type]().fromJSON(i)),new s(n,e.options)}},DS={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(r,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-p),new Y(v,1-g)]:[new Y(o,1-l),new Y(h,1-u),new Y(f,1-p),new Y(m,1-g)]}};function IS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Vc=class s extends Zi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ya=class s extends Zi{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Gc=class s extends Ve{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new T,p=new Y;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let g=r+m/n*a;f.x=u*Math.cos(g),f.y=u*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,h.push(p.x,p.y)}u+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let g=0;g<n;g++){let x=g+m,b=x,_=x+n+1,E=x+n+2,M=x+1;o.push(b,_,M),o.push(_,E,M)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Wc=class s extends Ve{constructor(e=new wi([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,p=d.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let x=p[m];Zn.isClockWise(x)===!0&&(p[m]=x.reverse())}let v=Zn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let x=p[m];f=f.concat(x)}for(let m=0,g=f.length;m<g;m++){let x=f[m];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,g=v.length;m<g;m++){let x=v[m],b=x[0]+u,_=x[1]+u,E=x[2]+u;n.push(b,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return NS(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function NS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Wr=class s extends Ve{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,f=[],p=[],v=[],m=[];for(let g=0;g<=n;g++){let x=[],b=g/n,_=0;g===0&&a===0?_=.5/t:g===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let M=E/t;u.x=-e*Math.cos(i+M*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+M*r)*Math.sin(a+b*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(M+_,1-b),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){let b=h[g][x+1],_=h[g][x],E=h[g+1][x],M=h[g+1][x+1];(g!==0||a>0)&&f.push(b,_,M),(g!==n-1||l<Math.PI)&&f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new Ce(p,3)),this.setAttribute("normal",new Ce(v,3)),this.setAttribute("uv",new Ce(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},qc=class s extends Zi{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Xc=class s extends Ve{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let p=0;p<=i;p++){let v=p/i*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(p/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=i;p++){let v=(i+1)*f+p-1,m=(i+1)*(f-1)+p-1,g=(i+1)*(f-1)+p,x=(i+1)*f+p;a.push(v,m,x),a.push(m,g,x)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},jc=class s extends Ve{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new T,d=new T,f=new T,p=new T,v=new T,m=new T,g=new T;for(let b=0;b<=n;++b){let _=b/n*r*Math.PI*2;x(_,r,a,e,f),x(_+.01,r,a,e,p),m.subVectors(p,f),g.addVectors(p,f),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let E=0;E<=i;++E){let M=E/i*Math.PI*2,A=-t*Math.cos(M),C=t*Math.sin(M);u.x=f.x+(A*g.x+C*v.x),u.y=f.y+(A*g.y+C*v.y),u.z=f.z+(A*g.z+C*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(b/n),h.push(E/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){let E=(i+1)*(b-1)+(_-1),M=(i+1)*b+(_-1),A=(i+1)*b+_,C=(i+1)*(b-1)+_;o.push(E,M,C),o.push(M,A,C)}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2));function x(b,_,E,M,A){let C=Math.cos(b),y=Math.sin(b),w=E/_*b,F=Math.cos(w);A.x=M*(2+F)*.5*C,A.y=M*(2+F)*y*.5,A.z=M*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Kc=class s extends Ve{constructor(e=new Ga(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new Y,h=new T,u=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function v(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),x(),g()}function m(b){h=e.getPointAt(b/t,h);let _=a.normals[b],E=a.binormals[b];for(let M=0;M<=i;M++){let A=M/i*Math.PI*2,C=Math.sin(A),y=-Math.cos(A);l.x=y*_.x+C*E.x,l.y=y*_.y+C*E.y,l.z=y*_.z+C*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=t;b++)for(let _=1;_<=i;_++){let E=(i+1)*(b-1)+(_-1),M=(i+1)*b+(_-1),A=(i+1)*b+_,C=(i+1)*(b-1)+_;p.push(E,M,C),p.push(M,A,C)}}function x(){for(let b=0;b<=t;b++)for(let _=0;_<=i;_++)c.x=b/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Fc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Yc=class extends Ve{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,r=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let p=d,v=d+f;p<v;p+=3)for(let m=0;m<3;m++){let g=o.getX(p+m),x=o.getX(p+(m+1)%3);i.fromBufferAttribute(a,g),r.fromBufferAttribute(a,x),ym(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),ym(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function ym(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var wm=Object.freeze({__proto__:null,BoxGeometry:Or,CapsuleGeometry:Uc,CircleGeometry:Bs,ConeGeometry:kc,CylinderGeometry:$i,DodecahedronGeometry:Bc,EdgesGeometry:zc,ExtrudeGeometry:Hc,IcosahedronGeometry:Vc,LatheGeometry:qa,OctahedronGeometry:Ya,PlaneGeometry:Ei,PolyhedronGeometry:Zi,RingGeometry:Gc,ShapeGeometry:Wc,SphereGeometry:Wr,TetrahedronGeometry:qc,TorusGeometry:Xc,TorusKnotGeometry:jc,TubeGeometry:Kc,WireframeGeometry:Yc}),Jc=class extends Tt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},$c=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qi=class extends Tt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sn=class extends Qi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Zc=class extends Tt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qc=class extends Tt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},el=class extends Tt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},tl=class extends Tt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=no,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nl=class extends Tt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new xe(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ir,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},il=class extends Ut{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Cr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function l0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function h0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function zu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Wd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function FS(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let p=c.times[f]*i;if(!(p<t||p>=n)){u.push(c.times[f]);for(let v=0;v<h;++v)d.push(c.values[f*h+v])}}u.length!==0&&(c.times=Cr(u,c.times.constructor),c.values=Cr(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function OS(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let p=o.times.length-1,v;if(r<=o.times[0]){let g=h,x=u-h;v=o.values.slice(g,x)}else if(r>=o.times[p]){let g=p*u+h,x=g+u-h;v=o.values.slice(g,x)}else{let g=o.createInterpolant(),x=h,b=u-h;g.evaluate(r),v=g.resultBuffer.slice(x,b)}l==="quaternion"&&new ht().fromArray(v).normalize().conjugate().toArray(v);let m=c.times.length;for(let g=0;g<m;++g){let x=g*f+d;if(l==="quaternion")ht.multiplyQuaternionsFlat(c.values,x,v,0,c.values,x);else{let b=f-d*2;for(let _=0;_<b;++_)c.values[x+_]-=v[_]}}}return s.blendMode=Ud,s}var US={convertArray:Cr,isTypedArray:l0,getKeyframeOrder:h0,sortedArray:zu,flattenJSON:Wd,subclip:FS,makeClipAdditive:OS},Ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},rl=class extends Ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tr,endingEnd:Tr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Rr:r=e,o=2*t-n;break;case Sa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Rr:a=e,l=2*n-t;break;case Sa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,m=v*p,g=-d*m+2*d*v-d*p,x=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*p+1,b=(-1-f)*m+(1.5+f)*v+.5*p,_=f*m-f*v;for(let E=0;E!==o;++E)r[E]=g*a[h+E]+x*a[c+E]+b*a[l+E]+_*a[u+E];return r}},Ja=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},sl=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Mn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Cr(t,this.TimeBufferType),this.values=Cr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Cr(e.times,Array),values:Cr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fr:t=this.InterpolantFactoryMethodDiscrete;break;case Ji:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fr;case this.InterpolantFactoryMethodLinear:return Ji;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&l0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let v=t[u+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=Ji;var Ri=class extends Mn{};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Fr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends Mn{};$a.prototype.ValueTypeName="color";var ni=class extends Mn{};ni.prototype.ValueTypeName="number";var al=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)ht.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gn=class extends Mn{InterpolantFactoryMethodLinear(e){return new al(this.times,this.values,this.getValueSize(),e)}};Gn.prototype.ValueTypeName="quaternion";Gn.prototype.DefaultInterpolation=Ji;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends Mn{};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Fr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends Mn{};ii.prototype.ValueTypeName="vector";var Pi=class{constructor(e="",t=-1,n=[],i=_l){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=bn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(BS(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Mn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=h0(l);l=zu(l,1,h),c=zu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ni(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,p,v){if(f.length!==0){let m=[],g=[];Wd(f,m,g,p),m.length!==0&&v.push(new u(d,m,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(let v in f){let m=[],g=[];for(let x=0;x!==d[p].morphTargets.length;++x){let b=d[p];m.push(b.time),g.push(b.morphTarget===v?1:0)}i.push(new ni(".morphTargetInfluence["+v+"]",m,g))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(ii,f+".position",d,"pos",i),n(Gn,f+".quaternion",d,"rot",i),n(ii,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function kS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ni;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return $a;case"quaternion":return Gn;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function BS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=kS(s.type);if(s.times===void 0){let t=[],n=[];Wd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Za=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null}}},u0=new Za,qt=class{constructor(e){this.manager=e!==void 0?e:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qt.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},Hu=class extends Error{constructor(e,t){super(e),this.response=t}},fn=class extends qt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=gi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,v=0,m=new ReadableStream({start(g){x();function x(){u.read().then(({done:b,value:_})=>{if(b)g.close();else{v+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let M=0,A=h.length;M<A;M++){let C=h[M];C.onProgress&&C.onProgress(E)}g.enqueue(_),x()}})}}});return new Response(m)}else throw new Hu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{_i.add(e,c);let h=gi[e];delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Vu=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new fn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Pi.parse(e[n]);t.push(i)}return t}},Gu=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],o=new Us,l=new fn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){let f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=st),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=st),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}},qr=class extends qt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=La("img");function l(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},Wu=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=new Ur;r.colorSpace=mt;let a=new qr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}},qu=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new un,o=new fn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:It,a.wrapT=c.wrapT!==void 0?c.wrapT:It,a.magFilter=c.magFilter!==void 0?c.magFilter:st,a.minFilter=c.minFilter!==void 0?c.minFilter:st,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=vn),c.mipmapCount===1&&(a.minFilter=st),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},Wn=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=new St,a=new qr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ri=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},zs=class extends ri{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Nh=new De,Mm=new T,Sm=new T,Qa=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mm),Sm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sm),t.updateMatrixWorld(),Nh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xu=class extends Qa{constructor(){super(new vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=As*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Hs=class extends ri{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Em=new De,pa=new T,Fh=new T,ju=class extends Qa{constructor(){super(new vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),pa.setFromMatrixPosition(e.matrixWorld),n.position.copy(pa),Fh.copy(n.position),Fh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fh),n.updateMatrixWorld(),i.makeTranslation(-pa.x,-pa.y,-pa.z),Em.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Em)}},Vs=class extends ri{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ku=class extends Qa{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},er=class extends ri{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Ku}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ol=class extends ri{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},cl=class extends ri{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},ll=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},hl=class extends ri{constructor(e=new ll,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ul=class s extends qt{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new fn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=s.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new xe().setHex(a.value);break;case"v2":i.uniforms[r].value=new Y().fromArray(a.value);break;case"v3":i.uniforms[r].value=new T().fromArray(a.value);break;case"v4":i.uniforms[r].value=new et().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ge().fromArray(a.value);break;case"m4":i.uniforms[r].value=new De().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Y().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){let t={ShadowMaterial:Jc,SpriteMaterial:ka,RawShaderMaterial:$c,ShaderMaterial:Wt,PointsMaterial:Hr,MeshPhysicalMaterial:sn,MeshStandardMaterial:Qi,MeshPhongMaterial:Zc,MeshToonMaterial:Qc,MeshNormalMaterial:el,MeshLambertMaterial:tl,MeshDepthMaterial:ti,MeshDistanceMaterial:Oa,MeshBasicMaterial:Dt,MeshMatcapMaterial:nl,LineDashedMaterial:il,LineBasicMaterial:Ut,Material:Tt};return new t[e]}},qn=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},dl=class extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},fl=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new fn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,p){if(t[p]!==void 0)return t[p];let m=f.interleavedBuffers[p],g=r(f,m.buffer),x=_s(m.type,g),b=new Hn(x,m.stride);return b.uuid=m.uuid,t[p]=b,b}function r(f,p){if(n[p]!==void 0)return n[p];let m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}let a=e.isInstancedBufferGeometry?new dl:new Ve,o=e.data.index;if(o!==void 0){let f=_s(o.type,o.array);a.setIndex(new Oe(f,1))}let l=e.data.attributes;for(let f in l){let p=l[f],v;if(p.isInterleavedBufferAttribute){let m=i(e.data,p.data);v=new yn(m,p.itemSize,p.offset,p.normalized)}else{let m=_s(p.type,p.array),g=p.isInstancedBufferAttribute?Vn:Oe;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}let c=e.data.morphAttributes;if(c)for(let f in c){let p=c[f],v=[];for(let m=0,g=p.length;m<g;m++){let x=p[m],b;if(x.isInterleavedBufferAttribute){let _=i(e.data,x.data);b=new yn(_,x.itemSize,x.offset,x.normalized)}else{let _=_s(x.type,x.array);b=new Oe(_,x.itemSize,x.normalized)}x.name!==void 0&&(b.name=x.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,p=u.length;f!==p;++f){let v=u[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;if(d!==void 0){let f=new T;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new Mt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Yu=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?qn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new fn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?qn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new fn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new wi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new Is().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new fl;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in wm?o=wm[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new ul;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Pi.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:_s(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Za(t);r=new qr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],d=u.url;if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new un(g.data,g.width,g.height)))}i[u.uuid]=new bi(f)}else{let f=o(u.url);i[u.uuid]=new bi(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:_s(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new qr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new un(p.data,p.width,p.height)))}n[l.uuid]=new bi(h)}else{let h=await r(l.url);n[l.uuid]=new bi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new Ur,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new un:h=new St,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,zS)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],Am),h.wrapT=n(o.wrap[1],Am)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,Tm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,Tm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let p=0,v=d.length;p<v;p++){let m=d[p];n[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Ai,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new xe(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ls(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Ec(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new vt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ei(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ol(e.color,e.intensity);break;case"DirectionalLight":a=new er(e.color,e.intensity);break;case"PointLight":a=new Vs(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new cl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Hs(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new zs(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new hl().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Ds(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new it(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);let d=e.count,f=e.instanceMatrix,p=e.instanceColor;a=new Ns(h,u,d),a.instanceMatrix=new Vn(new Float32Array(f.array),16),p!==void 0&&(a.instanceColor=new Vn(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Rc(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{let m=new dt;m.min.fromArray(v.boxMin),m.max.fromArray(v.boxMax);let g=new Mt;return g.radius=v.sphereRadius,g.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:m,sphereInitialized:v.sphereInitialized,sphere:g}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new Tc;break;case"Line":a=new Cn(o(e.geometry),l(e.material));break;case"LineLoop":a=new Fs(o(e.geometry),l(e.material));break;case"LineSegments":a=new dn(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Os(o(e.geometry),l(e.material));break;case"Sprite":a=new Ac(l(e.material));break;case"Group":a=new hn;break;case"Bone":a=new zr;break;default:a=new nt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let p=d[f];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let p=d[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}},zS={UVMapping:xl,CubeReflectionMapping:Mi,CubeRefractionMapping:Yi,EquirectangularReflectionMapping:wa,EquirectangularRefractionMapping:Ma,CubeUVReflectionMapping:Ws},Am={RepeatWrapping:Bn,ClampToEdgeWrapping:It,MirroredRepeatWrapping:Nr},Tm={NearestFilter:_t,NearestMipmapNearestFilter:io,NearestMipmapLinearFilter:Ki,LinearFilter:st,LinearMipmapNearestFilter:Lr,LinearMipmapLinearFilter:vn},eo=class extends qt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}},sc,to=class{static getContext(){return sc===void 0&&(sc=new(window.AudioContext||window.webkitAudioContext)),sc}static setContext(e){sc=e}},Ju=class extends qt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new fn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0);to.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}},Rm=new De,Cm=new De,xr=new De,$u=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new vt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new vt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,xr.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Ir*t.fov*.5)/t.zoom,o,l;Cm.elements[12]=-i,Rm.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,xr.elements[0]=2*t.near/(l-o),xr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(xr),o=-a*t.aspect-r,l=a*t.aspect-r,xr.elements[0]=2*t.near/(l-o),xr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(xr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(Cm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(Rm)}},pl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Pm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Pm(){return(typeof performance>"u"?Date:performance).now()}var _r=new T,Lm=new ht,HS=new T,yr=new T,Zu=class extends nt{constructor(){super(),this.type="AudioListener",this.context=to.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new pl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_r,Lm,HS),yr.set(0,0,-1).applyQuaternion(Lm),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,i),t.positionY.linearRampToValueAtTime(_r.y,i),t.positionZ.linearRampToValueAtTime(_r.z,i),t.forwardX.linearRampToValueAtTime(yr.x,i),t.forwardY.linearRampToValueAtTime(yr.y,i),t.forwardZ.linearRampToValueAtTime(yr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(yr.x,yr.y,yr.z,n.x,n.y,n.z)}},ml=class extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},wr=new T,Dm=new ht,VS=new T,Mr=new T,Qu=class extends ml{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(wr,Dm,VS),Mr.set(0,0,1).applyQuaternion(Dm);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(wr.x,n),t.positionY.linearRampToValueAtTime(wr.y,n),t.positionZ.linearRampToValueAtTime(wr.z,n),t.orientationX.linearRampToValueAtTime(Mr.x,n),t.orientationY.linearRampToValueAtTime(Mr.y,n),t.orientationZ.linearRampToValueAtTime(Mr.z,n)}else t.setPosition(wr.x,wr.y,wr.z),t.setOrientation(Mr.x,Mr.y,Mr.z)}},ed=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},gl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;ht.multiplyQuaternionsFlat(e,a,e,t,e,n),ht.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},qd="\\[\\]\\.:\\/",GS=new RegExp("["+qd+"]","g"),Xd="[^"+qd+"]",WS="[^"+qd.replace("\\.","")+"]",qS=/((?:WC+[\/:])*)/.source.replace("WC",Xd),XS=/(WCOD+)?/.source.replace("WCOD",WS),jS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),KS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),YS=new RegExp("^"+qS+XS+jS+KS+"$"),JS=["material","materials","bones","map"],td=class{constructor(e,t,n){let i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ct=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(GS,"")}static parseTrackName(e){let t=YS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);JS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ct.Composite=td;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var nd=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=bn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,m=a;v!==m;++v)r[v].push(new ct(d,n[v],i[v]))}else if(p<c){o=e[p];let v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[f]=v,e[v]=d;for(let g=0,x=a;g!==x;++g){let b=r[g],_=b[v],E=b[p];b[p]=_,E===void 0&&(E=new ct(d,n[g],i[g])),b[v]=E}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,p=i;f!==p;++f){let v=n[f],m=v[u],g=v[h];v[h]=m,v[u]=g}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,f=e[d],p=--a,v=e[p];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let m=0,g=i;m!==g;++m){let x=n[m],b=x[d],_=x[p];x[u]=b,x[d]=_,x.pop()}}else{let d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let p=0,v=i;p!==v;++p){let m=n[p];m[u]=m[d],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){let p=l[d];u[d]=new ct(p,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},vl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Tr,endingEnd:Tr};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Og,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ud:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case _l:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Ug;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Fg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Rr,i.endingEnd=Rr):(e?i.endingStart=this.zeroSlopeAtStart?Rr:Tr:i.endingStart=Sa,t?i.endingEnd=this.zeroSlopeAtEnd?Rr:Tr:i.endingEnd=Sa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},$S=new Float32Array(1),id=class extends xn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,p=h[f];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;p=new gl(ct.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ja(new Float32Array(2),new Float32Array(2),1,$S),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Pi.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=_l),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new vl(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Pi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},rd=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},ZS=0,sd=class extends xn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:ZS++}),this.name="",this.usage=Ra,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},ad=class extends Hn{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},od=class{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Im=new De,cd=class{constructor(e,t,n=0,i=1/0){this.ray=new Qn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Im.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Im),this}intersectObject(e,t=!0,n=[]){return ld(e,this,n,t),n.sort(Nm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ld(e[i],this,n,t);return n.sort(Nm),n}};function Nm(s,e){return s.distance-e.distance}function ld(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)ld(i[r],e,t,!0)}}var Gs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},hd=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Fm=new Y,ud=class{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Om=new T,ac=new T,dd=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Om.subVectors(e,this.start),ac.subVectors(this.end,this.start);let n=ac.dot(ac),r=ac.dot(Om)/n;return t&&(r=At(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Um=new T,fd=class extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new Ve,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ce(i,3));let r=new Ut({fog:!1,toneMapped:!1});this.cone=new dn(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Um.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Um),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Xi=new T,oc=new De,Oh=new De,pd=class extends dn{constructor(e){let t=d0(e),n=new Ve,i=[],r=[],a=new xe(0,0,1),o=new xe(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(r,3));let l=new Ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Oh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(oc.multiplyMatrices(Oh,o.matrixWorld),Xi.setFromMatrixPosition(oc),i.setXYZ(a,Xi.x,Xi.y,Xi.z),oc.multiplyMatrices(Oh,o.parent.matrixWorld),Xi.setFromMatrixPosition(oc),i.setXYZ(a+1,Xi.x,Xi.y,Xi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function d0(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,d0(s.children[t]));return e}var md=class extends it{constructor(e,t,n){let i=new Wr(t,4,2),r=new Dt({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},QS=new T,km=new xe,Bm=new xe,gd=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Ya(t);i.rotateY(Math.PI*.5),this.material=new Dt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Oe(a,3)),this.add(new it(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");km.copy(this.light.color),Bm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?km:Bm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(QS.setFromMatrixPosition(this.light.matrixWorld).negate())}},vd=class extends dn{constructor(e=10,t=10,n=4473924,i=8947848){n=new xe(n),i=new xe(i);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);let v=d===r?n:i;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}let h=new Ve;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));let u=new Ut({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},bd=class extends dn{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new xe(r),a=new xe(a);let o=[],l=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);let v=u&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){let d=u&1?r:a,f=e-e/n*u;for(let p=0;p<i;p++){let v=p/i*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f;o.push(m,0,g),l.push(d.r,d.g,d.b),v=(p+1)/i*(Math.PI*2),m=Math.sin(v)*f,g=Math.cos(v)*f,o.push(m,0,g),l.push(d.r,d.g,d.b)}}let c=new Ve;c.setAttribute("position",new Ce(o,3)),c.setAttribute("color",new Ce(l,3));let h=new Ut({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},zm=new T,cc=new T,Hm=new T,xd=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ve;i.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Ut({fog:!1,toneMapped:!1});this.lightPlane=new Cn(i,r),this.add(this.lightPlane),i=new Ve,i.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new Cn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),zm.setFromMatrixPosition(this.light.matrixWorld),cc.setFromMatrixPosition(this.light.target.matrixWorld),Hm.subVectors(cc,zm),this.lightPlane.lookAt(cc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(cc),this.targetLine.scale.z=Hm.length()}},lc=new T,Et=new Ps,_d=class extends dn{constructor(e){let t=new Ve,n=new Ut({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Ce(i,3)),t.setAttribute("color",new Ce(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new xe(16755200),h=new xe(16711680),u=new xe(43775),d=new xe(16777215),f=new xe(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){let o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ct("c",t,e,Et,0,0,-1),Ct("t",t,e,Et,0,0,1),Ct("n1",t,e,Et,-n,-i,-1),Ct("n2",t,e,Et,n,-i,-1),Ct("n3",t,e,Et,-n,i,-1),Ct("n4",t,e,Et,n,i,-1),Ct("f1",t,e,Et,-n,-i,1),Ct("f2",t,e,Et,n,-i,1),Ct("f3",t,e,Et,-n,i,1),Ct("f4",t,e,Et,n,i,1),Ct("u1",t,e,Et,n*.7,i*1.1,-1),Ct("u2",t,e,Et,-n*.7,i*1.1,-1),Ct("u3",t,e,Et,0,i*2,-1),Ct("cf1",t,e,Et,-n,0,1),Ct("cf2",t,e,Et,n,0,1),Ct("cf3",t,e,Et,0,-i,1),Ct("cf4",t,e,Et,0,i,1),Ct("cn1",t,e,Et,-n,0,-1),Ct("cn2",t,e,Et,n,0,-1),Ct("cn3",t,e,Et,0,-i,-1),Ct("cn4",t,e,Et,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Ct(s,e,t,n,i,r,a){lc.set(i,r,a).unproject(n);let o=e[s];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],lc.x,lc.y,lc.z)}}var hc=new dt,yd=class extends dn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ve;r.setIndex(new Oe(n,1)),r.setAttribute("position",new Oe(i,3)),super(r,new Ut({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&hc.setFromObject(this.object),hc.isEmpty())return;let t=hc.min,n=hc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},wd=class extends dn{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ve;r.setIndex(new Oe(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new Ut({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},Md=class extends Cn{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ve;a.setAttribute("position",new Ce(r,3)),a.computeBoundingSphere(),super(a,new Ut({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ve;l.setAttribute("position",new Ce(o,3)),l.computeBoundingSphere(),this.add(new it(l,new Dt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Vm=new T,uc,Uh,Sd=class extends nt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",uc===void 0&&(uc=new Ve,uc.setAttribute("position",new Ce([0,0,0,0,1,0],3)),Uh=new $i(0,.5,1,5,1),Uh.translate(0,-.5,0)),this.position.copy(t),this.line=new Cn(uc,new Ut({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new it(Uh,new Dt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Vm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Vm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ed=class extends dn{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ve;i.setAttribute("position",new Ce(t,3)),i.setAttribute("color",new Ce(n,3));let r=new Ut({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new xe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Ad=class{constructor(){this.type="ShapePath",this.color=new xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Vr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){let x=[];for(let b=0,_=g.length;b<_;b++){let E=g[b],M=new wi;M.curves=E.curves,x.push(M)}return x}function n(g,x){let b=x.length,_=!1;for(let E=b-1,M=0;M<b;E=M++){let A=x[E],C=x[M],y=C.x-A.x,w=C.y-A.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(A=x[M],y=-y,C=x[E],w=-w),g.y<A.y||g.y>C.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{let F=w*(g.x-A.x)-y*(g.y-A.y);if(F===0)return!0;if(F<0)continue;_=!_}}else{if(g.y!==A.y)continue;if(C.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=C.x)return!0}}return _}let i=Zn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new wi,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],p=0,v;d[p]=void 0,f[p]=[];for(let g=0,x=r.length;g<x;g++)o=r[g],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!h&&d[p]&&p++,d[p]={s:new wi,p:v},d[p].s.curves=o.curves,h&&p++,f[p]=[]):f[p].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let g=!1,x=0;for(let b=0,_=d.length;b<_;b++)u[b]=[];for(let b=0,_=d.length;b<_;b++){let E=f[b];for(let M=0;M<E.length;M++){let A=E[M],C=!0;for(let y=0;y<d.length;y++)n(A.p,d[y].p)&&(b!==y&&x++,C?(C=!1,u[y].push(A)):g=!0);C&&u[b].push(A)}}x>0&&g===!1&&(f=u)}let m;for(let g=0,x=d.length;g<x;g++){l=d[g].s,c.push(l),m=f[g];for(let b=0,_=m.length;b<_;b++)l.holes.push(m[b].h)}return c}},Td=class extends Nt{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");function jd(s,e){if(e===kd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Xs||e===ro){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Xs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var El=class extends qt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=qn.extractUrlBase(e);a=qn.resolveURL(c,this.path)}else a=qn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===v0){try{a[tt.KHR_BINARY_GLTF]=new gf(e)}catch(u){i&&i(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Mf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new Zd;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new vf(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new bf;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new xf;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function e1(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$d=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],kt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new er(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Vs(h),c.distance=u;break;case"spot":c=new Hs(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,sr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Zd=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Dt}extendParams(e,t,n){let i=[];e.color=new xe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}},Qd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},ef=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Y(o,o)}return Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},cf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},df=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ff=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},pf=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},mf=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let p of u){let v=new De,m=new T,g=new ht,x=new T(1,1,1),b=new Ns(p.geometry,p.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),b.setMatrixAt(_,v.compose(m,g,x));for(let _ in l)if(_==="_COLOR_0"){let E=l[_];b.instanceColor=new Vn(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&p.geometry.setAttribute(_,l[_]);nt.prototype.copy.call(b,p),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},v0="glTF",ao=12,f0={JSON:1313821514,BIN:5130562},gf=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ao,r=new DataView(e,ao),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===f0.JSON){let c=new Uint8Array(e,ao+a,o);this.content=n.decode(c)}else if(l===f0.BIN){let c=ao+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=yf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=yf[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ks[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let p in f.attributes){let v=f.attributes[p],m=l[p];m!==void 0&&(v.normalized=m)}u(f)},o,c,kt,d)})})}},bf=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},xf=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Al=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,p=e*c,v=p-c,m=-2*f+3*d,g=f-d,x=1-m,b=g-d+u;for(let _=0;_!==o;_++){let E=a[v+_+o],M=a[v+_+l]*h,A=a[p+_+o],C=a[p+_]*h;r[_]=x*E+b*M+m*A+g*C}return r}},t1=new ht,_f=class extends Al{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return t1.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ks={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},p0={9728:_t,9729:st,9984:io,9985:Lr,9986:Ki,9987:vn},m0={33071:It,33648:Nr,10497:Bn},Kd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},yf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},rr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},n1={CUBICSPLINE:void 0,LINEAR:Ji,STEP:Fr},Yd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function i1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Qi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function jr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function sr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function r1(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function s1(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function a1(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jd(t.attributes):e=s.indices+":"+Jd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jd(s.targets[n]);return e}function Jd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function wf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function o1(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var c1=new De,Mf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Wn(this.options.manager):this.textureLoader=new eo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return jr(r,o,i),sr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(qn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Kd[i.type],o=Ks[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Oe(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Kd[i.type],c=Ks[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0,v,m;if(f&&f!==u){let g=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count,b=t.cache.get(x);b||(v=new c(o,g*f,i.count*f/h),b=new Hn(v,f/h),t.cache.add(x,b)),m=new yn(b,l,d%f/h,p)}else o===null?v=new c(i.count*l):v=new c(o,d,i.count*l),m=new Oe(v,l,p);if(i.sparse!==void 0){let g=Kd.SCALAR,x=Ks[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new x(a[1],b,i.sparse.count*g),M=new c(a[2],_,i.sparse.count*l);o!==null&&(m=new Oe(m.array.slice(),m.itemSize,m.normalized));for(let A=0,C=E.length;A<C;A++){let y=E[A];if(m.setX(y,M[A*l]),l>=2&&m.setY(y,M[A*l+1]),l>=3&&m.setZ(y,M[A*l+2]),l>=4&&m.setW(y,M[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=p0[d.magFilter]||st,h.minFilter=p0[d.minFilter]||vn,h.wrapS=m0[d.wrapS]||Bn,h.wrapT=m0[d.wrapT]||Bn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let p=d;t.isImageBitmapLoader===!0&&(p=function(v){let m=new St(v);m.needsUpdate=!0,d(m)}),t.load(qn.resolveURL(u,r.path),p,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||o1(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Hr,Tt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ut,Tt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Qi}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=i[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Vt);let h=r.alphaMode||Yd.OPAQUE;if(h===Yd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Yd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Dt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Y(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Dt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Dt){let u=r.emissiveFactor;o.emissive=new xe().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&a!==Dt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),sr(u,r),t.associations.set(u,{materials:e}),r.extensions&&jr(i,u,r),u})}createUniqueName(e){let t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return g0(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=a1(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=g0(new Ve,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?i1(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,p=h.length;f<p;f++){let v=h[f],m=a[f],g,x=c[f];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new Ds(v,x):new it(v,x),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?g.geometry=jd(g.geometry,ro):m.mode===Pn.TRIANGLE_FAN&&(g.geometry=jd(g.geometry,Xs));else if(m.mode===Pn.LINES)g=new dn(v,x);else if(m.mode===Pn.LINE_STRIP)g=new Cn(v,x);else if(m.mode===Pn.LINE_LOOP)g=new Fs(v,x);else if(m.mode===Pn.POINTS)g=new Os(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&s1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),sr(g,r),m.extensions&&jr(i,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,p=u.length;f<p;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&jr(i,u[0],r),u[0];let d=new hn;r.extensions&&jr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=u.length;f<p;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vt(en.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ei(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),sr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Is(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],p=i.samplers[f.sampler],v=f.target,m=v.node,g=i.parameters!==void 0?i.parameters[p.input]:p.input,x=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",x)),c.push(p),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],p=u[2],v=u[3],m=u[4],g=[];for(let x=0,b=d.length;x<b;x++){let _=d[x],E=f[x],M=p[x],A=v[x],C=m[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=n._createAnimationTracks(_,E,M,A,C);if(y)for(let w=0;w<y.length;w++)g.push(y[w])}return new Pi(r,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,c1)});for(let f=0,p=u.length;f<p;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new zr:c.length>1?h=new hn:c.length===1?h=c[0]:h=new nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),sr(h,r),r.extensions&&jr(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new hn;n.name&&(r.name=i.createUniqueName(n.name)),sr(r,n),n.extensions&&jr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Tt||d instanceof St)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];rr[r.path]===rr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(rr[r.path]){case rr.weights:c=ni;break;case rr.rotation:c=Gn;break;case rr.position:case rr.scale:c=ii;break;default:n.itemSize===1?c=ni:c=ii;break}let h=i.interpolation!==void 0?n1[i.interpolation]:Ji,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let p=new c(l[d]+"."+rr[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(p),a.push(p)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=wf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Gn?_f:Al;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function l1(s,e,t){let n=e.attributes,i=new dt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=wf(Ks[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let v=wf(Ks[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Mt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function g0(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=yf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return rt.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),sr(s,e),l1(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?r1(s,e.targets,t):s})}var oo=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var x=new Uint8Array(g.length),b=0;b<g.length;++b){var _=g.charCodeAt(b);x[b]=_>96?_-97:_>64?_-39:_+4}for(var E=0,b=0;b<g.length;++b)x[E++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,E)}function l(g,x,b,_,E,M,A){var C=g.exports.sbrk,y=_+3&-4,w=C(y*E),F=C(M.length),O=new Uint8Array(g.exports.memory.buffer);O.set(M,F);var I=x(w,_,E,F,M.length);if(I==0&&A&&A(w,y,E),b.set(O.subarray(w,w+_*E)),C(w-C(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(g){var x={object:new Worker(g),pending:0,requests:{}};return x.object.onmessage=function(b){var _=b.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function p(g){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+l.toString()+m.toString(),b=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(b),E=u.length;E<g;++E)u[E]=f(_);for(var E=g;E<u.length;++E)u[E].object.postMessage({});u.length=g,URL.revokeObjectURL(_)}function v(g,x,b,_,E){for(var M=u[0],A=1;A<u.length;++A)u[A].pending<M.pending&&(M=u[A]);return new Promise(function(C,y){var w=new Uint8Array(b),F=++d;M.pending+=g,M.requests[F]={resolve:C,reject:y},M.object.postMessage({id:F,count:g,size:x,source:w,mode:_,filter:E},[w.buffer])})}function m(g){var x=g.data;self.ready.then(function(b){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);l(b,b.exports[x.mode],_,x.count,x.size,x.source,b.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(g){p(g)},decodeVertexBuffer:function(g,x,b,_,E){l(r,r.exports.meshopt_decodeVertexBuffer,g,x,b,_,r.exports[c[E]])},decodeIndexBuffer:function(g,x,b,_){l(r,r.exports.meshopt_decodeIndexBuffer,g,x,b,_)},decodeIndexSequence:function(g,x,b,_){l(r,r.exports.meshopt_decodeIndexSequence,g,x,b,_)},decodeGltfBuffer:function(g,x,b,_,E,M){l(r,r.exports[h[E]],g,x,b,_,r.exports[c[M]])},decodeGltfBufferAsync:function(g,x,b,_,E){return u.length>0?v(g,x,b,h[_],c[E]):a.then(function(){var M=new Uint8Array(g*x);return l(r,r.exports[h[_]],M,g,x,b,r.exports[c[E]]),M})}}})();function b0(s){let e=s?.polygon;if(!Array.isArray(e)||e.length<3||e.length>32||!e.every(t=>Array.isArray(t)&&t.length===2&&t.every(Number.isFinite))||!Array.isArray(s.center)||s.center.length!==2||!s.center.every(Number.isFinite))throw new Error("Invalid boat waterline");if(!h1(s.center,e)||e.some(t=>Math.hypot(t[0]-s.center[0],t[1]-s.center[1])>2))throw new Error("Boat waterline exceeds shader bounds or has invalid winding");return s}function h1(s,e){return e.every((t,n)=>{let i=e[(n+1)%e.length];return(i[0]-t[0])*(s[1]-t[1])-(i[1]-t[1])*(s[0]-t[0])>=-1e-7})}var x0=`
  uniform int uBoatPointCount;
  uniform vec2 uBoatPoints[32];
  uniform vec2 uBoatCenter;
  bool insideBoat(vec2 p) {
    if (uBoatPointCount < 3 || distance(p, uBoatCenter) > 2.0) return false;
    for (int i=0; i<32; i++) {
      if (i >= uBoatPointCount) break;
      int next = i+1;
      if (next == uBoatPointCount) next=0;
      vec2 a=uBoatPoints[i], b=uBoatPoints[next];
      vec2 edge=b-a, rel=p-a;
      if (edge.x*rel.y-edge.y*rel.x < -0.0000001) return false;
    }
    return true;
  }
`;var Sf=`
uniform vec3 uVisibleSun;
uniform float uVisibleSunOn;
vec3 paintedSun(vec3 direction, vec3 sky) {
 vec3 ray=normalize(direction);
 // Twice the apparent diameter, shared by sky and reflected glazing.
 float radius=length(ray-normalize(uVisibleSun))/2.0;
 float clearSky=smoothstep(.03,.16,sky.b-sky.r)
               *smoothstep(.90,1.14,sky.b/max(sky.g,.001));
 float brush=sin(ray.x*2800.0+ray.y*1400.0)*sin(ray.z*2100.0-ray.y*3300.0);
 float disk=1.0-smoothstep(.0075,.0112,radius+brush*.00022);
 float halo=exp(-radius*radius/.00125)*.15;
 float corona=exp(-radius*radius/.00018)*.13;
 float coverage=uVisibleSunOn*clearSky;
 vec3 warm=vec3(1.0,.83,.56);
 return mix(sky,warm,disk*coverage*.95)
      +vec3(1.0,.68,.31)*(halo+corona)*coverage;
}
`;var _0=`
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
`;function Tl(s,e){let[t,n]=e.transition,i=Math.max(0,Math.min(1,(s-t)/(n-t)));return s*(1-e.reduction*i*i*(3-2*i))}function u1(s,e,t){let n=t.originalGround,i=Math.max(0,Math.min(n.N-1,(s-n.x0)/n.cw-.5)),r=Math.max(0,Math.min(n.N-1,(e-n.z0)/n.ch-.5)),a=Math.min(n.N-2,Math.floor(i)),o=Math.min(n.N-2,Math.floor(r)),l=i-a,c=r-o,h=n.h[o*n.N+a],u=n.h[o*n.N+a+1],d=n.h[(o+1)*n.N+a],f=n.h[(o+1)*n.N+a+1];return(h+(u-h)*l)*(1-c)+(d+(f-d)*l)*c}function y0(s,e,t){if(s.userData.terrainProfile===t.version){console.info("terrain: baked profile "+t.version);return}s.updateMatrixWorld(!0);for(let[r,a]of Object.entries(t.offsets)){let o=s.getObjectByName(r);if(!o)throw Error("Missing grounded landmark: "+r);let l=new e.Vector3(0,a,0);if(o.parent){let c=o.parent.matrixWorld.clone().invert();l.applyMatrix3(new e.Matrix3().setFromMatrix4(c))}o.position.add(l),r==="WEB_HM_tree_og"&&o.traverse(c=>{if(c.isMesh)for(let h of["_broot","_sroot","_leaf_pivot"]){let u=c.geometry.attributes[h];if(u){for(let d=0;d<u.count;d++)u.setY(d,u.getY(d)+a);u.needsUpdate=!0}}})}s.updateMatrixWorld(!0);let n=s.getObjectByName("WEB_island");if(!n)throw Error("Missing island");let i=new e.Vector3;n.traverse(r=>{if(!r.isMesh)return;let a=r.material.name==="WEB_island_mat",o=r.matrixWorld.clone().invert(),l=r.geometry.attributes.position;for(let c=0;c<l.count;c++){if(i.fromBufferAttribute(l,c).applyMatrix4(r.matrixWorld),a)i.y=Tl(i.y,t);else{let h=u1(i.x,i.z,t);i.y+=Tl(h,t)-h}i.applyMatrix4(o),l.setXYZ(c,i.x,i.y,i.z)}l.needsUpdate=!0,a&&r.geometry.computeVertexNormals(),r.geometry.computeBoundingBox(),r.geometry.computeBoundingSphere()}),s.userData.terrainProfile=t.version}var w0=`
#ifdef TREE_TAB
#define _leaf_pivot (treeRow(3).xyz)
#define _leaf_axis (vec3(treeRow(3).w, treeRow(4).xy))
#define _leaf_seed (treeRow(4).z)
#elif defined(TREE_Q)
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
`;function M0(s,e,t,n,i){s.onBeforeCompile=r=>{Object.assign(r.uniforms,{uBenchSun:e,uBenchLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),r.vertexShader=`uniform mat4 uShMatrix; varying vec3 vBenchNormal; varying vec4 vShCoord;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vBenchNormal=inverseTransformDirection(normalize(normalMatrix*normal),viewMatrix);
      vec3 benchWorld=(modelMatrix*vec4(position,1.)).xyz;
      vShCoord=uShMatrix*vec4(benchWorld+vBenchNormal*.015,1.);`),r.fragmentShader=`uniform vec3 uBenchSun; uniform float uBenchLive; varying vec3 vBenchNormal;
`+n+r.fragmentShader.replace("#include <opaque_fragment>",`
      vec3 key=normalize(mix(vec3(.840,.242,.485),uBenchSun,uBenchLive));
      float facing=sceneFacing(vBenchNormal,key);
      float visibility=mix(1.,meadowShadow(),uBenchLive);
      float sunlight=facing*visibility;
      // The former uniform lift also washed out the authored joint shadows.
      // Recover their pigment in shade while retaining the lit wood treatment.
      float pigmentLift=mix(.70,.62,smoothstep(.08,.78,sunlight));
      vec3 wood=pow(max(diffuseColor.rgb,vec3(0.)),vec3(pigmentLift));
      outgoingLight=wood*mix(.56,1.48,pow(sunlight,1.12))*sceneShadowContrast(sunlight);
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"bench-surface-depth-v199"}function S0(s,e,t,n,i,r=!1,a=null){s.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGardenSun:e,uGardenLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),a&&(o.uniforms.uSillFlowerDetail={value:a},o.vertexShader=`varying vec2 vSillUv; varying float vSillHeight;
`+o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        vSillUv=uv; vSillHeight=position.y;`),o.fragmentShader=`uniform sampler2D uSillFlowerDetail; varying vec2 vSillUv; varying float vSillHeight;
`+o.fragmentShader),o.vertexShader=o.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),o.vertexShader=`uniform mat4 uShMatrix; varying vec2 vGardenGround; varying vec3 vGardenNormal; varying vec4 vShCoord;
`+o.vertexShader.replace("#include <project_vertex>",`
      vGardenNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
      vec3 gardenWorld=(modelMatrix*vec4(transformed,1.)).xyz; vGardenGround=gardenWorld.xz;
      vShCoord=uShMatrix*vec4(gardenWorld+vGardenNormal*.025,1.);
      #include <project_vertex>`),o.fragmentShader=`uniform vec3 uGardenSun; uniform float uGardenLive; varying vec2 vGardenGround; varying vec3 vGardenNormal;
`+n+o.fragmentShader.replace("#include <opaque_fragment>",`
      vec3 key=normalize(mix(vec3(.840,.242,.485),uGardenSun,uGardenLive));
      float facing=sceneFacing(vGardenNormal,key);
      float visibility=mix(1.,meadowShadow(),uGardenLive);
      outgoingLight=${r?"sceneMeadowPigment(diffuseColor.rgb,vGardenGround)":"diffuseColor.rgb"}*${r?"sceneTurfLight(visibility)":"(.72+.60*facing*visibility)*sceneShadowContrast(facing*visibility)"};
      ${a?`// Retain small dark petunia throats and leaf veins from the source
      // ingredient, while vertex pigments control the final palette.
      vec3 detail=texture2D(uSillFlowerDetail,vSillUv).rgb;
      float value=max(detail.r,max(detail.g,detail.b));
      float pigmentDetail=.36+.86*smoothstep(.015,.72,value);
      float foliage=smoothstep(1.14,1.19,vSillHeight);
      outgoingLight*=mix(.96,pigmentDetail,foliage);`:""}
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"garden-paint-v180-"+r+"-"+!!a}var d1=`
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
`;function Ef(s,e,t,n){let i=s.onBeforeCompile,r=s.customProgramCacheKey.bind(s);s.onBeforeCompile=a=>{i(a),Object.assign(a.uniforms,{uSillField:e.uTex,uSillFieldMin:e.uMin,uSillFieldSize:e.uSize,uSillTime:t,uSillWorldToLocal:{value:n}}),a.vertexShader=d1+a.vertexShader,a.vertexShader=a.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      float sillSlope=2.*sillFlex(position)/.357;
      objectNormal.y-=dot(objectNormal,sillBreeze(position))*sillSlope;`),a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float sillWeight=sillFlex(position);
      transformed+=sillBreeze(position)*sillWeight*sillWeight;`)},s.customProgramCacheKey=()=>r()+"-sill-wind-v180"}function E0(s,e,t,n,i,r,a=!1){let o=l=>new e.Color(...l.map(c=>c/255)).convertSRGBToLinear();s.onBeforeCompile=l=>{Object.assign(l.uniforms,{uChimneySun:t,uChimneyLive:r,uChimneyLit:{value:o(a?[103,106,98]:[169,155,128])},uChimneyShade:{value:o(a?[43,47,43]:[49,54,45])},uChimneyMedian:{value:o(a?[147,151,149]:[197,177,151])},uShMatrix:n.matrix,uShMap:n.map,uShSize:n.size,uShOn:n.on}),l.vertexShader=`uniform mat4 uShMatrix; varying vec4 vShCoord; varying vec3 vChimneyNormal;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vec3 world=(modelMatrix*vec4(position,1.)).xyz;
   vChimneyNormal=inverseTransformDirection(normalize(normalMatrix*normal),viewMatrix);
   vShCoord=uShMatrix*vec4(world+vChimneyNormal*.055,1.);`),l.fragmentShader=`uniform vec3 uChimneySun,uChimneyLit,uChimneyShade,uChimneyMedian; uniform float uChimneyLive; varying vec3 vChimneyNormal;
`+i+l.fragmentShader.replace("#include <opaque_fragment>",`
   vec3 n=normalize(vChimneyNormal);
   vec3 key=normalize(mix(vec3(.840,.242,.485),uChimneySun,uChimneyLive));
   float facing=smoothstep(-.025,.72,dot(n,key));
   float visibility=mix(1.,meadowShadow(),uChimneyLive);
   vec3 pigment=mix(vec3(1.),clamp(diffuseColor.rgb/uChimneyMedian,vec3(.48),vec3(1.48)),.94);
   outgoingLight=mix(mix(uChimneyShade,uChimneyLit,.09),uChimneyLit,facing*visibility)*pigment*sceneShadowContrast(facing*visibility);
   #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"weathered-chimney-v174-"+a}var si=`
uniform sampler2D uShMap;
uniform vec2 uShSize;
uniform float uShOn;
varying vec4 vShCoord;
float sceneDepth(vec2 uv){return dot(texture2D(uShMap,uv),vec4(255./256.)/vec4(16777216.,65536.,256.,1.));}
float sceneCompare(vec2 uv,vec3 c,vec2 slope){
 // V223: the receiver-plane term comes from screen derivatives, which are
 // garbage across a silhouette (a chimney a few pixels wide at 50 m read
 // its neighbours' depth and speckled); cap it at a few depth units.
 // The bias and the cap were tuned for the 4096 map; a smaller map has
 // larger texels and the depth across one grows with them, so both scale
 // with the texel (the phone's 1024: x4 - its walls striped with acne)
 float shK=4096./uShSize.x;
 return step(c.z+clamp(dot(slope,uv-c.xy),-.0008*shK,.0008*shK)-.00013*shK,sceneDepth(uv));
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
`;function A0(s,e,t,n,{wind:i=!1,turf:r=!1,glass:a=!1,roof:o=!1,bark:l=!1,soft:c=!1,trim:h=!1,houseCentre:u=null}={}){let d=s.onBeforeCompile,f=s.customProgramCacheKey.bind(s);s.onBeforeCompile=p=>{d(p),p.vertexShader=p.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),Object.assign(p.uniforms,{uSceneSun:e,uSceneLive:n,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),h&&(p.uniforms.uHouseCentre={value:u}),p.vertexShader=`varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;
`+(i?"":`uniform mat4 uShMatrix; varying vec4 vShCoord;
`)+p.vertexShader.replace("#include <project_vertex>",`
   vSceneWorld=(modelMatrix*vec4(transformed,1.)).xyz;
   vSceneGround=vSceneWorld.xz;
   vSceneNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
   ${i?"":`vShCoord=uShMatrix*vec4((modelMatrix*vec4(transformed,1.)).xyz+vSceneNormal*${o?".012":".025"},1.);`}
   #include <project_vertex>`);let v=`
   vec3 sceneKey=normalize(mix(vec3(.840,.242,.485),uSceneSun,uSceneLive));
   float sceneVisibility=mix(1.,meadowShadow(),uSceneLive);
   ${r?"outgoingLight=sceneMeadowPigment(outgoingLight,vSceneGround);":""}
   ${l?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
      outgoingLight *= mix(1.,(.40+.72*f)*sceneShadowContrast(f),uSceneLive); }`:c?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
      outgoingLight *= mix(1.,(.80+.28*f)*mix(.86,1.,smoothstep(0.,.85,f)),uSceneLive); }`:`outgoingLight *= mix(1.,${r?"sceneTurfLight(sceneVisibility)":"sceneSurfaceLight(sceneFacing(vSceneNormal,sceneKey),sceneVisibility)"},uSceneLive);`}
   ${h?`{ vec3 tn=normalize(vSceneNormal);
      vec2 toCentre=normalize(uHouseCentre.xz-vSceneWorld.xz);
      float under=smoothstep(-.05,-.5,tn.y);
      float inward=smoothstep(.35,.8,dot(normalize(tn.xz+vec2(1e-5)),toCentre))*(1.-smoothstep(.6,.9,abs(tn.y)));
      outgoingLight *= mix(1.,.28,max(under,inward)); }`:""}
   ${o?`{
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
   }`:""}
  `,m=a?"vec2 q = vGlassUv;":"#include <opaque_fragment>";p.fragmentShader="uniform vec3 uSceneSun; uniform float uSceneLive; varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;"+(h?" uniform vec3 uHouseCentre;":"")+`
`+si+p.fragmentShader.replace(m,v+m)},s.customProgramCacheKey=()=>f()+"-scene-light-v223-"+[i,r,a,o,l,c,h].join("-"),s.needsUpdate=!0}function T0(s,e=""){return/home|tree|bench|clothes/.test(s)||/^WEB_HM_(home|bench|clothes|shore)_/.test(e)||/^WEB_Illustrated(Bark|Leaf)/.test(e)||/^WEB_petal_/.test(e)}function R0(s,e,t,n,i,r,a){let o=c=>new e.Color(...c.map(h=>h/255)).convertSRGBToLinear(),l={uPlasterCenter:{value:new e.Vector3(...t.center)},uPlasterLit:{value:o(t.lit_srgb)},uFrontLit:{value:o(t.front_lit_srgb||t.lit_srgb)},uPlasterShade:{value:o(t.shade_srgb)},uRearShade:{value:o(t.rear_shade_srgb)},uPlasterMedian:{value:o(t.source_median_srgb)},uWearBounds:{value:new e.Vector4(...t.weathered_corners)},uSideTextureStrength:{value:t.side_texture_strength??.22},uGablePaint:{value:s.name.startsWith("WEB_HM_home_plaster_38")?1:0},uGableMedian:{value:o([127,128,110])},uPlasterSun:n,uPlasterLive:a,uShMatrix:i.matrix,uShMap:i.map,uShSize:i.size,uShOn:i.on};s.onBeforeCompile=c=>{Object.assign(c.uniforms,l),c.vertexShader=`uniform mat4 uShMatrix; uniform vec4 uWearBounds; varying float vQuietSide; uniform vec3 uPlasterCenter; varying vec4 vShCoord;
      varying vec3 vPlasterWorld; varying vec3 vPlasterNormal; varying vec3 vPlasterLocal; varying float vWallAxis;
`+c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      vShCoord=uShMatrix*vec4(vPlasterWorld+vPlasterNormal*.025,1.0);`),c.fragmentShader=c.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
      diffuseColor*=plasterPaint(map,vMapUv);
      #endif`),c.fragmentShader=`
      vec4 plasterPaint(sampler2D pigmentMap,vec2 uv){
        // Each elevation occupies one unique quadrant. UVs are fixed to the
        // complete building surface; do not tile, scramble or blend motifs.
        return texture2D(pigmentMap,uv);
      }
      uniform vec3 uPlasterCenter,uFrontLit,uPlasterLit,uPlasterShade,uRearShade,uPlasterMedian,uPlasterSun;
      uniform float uPlasterLive,uSideTextureStrength,uGablePaint; uniform vec3 uGableMedian; varying float vQuietSide; uniform vec4 uWearBounds; varying vec3 vPlasterWorld,vPlasterNormal,vPlasterLocal; varying float vWallAxis;
`+r+c.fragmentShader.replace("#include <opaque_fragment>",`
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"reference-gable-v221"}var C0={waterLevel:.02,polygon:[[-7.987894694399442,-22.549935341269553],[-7.9771248615490435,-22.70002537855673],[-7.956132778892359,-22.841797932956577],[-7.9154523742137695,-22.997999377431473],[-7.867172068752532,-23.131831141397704],[-7.828849046631001,-23.2164294842829],[-7.75160247476648,-23.35458339250706],[-7.641948295944461,-23.51343848504676],[-7.514208167223112,-23.64982440836896],[-7.336780399498208,-23.79168626844341],[-7.107035874805265,-23.949429633356683],[-7.078409245022858,-23.94180337429376],[-6.99611732992006,-23.680307416175722],[-6.972159842021256,-23.593489317509714],[-6.940715121485183,-23.44358450252468],[-6.92589407647665,-23.26455149443727],[-6.929736836264584,-23.168526754231056],[-6.942886506066648,-23.032273676371776],[-6.973367385879903,-22.868357359752338],[-7.001719549127445,-22.77114103295838],[-7.043137963754038,-22.65590984496234],[-7.0871245666938485,-22.557976906402487],[-7.173073877334716,-22.406881644748765],[-7.240863331073182,-22.306325083134613],[-7.3325329328049635,-22.195155241179748],[-7.388805444456387,-22.138347527698798],[-7.519572131189774,-22.02806122001669],[-7.8229065805350695,-21.796120778863962],[-7.845394800355291,-21.80435338801289],[-7.94134316677993,-22.177827766216243],[-7.9742718719461765,-22.335138472207138],[-7.987497899897865,-22.462030493944205]],center:[-7.456798273348511,-22.890403912711033]};var Af={center:[-1.7501424551010132,3.8930039405822754,-4.386573791503906],lit_srgb:[231,212,193],shade_srgb:[65,69,61],source_median_srgb:[241,236,227],changed_foot_faces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,2908,2909,2910,2911,2912,2913,2914,2915,2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2931,2932,2933,2934,2935,2936,2937,2938,2939,2940,4063,4067,4068,4072,4073,4077,4223,4224,4225,4226,4227,4229,4230,4231,4234,4235,4236,4414,4415,19439,19440,19441],weathered_corners:[-4.984452296074341,-.7439188854702072,7.915547703925659,7.7821],texture_source:"reference/textures/facade/whole-house-oil-v171.png",rear_shade_srgb:[124,119,103],front_lit_srgb:[222,190,165],side_texture_strength:.22};var Rl={materials:{WEB_HM_home_window_4:{reflection:.94,blur:1},WEB_HM_home_window_18:{reflection:1.02,blur:.92},WEB_HM_home_window_19:{reflection:.52,blur:1.25,interior:0},WEB_HM_home_window_20:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_21:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_22:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_23:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_24:{reflection:1.05,blur:1,frontGlazing:1,frontDaylight:0,interior:0,blindOpening:0,sideCurtains:0,roomVariation:0,lift:.6},WEB_HM_home_window_25:{reflection:.84,blur:1.45},WEB_HM_home_window_32:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_33:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_34:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_35:{reflection:1.05,blur:.8,interior:.94,roomVariation:-.025,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1},WEB_HM_home_window_36:{reflection:1.05,blur:.8,interior:.94,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1}},views:{original:{label:"Front upper left \u2014 closed curtains",eye:[1.3976149559020996,5.089506149291992,2.7602779865264893],target:[-.7384145855903625,5.089506149291992,.9640572667121887],fov:50},gathered:{label:"Front upper middle \u2014 closed curtains",eye:[4.105578891932964,5.188506126403809,-.45997825264930725],target:[1.969549410045147,5.188506126403809,-2.256199389696121],fov:50},closed:{label:"Front upper right \u2014 closed curtains",eye:[6.437035083770752,5.152506351470947,-3.2324986457824707],target:[4.3010053634643555,5.152506351470947,-5.028719902038574],fov:50},cafe:{label:"Front lower left \u2014 parted curtains",eye:[1.4343006610870361,3.1015024185180664,2.7166526317596436],target:[-.7017291188240051,3.1015024185180664,.9204317927360535],fov:50},swept:{label:"Front lower right \u2014 parted curtains",eye:[6.428346157073975,3.058502435684204,-3.2221665382385254],target:[4.292316436767578,3.058502435684204,-5.018387317657471],fov:50},roller:{label:"Rear upper left \u2014 roller",eye:[-8.710698127746582,5.148006439208984,-7.430671691894531],target:[-6.3545379638671875,5.148006439208984,-5.449339389801025],fov:50},roman:{label:"Rear upper right \u2014 roman",eye:[-5.94320011138916,5.148006439208984,-10.721724510192871],target:[-3.587040424346924,5.148006439208984,-8.740392684936523],fov:50},privacy:{label:"Small side window \u2014 privacy",eye:[-5.303554058074951,5.439507007598877,3.4764301776885986],target:[-4.0807085037231445,5.439507007598877,2.022246837615967],fov:50},attic:{label:"Attic window \u2014 centered",eye:[4.003900057220459,7.463011093139649,-11.229307524108886],target:[2.372250324630737,7.463011093139649,-9.288982740783691],fov:50}}};var ar={points:[[-5.089419841766357,-7.194624722003937],[-5.43648081715508,-7.290950428933904],[-5.748990816535627,-7.428363466648519],[-6.038466831910721,-7.593168058219567],[-6.316425855283091,-7.771668426718831],[-6.558851281868285,-8.02407998877454],[-6.7608025342595734,-8.366365001993307],[-6.978364302466784,-8.68938999367238],[-7.22227557895765,-8.97978026500778]],width:.48,door_shift_local_x:-.7634999960743412,moved_vertices:1336};var Ue={about:"The Blender names the viewer depends on, by the role each plays. main.js reads them as M.* and carries no name of its own; tests/world-manifest.test.mjs checks every entry against web/island_world.glb, so a rename in Blender fails a test instead of the look.",nodes:{island:"WEB_island",meadow:"WEB_meadow",meadowTable:"WEB_meadow_table",house:"WEB_HM_home",tree:"WEB_HM_tree_og",water:"WEB_water"},materials:{housePaintRetint:"WEB_HM_home_paint_8",houseRoofEdgeTrim:"WEB_HM_home_paint_39",houseSillFlowers:"WEB_HM_home_garden_37",boat:"WEB_HM_shore_paint_0",rope:"WEB_HM_shore_paint_2",path0:"WEB_path_0",roofPaint1:"WEB_HM_home_paint_1",roofPaint2:"WEB_HM_home_paint_2"},prefixes:{housePart:"WEB_HM_home_",houseWindow:"WEB_HM_home_window_",housePlaster:"WEB_HM_home_plaster_",houseGarden:"WEB_HM_home_garden_",houseFlashing:"WEB_HM_home_flashing_",houseChimney:"WEB_HM_home_chimney_",path:"WEB_path_",treeTable:"WEB_tree_table_"},substrings:{house:"home",bench:"HM_bench",clothes:"clothes",bark:"IllustratedBark",leaf:"IllustratedLeaf",oil:"_Oil",petal:"petal"}};function Cl(s){return s.updateWorldMatrix(!0,!1),s.geometry.applyMatrix4(s.matrixWorld),(s.parent?s.parent.matrixWorld.clone().invert():new De).decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),new dt().setFromObject(s)}var Pl=new URLSearchParams(location.search).has("embed")&&window.parent!==window,Ln=s=>{Pl&&window.parent.postMessage({isola:"v1",...s},location.origin)};function P0(s,e,t){return new Promise(n=>{let i=null,r=!1,a=()=>{clearTimeout(o),removeEventListener("message",l),n(i)},o=setTimeout(()=>{r||a()},2500);function l(c){c.origin!==location.origin||!c.data||(c.data.isola==="ack"?r=!0:c.data.isola==="go"&&(c.data.world instanceof Blob&&(i=c.data.world),a()))}addEventListener("message",l),Ln({type:"hello",glb:s,build:e,bytes:t})})}var jn={c:{value:new T(0,.02,0)},axis:{value:new Y(1,0)},heave:{value:0},roll:{value:0},pitch:{value:0},ready:!1};function L0(s){s.then(e=>{jn.c.value.set(e.center[0],.02,e.center[1]);let t=0,n=[1,0];for(let i of e.polygon)for(let r of e.polygon){let a=r[0]-i[0],o=r[1]-i[1],l=a*a+o*o;l>t&&(t=l,n=[a,o])}jn.axis.value.set(n[0],n[1]).normalize(),jn.ready=!0}).catch(()=>{})}function D0(s){jn.heave.value=.022*Math.sin(s*.85)+.01*Math.sin(s*1.9+1.3),jn.roll.value=.026*Math.sin(s*.62+.7)+.011*Math.sin(s*1.45),jn.pitch.value=.013*Math.sin(s*.5+2)}function I0(s,e,t){e.updateWorldMatrix(!0,!1);let n={value:e.matrixWorld.clone().invert()},i=s.onBeforeCompile;s.onBeforeCompile=r=>{i&&i(r),Object.assign(r.uniforms,{uBoatC:jn.c,uBoatAxis:jn.axis,uBoatHeave:jn.heave,uBoatRoll:jn.roll,uBoatPitch:jn.pitch,uBoatInv:n}),r.vertexShader=`uniform vec3 uBoatC; uniform vec2 uBoatAxis; uniform float uBoatHeave, uBoatRoll, uBoatPitch; uniform mat4 uBoatInv;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        vec3 wpB = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vec3 rB = wpB - uBoatC;
        float wB = ${t?"1.0 - smoothstep(0.9, 2.4, length(rB.xz))":"1.0"};
        vec3 ax = vec3(uBoatAxis.x, 0.0, uBoatAxis.y), ay = vec3(-uBoatAxis.y, 0.0, uBoatAxis.x);
        rB += cross(ax * (uBoatRoll * wB), rB) + cross(ay * (uBoatPitch * wB), rB);
        rB.y += uBoatHeave * wB;
        transformed = (uBoatInv * vec4(rB + uBoatC, 1.0)).xyz;
      }`)},s.customProgramCacheKey=()=>"boat-v219-"+(t?"rope":"hull")}var co=[],Tf=1,N0=.25,Rf=45,F0=110;function Cf({near:s=1,far:e,from:t,to:n}){Tf=s,N0=e,Rf=t,F0=n}function b1(s){let e=Math.min(Math.max((s-Rf)/(F0-Rf),0),1);return Tf+(N0-Tf)*e*e*(3-2*e)}function Pf(s,e,t,n){if(!co.length)return;let i=n||!t&&e>=1,r=s.position.x,a=s.position.z;for(let{mesh:o,c:l}of co){let c=l.lodR1,h=c.length,u=h;if(!i){let d=Math.max(l.min[0]-r,0,r-l.max[0]),f=Math.max(l.min[2]-a,0,a-l.max[2]),p=Math.min(t?b1(Math.hypot(d,f)):1,e)+3e-5;if(p<1){let v=0,m=h;for(;v<m;){let g=v+m>>1;c[g]>p?m=g:v=g+1}u=v}}o.geometry.setDrawRange(0,u?l.lodEnd[u-1]:0)}}function O0(s,e){let t=s.index.array,n=t.length/3,i=new Float32Array(n);for(let u=0;u<n;u++)i[u]=e(t[u*3]);let r=4096,a=new Uint32Array(r+1),o=u=>Math.min(r-1,Math.max(0,u*r|0));for(let u=0;u<n;u++)a[o(i[u])+1]++;for(let u=0;u<r;u++)a[u+1]+=a[u];let l=new Uint32Array(n);for(let u=0;u<n;u++)l[a[o(i[u])]++]=u;let c=new(s.attributes.position.count>65535?Uint32Array:Uint16Array)(t.length),h=new Float32Array(n);for(let u=0;u<n;u++){let d=l[u];c[u*3]=t[d*3],c[u*3+1]=t[d*3+1],c[u*3+2]=t[d*3+2],h[u]=i[d]}return s.setIndex(new Oe(c,1)),h}var Lf=(s,e)=>{let t=0,n=s.length;for(;t<n;){let i=t+n>>1;s[i]>e?n=i:t=i+1}return t*3},U0=(s,e,t)=>{let n=Math.min(Math.max((t-s)/(e-s),0),1);return n*n*(3-2*n)};function k0({keep:s=.76,mirrorKeep:e=.76,scale:t=1,mirrorScale:n=1,far:i=null}){let r={uLeafKeep:{value:s},uLeafScale:{value:t}},a=null,o=null,l=s,c=t;function h(f,p){o=O0(f.geometry,p),a=f,u(l,c),console.info(`leaf cards: ${o.length} triangles sorted by seed; the main pass draws ${(Lf(o,s)/3/o.length*100).toFixed(0)} %`)}function u(f,p){r.uLeafKeep.value=f,r.uLeafScale.value=p,a&&a.geometry.setDrawRange(0,Lf(o,f))}function d(f){if(i){let p=U0(i.from,i.to,f);l=s+(i.keep-s)*p,c=Math.sqrt(.76/l)}return l}return{uniforms:r,attach:h,update:d,main:()=>u(l,c),mirror:()=>u(Math.min(e,l*(e/s)),i?c:n),keep:s}}function B0({near:s=1,far:e=.3,from:t=40,to:n=90}){let i=[];function r(o,l){let c=O0(o.geometry,l);o.geometry.computeBoundingSphere(),i.push({o,seeds:c})}function a(o){for(let{o:l,seeds:c}of i){let h=l.geometry.boundingSphere.center.clone().applyMatrix4(l.matrixWorld),u=Math.hypot(o.position.x-h.x,o.position.z-h.z)-l.geometry.boundingSphere.radius*l.getWorldScale(new T).x;l.geometry.setDrawRange(0,Lf(c,s+(e-s)*U0(t,n,u)))}}return{attach:r,update:a}}function Ys(s){Ln({type:"error",message:s});let e=document.getElementById("loading");e||(e=document.createElement("div"),e.id="loading",document.body.appendChild(e)),e.style.opacity=1,e.textContent=s+" ";let t=document.createElement("button");t.textContent="Try again",t.style.font="inherit",t.style.marginLeft="8px",t.addEventListener("click",()=>location.reload()),e.appendChild(t)}function z0(){let s=document.getElementById("loading");return!!s&&s.isConnected&&s.style.opacity!=="0"}function H0(s){addEventListener("error",()=>{z0()&&Ys("The island could not load.")}),addEventListener("unhandledrejection",()=>{z0()&&Ys("The island could not load.")}),s.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),Ys("The graphics context was lost.")}),s.domElement.addEventListener("webglcontextrestored",()=>{location.reload()})}var V0=s=>!!s&&(typeof ImageBitmap<"u"&&s instanceof ImageBitmap||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement);function Df(){(this.userData=this.userData||{}).bpe=this.array.BYTES_PER_ELEMENT,this.array=null}function Js(s,e){let t=0,n=new Set;return s.traverse(i=>{if(!i.isMesh||!i.geometry||e.has(i.geometry))return;let r=i.geometry;r.boundingSphere||r.computeBoundingSphere();for(let a of Object.values(r.attributes)){if(a.isInterleavedBufferAttribute){let o=a.data;if(!o.array||n.has(o))continue;n.add(o),t+=o.array.byteLength,o.onUpload(Df);continue}!a.array||n.has(a)||(n.add(a),t+=a.array.byteLength,a.onUpload(Df))}r.index&&r.index.array&&!n.has(r.index)&&(n.add(r.index),t+=r.index.array.byteLength,r.index.onUpload(Df))}),t}function G0(s,e,t=[]){let n=new Set,i=r=>{r&&r.isTexture&&!r.isRenderTargetTexture&&!n.has(r)&&(n.add(r),e(r))};s.traverse(r=>{let a=r.material?Array.isArray(r.material)?r.material:[r.material]:[];for(let o of a){for(let l of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])i(o[l]);if(o.uniforms)for(let l of Object.values(o.uniforms))i(l&&l.value)}});for(let r of t)i(r)}function Ll(s,e=2048){let t=s.image;if(s.isDataTexture||s.userData.halved||!V0(t)||t.width<e)return!1;let n=document.createElement("canvas");return n.width=t.width>>1,n.height=t.height>>1,n.getContext("2d").drawImage(t,0,0,n.width,n.height),t.close&&t.close(),s.dispose(),s.image=n,s.userData.halved=!0,s.needsUpdate=!0,!0}function W0(s,e=[],t=2048){let n=0;G0(s,i=>{Ll(i,t)&&n++},e),console.info("memory tier: "+n+" textures halved")}function If(s,e,t=[]){let n=0;return G0(s,i=>{let r=i.image;if(i.isDataTexture||i.isCanvasTexture||!V0(r))return;let a=e.properties.get(i);if(!a.__webglTexture||a.__version!==i.version)return;let o=r.width,l=r.height;r.close&&r.close(),i.image={width:o,height:l},n++},t),n&&console.info("memory: "+n+" decoded images released after upload"),n}var x1="291ea798";var _1="204c1122";var y1=["erictliu.com","r2.dev","r2.cloudflarestorage.com","objects.githubusercontent.com"];function q0(s,e){let t=s.get("world"),n=null;if(t){try{let o=new URL(t);o.protocol==="https:"&&y1.some(l=>o.hostname===l||o.hostname.endsWith("."+l))&&(n=o.href)}catch{}n||console.warn("world: ignoring "+t+" (host not allowed)")}let i=e&&s.get("cb"),r=n||"./"+(e&&s.get("glbfile")||"island_world.glb")+"?v="+x1+(i?"&cb="+encodeURIComponent(i):""),a=(n?n.replace(/island_world\.glb/,"island_meadow.glb"):"./island_meadow.glb?v="+_1)+(i?(n?"?":"&")+"cb="+encodeURIComponent(i):"");return{WORLD_URL:n,GLB_URL:r,GLB_ABS:new URL(r,location.href).href,MEADOW_URL:a,MEADOW_ABS:new URL(a,location.href).href}}async function Nf({url:s,abs:e,blob:t,cache:n},i){if(t)return console.info("island_world.glb: handed over by the door"),t.arrayBuffer();try{if(window.caches){let d=await caches.match(e);if(d)return console.info("island_world.glb: from the door's cache"),d.arrayBuffer()}}catch(d){console.warn("cache lookup failed",d)}let r=await fetch(s);if(!r.ok)throw new Error("island_world.glb "+r.status);let a=+r.headers.get("content-length")||0;if(!r.body)return r.arrayBuffer();let o=r.body.getReader(),l=[],c=0;for(;;){let{done:d,value:f}=await o.read();if(d)break;l.push(f),c+=f.length,a&&i(c,a)}let h=new Uint8Array(c),u=0;for(let d of l)h.set(d,u),u+=d.length;if(n)try{await(await caches.open("isola-world")).put(e,new Response(h.slice(),{headers:{"Content-Type":"model/gltf-binary","Content-Length":String(c)}}))}catch(d){console.warn("could not cache "+s,d)}return h.buffer}var or=s=>+(s/1048576).toFixed(1),Dl="isola-visit";function X0(s){let e=s.isInterleavedBufferAttribute?s.data:s;return e.array?e.array.BYTES_PER_ELEMENT:e.userData&&e.userData.bpe||(s.normalized?2:4)}function w1(s){let e=new Set,t=0,n={};return s.traverse(i=>{if(!i.isMesh||!i.geometry)return;let r=i.geometry,a=0;for(let l of Object.values(r.attributes)){let c=l.isInterleavedBufferAttribute?l.data:l;e.has(c)||(e.add(c),a+=(l.isInterleavedBufferAttribute?c.stride*c.count:l.count*l.itemSize)*X0(l))}r.index&&!e.has(r.index)&&(e.add(r.index),a+=r.index.count*X0(r.index)),t+=a;let o=i.name.replace(/_c\d+(_c\d+)?$/,"")||i.material&&i.material.name||"?";n[o]=(n[o]||0)+a}),{bytes:t,by:n}}function M1(s,e=[]){let t=new Set,n=0,i=[],r=a=>{if(!a||!a.isTexture||a.isRenderTargetTexture||t.has(a)||!a.image)return;t.add(a);let o=a.image,l=o.width||0,c=o.height||0;if(!l||!c)return;let h=l*c*4*(a.generateMipmaps?4/3:1);n+=h,i.push({name:a.name||(o.src||"").split("/").pop().replace(/\?.*$/,"")||"unnamed",w:l,h:c,mb:or(h)})};s.traverse(a=>{let o=a.material?[].concat(a.material):[];for(let l of o){for(let c of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])r(l[c]);if(l.uniforms)for(let c of Object.values(l.uniforms))r(c&&c.value)}});for(let a of e)r(a);return i.sort((a,o)=>o.mb-a.mb),{bytes:n,list:i}}function j0(s){let{renderer:e,scene:t}=s,n=[],i=!1,r=null;try{let l=localStorage.getItem(Dl);(l==="loading"||l==="ready")&&(r="died while "+l),localStorage.setItem(Dl,"loading")}catch{}addEventListener("pagehide",()=>{try{localStorage.setItem(Dl,"left")}catch{}});let a=()=>{let l=w1(t),c=M1(t,s.extraTextures||[]),h=(s.targets?s.targets():[]).map(x=>({...x,mb:or(x.w*x.h*x.bpp)})),u=+h.reduce((x,b)=>x+b.mb,0).toFixed(1),d=n.slice().sort((x,b)=>x-b),f=d.length?{median:+d[d.length>>1].toFixed(1),p90:+d[Math.floor(d.length*.9)].toFixed(1),n:d.length}:null,p=performance.memory?or(performance.memory.usedJSHeapSize):null,v=s.load?s.load():{},m=x=>v[x]===void 0?null:Math.round(v[x]-v.t0),g=e.domElement;return{build:s.build,ua:navigator.userAgent,tier:s.tier?s.tier():null,dpr:+e.getPixelRatio().toFixed(2),canvas:[g.width,g.height],css:[innerWidth,innerHeight],geometryMB:or(l.bytes),geometryBy:Object.fromEntries(Object.entries(l.by).sort((x,b)=>b[1]-x[1]).slice(0,12).map(([x,b])=>[x,or(b)])),texturesMB:or(c.bytes),textures:c.list.slice(0,12),targetsMB:u,targets:h,totalMB:+(or(l.bytes)+or(c.bytes)+u+(p||0)).toFixed(0),heapMB:p,frame:f,programs:(e.info.programs||[]).length,load:{fetched:m("fetched"),parsed:m("parsed"),meadow:m("meadow"),visited:m("visited"),ready:m("ready"),meadowFetched:m("meadowFetched"),meadowReady:m("meadowReady")},ready:i,lastVisit:r}};window.STATS=a;let o=null;if(s.overlay){o=document.createElement("pre"),o.id="stats",o.style.cssText="position:fixed;left:calc(8px + env(safe-area-inset-left,0px));top:calc(8px + env(safe-area-inset-top,0px));z-index:50;margin:0;padding:6px 8px;font:11px/1.35 ui-monospace,Menlo,monospace;color:#f4efe3;background:rgba(20,22,36,.62);border-radius:6px;pointer-events:none;white-space:pre;",document.body.appendChild(o);let l=()=>{let c=a(),h=c.tier||{};o.textContent=[`${c.build}  ${h.memory?"phone tier":"desktop tier"}${h.touch?" touch":""}  dpr ${c.dpr}  ${c.canvas[0]}x${c.canvas[1]}`,`gpu  geo ${c.geometryMB} + tex ${c.texturesMB} + targets ${c.targetsMB}${c.heapMB!=null?" + heap "+c.heapMB:""} = ${c.totalMB} MB`,`frame ${c.frame?c.frame.median+" ms (p90 "+c.frame.p90+")":"-"}  programs ${c.programs}${h.applied&&h.applied.length?"  ladder "+JSON.stringify(h.applied):""}`,`load  fetch ${c.load.fetched}  parse ${c.load.parsed}  build ${c.load.visited}  ready ${c.load.ready} ms  meadow ${c.load.meadowReady} ms`,c.lastVisit?`last visit: ${c.lastVisit}`:""].filter(Boolean).join(`
`)};setInterval(l,1e3),setTimeout(l,100)}return{frame(l){l>0&&l<500&&(n.push(l),n.length>240&&n.shift())},ready(){i=!0;try{localStorage.setItem(Dl,"ready")}catch{}},snapshot:a}}function K0({camera:s,grid:e,eye:t=1.8,pad:n=1.3}){let i={grid:e,boxes:[],trunk:null,eye:t,pad:n};function r(h){let d=h.geometry.attributes.position;h.updateWorldMatrix(!0,!1);let f=new T,p=new dt().setFromObject(h),v={N:112,x0:p.min.x,z0:p.min.z,cw:(p.max.x-p.min.x)/112,ch:(p.max.z-p.min.z)/112,h:new Float32Array(12544).fill(-1e9)};for(let m=0;m<d.count;m++){f.fromBufferAttribute(d,m).applyMatrix4(h.matrixWorld);let g=Math.min(111,Math.max(0,Math.floor((f.x-v.x0)/v.cw))),b=Math.min(111,Math.max(0,Math.floor((f.z-v.z0)/v.ch)))*112+g;f.y>v.h[b]&&(v.h[b]=f.y)}for(let m=0;m<6;m++){let g=v.h.slice();for(let x=0;x<112;x++)for(let b=0;b<112;b++){let _=x*112+b;if(g[_]>-1e8)continue;let E=-1e9;for(let[M,A]of[[1,0],[-1,0],[0,1],[0,-1]]){let C=b+M,y=x+A;if(C<0||y<0||C>=112||y>=112)continue;let w=g[y*112+C];w>E&&(E=w)}E>-1e8&&(v.h[_]=E)}}for(let m=0;m<12544;m++)v.h[m]<-1e8&&(v.h[m]=0);i.grid=v}function a(h,u){let d=i.grid;if(!d)return 0;let f=(h-d.x0)/d.cw-.5,p=(u-d.z0)/d.ch-.5;if(f<-1||p<-1||f>d.N||p>d.N)return 0;let v=Math.min(d.N-2,Math.max(0,Math.floor(f))),m=Math.min(d.N-2,Math.max(0,Math.floor(p))),g=Math.min(1,Math.max(0,f-v)),x=Math.min(1,Math.max(0,p-m)),b=d.h,_=d.N,E=b[m*_+v]*(1-g)+b[m*_+v+1]*g,M=b[(m+1)*_+v]*(1-g)+b[(m+1)*_+v+1]*g;return E*(1-x)+M*x}let o=new T;function l(h,u){h.updateWorldMatrix(!0,!1),h.geometry.computeBoundingBox();let d=new T;h.matrixWorld.decompose(new T,new ht,d);let f=h.geometry.boundingBox.clone();f.min.x-=u/d.x,f.max.x+=u/d.x,f.min.y-=u/d.y,f.max.y+=u/d.y,f.min.z-=u/d.z,f.max.z+=u/d.z,i.boxes.push({mat:h.matrixWorld.clone(),inv:h.matrixWorld.clone().invert(),bb:f})}function c(h){let u=s.position,d=Math.max(1.2,a(u.x,u.z)+i.eye);u.y<d&&(u.y=d,h&&h.y<0&&(h.y=0));for(let p of i.boxes){if(o.copy(u).applyMatrix4(p.inv),!p.bb.containsPoint(o))continue;let v=[o.x-p.bb.min.x,p.bb.max.x-o.x,o.y-p.bb.min.y,p.bb.max.y-o.y,o.z-p.bb.min.z,p.bb.max.z-o.z],m=0;for(let g=1;g<6;g++)v[g]<v[m]&&(m=g);m===0?o.x=p.bb.min.x:m===1?o.x=p.bb.max.x:m===2?o.y=p.bb.min.y:m===3?o.y=p.bb.max.y:m===4?o.z=p.bb.min.z:o.z=p.bb.max.z,u.copy(o.applyMatrix4(p.mat)),h&&h.multiplyScalar(.2)}let f=i.trunk;if(f&&u.y<f.top){let p=u.x-f.x,v=u.z-f.z,m=Math.hypot(p,v);if(m<f.r){let g=f.r/Math.max(m,1e-4);u.x=f.x+p*g,u.z=f.z+v*g,h&&h.multiplyScalar(.2)}}}return{COLLIDE:i,groundY:a,registerBox:l,buildGroundGrid:r,collideCamera:c}}function Y0({camera:s,controls:e,canvas:t,hud:n,stickEl:i,turnEl:r,collideCamera:a,fov0:o,touchFirst:l,onHeroKey:c}){let h=n,u=0,d={on:!0,vel:new T,yaw:0,pitch:0,roll:0,lookX:0,lookY:0,drag:!1,lastX:0,lastY:0,fov0:o};function f(){let L=new T;s.getWorldDirection(L),d.pitch=Math.asin(en.clamp(L.y,-1,1)),d.yaw=Math.atan2(-L.x,-L.z),d.roll=0,d.vel.set(0,0,0),d.lookX=d.lookY=0}let p={f:0,r:0},v=!1;function m(){document.body.classList.contains("touch")||(document.body.classList.add("touch"),v=!0,h.setAttribute("aria-label","Drag to look around. Use the stick to move."))}let g=L=>{L.pointerId===d.dragId&&(d.drag=!1,document.body.classList.remove("dragging"))};t.addEventListener("pointerdown",L=>{if(!(!d.on||L.button>1)&&(L.pointerType==="touch"&&m(),!d.drag)){d.drag=!0,d.dragId=L.pointerId,d.lastX=L.clientX,d.lastY=L.clientY,document.body.classList.add("dragging");try{t.setPointerCapture(L.pointerId)}catch{}}}),addEventListener("pointermove",L=>{if(!d.on||!d.drag||L.pointerId!==d.dragId)return;let k=L.pointerType==="touch"?.003:.0016;d.lookX-=(L.clientX-d.lastX)*k,d.lookY-=(L.clientY-d.lastY)*k,d.lastX=L.clientX,d.lastY=L.clientY}),addEventListener("pointerup",g),addEventListener("pointercancel",g);let x=i.querySelector(".knob"),b={id:-1,cx:0,cy:0,R:40};function _(L){let k=L.clientX-b.cx,X=L.clientY-b.cy,U=Math.hypot(k,X),V=Math.min(U/b.R,1),j=U>0?k/U:0,ie=U>0?X/U:0,be=V<.12?0:(V-.12)/.88;p.r=j*be,p.f=-ie*be,x.style.transform=`translate(${(j*V*b.R).toFixed(1)}px, ${(ie*V*b.R).toFixed(1)}px)`}function E(L){L&&L.pointerId!==b.id||(b.id=-1,p.f=p.r=0,i.classList.remove("live"),x.style.transform="")}i.addEventListener("pointerdown",L=>{if(b.id>=0)return;m();let k=i.getBoundingClientRect();b.cx=k.left+k.width/2,b.cy=k.top+k.height/2,b.id=L.pointerId,i.classList.add("live");try{i.setPointerCapture(L.pointerId)}catch{}_(L),L.preventDefault()}),i.addEventListener("pointermove",L=>{L.pointerId===b.id&&_(L)}),i.addEventListener("pointerup",E),i.addEventListener("pointercancel",E),i.addEventListener("lostpointercapture",E),l&&m();function M(L){let k=1-Math.exp(-L*14),X=d.lookX*k,U=d.lookY*k;d.lookX-=X,d.lookY-=U,d.yaw+=X,d.pitch=en.clamp(d.pitch+U,-1.25,1.25);let V=d.yaw,j=d.pitch,ie=Math.cos(j),be=F.set(-Math.sin(V)*ie,Math.sin(j),-Math.cos(V)*ie),_e=O.set(Math.cos(V),0,-Math.sin(V)),W=I.set(0,0,0);y.w&&W.add(be),y.s&&W.sub(be),y.d&&W.add(_e),y.a&&W.sub(_e),(p.f||p.r)&&W.addScaledVector(be,p.f).addScaledVector(_e,p.r);let te=W.lengthSq()>0,pe=18;if(te){let fe=W.length();W.multiplyScalar(pe*Math.min(fe,1)/fe)}let oe=te?4:6;te&&(u+=L,u>=.65&&h.classList.add("used")),d.vel.lerp(W,1-Math.exp(-L*oe)),!te&&d.vel.lengthSq()<1e-4&&d.vel.set(0,0,0),s.position.addScaledVector(d.vel,L),s.position.y<1.2&&(s.position.y=1.2,d.vel.y<0&&(d.vel.y=0));let Re=s.position.x-14.5,we=s.position.z,B=Math.hypot(Re,we);B>300&&(s.position.x=14.5+Re*300/B,s.position.z=we*300/B),d.roll=0,s.rotation.set(j,V,0,"YXZ"),a(d.vel),e.target.copy(s.position).addScaledVector(be,60)}let A=new Set(["w","a","s","d"]);function C(L){return L instanceof Element&&!!L.closest('input, select, textarea, [contenteditable="true"]')}addEventListener("keydown",L=>{if(L.metaKey||L.ctrlKey||L.altKey||C(L.target))return;let k=L.key.toLowerCase();if(k==="h"){c();return}A.has(k)&&(y[k]=!0,h.querySelector(`[data-key="${k}"]`).classList.add("held"),L.preventDefault())}),addEventListener("keyup",L=>{let k=L.key.toLowerCase();A.has(k)&&(y[k]=!1,h.querySelector(`[data-key="${k}"]`).classList.remove("held"))});let y={w:!1,a:!1,s:!1,d:!1};function w(){for(let L in y)y[L]=!1;h.querySelectorAll(".held").forEach(L=>L.classList.remove("held")),d.drag=!1,document.body.classList.remove("dragging"),d.lookX=d.lookY=0,d.vel.set(0,0,0),E()}addEventListener("blur",w),addEventListener("focusin",L=>{C(L.target)&&w()}),addEventListener("visibilitychange",()=>{document.hidden&&w()});let F=new T,O=new T,I=new T;function P(L){if(!(y.w||y.a||y.s||y.d)||(s.getWorldDirection(F),F.y=0,F.lengthSq()<1e-6))return;F.normalize(),O.set(-F.z,0,F.x);let k=Math.max(e.getDistance(),8)*.2*L;I.set(0,0,0),y.w&&I.addScaledVector(F,k),y.s&&I.addScaledVector(F,-k),y.d&&I.addScaledVector(O,k),y.a&&I.addScaledVector(O,-k),s.position.add(I),e.target.add(I);let X=e.target.x-14.5,U=e.target.z,V=Math.hypot(X,U);if(V>260){let j=260/V,ie=new T(X*(j-1),0,U*(j-1));e.target.add(ie),s.position.add(ie)}}return{FLY:d,MOVE:p,KEYS:y,syncFromCamera:f,fly:M,walk:P,releaseMovement:w,enableTouch:m,get touchActive(){return v}}}function J0({renderer:s,q:e,touchFirst:t,dev:n,knobs:i,mirrorTarget:r,onDprChange:a,light:o=!1,hooks:l={}}){let c=t||e.get("tier")==="phone"||o;c&&(i.shadow=1024),n&&e.get("shadow")&&(i.shadow=+e.get("shadow"));let h=Math.min(devicePixelRatio,c?1:2),u=e.get("dpr")?Math.max(.5,Math.min(+e.get("dpr")||h,h)):h,d=c?2e6:42e5,f=b=>{let _=innerWidth*innerHeight*b*b;return _>d?b*Math.sqrt(d/_):b},p={on:!e.has("capture")&&e.get("tier")!=="full"&&!e.get("dpr"),readyAt:0,dts:[],lastStep:0,step:0,applied:[],ladder:c?[{dpr:1.5},{dpr:1.25},{dpr:1},{mirror:512},{shadow:2048}]:[{dpr:1.5},{dpr:1.25},{mirror:512},{shadow:2048},{shadow:1024},{mirrorHalf:!0},{samples:0},{bladeNear:.5},{dpr:1}]};function v(b){u=b,s.setPixelRatio(f(u)),s.setSize(innerWidth,innerHeight),a()}function m(b){if(b.dpr!==void 0){if(b.dpr>=u)return!1;v(b.dpr)}if(b.mirror){let _=r();if(!_)return!1;_.setSize(b.mirror,b.mirror)}return b.shadow&&(i.shadow=Math.min(i.shadow||4096,b.shadow)),b.mirrorHalf&&(i.mirrorHalf=!0),b.samples!==void 0&&l.samples&&l.samples(b.samples),b.bladeNear!==void 0&&l.bladeNear&&l.bladeNear(b.bladeNear),p.applied.push(b),console.info("tier: "+JSON.stringify(b)+" (frame interval median over 30 ms)"),!0}function g(b,_,E=30){if(b<200&&p.dts.push(b),p.dts.length<120)return;let M=p.dts.slice().sort((C,y)=>C-y),A=M[M.length>>1];if(p.dts.length=0,!(A<=E||_-p.lastStep<4e3)){for(;p.step<p.ladder.length;)if(m(p.ladder[p.step++])){p.lastStep=_;break}}}return{memory:c,light:o,TIER:p,get dpr(){return u},fitDpr:f,applyDpr:v,tierApply:m,tierStep:g,wholeLadder:()=>{for(let b of p.ladder)m(b)}}}function $0({renderer:s,samples:e,halfKuwahara:t=!1}){let n=new Nt(2,2,{minFilter:st,magFilter:st,colorSpace:mt,samples:e});n.depthTexture=new Br(2,2),n.depthTexture.type=Si;let i=new Ai,r=new ei(-1,1,1,-1,0,1),a=new Wt({uniforms:{tDiffuse:{value:n.texture},tDepth:{value:n.depthTexture},tBox:{value:null},tBoxSq:{value:null},uFast:{value:0},uRes:{value:new Y(2,2)},uRadius:{value:4},uGrain:{value:.04},uMix:{value:.12},uEdge:{value:.35},uSat:{value:1.1},uCel:{value:0},uSepia:{value:.1},uTime:{value:0},uNear:{value:.5},uFar:{value:6e3}},vertexShader:`varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`
      precision highp float;
      varying vec2 vUv;
      uniform sampler2D tDiffuse;
      uniform sampler2D tDepth;
      uniform sampler2D tBox, tBoxSq;
      uniform float uFast;
      uniform vec2 uRes;
      uniform float uRadius;
      uniform float uGrain;
      uniform float uMix;
      uniform float uEdge;
      uniform float uSat;
      uniform float uCel;
      uniform float uSepia;
      uniform float uTime;
      uniform float uNear;
      uniform float uFar;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
      void main(){
        vec2 px = 1.0 / uRes;
        float r = uRadius;
        vec3 mean[4]; vec3 sq[4];
        for (int k = 0; k < 4; k++){ mean[k] = vec3(0.0); sq[k] = vec3(0.0); }
        vec2 off[4];
        off[0] = vec2(-r, -r); off[1] = vec2(0.0, -r);
        off[2] = vec2(-r, 0.0); off[3] = vec2(0.0, 0.0);
        float n = (r + 1.0) * (r + 1.0);
        if (uFast > 0.5) {
          // at radius 4 each sector is a 5x5 box centred at (+-2, +-2);
          // tBox/tBoxSq hold the separable 5x5 means of colour and colour^2
          // (two 5-tap passes), so the 100-tap loop becomes 8 taps. Same
          // arithmetic - the means are pre-divided, hence n = 1.
          vec2 o4[4];
          o4[0] = vec2(-2.0, -2.0); o4[1] = vec2(2.0, -2.0);
          o4[2] = vec2(-2.0, 2.0);  o4[3] = vec2(2.0, 2.0);
          for (int k = 0; k < 4; k++){
            mean[k] = texture2D(tBox, vUv + o4[k] * px).rgb;
            sq[k] = texture2D(tBoxSq, vUv + o4[k] * px).rgb;
          }
          n = 1.0;
        } else {
        for (int k = 0; k < 4; k++){
          for (float i = 0.0; i <= 8.0; i += 1.0){
            if (i > r) break;
            for (float j = 0.0; j <= 8.0; j += 1.0){
              if (j > r) break;
              vec3 c = texture2D(tDiffuse, vUv + (off[k] + vec2(i, j)) * px).rgb;
              mean[k] += c; sq[k] += c * c;
            }
          }
        }
        }
        float minVar = 1e9;
        vec3 result = vec3(0.0);
        for (int k = 0; k < 4; k++){
          mean[k] /= n; sq[k] = abs(sq[k] / n - mean[k] * mean[k]);
          float v = sq[k].r + sq[k].g + sq[k].b;
          if (v < minVar){ minVar = v; result = mean[k]; }
        }
        // LESS filter: keep the raw frame's detail/vibrancy under the
        // watercolor mush (the full-strength pass ate the flowers)
        vec3 raw = texture2D(tDiffuse, vUv).rgb;
        result = mix(raw, result, uMix);
        // grease line: luminance gradient of the RAW frame, drawn as a
        // warm dark ink multiply (the painting's drawn-edge accent)
        float gl0 = luma(texture2D(tDiffuse, vUv + vec2( 1.5,  0.0) * px).rgb)
                  - luma(texture2D(tDiffuse, vUv + vec2(-1.5,  0.0) * px).rgb);
        float gl1 = luma(texture2D(tDiffuse, vUv + vec2( 0.0,  1.5) * px).rgb)
                  - luma(texture2D(tDiffuse, vUv + vec2( 0.0, -1.5) * px).rgb);
        float edge = clamp((abs(gl0) + abs(gl1)) * 4.0 - 0.06, 0.0, 1.0);
        // ink only on the near world: raw depth 1.0 = sky, ~0.9995 = far
        // water at the band, ~0.988 = the island from the hero pose
        float dz = texture2D(tDepth, vUv).r;
        float nearMask = 1.0 - smoothstep(0.9930, 0.9985, dz);
        result = mix(result, result * vec3(0.42, 0.35, 0.30), edge * uEdge * nearMask);
        // paper grain + a touch of saturation, like the compositor grade
        // optional cel: quantize luminance into 4 bands, keep the hue
        if (uCel > 0.001) {
          float lc = luma(result);
          float lq = floor(lc * 4.0 + 0.5) / 4.0;
          vec3 toon = result * (lq + 0.02) / (lc + 0.02);
          result = mix(result, toon, uCel);
        }
        float g = hash(floor(vUv * uRes / 2.0)) - 0.5;
        result *= 1.0 + g * uGrain;
        float l = luma(result);
        result = mix(vec3(l), result, uSat);
        // SEPIA: the classic warm-tone matrix, mixed by the panel dial -
        // photographic sepia over the painterly pass, so highlights go
        // cream and shadows go warm umber rather than flat brown.
        if (uSepia > 0.001) {
          vec3 sep = vec3(
            dot(result, vec3(0.393, 0.769, 0.189)),
            dot(result, vec3(0.349, 0.686, 0.168)),
            dot(result, vec3(0.272, 0.534, 0.131)));
          result = mix(result, min(sep, vec3(1.0)), uSepia);
        }
        // the BACKGROUND is exempt from every filter: the sky band and
        // dome sit beyond 2 km (the world ends ~1.5 km even zoomed out),
        // and the clouds are already a painting - depth-mask them back
        // to the raw frame
        float zLin = 2.0 * uNear * uFar
                     / (uFar + uNear - (2.0 * dz - 1.0) * (uFar - uNear));
        float bgMask = smoothstep(1800.0, 2100.0, zLin);
        result = mix(result, raw, bgMask);
        // A restrained afternoon white balance on the world and its reflection.
        // Preserve luminance so the deeper shadows stay intact.
        // The background is exempt - the band and dome ARE
        // the painting, and the grade had pushed its clouds +4 b warmer and its
        // blue less blue than the plate.
        vec3 afternoon = result * vec3(1.075, 1.018, .935);
        result = mix(afternoon * (luma(result) / max(luma(afternoon), .00001)), raw, bgMask);
        gl_FragColor = vec4(result, 1.0);
        // the sRGB render target hardware-DECODES to linear when sampled;
        // without this encode the pass writes linear values into an sRGB
        // canvas and the whole world renders a gamma darker
        #include <colorspace_fragment>
      }`});i.add(new it(new Ei(2,2),a));let o=t?st:_t,l={count:2,type:Xn,minFilter:o,magFilter:o,depthBuffer:!1,generateMipmaps:!1},c=new Nt(2,2,l),h=new Nt(2,2,l),u=new Wt({glslVersion:Ca,uniforms:{tA:{value:null},tB:{value:null},uStep:{value:new Y},uSquare:{value:1}},vertexShader:`varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,fragmentShader:`precision highp float;
      varying vec2 vUv;
      uniform sampler2D tA, tB; uniform vec2 uStep; uniform float uSquare;
      layout(location = 0) out vec4 oMean;
      layout(location = 1) out vec4 oSq;
      void main(){
        vec3 m = vec3(0.0), s = vec3(0.0);
        for (int i = -2; i <= 2; i++){
          vec2 uv = vUv + float(i) * uStep;
          vec3 c = texture2D(tA, uv).rgb;
          m += c;
          s += (uSquare > 0.5) ? c * c : texture2D(tB, uv).rgb;
        }
        oMean = vec4(m * 0.2, 1.0); oSq = vec4(s * 0.2, 1.0);
      }`}),d=new Ai;d.add(new it(new Ei(2,2),u));let f=(()=>{let x=s.getContext();return!!(x.getExtension("EXT_color_buffer_float")||x.getExtension("EXT_color_buffer_half_float"))})();f||console.warn("post: no float colour buffers - Kuwahara keeps the 100-tap loop");function p(){let x=s.getPixelRatio();n.setSize(innerWidth*x,innerHeight*x);let b=t?.5:1;c.setSize(Math.ceil(innerWidth*x*b),Math.ceil(innerHeight*x*b)),h.setSize(Math.ceil(innerWidth*x*b),Math.ceil(innerHeight*x*b)),a.uniforms.tDepth.value=n.depthTexture,a.uniforms.uRes.value.set(innerWidth*x,innerHeight*x)}p(),addEventListener("resize",p);function v(x,b,_){s.setRenderTarget(n),s.render(x,b);let E=f&&!_.kuwLoop&&a.uniforms.uRadius.value===4&&a.uniforms.uMix.value>.001;if(E){let M=u.uniforms;M.tA.value=n.texture,M.tB.value=null,M.uSquare.value=1,M.uStep.value.set(1/n.width,0),s.setRenderTarget(c),s.render(d,r),M.tA.value=c.textures[0],M.tB.value=c.textures[1],M.uSquare.value=0,M.uStep.value.set(0,1/c.height),s.setRenderTarget(h),s.render(d,r),a.uniforms.tBox.value=h.textures[0],a.uniforms.tBoxSq.value=h.textures[1]}a.uniforms.uFast.value=E?1:0,s.setRenderTarget(null),s.render(i,r)}function m(x){n.samples!==x&&(n.samples=x,n.dispose())}return{material:a,resize:p,render:v,targets:()=>[{name:"painterly "+n.samples+"x",w:n.width,h:n.height,bpp:8*(n.samples+1)},{name:"kuwahara x2",w:c.width,h:c.height,bpp:32}],setSamples:m}}var lo=class s extends it{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new vt;let n=this,i=t.color!==void 0?new xe(t.color):new xe(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new cn,u=new T,d=new T,f=new T,p=new De,v=new T(0,0,-1),m=new et,g=new T,x=new T,b=new et,_=new De,E=this.camera,M=new Nt(r,a,{samples:c,type:Xn}),A=new Wt({name:l.name!==void 0?l.name:"unspecified",uniforms:wl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});A.uniforms.tDiffuse.value=M.texture,A.uniforms.color.value=i,A.uniforms.textureMatrix.value=_,this.material=A,this.onBeforeRender=function(C,y,w){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(w.matrixWorld),p.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(p),g.subVectors(d,f),g.dot(u)>0)return;g.reflect(u).negate(),g.add(d),p.extractRotation(w.matrixWorld),v.set(0,0,-1),v.applyMatrix4(p),v.add(f),x.subVectors(d,v),x.reflect(u).negate(),x.add(d),E.position.copy(g),E.up.set(0,1,0),E.up.applyMatrix4(p),E.up.reflect(u),E.lookAt(x),E.far=w.far,E.updateMatrixWorld(),E.projectionMatrix.copy(w.projectionMatrix),E.projectionMatrix.elements[8]*=-1;{let k=E.projectionMatrix.elements,X=k[14]/(k[10]-1),U=6e4;k[10]=-(U+X)/(U-X),k[14]=-2*U*X/(U-X)}_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(E.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let F=E.projectionMatrix;if(b.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],b.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],b.z=-1,b.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(b)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-o,F.elements[14]=m.w,n.holdTexture)return;n.visible=!1;let O=C.getRenderTarget(),I=C.xr.enabled,P=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(M),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(y,E),C.xr.enabled=I,C.shadowMap.autoUpdate=P,C.setRenderTarget(O);let L=w.viewport;L!==void 0&&C.state.viewport(L),n.visible=!0},this.getRenderTarget=function(){return M},this.dispose=function(){M.dispose(),n.material.dispose()}}};lo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Z0({renderer:s,camera:e,scene:t,memoryTier:n,time:i,shadow:r,boatWaterline:a,dev:o=[],mirror:{MIRROR:l,MIRROR_KEEP:c,LOD:h,knobs:u,applyBladeLod:d,skip:f=[],leaf:p=null}}){let v=new lo(new Bs(2620,72),{clipBias:0,textureWidth:n?512:1024,textureHeight:n?512:1024,color:16777215});{let b=s.getContext();!b.getExtension("EXT_color_buffer_float")&&!b.getExtension("EXT_color_buffer_half_float")&&(v.getRenderTarget().texture.type=zn)}v.rotation.x=-Math.PI/2,v.position.set(14.5,.02,0);let m=v.material;m.uniforms.uTime=i,Object.assign(m.uniforms,{uShMatrix:r.matrix,uShMap:r.map,uShSize:r.size,uShOn:r.on}),m.uniforms.uBoatPointCount={value:0},m.uniforms.uBoatPoints={value:Array.from({length:32},()=>new Y)},m.uniforms.uBoatCenter={value:new Y},a.then(b=>{b.polygon.forEach((_,E)=>m.uniforms.uBoatPoints.value[E].set(..._)),m.uniforms.uBoatCenter.value.set(...b.center),m.uniforms.uBoatPointCount.value=b.polygon.length}).catch(b=>console.error(b)),m.uniforms.uCamF={value:new Y(0,-1)},m.uniforms.uVfov={value:en.degToRad(e.fov)},m.uniforms.uCamPitch={value:0},n&&(m.defines=Object.assign(m.defines||{},{CHEAP_WATER:""}));for(let b of o)m.defines=Object.assign(m.defines||{},{["WDEV_"+b.toUpperCase()]:""});v.updateMatrixWorld(!0),m.uniforms.uSeaWorldInverse={value:v.matrixWorld.clone().invert()},m.polygonOffset=!0,m.polygonOffsetFactor=1,m.polygonOffsetUnits=4,m.vertexShader=`
    uniform mat4 uShMatrix; varying vec4 vShCoord;
    uniform mat4 textureMatrix;
    uniform mat4 uSeaWorldInverse;   // the Reflector's textureMatrix expects the sea's LOCAL space
    uniform vec2 uCamF;
    varying vec4 vUvR;
    varying vec3 vWorld;
    varying vec4 vHorizon;           // the mirror image's horizon row: the vanishing point of the level view
    void main() {
      vUvR = textureMatrix * vec4(position, 1.0);
      vHorizon = textureMatrix * vec4(mat3(uSeaWorldInverse) * vec3(uCamF.x, 0.0, uCamF.y), 0.0);
      vec4 wp = modelMatrix * vec4(position, 1.0);
      vWorld = wp.xyz;
      vShCoord=uShMatrix*wp;
      gl_Position = projectionMatrix * viewMatrix * wp;
    }`,m.fragmentShader=`
    ${si}
    ${x0}
    uniform sampler2D tDiffuse;
    uniform mat4 textureMatrix;      // the mirror's projection, for the compressed read
    uniform mat4 uSeaWorldInverse;
    uniform float uTime;
    uniform vec2 uCamF;
    uniform float uVfov;          // camera vertical fov, radians
    uniform float uCamPitch;      // 0 level .. 1 looking straight down
    varying vec4 vUvR;
    varying vec3 vWorld;
    varying vec4 vHorizon;
    float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
    float vnoise(vec2 p){
      vec2 i = floor(p), f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(hash(i), hash(i+vec2(1,0)), f.x),
                 mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y);
    }
    // COLOUR SPACE (2026-09-12): every constant in main() is a
    // byte read off the plate - the near base (84,120,148) IS Oga's
    // water, the ladder 0.873*L+3.3 and the floor 91 were measured on
    // sRGB bytes. Until v124 they were fed straight to
    // colorspace_fragment, which encodes linear->sRGB on output, so the
    // water shipped a gamma brighter: hero water median L171 against the
    // plate's L115 (+56, the largest single mismatch in the frame). The
    // mirror sample is linear (the Reflector target is), so it is
    // encoded to sRGB first; the water is composed in sRGB; the result
    // is decoded to linear once for the output stage.
    vec3 lin2srgb(vec3 c){ c = max(c, 0.0); return mix(pow(c, vec3(1.0/2.4))*1.055 - 0.055, c*12.92, vec3(lessThanEqual(c, vec3(0.0031308)))); }
    vec3 srgb2lin(vec3 c){ c = max(c, 0.0); return mix(pow((c + 0.055)/1.055, vec3(2.4)), c/12.92, vec3(lessThanEqual(c, vec3(0.04045)))); }
    void main() {
      if (insideBoat(vWorld.xz)) discard;
      float d = length(vWorld.xz - vec2(14.5, 0.0));
      // The brush frame is fixed in the WORLD so the strokes stay put
      // while the eye moves. For a while the frame was world-fixed but its
      // FREQUENCIES were not - the
      // pitch-driven anisotropy and the fwidth-capped band frequencies
      // re-scaled the pattern in world space as the eye tilted, and an
      // 18 % reflectivity modulation in 0.55 m bands fed the Kuwahara
      // pass blobs that flipped bright/dark as the mirror content slid
      // under them. Now: (1) the frame follows the wind - from the level
      // hero eye the strokes still lie along the horizon, from above they
      // read as wind streaks instead of the picture's axes seen sideways;
      // (2) every frequency is a constant, and an octave whose period
      // would foreshorten under ~12 px fades out instead of aliasing;
      // (3) the ripple patches DIFFUSE the reflection (a wider vertical
      // smear) rather than switching it on and off; (4) the wobble is a
      // third of what it was; (5) steep views reflect less.
      vec2 wd = normalize(vec2(0.92, 0.39));
      vec2 rel = vWorld.xz - vec2(14.5, 0.0);
      float across = dot(rel, wd);
      float depth  = dot(rel, vec2(-wd.y, wd.x));
      // real streaks meander: a +-3 m warp of the cross-wind coordinate,
      // so a stroke seen along its own axis is a wavering band, not a
      // ruled line converging on the horizon
      depth += (vnoise(vec2(across*0.025, depth*0.06) + 2.1) - 0.5) * 6.0;
      // THE PAINTER'S VARIABLE. Measured row by row off the plate
      // (2026-09-15), Oga's water is brightest just under the horizon
      // (L147, warm) and darkens to teal-grey at the bottom (L116); the
      // mirror shipped the opposite ladder (L116 -> L131) because it
      // honestly reflected the dark plum shelf into the far rows. What
      // he paints follows how steeply the eye looks into the water - the
      // depression angle below the horizon - not island distance.
      vec3 toP = vWorld - cameraPosition;
      float ang = degrees(atan(max(-toP.y, 0.0), max(length(toP.xz), 1.0)));
      // metres per pixel along the two stroke axes and on the plane
      float acrossPx = max(fwidth(across), 1e-5);
      float depthPx  = max(fwidth(depth), 1e-5);
      float planePx  = max(max(fwidth(vWorld.x), fwidth(vWorld.z)), 1e-5);
      // an octave is fully drawn when its period spans >= 12 px, gone under 6
      #define VIS(period, px) smoothstep(6.0, 12.0, (period) / (px))
      const vec2 bandFreq = vec2(0.045, 0.28);   // dry-brush streaks: 22 m along the wind x 3.6 m
      const vec2 wobFreq  = vec2(0.055, 0.22);   // swell wobble: 18 m x 4.5 m
      const float f2 = 1.1;                      // ripple patches: 25 m x 0.9 m
      // near = #61727b, the plate's own near water (L111); far = #93877d,
      // the plate's far water - warm grey, not the blue the mirror used
      vec3 base = mix(vec3(0.362,0.430,0.466), vec3(0.576,0.530,0.490),
                      smoothstep(0.0, 900.0, d));
      // swell + ripple wobble, stretched into wind-long strokes
      float n1 = vnoise(vec2(across*wobFreq.x, depth*wobFreq.y) + uTime*0.10);
      #ifdef CHEAP_WATER
      float n2 = 0.5;   // (V280, the phone: the second wobble octave and the slow ripple go too - three noise terms of the nine)
      #else
      float n2 = vnoise(vec2(across*0.120, depth*0.90) - uTime*0.14);
      #endif
      // a fine, quicker octave - 1 m
      // ripples running down the wind - that wavers the reflection's
      // edges by a few pixels where they are close enough to show
      #ifdef CHEAP_WATER
      float n3 = 0.5;   // (the phone: the finest wobble octave is under a pixel there)
      #else
      float n3 = vnoise(vec2(across*0.90, depth*1.60) + vec2(uTime*0.90, uTime*0.25));
      #endif
      float v1 = VIS(4.5, depthPx), v2 = VIS(1.1, depthPx), v3 = VIS(0.6, depthPx);
      // MOVING WAVES ('the water waves should move as well'): two
      // wind-driven ripple octaves travelling downwind - they shimmer
      // the reflection and lift/darken the surface, strongest near
      // the island, melting toward the horizon
      // the slow octave runs along the wind too (8 m x 2.5 m
      // patches) - as round 3.3 m cells it read as pale discs near the eye
      #ifdef CHEAP_WATER
      float r1 = 0.5;
      #else
      float r1 = vnoise(vec2(across * 0.12, depth * 0.40) + vec2(uTime * 0.30, 0.0));
      #endif
      #ifdef CHEAP_WATER
      float r2 = 0.5;
      #else
      float r2 = vnoise(vWorld.xz * 1.10 - wd * uTime * 0.70 + 7.0);
      #endif
      float vr1 = VIS(2.5, depthPx), vr2 = VIS(0.9, planePx);
      float nearW = 1.0 - smoothstep(120.0, 700.0, d);
      // amplitudes were 0.09 / 0.045 on a linear value; the same visual
      // swell in sRGB is ~1/2.4 of that
      float ripple = ((r1 - 0.5) * 0.03 * vr1 + (r2 - 0.5) * 0.03 * vr2) * nearW;
      // the reflection's displacement: a 0.3 deg surface slope bends the
      // reflected ray 0.6 deg, ~1 % of the mirror's height. an earlier value was 3 %
      // in 33 m x 8 m cells - from above that lifted whole cloud rows into
      // the dark water in patches the size of the island.
      vec2 wob = vec2((n1-0.5)*0.005*v1 + (r2-0.5)*0.003*vr2*nearW + (n3-0.5)*0.0035*v3,
                      (n1-0.5)*0.011*v1 + (n2-0.5)*0.005*v2 + (r1-0.5)*0.006*vr1*nearW + (n3-0.5)*0.006*v3);
      // the painter's compression: Oga's house reflection is ~0.6
      // of the house and the cloud bank's ~0.5. Every point of water
      // shows the sky a little higher up than a mirror would, e' = e(1+6e)
      // in radians, which pulls the whole reflection toward the horizon.
      // That law was first written
      // in mirror-texture ROWS (so it changed with the camera's pitch) and
      // then gated on the pitch (so it switched off as the eye tilted
      // down). It is now a law of the WORLD: the water point at depression
      // e is read where a mirror shows depression e', i.e. at the nearer
      // point on the same azimuth, and that point goes through the mirror's
      // own projection. The eye's orientation never enters. The strength
      // fades only with the eye's height (from high up the nearer point
      // falls inside the island) and for steep near water (a mirror there),
      // and the nearer point is never taken from inside the island.
      float eRad = radians(ang);
      float hEye = max(cameraPosition.y - vWorld.y, 0.05);
      float D = max(length(toP.xz), 0.1);
      // the law is for an eye near the water; half-applied from high up it folded the cloud bank's
      // reflection into fragments (V278, seen from 30 m). It fades out between 10 and 22 m of eye height
      // (was 14 to 40): a plain mirror from above. (The gate's highest pose, the tree's, is 8 m.)
      float gate = (1.0 - smoothstep(10.0, 22.0, hEye)) * (1.0 - smoothstep(0.14, 0.30, eRad));
      #ifdef WDEV_NOCOMP
      gate = 0.0;
      #endif
      float expand = 6.0 * min(eRad, 0.12) * gate;
      float D2 = hEye / tan(min(eRad * (1.0 + expand), 1.5));
      vec3 P2 = vec3(cameraPosition.x + toP.x * (D2 / D), vWorld.y, cameraPosition.z + toP.z * (D2 / D));
      vec2 islq = (P2.xz - vec2(14.5, 0.0)) / vec2(36.0, 26.0);       // the island's footprint, as an ellipse
      #ifndef WDEV_NOELLIPSE
      P2 = mix(vWorld, P2, smoothstep(1.0, 1.15, length(islq)));
      #endif
      vec4 uv2 = textureMatrix * (uSeaWorldInverse * vec4(P2, 1.0));
      vec2 st2 = uv2.xy / max(uv2.w, 1e-4);
      // the mirror image ends at its near edge (row 0, the water under
      // the eye, i.e. the sky overhead): a nearer point past it reads the
      // edge row. Never ease back to the plain mirror there - that read
      // every feature twice, once through each mapping (the sun's disc
      // showed as two discs on the near water)
      vec2 st = vec2(clamp(st2.x, 0.002, 0.998), max(st2.y, 0.002)) + wob;
      // the horizon row of the mirror image (the level view's vanishing
      // point). Rows toward 0 hold HIGHER sky: the mirror camera's ray
      // through a nearer water point climbs more steeply.
      float yh = vHorizon.y / vHorizon.w;
      // ripple patches (cat's paws): where the wind roughens the surface
      // the reflection is diffused - smeared further down - not removed
      #ifdef CHEAP_WATER
      float paws = 0.0;
      #else
      float band2 = vnoise(vec2(across*0.04, depth*f2) + 5.3);
      float paws = smoothstep(0.35, 0.65, band2) * VIS(0.9, depthPx);   // (patch is reserved in GLSL)
      #endif
      #ifdef WDEV_NOPAWS
      paws = 0.0;
      #endif
      float sm = 1.0 + 1.2 * paws;
      // 3-tap vertical smear: Oga stretches reflections downward. Never
      // past the horizon row - beyond it the mirror holds the band's
      // sub-horizon rows, which lightened the shelf's dark reflection.
      float yTop = yh - 0.0015;
      vec3 refl = texture2D(tDiffuse, vec2(st.x, min(st.y, yTop))).rgb * 0.5;
      refl += texture2D(tDiffuse, vec2(st.x, min(st.y + 0.006 * sm, yTop))).rgb * 0.3;
      refl += texture2D(tDiffuse, vec2(st.x, min(st.y + 0.016 * sm, yTop))).rgb * 0.2;
      refl = lin2srgb(refl);                  // into the plate's byte space
      float rl = dot(refl, vec3(0.299,0.587,0.114));
      refl = mix(vec3(rl), refl, 0.84) * vec3(0.94, 0.97, 1.02);
      // the value law, re-measured: the plate's water is the scene
      // at ~0.82 of its value with NO lift - the shelf's reflection stays
      // as dark as the shelf (L85), the clouds' as bright as 0.82 of the
      // clouds. The old 0.873 L + 3.3 with a floor at L91 lifted every
      // dark row into the same grey. A low floor only keeps the tree's
      // reflection from going black.
      refl *= mix(0.85, 0.72, smoothstep(1.0, 5.0, ang));
      float rl2 = dot(refl, vec3(0.299,0.587,0.114));
      refl += max(0.28 - rl2, 0.0);
      // grazing rows mirror strongly (the island and the shelf sit right
      // on the water); the near water, looked into more steeply, carries
      // only a faint ghost of the bright cloud tops (plate rows 0.8-1.0
      // are L116-121 under a bank that is L170 in the sky). From
      // well above (an elevated orbit, 6-30 deg) the body colour takes
      // over further - Fresnel is a few percent there, and the bright
      // cloud bank was arriving on the near water at full strength.
      float kAng = mix(0.92, 0.32, smoothstep(0.45, 5.0, ang)) * mix(1.0, 0.55, smoothstep(6.0, 30.0, ang));
      // the plate's cloud reflection is laid down in broken bands (local
      // L contrast 5-6 under the island against a mirror's 2): the
      // roughened patches keep a touch more of the diffused, brighter
      // sky. 10 % - an earlier 18 % in bands that re-scaled with the eye
      // was the source of the flipping blobs.
      float k = kAng * (0.88 + 0.10 * paws)
              * (1.0 - 0.5 * smoothstep(1200.0, 2500.0, d));
      vec3 col = mix(base, refl, k);
      col *= 1.0 + ripple;
      // THE GLOW. Under the shelf's dark reflection (the first
      // ~0.6 deg below the horizon) Oga's water is his brightest row,
      // L147 and warm, where a mirror shows the dark cloud undersides. It
      // is the grazing-angle glow of the lit bank above, painted as a band
      // that decays over ~2 deg of depression.
      float glowW = 0.95 * smoothstep(0.42, 0.62, ang) * exp(-max(ang - 0.62, 0.0) / 1.9);
      vec3 glow = mix(vec3(0.680, 0.620, 0.550), refl, 0.25);
      col = mix(col, glow, glowW);
      // watercolor streak bands (drifting slowly) + a soft bloom mottle
      // (the plate's water carries visible dry-brush, local L contrast
      // 3-5 against the mirror's 2)
      float band = vnoise(vec2(across*bandFreq.x + uTime*0.004, depth*bandFreq.y) + 3.7);
      float streak = smoothstep(0.62, 0.86, band) * VIS(3.6, depthPx);
      col = mix(col, vec3(0.816,0.792,0.741), streak*0.12*(1.0-smoothstep(200.0,900.0,d)));
      // was hash(floor(xz*2.1)): a per-0.48 m random cell multiplier, which
      // read as a checkerboard from the pier. Smooth value noise at the same
      // scale, faded out where the cells go sub-pixel anyway.
      #ifndef CHEAP_WATER
      float mottle = (vnoise(vWorld.xz*2.1 + 11.0) - 0.5) * (1.0 - smoothstep(80.0, 250.0, d));
      col *= 1.0 + mottle*0.04;
      #endif
      // melt into the band's far-shore base at the horizon
      col = mix(col, vec3(0.600,0.570,0.540), smoothstep(1400.0, 2500.0, d));   // warm pale horizon under the shore strip
      col*=mix(.96,1.,meadowShadow());
      gl_FragColor = vec4(srgb2lin(col), 1.0);   // composed in sRGB, handed over linear
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`;{let b=v.onBeforeRender,_=0;v.onBeforeRender=function(...E){if(!u.noMirror){v.holdTexture=(u.mirrorHalf!==void 0?u.mirrorHalf:n)&&!u.mirrorEveryFrame&&(_++&1)===1,l.value=1,d(e,c.value,h.value>=.5,u.lodRangeOff),p&&p.mirror();for(let M of f)M.visible=!1;try{b.apply(this,E)}finally{l.value=0;for(let M of f)M.visible=!0;p&&p.main(),d(e,1,h.value>=.5,u.lodRangeOff)}}}}t.add(v);let g=new T;function x(b){b.getWorldDirection(g),v.material.uniforms.uCamPitch.value=Math.min(Math.max(-g.y,0),1),v.material.uniforms.uVfov.value=en.degToRad(b.fov),g.y=0,g.lengthSq()>1e-6&&(g.normalize(),v.material.uniforms.uCamF.value.set(g.x,g.z))}return{mesh:v,updateCamera:x}}var Q0=new Set(["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"]),Ff={_broot:0,_bmeta:3,_sroot:6,_smeta:9,_leaf_pivot:12,_leaf_axis:15,_leaf_seed:18},Sn=(s,e)=>!!(s.attributes[e]||s.attributes[e+"q"]||s.userData.treeRows&&e in Ff);function $s(s,e){let t=s.attributes[e];if(t)return t;let n=s.userData.treeRows;if(n&&e in Ff){let o=Ff[e],l=n.rows,c=n.ids,h=(u,d)=>l[c.getX(u)*20+o+d];return{count:c.count,getX:u=>h(u,0),getY:u=>h(u,1),getZ:u=>h(u,2)}}let i=s.attributes[e+"q"],r=s.userData.quantGpu&&s.userData.quantGpu[e];if(!i||!r)return null;let a=(o,l)=>r.c[l]+r.h[l]*i.getComponent(o,l);return{count:i.count,getX:o=>a(o,0),getY:o=>a(o,1),getZ:o=>a(o,2)}}var Of=new Map;function ev(s,e){let t=s.userData.treeTable,n=s.attributes._tree_id;if(!t||!n)return;let i=Of.get(t);if(!i){let r=e.getObjectByName(t),a=r&&(r.geometry||r.children[0]?.geometry);if(!a){console.warn("tree table missing: "+t);return}let o=v=>{let m=v==="_BROOT"?"position":v.toLowerCase(),g=a.attributes[m]||a.attributes[m+"q"],x=a.userData.quant&&a.userData.quant[v==="_BROOT"?"POSITION":v]||a.userData.quantGpu&&a.userData.quantGpu[m],b=g.isInterleavedBufferAttribute?g.data.array:g.array,_=b instanceof Int16Array;return{count:g.count,n:g.itemSize,get:(E,M)=>_?x.c[M]+x.h[M]*g.getComponent(E,M):g.getComponent(E,M)}},l=["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"].map(o),c=l[0].count,h=new Float32Array(c*20);for(let v=0;v<c;v++){let m=v*20;for(let g of l)for(let x=0;x<g.n;x++)h[m++]=g.get(v,x)}let u=1024,d=Math.ceil(c*5/u),f=new Float32Array(u*d*4);f.set(h.subarray(0,Math.min(h.length,u*d*4)));let p=new un(f,u,d,Kt,ln);p.magFilter=p.minFilter=_t,p.needsUpdate=!0,i={rows:h,tex:p,n:c,uniforms:{uTreeTab:{value:p},uTreeTabW:{value:u}}},Of.set(t,i),r.visible=!1,r.removeFromParent(),console.info(`tree table ${t}: ${c} records, ${u}x${d} float texels`)}s.userData.treeRows={rows:i.rows,ids:n}}function Uf(s){if(s.userData.treeRows)return{__define:"TREE_TAB",...Of.get(s.userData.treeTable).uniforms};let e=s.userData.quantGpu;if(!e)return null;let t={},n={_broot:"Broot",_bmeta:"Bmeta",_sroot:"Sroot",_smeta:"Smeta",_leaf_pivot:"LeafPivot",_leaf_axis:"LeafAxis",_leaf_seed:"LeafSeed"};for(let[i,r]of Object.entries(n)){let a=e[i];a&&(t["u"+r+"C"]={value:a.c.length===1?a.c[0]:new T(...a.c)},t["u"+r+"H"]={value:a.h.length===1?a.h[0]:new T(...a.h)})}return{__define:"TREE_Q",...t}}var Il=.008333333333333333,kf=s=>{let e=Math.sin(s*127.1+37.7)*43758.5453;return e-Math.floor(e)};function tv(s,e,t,n){return{d:[0,0],v:[0,0],a:[0,0],w:2*Math.PI*s,damping:e,drag:t,stiffening:n}}function iv(){return{remainder:0,trunk:tv(.29,.38,.45,1.8),branches:Array.from({length:6},(s,e)=>tv(.53+.3*kf(e),.3+.12*kf(e+9),.95+.35*kf(e+3),2.2))}}function nv(s,e,t,n){let i=Math.hypot(...e),r=s.drag*i/(1+i*i/36),a=s.w*s.w*(1+s.stiffening*(s.d[0]**2+s.d[1]**2));for(let o=0;o<2;o++)s.a[o]=r*e[o]-a*s.d[o]-2*s.damping*s.w*s.v[o]-.24*(t?.[o]||0),s.v[o]+=s.a[o]*n,s.d[o]+=s.v[o]*n}function rv(s,e,t,n){if(!(!Number.isFinite(e)||e<=0))for(s.remainder+=Math.min(e,.1);s.remainder+1e-10>=Il;)nv(s.trunk,t,null,Il),s.branches.forEach((i,r)=>nv(i,n[r],s.trunk.a,Il)),s.remainder-=Il}var ho={centers:[[32.04795687668068,15.272394050647152,-2.9930031889886366],[34.04525666965455,13.5469589159488,-2.909783447090909],[30.50718275067227,12.511697835129787,-3.0572012755954545],[28.50988295769841,10.096088646552094,-3.140421017493182],[32.33328541853409,9.751001619612424,-2.9811146544318183],[31.534365501344546,7.737993962464345,-3.0144025511909094]],radii:[[1.4495844681818182,1.8945277778987915,2.2],[1.5729533590909088,1.3044289618319547,2.2],[3.1150644954545457,1.5218337888039473,2.9000000000000004],[2.251482259090909,1.925585610323362,2.9000000000000004],[2.8066422681818177,2.1740482697199246,2.9000000000000004],[.801897790909091,1.0870241348599623,1.2000000000000002]],right:[.999133,0,.04163],depth:[.04163,0,-.999133]};var sv={x0:21.507,x1:37.507000000000005,y0:3.114,y1:21.114,trunk_base_world:[29.507,1.114,-3.097],painted_crown_extent_m:{dx:[-3.4000000000000004,6.9],dy:[4.3,15.2]},reference_trunk_base_px:[3013,1060],px_per_m:30.624,note:"V223: keep-probability of a leaf by its drawn (x, y) in the world; the painting crown relative to its own trunk base, placed on ours (scripts/crown_mask.py)"};function av({wind:s,collide:e,treeDrop:t,names:n,build:i}){let r=null,a={base:3,height:17,cx:24,cz:3,tmp:new Y,bbox:null,dynamics:iv(),uTrunk:{value:new Y},uBranch:{value:Array.from({length:6},()=>new Y)},uBase:{value:3},uHeight:{value:17},uFlutter:{value:0},uCentre:{value:new Y},uWidth:{value:12},init(m){this.bbox?this.bbox.union(m):this.bbox=m.clone(),m=this.bbox,this.base=m.min.y,this.height=m.max.y-m.min.y,this.cx=(m.min.x+m.max.x)/2,this.cz=(m.min.z+m.max.z)/2,this.uBase.value=this.base,this.uHeight.value=this.height,this.uCentre.value.set(this.cx,this.cz),this.uWidth.value=Math.max(m.max.x-m.min.x,m.max.z-m.min.z),e.trunk&&(e.trunk.top=this.base+.55*this.height)},step(m){let g=s();g.at(this.cx,this.base+this.height*.78,this.cz,this.tmp);let x=this.tmp.toArray();this.uFlutter.value=this.tmp.length();let b=Array.from({length:6},(_,E)=>{let M=E*2.39996323;return g.at(this.cx+Math.cos(M)*this.uWidth.value*.3,this.base+this.height*(.42+E*.095),this.cz+Math.sin(M)*this.uWidth.value*.3,this.tmp),this.tmp.toArray()});rv(this.dynamics,m,x,b),this.uTrunk.value.fromArray(this.dynamics.trunk.d),this.uBranch.value.forEach((_,E)=>_.fromArray(this.dynamics.branches[E].d))}},o={centers:{value:ho.centers.map(m=>new T(m[0],m[1]+t,m[2]))},radii:{value:ho.radii.map(m=>new T(...m))},right:{value:new T(...ho.right)},depth:{value:new T(...ho.depth)}},l=`#include <map_fragment>
    float leafChroma = max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))
                     - min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
    diffuseColor.a *= smoothstep(.026,.050,leafChroma);
    // the atlas alpha is coverage (bleedLeafAtlas); mip levels average
    // it down, so far leaves would fall under the .5 test - scale it by the
    // texel footprint of this pixel (1 at the leaf's own scale, x3 by 32 texels)
    float leafFoot = fwidth(vMapUv.x) * 1254.0;
    diffuseColor.a *= clamp(1.0 + 0.6 * log2(max(leafFoot, 1.0)), 1.0, 3.0);`;function c(m){if(!m||!m.image||m.userData.bled)return;let g=performance.now(),x=m.image.width,b=m.image.height,_=document.createElement("canvas");_.width=x,_.height=b;let E=_.getContext("2d",{willReadFrequently:!0});E.drawImage(m.image,0,0);let M=E.getImageData(0,0,x,b),A=M.data,C=x*b,y=new Float32Array(C),w=0,F=0,O=0,I=0;for(let U=0;U<C;U++){let V=A[U*4],j=A[U*4+1],ie=A[U*4+2],be=(Math.max(V,j,ie)-Math.min(V,j,ie))/255,_e=Math.min(Math.max((be-.05)/.07,0),1),W=_e*_e*(3-2*_e);y[U]=W,W>.95&&(w+=V,F+=j,O+=ie,I++)}let P=w/Math.max(I,1),L=F/Math.max(I,1),k=O/Math.max(I,1),X=228;for(let U=0;U<C;U++){let V=y[U],j=U*4;if(V<.5)A[j]=P,A[j+1]=L,A[j+2]=k;else if(V<1)for(let ie=0;ie<3;ie++)A[j+ie]=Math.min(255,Math.max(0,(A[j+ie]-(1-V)*X)/V));A[j+3]=Math.round(V*255)}E.putImageData(M,0,0),m.image=_,m.needsUpdate=!0,m.userData.bled=!0,console.info(`leaf atlas: ${I} leaf texels of ${C}, backdrop -> (${P|0},${L|0},${k|0}), ${(performance.now()-g).toFixed(0)} ms`)}let h={mask:{value:null},box:{value:new et(0,0,1,1)}};{let m=sv;h.box.value.set(m.x0,m.y0,1/(m.x1-m.x0),1/(m.y1-m.y0)),r=new Promise((g,x)=>new Wn().load("./tree-crown-mask.png?v="+i,b=>{b.minFilter=st,b.magFilter=st,b.generateMipmaps=!1,b.wrapS=It,b.wrapT=It,b.colorSpace=On,g(b)},void 0,x))}let u=`uniform sampler2D uCrownMask; uniform vec4 uCrownBox; uniform float uLeafKeep; varying float vLightBias;
    vec2 crownSpread(vec2 pxz, vec2 c) {   // c = uTreeC (declared later in these programs)
      vec2 d = pxz - c;
      float leftness = 1.0 - smoothstep(-2.0, 0.5, pxz.x - c.x);   // 1 from 2 m left of the crown axis
      return d * 0.18 + vec2(0.0, d.y * 0.35 * leftness);
    }
  `,d=`attribute float _bare; varying float vBare;
`,f=`
    {
      vec2 cm = clamp((_sroot.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
      if (_sroot.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.40) transformed = vec3(0.0, -1.0e4, 0.0);
    }
    transformed.xz += crownSpread(position.xz, uTreeC) * smoothstep(uCrownBox.y + 1.0, uCrownBox.y + 4.5, position.y);   // the leaves' spread, ramped in above the trunk`,p=`
    {
      vec3 drawn = _leaf_pivot; drawn.xz += crownSpread(drawn.xz, uTreeC);
      vec2 cm = clamp((drawn.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
      // full rate from mask .35 up; the bark is cut below .45, inside
      // that, so the twig brooms at the fringe never show bare; 18 % spread (was 12) reaches
      // the plate's right lobe, 6.8 m from the trunk
      vec4 cmask = texture2D(uCrownMask, cm);
      float crown = smoothstep(0.10, 0.35, cmask.r);
      vLightBias = cmask.g - 0.5;                   // the painted light bias (-.5 .. +.5)
      if (_leaf_seed > uLeafKeep * crown) transformed = vec3(0.0, -1.0e4, 0.0);   // (uLeafKeep: the tier's share; web/src/leaf-lod.js draws that prefix)
    }
    transformed.xz += crownSpread(_leaf_pivot.xz, uTreeC);`;function v(m,g=.76){let x=null,b=null;if(m.traverse(fe=>{if(!fe.isMesh)return;let Z=fe.material?.name||"";Z.includes(n.bark)&&Sn(fe.geometry,"_sroot")?x=fe:Z.includes(n.leaf)&&Sn(fe.geometry,"_leaf_pivot")&&(b=fe)}),!x||!b||!h.mask.value)return;let _=performance.now(),E=h.mask.value.image,M=document.createElement("canvas");M.width=E.width,M.height=E.height;let A=M.getContext("2d");A.drawImage(E,0,0);let C=A.getImageData(0,0,E.width,E.height).data,y=h.box.value,w=a.uCentre.value,F=fe=>Math.min(Math.max(fe,0),1),O=(fe,Z)=>{let se=F((fe-y.x)*y.z),ee=F((Z-y.y)*y.w),he=Math.min(E.width-1,Math.floor(se*E.width)),re=Math.min(E.height-1,Math.floor((1-ee)*E.height));return C[(re*E.width+he)*4]/255},I=(fe,Z,se)=>{let ee=F((se-fe)/(Z-fe));return ee*ee*(3-2*ee)},P=(fe,Z)=>{let se=fe-w.x,ee=Z-w.y,he=1-I(-2,.5,fe-w.x);return[se*.18,ee*.18+ee*.35*he]},L=.25,k=2,X=y.x-1,U=y.y-1,V=w.y-8,j=Math.ceil(18/L),ie=Math.ceil(20/L),be=Math.ceil(16/L),_e=new Uint8Array(j*ie*be),W=$s(b.geometry,"_leaf_pivot"),te=$s(b.geometry,"_leaf_seed");for(let fe=0;fe<W.count;fe+=3){let Z=W.getX(fe),se=W.getY(fe),ee=W.getZ(fe),he=P(Z,ee),re=Z+he[0],Ee=ee+he[1];if(te.getX(fe)>g*I(.1,.35,O(re,se)))continue;let Pe=Math.floor((re-X)/L),N=Math.floor((se-U)/L),R=Math.floor((Ee-V)/L);for(let q=-k;q<=k;q++)for(let ne=-k;ne<=k;ne++)for(let ae=-k;ae<=k;ae++){if(q*q+ne*ne+ae*ae>k*k+1)continue;let z=Pe+q,me=N+ne,ce=R+ae;z<0||me<0||ce<0||z>=j||me>=ie||ce>=be||(_e[(ce*ie+me)*j+z]=1)}}let pe=x.geometry.attributes.position,oe=$s(x.geometry,"_smeta"),Re=pe.count,we=new Float32Array(Re),B=0;for(let fe=0;fe<Re;fe++){if(oe.getZ(fe)<.5)continue;let Z=pe.getX(fe),se=pe.getY(fe),ee=pe.getZ(fe);if(se<y.y+4.5)continue;let he=P(Z,ee),re=Z+he[0],Ee=ee+he[1],Pe=Math.floor((re-X)/L),N=Math.floor((se-U)/L),R=Math.floor((Ee-V)/L);(!(Pe>=0&&N>=0&&R>=0&&Pe<j&&N<ie&&R<be)||!_e[(R*ie+N)*j+Pe])&&(we[fe]=1,B++)}return x.geometry.setAttribute("_bare",new Oe(we,1)),console.info(`bare twigs: ${B} of ${Re} bark vertices marked in ${(performance.now()-_).toFixed(0)} ms`),B}return{Tree:a,TREE_VOLUME:o,CROWN:h,LEAF_CUTOUT:l,LEAF_SHAPE_DECL:u,BARK_DECL:d,BARK_SHAPE:f,LEAF_SHAPE:p,bleedLeafAtlas:c,markBareTwigs:v,ready:()=>r.then(m=>{h.mask.value=m})}}function ov({scene:s,oilSun:e,plasterLive:t,visibleSunOn:n,shadow:i,knobs:r}){let a=new hn,o={base:new T(-.84,-.242,-.485).normalize(),light:null,t:.5};{let d=new er("#ffedd2",.55);d.castShadow=!0,d.shadow.mapSize.set(4096,4096);let f=d.shadow.camera;f.left=-55,f.right=55,f.top=55,f.bottom=-55,f.near=200,f.far=700,d.shadow.bias=-8e-5,d.shadow.normalBias=.055;let p=new nt;p.position.set(8,2,0),a.add(p),d.target=p,a.add(d),a.add(new zs("#f4f2e8","#aeb492",.45)),o.light=d,l(.5)}function l(d){o.t=d;let f=(d-.5)*Math.PI*.85,p=o.base.clone().applyAxisAngle(new T(0,1,0),f);e.value.copy(p).negate(),o.light.position.copy(p.multiplyScalar(-420)).add(o.light.target.position)}function c(d){t.value=d?1:0,n.value=d?1:0,d?s.add(a):s.remove(a)}function h(){if(!o.light)return;let d=r.shadow||4096;if(d!==o.light.shadow.mapSize.x){o.light.shadow.mapSize.set(d,d),o.light.shadow.map&&(o.light.shadow.map.dispose(),o.light.shadow.map=null);let f=4096/d;o.light.shadow.bias=-8e-5*f,o.light.shadow.normalBias=.055*f}}function u(){o.light&&(o.light.shadow.map&&(i.map.value=o.light.shadow.map.texture,i.matrix.value.copy(o.light.shadow.matrix),i.size.value.copy(o.light.shadow.mapSize)),i.on.value=a.parent===s&&o.light.shadow.map?1:0)}return{SUN:o,sunRig:a,placeSun:l,setLiveLight:c,updateShadowMapSize:h,updateShadowUniforms:u}}var cv={type:"change"},Bf={type:"start"},lv={type:"end"},Nl=new Qn,hv=new cn,A1=Math.cos(70*en.DEG2RAD),Fl=class extends xn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:tr.ROTATE,MIDDLE:tr.DOLLY,RIGHT:tr.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",Te),this._domElementKeyEvents=S},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(cv),n.update(),r=i.NONE},this.update=(function(){let S=new T,H=new ht().setFromUnitVectors(e.up,new T(0,1,0)),K=H.clone().invert(),le=new T,ve=new ht,qe=new T,Je=2*Math.PI;return function(ot=null){let Xe=n.object.position;S.copy(Xe).sub(n.target),S.applyQuaternion(H),o.setFromVector3(S),n.autoRotate&&r===i.NONE&&O(w(ot)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let yt=n.minAzimuthAngle,pt=n.maxAzimuthAngle;isFinite(yt)&&isFinite(pt)&&(yt<-Math.PI?yt+=Je:yt>Math.PI&&(yt-=Je),pt<-Math.PI?pt+=Je:pt>Math.PI&&(pt-=Je),yt<=pt?o.theta=Math.max(yt,Math.min(pt,o.theta)):o.theta=o.theta>(yt+pt)/2?Math.max(yt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let En=!1;if(n.zoomToCursor&&M||n.object.isOrthographicCamera)o.radius=j(o.radius);else{let An=o.radius;o.radius=j(o.radius*c),En=An!=o.radius}if(S.setFromSpherical(o),S.applyQuaternion(K),Xe.copy(n.target).add(S),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&M){let An=null;if(n.object.isPerspectiveCamera){let Ui=S.length();An=j(Ui*c);let li=Ui-An;n.object.position.addScaledVector(_,li),n.object.updateMatrixWorld(),En=!!li}else if(n.object.isOrthographicCamera){let Ui=new T(E.x,E.y,0);Ui.unproject(n.object);let li=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),En=li!==n.object.zoom;let ea=new T(E.x,E.y,0);ea.unproject(n.object),n.object.position.sub(ea).add(Ui),n.object.updateMatrixWorld(),An=S.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;An!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(An).add(n.object.position):(Nl.origin.copy(n.object.position),Nl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Nl.direction))<A1?e.lookAt(n.target):(hv.setFromNormalAndCoplanarPoint(n.object.up,n.target),Nl.intersectPlane(hv,n.target))))}else if(n.object.isOrthographicCamera){let An=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),An!==n.object.zoom&&(n.object.updateProjectionMatrix(),En=!0)}return c=1,M=!1,En||le.distanceToSquared(n.object.position)>a||8*(1-ve.dot(n.object.quaternion))>a||qe.distanceToSquared(n.target)>a?(n.dispatchEvent(cv),le.copy(n.object.position),ve.copy(n.object.quaternion),qe.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",q),n.domElement.removeEventListener("wheel",z),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",q),n.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Te),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new Gs,l=new Gs,c=1,h=new T,u=new Y,d=new Y,f=new Y,p=new Y,v=new Y,m=new Y,g=new Y,x=new Y,b=new Y,_=new T,E=new Y,M=!1,A=[],C={},y=!1;function w(S){return S!==null?2*Math.PI/60*n.autoRotateSpeed*S:2*Math.PI/60/60*n.autoRotateSpeed}function F(S){let H=Math.abs(S*.01);return Math.pow(.95,n.zoomSpeed*H)}function O(S){l.theta-=S}function I(S){l.phi-=S}let P=(function(){let S=new T;return function(K,le){S.setFromMatrixColumn(le,0),S.multiplyScalar(-K),h.add(S)}})(),L=(function(){let S=new T;return function(K,le){n.screenSpacePanning===!0?S.setFromMatrixColumn(le,1):(S.setFromMatrixColumn(le,0),S.crossVectors(n.object.up,S)),S.multiplyScalar(K),h.add(S)}})(),k=(function(){let S=new T;return function(K,le){let ve=n.domElement;if(n.object.isPerspectiveCamera){let qe=n.object.position;S.copy(qe).sub(n.target);let Je=S.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),P(2*K*Je/ve.clientHeight,n.object.matrix),L(2*le*Je/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(P(K*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),L(le*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function X(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(S){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=S:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(S,H){if(!n.zoomToCursor)return;M=!0;let K=n.domElement.getBoundingClientRect(),le=S-K.left,ve=H-K.top,qe=K.width,Je=K.height;E.x=le/qe*2-1,E.y=-(ve/Je)*2+1,_.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(S){return Math.max(n.minDistance,Math.min(n.maxDistance,S))}function ie(S){u.set(S.clientX,S.clientY)}function be(S){V(S.clientX,S.clientX),g.set(S.clientX,S.clientY)}function _e(S){p.set(S.clientX,S.clientY)}function W(S){d.set(S.clientX,S.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let H=n.domElement;O(2*Math.PI*f.x/H.clientHeight),I(2*Math.PI*f.y/H.clientHeight),u.copy(d),n.update()}function te(S){x.set(S.clientX,S.clientY),b.subVectors(x,g),b.y>0?X(F(b.y)):b.y<0&&U(F(b.y)),g.copy(x),n.update()}function pe(S){v.set(S.clientX,S.clientY),m.subVectors(v,p).multiplyScalar(n.panSpeed),k(m.x,m.y),p.copy(v),n.update()}function oe(S){V(S.clientX,S.clientY),S.deltaY<0?U(F(S.deltaY)):S.deltaY>0&&X(F(S.deltaY)),n.update()}function Re(S){let H=!1;switch(S.code){case n.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),H=!0;break}H&&(S.preventDefault(),n.update())}function we(S){if(A.length===1)u.set(S.pageX,S.pageY);else{let H=at(S),K=.5*(S.pageX+H.x),le=.5*(S.pageY+H.y);u.set(K,le)}}function B(S){if(A.length===1)p.set(S.pageX,S.pageY);else{let H=at(S),K=.5*(S.pageX+H.x),le=.5*(S.pageY+H.y);p.set(K,le)}}function fe(S){let H=at(S),K=S.pageX-H.x,le=S.pageY-H.y,ve=Math.sqrt(K*K+le*le);g.set(0,ve)}function Z(S){n.enableZoom&&fe(S),n.enablePan&&B(S)}function se(S){n.enableZoom&&fe(S),n.enableRotate&&we(S)}function ee(S){if(A.length==1)d.set(S.pageX,S.pageY);else{let K=at(S),le=.5*(S.pageX+K.x),ve=.5*(S.pageY+K.y);d.set(le,ve)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let H=n.domElement;O(2*Math.PI*f.x/H.clientHeight),I(2*Math.PI*f.y/H.clientHeight),u.copy(d)}function he(S){if(A.length===1)v.set(S.pageX,S.pageY);else{let H=at(S),K=.5*(S.pageX+H.x),le=.5*(S.pageY+H.y);v.set(K,le)}m.subVectors(v,p).multiplyScalar(n.panSpeed),k(m.x,m.y),p.copy(v)}function re(S){let H=at(S),K=S.pageX-H.x,le=S.pageY-H.y,ve=Math.sqrt(K*K+le*le);x.set(0,ve),b.set(0,Math.pow(x.y/g.y,n.zoomSpeed)),X(b.y),g.copy(x);let qe=(S.pageX+H.x)*.5,Je=(S.pageY+H.y)*.5;V(qe,Je)}function Ee(S){n.enableZoom&&re(S),n.enablePan&&he(S)}function Pe(S){n.enableZoom&&re(S),n.enableRotate&&ee(S)}function N(S){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(S.pointerId),n.domElement.addEventListener("pointermove",R),n.domElement.addEventListener("pointerup",q)),!Fe(S)&&(ye(S),S.pointerType==="touch"?ue(S):ne(S)))}function R(S){n.enabled!==!1&&(S.pointerType==="touch"?Se(S):ae(S))}function q(S){switch(ge(S),A.length){case 0:n.domElement.releasePointerCapture(S.pointerId),n.domElement.removeEventListener("pointermove",R),n.domElement.removeEventListener("pointerup",q),n.dispatchEvent(lv),r=i.NONE;break;case 1:let H=A[0],K=C[H];ue({pointerId:H,pageX:K.x,pageY:K.y});break}}function ne(S){let H;switch(S.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case tr.DOLLY:if(n.enableZoom===!1)return;be(S),r=i.DOLLY;break;case tr.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enablePan===!1)return;_e(S),r=i.PAN}else{if(n.enableRotate===!1)return;ie(S),r=i.ROTATE}break;case tr.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(n.enableRotate===!1)return;ie(S),r=i.ROTATE}else{if(n.enablePan===!1)return;_e(S),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Bf)}function ae(S){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(S);break;case i.DOLLY:if(n.enableZoom===!1)return;te(S);break;case i.PAN:if(n.enablePan===!1)return;pe(S);break}}function z(S){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(S.preventDefault(),n.dispatchEvent(Bf),oe(me(S)),n.dispatchEvent(lv))}function me(S){let H=S.deltaMode,K={clientX:S.clientX,clientY:S.clientY,deltaY:S.deltaY};switch(H){case 1:K.deltaY*=16;break;case 2:K.deltaY*=100;break}return S.ctrlKey&&!y&&(K.deltaY*=10),K}function ce(S){S.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(S){S.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Te(S){n.enabled===!1||n.enablePan===!1||Re(S)}function ue(S){switch(ze(S),A.length){case 1:switch(n.touches.ONE){case nr.ROTATE:if(n.enableRotate===!1)return;we(S),r=i.TOUCH_ROTATE;break;case nr.PAN:if(n.enablePan===!1)return;B(S),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case nr.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Z(S),r=i.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(S),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Bf)}function Se(S){switch(ze(S),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ee(S),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;he(S),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(S),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(S),n.update();break;default:r=i.NONE}}function Le(S){n.enabled!==!1&&S.preventDefault()}function ye(S){A.push(S.pointerId)}function ge(S){delete C[S.pointerId];for(let H=0;H<A.length;H++)if(A[H]==S.pointerId){A.splice(H,1);return}}function Fe(S){for(let H=0;H<A.length;H++)if(A[H]==S.pointerId)return!0;return!1}function ze(S){let H=C[S.pointerId];H===void 0&&(H=new Y,C[S.pointerId]=H),H.set(S.pageX,S.pageY)}function at(S){let H=S.pointerId===A[0]?A[1]:A[0];return C[H]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",q),n.domElement.addEventListener("wheel",z,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}};function uv({canvas:s}){function t(b){return 2*Math.atan(.5/Math.min(Math.max(b,1),2.4))*180/Math.PI}console.assert(Math.abs(t(2.4)-23.5366)<.001,"heroFov(2.4) must be the hero lens, 36 mm on 36 mm at 2.4:1");let n=new vt(t(innerWidth/innerHeight),innerWidth/innerHeight,1.5,6e3),i={shift:.122},r=-.135;function a(b){let _=Math.min(Math.max((b-2.4)/1.1555555555555554,0),1),E=Math.min(Math.max((b-1)/.6,0),1);return(r+_*(-.2068-r))*E}function o(){n.setViewOffset(innerWidth,innerHeight,a(innerWidth/innerHeight)*innerWidth,-i.shift*innerHeight,innerWidth,innerHeight)}o();let l=new T(3,4.45,120),c=new T(8,4.45,0);n.position.copy(l);let h=new Fl(n,s);h.target.copy(c),h.enableDamping=!0,h.dampingFactor=.06,h.minDistance=6,h.maxDistance=320,h.maxPolarAngle=Math.PI*.495;let u=null,d=()=>{};function f(b){u=b.FLY,d=()=>b.syncFromCamera()}function p(b,_,E,M,A,C){return n.position.set(b,_,E),n.lookAt(M,A,C),d(),{eye:n.position.toArray(),yaw:u.yaw,pitch:u.pitch}}function v(b){if(u.on=b==="fly",u.on)h.update(),d(),h.enabled=!1;else{let E=new T;n.getWorldDirection(E),h.target.copy(n.position).addScaledVector(E,60),n.rotation.z=0,n.fov=u.fov0,o(),h.enabled=!0,h.update()}let _=document.getElementById("c-cam");_&&_.value!==b&&(_.value=b)}function m(){h.enabled=!1,n.position.copy(l),h.target.copy(c),n.up.set(0,1,0),n.lookAt(c),n.rotation.z=0,n.aspect=innerWidth/innerHeight,n.fov=u.fov0=t(n.aspect),o(),n.updateProjectionMatrix(),u.on=!0,d();let b=document.getElementById("c-cam");b&&(b.value="fly")}let g=1.33;function x(){m(),n.position.lerpVectors(c,l,g),h.target.copy(c)}return{camera:n,controls:h,heroFov:t,HORIZON:i,applyHorizon:o,HERO_POS:l,HERO_TARGET:c,LOOKAT:p,setCamMode:v,restoreHero:m,restoreDefault:x,bindFly:f}}var Ol=class{constructor({nx:e,ny:t,positions:n,pins:i}){this.nx=e,this.ny=t,this.rest=Float64Array.from(n),this.x=Float64Array.from(n),this.previous=Float64Array.from(n),this.velocity=new Float64Array(n.length),this.inv=new Float64Array(n.length/3).fill(1);for(let a of i)this.inv[a]=0;this.pins=i,this.constraints=[],this.accumulator=0,this.time=0;let r=(a,o,l)=>{let c=Math.hypot(...[0,1,2].map(h=>n[a*3+h]-n[o*3+h]));this.constraints.push({a,b:o,length:c,compliance:l,lambda:0})};for(let a=0;a<t;a++)for(let o=0;o<e;o++){let l=a*e+o;o+1<e&&r(l,l+1,1e-8),a+1<t&&r(l,l+e,1e-8),o+1<e&&a+1<t&&(r(l,l+e+1,5e-8),r(l+1,l+e,5e-8)),o+2<e&&r(l,l+2,2e-4),a+2<t&&r(l,l+2*e,2e-4)}this.tethers=[];for(let a=0;a<this.inv.length;a++){let o=i[0],l=1/0;for(let c of i){let h=Math.hypot(...[0,1,2].map(u=>n[a*3+u]-n[c*3+u]));h<l&&(l=h,o=c)}this.tethers.push({pin:o,length:l*1.015})}}step(e,t,n=-1/0){let i=.008333333333333333;for(this.accumulator=Math.min(this.accumulator+Math.max(0,Math.min(e,.1)),.1);this.accumulator+1e-10>=i;)this.substep(i,t,n),this.accumulator-=i}substep(e,t,n){let{x:i,previous:r,velocity:a,inv:o,rest:l}=this;r.set(i),this.time+=e;for(let c=0;c<o.length;c++){let h=c*3;if(!o[c]){for(let te=0;te<3;te++)i[h+te]=l[h+te],a[h+te]=0;continue}let u=Math.floor(c/this.nx),d=c%this.nx,f=(c-(d>0?1:0))*3,p=(c+(d+1<this.nx?1:0))*3,v=(c-(u>0?this.nx:0))*3,m=(c+(u+1<this.ny?this.nx:0))*3,g=r[p]-r[f],x=r[p+1]-r[f+1],b=r[p+2]-r[f+2],_=r[m]-r[v],E=r[m+1]-r[v+1],M=r[m+2]-r[v+2],A=x*M-b*E,C=b*_-g*M,y=g*E-x*_,w=Math.hypot(A,C,y)||1;A/=w,C/=w,y/=w;let F=t(r[h],r[h+1],r[h+2]),O=F[0]-a[h],I=-a[h+1],P=F[1]-a[h+2],L=O*A+I*C+P*y,k=Math.max(0,Math.min(1,(3.5-Math.hypot(...F))/1.5)),X=1+3*k*k*(3-2*k),U=Math.hypot(...F),V=l[h]*.72+l[h+2]*.61,j=k*Math.min(1.3,U*1.35)*(.72*Math.sin(this.time*2.6+V+l[h+1]*.65)+.28*Math.sin(this.time*4.3+V*1.7-l[h+1]*1.2)),ie=L+j,be=Math.max(-28,Math.min(28,1.05*X*ie*Math.abs(ie))),_e=(.06+.18*Math.min(10,Math.hypot(O,I,P)))*(1+1.8*k),W=[be*A+_e*(O-L*A),be*C+_e*(I-L*C)-9.81,be*y+_e*(P-L*y)];for(let te=0;te<3;te++)a[h+te]=(a[h+te]+W[te]*e)*Math.exp(-.7*e),i[h+te]+=a[h+te]*e}for(let c of this.constraints)c.lambda=0;for(let c=0;c<28;c++){for(let h of this.constraints){let u=h.a*3,d=h.b*3,f=o[h.a],p=o[h.b];if(f+p===0)continue;let v=i[d]-i[u],m=i[d+1]-i[u+1],g=i[d+2]-i[u+2],x=Math.hypot(v,m,g)||1e-9,b=h.compliance/(e*e),_=(-(x-h.length)-b*h.lambda)/(f+p+b);h.lambda+=_;let E=_/x;i[u]-=f*E*v,i[u+1]-=f*E*m,i[u+2]-=f*E*g,i[d]+=p*E*v,i[d+1]+=p*E*m,i[d+2]+=p*E*g}for(let h=0;h<o.length;h++)if(o[h]){let u=h*3,{pin:d,length:f}=this.tethers[h],p=d*3,v=i[u]-l[p],m=i[u+1]-l[p+1],g=i[u+2]-l[p+2],x=Math.hypot(v,m,g);if(x>f){let b=f/x;i[u]=l[p]+v*b,i[u+1]=l[p+1]+m*b,i[u+2]=l[p+2]+g*b}i[u+1]=Math.max(i[u+1],n)}}for(let c=0;c<o.length;c++)if(o[c])for(let h=0;h<3;h++){let u=c*3+h;a[u]=(i[u]-r[u])/e}}maxStretch(){return Math.max(...this.constraints.filter(e=>e.compliance<1e-6).map(e=>Math.hypot(...[0,1,2].map(t=>this.x[e.a*3+t]-this.x[e.b*3+t]))/e.length))}};function T1(s){return s.garments.map(({patch:e,binding:t})=>({nx:e.nx,ny:e.ny,positions:Array.from(e.rest),pins:Array.from(e.pins),ids:Int32Array.from(t.map(n=>n.id)),keys:Int32Array.from(t.flatMap(n=>n.keys)),weights:Float64Array.from(t.flatMap(n=>n.weights)),blend:Float64Array.from(t.map(n=>n.blend))}))}var R1=1/30;function dv(s,e,t=null){return{garments:[],mesh:null,worker:null,workerReady:!1,inFlight:!1,pendingDt:0,affected:null,buffer:null,cfg:null,lastMaxStretch:1,from:null,to:null,alpha:1,blendDt:0,lastResultAt:0,init(n){this.mesh=n;let i=n.geometry,r=i.attributes.position,a=Float32Array.from(r.array),o=r.count;n.updateWorldMatrix(!0,!1);for(let y=0;y<o;y++)a[y*3+1]=-r.getZ(y),a[y*3+2]=r.getY(y);let l=n.matrixWorld.clone().multiply(new s.Matrix4().makeRotationX(-Math.PI/2)),c=new s.Vector3(1,0,0).transformDirection(l),h=new s.Vector3(c.z,0,-c.x),u=y=>.208+.12*y*y,d=new Uint8Array(o),f=Int32Array.from({length:o},(y,w)=>w),p=y=>{for(;f[y]!==y;)f[y]=f[f[y]],y=f[y];return y},v=(y,w)=>{d[y]&&d[w]&&(f[p(y)]=p(w))},m=new Map;for(let y=0;y<o;y++){let w=a[y*3],F=a[y*3+2];if(d[y]=Math.abs(w)<.858&&F<u(w)-.012,!d[y])continue;let O=w>.704?1:0,I=`${Math.round(w*1e4)},${Math.round(a[y*3+1]*1e4)},${Math.round(F*1e4)},${O}`;m.has(I)?v(y,m.get(I)):m.set(I,y)}let g=i.index?.array||Uint32Array.from({length:o},(y,w)=>w);for(let y=0;y<g.length;y+=3)for(let w=0;w<3;w++){let F=g[y+w],O=g[y+(w+1)%3];a[F*3]>.704==a[O*3]>.704&&v(F,O)}let x=new Map;for(let y=0;y<o;y++)if(d[y]){let w=p(y);x.has(w)||x.set(w,[]),x.get(w).push(y)}let b=[...x.values()].filter(y=>y.length>150),_=.004,E=.003,M=new Map,A=new Uint8Array(o),C=(y,w,F)=>`${y},${w},${F}`;for(let y=0;y<b.length;y++)for(let w of b[y]){A[w]=1;let F=C(...[0,1,2].map(O=>Math.floor(a[w*3+O]/_)));M.has(F)||M.set(F,[]),M.get(F).push({id:w,garment:y})}for(let y=0;y<o;y++)if(d[y]&&!A[y]){let w=[0,1,2].map(P=>a[y*3+P]),F=w.map(P=>Math.floor(P/_)),O=-1,I=E*E;for(let P=-1;P<=1;P++)for(let L=-1;L<=1;L++)for(let k=-1;k<=1;k++)for(let X of M.get(C(F[0]+P,F[1]+L,F[2]+k))||[]){let U=w.reduce((V,j,ie)=>V+(j-a[X.id*3+ie])**2,0);U<I&&(I=U,O=X.garment)}O>=0&&b[O].push(y)}Cl(n),n.frustumCulled=!1,this.position=i.attributes.position,this.normal=i.attributes.normal,this.rest=Float32Array.from(this.position.array),this.restNormal=Float32Array.from(this.normal.array),this.garments=[];for(let y of b){let w=1/0,F=-1/0,O=1/0;for(let ie of y)w=Math.min(w,a[ie*3]),F=Math.max(F,a[ie*3]),O=Math.min(O,a[ie*3+2]);let I=l.getMaxScaleOnAxis(),P=(F-w)*I,L=Math.max(5,Math.ceil(P/.09)+1),k=Math.max(5,Math.ceil((u((w+F)/2)-O)*I/.09)+1),X=[],U=new s.Vector3;for(let ie=0;ie<k;ie++)for(let be=0;be<L;be++){let _e=w+(F-w)*be/(L-1),W=ie/(k-1);U.set(_e,0,u(_e)+(O-u(_e))*W).applyMatrix4(l),X.push(...U.toArray())}let V=new Ol({nx:L,ny:k,positions:X,pins:[0,L-1]}),j=[];for(let ie of y){let be=a[ie*3],_e=a[ie*3+2],W=Math.max(0,Math.min(L-1.00001,(be-w)/(F-w)*(L-1))),te=Math.max(0,Math.min(k-1.00001,(u(be)-_e)/(u(be)-O)*(k-1))),pe=Math.floor(W),oe=Math.floor(te),Re=W-pe,we=te-oe,B=[oe*L+pe,oe*L+pe+1,(oe+1)*L+pe,(oe+1)*L+pe+1],fe=[(1-Re)*(1-we),Re*(1-we),(1-Re)*we,Re*we],Z=(u(be)-_e)*I,se=Math.min(1,Math.max(0,(Z-.03)/.09));j.push({id:ie,keys:B,weights:fe,blend:se})}this.garments.push({patch:V,binding:j,normal:h})}console.info("cloth rig:",this.garments.length,"connected textiles;",this.garments.reduce((y,w)=>y+w.binding.length,0),"bound vertices"),t&&typeof Worker<"u"&&this.startWorker(t)},startWorker(n){let i;try{i=new Worker(n.url,{type:"module"})}catch(o){console.warn("cloth worker unavailable, solving on the main thread",o);return}let r=this.mesh.geometry,a=r.index?Int32Array.from(r.index.array):Int32Array.from({length:this.position.count},(o,l)=>l);i.onmessage=o=>{let l=o.data;if(l.type==="ready"){this.affected=l.affected,this.normal.array.set(l.normals),this.normal.needsUpdate=!0,this.workerReady=!0;return}if(l.type==="result"){let c=new Float32Array(l.data),h=this.affected.length*6;if(!this.to)this.from=new Float32Array(h),this.to=new Float32Array(h),this.from.set(c);else{let f=this.from,p=this.to,v=this.alpha;for(let m=0;m<h;m++)f[m]+=(p[m]-f[m])*v}let u=performance.now(),d=this.lastResultAt?(u-this.lastResultAt)/1e3:0;this.lastResultAt=u,this.to.set(c),this.alpha=0,this.blendDt=Math.max(l.dt||0,Math.min(d,.25),.001),this.buffer=l.data,this.inFlight=!1,this.lastMaxStretch=l.maxStretch}},i.onerror=o=>{console.warn("cloth worker failed, solving on the main thread",o.message||o),this.worker=null,this.workerReady=!1,this.inFlight=!1},i.postMessage({type:"init",rest:Float32Array.from(this.rest),index:a,garments:T1(this),dir:n.dir,top:n.top}),this.worker=i,this.cfg=n},step(n){if(!this.mesh)return;if(this.worker){if(this.pendingDt=Math.min(this.pendingDt+n,R1),this.workerReady&&!this.inFlight){let[a,o]=this.cfg.state(),l=this.buffer;this.buffer=null,this.worker.postMessage({type:"step",dt:this.pendingDt,U:a,adv:o,buffer:l},l?[l]:[]),this.pendingDt=0,this.inFlight=!0}if(this.to&&this.alpha<1){this.alpha=Math.min(1,this.alpha+n/this.blendDt);let a=this.from,o=this.to,l=this.alpha,c=this.position.array,h=this.normal.array,u=this.affected;for(let d=0;d<u.length;d++){let f=u[d]*3,p=d*6;c[f]=a[p]+(o[p]-a[p])*l,c[f+1]=a[p+1]+(o[p+1]-a[p+1])*l,c[f+2]=a[p+2]+(o[p+2]-a[p+2])*l;let v=a[p+3]+(o[p+3]-a[p+3])*l,m=a[p+4]+(o[p+4]-a[p+4])*l,g=a[p+5]+(o[p+5]-a[p+5])*l,x=Math.hypot(v,m,g)||1;h[f]=v/x,h[f+1]=m/x,h[f+2]=g/x}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}return}let i=this.position.array,r=this.normal.array;for(let{patch:a,binding:o}of this.garments){a.step(n,e);for(let{id:l,keys:c,weights:h,blend:u}of o)for(let d=0;d<3;d++){let f=0;for(let p=0;p<4;p++)f+=(a.x[c[p]*3+d]-a.rest[c[p]*3+d])*h[p];i[l*3+d]=this.rest[l*3+d]+f*u,r[l*3+d]=this.restNormal[l*3+d]}}this.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}}function fv({islandTop:s,clothWorkerUrl:e,syncCloth:t,field:n=[160,80]}){let i={t:{value:0},on:!0,spd:{value:1.8}},r=s;function a(p,v){let m=Math.sin(p*127.1+v*311.7)*43758.5453;return m-Math.floor(m)}function o(p,v){let m=Math.floor(p),g=Math.floor(v),x=p-m,b=v-g;x=x*x*(3-2*x),b=b*b*(3-2*b);let _=a(m,g),E=a(m+1,g),M=a(m,g+1),A=a(m+1,g+1);return(_*(1-x)+E*x)*(1-b)+(M*(1-x)+A*x)*b}let l=Hd.toHalfFloat;function c(){let p=0,v=0;for(;p===0;)p=Math.random();for(;v===0;)v=Math.random();return Math.sqrt(-2*Math.log(p))*Math.cos(2*Math.PI*v)}let h={dir:new Y(.92,.39).normalize(),mean:1.8,U:1.8,adv:0,step(p){let m=.42*Math.sqrt(Math.max(this.mean,.3)/3);this.U+=.18*(this.mean-this.U)*p+m*Math.sqrt(p)*c(),this.U=Math.max(0,Math.min(this.U,this.mean*1.6+.5)),this.adv+=this.U*.85*p,i.spd.value=this.U},at(p,v,m,g){let x=this.dir,b=p*x.x+m*x.y-this.adv,_=-p*x.y+m*x.x,E=o(b*.04,_*.1),M=o(b*.17+7.3,_*.24-3.1),A=.45+1*E+.35*(M-.5),C=.55+.45*Math.min(Math.max((v-r+.4)/5,0),1),y=this.U*A*C,w=(M-.5)*.45,F=Math.cos(w),O=Math.sin(w);return g.x=y*(x.x*F-x.y*O),g.y=y*(x.x*O+x.y*F),g}},u={W:n[0],H:n[1],box:null,tex:null,d:null,v:null,w0:null,tmp:new Y,uMin:{value:new Y},uSize:{value:new Y(1,1)},uTex:{value:null},uLean:{value:10},uFlut:{value:.03},init(p){this.box=p;let v=this.W*this.H;this.d=new Float32Array(v*2),this.v=new Float32Array(v*2),this.w0=new Float32Array(v);for(let m=0;m<this.H;m++)for(let g=0;g<this.W;g++)this.w0[m*this.W+g]=2*Math.PI*(1.15+.09*(o(g*.11,m*.13)-.5));this.data=new Uint16Array(v*4),this.tex=new un(this.data,this.W,this.H,Kt,Xn),this.tex.minFilter=this.tex.magFilter=st,this.tex.wrapS=this.tex.wrapT=It,this.tex.needsUpdate=!0,this.uTex.value=this.tex,this.uMin.value.set(p.min.x,p.min.z),this.uSize.value.set(p.max.x-p.min.x,p.max.z-p.min.z)},step(p){if(!this.box)return;let{W:v,H:m,d:g,v:x,w0:b,data:_,tmp:E}=this,M=this.uSize.value.x/v,A=this.uSize.value.y/m,C=this.uMin.value.x,y=this.uMin.value.y,w=.38,F=.7,O=.16,I=3;for(let P=0;P<m;P++){let L=y+(P+.5)*A;for(let k=0;k<v;k++){let X=P*v+k,U=X*2;h.at(C+(k+.5)*M,r+.4,L,E);let V=Math.sqrt(E.x*E.x+E.y*E.y),j=b[X],ie=k>0?U-2:U,be=k<v-1?U+2:U,_e=P>0?U-2*v:U,W=P<m-1?U+2*v:U,te=g[ie]+g[be]+g[_e]+g[W]-4*g[U],pe=g[ie+1]+g[be+1]+g[_e+1]+g[W+1]-4*g[U+1],oe=F*V*E.x-j*j*g[U]-2*w*j*x[U]+I*te,Re=F*V*E.y-j*j*g[U+1]-2*w*j*x[U+1]+I*pe;x[U]+=oe*p,x[U+1]+=Re*p,g[U]+=x[U]*p,g[U+1]+=x[U+1]*p;let we=Math.sqrt(g[U]*g[U]+g[U+1]*g[U+1]);we>O&&(g[U]*=O/we,g[U+1]*=O/we),_[X*4]=l(g[U]),_[X*4+1]=l(g[U+1]),_[X*4+2]=l(V)}}this.tex.needsUpdate=!0}},d=new Y,f=dv(Xt,(p,v,m)=>(h.at(p,v,m,d),[d.x,d.y]),t?null:{url:e,dir:h.dir.toArray(),top:r,state:()=>[h.U,h.adv]});return{WIND:i,Wind:h,Grass:u,Cloth:f}}var C1="6.0.21",P1="geforce 320m.geforce 8600.geforce 8600m gt.geforce 8800 gs.geforce 8800 gt.geforce 9400.geforce 9400m g.geforce 9400m.geforce 9600m gt.geforce 9600m.geforce fx go5200.geforce gt 120.geforce gt 130.geforce gt 330m.geforce gtx 285.swiftshader.intel g41.intel g45.intel gma 4500mhd.intel gma x3100.intel hd 3000.intel q45.legacy.mali-2.mali-3.mali-4.quadro fx 1500.quadro fx 4.quadro fx 5.radeon hd 2400.radeon hd 2600.radeon hd 4670.radeon hd 4850.radeon hd 4870.radeon hd 5670.radeon hd 5750.radeon hd 6290.radeon hd 6300.radeon hd 6310.radeon hd 6320.radeon hd 6490m.radeon hd 6630m.radeon hd 6750m.radeon hd 6770m.radeon hd 6970m.sgx 543.sgx543".split(".");function pv(s){return s=s.toLowerCase().replace(/.*angle ?\((.+)\)(?: on vulkan [0-9.]+)?$/i,"$1").replace(/\s(\d{1,2}gb|direct3d.+$)|\(r\)| \([^)]+\)$/g,"").replace(/(?:vulkan|opengl) \d+\.\d+(?:\.\d+)?(?: \((.*)\))?/,"$1"),s}var xv=typeof window>"u";function L1(s,e){if(!e)return;let t=/(?:iPhone|CPU) OS (\d+)[._ ;)]/.exec(s),n=/Version\/(\d+)/.exec(s),i=t?parseInt(t[1],10):void 0,r=n?parseInt(n[1],10):void 0;return i!==void 0&&r!==void 0?i>=7&&r>i?r:i:i??r}var Li=(()=>{if(xv)return;let{userAgent:s,platform:e,maxTouchPoints:t}=window.navigator,n=/(iphone|ipod|ipad)/i.test(s),i=e==="iPad"||e==="MacIntel"&&t>0,r=/android/i.test(s),a=L1(s,n||i);return{isIpad:i,isMobile:r||n||i,isSafari12:/Version\/12.+Safari/.test(s),isFirefox:/Firefox/.test(s),iOSVersion:a}})(),mv=34962;function D1(s,e,t){if(!t)return[e];let n="801621810",i="8016218135",r="80162181161",a=Li?.isIpad?[["a7",r,12],["a8",i,15],["a8x",i,15],["a9",i,15],["a9x",i,15],["a10",i,15],["a10x",i,15],["a12",n,15],["a12x",n,15],["a12z",n,15],["a14",n,15],["a15",n,15],["a16",n,15],["a17 pro",n,15],["m1",n,15],["m2",n,15],["m3",n,15],["m4",n,15],["m5",n,15]]:[["a7",r,12],["a8",i,12],["a9",i,15],["a10",i,15],["a11",n,15],["a12",n,15],["a13",n,15],["a14",n,15],["a15",n,15],["a16",n,15],["a17 pro",n,15],["a18",n,15],["a18 pro",n,15],["a19",n,15],["a19 pro",n,15]];if(!(Li?.iOSVersion!==void 0&&Li.iOSVersion>=14)){let o=O1(s);if(o==="80162181255")a=a.filter(([,,l])=>l>=14);else{let l=a.filter(([,c])=>c===o);l.length&&(a=l)}}return a=F1(a,Li?.iOSVersion,!!Li?.isIpad),a.map(([o])=>`apple ${o} gpu`)}var I1=[{minIOS:13,iphone:9,ipad:8},{minIOS:16,iphone:10,ipad:9},{minIOS:17,iphone:12,ipad:10},{minIOS:26,iphone:13,ipad:12}];function N1(s,e){let t=I1.findLast(n=>s>=n.minIOS);return t?e?t.ipad:t.iphone:0}function F1(s,e,t){if(!e)return s;let n=N1(e,t);return n?s.filter(([i])=>{if(i.startsWith("m"))return!0;let r=/^a(\d+)/.exec(i);return r?parseInt(r[1],10)>=n:!0}):s}function O1(s){let e=s.createShader(35633),t=s.createShader(35632),n=s.createProgram();if(!(t&&e&&n))return;s.shaderSource(e,`
    precision highp float;
    attribute vec3 aPosition;
    varying float vvv;
    void main() {
      vvv = 0.31622776601683794;
      gl_Position = vec4(aPosition, 1.0);
    }
  `),s.shaderSource(t,`
    precision highp float;
    varying float vvv;
    void main() {
      vec4 enc = vec4(1.0, 255.0, 65025.0, 16581375.0) * vvv;
      enc = fract(enc);
      enc -= enc.yzww * vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 0.0);
      gl_FragColor = enc;
    }
  `),s.compileShader(e),s.compileShader(t),s.attachShader(n,e),s.attachShader(n,t),s.linkProgram(n),s.detachShader(n,e),s.detachShader(n,t),s.deleteShader(e),s.deleteShader(t),s.useProgram(n);let i=s.createBuffer();s.bindBuffer(mv,i),s.bufferData(mv,new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),35044);let r=s.getAttribLocation(n,"aPosition");s.vertexAttribPointer(r,3,5126,!1,0,0),s.enableVertexAttribArray(r),s.clearColor(1,1,1,1),s.clear(16384),s.viewport(0,0,1,1),s.drawArrays(4,0,3);let a=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,a),s.deleteProgram(n),s.deleteBuffer(i),a.join("")}function U1(s,e,t){return e==="apple gpu"?D1(s,e,t):[e]}function uo(s){"@babel/helpers - typeof";return uo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},uo(s)}function k1(s,e){if(uo(s)!="object"||!s)return s;var t=s[Symbol.toPrimitive];if(t!==void 0){var n=t.call(s,e||"default");if(uo(n)!="object")return n;throw TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function B1(s){var e=k1(s,"string");return uo(e)=="symbol"?e:e+""}function z1(s,e,t){return(e=B1(e))in s?Object.defineProperty(s,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):s[e]=t,s}var gv=class extends Error{constructor(...s){super(...s),z1(this,"name","OutdatedBenchmarksError")}};function H1(s){return s=s.replace(/\([^)]+\)/,""),(s.match(/\d+/)||s.match(/(\W|^)([A-Za-z]{1,3})(\W|$)/g))?.join("").replace(/\W|amd/g,"")??""}var zf=[],vv=[];function V1(s,e){if(s===e)return 0;let t=s;s.length>e.length&&(s=e,e=t);let n=s.length,i=e.length;for(;n>0&&s.charCodeAt(n-1)===e.charCodeAt(i-1);)n--,i--;let r=0;for(;r<n&&s.charCodeAt(r)===e.charCodeAt(r);)r++;if(n-=r,i-=r,n===0)return i;let a,o=0,l,c,h=0,u=0;for(;h<n;)vv[h]=s.charCodeAt(r+h),zf[h]=++h;for(;u<i;)for(a=e.charCodeAt(r+u),l=u++,o=u,h=0;h<n;h++)c=a===vv[h]?l:l+1,l=zf[h],o=zf[h]=l>o?c>o?o+1:c:c>l?l+1:c;return o}function G1(s){return s.split(/[.,()[\]/\s]/g).sort().filter((e,t,n)=>t===0||e!==n[t-1]).join(" ")}function W1(s,e=!1){let t={alpha:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:e,powerPreference:"high-performance",stencil:!1};return s&&delete t.powerPreference,window.document.createElement("canvas").getContext("webgl",t)??void 0}function q1(s){return s!=null}var _v=async({mobileTiers:s=[0,15,30,60],desktopTiers:e=[0,15,30,60],override:t={},glContext:n,failIfMajorPerformanceCaveat:i=!1,benchmarksURL:r=`https://unpkg.com/@pmndrs/detect-gpu@${C1}/dist/benchmarks`}={})=>{let a={},o=!1;if(xv)return{tier:0,type:"SSR"};let{isIpad:l=!!Li?.isIpad,isMobile:c=!!Li?.isMobile,screenSize:h=window.screen,loadBenchmarks:u=async M=>{let[A,...C]=await fetch(`${r}/${M}`).then(y=>y.json());if(parseInt(A.split(".")[0],10)<4)throw new gv("Detect GPU benchmark data is out of date. Please update to version 4x");return C}}=t,{renderer:d}=t,f=M=>{let A=c?["adreno","apple","mali-t","mali","nvidia","powervr","samsung"]:["intel","apple","amd","radeon","nvidia","geforce","adreno"];for(let C of A)if(M.includes(C))return C};async function p(M){let A=f(M);if(!A)return;let C=`${c?"m":"d"}-${A}${l?"-ipad":""}.json`,y=a[C]=a[C]??u(C),w;try{w=await y}catch(_e){if(_e instanceof gv)throw _e;o=!0;return}let F=H1(M),O=w.filter(([,_e])=>_e===F);O.length||(O=w.filter(([_e])=>_e.includes(M)));let I=O.length;if(I===0)return;let P=G1(M),[L,,,,k]=I>1?O.map(_e=>[_e,V1(P,_e[2])]).sort(([,_e],[,W])=>_e-W)[0][0]:O[0],X=Number.MAX_VALUE,U,{devicePixelRatio:V}=window,j=h.width*V*h.height*V;for(let _e of k){let[W,te]=_e,pe=W*te,oe=Math.abs(j-pe);oe<X&&(X=oe,U=_e)}if(!U)return;let[,,ie,be]=U;return[X,ie,L,be]}let v=(M,A,C,y,w)=>({device:w,fps:y,gpu:C,isMobile:c,tier:M,type:A}),m,g="";if(d)d=pv(d),m=[d];else{let M=n||W1(Li?.isSafari12,i);if(!M)return v(0,"WEBGL_UNSUPPORTED");let A=Li?.isFirefox?null:M.getExtension("WEBGL_debug_renderer_info");if(d=A?M.getParameter(A.UNMASKED_RENDERER_WEBGL):M.getParameter(M.RENDERER),!d)return v(1,"FALLBACK");g=d,d=pv(d),m=U1(M,d,c)}if(!c&&d==="apple gpu")return v(bv(60,e),"BENCHMARK","apple m-series",60);let x=(await Promise.all(m.map(p))).filter(q1).sort(([M=Number.MAX_VALUE,A],[C=Number.MAX_VALUE,y])=>M===C?A-y:M-C);if(!x.length){let M=d.replace(/,/g,""),A=P1.find(C=>M.includes(C));return A?v(0,"BLOCKLISTED",A):o?v(1,"BENCHMARK_FETCH_FAILED",`${d} (${g})`):v(1,"FALLBACK",`${d} (${g})`)}let[,b,_,E]=x[0];return b===-1?v(0,"BLOCKLISTED",_,b,E):v(bv(b,c?s:e),"BENCHMARK",_,b,E)};function bv(s,e){for(let t=e.length-1;t>=0;t--)if(s>=e[t])return t;return 0}var wv=5e4,yv=s=>s.isInterleavedBufferAttribute?s.data:s,X1=s=>{let e=s.getWorldScale(new T);return Math.max(e.x,e.y,e.z)||1};function Mv(s,e){let t=new Set;for(let i of e){for(let r of Object.values(i.geometry.attributes))t.add(yv(r));i.geometry.index&&t.add(i.geometry.index)}let n=[];return s.traverse(i=>{i.isMesh&&i.geometry&&Object.values(i.geometry.attributes).some(r=>t.has(yv(r)))&&n.push(i)}),n}function Sv(s,e,{workerUrl:t,ratio:n=.2,error:i=.03,far:r=null,farOnly:a=[],keep:o=new Set}){return new Promise((l,c)=>{let h;try{h=new Worker(t,{type:"module"})}catch(m){c(m);return}let u=[],d=performance.now(),f=0,p=(m,g,x,b)=>{let _=m.geometry,E=_.index,M=_.attributes.position;if(!E||!E.array||!M||_.groups.length)return;let A=M.count,C=new Float32Array(A*3);for(let w=0;w<A;w++)C[w*3]=M.getX(w),C[w*3+1]=M.getY(w),C[w*3+2]=M.getZ(w);let y=new Uint32Array(E.array);u.push({id:f,o:m,level:g,before:y.length/3,n:A}),h.postMessage({id:f++,index:y,positions:C,target:Math.max(3,Math.floor(y.length*x/3)*3),error:b/X1(m),lock:g==="near"},[y.buffer,C.buffer])};for(let m of s)p(m,"near",m.userData.lightenRatio||n,m.userData.lightenError||i),r&&p(m,"far",r.ratio,r.error);if(r)for(let m of a)p(m,"far",r.ratio,r.error);if(!u.length){h.terminate(),l([]);return}let v=new Map;h.onerror=m=>{h.terminate(),c(m.error||new Error(m.message))},h.onmessage=({data:{id:m,index:g}})=>{if(v.set(m,g),v.size<u.length)return;h.terminate();for(let _ of e)_.geometry.dispose();let x=new Map;for(let _ of u){let E=v.get(_.id),M=new Oe(_.n<=65536?new Uint16Array(E):E,1),A=_.o.userData.lod||(_.o.userData.lod={near:_.o.geometry.index,far:null,on:"near"});_.level==="near"?(_.o.geometry.setIndex(M),A.near=M):A.far=M;let C=x.get(_.o)||x.set(_.o,[_.o.name,_.before,_.before,_.before]).get(_.o);C[_.level==="near"?2:3]=E.length/3}for(let _ of e)o.has(_.geometry)||Js(_,new Set);let b=[...x.values()];b.forEach(_=>_.push(Math.round(performance.now()-d))),l(b)}})}function Ev({at:s=80,back:e=65}){let t=[],n=new T,i=new T;function r(c){c.geometry.boundingSphere||c.geometry.computeBoundingSphere(),t.push(c)}let a=!1;function o(c){a=!1;for(let h of t){let u=h.userData.lod;if(!u||!u.far)continue;n.copy(h.geometry.boundingSphere.center).applyMatrix4(h.matrixWorld),h.getWorldScale(i);let d=n.distanceTo(c.position)-h.geometry.boundingSphere.radius*Math.max(i.x,i.y,i.z);u.on==="near"&&d>s?(h.geometry.setIndex(u.far),u.on="far",a=!0):u.on==="far"&&d<e&&(h.geometry.setIndex(u.near),u.on="near",a=!0)}}function l(c){return o(c),a}return{add:r,update:l,meshes:t}}var ci="v280",kv,J1=new Promise(s=>{kv=s}),an=new URLSearchParams(location.search).has("dev");an&&document.body.classList.add("dev");var Bv=Promise.resolve(C0).then(b0);L0(Bv);var jt=new URLSearchParams(location.search),Kl=matchMedia("(hover: none) and (pointer: coarse)").matches,Kn={lodOff:!1,lodRangeOff:!1,mirrorKeep:void 0,kuwLoop:!1,shadow:0,noMirror:!1,mirrorEveryFrame:!1,shadowEveryFrame:!1};window.KNOBS=Kn;var{WORLD_URL:$1,GLB_URL:Z1,GLB_ABS:zv,MEADOW_URL:Q1,MEADOW_ABS:eE}=q0(jt,an);window.WORLD_URL=$1;var Rv=Pl?P0(zv,ci,42981988):null,ft=new Ua({powerPreference:Kl?"high-performance":"default",antialias:jt.has("aa"),preserveDrawingBuffer:jt.has("capture")});ft.shadowMap.enabled=!0;ft.shadowMap.type=bl;var Jr=!Kl&&!jt.get("tier")&&!jt.has("capture")?await _v({glContext:ft.getContext(),benchmarksURL:"./gpu-benchmarks"}).catch(()=>null):null,Zf=!!(Jr&&Jr.tier<=1);Jr&&console.info(`gpu: ${Jr.gpu||"?"} rank ${Jr.tier}${Jr.fps?" (~"+Jr.fps+" fps in the table)":""}${Zf?" - the light tier":""}`);var Oi=J0({renderer:ft,q:jt,touchFirst:Kl,dev:an,knobs:Kn,mirrorTarget:()=>Fi&&Fi.getRenderTarget(),onDprChange:()=>bo.resize(),light:Zf,hooks:{samples:s=>bo.setSamples(s),bladeNear:s=>{rp.value=s,Cf({near:s,far:ip.value,from:vo.value.x,to:vo.value.y})}}}),bt=Oi.memory,hr=Oi.TIER;window.TIER=hr;window.applyDpr=Oi.applyDpr;ft.setPixelRatio(Oi.fitDpr(Oi.dpr));ft.setSize(innerWidth,innerHeight);ft.toneMapping=Un;ft.outputColorSpace=mt;document.getElementById("app").appendChild(ft.domElement);var ut=new Ai;ut.background=new xe("#8b95ab");ut.fog=new Ls("#98a0b2",900,3400);var Hv={value:null},Yl={value:new T(.84,.242,.485).normalize()},Qf={value:1},Kf=await(window.GRIDS_FETCH||fetch("./world-grids.bin?v="+ci)).then(async s=>{if(!s.ok)throw new Error("world-grids.bin "+s.status);let e=await s.arrayBuffer(),n=new DataView(e).getUint32(0,!0),i=JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,n)).replace(/\0+$/,"")),r=(l,c)=>{let h=new Int16Array(e,c,l.count),u=new Float32Array(l.count);for(let d=0;d<l.count;d++)u[d]=h[d]/i.scale;return{N:l.N,x0:l.x0,z0:l.z0,cw:l.cw,ch:l.ch,h:u}},a=4+n,o=a+i.island.count*2;return{island:r(i.island,a),ground:r(i.ground,o),profile:i.profile}}),$r={...Kf.profile,originalGround:Kf.ground},Vv=$r.offsets[Ue.nodes.house],Kr={value:1};for(let s of Object.values(Rl.views))for(let e of["eye","target"])s[e][1]+=Vv;var Zs=[],ep={value:new Wn().load("./interior-warm-v1.webp?v="+ci)};Zs.push(ep.value);ep.value.colorSpace=mt;{let s=document.createElement("canvas");s.width=4,s.height=512;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1b558e"),t.addColorStop(.42,"#22629b"),t.addColorStop(.8,"#286ea6"),t.addColorStop(1,"#3a7cae"),e.fillStyle=t,e.fillRect(0,0,4,512);let n=new Ba(s);n.colorSpace=mt;let i=new it(new Wr(2900,48,32),new Dt({map:n,side:Gt,fog:!1,depthWrite:!1}));i.renderOrder=-3,ut.add(i);let r=new Wn().load("./sky_panorama.jpg?v="+ci,d=>{bt?Ll(d,1024):an&&jt.get("sky")==="half"&&Ll(d,1024)});Zs.push(r),r.colorSpace=mt,r.wrapS=Bn,Hv.value=r;let a=2500,o=Math.tan(28.74*Math.PI/180),l=Math.tan(-12.196*Math.PI/180),c=a*.747*(o-l),h=new Dt({map:r,side:Gt,fog:!1,depthWrite:!1,transparent:!0});h.onBeforeCompile=d=>{d.uniforms.uVisibleSun=Yl,d.uniforms.uVisibleSunOn=Qf,d.vertexShader=`varying vec3 vSkyDirection;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSkyDirection=(modelMatrix*vec4(position,1.0)).xyz-cameraPosition;`),d.fragmentShader=Sf+`varying vec3 vSkyDirection;
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`{ float hv = 0.717; float v = vMapUv.y;
         float vv = v < hv ? v : hv + (v - hv) / 1.22;
         vec4 sampledDiffuseColor = texture2D( map, vec2(vMapUv.x, vv) );
         sampledDiffuseColor.rgb=paintedSun(vSkyDirection,sampledDiffuseColor.rgb);
         diffuseColor *= sampledDiffuseColor; }`),d.fragmentShader=d.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
       diffuseColor.a *= smoothstep(0.985, 0.72, vMapUv.y);
       diffuseColor.a *= smoothstep(0.02, 0.16, vMapUv.y);   // bottom seam too`)};let u=new it(new $i(a,a,c,96,1,!0),h);u.position.y=a*.747*l+c/2,u.renderOrder=-2,ut.add(u)}var Gv=uv({canvas:ft.domElement}),{camera:zt,controls:tp,heroFov:Wv,HORIZON:tE,applyHorizon:qv,HERO_POS:nE,LOOKAT:Xv,setCamMode:iE,restoreHero:np,restoreDefault:jv}=Gv;window.LOOKAT=Xv;window.restoreHero=np;window.restoreDefault=jv;var{COLLIDE:Ii,groundY:Kv,registerBox:Cv,buildGroundGrid:rE,collideCamera:Yv}=K0({camera:zt,grid:Kf.island});window.COLLIDE=Ii;window.groundY=Kv;var fo=Y0({camera:zt,controls:tp,canvas:ft.domElement,hud:document.getElementById("hud"),stickEl:document.getElementById("stick"),turnEl:document.getElementById("turn"),collideCamera:Yv,fov0:Wv(innerWidth/innerHeight),touchFirst:Kl,onHeroKey:()=>np()});Gv.bindFly(fo);var{FLY:mo,MOVE:sE,fly:Jv,walk:$v}=fo;window.MOVE=sE;var Hl=[],Di=bt&&!jt.has("fulldetail")?[]:null,Hf=[],Fi=null,Qs=null,Zv=Tl(2.45,$r),{WIND:oi,Wind:go,Grass:ai,Cloth:Bt}=fv({islandTop:Zv,clothWorkerUrl:new URL("./cloth-worker.js?v="+ci,import.meta.url).href,syncCloth:jt.has("syncCloth"),field:bt?[96,48]:[160,80]}),Qv=av({wind:()=>go,collide:Ii,treeDrop:$r.offsets[Ue.nodes.tree],names:Ue.substrings,build:ci});await Qv.ready();var{Tree:Rt,TREE_VOLUME:Ul,CROWN:Yr,LEAF_CUTOUT:Pv,LEAF_SHAPE_DECL:kl,BARK_DECL:aE,BARK_SHAPE:oE,LEAF_SHAPE:Lv,bleedLeafAtlas:cE,markBareTwigs:eb}=Qv,Ni=k0(bt?{keep:.4,mirrorKeep:.3,scale:Math.sqrt(.76/.4),mirrorScale:Math.sqrt(.76/.4),far:{keep:.22,from:30,to:90}}:{}),ip={value:bt?.06:.25},vo={value:new Y(bt?6:45,bt?60:110)},rp={value:bt?.3:1},lE={value:bt?1.6:1e3};Cf({near:rp.value,far:ip.value,from:vo.value.x,to:vo.value.y});var Yf=bt?B0({near:.6,far:.3,from:40,to:90}):null,tb=bt?Ev({at:80,back:65}):null;window.markBareTwigs=eb;window.CROWN=Yr;var nb={level:{value:.02}};function hE(s){let e=s.onBeforeCompile;s.onBeforeCompile=t=>{e&&e(t),t.uniforms.uSea=nb.level,t.uniforms.uWt2=oi.t,t.vertexShader=`varying vec3 vShoreW;
`+t.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
 vShoreW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),t.fragmentShader=`
      uniform float uSea; uniform float uWt2; varying vec3 vShoreW;
      float shHash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float shNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(shHash(i), shHash(i+vec2(1,0)), f.x), mix(shHash(i+vec2(0,1)), shHash(i+vec2(1,1)), f.x), f.y); }
    `+t.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      {
        float h = vShoreW.y - uSea;                       // height above the water NOW
        // damp band: darker, greyer sand for ~10 cm above the waterline
        float damp = (1.0 - smoothstep(0.02, 0.11, h)) * step(-0.5, h);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.90, 0.86, 0.72), damp * 0.9);   // damp golden sand
        // foam: a thin white swash line hugging the waterline, its edge
        // broken by noise that drifts along the shore, pulsing gently
        float n1 = shNoise(vShoreW.xz * 3.0 + vec2(uWt2 * 0.35, -uWt2 * 0.25));
        float n2 = shNoise(vShoreW.xz * 9.0 - vec2(uWt2 * 0.6, uWt2 * 0.4));
        float w = 0.030 + 0.030 * n1;
        float line = 1.0 - smoothstep(0.0, w, abs(h - 0.012 - 0.008 * sin(uWt2 * 1.7 + vShoreW.x * 0.9)));
        float breakup = smoothstep(0.22, 0.80, 0.6 * n1 + 0.4 * n2);   // soft: hard blobs read as pebbles from above
        float foam = line * breakup;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.97, 0.96, 0.92), foam * 0.6);
      }`)},s.needsUpdate=!0}var lr=Yl,Yn={map:{value:null},matrix:{value:new De},size:{value:new Y(2048,2048)},on:{value:0}},ib={value:0},Wl={value:1},Jl={value:1};bt&&(Jl.value=.35);var po={value:1},ql={c:{value:new T},h:{value:new T(1,1,1)}},Xl={c:{value:new et(0,0,1,0)},half:{value:new Y(0,0)}},uE={value:ar.points.slice(0,-1).map((s,e)=>new et(...s,...ar.points[e+1]))},dE=`
  varying vec2 vEntryRest;
  varying float vBladeH;      // height fraction along the blade (0 root .. 1 tip)

  uniform mat4 uShMatrix;
  varying vec4 vShCoord;
  uniform float uWt;
  uniform float uMirror;
  uniform float uLod, uLodFar, uLodNear, uWidenMax; uniform vec2 uLodRamp;
  uniform float uMirrorKeep;   // blade share in the mirror pass
  uniform vec4 uStepC;      // step footprint centre.xz, axis.xz
  uniform vec2 uStepHalf;
  uniform sampler2D uGrassTex;
  uniform vec2 uGrassMin, uGrassSize;
  uniform float uGrassLean, uGrassFlut;
  uniform vec2 uTrunk;
  uniform vec2 uBranch[6];
  uniform float uTreeBase, uTreeH, uFlutter, uTreeW, uLeafScale;
  uniform vec2 uTreeC;
  const float ISLAND_TOP = ${Zv.toFixed(2)};
  float whash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
  float wnoise(vec2 p){
    vec2 i = floor(p), f = fract(p);
    f = f*f*(3.0-2.0*f);
    return mix(mix(whash(i), whash(i+vec2(1,0)), f.x),
               mix(whash(i+vec2(0,1)), whash(i+vec2(1,1)), f.x), f.y);
  }
  // One cadence for grass blades and meadow blooms (cycles per second).
  float meadowFlutterPhase(float time, float seed, float offset) {
    return time * 6.2831853 * (1.30 + 0.90 * seed) + 6.2831853 * offset;
  }
  // Crysis (GPU Gems 3 ch.16) smoothed triangle wave, for leaf flutter
  float stw(float x){ float t = abs(fract(x + 0.5) * 2.0 - 1.0); return t * t * (3.0 - 2.0 * t); }
`;function cr(s,e,t=!1,n=[1,1,1],i=!1,r=!1,a=!1,o=null){let[l,c,h]=n.map(u=>u.toFixed(4));e==="tree"&&o&&(s.defines=Object.assign(s.defines||{},{[o.__define]:""})),s.onBeforeCompile=u=>{if(u.uniforms.uWt=oi.t,e==="tree"&&o)for(let[d,f]of Object.entries(o))d!=="__define"&&(u.uniforms[d]=f);u.uniforms.uMirror=ib,u.uniforms.uLod=Wl,u.uniforms.uLodFar=ip,u.uniforms.uLodNear=rp,u.uniforms.uLodRamp=vo,u.uniforms.uWidenMax=lE,u.uniforms.uMirrorKeep=Jl,u.uniforms.uStepC=Xl.c,u.uniforms.uStepHalf=Xl.half,e!=="blade"&&(u.vertexShader=u.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1")),e==="tree"&&t&&(u.vertexShader=w0+u.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal=leafMotion()*objectNormal;`)),e==="tree"&&(u.vertexShader=_0+u.vertexShader.replace("#include <defaultnormal_vertex>",`objectNormal=trunkRotation(treeAnchor(${t?"_leaf_pivot":"position"}).y)*branchRotation(_bmeta,.55)*branchRotation(_smeta,.85)*objectNormal;
#include <defaultnormal_vertex>`)),e==="blade"&&t&&(u.vertexShader=`#define HAS_HEIGHT
attribute float _height;
`+u.vertexShader),e==="petal"&&t&&(u.vertexShader=`#define HAS_FLOWER_FLEX
attribute float _flower_flex;
`+u.vertexShader),e==="petal"&&r&&(u.vertexShader=`#define HAS_FLOWER_ROOT
attribute vec3 _flower_root;
`+u.vertexShader),e==="blade"&&i&&(u.vertexShader=`#define HAS_PHASE
attribute float _phase;
`+u.vertexShader),e==="blade"&&r&&a?(u.vertexShader=`#define HAS_ROOT
#define ROOT_REL
attribute vec4 _root3q;
uniform vec3 uRootC, uRootH;
uniform float uGrow;
#define _root3 (uRootC + uRootH * _root3q.xyz)
#define _root (_root3.xz)
`+u.vertexShader,u.uniforms.uGrow=po,u.uniforms.uRootC=ql.c,u.uniforms.uRootH=ql.h,u.vertexShader=u.vertexShader.replace("attribute float _height;",`attribute vec4 _height4;
#define _height (_height4.x)`)):e==="blade"&&r&&(u.vertexShader=`#define HAS_ROOT
attribute vec2 _root;
`+u.vertexShader),u.uniforms.uGrassLean=ai.uLean,u.uniforms.uGrassFlut=ai.uFlut,u.uniforms.uGrassTex=ai.uTex,u.uniforms.uGrassMin=ai.uMin,u.uniforms.uGrassSize=ai.uSize,u.uniforms.uTrunk=Rt.uTrunk,u.uniforms.uBranch=Rt.uBranch,u.uniforms.uTreeBase=Rt.uBase,u.uniforms.uTreeH=Rt.uHeight,u.uniforms.uFlutter=Rt.uFlutter,u.uniforms.uTreeC=Rt.uCentre,u.uniforms.uTreeW=Rt.uWidth,u.uniforms.uLeafScale=Ni.uniforms.uLeafScale,u.uniforms.uShMatrix=Yn.matrix,u.uniforms.uShMap=Yn.map,u.uniforms.uShSize=Yn.size,u.uniforms.uShOn=Yn.on,e!=="tree"&&(u.uniforms.uRearEntry=uE,u.uniforms.uRearEntryBounds={value:new et(Math.min(...ar.points.map(d=>d[0]))-.6,Math.min(...ar.points.map(d=>d[1]))-.6,Math.max(...ar.points.map(d=>d[0]))+.6,Math.max(...ar.points.map(d=>d[1]))+.6)},u.vertexShader=`uniform vec4 uRearEntry[8];
`+u.vertexShader,u.fragmentShader=`uniform vec4 uRearEntry[8]; uniform vec4 uRearEntryBounds; varying vec2 vEntryRest; varying float vBladeH;
`+u.fragmentShader.replace("#include <alphatest_fragment>",`
        // Fixed world corridor removes encroaching plants as complete fragments;
        // the original blade/root positions and wind system remain untouched.
        if(all(greaterThan(vEntryRest,uRearEntryBounds.xy)) && all(lessThan(vEntryRest,uRearEntryBounds.zw))) {
        float entryDistance=1000.0;
        for(int i=0;i<8;i++) {
          vec2 a=uRearEntry[i].xy,b=uRearEntry[i].zw,v=b-a;
          float t=clamp(dot(vEntryRest-a,v)/max(dot(v,v),.00001),0.0,1.0);
          entryDistance=min(entryDistance,length(vEntryRest-(a+t*v)));
        }
        ${e==="petal"?"if(entryDistance<.46) discard;":""}
        }
        ${e==="petal"?`// Generated botanical pigment has a neutral backing; key it in
        // both visible and shadow passes, preserving colored pale petal tips.
        #ifdef USE_MAP
        vec3 flowerPigment=texture2D(map,vMapUv).rgb;
        float flowerChroma=max(max(flowerPigment.r,flowerPigment.g),flowerPigment.b)-min(min(flowerPigment.r,flowerPigment.g),flowerPigment.b);
        diffuseColor.a*=smoothstep(.012,.035,flowerChroma);
        #endif
        // the plate's island is one wash at 120 m - no white specks.
        // Beyond ~35 m the blooms take the distant meadow colour instead of
        // popping out (alpha would cut them at the alphaTest edge).
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.262,.223,.188),smoothstep(35.,70.,length(cameraPosition.xz-vEntryRest)));`:""}
        #include <alphatest_fragment>`),u.fragmentShader=si+u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 ${e==="blade"?`diffuseColor.rgb=sceneMeadowPigment(diffuseColor.rgb,vEntryRest);
         // root-to-tip value gradient, so a blade reads as a blade at
         // 1-2 m instead of a flat shard. Mean 1.0 over the blade, so the
         // sub-pixel average at the hero distance is unchanged.
         diffuseColor.rgb*=mix(.84,1.16,clamp(vBladeH,0.,1.));`:""} diffuseColor.rgb *= sceneTurfLight(meadowShadow());`)),u.vertexShader=dE+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        #ifdef ROOT_REL
        transformed *= uGrow * uGrow * (3.0 - 2.0 * uGrow);   // the meadow grows in after the door opens
        transformed += _root3 / vec3(${l}, ${c}, ${h});   // root-relative position -> the blade's place (local units)
        #endif
        vec3 wpos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vEntryRest = wpos.xz;
        ${e==="tree"?`vec3 anchor=treeAnchor(${t?"_leaf_pivot":"wpos"});
             ${t?"transformed.xyz = _leaf_pivot + uLeafScale * (leafMotion()*(wpos-_leaf_pivot));":""}
             transformed.xyz=moveTrunk(moveBranch(transformed.xyz),anchor);`:`vec4 fld = texture2D(uGrassTex, (wpos.xz - uGrassMin) / uGrassSize);
             vec2 lean = fld.rg;                            // metres, tip
             float spd = fld.b;
             // 'transformed' is LOCAL space and this mesh is scaled ~(38,41,38):
             // a field lean of 0.16 added locally used to smear a blade across
             // SEVEN world metres at max wind. Both paths below work in WORLD
             // metres, cap there, then convert the delta back through the
             // inverse scale. Both plants and blades use world-metre bending.
             ${e==="petal"?`// Blooms follow the same gust field and flutter cadence as grass.
                 // One root seed keeps the stem, leaves and petals coherent.
                 vec2 rootXZ=wpos.xz;
                 #ifdef HAS_FLOWER_ROOT
                 rootXZ=_flower_root.xz;
                 vec4 rootField=texture2D(uGrassTex,(rootXZ-uGrassMin)/uGrassSize);
                 lean=rootField.rg;spd=rootField.b;
                 #endif
                 float seed=fract(sin(dot(rootXZ,vec2(12.9898,78.233)))*43758.5453);
                 float variation=fract(sin(seed*78.233+1.7)*43758.5453);
                 float phase=meadowFlutterPhase(uWt,seed,variation);
                 float ll=length(lean);
                 vec2 wd=ll>1e-5?lean/ll:vec2(1.,0.);
                 vec2 bow=lean*uGrassLean*(.75+.5*variation);
                 bow*=inversesqrt(1.+dot(bow,bow)/(.085*.085));
                 vec2 rock=(wd*.55*sin(phase)
                         +vec2(-wd.y,wd.x)*sin(phase*.79+6.2831853*seed+1.3))*uGrassFlut*spd;
                 rock*=inversesqrt(1.+dot(rock,rock)/(.045*.045));
                 vec2 dspW=bow+rock;
                 #ifdef HAS_FLOWER_FLEX
                 float flex = clamp(_flower_flex,0.0,1.0);
                 // Leaf attachments use the same linear interpolation as the
                 // four actual stem rings, avoiding a gap under stronger bends.
                 if(abs(flex-0.1615251)<.0001) flex=0.1661605;
                 if(abs(flex-0.4298958)<.0001) flex=0.4426748;
                 dspW *= flex;
                 #endif
                 transformed.y -= 0.6 * dot(dspW,dspW) / ${c};
                 vec2 dsp = dspW / vec2(${l}, ${h});`:`// height above the ground in blade lengths, baked by the
                 // exporter into the _HEIGHT attribute - the old world-y ramp
                 // only worked on a flat plateau; on the tapered island blades
                 // on the slopes stood still and the top ones slid at the root
                 #ifdef HAS_HEIGHT
                 // the rear-entry corridor and the foundation ring are
                 // rest-pose facts - baked at load into _height and POSITION
                 // (bakeBladeRest), so the 8-segment loop below only runs for
                 // a GLB without the attribute.
                 float hf = clamp(_height, 0.0, 1.0);
                 #else
                 float hf = smoothstep(ISLAND_TOP - 0.35, ISLAND_TOP + 0.65, wpos.y);
                 float treadDistance=1000.;
                 for(int i=0;i<8;i++) {
                   vec2 a=uRearEntry[i].xy,b=uRearEntry[i].zw,v=b-a;
                   float t=clamp(dot(wpos.xz-a,v)/max(dot(v,v),.00001),0.,1.);
                   treadDistance=min(treadDistance,length(wpos.xz-(a+t*v)));
                 }
                 float compressed=1.-smoothstep(.30,1.05,treadDistance);
                 transformed.y-=hf*.72*.78*compressed/${c};
                 hf*=1.-.78*compressed;
                 // Shorten only the ring beside the cottage foundation, retaining rooted motion.
                 vec2 homeDelta=wpos.xz-vec2(-1.75014,-4.38657);
                 vec2 homeLocal=vec2(dot(homeDelta,vec2(.6436,-.7654)),dot(homeDelta,vec2(-.7654,-.6436)));
                 vec2 outside=max(abs(homeLocal)-vec2(6.45,4.26),vec2(0.));
                 float foundation=1.-smoothstep(.25,2.4,length(outside));
                 transformed.y-=hf*.72*.43*foundation/${c};
                 hf*=1.-.43*foundation;
                 #endif
                 vBladeH = hf;
                 float sh = hf * sqrt(hf);                     // bending blade
                 // EVERY STRAND ON ITS OWN. Nothing in here used to differ between neighbouring
                 // blades: they all read the same smooth field cell, so a patch
                 // leaned as one sheet. Two draws, CONSTANT along a blade so it
                 // bends but never tears - r1 is the exporter's per-blade
                 // _phase, r2 is hashed off it. With no attribute (an older
                 // GLB) fall back to a smooth positional field: patch-scale
                 // rather than per blade, but continuous in wpos, so a blade
                 // still cannot come apart.
                 #ifdef HAS_PHASE
                 float r1 = fract(_phase);
                 float r2 = fract(sin(r1 * 78.233 + 1.7) * 43758.5453);
                 #else
                 // No _PHASE in this GLB (any export before 2026-09-10): fall
                 // back to a smooth positional field. Its cell MUST be much
                 // wider than one blade - a realized strand's own footprint is
                 // ~0.45 m, so the first draft's 3.1 (a 0.32 m cell) varied
                 // WITHIN a blade and sheared it; 0.35 is a 2.9 m cell, so the
                 // blade stays coherent and the variation is patch-scale, not
                 // per blade. Re-export for the real per-blade draw.
                 float r1 = wnoise(wpos.xz * 0.35);
                 float r2 = wnoise(wpos.zx * 0.29 + 11.7);
                 #endif
                 const float TAU = 6.2831853;
                 #if defined(HAS_ROOT) && defined(HAS_PHASE)
                 // BLADE LOD. From the hero eye a blade is a fraction
                 // of a pixel wide and the meadow rasterises 21 triangles per
                 // pixel. Beyond ~45 m keep a distance-dependent share of the
                 // blades, chosen by each blade's own random so the choice is
                 // stable, and widen the survivors about their root so the
                 // meadow's coverage and colour statistics are unchanged. A
                 // dropped blade collapses to a point far below the world -
                 // zero area, no raster cost, no shadow (blades cast none).
                 float lodDist = length(cameraPosition.xz - _root);
                 float keep = mix(1.0, mix(uLodNear, uLodFar, smoothstep(uLodRamp.x, uLodRamp.y, lodDist)), uLod);
                 // in the mirror pass the blades are a fraction of a texel
                 // (a 1024^2 target over the whole frame); the same widening
                 // keeps the coverage with fewer of them
                 if (uMirror > 0.5) keep = min(keep, uMirrorKeep);
                 if (r1 > keep) transformed.xyz = vec3(0.0, -1.0e4, 0.0);
                 // a blade rooted under the step's
                 // slab collapses the same way. The box is the slab's
                 // footprint in the house's own frame (STEP, set after load).
                 vec2 sd = _root - uStepC.xy;
                 vec2 sl = vec2(dot(sd, uStepC.zw), dot(sd, vec2(-uStepC.w, uStepC.z)));
                 if (abs(sl.x) < uStepHalf.x && abs(sl.y) < uStepHalf.y) transformed.xyz = vec3(0.0, -1.0e4, 0.0);
                 vec2 fromRoot = (wpos.xz - _root) * (min(1.0 / keep, uWidenMax) - 1.0);   // (the phone caps the widening: at a 0.3 share the survivors read as shards past 1.6x)
                 transformed.x += fromRoot.x / ${l};
                 transformed.z += fromRoot.y / ${h};
                 #endif
                 // A BLADE CANNOT OUTRUN ITS OWN LENGTH ('it stretches too
                 // far... it should have a max length of movement'): the tip
                 // travels at most 50 % of this vertex's height above ground
                 // (world metres), and drops on the TRUE arc, distance to the
                 // root preserved - a gust bows the blade, never smears it.
                 // The cap used to be a hard min() at 0.5*hgt and the raw lean
                 // ran ~10x over it, so EVERY blade clipped to exactly the same
                 // magnitude and only the direction moved: that is the sheet of
                 // water it produced. Two changes fix it, and the SECOND is the
                 // one that survives a gale: (a) the drive is soft-kneed, not
                 // clipped, so lulls still bow less than gusts; (b) the blade's
                 // own random is in the CAP, not only in the drive - scaling
                 // the drive is worthless once the knee saturates (measured:
                 // gain-only kept 39 % neighbour spread at the 1.8 m/s default
                 // but 3 % at the slider's 8 m/s, i.e. the sheet came back),
                 // while a per-blade REACH of 0.26-0.40 of the blade's height
                 // holds 41-46 % spread at every wind speed. Stiff blades stop
                 // short, floppy ones bow further, in a breeze and in a gale.
                 float hgt = hf * 0.72 + 0.02;
                 float cap = hgt * (0.26 + 0.14 * r2);
                 // (1) the GUST stays shared - the field still sweeps the
                 // meadow in rolling waves - but each blade takes it with
                 // its own gain AND its own reach.
                 vec2 leanW = lean * sh * uGrassLean * (0.75 + 0.5 * r2);
                 leanW *= inversesqrt(1.0 + dot(leanW, leanW) / (cap * cap));
                 // (2) FLUTTER is the blade's own: own phase, own frequency
                 // (1.30-2.20 Hz), along and across the wind, a few cm at
                 // the tip in a breeze and nothing at the root. It is added
                 // AFTER the lean's knee (inside it, a saturating gust
                 // annihilated the flutter too) and soft-knees on its own
                 // at 0.10*hgt, which leaves 0.26+0.14+0.10 = 0.50 of the
                 // height: the hard clamp below is then never reached
                 // (measured worst tip travel 0.4746 * height at 8 m/s).
                 vec2 flut = vec2(0.0);
                 if (uMirror < 0.5) {          // sub-texel in the mirror, skipped there
                   float ll = length(lean);
                   vec2 wdir = ll > 1e-5 ? lean / ll : vec2(1.0, 0.0);
                   vec2 wperp = vec2(-wdir.y, wdir.x);
                   float t1 = meadowFlutterPhase(uWt, r1, r2);
                   flut = (wdir * (0.55 * sin(t1))
                         + wperp * sin(t1 * 0.79 + TAU * r1 + 1.3)) * uGrassFlut * spd * sh;
                   float fc = 0.10 * hgt;
                   flut *= inversesqrt(1.0 + dot(flut, flut) / (fc * fc));
                 }
                 vec2 dspW = leanW + flut;
                 dspW *= min(1.0, 0.5 * hgt / max(length(dspW), 1e-5));   // belt and braces
                 transformed.y -= (hgt - sqrt(max(hgt * hgt - dot(dspW, dspW), 0.0))) / ${c};
                 vec2 dsp = dspW / vec2(${l}, ${h});`}
             transformed.x += dsp.x;
             transformed.z += dsp.y;`}
        vShCoord = uShMatrix * vec4((modelMatrix * vec4(transformed, 1.0)).xyz, 1.0);
      }`)},s.needsUpdate=!0}ut.heroCone=20;ut.heroNear=.45;ut.heroForce=-1;ut.debugHero=!1;var Vl={objs:[],logT:0},rb=He.map_fragment.replace("texture2D( map, vMapUv )","mix( texture2D( uFlat, vMapUv ), texture2D( map, vMapUv ), uHero )");rb===He.map_fragment&&console.warn("hero blend: map_fragment sample line not found - painting blend inactive");var sb=He.emissivemap_fragment.replace("texture2D( emissiveMap, vEmissiveMapUv )","mix( texture2D( uFlat, vEmissiveMapUv ), texture2D( emissiveMap, vEmissiveMapUv ), uHero )");sb===He.emissivemap_fragment&&console.warn("hero blend: emissivemap_fragment sample line not found - live-sun mode keeps the painting");function fE(s,e){let t=s.material,n=t.map;s.userData.heroBlend={uFlat:{value:n},uHero:{value:1},centre:new dt().setFromObject(s).getCenter(new T)},new Wn().load("./tex_"+e+"_flat.jpg?v="+ci,r=>{r.flipY=!1,r.colorSpace=mt,r.wrapS=n.wrapS,r.wrapT=n.wrapT,r.minFilter=n.minFilter,r.magFilter=n.magFilter,r.anisotropy=n.anisotropy,r.generateMipmaps=n.generateMipmaps,r.needsUpdate=!0,s.userData.heroBlend.uFlat.value=r},void 0,()=>console.warn("hero blend: no tex_"+e+"_flat.jpg - one texture, blend inactive for",e,"(expected for the house after the PROJECT_HOUSE=0 export; for the tree run scripts/export_web.sh)"));let i=t.onBeforeCompile;t.onBeforeCompile=r=>{i&&i(r),r.uniforms.uFlat=s.userData.heroBlend.uFlat,r.uniforms.uHero=s.userData.heroBlend.uHero,r.fragmentShader=`uniform sampler2D uFlat;
uniform float uHero;
`+r.fragmentShader.replace("#include <map_fragment>",rb).replace("#include <emissivemap_fragment>",sb)},t.customProgramCacheKey=()=>"heroblend-"+s.name,t.needsUpdate=!0,Vl.objs.push(s)}var Vf=new T,Gf=new T;function pE(s){let e=ut.heroCone,t=.35*e,n=ut.heroNear,i=.5*n,r=ut.debugHero&&s-Vl.logT>=1e3;r&&(Vl.logT=s);for(let a of Vl.objs){let o=a.userData.heroBlend;if(ut.heroForce>=0)o.uHero.value=ut.heroForce;else{Vf.subVectors(zt.position,o.centre),Gf.subVectors(nE,o.centre);let l=en.radToDeg(Vf.angleTo(Gf)),c=Vf.length(),h=Gf.length();o.uHero.value=(1-en.smoothstep(l,t,e))*en.smoothstep(c,i*h,n*h)}r&&console.log("hero",a.name,"uHero",o.uHero.value.toFixed(3))}}function mE(s,e,t){let n=s.geometry,i=n.attributes._height,r=n.attributes.position;if(i&&!n.userData.bladeRestBaked){let o=s.matrixWorld.elements,l=r.count,c=[];for(let v=0;v<8;v++){let m=e[v],g=e[v+1];c.push(m&&g?[m[0],m[1],g[0],g[1]]:[0,0,0,0])}let h=(v,m,g)=>{let x=Math.min(Math.max((g-v)/(m-v),0),1);return x*x*(3-2*x)},u=1/t.y,d=performance.now(),f=r.array,p=i.array;for(let v=0;v<l;v++){let m=f[v*3],g=f[v*3+1],x=f[v*3+2],b=o[0]*m+o[4]*g+o[8]*x+o[12],_=o[2]*m+o[6]*g+o[10]*x+o[14],E=Math.min(Math.max(p[v],0),1),M=1e3;for(let[k,X,U,V]of c){let j=U-k,ie=V-X,be=Math.min(Math.max(((b-k)*j+(_-X)*ie)/Math.max(j*j+ie*ie,1e-5),0),1),_e=b-(k+be*j),W=_-(X+be*ie);M=Math.min(M,Math.hypot(_e,W))}let A=1-h(.3,1.05,M),C=E*.72*.78*A;E*=1-.78*A;let y=b+1.75014,w=_+4.38657,F=y*.6436-w*.7654,O=-y*.7654-w*.6436,I=Math.max(Math.abs(F)-6.45,0),P=Math.max(Math.abs(O)-4.26,0),L=1-h(.25,2.4,Math.hypot(I,P));C+=E*.72*.43*L,E*=1-.43*L,f[v*3+1]=g-C*u,p[v]=E}r.needsUpdate=!0,i.needsUpdate=!0,n.userData.bladeRestBaked=!0,console.info(`blades: rest-pose corridor + foundation baked into ${l} verts in ${(performance.now()-d).toFixed(0)} ms`)}for(let o of["normal","uv","_flower_flex"])n.attributes[o]&&n.deleteAttribute(o);let a=n.attributes.color;if(a&&a.array instanceof Float32Array){let o=new Uint8Array(a.count*a.itemSize);for(let l=0;l<o.length;l++)o[l]=Math.round(Math.min(Math.max(a.array[l],0),1)*255);n.setAttribute("color",new Oe(o,a.itemSize,!0))}}function gE(s){let e=s.geometry.userData.bladeChunks,t=s.geometry.index;if(!e||e.length<2||!t)return[s];let n=s.geometry,i=n.attributes.position,r=t.array,a=new T,o=e.map(c=>{let h=new Ve;for(let[d,f]of Object.entries(n.attributes))h.setAttribute(d,f);h.setIndex(new Oe(r.subarray(c.start,c.start+c.count),1));let u=new dt;if(n.userData.meadowRepack&&c.min&&c.max)u.min.set(...c.min).divide(s.scale),u.max.set(...c.max).divide(s.scale);else for(let d=c.start;d<c.start+c.count;d++)u.expandByPoint(a.fromBufferAttribute(i,r[d]));return h.boundingBox=u,h.boundingSphere=u.getBoundingSphere(new Mt),h.userData=n.userData,h});s.geometry=o[0],n.setIndex(null);for(let c of Object.keys(n.attributes))n.deleteAttribute(c);let l=[s];for(let c=1;c<o.length;c++){let h=new it(o[c],s.material);h.name=s.name+"_c"+c,h.userData=s.userData,h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,s.parent.add(h),h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),Hl.push(h),l.push(h)}return console.info(`blades: split into ${o.length} frustum-culled chunks`),l}function Dv(s){let e=performance.now(),t=Cl(s);return an&&(Ze.bake=Ze.bake||[]).push([s.name,Math.round(performance.now()-e)]),t}H0(ft);oo.useWorkers(Math.min(4,Math.max(2,(navigator.hardwareConcurrency||4)-1)));var ab=new MessageChannel,Jf=null;ab.port1.onmessage=()=>{let s=Jf;Jf=null,s&&s()};var vE=()=>new Promise(s=>{Jf=s,ab.port2.postMessage(0)}),jl=0,Wf=async s=>{let e=performance.now();e-jl<80||(jl=e,s&&Ln(s),await vE())},Ze={t0:performance.now()};if(an){let s=(e,t,n)=>{let i=e[t];i&&(e[t]=function(...r){let a=performance.now();Ze[n+"First"]||(Ze[n+"First"]=a),Ze[n+"N"]=(Ze[n+"N"]||0)+1;let o=i.apply(this,r);return o&&o.then?o.then(l=>(Ze[n+"Last"]=performance.now(),l)):o})};s(oo,"decodeGltfBufferAsync","meshopt"),s(window,"createImageBitmap","bitmap")}var Iv=new El().setMeshoptDecoder(oo),ob=Rv?await Rv:null,Gl;try{Gl=await Nf({url:Z1,abs:zv,blob:ob},(s,e)=>{document.getElementById("loading").textContent=`pouring the watercolours\u2026 ${Math.round(100*s/e)}%`,Ln({type:"progress",loaded:s,total:e})})}catch(s){console.error("island_world.glb failed to load",s),Ys("The island could not load."),Ln({type:"error",message:"The island could not load."})}Ln({type:"stage",stage:"decoding"});Ze.fetched=performance.now();Gl&&Iv.parse(Gl,"./",async s=>{Gl=null,ob=null,Ze.parsed=performance.now(),await J1;let e=s.scene;s=null,y0(e,Xt,$r);let t=c=>{let h=c;for(;h.parent;)h=h.parent;return h},n=async c=>{if(!c.isMesh)return;let h=c.geometry.userData&&c.geometry.userData.quant;if(h&&!c.geometry.userData.dequantized){c.geometry.userData.dequantized=!0;let O=performance.now();for(let[P,L]of Object.entries(h)){let k=performance.now(),X=P==="POSITION"?"position":P==="TEXCOORD_0"?"uv":P.startsWith("TEXCOORD_")?"uv"+P.slice(9):P.toLowerCase(),U=c.geometry.attributes[X];if(!U)continue;let V=U.isInterleavedBufferAttribute?U.data.array:U.array;if(!(V instanceof Int16Array))continue;if(Q0.has(P)){c.geometry.setAttribute(X+"q",U),c.geometry.deleteAttribute(X),(c.geometry.userData.quantGpu=c.geometry.userData.quantGpu||{})[X]={c:L.c.slice(),h:L.h.slice()};continue}let j=U.itemSize,ie=U.count,be=new Float32Array(ie*j),_e=U.isInterleavedBufferAttribute?U.data.stride:j,W=U.isInterleavedBufferAttribute?U.offset:0,te=L.c,pe=L.h.map(oe=>oe/32767);for(let oe=0,Re=W;oe<ie;oe++,Re+=_e)for(let we=0;we<j;we++){let B=V[Re+we];be[oe*j+we]=te[we]+pe[we]*(B<-32767?-32767:B)}c.geometry.setAttribute(X,new Oe(be,j)),an&&(Ze.dequantDetail=Ze.dequantDetail||[]).push([c.name,P,+(performance.now()-k).toFixed(1),U.isInterleavedBufferAttribute?"IL":"BA"])}let I=performance.now();c.geometry.boundingBox=null,c.geometry.boundingSphere=null,c.geometry.computeBoundingSphere(),an&&(Ze.dequant=Ze.dequant||[]).push([c.name,Math.round(performance.now()-O),"sphere",Math.round(performance.now()-I)])}if(c.geometry.attributes._tree_id&&ev(c.geometry,t(c)),c.name.startsWith(Ue.prefixes.treeTable)){c.visible=!1;return}if(c.name.includes(Ue.substrings.clothes)){let O=c.geometry.attributes.normal;if(O&&!(O.array instanceof Float32Array)){let I=new Float32Array(O.count*3);for(let P=0;P<O.count;P++)for(let L=0;L<3;L++)I[P*3+L]=O.getComponent(P,L);c.geometry.setAttribute("normal",new Oe(I,3))}}c.name.includes(Ue.substrings.bench)&&(c.position.set(26.8,c.position.y,-2.3),c.updateWorldMatrix(!0,!1));let u=c.material,d=u&&(u.emissiveMap||u.map)||null;d&&(d.colorSpace=mt,c.userData.uniformPlaster=!!u?.name?.startsWith(Ue.prefixes.housePlaster),u?.name?.startsWith(Ue.prefixes.housePart)&&(d.anisotropy=Math.min(8,ft.capabilities.getMaxAnisotropy()))),c.geometry.attributes.color_1&&(c.geometry.setAttribute("color",c.geometry.attributes.color_1),c.geometry.deleteAttribute("color_1"));let f=!!c.geometry.attributes.color,p=!!u?.name?.startsWith(Ue.prefixes.path);p&&d&&(d.anisotropy=Math.min(8,ft.capabilities.getMaxAnisotropy()));let v=!!u?.name?.includes(Ue.substrings.bark),m=!!u?.name?.includes(Ue.substrings.leaf),g=!!u?.name?.endsWith(Ue.substrings.oil)&&(v||m),x=m,b=!x&&u&&u.name&&u.name.includes(Ue.substrings.petal);if(c.name===Ue.nodes.water){Qs=Z0({renderer:ft,camera:zt,scene:ut,memoryTier:bt,time:oi.t,shadow:Yn,boatWaterline:Bv,dev:an&&jt.get("wdev")?jt.get("wdev").split(","):[],mirror:{MIRROR:ib,MIRROR_KEEP:Jl,LOD:Wl,knobs:Kn,applyBladeLod:Pf,skip:Hf,leaf:Ni}}),Fi=Qs.mesh,c.visible=!1;return}let _=new Dt({map:d,vertexColors:x||v||p?f:f&&!d,side:Vt,fog:!0});_.name=u?.name||"",u?.name===Ue.materials.housePaintRetint&&_.color.setRGB(.86,.82,.76),(u?.name===Ue.materials.boat||u?.name===Ue.materials.rope)&&I0(_,c,u.name===Ue.materials.rope),!d&&!f&&u&&_.color.copy(u.emissive&&u.emissive.getHex()?u.emissive:u.color),u?.name===Ue.materials.path0&&(_.transparent=!0,_.depthWrite=!1,_.forceSinglePass=!0),b&&(_.alphaTest=.5,_.transparent=!0),(b||x)&&(c.renderOrder=1),x&&(_.alphaTest=.5,_.transparent=!1,f||console.warn("tree cards: no COLOR_0 in the GLB - the per-card tint is missing (re-run scripts/export_web.sh)"),d||console.warn("tree cards: no atlas texture in the GLB")),u?.name?.startsWith(Ue.prefixes.houseWindow)&&(_.onBeforeCompile=O=>{O.uniforms.uWindowSky=Hv,O.uniforms.uVisibleSun=Yl,O.uniforms.uVisibleSunOn=Qf;let I=Rl.materials[u.name]||{reflection:1,blur:1};O.uniforms.uGlazing={value:new Y(I.reflection,I.blur)},O.uniforms.uRoomPaint=ep,O.uniforms.uRoomSettings={value:new Y(I.interior||0,I.roomVariation||0)},O.uniforms.uBlindOpening={value:I.blindOpening||0},O.uniforms.uFrontDaylight={value:I.frontDaylight||0},O.uniforms.uRoomSun=lr,O.uniforms.uFrontGlazing={value:I.frontGlazing||0},O.uniforms.uSideCurtains={value:I.sideCurtains||0},O.uniforms.uGlazingLift={value:I.lift||0},O.vertexShader=`varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
`+O.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          vGlassWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          vGlassNormal = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix);
          vGlassUv = uv;`),O.fragmentShader=Sf+`uniform sampler2D uWindowSky,uRoomPaint; uniform vec2 uGlazing,uRoomSettings; uniform float uBlindOpening,uFrontDaylight,uFrontGlazing,uSideCurtains,uGlazingLift; uniform vec3 uRoomSun; varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
`+O.fragmentShader.replace("#include <opaque_fragment>",`
          vec2 q = vGlassUv;
          // Exported image UVs start at the top; room masks use bottom-up height.
          if(uFrontDaylight>0.) q.y=1.-q.y;
          float px = smoothstep(.060,.074,q.x)*(1.0-smoothstep(.468,.485,q.x))
                   + smoothstep(.530,.549,q.x)*(1.0-smoothstep(.928,.946,q.x));
          float py = smoothstep(.039,.056,q.y)*(1.0-smoothstep(.480,.497,q.y))
                   + smoothstep(.517,.534,q.y)*(1.0-smoothstep(.937,.955,q.y));
          vec3 eye = normalize(cameraPosition-vGlassWorld);
          vec3 n = normalize(vGlassNormal);
          vec2 paneId=step(vec2(.5),q);
          vec3 acrossGlass=normalize(cross(vec3(0,1,0),n));
          float ripple=sin(q.y*18.+paneId.x*1.8)*.005+sin(q.x*23.+paneId.y*2.3)*.003;
          vec3 glassNormal=normalize(n+acrossGlass*ripple+vec3(0,sin(q.y*13.)*.003,0));
          vec3 ray = reflect(-eye,glassNormal);
          float u = fract(atan(ray.x,ray.z)/6.28318530718);
          float v = (ray.y/max(length(ray.xz),.001)/.747+.216134)/(.548344+.216134);
          v = v < .717 ? v : .717+(v-.717)/1.22;
          vec2 envUv = vec2(u,clamp(v,.16,.97));
          vec3 sky = texture2D(uWindowSky,envUv).rgb*.5;
          sky += texture2D(uWindowSky,envUv+vec2(.0025,.004)*uGlazing.y).rgb*.25;
          sky += texture2D(uWindowSky,envUv-vec2(.0025,.004)*uGlazing.y).rgb*.25;
          sky=paintedSun(ray,sky);
          sky=mix(sky,vec3(.62,.68,.78),uGlazingLift);
          float fresnel = .14+.42*pow(1.0-abs(dot(n,eye)),5.0);
          // Warm linen remains visible through the glass. Blue-gray exposed
          // panes carry more reflected sky; this follows each painted cloth edge.
          float exposedGlass = smoothstep(.60,.88,diffuseColor.b/max(diffuseColor.r,.001));
          // Recessed painted room: parallax is confined to clear glass, so
          // the linen, frame and glazing remain fixed in the window plane.
          vec3 across=normalize(cross(vec3(0,1,0),n));
          float faceOn=max(.28,abs(dot(eye,n)));
          vec2 roomShift=vec2(dot(eye,across),eye.y)/faceOn;
          vec2 roomUv=vec2((q.x-.50)*1.8,q.y)*.76+vec2(.12,.12);
          if(uBlindOpening>0.0) roomUv=q*.76+vec2(.12,.12);
          if(uFrontDaylight>0. && uBlindOpening>0.) roomUv=vec2(q.x,q.y/max(uBlindOpening,.001))*.76+vec2(.12,.12);
          if(uSideCurtains>0.) roomUv=vec2((q.x-.5)*1.6+.5,q.y*.86+.07);
          roomUv-=clamp(roomShift,vec2(-1.6),vec2(1.6))*.09;
          roomUv.x+=uRoomSettings.y;
          vec3 room=texture2D(uRoomPaint,clamp(roomUv,vec2(.025),vec2(.975))).rgb;
          float opening=smoothstep(.51,.54,q.x);
          if(uBlindOpening>0.0) opening=1.0-smoothstep(uBlindOpening-.015,uBlindOpening,q.y);
          // Follow the actual painted side-curtain silhouette, not a top-down cut.
          if(uSideCurtains>0.) {
            // Smooth silhouette follows the gathered painting's tied side panels.
            // Do not classify glass by color: reflected warm clouds are also glass.
            float edge=.155+.155*pow(clamp(abs(q.y-.535)/.46,0.,1.),.70);
            opening=smoothstep(edge,edge+.025,q.x)*(1.-smoothstep(1.-edge-.025,1.-edge,q.x));
          }
          float roomMask=px*py*opening*uRoomSettings.x;
          // Daylight lifts the painted room while keeping furniture contrast.
          // This is confined to the two open front windows and their clear panes.
          float roomSun=max(0.,dot(n,normalize(uRoomSun)));
          vec3 daylightRoom=room*(.95+.30*roomSun)+vec3(.105,.067,.035);
          vec3 roomLight=mix(room*.62,daylightRoom,uFrontDaylight);
          if(uFrontGlazing>0.) {
            // Recessed linen catches diffuse daylight; keep folds quiet behind glass.
            float cloth=(1.-opening*uSideCurtains)*px*py;
            vec3 linen=outgoingLight*1.08;
            float tone=dot(linen,vec3(.2126,.7152,.0722));
            linen=mix(linen,vec3(tone)*vec3(1.06,1.0,.90),.28);
            outgoingLight=mix(outgoingLight,linen,cloth);
            // A small warm glimpse, with color/furniture softened by daylight.
            roomLight=room*.56+vec3(.16,.125,.075);
          }
          outgoingLight=mix(outgoingLight,roomLight,roomMask*.34);
          exposedGlass=mix(exposedGlass,opening,uRoomSettings.x);
          float sheen = mix(.22,1.0,exposedGlass)*uGlazing.x;
          float reflectionWeight=clamp(fresnel*sheen,0.,.56);
          if(uFrontGlazing>0.) {
            // The same glass covers curtain and opening. View-angle reflectance
            // increases toward grazing angles; the wooden sash stays outside it.
            reflectionWeight=clamp((.46+.34*pow(1.-abs(dot(n,eye)),5.))*uGlazing.x,0.,.72);
          }
          outgoingLight = mix(outgoingLight,sky*.92,px*py*reflectionWeight);
          #include <opaque_fragment>`)},_.customProgramCacheKey=()=>"painted-window-glass-v221"),c.userData.uniformPlaster&&R0(_,Xt,Af,lr,Yn,si,Kr);let E=!!u?.name?.startsWith(Ue.prefixes.houseChimney),M=!!u?.name?.startsWith(Ue.prefixes.houseFlashing);(E||M)&&E0(_,Xt,lr,Yn,si,Kr,M);let A=c.name.includes(Ue.substrings.bench);A&&M0(_,lr,Yn,si,Kr);let C=!!u?.name?.startsWith(Ue.prefixes.houseGarden);if((C||p)&&S0(_,lr,Yn,si,Kr,p),u?.name?.startsWith(Ue.materials.houseSillFlowers)){c.updateWorldMatrix(!0,!1);let O=new Ge().setFromMatrix4(c.matrixWorld).invert();Ef(_,ai,oi.t,O);let I=new ti({depthPacking:Xr,side:Vt});Ef(I,ai,oi.t,O),c.customDepthMaterial=I,c.frustumCulled=!1}if(c.material=_,c.userData.basic=_,c.userData.oilTree=g,c.userData.keepPainted=C||A||E||M||c.userData.uniformPlaster||p||f&&!d||b||!g&&(v||m),Hl.push(c),T0(c.name,u?.name)?(c.castShadow=!(bt&&(v||c.name.includes(Ue.substrings.clothes))),c.receiveShadow=!0,bt&&(v||c.name.includes(Ue.substrings.clothes))&&Hf.push(c),bt&&v&&(c.userData.lightenRatio=.1,c.userData.lightenError=.06),bt&&c.name.includes(Ue.substrings.clothes)&&(c.userData.lightenRatio=.3),c.name.includes(Ue.substrings.house)?Cv(c,Ii.pad):(c.name.includes(Ue.substrings.bench)||c.name.includes(Ue.substrings.clothes))&&Cv(c,.8)):c.receiveShadow=!0,g&&m&&(c.receiveShadow=!0),c.name===Ue.nodes.meadow||c.parent?.name===Ue.nodes.meadow){let O=t(c).getObjectByName(Ue.nodes.meadowTable),I=O&&(O.geometry||O.children[0]?.geometry);if(!I){console.warn("meadow repack: no WEB_meadow_table");return}let P=c.geometry,L=P.userData||{};Ln({type:"stage",stage:"expanding"});let k=L.patterns||[],X={root:I.attributes.position,col:I.attributes.color||null,ph:I.attributes._phase,cnt:I.attributes._count,pat:I.attributes._pattern},U=!!P.attributes.color,V=X.root.count,j=P.attributes.position.count,ie=performance.now();O.updateWorldMatrix(!0,!1);let be=(O.geometry?O:O.children[0]).matrixWorld,_e=new T,W=new Int16Array(j*4),te=U?null:new Uint8Array(j*3),pe=new Uint16Array(j),oe=k.map(z=>z.length/3),Re=bt&&!jt.has("fullmeadow"),we=0,B=0,fe=new Uint32Array(V+1),Z=new Uint32Array(V+1),se=new Uint16Array(V),ee=new Float32Array(V*3);for(let z=0;z<V;z++){(z&16383)===0&&z&&await Wf({type:"stage",stage:"expanding",frac:.6*z/V});let me=Math.round(X.root.getX(z)*32767),ce=Math.round(X.root.getY(z)*32767),de=Math.round(X.root.getZ(z)*32767);_e.set(me,ce,de).divideScalar(32767).applyMatrix4(be),ee[z*3]=_e.x,ee[z*3+1]=_e.y,ee[z*3+2]=_e.z;let Te=X.cnt.getX(z),ue=Math.round(X.ph.getX(z)*65535);if(fe[z]=we,se[z]=ue,Z[z]=B,B+=Te,!(Re&&ue>=32768)){for(let Se=0;Se<Te;Se++){let Le=(we+Se)*4;W[Le]=me,W[Le+1]=ce,W[Le+2]=de,pe[we+Se]=ue}if(te){let Se=Math.round(X.col.getX(z)*255),Le=Math.round(X.col.getY(z)*255),ye=Math.round(X.col.getZ(z)*255);for(let ge=0;ge<Te;ge++)te[(we+ge)*3]=Se,te[(we+ge)*3+1]=Le,te[(we+ge)*3+2]=ye}we+=Te}}fe[V]=we,Z[V]=B,B!==j&&console.warn("meadow repack: vertex count mismatch",B,j);let he=z=>fe[z+1]>fe[z];{let z=new T,me=new ht,ce=new T;be.decompose(z,me,ce),Math.abs(me.w)<.9999&&console.warn("meadow repack: the table node is rotated; roots will be off"),ql.c.value.copy(z),ql.h.value.copy(ce)}P.attributes._height&&!P.attributes._height4&&(P.setAttribute("_height4",P.attributes._height),P.deleteAttribute("_height"));let re={},Ee=z=>{let me=z.isInterleavedBufferAttribute?z.data.array:z.array,ce=z.itemSize,de=z.isInterleavedBufferAttribute?z.data.stride:ce,Te=z.isInterleavedBufferAttribute?z.offset:0,ue=new me.constructor(we*ce);for(let Se=0;Se<V;Se++){let Le=fe[Se+1]-fe[Se];if(!Le)continue;let ye=fe[Se]*ce,ge=Z[Se]*de+Te;for(let Fe=0;Fe<Le;Fe++,ye+=ce,ge+=de)for(let ze=0;ze<ce;ze++)ue[ye+ze]=me[ge+ze]}return new Oe(ue,ce,z.normalized)};for(let[z,me]of Object.entries(P.attributes))re[z]=Re?Ee(me):me;Re&&await Wf(),re._root3q=new yn(new Hn(Re?W.subarray(0,we*4):W,4),3,0,!0),re._phase=new Oe(Re?pe.subarray(0,we):pe,1,!0),te&&(re.color=new Oe(Re?te.subarray(0,we*3):te,3,!0));let Pe=(z,me,ce)=>z.isInterleavedBufferAttribute?new yn(z.data,z.itemSize,z.offset+me*z.data.stride,z.normalized):new Oe(z.array.subarray(me*z.itemSize,ce*z.itemSize),z.itemSize,z.normalized),N=I.userData||{},R=N.bladeChunks&&N.bladeChunks.length?N.bladeChunks:[{bladeStart:0,bladeCount:V}],q=[];for(let z=0;z<R.length;z++){let me=R[z],ce=me.bladeStart+me.bladeCount,de=[-1e9,-1e9,-1e9],Te=[1e9,1e9,1e9];for(let ye=me.bladeStart;ye<ce;ye++)for(let ge=0;ge<3;ge++){let Fe=ee[ye*3+ge];Fe>de[ge]&&(de[ge]=Fe),Fe<Te[ge]&&(Te[ge]=Fe)}let ue=me.max?[0,1,2].map(ye=>Math.max(me.max[ye]-de[ye],Te[ye]-me.min[ye],0)):[1,1,1],Se=Math.ceil(me.bladeCount/4),Le=me.bladeStart;for(;Le<ce;){let ye=Le,ge=0;for(;ye<ce&&ye-Le<Se;){let ke=fe[ye+1]-fe[ye];if(ge+ke>65535)break;ge+=ke,ye++}ye===Le&&(ye=Le+1);let Fe=ye-Le,ze=new Float64Array(Fe);for(let ke=0;ke<Fe;ke++)ze[ke]=se[Le+ke]*1048576+ke;ze.sort();let at=0;for(let ke=Le;ke<ye;ke++)he(ke)&&(at+=oe[X.pat.getX(ke)]||0);let We=new Uint16Array(at*3),S=new Float32Array(Fe),H=new Uint32Array(Fe),K=fe[Le],le=fe[ye],ve=0;for(let ke=0;ke<Fe;ke++){let ot=Le+ze[ke]%1048576,Xe=se[ot];if(he(ot)){let yt=k[X.pat.getX(ot)],pt=fe[ot]-K;for(let En=0;En<yt.length;En++)We[ve++]=pt+yt[En]}S[ke]=Xe===65535?0:Math.fround(Xe/65535),H[ke]=ve}let qe=[0,1,2].map(ke=>{let ot=1e9;for(let Xe=Le;Xe<ye;Xe++)ot=Math.min(ot,ee[Xe*3+ke]);return ot-ue[ke]}),Je=[0,1,2].map(ke=>{let ot=-1e9;for(let Xe=Le;Xe<ye;Xe++)ot=Math.max(ot,ee[Xe*3+ke]);return ot+ue[ke]});q.push({vA:K,vB:le,index:We,min:qe,max:Je,lodR1:S,lodEnd:H}),Le=ye}await Wf({type:"stage",stage:"expanding",frac:.6+.4*(z+1)/R.length})}O.removeFromParent(),I.dispose(),Ze.meadow=performance.now(),console.info(`meadow repack: ${V} blades, ${Re?we+" of "+j+" verts (phone: half the blades)":j+" verts"}, ${k.length} patterns, ${q.length} sub-chunks (uint16) expanded in ${(performance.now()-ie).toFixed(0)} ms`),c.updateWorldMatrix(!0,!1);let ne=new T;c.matrixWorld.decompose(new T,new ht,ne),_.vertexColors=!0,_.needsUpdate=!0,cr(_,"blade",!0,ne.toArray(),!0,!0,!0);let ae=[];q.forEach((z,me)=>{let ce=new Ve;for(let[ue,Se]of Object.entries(re))ce.setAttribute(ue,Pe(Se,z.vA,z.vB));ce.setIndex(new Oe(z.index,1));let de=new dt;de.min.set(...z.min).divide(c.scale),de.max.set(...z.max).divide(c.scale),ce.boundingBox=de,ce.boundingSphere=de.getBoundingSphere(new Mt),ce.userData=P.userData;let Te;me===0?(Te=c,c.geometry=ce):(Te=new it(ce,c.material),Te.name=c.name+"_c"+me,Te.userData=c.userData,Te.castShadow=c.castShadow,Te.receiveShadow=c.receiveShadow,c.parent.add(Te),Te.position.copy(c.position),Te.quaternion.copy(c.quaternion),Te.scale.copy(c.scale),Hl.push(Te)),ae.push(Te),co.push({mesh:Te,c:z})}),P.dispose(),console.info(`blades: ${ae.length} frustum-culled sub-chunks`),c.userData.keepPainted=!0,c.userData.shadowRole={material:u?.name,cast:!1,receive:!0,response:"meadow"};return}if(c.name===Ue.nodes.meadowTable||c.parent?.name===Ue.nodes.meadowTable){c.visible=!1;return}let y=(u?.name||"").startsWith(Ue.prefixes.housePart);if(f&&!d&&!p&&!C&&!y){c.updateWorldMatrix(!0,!1);let O=new T;c.matrixWorld.decompose(new T,new ht,O),mE(c,ar.points,O),cr(_,"blade",!!c.geometry.attributes._height,O.toArray(),!!c.geometry.attributes._phase,!!c.geometry.attributes._root),c.geometry.attributes._root||console.warn("meadow: no _root attribute - blade LOD inactive (run scripts/optimize_glb.sh)"),gE(c),c.geometry.attributes._phase||console.warn("meadow: no _phase attribute in the GLB - blades fall back to a patch-scale pseudo-random (re-export for per-blade wind)")}else if(b){c.updateWorldMatrix(!0,!1);let O=new T;if(c.matrixWorld.decompose(new T,new ht,O),cr(_,"petal",!!c.geometry.attributes._flower_flex,O.toArray(),!1,!!c.geometry.attributes._flower_root),Yf&&c.geometry.index&&c.geometry.attributes._flower_root){let P=c.geometry.attributes._flower_root;Yf.attach(c,L=>{let k=Math.sin(P.getX(L)*12.9898+P.getZ(L)*78.233)*43758.5453;return k-Math.floor(k)})}let I=new ti({depthPacking:Xr,map:d,alphaTest:.5,side:Vt});cr(I,"petal",!!c.geometry.attributes._flower_flex,O.toArray(),!1,!!c.geometry.attributes._flower_root),I.customProgramCacheKey=()=>"petal-depth-v172",c.customDepthMaterial=I,c.castShadow=!bt,bt&&Hf.push(c)}else if(c.parent&&c.parent.name===Ue.nodes.island&&d&&!b&&!p)hE(_),Ii.grid||setTimeout(()=>{Ii.grid||rE(c)},1500);else if(c.name===Ue.nodes.tree||v){let O=Dv(c);Rt.init(O);{let L=c.geometry.attributes.position,k=O.min.y+.04*(O.max.y-O.min.y),X=0,U=0,V=0;for(let j=0;j<L.count;j++)L.getY(j)<=k&&(X+=L.getX(j),U+=L.getZ(j),V++);Ii.trunk={x:V?X/V:Rt.cx,z:V?U/V:Rt.cz,r:2.2,top:Rt.base+.55*Rt.height},console.log(`tree: root (${Ii.trunk.x.toFixed(2)}, ${Ii.trunk.z.toFixed(2)}) from ${V} verts, crown centre (${Rt.cx.toFixed(2)}, ${Rt.cz.toFixed(2)}), ${Rt.height.toFixed(1)} m tall`)}let I=Uf(c.geometry);cr(_,"tree",!1,[1,1,1],!1,!1,!1,I);let P=new ti({depthPacking:Xr,side:Vt});if(cr(P,"tree",!1,[1,1,1],!1,!1,!1,I),P.customProgramCacheKey=()=>"wood-depth-v166",v&&Sn(c.geometry,"_sroot")){let L=(k,X)=>{let U=k.onBeforeCompile;k.onBeforeCompile=V=>{U&&U(V),V.uniforms.uCrownMask=Yr.mask,V.uniforms.uCrownBox=Yr.box,V.uniforms.uLeafKeep=Ni.uniforms.uLeafKeep,V.vertexShader=kl+aE+`varying vec3 vBarkWorld;
`+V.vertexShader.replace("#include <project_vertex>",oE+`
 vBare = _bare; vBarkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#include <project_vertex>`),X&&(V.fragmentShader=kl+`varying float vBare; varying vec3 vBarkWorld;
`+V.fragmentShader.replace("#include <map_fragment>",`
              { vec2 cm = clamp((vBarkWorld.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
                if (vBarkWorld.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.45) discard;
                if (vBare > 0.5) discard; }
              #include <map_fragment>`))}};L(_,!0),L(P,!1),P.customProgramCacheKey=()=>"wood-depth-v224"}c.customDepthMaterial=P}else if(x){let O=Dv(c);Rt.init(O);let I=Uf(c.geometry);if(cr(_,"tree",Sn(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,I),Sn(c.geometry,"_leaf_pivot")&&c.geometry.index){let L=$s(c.geometry,"_leaf_seed");Ni.attach(c,k=>L.getX(k))}g&&m&&cE(d);let P=_.onBeforeCompile;if(_.onBeforeCompile=L=>{if(P&&P(L),g){L.uniforms.uOilSun=lr,L.uniforms.uOilLive=Kr,L.uniforms.uCanopyC=Ul.centers,L.uniforms.uCanopyR=Ul.radii,L.uniforms.uCanopyRight=Ul.right,L.uniforms.uCanopyDepth=Ul.depth;let k=`uniform vec3 uCanopyC[6]; uniform vec3 uCanopyR[6];
            uniform vec3 uCanopyRight; uniform vec3 uCanopyDepth;
            float canopyTransmission(vec3 p,vec3 sun) {
              float thickness=0.0;
              for(int i=0;i<6;i++) {
                vec3 offset=p-uCanopyC[i];
                vec3 o=vec3(dot(offset,uCanopyRight),offset.y,dot(offset,uCanopyDepth))/uCanopyR[i];
                vec3 d=vec3(dot(sun,uCanopyRight),sun.y,dot(sun,uCanopyDepth))/uCanopyR[i];
                float a=dot(d,d),b=dot(o,d),c=dot(o,o)-1.0,disc=b*b-a*c;
                if(disc>0.0) {
                  float nearT=(-b-sqrt(disc))/a,farT=(-b+sqrt(disc))/a;
                  thickness+=max(0.0,farT-max(.12,nearT));
                }
              }
              return exp(-thickness*.78);
            }
            `,X=`uniform vec3 uOilSun; uniform float uOilLive;
`+k,U=Sn(c.geometry,"_leaf_pivot")?Lv:"";U&&(L.uniforms.uCrownMask=Yr.mask,L.uniforms.uCrownBox=Yr.box,L.uniforms.uLeafKeep=Ni.uniforms.uLeafKeep);let V=Sn(c.geometry,"_leaf_seed");L.vertexShader=X+(U?kl:"")+`varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed;
`+L.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
 vOilNormal = inverseTransformDirection(normalize(transformedNormal), viewMatrix);`).replace("#include <project_vertex>",`${U}
             vOilPosition = (modelMatrix * vec4(transformed,1.0)).xyz;
             vCanopyVis = canopyTransmission(${Sn(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"}, normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)));
             // which side of the crown this leaf is on, lit (+1) to shade (-1).
             // the
             // form light comes from the upper right, so the split runs top
             // to underside, not just right to left
             vSunSide = dot(normalize(${Sn(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"} - vec3(uTreeC.x, uTreeBase + 0.72 * uTreeH, uTreeC.y)), normalize(normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)) + vec3(0.0, 0.8, 0.0)));
             vLeafSeed = ${V?"_leaf_seed":"0.5"};
             #include <project_vertex>`),L.fragmentShader=si+k+`uniform vec3 uOilSun; uniform float uOilLive; varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed; varying float vLightBias;
            `+L.fragmentShader.replace("#include <map_fragment>",Pv).replace("#include <opaque_fragment>",`
              vec3 sunDir=normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive));
              // The light is decided PER LEAF, the way a painter lays
              // a stroke - lit or shade - and the crown's form only moves the
              // threshold. A leaf's score: how much it faces the lifted key
              // (its top or its underside), how far out on the shell it sits
              // (canopy transmission), and its own random. On the sun side
              // the threshold is low - most strokes lit, the undersides dark;
              // on the shade side it is high - a few lit flecks over deep
              // green. A per-leaf value jitter keeps neighbours from matching.
              // (Earlier rounds blended smooth terms into one lightAmount, and the
              // form term dominated: two tones.)
              vec3 leafKey=normalize(sunDir+vec3(0.,.6,0.));
              float facing=clamp(dot(normalize(vOilNormal),leafKey)*.5+.5,0.,1.);
              // the light follows the
              // CLUSTERS. Each fragment traces its own path to the sun through
              // the six lobes fitted to the canopy - a lobe's top is a short
              // path (lit), its underside a long one (dark), and the lobes
              // behind shade the ones in front - so every cluster gets a lit
              // crest and a dark belly, top to bottom, as in the plate. That
              // is the main term of the score now; the crown-wide side is
              // only a mild bias (letting it dominate gave two tones).
              float shell=pow(canopyTransmission(vOilPosition,sunDir),.7);
              float form=smoothstep(-0.55,0.65,vSunSide);
              float r1=fract(vLeafSeed*13.37), r2=fract(vLeafSeed*47.11+.31);
              float score=0.45*facing+0.60*shell+0.28*(r1-0.5);
              // the crown's own shadow map (leaf-scale, noisy) moves the
              // threshold instead of dimming the stroke.
              // lower thresholds (the plate's
              // crown is lit over more than half its area, median L 112)
              // and a transition twice as wide, so a stroke can be half
              // lit and the shell's gradation shows within a leaf
              // the painted bias (crown mask, green channel) moves the
              // threshold - the painting's lighter spots and the top lobe's dark belly
              float thr=mix(0.66,0.33,form)+0.10*(1.0-meadowShadow())-0.6*vLightBias;
              float lit=smoothstep(thr-0.22,thr+0.22,score);
              float brush=clamp(dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))/.21,.70,1.18);
              // three tones (linear); the range shortened at both ends and
              // every tone pulled toward the meadow's green
              vec3 shadeCol=vec3(.050,.080,.028);
              vec3 midCol=vec3(.13,.20,.045);
              vec3 litCol=mix(vec3(.38,.50,.08),vec3(.47,.59,.12),form);
              vec3 col=lit<0.5?mix(shadeCol,midCol,lit*2.0):mix(midCol,litCol,(lit-0.5)*2.0);
              col*=0.86+0.28*r2;
              outgoingLight=col*brush;
              #include <opaque_fragment>`)}L.fragmentShader=L.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
  totalEmissiveRadiance *= vColor.rgb;
#endif`)},g){let L=new ti({depthPacking:Xr,map:d,alphaTest:.5,side:Vt});cr(L,"tree",Sn(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,I);let k=L.onBeforeCompile;L.onBeforeCompile=X=>{k(X),Sn(c.geometry,"_leaf_pivot")&&(X.uniforms.uCrownMask=Yr.mask,X.uniforms.uCrownBox=Yr.box,X.uniforms.uLeafKeep=Ni.uniforms.uLeafKeep,X.vertexShader=kl+X.vertexShader.replace("#include <project_vertex>",Lv+`
#include <project_vertex>`)),X.fragmentShader=X.fragmentShader.replace("#include <map_fragment>",Pv)},L.customProgramCacheKey=()=>"leaf-depth-v223-"+c.name,c.customDepthMaterial=L}_.customProgramCacheKey=()=>"treecards-"+c.name,console.log(`tree cards: ${c.geometry.attributes.position.count} verts, tint ${f?"COLOR_0":"none"}, canopy ${Rt.height.toFixed(1)} m x ${Rt.uWidth.value.toFixed(1)} m`)}else c.name.includes(Ue.substrings.clothes)&&(Bt.pending=c);let w=f&&!d&&!p&&!C&&!(u?.name||"").startsWith(Ue.prefixes.housePart)||b,F=c.userData.uniformPlaster||E||M||A||C||p||x||w;F||A0(_,lr,Yn,Kr,{wind:c.name===Ue.nodes.tree||v,turf:c.parent?.name===Ue.nodes.island,glass:!!u?.name?.startsWith(Ue.prefixes.houseWindow),roof:u?.name===Ue.materials.roofPaint1||u?.name===Ue.materials.roofPaint2,bark:v,soft:c.name.includes(Ue.substrings.clothes),trim:u?.name===Ue.materials.houseRoofEdgeTrim,houseCentre:new T(...Af.center)}),c.userData.keepPainted=!0,c.userData.shadowRole={material:u?.name,cast:c.castShadow,receive:c.receiveShadow,response:x?"translucent canopy":w?"meadow":F?"authored sun/fill":"shared sun/fill"},Di&&!w&&!x&&!b&&c.geometry.index&&c.geometry.index.count>=wv*3&&Di.push(c)},i=[];e.traverse(c=>{c.isMesh&&i.push(c)});let r=[];for(let c of i){jl=performance.now();let h=performance.now();await n(c),an&&r.push([c.name,Math.round(performance.now()-h)])}an&&(Ze.visits=r.sort((c,h)=>h[1]-c[1]).slice(0,8)),Ze.visited=performance.now(),ut.add(e);let a=async()=>{let c=performance.now(),h;try{h=await Nf({url:Q1,abs:eE,blob:null,cache:!0},()=>{})}catch(u){console.error("island_meadow.glb failed to load",u);return}Ze.meadowFetched=performance.now(),Iv.parse(h,"./",async u=>{h=null;let d=u.scene;u=null,d.userData.terrainProfile!==$r.version&&console.warn("meadow: terrain profile "+d.userData.terrainProfile+" vs the core's "+$r.version);let f=[];d.traverse(p=>{p.isMesh&&f.push(p)});for(let p of f)jl=performance.now(),await n(p);oo.useWorkers(0),po.value=jt.has("capture")?1:0,ut.add(d),Js(d,new Set),Ze.meadowReady=performance.now(),console.info(`meadow: fetched in ${Math.round(Ze.meadowFetched-c)} ms, built in ${Math.round(Ze.meadowReady-Ze.meadowFetched)} ms, ${Math.round(Ze.meadowReady-Ze.ready)} ms after ready`)},u=>console.error("island_meadow.glb could not be parsed",u))};eb(e,Ni.keep),Ze.twigs=performance.now();{let c=e.getObjectByName(Ue.nodes.house);if(c){c.updateWorldMatrix(!0,!1);let h=c.localToWorld(new T(2.229,0,1.097)),u=new T(1,0,0).transformDirection(c.matrixWorld),d=new Y(u.x,u.z).normalize();Xl.c.value.set(h.x,h.z,d.x,d.y),Xl.half.value.set(.85+.06,.393+.06)}}console.info("shadow-audit-v166 "+JSON.stringify(Hl.map(c=>({name:c.name,...c.userData.shadowRole,movingDepth:!!c.customDepthMaterial}))));{let c=e.getObjectByName(Ue.nodes.island),h=new dt().setFromObject(c||e);ai.init(h)}window.S=ut,window.RENDERER=ft,window.CAM=zt,window.CTRL=tp,window.PHYS={Wind:go,Grass:ai,Tree:Rt,Cloth:Bt},ub(!0),Ze.halve0=performance.now(),bt&&W0(ut,Zs,1024),Ze.halve=performance.now();let o=Di&&Di.length?Mv(ut,Di):[],l=Js(ut,new Set([(Bt.mesh||Bt.pending)&&(Bt.mesh||Bt.pending).geometry,...o.map(c=>c.geometry)]));console.info(`memory: ${(l/1048576).toFixed(0)} MB of CPU geometry copies released after upload`),Ze.release=performance.now(),(async()=>{Ln({type:"stage",stage:"warming"});let c=1e9;Ze.warm=[];for(let d=0;d<12&&!(d>=3&&c<25);d++){let f=performance.now();sp(),c=performance.now()-f,Ze.warm.push(Math.round(c)),await new Promise(p=>setTimeout(p,0))}Ze.warmed=performance.now(),If(ut,ft,Zs),setTimeout(()=>If(ut,ft,Zs),15e3),Ze.ready=performance.now();let h=(d,f)=>Math.round(Ze[f]-Ze[d]);console.info(`load: fetch ${h("t0","fetched")} ms, parse ${h("fetched","parsed")} ms, build ${h("parsed","visited")} ms, finish ${h("visited","ready")} ms (warm-up included)`),window.T_LOAD=Ze;let u=document.getElementById("loading");if(u.style.opacity=0,setTimeout(()=>u.remove(),700),Ln({type:"ready"}),lb.ready(),setTimeout(()=>document.body.classList.add("ready"),Pl?1800:300),an&&jt.get("off")){let d=new Set(jt.get("off").split(","));if(d.has("post")&&hb(!1),d.has("mirror")&&(Kn.noMirror=!0),d.has("shadow")&&(ft.shadowMap.enabled=!1),d.has("meadow"))for(let{mesh:f}of co)f.visible=!1;d.has("tree")&&ut.traverse(f=>{f.isMesh&&f.geometry.attributes._tree_id&&(f.visible=!1)}),d.has("water")&&Fi&&(Fi.visible=!1),console.info("off: "+[...d].join(", "))}if(a(),Di&&Di.length){Ze.lightenPending=!0;let d=(Bt.mesh||Bt.pending)&&(Bt.mesh||Bt.pending).geometry;Sv(Di,o,{workerUrl:new URL("./simplify-worker.js?v="+ci,import.meta.url).href,far:{ratio:.04,error:.4},keep:new Set([d])}).then(f=>{Ze.lightened=f;for(let p of Di)p.userData.lod&&tb.add(p);console.info("lightened (phone): "+f.map(p=>`${p[0]} ${p[1]} -> ${p[2]} near / ${p[3]} far tris`).join("; ")+` in ${f[0]?f[0][4]:0} ms`)},f=>{console.warn("lightening failed; the phone keeps every triangle",f),Js(ut,new Set([(Bt.mesh||Bt.pending)&&(Bt.mesh||Bt.pending).geometry]))}).finally(()=>{Ze.lightenPending=!1,Ze.lighten=performance.now()})}hr.readyAt=performance.now(),Bt.pending&&setTimeout(()=>{let d=Bt.pending;Bt.pending=null;let f=performance.now();Bt.init(d),console.info(`cloth rig built after ready in ${Math.round(performance.now()-f)} ms`)},400),jt.get("tier")==="phone"&&Oi.wholeLadder()})()},s=>{console.error("island_world.glb failed to parse",s),Ys("The island could not load."),Ln({type:"error",message:"The island could not load."})});addEventListener("resize",()=>{zt.aspect=innerWidth/innerHeight,zt.fov=mo.fov0=Wv(zt.aspect),zt.updateProjectionMatrix(),qv(),ft.setPixelRatio(Oi.fitDpr(Oi.dpr)),ft.setSize(innerWidth,innerHeight)});var cb=!0,bo=$0({renderer:ft,samples:an&&+jt.get("msaa")||(bt&&!Zf?4:2),halfKuwahara:bt}),lb=j0({renderer:ft,scene:ut,extraTextures:Zs,build:ci,overlay:jt.has("stats"),tier:()=>({memory:bt,touch:document.body.classList.contains("touch"),applied:hr.applied,ladderOn:hr.on}),load:()=>Ze,targets:()=>{let s=ft.domElement,e=[{name:"canvas",w:s.width,h:s.height,bpp:8}];if(e.push(...bo.targets()),Fi){let t=Fi.getRenderTarget();e.push({name:"mirror",w:t.width,h:t.height,bpp:8})}return Bl.light&&Bl.light.shadow.map&&e.push({name:"shadow",w:Bl.light.shadow.mapSize.x,h:Bl.light.shadow.mapSize.y,bpp:8}),e}});matchMedia("(prefers-reduced-motion: reduce)").matches&&(oi.on=!1);jv();function hb(s){cb=s}var{SUN:Bl,placeSun:bE,setLiveLight:ub,updateShadowMapSize:xE,updateShadowUniforms:_E}=ov({scene:ut,oilSun:lr,plasterLive:Kr,visibleSunOn:Qf,shadow:Yn,knobs:Kn});if(an){let{installDevPanel:s}=await Promise.resolve().then(()=>(Tv(),Av));await s({Vector3:T,MathUtils:en,camera:zt,FLY:mo,setCamMode:iE,restoreHero:np,LOOKAT:Xv,HOME_DROP:Vv,postMat:bo.material,Wind:go,WIND:oi,placeSun:bE,HORIZON:tE,applyHorizon:qv,scene:ut,COLLIDE:Ii,groundY:Kv,windowVariants:Rl,TERRAIN_PROFILE:$r,setPainterly:hb,setLiveLight:ub,VISIBLE_SUN:Yl,BUILD:ci})}var yE=document.getElementById("fps"),qf=0,Xf=performance.now(),$f=performance.now(),Nv=0;for(let s of["pointerdown","pointermove","touchstart","keydown","wheel"])addEventListener(s,()=>{$f=performance.now()},{passive:!0});var Fv=0,zl=performance.now();ft.setAnimationLoop(()=>{qf++;let s=performance.now(),e=s-$f>2e4,t=fo.touchActive?e?1e3/20:1e3/30:e?1e3/30:0;if(an&&(window.__rest={idle:e,minInterval:t,sinceInput:Math.round(s-$f),touch:!!fo.touchActive}),t&&s-Nv<t-2)return;Nv=s;let n=performance.now(),i=Math.min((n-zl)/1e3,e?1/15:1/30);hr.on&&hr.readyAt&&n-hr.readyAt>3e3&&!e&&Oi.tierStep(n-zl,n,fo.touchActive?40:20),hr.readyAt&&lb.frame(n-zl),zl=n,po.value<1&&(po.value=Math.min(1,po.value+i/1.2)),oi.on&&(Fv+=i,go.step(i),ai.step(i),Rt.step(i),Bt.step(i)),oi.t.value=Fv,mo.on?Jv(i):$v(i),Qs&&Qs.updateCamera(zt),Fi&&(Fi.position.y=.02,nb.level.value=.02),n-Xf>=500&&(yE.textContent=`${Math.round(qf*1e3/(n-Xf))} fps \xB7 wind ${go.U.toFixed(1)} m/s`,qf=0,Xf=n),mo.on||(tp.update(),Yv(null)),pE(n),sp()});var jf=!0,Ov=-1,Uv=0;function sp(){if(bt){let s=Ni.update(Math.hypot(zt.position.x-Rt.cx,zt.position.z-Rt.cz));Ni.main(),Yf.update(zt);let e=tb.update(zt),t=performance.now();(e||Math.abs(s-Ov)>.05||t-Uv>4e3||Kn.shadowEveryFrame)&&(jf=!0,Ov=s,Uv=t),ft.shadowMap.autoUpdate=!1,ft.shadowMap.needsUpdate=jf,jf=!1}Qs&&Qs.updateCamera(zt),xE(),_E(),D0(oi.t.value),Wl.value=Kn.lodOff?0:1,Kn.mirrorKeep!==void 0&&(Jl.value=Kn.mirrorKeep),Pf(zt,1,Wl.value>=.5,Kn.lodRangeOff),cb?bo.render(ut,zt,Kn):ft.render(ut,zt)}window.RENDER_ONCE=sp;window.STEP=s=>{mo.on?Jv(s):$v(s)};kv();
