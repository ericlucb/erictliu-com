var Ob=Object.defineProperty;var Ub=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var Xf=(s,e)=>{for(var t in e)Ob(s,t,{get:e[t],enumerable:!0})};var K0={};Xf(K0,{installDevPanel:()=>ZS});async function ZS(s){let{Vector3:e,MathUtils:t,camera:n,FLY:i,setCamMode:r,restoreHero:a,LOOKAT:o,HOME_DROP:l,postMat:c,Wind:h,WIND:u,placeSun:d,HORIZON:f,applyHorizon:m,scene:b,COLLIDE:g,groundY:p,windowVariants:x,TERRAIN_PROFILE:v,setPainterly:_,setLiveLight:E,VISIBLE_SUN:S,BUILD:R}=s;document.body.insertAdjacentHTML("beforeend",JS);let L=C=>document.getElementById(C);function w(C,P,B,X=2){let U=L(C);U.addEventListener("input",()=>{L(P).textContent=(+U.value).toFixed(X),B(+U.value)})}w("c-mix","o-mix",C=>c.uniforms.uMix.value=C),w("c-rad","o-rad",C=>c.uniforms.uRadius.value=C,0),w("c-edge","o-edge",C=>c.uniforms.uEdge.value=C),w("c-grain","o-grain",C=>c.uniforms.uGrain.value=C),w("c-sat","o-sat",C=>c.uniforms.uSat.value=C),w("c-cel","o-cel",C=>c.uniforms.uCel.value=C),w("c-sepia","o-sepia",C=>c.uniforms.uSepia.value=C),L("c-wind").addEventListener("change",()=>u.on=L("c-wind").checked),L("c-wind").checked=u.on,w("c-wspd","o-wspd",C=>h.mean=C,1),w("c-sun","o-sun",C=>d(C)),w("c-hz","o-hz",C=>{f.shift=C,m()},3),w("c-hcone","o-hcone",C=>b.heroCone=C,0),w("c-hnear","o-hnear",C=>b.heroNear=C),L("c-cam").addEventListener("change",()=>r(L("c-cam").value)),L("c-shore").addEventListener("click",()=>{r("fly");let C=new e(-7.5,.25,-21.1),P=new e(-13.5,4.8,-31).sub(C).multiplyScalar(Math.max(1,.9/n.aspect)).add(C);o(...P.toArray(),...C.toArray())}),L("c-hero").addEventListener("click",a),L("c-house").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(1.5126,4.443,-1.6429),P=new e(10.0855,4.943,6.8075).sub(C).multiplyScalar(Math.max(1,1.5/n.aspect)).add(C);P.y+=l,C.y+=l,o(...P.toArray(),...C.toArray())}),L("c-rear").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(-5.0129,5.793,-7.1303),P=new e(-25.8342,8.893,-18.1064).sub(C).multiplyScalar(Math.max(1,1.5/n.aspect)).add(C);P.y+=l,C.y+=l,o(...P.toArray(),...C.toArray())});let y=await fetch("./rear-remodel-cameras.json?v="+R).then(C=>C.json());for(let C of Object.values(y))for(let P of["eye","target"])C[P][1]+=l;for(let[C,P]of[["c-chimney","chimney"],["c-chimney-back","chimney_reverse"],["c-rear-detail","rear_detail"]])L(C).addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=50,n.updateProjectionMatrix();let B=y[P],X=new e(...B.target),U=new e(...B.eye).sub(X).multiplyScalar(Math.max(1,.9/n.aspect)).add(X);o(...U.toArray(),...X.toArray())});L("c-gable").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(2.4011,5.793,-9.3231),P=new e(14.2643,8.493,-28.0919).sub(C).multiplyScalar(Math.max(1,1.5/n.aspect)).add(C);P.y+=l,C.y+=l,o(...P.toArray(),...C.toArray())}),L("c-pier").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(-7.8551,.2,-19.7783),P=new e(-13.3603,1.05,-24.1752).sub(C).multiplyScalar(Math.max(1,1.35/n.aspect)).add(C);o(...P.toArray(),...C.toArray())}),L("c-path").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(-5.8992,2.543,-8.8731),P=new e(-9.8791,3.893,-12.2198).sub(C).multiplyScalar(Math.max(1,1.2/n.aspect)).add(C);P.y+=l,C.y+=l,o(...P.toArray(),...C.toArray())}),L("c-flowers").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let C=new e(16.0026,1.64,2.9909),P=new e(16.4526,2.02,4.0409).sub(C).multiplyScalar(Math.max(1,1.2/n.aspect)).add(C);P.y=Math.max(P.y,p(P.x,P.z)+g.eye+.02),o(...P.toArray(),...C.toArray())});let F=await fetch("./front-approach-camera.json").then(C=>C.json());for(let C of[F])for(let P of["eye","target"])C[P][1]+=l;L("c-entry").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let C=new e(...F.target),P=new e(...F.eye).sub(C).multiplyScalar(Math.max(1,1.15/n.aspect)).add(C);o(...P.toArray(),...C.toArray())});for(let[C,P]of Object.entries(x.views)){let B=document.createElement("option");B.value=C,B.textContent=P.label,L("c-window-variant").appendChild(B)}L("c-window-variant").addEventListener("change",()=>{let C=x.views[L("c-window-variant").value];if(!C)return;r("fly"),n.clearViewOffset(),n.fov=i.fov0=C.fov,n.updateProjectionMatrix();let P=[...C.eye];P[1]=Math.max(P[1],p(P[0],P[2])+g.eye+.05),o(...P,...C.target)});let O=await fetch("./joinery-cameras.json").then(C=>C.json());for(let C of Object.values(O))for(let P of["eye","target"])C[P][1]+=l;L("c-eave").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let C=O.window_angle;o(C.eye[0]+.8,C.eye[1]+1.15,C.eye[2]+1.3,C.target[0],C.target[1]+1.15,C.target[2])});for(let C of["window_detail","window_angle","door_detail"])L("c-"+C.replace("_","-")).addEventListener("click",()=>{let P=O[C];r("fly"),n.clearViewOffset(),n.fov=i.fov0=P.fov,n.updateProjectionMatrix();let B=[...P.eye];B[1]=Math.max(B[1],p(B[0],B[2])+g.eye+.05),o(...B,...P.target)});let I=await fetch("./review-cameras.json?v="+R).then(C=>C.json());L("c-review").addEventListener("change",()=>{let C=L("c-review").value;if(C==="hero_camera"){a();return}if(C==="tree_reference"){r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(24.1758/240)),n.updateProjectionMatrix(),o(23.94,8.462,116.774,28.936,8.462,-3.122);return}let P=I[C];P&&(r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(36/(2*P.lens*n.aspect))),n.updateProjectionMatrix(),o(...P.eye,...P.target))}),L("c-plaster").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(11.65,5.15,-6.06,5.665,3.64,-6.579)}),L("c-bench").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(17,4,5.2,23.42,2.2,3.25)}),L("c-tree").addEventListener("click",()=>{r("fly");let C=new e(30,8,-.5),P=new e(26,10.5,32).sub(C).multiplyScalar(Math.max(1,.8/n.aspect)).add(C);P.y+=v.offsets.WEB_HM_tree_og,C.y+=v.offsets.WEB_HM_tree_og,o(...P.toArray(),...C.toArray())}),L("c-laundry").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let C=new e(11.5,3.25,-7.7),P=new e(10.5,3.7,1.2).sub(C).multiplyScalar(Math.max(1,1.3/n.aspect)).add(C);P.y+=v.offsets.WEB_HM_clothes_line,C.y+=v.offsets.WEB_HM_clothes_line,o(...P.toArray(),...C.toArray())}),L("c-tree-side").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let C=new e(31,9.8,-3),P=new e(51,11,-2).sub(C).multiplyScalar(Math.max(1,.8/n.aspect)).add(C);P.y+=v.offsets.WEB_HM_tree_og,C.y+=v.offsets.WEB_HM_tree_og,o(...P.toArray(),...C.toArray())}),L("c-twigs").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(29.2,12.6,3.8,30.5,12.5,-.6)}),L("c-bark").addEventListener("click",()=>{r("fly"),o(25.5,5,8.5,29.2,4.5,-2.3)}),L("c-leaves").addEventListener("click",()=>{r("fly"),o(27,13,9,31,13,-.5)}),L("c-on").addEventListener("change",()=>_(L("c-on").checked)),L("c-sun-view").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=40,n.updateProjectionMatrix();let C=n.position.clone(),P=C.clone().addScaledVector(S.value,100);o(...C.toArray(),...P.toArray())}),L("c-light").addEventListener("change",()=>E(L("c-light").value==="sun"))}var JS,Y0=Ub(()=>{JS=`<details id="panel" class="hud-panel">
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
</details>`});var Wt={};Xf(Wt,{ACESFilmicToneMapping:()=>ig,AddEquation:()=>Wi,AddOperation:()=>Qm,AdditiveAnimationBlendMode:()=>Dd,AdditiveBlending:()=>Nh,AgXToneMapping:()=>sg,AlphaFormat:()=>ug,AlwaysCompare:()=>Rg,AlwaysDepth:()=>Xm,AlwaysStencilFunc:()=>hu,AmbientLight:()=>Qc,AnimationAction:()=>ll,AnimationClip:()=>Pi,AnimationLoader:()=>Uu,AnimationMixer:()=>$u,AnimationObjectGroup:()=>Zu,AnimationUtils:()=>iS,ArcCurve:()=>Mc,ArrayCamera:()=>gc,ArrowHelper:()=>xd,AttachedBindMode:()=>Uh,Audio:()=>ol,AudioAnalyser:()=>Yu,AudioContext:()=>Za,AudioListener:()=>ju,AudioLoader:()=>qu,AxesHelper:()=>_d,BackSide:()=>zt,BasicDepthPacking:()=>_g,BasicShadowMap:()=>zb,BatchedMesh:()=>_c,Bone:()=>kr,BooleanKeyframeTrack:()=>Ri,Box2:()=>ad,Box3:()=>dt,Box3Helper:()=>bd,BoxGeometry:()=>Nr,BoxHelper:()=>gd,BufferAttribute:()=>Oe,BufferGeometry:()=>Ge,BufferGeometryLoader:()=>sl,ByteType:()=>cg,Cache:()=>_i,Camera:()=>Ts,CameraHelper:()=>md,CanvasTexture:()=>Fa,CapsuleGeometry:()=>Cc,CatmullRomCurve3:()=>Sc,CineonToneMapping:()=>ng,CircleGeometry:()=>Os,ClampToEdgeWrapping:()=>Dt,Clock:()=>al,Color:()=>ge,ColorKeyframeTrack:()=>ja,ColorManagement:()=>rt,CompressedArrayTexture:()=>Lu,CompressedCubeTexture:()=>Du,CompressedTexture:()=>Ns,CompressedTextureLoader:()=>ku,ConeGeometry:()=>Pc,ConstantAlphaFactor:()=>Vm,ConstantColorFactor:()=>Hm,CubeCamera:()=>pc,CubeReflectionMapping:()=>Mi,CubeRefractionMapping:()=>Xi,CubeTexture:()=>Fr,CubeTextureLoader:()=>Bu,CubeUVReflectionMapping:()=>Hs,CubicBezierCurve:()=>Oa,CubicBezierCurve3:()=>Ec,CubicInterpolant:()=>Jc,CullFaceBack:()=>Ih,CullFaceFront:()=>Am,CullFaceFrontBack:()=>Bb,CullFaceNone:()=>Em,Curve:()=>_n,CurvePath:()=>Rc,CustomBlending:()=>Tm,CustomToneMapping:()=>rg,CylinderGeometry:()=>Ki,Cylindrical:()=>sd,Data3DTexture:()=>Ra,DataArrayTexture:()=>Ss,DataTexture:()=>cn,DataTextureLoader:()=>zu,DataUtils:()=>Od,DecrementStencilOp:()=>Kb,DecrementWrapStencilOp:()=>Jb,DefaultLoadingManager:()=>jg,DepthFormat:()=>Pr,DepthStencilFormat:()=>ws,DepthTexture:()=>Ur,DetachedBindMode:()=>og,DirectionalLight:()=>Zi,DirectionalLightHelper:()=>pd,DiscreteInterpolant:()=>Zc,DisplayP3ColorSpace:()=>fl,DodecahedronGeometry:()=>Lc,DoubleSide:()=>Bt,DstAlphaFactor:()=>Om,DstColorFactor:()=>km,DynamicCopyUsage:()=>uv,DynamicDrawUsage:()=>sv,DynamicReadUsage:()=>cv,EdgesGeometry:()=>Dc,EllipseCurve:()=>Fs,EqualCompare:()=>Sg,EqualDepth:()=>Km,EqualStencilFunc:()=>ev,EquirectangularReflectionMapping:()=>va,EquirectangularRefractionMapping:()=>xa,Euler:()=>vn,EventDispatcher:()=>bn,ExtrudeGeometry:()=>Ic,FileLoader:()=>hn,Float16BufferAttribute:()=>vu,Float32BufferAttribute:()=>Ce,FloatType:()=>an,Fog:()=>Rs,FogExp2:()=>bc,FramebufferTexture:()=>Pu,FrontSide:()=>kn,Frustum:()=>Or,GLBufferAttribute:()=>nd,GLSL1:()=>fv,GLSL3:()=>Ea,GreaterCompare:()=>Eg,GreaterDepth:()=>Jm,GreaterEqualCompare:()=>Tg,GreaterEqualDepth:()=>Ym,GreaterEqualStencilFunc:()=>rv,GreaterStencilFunc:()=>nv,GridHelper:()=>dd,Group:()=>on,HalfFloatType:()=>Xn,HemisphereLight:()=>Us,HemisphereLightHelper:()=>ud,IcosahedronGeometry:()=>Nc,ImageBitmapLoader:()=>Ja,ImageLoader:()=>Vr,ImageUtils:()=>dc,IncrementStencilOp:()=>jb,IncrementWrapStencilOp:()=>Yb,InstancedBufferAttribute:()=>Gn,InstancedBufferGeometry:()=>rl,InstancedInterleavedBuffer:()=>td,InstancedMesh:()=>Ls,Int16BufferAttribute:()=>gu,Int32BufferAttribute:()=>bu,Int8BufferAttribute:()=>fu,IntType:()=>Ed,InterleavedBuffer:()=>Hn,InterleavedBufferAttribute:()=>xn,Interpolant:()=>Ti,InterpolateDiscrete:()=>Ir,InterpolateLinear:()=>ji,InterpolateSmooth:()=>lc,InvertStencilOp:()=>Zb,KeepStencilOp:()=>wr,KeyframeTrack:()=>yn,LOD:()=>xc,LatheGeometry:()=>Ha,Layers:()=>Es,LessCompare:()=>Mg,LessDepth:()=>jm,LessEqualCompare:()=>Nd,LessEqualDepth:()=>ba,LessEqualStencilFunc:()=>tv,LessStencilFunc:()=>Qb,Light:()=>ii,LightProbe:()=>nl,Line:()=>Tn,Line3:()=>od,LineBasicMaterial:()=>Ot,LineCurve:()=>Ua,LineCurve3:()=>Ac,LineDashedMaterial:()=>Yc,LineLoop:()=>Ds,LineSegments:()=>ln,LinearDisplayP3ColorSpace:()=>to,LinearFilter:()=>ct,LinearInterpolant:()=>Xa,LinearMipMapLinearFilter:()=>Wb,LinearMipMapNearestFilter:()=>Vb,LinearMipmapLinearFilter:()=>mn,LinearMipmapNearestFilter:()=>Cr,LinearSRGBColorSpace:()=>Ut,LinearToneMapping:()=>eg,LinearTransfer:()=>ya,Loader:()=>Gt,LoaderUtils:()=>qn,LoadingManager:()=>Ka,LoopOnce:()=>bg,LoopPingPong:()=>xg,LoopRepeat:()=>vg,LuminanceAlphaFormat:()=>pg,LuminanceFormat:()=>fg,MOUSE:()=>$i,Material:()=>At,MaterialLoader:()=>il,MathUtils:()=>Jt,Matrix3:()=>Ve,Matrix4:()=>De,MaxEquation:()=>Lm,Mesh:()=>it,MeshBasicMaterial:()=>Pt,MeshDepthMaterial:()=>ei,MeshDistanceMaterial:()=>Da,MeshLambertMaterial:()=>jc,MeshMatcapMaterial:()=>Kc,MeshNormalMaterial:()=>Xc,MeshPhongMaterial:()=>Wc,MeshPhysicalMaterial:()=>en,MeshStandardMaterial:()=>Ji,MeshToonMaterial:()=>qc,MinEquation:()=>Pm,MirroredRepeatWrapping:()=>Dr,MixOperation:()=>$m,MultiplyBlending:()=>Oh,MultiplyOperation:()=>$a,NearestFilter:()=>vt,NearestMipMapLinearFilter:()=>Gb,NearestMipMapNearestFilter:()=>Hb,NearestMipmapLinearFilter:()=>qi,NearestMipmapNearestFilter:()=>Qa,NeutralToneMapping:()=>ag,NeverCompare:()=>wg,NeverDepth:()=>qm,NeverStencilFunc:()=>$b,NoBlending:()=>yi,NoColorSpace:()=>On,NoToneMapping:()=>Un,NormalAnimationBlendMode:()=>dl,NormalBlending:()=>Rr,NotEqualCompare:()=>Ag,NotEqualDepth:()=>Zm,NotEqualStencilFunc:()=>iv,NumberKeyframeTrack:()=>ti,Object3D:()=>nt,ObjectLoader:()=>Wu,ObjectSpaceNormalMap:()=>yg,OctahedronGeometry:()=>qa,OneFactor:()=>Im,OneMinusConstantAlphaFactor:()=>Wm,OneMinusConstantColorFactor:()=>Gm,OneMinusDstAlphaFactor:()=>Um,OneMinusDstColorFactor:()=>Bm,OneMinusSrcAlphaFactor:()=>uc,OneMinusSrcColorFactor:()=>Fm,OrthographicCamera:()=>Qn,P3Primaries:()=>Ma,PCFShadowMap:()=>Md,PCFSoftShadowMap:()=>hl,PMREMGenerator:()=>La,Path:()=>zr,PerspectiveCamera:()=>bt,Plane:()=>sn,PlaneGeometry:()=>Ei,PlaneHelper:()=>vd,PointLight:()=>Bs,PointLightHelper:()=>hd,Points:()=>Is,PointsMaterial:()=>Br,PolarGridHelper:()=>fd,PolyhedronGeometry:()=>Yi,PositionalAudio:()=>Ku,PropertyBinding:()=>ot,PropertyMixer:()=>cl,QuadraticBezierCurve:()=>ka,QuadraticBezierCurve3:()=>Ba,Quaternion:()=>ht,QuaternionKeyframeTrack:()=>Vn,QuaternionLinearInterpolant:()=>$c,RED_GREEN_RGTC2_Format:()=>cu,RED_RGTC1_Format:()=>gg,REVISION:()=>kb,RGBADepthPacking:()=>Wr,RGBAFormat:()=>Vt,RGBAIntegerFormat:()=>Ld,RGBA_ASTC_10x10_Format:()=>nu,RGBA_ASTC_10x5_Format:()=>Qh,RGBA_ASTC_10x6_Format:()=>eu,RGBA_ASTC_10x8_Format:()=>tu,RGBA_ASTC_12x10_Format:()=>iu,RGBA_ASTC_12x12_Format:()=>ru,RGBA_ASTC_4x4_Format:()=>qh,RGBA_ASTC_5x4_Format:()=>Xh,RGBA_ASTC_5x5_Format:()=>jh,RGBA_ASTC_6x5_Format:()=>Kh,RGBA_ASTC_6x6_Format:()=>Yh,RGBA_ASTC_8x5_Format:()=>Jh,RGBA_ASTC_8x6_Format:()=>Zh,RGBA_ASTC_8x8_Format:()=>$h,RGBA_BPTC_Format:()=>cc,RGBA_ETC2_EAC_Format:()=>Wh,RGBA_PVRTC_2BPPV1_Format:()=>Hh,RGBA_PVRTC_4BPPV1_Format:()=>zh,RGBA_S3TC_DXT1_Format:()=>sc,RGBA_S3TC_DXT3_Format:()=>ac,RGBA_S3TC_DXT5_Format:()=>oc,RGBFormat:()=>dg,RGB_BPTC_SIGNED_Format:()=>su,RGB_BPTC_UNSIGNED_Format:()=>au,RGB_ETC1_Format:()=>Gh,RGB_ETC2_Format:()=>Vh,RGB_PVRTC_2BPPV1_Format:()=>Bh,RGB_PVRTC_4BPPV1_Format:()=>kh,RGB_S3TC_DXT1_Format:()=>rc,RGFormat:()=>mg,RGIntegerFormat:()=>Pd,RawShaderMaterial:()=>Vc,Ray:()=>$n,Raycaster:()=>id,Rec709Primaries:()=>wa,RectAreaLight:()=>el,RedFormat:()=>Rd,RedIntegerFormat:()=>Cd,ReinhardToneMapping:()=>tg,RenderTarget:()=>fc,RepeatWrapping:()=>Bn,ReplaceStencilOp:()=>Xb,ReverseSubtractEquation:()=>Cm,RingGeometry:()=>Fc,SIGNED_RED_GREEN_RGTC2_Format:()=>lu,SIGNED_RED_RGTC1_Format:()=>ou,SRGBColorSpace:()=>pt,SRGBTransfer:()=>gt,Scene:()=>Ai,ShaderChunk:()=>He,ShaderLib:()=>Fn,ShaderMaterial:()=>Ht,ShadowMaterial:()=>Gc,Shape:()=>wi,ShapeGeometry:()=>Oc,ShapePath:()=>yd,ShapeUtils:()=>Zn,ShortType:()=>lg,Skeleton:()=>Ps,SkeletonHelper:()=>ld,SkinnedMesh:()=>Cs,Source:()=>vi,Sphere:()=>wt,SphereGeometry:()=>Gr,Spherical:()=>zs,SphericalHarmonics3:()=>tl,SplineCurve:()=>za,SpotLight:()=>ks,SpotLightHelper:()=>cd,Sprite:()=>vc,SpriteMaterial:()=>Na,SrcAlphaFactor:()=>hc,SrcAlphaSaturateFactor:()=>zm,SrcColorFactor:()=>Nm,StaticCopyUsage:()=>hv,StaticDrawUsage:()=>Sa,StaticReadUsage:()=>ov,StereoCamera:()=>Xu,StreamCopyUsage:()=>dv,StreamDrawUsage:()=>av,StreamReadUsage:()=>lv,StringKeyframeTrack:()=>Ci,SubtractEquation:()=>Rm,SubtractiveBlending:()=>Fh,TOUCH:()=>Qi,TangentSpaceNormalMap:()=>er,TetrahedronGeometry:()=>Uc,Texture:()=>Mt,TextureLoader:()=>Wn,TorusGeometry:()=>kc,TorusKnotGeometry:()=>Bc,Triangle:()=>xi,TriangleFanDrawMode:()=>Vs,TriangleStripDrawMode:()=>eo,TrianglesDrawMode:()=>Id,TubeGeometry:()=>zc,UVMapping:()=>ul,Uint16BufferAttribute:()=>Ca,Uint32BufferAttribute:()=>Pa,Uint8BufferAttribute:()=>pu,Uint8ClampedBufferAttribute:()=>mu,Uniform:()=>Qu,UniformsGroup:()=>ed,UniformsLib:()=>ye,UniformsUtils:()=>pl,UnsignedByteType:()=>zn,UnsignedInt248Type:()=>Gs,UnsignedInt5999Type:()=>hg,UnsignedIntType:()=>Si,UnsignedShort4444Type:()=>Ad,UnsignedShort5551Type:()=>Td,UnsignedShortType:()=>Sd,VSMShadowMap:()=>Yn,Vector2:()=>Y,Vector3:()=>T,Vector4:()=>et,VectorKeyframeTrack:()=>ni,VideoTexture:()=>Cu,WebGL3DRenderTarget:()=>du,WebGLArrayRenderTarget:()=>uu,WebGLCoordinateSystem:()=>Jn,WebGLCubeRenderTarget:()=>mc,WebGLMultipleRenderTargets:()=>wd,WebGLRenderTarget:()=>It,WebGLRenderer:()=>Ia,WebGLUtils:()=>zg,WebGPUCoordinateSystem:()=>Aa,WireframeGeometry:()=>Hc,WrapAroundEnding:()=>_a,ZeroCurvatureEnding:()=>Er,ZeroFactor:()=>Dm,ZeroSlopeEnding:()=>Ar,ZeroStencilOp:()=>qb,createCanvasElement:()=>Pg});var kb="164",$i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Em=0,Ih=1,Am=2,Bb=3,zb=0,Md=1,hl=2,Yn=3,kn=0,zt=1,Bt=2,yi=0,Rr=1,Nh=2,Fh=3,Oh=4,Tm=5,Wi=100,Rm=101,Cm=102,Pm=103,Lm=104,Dm=200,Im=201,Nm=202,Fm=203,hc=204,uc=205,Om=206,Um=207,km=208,Bm=209,zm=210,Hm=211,Gm=212,Vm=213,Wm=214,qm=0,Xm=1,jm=2,ba=3,Km=4,Ym=5,Jm=6,Zm=7,$a=0,$m=1,Qm=2,Un=0,eg=1,tg=2,ng=3,ig=4,rg=5,sg=6,ag=7,Uh="attached",og="detached",ul=300,Mi=301,Xi=302,va=303,xa=304,Hs=306,Bn=1e3,Dt=1001,Dr=1002,vt=1003,Qa=1004,Hb=1004,qi=1005,Gb=1005,ct=1006,Cr=1007,Vb=1007,mn=1008,Wb=1008,zn=1009,cg=1010,lg=1011,Sd=1012,Ed=1013,Si=1014,an=1015,Xn=1016,Ad=1017,Td=1018,Gs=1020,hg=35902,ug=1021,dg=1022,Vt=1023,fg=1024,pg=1025,Pr=1026,ws=1027,Rd=1028,Cd=1029,mg=1030,Pd=1031,Ld=1033,rc=33776,sc=33777,ac=33778,oc=33779,kh=35840,Bh=35841,zh=35842,Hh=35843,Gh=36196,Vh=37492,Wh=37496,qh=37808,Xh=37809,jh=37810,Kh=37811,Yh=37812,Jh=37813,Zh=37814,$h=37815,Qh=37816,eu=37817,tu=37818,nu=37819,iu=37820,ru=37821,cc=36492,su=36494,au=36495,gg=36283,ou=36284,cu=36285,lu=36286,bg=2200,vg=2201,xg=2202,Ir=2300,ji=2301,lc=2302,Er=2400,Ar=2401,_a=2402,dl=2500,Dd=2501,Id=0,eo=1,Vs=2,_g=3200,Wr=3201,er=0,yg=1,On="",pt="srgb",Ut="srgb-linear",fl="display-p3",to="display-p3-linear",ya="linear",gt="srgb",wa="rec709",Ma="p3",qb=0,wr=7680,Xb=7681,jb=7682,Kb=7683,Yb=34055,Jb=34056,Zb=5386,$b=512,Qb=513,ev=514,tv=515,nv=516,iv=517,rv=518,hu=519,wg=512,Mg=513,Sg=514,Nd=515,Eg=516,Ag=517,Tg=518,Rg=519,Sa=35044,sv=35048,av=35040,ov=35045,cv=35049,lv=35041,hv=35046,uv=35050,dv=35042,fv="100",Ea="300 es",Jn=2e3,Aa=2001,bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jf=1234567,Lr=Math.PI/180,Ms=180/Math.PI;function gn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Fd(s,e){return(s%e+e)%e}function pv(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mv(s,e,t){return s!==e?(t-s)/(e-s):0}function fa(s,e,t){return(1-t)*s+t*e}function gv(s,e,t,n){return fa(s,e,1-Math.exp(-t*n))}function bv(s,e=1){return e-Math.abs(Fd(s,e*2)-e)}function vv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xv(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function _v(s,e){return s+Math.floor(Math.random()*(e-s+1))}function yv(s,e){return s+Math.random()*(e-s)}function wv(s){return s*(.5-Math.random())}function Mv(s){s!==void 0&&(jf=s);let e=jf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sv(s){return s*Lr}function Ev(s){return s*Ms}function Av(s){return(s&s-1)===0&&s!==0}function Tv(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rv(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Cv(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*m,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*m,o*c);break;case"ZYZ":s.set(l*m,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Jt={DEG2RAD:Lr,RAD2DEG:Ms,generateUUID:gn,clamp:Et,euclideanModulo:Fd,mapLinear:pv,inverseLerp:mv,lerp:fa,damp:gv,pingpong:bv,smoothstep:vv,smootherstep:xv,randInt:_v,randFloat:yv,randFloatSpread:wv,seededRandom:Mv,degToRad:Sv,radToDeg:Ev,isPowerOfTwo:Av,ceilPowerOfTwo:Tv,floorPowerOfTwo:Rv,setQuaternionFromProperEuler:Cv,normalize:Ye,denormalize:Qt},Y=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class s{constructor(e,t,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],v=i[4],_=i[7],E=i[2],S=i[5],R=i[8];return r[0]=a*b+o*x+l*E,r[3]=a*g+o*v+l*S,r[6]=a*p+o*_+l*R,r[1]=c*b+h*x+u*E,r[4]=c*g+h*v+u*S,r[7]=c*p+h*_+u*R,r[2]=d*b+f*x+m*E,r[5]=d*g+f*v+m*S,r[8]=d*p+f*_+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*c-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*l)*b,e[5]=(i*r-o*t)*b,e[6]=f*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yl=new Ve;function Cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var Pv={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function bs(s,e){return new Pv[s](e)}function Ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Pg(){let s=Ta("canvas");return s.style.display="block",s}var Kf={};function Lg(s){s in Kf||(Kf[s]=!0,console.warn(s))}var Yf=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jf=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[Ut]:{transfer:ya,primaries:wa,toReference:s=>s,fromReference:s=>s},[pt]:{transfer:gt,primaries:wa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[to]:{transfer:ya,primaries:Ma,toReference:s=>s.applyMatrix3(Jf),fromReference:s=>s.applyMatrix3(Yf)},[fl]:{transfer:gt,primaries:Ma,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Jf),fromReference:s=>s.applyMatrix3(Yf).convertLinearToSRGB()}},Lv=new Set([Ut,to]),rt={enabled:!0,_workingColorSpace:Ut,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=uo[e].toReference,i=uo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return uo[s].primaries},getTransfer:function(s){return s===On?ya:uo[s].transfer}};function _s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Jl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Yr,dc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yr===void 0&&(Yr=Ta("canvas")),Yr.width=e.width,Yr.height=e.height;let n=Yr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ta("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_s(t[n]/255)*255):t[n]=_s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Dv=0,vi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Zl(i[a].image)):r.push(Zl(i[a]))}else r=Zl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Zl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Iv=0,Mt=class s extends bn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Dt,i=Dt,r=ct,a=mn,o=Vt,l=zn,c=s.DEFAULT_ANISOTROPY,h=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iv++}),this.uuid=gn(),this.name="",this.source=new vi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bn:e.x=e.x-Math.floor(e.x);break;case Dt:e.x=e.x<0?0:1;break;case Dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bn:e.y=e.y-Math.floor(e.y);break;case Dt:e.y=e.y<0?0:1;break;case Dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=ul;Mt.DEFAULT_ANISOTROPY=1;var et=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],b=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,E=(p+1)/2,S=(h+d)/4,R=(u+b)/4,L=(m+g)/4;return v>_&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=S/n,r=R/n):_>E?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=S/i,r=L/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=R/r,i=L/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},fc=class extends bn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},It=class extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ss=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uu=class extends It{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Ss(null,e,t,n),this.texture.isRenderTargetTexture=!0}},Ra=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=Dt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},du=class extends It{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ra(null,e,t,n),this.texture.isRenderTargetTexture=!0}},ht=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=b;return}if(u!==b||l!==d||c!==f||h!==m){let g=1-o,p=l*d+c*f+h*m+u*b,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let E=Math.sqrt(v),S=Math.atan2(E,p*x);g=Math.sin(g*S)/E,o=Math.sin(o*S)/E}let _=o*x;if(l=l*g+d*_,c=c*g+f*_,h=h*g+m*_,u=u*g+b*_,g===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-o*f,e[t+2]=c*m+h*f+o*d-l*u,e[t+3]=h*m-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),f=l(i/2),m=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$l=new T,Zf=new ht,dt=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),po.subVectors(this.max,Qs),Jr.subVectors(e.a,Qs),Zr.subVectors(e.b,Qs),$r.subVectors(e.c,Qs),Oi.subVectors(Zr,Jr),Ui.subVectors($r,Zr),hr.subVectors(Jr,$r);let t=[0,-Oi.z,Oi.y,0,-Ui.z,Ui.y,0,-hr.z,hr.y,Oi.z,0,-Oi.x,Ui.z,0,-Ui.x,hr.z,0,-hr.x,-Oi.y,Oi.x,0,-Ui.y,Ui.x,0,-hr.y,hr.x,0];return!Ql(t,Jr,Zr,$r,po)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Jr,Zr,$r,po))?!1:(mo.crossVectors(Oi,Ui),t=[mo.x,mo.y,mo.z],Ql(t,Jr,Zr,$r,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ui=[new T,new T,new T,new T,new T,new T,new T,new T],Dn=new T,fo=new dt,Jr=new T,Zr=new T,$r=new T,Oi=new T,Ui=new T,hr=new T,Qs=new T,po=new T,mo=new T,ur=new T;function Ql(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ur.fromArray(s,r);let o=i.x*Math.abs(ur.x)+i.y*Math.abs(ur.y)+i.z*Math.abs(ur.z),l=e.dot(ur),c=t.dot(ur),h=n.dot(ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Nv=new dt,ea=new T,eh=new T,wt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Nv.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ea,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(eh)),this.expandByPoint(ea.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},di=new T,th=new T,go=new T,ki=new T,nh=new T,bo=new T,ih=new T,$n=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){th.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=ki.dot(this.direction),l=-ki.dot(go),c=ki.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*l-o,d=a*o-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(th).addScaledVector(go,d),f}intersectSphere(e,t){di.subVectors(e.center,this.origin);let n=di.dot(this.direction),i=di.dot(di)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,i,r){nh.subVectors(t,e),bo.subVectors(n,e),ih.crossVectors(nh,bo);let a=this.direction.dot(ih),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);let l=o*this.direction.dot(bo.crossVectors(ki,bo));if(l<0)return null;let c=o*this.direction.dot(nh.cross(ki));if(c<0||l+c>a)return null;let h=-o*ki.dot(ih);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class s{constructor(e,t,n,i,r,a,o,l,c,h,u,d,f,m,b,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,b,g)}set(e,t,n,i,r,a,o,l,c,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Qr.setFromMatrixColumn(e,0).length(),r=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-b*c,t[9]=-o*l,t[2]=b-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,b=c*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+b,t[1]=l*u,t[5]=b*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,b=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Ov)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Bi.crossVectors(n,fn),Bi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Bi.crossVectors(n,fn)),Bi.normalize(),vo.crossVectors(fn,Bi),i[0]=Bi.x,i[4]=vo.x,i[8]=fn.x,i[1]=Bi.y,i[5]=vo.y,i[9]=fn.y,i[2]=Bi.z,i[6]=vo.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],v=n[7],_=n[11],E=n[15],S=i[0],R=i[4],L=i[8],w=i[12],y=i[1],F=i[5],O=i[9],I=i[13],C=i[2],P=i[6],B=i[10],X=i[14],U=i[3],V=i[7],j=i[11],ie=i[15];return r[0]=a*S+o*y+l*C+c*U,r[4]=a*R+o*F+l*P+c*V,r[8]=a*L+o*O+l*B+c*j,r[12]=a*w+o*I+l*X+c*ie,r[1]=h*S+u*y+d*C+f*U,r[5]=h*R+u*F+d*P+f*V,r[9]=h*L+u*O+d*B+f*j,r[13]=h*w+u*I+d*X+f*ie,r[2]=m*S+b*y+g*C+p*U,r[6]=m*R+b*F+g*P+p*V,r[10]=m*L+b*O+g*B+p*j,r[14]=m*w+b*I+g*X+p*ie,r[3]=x*S+v*y+_*C+E*U,r[7]=x*R+v*F+_*P+E*V,r[11]=x*L+v*O+_*B+E*j,r[15]=x*w+v*I+_*X+E*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15];return m*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*f-n*l*f)+b*(+t*l*f-t*c*d+r*a*d-i*a*f+i*c*h-r*l*h)+g*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=u*g*c-b*d*c+b*l*f-o*g*f-u*l*p+o*d*p,v=m*d*c-h*g*c-m*l*f+a*g*f+h*l*p-a*d*p,_=h*b*c-m*u*c+m*o*f-a*b*f-h*o*p+a*u*p,E=m*u*l-h*b*l-m*o*d+a*b*d+h*o*g-a*u*g,S=t*x+n*v+i*_+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=x*R,e[1]=(b*d*r-u*g*r-b*i*f+n*g*f+u*i*p-n*d*p)*R,e[2]=(o*g*r-b*l*r+b*i*c-n*g*c-o*i*p+n*l*p)*R,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*f-n*l*f)*R,e[4]=v*R,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*R,e[6]=(m*l*r-a*g*r-m*i*c+t*g*c+a*i*p-t*l*p)*R,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*f+t*l*f)*R,e[8]=_*R,e[9]=(m*u*r-h*b*r-m*n*f+t*b*f+h*n*p-t*u*p)*R,e[10]=(a*b*r-m*o*r+m*n*c-t*b*c-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*R,e[12]=E*R,e[13]=(h*b*i-m*u*i+m*n*d-t*b*d-h*n*g+t*u*g)*R,e[14]=(m*o*i-a*b*i-m*n*l+t*b*l+a*n*g-t*o*g)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,m=r*u,b=a*h,g=a*u,p=o*u,x=l*c,v=l*h,_=l*u,E=n.x,S=n.y,R=n.z;return i[0]=(1-(b+p))*E,i[1]=(f+_)*E,i[2]=(m-v)*E,i[3]=0,i[4]=(f-_)*S,i[5]=(1-(d+p))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+v)*R,i[9]=(g-x)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Qr.set(i[0],i[1],i[2]).length(),a=Qr.set(i[4],i[5],i[6]).length(),o=Qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],In.copy(this);let c=1/r,h=1/a,u=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Jn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,m;if(o===Jn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Aa)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,f=(n+i)*h,m,b;if(o===Jn)m=(a+r)*u,b=-2*u;else if(o===Aa)m=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=b,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qr=new T,In=new De,Fv=new T(0,0,0),Ov=new T(1,1,1),Bi=new T,vo=new T,fn=new T,$f=new De,Qf=new ht,vn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qf.setFromEuler(this),this.setFromQuaternion(Qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Es=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Uv=0,ep=new T,es=new ht,fi=new De,xo=new T,ta=new T,kv=new T,Bv=new ht,tp=new T(1,0,0),np=new T(0,1,0),ip=new T(0,0,1),rp={type:"added"},zv={type:"removed"},ts={type:"childadded",child:null},rh={type:"childremoved",child:null},nt=class s extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new vn,n=new ht,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ve}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(tp,e)}rotateY(e){return this.rotateOnAxis(np,e)}rotateZ(e){return this.rotateOnAxis(ip,e)}translateOnAxis(e,t){return ep.copy(e).applyQuaternion(this.quaternion),this.position.add(ep.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tp,e)}translateY(e){return this.translateOnAxis(np,e)}translateZ(e){return this.translateOnAxis(ip,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ta,xo,this.up):fi.lookAt(xo,ta,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),es.setFromRotationMatrix(fi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rp),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zv),rh.child=e,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rp),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,Bv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};nt.DEFAULT_UP=new T(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Nn=new T,pi=new T,sh=new T,mi=new T,ns=new T,is=new T,sp=new T,ah=new T,oh=new T,ch=new T,xi=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Nn.subVectors(i,t),pi.subVectors(n,t),sh.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(pi),l=Nn.dot(sh),c=pi.dot(pi),h=pi.dot(sh),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,m=(a*h-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),pi.subVectors(e,t),Nn.cross(pi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Nn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;ns.subVectors(i,n),is.subVectors(r,n),ah.subVectors(e,n);let l=ns.dot(ah),c=is.dot(ah);if(l<=0&&c<=0)return t.copy(n);oh.subVectors(e,i);let h=ns.dot(oh),u=is.dot(oh);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ns,a);ch.subVectors(e,r);let f=ns.dot(ch),m=is.dot(ch);if(m>=0&&f<=m)return t.copy(r);let b=f*c-l*m;if(b<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(is,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return sp.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(sp,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function lh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=rt.workingColorSpace){if(e=Fd(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=lh(a,r,e+1/3),this.g=lh(a,r,e),this.b=lh(a,r,e-1/3)}return rt.toWorkingColorSpace(this,i),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Dg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Jl(e.r),this.g=Jl(e.g),this.b=Jl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return rt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Et(Kt.r*255,0,255))*65536+Math.round(Et(Kt.g*255,0,255))*256+Math.round(Et(Kt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,r=Kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=pt){rt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+t,zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zi),e.getHSL(_o);let n=fa(zi.h,_o.h,t),i=fa(zi.s,_o.s,t),r=fa(zi.l,_o.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new ge;ge.NAMES=Dg;var Hv=0,At=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Rr,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=uc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(n.blending=this.blending),this.side!==kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==uc&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pt=class extends At{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bi=Gv();function Gv(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function rn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Et(s,-65504,65504),bi.floatView[0]=s;let e=bi.uint32View[0],t=e>>23&511;return bi.baseTable[t]+((e&8388607)>>bi.shiftTable[t])}function ua(s){let e=s>>10;return bi.uint32View[0]=bi.mantissaTable[bi.offsetTable[e]+(s&1023)]+bi.exponentTable[e],bi.floatView[0]}var Od={toHalfFloat:rn,fromHalfFloat:ua},Ct=new T,yo=new Y,Oe=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sa&&(e.usage=this.usage),e}},fu=class extends Oe{constructor(e,t,n){super(new Int8Array(e),t,n)}},pu=class extends Oe{constructor(e,t,n){super(new Uint8Array(e),t,n)}},mu=class extends Oe{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},gu=class extends Oe{constructor(e,t,n){super(new Int16Array(e),t,n)}},Ca=class extends Oe{constructor(e,t,n){super(new Uint16Array(e),t,n)}},bu=class extends Oe{constructor(e,t,n){super(new Int32Array(e),t,n)}},Pa=class extends Oe{constructor(e,t,n){super(new Uint32Array(e),t,n)}},vu=class extends Oe{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=ua(this.array[e*this.itemSize]);return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=rn(t),this}getY(e){let t=ua(this.array[e*this.itemSize+1]);return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=rn(t),this}getZ(e){let t=ua(this.array[e*this.itemSize+2]);return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=rn(t),this}getW(e){let t=ua(this.array[e*this.itemSize+3]);return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=rn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=rn(t),this.array[e+1]=rn(n),this.array[e+2]=rn(i),this.array[e+3]=rn(r),this}},Ce=class extends Oe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Vv=0,An=new De,hh=new nt,rs=new T,pn=new dt,na=new dt,kt=new T,Ge=class s extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cg(e)?Pa:Ca)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ce(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];na.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(pn.min,na.min),pn.expandByPoint(kt),kt.addVectors(pn.max,na.max),pn.expandByPoint(kt)):(pn.expandByPoint(na.min),pn.expandByPoint(na.max))}pn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)kt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(rs.fromBufferAttribute(e,c),kt.add(rs)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new T,l[L]=new T;let c=new T,h=new T,u=new T,d=new Y,f=new Y,m=new Y,b=new T,g=new T;function p(L,w,y){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let F=1/(f.x*m.y-m.x*f.y);isFinite(F)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(F),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(F),o[L].add(b),o[w].add(b),o[y].add(b),l[L].add(g),l[w].add(g),l[y].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,w=x.length;L<w;++L){let y=x[L],F=y.start,O=y.count;for(let I=F,C=F+O;I<C;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new T,_=new T,E=new T,S=new T;function R(L){E.fromBufferAttribute(i,L),S.copy(E);let w=o[L];v.copy(w),v.sub(E.multiplyScalar(E.dot(w))).normalize(),_.crossVectors(S,w);let F=_.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,F)}for(let L=0,w=x.length;L<w;++L){let y=x[L],F=y.start,O=y.count;for(let I=F,C=F+O;I<C;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?f=l[b]*o.data.stride+o.offset:f=l[b]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ap=new De,dr=new $n,wo=new wt,op=new T,ss=new T,as=new T,os=new T,uh=new T,Mo=new T,So=new Y,Eo=new Y,Ao=new Y,cp=new T,lp=new T,hp=new T,To=new T,Ro=new T,it=class extends nt{constructor(e=new Ge,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(uh.fromBufferAttribute(u,e),a?Mo.addScaledVector(uh,h):Mo.addScaledVector(uh.sub(t),h))}t.add(Mo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),dr.copy(e.ray).recast(e.near),!(wo.containsPoint(dr.origin)===!1&&(dr.intersectSphere(wo,op)===null||dr.origin.distanceToSquared(op)>(e.far-e.near)**2))&&(ap.copy(r).invert(),dr.copy(e.ray).applyMatrix4(ap),!(n.boundingBox!==null&&dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,dr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,E=v;_<E;_+=3){let S=o.getX(_),R=o.getX(_+1),L=o.getX(_+2);i=Co(this,p,e,n,c,h,u,S,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);i=Co(this,a,e,n,c,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,E=v;_<E;_+=3){let S=_,R=_+1,L=_+2;i=Co(this,p,e,n,c,h,u,S,R,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(l.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,v=g+1,_=g+2;i=Co(this,a,e,n,c,h,u,x,v,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Wv(s,e,t,n,i,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===kn,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:s}}function Co(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,ss),s.getVertexPosition(l,as),s.getVertexPosition(c,os);let h=Wv(s,e,t,n,ss,as,os,To);if(h){i&&(So.fromBufferAttribute(i,o),Eo.fromBufferAttribute(i,l),Ao.fromBufferAttribute(i,c),h.uv=xi.getInterpolation(To,ss,as,os,So,Eo,Ao,new Y)),r&&(So.fromBufferAttribute(r,o),Eo.fromBufferAttribute(r,l),Ao.fromBufferAttribute(r,c),h.uv1=xi.getInterpolation(To,ss,as,os,So,Eo,Ao,new Y)),a&&(cp.fromBufferAttribute(a,o),lp.fromBufferAttribute(a,l),hp.fromBufferAttribute(a,c),h.normal=xi.getInterpolation(To,ss,as,os,cp,lp,hp,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new T,materialIndex:0};xi.getNormal(ss,as,os,u.normal),h.face=u}return h}var Nr=class s extends Ge{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function m(b,g,p,x,v,_,E,S,R,L,w){let y=_/R,F=E/L,O=_/2,I=E/2,C=S/2,P=R+1,B=L+1,X=0,U=0,V=new T;for(let j=0;j<B;j++){let ie=j*F-I;for(let ve=0;ve<P;ve++){let Te=ve*y-O;V[b]=Te*x,V[g]=ie*v,V[p]=C,c.push(V.x,V.y,V.z),V[b]=0,V[g]=0,V[p]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(ve/R),u.push(1-j/L),X+=1}}for(let j=0;j<L;j++)for(let ie=0;ie<R;ie++){let ve=d+ie+P*j,Te=d+ie+P*(j+1),q=d+(ie+1)+P*(j+1),te=d+(ie+1)+P*j;l.push(ve,Te,te),l.push(Te,q,te),U+=6}o.addGroup(f,U,w),f+=U,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(s){let e={};for(let t=0;t<s.length;t++){let n=As(s[t]);for(let i in n)e[i]=n[i]}return e}function qv(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ig(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}var pl={clone:As,merge:$t},Xv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ht=class extends At{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xv,this.fragmentShader=jv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ts=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hi=new T,up=new Y,dp=new Y,bt=class extends Ts{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,up,dp),t.subVectors(dp,up)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cs=-90,ls=1,pc=class extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bt(cs,ls,e,t);i.layers=this.layers,this.add(i);let r=new bt(cs,ls,e,t);r.layers=this.layers,this.add(r);let a=new bt(cs,ls,e,t);a.layers=this.layers,this.add(a);let o=new bt(cs,ls,e,t);o.layers=this.layers,this.add(o);let l=new bt(cs,ls,e,t);l.layers=this.layers,this.add(l);let c=new bt(cs,ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fr=class extends Mt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mc=class extends It{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Fr(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nr(5,5,5),r=new Ht({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:yi});r.uniforms.tEquirect.value=t;let a=new it(i,r),o=t.minFilter;return t.minFilter===mn&&(t.minFilter=ct),new pc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},dh=new T,Kv=new T,Yv=new Ve,sn=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=dh.subVectors(n,t).cross(Kv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(dh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yv.getNormalMatrix(e),i=this.coplanarPoint(dh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fr=new wt,Po=new T,Or=class{constructor(e=new sn,t=new sn,n=new sn,i=new sn,r=new sn,a=new sn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],b=i[10],g=i[11],p=i[12],x=i[13],v=i[14],_=i[15];if(n[0].setComponents(l-r,d-c,g-f,_-p).normalize(),n[1].setComponents(l+r,d+c,g+f,_+p).normalize(),n[2].setComponents(l+a,d+h,g+m,_+x).normalize(),n[3].setComponents(l-a,d-h,g-m,_-x).normalize(),n[4].setComponents(l-o,d-u,g-b,_-v).normalize(),t===Jn)n[5].setComponents(l+o,d+u,g+b,_+v).normalize();else if(t===Aa)n[5].setComponents(o,u,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Po.x=i.normal.x>0?e.max.x:e.min.x,Po.y=i.normal.y>0?e.max.y:e.min.y,Po.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ng(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Jv(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){let b=d[f];s.bufferSubData(c,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ei=class s extends Ge{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let v=0;v<c;v++){let _=v*u-r;m.push(_,-x,0),b.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let v=x+c*p,_=x+c*(p+1),E=x+1+c*(p+1),S=x+1+c*p;f.push(v,_,S),f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(b,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
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
#endif`,Qv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ex=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ix=`#ifdef USE_AOMAP
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
#endif`,rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sx=`#ifdef USE_BATCHING
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
#endif`,ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ox=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hx=`#ifdef USE_IRIDESCENCE
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
#endif`,ux=`#ifdef USE_BUMPMAP
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
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_x=`#define PI 3.141592653589793
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
} // validated`,yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ax=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rx=`
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
}`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lx=`#ifdef USE_ENVMAP
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
#endif`,Dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kx=`#ifdef USE_GRADIENTMAP
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
}`,Bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gx=`uniform bool receiveShadow;
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
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kx=`PhysicalMaterial material;
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
#endif`,Yx=`struct PhysicalMaterial {
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
}`,Jx=`
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
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
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a_=`#if defined( USE_POINTS_UV )
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
#endif`,o_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u_=`#ifdef USE_MORPHNORMALS
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
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,x_=`#ifdef USE_NORMALMAP
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
#endif`,__=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,A_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U_=`#ifdef USE_SKINNING
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
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,H_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#ifdef USE_TRANSMISSION
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,J_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z_=`uniform sampler2D t2D;
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
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,ry=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`uniform float scale;
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
}`,ly=`uniform vec3 diffuse;
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
}`,hy=`#include <common>
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
}`,uy=`uniform vec3 diffuse;
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
}`,dy=`#define LAMBERT
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
}`,fy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,vy=`#define PHONG
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
}`,xy=`#define PHONG
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
}`,_y=`#define STANDARD
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
}`,yy=`#define STANDARD
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
}`,wy=`#define TOON
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
}`,My=`#define TOON
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
}`,Sy=`uniform float size;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ay=`#include <common>
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
}`,Ty=`uniform vec3 color;
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
}`,Ry=`uniform float rotation;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Zv,alphahash_pars_fragment:$v,alphamap_fragment:Qv,alphamap_pars_fragment:ex,alphatest_fragment:tx,alphatest_pars_fragment:nx,aomap_fragment:ix,aomap_pars_fragment:rx,batching_pars_vertex:sx,batching_vertex:ax,begin_vertex:ox,beginnormal_vertex:cx,bsdfs:lx,iridescence_fragment:hx,bumpmap_pars_fragment:ux,clipping_planes_fragment:dx,clipping_planes_pars_fragment:fx,clipping_planes_pars_vertex:px,clipping_planes_vertex:mx,color_fragment:gx,color_pars_fragment:bx,color_pars_vertex:vx,color_vertex:xx,common:_x,cube_uv_reflection_fragment:yx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Mx,displacementmap_vertex:Sx,emissivemap_fragment:Ex,emissivemap_pars_fragment:Ax,colorspace_fragment:Tx,colorspace_pars_fragment:Rx,envmap_fragment:Cx,envmap_common_pars_fragment:Px,envmap_pars_fragment:Lx,envmap_pars_vertex:Dx,envmap_physical_pars_fragment:Vx,envmap_vertex:Ix,fog_vertex:Nx,fog_pars_vertex:Fx,fog_fragment:Ox,fog_pars_fragment:Ux,gradientmap_pars_fragment:kx,lightmap_pars_fragment:Bx,lights_lambert_fragment:zx,lights_lambert_pars_fragment:Hx,lights_pars_begin:Gx,lights_toon_fragment:Wx,lights_toon_pars_fragment:qx,lights_phong_fragment:Xx,lights_phong_pars_fragment:jx,lights_physical_fragment:Kx,lights_physical_pars_fragment:Yx,lights_fragment_begin:Jx,lights_fragment_maps:Zx,lights_fragment_end:$x,logdepthbuf_fragment:Qx,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:t_,logdepthbuf_vertex:n_,map_fragment:i_,map_pars_fragment:r_,map_particle_fragment:s_,map_particle_pars_fragment:a_,metalnessmap_fragment:o_,metalnessmap_pars_fragment:c_,morphinstance_vertex:l_,morphcolor_vertex:h_,morphnormal_vertex:u_,morphtarget_pars_vertex:d_,morphtarget_vertex:f_,normal_fragment_begin:p_,normal_fragment_maps:m_,normal_pars_fragment:g_,normal_pars_vertex:b_,normal_vertex:v_,normalmap_pars_fragment:x_,clearcoat_normal_fragment_begin:__,clearcoat_normal_fragment_maps:y_,clearcoat_pars_fragment:w_,iridescence_pars_fragment:M_,opaque_fragment:S_,packing:E_,premultiplied_alpha_fragment:A_,project_vertex:T_,dithering_fragment:R_,dithering_pars_fragment:C_,roughnessmap_fragment:P_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:I_,shadowmap_vertex:N_,shadowmask_pars_fragment:F_,skinbase_vertex:O_,skinning_pars_vertex:U_,skinning_vertex:k_,skinnormal_vertex:B_,specularmap_fragment:z_,specularmap_pars_fragment:H_,tonemapping_fragment:G_,tonemapping_pars_fragment:V_,transmission_fragment:W_,transmission_pars_fragment:q_,uv_pars_fragment:X_,uv_pars_vertex:j_,uv_vertex:K_,worldpos_vertex:Y_,background_vert:J_,background_frag:Z_,backgroundCube_vert:$_,backgroundCube_frag:Q_,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distanceRGBA_vert:ry,distanceRGBA_frag:sy,equirect_vert:ay,equirect_frag:oy,linedashed_vert:cy,linedashed_frag:ly,meshbasic_vert:hy,meshbasic_frag:uy,meshlambert_vert:dy,meshlambert_frag:fy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:by,meshphong_vert:vy,meshphong_frag:xy,meshphysical_vert:_y,meshphysical_frag:yy,meshtoon_vert:wy,meshtoon_frag:My,points_vert:Sy,points_frag:Ey,shadow_vert:Ay,shadow_frag:Ty,sprite_vert:Ry,sprite_frag:Cy},ye={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Fn={basic:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ge(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:$t([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:$t([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:$t([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new ge(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:$t([ye.points,ye.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:$t([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:$t([ye.common,ye.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:$t([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:$t([ye.sprite,ye.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:$t([ye.common,ye.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:$t([ye.lights,ye.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Fn.physical={uniforms:$t([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Y(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Y},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Lo={r:0,b:0,g:0},pr=new vn,Py=new De;function Ly(s,e,t,n,i,r,a){let o=new ge(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function b(x){let v=!1,_=m(x);_===null?p(o,l):_&&_.isColor&&(p(_,1),v=!0);let E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function g(x,v){let _=m(v);_&&(_.isCubeTexture||_.mapping===Hs)?(h===void 0&&(h=new it(new Nr(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:As(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Py.makeRotationFromEuler(pr)),h.material.toneMapped=rt.getTransfer(_.colorSpace)!==gt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new it(new Ei(2,2),new Ht({name:"BackgroundMaterial",uniforms:As(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(Lo,Ig(s)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:b,addToRenderList:g}}function Dy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(y,F,O,I,C){let P=!1,B=u(I,O,F);r!==B&&(r=B,c(r.object)),P=f(y,I,O,C),P&&m(y,I,O,C),C!==null&&e.update(C,s.ELEMENT_ARRAY_BUFFER),(P||a)&&(a=!1,_(y,F,O,I),C!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(C).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,F,O){let I=O.wireframe===!0,C=n[y.id];C===void 0&&(C={},n[y.id]=C);let P=C[F.id];P===void 0&&(P={},C[F.id]=P);let B=P[I];return B===void 0&&(B=d(l()),P[I]=B),B}function d(y){let F=[],O=[],I=[];for(let C=0;C<t;C++)F[C]=0,O[C]=0,I[C]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:O,attributeDivisors:I,object:y,attributes:{},index:null}}function f(y,F,O,I){let C=r.attributes,P=F.attributes,B=0,X=O.getAttributes();for(let U in X)if(X[U].location>=0){let j=C[U],ie=P[U];if(ie===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function m(y,F,O,I){let C={},P=F.attributes,B=0,X=O.getAttributes();for(let U in X)if(X[U].location>=0){let j=P[U];j===void 0&&(U==="instanceMatrix"&&y.instanceMatrix&&(j=y.instanceMatrix),U==="instanceColor"&&y.instanceColor&&(j=y.instanceColor));let ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),C[U]=ie,B++}r.attributes=C,r.attributesNum=B,r.index=I}function b(){let y=r.newAttributes;for(let F=0,O=y.length;F<O;F++)y[F]=0}function g(y){p(y,0)}function p(y,F){let O=r.newAttributes,I=r.enabledAttributes,C=r.attributeDivisors;O[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),C[y]!==F&&(s.vertexAttribDivisor(y,F),C[y]=F)}function x(){let y=r.newAttributes,F=r.enabledAttributes;for(let O=0,I=F.length;O<I;O++)F[O]!==y[O]&&(s.disableVertexAttribArray(O),F[O]=0)}function v(y,F,O,I,C,P,B){B===!0?s.vertexAttribIPointer(y,F,O,C,P):s.vertexAttribPointer(y,F,O,I,C,P)}function _(y,F,O,I){b();let C=I.attributes,P=O.getAttributes(),B=F.defaultAttributeValues;for(let X in P){let U=P[X];if(U.location>=0){let V=C[X];if(V===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(V=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(V=y.instanceColor)),V!==void 0){let j=V.normalized,ie=V.itemSize,ve=e.get(V);if(ve===void 0)continue;let Te=ve.buffer,q=ve.type,te=ve.bytesPerElement,be=q===s.INT||q===s.UNSIGNED_INT||V.gpuType===Ed;if(V.isInterleavedBufferAttribute){let ae=V.data,Re=ae.stride,_e=V.offset;if(ae.isInstancedInterleavedBuffer){for(let k=0;k<U.locationSize;k++)p(U.location+k,ae.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let k=0;k<U.locationSize;k++)g(U.location+k);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let k=0;k<U.locationSize;k++)v(U.location+k,ie/U.locationSize,q,j,Re*te,(_e+ie/U.locationSize*k)*te,be)}else{if(V.isInstancedBufferAttribute){for(let ae=0;ae<U.locationSize;ae++)p(U.location+ae,V.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ae=0;ae<U.locationSize;ae++)g(U.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Te);for(let ae=0;ae<U.locationSize;ae++)v(U.location+ae,ie/U.locationSize,q,j,ie*te,ie/U.locationSize*ae*te,be)}}else if(B!==void 0){let j=B[X];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(U.location,j);break;case 3:s.vertexAttrib3fv(U.location,j);break;case 4:s.vertexAttrib4fv(U.location,j);break;default:s.vertexAttrib1fv(U.location,j)}}}}x()}function E(){L();for(let y in n){let F=n[y];for(let O in F){let I=F[O];for(let C in I)h(I[C].object),delete I[C];delete F[O]}delete n[y]}}function S(y){if(n[y.id]===void 0)return;let F=n[y.id];for(let O in F){let I=F[O];for(let C in I)h(I[C].object),delete I[C];delete F[O]}delete n[y.id]}function R(y){for(let F in n){let O=n[F];if(O[y.id]===void 0)continue;let I=O[y.id];for(let C in I)h(I[C].object),delete I[C];delete O[y.id]}}function L(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Iy(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(c[f],h[f]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let b=0;b<u;b++)m+=h[b];for(let b=0;b<d.length;b++)t.update(m,n,d[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Ny(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==Vt&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let R=S===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==zn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==an&&!R)}function l(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:b,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:_,maxSamples:E}}function Fy(s){let e=this,t=null,n=0,i=!1,r=!1,a=new sn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):c();else{let x=r?0:n,v=x*4,_=p.clippingState||null;l.value=_,_=h(m,d,v,f);for(let E=0;E!==v;++E)_[E]=t[E];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==b;++v,_+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function Oy(s){let e=new WeakMap;function t(a,o){return o===va?a.mapping=Mi:o===xa&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===va||o===xa)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new mc(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qn=class extends Ts{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vs=4,fp=[.125,.215,.35,.446,.526,.582],Sr=20,fh=new Qn,pp=new ge,ph=null,mh=0,gh=0,bh=!1,Mr=(1+Math.sqrt(5))/2,hs=1/Mr,mp=[new T(-Mr,hs,0),new T(Mr,hs,0),new T(-hs,0,Mr),new T(hs,0,Mr),new T(0,Mr,-hs),new T(0,Mr,hs),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],La=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=bh,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ct,minFilter:ct,generateMipmaps:!1,type:Xn,format:Vt,colorSpace:Ut,depthBuffer:!1},i=gp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Uy(r)),this._blurMaterial=ky(r,e,t)}return i}_compileMaterial(e){let t=new it(this._lodPlanes[0],e);this._renderer.compile(t,fh)}_sceneToCubeUV(e,t,n,i){let o=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pp),h.toneMapping=Un,h.autoClear=!1;let f=new Pt({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),m=new it(new Nr,f),b=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,b=!0):(f.color.copy(pp),b=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;Do(i,x*v,p>2?v:0,v,v),h.setRenderTarget(i),b&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Mi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new it(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Do(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mp[(i-r-1)%mp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Sr-1),b=r/m,g=isFinite(r)?1+Math.floor(h*b):Sr;g>Sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);let p=[],x=0;for(let R=0;R<Sr;++R){let L=R/b,w=Math.exp(-L*L/2);p.push(w),R===0?x+=w:R<g&&(x+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[i],E=3*_*(i>v-vs?i-v+vs:0),S=4*(this._cubeSize-_);Do(t,E,S,3*_,2*_),l.setRenderTarget(t),l.render(u,fh)}};function Uy(s){let e=[],t=[],n=[],i=s,r=s-vs+1+fp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let l=1/o;a>s-vs?l=fp[a-s+vs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,b=3,g=2,p=1,x=new Float32Array(b*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let S=0;S<f;S++){let R=S%3*2/3-1,L=S>2?0:-1,w=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];x.set(w,b*m*S),v.set(d,g*m*S);let y=[S,S,S,S,S,S];_.set(y,p*m*S)}let E=new Ge;E.setAttribute("position",new Oe(x,b)),E.setAttribute("uv",new Oe(v,g)),E.setAttribute("faceIndex",new Oe(_,p)),e.push(E),i>vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gp(s,e,t){let n=new It(s,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Do(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ky(s,e,t){let n=new Float32Array(Sr),i=new T(0,1,0);return new Ht({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bp(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function vp(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Ud(){return`

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
	`}function By(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===va||l===xa,h=l===Mi||l===Xi;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new La(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new La(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hy(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let b=d.morphAttributes[m];for(let g=0,p=b.length;g<p;g++)e.remove(b[g])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let m in d)e.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let b=f[m];for(let g=0,p=b.length;g<p;g++)e.update(b[g],s.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(f!==null){let x=f.array;b=f.version;for(let v=0,_=x.length;v<_;v+=3){let E=x[v+0],S=x[v+1],R=x[v+2];d.push(E,S,S,R,R,E)}}else if(m!==void 0){let x=m.array;b=m.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let E=v+0,S=v+1,R=v+2;d.push(E,S,S,R,R,E)}}else return;let g=new(Cg(d)?Pa:Ca)(d,1);g.version=b;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Gy(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;let b=e.get("WEBGL_multi_draw");if(b===null)for(let g=0;g<m;g++)this.render(d[g]/a,f[g]);else{b.multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}}function u(d,f,m,b){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],b[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x];for(let x=0;x<b.length;x++)t.update(p,n,b[x])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Wy(s,e,t){let n=new WeakMap,i=new et;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),b===!0&&(v=3);let _=o.attributes.position.count*v,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*E*4*u),R=new Ss(S,_,E,u);R.type=an,R.needsUpdate=!0;let L=v*4;for(let y=0;y<u;y++){let F=g[y],O=p[y],I=x[y],C=_*E*4*y;for(let P=0;P<F.count;P++){let B=P*L;f===!0&&(i.fromBufferAttribute(F,P),S[C+B+0]=i.x,S[C+B+1]=i.y,S[C+B+2]=i.z,S[C+B+3]=0),m===!0&&(i.fromBufferAttribute(O,P),S[C+B+4]=i.x,S[C+B+5]=i.y,S[C+B+6]=i.z,S[C+B+7]=0),b===!0&&(i.fromBufferAttribute(I,P),S[C+B+8]=i.x,S[C+B+9]=i.y,S[C+B+10]=i.z,S[C+B+11]=I.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new Y(_,E)},n.set(o,d),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<c.length;b++)f+=c[b];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",m),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function qy(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ur=class extends Mt{constructor(e,t,n,i,r,a,o,l,c,h){if(h=h!==void 0?h:Pr,h!==Pr&&h!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Pr&&(n=Si),n===void 0&&h===ws&&(n=Gs),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Fg=new Mt,Og=new Ur(1,1);Og.compareFunction=Nd;var Ug=new Ss,kg=new Ra,Bg=new Fr,xp=[],_p=[],yp=new Float32Array(16),wp=new Float32Array(9),Mp=new Float32Array(4);function Ws(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=xp[i];if(r===void 0&&(r=new Float32Array(i),xp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Nt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ml(s,e){let t=_p[e];t===void 0&&(t=new Int32Array(e),_p[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Xy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2fv(this.addr,e),Ft(t,e)}}function Ky(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;s.uniform3fv(this.addr,e),Ft(t,e)}}function Yy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4fv(this.addr,e),Ft(t,e)}}function Jy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;Mp.set(n),s.uniformMatrix2fv(this.addr,!1,Mp),Ft(t,n)}}function Zy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;wp.set(n),s.uniformMatrix3fv(this.addr,!1,wp),Ft(t,n)}}function $y(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Nt(t,n))return;yp.set(n),s.uniformMatrix4fv(this.addr,!1,yp),Ft(t,n)}}function Qy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ew(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2iv(this.addr,e),Ft(t,e)}}function tw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3iv(this.addr,e),Ft(t,e)}}function nw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4iv(this.addr,e),Ft(t,e)}}function iw(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;s.uniform2uiv(this.addr,e),Ft(t,e)}}function sw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;s.uniform3uiv(this.addr,e),Ft(t,e)}}function aw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;s.uniform4uiv(this.addr,e),Ft(t,e)}}function ow(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Og:Fg;t.setTexture2D(e||r,i)}function cw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||kg,i)}function lw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Bg,i)}function hw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ug,i)}function uw(s){switch(s){case 5126:return Xy;case 35664:return jy;case 35665:return Ky;case 35666:return Yy;case 35674:return Jy;case 35675:return Zy;case 35676:return $y;case 5124:case 35670:return Qy;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return lw;case 36289:case 36303:case 36311:case 36292:return hw}}function dw(s,e){s.uniform1fv(this.addr,e)}function fw(s,e){let t=Ws(e,this.size,2);s.uniform2fv(this.addr,t)}function pw(s,e){let t=Ws(e,this.size,3);s.uniform3fv(this.addr,t)}function mw(s,e){let t=Ws(e,this.size,4);s.uniform4fv(this.addr,t)}function gw(s,e){let t=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bw(s,e){let t=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function vw(s,e){let t=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xw(s,e){s.uniform1iv(this.addr,e)}function _w(s,e){s.uniform2iv(this.addr,e)}function yw(s,e){s.uniform3iv(this.addr,e)}function ww(s,e){s.uniform4iv(this.addr,e)}function Mw(s,e){s.uniform1uiv(this.addr,e)}function Sw(s,e){s.uniform2uiv(this.addr,e)}function Ew(s,e){s.uniform3uiv(this.addr,e)}function Aw(s,e){s.uniform4uiv(this.addr,e)}function Tw(s,e,t){let n=this.cache,i=e.length,r=ml(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Fg,r[a])}function Rw(s,e,t){let n=this.cache,i=e.length,r=ml(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||kg,r[a])}function Cw(s,e,t){let n=this.cache,i=e.length,r=ml(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Bg,r[a])}function Pw(s,e,t){let n=this.cache,i=e.length,r=ml(t,i);Nt(n,r)||(s.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ug,r[a])}function Lw(s){switch(s){case 5126:return dw;case 35664:return fw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return bw;case 35676:return vw;case 5124:case 35670:return xw;case 35667:case 35671:return _w;case 35668:case 35672:return yw;case 35669:case 35673:return ww;case 5125:return Mw;case 36294:return Sw;case 36295:return Ew;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}var xu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uw(t.type)}},_u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lw(t.type)}},yu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},vh=/(\w+)(\])?(\[|\.)?/g;function Sp(s,e){s.seq.push(e),s.map[e.id]=e}function Dw(s,e,t){let n=s.name,i=n.length;for(vh.lastIndex=0;;){let r=vh.exec(n),a=vh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Sp(t,c===void 0?new xu(o,s,e):new _u(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new yu(o),Sp(t,u)),t=u}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Dw(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ep(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Iw=37297,Nw=0;function Fw(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ow(s){let e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(s),n;switch(e===t?n="":e===Ma&&t===wa?n="LinearDisplayP3ToLinearSRGB":e===wa&&t===Ma&&(n="LinearSRGBToLinearDisplayP3"),s){case Ut:case to:return[n,"LinearTransferOETF"];case pt:case fl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ap(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Fw(s.getShaderSource(e),a)}else return i}function Uw(s,e){let t=Ow(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function kw(s,e){let t;switch(e){case eg:t="Linear";break;case tg:t="Reinhard";break;case ng:t="OptimizedCineon";break;case ig:t="ACESFilmic";break;case sg:t="AgX";break;case ag:t="Neutral";break;case rg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function zw(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hw(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function da(s){return s!==""}function Tp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(s){return s.replace(Gw,Ww)}var Vw=new Map;function Ww(s,e){let t=He[e];if(t===void 0){let n=Vw.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wu(t)}var qw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cp(s){return s.replace(qw,Xw)}function Xw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function jw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Kw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Mi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Xi&&(e="ENVMAP_MODE_REFRACTION"),e}function Jw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $a:e="ENVMAP_BLENDING_MULTIPLY";break;case $m:e="ENVMAP_BLENDING_MIX";break;case Qm:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $w(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=jw(t),c=Kw(t),h=Yw(t),u=Jw(t),d=Zw(t),f=Bw(t),m=zw(r),b=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(da).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(da).join(`
`),p.length>0&&(p+=`
`)):(g=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?He.tonemapping_pars_fragment:"",t.toneMapping!==Un?kw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Uw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),a=wu(a),a=Tp(a,t),a=Rp(a,t),o=wu(o),o=Tp(o,t),o=Rp(o,t),a=Cp(a),o=Cp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=x+g+a,_=x+p+o,E=Ep(i,i.VERTEX_SHADER,v),S=Ep(i,i.FRAGMENT_SHADER,_);i.attachShader(b,E),i.attachShader(b,S),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(F){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(b).trim(),I=i.getShaderInfoLog(E).trim(),C=i.getShaderInfoLog(S).trim(),P=!0,B=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(P=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,E,S);else{let X=Ap(i,E,"vertex"),U=Ap(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+O+`
`+X+`
`+U)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(I===""||C==="")&&(B=!1);B&&(F.diagnostics={runnable:P,programLog:O,vertexShader:{log:I,prefix:g},fragmentShader:{log:C,prefix:p}})}i.deleteShader(E),i.deleteShader(S),L=new ys(i,b),w=Hw(i,b)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(b,Iw)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=S,this}var Qw=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Su(e),t.set(e,n)),n}},Su=class{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}};function eM(s,e,t,n,i,r,a){let o=new Es,l=new Mu,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return c.add(w),w===0?"uv":`uv${w}`}function g(w,y,F,O,I){let C=O.fog,P=I.geometry,B=w.isMeshStandardMaterial?O.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||B),U=X&&X.mapping===Hs?X.image.height:null,V=m[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let j=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ie=j!==void 0?j.length:0,ve=0;P.morphAttributes.position!==void 0&&(ve=1),P.morphAttributes.normal!==void 0&&(ve=2),P.morphAttributes.color!==void 0&&(ve=3);let Te,q,te,be;if(V){let Xe=Fn[V];Te=Xe.vertexShader,q=Xe.fragmentShader}else Te=w.vertexShader,q=w.fragmentShader,l.update(w),te=l.getVertexShaderID(w),be=l.getFragmentShaderID(w);let ae=s.getRenderTarget(),Re=I.isInstancedMesh===!0,_e=I.isBatchedMesh===!0,k=!!w.map,Ee=!!w.matcap,$=!!X,re=!!w.aoMap,ee=!!w.lightMap,ue=!!w.bumpMap,se=!!w.normalMap,we=!!w.displacementMap,Pe=!!w.emissiveMap,N=!!w.metalnessMap,A=!!w.roughnessMap,W=w.anisotropy>0,ne=w.clearcoat>0,oe=w.dispersion>0,z=w.iridescence>0,fe=w.sheen>0,ce=w.transmission>0,de=W&&!!w.anisotropyMap,Ae=ne&&!!w.clearcoatMap,he=ne&&!!w.clearcoatNormalMap,Me=ne&&!!w.clearcoatRoughnessMap,Le=z&&!!w.iridescenceMap,xe=z&&!!w.iridescenceThicknessMap,pe=fe&&!!w.sheenColorMap,Fe=fe&&!!w.sheenRoughnessMap,ze=!!w.specularMap,st=!!w.specularColorMap,We=!!w.specularIntensityMap,M=ce&&!!w.transmissionMap,H=ce&&!!w.thicknessMap,K=!!w.gradientMap,le=!!w.alphaMap,me=w.alphaTest>0,qe=!!w.alphaHash,Je=!!w.extensions,Ue=Un;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ue=s.toneMapping);let at={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:Te,fragmentShader:q,defines:w.defines,customVertexShaderID:te,customFragmentShaderID:be,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:_e,instancing:Re,instancingColor:Re&&I.instanceColor!==null,instancingMorph:Re&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ut,alphaToCoverage:!!w.alphaToCoverage,map:k,matcap:Ee,envMap:$,envMapMode:$&&X.mapping,envMapCubeUVHeight:U,aoMap:re,lightMap:ee,bumpMap:ue,normalMap:se,displacementMap:d&&we,emissiveMap:Pe,normalMapObjectSpace:se&&w.normalMapType===yg,normalMapTangentSpace:se&&w.normalMapType===er,metalnessMap:N,roughnessMap:A,anisotropy:W,anisotropyMap:de,clearcoat:ne,clearcoatMap:Ae,clearcoatNormalMap:he,clearcoatRoughnessMap:Me,dispersion:oe,iridescence:z,iridescenceMap:Le,iridescenceThicknessMap:xe,sheen:fe,sheenColorMap:pe,sheenRoughnessMap:Fe,specularMap:ze,specularColorMap:st,specularIntensityMap:We,transmission:ce,transmissionMap:M,thicknessMap:H,gradientMap:K,opaque:w.transparent===!1&&w.blending===Rr&&w.alphaToCoverage===!1,alphaMap:le,alphaTest:me,alphaHash:qe,combine:w.combine,mapUv:k&&b(w.map.channel),aoMapUv:re&&b(w.aoMap.channel),lightMapUv:ee&&b(w.lightMap.channel),bumpMapUv:ue&&b(w.bumpMap.channel),normalMapUv:se&&b(w.normalMap.channel),displacementMapUv:we&&b(w.displacementMap.channel),emissiveMapUv:Pe&&b(w.emissiveMap.channel),metalnessMapUv:N&&b(w.metalnessMap.channel),roughnessMapUv:A&&b(w.roughnessMap.channel),anisotropyMapUv:de&&b(w.anisotropyMap.channel),clearcoatMapUv:Ae&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:he&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&b(w.sheenRoughnessMap.channel),specularMapUv:ze&&b(w.specularMap.channel),specularColorMapUv:st&&b(w.specularColorMap.channel),specularIntensityMapUv:We&&b(w.specularIntensityMap.channel),transmissionMapUv:M&&b(w.transmissionMap.channel),thicknessMapUv:H&&b(w.thicknessMap.channel),alphaMapUv:le&&b(w.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(se||W),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!P.attributes.uv&&(k||le),fog:!!C,useFog:w.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:I.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,useLegacyLights:s._useLegacyLights,decodeVideoTexture:k&&w.map.isVideoTexture===!0&&rt.getTransfer(w.map.colorSpace)===gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Bt,flipSided:w.side===zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return at.vertexUv1s=c.has(1),at.vertexUv2s=c.has(2),at.vertexUv3s=c.has(3),c.clear(),at}function p(w){let y=[];if(w.shaderID?y.push(w.shaderID):(y.push(w.customVertexShaderID),y.push(w.customFragmentShaderID)),w.defines!==void 0)for(let F in w.defines)y.push(F),y.push(w.defines[F]);return w.isRawShaderMaterial===!1&&(x(y,w),v(y,w),y.push(s.outputColorSpace)),y.push(w.customProgramCacheKey),y.join()}function x(w,y){w.push(y.precision),w.push(y.outputColorSpace),w.push(y.envMapMode),w.push(y.envMapCubeUVHeight),w.push(y.mapUv),w.push(y.alphaMapUv),w.push(y.lightMapUv),w.push(y.aoMapUv),w.push(y.bumpMapUv),w.push(y.normalMapUv),w.push(y.displacementMapUv),w.push(y.emissiveMapUv),w.push(y.metalnessMapUv),w.push(y.roughnessMapUv),w.push(y.anisotropyMapUv),w.push(y.clearcoatMapUv),w.push(y.clearcoatNormalMapUv),w.push(y.clearcoatRoughnessMapUv),w.push(y.iridescenceMapUv),w.push(y.iridescenceThicknessMapUv),w.push(y.sheenColorMapUv),w.push(y.sheenRoughnessMapUv),w.push(y.specularMapUv),w.push(y.specularColorMapUv),w.push(y.specularIntensityMapUv),w.push(y.transmissionMapUv),w.push(y.thicknessMapUv),w.push(y.combine),w.push(y.fogExp2),w.push(y.sizeAttenuation),w.push(y.morphTargetsCount),w.push(y.morphAttributeCount),w.push(y.numDirLights),w.push(y.numPointLights),w.push(y.numSpotLights),w.push(y.numSpotLightMaps),w.push(y.numHemiLights),w.push(y.numRectAreaLights),w.push(y.numDirLightShadows),w.push(y.numPointLightShadows),w.push(y.numSpotLightShadows),w.push(y.numSpotLightShadowsWithMaps),w.push(y.numLightProbes),w.push(y.shadowMapType),w.push(y.toneMapping),w.push(y.numClippingPlanes),w.push(y.numClipIntersection),w.push(y.depthPacking)}function v(w,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),w.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),w.push(o.mask)}function _(w){let y=m[w.type],F;if(y){let O=Fn[y];F=pl.clone(O.uniforms)}else F=w.uniforms;return F}function E(w,y){let F;for(let O=0,I=h.length;O<I;O++){let C=h[O];if(C.cacheKey===y){F=C,++F.usedTimes;break}}return F===void 0&&(F=new $w(s,y,w,r),h.push(F)),F}function S(w){if(--w.usedTimes===0){let y=h.indexOf(w);h[y]=h[h.length-1],h.pop(),w.destroy()}}function R(w){l.remove(w)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:L}}function tM(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function nM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Lp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Dp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,b,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:b,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=b,p.group=g),e++,p}function o(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,m,b,g){let p=a(u,d,f,m,b,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||nM),n.length>1&&n.sort(d||Lp),i.length>1&&i.sort(d||Lp)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function iM(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Dp,s.set(n,[a])):i>=r.length?(a=new Dp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function rM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function sM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var aM=0;function oM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cM(s){let e=new rM,t=sM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);let i=new T,r=new De,a=new De;function o(c,h){let u=0,d=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,b=0,g=0,p=0,x=0,v=0,_=0,E=0,S=0,R=0,L=0;c.sort(oM);let w=h===!0?Math.PI:1;for(let F=0,O=c.length;F<O;F++){let I=c[F],C=I.color,P=I.intensity,B=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=C.r*P*w,d+=C.g*P*w,f+=C.b*P*w;else if(I.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(I.sh.coefficients[U],P);L++}else if(I.isDirectionalLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*w),I.castShadow){let V=I.shadow,j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.directionalShadow[m]=j,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,v++}n.directional[m]=U,m++}else if(I.isSpotLight){let U=e.get(I);U.position.setFromMatrixPosition(I.matrixWorld),U.color.copy(C).multiplyScalar(P*w),U.distance=B,U.coneCos=Math.cos(I.angle),U.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),U.decay=I.decay,n.spot[g]=U;let V=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,V.updateMatrices(I),I.castShadow&&R++),n.spotLightMatrix[g]=V.matrix,I.castShadow){let j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,n.spotShadow[g]=j,n.spotShadowMap[g]=X,E++}g++}else if(I.isRectAreaLight){let U=e.get(I);U.color.copy(C).multiplyScalar(P),U.halfWidth.set(I.width*.5,0,0),U.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=U,p++}else if(I.isPointLight){let U=e.get(I);if(U.color.copy(I.color).multiplyScalar(I.intensity*w),U.distance=I.distance,U.decay=I.decay,I.castShadow){let V=I.shadow,j=t.get(I);j.shadowBias=V.bias,j.shadowNormalBias=V.normalBias,j.shadowRadius=V.radius,j.shadowMapSize=V.mapSize,j.shadowCameraNear=V.camera.near,j.shadowCameraFar=V.camera.far,n.pointShadow[b]=j,n.pointShadowMap[b]=X,n.pointShadowMatrix[b]=I.shadow.matrix,_++}n.point[b]=U,b++}else if(I.isHemisphereLight){let U=e.get(I);U.skyColor.copy(I.color).multiplyScalar(P*w),U.groundColor.copy(I.groundColor).multiplyScalar(P*w),n.hemi[x]=U,x++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let y=n.hash;(y.directionalLength!==m||y.pointLength!==b||y.spotLength!==g||y.rectAreaLength!==p||y.hemiLength!==x||y.numDirectionalShadows!==v||y.numPointShadows!==_||y.numSpotShadows!==E||y.numSpotMaps!==S||y.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=b,n.hemi.length=x,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=E+S-R,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=L,y.directionalLength=m,y.pointLength=b,y.spotLength=g,y.rectAreaLength=p,y.hemiLength=x,y.numDirectionalShadows=v,y.numPointShadows=_,y.numSpotShadows=E,y.numSpotMaps=S,y.numLightProbes=L,n.version=aM++)}function l(c,h){let u=0,d=0,f=0,m=0,b=0,g=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[b];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),b++}}}return{setup:o,setupView:l,state:n}}function Ip(s){let e=new cM(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(h){e.setup(t,h)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function lM(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Ip(s),e.set(i,[o])):r>=a.length?(o=new Ip(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ei=class extends At{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Da=class extends At{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},hM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uM=`uniform sampler2D shadow_pass;
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
}`;function dM(s,e,t){let n=new Or,i=new Y,r=new Y,a=new et,o=new ei({depthPacking:Wr}),l=new Da,c={},h=t.maxTextureSize,u={[kn]:zt,[zt]:kn,[Bt]:Bt},d=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:hM,fragmentShader:uM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Ge;m.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new it(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let p=this.type;this.render=function(S,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let w=s.getRenderTarget(),y=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),O=s.state;O.setBlending(yi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let I=p!==Yn&&this.type===Yn,C=p===Yn&&this.type!==Yn;for(let P=0,B=S.length;P<B;P++){let X=S[P],U=X.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);let V=U.getFrameExtents();if(i.multiply(V),r.copy(U.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/V.x),i.x=r.x*V.x,U.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/V.y),i.y=r.y*V.y,U.mapSize.y=r.y)),U.map===null||I===!0||C===!0){let ie=this.type!==Yn?{minFilter:vt,magFilter:vt}:{};U.map!==null&&U.map.dispose(),U.map=new It(i.x,i.y,ie),U.map.texture.name=X.name+".shadowMap",U.camera.updateProjectionMatrix()}s.setRenderTarget(U.map),s.clear();let j=U.getViewportCount();for(let ie=0;ie<j;ie++){let ve=U.getViewport(ie);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),O.viewport(a),U.updateMatrices(X,ie),n=U.getFrustum(),_(R,L,U.camera,X,this.type)}U.isPointLightShadow!==!0&&this.type===Yn&&x(U,L),U.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(w,y,F)};function x(S,R){let L=e.update(b);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new It(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,b,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,L,f,b,null)}function v(S,R,L,w){let y=null,F=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)y=F;else if(y=L.isPointLight===!0?l:o,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let O=y.uuid,I=R.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let P=C[I];P===void 0&&(P=y.clone(),C[I]=P,R.addEventListener("dispose",E)),y=P}if(y.visible=R.visible,y.wireframe=R.wireframe,w===Yn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let O=s.properties.get(y);O.light=L}return y}function _(S,R,L,w,y){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Yn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let I=e.update(S),C=S.material;if(Array.isArray(C)){let P=I.groups;for(let B=0,X=P.length;B<X;B++){let U=P[B],V=C[U.materialIndex];if(V&&V.visible){let j=v(S,V,w,y);S.onBeforeShadow(s,S,R,L,I,j,U),s.renderBufferDirect(L,null,I,j,S,U),S.onAfterShadow(s,S,R,L,I,j,U)}}}else if(C.visible){let P=v(S,C,w,y);S.onBeforeShadow(s,S,R,L,I,P,null),s.renderBufferDirect(L,null,I,P,S,null),S.onAfterShadow(s,S,R,L,I,P,null)}}let O=S.children;for(let I=0,C=O.length;I<C;I++)_(O[I],R,L,w,y)}function E(S){S.target.removeEventListener("dispose",E);for(let L in c){let w=c[L],y=S.target.uuid;y in w&&(w[y].dispose(),delete w[y])}}}function fM(s){function e(){let M=!1,H=new et,K=null,le=new et(0,0,0,0);return{setMask:function(me){K!==me&&!M&&(s.colorMask(me,me,me,me),K=me)},setLocked:function(me){M=me},setClear:function(me,qe,Je,Ue,at){at===!0&&(me*=Ue,qe*=Ue,Je*=Ue),H.set(me,qe,Je,Ue),le.equals(H)===!1&&(s.clearColor(me,qe,Je,Ue),le.copy(H))},reset:function(){M=!1,K=null,le.set(-1,0,0,0)}}}function t(){let M=!1,H=null,K=null,le=null;return{setTest:function(me){me?be(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(me){H!==me&&!M&&(s.depthMask(me),H=me)},setFunc:function(me){if(K!==me){switch(me){case qm:s.depthFunc(s.NEVER);break;case Xm:s.depthFunc(s.ALWAYS);break;case jm:s.depthFunc(s.LESS);break;case ba:s.depthFunc(s.LEQUAL);break;case Km:s.depthFunc(s.EQUAL);break;case Ym:s.depthFunc(s.GEQUAL);break;case Jm:s.depthFunc(s.GREATER);break;case Zm:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=me}},setLocked:function(me){M=me},setClear:function(me){le!==me&&(s.clearDepth(me),le=me)},reset:function(){M=!1,H=null,K=null,le=null}}}function n(){let M=!1,H=null,K=null,le=null,me=null,qe=null,Je=null,Ue=null,at=null;return{setTest:function(Xe){M||(Xe?be(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Xe){H!==Xe&&!M&&(s.stencilMask(Xe),H=Xe)},setFunc:function(Xe,_t,ft){(K!==Xe||le!==_t||me!==ft)&&(s.stencilFunc(Xe,_t,ft),K=Xe,le=_t,me=ft)},setOp:function(Xe,_t,ft){(qe!==Xe||Je!==_t||Ue!==ft)&&(s.stencilOp(Xe,_t,ft),qe=Xe,Je=_t,Ue=ft)},setLocked:function(Xe){M=Xe},setClear:function(Xe){at!==Xe&&(s.clearStencil(Xe),at=Xe)},reset:function(){M=!1,H=null,K=null,le=null,me=null,qe=null,Je=null,Ue=null,at=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,m=!1,b=null,g=null,p=null,x=null,v=null,_=null,E=null,S=new ge(0,0,0),R=0,L=!1,w=null,y=null,F=null,O=null,I=null,C=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,B=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),P=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),P=B>=2);let U=null,V={},j=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),ve=new et().fromArray(j),Te=new et().fromArray(ie);function q(M,H,K,le){let me=new Uint8Array(4),qe=s.createTexture();s.bindTexture(M,qe),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<K;Je++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(H,0,s.RGBA,1,1,le,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(H+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return qe}let te={};te[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),be(s.DEPTH_TEST),r.setFunc(ba),ue(!1),se(Ih),be(s.CULL_FACE),re(yi);function be(M){c[M]!==!0&&(s.enable(M),c[M]=!0)}function ae(M){c[M]!==!1&&(s.disable(M),c[M]=!1)}function Re(M,H){return h[M]!==H?(s.bindFramebuffer(M,H),h[M]=H,M===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=H),M===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=H),!0):!1}function _e(M,H){let K=d,le=!1;if(M){K=u.get(H),K===void 0&&(K=[],u.set(H,K));let me=M.textures;if(K.length!==me.length||K[0]!==s.COLOR_ATTACHMENT0){for(let qe=0,Je=me.length;qe<Je;qe++)K[qe]=s.COLOR_ATTACHMENT0+qe;K.length=me.length,le=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,le=!0);le&&s.drawBuffers(K)}function k(M){return f!==M?(s.useProgram(M),f=M,!0):!1}let Ee={[Wi]:s.FUNC_ADD,[Rm]:s.FUNC_SUBTRACT,[Cm]:s.FUNC_REVERSE_SUBTRACT};Ee[Pm]=s.MIN,Ee[Lm]=s.MAX;let $={[Dm]:s.ZERO,[Im]:s.ONE,[Nm]:s.SRC_COLOR,[hc]:s.SRC_ALPHA,[zm]:s.SRC_ALPHA_SATURATE,[km]:s.DST_COLOR,[Om]:s.DST_ALPHA,[Fm]:s.ONE_MINUS_SRC_COLOR,[uc]:s.ONE_MINUS_SRC_ALPHA,[Bm]:s.ONE_MINUS_DST_COLOR,[Um]:s.ONE_MINUS_DST_ALPHA,[Hm]:s.CONSTANT_COLOR,[Gm]:s.ONE_MINUS_CONSTANT_COLOR,[Vm]:s.CONSTANT_ALPHA,[Wm]:s.ONE_MINUS_CONSTANT_ALPHA};function re(M,H,K,le,me,qe,Je,Ue,at,Xe){if(M===yi){m===!0&&(ae(s.BLEND),m=!1);return}if(m===!1&&(be(s.BLEND),m=!0),M!==Tm){if(M!==b||Xe!==L){if((g!==Wi||v!==Wi)&&(s.blendEquation(s.FUNC_ADD),g=Wi,v=Wi),Xe)switch(M){case Rr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nh:s.blendFunc(s.ONE,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Rr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}p=null,x=null,_=null,E=null,S.set(0,0,0),R=0,b=M,L=Xe}return}me=me||H,qe=qe||K,Je=Je||le,(H!==g||me!==v)&&(s.blendEquationSeparate(Ee[H],Ee[me]),g=H,v=me),(K!==p||le!==x||qe!==_||Je!==E)&&(s.blendFuncSeparate($[K],$[le],$[qe],$[Je]),p=K,x=le,_=qe,E=Je),(Ue.equals(S)===!1||at!==R)&&(s.blendColor(Ue.r,Ue.g,Ue.b,at),S.copy(Ue),R=at),b=M,L=!1}function ee(M,H){M.side===Bt?ae(s.CULL_FACE):be(s.CULL_FACE);let K=M.side===zt;H&&(K=!K),ue(K),M.blending===Rr&&M.transparent===!1?re(yi):re(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);let le=M.stencilWrite;a.setTest(le),le&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Pe(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function ue(M){w!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),w=M)}function se(M){M!==Em?(be(s.CULL_FACE),M!==y&&(M===Ih?s.cullFace(s.BACK):M===Am?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),y=M}function we(M){M!==F&&(P&&s.lineWidth(M),F=M)}function Pe(M,H,K){M?(be(s.POLYGON_OFFSET_FILL),(O!==H||I!==K)&&(s.polygonOffset(H,K),O=H,I=K)):ae(s.POLYGON_OFFSET_FILL)}function N(M){M?be(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function A(M){M===void 0&&(M=s.TEXTURE0+C-1),U!==M&&(s.activeTexture(M),U=M)}function W(M,H,K){K===void 0&&(U===null?K=s.TEXTURE0+C-1:K=U);let le=V[K];le===void 0&&(le={type:void 0,texture:void 0},V[K]=le),(le.type!==M||le.texture!==H)&&(U!==K&&(s.activeTexture(K),U=K),s.bindTexture(M,H||te[M]),le.type=M,le.texture=H)}function ne(){let M=V[U];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ae(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function he(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Le(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function pe(M){ve.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),ve.copy(M))}function Fe(M){Te.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),Te.copy(M))}function ze(M,H){let K=l.get(H);K===void 0&&(K=new WeakMap,l.set(H,K));let le=K.get(M);le===void 0&&(le=s.getUniformBlockIndex(H,M.name),K.set(M,le))}function st(M,H){let le=l.get(H).get(M);o.get(H)!==le&&(s.uniformBlockBinding(H,le,M.__bindingPointIndex),o.set(H,le))}function We(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},U=null,V={},h={},u=new WeakMap,d=[],f=null,m=!1,b=null,g=null,p=null,x=null,v=null,_=null,E=null,S=new ge(0,0,0),R=0,L=!1,w=null,y=null,F=null,O=null,I=null,ve.set(0,0,s.canvas.width,s.canvas.height),Te.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:be,disable:ae,bindFramebuffer:Re,drawBuffers:_e,useProgram:k,setBlending:re,setMaterial:ee,setFlipSided:ue,setCullFace:se,setLineWidth:we,setPolygonOffset:Pe,setScissorTest:N,activeTexture:A,bindTexture:W,unbindTexture:ne,compressedTexImage2D:oe,compressedTexImage3D:z,texImage2D:Le,texImage3D:xe,updateUBOMapping:ze,uniformBlockBinding:st,texStorage2D:he,texStorage3D:Me,texSubImage2D:fe,texSubImage3D:ce,compressedTexSubImage2D:de,compressedTexSubImage3D:Ae,scissor:pe,viewport:Fe,reset:We}}function pM(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Y,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(N,A){return f?new OffscreenCanvas(N,A):Ta("canvas")}function b(N,A,W){let ne=1,oe=Pe(N);if((oe.width>W||oe.height>W)&&(ne=W/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let z=Math.floor(ne*oe.width),fe=Math.floor(ne*oe.height);u===void 0&&(u=m(z,fe));let ce=A?m(z,fe):u;return ce.width=z,ce.height=fe,ce.getContext("2d").drawImage(N,0,0,z,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+z+"x"+fe+")."),ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),N;return N}function g(N){return N.generateMipmaps&&N.minFilter!==vt&&N.minFilter!==ct}function p(N){s.generateMipmap(N)}function x(N,A,W,ne,oe=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let z=A;if(A===s.RED&&(W===s.FLOAT&&(z=s.R32F),W===s.HALF_FLOAT&&(z=s.R16F),W===s.UNSIGNED_BYTE&&(z=s.R8)),A===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(z=s.R8UI),W===s.UNSIGNED_SHORT&&(z=s.R16UI),W===s.UNSIGNED_INT&&(z=s.R32UI),W===s.BYTE&&(z=s.R8I),W===s.SHORT&&(z=s.R16I),W===s.INT&&(z=s.R32I)),A===s.RG&&(W===s.FLOAT&&(z=s.RG32F),W===s.HALF_FLOAT&&(z=s.RG16F),W===s.UNSIGNED_BYTE&&(z=s.RG8)),A===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(z=s.RG8UI),W===s.UNSIGNED_SHORT&&(z=s.RG16UI),W===s.UNSIGNED_INT&&(z=s.RG32UI),W===s.BYTE&&(z=s.RG8I),W===s.SHORT&&(z=s.RG16I),W===s.INT&&(z=s.RG32I)),A===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&(z=s.RGB9_E5),A===s.RGBA){let fe=oe?ya:rt.getTransfer(ne);W===s.FLOAT&&(z=s.RGBA32F),W===s.HALF_FLOAT&&(z=s.RGBA16F),W===s.UNSIGNED_BYTE&&(z=fe===gt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(z=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(z=s.RGB5_A1)}return(z===s.R16F||z===s.R32F||z===s.RG16F||z===s.RG32F||z===s.RGBA16F||z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function v(N,A){return g(N)===!0||N.isFramebufferTexture&&N.minFilter!==vt&&N.minFilter!==ct?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function _(N){let A=N.target;A.removeEventListener("dispose",_),S(A),A.isVideoTexture&&h.delete(A)}function E(N){let A=N.target;A.removeEventListener("dispose",E),L(A)}function S(N){let A=n.get(N);if(A.__webglInit===void 0)return;let W=N.source,ne=d.get(W);if(ne){let oe=ne[A.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&R(N),Object.keys(ne).length===0&&d.delete(W)}n.remove(N)}function R(N){let A=n.get(N);s.deleteTexture(A.__webglTexture);let W=N.source,ne=d.get(W);delete ne[A.__cacheKey],a.memory.textures--}function L(N){let A=n.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let oe=0;oe<A.__webglFramebuffer[ne].length;oe++)s.deleteFramebuffer(A.__webglFramebuffer[ne][oe]);else s.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[ne]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=N.textures;for(let ne=0,oe=W.length;ne<oe;ne++){let z=n.get(W[ne]);z.__webglTexture&&(s.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(W[ne])}n.remove(N)}let w=0;function y(){w=0}function F(){let N=w;return N>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+i.maxTextures),w+=1,N}function O(N){let A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function I(N,A){let W=n.get(N);if(N.isVideoTexture&&se(N),N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){let ne=N.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(W,N,A);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+A)}function C(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){ve(W,N,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+A)}function P(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){ve(W,N,A);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+A)}function B(N,A){let W=n.get(N);if(N.version>0&&W.__version!==N.version){Te(W,N,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+A)}let X={[Bn]:s.REPEAT,[Dt]:s.CLAMP_TO_EDGE,[Dr]:s.MIRRORED_REPEAT},U={[vt]:s.NEAREST,[Qa]:s.NEAREST_MIPMAP_NEAREST,[qi]:s.NEAREST_MIPMAP_LINEAR,[ct]:s.LINEAR,[Cr]:s.LINEAR_MIPMAP_NEAREST,[mn]:s.LINEAR_MIPMAP_LINEAR},V={[wg]:s.NEVER,[Rg]:s.ALWAYS,[Mg]:s.LESS,[Nd]:s.LEQUAL,[Sg]:s.EQUAL,[Tg]:s.GEQUAL,[Eg]:s.GREATER,[Ag]:s.NOTEQUAL};function j(N,A){if(A.type===an&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ct||A.magFilter===Cr||A.magFilter===qi||A.magFilter===mn||A.minFilter===ct||A.minFilter===Cr||A.minFilter===qi||A.minFilter===mn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,X[A.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,X[A.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,X[A.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U[A.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U[A.minFilter]),A.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,V[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vt||A.minFilter!==qi&&A.minFilter!==mn||A.type===an&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ie(N,A){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",_));let ne=A.source,oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));let z=O(A);if(z!==N.__cacheKey){oe[z]===void 0&&(oe[z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),oe[z].usedTimes++;let fe=oe[N.__cacheKey];fe!==void 0&&(oe[N.__cacheKey].usedTimes--,fe.usedTimes===0&&R(A)),N.__cacheKey=z,N.__webglTexture=oe[z].texture}return W}function ve(N,A,W){let ne=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=s.TEXTURE_3D);let oe=ie(N,A),z=A.source;t.bindTexture(ne,N.__webglTexture,s.TEXTURE0+W);let fe=n.get(z);if(z.version!==fe.__version||oe===!0){t.activeTexture(s.TEXTURE0+W);let ce=rt.getPrimaries(rt.workingColorSpace),de=A.colorSpace===On?null:rt.getPrimaries(A.colorSpace),Ae=A.colorSpace===On||ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let he=b(A.image,!1,i.maxTextureSize);he=we(A,he);let Me=r.convert(A.format,A.colorSpace),Le=r.convert(A.type),xe=x(A.internalFormat,Me,Le,A.colorSpace,A.isVideoTexture);j(ne,A);let pe,Fe=A.mipmaps,ze=A.isVideoTexture!==!0,st=fe.__version===void 0||oe===!0,We=z.dataReady,M=v(A,he);if(A.isDepthTexture)xe=s.DEPTH_COMPONENT16,A.type===an?xe=s.DEPTH_COMPONENT32F:A.type===Si?xe=s.DEPTH_COMPONENT24:A.type===Gs&&(xe=s.DEPTH24_STENCIL8),st&&(ze?t.texStorage2D(s.TEXTURE_2D,1,xe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,xe,he.width,he.height,0,Me,Le,null));else if(A.isDataTexture)if(Fe.length>0){ze&&st&&t.texStorage2D(s.TEXTURE_2D,M,xe,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)pe=Fe[H],ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,Me,Le,pe.data):t.texImage2D(s.TEXTURE_2D,H,xe,pe.width,pe.height,0,Me,Le,pe.data);A.generateMipmaps=!1}else ze?(st&&t.texStorage2D(s.TEXTURE_2D,M,xe,he.width,he.height),We&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,Me,Le,he.data)):t.texImage2D(s.TEXTURE_2D,0,xe,he.width,he.height,0,Me,Le,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ze&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,xe,Fe[0].width,Fe[0].height,he.depth);for(let H=0,K=Fe.length;H<K;H++)pe=Fe[H],A.format!==Vt?Me!==null?ze?We&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,he.depth,Me,pe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,xe,pe.width,pe.height,he.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?We&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,he.depth,Me,Le,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,xe,pe.width,pe.height,he.depth,0,Me,Le,pe.data)}else{ze&&st&&t.texStorage2D(s.TEXTURE_2D,M,xe,Fe[0].width,Fe[0].height);for(let H=0,K=Fe.length;H<K;H++)pe=Fe[H],A.format!==Vt?Me!==null?ze?We&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,H,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,Me,Le,pe.data):t.texImage2D(s.TEXTURE_2D,H,xe,pe.width,pe.height,0,Me,Le,pe.data)}else if(A.isDataArrayTexture)ze?(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,xe,he.width,he.height,he.depth),We&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Me,Le,he.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,xe,he.width,he.height,he.depth,0,Me,Le,he.data);else if(A.isData3DTexture)ze?(st&&t.texStorage3D(s.TEXTURE_3D,M,xe,he.width,he.height,he.depth),We&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Me,Le,he.data)):t.texImage3D(s.TEXTURE_3D,0,xe,he.width,he.height,he.depth,0,Me,Le,he.data);else if(A.isFramebufferTexture){if(st)if(ze)t.texStorage2D(s.TEXTURE_2D,M,xe,he.width,he.height);else{let H=he.width,K=he.height;for(let le=0;le<M;le++)t.texImage2D(s.TEXTURE_2D,le,xe,H,K,0,Me,Le,null),H>>=1,K>>=1}}else if(Fe.length>0){if(ze&&st){let H=Pe(Fe[0]);t.texStorage2D(s.TEXTURE_2D,M,xe,H.width,H.height)}for(let H=0,K=Fe.length;H<K;H++)pe=Fe[H],ze?We&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Me,Le,pe):t.texImage2D(s.TEXTURE_2D,H,xe,Me,Le,pe);A.generateMipmaps=!1}else if(ze){if(st){let H=Pe(he);t.texStorage2D(s.TEXTURE_2D,M,xe,H.width,H.height)}We&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me,Le,he)}else t.texImage2D(s.TEXTURE_2D,0,xe,Me,Le,he);g(A)&&p(ne),fe.__version=z.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function Te(N,A,W){if(A.image.length!==6)return;let ne=ie(N,A),oe=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+W);let z=n.get(oe);if(oe.version!==z.__version||ne===!0){t.activeTexture(s.TEXTURE0+W);let fe=rt.getPrimaries(rt.workingColorSpace),ce=A.colorSpace===On?null:rt.getPrimaries(A.colorSpace),de=A.colorSpace===On||fe===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let Ae=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,Me=[];for(let K=0;K<6;K++)!Ae&&!he?Me[K]=b(A.image[K],!0,i.maxCubemapSize):Me[K]=he?A.image[K].image:A.image[K],Me[K]=we(A,Me[K]);let Le=Me[0],xe=r.convert(A.format,A.colorSpace),pe=r.convert(A.type),Fe=x(A.internalFormat,xe,pe,A.colorSpace),ze=A.isVideoTexture!==!0,st=z.__version===void 0||ne===!0,We=oe.dataReady,M=v(A,Le);j(s.TEXTURE_CUBE_MAP,A);let H;if(Ae){ze&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Fe,Le.width,Le.height);for(let K=0;K<6;K++){H=Me[K].mipmaps;for(let le=0;le<H.length;le++){let me=H[le];A.format!==Vt?xe!==null?ze?We&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,me.width,me.height,xe,me.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Fe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,0,0,me.width,me.height,xe,pe,me.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le,Fe,me.width,me.height,0,xe,pe,me.data)}}}else{if(H=A.mipmaps,ze&&st){H.length>0&&M++;let K=Pe(Me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Fe,K.width,K.height)}for(let K=0;K<6;K++)if(he){ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me[K].width,Me[K].height,xe,pe,Me[K].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,Me[K].width,Me[K].height,0,xe,pe,Me[K].data);for(let le=0;le<H.length;le++){let qe=H[le].image[K].image;ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,qe.width,qe.height,xe,pe,qe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Fe,qe.width,qe.height,0,xe,pe,qe.data)}}else{ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,xe,pe,Me[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Fe,xe,pe,Me[K]);for(let le=0;le<H.length;le++){let me=H[le];ze?We&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,0,0,xe,pe,me.image[K]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,le+1,Fe,xe,pe,me.image[K])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),z.__version=oe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function q(N,A,W,ne,oe,z){let fe=r.convert(W.format,W.colorSpace),ce=r.convert(W.type),de=x(W.internalFormat,fe,ce,W.colorSpace);if(!n.get(A).__hasExternalTextures){let he=Math.max(1,A.width>>z),Me=Math.max(1,A.height>>z);oe===s.TEXTURE_3D||oe===s.TEXTURE_2D_ARRAY?t.texImage3D(oe,z,de,he,Me,A.depth,0,fe,ce,null):t.texImage2D(oe,z,de,he,Me,0,fe,ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),ue(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,oe,n.get(W).__webglTexture,0,ee(A)):(oe===s.TEXTURE_2D||oe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,oe,n.get(W).__webglTexture,z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(N,A,W){if(s.bindRenderbuffer(s.RENDERBUFFER,N),A.depthBuffer&&!A.stencilBuffer){let ne=s.DEPTH_COMPONENT24;if(W||ue(A)){let oe=A.depthTexture;oe&&oe.isDepthTexture&&(oe.type===an?ne=s.DEPTH_COMPONENT32F:oe.type===Si&&(ne=s.DEPTH_COMPONENT24));let z=ee(A);ue(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,ne,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,z,ne,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(A.depthBuffer&&A.stencilBuffer){let ne=ee(A);W&&ue(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):ue(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{let ne=A.textures;for(let oe=0;oe<ne.length;oe++){let z=ne[oe],fe=r.convert(z.format,z.colorSpace),ce=r.convert(z.type),de=x(z.internalFormat,fe,ce,z.colorSpace),Ae=ee(A);W&&ue(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,A.width,A.height):ue(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,de,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),I(A.depthTexture,0);let ne=n.get(A.depthTexture).__webglTexture,oe=ee(A);if(A.depthTexture.format===Pr)ue(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(A.depthTexture.format===ws)ue(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,oe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ae(N){let A=n.get(N),W=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");be(A.__webglFramebuffer,N)}else if(W){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=s.createRenderbuffer(),te(A.__webglDepthbuffer[ne],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),te(A.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(N,A,W){let ne=n.get(N);A!==void 0&&q(ne.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ae(N)}function _e(N){let A=N.texture,W=n.get(N),ne=n.get(A);N.addEventListener("dispose",E);let oe=N.textures,z=N.isWebGLCubeRenderTarget===!0,fe=oe.length>1;if(fe||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=A.version,a.memory.textures++),z){W.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[ce]=[];for(let de=0;de<A.mipmaps.length;de++)W.__webglFramebuffer[ce][de]=s.createFramebuffer()}else W.__webglFramebuffer[ce]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let ce=0;ce<A.mipmaps.length;ce++)W.__webglFramebuffer[ce]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(fe)for(let ce=0,de=oe.length;ce<de;ce++){let Ae=n.get(oe[ce]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),a.memory.textures++)}if(N.samples>0&&ue(N)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ce=0;ce<oe.length;ce++){let de=oe[ce];W.__webglColorRenderbuffer[ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ce]);let Ae=r.convert(de.format,de.colorSpace),he=r.convert(de.type),Me=x(de.internalFormat,Ae,he,de.colorSpace,N.isXRRenderTarget===!0),Le=ee(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Me,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,W.__webglColorRenderbuffer[ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),te(W.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(z){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),j(s.TEXTURE_CUBE_MAP,A);for(let ce=0;ce<6;ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)q(W.__webglFramebuffer[ce][de],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de);else q(W.__webglFramebuffer[ce],N,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(A)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ce=0,de=oe.length;ce<de;ce++){let Ae=oe[ce],he=n.get(Ae);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),j(s.TEXTURE_2D,Ae),q(W.__webglFramebuffer,N,Ae,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,0),g(Ae)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ce=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ce,ne.__webglTexture),j(ce,A),A.mipmaps&&A.mipmaps.length>0)for(let de=0;de<A.mipmaps.length;de++)q(W.__webglFramebuffer[de],N,A,s.COLOR_ATTACHMENT0,ce,de);else q(W.__webglFramebuffer,N,A,s.COLOR_ATTACHMENT0,ce,0);g(A)&&p(ce),t.unbindTexture()}N.depthBuffer&&ae(N)}function k(N){let A=N.textures;for(let W=0,ne=A.length;W<ne;W++){let oe=A[W];if(g(oe)){let z=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,fe=n.get(oe).__webglTexture;t.bindTexture(z,fe),p(z),t.unbindTexture()}}}let Ee=[],$=[];function re(N){if(N.samples>0){if(ue(N)===!1){let A=N.textures,W=N.width,ne=N.height,oe=s.COLOR_BUFFER_BIT,z=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=n.get(N),ce=A.length>1;if(ce)for(let de=0;de<A.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<A.length;de++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(oe|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(oe|=s.STENCIL_BUFFER_BIT)),ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);let Ae=n.get(A[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ae,0)}s.blitFramebuffer(0,0,W,ne,0,0,W,ne,oe,s.NEAREST),l===!0&&(Ee.length=0,$.length=0,Ee.push(s.COLOR_ATTACHMENT0+de),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Ee.push(z),$.push(z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ce)for(let de=0;de<A.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);let Ae=n.get(A[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,fe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Ae,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&l){let A=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ee(N){return Math.min(i.maxSamples,N.samples)}function ue(N){let A=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function se(N){let A=a.render.frame;h.get(N)!==A&&(h.set(N,A),N.update())}function we(N,A){let W=N.colorSpace,ne=N.format,oe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Ut&&W!==On&&(rt.getTransfer(W)===gt?(ne!==Vt||oe!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function Pe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=y,this.setTexture2D=I,this.setTexture2DArray=C,this.setTexture3D=P,this.setTextureCube=B,this.rebindTextures=Re,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=q,this.useMultisampledRTT=ue}function zg(s,e){function t(n,i=On){let r,a=rt.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===Ad)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cg)return s.BYTE;if(n===lg)return s.SHORT;if(n===Sd)return s.UNSIGNED_SHORT;if(n===Ed)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===an)return s.FLOAT;if(n===Xn)return s.HALF_FLOAT;if(n===ug)return s.ALPHA;if(n===dg)return s.RGB;if(n===Vt)return s.RGBA;if(n===fg)return s.LUMINANCE;if(n===pg)return s.LUMINANCE_ALPHA;if(n===Pr)return s.DEPTH_COMPONENT;if(n===ws)return s.DEPTH_STENCIL;if(n===Rd)return s.RED;if(n===Cd)return s.RED_INTEGER;if(n===mg)return s.RG;if(n===Pd)return s.RG_INTEGER;if(n===Ld)return s.RGBA_INTEGER;if(n===rc||n===sc||n===ac||n===oc)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===Bh||n===zh||n===Hh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Vh||n===Wh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gh||n===Vh)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qh||n===Xh||n===jh||n===Kh||n===Yh||n===Jh||n===Zh||n===$h||n===Qh||n===eu||n===tu||n===nu||n===iu||n===ru)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$h)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===nu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===iu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ru)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cc||n===su||n===au)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===cc)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===au)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gg||n===ou||n===cu||n===lu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var gc=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},on=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},mM={type:"move"},pa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(c,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bM=`
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

}`,Eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Ht({vertexShader:gM,fragmentShader:bM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new it(new Ei(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Au=class extends bn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,b=new Eu,g=t.getContextAttributes(),p=null,x=null,v=[],_=[],E=new Y,S=null,R=new bt;R.layers.enable(1),R.viewport=new et;let L=new bt;L.layers.enable(2),L.viewport=new et;let w=[R,L],y=new gc;y.layers.enable(1),y.layers.enable(2);let F=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=v[q];return te===void 0&&(te=new pa,v[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=v[q];return te===void 0&&(te=new pa,v[q]=te),te.getGripSpace()},this.getHand=function(q){let te=v[q];return te===void 0&&(te=new pa,v[q]=te),te.getHandSpace()};function I(q){let te=_.indexOf(q.inputSource);if(te===-1)return;let be=v[te];be!==void 0&&(be.update(q.inputSource,q.frame,c||a),be.dispatchEvent({type:q.type,data:q.inputSource}))}function C(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",C),i.removeEventListener("inputsourceschange",P);for(let q=0;q<v.length;q++){let te=_[q];te!==null&&(_[q]=null,v[q].disconnect(te))}F=null,O=null,b.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",C),i.addEventListener("inputsourceschange",P),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){let te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new It(f.framebufferWidth,f.framebufferHeight,{format:Vt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,be=null,ae=null;g.depth&&(ae=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?ws:Pr,be=g.stencil?Gs:Si);let Re={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new It(d.textureWidth,d.textureHeight,{format:Vt,type:zn,depthTexture:new Ur(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Te.setContext(i),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(q){for(let te=0;te<q.removed.length;te++){let be=q.removed[te],ae=_.indexOf(be);ae>=0&&(_[ae]=null,v[ae].disconnect(be))}for(let te=0;te<q.added.length;te++){let be=q.added[te],ae=_.indexOf(be);if(ae===-1){for(let _e=0;_e<v.length;_e++)if(_e>=_.length){_.push(be),ae=_e;break}else if(_[_e]===null){_[_e]=be,ae=_e;break}if(ae===-1)break}let Re=v[ae];Re&&Re.connect(be)}}let B=new T,X=new T;function U(q,te,be){B.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(be.matrixWorld);let ae=B.distanceTo(X),Re=te.projectionMatrix.elements,_e=be.projectionMatrix.elements,k=Re[14]/(Re[10]-1),Ee=Re[14]/(Re[10]+1),$=(Re[9]+1)/Re[5],re=(Re[9]-1)/Re[5],ee=(Re[8]-1)/Re[0],ue=(_e[8]+1)/_e[0],se=k*ee,we=k*ue,Pe=ae/(-ee+ue),N=Pe*-ee;te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(N),q.translateZ(Pe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let A=k+Pe,W=Ee+Pe,ne=se-N,oe=we+(ae-N),z=$*Ee/W*A,fe=re*Ee/W*A;q.projectionMatrix.makePerspective(ne,oe,z,fe,A,W),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;b.texture!==null&&(q.near=b.depthNear,q.far=b.depthFar),y.near=L.near=R.near=q.near,y.far=L.far=R.far=q.far,(F!==y.near||O!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),F=y.near,O=y.far,R.near=F,R.far=O,L.near=F,L.far=O,R.updateProjectionMatrix(),L.updateProjectionMatrix(),q.updateProjectionMatrix());let te=q.parent,be=y.cameras;V(y,te);for(let ae=0;ae<be.length;ae++)V(be[ae],te);be.length===2?U(y,R,L):y.projectionMatrix.copy(R.projectionMatrix),j(q,y,te)};function j(q,te,be){be===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(be.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ms*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return b.texture!==null};let ie=null;function ve(q,te){if(h=te.getViewerPose(c||a),m=te,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let ae=!1;be.length!==y.cameras.length&&(y.cameras.length=0,ae=!0);for(let _e=0;_e<be.length;_e++){let k=be[_e],Ee=null;if(f!==null)Ee=f.getViewport(k);else{let re=u.getViewSubImage(d,k);Ee=re.viewport,_e===0&&(e.setRenderTargetTextures(x,re.colorTexture,d.ignoreDepthValues?void 0:re.depthStencilTexture),e.setRenderTarget(x))}let $=w[_e];$===void 0&&($=new bt,$.layers.enable(_e),$.viewport=new et,w[_e]=$),$.matrix.fromArray(k.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(k.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),_e===0&&(y.matrix.copy($.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ae===!0&&y.cameras.push($)}let Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){let _e=u.getDepthInformation(be[0]);_e&&_e.isValid&&_e.texture&&b.init(e,_e,i.renderState)}}for(let be=0;be<v.length;be++){let ae=_[be],Re=v[be];ae!==null&&Re!==void 0&&Re.update(ae,te,c||a)}b.render(e,y),ie&&ie(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Te=new Ng;Te.setAnimationLoop(ve),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}},mr=new vn,vM=new De;function xM(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Ig(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),b(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,x,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),v=x.envMap,_=x.envMapRotation;if(v&&(g.envMap.value=v,mr.copy(_),mr.x*=-1,mr.y*=-1,mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(mr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let E=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _M(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let _=v.program;n.uniformBlockBinding(x,_)}function c(x,v){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));let E=v.program;n.updateUBOMapping(x,E);let S=e.render.frame;r[x.id]!==S&&(d(x),r[x.id]=S)}function h(x){let v=u();x.__bindingPointIndex=v;let _=s.createBuffer(),E=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,E,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let v=i[x.id],_=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let S=0,R=_.length;S<R;S++){let L=Array.isArray(_[S])?_[S]:[_[S]];for(let w=0,y=L.length;w<y;w++){let F=L[w];if(f(F,S,w,E)===!0){let O=F.__offset,I=Array.isArray(F.value)?F.value:[F.value],C=0;for(let P=0;P<I.length;P++){let B=I[P],X=b(B);typeof B=="number"||typeof B=="boolean"?(F.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+C,F.__data)):B.isMatrix3?(F.__data[0]=B.elements[0],F.__data[1]=B.elements[1],F.__data[2]=B.elements[2],F.__data[3]=0,F.__data[4]=B.elements[3],F.__data[5]=B.elements[4],F.__data[6]=B.elements[5],F.__data[7]=0,F.__data[8]=B.elements[6],F.__data[9]=B.elements[7],F.__data[10]=B.elements[8],F.__data[11]=0):(B.toArray(F.__data,C),C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,v,_,E){let S=x.value,R=v+"_"+_;if(E[R]===void 0)return typeof S=="number"||typeof S=="boolean"?E[R]=S:E[R]=S.clone(),!0;{let L=E[R];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return E[R]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(x){let v=x.uniforms,_=0,E=16;for(let R=0,L=v.length;R<L;R++){let w=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,F=w.length;y<F;y++){let O=w[y],I=Array.isArray(O.value)?O.value:[O.value];for(let C=0,P=I.length;C<P;C++){let B=I[C],X=b(B),U=_%E;U!==0&&E-U<X.boundary&&(_+=E-U),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=X.storage}}}let S=_%E;return S>0&&(_+=E-S),x.__size=_,x.__cache={},this}function b(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function g(x){let v=x.target;v.removeEventListener("dispose",g);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Ia=class{constructor(e={}){let{canvas:t=Pg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),m=new Int32Array(4),b=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let v=this,_=!1,E=0,S=0,R=null,L=-1,w=null,y=new et,F=new et,O=null,I=new ge(0),C=0,P=t.width,B=t.height,X=1,U=null,V=null,j=new et(0,0,P,B),ie=new et(0,0,P,B),ve=!1,Te=new Or,q=!1,te=!1,be=new De,ae=new T,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return R===null?X:1}let k=n;function Ee(D,G){return t.getContext(D,G)}try{let D={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",M,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",K,!1),k===null){let G="webgl2";if(k=Ee(G,D),k===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let $,re,ee,ue,se,we,Pe,N,A,W,ne,oe,z,fe,ce,de,Ae,he,Me,Le,xe,pe,Fe,ze;function st(){$=new zy(k),$.init(),pe=new zg(k,$),re=new Ny(k,$,e,pe),ee=new fM(k),ue=new Vy(k),se=new tM,we=new pM(k,$,ee,se,re,pe,ue),Pe=new Oy(v),N=new By(v),A=new Jv(k),Fe=new Dy(k,A),W=new Hy(k,A,ue,Fe),ne=new qy(k,W,A,ue),Me=new Wy(k,re,we),de=new Fy(se),oe=new eM(v,Pe,N,$,re,Fe,de),z=new xM(v,se),fe=new iM,ce=new lM($),he=new Ly(v,Pe,N,ee,ne,d,l),Ae=new dM(v,ne,re),ze=new _M(k,ue,re,ee),Le=new Iy(k,$,ue),xe=new Gy(k,$,ue),ue.programs=oe.programs,v.capabilities=re,v.extensions=$,v.properties=se,v.renderLists=fe,v.shadowMap=Ae,v.state=ee,v.info=ue}st();let We=new Au(v,k);this.xr=We,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let D=$.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=$.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(D){D!==void 0&&(X=D,this.setSize(P,B,!1))},this.getSize=function(D){return D.set(P,B)},this.setSize=function(D,G,Q=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=D,B=G,t.width=Math.floor(D*X),t.height=Math.floor(G*X),Q===!0&&(t.style.width=D+"px",t.style.height=G+"px"),this.setViewport(0,0,D,G)},this.getDrawingBufferSize=function(D){return D.set(P*X,B*X).floor()},this.setDrawingBufferSize=function(D,G,Q){P=D,B=G,X=Q,t.width=Math.floor(D*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,D,G)},this.getCurrentViewport=function(D){return D.copy(y)},this.getViewport=function(D){return D.copy(j)},this.setViewport=function(D,G,Q,J){D.isVector4?j.set(D.x,D.y,D.z,D.w):j.set(D,G,Q,J),ee.viewport(y.copy(j).multiplyScalar(X).round())},this.getScissor=function(D){return D.copy(ie)},this.setScissor=function(D,G,Q,J){D.isVector4?ie.set(D.x,D.y,D.z,D.w):ie.set(D,G,Q,J),ee.scissor(F.copy(ie).multiplyScalar(X).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(D){ee.setScissorTest(ve=D)},this.setOpaqueSort=function(D){U=D},this.setTransparentSort=function(D){V=D},this.getClearColor=function(D){return D.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(D=!0,G=!0,Q=!0){let J=0;if(D){let Z=!1;if(R!==null){let Se=R.texture.format;Z=Se===Ld||Se===Pd||Se===Cd}if(Z){let Se=R.texture.type,Ie=Se===zn||Se===Si||Se===Sd||Se===Gs||Se===Ad||Se===Td,Ne=he.getClearColor(),Be=he.getClearAlpha(),je=Ne.r,Ze=Ne.g,Qe=Ne.b;Ie?(f[0]=je,f[1]=Ze,f[2]=Qe,f[3]=Be,k.clearBufferuiv(k.COLOR,0,f)):(m[0]=je,m[1]=Ze,m[2]=Qe,m[3]=Be,k.clearBufferiv(k.COLOR,0,m))}else J|=k.COLOR_BUFFER_BIT}G&&(J|=k.DEPTH_BUFFER_BIT),Q&&(J|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",K,!1),fe.dispose(),ce.dispose(),se.dispose(),Pe.dispose(),N.dispose(),ne.dispose(),Fe.dispose(),ze.dispose(),oe.dispose(),We.dispose(),We.removeEventListener("sessionstart",Xe),We.removeEventListener("sessionend",_t),ft.stop()};function M(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let D=ue.autoReset,G=Ae.enabled,Q=Ae.autoUpdate,J=Ae.needsUpdate,Z=Ae.type;st(),ue.autoReset=D,Ae.enabled=G,Ae.autoUpdate=Q,Ae.needsUpdate=J,Ae.type=Z}function K(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function le(D){let G=D.target;G.removeEventListener("dispose",le),me(G)}function me(D){qe(D),se.remove(D)}function qe(D){let G=se.get(D).programs;G!==void 0&&(G.forEach(function(Q){oe.releaseProgram(Q)}),D.isShaderMaterial&&oe.releaseShaderCache(D))}this.renderBufferDirect=function(D,G,Q,J,Z,Se){G===null&&(G=Re);let Ie=Z.isMesh&&Z.matrixWorld.determinant()<0,Ne=Db(D,G,Q,J,Z);ee.setMaterial(J,Ie);let Be=Q.index,je=1;if(J.wireframe===!0){if(Be=W.getWireframeAttribute(Q),Be===void 0)return;je=2}let Ze=Q.drawRange,Qe=Q.attributes.position,Rt=Ze.start*je,qt=(Ze.start+Ze.count)*je;Se!==null&&(Rt=Math.max(Rt,Se.start*je),qt=Math.min(qt,(Se.start+Se.count)*je)),Be!==null?(Rt=Math.max(Rt,0),qt=Math.min(qt,Be.count)):Qe!=null&&(Rt=Math.max(Rt,0),qt=Math.min(qt,Qe.count));let dn=qt-Rt;if(dn<0||dn===1/0)return;Fe.setup(Z,J,Ne,Q,Be);let hi,lt=Le;if(Be!==null&&(hi=A.get(Be),lt=xe,lt.setIndex(hi)),Z.isMesh)J.wireframe===!0?(ee.setLineWidth(J.wireframeLinewidth*_e()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(Z.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),ee.setLineWidth(Ke*_e()),Z.isLineSegments?lt.setMode(k.LINES):Z.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else Z.isPoints?lt.setMode(k.POINTS):Z.isSprite&&lt.setMode(k.TRIANGLES);if(Z.isBatchedMesh)Z._multiDrawInstances!==null?lt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances):lt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)lt.renderInstances(Rt,dn,Z.count);else if(Q.isInstancedBufferGeometry){let Ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Zs=Math.min(Q.instanceCount,Ke);lt.renderInstances(Rt,dn,Zs)}else lt.render(Rt,dn)};function Je(D,G,Q){D.transparent===!0&&D.side===Bt&&D.forceSinglePass===!1?(D.side=zt,D.needsUpdate=!0,ho(D,G,Q),D.side=kn,D.needsUpdate=!0,ho(D,G,Q),D.side=Bt):ho(D,G,Q)}this.compile=function(D,G,Q=null){Q===null&&(Q=D),g=ce.get(Q),g.init(G),x.push(g),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),D!==Q&&D.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(g.pushLight(Z),Z.castShadow&&g.pushShadow(Z))}),g.setupLights(v._useLegacyLights);let J=new Set;return D.traverse(function(Z){let Se=Z.material;if(Se)if(Array.isArray(Se))for(let Ie=0;Ie<Se.length;Ie++){let Ne=Se[Ie];Je(Ne,Q,Z),J.add(Ne)}else Je(Se,Q,Z),J.add(Se)}),x.pop(),g=null,J},this.compileAsync=function(D,G,Q=null){let J=this.compile(D,G,Q);return new Promise(Z=>{function Se(){if(J.forEach(function(Ie){se.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){Z(D);return}setTimeout(Se,10)}$.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ue=null;function at(D){Ue&&Ue(D)}function Xe(){ft.stop()}function _t(){ft.start()}let ft=new Ng;ft.setAnimationLoop(at),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(D){Ue=D,We.setAnimationLoop(D),D===null?ft.stop():ft.start()},We.addEventListener("sessionstart",Xe),We.addEventListener("sessionend",_t),this.render=function(D,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),D.isScene===!0&&D.onBeforeRender(v,D,G,R),g=ce.get(D,x.length),g.init(G),x.push(g),be.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Te.setFromProjectionMatrix(be),te=this.localClippingEnabled,q=de.init(this.clippingPlanes,te),b=fe.get(D,p.length),b.init(),p.push(b),Mn(D,G,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(U,V);let Q=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1;Q&&he.addToRenderList(b,D),this.info.render.frame++,q===!0&&de.beginShadows();let J=g.state.shadowsArray;Ae.render(J,D,G),q===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=b.opaque,Se=b.transmissive;if(g.setupLights(v._useLegacyLights),G.isArrayCamera){let Ie=G.cameras;if(Se.length>0)for(let Ne=0,Be=Ie.length;Ne<Be;Ne++){let je=Ie[Ne];Ni(Z,Se,D,je)}Q&&he.render(D);for(let Ne=0,Be=Ie.length;Ne<Be;Ne++){let je=Ie[Ne];Sn(b,D,je,je.viewport)}}else Se.length>0&&Ni(Z,Se,D,G),Q&&he.render(D),Sn(b,D,G);R!==null&&(we.updateMultisampleRenderTarget(R),we.updateRenderTargetMipmap(R)),D.isScene===!0&&D.onAfterRender(v,D,G),Fe.resetDefaultState(),L=-1,w=null,x.pop(),x.length>0?(g=x[x.length-1],q===!0&&de.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Mn(D,G,Q,J){if(D.visible===!1)return;if(D.layers.test(G.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(G);else if(D.isLight)g.pushLight(D),D.castShadow&&g.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Te.intersectsSprite(D)){J&&ae.setFromMatrixPosition(D.matrixWorld).applyMatrix4(be);let Ie=ne.update(D),Ne=D.material;Ne.visible&&b.push(D,Ie,Ne,Q,ae.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Te.intersectsObject(D))){let Ie=ne.update(D),Ne=D.material;if(J&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),ae.copy(D.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),ae.copy(Ie.boundingSphere.center)),ae.applyMatrix4(D.matrixWorld).applyMatrix4(be)),Array.isArray(Ne)){let Be=Ie.groups;for(let je=0,Ze=Be.length;je<Ze;je++){let Qe=Be[je],Rt=Ne[Qe.materialIndex];Rt&&Rt.visible&&b.push(D,Ie,Rt,Q,ae.z,Qe)}}else Ne.visible&&b.push(D,Ie,Ne,Q,ae.z,null)}}let Se=D.children;for(let Ie=0,Ne=Se.length;Ie<Ne;Ie++)Mn(Se[Ie],G,Q,J)}function Sn(D,G,Q,J){let Z=D.opaque,Se=D.transmissive,Ie=D.transparent;g.setupLightsView(Q),q===!0&&de.setGlobalState(v.clippingPlanes,Q),J&&ee.viewport(y.copy(J)),Z.length>0&&li(Z,G,Q),Se.length>0&&li(Se,G,Q),Ie.length>0&&li(Ie,G,Q),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ni(D,G,Q,J){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new It(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Xn:zn,minFilter:mn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let Se=g.state.transmissionRenderTarget[J.id],Ie=J.viewport||y;Se.setSize(Ie.z,Ie.w);let Ne=v.getRenderTarget();v.setRenderTarget(Se),v.getClearColor(I),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let Be=v.toneMapping;v.toneMapping=Un;let je=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),q===!0&&de.setGlobalState(v.clippingPlanes,J),li(D,Q,J),we.updateMultisampleRenderTarget(Se),we.updateRenderTargetMipmap(Se),$.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Qe=0,Rt=G.length;Qe<Rt;Qe++){let qt=G[Qe],dn=qt.object,hi=qt.geometry,lt=qt.material,Ke=qt.group;if(lt.side===Bt&&dn.layers.test(J.layers)){let Zs=lt.side;lt.side=zt,lt.needsUpdate=!0,Js(dn,Q,J,hi,lt,Ke),lt.side=Zs,lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(we.updateMultisampleRenderTarget(Se),we.updateRenderTargetMipmap(Se))}v.setRenderTarget(Ne),v.setClearColor(I,C),je!==void 0&&(J.viewport=je),v.toneMapping=Be}function li(D,G,Q){let J=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,Se=D.length;Z<Se;Z++){let Ie=D[Z],Ne=Ie.object,Be=Ie.geometry,je=J===null?Ie.material:J,Ze=Ie.group;Ne.layers.test(Q.layers)&&Js(Ne,G,Q,Be,je,Ze)}}function Js(D,G,Q,J,Z,Se){D.onBeforeRender(v,G,Q,J,Z,Se),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Z.onBeforeRender(v,G,Q,J,D,Se),Z.transparent===!0&&Z.side===Bt&&Z.forceSinglePass===!1?(Z.side=zt,Z.needsUpdate=!0,v.renderBufferDirect(Q,G,J,Z,D,Se),Z.side=kn,Z.needsUpdate=!0,v.renderBufferDirect(Q,G,J,Z,D,Se),Z.side=Bt):v.renderBufferDirect(Q,G,J,Z,D,Se),D.onAfterRender(v,G,Q,J,Z,Se)}function ho(D,G,Q){G.isScene!==!0&&(G=Re);let J=se.get(D),Z=g.state.lights,Se=g.state.shadowsArray,Ie=Z.state.version,Ne=oe.getParameters(D,Z.state,Se,G,Q),Be=oe.getProgramCacheKey(Ne),je=J.programs;J.environment=D.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(D.isMeshStandardMaterial?N:Pe).get(D.envMap||J.environment),J.envMapRotation=J.environment!==null&&D.envMap===null?G.environmentRotation:D.envMapRotation,je===void 0&&(D.addEventListener("dispose",le),je=new Map,J.programs=je);let Ze=je.get(Be);if(Ze!==void 0){if(J.currentProgram===Ze&&J.lightsStateVersion===Ie)return Vf(D,Ne),Ze}else Ne.uniforms=oe.getUniforms(D),D.onBuild(Q,Ne,v),D.onBeforeCompile(Ne,v),Ze=oe.acquireProgram(Ne,Be),je.set(Be,Ze),J.uniforms=Ne.uniforms;let Qe=J.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Qe.clippingPlanes=de.uniform),Vf(D,Ne),J.needsLights=Nb(D),J.lightsStateVersion=Ie,J.needsLights&&(Qe.ambientLightColor.value=Z.state.ambient,Qe.lightProbe.value=Z.state.probe,Qe.directionalLights.value=Z.state.directional,Qe.directionalLightShadows.value=Z.state.directionalShadow,Qe.spotLights.value=Z.state.spot,Qe.spotLightShadows.value=Z.state.spotShadow,Qe.rectAreaLights.value=Z.state.rectArea,Qe.ltc_1.value=Z.state.rectAreaLTC1,Qe.ltc_2.value=Z.state.rectAreaLTC2,Qe.pointLights.value=Z.state.point,Qe.pointLightShadows.value=Z.state.pointShadow,Qe.hemisphereLights.value=Z.state.hemi,Qe.directionalShadowMap.value=Z.state.directionalShadowMap,Qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Qe.spotShadowMap.value=Z.state.spotShadowMap,Qe.spotLightMatrix.value=Z.state.spotLightMatrix,Qe.spotLightMap.value=Z.state.spotLightMap,Qe.pointShadowMap.value=Z.state.pointShadowMap,Qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),J.currentProgram=Ze,J.uniformsList=null,Ze}function Gf(D){if(D.uniformsList===null){let G=D.currentProgram.getUniforms();D.uniformsList=ys.seqWithValue(G.seq,D.uniforms)}return D.uniformsList}function Vf(D,G){let Q=se.get(D);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Db(D,G,Q,J,Z){G.isScene!==!0&&(G=Re),we.resetTextureUnits();let Se=G.fog,Ie=J.isMeshStandardMaterial?G.environment:null,Ne=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ut,Be=(J.isMeshStandardMaterial?N:Pe).get(J.envMap||Ie),je=J.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ze=!!Q.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!Q.morphAttributes.position,Rt=!!Q.morphAttributes.normal,qt=!!Q.morphAttributes.color,dn=Un;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dn=v.toneMapping);let hi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,lt=hi!==void 0?hi.length:0,Ke=se.get(J),Zs=g.state.lights;if(q===!0&&(te===!0||D!==w)){let En=D===w&&J.id===L;de.setState(J,D,En)}let xt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Zs.state.version||Ke.outputColorSpace!==Ne||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==Be||J.fog===!0&&Ke.fog!==Se||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==de.numPlanes||Ke.numIntersection!==de.numIntersection)||Ke.vertexAlphas!==je||Ke.vertexTangents!==Ze||Ke.morphTargets!==Qe||Ke.morphNormals!==Rt||Ke.morphColors!==qt||Ke.toneMapping!==dn||Ke.morphTargetsCount!==lt)&&(xt=!0):(xt=!0,Ke.__version=J.version);let lr=Ke.currentProgram;xt===!0&&(lr=ho(J,G,Z));let Wf=!1,$s=!1,Xl=!1,Xt=lr.getUniforms(),Fi=Ke.uniforms;if(ee.useProgram(lr.program)&&(Wf=!0,$s=!0,Xl=!0),J.id!==L&&(L=J.id,$s=!0),Wf||w!==D){Xt.setValue(k,"projectionMatrix",D.projectionMatrix),Xt.setValue(k,"viewMatrix",D.matrixWorldInverse);let En=Xt.map.cameraPosition;En!==void 0&&En.setValue(k,ae.setFromMatrixPosition(D.matrixWorld)),re.logarithmicDepthBuffer&&Xt.setValue(k,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Xt.setValue(k,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,$s=!0,Xl=!0)}if(Z.isSkinnedMesh){Xt.setOptional(k,Z,"bindMatrix"),Xt.setOptional(k,Z,"bindMatrixInverse");let En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Xt.setValue(k,"boneTexture",En.boneTexture,we))}Z.isBatchedMesh&&(Xt.setOptional(k,Z,"batchingTexture"),Xt.setValue(k,"batchingTexture",Z._matricesTexture,we));let jl=Q.morphAttributes;if((jl.position!==void 0||jl.normal!==void 0||jl.color!==void 0)&&Me.update(Z,Q,lr),($s||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,Xt.setValue(k,"receiveShadow",Z.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Fi.envMap.value=Be,Fi.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Fi.envMapIntensity.value=G.environmentIntensity),$s&&(Xt.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&Ib(Fi,Xl),Se&&J.fog===!0&&z.refreshFogUniforms(Fi,Se),z.refreshMaterialUniforms(Fi,J,X,B,g.state.transmissionRenderTarget[D.id]),ys.upload(k,Gf(Ke),Fi,we)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ys.upload(k,Gf(Ke),Fi,we),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Xt.setValue(k,"center",Z.center),Xt.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Xt.setValue(k,"normalMatrix",Z.normalMatrix),Xt.setValue(k,"modelMatrix",Z.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let En=J.uniformsGroups;for(let Kl=0,Fb=En.length;Kl<Fb;Kl++){let qf=En[Kl];ze.update(qf,lr),ze.bind(qf,lr)}}return lr}function Ib(D,G){D.ambientLightColor.needsUpdate=G,D.lightProbe.needsUpdate=G,D.directionalLights.needsUpdate=G,D.directionalLightShadows.needsUpdate=G,D.pointLights.needsUpdate=G,D.pointLightShadows.needsUpdate=G,D.spotLights.needsUpdate=G,D.spotLightShadows.needsUpdate=G,D.rectAreaLights.needsUpdate=G,D.hemisphereLights.needsUpdate=G}function Nb(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,G,Q){se.get(D.texture).__webglTexture=G,se.get(D.depthTexture).__webglTexture=Q;let J=se.get(D);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Q===void 0,J.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(D,G){let Q=se.get(D);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(D,G=0,Q=0){R=D,E=G,S=Q;let J=!0,Z=null,Se=!1,Ie=!1;if(D){let Be=se.get(D);Be.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(k.FRAMEBUFFER,null),J=!1):Be.__webglFramebuffer===void 0?we.setupRenderTarget(D):Be.__hasExternalTextures&&we.rebindTextures(D,se.get(D.texture).__webglTexture,se.get(D.depthTexture).__webglTexture);let je=D.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Ie=!0);let Ze=se.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[G])?Z=Ze[G][Q]:Z=Ze[G],Se=!0):D.samples>0&&we.useMultisampledRTT(D)===!1?Z=se.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?Z=Ze[Q]:Z=Ze,y.copy(D.viewport),F.copy(D.scissor),O=D.scissorTest}else y.copy(j).multiplyScalar(X).floor(),F.copy(ie).multiplyScalar(X).floor(),O=ve;if(ee.bindFramebuffer(k.FRAMEBUFFER,Z)&&J&&ee.drawBuffers(D,Z),ee.viewport(y),ee.scissor(F),ee.setScissorTest(O),Se){let Be=se.get(D.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+G,Be.__webglTexture,Q)}else if(Ie){let Be=se.get(D.texture),je=G||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,Q||0,je)}L=-1},this.readRenderTargetPixels=function(D,G,Q,J,Z,Se,Ie){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=se.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){ee.bindFramebuffer(k.FRAMEBUFFER,Ne);try{let Be=D.texture,je=Be.format,Ze=Be.type;if(!re.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=D.width-J&&Q>=0&&Q<=D.height-Z&&k.readPixels(G,Q,J,Z,pe.convert(je),pe.convert(Ze),Se)}finally{let Be=R!==null?se.get(R).__webglFramebuffer:null;ee.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(D,G,Q=0){let J=Math.pow(2,-Q),Z=Math.floor(G.image.width*J),Se=Math.floor(G.image.height*J);we.setTexture2D(G,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,D.x,D.y,Z,Se),ee.unbindTexture()},this.copyTextureToTexture=function(D,G,Q,J=0){let Z=G.image.width,Se=G.image.height,Ie=pe.convert(Q.format),Ne=pe.convert(Q.type);we.setTexture2D(Q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment),G.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,J,D.x,D.y,Z,Se,Ie,Ne,G.image.data):G.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,J,D.x,D.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,J,D.x,D.y,Ie,Ne,G.image),J===0&&Q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(D,G,Q,J,Z=0){let Se=D.max.x-D.min.x,Ie=D.max.y-D.min.y,Ne=D.max.z-D.min.z,Be=pe.convert(J.format),je=pe.convert(J.type),Ze;if(J.isData3DTexture)we.setTexture3D(J,0),Ze=k.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)we.setTexture2DArray(J,0),Ze=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,J.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,J.unpackAlignment);let Qe=k.getParameter(k.UNPACK_ROW_LENGTH),Rt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),qt=k.getParameter(k.UNPACK_SKIP_PIXELS),dn=k.getParameter(k.UNPACK_SKIP_ROWS),hi=k.getParameter(k.UNPACK_SKIP_IMAGES),lt=Q.isCompressedTexture?Q.mipmaps[Z]:Q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,D.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,D.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,D.min.z),Q.isDataTexture||Q.isData3DTexture?k.texSubImage3D(Ze,Z,G.x,G.y,G.z,Se,Ie,Ne,Be,je,lt.data):J.isCompressedArrayTexture?k.compressedTexSubImage3D(Ze,Z,G.x,G.y,G.z,Se,Ie,Ne,Be,lt.data):k.texSubImage3D(Ze,Z,G.x,G.y,G.z,Se,Ie,Ne,Be,je,lt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Qe),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,qt),k.pixelStorei(k.UNPACK_SKIP_ROWS,dn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,hi),Z===0&&J.generateMipmaps&&k.generateMipmap(Ze),ee.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?we.setTextureCube(D,0):D.isData3DTexture?we.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?we.setTexture2DArray(D,0):we.setTexture2D(D,0),ee.unbindTexture()},this.resetState=function(){E=0,S=0,R=null,ee.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fl?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===to?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},bc=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Rs=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Lg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new T,xn=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Oe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Na=class extends At{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},us,ia=new T,ds=new T,fs=new T,ps=new Y,ra=new Y,Hg=new De,Io=new T,sa=new T,No=new T,Np=new Y,xh=new Y,Fp=new Y,vc=class extends nt{constructor(e=new Na){if(super(),this.isSprite=!0,this.type="Sprite",us===void 0){us=new Ge;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hn(t,5);us.setIndex([0,1,2,0,2,3]),us.setAttribute("position",new xn(n,3,0,!1)),us.setAttribute("uv",new xn(n,2,3,!1))}this.geometry=us,this.material=e,this.center=new Y(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ds.setFromMatrixScale(this.matrixWorld),Hg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),fs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ds.multiplyScalar(-fs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Fo(Io.set(-.5,-.5,0),fs,a,ds,i,r),Fo(sa.set(.5,-.5,0),fs,a,ds,i,r),Fo(No.set(.5,.5,0),fs,a,ds,i,r),Np.set(0,0),xh.set(1,0),Fp.set(1,1);let o=e.ray.intersectTriangle(Io,sa,No,!1,ia);if(o===null&&(Fo(sa.set(-.5,.5,0),fs,a,ds,i,r),xh.set(0,1),o=e.ray.intersectTriangle(Io,No,sa,!1,ia),o===null))return;let l=e.ray.origin.distanceTo(ia);l<e.near||l>e.far||t.push({distance:l,point:ia.clone(),uv:xi.getInterpolation(ia,Io,sa,No,Np,xh,Fp,new Y),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Fo(s,e,t,n,i,r){ps.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ra.x=r*ps.x-i*ps.y,ra.y=i*ps.x+r*ps.y):ra.copy(ps),s.copy(e),s.x+=ra.x,s.y+=ra.y,s.applyMatrix4(Hg)}var Oo=new T,Op=new T,xc=class extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){Oo.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(Oo);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){Oo.setFromMatrixPosition(e.matrixWorld),Op.setFromMatrixPosition(this.matrixWorld);let n=Oo.distanceTo(Op)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Up=new T,kp=new et,Bp=new et,yM=new T,zp=new De,Uo=new T,_h=new wt,Hp=new De,yh=new $n,Cs=class extends it{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uo),this.boundingBox.expandByPoint(Uo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Uo),this.boundingSphere.expandByPoint(Uo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_h.copy(this.boundingSphere),_h.applyMatrix4(i),e.ray.intersectsSphere(_h)!==!1&&(Hp.copy(i).invert(),yh.copy(e.ray).applyMatrix4(Hp),!(this.boundingBox!==null&&yh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===og?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;kp.fromBufferAttribute(i.attributes.skinIndex,e),Bp.fromBufferAttribute(i.attributes.skinWeight,e),Up.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Bp.getComponent(r);if(a!==0){let o=kp.getComponent(r);zp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(yM.copy(Up).applyMatrix4(zp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},kr=class extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},cn=class extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=vt,h=vt,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gp=new De,wM=new De,Ps=class s{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:wM;Gp.multiplyMatrices(o,t[r]),Gp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new cn(t,e,e,Vt,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new kr),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Gn=class extends Oe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new De,Vp=new De,ko=[],Wp=new dt,MM=new De,aa=new it,oa=new wt,Ls=class extends it{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,MM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),Wp.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(Wp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),oa.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(aa.geometry=this.geometry,aa.material=this.material,aa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ms),Vp.multiplyMatrices(n,ms),aa.matrixWorld=Vp,aa.raycast(e,ko);for(let a=0,o=ko.length;a<o;a++){let l=ko[a];l.instanceId=r,l.object=this,t.push(l)}ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cn(new Float32Array(i*this.count),i,this.count,Rd,an));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function SM(s,e){return s.z-e.z}function EM(s,e){return e.z-s.z}var Tu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}},gs="batchId",Gi=new De,qp=new De,AM=new De,Xp=new De,wh=new Or,Bo=new dt,gr=new wt,ca=new T,Mh=new Tu,Yt=new it,zo=[];function TM(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}var _c=class extends it{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new Ge,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new cn(t,e,e,Vt,an);this._matricesTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let o in e.attributes){let l=e.getAttribute(o),{array:c,itemSize:h,normalized:u}=l,d=new c.constructor(n*h),f=new Oe(d,h,u);t.setAttribute(o,f)}if(e.getIndex()!==null){let o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Oe(o,1))}let a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(gs,new Oe(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(gs))throw new Error(`BatchedMesh: Geometry cannot use attribute "${gs}"`);let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(n===gs)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dt);let e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Gi),this.getBoundingBoxAt(i,Bo).applyMatrix4(Gi),t.union(Bo))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wt);let e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Gi),this.getBoundingSphereAt(i,gr).applyMatrix4(Gi),t.union(gr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._visibility,d=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;u.push(!0),d.push(!0);let b=this._geometryCount;this._geometryCount++,AM.toArray(m,b*16),f.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new dt,sphereInitialized:!1,sphere:new wt});let g=this.geometry.getAttribute(gs);for(let p=0;p<i.vertexCount;p++)g.setX(i.vertexStart+p,b);return g.needsUpdate=!0,this.setGeometryAt(b,e),b}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let l=o.vertexStart,c=o.vertexCount;for(let f in n.attributes){if(f===gs)continue;let m=t.getAttribute(f),b=n.getAttribute(f);TM(m,b,l);let g=m.itemSize;for(let p=m.count,x=c;p<x;p++){let v=l+p;for(let _=0;_<g;_++)b.setComponent(v,_,0)}b.needsUpdate=!0,b.addUpdateRange(l*g,c*g)}if(i){let f=o.indexStart;for(let m=0;m<a.count;m++)r.setX(f+m,l+a.getX(m));for(let m=a.count,b=o.indexCount;m<b;m++)r.setX(f+m,l);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}let h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[e],d=t.getAttribute("position");return u.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let h=c.start,u=c.start+c.count;h<u;h++){let d=h;o&&(d=o.getX(d)),r.expandByPoint(ca.fromBufferAttribute(l,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Bo),Bo.getCenter(r.center);let o=a.index,l=a.attributes.position,c=this._drawRanges[e],h=0;for(let u=c.start,d=c.start+c.count;u<d;u++){let f=u;o&&(f=o.getX(f)),ca.fromBufferAttribute(l,f),h=Math.max(h,r.center.distanceToSquared(ca))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){let n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){let n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Yt.material=this.material,Yt.geometry.index=l.index,Yt.geometry.attributes=l.attributes,Yt.geometry.boundingBox===null&&(Yt.geometry.boundingBox=new dt),Yt.geometry.boundingSphere===null&&(Yt.geometry.boundingSphere=new wt);for(let c=0;c<a;c++){if(!n[c]||!i[c])continue;let h=r[c];Yt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(c,Yt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Yt.geometry.boundingBox),this.getBoundingSphereAt(c,Yt.geometry.boundingSphere),Yt.raycast(e,zo);for(let u=0,d=zo.length;u<d;u++){let f=zo[u];f.object=this,f.batchId=c,t.push(f)}zo.length=0}Yt.material=null,Yt.geometry.index=null,Yt.geometry.attributes={},Yt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Xp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),wh.setFromProjectionMatrix(Xp,e.coordinateSystem));let m=0;if(this.sortObjects){qp.copy(this.matrixWorld).invert(),ca.setFromMatrixPosition(n.matrixWorld).applyMatrix4(qp);for(let p=0,x=c.length;p<x;p++)if(c[p]&&l[p]){this.getMatrixAt(p,Gi),this.getBoundingSphereAt(p,gr).applyMatrix4(Gi);let v=!1;if(f&&(v=!wh.intersectsSphere(gr)),!v){let _=ca.distanceTo(gr.center);Mh.push(d[p],_)}}let b=Mh.list,g=this.customSort;g===null?b.sort(r.transparent?EM:SM):g.call(this,b,n);for(let p=0,x=b.length;p<x;p++){let v=b[p];h[m]=v.start*o,u[m]=v.count,m++}Mh.reset()}else for(let b=0,g=c.length;b<g;b++)if(c[b]&&l[b]){let p=!1;if(f&&(this.getMatrixAt(b,Gi),this.getBoundingSphereAt(b,gr).applyMatrix4(Gi),p=!wh.intersectsSphere(gr)),!p){let x=d[b];h[m]=x.start*o,u[m]=x.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},Ot=class extends At{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},yc=new T,wc=new T,jp=new De,la=new $n,Ho=new wt,Sh=new T,Kp=new T,Tn=class extends nt{constructor(e=new Ge,t=new Ot){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)yc.fromBufferAttribute(t,i-1),wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=yc.distanceTo(wc);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(i),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;jp.copy(i).invert(),la.copy(e.ray).applyMatrix4(jp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=h.getX(b),x=h.getX(b+1),v=Go(this,e,la,l,p,x);v&&t.push(v)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=Go(this,e,la,l,b,g);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=c){let p=Go(this,e,la,l,b,b+1);p&&t.push(p)}if(this.isLineLoop){let b=Go(this,e,la,l,m-1,f);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Go(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(yc.fromBufferAttribute(a,i),wc.fromBufferAttribute(a,r),t.distanceSqToSegment(yc,wc,Sh,Kp)>n)return;Sh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Sh);if(!(l<e.near||l>e.far))return{distance:l,point:Kp.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}var Yp=new T,Jp=new T,ln=class extends Tn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yp.fromBufferAttribute(t,i),Jp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yp.distanceTo(Jp);e.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ds=class extends Tn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Br=class extends At{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zp=new De,Ru=new $n,Vo=new wt,Wo=new T,Is=class extends nt{constructor(e=new Ge,t=new Br){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(i),Vo.radius+=r,e.ray.intersectsSphere(Vo)===!1)return;Zp.copy(i).invert(),Ru.copy(e.ray).applyMatrix4(Zp);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=c.getX(m);Wo.fromBufferAttribute(u,g),$p(Wo,g,l,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)Wo.fromBufferAttribute(u,m),$p(Wo,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $p(s,e,t,n,i,r,a){let o=Ru.distanceSqToPoint(s);if(o<t){let l=new T;Ru.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Cu=class extends Mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:ct,this.magFilter=r!==void 0?r:ct,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Pu=class extends Mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vt,this.minFilter=vt,this.generateMipmaps=!1,this.needsUpdate=!0}},Ns=class extends Mt{constructor(e,t,n,i,r,a,o,l,c,h,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Lu=class extends Ns{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Dt}},Du=class extends Ns{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Mi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},Fa=class extends Mt{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new Y:new T);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],r=[],a=[],o=new T,l=new De;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Et(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Et(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends _n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Y){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Mc=class extends Fs{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kd(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var qo=new T,Eh=new kd,Ah=new kd,Th=new kd,Sc=class extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(qo.subVectors(i[0],i[1]).add(i[0]),c=qo);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(qo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=qo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),b=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);b<1e-4&&(b=1),m<1e-4&&(m=b),g<1e-4&&(g=b),Eh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,b,g),Ah.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,b,g),Th.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,b,g)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ah.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Th.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Eh.calc(l),Ah.calc(l),Th.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qp(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function RM(s,e){let t=1-s;return t*t*e}function CM(s,e){return 2*(1-s)*s*e}function PM(s,e){return s*s*e}function ma(s,e,t,n){return RM(s,e)+CM(s,t)+PM(s,n)}function LM(s,e){let t=1-s;return t*t*t*e}function DM(s,e){let t=1-s;return 3*t*t*s*e}function IM(s,e){return 3*(1-s)*s*s*e}function NM(s,e){return s*s*s*e}function ga(s,e,t,n,i){return LM(s,e)+DM(s,t)+IM(s,n)+NM(s,i)}var Oa=class extends _n{constructor(e=new Y,t=new Y,n=new Y,i=new Y){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Y){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,i.x,r.x,a.x,o.x),ga(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ec=class extends _n{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ga(e,i.x,r.x,a.x,o.x),ga(e,i.y,r.y,a.y,o.y),ga(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ua=class extends _n{constructor(e=new Y,t=new Y){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Y){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ac=class extends _n{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ka=class extends _n{constructor(e=new Y,t=new Y,n=new Y){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Y){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,i.x,r.x,a.x),ma(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ba=class extends _n{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ma(e,i.x,r.x,a.x),ma(e,i.y,r.y,a.y),ma(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},za=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Y){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Qp(o,l.x,c.x,h.x,u.x),Qp(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Y().fromArray(i))}return this}},Tc=Object.freeze({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:Oa,CubicBezierCurve3:Ec,EllipseCurve:Fs,LineCurve:Ua,LineCurve3:Ac,QuadraticBezierCurve:ka,QuadraticBezierCurve3:Ba,SplineCurve:za}),Rc=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Tc[i.type]().fromJSON(i))}return this}},zr=class extends Rc{constructor(e){super(),this.type="Path",this.currentPoint=new Y,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ua(this.currentPoint.clone(),new Y(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ka(this.currentPoint.clone(),new Y(e,t),new Y(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Oa(this.currentPoint.clone(),new Y(e,t),new Y(n,i),new Y(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new za(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){let c=new Fs(e,t,n,i,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ha=class s extends Ge{constructor(e=[new Y(0,-.5),new Y(.5,0),new Y(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Et(i,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new T,d=new Y,f=new T,m=new T,b=new T,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),l.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=t;x++){let v=n+x*h*i,_=Math.sin(v),E=Math.cos(v);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*_,u.y=e[S].y,u.z=e[S].x*E,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let R=l[3*S+0]*_,L=l[3*S+1],w=l[3*S+0]*E;c.push(R,L,w)}}for(let x=0;x<t;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,E=_,S=_+e.length,R=_+e.length+1,L=_+1;r.push(E,S,L),r.push(R,L,S)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Cc=class s extends Ha{constructor(e=1,t=1,n=4,i=8){let r=new zr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Os=class s extends Ge{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new T,h=new Y;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ki=class s extends Ge{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function x(){let _=new T,E=new T,S=0,R=(t-e)/n;for(let L=0;L<=r;L++){let w=[],y=L/r,F=y*(t-e)+e;for(let O=0;O<=i;O++){let I=O/i,C=I*l+o,P=Math.sin(C),B=Math.cos(C);E.x=F*P,E.y=-y*n+g,E.z=F*B,u.push(E.x,E.y,E.z),_.set(P,R,B).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-y),w.push(m++)}b.push(w)}for(let L=0;L<i;L++)for(let w=0;w<r;w++){let y=b[w][L],F=b[w+1][L],O=b[w+1][L+1],I=b[w][L+1];h.push(y,F,I),h.push(F,O,I),S+=6}c.addGroup(p,S,0),p+=S}function v(_){let E=m,S=new Y,R=new T,L=0,w=_===!0?e:t,y=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*y,0),d.push(0,y,0),f.push(.5,.5),m++;let F=m;for(let O=0;O<=i;O++){let C=O/i*l+o,P=Math.cos(C),B=Math.sin(C);R.x=w*B,R.y=g*y,R.z=w*P,u.push(R.x,R.y,R.z),d.push(0,y,0),S.x=P*.5+.5,S.y=B*.5*y+.5,f.push(S.x,S.y),m++}for(let O=0;O<i;O++){let I=E+O,C=F+O;_===!0?h.push(C,C+1,I):h.push(C+1,C,I),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Pc=class s extends Ki{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yi=class s extends Ge{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ce(r,3)),this.setAttribute("normal",new Ce(r.slice(),3)),this.setAttribute("uv",new Ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let v=new T,_=new T,E=new T;for(let S=0;S<t.length;S+=3)f(t[S+0],v),f(t[S+1],_),f(t[S+2],E),l(v,_,E,x)}function l(x,v,_,E){let S=E+1,R=[];for(let L=0;L<=S;L++){R[L]=[];let w=x.clone().lerp(_,L/S),y=v.clone().lerp(_,L/S),F=S-L;for(let O=0;O<=F;O++)O===0&&L===S?R[L][O]=w:R[L][O]=w.clone().lerp(y,O/F)}for(let L=0;L<S;L++)for(let w=0;w<2*(S-L)-1;w++){let y=Math.floor(w/2);w%2===0?(d(R[L][y+1]),d(R[L+1][y]),d(R[L][y])):(d(R[L][y+1]),d(R[L+1][y+1]),d(R[L+1][y]))}}function c(x){let v=new T;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(x),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function h(){let x=new T;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];let _=g(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(_,1-E)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let v=a[x+0],_=a[x+2],E=a[x+4],S=Math.max(v,_,E),R=Math.min(v,_,E);S>.9&&R<.1&&(v<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){let _=x*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){let x=new T,v=new T,_=new T,E=new T,S=new Y,R=new Y,L=new Y;for(let w=0,y=0;w<r.length;w+=9,y+=6){x.set(r[w+0],r[w+1],r[w+2]),v.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),S.set(a[y+0],a[y+1]),R.set(a[y+2],a[y+3]),L.set(a[y+4],a[y+5]),E.copy(x).add(v).add(_).divideScalar(3);let F=g(E);b(S,y+0,x,F),b(R,y+2,v,F),b(L,y+4,_,F)}}function b(x,v,_,E){E<0&&x.x===1&&(a[v]=x.x-1),_.x===0&&_.z===0&&(a[v]=E/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Lc=class s extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Xo=new T,jo=new T,Rh=new T,Ko=new xi,Dc=class extends Ge{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Lr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<l;m+=3){a?(c[0]=a.getX(m),c[1]=a.getX(m+1),c[2]=a.getX(m+2)):(c[0]=m,c[1]=m+1,c[2]=m+2);let{a:b,b:g,c:p}=Ko;if(b.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),Ko.getNormal(Rh),u[0]=`${Math.round(b.x*i)},${Math.round(b.y*i)},${Math.round(b.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let v=(x+1)%3,_=u[x],E=u[v],S=Ko[h[x]],R=Ko[h[v]],L=`${_}_${E}`,w=`${E}_${_}`;w in d&&d[w]?(Rh.dot(d[w].normal)<=r&&(f.push(S.x,S.y,S.z),f.push(R.x,R.y,R.z)),d[w]=null):L in d||(d[L]={index0:c[x],index1:c[v],normal:Rh.clone()})}}for(let m in d)if(d[m]){let{index0:b,index1:g}=d[m];Xo.fromBufferAttribute(o,b),jo.fromBufferAttribute(o,g),f.push(Xo.x,Xo.y,Xo.z),f.push(jo.x,jo.y,jo.z)}this.setAttribute("position",new Ce(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},wi=class extends zr{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new zr().fromJSON(i))}return this}},FM={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Gg(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=zM(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ga(r,a,t,o,l,f,0),a}};function Gg(s,e,t,n,i){let r,a;if(i===ZM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=em(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=em(r,s[r],s[r+1],a);return a&&gl(a,a.next)&&(Wa(a),a=a.next),a}function Hr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(gl(t,t.next)||yt(t.prev,t,t.next)===0)){if(Wa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ga(s,e,t,n,i,r,a){if(!s)return;!a&&r&&qM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?UM(s,n,i,r):OM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Wa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=kM(Hr(s),e,t),Ga(s,e,t,n,i,r,2)):a===2&&BM(s,e,t,n,i,r):Ga(Hr(s),e,t,n,i,r,1);break}}}function OM(s){let e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=i>r?i>a?i:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&xs(i,o,r,l,a,c,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function UM(s,e,t,n){let i=s.prev,r=s,a=s.next;if(yt(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,m=h<u?h<d?h:d:u<d?u:d,b=o>l?o>c?o:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,p=Iu(f,m,e,t,n),x=Iu(b,g,e,t,n),v=s.prevZ,_=s.nextZ;for(;v&&v.z>=p&&_&&_.z<=x;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&xs(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&xs(o,h,l,u,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=b&&v.y>=m&&v.y<=g&&v!==i&&v!==a&&xs(o,h,l,u,c,d,v.x,v.y)&&yt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=b&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&xs(o,h,l,u,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function kM(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!gl(i,r)&&Vg(i,n,n.next,r)&&Va(i,r)&&Va(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Wa(n),Wa(n.next),n=s=r),n=n.next}while(n!==s);return Hr(n)}function BM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&KM(a,o)){let l=Wg(a,o);a=Hr(a,a.next),l=Hr(l,l.next),Ga(a,e,t,n,i,r,0),Ga(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function zM(s,e,t,n){let i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Gg(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(jM(c));for(i.sort(HM),r=0;r<i.length;r++)t=GM(i[r],t);return t}function HM(s,e){return s.x-e.x}function GM(s,e){let t=VM(s,e);if(!t)return e;let n=Wg(t,s);return Hr(n,n.next),Hr(t,t.next)}function VM(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&xs(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Va(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&WM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function WM(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function qM(s,e,t,n){let i=s;do i.z===0&&(i.z=Iu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,XM(i)}function XM(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Iu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function jM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function xs(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function KM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!YM(s,e)&&(Va(s,e)&&Va(e,s)&&JM(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||gl(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function gl(s,e){return s.x===e.x&&s.y===e.y}function Vg(s,e,t,n){let i=Jo(yt(s,e,t)),r=Jo(yt(s,e,n)),a=Jo(yt(t,n,s)),o=Jo(yt(t,n,e));return!!(i!==r&&a!==o||i===0&&Yo(s,t,e)||r===0&&Yo(s,n,e)||a===0&&Yo(t,s,n)||o===0&&Yo(t,e,n))}function Yo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Jo(s){return s>0?1:s<0?-1:0}function YM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Vg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Va(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function JM(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wg(s,e){let t=new Nu(s.i,s.x,s.y),n=new Nu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function em(s,e,t,n){let i=new Nu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Wa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Nu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ZM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Zn=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];tm(e),nm(n,e);let a=e.length;t.forEach(tm);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,nm(n,t[l]);let o=FM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function tm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function nm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ic=class s extends Ge{constructor(e=new wi([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ce(i,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:$M,v,_=!1,E,S,R,L;p&&(v=p.getSpacedPoints(h),_=!0,d=!1,E=p.computeFrenetFrames(h,!1),S=new T,R=new T,L=new T),d||(g=0,f=0,m=0,b=0);let w=o.extractPoints(c),y=w.shape,F=w.holes;if(!Zn.isClockWise(y)){y=y.reverse();for(let $=0,re=F.length;$<re;$++){let ee=F[$];Zn.isClockWise(ee)&&(F[$]=ee.reverse())}}let I=Zn.triangulateShape(y,F),C=y;for(let $=0,re=F.length;$<re;$++){let ee=F[$];y=y.concat(ee)}function P($,re,ee){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(re,ee)}let B=y.length,X=I.length;function U($,re,ee){let ue,se,we,Pe=$.x-re.x,N=$.y-re.y,A=ee.x-$.x,W=ee.y-$.y,ne=Pe*Pe+N*N,oe=Pe*W-N*A;if(Math.abs(oe)>Number.EPSILON){let z=Math.sqrt(ne),fe=Math.sqrt(A*A+W*W),ce=re.x-N/z,de=re.y+Pe/z,Ae=ee.x-W/fe,he=ee.y+A/fe,Me=((Ae-ce)*W-(he-de)*A)/(Pe*W-N*A);ue=ce+Pe*Me-$.x,se=de+N*Me-$.y;let Le=ue*ue+se*se;if(Le<=2)return new Y(ue,se);we=Math.sqrt(Le/2)}else{let z=!1;Pe>Number.EPSILON?A>Number.EPSILON&&(z=!0):Pe<-Number.EPSILON?A<-Number.EPSILON&&(z=!0):Math.sign(N)===Math.sign(W)&&(z=!0),z?(ue=-N,se=Pe,we=Math.sqrt(ne)):(ue=Pe,se=N,we=Math.sqrt(ne/2))}return new Y(ue/we,se/we)}let V=[];for(let $=0,re=C.length,ee=re-1,ue=$+1;$<re;$++,ee++,ue++)ee===re&&(ee=0),ue===re&&(ue=0),V[$]=U(C[$],C[ee],C[ue]);let j=[],ie,ve=V.concat();for(let $=0,re=F.length;$<re;$++){let ee=F[$];ie=[];for(let ue=0,se=ee.length,we=se-1,Pe=ue+1;ue<se;ue++,we++,Pe++)we===se&&(we=0),Pe===se&&(Pe=0),ie[ue]=U(ee[ue],ee[we],ee[Pe]);j.push(ie),ve=ve.concat(ie)}for(let $=0;$<g;$++){let re=$/g,ee=f*Math.cos(re*Math.PI/2),ue=m*Math.sin(re*Math.PI/2)+b;for(let se=0,we=C.length;se<we;se++){let Pe=P(C[se],V[se],ue);ae(Pe.x,Pe.y,-ee)}for(let se=0,we=F.length;se<we;se++){let Pe=F[se];ie=j[se];for(let N=0,A=Pe.length;N<A;N++){let W=P(Pe[N],ie[N],ue);ae(W.x,W.y,-ee)}}}let Te=m+b;for(let $=0;$<B;$++){let re=d?P(y[$],ve[$],Te):y[$];_?(R.copy(E.normals[0]).multiplyScalar(re.x),S.copy(E.binormals[0]).multiplyScalar(re.y),L.copy(v[0]).add(R).add(S),ae(L.x,L.y,L.z)):ae(re.x,re.y,0)}for(let $=1;$<=h;$++)for(let re=0;re<B;re++){let ee=d?P(y[re],ve[re],Te):y[re];_?(R.copy(E.normals[$]).multiplyScalar(ee.x),S.copy(E.binormals[$]).multiplyScalar(ee.y),L.copy(v[$]).add(R).add(S),ae(L.x,L.y,L.z)):ae(ee.x,ee.y,u/h*$)}for(let $=g-1;$>=0;$--){let re=$/g,ee=f*Math.cos(re*Math.PI/2),ue=m*Math.sin(re*Math.PI/2)+b;for(let se=0,we=C.length;se<we;se++){let Pe=P(C[se],V[se],ue);ae(Pe.x,Pe.y,u+ee)}for(let se=0,we=F.length;se<we;se++){let Pe=F[se];ie=j[se];for(let N=0,A=Pe.length;N<A;N++){let W=P(Pe[N],ie[N],ue);_?ae(W.x,W.y+v[h-1].y,v[h-1].x+ee):ae(W.x,W.y,u+ee)}}}q(),te();function q(){let $=i.length/3;if(d){let re=0,ee=B*re;for(let ue=0;ue<X;ue++){let se=I[ue];Re(se[2]+ee,se[1]+ee,se[0]+ee)}re=h+g*2,ee=B*re;for(let ue=0;ue<X;ue++){let se=I[ue];Re(se[0]+ee,se[1]+ee,se[2]+ee)}}else{for(let re=0;re<X;re++){let ee=I[re];Re(ee[2],ee[1],ee[0])}for(let re=0;re<X;re++){let ee=I[re];Re(ee[0]+B*h,ee[1]+B*h,ee[2]+B*h)}}n.addGroup($,i.length/3-$,0)}function te(){let $=i.length/3,re=0;be(C,re),re+=C.length;for(let ee=0,ue=F.length;ee<ue;ee++){let se=F[ee];be(se,re),re+=se.length}n.addGroup($,i.length/3-$,1)}function be($,re){let ee=$.length;for(;--ee>=0;){let ue=ee,se=ee-1;se<0&&(se=$.length-1);for(let we=0,Pe=h+g*2;we<Pe;we++){let N=B*we,A=B*(we+1),W=re+ue+N,ne=re+se+N,oe=re+se+A,z=re+ue+A;_e(W,ne,oe,z)}}}function ae($,re,ee){l.push($),l.push(re),l.push(ee)}function Re($,re,ee){k($),k(re),k(ee);let ue=i.length/3,se=x.generateTopUV(n,i,ue-3,ue-2,ue-1);Ee(se[0]),Ee(se[1]),Ee(se[2])}function _e($,re,ee,ue){k($),k(re),k(ue),k(re),k(ee),k(ue);let se=i.length/3,we=x.generateSideWallUV(n,i,se-6,se-3,se-2,se-1);Ee(we[0]),Ee(we[1]),Ee(we[3]),Ee(we[1]),Ee(we[2]),Ee(we[3])}function k($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function Ee($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return QM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Tc[i.type]().fromJSON(i)),new s(n,e.options)}},$M={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Y(r,a),new Y(o,l),new Y(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],b=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Y(a,1-l),new Y(c,1-u),new Y(d,1-m),new Y(b,1-p)]:[new Y(o,1-l),new Y(h,1-u),new Y(f,1-m),new Y(g,1-p)]}};function QM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Nc=class s extends Yi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},qa=class s extends Yi{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Fc=class s extends Ge{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/i,f=new T,m=new Y;for(let b=0;b<=i;b++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let b=0;b<i;b++){let g=b*(n+1);for(let p=0;p<n;p++){let x=p+g,v=x,_=x+n+1,E=x+n+2,S=x+1;o.push(v,_,S),o.push(_,E,S)}}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oc=class s extends Ge{constructor(e=new wi([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ce(i,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function c(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;Zn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];Zn.isClockWise(x)===!0&&(m[g]=x.reverse())}let b=Zn.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=b.length;g<p;g++){let x=b[g],v=x[0]+u,_=x[1]+u,E=x[2]+u;n.push(v,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eS(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function eS(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Gr=class s extends Ge{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new T,d=new T,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],v=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let E=0;E<=t;E++){let S=E/t;u.x=-e*Math.cos(i+S*r)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(i+S*r)*Math.sin(a+v*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(S+_,1-v),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let v=h[p][x+1],_=h[p][x],E=h[p+1][x],S=h[p+1][x+1];(p!==0||a>0)&&f.push(v,_,S),(p!==n-1||l<Math.PI)&&f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new Ce(m,3)),this.setAttribute("normal",new Ce(b,3)),this.setAttribute("uv",new Ce(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Uc=class s extends Yi{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},kc=class s extends Ge{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let b=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(b),u.y=(e+t*Math.cos(g))*Math.sin(b),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let b=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;a.push(b,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Ce(o,3)),this.setAttribute("normal",new Ce(l,3)),this.setAttribute("uv",new Ce(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Bc=class s extends Ge{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new T,d=new T,f=new T,m=new T,b=new T,g=new T,p=new T;for(let v=0;v<=n;++v){let _=v/n*r*Math.PI*2;x(_,r,a,e,f),x(_+.01,r,a,e,m),g.subVectors(m,f),p.addVectors(m,f),b.crossVectors(g,p),p.crossVectors(b,g),b.normalize(),p.normalize();for(let E=0;E<=i;++E){let S=E/i*Math.PI*2,R=-t*Math.cos(S),L=t*Math.sin(S);u.x=f.x+(R*p.x+L*b.x),u.y=f.y+(R*p.y+L*b.y),u.z=f.z+(R*p.z+L*b.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(E/i)}}for(let v=1;v<=n;v++)for(let _=1;_<=i;_++){let E=(i+1)*(v-1)+(_-1),S=(i+1)*v+(_-1),R=(i+1)*v+_,L=(i+1)*(v-1)+_;o.push(E,S,L),o.push(S,R,L)}this.setIndex(o),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(c,3)),this.setAttribute("uv",new Ce(h,2));function x(v,_,E,S,R){let L=Math.cos(v),w=Math.sin(v),y=E/_*v,F=Math.cos(y);R.x=S*(2+F)*.5*L,R.y=S*(2+F)*w*.5,R.z=S*Math.sin(y)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},zc=class s extends Ge{constructor(e=new Ba(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,l=new T,c=new Y,h=new T,u=[],d=[],f=[],m=[];b(),this.setIndex(m),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(f,2));function b(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),x(),p()}function g(v){h=e.getPointAt(v/t,h);let _=a.normals[v],E=a.binormals[v];for(let S=0;S<=i;S++){let R=S/i*Math.PI*2,L=Math.sin(R),w=-Math.cos(R);l.x=w*_.x+L*E.x,l.y=w*_.y+L*E.y,l.z=w*_.z+L*E.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=i;_++){let E=(i+1)*(v-1)+(_-1),S=(i+1)*v+(_-1),R=(i+1)*v+_,L=(i+1)*(v-1)+_;m.push(E,S,L),m.push(S,R,L)}}function x(){for(let v=0;v<=t;v++)for(let _=0;_<=i;_++)c.x=v/t,c.y=_/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Tc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Hc=class extends Ge{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,r=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start,f=u.count;for(let m=d,b=d+f;m<b;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),x=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),im(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),im(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ce(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function im(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var rm=Object.freeze({__proto__:null,BoxGeometry:Nr,CapsuleGeometry:Cc,CircleGeometry:Os,ConeGeometry:Pc,CylinderGeometry:Ki,DodecahedronGeometry:Lc,EdgesGeometry:Dc,ExtrudeGeometry:Ic,IcosahedronGeometry:Nc,LatheGeometry:Ha,OctahedronGeometry:qa,PlaneGeometry:Ei,PolyhedronGeometry:Yi,RingGeometry:Fc,ShapeGeometry:Oc,SphereGeometry:Gr,TetrahedronGeometry:Uc,TorusGeometry:kc,TorusKnotGeometry:Bc,TubeGeometry:zc,WireframeGeometry:Hc}),Gc=class extends At{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Vc=class extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ji=class extends At{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},en=class extends Ji{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Wc=class extends At{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qc=class extends At{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xc=class extends At{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},jc=class extends At{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kc=class extends At{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=er,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yc=class extends Ot{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Tr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function qg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Xg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Fu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function Bd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function tS(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let l=0;l<r.tracks.length;++l){let c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){let m=c.times[f]*i;if(!(m<t||m>=n)){u.push(c.times[f]);for(let b=0;b<h;++b)d.push(c.values[f*h+b])}}u.length!==0&&(c.times=Tr(u,c.times.constructor),c.values=Tr(d,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function nS(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;let c=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=o.times.length-1,b;if(r<=o.times[0]){let p=h,x=u-h;b=o.values.slice(p,x)}else if(r>=o.times[m]){let p=m*u+h,x=p+u-h;b=o.values.slice(p,x)}else{let p=o.createInterpolant(),x=h,v=u-h;p.evaluate(r),b=p.resultBuffer.slice(x,v)}l==="quaternion"&&new ht().fromArray(b).normalize().conjugate().toArray(b);let g=c.times.length;for(let p=0;p<g;++p){let x=p*f+d;if(l==="quaternion")ht.multiplyQuaternionsFlat(c.values,x,b,0,c.values,x);else{let v=f-d*2;for(let _=0;_<v;++_)c.values[x+_]-=b[_]}}}return s.blendMode=Dd,s}var iS={convertArray:Tr,isTypedArray:qg,getKeyframeOrder:Xg,sortedArray:Fu,flattenJSON:Bd,subclip:tS,makeClipAdditive:nS},Ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Er,endingEnd:Er}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ar:r=e,o=2*t-n;break;case _a:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ar:a=e,l=2*n-t;break;case _a:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*b+.5*m,_=f*g-f*b;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+x*a[c+E]+v*a[l+E]+_*a[u+E];return r}},Xa=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Zc=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tr(t,this.TimeBufferType),this.values=Tr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tr(e.times,Array),values:Tr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ir:t=this.InterpolantFactoryMethodDiscrete;break;case ji:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return ji;case this.InterpolantFactoryMethodSmooth:return lc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&qg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ji;var Ri=class extends yn{};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ir;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends yn{};ja.prototype.ValueTypeName="color";var ti=class extends yn{};ti.prototype.ValueTypeName="number";var $c=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)ht.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vn=class extends yn{InterpolantFactoryMethodLinear(e){return new $c(this.times,this.values,this.getValueSize(),e)}};Vn.prototype.ValueTypeName="quaternion";Vn.prototype.DefaultInterpolation=ji;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends yn{};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ir;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ni=class extends yn{};ni.prototype.ValueTypeName="vector";var Pi=class{constructor(e="",t=-1,n=[],i=dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(sS(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Xg(l);l=Fu(l,1,h),c=Fu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ti(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,b){if(f.length!==0){let g=[],p=[];Bd(f,g,p,m),g.length!==0&&b.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let b=0;b<d[m].morphTargets.length;b++)f[d[m].morphTargets[b]]=-1;for(let b in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let v=d[m];g.push(v.time),p.push(v.morphTarget===b?1:0)}i.push(new ti(".morphTargetInfluence["+b+"]",g,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(ni,f+".position",d,"pos",i),n(Vn,f+".quaternion",d,"rot",i),n(ni,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function rS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return ja;case"quaternion":return Vn;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function sS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=rS(s.type);if(s.times===void 0){let t=[],n=[];Bd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var _i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ka=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},jg=new Ka,Gt=class{constructor(e){this.manager=e!==void 0?e:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gt.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},Ou=class extends Error{constructor(e,t){super(e),this.response=t}},hn=class extends Gt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=_i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=gi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:v,value:_})=>{if(v)p.close();else{b+=_.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let S=0,R=h.length;S<R;S++){let L=h[S];L.onProgress&&L.onProgress(E)}p.enqueue(_),x()}})}}});return new Response(g)}else throw new Ou(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{_i.add(e,c);let h=gi[e];delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),c;delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Uu=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Pi.parse(e[n]);t.push(i)}return t}},ku=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],o=new Ns,l=new hn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(d){let f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=ct),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else l.load(e,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let b=0;b<d.mipmapCount;b++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+b]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=ct),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}},Vr=class extends Gt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Ta("img");function l(){h(),_i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},Bu=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=new Fr;r.colorSpace=pt;let a=new Vr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}},zu=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new cn,o=new hn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Dt,a.wrapT=c.wrapT!==void 0?c.wrapT:Dt,a.magFilter=c.magFilter!==void 0?c.magFilter:ct,a.minFilter=c.minFilter!==void 0?c.minFilter:ct,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=mn),c.mipmapCount===1&&(a.minFilter=ct),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}},Wn=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=new Mt,a=new Vr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},ii=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Us=class extends ii{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ch=new De,sm=new T,am=new T,Ya=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;sm.setFromMatrixPosition(e.matrixWorld),t.position.copy(sm),am.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(am),t.updateMatrixWorld(),Ch.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hu=class extends Ya{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ms*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ks=class extends ii{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Hu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},om=new De,ha=new T,Ph=new T,Gu=class extends Ya{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ha.setFromMatrixPosition(e.matrixWorld),n.position.copy(ha),Ph.copy(n.position),Ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ph),n.updateMatrixWorld(),i.makeTranslation(-ha.x,-ha.y,-ha.z),om.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(om)}},Bs=class extends ii{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Vu=class extends Ya{constructor(){super(new Qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zi=class extends ii{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Vu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qc=class extends ii{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},el=class extends ii{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},tl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},nl=class extends ii{constructor(e=new tl,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},il=class s extends Gt{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=s.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ge().setHex(a.value);break;case"v2":i.uniforms[r].value=new Y().fromArray(a.value);break;case"v3":i.uniforms[r].value=new T().fromArray(a.value);break;case"v4":i.uniforms[r].value=new et().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ve().fromArray(a.value);break;case"m4":i.uniforms[r].value=new De().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new Y().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new Y().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){let t={ShadowMaterial:Gc,SpriteMaterial:Na,RawShaderMaterial:Vc,ShaderMaterial:Ht,PointsMaterial:Br,MeshPhysicalMaterial:en,MeshStandardMaterial:Ji,MeshPhongMaterial:Wc,MeshToonMaterial:qc,MeshNormalMaterial:Xc,MeshLambertMaterial:jc,MeshDepthMaterial:ei,MeshDistanceMaterial:Da,MeshBasicMaterial:Pt,MeshMatcapMaterial:Kc,LineDashedMaterial:Yc,LineBasicMaterial:Ot,Material:At};return new t[e]}},qn=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},rl=class extends Ge{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},sl=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),x=bs(g.type,p),v=new Hn(x,g.stride);return v.uuid=g.uuid,t[m]=v,v}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let a=e.isInstancedBufferGeometry?new rl:new Ge,o=e.data.index;if(o!==void 0){let f=bs(o.type,o.array);a.setIndex(new Oe(f,1))}let l=e.data.attributes;for(let f in l){let m=l[f],b;if(m.isInterleavedBufferAttribute){let g=i(e.data,m.data);b=new xn(g,m.itemSize,m.offset,m.normalized)}else{let g=bs(m.type,m.array),p=m.isInstancedBufferAttribute?Gn:Oe;b=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(b.name=m.name),m.usage!==void 0&&b.setUsage(m.usage),a.setAttribute(f,b)}let c=e.data.morphAttributes;if(c)for(let f in c){let m=c[f],b=[];for(let g=0,p=m.length;g<p;g++){let x=m[g],v;if(x.isInterleavedBufferAttribute){let _=i(e.data,x.data);v=new xn(_,x.itemSize,x.offset,x.normalized)}else{let _=bs(x.type,x.array);v=new Oe(_,x.itemSize,x.normalized)}x.name!==void 0&&(v.name=x.name),b.push(v)}a.morphAttributes[f]=b}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let b=u[f];a.addGroup(b.start,b.count,b.materialIndex)}let d=e.data.boundingSphere;if(d!==void 0){let f=new T;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new wt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Wu=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?qn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?qn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new hn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new wi().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new Ps().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new sl;for(let r=0,a=e.length;r<a;r++){let o,l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in rm?o=rm[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new il;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Pi.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){let c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:bs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){let l=new Ka(t);r=new Vr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){let u=e[c],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,b=d.length;m<b;m++){let g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new cn(p.data,p.width,p.height)))}i[u.uuid]=new vi(f)}else{let f=o(u.url);i[u.uuid]=new vi(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:bs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new Vr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let l=e[a],c=l.url;if(Array.isArray(c)){let h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new cn(m.data,m.width,m.height)))}n[l.uuid]=new vi(h)}else{let h=await r(l.url);n[l.uuid]=new vi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let l=t[o.image],c=l.data,h;Array.isArray(c)?(h=new Fr,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new cn:h=new Mt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,aS)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],cm),h.wrapT=n(o.wrap[1],cm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,lm)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,lm)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,b=d.length;m<b;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Ai,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ge(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Rs(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new bc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new bt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Qn(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Qc(e.color,e.intensity);break;case"DirectionalLight":a=new Zi(e.color,e.intensity);break;case"PointLight":a=new Bs(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new el(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ks(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Us(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new nl().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Cs(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new it(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);let d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Ls(h,u,d),a.instanceMatrix=new Gn(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Gn(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new _c(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(b=>{let g=new dt;g.min.fromArray(b.boxMin),g.max.fromArray(b.boxMax);let p=new wt;return p.radius=b.sphereRadius,p.center.fromArray(b.sphereCenter),{boxInitialized:b.boxInitialized,box:g,sphereInitialized:b.sphereInitialized,sphere:p}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid);break;case"LOD":a=new xc;break;case"Line":a=new Tn(o(e.geometry),l(e.material));break;case"LineLoop":a=new Ds(o(e.geometry),l(e.material));break;case"LineSegments":a=new ln(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Is(o(e.geometry),l(e.material));break;case"Sprite":a=new vc(l(e.material));break;case"Group":a=new on;break;case"Bone":a=new kr;break;default:a=new nt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let m=d[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let m=d[f],b=a.getObjectByProperty("uuid",m.object);b!==void 0&&a.addLevel(b,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}},aS={UVMapping:ul,CubeReflectionMapping:Mi,CubeRefractionMapping:Xi,EquirectangularReflectionMapping:va,EquirectangularRefractionMapping:xa,CubeUVReflectionMapping:Hs},cm={RepeatWrapping:Bn,ClampToEdgeWrapping:Dt,MirroredRepeatWrapping:Dr},lm={NearestFilter:vt,NearestMipmapNearestFilter:Qa,NearestMipmapLinearFilter:qi,LinearFilter:ct,LinearMipmapNearestFilter:Cr,LinearMipmapLinearFilter:mn},Ja=class extends Gt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_i.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return _i.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),_i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});_i.add(e,l),r.manager.itemStart(e)}},Zo,Za=class{static getContext(){return Zo===void 0&&(Zo=new(window.AudioContext||window.webkitAudioContext)),Zo}static setContext(e){Zo=e}},qu=class extends Gt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{let c=l.slice(0);Za.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}},hm=new De,um=new De,br=new De,Xu=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,br.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Lr*t.fov*.5)/t.zoom,o,l;um.elements[12]=-i,hm.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,br.elements[0]=2*t.near/(l-o),br.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(br),o=-a*t.aspect-r,l=a*t.aspect-r,br.elements[0]=2*t.near/(l-o),br.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(br)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(um),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(hm)}},al=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=dm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function dm(){return(typeof performance>"u"?Date:performance).now()}var vr=new T,fm=new ht,oS=new T,xr=new T,ju=class extends nt{constructor(){super(),this.type="AudioListener",this.context=Za.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new al}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vr,fm,oS),xr.set(0,0,-1).applyQuaternion(fm),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(vr.x,i),t.positionY.linearRampToValueAtTime(vr.y,i),t.positionZ.linearRampToValueAtTime(vr.z,i),t.forwardX.linearRampToValueAtTime(xr.x,i),t.forwardY.linearRampToValueAtTime(xr.y,i),t.forwardZ.linearRampToValueAtTime(xr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(vr.x,vr.y,vr.z),t.setOrientation(xr.x,xr.y,xr.z,n.x,n.y,n.z)}},ol=class extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},_r=new T,pm=new ht,cS=new T,yr=new T,Ku=class extends ol{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(_r,pm,cS),yr.set(0,0,1).applyQuaternion(pm);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,n),t.positionY.linearRampToValueAtTime(_r.y,n),t.positionZ.linearRampToValueAtTime(_r.z,n),t.orientationX.linearRampToValueAtTime(yr.x,n),t.orientationY.linearRampToValueAtTime(yr.y,n),t.orientationZ.linearRampToValueAtTime(yr.z,n)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(yr.x,yr.y,yr.z)}},Yu=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},cl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){ht.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;ht.multiplyQuaternionsFlat(e,a,e,t,e,n),ht.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},zd="\\[\\]\\.:\\/",lS=new RegExp("["+zd+"]","g"),Hd="[^"+zd+"]",hS="[^"+zd.replace("\\.","")+"]",uS=/((?:WC+[\/:])*)/.source.replace("WC",Hd),dS=/(WCOD+)?/.source.replace("WCOD",hS),fS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hd),pS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hd),mS=new RegExp("^"+uS+dS+fS+pS+"$"),gS=["material","materials","bones","map"],Ju=class{constructor(e,t,n){let i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lS,"")}static parseTrackName(e){let t=mS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);gS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=Ju;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zu=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=gn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=l++,t[f]=m,e.push(d);for(let b=0,g=a;b!==g;++b)r[b].push(new ot(d,n[b],i[b]))}else if(m<c){o=e[m];let b=--c,g=e[b];t[g.uuid]=m,e[m]=g,t[f]=b,e[b]=d;for(let p=0,x=a;p!==x;++p){let v=r[p],_=v[b],E=v[m];v[m]=_,E===void 0&&(E=new ot(d,n[p],i[p])),v[b]=E}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[c]=u,e[u]=l;for(let f=0,m=i;f!==m;++f){let b=n[f],g=b[u],p=b[h];b[h]=g,b[u]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){let c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,f=e[d],m=--a,b=e[m];t[f.uuid]=u,e[u]=f,t[b.uuid]=d,e[d]=b,e.pop();for(let g=0,p=i;g!==p;++g){let x=n[g],v=x[d],_=x[m];x[u]=v,x[d]=_,x.pop()}}else{let d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,b=i;m!==b;++m){let g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=l.length;d!==f;++d){let m=l[d];u[d]=new ot(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},ll=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Er,endingEnd:Er};for(let c=0;c!==a;++c){let h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case dl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===xg;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===bg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Ar,i.endingEnd=Ar):(e?i.endingStart=this.zeroSlopeAtStart?Ar:Er:i.endingStart=_a,t?i.endingEnd=this.zeroSlopeAtEnd?Ar:Er:i.endingEnd=_a)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}},bS=new Float32Array(1),$u=class extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new cl(ot.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Xa(new Float32Array(2),new Float32Array(2),1,bS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Pi.findByName(i,e):e,o=a!==null?a.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=dl),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let h=new ll(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Pi.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){let c=a[o];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},Qu=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},vS=0,ed=class extends bn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.usage=Sa,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},td=class extends Hn{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},nd=class{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},mm=new De,id=class{constructor(e,t,n=0,i=1/0){this.ray=new $n(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Es,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mm),this}intersectObject(e,t=!0,n=[]){return rd(e,this,n,t),n.sort(gm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)rd(e[i],this,n,t);return n.sort(gm),n}};function gm(s,e){return s.distance-e.distance}function rd(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)rd(i[r],e,t,!0)}}var zs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},sd=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},bm=new Y,ad=class{constructor(e=new Y(1/0,1/0),t=new Y(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},vm=new T,$o=new T,od=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){vm.subVectors(e,this.start),$o.subVectors(this.end,this.start);let n=$o.dot($o),r=$o.dot(vm)/n;return t&&(r=Et(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},xm=new T,cd=class extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new Ge,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){let c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ce(i,3));let r=new Ot({fog:!1,toneMapped:!1});this.cone=new ln(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),xm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(xm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},Vi=new T,Qo=new De,Lh=new De,ld=class extends ln{constructor(e){let t=Kg(e),n=new Ge,i=[],r=[],a=new ge(0,0,1),o=new ge(0,1,0);for(let c=0;c<t.length;c++){let h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ce(i,3)),n.setAttribute("color",new Ce(r,3));let l=new Ot({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Lh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(Qo.multiplyMatrices(Lh,o.matrixWorld),Vi.setFromMatrixPosition(Qo),i.setXYZ(a,Vi.x,Vi.y,Vi.z),Qo.multiplyMatrices(Lh,o.parent.matrixWorld),Vi.setFromMatrixPosition(Qo),i.setXYZ(a+1,Vi.x,Vi.y,Vi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function Kg(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Kg(s.children[t]));return e}var hd=class extends it{constructor(e,t,n){let i=new Gr(t,4,2),r=new Pt({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},xS=new T,_m=new ge,ym=new ge,ud=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new qa(t);i.rotateY(Math.PI*.5),this.material=new Pt({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Oe(a,3)),this.add(new it(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");_m.copy(this.light.color),ym.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?_m:ym;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(xS.setFromMatrixPosition(this.light.matrixWorld).negate())}},dd=class extends ln{constructor(e=10,t=10,n=4473924,i=8947848){n=new ge(n),i=new ge(i);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){l.push(-o,0,m,o,0,m),l.push(m,0,-o,m,0,o);let b=d===r?n:i;b.toArray(c,f),f+=3,b.toArray(c,f),f+=3,b.toArray(c,f),f+=3,b.toArray(c,f),f+=3}let h=new Ge;h.setAttribute("position",new Ce(l,3)),h.setAttribute("color",new Ce(c,3));let u=new Ot({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},fd=class extends ln{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new ge(r),a=new ge(a);let o=[],l=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);let b=u&1?r:a;l.push(b.r,b.g,b.b),l.push(b.r,b.g,b.b)}for(let u=0;u<n;u++){let d=u&1?r:a,f=e-e/n*u;for(let m=0;m<i;m++){let b=m/i*(Math.PI*2),g=Math.sin(b)*f,p=Math.cos(b)*f;o.push(g,0,p),l.push(d.r,d.g,d.b),b=(m+1)/i*(Math.PI*2),g=Math.sin(b)*f,p=Math.cos(b)*f,o.push(g,0,p),l.push(d.r,d.g,d.b)}}let c=new Ge;c.setAttribute("position",new Ce(o,3)),c.setAttribute("color",new Ce(l,3));let h=new Ot({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},wm=new T,ec=new T,Mm=new T,pd=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new Ge;i.setAttribute("position",new Ce([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Ot({fog:!1,toneMapped:!1});this.lightPlane=new Tn(i,r),this.add(this.lightPlane),i=new Ge,i.setAttribute("position",new Ce([0,0,0,0,0,1],3)),this.targetLine=new Tn(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),wm.setFromMatrixPosition(this.light.matrixWorld),ec.setFromMatrixPosition(this.light.target.matrixWorld),Mm.subVectors(ec,wm),this.lightPlane.lookAt(ec),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(ec),this.targetLine.scale.z=Mm.length()}},tc=new T,St=new Ts,md=class extends ln{constructor(e){let t=new Ge,n=new Ot({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,b){l(m),l(b)}function l(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Ce(i,3)),t.setAttribute("color",new Ce(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let c=new ge(16755200),h=new ge(16711680),u=new ge(43775),d=new ge(16777215),f=new ge(3355443);this.setColors(c,h,u,d,f)}setColors(e,t,n,i,r){let o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;St.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Tt("c",t,e,St,0,0,-1),Tt("t",t,e,St,0,0,1),Tt("n1",t,e,St,-n,-i,-1),Tt("n2",t,e,St,n,-i,-1),Tt("n3",t,e,St,-n,i,-1),Tt("n4",t,e,St,n,i,-1),Tt("f1",t,e,St,-n,-i,1),Tt("f2",t,e,St,n,-i,1),Tt("f3",t,e,St,-n,i,1),Tt("f4",t,e,St,n,i,1),Tt("u1",t,e,St,n*.7,i*1.1,-1),Tt("u2",t,e,St,-n*.7,i*1.1,-1),Tt("u3",t,e,St,0,i*2,-1),Tt("cf1",t,e,St,-n,0,1),Tt("cf2",t,e,St,n,0,1),Tt("cf3",t,e,St,0,-i,1),Tt("cf4",t,e,St,0,i,1),Tt("cn1",t,e,St,-n,0,-1),Tt("cn2",t,e,St,n,0,-1),Tt("cn3",t,e,St,0,-i,-1),Tt("cn4",t,e,St,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Tt(s,e,t,n,i,r,a){tc.set(i,r,a).unproject(n);let o=e[s];if(o!==void 0){let l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],tc.x,tc.y,tc.z)}}var nc=new dt,gd=class extends ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new Ge;r.setIndex(new Oe(n,1)),r.setAttribute("position",new Oe(i,3)),super(r,new Ot({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&nc.setFromObject(this.object),nc.isEmpty())return;let t=nc.min,n=nc.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},bd=class extends ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Ge;r.setIndex(new Oe(n,1)),r.setAttribute("position",new Ce(i,3)),super(r,new Ot({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},vd=class extends Tn{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new Ge;a.setAttribute("position",new Ce(r,3)),a.computeBoundingSphere(),super(a,new Ot({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new Ge;l.setAttribute("position",new Ce(o,3)),l.computeBoundingSphere(),this.add(new it(l,new Pt({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Sm=new T,ic,Dh,xd=class extends nt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",ic===void 0&&(ic=new Ge,ic.setAttribute("position",new Ce([0,0,0,0,1,0],3)),Dh=new Ki(0,.5,1,5,1),Dh.translate(0,-.5,0)),this.position.copy(t),this.line=new Tn(ic,new Ot({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new it(Dh,new Pt({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Sm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Sm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},_d=class extends ln{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ge;i.setAttribute("position",new Ce(t,3)),i.setAttribute("color",new Ce(n,3));let r=new Ot({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new ge,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},yd=class{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new zr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let x=[];for(let v=0,_=p.length;v<_;v++){let E=p[v],S=new wi;S.curves=E.curves,x.push(S)}return x}function n(p,x){let v=x.length,_=!1;for(let E=v-1,S=0;S<v;E=S++){let R=x[E],L=x[S],w=L.x-R.x,y=L.y-R.y;if(Math.abs(y)>Number.EPSILON){if(y<0&&(R=x[S],w=-w,L=x[E],y=-y),p.y<R.y||p.y>L.y)continue;if(p.y===R.y){if(p.x===R.x)return!0}else{let F=y*(p.x-R.x)-w*(p.y-R.y);if(F===0)return!0;if(F<0)continue;_=!_}}else{if(p.y!==R.y)continue;if(L.x<=p.x&&p.x<=R.x||R.x<=p.x&&p.x<=L.x)return!0}}return _}let i=Zn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l,c=[];if(r.length===1)return o=r[0],l=new wi,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],m=0,b;d[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)o=r[p],b=o.getPoints(),a=i(b),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new wi,p:b},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:b[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,x=0;for(let v=0,_=d.length;v<_;v++)u[v]=[];for(let v=0,_=d.length;v<_;v++){let E=f[v];for(let S=0;S<E.length;S++){let R=E[S],L=!0;for(let w=0;w<d.length;w++)n(R.p,d[w].p)&&(v!==w&&x++,L?(L=!1,u[w].push(R)):p=!0);L&&u[v].push(R)}}x>0&&p===!1&&(f=u)}let g;for(let p=0,x=d.length;p<x;p++){l=d[p].s,c.push(l),g=f[p];for(let v=0,_=g.length;v<_;v++)l.holes.push(g[v].h)}return c}},wd=class extends It{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");function Gd(s,e){if(e===Id)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Vs||e===eo){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Vs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var bl=class extends Gt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yd(t)}),this.register(function(t){return new Jd(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new $d(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new ef(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new Kd(t)}),this.register(function(t){return new nf(t)}),this.register(function(t){return new Zd(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new Xd(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new hf(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=qn.extractUrlBase(e);a=qn.resolveURL(c,this.path)}else a=qn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new hn(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Qg){try{a[tt.KHR_BINARY_GLTF]=new uf(e)}catch(u){i&&i(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new vf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new jd;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new df(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new ff;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new pf;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function _S(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xd=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ge(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ut);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Zi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Bs(h),c.distance=u;break;case"spot":c=new ks(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,nr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},jd=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let i=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ut),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(i)}},Kd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Y(o,o)}return Promise.all(r)}},Jd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Zd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},$d=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ut)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Qd=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},ef=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],Ut),Promise.all(r)}},tf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],Ut),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,pt)),Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:en}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},of=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},cf=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},lf=class{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},hf=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==Rn.TRIANGLES&&c.mode!==Rn.TRIANGLE_STRIP&&c.mode!==Rn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let b=new De,g=new T,p=new ht,x=new T(1,1,1),v=new Ls(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&x.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,b.compose(g,p,x));for(let _ in l)if(_==="_COLOR_0"){let E=l[_];v.instanceColor=new Gn(E.array,E.itemSize,E.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);nt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Qg="glTF",no=12,Yg={JSON:1313821514,BIN:5130562},uf=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,no),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Qg)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-no,r=new DataView(e,no),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Yg.JSON){let c=new Uint8Array(e,no+a,o);this.content=n.decode(c)}else if(l===Yg.BIN){let c=no+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},df=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=gf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=gf[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=qs[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=l[m];g!==void 0&&(b.normalized=g)}u(f)},o,c,Ut,d)})})}},ff=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},pf=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},vl=class extends Ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,b=m-c,g=-2*f+3*d,p=f-d,x=1-g,v=p-d+u;for(let _=0;_!==o;_++){let E=a[b+_+o],S=a[b+_+l]*h,R=a[m+_+o],L=a[m+_]*h;r[_]=x*E+v*S+g*R+p*L}return r}},yS=new ht,mf=class extends vl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return yS.fromArray(r).normalize().toArray(r),r}},Rn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jg={9728:vt,9729:ct,9984:Qa,9985:Cr,9986:qi,9987:mn},Zg={33071:Dt,33648:Dr,10497:Bn},Vd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wS={CUBICSPLINE:void 0,LINEAR:ji,STEP:Ir},Wd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function MS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ji({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:kn})),s.DefaultMaterial}function qr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function nr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function SS(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function ES(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function AS(s){let e,t=s.extensions&&s.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qd(t.attributes):e=s.indices+":"+qd(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qd(s.targets[n]);return e}function qd(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function bf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function TS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var RS=new De,vf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new _S,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Wn(this.options.manager):this.textureLoader=new Ja(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return qr(r,o,i),nr(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(qn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Vd[i.type],o=qs[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Oe(c,a,l))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Vd[i.type],c=qs[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,v=t.cache.get(x);v||(b=new c(o,p*f,i.count*f/h),v=new Hn(b,f/h),t.cache.add(x,v)),g=new xn(v,l,d%f/h,m)}else o===null?b=new c(i.count*l):b=new c(o,d,i.count*l),g=new Oe(b,l,m);if(i.sparse!==void 0){let p=Vd.SCALAR,x=qs[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,E=new x(a[1],v,i.sparse.count*p),S=new c(a[2],_,i.sparse.count*l);o!==null&&(g=new Oe(g.array.slice(),g.itemSize,g.normalized));for(let R=0,L=E.length;R<L;R++){let w=E[R];if(g.setX(w,S[R*l]),l>=2&&g.setY(w,S[R*l+1]),l>=3&&g.setZ(w,S[R*l+2]),l>=4&&g.setW(w,S[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Jg[d.magFilter]||ct,h.minFilter=Jg[d.minFilter]||mn,h.wrapS=Zg[d.wrapS]||Bn,h.wrapT=Zg[d.wrapT]||Bn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Mt(b);g.needsUpdate=!0,d(g)}),t.load(qn.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||TS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Br,At.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ot,At.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ji}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){let u=i[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ut),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bt);let h=r.alphaMode||Wd.OPAQUE;if(h===Wd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Wd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Y(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Pt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pt){let u=r.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],Ut)}return r.emissiveTexture!==void 0&&a!==Pt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),nr(u,r),t.associations.set(u,{materials:e}),r.extensions&&qr(i,u,r),u})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return $g(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=AS(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$g(new Ge,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?MS(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=c[f];if(g.mode===Rn.TRIANGLES||g.mode===Rn.TRIANGLE_STRIP||g.mode===Rn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Cs(b,x):new it(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Rn.TRIANGLE_STRIP?p.geometry=Gd(p.geometry,eo):g.mode===Rn.TRIANGLE_FAN&&(p.geometry=Gd(p.geometry,Vs));else if(g.mode===Rn.LINES)p=new ln(b,x);else if(g.mode===Rn.LINE_STRIP)p=new Tn(b,x);else if(g.mode===Rn.LINE_LOOP)p=new Ds(b,x);else if(g.mode===Rn.POINTS)p=new Is(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&ES(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),nr(p,r),g.extensions&&qr(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qr(i,u[0],r),u[0];let d=new on;r.extensions&&qr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Jt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Qn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),nr(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ps(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let x=0,v=d.length;x<v;x++){let _=d[x],E=f[x],S=m[x],R=b[x],L=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let w=n._createAnimationTracks(_,E,S,R,L);if(w)for(let y=0;y<w.length;y++)p.push(w[y])}return new Pi(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,RS)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new kr:c.length>1?h=new on:c.length===1?h=c[0]:h=new nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),nr(h,r),r.extensions&&qr(n,h,r),r.matrix!==void 0){let u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new on;n.name&&(r.name=i.createUniqueName(n.name)),nr(r,n),n.extensions&&qr(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof At||d instanceof Mt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,l=[];tr[r.path]===tr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(tr[r.path]){case tr.weights:c=ti;break;case tr.rotation:c=Vn;break;case tr.position:case tr.scale:c=ni;break;default:n.itemSize===1?c=ti:c=ni;break}let h=i.interpolation!==void 0?wS[i.interpolation]:ji,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+tr[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=bf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vn?mf:vl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function CS(s,e,t){let n=e.attributes,i=new dt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){let h=bf(qs[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,l=new T;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=bf(qs[d.componentType]);l.multiplyScalar(b)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new wt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function $g(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(let a in n){let o=gf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return rt.workingColorSpace!==Ut&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${rt.workingColorSpace}" not supported.`),nr(s,e),CS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?SS(s,e.targets,t):s})}var io=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),v=0;v<p.length;++v){var _=p.charCodeAt(v);x[v]=_>96?_-97:_>64?_-39:_+4}for(var E=0,v=0;v<p.length;++v)x[E++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,E)}function l(p,x,v,_,E,S,R){var L=p.exports.sbrk,w=_+3&-4,y=L(w*E),F=L(S.length),O=new Uint8Array(p.exports.memory.buffer);O.set(S,F);var I=x(y,_,E,F,S.length);if(I==0&&R&&R(y,w,E),v.set(O.subarray(y,y+_*E)),L(y-L(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(v){var _=v.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+l.toString()+g.toString(),v=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(v),E=u.length;E<p;++E)u[E]=f(_);for(var E=p;E<u.length;++E)u[E].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function b(p,x,v,_,E){for(var S=u[0],R=1;R<u.length;++R)u[R].pending<S.pending&&(S=u[R]);return new Promise(function(L,w){var y=new Uint8Array(v),F=++d;S.pending+=p,S.requests[F]={resolve:L,reject:w},S.object.postMessage({id:F,count:p,size:x,source:y,mode:_,filter:E},[y.buffer])})}function g(p){var x=p.data;self.ready.then(function(v){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);l(v,v.exports[x.mode],_,x.count,x.size,x.source,v.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(E){self.postMessage({id:x.id,count:x.count,action:"reject",value:E})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,v,_,E){l(r,r.exports.meshopt_decodeVertexBuffer,p,x,v,_,r.exports[c[E]])},decodeIndexBuffer:function(p,x,v,_){l(r,r.exports.meshopt_decodeIndexBuffer,p,x,v,_)},decodeIndexSequence:function(p,x,v,_){l(r,r.exports.meshopt_decodeIndexSequence,p,x,v,_)},decodeGltfBuffer:function(p,x,v,_,E,S){l(r,r.exports[h[E]],p,x,v,_,r.exports[c[S]])},decodeGltfBufferAsync:function(p,x,v,_,E){return u.length>0?b(p,x,v,h[_],c[E]):a.then(function(){var S=new Uint8Array(p*x);return l(r,r.exports[h[_]],S,p,x,v,r.exports[c[E]]),S})}}})();function e0(s){let e=s?.polygon;if(!Array.isArray(e)||e.length<3||e.length>32||!e.every(t=>Array.isArray(t)&&t.length===2&&t.every(Number.isFinite))||!Array.isArray(s.center)||s.center.length!==2||!s.center.every(Number.isFinite))throw new Error("Invalid boat waterline");if(!PS(s.center,e)||e.some(t=>Math.hypot(t[0]-s.center[0],t[1]-s.center[1])>2))throw new Error("Boat waterline exceeds shader bounds or has invalid winding");return s}function PS(s,e){return e.every((t,n)=>{let i=e[(n+1)%e.length];return(i[0]-t[0])*(s[1]-t[1])-(i[1]-t[1])*(s[0]-t[0])>=-1e-7})}var t0=`
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
`;var xf=`
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
`;var n0=`
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
`;function xl(s,e){let[t,n]=e.transition,i=Math.max(0,Math.min(1,(s-t)/(n-t)));return s*(1-e.reduction*i*i*(3-2*i))}function LS(s,e,t){let n=t.originalGround,i=Math.max(0,Math.min(n.N-1,(s-n.x0)/n.cw-.5)),r=Math.max(0,Math.min(n.N-1,(e-n.z0)/n.ch-.5)),a=Math.min(n.N-2,Math.floor(i)),o=Math.min(n.N-2,Math.floor(r)),l=i-a,c=r-o,h=n.h[o*n.N+a],u=n.h[o*n.N+a+1],d=n.h[(o+1)*n.N+a],f=n.h[(o+1)*n.N+a+1];return(h+(u-h)*l)*(1-c)+(d+(f-d)*l)*c}function i0(s,e,t){if(s.userData.terrainProfile===t.version){console.info("terrain: baked profile "+t.version);return}s.updateMatrixWorld(!0);for(let[r,a]of Object.entries(t.offsets)){let o=s.getObjectByName(r);if(!o)throw Error("Missing grounded landmark: "+r);let l=new e.Vector3(0,a,0);if(o.parent){let c=o.parent.matrixWorld.clone().invert();l.applyMatrix3(new e.Matrix3().setFromMatrix4(c))}o.position.add(l),r==="WEB_HM_tree_og"&&o.traverse(c=>{if(c.isMesh)for(let h of["_broot","_sroot","_leaf_pivot"]){let u=c.geometry.attributes[h];if(u){for(let d=0;d<u.count;d++)u.setY(d,u.getY(d)+a);u.needsUpdate=!0}}})}s.updateMatrixWorld(!0);let n=s.getObjectByName("WEB_island");if(!n)throw Error("Missing island");let i=new e.Vector3;n.traverse(r=>{if(!r.isMesh)return;let a=r.material.name==="WEB_island_mat",o=r.matrixWorld.clone().invert(),l=r.geometry.attributes.position;for(let c=0;c<l.count;c++){if(i.fromBufferAttribute(l,c).applyMatrix4(r.matrixWorld),a)i.y=xl(i.y,t);else{let h=LS(i.x,i.z,t);i.y+=xl(h,t)-h}i.applyMatrix4(o),l.setXYZ(c,i.x,i.y,i.z)}l.needsUpdate=!0,a&&r.geometry.computeVertexNormals(),r.geometry.computeBoundingBox(),r.geometry.computeBoundingSphere()}),s.userData.terrainProfile=t.version}var r0=`
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
`;function s0(s,e,t,n,i){s.onBeforeCompile=r=>{Object.assign(r.uniforms,{uBenchSun:e,uBenchLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),r.vertexShader=`uniform mat4 uShMatrix; varying vec3 vBenchNormal; varying vec4 vShCoord;
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"bench-surface-depth-v199"}function a0(s,e,t,n,i,r=!1,a=null){s.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGardenSun:e,uGardenLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),a&&(o.uniforms.uSillFlowerDetail={value:a},o.vertexShader=`varying vec2 vSillUv; varying float vSillHeight;
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"garden-paint-v180-"+r+"-"+!!a}var DS=`
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
`;function _f(s,e,t,n){let i=s.onBeforeCompile,r=s.customProgramCacheKey.bind(s);s.onBeforeCompile=a=>{i(a),Object.assign(a.uniforms,{uSillField:e.uTex,uSillFieldMin:e.uMin,uSillFieldSize:e.uSize,uSillTime:t,uSillWorldToLocal:{value:n}}),a.vertexShader=DS+a.vertexShader,a.vertexShader=a.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      float sillSlope=2.*sillFlex(position)/.357;
      objectNormal.y-=dot(objectNormal,sillBreeze(position))*sillSlope;`),a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float sillWeight=sillFlex(position);
      transformed+=sillBreeze(position)*sillWeight*sillWeight;`)},s.customProgramCacheKey=()=>r()+"-sill-wind-v180"}function o0(s,e,t,n,i,r,a=!1){let o=l=>new e.Color(...l.map(c=>c/255)).convertSRGBToLinear();s.onBeforeCompile=l=>{Object.assign(l.uniforms,{uChimneySun:t,uChimneyLive:r,uChimneyLit:{value:o(a?[103,106,98]:[169,155,128])},uChimneyShade:{value:o(a?[43,47,43]:[49,54,45])},uChimneyMedian:{value:o(a?[147,151,149]:[197,177,151])},uShMatrix:n.matrix,uShMap:n.map,uShSize:n.size,uShOn:n.on}),l.vertexShader=`uniform mat4 uShMatrix; varying vec4 vShCoord; varying vec3 vChimneyNormal;
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
   #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"weathered-chimney-v174-"+a}var ri=`
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
`;function c0(s,e,t,n,{wind:i=!1,turf:r=!1,glass:a=!1,roof:o=!1,bark:l=!1,soft:c=!1,trim:h=!1,houseCentre:u=null}={}){let d=s.onBeforeCompile,f=s.customProgramCacheKey.bind(s);s.onBeforeCompile=m=>{d(m),m.vertexShader=m.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),Object.assign(m.uniforms,{uSceneSun:e,uSceneLive:n,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),h&&(m.uniforms.uHouseCentre={value:u}),m.vertexShader=`varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;
`+(i?"":`uniform mat4 uShMatrix; varying vec4 vShCoord;
`)+m.vertexShader.replace("#include <project_vertex>",`
   vSceneWorld=(modelMatrix*vec4(transformed,1.)).xyz;
   vSceneGround=vSceneWorld.xz;
   vSceneNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
   ${i?"":`vShCoord=uShMatrix*vec4((modelMatrix*vec4(transformed,1.)).xyz+vSceneNormal*${o?".012":".025"},1.);`}
   #include <project_vertex>`);let b=`
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
  `,g=a?"vec2 q = vGlassUv;":"#include <opaque_fragment>";m.fragmentShader="uniform vec3 uSceneSun; uniform float uSceneLive; varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;"+(h?" uniform vec3 uHouseCentre;":"")+`
`+ri+m.fragmentShader.replace(g,b+g)},s.customProgramCacheKey=()=>f()+"-scene-light-v223-"+[i,r,a,o,l,c,h].join("-"),s.needsUpdate=!0}function l0(s,e=""){return/home|tree|bench|clothes/.test(s)||/^WEB_HM_(home|bench|clothes|shore)_/.test(e)||/^WEB_Illustrated(Bark|Leaf)/.test(e)||/^WEB_petal_/.test(e)}function h0(s,e,t,n,i,r,a){let o=c=>new e.Color(...c.map(h=>h/255)).convertSRGBToLinear(),l={uPlasterCenter:{value:new e.Vector3(...t.center)},uPlasterLit:{value:o(t.lit_srgb)},uFrontLit:{value:o(t.front_lit_srgb||t.lit_srgb)},uPlasterShade:{value:o(t.shade_srgb)},uRearShade:{value:o(t.rear_shade_srgb)},uPlasterMedian:{value:o(t.source_median_srgb)},uWearBounds:{value:new e.Vector4(...t.weathered_corners)},uSideTextureStrength:{value:t.side_texture_strength??.22},uGablePaint:{value:s.name.startsWith("WEB_HM_home_plaster_38")?1:0},uGableMedian:{value:o([127,128,110])},uPlasterSun:n,uPlasterLive:a,uShMatrix:i.matrix,uShMap:i.map,uShSize:i.size,uShOn:i.on};s.onBeforeCompile=c=>{Object.assign(c.uniforms,l),c.vertexShader=`uniform mat4 uShMatrix; uniform vec4 uWearBounds; varying float vQuietSide; uniform vec3 uPlasterCenter; varying vec4 vShCoord;
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"reference-gable-v221"}var u0={waterLevel:.02,polygon:[[-7.987894694399442,-22.549935341269553],[-7.9771248615490435,-22.70002537855673],[-7.956132778892359,-22.841797932956577],[-7.9154523742137695,-22.997999377431473],[-7.867172068752532,-23.131831141397704],[-7.828849046631001,-23.2164294842829],[-7.75160247476648,-23.35458339250706],[-7.641948295944461,-23.51343848504676],[-7.514208167223112,-23.64982440836896],[-7.336780399498208,-23.79168626844341],[-7.107035874805265,-23.949429633356683],[-7.078409245022858,-23.94180337429376],[-6.99611732992006,-23.680307416175722],[-6.972159842021256,-23.593489317509714],[-6.940715121485183,-23.44358450252468],[-6.92589407647665,-23.26455149443727],[-6.929736836264584,-23.168526754231056],[-6.942886506066648,-23.032273676371776],[-6.973367385879903,-22.868357359752338],[-7.001719549127445,-22.77114103295838],[-7.043137963754038,-22.65590984496234],[-7.0871245666938485,-22.557976906402487],[-7.173073877334716,-22.406881644748765],[-7.240863331073182,-22.306325083134613],[-7.3325329328049635,-22.195155241179748],[-7.388805444456387,-22.138347527698798],[-7.519572131189774,-22.02806122001669],[-7.8229065805350695,-21.796120778863962],[-7.845394800355291,-21.80435338801289],[-7.94134316677993,-22.177827766216243],[-7.9742718719461765,-22.335138472207138],[-7.987497899897865,-22.462030493944205]],center:[-7.456798273348511,-22.890403912711033]};var yf={center:[-1.7501424551010132,3.8930039405822754,-4.386573791503906],lit_srgb:[231,212,193],shade_srgb:[65,69,61],source_median_srgb:[241,236,227],changed_foot_faces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,2908,2909,2910,2911,2912,2913,2914,2915,2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2931,2932,2933,2934,2935,2936,2937,2938,2939,2940,4063,4067,4068,4072,4073,4077,4223,4224,4225,4226,4227,4229,4230,4231,4234,4235,4236,4414,4415,19439,19440,19441],weathered_corners:[-4.984452296074341,-.7439188854702072,7.915547703925659,7.7821],texture_source:"reference/textures/facade/whole-house-oil-v171.png",rear_shade_srgb:[124,119,103],front_lit_srgb:[222,190,165],side_texture_strength:.22};var _l={materials:{WEB_HM_home_window_4:{reflection:.94,blur:1},WEB_HM_home_window_18:{reflection:1.02,blur:.92},WEB_HM_home_window_19:{reflection:.52,blur:1.25,interior:0},WEB_HM_home_window_20:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_21:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_22:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_23:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_24:{reflection:1.05,blur:1,frontGlazing:1,frontDaylight:0,interior:0,blindOpening:0,sideCurtains:0,roomVariation:0,lift:.6},WEB_HM_home_window_25:{reflection:.84,blur:1.45},WEB_HM_home_window_32:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_33:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_34:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_35:{reflection:1.05,blur:.8,interior:.94,roomVariation:-.025,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1},WEB_HM_home_window_36:{reflection:1.05,blur:.8,interior:.94,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1}},views:{original:{label:"Front upper left \u2014 closed curtains",eye:[1.3976149559020996,5.089506149291992,2.7602779865264893],target:[-.7384145855903625,5.089506149291992,.9640572667121887],fov:50},gathered:{label:"Front upper middle \u2014 closed curtains",eye:[4.105578891932964,5.188506126403809,-.45997825264930725],target:[1.969549410045147,5.188506126403809,-2.256199389696121],fov:50},closed:{label:"Front upper right \u2014 closed curtains",eye:[6.437035083770752,5.152506351470947,-3.2324986457824707],target:[4.3010053634643555,5.152506351470947,-5.028719902038574],fov:50},cafe:{label:"Front lower left \u2014 parted curtains",eye:[1.4343006610870361,3.1015024185180664,2.7166526317596436],target:[-.7017291188240051,3.1015024185180664,.9204317927360535],fov:50},swept:{label:"Front lower right \u2014 parted curtains",eye:[6.428346157073975,3.058502435684204,-3.2221665382385254],target:[4.292316436767578,3.058502435684204,-5.018387317657471],fov:50},roller:{label:"Rear upper left \u2014 roller",eye:[-8.710698127746582,5.148006439208984,-7.430671691894531],target:[-6.3545379638671875,5.148006439208984,-5.449339389801025],fov:50},roman:{label:"Rear upper right \u2014 roman",eye:[-5.94320011138916,5.148006439208984,-10.721724510192871],target:[-3.587040424346924,5.148006439208984,-8.740392684936523],fov:50},privacy:{label:"Small side window \u2014 privacy",eye:[-5.303554058074951,5.439507007598877,3.4764301776885986],target:[-4.0807085037231445,5.439507007598877,2.022246837615967],fov:50},attic:{label:"Attic window \u2014 centered",eye:[4.003900057220459,7.463011093139649,-11.229307524108886],target:[2.372250324630737,7.463011093139649,-9.288982740783691],fov:50}}};var ir={points:[[-5.089419841766357,-7.194624722003937],[-5.43648081715508,-7.290950428933904],[-5.748990816535627,-7.428363466648519],[-6.038466831910721,-7.593168058219567],[-6.316425855283091,-7.771668426718831],[-6.558851281868285,-8.02407998877454],[-6.7608025342595734,-8.366365001993307],[-6.978364302466784,-8.68938999367238],[-7.22227557895765,-8.97978026500778]],width:.48,door_shift_local_x:-.7634999960743412,moved_vertices:1336};var ke={about:"The Blender names the viewer depends on, by the role each plays. main.js reads them as M.* and carries no name of its own; tests/world-manifest.test.mjs checks every entry against web/island_world.glb, so a rename in Blender fails a test instead of the look.",nodes:{island:"WEB_island",meadow:"WEB_meadow",meadowTable:"WEB_meadow_table",house:"WEB_HM_home",tree:"WEB_HM_tree_og",water:"WEB_water"},materials:{housePaintRetint:"WEB_HM_home_paint_8",houseRoofEdgeTrim:"WEB_HM_home_paint_39",houseSillFlowers:"WEB_HM_home_garden_37",boat:"WEB_HM_shore_paint_0",rope:"WEB_HM_shore_paint_2",path0:"WEB_path_0",roofPaint1:"WEB_HM_home_paint_1",roofPaint2:"WEB_HM_home_paint_2"},prefixes:{housePart:"WEB_HM_home_",houseWindow:"WEB_HM_home_window_",housePlaster:"WEB_HM_home_plaster_",houseGarden:"WEB_HM_home_garden_",houseFlashing:"WEB_HM_home_flashing_",houseChimney:"WEB_HM_home_chimney_",path:"WEB_path_",treeTable:"WEB_tree_table_"},substrings:{house:"home",bench:"HM_bench",clothes:"clothes",bark:"IllustratedBark",leaf:"IllustratedLeaf",oil:"_Oil",petal:"petal"}};function yl(s){return s.updateWorldMatrix(!0,!1),s.geometry.applyMatrix4(s.matrixWorld),(s.parent?s.parent.matrixWorld.clone().invert():new De).decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),new dt().setFromObject(s)}var wl=new URLSearchParams(location.search).has("embed")&&window.parent!==window,Cn=s=>{wl&&window.parent.postMessage({isola:"v1",...s},location.origin)};function d0(s,e,t){return new Promise(n=>{let i=null,r=!1,a=()=>{clearTimeout(o),removeEventListener("message",l),n(i)},o=setTimeout(()=>{r||a()},2500);function l(c){c.origin!==location.origin||!c.data||(c.data.isola==="ack"?r=!0:c.data.isola==="go"&&(c.data.world instanceof Blob&&(i=c.data.world),a()))}addEventListener("message",l),Cn({type:"hello",glb:s,build:e,bytes:t})})}var jn={c:{value:new T(0,.02,0)},axis:{value:new Y(1,0)},heave:{value:0},roll:{value:0},pitch:{value:0},ready:!1};function f0(s){s.then(e=>{jn.c.value.set(e.center[0],.02,e.center[1]);let t=0,n=[1,0];for(let i of e.polygon)for(let r of e.polygon){let a=r[0]-i[0],o=r[1]-i[1],l=a*a+o*o;l>t&&(t=l,n=[a,o])}jn.axis.value.set(n[0],n[1]).normalize(),jn.ready=!0}).catch(()=>{})}function p0(s){jn.heave.value=.022*Math.sin(s*.85)+.01*Math.sin(s*1.9+1.3),jn.roll.value=.026*Math.sin(s*.62+.7)+.011*Math.sin(s*1.45),jn.pitch.value=.013*Math.sin(s*.5+2)}function m0(s,e,t){e.updateWorldMatrix(!0,!1);let n={value:e.matrixWorld.clone().invert()},i=s.onBeforeCompile;s.onBeforeCompile=r=>{i&&i(r),Object.assign(r.uniforms,{uBoatC:jn.c,uBoatAxis:jn.axis,uBoatHeave:jn.heave,uBoatRoll:jn.roll,uBoatPitch:jn.pitch,uBoatInv:n}),r.vertexShader=`uniform vec3 uBoatC; uniform vec2 uBoatAxis; uniform float uBoatHeave, uBoatRoll, uBoatPitch; uniform mat4 uBoatInv;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        vec3 wpB = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vec3 rB = wpB - uBoatC;
        float wB = ${t?"1.0 - smoothstep(0.9, 2.4, length(rB.xz))":"1.0"};
        vec3 ax = vec3(uBoatAxis.x, 0.0, uBoatAxis.y), ay = vec3(-uBoatAxis.y, 0.0, uBoatAxis.x);
        rB += cross(ax * (uBoatRoll * wB), rB) + cross(ay * (uBoatPitch * wB), rB);
        rB.y += uBoatHeave * wB;
        transformed = (uBoatInv * vec4(rB + uBoatC, 1.0)).xyz;
      }`)},s.customProgramCacheKey=()=>"boat-v219-"+(t?"rope":"hull")}var ro=[];function kS(s){let e=Math.min(Math.max((s-45)/65,0),1);return 1-.75*e*e*(3-2*e)}function wf(s,e,t,n){if(!ro.length)return;let i=n||!t&&e>=1,r=s.position.x,a=s.position.z;for(let{mesh:o,c:l}of ro){let c=l.lodR1,h=c.length,u=h;if(!i){let d=Math.max(l.min[0]-r,0,r-l.max[0]),f=Math.max(l.min[2]-a,0,a-l.max[2]),m=Math.min(t?kS(Math.hypot(d,f)):1,e)+3e-5;if(m<1){let b=0,g=h;for(;b<g;){let p=b+g>>1;c[p]>m?g=p:b=p+1}u=b}}o.geometry.setDrawRange(0,u?l.lodEnd[u-1]:0)}}function Xs(s){Cn({type:"error",message:s});let e=document.getElementById("loading");e||(e=document.createElement("div"),e.id="loading",document.body.appendChild(e)),e.style.opacity=1,e.textContent=s+" ";let t=document.createElement("button");t.textContent="Try again",t.style.font="inherit",t.style.marginLeft="8px",t.addEventListener("click",()=>location.reload()),e.appendChild(t)}function g0(){let s=document.getElementById("loading");return!!s&&s.isConnected&&s.style.opacity!=="0"}function b0(s){addEventListener("error",()=>{g0()&&Xs("The island could not load.")}),addEventListener("unhandledrejection",()=>{g0()&&Xs("The island could not load.")}),s.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),Xs("The graphics context was lost.")}),s.domElement.addEventListener("webglcontextrestored",()=>{location.reload()})}var v0=s=>!!s&&(typeof ImageBitmap<"u"&&s instanceof ImageBitmap||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement);function Mf(){(this.userData=this.userData||{}).bpe=this.array.BYTES_PER_ELEMENT,this.array=null}function js(s,e){let t=0,n=new Set;return s.traverse(i=>{if(!i.isMesh||!i.geometry||e.has(i.geometry))return;let r=i.geometry;r.boundingSphere||r.computeBoundingSphere();for(let a of Object.values(r.attributes)){if(a.isInterleavedBufferAttribute){let o=a.data;if(!o.array||n.has(o))continue;n.add(o),t+=o.array.byteLength,o.onUpload(Mf);continue}!a.array||n.has(a)||(n.add(a),t+=a.array.byteLength,a.onUpload(Mf))}r.index&&r.index.array&&!n.has(r.index)&&(n.add(r.index),t+=r.index.array.byteLength,r.index.onUpload(Mf))}),t}function x0(s,e,t=[]){let n=new Set,i=r=>{r&&r.isTexture&&!r.isRenderTargetTexture&&!n.has(r)&&(n.add(r),e(r))};s.traverse(r=>{let a=r.material?Array.isArray(r.material)?r.material:[r.material]:[];for(let o of a){for(let l of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])i(o[l]);if(o.uniforms)for(let l of Object.values(o.uniforms))i(l&&l.value)}});for(let r of t)i(r)}function Ml(s,e=2048){let t=s.image;if(s.isDataTexture||s.userData.halved||!v0(t)||t.width<e)return!1;let n=document.createElement("canvas");return n.width=t.width>>1,n.height=t.height>>1,n.getContext("2d").drawImage(t,0,0,n.width,n.height),t.close&&t.close(),s.dispose(),s.image=n,s.userData.halved=!0,s.needsUpdate=!0,!0}function _0(s,e=[],t=2048){let n=0;x0(s,i=>{Ml(i,t)&&n++},e),console.info("memory tier: "+n+" textures halved")}function Sf(s,e,t=[]){let n=0;return x0(s,i=>{let r=i.image;if(i.isDataTexture||i.isCanvasTexture||!v0(r))return;let a=e.properties.get(i);if(!a.__webglTexture||a.__version!==i.version)return;let o=r.width,l=r.height;r.close&&r.close(),i.image={width:o,height:l},n++},t),n&&console.info("memory: "+n+" decoded images released after upload"),n}var BS="291ea798";var zS="204c1122";var HS=["erictliu.com","r2.dev","r2.cloudflarestorage.com","objects.githubusercontent.com"];function y0(s,e){let t=s.get("world"),n=null;if(t){try{let o=new URL(t);o.protocol==="https:"&&HS.some(l=>o.hostname===l||o.hostname.endsWith("."+l))&&(n=o.href)}catch{}n||console.warn("world: ignoring "+t+" (host not allowed)")}let i=e&&s.get("cb"),r=n||"./"+(e&&s.get("glbfile")||"island_world.glb")+"?v="+BS+(i?"&cb="+encodeURIComponent(i):""),a=(n?n.replace(/island_world\.glb/,"island_meadow.glb"):"./island_meadow.glb?v="+zS)+(i?(n?"?":"&")+"cb="+encodeURIComponent(i):"");return{WORLD_URL:n,GLB_URL:r,GLB_ABS:new URL(r,location.href).href,MEADOW_URL:a,MEADOW_ABS:new URL(a,location.href).href}}async function Ef({url:s,abs:e,blob:t,cache:n},i){if(t)return console.info("island_world.glb: handed over by the door"),t.arrayBuffer();try{if(window.caches){let d=await caches.match(e);if(d)return console.info("island_world.glb: from the door's cache"),d.arrayBuffer()}}catch(d){console.warn("cache lookup failed",d)}let r=await fetch(s);if(!r.ok)throw new Error("island_world.glb "+r.status);let a=+r.headers.get("content-length")||0;if(!r.body)return r.arrayBuffer();let o=r.body.getReader(),l=[],c=0;for(;;){let{done:d,value:f}=await o.read();if(d)break;l.push(f),c+=f.length,a&&i(c,a)}let h=new Uint8Array(c),u=0;for(let d of l)h.set(d,u),u+=d.length;if(n)try{await(await caches.open("isola-world")).put(e,new Response(h.slice(),{headers:{"Content-Type":"model/gltf-binary","Content-Length":String(c)}}))}catch(d){console.warn("could not cache "+s,d)}return h.buffer}var rr=s=>+(s/1048576).toFixed(1),Sl="isola-visit";function w0(s){let e=s.isInterleavedBufferAttribute?s.data:s;return e.array?e.array.BYTES_PER_ELEMENT:e.userData&&e.userData.bpe||(s.normalized?2:4)}function GS(s){let e=new Set,t=0,n={};return s.traverse(i=>{if(!i.isMesh||!i.geometry)return;let r=i.geometry,a=0;for(let l of Object.values(r.attributes)){let c=l.isInterleavedBufferAttribute?l.data:l;e.has(c)||(e.add(c),a+=(l.isInterleavedBufferAttribute?c.stride*c.count:l.count*l.itemSize)*w0(l))}r.index&&!e.has(r.index)&&(e.add(r.index),a+=r.index.count*w0(r.index)),t+=a;let o=i.name.replace(/_c\d+(_c\d+)?$/,"")||i.material&&i.material.name||"?";n[o]=(n[o]||0)+a}),{bytes:t,by:n}}function VS(s,e=[]){let t=new Set,n=0,i=[],r=a=>{if(!a||!a.isTexture||a.isRenderTargetTexture||t.has(a)||!a.image)return;t.add(a);let o=a.image,l=o.width||0,c=o.height||0;if(!l||!c)return;let h=l*c*4*(a.generateMipmaps?4/3:1);n+=h,i.push({name:a.name||(o.src||"").split("/").pop().replace(/\?.*$/,"")||"unnamed",w:l,h:c,mb:rr(h)})};s.traverse(a=>{let o=a.material?[].concat(a.material):[];for(let l of o){for(let c of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])r(l[c]);if(l.uniforms)for(let c of Object.values(l.uniforms))r(c&&c.value)}});for(let a of e)r(a);return i.sort((a,o)=>o.mb-a.mb),{bytes:n,list:i}}function M0(s){let{renderer:e,scene:t}=s,n=[],i=!1,r=null;try{let l=localStorage.getItem(Sl);(l==="loading"||l==="ready")&&(r="died while "+l),localStorage.setItem(Sl,"loading")}catch{}addEventListener("pagehide",()=>{try{localStorage.setItem(Sl,"left")}catch{}});let a=()=>{let l=GS(t),c=VS(t,s.extraTextures||[]),h=(s.targets?s.targets():[]).map(x=>({...x,mb:rr(x.w*x.h*x.bpp)})),u=+h.reduce((x,v)=>x+v.mb,0).toFixed(1),d=n.slice().sort((x,v)=>x-v),f=d.length?{median:+d[d.length>>1].toFixed(1),p90:+d[Math.floor(d.length*.9)].toFixed(1),n:d.length}:null,m=performance.memory?rr(performance.memory.usedJSHeapSize):null,b=s.load?s.load():{},g=x=>b[x]===void 0?null:Math.round(b[x]-b.t0),p=e.domElement;return{build:s.build,ua:navigator.userAgent,tier:s.tier?s.tier():null,dpr:+e.getPixelRatio().toFixed(2),canvas:[p.width,p.height],css:[innerWidth,innerHeight],geometryMB:rr(l.bytes),geometryBy:Object.fromEntries(Object.entries(l.by).sort((x,v)=>v[1]-x[1]).slice(0,12).map(([x,v])=>[x,rr(v)])),texturesMB:rr(c.bytes),textures:c.list.slice(0,12),targetsMB:u,targets:h,totalMB:+(rr(l.bytes)+rr(c.bytes)+u+(m||0)).toFixed(0),heapMB:m,frame:f,programs:(e.info.programs||[]).length,load:{fetched:g("fetched"),parsed:g("parsed"),meadow:g("meadow"),visited:g("visited"),ready:g("ready"),meadowFetched:g("meadowFetched"),meadowReady:g("meadowReady")},ready:i,lastVisit:r}};window.STATS=a;let o=null;if(s.overlay){o=document.createElement("pre"),o.id="stats",o.style.cssText="position:fixed;left:calc(8px + env(safe-area-inset-left,0px));top:calc(8px + env(safe-area-inset-top,0px));z-index:50;margin:0;padding:6px 8px;font:11px/1.35 ui-monospace,Menlo,monospace;color:#f4efe3;background:rgba(20,22,36,.62);border-radius:6px;pointer-events:none;white-space:pre;",document.body.appendChild(o);let l=()=>{let c=a(),h=c.tier||{};o.textContent=[`${c.build}  ${h.memory?"phone tier":"desktop tier"}${h.touch?" touch":""}  dpr ${c.dpr}  ${c.canvas[0]}x${c.canvas[1]}`,`gpu  geo ${c.geometryMB} + tex ${c.texturesMB} + targets ${c.targetsMB}${c.heapMB!=null?" + heap "+c.heapMB:""} = ${c.totalMB} MB`,`frame ${c.frame?c.frame.median+" ms (p90 "+c.frame.p90+")":"-"}  programs ${c.programs}${h.applied&&h.applied.length?"  ladder "+JSON.stringify(h.applied):""}`,`load  fetch ${c.load.fetched}  parse ${c.load.parsed}  build ${c.load.visited}  ready ${c.load.ready} ms  meadow ${c.load.meadowReady} ms`,c.lastVisit?`last visit: ${c.lastVisit}`:""].filter(Boolean).join(`
`)};setInterval(l,1e3),setTimeout(l,100)}return{frame(l){l>0&&l<500&&(n.push(l),n.length>240&&n.shift())},ready(){i=!0;try{localStorage.setItem(Sl,"ready")}catch{}},snapshot:a}}function S0({camera:s,grid:e,eye:t=1.8,pad:n=1.3}){let i={grid:e,boxes:[],trunk:null,eye:t,pad:n};function r(h){let d=h.geometry.attributes.position;h.updateWorldMatrix(!0,!1);let f=new T,m=new dt().setFromObject(h),b={N:112,x0:m.min.x,z0:m.min.z,cw:(m.max.x-m.min.x)/112,ch:(m.max.z-m.min.z)/112,h:new Float32Array(12544).fill(-1e9)};for(let g=0;g<d.count;g++){f.fromBufferAttribute(d,g).applyMatrix4(h.matrixWorld);let p=Math.min(111,Math.max(0,Math.floor((f.x-b.x0)/b.cw))),v=Math.min(111,Math.max(0,Math.floor((f.z-b.z0)/b.ch)))*112+p;f.y>b.h[v]&&(b.h[v]=f.y)}for(let g=0;g<6;g++){let p=b.h.slice();for(let x=0;x<112;x++)for(let v=0;v<112;v++){let _=x*112+v;if(p[_]>-1e8)continue;let E=-1e9;for(let[S,R]of[[1,0],[-1,0],[0,1],[0,-1]]){let L=v+S,w=x+R;if(L<0||w<0||L>=112||w>=112)continue;let y=p[w*112+L];y>E&&(E=y)}E>-1e8&&(b.h[_]=E)}}for(let g=0;g<12544;g++)b.h[g]<-1e8&&(b.h[g]=0);i.grid=b}function a(h,u){let d=i.grid;if(!d)return 0;let f=(h-d.x0)/d.cw-.5,m=(u-d.z0)/d.ch-.5;if(f<-1||m<-1||f>d.N||m>d.N)return 0;let b=Math.min(d.N-2,Math.max(0,Math.floor(f))),g=Math.min(d.N-2,Math.max(0,Math.floor(m))),p=Math.min(1,Math.max(0,f-b)),x=Math.min(1,Math.max(0,m-g)),v=d.h,_=d.N,E=v[g*_+b]*(1-p)+v[g*_+b+1]*p,S=v[(g+1)*_+b]*(1-p)+v[(g+1)*_+b+1]*p;return E*(1-x)+S*x}let o=new T;function l(h,u){h.updateWorldMatrix(!0,!1),h.geometry.computeBoundingBox();let d=new T;h.matrixWorld.decompose(new T,new ht,d);let f=h.geometry.boundingBox.clone();f.min.x-=u/d.x,f.max.x+=u/d.x,f.min.y-=u/d.y,f.max.y+=u/d.y,f.min.z-=u/d.z,f.max.z+=u/d.z,i.boxes.push({mat:h.matrixWorld.clone(),inv:h.matrixWorld.clone().invert(),bb:f})}function c(h){let u=s.position,d=Math.max(1.2,a(u.x,u.z)+i.eye);u.y<d&&(u.y=d,h&&h.y<0&&(h.y=0));for(let m of i.boxes){if(o.copy(u).applyMatrix4(m.inv),!m.bb.containsPoint(o))continue;let b=[o.x-m.bb.min.x,m.bb.max.x-o.x,o.y-m.bb.min.y,m.bb.max.y-o.y,o.z-m.bb.min.z,m.bb.max.z-o.z],g=0;for(let p=1;p<6;p++)b[p]<b[g]&&(g=p);g===0?o.x=m.bb.min.x:g===1?o.x=m.bb.max.x:g===2?o.y=m.bb.min.y:g===3?o.y=m.bb.max.y:g===4?o.z=m.bb.min.z:o.z=m.bb.max.z,u.copy(o.applyMatrix4(m.mat)),h&&h.multiplyScalar(.2)}let f=i.trunk;if(f&&u.y<f.top){let m=u.x-f.x,b=u.z-f.z,g=Math.hypot(m,b);if(g<f.r){let p=f.r/Math.max(g,1e-4);u.x=f.x+m*p,u.z=f.z+b*p,h&&h.multiplyScalar(.2)}}}return{COLLIDE:i,groundY:a,registerBox:l,buildGroundGrid:r,collideCamera:c}}function E0({camera:s,controls:e,canvas:t,hud:n,stickEl:i,turnEl:r,collideCamera:a,fov0:o,touchFirst:l,onHeroKey:c}){let h=n,u=0,d={on:!0,vel:new T,yaw:0,pitch:0,roll:0,lookX:0,lookY:0,drag:!1,lastX:0,lastY:0,fov0:o};function f(){let P=new T;s.getWorldDirection(P),d.pitch=Math.asin(Jt.clamp(P.y,-1,1)),d.yaw=Math.atan2(-P.x,-P.z),d.roll=0,d.vel.set(0,0,0),d.lookX=d.lookY=0}let m={f:0,r:0},b=!1;function g(){if(!document.body.classList.contains("touch")&&(document.body.classList.add("touch"),b=!0,h.setAttribute("aria-label","Drag to look around. Use the stick to move."),r)){let P=!1;try{P=sessionStorage.getItem("isola-turn")==="1"}catch{}if(P)r.classList.add("gone");else{try{sessionStorage.setItem("isola-turn","1")}catch{}r.addEventListener("animationend",B=>{B.animationName==="tip-fade"&&r.classList.add("gone")})}}}let p=P=>{P.pointerId===d.dragId&&(d.drag=!1,document.body.classList.remove("dragging"))};t.addEventListener("pointerdown",P=>{if(!(!d.on||P.button>1)&&(P.pointerType==="touch"&&g(),!d.drag)){d.drag=!0,d.dragId=P.pointerId,d.lastX=P.clientX,d.lastY=P.clientY,document.body.classList.add("dragging");try{t.setPointerCapture(P.pointerId)}catch{}}}),addEventListener("pointermove",P=>{if(!d.on||!d.drag||P.pointerId!==d.dragId)return;let B=P.pointerType==="touch"?.003:.0016;d.lookX-=(P.clientX-d.lastX)*B,d.lookY-=(P.clientY-d.lastY)*B,d.lastX=P.clientX,d.lastY=P.clientY}),addEventListener("pointerup",p),addEventListener("pointercancel",p);let x=i.querySelector(".knob"),v={id:-1,cx:0,cy:0,R:40};function _(P){let B=P.clientX-v.cx,X=P.clientY-v.cy,U=Math.hypot(B,X),V=Math.min(U/v.R,1),j=U>0?B/U:0,ie=U>0?X/U:0,ve=V<.12?0:(V-.12)/.88;m.r=j*ve,m.f=-ie*ve,x.style.transform=`translate(${(j*V*v.R).toFixed(1)}px, ${(ie*V*v.R).toFixed(1)}px)`}function E(P){P&&P.pointerId!==v.id||(v.id=-1,m.f=m.r=0,i.classList.remove("live"),x.style.transform="")}i.addEventListener("pointerdown",P=>{if(v.id>=0)return;g();let B=i.getBoundingClientRect();v.cx=B.left+B.width/2,v.cy=B.top+B.height/2,v.id=P.pointerId,i.classList.add("live");try{i.setPointerCapture(P.pointerId)}catch{}_(P),P.preventDefault()}),i.addEventListener("pointermove",P=>{P.pointerId===v.id&&_(P)}),i.addEventListener("pointerup",E),i.addEventListener("pointercancel",E),i.addEventListener("lostpointercapture",E),l&&g();function S(P){let B=1-Math.exp(-P*14),X=d.lookX*B,U=d.lookY*B;d.lookX-=X,d.lookY-=U,d.yaw+=X,d.pitch=Jt.clamp(d.pitch+U,-1.25,1.25);let V=d.yaw,j=d.pitch,ie=Math.cos(j),ve=F.set(-Math.sin(V)*ie,Math.sin(j),-Math.cos(V)*ie),Te=O.set(Math.cos(V),0,-Math.sin(V)),q=I.set(0,0,0);w.w&&q.add(ve),w.s&&q.sub(ve),w.d&&q.add(Te),w.a&&q.sub(Te),(m.f||m.r)&&q.addScaledVector(ve,m.f).addScaledVector(Te,m.r);let te=q.lengthSq()>0,be=18;if(te){let Ee=q.length();q.multiplyScalar(be*Math.min(Ee,1)/Ee)}let ae=te?4:6;te&&(u+=P,u>=.65&&h.classList.add("used")),d.vel.lerp(q,1-Math.exp(-P*ae)),!te&&d.vel.lengthSq()<1e-4&&d.vel.set(0,0,0),s.position.addScaledVector(d.vel,P),s.position.y<1.2&&(s.position.y=1.2,d.vel.y<0&&(d.vel.y=0));let Re=s.position.x-14.5,_e=s.position.z,k=Math.hypot(Re,_e);k>300&&(s.position.x=14.5+Re*300/k,s.position.z=_e*300/k),d.roll=0,s.rotation.set(j,V,0,"YXZ"),a(d.vel),e.target.copy(s.position).addScaledVector(ve,60)}let R=new Set(["w","a","s","d"]);function L(P){return P instanceof Element&&!!P.closest('input, select, textarea, [contenteditable="true"]')}addEventListener("keydown",P=>{if(P.metaKey||P.ctrlKey||P.altKey||L(P.target))return;let B=P.key.toLowerCase();if(B==="h"){c();return}R.has(B)&&(w[B]=!0,h.querySelector(`[data-key="${B}"]`).classList.add("held"),P.preventDefault())}),addEventListener("keyup",P=>{let B=P.key.toLowerCase();R.has(B)&&(w[B]=!1,h.querySelector(`[data-key="${B}"]`).classList.remove("held"))});let w={w:!1,a:!1,s:!1,d:!1};function y(){for(let P in w)w[P]=!1;h.querySelectorAll(".held").forEach(P=>P.classList.remove("held")),d.drag=!1,document.body.classList.remove("dragging"),d.lookX=d.lookY=0,d.vel.set(0,0,0),E()}addEventListener("blur",y),addEventListener("focusin",P=>{L(P.target)&&y()}),addEventListener("visibilitychange",()=>{document.hidden&&y()});let F=new T,O=new T,I=new T;function C(P){if(!(w.w||w.a||w.s||w.d)||(s.getWorldDirection(F),F.y=0,F.lengthSq()<1e-6))return;F.normalize(),O.set(-F.z,0,F.x);let B=Math.max(e.getDistance(),8)*.2*P;I.set(0,0,0),w.w&&I.addScaledVector(F,B),w.s&&I.addScaledVector(F,-B),w.d&&I.addScaledVector(O,B),w.a&&I.addScaledVector(O,-B),s.position.add(I),e.target.add(I);let X=e.target.x-14.5,U=e.target.z,V=Math.hypot(X,U);if(V>260){let j=260/V,ie=new T(X*(j-1),0,U*(j-1));e.target.add(ie),s.position.add(ie)}}return{FLY:d,MOVE:m,KEYS:w,syncFromCamera:f,fly:S,walk:C,releaseMovement:y,enableTouch:g,get touchActive(){return b}}}function A0({renderer:s,q:e,touchFirst:t,dev:n,knobs:i,mirrorTarget:r,onDprChange:a}){let o=t||e.get("tier")==="phone";o&&(i.shadow=1024),n&&e.get("shadow")&&(i.shadow=+e.get("shadow"));let l=Math.min(devicePixelRatio,o?1.25:2),c=e.get("dpr")?Math.max(.5,Math.min(+e.get("dpr")||l,l)):l,h=o?2e6:42e5,u=p=>{let x=innerWidth*innerHeight*p*p;return x>h?p*Math.sqrt(h/x):p},d={on:!e.has("capture")&&e.get("tier")!=="full"&&!e.get("dpr"),readyAt:0,dts:[],lastStep:0,step:0,applied:[],ladder:[{dpr:1.5},{dpr:1.25},{dpr:1},{mirror:512},{shadow:2048}]};function f(p){c=p,s.setPixelRatio(u(c)),s.setSize(innerWidth,innerHeight),a()}function m(p){if(p.dpr!==void 0){if(p.dpr>=c)return!1;f(p.dpr)}if(p.mirror){let x=r();if(!x)return!1;x.setSize(p.mirror,p.mirror)}return p.shadow&&(i.shadow=Math.min(i.shadow||4096,p.shadow)),d.applied.push(p),console.info("tier: "+JSON.stringify(p)+" (frame interval median over 30 ms)"),!0}function b(p,x,v=30){if(p<200&&d.dts.push(p),d.dts.length<120)return;let _=d.dts.slice().sort((S,R)=>S-R),E=_[_.length>>1];if(d.dts.length=0,!(E<=v||x-d.lastStep<4e3)){for(;d.step<d.ladder.length;)if(m(d.ladder[d.step++])){d.lastStep=x;break}}}return{memory:o,TIER:d,get dpr(){return c},fitDpr:u,applyDpr:f,tierApply:m,tierStep:b,wholeLadder:()=>{for(let p of d.ladder)m(p)}}}function T0({renderer:s,samples:e}){let t=new It(2,2,{minFilter:ct,magFilter:ct,colorSpace:pt,samples:e});t.depthTexture=new Ur(2,2),t.depthTexture.type=Si;let n=new Ai,i=new Qn(-1,1,1,-1,0,1),r=new Ht({uniforms:{tDiffuse:{value:t.texture},tDepth:{value:t.depthTexture},tBox:{value:null},tBoxSq:{value:null},uFast:{value:0},uRes:{value:new Y(2,2)},uRadius:{value:4},uGrain:{value:.04},uMix:{value:.12},uEdge:{value:.35},uSat:{value:1.1},uCel:{value:0},uSepia:{value:.1},uTime:{value:0},uNear:{value:.5},uFar:{value:6e3}},vertexShader:`varying vec2 vUv;
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
      }`});n.add(new it(new Ei(2,2),r));let a={count:2,type:Xn,minFilter:vt,magFilter:vt,depthBuffer:!1,generateMipmaps:!1},o=new It(2,2,a),l=new It(2,2,a),c=new Ht({glslVersion:Ea,uniforms:{tA:{value:null},tB:{value:null},uStep:{value:new Y},uSquare:{value:1}},vertexShader:`varying vec2 vUv;
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
      }`}),h=new Ai;h.add(new it(new Ei(2,2),c));let u=(()=>{let b=s.getContext();return!!(b.getExtension("EXT_color_buffer_float")||b.getExtension("EXT_color_buffer_half_float"))})();u||console.warn("post: no float colour buffers - Kuwahara keeps the 100-tap loop");function d(){let b=s.getPixelRatio();t.setSize(innerWidth*b,innerHeight*b),o.setSize(innerWidth*b,innerHeight*b),l.setSize(innerWidth*b,innerHeight*b),r.uniforms.tDepth.value=t.depthTexture,r.uniforms.uRes.value.set(innerWidth*b,innerHeight*b)}d(),addEventListener("resize",d);function f(b,g,p){s.setRenderTarget(t),s.render(b,g);let x=u&&!p.kuwLoop&&r.uniforms.uRadius.value===4&&r.uniforms.uMix.value>.001;if(x){let v=c.uniforms;v.tA.value=t.texture,v.tB.value=null,v.uSquare.value=1,v.uStep.value.set(1/t.width,0),s.setRenderTarget(o),s.render(h,i),v.tA.value=o.textures[0],v.tB.value=o.textures[1],v.uSquare.value=0,v.uStep.value.set(0,1/t.height),s.setRenderTarget(l),s.render(h,i),r.uniforms.tBox.value=l.textures[0],r.uniforms.tBoxSq.value=l.textures[1]}r.uniforms.uFast.value=x?1:0,s.setRenderTarget(null),s.render(n,i)}return{material:r,resize:d,render:f,targets:()=>[{name:"painterly "+t.samples+"x",w:t.width,h:t.height,bpp:8*(t.samples+1)},{name:"kuwahara x2",w:o.width,h:o.height,bpp:32}]}}var so=class s extends it{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new bt;let n=this,i=t.color!==void 0?new ge(t.color):new ge(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||s.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new sn,u=new T,d=new T,f=new T,m=new De,b=new T(0,0,-1),g=new et,p=new T,x=new T,v=new et,_=new De,E=this.camera,S=new It(r,a,{samples:c,type:Xn}),R=new Ht({name:l.name!==void 0?l.name:"unspecified",uniforms:pl.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});R.uniforms.tDiffuse.value=S.texture,R.uniforms.color.value=i,R.uniforms.textureMatrix.value=_,this.material=R,this.onBeforeRender=function(L,w,y){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(y.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(d,f),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),m.extractRotation(y.matrixWorld),b.set(0,0,-1),b.applyMatrix4(m),b.add(f),x.subVectors(d,b),x.reflect(u).negate(),x.add(d),E.position.copy(p),E.up.set(0,1,0),E.up.applyMatrix4(m),E.up.reflect(u),E.lookAt(x),E.far=y.far,E.updateMatrixWorld(),E.projectionMatrix.copy(y.projectionMatrix),E.projectionMatrix.elements[8]*=-1;{let B=E.projectionMatrix.elements,X=B[14]/(B[10]-1),U=6e4;B[10]=-(U+X)/(U-X),B[14]=-2*U*X/(U-X)}_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(E.projectionMatrix),_.multiply(E.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(E.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let F=E.projectionMatrix;v.x=(Math.sign(g.x)+F.elements[8])/F.elements[0],v.y=(Math.sign(g.y)+F.elements[9])/F.elements[5],v.z=-1,v.w=(1+F.elements[10])/F.elements[14],g.multiplyScalar(2/g.dot(v)),F.elements[2]=g.x,F.elements[6]=g.y,F.elements[10]=g.z+1-o,F.elements[14]=g.w,n.visible=!1;let O=L.getRenderTarget(),I=L.xr.enabled,C=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(S),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(w,E),L.xr.enabled=I,L.shadowMap.autoUpdate=C,L.setRenderTarget(O);let P=y.viewport;P!==void 0&&L.state.viewport(P),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};so.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function R0({renderer:s,camera:e,scene:t,memoryTier:n,time:i,shadow:r,boatWaterline:a,mirror:{MIRROR:o,MIRROR_KEEP:l,LOD:c,knobs:h,applyBladeLod:u,skip:d=[]}}){let f=new so(new Os(2620,72),{clipBias:0,textureWidth:n?512:1024,textureHeight:n?512:1024,color:16777215});{let p=s.getContext();!p.getExtension("EXT_color_buffer_float")&&!p.getExtension("EXT_color_buffer_half_float")&&(f.getRenderTarget().texture.type=zn)}f.rotation.x=-Math.PI/2,f.position.set(14.5,.02,0);let m=f.material;m.uniforms.uTime=i,Object.assign(m.uniforms,{uShMatrix:r.matrix,uShMap:r.map,uShSize:r.size,uShOn:r.on}),m.uniforms.uBoatPointCount={value:0},m.uniforms.uBoatPoints={value:Array.from({length:32},()=>new Y)},m.uniforms.uBoatCenter={value:new Y},a.then(p=>{p.polygon.forEach((x,v)=>m.uniforms.uBoatPoints.value[v].set(...x)),m.uniforms.uBoatCenter.value.set(...p.center),m.uniforms.uBoatPointCount.value=p.polygon.length}).catch(p=>console.error(p)),m.uniforms.uCamF={value:new Y(0,-1)},m.uniforms.uVfov={value:Jt.degToRad(e.fov)},m.uniforms.uCamPitch={value:0},n&&(m.defines=Object.assign(m.defines||{},{CHEAP_WATER:""})),f.updateMatrixWorld(!0),m.uniforms.uSeaWorldInverse={value:f.matrixWorld.clone().invert()},m.polygonOffset=!0,m.polygonOffsetFactor=1,m.polygonOffsetUnits=4,m.vertexShader=`
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
    ${ri}
    ${t0}
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
      float n2 = vnoise(vec2(across*0.120, depth*0.90) - uTime*0.14);
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
      float r1 = vnoise(vec2(across * 0.12, depth * 0.40) + vec2(uTime * 0.30, 0.0));
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
      float gate = (1.0 - smoothstep(14.0, 40.0, hEye)) * (1.0 - smoothstep(0.14, 0.30, eRad));
      float expand = 6.0 * min(eRad, 0.12) * gate;
      float D2 = hEye / tan(min(eRad * (1.0 + expand), 1.5));
      vec3 P2 = vec3(cameraPosition.x + toP.x * (D2 / D), vWorld.y, cameraPosition.z + toP.z * (D2 / D));
      vec2 islq = (P2.xz - vec2(14.5, 0.0)) / vec2(36.0, 26.0);       // the island's footprint, as an ellipse
      P2 = mix(vWorld, P2, smoothstep(1.0, 1.15, length(islq)));
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
    }`;{let p=f.onBeforeRender,x=0;f.onBeforeRender=function(...v){if(!(h.noMirror||n&&x++&1)){o.value=1,u(e,l.value,c.value>=.5,h.lodRangeOff);for(let _ of d)_.visible=!1;try{p.apply(this,v)}finally{o.value=0;for(let _ of d)_.visible=!0;u(e,1,c.value>=.5,h.lodRangeOff)}}}}t.add(f);let b=new T;function g(p){p.getWorldDirection(b),f.material.uniforms.uCamPitch.value=Math.min(Math.max(-b.y,0),1),f.material.uniforms.uVfov.value=Jt.degToRad(p.fov),b.y=0,b.lengthSq()>1e-6&&(b.normalize(),f.material.uniforms.uCamF.value.set(b.x,b.z))}return{mesh:f,updateCamera:g}}var C0=new Set(["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"]),Af={_broot:0,_bmeta:3,_sroot:6,_smeta:9,_leaf_pivot:12,_leaf_axis:15,_leaf_seed:18},Pn=(s,e)=>!!(s.attributes[e]||s.attributes[e+"q"]||s.userData.treeRows&&e in Af);function El(s,e){let t=s.attributes[e];if(t)return t;let n=s.userData.treeRows;if(n&&e in Af){let o=Af[e],l=n.rows,c=n.ids,h=(u,d)=>l[c.getX(u)*20+o+d];return{count:c.count,getX:u=>h(u,0),getY:u=>h(u,1),getZ:u=>h(u,2)}}let i=s.attributes[e+"q"],r=s.userData.quantGpu&&s.userData.quantGpu[e];if(!i||!r)return null;let a=(o,l)=>r.c[l]+r.h[l]*i.getComponent(o,l);return{count:i.count,getX:o=>a(o,0),getY:o=>a(o,1),getZ:o=>a(o,2)}}var Tf=new Map;function P0(s,e){let t=s.userData.treeTable,n=s.attributes._tree_id;if(!t||!n)return;let i=Tf.get(t);if(!i){let r=e.getObjectByName(t),a=r&&(r.geometry||r.children[0]?.geometry);if(!a){console.warn("tree table missing: "+t);return}let o=b=>{let g=b==="_BROOT"?"position":b.toLowerCase(),p=a.attributes[g]||a.attributes[g+"q"],x=a.userData.quant&&a.userData.quant[b==="_BROOT"?"POSITION":b]||a.userData.quantGpu&&a.userData.quantGpu[g],v=p.isInterleavedBufferAttribute?p.data.array:p.array,_=v instanceof Int16Array;return{count:p.count,n:p.itemSize,get:(E,S)=>_?x.c[S]+x.h[S]*p.getComponent(E,S):p.getComponent(E,S)}},l=["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"].map(o),c=l[0].count,h=new Float32Array(c*20);for(let b=0;b<c;b++){let g=b*20;for(let p of l)for(let x=0;x<p.n;x++)h[g++]=p.get(b,x)}let u=1024,d=Math.ceil(c*5/u),f=new Float32Array(u*d*4);f.set(h.subarray(0,Math.min(h.length,u*d*4)));let m=new cn(f,u,d,Vt,an);m.magFilter=m.minFilter=vt,m.needsUpdate=!0,i={rows:h,tex:m,n:c,uniforms:{uTreeTab:{value:m},uTreeTabW:{value:u}}},Tf.set(t,i),r.visible=!1,r.removeFromParent(),console.info(`tree table ${t}: ${c} records, ${u}x${d} float texels`)}s.userData.treeRows={rows:i.rows,ids:n}}function Rf(s){if(s.userData.treeRows)return{__define:"TREE_TAB",...Tf.get(s.userData.treeTable).uniforms};let e=s.userData.quantGpu;if(!e)return null;let t={},n={_broot:"Broot",_bmeta:"Bmeta",_sroot:"Sroot",_smeta:"Smeta",_leaf_pivot:"LeafPivot",_leaf_axis:"LeafAxis",_leaf_seed:"LeafSeed"};for(let[i,r]of Object.entries(n)){let a=e[i];a&&(t["u"+r+"C"]={value:a.c.length===1?a.c[0]:new T(...a.c)},t["u"+r+"H"]={value:a.h.length===1?a.h[0]:new T(...a.h)})}return{__define:"TREE_Q",...t}}var Al=.008333333333333333,Cf=s=>{let e=Math.sin(s*127.1+37.7)*43758.5453;return e-Math.floor(e)};function L0(s,e,t,n){return{d:[0,0],v:[0,0],a:[0,0],w:2*Math.PI*s,damping:e,drag:t,stiffening:n}}function I0(){return{remainder:0,trunk:L0(.29,.38,.45,1.8),branches:Array.from({length:6},(s,e)=>L0(.53+.3*Cf(e),.3+.12*Cf(e+9),.95+.35*Cf(e+3),2.2))}}function D0(s,e,t,n){let i=Math.hypot(...e),r=s.drag*i/(1+i*i/36),a=s.w*s.w*(1+s.stiffening*(s.d[0]**2+s.d[1]**2));for(let o=0;o<2;o++)s.a[o]=r*e[o]-a*s.d[o]-2*s.damping*s.w*s.v[o]-.24*(t?.[o]||0),s.v[o]+=s.a[o]*n,s.d[o]+=s.v[o]*n}function N0(s,e,t,n){if(!(!Number.isFinite(e)||e<=0))for(s.remainder+=Math.min(e,.1);s.remainder+1e-10>=Al;)D0(s.trunk,t,null,Al),s.branches.forEach((i,r)=>D0(i,n[r],s.trunk.a,Al)),s.remainder-=Al}var ao={centers:[[32.04795687668068,15.272394050647152,-2.9930031889886366],[34.04525666965455,13.5469589159488,-2.909783447090909],[30.50718275067227,12.511697835129787,-3.0572012755954545],[28.50988295769841,10.096088646552094,-3.140421017493182],[32.33328541853409,9.751001619612424,-2.9811146544318183],[31.534365501344546,7.737993962464345,-3.0144025511909094]],radii:[[1.4495844681818182,1.8945277778987915,2.2],[1.5729533590909088,1.3044289618319547,2.2],[3.1150644954545457,1.5218337888039473,2.9000000000000004],[2.251482259090909,1.925585610323362,2.9000000000000004],[2.8066422681818177,2.1740482697199246,2.9000000000000004],[.801897790909091,1.0870241348599623,1.2000000000000002]],right:[.999133,0,.04163],depth:[.04163,0,-.999133]};var F0={x0:21.507,x1:37.507000000000005,y0:3.114,y1:21.114,trunk_base_world:[29.507,1.114,-3.097],painted_crown_extent_m:{dx:[-3.4000000000000004,6.9],dy:[4.3,15.2]},reference_trunk_base_px:[3013,1060],px_per_m:30.624,note:"V223: keep-probability of a leaf by its drawn (x, y) in the world; the painting crown relative to its own trunk base, placed on ours (scripts/crown_mask.py)"};function O0({wind:s,collide:e,treeDrop:t,names:n,build:i}){let r=null,a={base:3,height:17,cx:24,cz:3,tmp:new Y,bbox:null,dynamics:I0(),uTrunk:{value:new Y},uBranch:{value:Array.from({length:6},()=>new Y)},uBase:{value:3},uHeight:{value:17},uFlutter:{value:0},uCentre:{value:new Y},uWidth:{value:12},init(g){this.bbox?this.bbox.union(g):this.bbox=g.clone(),g=this.bbox,this.base=g.min.y,this.height=g.max.y-g.min.y,this.cx=(g.min.x+g.max.x)/2,this.cz=(g.min.z+g.max.z)/2,this.uBase.value=this.base,this.uHeight.value=this.height,this.uCentre.value.set(this.cx,this.cz),this.uWidth.value=Math.max(g.max.x-g.min.x,g.max.z-g.min.z),e.trunk&&(e.trunk.top=this.base+.55*this.height)},step(g){let p=s();p.at(this.cx,this.base+this.height*.78,this.cz,this.tmp);let x=this.tmp.toArray();this.uFlutter.value=this.tmp.length();let v=Array.from({length:6},(_,E)=>{let S=E*2.39996323;return p.at(this.cx+Math.cos(S)*this.uWidth.value*.3,this.base+this.height*(.42+E*.095),this.cz+Math.sin(S)*this.uWidth.value*.3,this.tmp),this.tmp.toArray()});N0(this.dynamics,g,x,v),this.uTrunk.value.fromArray(this.dynamics.trunk.d),this.uBranch.value.forEach((_,E)=>_.fromArray(this.dynamics.branches[E].d))}},o={centers:{value:ao.centers.map(g=>new T(g[0],g[1]+t,g[2]))},radii:{value:ao.radii.map(g=>new T(...g))},right:{value:new T(...ao.right)},depth:{value:new T(...ao.depth)}},l=`#include <map_fragment>
    float leafChroma = max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))
                     - min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
    diffuseColor.a *= smoothstep(.026,.050,leafChroma);
    // the atlas alpha is coverage (bleedLeafAtlas); mip levels average
    // it down, so far leaves would fall under the .5 test - scale it by the
    // texel footprint of this pixel (1 at the leaf's own scale, x3 by 32 texels)
    float leafFoot = fwidth(vMapUv.x) * 1254.0;
    diffuseColor.a *= clamp(1.0 + 0.6 * log2(max(leafFoot, 1.0)), 1.0, 3.0);`;function c(g){if(!g||!g.image||g.userData.bled)return;let p=performance.now(),x=g.image.width,v=g.image.height,_=document.createElement("canvas");_.width=x,_.height=v;let E=_.getContext("2d",{willReadFrequently:!0});E.drawImage(g.image,0,0);let S=E.getImageData(0,0,x,v),R=S.data,L=x*v,w=new Float32Array(L),y=0,F=0,O=0,I=0;for(let U=0;U<L;U++){let V=R[U*4],j=R[U*4+1],ie=R[U*4+2],ve=(Math.max(V,j,ie)-Math.min(V,j,ie))/255,Te=Math.min(Math.max((ve-.05)/.07,0),1),q=Te*Te*(3-2*Te);w[U]=q,q>.95&&(y+=V,F+=j,O+=ie,I++)}let C=y/Math.max(I,1),P=F/Math.max(I,1),B=O/Math.max(I,1),X=228;for(let U=0;U<L;U++){let V=w[U],j=U*4;if(V<.5)R[j]=C,R[j+1]=P,R[j+2]=B;else if(V<1)for(let ie=0;ie<3;ie++)R[j+ie]=Math.min(255,Math.max(0,(R[j+ie]-(1-V)*X)/V));R[j+3]=Math.round(V*255)}E.putImageData(S,0,0),g.image=_,g.needsUpdate=!0,g.userData.bled=!0,console.info(`leaf atlas: ${I} leaf texels of ${L}, backdrop -> (${C|0},${P|0},${B|0}), ${(performance.now()-p).toFixed(0)} ms`)}let h={mask:{value:null},box:{value:new et(0,0,1,1)}};{let g=F0;h.box.value.set(g.x0,g.y0,1/(g.x1-g.x0),1/(g.y1-g.y0)),r=new Promise((p,x)=>new Wn().load("./tree-crown-mask.png?v="+i,v=>{v.minFilter=ct,v.magFilter=ct,v.generateMipmaps=!1,v.wrapS=Dt,v.wrapT=Dt,v.colorSpace=On,p(v)},void 0,x))}let u=`uniform sampler2D uCrownMask; uniform vec4 uCrownBox; varying float vLightBias;
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
    transformed.xz += crownSpread(position.xz, uTreeC) * smoothstep(uCrownBox.y + 1.0, uCrownBox.y + 4.5, position.y);   // the leaves' spread, ramped in above the trunk`,m=`
    {
      vec3 drawn = _leaf_pivot; drawn.xz += crownSpread(drawn.xz, uTreeC);
      vec2 cm = clamp((drawn.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
      // full rate from mask .35 up; the bark is cut below .45, inside
      // that, so the twig brooms at the fringe never show bare; 18 % spread (was 12) reaches
      // the plate's right lobe, 6.8 m from the trunk
      vec4 cmask = texture2D(uCrownMask, cm);
      float crown = smoothstep(0.10, 0.35, cmask.r);
      vLightBias = cmask.g - 0.5;                   // the painted light bias (-.5 .. +.5)
      if (_leaf_seed > 0.76 * crown) transformed = vec3(0.0, -1.0e4, 0.0);
    }
    transformed.xz += crownSpread(_leaf_pivot.xz, uTreeC);`;function b(g){let p=null,x=null;if(g.traverse(k=>{if(!k.isMesh)return;let Ee=k.material?.name||"";Ee.includes(n.bark)&&Pn(k.geometry,"_sroot")?p=k:Ee.includes(n.leaf)&&Pn(k.geometry,"_leaf_pivot")&&(x=k)}),!p||!x||!h.mask.value)return;let v=performance.now(),_=h.mask.value.image,E=document.createElement("canvas");E.width=_.width,E.height=_.height;let S=E.getContext("2d");S.drawImage(_,0,0);let R=S.getImageData(0,0,_.width,_.height).data,L=h.box.value,w=a.uCentre.value,y=k=>Math.min(Math.max(k,0),1),F=(k,Ee)=>{let $=y((k-L.x)*L.z),re=y((Ee-L.y)*L.w),ee=Math.min(_.width-1,Math.floor($*_.width)),ue=Math.min(_.height-1,Math.floor((1-re)*_.height));return R[(ue*_.width+ee)*4]/255},O=(k,Ee,$)=>{let re=y(($-k)/(Ee-k));return re*re*(3-2*re)},I=(k,Ee)=>{let $=k-w.x,re=Ee-w.y,ee=1-O(-2,.5,k-w.x);return[$*.18,re*.18+re*.35*ee]},C=.25,P=2,B=L.x-1,X=L.y-1,U=w.y-8,V=Math.ceil(18/C),j=Math.ceil(20/C),ie=Math.ceil(16/C),ve=new Uint8Array(V*j*ie),Te=El(x.geometry,"_leaf_pivot"),q=El(x.geometry,"_leaf_seed");for(let k=0;k<Te.count;k+=3){let Ee=Te.getX(k),$=Te.getY(k),re=Te.getZ(k),ee=I(Ee,re),ue=Ee+ee[0],se=re+ee[1];if(q.getX(k)>.76*O(.1,.35,F(ue,$)))continue;let we=Math.floor((ue-B)/C),Pe=Math.floor(($-X)/C),N=Math.floor((se-U)/C);for(let A=-P;A<=P;A++)for(let W=-P;W<=P;W++)for(let ne=-P;ne<=P;ne++){if(A*A+W*W+ne*ne>P*P+1)continue;let oe=we+A,z=Pe+W,fe=N+ne;oe<0||z<0||fe<0||oe>=V||z>=j||fe>=ie||(ve[(fe*j+z)*V+oe]=1)}}let te=p.geometry.attributes.position,be=El(p.geometry,"_smeta"),ae=te.count,Re=new Float32Array(ae),_e=0;for(let k=0;k<ae;k++){if(be.getZ(k)<.5)continue;let Ee=te.getX(k),$=te.getY(k),re=te.getZ(k);if($<L.y+4.5)continue;let ee=I(Ee,re),ue=Ee+ee[0],se=re+ee[1],we=Math.floor((ue-B)/C),Pe=Math.floor(($-X)/C),N=Math.floor((se-U)/C);(!(we>=0&&Pe>=0&&N>=0&&we<V&&Pe<j&&N<ie)||!ve[(N*j+Pe)*V+we])&&(Re[k]=1,_e++)}return p.geometry.setAttribute("_bare",new Oe(Re,1)),console.info(`bare twigs: ${_e} of ${ae} bark vertices marked in ${(performance.now()-v).toFixed(0)} ms`),_e}return{Tree:a,TREE_VOLUME:o,CROWN:h,LEAF_CUTOUT:l,LEAF_SHAPE_DECL:u,BARK_DECL:d,BARK_SHAPE:f,LEAF_SHAPE:m,bleedLeafAtlas:c,markBareTwigs:b,ready:()=>r.then(g=>{h.mask.value=g})}}function U0({scene:s,oilSun:e,plasterLive:t,visibleSunOn:n,shadow:i,knobs:r}){let a=new on,o={base:new T(-.84,-.242,-.485).normalize(),light:null,t:.5};{let d=new Zi("#ffedd2",.55);d.castShadow=!0,d.shadow.mapSize.set(4096,4096);let f=d.shadow.camera;f.left=-55,f.right=55,f.top=55,f.bottom=-55,f.near=200,f.far=700,d.shadow.bias=-8e-5,d.shadow.normalBias=.055;let m=new nt;m.position.set(8,2,0),a.add(m),d.target=m,a.add(d),a.add(new Us("#f4f2e8","#aeb492",.45)),o.light=d,l(.5)}function l(d){o.t=d;let f=(d-.5)*Math.PI*.85,m=o.base.clone().applyAxisAngle(new T(0,1,0),f);e.value.copy(m).negate(),o.light.position.copy(m.multiplyScalar(-420)).add(o.light.target.position)}function c(d){t.value=d?1:0,n.value=d?1:0,d?s.add(a):s.remove(a)}function h(){if(!o.light)return;let d=r.shadow||4096;if(d!==o.light.shadow.mapSize.x){o.light.shadow.mapSize.set(d,d),o.light.shadow.map&&(o.light.shadow.map.dispose(),o.light.shadow.map=null);let f=4096/d;o.light.shadow.bias=-8e-5*f,o.light.shadow.normalBias=.055*f}}function u(){o.light&&(o.light.shadow.map&&(i.map.value=o.light.shadow.map.texture,i.matrix.value.copy(o.light.shadow.matrix),i.size.value.copy(o.light.shadow.mapSize)),i.on.value=a.parent===s&&o.light.shadow.map?1:0)}return{SUN:o,sunRig:a,placeSun:l,setLiveLight:c,updateShadowMapSize:h,updateShadowUniforms:u}}var k0={type:"change"},Pf={type:"start"},B0={type:"end"},Tl=new $n,z0=new sn,XS=Math.cos(70*Jt.DEG2RAD),Rl=class extends bn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Ae),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ae),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(k0),n.update(),r=i.NONE},this.update=(function(){let M=new T,H=new ht().setFromUnitVectors(e.up,new T(0,1,0)),K=H.clone().invert(),le=new T,me=new ht,qe=new T,Je=2*Math.PI;return function(at=null){let Xe=n.object.position;M.copy(Xe).sub(n.target),M.applyQuaternion(H),o.setFromVector3(M),n.autoRotate&&r===i.NONE&&O(y(at)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let _t=n.minAzimuthAngle,ft=n.maxAzimuthAngle;isFinite(_t)&&isFinite(ft)&&(_t<-Math.PI?_t+=Je:_t>Math.PI&&(_t-=Je),ft<-Math.PI?ft+=Je:ft>Math.PI&&(ft-=Je),_t<=ft?o.theta=Math.max(_t,Math.min(ft,o.theta)):o.theta=o.theta>(_t+ft)/2?Math.max(_t,o.theta):Math.min(ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Mn=!1;if(n.zoomToCursor&&S||n.object.isOrthographicCamera)o.radius=j(o.radius);else{let Sn=o.radius;o.radius=j(o.radius*c),Mn=Sn!=o.radius}if(M.setFromSpherical(o),M.applyQuaternion(K),Xe.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&S){let Sn=null;if(n.object.isPerspectiveCamera){let Ni=M.length();Sn=j(Ni*c);let li=Ni-Sn;n.object.position.addScaledVector(_,li),n.object.updateMatrixWorld(),Mn=!!li}else if(n.object.isOrthographicCamera){let Ni=new T(E.x,E.y,0);Ni.unproject(n.object);let li=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Mn=li!==n.object.zoom;let Js=new T(E.x,E.y,0);Js.unproject(n.object),n.object.position.sub(Js).add(Ni),n.object.updateMatrixWorld(),Sn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Sn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Sn).add(n.object.position):(Tl.origin.copy(n.object.position),Tl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Tl.direction))<XS?e.lookAt(n.target):(z0.setFromNormalAndCoplanarPoint(n.object.up,n.target),Tl.intersectPlane(z0,n.target))))}else if(n.object.isOrthographicCamera){let Sn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Sn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Mn=!0)}return c=1,S=!1,Mn||le.distanceToSquared(n.object.position)>a||8*(1-me.dot(n.object.quaternion))>a||qe.distanceToSquared(n.target)>a?(n.dispatchEvent(k0),le.copy(n.object.position),me.copy(n.object.quaternion),qe.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Le),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",z),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",W),n.domElement.getRootNode().removeEventListener("keydown",ce,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ae),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new zs,l=new zs,c=1,h=new T,u=new Y,d=new Y,f=new Y,m=new Y,b=new Y,g=new Y,p=new Y,x=new Y,v=new Y,_=new T,E=new Y,S=!1,R=[],L={},w=!1;function y(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function F(M){let H=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*H)}function O(M){l.theta-=M}function I(M){l.phi-=M}let C=(function(){let M=new T;return function(K,le){M.setFromMatrixColumn(le,0),M.multiplyScalar(-K),h.add(M)}})(),P=(function(){let M=new T;return function(K,le){n.screenSpacePanning===!0?M.setFromMatrixColumn(le,1):(M.setFromMatrixColumn(le,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(K),h.add(M)}})(),B=(function(){let M=new T;return function(K,le){let me=n.domElement;if(n.object.isPerspectiveCamera){let qe=n.object.position;M.copy(qe).sub(n.target);let Je=M.length();Je*=Math.tan(n.object.fov/2*Math.PI/180),C(2*K*Je/me.clientHeight,n.object.matrix),P(2*le*Je/me.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(C(K*(n.object.right-n.object.left)/n.object.zoom/me.clientWidth,n.object.matrix),P(le*(n.object.top-n.object.bottom)/n.object.zoom/me.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function X(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(M,H){if(!n.zoomToCursor)return;S=!0;let K=n.domElement.getBoundingClientRect(),le=M-K.left,me=H-K.top,qe=K.width,Je=K.height;E.x=le/qe*2-1,E.y=-(me/Je)*2+1,_.set(E.x,E.y,1).unproject(n.object).sub(n.object.position).normalize()}function j(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function ie(M){u.set(M.clientX,M.clientY)}function ve(M){V(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function Te(M){m.set(M.clientX,M.clientY)}function q(M){d.set(M.clientX,M.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let H=n.domElement;O(2*Math.PI*f.x/H.clientHeight),I(2*Math.PI*f.y/H.clientHeight),u.copy(d),n.update()}function te(M){x.set(M.clientX,M.clientY),v.subVectors(x,p),v.y>0?X(F(v.y)):v.y<0&&U(F(v.y)),p.copy(x),n.update()}function be(M){b.set(M.clientX,M.clientY),g.subVectors(b,m).multiplyScalar(n.panSpeed),B(g.x,g.y),m.copy(b),n.update()}function ae(M){V(M.clientX,M.clientY),M.deltaY<0?U(F(M.deltaY)):M.deltaY>0&&X(F(M.deltaY)),n.update()}function Re(M){let H=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),H=!0;break}H&&(M.preventDefault(),n.update())}function _e(M){if(R.length===1)u.set(M.pageX,M.pageY);else{let H=st(M),K=.5*(M.pageX+H.x),le=.5*(M.pageY+H.y);u.set(K,le)}}function k(M){if(R.length===1)m.set(M.pageX,M.pageY);else{let H=st(M),K=.5*(M.pageX+H.x),le=.5*(M.pageY+H.y);m.set(K,le)}}function Ee(M){let H=st(M),K=M.pageX-H.x,le=M.pageY-H.y,me=Math.sqrt(K*K+le*le);p.set(0,me)}function $(M){n.enableZoom&&Ee(M),n.enablePan&&k(M)}function re(M){n.enableZoom&&Ee(M),n.enableRotate&&_e(M)}function ee(M){if(R.length==1)d.set(M.pageX,M.pageY);else{let K=st(M),le=.5*(M.pageX+K.x),me=.5*(M.pageY+K.y);d.set(le,me)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let H=n.domElement;O(2*Math.PI*f.x/H.clientHeight),I(2*Math.PI*f.y/H.clientHeight),u.copy(d)}function ue(M){if(R.length===1)b.set(M.pageX,M.pageY);else{let H=st(M),K=.5*(M.pageX+H.x),le=.5*(M.pageY+H.y);b.set(K,le)}g.subVectors(b,m).multiplyScalar(n.panSpeed),B(g.x,g.y),m.copy(b)}function se(M){let H=st(M),K=M.pageX-H.x,le=M.pageY-H.y,me=Math.sqrt(K*K+le*le);x.set(0,me),v.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),X(v.y),p.copy(x);let qe=(M.pageX+H.x)*.5,Je=(M.pageY+H.y)*.5;V(qe,Je)}function we(M){n.enableZoom&&se(M),n.enablePan&&ue(M)}function Pe(M){n.enableZoom&&se(M),n.enableRotate&&ee(M)}function N(M){n.enabled!==!1&&(R.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",W)),!Fe(M)&&(xe(M),M.pointerType==="touch"?he(M):ne(M)))}function A(M){n.enabled!==!1&&(M.pointerType==="touch"?Me(M):oe(M))}function W(M){switch(pe(M),R.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",W),n.dispatchEvent(B0),r=i.NONE;break;case 1:let H=R[0],K=L[H];he({pointerId:H,pageX:K.x,pageY:K.y});break}}function ne(M){let H;switch(M.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case $i.DOLLY:if(n.enableZoom===!1)return;ve(M),r=i.DOLLY;break;case $i.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Te(M),r=i.PAN}else{if(n.enableRotate===!1)return;ie(M),r=i.ROTATE}break;case $i.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;ie(M),r=i.ROTATE}else{if(n.enablePan===!1)return;Te(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pf)}function oe(M){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;q(M);break;case i.DOLLY:if(n.enableZoom===!1)return;te(M);break;case i.PAN:if(n.enablePan===!1)return;be(M);break}}function z(M){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(M.preventDefault(),n.dispatchEvent(Pf),ae(fe(M)),n.dispatchEvent(B0))}function fe(M){let H=M.deltaMode,K={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(H){case 1:K.deltaY*=16;break;case 2:K.deltaY*=100;break}return M.ctrlKey&&!w&&(K.deltaY*=10),K}function ce(M){M.key==="Control"&&(w=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(M){M.key==="Control"&&(w=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Ae(M){n.enabled===!1||n.enablePan===!1||Re(M)}function he(M){switch(ze(M),R.length){case 1:switch(n.touches.ONE){case Qi.ROTATE:if(n.enableRotate===!1)return;_e(M),r=i.TOUCH_ROTATE;break;case Qi.PAN:if(n.enablePan===!1)return;k(M),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case Qi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$(M),r=i.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;re(M),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Pf)}function Me(M){switch(ze(M),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ee(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(M),n.update();break;default:r=i.NONE}}function Le(M){n.enabled!==!1&&M.preventDefault()}function xe(M){R.push(M.pointerId)}function pe(M){delete L[M.pointerId];for(let H=0;H<R.length;H++)if(R[H]==M.pointerId){R.splice(H,1);return}}function Fe(M){for(let H=0;H<R.length;H++)if(R[H]==M.pointerId)return!0;return!1}function ze(M){let H=L[M.pointerId];H===void 0&&(H=new Y,L[M.pointerId]=H),H.set(M.pageX,M.pageY)}function st(M){let H=M.pointerId===R[0]?R[1]:R[0];return L[H]}n.domElement.addEventListener("contextmenu",Le),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",z,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ce,{passive:!0,capture:!0}),this.update()}};function H0({canvas:s}){function t(v){return 2*Math.atan(.5/Math.min(Math.max(v,1),2.4))*180/Math.PI}console.assert(Math.abs(t(2.4)-23.5366)<.001,"heroFov(2.4) must be the hero lens, 36 mm on 36 mm at 2.4:1");let n=new bt(t(innerWidth/innerHeight),innerWidth/innerHeight,1.5,6e3),i={shift:.122},r=-.135;function a(v){let _=Math.min(Math.max((v-2.4)/1.1555555555555554,0),1),E=Math.min(Math.max((v-1)/.6,0),1);return(r+_*(-.2068-r))*E}function o(){n.setViewOffset(innerWidth,innerHeight,a(innerWidth/innerHeight)*innerWidth,-i.shift*innerHeight,innerWidth,innerHeight)}o();let l=new T(3,4.45,120),c=new T(8,4.45,0);n.position.copy(l);let h=new Rl(n,s);h.target.copy(c),h.enableDamping=!0,h.dampingFactor=.06,h.minDistance=6,h.maxDistance=320,h.maxPolarAngle=Math.PI*.495;let u=null,d=()=>{};function f(v){u=v.FLY,d=()=>v.syncFromCamera()}function m(v,_,E,S,R,L){return n.position.set(v,_,E),n.lookAt(S,R,L),d(),{eye:n.position.toArray(),yaw:u.yaw,pitch:u.pitch}}function b(v){if(u.on=v==="fly",u.on)h.update(),d(),h.enabled=!1;else{let E=new T;n.getWorldDirection(E),h.target.copy(n.position).addScaledVector(E,60),n.rotation.z=0,n.fov=u.fov0,o(),h.enabled=!0,h.update()}let _=document.getElementById("c-cam");_&&_.value!==v&&(_.value=v)}function g(){h.enabled=!1,n.position.copy(l),h.target.copy(c),n.up.set(0,1,0),n.lookAt(c),n.rotation.z=0,n.aspect=innerWidth/innerHeight,n.fov=u.fov0=t(n.aspect),o(),n.updateProjectionMatrix(),u.on=!0,d();let v=document.getElementById("c-cam");v&&(v.value="fly")}let p=1.33;function x(){g(),n.position.lerpVectors(c,l,p),h.target.copy(c)}return{camera:n,controls:h,heroFov:t,HORIZON:i,applyHorizon:o,HERO_POS:l,HERO_TARGET:c,LOOKAT:m,setCamMode:b,restoreHero:g,restoreDefault:x,bindFly:f}}var Cl=class{constructor({nx:e,ny:t,positions:n,pins:i}){this.nx=e,this.ny=t,this.rest=Float64Array.from(n),this.x=Float64Array.from(n),this.previous=Float64Array.from(n),this.velocity=new Float64Array(n.length),this.inv=new Float64Array(n.length/3).fill(1);for(let a of i)this.inv[a]=0;this.pins=i,this.constraints=[],this.accumulator=0,this.time=0;let r=(a,o,l)=>{let c=Math.hypot(...[0,1,2].map(h=>n[a*3+h]-n[o*3+h]));this.constraints.push({a,b:o,length:c,compliance:l,lambda:0})};for(let a=0;a<t;a++)for(let o=0;o<e;o++){let l=a*e+o;o+1<e&&r(l,l+1,1e-8),a+1<t&&r(l,l+e,1e-8),o+1<e&&a+1<t&&(r(l,l+e+1,5e-8),r(l+1,l+e,5e-8)),o+2<e&&r(l,l+2,2e-4),a+2<t&&r(l,l+2*e,2e-4)}this.tethers=[];for(let a=0;a<this.inv.length;a++){let o=i[0],l=1/0;for(let c of i){let h=Math.hypot(...[0,1,2].map(u=>n[a*3+u]-n[c*3+u]));h<l&&(l=h,o=c)}this.tethers.push({pin:o,length:l*1.015})}}step(e,t,n=-1/0){let i=.008333333333333333;for(this.accumulator=Math.min(this.accumulator+Math.max(0,Math.min(e,.1)),.1);this.accumulator+1e-10>=i;)this.substep(i,t,n),this.accumulator-=i}substep(e,t,n){let{x:i,previous:r,velocity:a,inv:o,rest:l}=this;r.set(i),this.time+=e;for(let c=0;c<o.length;c++){let h=c*3;if(!o[c]){for(let te=0;te<3;te++)i[h+te]=l[h+te],a[h+te]=0;continue}let u=Math.floor(c/this.nx),d=c%this.nx,f=(c-(d>0?1:0))*3,m=(c+(d+1<this.nx?1:0))*3,b=(c-(u>0?this.nx:0))*3,g=(c+(u+1<this.ny?this.nx:0))*3,p=r[m]-r[f],x=r[m+1]-r[f+1],v=r[m+2]-r[f+2],_=r[g]-r[b],E=r[g+1]-r[b+1],S=r[g+2]-r[b+2],R=x*S-v*E,L=v*_-p*S,w=p*E-x*_,y=Math.hypot(R,L,w)||1;R/=y,L/=y,w/=y;let F=t(r[h],r[h+1],r[h+2]),O=F[0]-a[h],I=-a[h+1],C=F[1]-a[h+2],P=O*R+I*L+C*w,B=Math.max(0,Math.min(1,(3.5-Math.hypot(...F))/1.5)),X=1+3*B*B*(3-2*B),U=Math.hypot(...F),V=l[h]*.72+l[h+2]*.61,j=B*Math.min(1.3,U*1.35)*(.72*Math.sin(this.time*2.6+V+l[h+1]*.65)+.28*Math.sin(this.time*4.3+V*1.7-l[h+1]*1.2)),ie=P+j,ve=Math.max(-28,Math.min(28,1.05*X*ie*Math.abs(ie))),Te=(.06+.18*Math.min(10,Math.hypot(O,I,C)))*(1+1.8*B),q=[ve*R+Te*(O-P*R),ve*L+Te*(I-P*L)-9.81,ve*w+Te*(C-P*w)];for(let te=0;te<3;te++)a[h+te]=(a[h+te]+q[te]*e)*Math.exp(-.7*e),i[h+te]+=a[h+te]*e}for(let c of this.constraints)c.lambda=0;for(let c=0;c<28;c++){for(let h of this.constraints){let u=h.a*3,d=h.b*3,f=o[h.a],m=o[h.b];if(f+m===0)continue;let b=i[d]-i[u],g=i[d+1]-i[u+1],p=i[d+2]-i[u+2],x=Math.hypot(b,g,p)||1e-9,v=h.compliance/(e*e),_=(-(x-h.length)-v*h.lambda)/(f+m+v);h.lambda+=_;let E=_/x;i[u]-=f*E*b,i[u+1]-=f*E*g,i[u+2]-=f*E*p,i[d]+=m*E*b,i[d+1]+=m*E*g,i[d+2]+=m*E*p}for(let h=0;h<o.length;h++)if(o[h]){let u=h*3,{pin:d,length:f}=this.tethers[h],m=d*3,b=i[u]-l[m],g=i[u+1]-l[m+1],p=i[u+2]-l[m+2],x=Math.hypot(b,g,p);if(x>f){let v=f/x;i[u]=l[m]+b*v,i[u+1]=l[m+1]+g*v,i[u+2]=l[m+2]+p*v}i[u+1]=Math.max(i[u+1],n)}}for(let c=0;c<o.length;c++)if(o[c])for(let h=0;h<3;h++){let u=c*3+h;a[u]=(i[u]-r[u])/e}}maxStretch(){return Math.max(...this.constraints.filter(e=>e.compliance<1e-6).map(e=>Math.hypot(...[0,1,2].map(t=>this.x[e.a*3+t]-this.x[e.b*3+t]))/e.length))}};function jS(s){return s.garments.map(({patch:e,binding:t})=>({nx:e.nx,ny:e.ny,positions:Array.from(e.rest),pins:Array.from(e.pins),ids:Int32Array.from(t.map(n=>n.id)),keys:Int32Array.from(t.flatMap(n=>n.keys)),weights:Float64Array.from(t.flatMap(n=>n.weights)),blend:Float64Array.from(t.map(n=>n.blend))}))}var KS=1/30;function G0(s,e,t=null){return{garments:[],mesh:null,worker:null,workerReady:!1,inFlight:!1,pendingDt:0,affected:null,buffer:null,cfg:null,lastMaxStretch:1,from:null,to:null,alpha:1,blendDt:0,lastResultAt:0,init(n){this.mesh=n;let i=n.geometry,r=i.attributes.position,a=Float32Array.from(r.array),o=r.count;n.updateWorldMatrix(!0,!1);for(let w=0;w<o;w++)a[w*3+1]=-r.getZ(w),a[w*3+2]=r.getY(w);let l=n.matrixWorld.clone().multiply(new s.Matrix4().makeRotationX(-Math.PI/2)),c=new s.Vector3(1,0,0).transformDirection(l),h=new s.Vector3(c.z,0,-c.x),u=w=>.208+.12*w*w,d=new Uint8Array(o),f=Int32Array.from({length:o},(w,y)=>y),m=w=>{for(;f[w]!==w;)f[w]=f[f[w]],w=f[w];return w},b=(w,y)=>{d[w]&&d[y]&&(f[m(w)]=m(y))},g=new Map;for(let w=0;w<o;w++){let y=a[w*3],F=a[w*3+2];if(d[w]=Math.abs(y)<.858&&F<u(y)-.012,!d[w])continue;let O=y>.704?1:0,I=`${Math.round(y*1e4)},${Math.round(a[w*3+1]*1e4)},${Math.round(F*1e4)},${O}`;g.has(I)?b(w,g.get(I)):g.set(I,w)}let p=i.index?.array||Uint32Array.from({length:o},(w,y)=>y);for(let w=0;w<p.length;w+=3)for(let y=0;y<3;y++){let F=p[w+y],O=p[w+(y+1)%3];a[F*3]>.704==a[O*3]>.704&&b(F,O)}let x=new Map;for(let w=0;w<o;w++)if(d[w]){let y=m(w);x.has(y)||x.set(y,[]),x.get(y).push(w)}let v=[...x.values()].filter(w=>w.length>150),_=.004,E=.003,S=new Map,R=new Uint8Array(o),L=(w,y,F)=>`${w},${y},${F}`;for(let w=0;w<v.length;w++)for(let y of v[w]){R[y]=1;let F=L(...[0,1,2].map(O=>Math.floor(a[y*3+O]/_)));S.has(F)||S.set(F,[]),S.get(F).push({id:y,garment:w})}for(let w=0;w<o;w++)if(d[w]&&!R[w]){let y=[0,1,2].map(C=>a[w*3+C]),F=y.map(C=>Math.floor(C/_)),O=-1,I=E*E;for(let C=-1;C<=1;C++)for(let P=-1;P<=1;P++)for(let B=-1;B<=1;B++)for(let X of S.get(L(F[0]+C,F[1]+P,F[2]+B))||[]){let U=y.reduce((V,j,ie)=>V+(j-a[X.id*3+ie])**2,0);U<I&&(I=U,O=X.garment)}O>=0&&v[O].push(w)}yl(n),n.frustumCulled=!1,this.position=i.attributes.position,this.normal=i.attributes.normal,this.rest=Float32Array.from(this.position.array),this.restNormal=Float32Array.from(this.normal.array),this.garments=[];for(let w of v){let y=1/0,F=-1/0,O=1/0;for(let ie of w)y=Math.min(y,a[ie*3]),F=Math.max(F,a[ie*3]),O=Math.min(O,a[ie*3+2]);let I=l.getMaxScaleOnAxis(),C=(F-y)*I,P=Math.max(5,Math.ceil(C/.09)+1),B=Math.max(5,Math.ceil((u((y+F)/2)-O)*I/.09)+1),X=[],U=new s.Vector3;for(let ie=0;ie<B;ie++)for(let ve=0;ve<P;ve++){let Te=y+(F-y)*ve/(P-1),q=ie/(B-1);U.set(Te,0,u(Te)+(O-u(Te))*q).applyMatrix4(l),X.push(...U.toArray())}let V=new Cl({nx:P,ny:B,positions:X,pins:[0,P-1]}),j=[];for(let ie of w){let ve=a[ie*3],Te=a[ie*3+2],q=Math.max(0,Math.min(P-1.00001,(ve-y)/(F-y)*(P-1))),te=Math.max(0,Math.min(B-1.00001,(u(ve)-Te)/(u(ve)-O)*(B-1))),be=Math.floor(q),ae=Math.floor(te),Re=q-be,_e=te-ae,k=[ae*P+be,ae*P+be+1,(ae+1)*P+be,(ae+1)*P+be+1],Ee=[(1-Re)*(1-_e),Re*(1-_e),(1-Re)*_e,Re*_e],$=(u(ve)-Te)*I,re=Math.min(1,Math.max(0,($-.03)/.09));j.push({id:ie,keys:k,weights:Ee,blend:re})}this.garments.push({patch:V,binding:j,normal:h})}console.info("cloth rig:",this.garments.length,"connected textiles;",this.garments.reduce((w,y)=>w+y.binding.length,0),"bound vertices"),t&&typeof Worker<"u"&&this.startWorker(t)},startWorker(n){let i;try{i=new Worker(n.url,{type:"module"})}catch(o){console.warn("cloth worker unavailable, solving on the main thread",o);return}let r=this.mesh.geometry,a=r.index?Int32Array.from(r.index.array):Int32Array.from({length:this.position.count},(o,l)=>l);i.onmessage=o=>{let l=o.data;if(l.type==="ready"){this.affected=l.affected,this.normal.array.set(l.normals),this.normal.needsUpdate=!0,this.workerReady=!0;return}if(l.type==="result"){let c=new Float32Array(l.data),h=this.affected.length*6;if(!this.to)this.from=new Float32Array(h),this.to=new Float32Array(h),this.from.set(c);else{let f=this.from,m=this.to,b=this.alpha;for(let g=0;g<h;g++)f[g]+=(m[g]-f[g])*b}let u=performance.now(),d=this.lastResultAt?(u-this.lastResultAt)/1e3:0;this.lastResultAt=u,this.to.set(c),this.alpha=0,this.blendDt=Math.max(l.dt||0,Math.min(d,.25),.001),this.buffer=l.data,this.inFlight=!1,this.lastMaxStretch=l.maxStretch}},i.onerror=o=>{console.warn("cloth worker failed, solving on the main thread",o.message||o),this.worker=null,this.workerReady=!1,this.inFlight=!1},i.postMessage({type:"init",rest:Float32Array.from(this.rest),index:a,garments:jS(this),dir:n.dir,top:n.top}),this.worker=i,this.cfg=n},step(n){if(!this.mesh)return;if(this.worker){if(this.pendingDt=Math.min(this.pendingDt+n,KS),this.workerReady&&!this.inFlight){let[a,o]=this.cfg.state(),l=this.buffer;this.buffer=null,this.worker.postMessage({type:"step",dt:this.pendingDt,U:a,adv:o,buffer:l},l?[l]:[]),this.pendingDt=0,this.inFlight=!0}if(this.to&&this.alpha<1){this.alpha=Math.min(1,this.alpha+n/this.blendDt);let a=this.from,o=this.to,l=this.alpha,c=this.position.array,h=this.normal.array,u=this.affected;for(let d=0;d<u.length;d++){let f=u[d]*3,m=d*6;c[f]=a[m]+(o[m]-a[m])*l,c[f+1]=a[m+1]+(o[m+1]-a[m+1])*l,c[f+2]=a[m+2]+(o[m+2]-a[m+2])*l;let b=a[m+3]+(o[m+3]-a[m+3])*l,g=a[m+4]+(o[m+4]-a[m+4])*l,p=a[m+5]+(o[m+5]-a[m+5])*l,x=Math.hypot(b,g,p)||1;h[f]=b/x,h[f+1]=g/x,h[f+2]=p/x}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}return}let i=this.position.array,r=this.normal.array;for(let{patch:a,binding:o}of this.garments){a.step(n,e);for(let{id:l,keys:c,weights:h,blend:u}of o)for(let d=0;d<3;d++){let f=0;for(let m=0;m<4;m++)f+=(a.x[c[m]*3+d]-a.rest[c[m]*3+d])*h[m];i[l*3+d]=this.rest[l*3+d]+f*u,r[l*3+d]=this.restNormal[l*3+d]}}this.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}}function V0({islandTop:s,clothWorkerUrl:e,syncCloth:t,field:n=[160,80]}){let i={t:{value:0},on:!0,spd:{value:1.8}},r=s;function a(m,b){let g=Math.sin(m*127.1+b*311.7)*43758.5453;return g-Math.floor(g)}function o(m,b){let g=Math.floor(m),p=Math.floor(b),x=m-g,v=b-p;x=x*x*(3-2*x),v=v*v*(3-2*v);let _=a(g,p),E=a(g+1,p),S=a(g,p+1),R=a(g+1,p+1);return(_*(1-x)+E*x)*(1-v)+(S*(1-x)+R*x)*v}let l=Od.toHalfFloat;function c(){let m=0,b=0;for(;m===0;)m=Math.random();for(;b===0;)b=Math.random();return Math.sqrt(-2*Math.log(m))*Math.cos(2*Math.PI*b)}let h={dir:new Y(.92,.39).normalize(),mean:1.8,U:1.8,adv:0,step(m){let g=.42*Math.sqrt(Math.max(this.mean,.3)/3);this.U+=.18*(this.mean-this.U)*m+g*Math.sqrt(m)*c(),this.U=Math.max(0,Math.min(this.U,this.mean*1.6+.5)),this.adv+=this.U*.85*m,i.spd.value=this.U},at(m,b,g,p){let x=this.dir,v=m*x.x+g*x.y-this.adv,_=-m*x.y+g*x.x,E=o(v*.04,_*.1),S=o(v*.17+7.3,_*.24-3.1),R=.45+1*E+.35*(S-.5),L=.55+.45*Math.min(Math.max((b-r+.4)/5,0),1),w=this.U*R*L,y=(S-.5)*.45,F=Math.cos(y),O=Math.sin(y);return p.x=w*(x.x*F-x.y*O),p.y=w*(x.x*O+x.y*F),p}},u={W:n[0],H:n[1],box:null,tex:null,d:null,v:null,w0:null,tmp:new Y,uMin:{value:new Y},uSize:{value:new Y(1,1)},uTex:{value:null},uLean:{value:10},uFlut:{value:.03},init(m){this.box=m;let b=this.W*this.H;this.d=new Float32Array(b*2),this.v=new Float32Array(b*2),this.w0=new Float32Array(b);for(let g=0;g<this.H;g++)for(let p=0;p<this.W;p++)this.w0[g*this.W+p]=2*Math.PI*(1.15+.09*(o(p*.11,g*.13)-.5));this.data=new Uint16Array(b*4),this.tex=new cn(this.data,this.W,this.H,Vt,Xn),this.tex.minFilter=this.tex.magFilter=ct,this.tex.wrapS=this.tex.wrapT=Dt,this.tex.needsUpdate=!0,this.uTex.value=this.tex,this.uMin.value.set(m.min.x,m.min.z),this.uSize.value.set(m.max.x-m.min.x,m.max.z-m.min.z)},step(m){if(!this.box)return;let{W:b,H:g,d:p,v:x,w0:v,data:_,tmp:E}=this,S=this.uSize.value.x/b,R=this.uSize.value.y/g,L=this.uMin.value.x,w=this.uMin.value.y,y=.38,F=.7,O=.16,I=3;for(let C=0;C<g;C++){let P=w+(C+.5)*R;for(let B=0;B<b;B++){let X=C*b+B,U=X*2;h.at(L+(B+.5)*S,r+.4,P,E);let V=Math.sqrt(E.x*E.x+E.y*E.y),j=v[X],ie=B>0?U-2:U,ve=B<b-1?U+2:U,Te=C>0?U-2*b:U,q=C<g-1?U+2*b:U,te=p[ie]+p[ve]+p[Te]+p[q]-4*p[U],be=p[ie+1]+p[ve+1]+p[Te+1]+p[q+1]-4*p[U+1],ae=F*V*E.x-j*j*p[U]-2*y*j*x[U]+I*te,Re=F*V*E.y-j*j*p[U+1]-2*y*j*x[U+1]+I*be;x[U]+=ae*m,x[U+1]+=Re*m,p[U]+=x[U]*m,p[U+1]+=x[U+1]*m;let _e=Math.sqrt(p[U]*p[U]+p[U+1]*p[U+1]);_e>O&&(p[U]*=O/_e,p[U+1]*=O/_e),_[X*4]=l(p[U]),_[X*4+1]=l(p[U+1]),_[X*4+2]=l(V)}}this.tex.needsUpdate=!0}},d=new Y,f=G0(Wt,(m,b,g)=>(h.at(m,b,g,d),[d.x,d.y]),t?null:{url:e,dir:h.dir.toArray(),top:r,state:()=>[h.U,h.adv]});return{WIND:i,Wind:h,Grass:u,Cloth:f}}var q0=5e4,W0=s=>s.isInterleavedBufferAttribute?s.data:s,YS=s=>{let e=s.getWorldScale(new T);return Math.max(e.x,e.y,e.z)||1};function X0(s,e){let t=new Set;for(let i of e){for(let r of Object.values(i.geometry.attributes))t.add(W0(r));i.geometry.index&&t.add(i.geometry.index)}let n=[];return s.traverse(i=>{i.isMesh&&i.geometry&&Object.values(i.geometry.attributes).some(r=>t.has(W0(r)))&&n.push(i)}),n}function j0(s,e,{workerUrl:t,ratio:n=.2,error:i=.03}){return new Promise((r,a)=>{let o;try{o=new Worker(t,{type:"module"})}catch(u){a(u);return}let l=[],c=performance.now();if(s.forEach((u,d)=>{let f=u.geometry,m=f.index,b=f.attributes.position;if(!m||!m.array||!b||f.groups.length)return;let g=b.count,p=new Float32Array(g*3);for(let v=0;v<g;v++)p[v*3]=b.getX(v),p[v*3+1]=b.getY(v),p[v*3+2]=b.getZ(v);let x=new Uint32Array(m.array);l.push({id:d,o:u,before:x.length/3,n:g}),o.postMessage({id:d,index:x,positions:p,target:Math.max(3,Math.floor(x.length*n/3)*3),error:i/YS(u)},[x.buffer,p.buffer])}),!l.length){o.terminate(),r([]);return}let h=new Map;o.onerror=u=>{o.terminate(),a(u.error||new Error(u.message))},o.onmessage=({data:{id:u,index:d}})=>{if(h.set(u,d),h.size<l.length)return;o.terminate();for(let m of e)m.geometry.dispose();let f=[];for(let m of l){let b=h.get(m.id);m.o.geometry.setIndex(new Oe(m.n<=65536?new Uint16Array(b):b,1)),f.push([m.o.name,m.before,b.length/3])}for(let m of e)js(m,new Set);f.forEach(m=>m.push(Math.round(performance.now()-c))),r(f)}})}var ci="v271",rb,QS=new Promise(s=>{rb=s}),wn=new URLSearchParams(location.search).has("dev");wn&&document.body.classList.add("dev");var sb=Promise.resolve(u0).then(e0);f0(sb);var un=new URLSearchParams(location.search),ab=matchMedia("(hover: none) and (pointer: coarse)").matches,si={lodOff:!1,lodRangeOff:!1,mirrorKeep:void 0,kuwLoop:!1,shadow:0,noMirror:!1};window.KNOBS=si;var{WORLD_URL:e1,GLB_URL:t1,GLB_ABS:ob,MEADOW_URL:n1,MEADOW_ABS:i1}=y0(un,wn);window.WORLD_URL=e1;var J0=wl?d0(ob,ci,42981988):null,mt=new Ia({powerPreference:"high-performance",antialias:un.has("aa"),preserveDrawingBuffer:un.has("capture")});mt.shadowMap.enabled=!0;mt.shadowMap.type=hl;var Ii=A0({renderer:mt,q:un,touchFirst:ab,dev:wn,knobs:si,mirrorTarget:()=>Di&&Di.getRenderTarget(),onDprChange:()=>ql.resize()}),Ln=Ii.memory,cr=Ii.TIER;window.TIER=cr;window.applyDpr=Ii.applyDpr;mt.setPixelRatio(Ii.fitDpr(Ii.dpr));mt.setSize(innerWidth,innerHeight);mt.toneMapping=Un;mt.outputColorSpace=pt;document.getElementById("app").appendChild(mt.domElement);var ut=new Ai;ut.background=new ge("#8b95ab");ut.fog=new Rs("#98a0b2",900,3400);var cb={value:null},Vl={value:new T(.84,.242,.485).normalize()},Uf={value:1},Ff=await(window.GRIDS_FETCH||fetch("./world-grids.bin?v="+ci)).then(async s=>{if(!s.ok)throw new Error("world-grids.bin "+s.status);let e=await s.arrayBuffer(),n=new DataView(e).getUint32(0,!0),i=JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,n)).replace(/\0+$/,"")),r=(l,c)=>{let h=new Int16Array(e,c,l.count),u=new Float32Array(l.count);for(let d=0;d<l.count;d++)u[d]=h[d]/i.scale;return{N:l.N,x0:l.x0,z0:l.z0,cw:l.cw,ch:l.ch,h:u}},a=4+n,o=a+i.island.count*2;return{island:r(i.island,a),ground:r(i.ground,o),profile:i.profile}}),Kr={...Ff.profile,originalGround:Ff.ground},lb=Kr.offsets[ke.nodes.house],Xr={value:1};for(let s of Object.values(_l.views))for(let e of["eye","target"])s[e][1]+=lb;var Ks=[],kf={value:new Wn().load("./interior-warm-v1.webp?v="+ci)};Ks.push(kf.value);kf.value.colorSpace=pt;{let s=document.createElement("canvas");s.width=4,s.height=512;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1b558e"),t.addColorStop(.42,"#22629b"),t.addColorStop(.8,"#286ea6"),t.addColorStop(1,"#3a7cae"),e.fillStyle=t,e.fillRect(0,0,4,512);let n=new Fa(s);n.colorSpace=pt;let i=new it(new Gr(2900,48,32),new Pt({map:n,side:zt,fog:!1,depthWrite:!1}));i.renderOrder=-3,ut.add(i);let r=new Wn().load("./sky_panorama.jpg?v="+ci,d=>{Ln?Ml(d,1024):wn&&un.get("sky")==="half"&&Ml(d,1024)});Ks.push(r),r.colorSpace=pt,r.wrapS=Bn,cb.value=r;let a=2500,o=Math.tan(28.74*Math.PI/180),l=Math.tan(-12.196*Math.PI/180),c=a*.747*(o-l),h=new Pt({map:r,side:zt,fog:!1,depthWrite:!1,transparent:!0});h.onBeforeCompile=d=>{d.uniforms.uVisibleSun=Vl,d.uniforms.uVisibleSunOn=Uf,d.vertexShader=`varying vec3 vSkyDirection;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSkyDirection=(modelMatrix*vec4(position,1.0)).xyz-cameraPosition;`),d.fragmentShader=xf+`varying vec3 vSkyDirection;
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`{ float hv = 0.717; float v = vMapUv.y;
         float vv = v < hv ? v : hv + (v - hv) / 1.22;
         vec4 sampledDiffuseColor = texture2D( map, vec2(vMapUv.x, vv) );
         sampledDiffuseColor.rgb=paintedSun(vSkyDirection,sampledDiffuseColor.rgb);
         diffuseColor *= sampledDiffuseColor; }`),d.fragmentShader=d.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
       diffuseColor.a *= smoothstep(0.985, 0.72, vMapUv.y);
       diffuseColor.a *= smoothstep(0.02, 0.16, vMapUv.y);   // bottom seam too`)};let u=new it(new Ki(a,a,c,96,1,!0),h);u.position.y=a*.747*l+c/2,u.renderOrder=-2,ut.add(u)}var hb=H0({canvas:mt.domElement}),{camera:nn,controls:Bf,heroFov:ub,HORIZON:r1,applyHorizon:db,HERO_POS:s1,LOOKAT:fb,setCamMode:a1,restoreHero:zf,restoreDefault:pb}=hb;window.LOOKAT=fb;window.restoreHero=zf;window.restoreDefault=pb;var{COLLIDE:Li,groundY:mb,registerBox:Z0,buildGroundGrid:o1,collideCamera:gb}=S0({camera:nn,grid:Ff.island});window.COLLIDE=Li;window.groundY=mb;var kl=E0({camera:nn,controls:Bf,canvas:mt.domElement,hud:document.getElementById("hud"),stickEl:document.getElementById("stick"),turnEl:document.getElementById("turn"),collideCamera:gb,fov0:ub(innerWidth/innerHeight),touchFirst:ab,onHeroKey:()=>zf()});hb.bindFly(kl);var{FLY:co,MOVE:c1,fly:bb,walk:vb}=kl;window.MOVE=c1;var Fl=[],sr=Ln&&!un.has("fulldetail")?[]:null,$0=[],Di=null,Ys=null,xb=xl(2.45,Kr),{WIND:oi,Wind:lo,Grass:ai,Cloth:tn}=V0({islandTop:xb,clothWorkerUrl:new URL("./cloth-worker.js?v="+ci,import.meta.url).href,syncCloth:un.has("syncCloth"),field:Ln?[96,48]:[160,80]}),_b=O0({wind:()=>lo,collide:Li,treeDrop:Kr.offsets[ke.nodes.tree],names:ke.substrings,build:ci});await _b.ready();var{Tree:Lt,TREE_VOLUME:Pl,CROWN:jr,LEAF_CUTOUT:Q0,LEAF_SHAPE_DECL:Ll,BARK_DECL:l1,BARK_SHAPE:h1,LEAF_SHAPE:eb,bleedLeafAtlas:u1,markBareTwigs:yb}=_b;window.markBareTwigs=yb;window.CROWN=jr;var wb={level:{value:.02}};function d1(s){let e=s.onBeforeCompile;s.onBeforeCompile=t=>{e&&e(t),t.uniforms.uSea=wb.level,t.uniforms.uWt2=oi.t,t.vertexShader=`varying vec3 vShoreW;
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
      }`)},s.needsUpdate=!0}var or=Vl,Kn={map:{value:null},matrix:{value:new De},size:{value:new Y(2048,2048)},on:{value:0}},Mb={value:0},Bl={value:1},Wl={value:1};Ln&&(Wl.value=.35);var oo={value:1},zl={c:{value:new T},h:{value:new T(1,1,1)}},Hl={c:{value:new et(0,0,1,0)},half:{value:new Y(0,0)}},f1={value:ir.points.slice(0,-1).map((s,e)=>new et(...s,...ir.points[e+1]))},p1=`
  varying vec2 vEntryRest;
  varying float vBladeH;      // height fraction along the blade (0 root .. 1 tip)

  uniform mat4 uShMatrix;
  varying vec4 vShCoord;
  uniform float uWt;
  uniform float uMirror;
  uniform float uLod;
  uniform float uMirrorKeep;   // blade share in the mirror pass
  uniform vec4 uStepC;      // step footprint centre.xz, axis.xz
  uniform vec2 uStepHalf;
  uniform sampler2D uGrassTex;
  uniform vec2 uGrassMin, uGrassSize;
  uniform float uGrassLean, uGrassFlut;
  uniform vec2 uTrunk;
  uniform vec2 uBranch[6];
  uniform float uTreeBase, uTreeH, uFlutter, uTreeW;
  uniform vec2 uTreeC;
  const float ISLAND_TOP = ${xb.toFixed(2)};
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
`;function ar(s,e,t=!1,n=[1,1,1],i=!1,r=!1,a=!1,o=null){let[l,c,h]=n.map(u=>u.toFixed(4));e==="tree"&&o&&(s.defines=Object.assign(s.defines||{},{[o.__define]:""})),s.onBeforeCompile=u=>{if(u.uniforms.uWt=oi.t,e==="tree"&&o)for(let[d,f]of Object.entries(o))d!=="__define"&&(u.uniforms[d]=f);u.uniforms.uMirror=Mb,u.uniforms.uLod=Bl,u.uniforms.uMirrorKeep=Wl,u.uniforms.uStepC=Hl.c,u.uniforms.uStepHalf=Hl.half,e!=="blade"&&(u.vertexShader=u.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1")),e==="tree"&&t&&(u.vertexShader=r0+u.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal=leafMotion()*objectNormal;`)),e==="tree"&&(u.vertexShader=n0+u.vertexShader.replace("#include <defaultnormal_vertex>",`objectNormal=trunkRotation(treeAnchor(${t?"_leaf_pivot":"position"}).y)*branchRotation(_bmeta,.55)*branchRotation(_smeta,.85)*objectNormal;
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
`+u.vertexShader,u.uniforms.uGrow=oo,u.uniforms.uRootC=zl.c,u.uniforms.uRootH=zl.h,u.vertexShader=u.vertexShader.replace("attribute float _height;",`attribute vec4 _height4;
#define _height (_height4.x)`)):e==="blade"&&r&&(u.vertexShader=`#define HAS_ROOT
attribute vec2 _root;
`+u.vertexShader),u.uniforms.uGrassLean=ai.uLean,u.uniforms.uGrassFlut=ai.uFlut,u.uniforms.uGrassTex=ai.uTex,u.uniforms.uGrassMin=ai.uMin,u.uniforms.uGrassSize=ai.uSize,u.uniforms.uTrunk=Lt.uTrunk,u.uniforms.uBranch=Lt.uBranch,u.uniforms.uTreeBase=Lt.uBase,u.uniforms.uTreeH=Lt.uHeight,u.uniforms.uFlutter=Lt.uFlutter,u.uniforms.uTreeC=Lt.uCentre,u.uniforms.uTreeW=Lt.uWidth,u.uniforms.uShMatrix=Kn.matrix,u.uniforms.uShMap=Kn.map,u.uniforms.uShSize=Kn.size,u.uniforms.uShOn=Kn.on,e!=="tree"&&(u.uniforms.uRearEntry=f1,u.uniforms.uRearEntryBounds={value:new et(Math.min(...ir.points.map(d=>d[0]))-.6,Math.min(...ir.points.map(d=>d[1]))-.6,Math.max(...ir.points.map(d=>d[0]))+.6,Math.max(...ir.points.map(d=>d[1]))+.6)},u.vertexShader=`uniform vec4 uRearEntry[8];
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
        #include <alphatest_fragment>`),u.fragmentShader=ri+u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 ${e==="blade"?`diffuseColor.rgb=sceneMeadowPigment(diffuseColor.rgb,vEntryRest);
         // root-to-tip value gradient, so a blade reads as a blade at
         // 1-2 m instead of a flat shard. Mean 1.0 over the blade, so the
         // sub-pixel average at the hero distance is unchanged.
         diffuseColor.rgb*=mix(.84,1.16,clamp(vBladeH,0.,1.));`:""} diffuseColor.rgb *= sceneTurfLight(meadowShadow());`)),u.vertexShader=p1+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        #ifdef ROOT_REL
        transformed *= uGrow * uGrow * (3.0 - 2.0 * uGrow);   // the meadow grows in after the door opens
        transformed += _root3 / vec3(${l}, ${c}, ${h});   // root-relative position -> the blade's place (local units)
        #endif
        vec3 wpos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vEntryRest = wpos.xz;
        ${e==="tree"?`vec3 anchor=treeAnchor(${t?"_leaf_pivot":"wpos"});
             ${t?"transformed.xyz = _leaf_pivot + leafMotion()*(wpos-_leaf_pivot);":""}
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
                 float keep = mix(1.0, mix(1.0, 0.25, smoothstep(45.0, 110.0, lodDist)), uLod);
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
                 vec2 fromRoot = (wpos.xz - _root) * (1.0 / keep - 1.0);
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
      }`)},s.needsUpdate=!0}ut.heroCone=20;ut.heroNear=.45;ut.heroForce=-1;ut.debugHero=!1;var Ol={objs:[],logT:0},Sb=He.map_fragment.replace("texture2D( map, vMapUv )","mix( texture2D( uFlat, vMapUv ), texture2D( map, vMapUv ), uHero )");Sb===He.map_fragment&&console.warn("hero blend: map_fragment sample line not found - painting blend inactive");var Eb=He.emissivemap_fragment.replace("texture2D( emissiveMap, vEmissiveMapUv )","mix( texture2D( uFlat, vEmissiveMapUv ), texture2D( emissiveMap, vEmissiveMapUv ), uHero )");Eb===He.emissivemap_fragment&&console.warn("hero blend: emissivemap_fragment sample line not found - live-sun mode keeps the painting");function m1(s,e){let t=s.material,n=t.map;s.userData.heroBlend={uFlat:{value:n},uHero:{value:1},centre:new dt().setFromObject(s).getCenter(new T)},new Wn().load("./tex_"+e+"_flat.jpg?v="+ci,r=>{r.flipY=!1,r.colorSpace=pt,r.wrapS=n.wrapS,r.wrapT=n.wrapT,r.minFilter=n.minFilter,r.magFilter=n.magFilter,r.anisotropy=n.anisotropy,r.generateMipmaps=n.generateMipmaps,r.needsUpdate=!0,s.userData.heroBlend.uFlat.value=r},void 0,()=>console.warn("hero blend: no tex_"+e+"_flat.jpg - one texture, blend inactive for",e,"(expected for the house after the PROJECT_HOUSE=0 export; for the tree run scripts/export_web.sh)"));let i=t.onBeforeCompile;t.onBeforeCompile=r=>{i&&i(r),r.uniforms.uFlat=s.userData.heroBlend.uFlat,r.uniforms.uHero=s.userData.heroBlend.uHero,r.fragmentShader=`uniform sampler2D uFlat;
uniform float uHero;
`+r.fragmentShader.replace("#include <map_fragment>",Sb).replace("#include <emissivemap_fragment>",Eb)},t.customProgramCacheKey=()=>"heroblend-"+s.name,t.needsUpdate=!0,Ol.objs.push(s)}var Lf=new T,Df=new T;function g1(s){let e=ut.heroCone,t=.35*e,n=ut.heroNear,i=.5*n,r=ut.debugHero&&s-Ol.logT>=1e3;r&&(Ol.logT=s);for(let a of Ol.objs){let o=a.userData.heroBlend;if(ut.heroForce>=0)o.uHero.value=ut.heroForce;else{Lf.subVectors(nn.position,o.centre),Df.subVectors(s1,o.centre);let l=Jt.radToDeg(Lf.angleTo(Df)),c=Lf.length(),h=Df.length();o.uHero.value=(1-Jt.smoothstep(l,t,e))*Jt.smoothstep(c,i*h,n*h)}r&&console.log("hero",a.name,"uHero",o.uHero.value.toFixed(3))}}function b1(s,e,t){let n=s.geometry,i=n.attributes._height,r=n.attributes.position;if(i&&!n.userData.bladeRestBaked){let o=s.matrixWorld.elements,l=r.count,c=[];for(let b=0;b<8;b++){let g=e[b],p=e[b+1];c.push(g&&p?[g[0],g[1],p[0],p[1]]:[0,0,0,0])}let h=(b,g,p)=>{let x=Math.min(Math.max((p-b)/(g-b),0),1);return x*x*(3-2*x)},u=1/t.y,d=performance.now(),f=r.array,m=i.array;for(let b=0;b<l;b++){let g=f[b*3],p=f[b*3+1],x=f[b*3+2],v=o[0]*g+o[4]*p+o[8]*x+o[12],_=o[2]*g+o[6]*p+o[10]*x+o[14],E=Math.min(Math.max(m[b],0),1),S=1e3;for(let[B,X,U,V]of c){let j=U-B,ie=V-X,ve=Math.min(Math.max(((v-B)*j+(_-X)*ie)/Math.max(j*j+ie*ie,1e-5),0),1),Te=v-(B+ve*j),q=_-(X+ve*ie);S=Math.min(S,Math.hypot(Te,q))}let R=1-h(.3,1.05,S),L=E*.72*.78*R;E*=1-.78*R;let w=v+1.75014,y=_+4.38657,F=w*.6436-y*.7654,O=-w*.7654-y*.6436,I=Math.max(Math.abs(F)-6.45,0),C=Math.max(Math.abs(O)-4.26,0),P=1-h(.25,2.4,Math.hypot(I,C));L+=E*.72*.43*P,E*=1-.43*P,f[b*3+1]=p-L*u,m[b]=E}r.needsUpdate=!0,i.needsUpdate=!0,n.userData.bladeRestBaked=!0,console.info(`blades: rest-pose corridor + foundation baked into ${l} verts in ${(performance.now()-d).toFixed(0)} ms`)}for(let o of["normal","uv","_flower_flex"])n.attributes[o]&&n.deleteAttribute(o);let a=n.attributes.color;if(a&&a.array instanceof Float32Array){let o=new Uint8Array(a.count*a.itemSize);for(let l=0;l<o.length;l++)o[l]=Math.round(Math.min(Math.max(a.array[l],0),1)*255);n.setAttribute("color",new Oe(o,a.itemSize,!0))}}function v1(s){let e=s.geometry.userData.bladeChunks,t=s.geometry.index;if(!e||e.length<2||!t)return[s];let n=s.geometry,i=n.attributes.position,r=t.array,a=new T,o=e.map(c=>{let h=new Ge;for(let[d,f]of Object.entries(n.attributes))h.setAttribute(d,f);h.setIndex(new Oe(r.subarray(c.start,c.start+c.count),1));let u=new dt;if(n.userData.meadowRepack&&c.min&&c.max)u.min.set(...c.min).divide(s.scale),u.max.set(...c.max).divide(s.scale);else for(let d=c.start;d<c.start+c.count;d++)u.expandByPoint(a.fromBufferAttribute(i,r[d]));return h.boundingBox=u,h.boundingSphere=u.getBoundingSphere(new wt),h.userData=n.userData,h});s.geometry=o[0],n.setIndex(null);for(let c of Object.keys(n.attributes))n.deleteAttribute(c);let l=[s];for(let c=1;c<o.length;c++){let h=new it(o[c],s.material);h.name=s.name+"_c"+c,h.userData=s.userData,h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,s.parent.add(h),h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),Fl.push(h),l.push(h)}return console.info(`blades: split into ${o.length} frustum-culled chunks`),l}function tb(s){let e=performance.now(),t=yl(s);return wn&&($e.bake=$e.bake||[]).push([s.name,Math.round(performance.now()-e)]),t}b0(mt);io.useWorkers(Math.min(4,Math.max(2,(navigator.hardwareConcurrency||4)-1)));var Ab=new MessageChannel,Of=null;Ab.port1.onmessage=()=>{let s=Of;Of=null,s&&s()};var x1=()=>new Promise(s=>{Of=s,Ab.port2.postMessage(0)}),Gl=0,If=async s=>{let e=performance.now();e-Gl<80||(Gl=e,s&&Cn(s),await x1())},$e={t0:performance.now()};if(wn){let s=(e,t,n)=>{let i=e[t];i&&(e[t]=function(...r){let a=performance.now();$e[n+"First"]||($e[n+"First"]=a),$e[n+"N"]=($e[n+"N"]||0)+1;let o=i.apply(this,r);return o&&o.then?o.then(l=>($e[n+"Last"]=performance.now(),l)):o})};s(io,"decodeGltfBufferAsync","meshopt"),s(window,"createImageBitmap","bitmap")}var nb=new bl().setMeshoptDecoder(io),Tb=J0?await J0:null,Ul;try{Ul=await Ef({url:t1,abs:ob,blob:Tb},(s,e)=>{document.getElementById("loading").textContent=`pouring the watercolours\u2026 ${Math.round(100*s/e)}%`,Cn({type:"progress",loaded:s,total:e})})}catch(s){console.error("island_world.glb failed to load",s),Xs("The island could not load."),Cn({type:"error",message:"The island could not load."})}Cn({type:"stage",stage:"decoding"});$e.fetched=performance.now();Ul&&nb.parse(Ul,"./",async s=>{Ul=null,Tb=null,$e.parsed=performance.now(),await QS;let e=s.scene;s=null,i0(e,Wt,Kr);let t=c=>{let h=c;for(;h.parent;)h=h.parent;return h},n=async c=>{if(!c.isMesh)return;let h=c.geometry.userData&&c.geometry.userData.quant;if(h&&!c.geometry.userData.dequantized){c.geometry.userData.dequantized=!0;let O=performance.now();for(let[C,P]of Object.entries(h)){let B=performance.now(),X=C==="POSITION"?"position":C==="TEXCOORD_0"?"uv":C.startsWith("TEXCOORD_")?"uv"+C.slice(9):C.toLowerCase(),U=c.geometry.attributes[X];if(!U)continue;let V=U.isInterleavedBufferAttribute?U.data.array:U.array;if(!(V instanceof Int16Array))continue;if(C0.has(C)){c.geometry.setAttribute(X+"q",U),c.geometry.deleteAttribute(X),(c.geometry.userData.quantGpu=c.geometry.userData.quantGpu||{})[X]={c:P.c.slice(),h:P.h.slice()};continue}let j=U.itemSize,ie=U.count,ve=new Float32Array(ie*j),Te=U.isInterleavedBufferAttribute?U.data.stride:j,q=U.isInterleavedBufferAttribute?U.offset:0,te=P.c,be=P.h.map(ae=>ae/32767);for(let ae=0,Re=q;ae<ie;ae++,Re+=Te)for(let _e=0;_e<j;_e++){let k=V[Re+_e];ve[ae*j+_e]=te[_e]+be[_e]*(k<-32767?-32767:k)}c.geometry.setAttribute(X,new Oe(ve,j)),wn&&($e.dequantDetail=$e.dequantDetail||[]).push([c.name,C,+(performance.now()-B).toFixed(1),U.isInterleavedBufferAttribute?"IL":"BA"])}let I=performance.now();c.geometry.boundingBox=null,c.geometry.boundingSphere=null,c.geometry.computeBoundingSphere(),wn&&($e.dequant=$e.dequant||[]).push([c.name,Math.round(performance.now()-O),"sphere",Math.round(performance.now()-I)])}if(c.geometry.attributes._tree_id&&P0(c.geometry,t(c)),c.name.startsWith(ke.prefixes.treeTable)){c.visible=!1;return}if(c.name.includes(ke.substrings.clothes)){let O=c.geometry.attributes.normal;if(O&&!(O.array instanceof Float32Array)){let I=new Float32Array(O.count*3);for(let C=0;C<O.count;C++)for(let P=0;P<3;P++)I[C*3+P]=O.getComponent(C,P);c.geometry.setAttribute("normal",new Oe(I,3))}}c.name.includes(ke.substrings.bench)&&(c.position.set(26.8,c.position.y,-2.3),c.updateWorldMatrix(!0,!1));let u=c.material,d=u&&(u.emissiveMap||u.map)||null;d&&(d.colorSpace=pt,c.userData.uniformPlaster=!!u?.name?.startsWith(ke.prefixes.housePlaster),u?.name?.startsWith(ke.prefixes.housePart)&&(d.anisotropy=Math.min(8,mt.capabilities.getMaxAnisotropy()))),c.geometry.attributes.color_1&&(c.geometry.setAttribute("color",c.geometry.attributes.color_1),c.geometry.deleteAttribute("color_1"));let f=!!c.geometry.attributes.color,m=!!u?.name?.startsWith(ke.prefixes.path);m&&d&&(d.anisotropy=Math.min(8,mt.capabilities.getMaxAnisotropy()));let b=!!u?.name?.includes(ke.substrings.bark),g=!!u?.name?.includes(ke.substrings.leaf),p=!!u?.name?.endsWith(ke.substrings.oil)&&(b||g),x=g,v=!x&&u&&u.name&&u.name.includes(ke.substrings.petal);if(c.name===ke.nodes.water){Ys=R0({renderer:mt,camera:nn,scene:ut,memoryTier:Ln,time:oi.t,shadow:Kn,boatWaterline:sb,mirror:{MIRROR:Mb,MIRROR_KEEP:Wl,LOD:Bl,knobs:si,applyBladeLod:wf,skip:$0}}),Di=Ys.mesh,c.visible=!1;return}let _=new Pt({map:d,vertexColors:x||b||m?f:f&&!d,side:Bt,fog:!0});_.name=u?.name||"",u?.name===ke.materials.housePaintRetint&&_.color.setRGB(.86,.82,.76),(u?.name===ke.materials.boat||u?.name===ke.materials.rope)&&m0(_,c,u.name===ke.materials.rope),!d&&!f&&u&&_.color.copy(u.emissive&&u.emissive.getHex()?u.emissive:u.color),u?.name===ke.materials.path0&&(_.transparent=!0,_.depthWrite=!1,_.forceSinglePass=!0),v&&(_.alphaTest=.5,_.transparent=!0),x&&(_.alphaTest=.5,_.transparent=!1,f||console.warn("tree cards: no COLOR_0 in the GLB - the per-card tint is missing (re-run scripts/export_web.sh)"),d||console.warn("tree cards: no atlas texture in the GLB")),u?.name?.startsWith(ke.prefixes.houseWindow)&&(_.onBeforeCompile=O=>{O.uniforms.uWindowSky=cb,O.uniforms.uVisibleSun=Vl,O.uniforms.uVisibleSunOn=Uf;let I=_l.materials[u.name]||{reflection:1,blur:1};O.uniforms.uGlazing={value:new Y(I.reflection,I.blur)},O.uniforms.uRoomPaint=kf,O.uniforms.uRoomSettings={value:new Y(I.interior||0,I.roomVariation||0)},O.uniforms.uBlindOpening={value:I.blindOpening||0},O.uniforms.uFrontDaylight={value:I.frontDaylight||0},O.uniforms.uRoomSun=or,O.uniforms.uFrontGlazing={value:I.frontGlazing||0},O.uniforms.uSideCurtains={value:I.sideCurtains||0},O.uniforms.uGlazingLift={value:I.lift||0},O.vertexShader=`varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
`+O.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          vGlassWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          vGlassNormal = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix);
          vGlassUv = uv;`),O.fragmentShader=xf+`uniform sampler2D uWindowSky,uRoomPaint; uniform vec2 uGlazing,uRoomSettings; uniform float uBlindOpening,uFrontDaylight,uFrontGlazing,uSideCurtains,uGlazingLift; uniform vec3 uRoomSun; varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
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
          #include <opaque_fragment>`)},_.customProgramCacheKey=()=>"painted-window-glass-v221"),c.userData.uniformPlaster&&h0(_,Wt,yf,or,Kn,ri,Xr);let E=!!u?.name?.startsWith(ke.prefixes.houseChimney),S=!!u?.name?.startsWith(ke.prefixes.houseFlashing);(E||S)&&o0(_,Wt,or,Kn,ri,Xr,S);let R=c.name.includes(ke.substrings.bench);R&&s0(_,or,Kn,ri,Xr);let L=!!u?.name?.startsWith(ke.prefixes.houseGarden);if((L||m)&&a0(_,or,Kn,ri,Xr,m),u?.name?.startsWith(ke.materials.houseSillFlowers)){c.updateWorldMatrix(!0,!1);let O=new Ve().setFromMatrix4(c.matrixWorld).invert();_f(_,ai,oi.t,O);let I=new ei({depthPacking:Wr,side:Bt});_f(I,ai,oi.t,O),c.customDepthMaterial=I,c.frustumCulled=!1}if(c.material=_,c.userData.basic=_,c.userData.oilTree=p,c.userData.keepPainted=L||R||E||S||c.userData.uniformPlaster||m||f&&!d||v||!p&&(b||g),Fl.push(c),l0(c.name,u?.name)?(c.castShadow=!(Ln&&b),c.receiveShadow=!0,Ln&&b&&$0.push(c),c.name.includes(ke.substrings.house)?Z0(c,Li.pad):(c.name.includes(ke.substrings.bench)||c.name.includes(ke.substrings.clothes))&&Z0(c,.8)):c.receiveShadow=!0,p&&g&&(c.receiveShadow=!0),c.name===ke.nodes.meadow||c.parent?.name===ke.nodes.meadow){let O=t(c).getObjectByName(ke.nodes.meadowTable),I=O&&(O.geometry||O.children[0]?.geometry);if(!I){console.warn("meadow repack: no WEB_meadow_table");return}let C=c.geometry,P=C.userData||{};Cn({type:"stage",stage:"expanding"});let B=P.patterns||[],X={root:I.attributes.position,col:I.attributes.color||null,ph:I.attributes._phase,cnt:I.attributes._count,pat:I.attributes._pattern},U=!!C.attributes.color,V=X.root.count,j=C.attributes.position.count,ie=performance.now();O.updateWorldMatrix(!0,!1);let ve=(O.geometry?O:O.children[0]).matrixWorld,Te=new T,q=new Int16Array(j*4),te=U?null:new Uint8Array(j*3),be=new Uint16Array(j),ae=B.map(z=>z.length/3),Re=Ln&&!un.has("fullmeadow"),_e=0,k=0,Ee=new Uint32Array(V+1),$=new Uint32Array(V+1),re=new Uint16Array(V),ee=new Float32Array(V*3);for(let z=0;z<V;z++){(z&16383)===0&&z&&await If({type:"stage",stage:"expanding",frac:.6*z/V});let fe=Math.round(X.root.getX(z)*32767),ce=Math.round(X.root.getY(z)*32767),de=Math.round(X.root.getZ(z)*32767);Te.set(fe,ce,de).divideScalar(32767).applyMatrix4(ve),ee[z*3]=Te.x,ee[z*3+1]=Te.y,ee[z*3+2]=Te.z;let Ae=X.cnt.getX(z),he=Math.round(X.ph.getX(z)*65535);if(Ee[z]=_e,re[z]=he,$[z]=k,k+=Ae,!(Re&&he>=32768)){for(let Me=0;Me<Ae;Me++){let Le=(_e+Me)*4;q[Le]=fe,q[Le+1]=ce,q[Le+2]=de,be[_e+Me]=he}if(te){let Me=Math.round(X.col.getX(z)*255),Le=Math.round(X.col.getY(z)*255),xe=Math.round(X.col.getZ(z)*255);for(let pe=0;pe<Ae;pe++)te[(_e+pe)*3]=Me,te[(_e+pe)*3+1]=Le,te[(_e+pe)*3+2]=xe}_e+=Ae}}Ee[V]=_e,$[V]=k,k!==j&&console.warn("meadow repack: vertex count mismatch",k,j);let ue=z=>Ee[z+1]>Ee[z];{let z=new T,fe=new ht,ce=new T;ve.decompose(z,fe,ce),Math.abs(fe.w)<.9999&&console.warn("meadow repack: the table node is rotated; roots will be off"),zl.c.value.copy(z),zl.h.value.copy(ce)}C.attributes._height&&!C.attributes._height4&&(C.setAttribute("_height4",C.attributes._height),C.deleteAttribute("_height"));let se={},we=z=>{let fe=z.isInterleavedBufferAttribute?z.data.array:z.array,ce=z.itemSize,de=z.isInterleavedBufferAttribute?z.data.stride:ce,Ae=z.isInterleavedBufferAttribute?z.offset:0,he=new fe.constructor(_e*ce);for(let Me=0;Me<V;Me++){let Le=Ee[Me+1]-Ee[Me];if(!Le)continue;let xe=Ee[Me]*ce,pe=$[Me]*de+Ae;for(let Fe=0;Fe<Le;Fe++,xe+=ce,pe+=de)for(let ze=0;ze<ce;ze++)he[xe+ze]=fe[pe+ze]}return new Oe(he,ce,z.normalized)};for(let[z,fe]of Object.entries(C.attributes))se[z]=Re?we(fe):fe;Re&&await If(),se._root3q=new xn(new Hn(Re?q.subarray(0,_e*4):q,4),3,0,!0),se._phase=new Oe(Re?be.subarray(0,_e):be,1,!0),te&&(se.color=new Oe(Re?te.subarray(0,_e*3):te,3,!0));let Pe=(z,fe,ce)=>z.isInterleavedBufferAttribute?new xn(z.data,z.itemSize,z.offset+fe*z.data.stride,z.normalized):new Oe(z.array.subarray(fe*z.itemSize,ce*z.itemSize),z.itemSize,z.normalized),N=I.userData||{},A=N.bladeChunks&&N.bladeChunks.length?N.bladeChunks:[{bladeStart:0,bladeCount:V}],W=[];for(let z=0;z<A.length;z++){let fe=A[z],ce=fe.bladeStart+fe.bladeCount,de=[-1e9,-1e9,-1e9],Ae=[1e9,1e9,1e9];for(let xe=fe.bladeStart;xe<ce;xe++)for(let pe=0;pe<3;pe++){let Fe=ee[xe*3+pe];Fe>de[pe]&&(de[pe]=Fe),Fe<Ae[pe]&&(Ae[pe]=Fe)}let he=fe.max?[0,1,2].map(xe=>Math.max(fe.max[xe]-de[xe],Ae[xe]-fe.min[xe],0)):[1,1,1],Me=Math.ceil(fe.bladeCount/4),Le=fe.bladeStart;for(;Le<ce;){let xe=Le,pe=0;for(;xe<ce&&xe-Le<Me;){let Ue=Ee[xe+1]-Ee[xe];if(pe+Ue>65535)break;pe+=Ue,xe++}xe===Le&&(xe=Le+1);let Fe=xe-Le,ze=new Float64Array(Fe);for(let Ue=0;Ue<Fe;Ue++)ze[Ue]=re[Le+Ue]*1048576+Ue;ze.sort();let st=0;for(let Ue=Le;Ue<xe;Ue++)ue(Ue)&&(st+=ae[X.pat.getX(Ue)]||0);let We=new Uint16Array(st*3),M=new Float32Array(Fe),H=new Uint32Array(Fe),K=Ee[Le],le=Ee[xe],me=0;for(let Ue=0;Ue<Fe;Ue++){let at=Le+ze[Ue]%1048576,Xe=re[at];if(ue(at)){let _t=B[X.pat.getX(at)],ft=Ee[at]-K;for(let Mn=0;Mn<_t.length;Mn++)We[me++]=ft+_t[Mn]}M[Ue]=Xe===65535?0:Math.fround(Xe/65535),H[Ue]=me}let qe=[0,1,2].map(Ue=>{let at=1e9;for(let Xe=Le;Xe<xe;Xe++)at=Math.min(at,ee[Xe*3+Ue]);return at-he[Ue]}),Je=[0,1,2].map(Ue=>{let at=-1e9;for(let Xe=Le;Xe<xe;Xe++)at=Math.max(at,ee[Xe*3+Ue]);return at+he[Ue]});W.push({vA:K,vB:le,index:We,min:qe,max:Je,lodR1:M,lodEnd:H}),Le=xe}await If({type:"stage",stage:"expanding",frac:.6+.4*(z+1)/A.length})}O.removeFromParent(),I.dispose(),$e.meadow=performance.now(),console.info(`meadow repack: ${V} blades, ${Re?_e+" of "+j+" verts (phone: half the blades)":j+" verts"}, ${B.length} patterns, ${W.length} sub-chunks (uint16) expanded in ${(performance.now()-ie).toFixed(0)} ms`),c.updateWorldMatrix(!0,!1);let ne=new T;c.matrixWorld.decompose(new T,new ht,ne),_.vertexColors=!0,_.needsUpdate=!0,ar(_,"blade",!0,ne.toArray(),!0,!0,!0);let oe=[];W.forEach((z,fe)=>{let ce=new Ge;for(let[he,Me]of Object.entries(se))ce.setAttribute(he,Pe(Me,z.vA,z.vB));ce.setIndex(new Oe(z.index,1));let de=new dt;de.min.set(...z.min).divide(c.scale),de.max.set(...z.max).divide(c.scale),ce.boundingBox=de,ce.boundingSphere=de.getBoundingSphere(new wt),ce.userData=C.userData;let Ae;fe===0?(Ae=c,c.geometry=ce):(Ae=new it(ce,c.material),Ae.name=c.name+"_c"+fe,Ae.userData=c.userData,Ae.castShadow=c.castShadow,Ae.receiveShadow=c.receiveShadow,c.parent.add(Ae),Ae.position.copy(c.position),Ae.quaternion.copy(c.quaternion),Ae.scale.copy(c.scale),Fl.push(Ae)),oe.push(Ae),ro.push({mesh:Ae,c:z})}),C.dispose(),console.info(`blades: ${oe.length} frustum-culled sub-chunks`),c.userData.keepPainted=!0,c.userData.shadowRole={material:u?.name,cast:!1,receive:!0,response:"meadow"};return}if(c.name===ke.nodes.meadowTable||c.parent?.name===ke.nodes.meadowTable){c.visible=!1;return}let w=(u?.name||"").startsWith(ke.prefixes.housePart);if(f&&!d&&!m&&!L&&!w){c.updateWorldMatrix(!0,!1);let O=new T;c.matrixWorld.decompose(new T,new ht,O),b1(c,ir.points,O),ar(_,"blade",!!c.geometry.attributes._height,O.toArray(),!!c.geometry.attributes._phase,!!c.geometry.attributes._root),c.geometry.attributes._root||console.warn("meadow: no _root attribute - blade LOD inactive (run scripts/optimize_glb.sh)"),v1(c),c.geometry.attributes._phase||console.warn("meadow: no _phase attribute in the GLB - blades fall back to a patch-scale pseudo-random (re-export for per-blade wind)")}else if(v){c.updateWorldMatrix(!0,!1);let O=new T;c.matrixWorld.decompose(new T,new ht,O),ar(_,"petal",!!c.geometry.attributes._flower_flex,O.toArray(),!1,!!c.geometry.attributes._flower_root);let I=new ei({depthPacking:Wr,map:d,alphaTest:.5,side:Bt});ar(I,"petal",!!c.geometry.attributes._flower_flex,O.toArray(),!1,!!c.geometry.attributes._flower_root),I.customProgramCacheKey=()=>"petal-depth-v172",c.customDepthMaterial=I,c.castShadow=!0}else if(c.parent&&c.parent.name===ke.nodes.island&&d&&!v&&!m)d1(_),Li.grid||setTimeout(()=>{Li.grid||o1(c)},1500);else if(c.name===ke.nodes.tree||b){let O=tb(c);Lt.init(O);{let P=c.geometry.attributes.position,B=O.min.y+.04*(O.max.y-O.min.y),X=0,U=0,V=0;for(let j=0;j<P.count;j++)P.getY(j)<=B&&(X+=P.getX(j),U+=P.getZ(j),V++);Li.trunk={x:V?X/V:Lt.cx,z:V?U/V:Lt.cz,r:2.2,top:Lt.base+.55*Lt.height},console.log(`tree: root (${Li.trunk.x.toFixed(2)}, ${Li.trunk.z.toFixed(2)}) from ${V} verts, crown centre (${Lt.cx.toFixed(2)}, ${Lt.cz.toFixed(2)}), ${Lt.height.toFixed(1)} m tall`)}let I=Rf(c.geometry);ar(_,"tree",!1,[1,1,1],!1,!1,!1,I);let C=new ei({depthPacking:Wr,side:Bt});if(ar(C,"tree",!1,[1,1,1],!1,!1,!1,I),C.customProgramCacheKey=()=>"wood-depth-v166",b&&Pn(c.geometry,"_sroot")){let P=(B,X)=>{let U=B.onBeforeCompile;B.onBeforeCompile=V=>{U&&U(V),V.uniforms.uCrownMask=jr.mask,V.uniforms.uCrownBox=jr.box,V.vertexShader=Ll+l1+`varying vec3 vBarkWorld;
`+V.vertexShader.replace("#include <project_vertex>",h1+`
 vBare = _bare; vBarkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#include <project_vertex>`),X&&(V.fragmentShader=Ll+`varying float vBare; varying vec3 vBarkWorld;
`+V.fragmentShader.replace("#include <map_fragment>",`
              { vec2 cm = clamp((vBarkWorld.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
                if (vBarkWorld.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.45) discard;
                if (vBare > 0.5) discard; }
              #include <map_fragment>`))}};P(_,!0),P(C,!1),C.customProgramCacheKey=()=>"wood-depth-v224"}c.customDepthMaterial=C}else if(x){let O=tb(c);Lt.init(O);let I=Rf(c.geometry);ar(_,"tree",Pn(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,I),p&&g&&u1(d);let C=_.onBeforeCompile;if(_.onBeforeCompile=P=>{if(C&&C(P),p){P.uniforms.uOilSun=or,P.uniforms.uOilLive=Xr,P.uniforms.uCanopyC=Pl.centers,P.uniforms.uCanopyR=Pl.radii,P.uniforms.uCanopyRight=Pl.right,P.uniforms.uCanopyDepth=Pl.depth;let B=`uniform vec3 uCanopyC[6]; uniform vec3 uCanopyR[6];
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
`+B,U=Pn(c.geometry,"_leaf_pivot")?eb:"";U&&(P.uniforms.uCrownMask=jr.mask,P.uniforms.uCrownBox=jr.box);let V=Pn(c.geometry,"_leaf_seed");P.vertexShader=X+(U?Ll:"")+`varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed;
`+P.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
 vOilNormal = inverseTransformDirection(normalize(transformedNormal), viewMatrix);`).replace("#include <project_vertex>",`${U}
             vOilPosition = (modelMatrix * vec4(transformed,1.0)).xyz;
             vCanopyVis = canopyTransmission(${Pn(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"}, normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)));
             // which side of the crown this leaf is on, lit (+1) to shade (-1).
             // the
             // form light comes from the upper right, so the split runs top
             // to underside, not just right to left
             vSunSide = dot(normalize(${Pn(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"} - vec3(uTreeC.x, uTreeBase + 0.72 * uTreeH, uTreeC.y)), normalize(normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)) + vec3(0.0, 0.8, 0.0)));
             vLeafSeed = ${V?"_leaf_seed":"0.5"};
             #include <project_vertex>`),P.fragmentShader=ri+B+`uniform vec3 uOilSun; uniform float uOilLive; varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed; varying float vLightBias;
            `+P.fragmentShader.replace("#include <map_fragment>",Q0).replace("#include <opaque_fragment>",`
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
              #include <opaque_fragment>`)}P.fragmentShader=P.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
  totalEmissiveRadiance *= vColor.rgb;
#endif`)},p){let P=new ei({depthPacking:Wr,map:d,alphaTest:.5,side:Bt});ar(P,"tree",Pn(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,I);let B=P.onBeforeCompile;P.onBeforeCompile=X=>{B(X),Pn(c.geometry,"_leaf_pivot")&&(X.uniforms.uCrownMask=jr.mask,X.uniforms.uCrownBox=jr.box,X.vertexShader=Ll+X.vertexShader.replace("#include <project_vertex>",eb+`
#include <project_vertex>`)),X.fragmentShader=X.fragmentShader.replace("#include <map_fragment>",Q0)},P.customProgramCacheKey=()=>"leaf-depth-v223-"+c.name,c.customDepthMaterial=P}_.customProgramCacheKey=()=>"treecards-"+c.name,console.log(`tree cards: ${c.geometry.attributes.position.count} verts, tint ${f?"COLOR_0":"none"}, canopy ${Lt.height.toFixed(1)} m x ${Lt.uWidth.value.toFixed(1)} m`)}else c.name.includes(ke.substrings.clothes)&&(tn.pending=c);let y=f&&!d&&!m&&!L&&!(u?.name||"").startsWith(ke.prefixes.housePart)||v,F=c.userData.uniformPlaster||E||S||R||L||m||x||y;F||c0(_,or,Kn,Xr,{wind:c.name===ke.nodes.tree||b,turf:c.parent?.name===ke.nodes.island,glass:!!u?.name?.startsWith(ke.prefixes.houseWindow),roof:u?.name===ke.materials.roofPaint1||u?.name===ke.materials.roofPaint2,bark:b,soft:c.name.includes(ke.substrings.clothes),trim:u?.name===ke.materials.houseRoofEdgeTrim,houseCentre:new T(...yf.center)}),c.userData.keepPainted=!0,c.userData.shadowRole={material:u?.name,cast:c.castShadow,receive:c.receiveShadow,response:x?"translucent canopy":y?"meadow":F?"authored sun/fill":"shared sun/fill"},sr&&!y&&!x&&!v&&!c.name.includes(ke.substrings.clothes)&&c.geometry.index&&c.geometry.index.count>=q0*3&&sr.push(c)},i=[];e.traverse(c=>{c.isMesh&&i.push(c)});let r=[];for(let c of i){Gl=performance.now();let h=performance.now();await n(c),wn&&r.push([c.name,Math.round(performance.now()-h)])}wn&&($e.visits=r.sort((c,h)=>h[1]-c[1]).slice(0,8)),$e.visited=performance.now(),ut.add(e);let a=async()=>{let c=performance.now(),h;try{h=await Ef({url:n1,abs:i1,blob:null,cache:!0},()=>{})}catch(u){console.error("island_meadow.glb failed to load",u);return}$e.meadowFetched=performance.now(),nb.parse(h,"./",async u=>{h=null;let d=u.scene;u=null,d.userData.terrainProfile!==Kr.version&&console.warn("meadow: terrain profile "+d.userData.terrainProfile+" vs the core's "+Kr.version);let f=[];d.traverse(m=>{m.isMesh&&f.push(m)});for(let m of f)Gl=performance.now(),await n(m);io.useWorkers(0),oo.value=un.has("capture")?1:0,ut.add(d),js(d,new Set),$e.meadowReady=performance.now(),console.info(`meadow: fetched in ${Math.round($e.meadowFetched-c)} ms, built in ${Math.round($e.meadowReady-$e.meadowFetched)} ms, ${Math.round($e.meadowReady-$e.ready)} ms after ready`)},u=>console.error("island_meadow.glb could not be parsed",u))};yb(e),$e.twigs=performance.now();{let c=e.getObjectByName(ke.nodes.house);if(c){c.updateWorldMatrix(!0,!1);let h=c.localToWorld(new T(2.229,0,1.097)),u=new T(1,0,0).transformDirection(c.matrixWorld),d=new Y(u.x,u.z).normalize();Hl.c.value.set(h.x,h.z,d.x,d.y),Hl.half.value.set(.85+.06,.393+.06)}}console.info("shadow-audit-v166 "+JSON.stringify(Fl.map(c=>({name:c.name,...c.userData.shadowRole,movingDepth:!!c.customDepthMaterial}))));{let c=e.getObjectByName(ke.nodes.island),h=new dt().setFromObject(c||e);ai.init(h)}window.S=ut,window.RENDERER=mt,window.CAM=nn,window.CTRL=Bf,window.PHYS={Wind:lo,Grass:ai,Tree:Lt,Cloth:tn},Lb(!0),$e.halve0=performance.now(),Ln&&_0(ut,Ks,1024),$e.halve=performance.now();let o=sr&&sr.length?X0(ut,sr):[],l=js(ut,new Set([(tn.mesh||tn.pending)&&(tn.mesh||tn.pending).geometry,...o.map(c=>c.geometry)]));console.info(`memory: ${(l/1048576).toFixed(0)} MB of CPU geometry copies released after upload`),$e.release=performance.now(),(async()=>{Cn({type:"stage",stage:"warming"});let c=1e9;$e.warm=[];for(let d=0;d<12&&!(d>=3&&c<25);d++){let f=performance.now();Hf(),c=performance.now()-f,$e.warm.push(Math.round(c)),await new Promise(m=>setTimeout(m,0))}$e.warmed=performance.now(),Sf(ut,mt,Ks),setTimeout(()=>Sf(ut,mt,Ks),15e3),$e.ready=performance.now();let h=(d,f)=>Math.round($e[f]-$e[d]);console.info(`load: fetch ${h("t0","fetched")} ms, parse ${h("fetched","parsed")} ms, build ${h("parsed","visited")} ms, finish ${h("visited","ready")} ms (warm-up included)`),window.T_LOAD=$e;let u=document.getElementById("loading");if(u.style.opacity=0,setTimeout(()=>u.remove(),700),Cn({type:"ready"}),Cb.ready(),setTimeout(()=>document.body.classList.add("ready"),wl?1800:300),wn&&un.get("off")){let d=new Set(un.get("off").split(","));if(d.has("post")&&Pb(!1),d.has("mirror")&&(si.noMirror=!0),d.has("shadow")&&(mt.shadowMap.enabled=!1),d.has("meadow"))for(let{mesh:f}of ro)f.visible=!1;d.has("tree")&&ut.traverse(f=>{f.isMesh&&f.geometry.attributes._tree_id&&(f.visible=!1)}),d.has("water")&&Di&&(Di.visible=!1),console.info("off: "+[...d].join(", "))}a(),sr&&sr.length&&($e.lightenPending=!0,j0(sr,o,{workerUrl:new URL("./simplify-worker.js?v="+ci,import.meta.url).href}).then(d=>{$e.lightened=d,console.info("lightened (phone): "+d.map(f=>`${f[0]} ${f[1]} -> ${f[2]} tris`).join("; ")+` in ${d[0]?d[0][3]:0} ms`)},d=>{console.warn("lightening failed; the phone keeps every triangle",d),js(ut,new Set([(tn.mesh||tn.pending)&&(tn.mesh||tn.pending).geometry]))}).finally(()=>{$e.lightenPending=!1,$e.lighten=performance.now()})),cr.readyAt=performance.now(),tn.pending&&setTimeout(()=>{let d=tn.pending;tn.pending=null;let f=performance.now();tn.init(d),console.info(`cloth rig built after ready in ${Math.round(performance.now()-f)} ms`)},400),un.get("tier")==="phone"&&Ii.wholeLadder()})()},s=>{console.error("island_world.glb failed to parse",s),Xs("The island could not load."),Cn({type:"error",message:"The island could not load."})});addEventListener("resize",()=>{nn.aspect=innerWidth/innerHeight,nn.fov=co.fov0=ub(nn.aspect),nn.updateProjectionMatrix(),db(),mt.setPixelRatio(Ii.fitDpr(Ii.dpr)),mt.setSize(innerWidth,innerHeight)});var Rb=!0,ql=T0({renderer:mt,samples:wn&&+un.get("msaa")||(Ln?0:2)}),Cb=M0({renderer:mt,scene:ut,extraTextures:Ks,build:ci,overlay:un.has("stats"),tier:()=>({memory:Ln,touch:document.body.classList.contains("touch"),applied:cr.applied,ladderOn:cr.on}),load:()=>$e,targets:()=>{let s=mt.domElement,e=[{name:"canvas",w:s.width,h:s.height,bpp:8}];if(e.push(...ql.targets()),Di){let t=Di.getRenderTarget();e.push({name:"mirror",w:t.width,h:t.height,bpp:8})}return Dl.light&&Dl.light.shadow.map&&e.push({name:"shadow",w:Dl.light.shadow.mapSize.x,h:Dl.light.shadow.mapSize.y,bpp:8}),e}});matchMedia("(prefers-reduced-motion: reduce)").matches&&(oi.on=!1);pb();function Pb(s){Rb=s}var{SUN:Dl,placeSun:_1,setLiveLight:Lb,updateShadowMapSize:y1,updateShadowUniforms:w1}=U0({scene:ut,oilSun:or,plasterLive:Xr,visibleSunOn:Uf,shadow:Kn,knobs:si});if(wn){let{installDevPanel:s}=await Promise.resolve().then(()=>(Y0(),K0));await s({Vector3:T,MathUtils:Jt,camera:nn,FLY:co,setCamMode:a1,restoreHero:zf,LOOKAT:fb,HOME_DROP:lb,postMat:ql.material,Wind:lo,WIND:oi,placeSun:_1,HORIZON:r1,applyHorizon:db,scene:ut,COLLIDE:Li,groundY:mb,windowVariants:_l,TERRAIN_PROFILE:Kr,setPainterly:Pb,setLiveLight:Lb,VISIBLE_SUN:Vl,BUILD:ci})}var M1=document.getElementById("fps"),Il=0,Nf=performance.now(),ib=0,Nl=performance.now();mt.setAnimationLoop(()=>{if(Il++,kl.touchActive&&Il&1)return;let e=performance.now(),t=Math.min((e-Nl)/1e3,1/30);cr.on&&cr.readyAt&&e-cr.readyAt>3e3&&Ii.tierStep(e-Nl,e,kl.touchActive?40:30),cr.readyAt&&Cb.frame(e-Nl),Nl=e,oo.value<1&&(oo.value=Math.min(1,oo.value+t/1.2)),oi.on&&(ib+=t,lo.step(t),ai.step(t),Lt.step(t),tn.step(t)),oi.t.value=ib,co.on?bb(t):vb(t),Ys&&Ys.updateCamera(nn),Di&&(Di.position.y=.02,wb.level.value=.02),e-Nf>=500&&(M1.textContent=`${Math.round(Il*1e3/(e-Nf))} fps \xB7 wind ${lo.U.toFixed(1)} m/s`,Il=0,Nf=e),co.on||(Bf.update(),gb(null)),g1(e),Hf()});var S1=0;function Hf(){Ln&&(mt.shadowMap.autoUpdate=!1,mt.shadowMap.needsUpdate=S1++%3===0),Ys&&Ys.updateCamera(nn),y1(),w1(),p0(oi.t.value),Bl.value=si.lodOff?0:1,si.mirrorKeep!==void 0&&(Wl.value=si.mirrorKeep),wf(nn,1,Bl.value>=.5,si.lodRangeOff),Rb?ql.render(ut,nn,si):mt.render(ut,nn)}window.RENDER_ONCE=Hf;window.STEP=s=>{co.on?bb(s):vb(s)};rb();
