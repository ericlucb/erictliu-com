var Dv=Object.defineProperty;var Iv=(s,e,t)=>()=>{if(t)throw t[0];try{return s&&(e=s(s=0)),e}catch(n){throw t=[n],n}};var ip=(s,e)=>{for(var t in e)Dv(s,t,{get:e[t],enumerable:!0})};var K0={};ip(K0,{installDevPanel:()=>qS});async function qS(s){let{Vector3:e,MathUtils:t,camera:n,FLY:i,setCamMode:r,restoreHero:a,LOOKAT:o,HOME_DROP:c,postMat:l,Wind:h,WIND:u,placeSun:d,HORIZON:f,applyHorizon:m,scene:v,COLLIDE:g,groundY:p,windowVariants:x,TERRAIN_PROFILE:b,setPainterly:_,setLiveLight:R,VISIBLE_SUN:S,BUILD:C}=s;document.body.insertAdjacentHTML("beforeend",WS);let L=E=>document.getElementById(E);function y(E,D,U,q=2){let k=L(E);k.addEventListener("input",()=>{L(D).textContent=(+k.value).toFixed(q),U(+k.value)})}y("c-mix","o-mix",E=>l.uniforms.uMix.value=E),y("c-rad","o-rad",E=>l.uniforms.uRadius.value=E,0),y("c-edge","o-edge",E=>l.uniforms.uEdge.value=E),y("c-grain","o-grain",E=>l.uniforms.uGrain.value=E),y("c-sat","o-sat",E=>l.uniforms.uSat.value=E),y("c-cel","o-cel",E=>l.uniforms.uCel.value=E),y("c-sepia","o-sepia",E=>l.uniforms.uSepia.value=E),L("c-wind").addEventListener("change",()=>u.on=L("c-wind").checked),L("c-wind").checked=u.on,y("c-wspd","o-wspd",E=>h.mean=E,1),y("c-sun","o-sun",E=>d(E)),y("c-hz","o-hz",E=>{f.shift=E,m()},3),y("c-hcone","o-hcone",E=>v.heroCone=E,0),y("c-hnear","o-hnear",E=>v.heroNear=E),L("c-cam").addEventListener("change",()=>r(L("c-cam").value)),L("c-shore").addEventListener("click",()=>{r("fly");let E=new e(-7.5,.25,-21.1),D=new e(-13.5,4.8,-31).sub(E).multiplyScalar(Math.max(1,.9/n.aspect)).add(E);o(...D.toArray(),...E.toArray())}),L("c-hero").addEventListener("click",a),L("c-house").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(1.5126,4.443,-1.6429),D=new e(10.0855,4.943,6.8075).sub(E).multiplyScalar(Math.max(1,1.5/n.aspect)).add(E);D.y+=c,E.y+=c,o(...D.toArray(),...E.toArray())}),L("c-rear").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(-5.0129,5.793,-7.1303),D=new e(-25.8342,8.893,-18.1064).sub(E).multiplyScalar(Math.max(1,1.5/n.aspect)).add(E);D.y+=c,E.y+=c,o(...D.toArray(),...E.toArray())});let w=await fetch("./rear-remodel-cameras.json?v="+C).then(E=>E.json());for(let E of Object.values(w))for(let D of["eye","target"])E[D][1]+=c;for(let[E,D]of[["c-chimney","chimney"],["c-chimney-back","chimney_reverse"],["c-rear-detail","rear_detail"]])L(E).addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=50,n.updateProjectionMatrix();let U=w[D],q=new e(...U.target),k=new e(...U.eye).sub(q).multiplyScalar(Math.max(1,.9/n.aspect)).add(q);o(...k.toArray(),...q.toArray())});L("c-gable").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(2.4011,5.793,-9.3231),D=new e(14.2643,8.493,-28.0919).sub(E).multiplyScalar(Math.max(1,1.5/n.aspect)).add(E);D.y+=c,E.y+=c,o(...D.toArray(),...E.toArray())}),L("c-pier").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(-7.8551,.2,-19.7783),D=new e(-13.3603,1.05,-24.1752).sub(E).multiplyScalar(Math.max(1,1.35/n.aspect)).add(E);o(...D.toArray(),...E.toArray())}),L("c-path").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(-5.8992,2.543,-8.8731),D=new e(-9.8791,3.893,-12.2198).sub(E).multiplyScalar(Math.max(1,1.2/n.aspect)).add(E);D.y+=c,E.y+=c,o(...D.toArray(),...E.toArray())}),L("c-flowers").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let E=new e(16.0026,1.64,2.9909),D=new e(16.4526,2.02,4.0409).sub(E).multiplyScalar(Math.max(1,1.2/n.aspect)).add(E);D.y=Math.max(D.y,p(D.x,D.z)+g.eye+.02),o(...D.toArray(),...E.toArray())});let P=await fetch("./front-approach-camera.json").then(E=>E.json());for(let E of[P])for(let D of["eye","target"])E[D][1]+=c;L("c-entry").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let E=new e(...P.target),D=new e(...P.eye).sub(E).multiplyScalar(Math.max(1,1.15/n.aspect)).add(E);o(...D.toArray(),...E.toArray())});for(let[E,D]of Object.entries(x.views)){let U=document.createElement("option");U.value=E,U.textContent=D.label,L("c-window-variant").appendChild(U)}L("c-window-variant").addEventListener("change",()=>{let E=x.views[L("c-window-variant").value];if(!E)return;r("fly"),n.clearViewOffset(),n.fov=i.fov0=E.fov,n.updateProjectionMatrix();let D=[...E.eye];D[1]=Math.max(D[1],p(D[0],D[2])+g.eye+.05),o(...D,...E.target)});let O=await fetch("./joinery-cameras.json").then(E=>E.json());for(let E of Object.values(O))for(let D of["eye","target"])E[D][1]+=c;L("c-eave").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let E=O.window_angle;o(E.eye[0]+.8,E.eye[1]+1.15,E.eye[2]+1.3,E.target[0],E.target[1]+1.15,E.target[2])});for(let E of["window_detail","window_angle","door_detail"])L("c-"+E.replace("_","-")).addEventListener("click",()=>{let D=O[E];r("fly"),n.clearViewOffset(),n.fov=i.fov0=D.fov,n.updateProjectionMatrix();let U=[...D.eye];U[1]=Math.max(U[1],p(U[0],U[2])+g.eye+.05),o(...U,...D.target)});let N=await fetch("./review-cameras.json?v="+C).then(E=>E.json());L("c-review").addEventListener("change",()=>{let E=L("c-review").value;if(E==="hero_camera"){a();return}if(E==="tree_reference"){r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(24.1758/240)),n.updateProjectionMatrix(),o(23.94,8.462,116.774,28.936,8.462,-3.122);return}let D=N[E];D&&(r("fly"),n.clearViewOffset(),n.fov=i.fov0=t.radToDeg(2*Math.atan(36/(2*D.lens*n.aspect))),n.updateProjectionMatrix(),o(...D.eye,...D.target))}),L("c-plaster").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(11.65,5.15,-6.06,5.665,3.64,-6.579)}),L("c-bench").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(17,4,5.2,23.42,2.2,3.25)}),L("c-tree").addEventListener("click",()=>{r("fly");let E=new e(30,8,-.5),D=new e(26,10.5,32).sub(E).multiplyScalar(Math.max(1,.8/n.aspect)).add(E);D.y+=b.offsets.WEB_HM_tree_og,E.y+=b.offsets.WEB_HM_tree_og,o(...D.toArray(),...E.toArray())}),L("c-laundry").addEventListener("click",()=>{r("fly"),n.clearViewOffset();let E=new e(11.5,3.25,-7.7),D=new e(10.5,3.7,1.2).sub(E).multiplyScalar(Math.max(1,1.3/n.aspect)).add(E);D.y+=b.offsets.WEB_HM_clothes_line,E.y+=b.offsets.WEB_HM_clothes_line,o(...D.toArray(),...E.toArray())}),L("c-tree-side").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix();let E=new e(31,9.8,-3),D=new e(51,11,-2).sub(E).multiplyScalar(Math.max(1,.8/n.aspect)).add(E);D.y+=b.offsets.WEB_HM_tree_og,E.y+=b.offsets.WEB_HM_tree_og,o(...D.toArray(),...E.toArray())}),L("c-twigs").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=50,n.updateProjectionMatrix(),o(29.2,12.6,3.8,30.5,12.5,-.6)}),L("c-bark").addEventListener("click",()=>{r("fly"),o(25.5,5,8.5,29.2,4.5,-2.3)}),L("c-leaves").addEventListener("click",()=>{r("fly"),o(27,13,9,31,13,-.5)}),L("c-on").addEventListener("change",()=>_(L("c-on").checked)),L("c-sun-view").addEventListener("click",()=>{r("fly"),n.clearViewOffset(),n.fov=i.fov0=40,n.updateProjectionMatrix();let E=n.position.clone(),D=E.clone().addScaledVector(S.value,100);o(...E.toArray(),...D.toArray())}),L("c-light").addEventListener("change",()=>R(L("c-light").value==="sun"))}var WS,Y0=Iv(()=>{WS=`<details id="panel" class="hud-panel">
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
</details>`});var ai={};ip(ai,{ACESFilmicToneMapping:()=>pg,AddEquation:()=>Ki,AddOperation:()=>hg,AdditiveAnimationBlendMode:()=>kd,AdditiveBlending:()=>zh,AgXToneMapping:()=>gg,AlphaFormat:()=>wg,AlwaysCompare:()=>Bg,AlwaysDepth:()=>ig,AlwaysStencilFunc:()=>gu,AmbientLight:()=>il,AnimationAction:()=>fl,AnimationClip:()=>Ii,AnimationLoader:()=>Gu,AnimationMixer:()=>rd,AnimationObjectGroup:()=>id,AnimationUtils:()=>QM,ArcCurve:()=>Tc,ArrayCamera:()=>_c,ArrowHelper:()=>Ed,AttachedBindMode:()=>Gh,Audio:()=>ul,AudioAnalyser:()=>td,AudioContext:()=>eo,AudioListener:()=>Qu,AudioLoader:()=>Zu,AxesHelper:()=>Ad,BackSide:()=>Vt,BasicDepthPacking:()=>Lg,BasicShadowMap:()=>Ov,BatchedMesh:()=>Sc,Bone:()=>Vr,BooleanKeyframeTrack:()=>Li,Box2:()=>dd,Box3:()=>ft,Box3Helper:()=>Md,BoxGeometry:()=>kr,BoxHelper:()=>wd,BufferAttribute:()=>Be,BufferGeometry:()=>He,BufferGeometryLoader:()=>ll,ByteType:()=>xg,Cache:()=>Mi,Camera:()=>Ls,CameraHelper:()=>yd,CanvasTexture:()=>ka,CapsuleGeometry:()=>Ic,CatmullRomCurve3:()=>Rc,CineonToneMapping:()=>fg,CircleGeometry:()=>zs,ClampToEdgeWrapping:()=>Ht,Clock:()=>hl,Color:()=>ge,ColorKeyframeTrack:()=>Ja,ColorManagement:()=>st,CompressedArrayTexture:()=>Uu,CompressedCubeTexture:()=>ku,CompressedTexture:()=>ks,CompressedTextureLoader:()=>Wu,ConeGeometry:()=>Nc,ConstantAlphaFactor:()=>eg,ConstantColorFactor:()=>$m,CubeCamera:()=>bc,CubeReflectionMapping:()=>Ai,CubeRefractionMapping:()=>Ji,CubeTexture:()=>Br,CubeTextureLoader:()=>qu,CubeUVReflectionMapping:()=>qs,CubicBezierCurve:()=>Ba,CubicBezierCurve3:()=>Cc,CubicInterpolant:()=>el,CullFaceBack:()=>Bh,CullFaceFront:()=>Um,CullFaceFrontBack:()=>Fv,CullFaceNone:()=>Om,Curve:()=>_n,CurvePath:()=>Dc,CustomBlending:()=>km,CustomToneMapping:()=>mg,CylinderGeometry:()=>$i,Cylindrical:()=>ud,Data3DTexture:()=>La,DataArrayTexture:()=>Rs,DataTexture:()=>gn,DataTextureLoader:()=>Xu,DataUtils:()=>Vd,DecrementStencilOp:()=>Wv,DecrementWrapStencilOp:()=>Xv,DefaultLoadingManager:()=>r0,DepthFormat:()=>Nr,DepthStencilFormat:()=>As,DepthTexture:()=>Hr,DetachedBindMode:()=>bg,DirectionalLight:()=>tr,DirectionalLightHelper:()=>_d,DiscreteInterpolant:()=>tl,DisplayP3ColorSpace:()=>vl,DodecahedronGeometry:()=>Fc,DoubleSide:()=>zt,DstAlphaFactor:()=>jm,DstColorFactor:()=>Ym,DynamicCopyUsage:()=>ob,DynamicDrawUsage:()=>tb,DynamicReadUsage:()=>rb,EdgesGeometry:()=>Oc,EllipseCurve:()=>Bs,EqualCompare:()=>Fg,EqualDepth:()=>sg,EqualStencilFunc:()=>Jv,EquirectangularReflectionMapping:()=>ya,EquirectangularRefractionMapping:()=>wa,Euler:()=>bn,EventDispatcher:()=>vn,ExtrudeGeometry:()=>Uc,FileLoader:()=>hn,Float16BufferAttribute:()=>Su,Float32BufferAttribute:()=>Te,FloatType:()=>on,Fog:()=>Ds,FogExp2:()=>yc,FramebufferTexture:()=>Ou,FrontSide:()=>Un,Frustum:()=>zr,GLBufferAttribute:()=>cd,GLSL1:()=>lb,GLSL3:()=>Ra,GreaterCompare:()=>Og,GreaterDepth:()=>og,GreaterEqualCompare:()=>kg,GreaterEqualDepth:()=>ag,GreaterEqualStencilFunc:()=>eb,GreaterStencilFunc:()=>$v,GridHelper:()=>bd,Group:()=>cn,HalfFloatType:()=>Wn,HemisphereLight:()=>Hs,HemisphereLightHelper:()=>vd,IcosahedronGeometry:()=>kc,ImageBitmapLoader:()=>Qa,ImageLoader:()=>jr,ImageUtils:()=>gc,IncrementStencilOp:()=>Gv,IncrementWrapStencilOp:()=>qv,InstancedBufferAttribute:()=>Hn,InstancedBufferGeometry:()=>cl,InstancedInterleavedBuffer:()=>od,InstancedMesh:()=>Fs,Int16BufferAttribute:()=>wu,Int32BufferAttribute:()=>Mu,Int8BufferAttribute:()=>xu,IntType:()=>Ld,InterleavedBuffer:()=>zn,InterleavedBufferAttribute:()=>xn,Interpolant:()=>Pi,InterpolateDiscrete:()=>Ur,InterpolateLinear:()=>Zi,InterpolateSmooth:()=>fc,InvertStencilOp:()=>jv,KeepStencilOp:()=>Ar,KeyframeTrack:()=>yn,LOD:()=>Mc,LatheGeometry:()=>Wa,Layers:()=>Cs,LessCompare:()=>Ng,LessDepth:()=>rg,LessEqualCompare:()=>zd,LessEqualDepth:()=>_a,LessEqualStencilFunc:()=>Zv,LessStencilFunc:()=>Yv,Light:()=>si,LightProbe:()=>al,Line:()=>En,Line3:()=>fd,LineBasicMaterial:()=>Ut,LineCurve:()=>za,LineCurve3:()=>Pc,LineDashedMaterial:()=>Qc,LineLoop:()=>Os,LineSegments:()=>ln,LinearDisplayP3ColorSpace:()=>ro,LinearFilter:()=>lt,LinearInterpolant:()=>Ya,LinearMipMapLinearFilter:()=>zv,LinearMipMapNearestFilter:()=>Bv,LinearMipmapLinearFilter:()=>pn,LinearMipmapNearestFilter:()=>Ir,LinearSRGBColorSpace:()=>kt,LinearToneMapping:()=>ug,LinearTransfer:()=>Sa,Loader:()=>Wt,LoaderUtils:()=>Gn,LoadingManager:()=>Za,LoopOnce:()=>Rg,LoopPingPong:()=>Pg,LoopRepeat:()=>Cg,LuminanceAlphaFormat:()=>Eg,LuminanceFormat:()=>Sg,MOUSE:()=>nr,Material:()=>Tt,MaterialLoader:()=>ol,MathUtils:()=>rn,Matrix3:()=>Ve,Matrix4:()=>Pe,MaxEquation:()=>Vm,Mesh:()=>rt,MeshBasicMaterial:()=>It,MeshDepthMaterial:()=>ti,MeshDistanceMaterial:()=>Fa,MeshLambertMaterial:()=>Zc,MeshMatcapMaterial:()=>$c,MeshNormalMaterial:()=>Jc,MeshPhongMaterial:()=>Kc,MeshPhysicalMaterial:()=>nn,MeshStandardMaterial:()=>er,MeshToonMaterial:()=>Yc,MinEquation:()=>Hm,MirroredRepeatWrapping:()=>Or,MixOperation:()=>lg,MultiplyBlending:()=>Vh,MultiplyOperation:()=>to,NearestFilter:()=>xt,NearestMipMapLinearFilter:()=>kv,NearestMipMapNearestFilter:()=>Uv,NearestMipmapLinearFilter:()=>Yi,NearestMipmapNearestFilter:()=>no,NeutralToneMapping:()=>vg,NeverCompare:()=>Ig,NeverDepth:()=>ng,NeverStencilFunc:()=>Kv,NoBlending:()=>Si,NoColorSpace:()=>Fn,NoToneMapping:()=>On,NormalAnimationBlendMode:()=>gl,NormalBlending:()=>Dr,NotEqualCompare:()=>Ug,NotEqualDepth:()=>cg,NotEqualStencilFunc:()=>Qv,NumberKeyframeTrack:()=>ni,Object3D:()=>nt,ObjectLoader:()=>Ju,ObjectSpaceNormalMap:()=>Dg,OctahedronGeometry:()=>Ka,OneFactor:()=>Wm,OneMinusConstantAlphaFactor:()=>tg,OneMinusConstantColorFactor:()=>Qm,OneMinusDstAlphaFactor:()=>Km,OneMinusDstColorFactor:()=>Jm,OneMinusSrcAlphaFactor:()=>mc,OneMinusSrcColorFactor:()=>Xm,OrthographicCamera:()=>ei,P3Primaries:()=>Aa,PCFShadowMap:()=>Cd,PCFSoftShadowMap:()=>pl,PMREMGenerator:()=>Na,Path:()=>Wr,PerspectiveCamera:()=>bt,Plane:()=>an,PlaneGeometry:()=>Ri,PlaneHelper:()=>Sd,PointLight:()=>Gs,PointLightHelper:()=>gd,Points:()=>Us,PointsMaterial:()=>Gr,PolarGridHelper:()=>xd,PolyhedronGeometry:()=>Qi,PositionalAudio:()=>ed,PropertyBinding:()=>ot,PropertyMixer:()=>dl,QuadraticBezierCurve:()=>Ha,QuadraticBezierCurve3:()=>Va,Quaternion:()=>dt,QuaternionKeyframeTrack:()=>Vn,QuaternionLinearInterpolant:()=>nl,RED_GREEN_RGTC2_Format:()=>pu,RED_RGTC1_Format:()=>Tg,REVISION:()=>Nv,RGBADepthPacking:()=>Kr,RGBAFormat:()=>$t,RGBAIntegerFormat:()=>Ud,RGBA_ASTC_10x10_Format:()=>cu,RGBA_ASTC_10x5_Format:()=>su,RGBA_ASTC_10x6_Format:()=>au,RGBA_ASTC_10x8_Format:()=>ou,RGBA_ASTC_12x10_Format:()=>lu,RGBA_ASTC_12x12_Format:()=>hu,RGBA_ASTC_4x4_Format:()=>Zh,RGBA_ASTC_5x4_Format:()=>$h,RGBA_ASTC_5x5_Format:()=>Qh,RGBA_ASTC_6x5_Format:()=>eu,RGBA_ASTC_6x6_Format:()=>tu,RGBA_ASTC_8x5_Format:()=>nu,RGBA_ASTC_8x6_Format:()=>iu,RGBA_ASTC_8x8_Format:()=>ru,RGBA_BPTC_Format:()=>dc,RGBA_ETC2_EAC_Format:()=>Jh,RGBA_PVRTC_2BPPV1_Format:()=>jh,RGBA_PVRTC_4BPPV1_Format:()=>Xh,RGBA_S3TC_DXT1_Format:()=>lc,RGBA_S3TC_DXT3_Format:()=>hc,RGBA_S3TC_DXT5_Format:()=>uc,RGBFormat:()=>Mg,RGB_BPTC_SIGNED_Format:()=>uu,RGB_BPTC_UNSIGNED_Format:()=>du,RGB_ETC1_Format:()=>Kh,RGB_ETC2_Format:()=>Yh,RGB_PVRTC_2BPPV1_Format:()=>qh,RGB_PVRTC_4BPPV1_Format:()=>Wh,RGB_S3TC_DXT1_Format:()=>cc,RGFormat:()=>Ag,RGIntegerFormat:()=>Od,RawShaderMaterial:()=>jc,Ray:()=>Qn,Raycaster:()=>ld,Rec709Primaries:()=>Ea,RectAreaLight:()=>rl,RedFormat:()=>Nd,RedIntegerFormat:()=>Fd,ReinhardToneMapping:()=>dg,RenderTarget:()=>vc,RepeatWrapping:()=>kn,ReplaceStencilOp:()=>Vv,ReverseSubtractEquation:()=>zm,RingGeometry:()=>Bc,SIGNED_RED_GREEN_RGTC2_Format:()=>mu,SIGNED_RED_RGTC1_Format:()=>fu,SRGBColorSpace:()=>mt,SRGBTransfer:()=>gt,Scene:()=>Ci,ShaderChunk:()=>ze,ShaderLib:()=>Nn,ShaderMaterial:()=>Gt,ShadowMaterial:()=>Xc,Shape:()=>Ei,ShapeGeometry:()=>zc,ShapePath:()=>Td,ShapeUtils:()=>$n,ShortType:()=>_g,Skeleton:()=>Ns,SkeletonHelper:()=>md,SkinnedMesh:()=>Is,Source:()=>yi,Sphere:()=>wt,SphereGeometry:()=>Xr,Spherical:()=>Ws,SphericalHarmonics3:()=>sl,SplineCurve:()=>Ga,SpotLight:()=>Vs,SpotLightHelper:()=>pd,Sprite:()=>wc,SpriteMaterial:()=>Ua,SrcAlphaFactor:()=>pc,SrcAlphaSaturateFactor:()=>Zm,SrcColorFactor:()=>qm,StaticCopyUsage:()=>ab,StaticDrawUsage:()=>Ta,StaticReadUsage:()=>ib,StereoCamera:()=>$u,StreamCopyUsage:()=>cb,StreamDrawUsage:()=>nb,StreamReadUsage:()=>sb,StringKeyframeTrack:()=>Di,SubtractEquation:()=>Bm,SubtractiveBlending:()=>Hh,TOUCH:()=>ir,TangentSpaceNormalMap:()=>rr,TetrahedronGeometry:()=>Hc,Texture:()=>Mt,TextureLoader:()=>ri,TorusGeometry:()=>Vc,TorusKnotGeometry:()=>Gc,Triangle:()=>wi,TriangleFanDrawMode:()=>js,TriangleStripDrawMode:()=>io,TrianglesDrawMode:()=>Bd,TubeGeometry:()=>Wc,UVMapping:()=>ml,Uint16BufferAttribute:()=>Da,Uint32BufferAttribute:()=>Ia,Uint8BufferAttribute:()=>_u,Uint8ClampedBufferAttribute:()=>yu,Uniform:()=>sd,UniformsGroup:()=>ad,UniformsLib:()=>_e,UniformsUtils:()=>bl,UnsignedByteType:()=>Bn,UnsignedInt248Type:()=>Xs,UnsignedInt5999Type:()=>yg,UnsignedIntType:()=>Ti,UnsignedShort4444Type:()=>Dd,UnsignedShort5551Type:()=>Id,UnsignedShortType:()=>Pd,VSMShadowMap:()=>Jn,Vector2:()=>j,Vector3:()=>T,Vector4:()=>$e,VectorKeyframeTrack:()=>ii,VideoTexture:()=>Fu,WebGL3DRenderTarget:()=>bu,WebGLArrayRenderTarget:()=>vu,WebGLCoordinateSystem:()=>Zn,WebGLCubeRenderTarget:()=>xc,WebGLMultipleRenderTargets:()=>Rd,WebGLRenderTarget:()=>Nt,WebGLRenderer:()=>Oa,WebGLUtils:()=>Zg,WebGPUCoordinateSystem:()=>Ca,WireframeGeometry:()=>qc,WrapAroundEnding:()=>Ma,ZeroCurvatureEnding:()=>Cr,ZeroFactor:()=>Gm,ZeroSlopeEnding:()=>Pr,ZeroStencilOp:()=>Hv,createCanvasElement:()=>Hg});var Nv="164",nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Om=0,Bh=1,Um=2,Fv=3,Ov=0,Cd=1,pl=2,Jn=3,Un=0,Vt=1,zt=2,Si=0,Dr=1,zh=2,Hh=3,Vh=4,km=5,Ki=100,Bm=101,zm=102,Hm=103,Vm=104,Gm=200,Wm=201,qm=202,Xm=203,pc=204,mc=205,jm=206,Km=207,Ym=208,Jm=209,Zm=210,$m=211,Qm=212,eg=213,tg=214,ng=0,ig=1,rg=2,_a=3,sg=4,ag=5,og=6,cg=7,to=0,lg=1,hg=2,On=0,ug=1,dg=2,fg=3,pg=4,mg=5,gg=6,vg=7,Gh="attached",bg="detached",ml=300,Ai=301,Ji=302,ya=303,wa=304,qs=306,kn=1e3,Ht=1001,Or=1002,xt=1003,no=1004,Uv=1004,Yi=1005,kv=1005,lt=1006,Ir=1007,Bv=1007,pn=1008,zv=1008,Bn=1009,xg=1010,_g=1011,Pd=1012,Ld=1013,Ti=1014,on=1015,Wn=1016,Dd=1017,Id=1018,Xs=1020,yg=35902,wg=1021,Mg=1022,$t=1023,Sg=1024,Eg=1025,Nr=1026,As=1027,Nd=1028,Fd=1029,Ag=1030,Od=1031,Ud=1033,cc=33776,lc=33777,hc=33778,uc=33779,Wh=35840,qh=35841,Xh=35842,jh=35843,Kh=36196,Yh=37492,Jh=37496,Zh=37808,$h=37809,Qh=37810,eu=37811,tu=37812,nu=37813,iu=37814,ru=37815,su=37816,au=37817,ou=37818,cu=37819,lu=37820,hu=37821,dc=36492,uu=36494,du=36495,Tg=36283,fu=36284,pu=36285,mu=36286,Rg=2200,Cg=2201,Pg=2202,Ur=2300,Zi=2301,fc=2302,Cr=2400,Pr=2401,Ma=2402,gl=2500,kd=2501,Bd=0,io=1,js=2,Lg=3200,Kr=3201,rr=0,Dg=1,Fn="",mt="srgb",kt="srgb-linear",vl="display-p3",ro="display-p3-linear",Sa="linear",gt="srgb",Ea="rec709",Aa="p3",Hv=0,Ar=7680,Vv=7681,Gv=7682,Wv=7683,qv=34055,Xv=34056,jv=5386,Kv=512,Yv=513,Jv=514,Zv=515,$v=516,Qv=517,eb=518,gu=519,Ig=512,Ng=513,Fg=514,zd=515,Og=516,Ug=517,kg=518,Bg=519,Ta=35044,tb=35048,nb=35040,ib=35045,rb=35049,sb=35041,ab=35046,ob=35050,cb=35042,lb="100",Ra="300 es",Zn=2e3,Ca=2001,vn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rp=1234567,Fr=Math.PI/180,Ts=180/Math.PI;function mn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[s&255]+Yt[s>>8&255]+Yt[s>>16&255]+Yt[s>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Hd(s,e){return(s%e+e)%e}function hb(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ub(s,e,t){return s!==e?(t-s)/(e-s):0}function ga(s,e,t){return(1-t)*s+t*e}function db(s,e,t,n){return ga(s,e,1-Math.exp(-t*n))}function fb(s,e=1){return e-Math.abs(Hd(s,e*2)-e)}function pb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function mb(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function gb(s,e){return s+Math.floor(Math.random()*(e-s+1))}function vb(s,e){return s+Math.random()*(e-s)}function bb(s){return s*(.5-Math.random())}function xb(s){s!==void 0&&(rp=s);let e=rp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _b(s){return s*Fr}function yb(s){return s*Ts}function wb(s){return(s&s-1)===0&&s!==0}function Mb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Sb(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Eb(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*m,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*m,o*l);break;case"ZYZ":s.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function je(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var rn={DEG2RAD:Fr,RAD2DEG:Ts,generateUUID:mn,clamp:At,euclideanModulo:Hd,mapLinear:hb,inverseLerp:ub,lerp:ga,damp:db,pingpong:fb,smoothstep:pb,smootherstep:mb,randInt:gb,randFloat:vb,randFloatSpread:bb,seededRandom:xb,degToRad:_b,radToDeg:yb,isPowerOfTwo:wb,ceilPowerOfTwo:Mb,floorPowerOfTwo:Sb,setQuaternionFromProperEuler:Eb,normalize:je,denormalize:tn},j=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=i[0],g=i[3],p=i[6],x=i[1],b=i[4],_=i[7],R=i[2],S=i[5],C=i[8];return r[0]=a*v+o*x+c*R,r[3]=a*g+o*b+c*S,r[6]=a*p+o*_+c*C,r[1]=l*v+h*x+u*R,r[4]=l*g+h*b+u*S,r[7]=l*p+h*_+u*C,r[2]=d*v+f*x+m*R,r[5]=d*g+f*b+m*S,r[8]=d*p+f*_+m*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*r-o*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(th.makeScale(e,t)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,t){return this.premultiply(th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},th=new Ve;function zg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}var Ab={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ys(s,e){return new Ab[s](e)}function Pa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Hg(){let s=Pa("canvas");return s.style.display="block",s}var sp={};function Vg(s){s in sp||(sp[s]=!0,console.warn(s))}var ap=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),op=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),go={[kt]:{transfer:Sa,primaries:Ea,toReference:s=>s,fromReference:s=>s},[mt]:{transfer:gt,primaries:Ea,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ro]:{transfer:Sa,primaries:Aa,toReference:s=>s.applyMatrix3(op),fromReference:s=>s.applyMatrix3(ap)},[vl]:{transfer:gt,primaries:Aa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(op),fromReference:s=>s.applyMatrix3(ap).convertLinearToSRGB()}},Tb=new Set([kt,ro]),st={enabled:!0,_workingColorSpace:kt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Tb.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=go[e].toReference,i=go[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return go[s].primaries},getTransfer:function(s){return s===Fn?Sa:go[s].transfer}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qr,gc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qr===void 0&&(Qr=Pa("canvas")),Qr.width=e.width,Qr.height=e.height;let n=Qr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ss(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rb=0,yi=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ih(i[a].image)):r.push(ih(i[a]))}else r=ih(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?gc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cb=0,Mt=class s extends vn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ht,i=Ht,r=lt,a=pn,o=$t,c=Bn,l=s.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=mn(),this.name="",this.source=new yi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ml)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kn:e.x=e.x-Math.floor(e.x);break;case Ht:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kn:e.y=e.y-Math.floor(e.y);break;case Ht:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null;Mt.DEFAULT_MAPPING=ml;Mt.DEFAULT_ANISOTROPY=1;var $e=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,_=(f+1)/2,R=(p+1)/2,S=(h+d)/4,C=(u+v)/4,L=(m+g)/4;return b>_&&b>R?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=S/n,r=C/n):_>R?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=S/i,r=L/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=L/r),this.set(n,i,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends vn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new yi(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nt=class extends vc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rs=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vu=class extends Nt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Rs(null,e,t,n),this.texture.isRenderTargetTexture=!0}},La=class extends Mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=Ht,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bu=class extends Nt{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new La(null,e,t,n),this.texture.isRenderTargetTexture=!0}},dt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],f=r[a+1],m=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*v,x=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let R=Math.sqrt(b),S=Math.atan2(R,p*x);g=Math.sin(g*S)/R,o=Math.sin(o*S)/R}let _=o*x;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+v*_,g===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rh=new T,cp=new dt,ft=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),bo.subVectors(this.max,na),es.subVectors(e.a,na),ts.subVectors(e.b,na),ns.subVectors(e.c,na),zi.subVectors(ts,es),Hi.subVectors(ns,ts),pr.subVectors(es,ns);let t=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-pr.z,pr.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,pr.z,0,-pr.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-pr.y,pr.x,0];return!sh(t,es,ts,ns,bo)||(t=[1,0,0,0,1,0,0,0,1],!sh(t,es,ts,ns,bo))?!1:(xo.crossVectors(zi,Hi),t=[xo.x,xo.y,xo.z],sh(t,es,ts,ns,bo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},pi=[new T,new T,new T,new T,new T,new T,new T,new T],Ln=new T,vo=new ft,es=new T,ts=new T,ns=new T,zi=new T,Hi=new T,pr=new T,na=new T,bo=new T,xo=new T,mr=new T;function sh(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){mr.fromArray(s,r);let o=i.x*Math.abs(mr.x)+i.y*Math.abs(mr.y)+i.z*Math.abs(mr.z),c=e.dot(mr),l=t.dot(mr),h=n.dot(mr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Pb=new ft,ia=new T,ah=new T,wt=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Pb.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);let t=ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ia,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(ah)),this.expandByPoint(ia.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},mi=new T,oh=new T,_o=new T,Vi=new T,ch=new T,yo=new T,lh=new T,Qn=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){oh.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_o),o=Vi.dot(this.direction),c=-Vi.dot(_o),l=Vi.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oh).addScaledVector(_o,d),f}intersectSphere(e,t){mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,r){ch.subVectors(t,e),yo.subVectors(n,e),lh.crossVectors(ch,yo);let a=this.direction.dot(lh),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vi.subVectors(this.origin,e);let c=o*this.direction.dot(yo.crossVectors(Vi,yo));if(c<0)return null;let l=o*this.direction.dot(ch.cross(Vi));if(l<0||c+l>a)return null;let h=-o*Vi.dot(lh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class s{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,m,v,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,v,g)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,m,v,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d+v*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lb,e,Db)}lookAt(e,t,n){let i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Gi.crossVectors(n,dn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Gi.crossVectors(n,dn)),Gi.normalize(),wo.crossVectors(dn,Gi),i[0]=Gi.x,i[4]=wo.x,i[8]=dn.x,i[1]=Gi.y,i[5]=wo.y,i[9]=dn.y,i[2]=Gi.z,i[6]=wo.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],x=n[3],b=n[7],_=n[11],R=n[15],S=i[0],C=i[4],L=i[8],y=i[12],w=i[1],P=i[5],O=i[9],N=i[13],E=i[2],D=i[6],U=i[10],q=i[14],k=i[3],J=i[7],ee=i[11],re=i[15];return r[0]=a*S+o*w+c*E+l*k,r[4]=a*C+o*P+c*D+l*J,r[8]=a*L+o*O+c*U+l*ee,r[12]=a*y+o*N+c*q+l*re,r[1]=h*S+u*w+d*E+f*k,r[5]=h*C+u*P+d*D+f*J,r[9]=h*L+u*O+d*U+f*ee,r[13]=h*y+u*N+d*q+f*re,r[2]=m*S+v*w+g*E+p*k,r[6]=m*C+v*P+g*D+p*J,r[10]=m*L+v*O+g*U+p*ee,r[14]=m*y+v*N+g*q+p*re,r[3]=x*S+b*w+_*E+R*k,r[7]=x*C+b*P+_*D+R*J,r[11]=x*L+b*O+_*U+R*ee,r[15]=x*y+b*N+_*q+R*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],v=e[7],g=e[11],p=e[15];return m*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+v*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+g*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],v=e[13],g=e[14],p=e[15],x=u*g*l-v*d*l+v*c*f-o*g*f-u*c*p+o*d*p,b=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,_=h*v*l-m*u*l+m*o*f-a*v*f-h*o*p+a*u*p,R=m*u*c-h*v*c-m*o*d+a*v*d+h*o*g-a*u*g,S=t*x+n*b+i*_+r*R;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return e[0]=x*C,e[1]=(v*d*r-u*g*r-v*i*f+n*g*f+u*i*p-n*d*p)*C,e[2]=(o*g*r-v*c*r+v*i*l-n*g*l-o*i*p+n*c*p)*C,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*C,e[4]=b*C,e[5]=(h*g*r-m*d*r+m*i*f-t*g*f-h*i*p+t*d*p)*C,e[6]=(m*c*r-a*g*r-m*i*l+t*g*l+a*i*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*C,e[8]=_*C,e[9]=(m*u*r-h*v*r-m*n*f+t*v*f+h*n*p-t*u*p)*C,e[10]=(a*v*r-m*o*r+m*n*l-t*v*l-a*n*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*C,e[12]=R*C,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*g+t*u*g)*C,e[14]=(m*o*i-a*v*i-m*n*c+t*v*c+a*n*g-t*o*g)*C,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,v=a*h,g=a*u,p=o*u,x=c*l,b=c*h,_=c*u,R=n.x,S=n.y,C=n.z;return i[0]=(1-(v+p))*R,i[1]=(f+_)*R,i[2]=(m-b)*R,i[3]=0,i[4]=(f-_)*S,i[5]=(1-(d+p))*S,i[6]=(g+x)*S,i[7]=0,i[8]=(m+b)*C,i[9]=(g-x)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=is.set(i[0],i[1],i[2]).length(),a=is.set(i[4],i[5],i[6]).length(),o=is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Dn.copy(this);let l=1/r,h=1/a,u=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,t.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Zn){let c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),f,m;if(o===Zn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ca)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Zn){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h,m,v;if(o===Zn)m=(a+r)*u,v=-2*u;else if(o===Ca)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},is=new T,Dn=new Pe,Lb=new T(0,0,0),Db=new T(1,1,1),Gi=new T,wo=new T,dn=new T,lp=new Pe,hp=new dt,bn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ib=0,up=new T,rs=new dt,gi=new Pe,Mo=new T,ra=new T,Nb=new T,Fb=new dt,dp=new T(1,0,0),fp=new T(0,1,0),pp=new T(0,0,1),mp={type:"added"},Ob={type:"removed"},ss={type:"childadded",child:null},hh={type:"childremoved",child:null},nt=class s extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ib++}),this.uuid=mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new T,t=new bn,n=new dt,i=new T(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ve}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(dp,e)}rotateY(e){return this.rotateOnAxis(fp,e)}rotateZ(e){return this.rotateOnAxis(pp,e)}translateOnAxis(e,t){return up.copy(e).applyQuaternion(this.quaternion),this.position.add(up.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dp,e)}translateY(e){return this.translateOnAxis(fp,e)}translateZ(e){return this.translateOnAxis(pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Mo.copy(e):Mo.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(ra,Mo,this.up):gi.lookAt(Mo,ra,this.up),this.quaternion.setFromRotationMatrix(gi),i&&(gi.extractRotation(i.matrixWorld),rs.setFromRotationMatrix(gi),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mp),ss.child=e,this.dispatchEvent(ss),ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ob),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mp),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++){let o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};nt.DEFAULT_UP=new T(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=new T,vi=new T,uh=new T,bi=new T,as=new T,os=new T,gp=new T,dh=new T,fh=new T,ph=new T,wi=class s{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),In.subVectors(e,t),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){In.subVectors(i,t),vi.subVectors(n,t),uh.subVectors(e,t);let a=In.dot(In),o=In.dot(vi),c=In.dot(uh),l=vi.dot(vi),h=vi.dot(uh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,bi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,bi.x),c.addScaledVector(a,bi.y),c.addScaledVector(o,bi.z),c)}static isFrontFacing(e,t,n,i){return In.subVectors(n,t),vi.subVectors(e,t),In.cross(vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),In.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;as.subVectors(i,n),os.subVectors(r,n),dh.subVectors(e,n);let c=as.dot(dh),l=os.dot(dh);if(c<=0&&l<=0)return t.copy(n);fh.subVectors(e,i);let h=as.dot(fh),u=os.dot(fh);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(as,a);ph.subVectors(e,r);let f=as.dot(ph),m=os.dot(ph);if(m>=0&&f<=m)return t.copy(r);let v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(os,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return gp.subVectors(r,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(gp,o);let p=1/(g+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},So={h:0,s:0,l:0};function mh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ge=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Hd(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mh(a,r,e+1/3),this.g=mh(a,r,e),this.b=mh(a,r,e-1/3)}return st.toWorkingColorSpace(this,i),this}setStyle(e,t=mt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mt){let n=Gg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=nh(e.r),this.g=nh(e.g),this.b=nh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mt){return st.fromWorkingColorSpace(Jt.copy(this),e),Math.round(At(Jt.r*255,0,255))*65536+Math.round(At(Jt.g*255,0,255))*256+Math.round(At(Jt.b*255,0,255))}getHexString(e=mt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(Jt.copy(this),t);let n=Jt.r,i=Jt.g,r=Jt.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=mt){st.fromWorkingColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,i=Jt.b;return e!==mt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(So);let n=ga(Wi.h,So.h,t),i=ga(Wi.s,So.s,t),r=ga(Wi.l,So.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new ge;ge.NAMES=Gg;var Ub=0,Tt=class extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=mn(),this.name="",this.type="Material",this.blending=Dr,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pc,this.blendDst=mc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pc&&(n.blendSrc=this.blendSrc),this.blendDst!==mc&&(n.blendDst=this.blendDst),this.blendEquation!==Ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},It=class extends Tt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_i=kb();function kb(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function sn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=At(s,-65504,65504),_i.floatView[0]=s;let e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function pa(s){let e=s>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(s&1023)]+_i.exponentTable[e],_i.floatView[0]}var Vd={toHalfFloat:sn,fromHalfFloat:pa},Dt=new T,Eo=new j,Be=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vg("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Eo.fromBufferAttribute(this,t),Eo.applyMatrix3(e),this.setXY(t,Eo.x,Eo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),e}},xu=class extends Be{constructor(e,t,n){super(new Int8Array(e),t,n)}},_u=class extends Be{constructor(e,t,n){super(new Uint8Array(e),t,n)}},yu=class extends Be{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}},wu=class extends Be{constructor(e,t,n){super(new Int16Array(e),t,n)}},Da=class extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Mu=class extends Be{constructor(e,t,n){super(new Int32Array(e),t,n)}},Ia=class extends Be{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Su=class extends Be{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=pa(this.array[e*this.itemSize]);return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize]=sn(t),this}getY(e){let t=pa(this.array[e*this.itemSize+1]);return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+1]=sn(t),this}getZ(e){let t=pa(this.array[e*this.itemSize+2]);return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+2]=sn(t),this}getW(e){let t=pa(this.array[e*this.itemSize+3]);return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.array[e*this.itemSize+3]=sn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.array[e+0]=sn(t),this.array[e+1]=sn(n),this.array[e+2]=sn(i),this.array[e+3]=sn(r),this}},Te=class extends Be{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bb=0,Sn=new Pe,gh=new nt,cs=new T,fn=new ft,sa=new ft,Bt=new T,He=class s extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bb++}),this.uuid=mn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zg(e)?Ia:Da)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return gh.lookAt(e),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Te(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,sa.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,sa.max),fn.expandByPoint(Bt)):(fn.expandByPoint(sa.min),fn.expandByPoint(sa.max))}fn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Bt.fromBufferAttribute(o,l),c&&(cs.fromBufferAttribute(e,l),Bt.add(cs)),i=Math.max(i,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new T,c[L]=new T;let l=new T,h=new T,u=new T,d=new j,f=new j,m=new j,v=new T,g=new T;function p(L,y,w){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,w),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,w),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[L].add(v),o[y].add(v),o[w].add(v),c[L].add(g),c[y].add(g),c[w].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let L=0,y=x.length;L<y;++L){let w=x[L],P=w.start,O=w.count;for(let N=P,E=P+O;N<E;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let b=new T,_=new T,R=new T,S=new T;function C(L){R.fromBufferAttribute(i,L),S.copy(R);let y=o[L];b.copy(y),b.sub(R.multiplyScalar(R.dot(y))).normalize(),_.crossVectors(S,y);let P=_.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,P)}for(let L=0,y=x.length;L<y;++L){let w=x[L],P=w.start,O=w.count;for(let N=P,E=P+O;N<E;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Be(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let v=0,g=c.length;v<g;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Be(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vp=new Pe,gr=new Qn,Ao=new wt,bp=new T,ls=new T,hs=new T,us=new T,vh=new T,To=new T,Ro=new j,Co=new j,Po=new j,xp=new T,_p=new T,yp=new T,Lo=new T,Do=new T,rt=class extends nt{constructor(e=new He,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(vh.fromBufferAttribute(u,e),a?To.addScaledVector(vh,h):To.addScaledVector(vh.sub(t),h))}t.add(To)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(r),gr.copy(e.ray).recast(e.near),!(Ao.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Ao,bp)===null||gr.origin.distanceToSquared(bp)>(e.far-e.near)**2))&&(vp.copy(r).invert(),gr.copy(e.ray).applyMatrix4(vp),!(n.boundingBox!==null&&gr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gr)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,R=b;_<R;_+=3){let S=o.getX(_),C=o.getX(_+1),L=o.getX(_+2);i=Io(this,p,e,n,l,h,u,S,C,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=o.getX(g),b=o.getX(g+1),_=o.getX(g+2);i=Io(this,a,e,n,l,h,u,x,b,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),b=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=x,R=b;_<R;_+=3){let S=_,C=_+1,L=_+2;i=Io(this,p,e,n,l,h,u,S,C,L),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){let x=g,b=g+1,_=g+2;i=Io(this,a,e,n,l,h,u,x,b,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function zb(s,e,t,n,i,r,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Un,o),c===null)return null;Do.copy(o),Do.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Do);return l<t.near||l>t.far?null:{distance:l,point:Do.clone(),object:s}}function Io(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ls),s.getVertexPosition(c,hs),s.getVertexPosition(l,us);let h=zb(s,e,t,n,ls,hs,us,Lo);if(h){i&&(Ro.fromBufferAttribute(i,o),Co.fromBufferAttribute(i,c),Po.fromBufferAttribute(i,l),h.uv=wi.getInterpolation(Lo,ls,hs,us,Ro,Co,Po,new j)),r&&(Ro.fromBufferAttribute(r,o),Co.fromBufferAttribute(r,c),Po.fromBufferAttribute(r,l),h.uv1=wi.getInterpolation(Lo,ls,hs,us,Ro,Co,Po,new j)),a&&(xp.fromBufferAttribute(a,o),_p.fromBufferAttribute(a,c),yp.fromBufferAttribute(a,l),h.normal=wi.getInterpolation(Lo,ls,hs,us,xp,_p,yp,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new T,materialIndex:0};wi.getNormal(ls,hs,us,u.normal),h.face=u}return h}var kr=class s extends He{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Te(l,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function m(v,g,p,x,b,_,R,S,C,L,y){let w=_/C,P=R/L,O=_/2,N=R/2,E=S/2,D=C+1,U=L+1,q=0,k=0,J=new T;for(let ee=0;ee<U;ee++){let re=ee*P-N;for(let be=0;be<D;be++){let Re=be*w-O;J[v]=Re*x,J[g]=re*b,J[p]=E,l.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[p]=S>0?1:-1,h.push(J.x,J.y,J.z),u.push(be/C),u.push(1-ee/L),q+=1}}for(let ee=0;ee<L;ee++)for(let re=0;re<C;re++){let be=d+re+D*ee,Re=d+re+D*(ee+1),G=d+(re+1)+D*(ee+1),te=d+(re+1)+D*ee;c.push(be,Re,te),c.push(Re,G,te),k+=6}o.addGroup(f,k,y),f+=k,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ps(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function en(s){let e={};for(let t=0;t<s.length;t++){let n=Ps(s[t]);for(let i in n)e[i]=n[i]}return e}function Hb(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wg(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var bl={clone:Ps,merge:en},Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gt=class extends Tt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Hb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ls=class extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},qi=new T,wp=new j,Mp=new j,bt=class extends Ls{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ts*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qi.x,qi.y).multiplyScalar(-e/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qi.x,qi.y).multiplyScalar(-e/qi.z)}getViewSize(e,t){return this.getViewBounds(e,wp,Mp),t.subVectors(Mp,wp)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,fs=1,bc=class extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new bt(ds,fs,e,t);i.layers=this.layers,this.add(i);let r=new bt(ds,fs,e,t);r.layers=this.layers,this.add(r);let a=new bt(ds,fs,e,t);a.layers=this.layers,this.add(a);let o=new bt(ds,fs,e,t);o.layers=this.layers,this.add(o);let c=new bt(ds,fs,e,t);c.layers=this.layers,this.add(c);let l=new bt(ds,fs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Br=class extends Mt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},xc=class extends Nt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Br(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kr(5,5,5),r=new Gt({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Si});r.uniforms.tEquirect.value=t;let a=new rt(i,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=lt),new bc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},bh=new T,Wb=new T,qb=new Ve,an=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=bh.subVectors(n,t).cross(Wb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qb.getNormalMatrix(e),i=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vr=new wt,No=new T,zr=class{constructor(e=new an,t=new an,n=new an,i=new an,r=new an,a=new an){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],m=i[9],v=i[10],g=i[11],p=i[12],x=i[13],b=i[14],_=i[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+a,d+h,g+m,_+x).normalize(),n[3].setComponents(c-a,d-h,g-m,_-x).normalize(),n[4].setComponents(c-o,d-u,g-v,_-b).normalize(),t===Zn)n[5].setComponents(c+o,d+u,g+v,_+b).normalize();else if(t===Ca)n[5].setComponents(o,u,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){return vr.center.set(0,0,0),vr.radius=.7071067811865476,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(No.x=i.normal.x>0?e.max.x:e.min.x,No.y=i.normal.y>0?e.max.y:e.min.y,No.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function qg(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Xb(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c._updateRange,d=c.updateRanges;if(s.bindBuffer(l,o),u.count===-1&&d.length===0&&s.bufferSubData(l,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){let v=d[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Ri=class s extends He{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let b=0;b<l;b++){let _=b*u-r;m.push(_,-x,0),v.push(0,0,1),g.push(b/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let b=x+l*p,_=x+l*(p+1),R=x+1+l*(p+1),S=x+1+l*p;f.push(b,_,S),f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
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
#endif`,Yb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qb=`#ifdef USE_AOMAP
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
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
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
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ax=`#ifdef USE_IRIDESCENCE
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
#endif`,ox=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
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
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bx=`vec3 transformedNormal = objectNormal;
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
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sx=`
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
}`,Ex=`#ifdef USE_ENVMAP
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
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tx=`#ifdef USE_ENVMAP
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
#endif`,Rx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
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
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kx=`uniform bool receiveShadow;
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
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,zx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
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
#endif`,qx=`struct PhysicalMaterial {
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
}`,Xx=`
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
#endif`,jx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n_=`#if defined( USE_POINTS_UV )
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
#endif`,i_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o_=`#ifdef USE_MORPHNORMALS
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
#endif`,c_=`#ifdef USE_MORPHTARGETS
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
#endif`,l_=`#ifdef USE_MORPHTARGETS
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
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,u_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m_=`#ifdef USE_NORMALMAP
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
#endif`,g_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,__=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,T_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,C_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L_=`float getShadowMask() {
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
}`,D_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I_=`#ifdef USE_SKINNING
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
#endif`,N_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F_=`#ifdef USE_SKINNING
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
#endif`,O_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z_=`#ifdef USE_TRANSMISSION
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
#endif`,H_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,X_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
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
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$_=`#include <common>
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
}`,Q_=`#if DEPTH_PACKING == 3200
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
}`,ey=`#define DISTANCE
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
}`,ty=`#define DISTANCE
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
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
}`,sy=`uniform vec3 diffuse;
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
}`,ay=`#include <common>
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
}`,oy=`uniform vec3 diffuse;
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
}`,cy=`#define LAMBERT
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
}`,ly=`#define LAMBERT
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
}`,hy=`#define MATCAP
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
}`,uy=`#define MATCAP
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
}`,dy=`#define NORMAL
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
}`,fy=`#define NORMAL
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
}`,py=`#define PHONG
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
}`,my=`#define PHONG
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
}`,gy=`#define STANDARD
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
}`,vy=`#define STANDARD
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
}`,by=`#define TOON
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
}`,xy=`#define TOON
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
}`,_y=`uniform float size;
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
}`,yy=`uniform vec3 diffuse;
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
}`,wy=`#include <common>
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
}`,My=`uniform vec3 color;
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
}`,Sy=`uniform float rotation;
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
}`,Ey=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:jb,alphahash_pars_fragment:Kb,alphamap_fragment:Yb,alphamap_pars_fragment:Jb,alphatest_fragment:Zb,alphatest_pars_fragment:$b,aomap_fragment:Qb,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ax,bumpmap_pars_fragment:ox,clipping_planes_fragment:cx,clipping_planes_pars_fragment:lx,clipping_planes_pars_vertex:hx,clipping_planes_vertex:ux,color_fragment:dx,color_pars_fragment:fx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:vx,defaultnormal_vertex:bx,displacementmap_pars_vertex:xx,displacementmap_vertex:_x,emissivemap_fragment:yx,emissivemap_pars_fragment:wx,colorspace_fragment:Mx,colorspace_pars_fragment:Sx,envmap_fragment:Ex,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Tx,envmap_pars_vertex:Rx,envmap_physical_pars_fragment:Bx,envmap_vertex:Cx,fog_vertex:Px,fog_pars_vertex:Lx,fog_fragment:Dx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Nx,lightmap_pars_fragment:Fx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Ux,lights_pars_begin:kx,lights_toon_fragment:zx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:qx,lights_fragment_begin:Xx,lights_fragment_maps:jx,lights_fragment_end:Kx,logdepthbuf_fragment:Yx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:$x,map_fragment:Qx,map_pars_fragment:e_,map_particle_fragment:t_,map_particle_pars_fragment:n_,metalnessmap_fragment:i_,metalnessmap_pars_fragment:r_,morphinstance_vertex:s_,morphcolor_vertex:a_,morphnormal_vertex:o_,morphtarget_pars_vertex:c_,morphtarget_vertex:l_,normal_fragment_begin:h_,normal_fragment_maps:u_,normal_pars_fragment:d_,normal_pars_vertex:f_,normal_vertex:p_,normalmap_pars_fragment:m_,clearcoat_normal_fragment_begin:g_,clearcoat_normal_fragment_maps:v_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:x_,opaque_fragment:__,packing:y_,premultiplied_alpha_fragment:w_,project_vertex:M_,dithering_fragment:S_,dithering_pars_fragment:E_,roughnessmap_fragment:A_,roughnessmap_pars_fragment:T_,shadowmap_pars_fragment:R_,shadowmap_pars_vertex:C_,shadowmap_vertex:P_,shadowmask_pars_fragment:L_,skinbase_vertex:D_,skinning_pars_vertex:I_,skinning_vertex:N_,skinnormal_vertex:F_,specularmap_fragment:O_,specularmap_pars_fragment:U_,tonemapping_fragment:k_,tonemapping_pars_fragment:B_,transmission_fragment:z_,transmission_pars_fragment:H_,uv_pars_fragment:V_,uv_pars_vertex:G_,uv_vertex:W_,worldpos_vertex:q_,background_vert:X_,background_frag:j_,backgroundCube_vert:K_,backgroundCube_frag:Y_,cube_vert:J_,cube_frag:Z_,depth_vert:$_,depth_frag:Q_,distanceRGBA_vert:ey,distanceRGBA_frag:ty,equirect_vert:ny,equirect_frag:iy,linedashed_vert:ry,linedashed_frag:sy,meshbasic_vert:ay,meshbasic_frag:oy,meshlambert_vert:cy,meshlambert_frag:ly,meshmatcap_vert:hy,meshmatcap_frag:uy,meshnormal_vert:dy,meshnormal_frag:fy,meshphong_vert:py,meshphong_frag:my,meshphysical_vert:gy,meshphysical_frag:vy,meshtoon_vert:by,meshtoon_frag:xy,points_vert:_y,points_frag:yy,shadow_vert:wy,shadow_frag:My,sprite_vert:Sy,sprite_frag:Ey},_e={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Nn={basic:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new ge(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([_e.points,_e.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([_e.common,_e.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([_e.sprite,_e.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([_e.common,_e.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([_e.lights,_e.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Nn.physical={uniforms:en([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var Fo={r:0,b:0,g:0},br=new bn,Ay=new Pe;function Ty(s,e,t,n,i,r,a){let o=new ge(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function v(x){let b=!1,_=m(x);_===null?p(o,c):_&&_.isColor&&(p(_,1),b=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function g(x,b){let _=m(b);_&&(_.isCubeTexture||_.mapping===qs)?(h===void 0&&(h=new rt(new kr(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Ps(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),br.copy(b.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(br)),h.material.toneMapped=st.getTransfer(_.colorSpace)!==gt,(u!==_||d!==_.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new rt(new Ri(2,2),new Gt({name:"BackgroundMaterial",uniforms:Ps(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=st.getTransfer(_.colorSpace)!==gt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=s.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Fo,Wg(s)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,b,a)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:v,addToRenderList:g}}function Ry(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(w,P,O,N,E){let D=!1,U=u(N,O,P);r!==U&&(r=U,l(r.object)),D=f(w,N,O,E),D&&m(w,N,O,E),E!==null&&e.update(E,s.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,_(w,P,O,N),E!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function h(w){return s.deleteVertexArray(w)}function u(w,P,O){let N=O.wireframe===!0,E=n[w.id];E===void 0&&(E={},n[w.id]=E);let D=E[P.id];D===void 0&&(D={},E[P.id]=D);let U=D[N];return U===void 0&&(U=d(c()),D[N]=U),U}function d(w){let P=[],O=[],N=[];for(let E=0;E<t;E++)P[E]=0,O[E]=0,N[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:N,object:w,attributes:{},index:null}}function f(w,P,O,N){let E=r.attributes,D=P.attributes,U=0,q=O.getAttributes();for(let k in q)if(q[k].location>=0){let ee=E[k],re=D[k];if(re===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),ee===void 0||ee.attribute!==re||re&&ee.data!==re.data)return!0;U++}return r.attributesNum!==U||r.index!==N}function m(w,P,O,N){let E={},D=P.attributes,U=0,q=O.getAttributes();for(let k in q)if(q[k].location>=0){let ee=D[k];ee===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(ee=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(ee=w.instanceColor));let re={};re.attribute=ee,ee&&ee.data&&(re.data=ee.data),E[k]=re,U++}r.attributes=E,r.attributesNum=U,r.index=N}function v(){let w=r.newAttributes;for(let P=0,O=w.length;P<O;P++)w[P]=0}function g(w){p(w,0)}function p(w,P){let O=r.newAttributes,N=r.enabledAttributes,E=r.attributeDivisors;O[w]=1,N[w]===0&&(s.enableVertexAttribArray(w),N[w]=1),E[w]!==P&&(s.vertexAttribDivisor(w,P),E[w]=P)}function x(){let w=r.newAttributes,P=r.enabledAttributes;for(let O=0,N=P.length;O<N;O++)P[O]!==w[O]&&(s.disableVertexAttribArray(O),P[O]=0)}function b(w,P,O,N,E,D,U){U===!0?s.vertexAttribIPointer(w,P,O,E,D):s.vertexAttribPointer(w,P,O,N,E,D)}function _(w,P,O,N){v();let E=N.attributes,D=O.getAttributes(),U=P.defaultAttributeValues;for(let q in D){let k=D[q];if(k.location>=0){let J=E[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){let ee=J.normalized,re=J.itemSize,be=e.get(J);if(be===void 0)continue;let Re=be.buffer,G=be.type,te=be.bytesPerElement,fe=G===s.INT||G===s.UNSIGNED_INT||J.gpuType===Ld;if(J.isInterleavedBufferAttribute){let se=J.data,ye=se.stride,Ce=J.offset;if(se.isInstancedInterleavedBuffer){for(let B=0;B<k.locationSize;B++)p(k.location+B,se.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let B=0;B<k.locationSize;B++)g(k.location+B);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let B=0;B<k.locationSize;B++)b(k.location+B,re/k.locationSize,G,ee,ye*te,(Ce+re/k.locationSize*B)*te,fe)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<k.locationSize;se++)p(k.location+se,J.meshPerAttribute);w.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<k.locationSize;se++)g(k.location+se);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let se=0;se<k.locationSize;se++)b(k.location+se,re/k.locationSize,G,ee,re*te,re/k.locationSize*se*te,fe)}}else if(U!==void 0){let ee=U[q];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(k.location,ee);break;case 3:s.vertexAttrib3fv(k.location,ee);break;case 4:s.vertexAttrib4fv(k.location,ee);break;default:s.vertexAttrib1fv(k.location,ee)}}}}x()}function R(){L();for(let w in n){let P=n[w];for(let O in P){let N=P[O];for(let E in N)h(N[E].object),delete N[E];delete P[O]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let P=n[w.id];for(let O in P){let N=P[O];for(let E in N)h(N[E].object),delete N[E];delete P[O]}delete n[w.id]}function C(w){for(let P in n){let O=n[P];if(O[w.id]===void 0)continue;let N=O[w.id];for(let E in N)h(N[E].object),delete N[E];delete O[w.id]}}function L(){y(),a=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:R,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function Cy(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u;f++)this.render(l[f],h[f]);else{d.multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];for(let v=0;v<d.length;v++)t.update(m,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Py(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==$t&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){let C=S===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Bn&&n.convert(S)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==on&&!C)}function c(S){if(S==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),v=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:_,maxSamples:R}}function Ly(s){let e=this,t=null,n=0,i=!1,r=!1,a=new an,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||m===null||m.length===0||r&&!g)r?h(null):l();else{let x=r?0:n,b=x*4,_=p.clippingState||null;c.value=_,_=h(m,d,b,f);for(let R=0;R!==b;++R)_[R]=t[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let v=u!==null?u.length:0,g=null;if(v!==0){if(g=c.value,m!==!0||g===null){let p=f+v*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Dy(s){let e=new WeakMap;function t(a,o){return o===ya?a.mapping=Ai:o===wa&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ya||o===wa)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new xc(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ei=class extends Ls{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ws=4,Sp=[.125,.215,.35,.446,.526,.582],Rr=20,xh=new ei,Ep=new ge,_h=null,yh=0,wh=0,Mh=!1,Tr=(1+Math.sqrt(5))/2,ps=1/Tr,Ap=[new T(-Tr,ps,0),new T(Tr,ps,0),new T(-ps,0,Tr),new T(ps,0,Tr),new T(0,Tr,-ps),new T(0,Tr,ps),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Na=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_h,yh,wh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_h=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:lt,minFilter:lt,generateMipmaps:!1,type:Wn,format:$t,colorSpace:kt,depthBuffer:!1},i=Tp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Ny(r,e,t)}return i}_compileMaterial(e){let t=new rt(this._lodPlanes[0],e);this._renderer.compile(t,xh)}_sceneToCubeUV(e,t,n,i){let o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ep),h.toneMapping=On,h.autoClear=!1;let f=new It({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new rt(new kr,f),v=!1,g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(Ep),v=!0);for(let p=0;p<6;p++){let x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let b=this._cubeSize;Oo(i,x*b,p>2?b:0,b,b),h.setRenderTarget(i),v&&h.render(m,o),h.render(e,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ai||e.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new rt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Oo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,xh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ap[(i-r-1)%Ap.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new rt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Rr-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):Rr;g>Rr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Rr}`);let p=[],x=0;for(let C=0;C<Rr;++C){let L=C/v,y=Math.exp(-L*L/2);p.push(y),C===0?x+=y:C<g&&(x+=2*y)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=m,d.mipInt.value=b-n;let _=this._sizeLods[i],R=3*_*(i>b-ws?i-b+ws:0),S=4*(this._cubeSize-_);Oo(t,R,S,3*_,2*_),c.setRenderTarget(t),c.render(u,xh)}};function Iy(s){let e=[],t=[],n=[],i=s,r=s-ws+1+Sp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ws?c=Sp[a-s+ws-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,x=new Float32Array(v*m*f),b=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let S=0;S<f;S++){let C=S%3*2/3-1,L=S>2?0:-1,y=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];x.set(y,v*m*S),b.set(d,g*m*S);let w=[S,S,S,S,S,S];_.set(w,p*m*S)}let R=new He;R.setAttribute("position",new Be(x,v)),R.setAttribute("uv",new Be(b,g)),R.setAttribute("faceIndex",new Be(_,p)),e.push(R),i>ws&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tp(s,e,t){let n=new Nt(s,e,t);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ny(s,e,t){let n=new Float32Array(Rr),i=new T(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Rp(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Cp(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function Fy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ya||c===wa,h=c===Ai||c===Ji;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Na(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new Na(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Oy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Uy(s,e,t,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);for(let m in d.morphAttributes){let v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)e.update(d[m],s.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let v=f[m];for(let g=0,p=v.length;g<p;g++)e.update(v[g],s.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,v=0;if(f!==null){let x=f.array;v=f.version;for(let b=0,_=x.length;b<_;b+=3){let R=x[b+0],S=x[b+1],C=x[b+2];d.push(R,S,S,C,C,R)}}else if(m!==void 0){let x=m.array;v=m.version;for(let b=0,_=x.length/3-1;b<_;b+=3){let R=b+0,S=b+1,C=b+2;d.push(R,S,S,C,C,R)}}else return;let g=new(zg(d)?Ia:Da)(d,1);g.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ky(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;let v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<m;g++)this.render(d[g]/a,f[g]);else{v.multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}}function u(d,f,m,v){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let x=0;x<m;x++)p+=f[x];for(let x=0;x<v.length;x++)t.update(p,n,v[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function By(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zy(s,e,t){let n=new WeakMap,i=new $e;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let S=new Float32Array(_*R*4*u),C=new Rs(S,_,R,u);C.type=on,C.needsUpdate=!0;let L=b*4;for(let w=0;w<u;w++){let P=g[w],O=p[w],N=x[w],E=_*R*4*w;for(let D=0;D<P.count;D++){let U=D*L;f===!0&&(i.fromBufferAttribute(P,D),S[E+U+0]=i.x,S[E+U+1]=i.y,S[E+U+2]=i.z,S[E+U+3]=0),m===!0&&(i.fromBufferAttribute(O,D),S[E+U+4]=i.x,S[E+U+5]=i.y,S[E+U+6]=i.z,S[E+U+7]=0),v===!0&&(i.fromBufferAttribute(N,D),S[E+U+8]=i.x,S[E+U+9]=i.y,S[E+U+10]=i.z,S[E+U+11]=N.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new j(_,R)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Hy(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Hr=class extends Mt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Nr,h!==Nr&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Nr&&(n=Ti),n===void 0&&h===As&&(n=Xs),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Xg=new Mt,jg=new Hr(1,1);jg.compareFunction=zd;var Kg=new Rs,Yg=new La,Jg=new Br,Pp=[],Lp=[],Dp=new Float32Array(16),Ip=new Float32Array(9),Np=new Float32Array(4);function Ks(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Pp[i];if(r===void 0&&(r=new Float32Array(i),Pp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xl(s,e){let t=Lp[e];t===void 0&&(t=new Int32Array(e),Lp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Vy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function Wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function qy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function Xy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Np.set(n),s.uniformMatrix2fv(this.addr,!1,Np),Ot(t,n)}}function jy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Ip.set(n),s.uniformMatrix3fv(this.addr,!1,Ip),Ot(t,n)}}function Ky(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Dp.set(n),s.uniformMatrix4fv(this.addr,!1,Dp),Ot(t,n)}}function Yy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Jy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function Zy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function $y(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function Qy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ew(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function tw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function nw(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function iw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?jg:Xg;t.setTexture2D(e||r,i)}function rw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Yg,i)}function sw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jg,i)}function aw(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kg,i)}function ow(s){switch(s){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return qy;case 35674:return Xy;case 35675:return jy;case 35676:return Ky;case 5124:case 35670:return Yy;case 35667:case 35671:return Jy;case 35668:case 35672:return Zy;case 35669:case 35673:return $y;case 5125:return Qy;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function cw(s,e){s.uniform1fv(this.addr,e)}function lw(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function hw(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function uw(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function dw(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fw(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function pw(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function mw(s,e){s.uniform1iv(this.addr,e)}function gw(s,e){s.uniform2iv(this.addr,e)}function vw(s,e){s.uniform3iv(this.addr,e)}function bw(s,e){s.uniform4iv(this.addr,e)}function xw(s,e){s.uniform1uiv(this.addr,e)}function _w(s,e){s.uniform2uiv(this.addr,e)}function yw(s,e){s.uniform3uiv(this.addr,e)}function ww(s,e){s.uniform4uiv(this.addr,e)}function Mw(s,e,t){let n=this.cache,i=e.length,r=xl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Xg,r[a])}function Sw(s,e,t){let n=this.cache,i=e.length,r=xl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Yg,r[a])}function Ew(s,e,t){let n=this.cache,i=e.length,r=xl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jg,r[a])}function Aw(s,e,t){let n=this.cache,i=e.length,r=xl(t,i);Ft(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kg,r[a])}function Tw(s){switch(s){case 5126:return cw;case 35664:return lw;case 35665:return hw;case 35666:return uw;case 35674:return dw;case 35675:return fw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return bw;case 5125:return xw;case 36294:return _w;case 36295:return yw;case 36296:return ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Sw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Aw}}var Eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}},Au=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tw(t.type)}},Tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function Fp(s,e){s.seq.push(e),s.map[e.id]=e}function Rw(s,e,t){let n=s.name,i=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),a=Sh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Fp(t,l===void 0?new Eu(o,s,e):new Au(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Tu(o),Fp(t,u)),t=u}}}var Es=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Rw(r,a,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Op(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Cw=37297,Pw=0;function Lw(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Dw(s){let e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(s),n;switch(e===t?n="":e===Aa&&t===Ea?n="LinearDisplayP3ToLinearSRGB":e===Ea&&t===Aa&&(n="LinearSRGBToLinearDisplayP3"),s){case kt:case ro:return[n,"LinearTransferOETF"];case mt:case vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Up(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Lw(s.getShaderSource(e),a)}else return i}function Iw(s,e){let t=Dw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nw(s,e){let t;switch(e){case ug:t="Linear";break;case dg:t="Reinhard";break;case fg:t="OptimizedCineon";break;case pg:t="ACESFilmic";break;case gg:t="AgX";break;case vg:t="Neutral";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function Ow(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uw(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ma(s){return s!==""}function kp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(s){return s.replace(kw,zw)}var Bw=new Map;function zw(s,e){let t=ze[e];if(t===void 0){let n=Bw.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}var Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zp(s){return s.replace(Hw,Vw)}function Vw(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hp(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Gw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Cd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===pl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ww(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case Ji:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qw(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===Ji&&(e="ENVMAP_MODE_REFRACTION"),e}function Xw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case to:e="ENVMAP_BLENDING_MULTIPLY";break;case lg:e="ENVMAP_BLENDING_MIX";break;case hg:e="ENVMAP_BLENDING_ADD";break}return e}function jw(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Kw(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Gw(t),l=Ww(t),h=qw(t),u=Xw(t),d=jw(t),f=Fw(t),m=Ow(r),v=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(g=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ze.tonemapping_pars_fragment:"",t.toneMapping!==On?Nw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Iw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Ru(a),a=kp(a,t),a=Bp(a,t),o=Ru(o),o=kp(o,t),o=Bp(o,t),a=zp(a),o=zp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=x+g+a,_=x+p+o,R=Op(i,i.VERTEX_SHADER,b),S=Op(i,i.FRAGMENT_SHADER,_);i.attachShader(v,R),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(P){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(R).trim(),E=i.getShaderInfoLog(S).trim(),D=!0,U=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,R,S);else{let q=Up(i,R,"vertex"),k=Up(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+q+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||E==="")&&(U=!1);U&&(P.diagnostics={runnable:D,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:E,prefix:p}})}i.deleteShader(R),i.deleteShader(S),L=new Es(i,v),y=Uw(i,v)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(v,Cw)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Pw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=S,this}var Yw=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Pu(e),t.set(e,n)),n}},Pu=class{constructor(e){this.id=Yw++,this.code=e,this.usedTimes=0}};function Jw(s,e,t,n,i,r,a){let o=new Cs,c=new Cu,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,w,P,O,N){let E=O.fog,D=N.geometry,U=y.isMeshStandardMaterial?O.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),k=q&&q.mapping===qs?q.image.height:null,J=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=ee!==void 0?ee.length:0,be=0;D.morphAttributes.position!==void 0&&(be=1),D.morphAttributes.normal!==void 0&&(be=2),D.morphAttributes.color!==void 0&&(be=3);let Re,G,te,fe;if(J){let tt=Nn[J];Re=tt.vertexShader,G=tt.fragmentShader}else Re=y.vertexShader,G=y.fragmentShader,c.update(y),te=c.getVertexShaderID(y),fe=c.getFragmentShaderID(y);let se=s.getRenderTarget(),ye=N.isInstancedMesh===!0,Ce=N.isBatchedMesh===!0,B=!!y.map,ke=!!y.matcap,Q=!!q,ae=!!y.aoMap,ie=!!y.lightMap,de=!!y.bumpMap,le=!!y.normalMap,Se=!!y.displacementMap,Le=!!y.emissiveMap,F=!!y.metalnessMap,A=!!y.roughnessMap,W=y.anisotropy>0,ne=y.clearcoat>0,V=y.dispersion>0,$=y.iridescence>0,me=y.sheen>0,ue=y.transmission>0,oe=W&&!!y.anisotropyMap,Ie=ne&&!!y.clearcoatMap,he=ne&&!!y.clearcoatNormalMap,ve=ne&&!!y.clearcoatRoughnessMap,Ee=$&&!!y.iridescenceMap,Me=$&&!!y.iridescenceThicknessMap,xe=me&&!!y.sheenColorMap,Fe=me&&!!y.sheenRoughnessMap,Ke=!!y.specularMap,at=!!y.specularColorMap,Ge=!!y.specularIntensityMap,M=ue&&!!y.transmissionMap,z=ue&&!!y.thicknessMap,X=!!y.gradientMap,ce=!!y.alphaMap,pe=y.alphaTest>0,We=!!y.alphaHash,Ae=!!y.extensions,et=On;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=s.toneMapping);let ht={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Re,fragmentShader:G,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ce,instancing:ye,instancingColor:ye&&N.instanceColor!==null,instancingMorph:ye&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?s.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:kt,alphaToCoverage:!!y.alphaToCoverage,map:B,matcap:ke,envMap:Q,envMapMode:Q&&q.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:ie,bumpMap:de,normalMap:le,displacementMap:d&&Se,emissiveMap:Le,normalMapObjectSpace:le&&y.normalMapType===Dg,normalMapTangentSpace:le&&y.normalMapType===rr,metalnessMap:F,roughnessMap:A,anisotropy:W,anisotropyMap:oe,clearcoat:ne,clearcoatMap:Ie,clearcoatNormalMap:he,clearcoatRoughnessMap:ve,dispersion:V,iridescence:$,iridescenceMap:Ee,iridescenceThicknessMap:Me,sheen:me,sheenColorMap:xe,sheenRoughnessMap:Fe,specularMap:Ke,specularColorMap:at,specularIntensityMap:Ge,transmission:ue,transmissionMap:M,thicknessMap:z,gradientMap:X,opaque:y.transparent===!1&&y.blending===Dr&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:pe,alphaHash:We,combine:y.combine,mapUv:B&&v(y.map.channel),aoMapUv:ae&&v(y.aoMap.channel),lightMapUv:ie&&v(y.lightMap.channel),bumpMapUv:de&&v(y.bumpMap.channel),normalMapUv:le&&v(y.normalMap.channel),displacementMapUv:Se&&v(y.displacementMap.channel),emissiveMapUv:Le&&v(y.emissiveMap.channel),metalnessMapUv:F&&v(y.metalnessMap.channel),roughnessMapUv:A&&v(y.roughnessMap.channel),anisotropyMapUv:oe&&v(y.anisotropyMap.channel),clearcoatMapUv:Ie&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&v(y.sheenRoughnessMap.channel),specularMapUv:Ke&&v(y.specularMap.channel),specularColorMapUv:at&&v(y.specularColorMap.channel),specularIntensityMapUv:Ge&&v(y.specularIntensityMap.channel),transmissionMapUv:M&&v(y.transmissionMap.channel),thicknessMapUv:z&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(le||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(B||ce),fog:!!E,useFog:y.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:N.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,useLegacyLights:s._useLegacyLights,decodeVideoTexture:B&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zt,flipSided:y.side===Vt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)w.push(P),w.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(x(w,y),b(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function b(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function _(y){let w=m[y.type],P;if(w){let O=Nn[w];P=bl.clone(O.uniforms)}else P=y.uniforms;return P}function R(y,w){let P;for(let O=0,N=h.length;O<N;O++){let E=h[O];if(E.cacheKey===w){P=E,++P.usedTimes;break}}return P===void 0&&(P=new Kw(s,w,y,r),h.push(P)),P}function S(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function L(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:L}}function Zw(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function $w(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gp(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,m,v,g){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),e++,p}function o(u,d,f,m,v,g){let p=a(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,m,v,g){let p=a(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||$w),n.length>1&&n.sort(d||Vp),i.length>1&&i.sort(d||Vp)}function h(){for(let u=e,d=s.length;u<d;u++){let f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Qw(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new Gp,s.set(n,[a])):i>=r.length?(a=new Gp,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function eM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new ge};break;case"SpotLight":t={position:new T,direction:new T,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new T,halfWidth:new T,halfHeight:new T};break}return s[e.id]=t,t}}}function tM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var nM=0;function iM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rM(s){let e=new eM,t=tM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let i=new T,r=new Pe,a=new Pe;function o(l,h){let u=0,d=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let m=0,v=0,g=0,p=0,x=0,b=0,_=0,R=0,S=0,C=0,L=0;l.sort(iM);let y=h===!0?Math.PI:1;for(let P=0,O=l.length;P<O;P++){let N=l[P],E=N.color,D=N.intensity,U=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=E.r*D*y,d+=E.g*D*y,f+=E.b*D*y;else if(N.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(N.sh.coefficients[k],D);L++}else if(N.isDirectionalLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=N.shadow.matrix,b++}n.directional[m]=k,m++}else if(N.isSpotLight){let k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(E).multiplyScalar(D*y),k.distance=U,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,n.spot[g]=k;let J=N.shadow;if(N.map&&(n.spotLightMap[S]=N.map,S++,J.updateMatrices(N),N.castShadow&&C++),n.spotLightMatrix[g]=J.matrix,N.castShadow){let ee=t.get(N);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=q,R++}g++}else if(N.isRectAreaLight){let k=e.get(N);k.color.copy(E).multiplyScalar(D),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),n.rectArea[p]=k,p++}else if(N.isPointLight){let k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*y),k.distance=N.distance,k.decay=N.decay,N.castShadow){let J=N.shadow,ee=t.get(N);ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,n.pointShadow[v]=ee,n.pointShadowMap[v]=q,n.pointShadowMatrix[v]=N.shadow.matrix,_++}n.point[v]=k,v++}else if(N.isHemisphereLight){let k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(D*y),k.groundColor.copy(N.groundColor).multiplyScalar(D*y),n.hemi[x]=k,x++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let w=n.hash;(w.directionalLength!==m||w.pointLength!==v||w.spotLength!==g||w.rectAreaLength!==p||w.hemiLength!==x||w.numDirectionalShadows!==b||w.numPointShadows!==_||w.numSpotShadows!==R||w.numSpotMaps!==S||w.numLightProbes!==L)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=v,n.hemi.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=R+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=L,w.directionalLength=m,w.pointLength=v,w.spotLength=g,w.rectAreaLength=p,w.hemiLength=x,w.numDirectionalShadows=b,w.numPointShadows=_,w.numSpotShadows=R,w.numSpotMaps=S,w.numLightProbes=L,n.version=nM++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0,g=h.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let b=l[p];if(b.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),u++}else if(b.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(g),f++}else if(b.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(b.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(b.width*.5,0,0),_.halfHeight.set(0,b.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(b.matrixWorld),_.position.applyMatrix4(g),d++}else if(b.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(b.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:c,state:n}}function Wp(s){let e=new rM(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(h){e.setup(t,h)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function sM(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new Wp(s),e.set(i,[o])):r>=a.length?(o=new Wp(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ti=class extends Tt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fa=class extends Tt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`;function cM(s,e,t){let n=new zr,i=new j,r=new j,a=new $e,o=new ti({depthPacking:Kr}),c=new Fa,l={},h=t.maxTextureSize,u={[Un]:Vt,[Vt]:Un,[zt]:zt},d=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:aM,fragmentShader:oM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new He;m.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new rt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(S,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let y=s.getRenderTarget(),w=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),O=s.state;O.setBlending(Si),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let N=p!==Jn&&this.type===Jn,E=p===Jn&&this.type!==Jn;for(let D=0,U=S.length;D<U;D++){let q=S[D],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let J=k.getFrameExtents();if(i.multiply(J),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/J.x),i.x=r.x*J.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/J.y),i.y=r.y*J.y,k.mapSize.y=r.y)),k.map===null||N===!0||E===!0){let re=this.type!==Jn?{minFilter:xt,magFilter:xt}:{};k.map!==null&&k.map.dispose(),k.map=new Nt(i.x,i.y,re),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let ee=k.getViewportCount();for(let re=0;re<ee;re++){let be=k.getViewport(re);a.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),O.viewport(a),k.updateMatrices(q,re),n=k.getFrustum(),_(C,L,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===Jn&&x(k,L),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(y,w,P)};function x(S,C){let L=e.update(v);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nt(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(C,null,L,d,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(C,null,L,f,v,null)}function b(S,C,L,y){let w=null,P=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)w=P;else if(w=L.isPointLight===!0?c:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=w.uuid,N=C.uuid,E=l[O];E===void 0&&(E={},l[O]=E);let D=E[N];D===void 0&&(D=w.clone(),E[N]=D,C.addEventListener("dispose",R)),w=D}if(w.visible=C.visible,w.wireframe=C.wireframe,y===Jn?w.side=C.shadowSide!==null?C.shadowSide:C.side:w.side=C.shadowSide!==null?C.shadowSide:u[C.side],w.alphaMap=C.alphaMap,w.alphaTest=C.alphaTest,w.map=C.map,w.clipShadows=C.clipShadows,w.clippingPlanes=C.clippingPlanes,w.clipIntersection=C.clipIntersection,w.displacementMap=C.displacementMap,w.displacementScale=C.displacementScale,w.displacementBias=C.displacementBias,w.wireframeLinewidth=C.wireframeLinewidth,w.linewidth=C.linewidth,L.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let O=s.properties.get(w);O.light=L}return w}function _(S,C,L,y,w){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Jn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);let N=e.update(S),E=S.material;if(Array.isArray(E)){let D=N.groups;for(let U=0,q=D.length;U<q;U++){let k=D[U],J=E[k.materialIndex];if(J&&J.visible){let ee=b(S,J,y,w);S.onBeforeShadow(s,S,C,L,N,ee,k),s.renderBufferDirect(L,null,N,ee,S,k),S.onAfterShadow(s,S,C,L,N,ee,k)}}}else if(E.visible){let D=b(S,E,y,w);S.onBeforeShadow(s,S,C,L,N,D,null),s.renderBufferDirect(L,null,N,D,S,null),S.onAfterShadow(s,S,C,L,N,D,null)}}let O=S.children;for(let N=0,E=O.length;N<E;N++)_(O[N],C,L,y,w)}function R(S){S.target.removeEventListener("dispose",R);for(let L in l){let y=l[L],w=S.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function lM(s){function e(){let M=!1,z=new $e,X=null,ce=new $e(0,0,0,0);return{setMask:function(pe){X!==pe&&!M&&(s.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){M=pe},setClear:function(pe,We,Ae,et,ht){ht===!0&&(pe*=et,We*=et,Ae*=et),z.set(pe,We,Ae,et),ce.equals(z)===!1&&(s.clearColor(pe,We,Ae,et),ce.copy(z))},reset:function(){M=!1,X=null,ce.set(-1,0,0,0)}}}function t(){let M=!1,z=null,X=null,ce=null;return{setTest:function(pe){pe?fe(s.DEPTH_TEST):se(s.DEPTH_TEST)},setMask:function(pe){z!==pe&&!M&&(s.depthMask(pe),z=pe)},setFunc:function(pe){if(X!==pe){switch(pe){case ng:s.depthFunc(s.NEVER);break;case ig:s.depthFunc(s.ALWAYS);break;case rg:s.depthFunc(s.LESS);break;case _a:s.depthFunc(s.LEQUAL);break;case sg:s.depthFunc(s.EQUAL);break;case ag:s.depthFunc(s.GEQUAL);break;case og:s.depthFunc(s.GREATER);break;case cg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}X=pe}},setLocked:function(pe){M=pe},setClear:function(pe){ce!==pe&&(s.clearDepth(pe),ce=pe)},reset:function(){M=!1,z=null,X=null,ce=null}}}function n(){let M=!1,z=null,X=null,ce=null,pe=null,We=null,Ae=null,et=null,ht=null;return{setTest:function(tt){M||(tt?fe(s.STENCIL_TEST):se(s.STENCIL_TEST))},setMask:function(tt){z!==tt&&!M&&(s.stencilMask(tt),z=tt)},setFunc:function(tt,St,ut){(X!==tt||ce!==St||pe!==ut)&&(s.stencilFunc(tt,St,ut),X=tt,ce=St,pe=ut)},setOp:function(tt,St,ut){(We!==tt||Ae!==St||et!==ut)&&(s.stencilOp(tt,St,ut),We=tt,Ae=St,et=ut)},setLocked:function(tt){M=tt},setClear:function(tt){ht!==tt&&(s.clearStencil(tt),ht=tt)},reset:function(){M=!1,z=null,X=null,ce=null,pe=null,We=null,Ae=null,et=null,ht=null}}}let i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,x=null,b=null,_=null,R=null,S=new ge(0,0,0),C=0,L=!1,y=null,w=null,P=null,O=null,N=null,E=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,U=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(q)[1]),D=U>=1):q.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),D=U>=2);let k=null,J={},ee=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),be=new $e().fromArray(ee),Re=new $e().fromArray(re);function G(M,z,X,ce){let pe=new Uint8Array(4),We=s.createTexture();s.bindTexture(M,We),s.texParameteri(M,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(M,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<X;Ae++)M===s.TEXTURE_3D||M===s.TEXTURE_2D_ARRAY?s.texImage3D(z,0,s.RGBA,1,1,ce,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(z+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return We}let te={};te[s.TEXTURE_2D]=G(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=G(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=G(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=G(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(_a),de(!1),le(Bh),fe(s.CULL_FACE),ae(Si);function fe(M){l[M]!==!0&&(s.enable(M),l[M]=!0)}function se(M){l[M]!==!1&&(s.disable(M),l[M]=!1)}function ye(M,z){return h[M]!==z?(s.bindFramebuffer(M,z),h[M]=z,M===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=z),M===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=z),!0):!1}function Ce(M,z){let X=d,ce=!1;if(M){X=u.get(z),X===void 0&&(X=[],u.set(z,X));let pe=M.textures;if(X.length!==pe.length||X[0]!==s.COLOR_ATTACHMENT0){for(let We=0,Ae=pe.length;We<Ae;We++)X[We]=s.COLOR_ATTACHMENT0+We;X.length=pe.length,ce=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,ce=!0);ce&&s.drawBuffers(X)}function B(M){return f!==M?(s.useProgram(M),f=M,!0):!1}let ke={[Ki]:s.FUNC_ADD,[Bm]:s.FUNC_SUBTRACT,[zm]:s.FUNC_REVERSE_SUBTRACT};ke[Hm]=s.MIN,ke[Vm]=s.MAX;let Q={[Gm]:s.ZERO,[Wm]:s.ONE,[qm]:s.SRC_COLOR,[pc]:s.SRC_ALPHA,[Zm]:s.SRC_ALPHA_SATURATE,[Ym]:s.DST_COLOR,[jm]:s.DST_ALPHA,[Xm]:s.ONE_MINUS_SRC_COLOR,[mc]:s.ONE_MINUS_SRC_ALPHA,[Jm]:s.ONE_MINUS_DST_COLOR,[Km]:s.ONE_MINUS_DST_ALPHA,[$m]:s.CONSTANT_COLOR,[Qm]:s.ONE_MINUS_CONSTANT_COLOR,[eg]:s.CONSTANT_ALPHA,[tg]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(M,z,X,ce,pe,We,Ae,et,ht,tt){if(M===Si){m===!0&&(se(s.BLEND),m=!1);return}if(m===!1&&(fe(s.BLEND),m=!0),M!==km){if(M!==v||tt!==L){if((g!==Ki||b!==Ki)&&(s.blendEquation(s.FUNC_ADD),g=Ki,b=Ki),tt)switch(M){case Dr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zh:s.blendFunc(s.ONE,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}else switch(M){case Dr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",M);break}p=null,x=null,_=null,R=null,S.set(0,0,0),C=0,v=M,L=tt}return}pe=pe||z,We=We||X,Ae=Ae||ce,(z!==g||pe!==b)&&(s.blendEquationSeparate(ke[z],ke[pe]),g=z,b=pe),(X!==p||ce!==x||We!==_||Ae!==R)&&(s.blendFuncSeparate(Q[X],Q[ce],Q[We],Q[Ae]),p=X,x=ce,_=We,R=Ae),(et.equals(S)===!1||ht!==C)&&(s.blendColor(et.r,et.g,et.b,ht),S.copy(et),C=ht),v=M,L=!1}function ie(M,z){M.side===zt?se(s.CULL_FACE):fe(s.CULL_FACE);let X=M.side===Vt;z&&(X=!X),de(X),M.blending===Dr&&M.transparent===!1?ae(Si):ae(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),r.setFunc(M.depthFunc),r.setTest(M.depthTest),r.setMask(M.depthWrite),i.setMask(M.colorWrite);let ce=M.stencilWrite;a.setTest(ce),ce&&(a.setMask(M.stencilWriteMask),a.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),a.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),Le(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):se(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(M){y!==M&&(M?s.frontFace(s.CW):s.frontFace(s.CCW),y=M)}function le(M){M!==Om?(fe(s.CULL_FACE),M!==w&&(M===Bh?s.cullFace(s.BACK):M===Um?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):se(s.CULL_FACE),w=M}function Se(M){M!==P&&(D&&s.lineWidth(M),P=M)}function Le(M,z,X){M?(fe(s.POLYGON_OFFSET_FILL),(O!==z||N!==X)&&(s.polygonOffset(z,X),O=z,N=X)):se(s.POLYGON_OFFSET_FILL)}function F(M){M?fe(s.SCISSOR_TEST):se(s.SCISSOR_TEST)}function A(M){M===void 0&&(M=s.TEXTURE0+E-1),k!==M&&(s.activeTexture(M),k=M)}function W(M,z,X){X===void 0&&(k===null?X=s.TEXTURE0+E-1:X=k);let ce=J[X];ce===void 0&&(ce={type:void 0,texture:void 0},J[X]=ce),(ce.type!==M||ce.texture!==z)&&(k!==X&&(s.activeTexture(X),k=X),s.bindTexture(M,z||te[M]),ce.type=M,ce.texture=z)}function ne(){let M=J[k];M!==void 0&&M.type!==void 0&&(s.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)}function V(){try{s.compressedTexImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ie(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function he(){try{s.texStorage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function ve(){try{s.texStorage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Ee(){try{s.texImage2D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function Me(){try{s.texImage3D.apply(s,arguments)}catch(M){console.error("THREE.WebGLState:",M)}}function xe(M){be.equals(M)===!1&&(s.scissor(M.x,M.y,M.z,M.w),be.copy(M))}function Fe(M){Re.equals(M)===!1&&(s.viewport(M.x,M.y,M.z,M.w),Re.copy(M))}function Ke(M,z){let X=c.get(z);X===void 0&&(X=new WeakMap,c.set(z,X));let ce=X.get(M);ce===void 0&&(ce=s.getUniformBlockIndex(z,M.name),X.set(M,ce))}function at(M,z){let ce=c.get(z).get(M);o.get(z)!==ce&&(s.uniformBlockBinding(z,ce,M.__bindingPointIndex),o.set(z,ce))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},k=null,J={},h={},u=new WeakMap,d=[],f=null,m=!1,v=null,g=null,p=null,x=null,b=null,_=null,R=null,S=new ge(0,0,0),C=0,L=!1,y=null,w=null,P=null,O=null,N=null,be.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:fe,disable:se,bindFramebuffer:ye,drawBuffers:Ce,useProgram:B,setBlending:ae,setMaterial:ie,setFlipSided:de,setCullFace:le,setLineWidth:Se,setPolygonOffset:Le,setScissorTest:F,activeTexture:A,bindTexture:W,unbindTexture:ne,compressedTexImage2D:V,compressedTexImage3D:$,texImage2D:Ee,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:at,texStorage2D:he,texStorage3D:ve,texSubImage2D:me,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:xe,viewport:Fe,reset:Ge}}function hM(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new j,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,A){return f?new OffscreenCanvas(F,A):Pa("canvas")}function v(F,A,W){let ne=1,V=Le(F);if((V.width>W||V.height>W)&&(ne=W/Math.max(V.width,V.height)),ne<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let $=Math.floor(ne*V.width),me=Math.floor(ne*V.height);u===void 0&&(u=m($,me));let ue=A?m($,me):u;return ue.width=$,ue.height=me,ue.getContext("2d").drawImage(F,0,0,$,me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+$+"x"+me+")."),ue}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),F;return F}function g(F){return F.generateMipmaps&&F.minFilter!==xt&&F.minFilter!==lt}function p(F){s.generateMipmap(F)}function x(F,A,W,ne,V=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $=A;if(A===s.RED&&(W===s.FLOAT&&($=s.R32F),W===s.HALF_FLOAT&&($=s.R16F),W===s.UNSIGNED_BYTE&&($=s.R8)),A===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.R8UI),W===s.UNSIGNED_SHORT&&($=s.R16UI),W===s.UNSIGNED_INT&&($=s.R32UI),W===s.BYTE&&($=s.R8I),W===s.SHORT&&($=s.R16I),W===s.INT&&($=s.R32I)),A===s.RG&&(W===s.FLOAT&&($=s.RG32F),W===s.HALF_FLOAT&&($=s.RG16F),W===s.UNSIGNED_BYTE&&($=s.RG8)),A===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&($=s.RG8UI),W===s.UNSIGNED_SHORT&&($=s.RG16UI),W===s.UNSIGNED_INT&&($=s.RG32UI),W===s.BYTE&&($=s.RG8I),W===s.SHORT&&($=s.RG16I),W===s.INT&&($=s.RG32I)),A===s.RGB&&W===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),A===s.RGBA){let me=V?Sa:st.getTransfer(ne);W===s.FLOAT&&($=s.RGBA32F),W===s.HALF_FLOAT&&($=s.RGBA16F),W===s.UNSIGNED_BYTE&&($=me===gt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(F,A){return g(F)===!0||F.isFramebufferTexture&&F.minFilter!==xt&&F.minFilter!==lt?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function _(F){let A=F.target;A.removeEventListener("dispose",_),S(A),A.isVideoTexture&&h.delete(A)}function R(F){let A=F.target;A.removeEventListener("dispose",R),L(A)}function S(F){let A=n.get(F);if(A.__webglInit===void 0)return;let W=F.source,ne=d.get(W);if(ne){let V=ne[A.__cacheKey];V.usedTimes--,V.usedTimes===0&&C(F),Object.keys(ne).length===0&&d.delete(W)}n.remove(F)}function C(F){let A=n.get(F);s.deleteTexture(A.__webglTexture);let W=F.source,ne=d.get(W);delete ne[A.__cacheKey],a.memory.textures--}function L(F){let A=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(A.__webglFramebuffer[ne]))for(let V=0;V<A.__webglFramebuffer[ne].length;V++)s.deleteFramebuffer(A.__webglFramebuffer[ne][V]);else s.deleteFramebuffer(A.__webglFramebuffer[ne]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[ne])}else{if(Array.isArray(A.__webglFramebuffer))for(let ne=0;ne<A.__webglFramebuffer.length;ne++)s.deleteFramebuffer(A.__webglFramebuffer[ne]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ne=0;ne<A.__webglColorRenderbuffer.length;ne++)A.__webglColorRenderbuffer[ne]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[ne]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let W=F.textures;for(let ne=0,V=W.length;ne<V;ne++){let $=n.get(W[ne]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(W[ne])}n.remove(F)}let y=0;function w(){y=0}function P(){let F=y;return F>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),y+=1,F}function O(F){let A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function N(F,A){let W=n.get(F);if(F.isVideoTexture&&le(F),F.isRenderTargetTexture===!1&&F.version>0&&W.__version!==F.version){let ne=F.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(W,F,A);return}}t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+A)}function E(F,A){let W=n.get(F);if(F.version>0&&W.__version!==F.version){be(W,F,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+A)}function D(F,A){let W=n.get(F);if(F.version>0&&W.__version!==F.version){be(W,F,A);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+A)}function U(F,A){let W=n.get(F);if(F.version>0&&W.__version!==F.version){Re(W,F,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+A)}let q={[kn]:s.REPEAT,[Ht]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},k={[xt]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[Yi]:s.NEAREST_MIPMAP_LINEAR,[lt]:s.LINEAR,[Ir]:s.LINEAR_MIPMAP_NEAREST,[pn]:s.LINEAR_MIPMAP_LINEAR},J={[Ig]:s.NEVER,[Bg]:s.ALWAYS,[Ng]:s.LESS,[zd]:s.LEQUAL,[Fg]:s.EQUAL,[kg]:s.GEQUAL,[Og]:s.GREATER,[Ug]:s.NOTEQUAL};function ee(F,A){if(A.type===on&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===lt||A.magFilter===Ir||A.magFilter===Yi||A.magFilter===pn||A.minFilter===lt||A.minFilter===Ir||A.minFilter===Yi||A.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,q[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,q[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,q[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,k[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,k[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,J[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xt||A.minFilter!==Yi&&A.minFilter!==pn||A.type===on&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function re(F,A){let W=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",_));let ne=A.source,V=d.get(ne);V===void 0&&(V={},d.set(ne,V));let $=O(A);if($!==F.__cacheKey){V[$]===void 0&&(V[$]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,W=!0),V[$].usedTimes++;let me=V[F.__cacheKey];me!==void 0&&(V[F.__cacheKey].usedTimes--,me.usedTimes===0&&C(A)),F.__cacheKey=$,F.__webglTexture=V[$].texture}return W}function be(F,A,W){let ne=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=s.TEXTURE_3D);let V=re(F,A),$=A.source;t.bindTexture(ne,F.__webglTexture,s.TEXTURE0+W);let me=n.get($);if($.version!==me.__version||V===!0){t.activeTexture(s.TEXTURE0+W);let ue=st.getPrimaries(st.workingColorSpace),oe=A.colorSpace===Fn?null:st.getPrimaries(A.colorSpace),Ie=A.colorSpace===Fn||ue===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let he=v(A.image,!1,i.maxTextureSize);he=Se(A,he);let ve=r.convert(A.format,A.colorSpace),Ee=r.convert(A.type),Me=x(A.internalFormat,ve,Ee,A.colorSpace,A.isVideoTexture);ee(ne,A);let xe,Fe=A.mipmaps,Ke=A.isVideoTexture!==!0,at=me.__version===void 0||V===!0,Ge=$.dataReady,M=b(A,he);if(A.isDepthTexture)Me=s.DEPTH_COMPONENT16,A.type===on?Me=s.DEPTH_COMPONENT32F:A.type===Ti?Me=s.DEPTH_COMPONENT24:A.type===Xs&&(Me=s.DEPTH24_STENCIL8),at&&(Ke?t.texStorage2D(s.TEXTURE_2D,1,Me,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,Me,he.width,he.height,0,ve,Ee,null));else if(A.isDataTexture)if(Fe.length>0){Ke&&at&&t.texStorage2D(s.TEXTURE_2D,M,Me,Fe[0].width,Fe[0].height);for(let z=0,X=Fe.length;z<X;z++)xe=Fe[z],Ke?Ge&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,xe.width,xe.height,ve,Ee,xe.data):t.texImage2D(s.TEXTURE_2D,z,Me,xe.width,xe.height,0,ve,Ee,xe.data);A.generateMipmaps=!1}else Ke?(at&&t.texStorage2D(s.TEXTURE_2D,M,Me,he.width,he.height),Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he.width,he.height,ve,Ee,he.data)):t.texImage2D(s.TEXTURE_2D,0,Me,he.width,he.height,0,ve,Ee,he.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ke&&at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,Me,Fe[0].width,Fe[0].height,he.depth);for(let z=0,X=Fe.length;z<X;z++)xe=Fe[z],A.format!==$t?ve!==null?Ke?Ge&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,he.depth,ve,xe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,z,Me,xe.width,xe.height,he.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,z,0,0,0,xe.width,xe.height,he.depth,ve,Ee,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,z,Me,xe.width,xe.height,he.depth,0,ve,Ee,xe.data)}else{Ke&&at&&t.texStorage2D(s.TEXTURE_2D,M,Me,Fe[0].width,Fe[0].height);for(let z=0,X=Fe.length;z<X;z++)xe=Fe[z],A.format!==$t?ve!==null?Ke?Ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,z,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,z,Me,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?Ge&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,xe.width,xe.height,ve,Ee,xe.data):t.texImage2D(s.TEXTURE_2D,z,Me,xe.width,xe.height,0,ve,Ee,xe.data)}else if(A.isDataArrayTexture)Ke?(at&&t.texStorage3D(s.TEXTURE_2D_ARRAY,M,Me,he.width,he.height,he.depth),Ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ee,he.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Me,he.width,he.height,he.depth,0,ve,Ee,he.data);else if(A.isData3DTexture)Ke?(at&&t.texStorage3D(s.TEXTURE_3D,M,Me,he.width,he.height,he.depth),Ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ee,he.data)):t.texImage3D(s.TEXTURE_3D,0,Me,he.width,he.height,he.depth,0,ve,Ee,he.data);else if(A.isFramebufferTexture){if(at)if(Ke)t.texStorage2D(s.TEXTURE_2D,M,Me,he.width,he.height);else{let z=he.width,X=he.height;for(let ce=0;ce<M;ce++)t.texImage2D(s.TEXTURE_2D,ce,Me,z,X,0,ve,Ee,null),z>>=1,X>>=1}}else if(Fe.length>0){if(Ke&&at){let z=Le(Fe[0]);t.texStorage2D(s.TEXTURE_2D,M,Me,z.width,z.height)}for(let z=0,X=Fe.length;z<X;z++)xe=Fe[z],Ke?Ge&&t.texSubImage2D(s.TEXTURE_2D,z,0,0,ve,Ee,xe):t.texImage2D(s.TEXTURE_2D,z,Me,ve,Ee,xe);A.generateMipmaps=!1}else if(Ke){if(at){let z=Le(he);t.texStorage2D(s.TEXTURE_2D,M,Me,z.width,z.height)}Ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Ee,he)}else t.texImage2D(s.TEXTURE_2D,0,Me,ve,Ee,he);g(A)&&p(ne),me.__version=$.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Re(F,A,W){if(A.image.length!==6)return;let ne=re(F,A),V=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+W);let $=n.get(V);if(V.version!==$.__version||ne===!0){t.activeTexture(s.TEXTURE0+W);let me=st.getPrimaries(st.workingColorSpace),ue=A.colorSpace===Fn?null:st.getPrimaries(A.colorSpace),oe=A.colorSpace===Fn||me===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ie=A.isCompressedTexture||A.image[0].isCompressedTexture,he=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let X=0;X<6;X++)!Ie&&!he?ve[X]=v(A.image[X],!0,i.maxCubemapSize):ve[X]=he?A.image[X].image:A.image[X],ve[X]=Se(A,ve[X]);let Ee=ve[0],Me=r.convert(A.format,A.colorSpace),xe=r.convert(A.type),Fe=x(A.internalFormat,Me,xe,A.colorSpace),Ke=A.isVideoTexture!==!0,at=$.__version===void 0||ne===!0,Ge=V.dataReady,M=b(A,Ee);ee(s.TEXTURE_CUBE_MAP,A);let z;if(Ie){Ke&&at&&t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Fe,Ee.width,Ee.height);for(let X=0;X<6;X++){z=ve[X].mipmaps;for(let ce=0;ce<z.length;ce++){let pe=z[ce];A.format!==$t?Me!==null?Ke?Ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,0,0,pe.width,pe.height,Me,pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,Fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,0,0,pe.width,pe.height,Me,xe,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce,Fe,pe.width,pe.height,0,Me,xe,pe.data)}}}else{if(z=A.mipmaps,Ke&&at){z.length>0&&M++;let X=Le(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,M,Fe,X.width,X.height)}for(let X=0;X<6;X++)if(he){Ke?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ve[X].width,ve[X].height,Me,xe,ve[X].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Fe,ve[X].width,ve[X].height,0,Me,xe,ve[X].data);for(let ce=0;ce<z.length;ce++){let We=z[ce].image[X].image;Ke?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,0,0,We.width,We.height,Me,xe,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,Fe,We.width,We.height,0,Me,xe,We.data)}}else{Ke?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Me,xe,ve[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Fe,Me,xe,ve[X]);for(let ce=0;ce<z.length;ce++){let pe=z[ce];Ke?Ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,0,0,Me,xe,pe.image[X]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ce+1,Fe,Me,xe,pe.image[X])}}}g(A)&&p(s.TEXTURE_CUBE_MAP),$.__version=V.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function G(F,A,W,ne,V,$){let me=r.convert(W.format,W.colorSpace),ue=r.convert(W.type),oe=x(W.internalFormat,me,ue,W.colorSpace);if(!n.get(A).__hasExternalTextures){let he=Math.max(1,A.width>>$),ve=Math.max(1,A.height>>$);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?t.texImage3D(V,$,oe,he,ve,A.depth,0,me,ue,null):t.texImage2D(V,$,oe,he,ve,0,me,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,F),de(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,V,n.get(W).__webglTexture,0,ie(A)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,V,n.get(W).__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function te(F,A,W){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer&&!A.stencilBuffer){let ne=s.DEPTH_COMPONENT24;if(W||de(A)){let V=A.depthTexture;V&&V.isDepthTexture&&(V.type===on?ne=s.DEPTH_COMPONENT32F:V.type===Ti&&(ne=s.DEPTH_COMPONENT24));let $=ie(A);de(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$,ne,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,$,ne,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,F)}else if(A.depthBuffer&&A.stencilBuffer){let ne=ie(A);W&&de(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):de(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,F)}else{let ne=A.textures;for(let V=0;V<ne.length;V++){let $=ne[V],me=r.convert($.format,$.colorSpace),ue=r.convert($.type),oe=x($.internalFormat,me,ue,$.colorSpace),Ie=ie(A);W&&de(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,oe,A.width,A.height):de(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,oe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,oe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),N(A.depthTexture,0);let ne=n.get(A.depthTexture).__webglTexture,V=ie(A);if(A.depthTexture.format===Nr)de(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(A.depthTexture.format===As)de(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function se(F){let A=n.get(F),W=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(A.__webglFramebuffer,F)}else if(W){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=s.createRenderbuffer(),te(A.__webglDepthbuffer[ne],F,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),te(A.__webglDepthbuffer,F,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(F,A,W){let ne=n.get(F);A!==void 0&&G(ne.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&se(F)}function Ce(F){let A=F.texture,W=n.get(F),ne=n.get(A);F.addEventListener("dispose",R);let V=F.textures,$=F.isWebGLCubeRenderTarget===!0,me=V.length>1;if(me||(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=A.version,a.memory.textures++),$){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let oe=0;oe<A.mipmaps.length;oe++)W.__webglFramebuffer[ue][oe]=s.createFramebuffer()}else W.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<A.mipmaps.length;ue++)W.__webglFramebuffer[ue]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(me)for(let ue=0,oe=V.length;ue<oe;ue++){let Ie=n.get(V[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(F.samples>0&&de(F)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<V.length;ue++){let oe=V[ue];W.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);let Ie=r.convert(oe.format,oe.colorSpace),he=r.convert(oe.type),ve=x(oe.internalFormat,Ie,he,oe.colorSpace,F.isXRRenderTarget===!0),Ee=ie(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,ve,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),te(W.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),ee(s.TEXTURE_CUBE_MAP,A);for(let ue=0;ue<6;ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)G(W.__webglFramebuffer[ue][oe],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,oe);else G(W.__webglFramebuffer[ue],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(A)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ue=0,oe=V.length;ue<oe;ue++){let Ie=V[ue],he=n.get(Ie);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),ee(s.TEXTURE_2D,Ie),G(W.__webglFramebuffer,F,Ie,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),g(Ie)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ue=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,ne.__webglTexture),ee(ue,A),A.mipmaps&&A.mipmaps.length>0)for(let oe=0;oe<A.mipmaps.length;oe++)G(W.__webglFramebuffer[oe],F,A,s.COLOR_ATTACHMENT0,ue,oe);else G(W.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,ue,0);g(A)&&p(ue),t.unbindTexture()}F.depthBuffer&&se(F)}function B(F){let A=F.textures;for(let W=0,ne=A.length;W<ne;W++){let V=A[W];if(g(V)){let $=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,me=n.get(V).__webglTexture;t.bindTexture($,me),p($),t.unbindTexture()}}}let ke=[],Q=[];function ae(F){if(F.samples>0){if(de(F)===!1){let A=F.textures,W=F.width,ne=F.height,V=s.COLOR_BUFFER_BIT,$=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(F),ue=A.length>1;if(ue)for(let oe=0;oe<A.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let oe=0;oe<A.length;oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(V|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[oe]);let Ie=n.get(A[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,W,ne,0,0,W,ne,V,s.NEAREST),c===!0&&(ke.length=0,Q.length=0,ke.push(s.COLOR_ATTACHMENT0+oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(ke.push($),Q.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let oe=0;oe<A.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,me.__webglColorRenderbuffer[oe]);let Ie=n.get(A[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&c){let A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function ie(F){return Math.min(i.maxSamples,F.samples)}function de(F){let A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(F){let A=a.render.frame;h.get(F)!==A&&(h.set(F,A),F.update())}function Se(F,A){let W=F.colorSpace,ne=F.format,V=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||W!==kt&&W!==Fn&&(st.getTransfer(W)===gt?(ne!==$t||V!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),A}function Le(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(l.width=F.naturalWidth||F.width,l.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(l.width=F.displayWidth,l.height=F.displayHeight):(l.width=F.width,l.height=F.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=w,this.setTexture2D=N,this.setTexture2DArray=E,this.setTexture3D=D,this.setTextureCube=U,this.rebindTextures=ye,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=G,this.useMultisampledRTT=de}function Zg(s,e){function t(n,i=Fn){let r,a=st.getTransfer(i);if(n===Bn)return s.UNSIGNED_BYTE;if(n===Dd)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Id)return s.UNSIGNED_SHORT_5_5_5_1;if(n===yg)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===xg)return s.BYTE;if(n===_g)return s.SHORT;if(n===Pd)return s.UNSIGNED_SHORT;if(n===Ld)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===on)return s.FLOAT;if(n===Wn)return s.HALF_FLOAT;if(n===wg)return s.ALPHA;if(n===Mg)return s.RGB;if(n===$t)return s.RGBA;if(n===Sg)return s.LUMINANCE;if(n===Eg)return s.LUMINANCE_ALPHA;if(n===Nr)return s.DEPTH_COMPONENT;if(n===As)return s.DEPTH_STENCIL;if(n===Nd)return s.RED;if(n===Fd)return s.RED_INTEGER;if(n===Ag)return s.RG;if(n===Od)return s.RG_INTEGER;if(n===Ud)return s.RGBA_INTEGER;if(n===cc||n===lc||n===hc||n===uc)if(a===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===lc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===uc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wh||n===qh||n===Xh||n===jh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kh||n===Yh||n===Jh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kh||n===Yh)return a===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===$h||n===Qh||n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===au||n===ou||n===cu||n===lu||n===hu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qh)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===iu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===su)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===au)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ou)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hu)return a===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===uu||n===du)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return a===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tg||n===fu||n===pu||n===mu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var _c=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},cn=class extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},uM={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fM=`
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

}`,Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){let n=t.cameras[0].viewport,i=new Gt({vertexShader:dM,fragmentShader:fM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rt(new Ri(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},Du=class extends vn{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,v=new Lu,g=t.getContextAttributes(),p=null,x=null,b=[],_=[],R=new j,S=null,C=new bt;C.layers.enable(1),C.viewport=new $e;let L=new bt;L.layers.enable(2),L.viewport=new $e;let y=[C,L],w=new _c;w.layers.enable(1),w.layers.enable(2);let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=b[G];return te===void 0&&(te=new va,b[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=b[G];return te===void 0&&(te=new va,b[G]=te),te.getGripSpace()},this.getHand=function(G){let te=b[G];return te===void 0&&(te=new va,b[G]=te),te.getHandSpace()};function N(G){let te=_.indexOf(G.inputSource);if(te===-1)return;let fe=b[te];fe!==void 0&&(fe.update(G.inputSource,G.frame,l||a),fe.dispatchEvent({type:G.type,data:G.inputSource}))}function E(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",D);for(let G=0;G<b.length;G++){let te=_[G];te!==null&&(_[G]=null,b[G].disconnect(te))}P=null,O=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",E),i.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){let te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Nt(f.framebufferWidth,f.framebufferHeight,{format:$t,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,fe=null,se=null;g.depth&&(se=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?As:Nr,fe=g.stencil?Xs:Ti);let ye={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Nt(d.textureWidth,d.textureHeight,{format:$t,type:Bn,depthTexture:new Hr(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(G){for(let te=0;te<G.removed.length;te++){let fe=G.removed[te],se=_.indexOf(fe);se>=0&&(_[se]=null,b[se].disconnect(fe))}for(let te=0;te<G.added.length;te++){let fe=G.added[te],se=_.indexOf(fe);if(se===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=_.length){_.push(fe),se=Ce;break}else if(_[Ce]===null){_[Ce]=fe,se=Ce;break}if(se===-1)break}let ye=b[se];ye&&ye.connect(fe)}}let U=new T,q=new T;function k(G,te,fe){U.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(fe.matrixWorld);let se=U.distanceTo(q),ye=te.projectionMatrix.elements,Ce=fe.projectionMatrix.elements,B=ye[14]/(ye[10]-1),ke=ye[14]/(ye[10]+1),Q=(ye[9]+1)/ye[5],ae=(ye[9]-1)/ye[5],ie=(ye[8]-1)/ye[0],de=(Ce[8]+1)/Ce[0],le=B*ie,Se=B*de,Le=se/(-ie+de),F=Le*-ie;te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(F),G.translateZ(Le),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let A=B+Le,W=ke+Le,ne=le-F,V=Se+(se-F),$=Q*ke/W*A,me=ae*ke/W*A;G.projectionMatrix.makePerspective(ne,V,$,me,A,W),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),w.near=L.near=C.near=G.near,w.far=L.far=C.far=G.far,(P!==w.near||O!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,O=w.far,C.near=P,C.far=O,L.near=P,L.far=O,C.updateProjectionMatrix(),L.updateProjectionMatrix(),G.updateProjectionMatrix());let te=G.parent,fe=w.cameras;J(w,te);for(let se=0;se<fe.length;se++)J(fe[se],te);fe.length===2?k(w,C,L):w.projectionMatrix.copy(C.projectionMatrix),ee(G,w,te)};function ee(G,te,fe){fe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(fe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ts*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let re=null;function be(G,te){if(h=te.getViewerPose(l||a),m=te,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let se=!1;fe.length!==w.cameras.length&&(w.cameras.length=0,se=!0);for(let Ce=0;Ce<fe.length;Ce++){let B=fe[Ce],ke=null;if(f!==null)ke=f.getViewport(B);else{let ae=u.getViewSubImage(d,B);ke=ae.viewport,Ce===0&&(e.setRenderTargetTextures(x,ae.colorTexture,d.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(x))}let Q=y[Ce];Q===void 0&&(Q=new bt,Q.layers.enable(Ce),Q.viewport=new $e,y[Ce]=Q),Q.matrix.fromArray(B.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(B.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(w.matrix.copy(Q.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),se===!0&&w.cameras.push(Q)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let Ce=u.getDepthInformation(fe[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,i.renderState)}}for(let fe=0;fe<b.length;fe++){let se=_[fe],ye=b[fe];se!==null&&ye!==void 0&&ye.update(se,te,l||a)}v.render(e,w),re&&re(G,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Re=new qg;Re.setAnimationLoop(be),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}},xr=new bn,pM=new Pe;function mM(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Wg(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,b):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),b=x.envMap,_=x.envMapRotation;if(b&&(g.envMap.value=b,xr.copy(_),xr.x*=-1,xr.y*=-1,xr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(xr.y*=-1,xr.z*=-1),g.envMapRotation.value.setFromMatrix4(pM.makeRotationFromEuler(xr)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;let R=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*R,t(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gM(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){let _=b.program;n.uniformBlockBinding(x,_)}function l(x,b){let _=i[x.id];_===void 0&&(m(x),_=h(x),i[x.id]=_,x.addEventListener("dispose",g));let R=b.program;n.updateUBOMapping(x,R);let S=e.render.frame;r[x.id]!==S&&(d(x),r[x.id]=S)}function h(x){let b=u();x.__bindingPointIndex=b;let _=s.createBuffer(),R=x.__size,S=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,R,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,_),_}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let b=i[x.id],_=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let S=0,C=_.length;S<C;S++){let L=Array.isArray(_[S])?_[S]:[_[S]];for(let y=0,w=L.length;y<w;y++){let P=L[y];if(f(P,S,y,R)===!0){let O=P.__offset,N=Array.isArray(P.value)?P.value:[P.value],E=0;for(let D=0;D<N.length;D++){let U=N[D],q=v(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,s.bufferSubData(s.UNIFORM_BUFFER,O+E,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,E),E+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,_,R){let S=x.value,C=b+"_"+_;if(R[C]===void 0)return typeof S=="number"||typeof S=="boolean"?R[C]=S:R[C]=S.clone(),!0;{let L=R[C];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return R[C]=S,!0}else if(L.equals(S)===!1)return L.copy(S),!0}return!1}function m(x){let b=x.uniforms,_=0,R=16;for(let C=0,L=b.length;C<L;C++){let y=Array.isArray(b[C])?b[C]:[b[C]];for(let w=0,P=y.length;w<P;w++){let O=y[w],N=Array.isArray(O.value)?O.value:[O.value];for(let E=0,D=N.length;E<D;E++){let U=N[E],q=v(U),k=_%R;k!==0&&R-k<q.boundary&&(_+=R-k),O.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=_,_+=q.storage}}}let S=_%R;return S>0&&(_+=R-S),x.__size=_,x.__cache={},this}function v(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function g(x){let b=x.target;b.removeEventListener("dispose",g);let _=a.indexOf(b.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var Oa=class{constructor(e={}){let{canvas:t=Hg(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),m=new Int32Array(4),v=null,g=null,p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mt,this._useLegacyLights=!1,this.toneMapping=On,this.toneMappingExposure=1;let b=this,_=!1,R=0,S=0,C=null,L=-1,y=null,w=new $e,P=new $e,O=null,N=new ge(0),E=0,D=t.width,U=t.height,q=1,k=null,J=null,ee=new $e(0,0,D,U),re=new $e(0,0,D,U),be=!1,Re=new zr,G=!1,te=!1,fe=new Pe,se=new T,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return C===null?q:1}let B=n;function ke(I,H){return t.getContext(I,H)}try{let I={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r164"),t.addEventListener("webglcontextlost",M,!1),t.addEventListener("webglcontextrestored",z,!1),t.addEventListener("webglcontextcreationerror",X,!1),B===null){let H="webgl2";if(B=ke(H,I),B===null)throw ke(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Q,ae,ie,de,le,Se,Le,F,A,W,ne,V,$,me,ue,oe,Ie,he,ve,Ee,Me,xe,Fe,Ke;function at(){Q=new Oy(B),Q.init(),xe=new Zg(B,Q),ae=new Py(B,Q,e,xe),ie=new lM(B),de=new By(B),le=new Zw,Se=new hM(B,Q,ie,le,ae,xe,de),Le=new Dy(b),F=new Fy(b),A=new Xb(B),Fe=new Ry(B,A),W=new Uy(B,A,de,Fe),ne=new Hy(B,W,A,de),ve=new zy(B,ae,Se),oe=new Ly(le),V=new Jw(b,Le,F,Q,ae,Fe,oe),$=new mM(b,le),me=new Qw,ue=new sM(Q),he=new Ty(b,Le,F,ie,ne,d,c),Ie=new cM(b,ne,ae),Ke=new gM(B,de,ae,ie),Ee=new Cy(B,Q,de),Me=new ky(B,Q,de),de.programs=V.programs,b.capabilities=ae,b.extensions=Q,b.properties=le,b.renderLists=me,b.shadowMap=Ie,b.state=ie,b.info=de}at();let Ge=new Du(b,B);this.xr=Ge,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let I=Q.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Q.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(I){I!==void 0&&(q=I,this.setSize(D,U,!1))},this.getSize=function(I){return I.set(D,U)},this.setSize=function(I,H,Z=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=I,U=H,t.width=Math.floor(I*q),t.height=Math.floor(H*q),Z===!0&&(t.style.width=I+"px",t.style.height=H+"px"),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(D*q,U*q).floor()},this.setDrawingBufferSize=function(I,H,Z){D=I,U=H,q=Z,t.width=Math.floor(I*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,I,H)},this.getCurrentViewport=function(I){return I.copy(w)},this.getViewport=function(I){return I.copy(ee)},this.setViewport=function(I,H,Z,K){I.isVector4?ee.set(I.x,I.y,I.z,I.w):ee.set(I,H,Z,K),ie.viewport(w.copy(ee).multiplyScalar(q).round())},this.getScissor=function(I){return I.copy(re)},this.setScissor=function(I,H,Z,K){I.isVector4?re.set(I.x,I.y,I.z,I.w):re.set(I,H,Z,K),ie.scissor(P.copy(re).multiplyScalar(q).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(I){ie.setScissorTest(be=I)},this.setOpaqueSort=function(I){k=I},this.setTransparentSort=function(I){J=I},this.getClearColor=function(I){return I.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(I=!0,H=!0,Z=!0){let K=0;if(I){let Y=!1;if(C!==null){let we=C.texture.format;Y=we===Ud||we===Od||we===Fd}if(Y){let we=C.texture.type,De=we===Bn||we===Ti||we===Pd||we===Xs||we===Dd||we===Id,Ne=he.getClearColor(),Ue=he.getClearAlpha(),qe=Ne.r,Ye=Ne.g,Je=Ne.b;De?(f[0]=qe,f[1]=Ye,f[2]=Je,f[3]=Ue,B.clearBufferuiv(B.COLOR,0,f)):(m[0]=qe,m[1]=Ye,m[2]=Je,m[3]=Ue,B.clearBufferiv(B.COLOR,0,m))}else K|=B.COLOR_BUFFER_BIT}H&&(K|=B.DEPTH_BUFFER_BIT),Z&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",M,!1),t.removeEventListener("webglcontextrestored",z,!1),t.removeEventListener("webglcontextcreationerror",X,!1),me.dispose(),ue.dispose(),le.dispose(),Le.dispose(),F.dispose(),ne.dispose(),Fe.dispose(),Ke.dispose(),V.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",tt),Ge.removeEventListener("sessionend",St),ut.stop()};function M(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=de.autoReset,H=Ie.enabled,Z=Ie.autoUpdate,K=Ie.needsUpdate,Y=Ie.type;at(),de.autoReset=I,Ie.enabled=H,Ie.autoUpdate=Z,Ie.needsUpdate=K,Ie.type=Y}function X(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ce(I){let H=I.target;H.removeEventListener("dispose",ce),pe(H)}function pe(I){We(I),le.remove(I)}function We(I){let H=le.get(I).programs;H!==void 0&&(H.forEach(function(Z){V.releaseProgram(Z)}),I.isShaderMaterial&&V.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,Z,K,Y,we){H===null&&(H=ye);let De=Y.isMesh&&Y.matrixWorld.determinant()<0,Ne=Rv(I,H,Z,K,Y);ie.setMaterial(K,De);let Ue=Z.index,qe=1;if(K.wireframe===!0){if(Ue=W.getWireframeAttribute(Z),Ue===void 0)return;qe=2}let Ye=Z.drawRange,Je=Z.attributes.position,Lt=Ye.start*qe,jt=(Ye.start+Ye.count)*qe;we!==null&&(Lt=Math.max(Lt,we.start*qe),jt=Math.min(jt,(we.start+we.count)*qe)),Ue!==null?(Lt=Math.max(Lt,0),jt=Math.min(jt,Ue.count)):Je!=null&&(Lt=Math.max(Lt,0),jt=Math.min(jt,Je.count));let un=jt-Lt;if(un<0||un===1/0)return;Fe.setup(Y,K,Ne,Z,Ue);let fi,ct=Ee;if(Ue!==null&&(fi=A.get(Ue),ct=Me,ct.setIndex(fi)),Y.isMesh)K.wireframe===!0?(ie.setLineWidth(K.wireframeLinewidth*Ce()),ct.setMode(B.LINES)):ct.setMode(B.TRIANGLES);else if(Y.isLine){let Xe=K.linewidth;Xe===void 0&&(Xe=1),ie.setLineWidth(Xe*Ce()),Y.isLineSegments?ct.setMode(B.LINES):Y.isLineLoop?ct.setMode(B.LINE_LOOP):ct.setMode(B.LINE_STRIP)}else Y.isPoints?ct.setMode(B.POINTS):Y.isSprite&&ct.setMode(B.TRIANGLES);if(Y.isBatchedMesh)Y._multiDrawInstances!==null?ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances):ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)ct.renderInstances(Lt,un,Y.count);else if(Z.isInstancedBufferGeometry){let Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ea=Math.min(Z.instanceCount,Xe);ct.renderInstances(Lt,un,ea)}else ct.render(Lt,un)};function Ae(I,H,Z){I.transparent===!0&&I.side===zt&&I.forceSinglePass===!1?(I.side=Vt,I.needsUpdate=!0,mo(I,H,Z),I.side=Un,I.needsUpdate=!0,mo(I,H,Z),I.side=zt):mo(I,H,Z)}this.compile=function(I,H,Z=null){Z===null&&(Z=I),g=ue.get(Z),g.init(H),x.push(g),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),I!==Z&&I.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights(b._useLegacyLights);let K=new Set;return I.traverse(function(Y){let we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){let Ne=we[De];Ae(Ne,Z,Y),K.add(Ne)}else Ae(we,Z,Y),K.add(we)}),x.pop(),g=null,K},this.compileAsync=function(I,H,Z=null){let K=this.compile(I,H,Z);return new Promise(Y=>{function we(){if(K.forEach(function(De){le.get(De).currentProgram.isReady()&&K.delete(De)}),K.size===0){Y(I);return}setTimeout(we,10)}Q.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let et=null;function ht(I){et&&et(I)}function tt(){ut.stop()}function St(){ut.start()}let ut=new qg;ut.setAnimationLoop(ht),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(I){et=I,Ge.setAnimationLoop(I),I===null?ut.stop():ut.start()},Ge.addEventListener("sessionstart",tt),Ge.addEventListener("sessionend",St),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(H),H=Ge.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,H,C),g=ue.get(I,x.length),g.init(H),x.push(g),fe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Re.setFromProjectionMatrix(fe),te=this.localClippingEnabled,G=oe.init(this.clippingPlanes,te),v=me.get(I,p.length),v.init(),p.push(v),Ui(I,H,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(k,J);let Z=Ge.enabled===!1||Ge.isPresenting===!1||Ge.hasDepthSensing()===!1;Z&&he.addToRenderList(v,I),this.info.render.frame++,G===!0&&oe.beginShadows();let K=g.state.shadowsArray;Ie.render(K,I,H),G===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=v.opaque,we=v.transmissive;if(g.setupLights(b._useLegacyLights),H.isArrayCamera){let De=H.cameras;if(we.length>0)for(let Ne=0,Ue=De.length;Ne<Ue;Ne++){let qe=De[Ne];ki(Y,we,I,qe)}Z&&he.render(I);for(let Ne=0,Ue=De.length;Ne<Ue;Ne++){let qe=De[Ne];wn(v,I,qe,qe.viewport)}}else we.length>0&&ki(Y,we,I,H),Z&&he.render(I),wn(v,I,H);C!==null&&(Se.updateMultisampleRenderTarget(C),Se.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(b,I,H),Fe.resetDefaultState(),L=-1,y=null,x.pop(),x.length>0?(g=x[x.length-1],G===!0&&oe.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ui(I,H,Z,K){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)Z=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Re.intersectsSprite(I)){K&&se.setFromMatrixPosition(I.matrixWorld).applyMatrix4(fe);let De=ne.update(I),Ne=I.material;Ne.visible&&v.push(I,De,Ne,Z,se.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Re.intersectsObject(I))){let De=ne.update(I),Ne=I.material;if(K&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),se.copy(I.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),se.copy(De.boundingSphere.center)),se.applyMatrix4(I.matrixWorld).applyMatrix4(fe)),Array.isArray(Ne)){let Ue=De.groups;for(let qe=0,Ye=Ue.length;qe<Ye;qe++){let Je=Ue[qe],Lt=Ne[Je.materialIndex];Lt&&Lt.visible&&v.push(I,De,Lt,Z,se.z,Je)}}else Ne.visible&&v.push(I,De,Ne,Z,se.z,null)}}let we=I.children;for(let De=0,Ne=we.length;De<Ne;De++)Ui(we[De],H,Z,K)}function wn(I,H,Z,K){let Y=I.opaque,we=I.transmissive,De=I.transparent;g.setupLightsView(Z),G===!0&&oe.setGlobalState(b.clippingPlanes,Z),K&&ie.viewport(w.copy(K)),Y.length>0&&di(Y,H,Z),we.length>0&&di(we,H,Z),De.length>0&&di(De,H,Z),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function ki(I,H,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[K.id]===void 0&&(g.state.transmissionRenderTarget[K.id]=new Nt(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Wn:Bn,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));let we=g.state.transmissionRenderTarget[K.id],De=K.viewport||w;we.setSize(De.z,De.w);let Ne=b.getRenderTarget();b.setRenderTarget(we),b.getClearColor(N),E=b.getClearAlpha(),E<1&&b.setClearColor(16777215,.5),b.clear();let Ue=b.toneMapping;b.toneMapping=On;let qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),g.setupLightsView(K),G===!0&&oe.setGlobalState(b.clippingPlanes,K),di(I,Z,K),Se.updateMultisampleRenderTarget(we),Se.updateRenderTargetMipmap(we),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Je=0,Lt=H.length;Je<Lt;Je++){let jt=H[Je],un=jt.object,fi=jt.geometry,ct=jt.material,Xe=jt.group;if(ct.side===zt&&un.layers.test(K.layers)){let ea=ct.side;ct.side=Vt,ct.needsUpdate=!0,Qs(un,Z,K,fi,ct,Xe),ct.side=ea,ct.needsUpdate=!0,Ye=!0}}Ye===!0&&(Se.updateMultisampleRenderTarget(we),Se.updateRenderTargetMipmap(we))}b.setRenderTarget(Ne),b.setClearColor(N,E),qe!==void 0&&(K.viewport=qe),b.toneMapping=Ue}function di(I,H,Z){let K=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,we=I.length;Y<we;Y++){let De=I[Y],Ne=De.object,Ue=De.geometry,qe=K===null?De.material:K,Ye=De.group;Ne.layers.test(Z.layers)&&Qs(Ne,H,Z,Ue,qe,Ye)}}function Qs(I,H,Z,K,Y,we){I.onBeforeRender(b,H,Z,K,Y,we),I.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Y.onBeforeRender(b,H,Z,K,I,we),Y.transparent===!0&&Y.side===zt&&Y.forceSinglePass===!1?(Y.side=Vt,Y.needsUpdate=!0,b.renderBufferDirect(Z,H,K,Y,I,we),Y.side=Un,Y.needsUpdate=!0,b.renderBufferDirect(Z,H,K,Y,I,we),Y.side=zt):b.renderBufferDirect(Z,H,K,Y,I,we),I.onAfterRender(b,H,Z,K,Y,we)}function mo(I,H,Z){H.isScene!==!0&&(H=ye);let K=le.get(I),Y=g.state.lights,we=g.state.shadowsArray,De=Y.state.version,Ne=V.getParameters(I,Y.state,we,H,Z),Ue=V.getProgramCacheKey(Ne),qe=K.programs;K.environment=I.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(I.isMeshStandardMaterial?F:Le).get(I.envMap||K.environment),K.envMapRotation=K.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,qe===void 0&&(I.addEventListener("dispose",ce),qe=new Map,K.programs=qe);let Ye=qe.get(Ue);if(Ye!==void 0){if(K.currentProgram===Ye&&K.lightsStateVersion===De)return ep(I,Ne),Ye}else Ne.uniforms=V.getUniforms(I),I.onBuild(Z,Ne,b),I.onBeforeCompile(Ne,b),Ye=V.acquireProgram(Ne,Ue),qe.set(Ue,Ye),K.uniforms=Ne.uniforms;let Je=K.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Je.clippingPlanes=oe.uniform),ep(I,Ne),K.needsLights=Pv(I),K.lightsStateVersion=De,K.needsLights&&(Je.ambientLightColor.value=Y.state.ambient,Je.lightProbe.value=Y.state.probe,Je.directionalLights.value=Y.state.directional,Je.directionalLightShadows.value=Y.state.directionalShadow,Je.spotLights.value=Y.state.spot,Je.spotLightShadows.value=Y.state.spotShadow,Je.rectAreaLights.value=Y.state.rectArea,Je.ltc_1.value=Y.state.rectAreaLTC1,Je.ltc_2.value=Y.state.rectAreaLTC2,Je.pointLights.value=Y.state.point,Je.pointLightShadows.value=Y.state.pointShadow,Je.hemisphereLights.value=Y.state.hemi,Je.directionalShadowMap.value=Y.state.directionalShadowMap,Je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Je.spotShadowMap.value=Y.state.spotShadowMap,Je.spotLightMatrix.value=Y.state.spotLightMatrix,Je.spotLightMap.value=Y.state.spotLightMap,Je.pointShadowMap.value=Y.state.pointShadowMap,Je.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=Ye,K.uniformsList=null,Ye}function Qf(I){if(I.uniformsList===null){let H=I.currentProgram.getUniforms();I.uniformsList=Es.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function ep(I,H){let Z=le.get(I);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function Rv(I,H,Z,K,Y){H.isScene!==!0&&(H=ye),Se.resetTextureUnits();let we=H.fog,De=K.isMeshStandardMaterial?H.environment:null,Ne=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:kt,Ue=(K.isMeshStandardMaterial?F:Le).get(K.envMap||De),qe=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ye=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Je=!!Z.morphAttributes.position,Lt=!!Z.morphAttributes.normal,jt=!!Z.morphAttributes.color,un=On;K.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(un=b.toneMapping);let fi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ct=fi!==void 0?fi.length:0,Xe=le.get(K),ea=g.state.lights;if(G===!0&&(te===!0||I!==y)){let Mn=I===y&&K.id===L;oe.setState(K,I,Mn)}let _t=!1;K.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==ea.state.version||Xe.outputColorSpace!==Ne||Y.isBatchedMesh&&Xe.batching===!1||!Y.isBatchedMesh&&Xe.batching===!0||Y.isInstancedMesh&&Xe.instancing===!1||!Y.isInstancedMesh&&Xe.instancing===!0||Y.isSkinnedMesh&&Xe.skinning===!1||!Y.isSkinnedMesh&&Xe.skinning===!0||Y.isInstancedMesh&&Xe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xe.instancingMorph===!1&&Y.morphTexture!==null||Xe.envMap!==Ue||K.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==oe.numPlanes||Xe.numIntersection!==oe.numIntersection)||Xe.vertexAlphas!==qe||Xe.vertexTangents!==Ye||Xe.morphTargets!==Je||Xe.morphNormals!==Lt||Xe.morphColors!==jt||Xe.toneMapping!==un||Xe.morphTargetsCount!==ct)&&(_t=!0):(_t=!0,Xe.__version=K.version);let fr=Xe.currentProgram;_t===!0&&(fr=mo(K,H,Y));let tp=!1,ta=!1,$l=!1,Kt=fr.getUniforms(),Bi=Xe.uniforms;if(ie.useProgram(fr.program)&&(tp=!0,ta=!0,$l=!0),K.id!==L&&(L=K.id,ta=!0),tp||y!==I){Kt.setValue(B,"projectionMatrix",I.projectionMatrix),Kt.setValue(B,"viewMatrix",I.matrixWorldInverse);let Mn=Kt.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,se.setFromMatrixPosition(I.matrixWorld)),ae.logarithmicDepthBuffer&&Kt.setValue(B,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Kt.setValue(B,"isOrthographic",I.isOrthographicCamera===!0),y!==I&&(y=I,ta=!0,$l=!0)}if(Y.isSkinnedMesh){Kt.setOptional(B,Y,"bindMatrix"),Kt.setOptional(B,Y,"bindMatrixInverse");let Mn=Y.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Kt.setValue(B,"boneTexture",Mn.boneTexture,Se))}Y.isBatchedMesh&&(Kt.setOptional(B,Y,"batchingTexture"),Kt.setValue(B,"batchingTexture",Y._matricesTexture,Se));let Ql=Z.morphAttributes;if((Ql.position!==void 0||Ql.normal!==void 0||Ql.color!==void 0)&&ve.update(Y,Z,fr),(ta||Xe.receiveShadow!==Y.receiveShadow)&&(Xe.receiveShadow=Y.receiveShadow,Kt.setValue(B,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bi.envMap.value=Ue,Bi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&H.environment!==null&&(Bi.envMapIntensity.value=H.environmentIntensity),ta&&(Kt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&Cv(Bi,$l),we&&K.fog===!0&&$.refreshFogUniforms(Bi,we),$.refreshMaterialUniforms(Bi,K,q,U,g.state.transmissionRenderTarget[I.id]),Es.upload(B,Qf(Xe),Bi,Se)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Es.upload(B,Qf(Xe),Bi,Se),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Kt.setValue(B,"center",Y.center),Kt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),Kt.setValue(B,"normalMatrix",Y.normalMatrix),Kt.setValue(B,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Mn=K.uniformsGroups;for(let eh=0,Lv=Mn.length;eh<Lv;eh++){let np=Mn[eh];Ke.update(np,fr),Ke.bind(np,fr)}}return fr}function Cv(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function Pv(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,H,Z){le.get(I.texture).__webglTexture=H,le.get(I.depthTexture).__webglTexture=Z;let K=le.get(I);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,H){let Z=le.get(I);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(I,H=0,Z=0){C=I,R=H,S=Z;let K=!0,Y=null,we=!1,De=!1;if(I){let Ue=le.get(I);Ue.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(B.FRAMEBUFFER,null),K=!1):Ue.__webglFramebuffer===void 0?Se.setupRenderTarget(I):Ue.__hasExternalTextures&&Se.rebindTextures(I,le.get(I.texture).__webglTexture,le.get(I.depthTexture).__webglTexture);let qe=I.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);let Ye=le.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Ye[H])?Y=Ye[H][Z]:Y=Ye[H],we=!0):I.samples>0&&Se.useMultisampledRTT(I)===!1?Y=le.get(I).__webglMultisampledFramebuffer:Array.isArray(Ye)?Y=Ye[Z]:Y=Ye,w.copy(I.viewport),P.copy(I.scissor),O=I.scissorTest}else w.copy(ee).multiplyScalar(q).floor(),P.copy(re).multiplyScalar(q).floor(),O=be;if(ie.bindFramebuffer(B.FRAMEBUFFER,Y)&&K&&ie.drawBuffers(I,Y),ie.viewport(w),ie.scissor(P),ie.setScissorTest(O),we){let Ue=le.get(I.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,Z)}else if(De){let Ue=le.get(I.texture),qe=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,Z||0,qe)}L=-1},this.readRenderTargetPixels=function(I,H,Z,K,Y,we,De){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=le.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){ie.bindFramebuffer(B.FRAMEBUFFER,Ne);try{let Ue=I.texture,qe=Ue.format,Ye=Ue.type;if(!ae.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-K&&Z>=0&&Z<=I.height-Y&&B.readPixels(H,Z,K,Y,xe.convert(qe),xe.convert(Ye),we)}finally{let Ue=C!==null?le.get(C).__webglFramebuffer:null;ie.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(I,H,Z=0){let K=Math.pow(2,-Z),Y=Math.floor(H.image.width*K),we=Math.floor(H.image.height*K);Se.setTexture2D(H,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,I.x,I.y,Y,we),ie.unbindTexture()},this.copyTextureToTexture=function(I,H,Z,K=0){let Y=H.image.width,we=H.image.height,De=xe.convert(Z.format),Ne=xe.convert(Z.type);Se.setTexture2D(Z,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Z.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Z.unpackAlignment),H.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,I.x,I.y,Y,we,De,Ne,H.image.data):H.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,I.x,I.y,H.mipmaps[0].width,H.mipmaps[0].height,De,H.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,K,I.x,I.y,De,Ne,H.image),K===0&&Z.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(I,H,Z,K,Y=0){let we=I.max.x-I.min.x,De=I.max.y-I.min.y,Ne=I.max.z-I.min.z,Ue=xe.convert(K.format),qe=xe.convert(K.type),Ye;if(K.isData3DTexture)Se.setTexture3D(K,0),Ye=B.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)Se.setTexture2DArray(K,0),Ye=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);let Je=B.getParameter(B.UNPACK_ROW_LENGTH),Lt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),jt=B.getParameter(B.UNPACK_SKIP_PIXELS),un=B.getParameter(B.UNPACK_SKIP_ROWS),fi=B.getParameter(B.UNPACK_SKIP_IMAGES),ct=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ct.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,I.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,I.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,I.min.z),Z.isDataTexture||Z.isData3DTexture?B.texSubImage3D(Ye,Y,H.x,H.y,H.z,we,De,Ne,Ue,qe,ct.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Ye,Y,H.x,H.y,H.z,we,De,Ne,Ue,ct.data):B.texSubImage3D(Ye,Y,H.x,H.y,H.z,we,De,Ne,Ue,qe,ct),B.pixelStorei(B.UNPACK_ROW_LENGTH,Je),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Lt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,un),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fi),Y===0&&K.generateMipmaps&&B.generateMipmap(Ye),ie.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Se.setTextureCube(I,0):I.isData3DTexture?Se.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Se.setTexture2DArray(I,0):Se.setTexture2D(I,0),ie.unbindTexture()},this.resetState=function(){R=0,S=0,C=null,ie.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===vl?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===ro?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},yc=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},Ds=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ge(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ci=class extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vg("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Qt=new T,xn=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=je(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=je(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=je(t,this.array),n=je(n,this.array),i=je(i,this.array),r=je(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Be(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ua=class extends Tt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ms,aa=new T,gs=new T,vs=new T,bs=new j,oa=new j,$g=new Pe,Uo=new T,ca=new T,ko=new T,qp=new j,Eh=new j,Xp=new j,wc=class extends nt{constructor(e=new Ua){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new He;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zn(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new xn(n,3,0,!1)),ms.setAttribute("uv",new xn(n,2,3,!1))}this.geometry=ms,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),$g.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Bo(Uo.set(-.5,-.5,0),vs,a,gs,i,r),Bo(ca.set(.5,-.5,0),vs,a,gs,i,r),Bo(ko.set(.5,.5,0),vs,a,gs,i,r),qp.set(0,0),Eh.set(1,0),Xp.set(1,1);let o=e.ray.intersectTriangle(Uo,ca,ko,!1,aa);if(o===null&&(Bo(ca.set(-.5,.5,0),vs,a,gs,i,r),Eh.set(0,1),o=e.ray.intersectTriangle(Uo,ko,ca,!1,aa),o===null))return;let c=e.ray.origin.distanceTo(aa);c<e.near||c>e.far||t.push({distance:c,point:aa.clone(),uv:wi.getInterpolation(aa,Uo,ca,ko,qp,Eh,Xp,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Bo(s,e,t,n,i,r){bs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(oa.x=r*bs.x-i*bs.y,oa.y=i*bs.x+r*bs.y):oa.copy(bs),s.copy(e),s.x+=oa.x,s.y+=oa.y,s.applyMatrix4($g)}var zo=new T,jp=new T,Mc=class extends nt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);let t=e.levels;for(let n=0,i=t.length;n<i;n++){let r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);let i=this.levels,r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){let t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){zo.setFromMatrixPosition(this.matrixWorld);let i=e.ray.origin.distanceTo(zo);this.getObjectForDistance(i).raycast(e,t)}}update(e){let t=this.levels;if(t.length>1){zo.setFromMatrixPosition(e.matrixWorld),jp.setFromMatrixPosition(this.matrixWorld);let n=zo.distanceTo(jp)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){let t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];let n=this.levels;for(let i=0,r=n.length;i<r;i++){let a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}},Kp=new T,Yp=new $e,Jp=new $e,vM=new T,Zp=new Pe,Ho=new T,Ah=new wt,$p=new Pe,Th=new Qn,Is=class extends rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingBox.expandByPoint(Ho)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ho),this.boundingSphere.expandByPoint(Ho)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ah.copy(this.boundingSphere),Ah.applyMatrix4(i),e.ray.intersectsSphere(Ah)!==!1&&($p.copy(i).invert(),Th.copy(e.ray).applyMatrix4($p),!(this.boundingBox!==null&&Th.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Th)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Yp.fromBufferAttribute(i.attributes.skinIndex,e),Jp.fromBufferAttribute(i.attributes.skinWeight,e),Kp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Jp.getComponent(r);if(a!==0){let o=Yp.getComponent(r);Zp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vM.copy(Kp).applyMatrix4(Zp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Vr=class extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},gn=class extends Mt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=xt,h=xt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qp=new Pe,bM=new Pe,Ns=class s{constructor(e=[],t=[]){this.uuid=mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:bM;Qp.multiplyMatrices(o,t[r]),Qp.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gn(t,e,e,$t,on);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Vr),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Hn=class extends Be{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new Pe,em=new Pe,Vo=[],tm=new ft,xM=new Pe,la=new rt,ha=new wt,Fs=class extends rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xM)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),tm.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(tm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,xs),ha.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(n),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,xs),em.multiplyMatrices(n,xs),la.matrixWorld=em,la.raycast(e,Vo);for(let a=0,o=Vo.length;a<o;a++){let c=Vo[a];c.instanceId=r,c.object=this,t.push(c)}Vo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gn(new Float32Array(i*this.count),i,this.count,Nd,on));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};function _M(s,e){return s.z-e.z}function yM(s,e){return e.z-s.z}var Iu=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let n=this.pool,i=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});let r=n[this.index];i.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}},_s="batchId",Xi=new Pe,nm=new Pe,wM=new Pe,im=new Pe,Rh=new zr,Go=new ft,_r=new wt,ua=new T,Ch=new Iu,Zt=new rt,Wo=[];function MM(s,e,t=0){let n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){let i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}var Sc=class extends rt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,i){super(new He,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4),n=new gn(t,e,e,$t,on);this._matricesTexture=n}_initializeGeometry(e){let t=this.geometry,n=this._maxVertexCount,i=this._maxGeometryCount,r=this._maxIndexCount;if(this._geometryInitialized===!1){for(let o in e.attributes){let c=e.getAttribute(o),{array:l,itemSize:h,normalized:u}=c,d=new l.constructor(n*h),f=new Be(d,h,u);t.setAttribute(o,f)}if(e.getIndex()!==null){let o=n>65536?new Uint32Array(r):new Uint16Array(r);t.setIndex(new Be(o,1))}let a=i>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(_s,new Be(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(_s))throw new Error(`BatchedMesh: Geometry cannot use attribute "${_s}"`);let t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(let n in t.attributes){if(n===_s)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);let i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ft);let e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Xi),this.getBoundingBoxAt(i,Go).applyMatrix4(Xi),t.union(Go))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wt);let e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let i=0;i<e;i++)n[i]!==!1&&(this.getMatrixAt(i,Xi),this.getBoundingSphereAt(i,_r).applyMatrix4(Xi),t.union(_r))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");let i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1},r=null,a=this._reservedRanges,o=this._drawRanges,c=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;let l=e.getIndex(),h=l!==null;if(h&&(n===-1?i.indexCount=l.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let u=this._visibility,d=this._active,f=this._matricesTexture,m=this._matricesTexture.image.data;u.push(!0),d.push(!0);let v=this._geometryCount;this._geometryCount++,wM.toArray(m,v*16),f.needsUpdate=!0,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),c.push({boxInitialized:!1,box:new ft,sphereInitialized:!1,sphere:new wt});let g=this.geometry.getAttribute(_s);for(let p=0;p<i.vertexCount;p++)g.setX(i.vertexStart+p,v);return g.needsUpdate=!0,this.setGeometryAt(v,e),v}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);let n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");let c=o.vertexStart,l=o.vertexCount;for(let f in n.attributes){if(f===_s)continue;let m=t.getAttribute(f),v=n.getAttribute(f);MM(m,v,c);let g=m.itemSize;for(let p=m.count,x=l;p<x;p++){let b=c+p;for(let _=0;_<g;_++)v.setComponent(b,_,0)}v.needsUpdate=!0,v.addUpdateRange(c*g,l*g)}if(i){let f=o.indexStart;for(let m=0;m<a.count;m++)r.setX(f+m,c+a.getX(m));for(let m=a.count,v=o.indexCount;m<v;m++)r.setX(f+m,c);r.needsUpdate=!0,r.addUpdateRange(f,o.indexCount)}let h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;let u=this._drawRanges[e],d=t.getAttribute("position");return u.count=i?a.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){let t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.box,a=this.geometry;if(i.boxInitialized===!1){r.makeEmpty();let o=a.index,c=a.attributes.position,l=this._drawRanges[e];for(let h=l.start,u=l.start+l.count;h<u;h++){let d=h;o&&(d=o.getX(d)),r.expandByPoint(ua.fromBufferAttribute(c,d))}i.boxInitialized=!0}return t.copy(r),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;let i=this._bounds[e],r=i.sphere,a=this.geometry;if(i.sphereInitialized===!1){r.makeEmpty(),this.getBoundingBoxAt(e,Go),Go.getCenter(r.center);let o=a.index,c=a.attributes.position,l=this._drawRanges[e],h=0;for(let u=l.start,d=l.start+l.count;u<d;u++){let f=u;o&&(f=o.getX(f)),ua.fromBufferAttribute(c,f),h=Math.max(h,r.center.distanceToSquared(ua))}r.radius=Math.sqrt(h),i.sphereInitialized=!0}return t.copy(r),t}setMatrixAt(e,t){let n=this._active,i=this._matricesTexture,r=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){let n=this._active,i=this._matricesTexture.image.data,r=this._geometryCount;return e>=r||n[e]===!1?null:t.fromArray(i,e*16)}setVisibleAt(e,t){let n=this._visibility,i=this._active,r=this._geometryCount;return e>=r||i[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){let t=this._visibility,n=this._active,i=this._geometryCount;return e>=i||n[e]===!1?!1:t[e]}raycast(e,t){let n=this._visibility,i=this._active,r=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,c=this.geometry;Zt.material=this.material,Zt.geometry.index=c.index,Zt.geometry.attributes=c.attributes,Zt.geometry.boundingBox===null&&(Zt.geometry.boundingBox=new ft),Zt.geometry.boundingSphere===null&&(Zt.geometry.boundingSphere=new wt);for(let l=0;l<a;l++){if(!n[l]||!i[l])continue;let h=r[l];Zt.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(l,Zt.matrixWorld).premultiply(o),this.getBoundingBoxAt(l,Zt.geometry.boundingBox),this.getBoundingSphereAt(l,Zt.geometry.boundingSphere),Zt.raycast(e,Wo);for(let u=0,d=Wo.length;u<d;u++){let f=Wo[u];f.object=this,f.batchId=l,t.push(f)}Wo.length=0}Zt.material=null,Zt.geometry.index=null,Zt.geometry.attributes={},Zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;let a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,c=this._active,l=this._visibility,h=this._multiDrawStarts,u=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(im.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Rh.setFromProjectionMatrix(im,e.coordinateSystem));let m=0;if(this.sortObjects){nm.copy(this.matrixWorld).invert(),ua.setFromMatrixPosition(n.matrixWorld).applyMatrix4(nm);for(let p=0,x=l.length;p<x;p++)if(l[p]&&c[p]){this.getMatrixAt(p,Xi),this.getBoundingSphereAt(p,_r).applyMatrix4(Xi);let b=!1;if(f&&(b=!Rh.intersectsSphere(_r)),!b){let _=ua.distanceTo(_r.center);Ch.push(d[p],_)}}let v=Ch.list,g=this.customSort;g===null?v.sort(r.transparent?yM:_M):g.call(this,v,n);for(let p=0,x=v.length;p<x;p++){let b=v[p];h[m]=b.start*o,u[m]=b.count,m++}Ch.reset()}else for(let v=0,g=l.length;v<g;v++)if(l[v]&&c[v]){let p=!1;if(f&&(this.getMatrixAt(v,Xi),this.getBoundingSphereAt(v,_r).applyMatrix4(Xi),p=!Rh.intersectsSphere(_r)),!p){let x=d[v];h[m]=x.start*o,u[m]=x.count,m++}}this._multiDrawCount=m,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}},Ut=class extends Tt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Ec=new T,Ac=new T,rm=new Pe,da=new Qn,qo=new wt,Ph=new T,sm=new T,En=class extends nt{constructor(e=new He,t=new Ut){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ec.fromBufferAttribute(t,i-1),Ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ec.distanceTo(Ac);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(i),qo.radius+=r,e.ray.intersectsSphere(qo)===!1)return;rm.copy(i).invert(),da.copy(e.ray).applyMatrix4(rm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=h.getX(v),x=h.getX(v+1),b=Xo(this,e,da,c,p,x);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(m-1),g=h.getX(f),p=Xo(this,e,da,c,v,g);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,g=m-1;v<g;v+=l){let p=Xo(this,e,da,c,v,v+1);p&&t.push(p)}if(this.isLineLoop){let v=Xo(this,e,da,c,m-1,f);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xo(s,e,t,n,i,r){let a=s.geometry.attributes.position;if(Ec.fromBufferAttribute(a,i),Ac.fromBufferAttribute(a,r),t.distanceSqToSegment(Ec,Ac,Ph,sm)>n)return;Ph.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ph);if(!(c<e.near||c>e.far))return{distance:c,point:sm.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}var am=new T,om=new T,ln=class extends En{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)am.fromBufferAttribute(t,i),om.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+am.distanceTo(om);e.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Os=class extends En{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Gr=class extends Tt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cm=new Pe,Nu=new Qn,jo=new wt,Ko=new T,Us=class extends nt{constructor(e=new He,t=new Gr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;cm.copy(i).invert(),Nu.copy(e.ray).applyMatrix4(cm);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,v=f;m<v;m++){let g=l.getX(m);Ko.fromBufferAttribute(u,g),lm(Ko,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,v=f;m<v;m++)Ko.fromBufferAttribute(u,m),lm(Ko,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lm(s,e,t,n,i,r,a){let o=Nu.distanceSqToPoint(s);if(o<t){let c=new T;Nu.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}var Fu=class extends Mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:lt,this.magFilter=r!==void 0?r:lt,this.generateMipmaps=!1;let h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Ou=class extends Mt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=xt,this.minFilter=xt,this.generateMipmaps=!1,this.needsUpdate=!0}},ks=class extends Mt{constructor(e,t,n,i,r,a,o,c,l,h,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Uu=class extends ks{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=Ht}},ku=class extends ks{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ai),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}},ka=class extends Mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_n=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new j:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new T,i=[],r=[],a=[],o=new T,c=new Pe;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(At(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(At(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),a[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Bs=class extends _n{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new j){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends Bs{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Wd(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Yo=new T,Lh=new Wd,Dh=new Wd,Ih=new Wd,Rc=class extends _n{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Yo.subVectors(i[0],i[1]).add(i[0]),l=Yo);let u=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Yo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Lh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Dh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Ih.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Dh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ih.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lh.calc(c),Dh.calc(c),Ih.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hm(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function SM(s,e){let t=1-s;return t*t*e}function EM(s,e){return 2*(1-s)*s*e}function AM(s,e){return s*s*e}function ba(s,e,t,n){return SM(s,e)+EM(s,t)+AM(s,n)}function TM(s,e){let t=1-s;return t*t*t*e}function RM(s,e){let t=1-s;return 3*t*t*s*e}function CM(s,e){return 3*(1-s)*s*s*e}function PM(s,e){return s*s*s*e}function xa(s,e,t,n,i){return TM(s,e)+RM(s,t)+CM(s,n)+PM(s,i)}var Ba=class extends _n{constructor(e=new j,t=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new j){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,i.x,r.x,a.x,o.x),xa(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends _n{constructor(e=new T,t=new T,n=new T,i=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(xa(e,i.x,r.x,a.x,o.x),xa(e,i.y,r.y,a.y,o.y),xa(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},za=class extends _n{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pc=class extends _n{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends _n{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ba(e,i.x,r.x,a.x),ba(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Va=class extends _n{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(ba(e,i.x,r.x,a.x),ba(e,i.y,r.y,a.y),ba(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(hm(o,c.x,l.x,h.x,u.x),hm(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new j().fromArray(i))}return this}},Lc=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Rc,CubicBezierCurve:Ba,CubicBezierCurve3:Cc,EllipseCurve:Bs,LineCurve:za,LineCurve3:Pc,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:Va,SplineCurve:Ga}),Dc=class extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Lc[i.type]().fromJSON(i))}return this}},Wr=class extends Dc{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new za(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ha(this.currentPoint.clone(),new j(e,t),new j(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Ba(this.currentPoint.clone(),new j(e,t),new j(n,i),new j(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ga(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Bs(e,t,n,i,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Wa=class s extends He{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=At(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new T,d=new j,f=new T,m=new T,v=new T,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let x=0;x<=t;x++){let b=n+x*h*i,_=Math.sin(b),R=Math.cos(b);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*_,u.y=e[S].y,u.z=e[S].x*R,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let C=c[3*S+0]*_,L=c[3*S+1],y=c[3*S+0]*R;l.push(C,L,y)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let _=b+x*e.length,R=_,S=_+e.length,C=_+e.length+1,L=_+1;r.push(R,S,L),r.push(C,L,S)}this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("uv",new Te(o,2)),this.setAttribute("normal",new Te(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Ic=class s extends Wa{constructor(e=1,t=1,n=4,i=8){let r=new Wr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},zs=class s extends He{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new T,h=new j;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Te(a,3)),this.setAttribute("normal",new Te(o,3)),this.setAttribute("uv",new Te(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$i=class s extends He{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,v=[],g=n/2,p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function x(){let _=new T,R=new T,S=0,C=(t-e)/n;for(let L=0;L<=r;L++){let y=[],w=L/r,P=w*(t-e)+e;for(let O=0;O<=i;O++){let N=O/i,E=N*c+o,D=Math.sin(E),U=Math.cos(E);R.x=P*D,R.y=-w*n+g,R.z=P*U,u.push(R.x,R.y,R.z),_.set(D,C,U).normalize(),d.push(_.x,_.y,_.z),f.push(N,1-w),y.push(m++)}v.push(y)}for(let L=0;L<i;L++)for(let y=0;y<r;y++){let w=v[y][L],P=v[y+1][L],O=v[y+1][L+1],N=v[y][L+1];h.push(w,P,N),h.push(P,O,N),S+=6}l.addGroup(p,S,0),p+=S}function b(_){let R=m,S=new j,C=new T,L=0,y=_===!0?e:t,w=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let P=m;for(let O=0;O<=i;O++){let E=O/i*c+o,D=Math.cos(E),U=Math.sin(E);C.x=y*U,C.y=g*w,C.z=y*D,u.push(C.x,C.y,C.z),d.push(0,w,0),S.x=D*.5+.5,S.y=U*.5*w+.5,f.push(S.x,S.y),m++}for(let O=0;O<i;O++){let N=R+O,E=P+O;_===!0?h.push(E,E+1,N):h.push(E+1,E,N),L+=3}l.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Nc=class s extends $i{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Qi=class s extends He{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new Te(r,3)),this.setAttribute("normal",new Te(r.slice(),3)),this.setAttribute("uv",new Te(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let b=new T,_=new T,R=new T;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],_),f(t[S+2],R),c(b,_,R,x)}function c(x,b,_,R){let S=R+1,C=[];for(let L=0;L<=S;L++){C[L]=[];let y=x.clone().lerp(_,L/S),w=b.clone().lerp(_,L/S),P=S-L;for(let O=0;O<=P;O++)O===0&&L===S?C[L][O]=y:C[L][O]=y.clone().lerp(w,O/P)}for(let L=0;L<S;L++)for(let y=0;y<2*(S-L)-1;y++){let w=Math.floor(y/2);y%2===0?(d(C[L][w+1]),d(C[L+1][w]),d(C[L][w])):(d(C[L][w+1]),d(C[L+1][w+1]),d(C[L+1][w]))}}function l(x){let b=new T;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(x),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let x=new T;for(let b=0;b<r.length;b+=3){x.x=r[b+0],x.y=r[b+1],x.z=r[b+2];let _=g(x)/2/Math.PI+.5,R=p(x)/Math.PI+.5;a.push(_,1-R)}m(),u()}function u(){for(let x=0;x<a.length;x+=6){let b=a[x+0],_=a[x+2],R=a[x+4],S=Math.max(b,_,R),C=Math.min(b,_,R);S>.9&&C<.1&&(b<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),R<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,b){let _=x*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function m(){let x=new T,b=new T,_=new T,R=new T,S=new j,C=new j,L=new j;for(let y=0,w=0;y<r.length;y+=9,w+=6){x.set(r[y+0],r[y+1],r[y+2]),b.set(r[y+3],r[y+4],r[y+5]),_.set(r[y+6],r[y+7],r[y+8]),S.set(a[w+0],a[w+1]),C.set(a[w+2],a[w+3]),L.set(a[w+4],a[w+5]),R.copy(x).add(b).add(_).divideScalar(3);let P=g(R);v(S,w+0,x,P),v(C,w+2,b,P),v(L,w+4,_,P)}}function v(x,b,_,R){R<0&&x.x===1&&(a[b]=x.x-1),_.x===0&&_.z===0&&(a[b]=R/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},Fc=class s extends Qi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Jo=new T,Zo=new T,Nh=new T,$o=new wi,Oc=class extends He{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(Fr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},f=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:v,b:g,c:p}=$o;if(v.fromBufferAttribute(o,l[0]),g.fromBufferAttribute(o,l[1]),p.fromBufferAttribute(o,l[2]),$o.getNormal(Nh),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let x=0;x<3;x++){let b=(x+1)%3,_=u[x],R=u[b],S=$o[h[x]],C=$o[h[b]],L=`${_}_${R}`,y=`${R}_${_}`;y in d&&d[y]?(Nh.dot(d[y].normal)<=r&&(f.push(S.x,S.y,S.z),f.push(C.x,C.y,C.z)),d[y]=null):L in d||(d[L]={index0:l[x],index1:l[b],normal:Nh.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:g}=d[m];Jo.fromBufferAttribute(o,v),Zo.fromBufferAttribute(o,g),f.push(Jo.x,Jo.y,Jo.z),f.push(Zo.x,Zo.y,Zo.z)}this.setAttribute("position",new Te(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Ei=class extends Wr{constructor(e){super(e),this.uuid=mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Wr().fromJSON(i))}return this}},LM={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Qg(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=OM(s,e,r,t)),s.length>80*t){o=l=s[0],c=h=s[1];for(let m=t;m<i;m+=t)u=s[m],d=s[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return qa(r,a,t,o,c,f,0),a}};function Qg(s,e,t,n,i){let r,a;if(i===jM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=um(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=um(r,s[r],s[r+1],a);return a&&_l(a,a.next)&&(ja(a),a=a.next),a}function qr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(_l(t,t.next)||yt(t.prev,t,t.next)===0)){if(ja(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function qa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&HM(s,n,i,r);let o=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?IM(s,n,i,r):DM(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),ja(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=NM(qr(s),e,t),qa(s,e,t,n,i,r,2)):a===2&&FM(s,e,t,n,i,r):qa(qr(s),e,t,n,i,r,1);break}}}function DM(s){let e=s.prev,t=s,n=s.next;if(yt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=i>r?i>a?i:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Ms(i,o,r,c,a,l,m.x,m.y)&&yt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function IM(s,e,t,n){let i=s.prev,r=s,a=s.next;if(yt(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,v=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Bu(f,m,e,t,n),x=Bu(v,g,e,t,n),b=s.prevZ,_=s.nextZ;for(;b&&b.z>=p&&_&&_.z<=x;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Ms(o,h,c,u,l,d,b.x,b.y)&&yt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ms(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=m&&b.y<=g&&b!==i&&b!==a&&Ms(o,h,c,u,l,d,b.x,b.y)&&yt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=v&&_.y>=m&&_.y<=g&&_!==i&&_!==a&&Ms(o,h,c,u,l,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function NM(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!_l(i,r)&&e0(i,n,n.next,r)&&Xa(i,r)&&Xa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ja(n),ja(n.next),n=s=r),n=n.next}while(n!==s);return qr(n)}function FM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&WM(a,o)){let c=t0(a,o);a=qr(a,a.next),c=qr(c,c.next),qa(a,e,t,n,i,r,0),qa(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function OM(s,e,t,n){let i=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Qg(s,o,c,n,!1),l===l.next&&(l.steiner=!0),i.push(GM(l));for(i.sort(UM),r=0;r<i.length;r++)t=kM(i[r],t);return t}function UM(s,e){return s.x-e.x}function kM(s,e){let t=BM(s,e);if(!t)return e;let n=t0(t,s);return qr(n,n.next),qr(t,t.next)}function BM(s,e){let t=e,n=-1/0,i,r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===r))return i}t=t.next}while(t!==e);if(!i)return null;let o=i,c=i.x,l=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ms(a<l?r:n,a,c,l,a<l?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Xa(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&zM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function zM(s,e){return yt(s.prev,s,e.prev)<0&&yt(e.next,s,s.next)<0}function HM(s,e,t,n){let i=s;do i.z===0&&(i.z=Bu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,VM(i)}function VM(s){let e,t,n,i,r,a,o,c,l=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(a>1);return s}function Bu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function GM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ms(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function WM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!qM(s,e)&&(Xa(s,e)&&Xa(e,s)&&XM(s,e)&&(yt(s.prev,s,e.prev)||yt(s,e.prev,e))||_l(s,e)&&yt(s.prev,s,s.next)>0&&yt(e.prev,e,e.next)>0)}function yt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function _l(s,e){return s.x===e.x&&s.y===e.y}function e0(s,e,t,n){let i=ec(yt(s,e,t)),r=ec(yt(s,e,n)),a=ec(yt(t,n,s)),o=ec(yt(t,n,e));return!!(i!==r&&a!==o||i===0&&Qo(s,t,e)||r===0&&Qo(s,n,e)||a===0&&Qo(t,s,n)||o===0&&Qo(t,e,n))}function Qo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ec(s){return s>0?1:s<0?-1:0}function qM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&e0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Xa(s,e){return yt(s.prev,s,s.next)<0?yt(s,e,s.next)>=0&&yt(s,s.prev,e)>=0:yt(s,e,s.prev)<0||yt(s,s.next,e)<0}function XM(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function t0(s,e){let t=new zu(s.i,s.x,s.y),n=new zu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function um(s,e,t,n){let i=new zu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ja(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function zu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var $n=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];dm(e),fm(n,e);let a=e.length;t.forEach(dm);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,fm(n,t[c]);let o=LM.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function dm(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function fm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Uc=class s extends He{constructor(e=new Ei([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Te(i,3)),this.setAttribute("uv",new Te(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:KM,b,_=!1,R,S,C,L;p&&(b=p.getSpacedPoints(h),_=!0,d=!1,R=p.computeFrenetFrames(h,!1),S=new T,C=new T,L=new T),d||(g=0,f=0,m=0,v=0);let y=o.extractPoints(l),w=y.shape,P=y.holes;if(!$n.isClockWise(w)){w=w.reverse();for(let Q=0,ae=P.length;Q<ae;Q++){let ie=P[Q];$n.isClockWise(ie)&&(P[Q]=ie.reverse())}}let N=$n.triangulateShape(w,P),E=w;for(let Q=0,ae=P.length;Q<ae;Q++){let ie=P[Q];w=w.concat(ie)}function D(Q,ae,ie){return ae||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ae,ie)}let U=w.length,q=N.length;function k(Q,ae,ie){let de,le,Se,Le=Q.x-ae.x,F=Q.y-ae.y,A=ie.x-Q.x,W=ie.y-Q.y,ne=Le*Le+F*F,V=Le*W-F*A;if(Math.abs(V)>Number.EPSILON){let $=Math.sqrt(ne),me=Math.sqrt(A*A+W*W),ue=ae.x-F/$,oe=ae.y+Le/$,Ie=ie.x-W/me,he=ie.y+A/me,ve=((Ie-ue)*W-(he-oe)*A)/(Le*W-F*A);de=ue+Le*ve-Q.x,le=oe+F*ve-Q.y;let Ee=de*de+le*le;if(Ee<=2)return new j(de,le);Se=Math.sqrt(Ee/2)}else{let $=!1;Le>Number.EPSILON?A>Number.EPSILON&&($=!0):Le<-Number.EPSILON?A<-Number.EPSILON&&($=!0):Math.sign(F)===Math.sign(W)&&($=!0),$?(de=-F,le=Le,Se=Math.sqrt(ne)):(de=Le,le=F,Se=Math.sqrt(ne/2))}return new j(de/Se,le/Se)}let J=[];for(let Q=0,ae=E.length,ie=ae-1,de=Q+1;Q<ae;Q++,ie++,de++)ie===ae&&(ie=0),de===ae&&(de=0),J[Q]=k(E[Q],E[ie],E[de]);let ee=[],re,be=J.concat();for(let Q=0,ae=P.length;Q<ae;Q++){let ie=P[Q];re=[];for(let de=0,le=ie.length,Se=le-1,Le=de+1;de<le;de++,Se++,Le++)Se===le&&(Se=0),Le===le&&(Le=0),re[de]=k(ie[de],ie[Se],ie[Le]);ee.push(re),be=be.concat(re)}for(let Q=0;Q<g;Q++){let ae=Q/g,ie=f*Math.cos(ae*Math.PI/2),de=m*Math.sin(ae*Math.PI/2)+v;for(let le=0,Se=E.length;le<Se;le++){let Le=D(E[le],J[le],de);se(Le.x,Le.y,-ie)}for(let le=0,Se=P.length;le<Se;le++){let Le=P[le];re=ee[le];for(let F=0,A=Le.length;F<A;F++){let W=D(Le[F],re[F],de);se(W.x,W.y,-ie)}}}let Re=m+v;for(let Q=0;Q<U;Q++){let ae=d?D(w[Q],be[Q],Re):w[Q];_?(C.copy(R.normals[0]).multiplyScalar(ae.x),S.copy(R.binormals[0]).multiplyScalar(ae.y),L.copy(b[0]).add(C).add(S),se(L.x,L.y,L.z)):se(ae.x,ae.y,0)}for(let Q=1;Q<=h;Q++)for(let ae=0;ae<U;ae++){let ie=d?D(w[ae],be[ae],Re):w[ae];_?(C.copy(R.normals[Q]).multiplyScalar(ie.x),S.copy(R.binormals[Q]).multiplyScalar(ie.y),L.copy(b[Q]).add(C).add(S),se(L.x,L.y,L.z)):se(ie.x,ie.y,u/h*Q)}for(let Q=g-1;Q>=0;Q--){let ae=Q/g,ie=f*Math.cos(ae*Math.PI/2),de=m*Math.sin(ae*Math.PI/2)+v;for(let le=0,Se=E.length;le<Se;le++){let Le=D(E[le],J[le],de);se(Le.x,Le.y,u+ie)}for(let le=0,Se=P.length;le<Se;le++){let Le=P[le];re=ee[le];for(let F=0,A=Le.length;F<A;F++){let W=D(Le[F],re[F],de);_?se(W.x,W.y+b[h-1].y,b[h-1].x+ie):se(W.x,W.y,u+ie)}}}G(),te();function G(){let Q=i.length/3;if(d){let ae=0,ie=U*ae;for(let de=0;de<q;de++){let le=N[de];ye(le[2]+ie,le[1]+ie,le[0]+ie)}ae=h+g*2,ie=U*ae;for(let de=0;de<q;de++){let le=N[de];ye(le[0]+ie,le[1]+ie,le[2]+ie)}}else{for(let ae=0;ae<q;ae++){let ie=N[ae];ye(ie[2],ie[1],ie[0])}for(let ae=0;ae<q;ae++){let ie=N[ae];ye(ie[0]+U*h,ie[1]+U*h,ie[2]+U*h)}}n.addGroup(Q,i.length/3-Q,0)}function te(){let Q=i.length/3,ae=0;fe(E,ae),ae+=E.length;for(let ie=0,de=P.length;ie<de;ie++){let le=P[ie];fe(le,ae),ae+=le.length}n.addGroup(Q,i.length/3-Q,1)}function fe(Q,ae){let ie=Q.length;for(;--ie>=0;){let de=ie,le=ie-1;le<0&&(le=Q.length-1);for(let Se=0,Le=h+g*2;Se<Le;Se++){let F=U*Se,A=U*(Se+1),W=ae+de+F,ne=ae+le+F,V=ae+le+A,$=ae+de+A;Ce(W,ne,V,$)}}}function se(Q,ae,ie){c.push(Q),c.push(ae),c.push(ie)}function ye(Q,ae,ie){B(Q),B(ae),B(ie);let de=i.length/3,le=x.generateTopUV(n,i,de-3,de-2,de-1);ke(le[0]),ke(le[1]),ke(le[2])}function Ce(Q,ae,ie,de){B(Q),B(ae),B(de),B(ae),B(ie),B(de);let le=i.length/3,Se=x.generateSideWallUV(n,i,le-6,le-3,le-2,le-1);ke(Se[0]),ke(Se[1]),ke(Se[3]),ke(Se[1]),ke(Se[2]),ke(Se[3])}function B(Q){i.push(c[Q*3+0]),i.push(c[Q*3+1]),i.push(c[Q*3+2])}function ke(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return YM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Lc[i.type]().fromJSON(i)),new s(n,e.options)}},KM={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],h=e[i*3+1];return[new j(r,a),new j(o,c),new j(l,h)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new j(a,1-c),new j(l,1-u),new j(d,1-m),new j(v,1-p)]:[new j(o,1-c),new j(h,1-u),new j(f,1-m),new j(g,1-p)]}};function YM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var kc=class s extends Qi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ka=class s extends Qi{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Bc=class s extends He{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/i,f=new T,m=new j;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<i;v++){let g=v*(n+1);for(let p=0;p<n;p++){let x=p+g,b=x,_=x+n+1,R=x+n+2,S=x+1;o.push(b,_,S),o.push(_,R,S)}}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},zc=class s extends He{constructor(e=new Ei([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],r=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Te(i,3)),this.setAttribute("normal",new Te(r,3)),this.setAttribute("uv",new Te(a,2));function l(h){let u=i.length/3,d=h.extractPoints(t),f=d.shape,m=d.holes;$n.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,p=m.length;g<p;g++){let x=m[g];$n.isClockWise(x)===!0&&(m[g]=x.reverse())}let v=$n.triangulateShape(f,m);for(let g=0,p=m.length;g<p;g++){let x=m[g];f=f.concat(x)}for(let g=0,p=f.length;g<p;g++){let x=f[g];i.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let g=0,p=v.length;g<p;g++){let x=v[g],b=x[0]+u,_=x[1]+u,R=x[2]+u;n.push(b,_,R),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return JM(t,e)}static fromJSON(e,t){let n=[];for(let i=0,r=e.shapes.length;i<r;i++){let a=t[e.shapes[i]];n.push(a)}return new s(n,e.curveSegments)}};function JM(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){let i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}var Xr=class s extends He{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){let x=[],b=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let S=R/t;u.x=-e*Math.cos(i+S*r)*Math.sin(a+b*o),u.y=e*Math.cos(a+b*o),u.z=e*Math.sin(i+S*r)*Math.sin(a+b*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(S+_,1-b),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let b=h[p][x+1],_=h[p][x],R=h[p+1][x],S=h[p+1][x+1];(p!==0||a>0)&&f.push(b,_,S),(p!==n-1||c<Math.PI)&&f.push(_,R,S)}this.setIndex(f),this.setAttribute("position",new Te(m,3)),this.setAttribute("normal",new Te(v,3)),this.setAttribute("uv",new Te(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Hc=class s extends Qi{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Vc=class s extends He{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let v=m/i*r,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(v),u.y=(e+t*Math.cos(g))*Math.sin(v),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let v=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,x=(i+1)*f+m;a.push(v,g,x),a.push(g,p,x)}this.setIndex(a),this.setAttribute("position",new Te(o,3)),this.setAttribute("normal",new Te(c,3)),this.setAttribute("uv",new Te(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Gc=class s extends He{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new T,d=new T,f=new T,m=new T,v=new T,g=new T,p=new T;for(let b=0;b<=n;++b){let _=b/n*r*Math.PI*2;x(_,r,a,e,f),x(_+.01,r,a,e,m),g.subVectors(m,f),p.addVectors(m,f),v.crossVectors(g,p),p.crossVectors(v,g),v.normalize(),p.normalize();for(let R=0;R<=i;++R){let S=R/i*Math.PI*2,C=-t*Math.cos(S),L=t*Math.sin(S);u.x=f.x+(C*p.x+L*v.x),u.y=f.y+(C*p.y+L*v.y),u.z=f.z+(C*p.z+L*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),l.push(d.x,d.y,d.z),h.push(b/n),h.push(R/i)}}for(let b=1;b<=n;b++)for(let _=1;_<=i;_++){let R=(i+1)*(b-1)+(_-1),S=(i+1)*b+(_-1),C=(i+1)*b+_,L=(i+1)*(b-1)+_;o.push(R,S,L),o.push(S,C,L)}this.setIndex(o),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(l,3)),this.setAttribute("uv",new Te(h,2));function x(b,_,R,S,C){let L=Math.cos(b),y=Math.sin(b),w=R/_*b,P=Math.cos(w);C.x=S*(2+P)*.5*L,C.y=S*(2+P)*y*.5,C.z=S*Math.sin(w)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Wc=class s extends He{constructor(e=new Va(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new j,h=new T,u=[],d=[],f=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(d,3)),this.setAttribute("uv",new Te(f,2));function v(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),x(),p()}function g(b){h=e.getPointAt(b/t,h);let _=a.normals[b],R=a.binormals[b];for(let S=0;S<=i;S++){let C=S/i*Math.PI*2,L=Math.sin(C),y=-Math.cos(C);c.x=y*_.x+L*R.x,c.y=y*_.y+L*R.y,c.z=y*_.z+L*R.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let _=1;_<=i;_++){let R=(i+1)*(b-1)+(_-1),S=(i+1)*b+(_-1),C=(i+1)*b+_,L=(i+1)*(b-1)+_;m.push(R,S,L),m.push(S,C,L)}}function x(){for(let b=0;b<=t;b++)for(let _=0;_<=i;_++)l.x=b/t,l.y=_/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Lc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},qc=class extends He{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new T,r=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start,f=u.count;for(let m=d,v=d+f;m<v;m+=3)for(let g=0;g<3;g++){let p=o.getX(m+g),x=o.getX(m+(g+1)%3);i.fromBufferAttribute(a,p),r.fromBufferAttribute(a,x),pm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),pm(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Te(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function pm(s,e,t){let n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var mm=Object.freeze({__proto__:null,BoxGeometry:kr,CapsuleGeometry:Ic,CircleGeometry:zs,ConeGeometry:Nc,CylinderGeometry:$i,DodecahedronGeometry:Fc,EdgesGeometry:Oc,ExtrudeGeometry:Uc,IcosahedronGeometry:kc,LatheGeometry:Wa,OctahedronGeometry:Ka,PlaneGeometry:Ri,PolyhedronGeometry:Qi,RingGeometry:Bc,ShapeGeometry:zc,SphereGeometry:Xr,TetrahedronGeometry:Hc,TorusGeometry:Vc,TorusKnotGeometry:Gc,TubeGeometry:Wc,WireframeGeometry:qc}),Xc=class extends Tt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ge(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},jc=class extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},er=class extends Tt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},nn=class extends er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Kc=class extends Tt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ge(16777215),this.specular=new ge(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yc=class extends Tt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ge(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jc=class extends Tt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Zc=class extends Tt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=to,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$c=class extends Tt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ge(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}},Qc=class extends Ut{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Lr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function n0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function i0(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hu(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function qd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function ZM(s,e,t,n,i=30){let r=s.clone();r.name=e;let a=[];for(let c=0;c<r.tracks.length;++c){let l=r.tracks[c],h=l.getValueSize(),u=[],d=[];for(let f=0;f<l.times.length;++f){let m=l.times[f]*i;if(!(m<t||m>=n)){u.push(l.times[f]);for(let v=0;v<h;++v)d.push(l.values[f*h+v])}}u.length!==0&&(l.times=Lr(u,l.times.constructor),l.values=Lr(d,l.values.constructor),a.push(l))}r.tracks=a;let o=1/0;for(let c=0;c<r.tracks.length;++c)o>r.tracks[c].times[0]&&(o=r.tracks[c].times[0]);for(let c=0;c<r.tracks.length;++c)r.tracks[c].shift(-1*o);return r.resetDuration(),r}function $M(s,e=0,t=s,n=30){n<=0&&(n=30);let i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){let o=t.tracks[a],c=o.ValueTypeName;if(c==="bool"||c==="string")continue;let l=s.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===c});if(l===void 0)continue;let h=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0,f=l.getValueSize();l.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);let m=o.times.length-1,v;if(r<=o.times[0]){let p=h,x=u-h;v=o.values.slice(p,x)}else if(r>=o.times[m]){let p=m*u+h,x=p+u-h;v=o.values.slice(p,x)}else{let p=o.createInterpolant(),x=h,b=u-h;p.evaluate(r),v=p.resultBuffer.slice(x,b)}c==="quaternion"&&new dt().fromArray(v).normalize().conjugate().toArray(v);let g=l.times.length;for(let p=0;p<g;++p){let x=p*f+d;if(c==="quaternion")dt.multiplyQuaternionsFlat(l.values,x,v,0,l.values,x);else{let b=f-d*2;for(let _=0;_<b;++_)l.values[x+_]-=v[_]}}}return s.blendMode=kd,s}var QM={convertArray:Lr,isTypedArray:n0,getKeyframeOrder:i0,sortedArray:Hu,flattenJSON:qd,subclip:ZM,makeClipAdditive:$M},Pi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},el=class extends Pi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cr,endingEnd:Cr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pr:r=e,o=2*t-n;break;case Ma:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pr:a=e,c=2*n-t;break;case Ma:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),v=m*m,g=v*m,p=-d*g+2*d*v-d*m,x=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*m+1,b=(-1-f)*g+(1.5+f)*v+.5*m,_=f*g-f*v;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+x*a[l+R]+b*a[c+R]+_*a[u+R];return r}},Ya=class extends Pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},tl=class extends Pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Lr(t,this.TimeBufferType),this.values=Lr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Lr(e.times,Array),values:Lr(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new el(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case Zi:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Zi;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&n0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===fc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let v=t[u+m];if(v!==t[d+m]||v!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Zi;var Li=class extends yn{};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ur;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends yn{};Ja.prototype.ValueTypeName="color";var ni=class extends yn{};ni.prototype.ValueTypeName="number";var nl=class extends Pi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)dt.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vn=class extends yn{InterpolantFactoryMethodLinear(e){return new nl(this.times,this.values,this.getValueSize(),e)}};Vn.prototype.ValueTypeName="quaternion";Vn.prototype.DefaultInterpolation=Zi;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends yn{};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Ur;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends yn{};ii.prototype.ValueTypeName="vector";var Ii=class{constructor(e="",t=-1,n=[],i=gl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tS(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=i0(c);c=Hu(c,1,h),l=Hu(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ni(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,v){if(f.length!==0){let g=[],p=[];qd(f,g,p,m),g.length!==0&&v.push(new u(d,g,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let v=0;v<d[m].morphTargets.length;v++)f[d[m].morphTargets[v]]=-1;for(let v in f){let g=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){let b=d[m];g.push(b.time),p.push(b.morphTarget===v?1:0)}i.push(new ni(".morphTargetInfluence["+v+"]",g,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(ii,f+".position",d,"pos",i),n(Vn,f+".quaternion",d,"rot",i),n(ii,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function eS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ni;case"vector":case"vector2":case"vector3":case"vector4":return ii;case"color":return Ja;case"quaternion":return Vn;case"bool":case"boolean":return Li;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eS(s.type);if(s.times===void 0){let t=[],n=[];qd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Za=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},r0=new Za,Wt=class{constructor(e){this.manager=e!==void 0?e:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Wt.DEFAULT_MATERIAL_NAME="__DEFAULT";var xi={},Vu=class extends Error{constructor(e,t){super(e),this.response=t}},hn=class extends Wt{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(xi[e]!==void 0){xi[e].push({onLoad:t,onProgress:n,onError:i});return}xi[e]=[],xi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=xi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,v=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:b,value:_})=>{if(b)p.close();else{v+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:f});for(let S=0,C=h.length;S<C;S++){let L=h[S];L.onProgress&&L.onProgress(R)}p.enqueue(_),x()}})}}});return new Response(g)}else throw new Vu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Mi.add(e,l);let h=xi[e];delete xi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=xi[e];if(h===void 0)throw this.manager.itemError(e),l;delete xi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},Gu=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t=[];for(let n=0;n<e.length;n++){let i=Ii.parse(e[n]);t.push(i)}return t}},Wu=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=[],o=new ks,c=new hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(r.withCredentials);let l=0;function h(u){c.load(e[u],function(d){let f=r.parse(d,!0);a[u]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},l+=1,l===6&&(f.mipmapCount===1&&(o.minFilter=lt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,d=e.length;u<d;++u)h(u);else c.load(e,function(u){let d=r.parse(u,!0);if(d.isCubemap){let f=d.mipmaps.length/d.mipmapCount;for(let m=0;m<f;m++){a[m]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[m].mipmaps.push(d.mipmaps[m*d.mipmapCount+v]),a[m].format=d.format,a[m].width=d.width,a[m].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=lt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}},jr=class extends Wt{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Pa("img");function c(){h(),Mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}},qu=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=new Br;r.colorSpace=mt;let a=new jr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function c(l){a.load(e[l],function(h){r.images[l]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return r}},Xu=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new gn,o=new hn(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Ht,a.wrapT=l.wrapT!==void 0?l.wrapT:Ht,a.magFilter=l.magFilter!==void 0?l.magFilter:lt,a.minFilter=l.minFilter!==void 0?l.minFilter:lt,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=pn),l.mipmapCount===1&&(a.minFilter=lt),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}},ri=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=new Mt,a=new jr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},si=class extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Hs=class extends si{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fh=new Pe,gm=new T,vm=new T,$a=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(gm),vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vm),t.updateMatrixWorld(),Fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ju=class extends $a{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Vs=class extends si{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ju}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},bm=new Pe,fa=new T,Oh=new T,Ku=class extends $a{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),fa.setFromMatrixPosition(e.matrixWorld),n.position.copy(fa),Oh.copy(n.position),Oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oh),n.updateMatrixWorld(),i.makeTranslation(-fa.x,-fa.y,-fa.z),bm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bm)}},Gs=class extends si{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yu=class extends $a{constructor(){super(new ei(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends si{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},il=class extends si{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},rl=class extends si{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},sl=class{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new T)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){let n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){let n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){let n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}},al=class extends si{constructor(e=new sl,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},ol=class s extends Wt{constructor(e){super(e),this.textures={}}load(e,t,n,i){let r=this,a=new hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}let i=s.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(let r in e.uniforms){let a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new ge().setHex(a.value);break;case"v2":i.uniforms[r].value=new j().fromArray(a.value);break;case"v3":i.uniforms[r].value=new T().fromArray(a.value);break;case"v4":i.uniforms[r].value=new $e().fromArray(a.value);break;case"m3":i.uniforms[r].value=new Ve().fromArray(a.value);break;case"m4":i.uniforms[r].value=new Pe().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new j().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){let t={ShadowMaterial:Xc,SpriteMaterial:Ua,RawShaderMaterial:jc,ShaderMaterial:Gt,PointsMaterial:Gr,MeshPhysicalMaterial:nn,MeshStandardMaterial:er,MeshPhongMaterial:Kc,MeshToonMaterial:Yc,MeshNormalMaterial:Jc,MeshLambertMaterial:Zc,MeshDepthMaterial:ti,MeshDistanceMaterial:Fa,MeshBasicMaterial:It,MeshMatcapMaterial:$c,LineDashedMaterial:Qc,LineBasicMaterial:Ut,Material:Tt};return new t[e]}},Gn=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},cl=class extends He{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},ll=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(c){i?i(c):console.error(c),r.manager.itemError(e)}},n,i)}parse(e){let t={},n={};function i(f,m){if(t[m]!==void 0)return t[m];let g=f.interleavedBuffers[m],p=r(f,g.buffer),x=ys(g.type,p),b=new zn(x,g.stride);return b.uuid=g.uuid,t[m]=b,b}function r(f,m){if(n[m]!==void 0)return n[m];let g=f.arrayBuffers[m],p=new Uint32Array(g).buffer;return n[m]=p,p}let a=e.isInstancedBufferGeometry?new cl:new He,o=e.data.index;if(o!==void 0){let f=ys(o.type,o.array);a.setIndex(new Be(f,1))}let c=e.data.attributes;for(let f in c){let m=c[f],v;if(m.isInterleavedBufferAttribute){let g=i(e.data,m.data);v=new xn(g,m.itemSize,m.offset,m.normalized)}else{let g=ys(m.type,m.array),p=m.isInstancedBufferAttribute?Hn:Be;v=new p(g,m.itemSize,m.normalized)}m.name!==void 0&&(v.name=m.name),m.usage!==void 0&&v.setUsage(m.usage),a.setAttribute(f,v)}let l=e.data.morphAttributes;if(l)for(let f in l){let m=l[f],v=[];for(let g=0,p=m.length;g<p;g++){let x=m[g],b;if(x.isInterleavedBufferAttribute){let _=i(e.data,x.data);b=new xn(_,x.itemSize,x.offset,x.normalized)}else{let _=ys(x.type,x.array);b=new Be(_,x.itemSize,x.normalized)}x.name!==void 0&&(b.name=x.name),v.push(b)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);let u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let f=0,m=u.length;f!==m;++f){let v=u[f];a.addGroup(v.start,v.count,v.materialIndex)}let d=e.data.boundingSphere;if(d!==void 0){let f=new T;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new wt(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}},Ju=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=this.path===""?Gn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;let o=new hn(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(c){let l=null;try{l=JSON.parse(c)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}let h=l.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(l,t)},n,i)}async loadAsync(e,t){let n=this,i=this.path===""?Gn.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;let r=new hn(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);let a=await r.loadAsync(e,t),o=JSON.parse(a),c=o.metadata;if(c===void 0||c.type===void 0||c.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){let n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(l)}),o=this.parseTextures(e.textures,a),c=this.parseMaterials(e.materials,o),l=this.parseObject(e.object,r,c,o,n),h=this.parseSkeletons(e.skeletons,l);if(this.bindSkeletons(l,h),t!==void 0){let u=!1;for(let d in a)if(a[d].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(l)}return l}async parseAsync(e){let t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),c=this.parseObject(e.object,i,o,a,t),l=this.parseSkeletons(e.skeletons,c);return this.bindSkeletons(c,l),c}parseShapes(e){let t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){let r=new Ei().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){let n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=new Ns().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){let n={};if(e!==void 0){let i=new ll;for(let r=0,a=e.length;r<a;r++){let o,c=e[r];switch(c.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(c);break;default:c.type in mm?o=mm[c.type].fromJSON(c,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${c.type}"`)}o.uuid=c.uuid,c.name!==void 0&&(o.name=c.name),c.userData!==void 0&&(o.userData=c.userData),n[c.uuid]=o}}return n}parseMaterials(e,t){let n={},i={};if(e!==void 0){let r=new ol;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){let c=e[a];n[c.uuid]===void 0&&(n[c.uuid]=r.parse(c)),i[c.uuid]=n[c.uuid]}}return i}parseAnimations(e){let t={};if(e!==void 0)for(let n=0;n<e.length;n++){let i=e[n],r=Ii.parse(i);t[r.uuid]=r}return t}parseImages(e,t){let n=this,i={},r;function a(c){return n.manager.itemStart(c),r.load(c,function(){n.manager.itemEnd(c)},void 0,function(){n.manager.itemError(c),n.manager.itemEnd(c)})}function o(c){if(typeof c=="string"){let l=c,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l)?l:n.resourcePath+l;return a(h)}else return c.data?{data:ys(c.type,c.data),width:c.width,height:c.height}:null}if(e!==void 0&&e.length>0){let c=new Za(t);r=new jr(c),r.setCrossOrigin(this.crossOrigin);for(let l=0,h=e.length;l<h;l++){let u=e[l],d=u.url;if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m],p=o(g);p!==null&&(p instanceof HTMLImageElement?f.push(p):f.push(new gn(p.data,p.width,p.height)))}i[u.uuid]=new yi(f)}else{let f=o(u.url);i[u.uuid]=new yi(f)}}}return i}async parseImagesAsync(e){let t=this,n={},i;async function r(a){if(typeof a=="string"){let o=a,c=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(c)}else return a.data?{data:ys(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new jr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){let c=e[a],l=c.url;if(Array.isArray(l)){let h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u],m=await r(f);m!==null&&(m instanceof HTMLImageElement?h.push(m):h.push(new gn(m.data,m.width,m.height)))}n[c.uuid]=new yi(h)}else{let h=await r(c.url);n[c.uuid]=new yi(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}let i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){let o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);let c=t[o.image],l=c.data,h;Array.isArray(l)?(h=new Br,l.length===6&&(h.needsUpdate=!0)):(l&&l.data?h=new gn:h=new Mt,l&&(h.needsUpdate=!0)),h.source=c,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,nS)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],xm),h.wrapT=n(o.wrap[1],xm)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,_m)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,_m)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function c(d){if(d!==void 0){if(Array.isArray(d)){let f=[];for(let m=0,v=d.length;m<v;m++){let g=d[m];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function l(d){return i[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),i[d]}let h,u;switch(e.type){case"Scene":a=new Ci,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ge(e.background):a.background=l(e.background)),e.environment!==void 0&&(a.environment=l(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Ds(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new yc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new bt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new ei(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new il(e.color,e.intensity);break;case"DirectionalLight":a=new tr(e.color,e.intensity);break;case"PointLight":a=new Gs(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new rl(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Vs(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Hs(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new al().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=c(e.material),a=new Is(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=c(e.material),a=new rt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=c(e.material);let d=e.count,f=e.instanceMatrix,m=e.instanceColor;a=new Fs(h,u,d),a.instanceMatrix=new Hn(new Float32Array(f.array),16),m!==void 0&&(a.instanceColor=new Hn(new Float32Array(m.array),m.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=c(e.material),a=new Sc(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{let g=new ft;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);let p=new wt;return p.radius=v.sphereRadius,p.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:p}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=l(e.matricesTexture.uuid);break;case"LOD":a=new Mc;break;case"Line":a=new En(o(e.geometry),c(e.material));break;case"LineLoop":a=new Os(o(e.geometry),c(e.material));break;case"LineSegments":a=new ln(o(e.geometry),c(e.material));break;case"PointCloud":case"Points":a=new Us(o(e.geometry),c(e.material));break;case"Sprite":a=new wc(c(e.material));break;case"Group":a=new cn;break;case"Bone":a=new Vr;break;default:a=new nt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){let d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,i,r))}if(e.animations!==void 0){let d=e.animations;for(let f=0;f<d.length;f++){let m=d[f];a.animations.push(r[m])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);let d=e.levels;for(let f=0;f<d.length;f++){let m=d[f],v=a.getObjectByProperty("uuid",m.object);v!==void 0&&a.addLevel(v,m.distance,m.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){let i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}},nS={UVMapping:ml,CubeReflectionMapping:Ai,CubeRefractionMapping:Ji,EquirectangularReflectionMapping:ya,EquirectangularRefractionMapping:wa,CubeUVReflectionMapping:qs},xm={RepeatWrapping:kn,ClampToEdgeWrapping:Ht,MirroredRepeatWrapping:Or},_m={NearestFilter:xt,NearestMipmapNearestFilter:no,NearestMipmapLinearFilter:Yi,LinearFilter:lt,LinearMipmapNearestFilter:Ir,LinearMipmapLinearFilter:pn},Qa=class extends Wt{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Mi.add(e,c),r.manager.itemStart(e)}},tc,eo=class{static getContext(){return tc===void 0&&(tc=new(window.AudioContext||window.webkitAudioContext)),tc}static setContext(e){tc=e}},Zu=class extends Wt{constructor(e){super(e)}load(e,t,n,i){let r=this,a=new hn(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(c){try{let l=c.slice(0);eo.getContext().decodeAudioData(l,function(u){t(u)}).catch(o)}catch(l){o(l)}},n,i);function o(c){i?i(c):console.error(c),r.manager.itemError(e)}}},ym=new Pe,wm=new Pe,yr=new Pe,$u=class{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new bt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new bt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){let t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,yr.copy(e.projectionMatrix);let i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(Fr*t.fov*.5)/t.zoom,o,c;wm.elements[12]=-i,ym.elements[12]=i,o=-a*t.aspect+r,c=a*t.aspect+r,yr.elements[0]=2*t.near/(c-o),yr.elements[8]=(c+o)/(c-o),this.cameraL.projectionMatrix.copy(yr),o=-a*t.aspect-r,c=a*t.aspect-r,yr.elements[0]=2*t.near/(c-o),yr.elements[8]=(c+o)/(c-o),this.cameraR.projectionMatrix.copy(yr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(wm),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ym)}},hl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Mm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Mm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Mm(){return(typeof performance>"u"?Date:performance).now()}var wr=new T,Sm=new dt,iS=new T,Mr=new T,Qu=class extends nt{constructor(){super(),this.type="AudioListener",this.context=eo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new hl}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);let t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(wr,Sm,iS),Mr.set(0,0,-1).applyQuaternion(Sm),t.positionX){let i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(wr.x,i),t.positionY.linearRampToValueAtTime(wr.y,i),t.positionZ.linearRampToValueAtTime(wr.z,i),t.forwardX.linearRampToValueAtTime(Mr.x,i),t.forwardY.linearRampToValueAtTime(Mr.y,i),t.forwardZ.linearRampToValueAtTime(Mr.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(wr.x,wr.y,wr.z),t.setOrientation(Mr.x,Mr.y,Mr.z,n.x,n.y,n.z)}},ul=class extends nt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},Sr=new T,Em=new dt,rS=new T,Er=new T,ed=class extends ul{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Sr,Em,rS),Er.set(0,0,1).applyQuaternion(Em);let t=this.panner;if(t.positionX){let n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Sr.x,n),t.positionY.linearRampToValueAtTime(Sr.y,n),t.positionZ.linearRampToValueAtTime(Sr.z,n),t.orientationX.linearRampToValueAtTime(Er.x,n),t.orientationY.linearRampToValueAtTime(Er.y,n),t.orientationZ.linearRampToValueAtTime(Er.z,n)}else t.setPosition(Sr.x,Sr.y,Sr.z),t.setOrientation(Er.x,Er.y,Er.z)}},td=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},dl=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){dt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;dt.multiplyQuaternionsFlat(e,a,e,t,e,n),dt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Xd="\\[\\]\\.:\\/",sS=new RegExp("["+Xd+"]","g"),jd="[^"+Xd+"]",aS="[^"+Xd.replace("\\.","")+"]",oS=/((?:WC+[\/:])*)/.source.replace("WC",jd),cS=/(WCOD+)?/.source.replace("WCOD",aS),lS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jd),hS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jd),uS=new RegExp("^"+oS+cS+lS+hS+"$"),dS=["material","materials","bones","map"],nd=class{constructor(e,t,n){let i=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sS,"")}static parseTrackName(e){let t=uS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);dS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=nd;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var id=class{constructor(){this.isAnimationObjectGroup=!0,this.uuid=mn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length,o,c=e.length,l=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){let d=arguments[h],f=d.uuid,m=t[f];if(m===void 0){m=c++,t[f]=m,e.push(d);for(let v=0,g=a;v!==g;++v)r[v].push(new ot(d,n[v],i[v]))}else if(m<l){o=e[m];let v=--l,g=e[v];t[g.uuid]=m,e[m]=g,t[f]=v,e[v]=d;for(let p=0,x=a;p!==x;++p){let b=r[p],_=b[v],R=b[m];b[m]=_,R===void 0&&(R=new ot(d,n[p],i[p])),b[v]=R}}else e[m]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=l}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let c=arguments[a],l=c.uuid,h=t[l];if(h!==void 0&&h>=r){let u=r++,d=e[u];t[d.uuid]=h,e[h]=d,t[l]=u,e[u]=c;for(let f=0,m=i;f!==m;++f){let v=n[f],g=v[u],p=v[h];v[h]=g,v[u]=p}}}this.nCachedObjects_=r}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length,r=this.nCachedObjects_,a=e.length;for(let o=0,c=arguments.length;o!==c;++o){let l=arguments[o],h=l.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){let d=--r,f=e[d],m=--a,v=e[m];t[f.uuid]=u,e[u]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,p=i;g!==p;++g){let x=n[g],b=x[d],_=x[m];x[u]=b,x[d]=_,x.pop()}}else{let d=--a,f=e[d];d>0&&(t[f.uuid]=u),e[u]=f,e.pop();for(let m=0,v=i;m!==v;++m){let g=n[m];g[u]=g[d],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){let n=this._bindingsIndicesByPath,i=n[e],r=this._bindings;if(i!==void 0)return r[i];let a=this._paths,o=this._parsedPaths,c=this._objects,l=c.length,h=this.nCachedObjects_,u=new Array(l);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let d=h,f=c.length;d!==f;++d){let m=c[d];u[d]=new ot(m,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,c=a[o],l=e[o];t[l]=n,a[n]=c,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}},fl=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Cr,endingEnd:Cr};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Cg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kd:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case gl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===Pg;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Rg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Pr,i.endingEnd=Pr):(e?i.endingStart=this.zeroSlopeAtStart?Pr:Cr:i.endingStart=Ma,t?i.endingEnd=this.zeroSlopeAtEnd?Pr:Cr:i.endingEnd=Ma)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},fS=new Float32Array(1),rd=class extends vn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let v=t&&t._propertyBindings[u].binding.parsedPath;m=new dl(ot.create(n,f,v),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ya(new Float32Array(2),new Float32Array(2),1,fS),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?Ii.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=gl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new fl(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?Ii.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},sd=class s{constructor(e){this.value=e}clone(){return new s(this.value.clone===void 0?this.value:this.value.clone())}},pS=0,ad=class extends vn{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:pS++}),this.name="",this.usage=Ta,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){let t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;let t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){let r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}},od=class extends zn{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},cd=class{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},Am=new Pe,ld=class{constructor(e,t,n=0,i=1/0){this.ray=new Qn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Am.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(e,t=!0,n=[]){return hd(e,this,n,t),n.sort(Tm),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)hd(e[i],this,n,t);return n.sort(Tm),n}};function Tm(s,e){return s.distance-e.distance}function hd(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,a=i.length;r<a;r++)hd(i[r],e,t,!0)}}var Ws=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ud=class{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}},Rm=new j,dd=class{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Cm=new T,nc=new T,fd=class{constructor(e=new T,t=new T){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Cm.subVectors(e,this.start),nc.subVectors(this.end,this.start);let n=nc.dot(nc),r=nc.dot(Cm)/n;return t&&(r=At(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},Pm=new T,pd=class extends nt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";let n=new He,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,c=32;a<c;a++,o++){let l=a/c*Math.PI*2,h=o/c*Math.PI*2;i.push(Math.cos(l),Math.sin(l),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Te(i,3));let r=new Ut({fog:!1,toneMapped:!1});this.cone=new ln(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);let e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Pm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Pm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}},ji=new T,ic=new Pe,Uh=new Pe,md=class extends ln{constructor(e){let t=s0(e),n=new He,i=[],r=[],a=new ge(0,0,1),o=new ge(0,1,0);for(let l=0;l<t.length;l++){let h=t[l];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Te(i,3)),n.setAttribute("color",new Te(r,3));let c=new Ut({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,c),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,i=n.getAttribute("position");Uh.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){let o=t[r];o.parent&&o.parent.isBone&&(ic.multiplyMatrices(Uh,o.matrixWorld),ji.setFromMatrixPosition(ic),i.setXYZ(a,ji.x,ji.y,ji.z),ic.multiplyMatrices(Uh,o.parent.matrixWorld),ji.setFromMatrixPosition(ic),i.setXYZ(a+1,ji.x,ji.y,ji.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}};function s0(s){let e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,s0(s.children[t]));return e}var gd=class extends rt{constructor(e,t,n){let i=new Xr(t,4,2),r=new It({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}},mS=new T,Lm=new ge,Dm=new ge,vd=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";let i=new Ka(t);i.rotateY(Math.PI*.5),this.material=new It({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);let r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new Be(a,3)),this.add(new rt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){let e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{let t=e.geometry.getAttribute("color");Lm.copy(this.light.color),Dm.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){let r=n<i/2?Lm:Dm;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(mS.setFromMatrixPosition(this.light.matrixWorld).negate())}},bd=class extends ln{constructor(e=10,t=10,n=4473924,i=8947848){n=new ge(n),i=new ge(i);let r=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,f=0,m=-o;d<=t;d++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);let v=d===r?n:i;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}let h=new He;h.setAttribute("position",new Te(c,3)),h.setAttribute("color",new Te(l,3));let u=new Ut({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},xd=class extends ln{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new ge(r),a=new ge(a);let o=[],c=[];if(t>1)for(let u=0;u<t;u++){let d=u/t*(Math.PI*2),f=Math.sin(d)*e,m=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,m);let v=u&1?r:a;c.push(v.r,v.g,v.b),c.push(v.r,v.g,v.b)}for(let u=0;u<n;u++){let d=u&1?r:a,f=e-e/n*u;for(let m=0;m<i;m++){let v=m/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f;o.push(g,0,p),c.push(d.r,d.g,d.b),v=(m+1)/i*(Math.PI*2),g=Math.sin(v)*f,p=Math.cos(v)*f,o.push(g,0,p),c.push(d.r,d.g,d.b)}}let l=new He;l.setAttribute("position",new Te(o,3)),l.setAttribute("color",new Te(c,3));let h=new Ut({vertexColors:!0,toneMapped:!1});super(l,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}},Im=new T,rc=new T,Nm=new T,_d=class extends nt{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new He;i.setAttribute("position",new Te([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));let r=new Ut({fog:!1,toneMapped:!1});this.lightPlane=new En(i,r),this.add(this.lightPlane),i=new He,i.setAttribute("position",new Te([0,0,0,0,0,1],3)),this.targetLine=new En(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Im.setFromMatrixPosition(this.light.matrixWorld),rc.setFromMatrixPosition(this.light.target.matrixWorld),Nm.subVectors(rc,Im),this.lightPlane.lookAt(rc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(rc),this.targetLine.scale.z=Nm.length()}},sc=new T,Et=new Ls,yd=class extends ln{constructor(e){let t=new He,n=new Ut({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(m,v){c(m),c(v)}function c(m){i.push(0,0,0),r.push(0,0,0),a[m]===void 0&&(a[m]=[]),a[m].push(i.length/3-1)}t.setAttribute("position",new Te(i,3)),t.setAttribute("color",new Te(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();let l=new ge(16755200),h=new ge(16711680),u=new ge(43775),d=new ge(16777215),f=new ge(3355443);this.setColors(l,h,u,d,f)}setColors(e,t,n,i,r){let o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){let e=this.geometry,t=this.pointMap,n=1,i=1;Et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Rt("c",t,e,Et,0,0,-1),Rt("t",t,e,Et,0,0,1),Rt("n1",t,e,Et,-n,-i,-1),Rt("n2",t,e,Et,n,-i,-1),Rt("n3",t,e,Et,-n,i,-1),Rt("n4",t,e,Et,n,i,-1),Rt("f1",t,e,Et,-n,-i,1),Rt("f2",t,e,Et,n,-i,1),Rt("f3",t,e,Et,-n,i,1),Rt("f4",t,e,Et,n,i,1),Rt("u1",t,e,Et,n*.7,i*1.1,-1),Rt("u2",t,e,Et,-n*.7,i*1.1,-1),Rt("u3",t,e,Et,0,i*2,-1),Rt("cf1",t,e,Et,-n,0,1),Rt("cf2",t,e,Et,n,0,1),Rt("cf3",t,e,Et,0,-i,1),Rt("cf4",t,e,Et,0,i,1),Rt("cn1",t,e,Et,-n,0,-1),Rt("cn2",t,e,Et,n,0,-1),Rt("cn3",t,e,Et,0,-i,-1),Rt("cn4",t,e,Et,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}};function Rt(s,e,t,n,i,r,a){sc.set(i,r,a).unproject(n);let o=e[s];if(o!==void 0){let c=t.getAttribute("position");for(let l=0,h=o.length;l<h;l++)c.setXYZ(o[l],sc.x,sc.y,sc.z)}}var ac=new ft,wd=class extends ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new He;r.setIndex(new Be(n,1)),r.setAttribute("position",new Be(i,3)),super(r,new Ut({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ac.setFromObject(this.object),ac.isEmpty())return;let t=ac.min,n=ac.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Md=class extends ln{constructor(e,t=16776960){let n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new He;r.setIndex(new Be(n,1)),r.setAttribute("position",new Te(i,3)),super(r,new Ut({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){let t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}},Sd=class extends En{constructor(e,t=1,n=16776960){let i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new He;a.setAttribute("position",new Te(r,3)),a.computeBoundingSphere(),super(a,new Ut({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;let o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],c=new He;c.setAttribute("position",new Te(o,3)),c.computeBoundingSphere(),this.add(new rt(c,new It({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}},Fm=new T,oc,kh,Ed=class extends nt{constructor(e=new T(0,0,1),t=new T(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",oc===void 0&&(oc=new He,oc.setAttribute("position",new Te([0,0,0,0,1,0],3)),kh=new $i(0,.5,1,5,1),kh.translate(0,-.5,0)),this.position.copy(t),this.line=new En(oc,new Ut({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new rt(kh,new It({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Fm.set(e.z,0,-e.x).normalize();let t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Fm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}},Ad=class extends ln{constructor(e=1){let t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new He;i.setAttribute("position",new Te(t,3)),i.setAttribute("color",new Te(n,3));let r=new Ut({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){let i=new ge,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}},Td=class{constructor(){this.type="ShapePath",this.color=new ge,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Wr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let x=[];for(let b=0,_=p.length;b<_;b++){let R=p[b],S=new Ei;S.curves=R.curves,x.push(S)}return x}function n(p,x){let b=x.length,_=!1;for(let R=b-1,S=0;S<b;R=S++){let C=x[R],L=x[S],y=L.x-C.x,w=L.y-C.y;if(Math.abs(w)>Number.EPSILON){if(w<0&&(C=x[S],y=-y,L=x[R],w=-w),p.y<C.y||p.y>L.y)continue;if(p.y===C.y){if(p.x===C.x)return!0}else{let P=w*(p.x-C.x)-y*(p.y-C.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(p.y!==C.y)continue;if(L.x<=p.x&&p.x<=C.x||C.x<=p.x&&p.x<=L.x)return!0}}return _}let i=$n.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,c,l=[];if(r.length===1)return o=r[0],c=new Ei,c.curves=o.curves,l.push(c),l;let h=!i(r[0].getPoints());h=e?!h:h;let u=[],d=[],f=[],m=0,v;d[m]=void 0,f[m]=[];for(let p=0,x=r.length;p<x;p++)o=r[p],v=o.getPoints(),a=i(v),a=e?!a:a,a?(!h&&d[m]&&m++,d[m]={s:new Ei,p:v},d[m].s.curves=o.curves,h&&m++,f[m]=[]):f[m].push({h:o,p:v[0]});if(!d[0])return t(r);if(d.length>1){let p=!1,x=0;for(let b=0,_=d.length;b<_;b++)u[b]=[];for(let b=0,_=d.length;b<_;b++){let R=f[b];for(let S=0;S<R.length;S++){let C=R[S],L=!0;for(let y=0;y<d.length;y++)n(C.p,d[y].p)&&(b!==y&&x++,L?(L=!1,u[y].push(C)):p=!0);L&&u[b].push(C)}}x>0&&p===!1&&(f=u)}let g;for(let p=0,x=d.length;p<x;p++){c=d[p].s,l.push(c),g=f[p];for(let b=0,_=g.length;b<_;b++)c.holes.push(g[b].h)}return l}},Rd=class extends Nt{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"164"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="164");var a0={type:"change"},Kd={type:"start"},o0={type:"end"},yl=new Qn,c0=new an,gS=Math.cos(70*rn.DEG2RAD),wl=class extends vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:ir.ROTATE,TWO:ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(M){M.addEventListener("keydown",Ie),this._domElementKeyEvents=M},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ie),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a0),n.update(),r=i.NONE},this.update=(function(){let M=new T,z=new dt().setFromUnitVectors(e.up,new T(0,1,0)),X=z.clone().invert(),ce=new T,pe=new dt,We=new T,Ae=2*Math.PI;return function(ht=null){let tt=n.object.position;M.copy(tt).sub(n.target),M.applyQuaternion(z),o.setFromVector3(M),n.autoRotate&&r===i.NONE&&O(w(ht)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let St=n.minAzimuthAngle,ut=n.maxAzimuthAngle;isFinite(St)&&isFinite(ut)&&(St<-Math.PI?St+=Ae:St>Math.PI&&(St-=Ae),ut<-Math.PI?ut+=Ae:ut>Math.PI&&(ut-=Ae),St<=ut?o.theta=Math.max(St,Math.min(ut,o.theta)):o.theta=o.theta>(St+ut)/2?Math.max(St,o.theta):Math.min(ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ui=!1;if(n.zoomToCursor&&S||n.object.isOrthographicCamera)o.radius=ee(o.radius);else{let wn=o.radius;o.radius=ee(o.radius*l),Ui=wn!=o.radius}if(M.setFromSpherical(o),M.applyQuaternion(X),tt.copy(n.target).add(M),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&S){let wn=null;if(n.object.isPerspectiveCamera){let ki=M.length();wn=ee(ki*l);let di=ki-wn;n.object.position.addScaledVector(_,di),n.object.updateMatrixWorld(),Ui=!!di}else if(n.object.isOrthographicCamera){let ki=new T(R.x,R.y,0);ki.unproject(n.object);let di=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Ui=di!==n.object.zoom;let Qs=new T(R.x,R.y,0);Qs.unproject(n.object),n.object.position.sub(Qs).add(ki),n.object.updateMatrixWorld(),wn=M.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;wn!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(wn).add(n.object.position):(yl.origin.copy(n.object.position),yl.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(yl.direction))<gS?e.lookAt(n.target):(c0.setFromNormalAndCoplanarPoint(n.object.up,n.target),yl.intersectPlane(c0,n.target))))}else if(n.object.isOrthographicCamera){let wn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),wn!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ui=!0)}return l=1,S=!1,Ui||ce.distanceToSquared(n.object.position)>a||8*(1-pe.dot(n.object.quaternion))>a||We.distanceToSquared(n.target)>a?(n.dispatchEvent(a0),ce.copy(n.object.position),pe.copy(n.object.quaternion),We.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ee),n.domElement.removeEventListener("pointerdown",F),n.domElement.removeEventListener("pointercancel",W),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",W),n.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Ie),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,a=1e-6,o=new Ws,c=new Ws,l=1,h=new T,u=new j,d=new j,f=new j,m=new j,v=new j,g=new j,p=new j,x=new j,b=new j,_=new T,R=new j,S=!1,C=[],L={},y=!1;function w(M){return M!==null?2*Math.PI/60*n.autoRotateSpeed*M:2*Math.PI/60/60*n.autoRotateSpeed}function P(M){let z=Math.abs(M*.01);return Math.pow(.95,n.zoomSpeed*z)}function O(M){c.theta-=M}function N(M){c.phi-=M}let E=(function(){let M=new T;return function(X,ce){M.setFromMatrixColumn(ce,0),M.multiplyScalar(-X),h.add(M)}})(),D=(function(){let M=new T;return function(X,ce){n.screenSpacePanning===!0?M.setFromMatrixColumn(ce,1):(M.setFromMatrixColumn(ce,0),M.crossVectors(n.object.up,M)),M.multiplyScalar(X),h.add(M)}})(),U=(function(){let M=new T;return function(X,ce){let pe=n.domElement;if(n.object.isPerspectiveCamera){let We=n.object.position;M.copy(We).sub(n.target);let Ae=M.length();Ae*=Math.tan(n.object.fov/2*Math.PI/180),E(2*X*Ae/pe.clientHeight,n.object.matrix),D(2*ce*Ae/pe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(E(X*(n.object.right-n.object.left)/n.object.zoom/pe.clientWidth,n.object.matrix),D(ce*(n.object.top-n.object.bottom)/n.object.zoom/pe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function q(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(M){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=M:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(M,z){if(!n.zoomToCursor)return;S=!0;let X=n.domElement.getBoundingClientRect(),ce=M-X.left,pe=z-X.top,We=X.width,Ae=X.height;R.x=ce/We*2-1,R.y=-(pe/Ae)*2+1,_.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(M){return Math.max(n.minDistance,Math.min(n.maxDistance,M))}function re(M){u.set(M.clientX,M.clientY)}function be(M){J(M.clientX,M.clientX),p.set(M.clientX,M.clientY)}function Re(M){m.set(M.clientX,M.clientY)}function G(M){d.set(M.clientX,M.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let z=n.domElement;O(2*Math.PI*f.x/z.clientHeight),N(2*Math.PI*f.y/z.clientHeight),u.copy(d),n.update()}function te(M){x.set(M.clientX,M.clientY),b.subVectors(x,p),b.y>0?q(P(b.y)):b.y<0&&k(P(b.y)),p.copy(x),n.update()}function fe(M){v.set(M.clientX,M.clientY),g.subVectors(v,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(v),n.update()}function se(M){J(M.clientX,M.clientY),M.deltaY<0?k(P(M.deltaY)):M.deltaY>0&&q(P(M.deltaY)),n.update()}function ye(M){let z=!1;switch(M.code){case n.keys.UP:M.ctrlKey||M.metaKey||M.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:M.ctrlKey||M.metaKey||M.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:M.ctrlKey||M.metaKey||M.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:M.ctrlKey||M.metaKey||M.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),z=!0;break}z&&(M.preventDefault(),n.update())}function Ce(M){if(C.length===1)u.set(M.pageX,M.pageY);else{let z=at(M),X=.5*(M.pageX+z.x),ce=.5*(M.pageY+z.y);u.set(X,ce)}}function B(M){if(C.length===1)m.set(M.pageX,M.pageY);else{let z=at(M),X=.5*(M.pageX+z.x),ce=.5*(M.pageY+z.y);m.set(X,ce)}}function ke(M){let z=at(M),X=M.pageX-z.x,ce=M.pageY-z.y,pe=Math.sqrt(X*X+ce*ce);p.set(0,pe)}function Q(M){n.enableZoom&&ke(M),n.enablePan&&B(M)}function ae(M){n.enableZoom&&ke(M),n.enableRotate&&Ce(M)}function ie(M){if(C.length==1)d.set(M.pageX,M.pageY);else{let X=at(M),ce=.5*(M.pageX+X.x),pe=.5*(M.pageY+X.y);d.set(ce,pe)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let z=n.domElement;O(2*Math.PI*f.x/z.clientHeight),N(2*Math.PI*f.y/z.clientHeight),u.copy(d)}function de(M){if(C.length===1)v.set(M.pageX,M.pageY);else{let z=at(M),X=.5*(M.pageX+z.x),ce=.5*(M.pageY+z.y);v.set(X,ce)}g.subVectors(v,m).multiplyScalar(n.panSpeed),U(g.x,g.y),m.copy(v)}function le(M){let z=at(M),X=M.pageX-z.x,ce=M.pageY-z.y,pe=Math.sqrt(X*X+ce*ce);x.set(0,pe),b.set(0,Math.pow(x.y/p.y,n.zoomSpeed)),q(b.y),p.copy(x);let We=(M.pageX+z.x)*.5,Ae=(M.pageY+z.y)*.5;J(We,Ae)}function Se(M){n.enableZoom&&le(M),n.enablePan&&de(M)}function Le(M){n.enableZoom&&le(M),n.enableRotate&&ie(M)}function F(M){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(M.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",W)),!Fe(M)&&(Me(M),M.pointerType==="touch"?he(M):ne(M)))}function A(M){n.enabled!==!1&&(M.pointerType==="touch"?ve(M):V(M))}function W(M){switch(xe(M),C.length){case 0:n.domElement.releasePointerCapture(M.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",W),n.dispatchEvent(o0),r=i.NONE;break;case 1:let z=C[0],X=L[z];he({pointerId:z,pageX:X.x,pageY:X.y});break}}function ne(M){let z;switch(M.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case nr.DOLLY:if(n.enableZoom===!1)return;be(M),r=i.DOLLY;break;case nr.ROTATE:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enablePan===!1)return;Re(M),r=i.PAN}else{if(n.enableRotate===!1)return;re(M),r=i.ROTATE}break;case nr.PAN:if(M.ctrlKey||M.metaKey||M.shiftKey){if(n.enableRotate===!1)return;re(M),r=i.ROTATE}else{if(n.enablePan===!1)return;Re(M),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kd)}function V(M){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;G(M);break;case i.DOLLY:if(n.enableZoom===!1)return;te(M);break;case i.PAN:if(n.enablePan===!1)return;fe(M);break}}function $(M){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(M.preventDefault(),n.dispatchEvent(Kd),se(me(M)),n.dispatchEvent(o0))}function me(M){let z=M.deltaMode,X={clientX:M.clientX,clientY:M.clientY,deltaY:M.deltaY};switch(z){case 1:X.deltaY*=16;break;case 2:X.deltaY*=100;break}return M.ctrlKey&&!y&&(X.deltaY*=10),X}function ue(M){M.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",oe,{passive:!0,capture:!0}))}function oe(M){M.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",oe,{passive:!0,capture:!0}))}function Ie(M){n.enabled===!1||n.enablePan===!1||ye(M)}function he(M){switch(Ke(M),C.length){case 1:switch(n.touches.ONE){case ir.ROTATE:if(n.enableRotate===!1)return;Ce(M),r=i.TOUCH_ROTATE;break;case ir.PAN:if(n.enablePan===!1)return;B(M),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ir.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(M),r=i.TOUCH_DOLLY_PAN;break;case ir.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ae(M),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Kd)}function ve(M){switch(Ke(M),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ie(M),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(M),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Se(M),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Le(M),n.update();break;default:r=i.NONE}}function Ee(M){n.enabled!==!1&&M.preventDefault()}function Me(M){C.push(M.pointerId)}function xe(M){delete L[M.pointerId];for(let z=0;z<C.length;z++)if(C[z]==M.pointerId){C.splice(z,1);return}}function Fe(M){for(let z=0;z<C.length;z++)if(C[z]==M.pointerId)return!0;return!1}function Ke(M){let z=L[M.pointerId];z===void 0&&(z=new j,L[M.pointerId]=z),z.set(M.pageX,M.pageY)}function at(M){let z=M.pointerId===C[0]?C[1]:C[0];return L[z]}n.domElement.addEventListener("contextmenu",Ee),n.domElement.addEventListener("pointerdown",F),n.domElement.addEventListener("pointercancel",W),n.domElement.addEventListener("wheel",$,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}};function Yd(s,e){if(e===Bd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===js||e===io){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===js)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ml=class extends Wt{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nf(t)}),this.register(function(t){return new rf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new Qd(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new vf(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Gn.extractUrlBase(e);a=Gn.resolveURL(l,this.path)}else a=Gn.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new hn(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===f0){try{a[Qe.KHR_BINARY_GLTF]=new bf(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ef(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new ef;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new xf(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new _f;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new yf;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function vS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qd=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],kt);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new tr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gs(h),l.distance=u;break;case"spot":l=new Vs(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ar(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},ef=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let i=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,mt))}return Promise.all(i)}},tf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},nf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new j(o,o)}return Promise.all(r)}},rf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},sf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,mt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(o[0],o[1],o[2],kt),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},hf=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(o[0],o[1],o[2],kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,mt)),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},df=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},pf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mf=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gf=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},vf=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==An.TRIANGLES&&l.mode!==An.TRIANGLE_STRIP&&l.mode!==An.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let v=new Pe,g=new T,p=new dt,x=new T(1,1,1),b=new Fs(m.geometry,m.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),b.setMatrixAt(_,v.compose(g,p,x));for(let _ in c)if(_==="_COLOR_0"){let R=c[_];b.instanceColor=new Hn(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);nt.prototype.copy.call(b,m),this.parser.assignFinalMaterial(b),f.push(b)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},f0="glTF",so=12,l0={JSON:1313821514,BIN:5130562},bf=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,so),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==f0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-so,r=new DataView(e,so),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===l0.JSON){let l=new Uint8Array(e,so+a,o);this.content=n.decode(l)}else if(c===l0.BIN){let l=so+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Mf[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Mf[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ys[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let v=f.attributes[m],g=c[m];g!==void 0&&(v.normalized=g)}u(f)},o,l,kt,d)})})}},_f=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yf=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Sl=class extends Pi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,v=m-l,g=-2*f+3*d,p=f-d,x=1-g,b=p-d+u;for(let _=0;_!==o;_++){let R=a[v+_+o],S=a[v+_+c]*h,C=a[m+_+o],L=a[m+_]*h;r[_]=x*R+b*S+g*C+p*L}return r}},bS=new dt,wf=class extends Sl{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return bS.fromArray(r).normalize().toArray(r),r}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},h0={9728:xt,9729:lt,9984:no,9985:Ir,9986:Yi,9987:pn},u0={33071:Ht,33648:Or,10497:kn},Jd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},sr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xS={CUBICSPLINE:void 0,LINEAR:Zi,STEP:Ur},Zd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function _S(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Un})),s.DefaultMaterial}function Yr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ar(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function yS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function wS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function MS(s){let e,t=s.extensions&&s.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$d(t.attributes):e=s.indices+":"+$d(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+$d(s.targets[n]);return e}function $d(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Sf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function SS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var ES=new Pe,Ef=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new ri(this.options.manager):this.textureLoader=new Qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new hn(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Yr(r,o,i),ar(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load(Gn.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Jd[i.type],o=Ys[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Be(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Jd[i.type],l=Ys[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,v,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(x);b||(v=new l(o,p*f,i.count*f/h),b=new zn(v,f/h),t.cache.add(x,b)),g=new xn(b,c,d%f/h,m)}else o===null?v=new l(i.count*c):v=new l(o,d,i.count*c),g=new Be(v,c,m);if(i.sparse!==void 0){let p=Jd.SCALAR,x=Ys[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,R=new x(a[1],b,i.sparse.count*p),S=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new Be(g.array.slice(),g.itemSize,g.normalized));for(let C=0,L=R.length;C<L;C++){let y=R[C];if(g.setX(y,S[C*c]),c>=2&&g.setY(y,S[C*c+1]),c>=3&&g.setZ(y,S[C*c+2]),c>=4&&g.setW(y,S[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=h0[d.magFilter]||lt,h.minFilter=h0[d.minFilter]||pn,h.wrapS=u0[d.wrapS]||kn,h.wrapT=u0[d.wrapT]||kn,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){let g=new Mt(v);g.needsUpdate=!0,d(g)}),t.load(Gn.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||SS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Gr,Tt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ut,Tt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return er}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let u=i[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,mt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=zt);let h=r.alphaMode||Zd.OPAQUE;if(h===Zd.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Zd.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==It&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new j(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==It&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==It){let u=r.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],kt)}return r.emissiveTexture!==void 0&&a!==It&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,mt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ar(u,r),t.associations.set(u,{materials:e}),r.extensions&&Yr(i,u,r),u})}createUniqueName(e){let t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return d0(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=MS(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=d0(new He,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?_S(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let v=h[f],g=a[f],p,x=l[f];if(g.mode===An.TRIANGLES||g.mode===An.TRIANGLE_STRIP||g.mode===An.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Is(v,x):new rt(v,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===An.TRIANGLE_STRIP?p.geometry=Yd(p.geometry,io):g.mode===An.TRIANGLE_FAN&&(p.geometry=Yd(p.geometry,js));else if(g.mode===An.LINES)p=new ln(v,x);else if(g.mode===An.LINE_STRIP)p=new En(v,x);else if(g.mode===An.LINE_LOOP)p=new Os(v,x);else if(g.mode===An.POINTS)p=new Us(v,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&wS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ar(p,r),g.extensions&&Yr(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Yr(i,u[0],r),u[0];let d=new cn;r.extensions&&Yr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(rn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ei(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ar(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ns(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],v=f.target,g=v.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],v=u[3],g=u[4],p=[];for(let x=0,b=d.length;x<b;x++){let _=d[x],R=f[x],S=m[x],C=v[x],L=g[x];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let y=n._createAnimationTracks(_,R,S,C,L);if(y)for(let w=0;w<y.length;w++)p.push(y[w])}return new Ii(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ES)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Vr:l.length>1?h=new cn:l.length===1?h=l[0]:h=new nt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ar(h,r),r.extensions&&Yr(n,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new cn;n.name&&(r.name=i.createUniqueName(n.name)),ar(r,n),n.extensions&&Yr(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof Tt||d instanceof Mt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];sr[r.path]===sr.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(sr[r.path]){case sr.weights:l=ni;break;case sr.rotation:l=Vn;break;case sr.position:case sr.scale:l=ii;break;default:n.itemSize===1?l=ni:l=ii;break}let h=i.interpolation!==void 0?xS[i.interpolation]:Zi,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+sr[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Vn?wf:Sl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function AS(s,e,t){let n=e.attributes,i=new ft;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new T(c[0],c[1],c[2]),new T(l[0],l[1],l[2])),o.normalized){let h=Sf(Ys[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new T,c=new T;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let v=Sf(Ys[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new wt;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function d0(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=Mf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return st.workingColorSpace!==kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),ar(s,e),AS(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?yS(s,e.targets,t):s})}var ao=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),b=0;b<p.length;++b){var _=p.charCodeAt(b);x[b]=_>96?_-97:_>64?_-39:_+4}for(var R=0,b=0;b<p.length;++b)x[R++]=x[b]<60?n[x[b]]:(x[b]-60)*64+x[++b];return x.buffer.slice(0,R)}function c(p,x,b,_,R,S,C){var L=p.exports.sbrk,y=_+3&-4,w=L(y*R),P=L(S.length),O=new Uint8Array(p.exports.memory.buffer);O.set(S,P);var N=x(w,_,R,P,S.length);if(N==0&&C&&C(w,y,R),b.set(O.subarray(w,w+_*R)),L(w-L(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(b){var _=b.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),b=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(b),R=u.length;R<p;++R)u[R]=f(_);for(var R=p;R<u.length;++R)u[R].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function v(p,x,b,_,R){for(var S=u[0],C=1;C<u.length;++C)u[C].pending<S.pending&&(S=u[C]);return new Promise(function(L,y){var w=new Uint8Array(b),P=++d;S.pending+=p,S.requests[P]={resolve:L,reject:y},S.object.postMessage({id:P,count:p,size:x,source:w,mode:_,filter:R},[w.buffer])})}function g(p){var x=p.data;self.ready.then(function(b){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);c(b,b.exports[x.mode],_,x.count,x.size,x.source,b.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(R){self.postMessage({id:x.id,count:x.count,action:"reject",value:R})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,b,_,R){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,b,_,r.exports[l[R]])},decodeIndexBuffer:function(p,x,b,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,b,_)},decodeIndexSequence:function(p,x,b,_){c(r,r.exports.meshopt_decodeIndexSequence,p,x,b,_)},decodeGltfBuffer:function(p,x,b,_,R,S){c(r,r.exports[h[R]],p,x,b,_,r.exports[l[S]])},decodeGltfBufferAsync:function(p,x,b,_,R){return u.length>0?v(p,x,b,h[_],l[R]):a.then(function(){var S=new Uint8Array(p*x);return c(r,r.exports[h[_]],S,p,x,b,r.exports[l[R]]),S})}}})();var oo=class s extends rt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new bt;let n=this,i=t.color!==void 0?new ge(t.color):new ge(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new an,u=new T,d=new T,f=new T,m=new Pe,v=new T(0,0,-1),g=new $e,p=new T,x=new T,b=new $e,_=new Pe,R=this.camera,S=new Nt(r,a,{samples:l,type:Wn}),C=new Gt({name:c.name!==void 0?c.name:"unspecified",uniforms:bl.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});C.uniforms.tDiffuse.value=S.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=_,this.material=C,this.onBeforeRender=function(L,y,w){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(w.matrixWorld),m.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(m),p.subVectors(d,f),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),m.extractRotation(w.matrixWorld),v.set(0,0,-1),v.applyMatrix4(m),v.add(f),x.subVectors(d,v),x.reflect(u).negate(),x.add(d),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(m),R.up.reflect(u),R.lookAt(x),R.far=w.far,R.updateMatrixWorld(),R.projectionMatrix.copy(w.projectionMatrix),R.projectionMatrix.elements[8]*=-1;{let U=R.projectionMatrix.elements,q=U[14]/(U[10]-1),k=6e4;U[10]=-(k+q)/(k-q),U[14]=-2*k*q/(k-q)}_.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),_.multiply(R.projectionMatrix),_.multiply(R.matrixWorldInverse),_.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let P=R.projectionMatrix;b.x=(Math.sign(g.x)+P.elements[8])/P.elements[0],b.y=(Math.sign(g.y)+P.elements[9])/P.elements[5],b.z=-1,b.w=(1+P.elements[10])/P.elements[14],g.multiplyScalar(2/g.dot(b)),P.elements[2]=g.x,P.elements[6]=g.y,P.elements[10]=g.z+1-o,P.elements[14]=g.w,n.visible=!1;let O=L.getRenderTarget(),N=L.xr.enabled,E=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(S),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(y,R),L.xr.enabled=N,L.shadowMap.autoUpdate=E,L.setRenderTarget(O);let D=w.viewport;D!==void 0&&L.state.viewport(D),n.visible=!0},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};oo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function p0(s){let e=s?.polygon;if(!Array.isArray(e)||e.length<3||e.length>32||!e.every(t=>Array.isArray(t)&&t.length===2&&t.every(Number.isFinite))||!Array.isArray(s.center)||s.center.length!==2||!s.center.every(Number.isFinite))throw new Error("Invalid boat waterline");if(!TS(s.center,e)||e.some(t=>Math.hypot(t[0]-s.center[0],t[1]-s.center[1])>2))throw new Error("Boat waterline exceeds shader bounds or has invalid winding");return s}function TS(s,e){return e.every((t,n)=>{let i=e[(n+1)%e.length];return(i[0]-t[0])*(s[1]-t[1])-(i[1]-t[1])*(s[0]-t[0])>=-1e-7})}var m0=`
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
`;var El=class{constructor({nx:e,ny:t,positions:n,pins:i}){this.nx=e,this.ny=t,this.rest=Float64Array.from(n),this.x=Float64Array.from(n),this.previous=Float64Array.from(n),this.velocity=new Float64Array(n.length),this.inv=new Float64Array(n.length/3).fill(1);for(let a of i)this.inv[a]=0;this.pins=i,this.constraints=[],this.accumulator=0,this.time=0;let r=(a,o,c)=>{let l=Math.hypot(...[0,1,2].map(h=>n[a*3+h]-n[o*3+h]));this.constraints.push({a,b:o,length:l,compliance:c,lambda:0})};for(let a=0;a<t;a++)for(let o=0;o<e;o++){let c=a*e+o;o+1<e&&r(c,c+1,1e-8),a+1<t&&r(c,c+e,1e-8),o+1<e&&a+1<t&&(r(c,c+e+1,5e-8),r(c+1,c+e,5e-8)),o+2<e&&r(c,c+2,2e-4),a+2<t&&r(c,c+2*e,2e-4)}this.tethers=[];for(let a=0;a<this.inv.length;a++){let o=i[0],c=1/0;for(let l of i){let h=Math.hypot(...[0,1,2].map(u=>n[a*3+u]-n[l*3+u]));h<c&&(c=h,o=l)}this.tethers.push({pin:o,length:c*1.015})}}step(e,t,n=-1/0){let i=.008333333333333333;for(this.accumulator=Math.min(this.accumulator+Math.max(0,Math.min(e,.1)),.1);this.accumulator+1e-10>=i;)this.substep(i,t,n),this.accumulator-=i}substep(e,t,n){let{x:i,previous:r,velocity:a,inv:o,rest:c}=this;r.set(i),this.time+=e;for(let l=0;l<o.length;l++){let h=l*3;if(!o[l]){for(let te=0;te<3;te++)i[h+te]=c[h+te],a[h+te]=0;continue}let u=Math.floor(l/this.nx),d=l%this.nx,f=(l-(d>0?1:0))*3,m=(l+(d+1<this.nx?1:0))*3,v=(l-(u>0?this.nx:0))*3,g=(l+(u+1<this.ny?this.nx:0))*3,p=r[m]-r[f],x=r[m+1]-r[f+1],b=r[m+2]-r[f+2],_=r[g]-r[v],R=r[g+1]-r[v+1],S=r[g+2]-r[v+2],C=x*S-b*R,L=b*_-p*S,y=p*R-x*_,w=Math.hypot(C,L,y)||1;C/=w,L/=w,y/=w;let P=t(r[h],r[h+1],r[h+2]),O=P[0]-a[h],N=-a[h+1],E=P[1]-a[h+2],D=O*C+N*L+E*y,U=Math.max(0,Math.min(1,(3.5-Math.hypot(...P))/1.5)),q=1+3*U*U*(3-2*U),k=Math.hypot(...P),J=c[h]*.72+c[h+2]*.61,ee=U*Math.min(1.3,k*1.35)*(.72*Math.sin(this.time*2.6+J+c[h+1]*.65)+.28*Math.sin(this.time*4.3+J*1.7-c[h+1]*1.2)),re=D+ee,be=Math.max(-28,Math.min(28,1.05*q*re*Math.abs(re))),Re=(.06+.18*Math.min(10,Math.hypot(O,N,E)))*(1+1.8*U),G=[be*C+Re*(O-D*C),be*L+Re*(N-D*L)-9.81,be*y+Re*(E-D*y)];for(let te=0;te<3;te++)a[h+te]=(a[h+te]+G[te]*e)*Math.exp(-.7*e),i[h+te]+=a[h+te]*e}for(let l of this.constraints)l.lambda=0;for(let l=0;l<28;l++){for(let h of this.constraints){let u=h.a*3,d=h.b*3,f=o[h.a],m=o[h.b];if(f+m===0)continue;let v=i[d]-i[u],g=i[d+1]-i[u+1],p=i[d+2]-i[u+2],x=Math.hypot(v,g,p)||1e-9,b=h.compliance/(e*e),_=(-(x-h.length)-b*h.lambda)/(f+m+b);h.lambda+=_;let R=_/x;i[u]-=f*R*v,i[u+1]-=f*R*g,i[u+2]-=f*R*p,i[d]+=m*R*v,i[d+1]+=m*R*g,i[d+2]+=m*R*p}for(let h=0;h<o.length;h++)if(o[h]){let u=h*3,{pin:d,length:f}=this.tethers[h],m=d*3,v=i[u]-c[m],g=i[u+1]-c[m+1],p=i[u+2]-c[m+2],x=Math.hypot(v,g,p);if(x>f){let b=f/x;i[u]=c[m]+v*b,i[u+1]=c[m+1]+g*b,i[u+2]=c[m+2]+p*b}i[u+1]=Math.max(i[u+1],n)}}for(let l=0;l<o.length;l++)if(o[l])for(let h=0;h<3;h++){let u=l*3+h;a[u]=(i[u]-r[u])/e}}maxStretch(){return Math.max(...this.constraints.filter(e=>e.compliance<1e-6).map(e=>Math.hypot(...[0,1,2].map(t=>this.x[e.a*3+t]-this.x[e.b*3+t]))/e.length))}};function Al(s){return s.updateWorldMatrix(!0,!1),s.geometry.applyMatrix4(s.matrixWorld),(s.parent?s.parent.matrixWorld.clone().invert():new Pe).decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),new ft().setFromObject(s)}function RS(s){return s.garments.map(({patch:e,binding:t})=>({nx:e.nx,ny:e.ny,positions:Array.from(e.rest),pins:Array.from(e.pins),ids:Int32Array.from(t.map(n=>n.id)),keys:Int32Array.from(t.flatMap(n=>n.keys)),weights:Float64Array.from(t.flatMap(n=>n.weights)),blend:Float64Array.from(t.map(n=>n.blend))}))}function g0(s,e,t=null){return{garments:[],mesh:null,worker:null,workerReady:!1,inFlight:!1,pendingDt:0,affected:null,buffer:null,cfg:null,lastMaxStretch:1,init(n){this.mesh=n;let i=n.geometry,r=i.attributes.position,a=Float32Array.from(r.array),o=r.count;n.updateWorldMatrix(!0,!1);for(let y=0;y<o;y++)a[y*3+1]=-r.getZ(y),a[y*3+2]=r.getY(y);let c=n.matrixWorld.clone().multiply(new s.Matrix4().makeRotationX(-Math.PI/2)),l=new s.Vector3(1,0,0).transformDirection(c),h=new s.Vector3(l.z,0,-l.x),u=y=>.208+.12*y*y,d=new Uint8Array(o),f=Int32Array.from({length:o},(y,w)=>w),m=y=>{for(;f[y]!==y;)f[y]=f[f[y]],y=f[y];return y},v=(y,w)=>{d[y]&&d[w]&&(f[m(y)]=m(w))},g=new Map;for(let y=0;y<o;y++){let w=a[y*3],P=a[y*3+2];if(d[y]=Math.abs(w)<.858&&P<u(w)-.012,!d[y])continue;let O=w>.704?1:0,N=`${Math.round(w*1e4)},${Math.round(a[y*3+1]*1e4)},${Math.round(P*1e4)},${O}`;g.has(N)?v(y,g.get(N)):g.set(N,y)}let p=i.index?.array||Uint32Array.from({length:o},(y,w)=>w);for(let y=0;y<p.length;y+=3)for(let w=0;w<3;w++){let P=p[y+w],O=p[y+(w+1)%3];a[P*3]>.704==a[O*3]>.704&&v(P,O)}let x=new Map;for(let y=0;y<o;y++)if(d[y]){let w=m(y);x.has(w)||x.set(w,[]),x.get(w).push(y)}let b=[...x.values()].filter(y=>y.length>150),_=.004,R=.003,S=new Map,C=new Uint8Array(o),L=(y,w,P)=>`${y},${w},${P}`;for(let y=0;y<b.length;y++)for(let w of b[y]){C[w]=1;let P=L(...[0,1,2].map(O=>Math.floor(a[w*3+O]/_)));S.has(P)||S.set(P,[]),S.get(P).push({id:w,garment:y})}for(let y=0;y<o;y++)if(d[y]&&!C[y]){let w=[0,1,2].map(E=>a[y*3+E]),P=w.map(E=>Math.floor(E/_)),O=-1,N=R*R;for(let E=-1;E<=1;E++)for(let D=-1;D<=1;D++)for(let U=-1;U<=1;U++)for(let q of S.get(L(P[0]+E,P[1]+D,P[2]+U))||[]){let k=w.reduce((J,ee,re)=>J+(ee-a[q.id*3+re])**2,0);k<N&&(N=k,O=q.garment)}O>=0&&b[O].push(y)}Al(n),n.frustumCulled=!1,this.position=i.attributes.position,this.normal=i.attributes.normal,this.rest=Float32Array.from(this.position.array),this.restNormal=Float32Array.from(this.normal.array),this.garments=[];for(let y of b){let w=1/0,P=-1/0,O=1/0;for(let re of y)w=Math.min(w,a[re*3]),P=Math.max(P,a[re*3]),O=Math.min(O,a[re*3+2]);let N=c.getMaxScaleOnAxis(),E=(P-w)*N,D=Math.max(5,Math.ceil(E/.09)+1),U=Math.max(5,Math.ceil((u((w+P)/2)-O)*N/.09)+1),q=[],k=new s.Vector3;for(let re=0;re<U;re++)for(let be=0;be<D;be++){let Re=w+(P-w)*be/(D-1),G=re/(U-1);k.set(Re,0,u(Re)+(O-u(Re))*G).applyMatrix4(c),q.push(...k.toArray())}let J=new El({nx:D,ny:U,positions:q,pins:[0,D-1]}),ee=[];for(let re of y){let be=a[re*3],Re=a[re*3+2],G=Math.max(0,Math.min(D-1.00001,(be-w)/(P-w)*(D-1))),te=Math.max(0,Math.min(U-1.00001,(u(be)-Re)/(u(be)-O)*(U-1))),fe=Math.floor(G),se=Math.floor(te),ye=G-fe,Ce=te-se,B=[se*D+fe,se*D+fe+1,(se+1)*D+fe,(se+1)*D+fe+1],ke=[(1-ye)*(1-Ce),ye*(1-Ce),(1-ye)*Ce,ye*Ce],Q=(u(be)-Re)*N,ae=Math.min(1,Math.max(0,(Q-.03)/.09));ee.push({id:re,keys:B,weights:ke,blend:ae})}this.garments.push({patch:J,binding:ee,normal:h})}console.info("cloth rig:",this.garments.length,"connected textiles;",this.garments.reduce((y,w)=>y+w.binding.length,0),"bound vertices"),t&&typeof Worker<"u"&&this.startWorker(t)},startWorker(n){let i;try{i=new Worker(n.url,{type:"module"})}catch(o){console.warn("cloth worker unavailable, solving on the main thread",o);return}let r=this.mesh.geometry,a=r.index?Int32Array.from(r.index.array):Int32Array.from({length:this.position.count},(o,c)=>c);i.onmessage=o=>{let c=o.data;if(c.type==="ready"){this.affected=c.affected,this.normal.array.set(c.normals),this.normal.needsUpdate=!0,this.workerReady=!0;return}if(c.type==="result"){let l=new Float32Array(c.data),h=this.position.array,u=this.normal.array,d=this.affected;for(let f=0;f<d.length;f++){let m=d[f]*3,v=f*6;h[m]=l[v],h[m+1]=l[v+1],h[m+2]=l[v+2],u[m]=l[v+3],u[m+1]=l[v+4],u[m+2]=l[v+5]}this.position.needsUpdate=!0,this.normal.needsUpdate=!0,this.buffer=c.data,this.inFlight=!1,this.lastMaxStretch=c.maxStretch}},i.onerror=o=>{console.warn("cloth worker failed, solving on the main thread",o.message||o),this.worker=null,this.workerReady=!1,this.inFlight=!1},i.postMessage({type:"init",rest:Float32Array.from(this.rest),index:a,garments:RS(this),dir:n.dir,top:n.top}),this.worker=i,this.cfg=n},step(n){if(!this.mesh)return;if(this.worker){if(this.pendingDt+=n,this.workerReady&&!this.inFlight){let[a,o]=this.cfg.state(),c=this.buffer;this.buffer=null,this.worker.postMessage({type:"step",dt:this.pendingDt,U:a,adv:o,buffer:c},c?[c]:[]),this.pendingDt=0,this.inFlight=!0}return}let i=this.position.array,r=this.normal.array;for(let{patch:a,binding:o}of this.garments){a.step(n,e);for(let{id:c,keys:l,weights:h,blend:u}of o)for(let d=0;d<3;d++){let f=0;for(let m=0;m<4;m++)f+=(a.x[l[m]*3+d]-a.rest[l[m]*3+d])*h[m];i[c*3+d]=this.rest[c*3+d]+f*u,r[c*3+d]=this.restNormal[c*3+d]}}this.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals()}}}var Af=`
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
`;var v0=`
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
`;var Tl=.008333333333333333,Tf=s=>{let e=Math.sin(s*127.1+37.7)*43758.5453;return e-Math.floor(e)};function b0(s,e,t,n){return{d:[0,0],v:[0,0],a:[0,0],w:2*Math.PI*s,damping:e,drag:t,stiffening:n}}function _0(){return{remainder:0,trunk:b0(.29,.38,.45,1.8),branches:Array.from({length:6},(s,e)=>b0(.53+.3*Tf(e),.3+.12*Tf(e+9),.95+.35*Tf(e+3),2.2))}}function x0(s,e,t,n){let i=Math.hypot(...e),r=s.drag*i/(1+i*i/36),a=s.w*s.w*(1+s.stiffening*(s.d[0]**2+s.d[1]**2));for(let o=0;o<2;o++)s.a[o]=r*e[o]-a*s.d[o]-2*s.damping*s.w*s.v[o]-.24*(t?.[o]||0),s.v[o]+=s.a[o]*n,s.d[o]+=s.v[o]*n}function y0(s,e,t,n){if(!(!Number.isFinite(e)||e<=0))for(s.remainder+=Math.min(e,.1);s.remainder+1e-10>=Tl;)x0(s.trunk,t,null,Tl),s.branches.forEach((i,r)=>x0(i,n[r],s.trunk.a,Tl)),s.remainder-=Tl}function Rl(s,e){let[t,n]=e.transition,i=Math.max(0,Math.min(1,(s-t)/(n-t)));return s*(1-e.reduction*i*i*(3-2*i))}function CS(s,e,t){let n=t.originalGround,i=Math.max(0,Math.min(n.N-1,(s-n.x0)/n.cw-.5)),r=Math.max(0,Math.min(n.N-1,(e-n.z0)/n.ch-.5)),a=Math.min(n.N-2,Math.floor(i)),o=Math.min(n.N-2,Math.floor(r)),c=i-a,l=r-o,h=n.h[o*n.N+a],u=n.h[o*n.N+a+1],d=n.h[(o+1)*n.N+a],f=n.h[(o+1)*n.N+a+1];return(h+(u-h)*c)*(1-l)+(d+(f-d)*c)*l}function w0(s,e,t){if(s.userData.terrainProfile===t.version){console.info("terrain: baked profile "+t.version);return}s.updateMatrixWorld(!0);for(let[r,a]of Object.entries(t.offsets)){let o=s.getObjectByName(r);if(!o)throw Error("Missing grounded landmark: "+r);let c=new e.Vector3(0,a,0);if(o.parent){let l=o.parent.matrixWorld.clone().invert();c.applyMatrix3(new e.Matrix3().setFromMatrix4(l))}o.position.add(c),r==="WEB_HM_tree_og"&&o.traverse(l=>{if(l.isMesh)for(let h of["_broot","_sroot","_leaf_pivot"]){let u=l.geometry.attributes[h];if(u){for(let d=0;d<u.count;d++)u.setY(d,u.getY(d)+a);u.needsUpdate=!0}}})}s.updateMatrixWorld(!0);let n=s.getObjectByName("WEB_island");if(!n)throw Error("Missing island");let i=new e.Vector3;n.traverse(r=>{if(!r.isMesh)return;let a=r.material.name==="WEB_island_mat",o=r.matrixWorld.clone().invert(),c=r.geometry.attributes.position;for(let l=0;l<c.count;l++){if(i.fromBufferAttribute(c,l).applyMatrix4(r.matrixWorld),a)i.y=Rl(i.y,t);else{let h=CS(i.x,i.z,t);i.y+=Rl(h,t)-h}i.applyMatrix4(o),c.setXYZ(l,i.x,i.y,i.z)}c.needsUpdate=!0,a&&r.geometry.computeVertexNormals(),r.geometry.computeBoundingBox(),r.geometry.computeBoundingSphere()}),s.userData.terrainProfile=t.version}var M0=`
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
`;function S0(s,e,t,n,i){s.onBeforeCompile=r=>{Object.assign(r.uniforms,{uBenchSun:e,uBenchLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),r.vertexShader=`uniform mat4 uShMatrix; varying vec3 vBenchNormal; varying vec4 vShCoord;
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"bench-surface-depth-v199"}function E0(s,e,t,n,i,r=!1,a=null){s.onBeforeCompile=o=>{Object.assign(o.uniforms,{uGardenSun:e,uGardenLive:i,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),a&&(o.uniforms.uSillFlowerDetail={value:a},o.vertexShader=`varying vec2 vSillUv; varying float vSillHeight;
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"garden-paint-v180-"+r+"-"+!!a}var PS=`
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
`;function Rf(s,e,t,n){let i=s.onBeforeCompile,r=s.customProgramCacheKey.bind(s);s.onBeforeCompile=a=>{i(a),Object.assign(a.uniforms,{uSillField:e.uTex,uSillFieldMin:e.uMin,uSillFieldSize:e.uSize,uSillTime:t,uSillWorldToLocal:{value:n}}),a.vertexShader=PS+a.vertexShader,a.vertexShader=a.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),a.vertexShader=a.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
      float sillSlope=2.*sillFlex(position)/.357;
      objectNormal.y-=dot(objectNormal,sillBreeze(position))*sillSlope;`),a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      float sillWeight=sillFlex(position);
      transformed+=sillBreeze(position)*sillWeight*sillWeight;`)},s.customProgramCacheKey=()=>r()+"-sill-wind-v180"}function A0(s,e,t,n,i,r,a=!1){let o=c=>new e.Color(...c.map(l=>l/255)).convertSRGBToLinear();s.onBeforeCompile=c=>{Object.assign(c.uniforms,{uChimneySun:t,uChimneyLive:r,uChimneyLit:{value:o(a?[103,106,98]:[169,155,128])},uChimneyShade:{value:o(a?[43,47,43]:[49,54,45])},uChimneyMedian:{value:o(a?[147,151,149]:[197,177,151])},uShMatrix:n.matrix,uShMap:n.map,uShSize:n.size,uShOn:n.on}),c.vertexShader=`uniform mat4 uShMatrix; varying vec4 vShCoord; varying vec3 vChimneyNormal;
`+c.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
   vec3 world=(modelMatrix*vec4(position,1.)).xyz;
   vChimneyNormal=inverseTransformDirection(normalize(normalMatrix*normal),viewMatrix);
   vShCoord=uShMatrix*vec4(world+vChimneyNormal*.055,1.);`),c.fragmentShader=`uniform vec3 uChimneySun,uChimneyLit,uChimneyShade,uChimneyMedian; uniform float uChimneyLive; varying vec3 vChimneyNormal;
`+i+c.fragmentShader.replace("#include <opaque_fragment>",`
   vec3 n=normalize(vChimneyNormal);
   vec3 key=normalize(mix(vec3(.840,.242,.485),uChimneySun,uChimneyLive));
   float facing=smoothstep(-.025,.72,dot(n,key));
   float visibility=mix(1.,meadowShadow(),uChimneyLive);
   vec3 pigment=mix(vec3(1.),clamp(diffuseColor.rgb/uChimneyMedian,vec3(.48),vec3(1.48)),.94);
   outgoingLight=mix(mix(uChimneyShade,uChimneyLit,.09),uChimneyLit,facing*visibility)*pigment*sceneShadowContrast(facing*visibility);
   #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"weathered-chimney-v174-"+a}var Ni=`
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
`;function T0(s,e,t,n,{wind:i=!1,turf:r=!1,glass:a=!1,roof:o=!1,bark:c=!1,soft:l=!1,trim:h=!1,houseCentre:u=null}={}){let d=s.onBeforeCompile,f=s.customProgramCacheKey.bind(s);s.onBeforeCompile=m=>{d(m),m.vertexShader=m.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1"),Object.assign(m.uniforms,{uSceneSun:e,uSceneLive:n,uShMatrix:t.matrix,uShMap:t.map,uShSize:t.size,uShOn:t.on}),h&&(m.uniforms.uHouseCentre={value:u}),m.vertexShader=`varying vec2 vSceneGround; varying vec3 vSceneNormal; varying vec3 vSceneWorld;
`+(i?"":`uniform mat4 uShMatrix; varying vec4 vShCoord;
`)+m.vertexShader.replace("#include <project_vertex>",`
   vSceneWorld=(modelMatrix*vec4(transformed,1.)).xyz;
   vSceneGround=vSceneWorld.xz;
   vSceneNormal=inverseTransformDirection(normalize(transformedNormal),viewMatrix);
   ${i?"":`vShCoord=uShMatrix*vec4((modelMatrix*vec4(transformed,1.)).xyz+vSceneNormal*${o?".012":".025"},1.);`}
   #include <project_vertex>`);let v=`
   vec3 sceneKey=normalize(mix(vec3(.840,.242,.485),uSceneSun,uSceneLive));
   float sceneVisibility=mix(1.,meadowShadow(),uSceneLive);
   ${r?"outgoingLight=sceneMeadowPigment(outgoingLight,vSceneGround);":""}
   ${c?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
      outgoingLight *= mix(1.,(.40+.72*f)*sceneShadowContrast(f),uSceneLive); }`:l?`{ float f=sceneFacing(vSceneNormal,sceneKey)*sceneVisibility;
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
`+Ni+m.fragmentShader.replace(g,v+g)},s.customProgramCacheKey=()=>f()+"-scene-light-v223-"+[i,r,a,o,c,l,h].join("-"),s.needsUpdate=!0}function R0(s,e=""){return/home|tree|bench|clothes/.test(s)||/^WEB_HM_(home|bench|clothes|shore)_/.test(e)||/^WEB_Illustrated(Bark|Leaf)/.test(e)||/^WEB_petal_/.test(e)}function C0(s,e,t,n,i,r,a){let o=l=>new e.Color(...l.map(h=>h/255)).convertSRGBToLinear(),c={uPlasterCenter:{value:new e.Vector3(...t.center)},uPlasterLit:{value:o(t.lit_srgb)},uFrontLit:{value:o(t.front_lit_srgb||t.lit_srgb)},uPlasterShade:{value:o(t.shade_srgb)},uRearShade:{value:o(t.rear_shade_srgb)},uPlasterMedian:{value:o(t.source_median_srgb)},uWearBounds:{value:new e.Vector4(...t.weathered_corners)},uSideTextureStrength:{value:t.side_texture_strength??.22},uGablePaint:{value:s.name.startsWith("WEB_HM_home_plaster_38")?1:0},uGableMedian:{value:o([127,128,110])},uPlasterSun:n,uPlasterLive:a,uShMatrix:i.matrix,uShMap:i.map,uShSize:i.size,uShOn:i.on};s.onBeforeCompile=l=>{Object.assign(l.uniforms,c),l.vertexShader=`uniform mat4 uShMatrix; uniform vec4 uWearBounds; varying float vQuietSide; uniform vec3 uPlasterCenter; varying vec4 vShCoord;
      varying vec3 vPlasterWorld; varying vec3 vPlasterNormal; varying vec3 vPlasterLocal; varying float vWallAxis;
`+l.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
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
      vShCoord=uShMatrix*vec4(vPlasterWorld+vPlasterNormal*.025,1.0);`),l.fragmentShader=l.fragmentShader.replace("#include <map_fragment>",`
      #ifdef USE_MAP
      diffuseColor*=plasterPaint(map,vMapUv);
      #endif`),l.fragmentShader=`
      vec4 plasterPaint(sampler2D pigmentMap,vec2 uv){
        // Each elevation occupies one unique quadrant. UVs are fixed to the
        // complete building surface; do not tile, scramble or blend motifs.
        return texture2D(pigmentMap,uv);
      }
      uniform vec3 uPlasterCenter,uFrontLit,uPlasterLit,uPlasterShade,uRearShade,uPlasterMedian,uPlasterSun;
      uniform float uPlasterLive,uSideTextureStrength,uGablePaint; uniform vec3 uGableMedian; varying float vQuietSide; uniform vec4 uWearBounds; varying vec3 vPlasterWorld,vPlasterNormal,vPlasterLocal; varying float vWallAxis;
`+r+l.fragmentShader.replace("#include <opaque_fragment>",`
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
      #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"reference-gable-v221"}var P0={waterLevel:.02,polygon:[[-7.987894694399442,-22.549935341269553],[-7.9771248615490435,-22.70002537855673],[-7.956132778892359,-22.841797932956577],[-7.9154523742137695,-22.997999377431473],[-7.867172068752532,-23.131831141397704],[-7.828849046631001,-23.2164294842829],[-7.75160247476648,-23.35458339250706],[-7.641948295944461,-23.51343848504676],[-7.514208167223112,-23.64982440836896],[-7.336780399498208,-23.79168626844341],[-7.107035874805265,-23.949429633356683],[-7.078409245022858,-23.94180337429376],[-6.99611732992006,-23.680307416175722],[-6.972159842021256,-23.593489317509714],[-6.940715121485183,-23.44358450252468],[-6.92589407647665,-23.26455149443727],[-6.929736836264584,-23.168526754231056],[-6.942886506066648,-23.032273676371776],[-6.973367385879903,-22.868357359752338],[-7.001719549127445,-22.77114103295838],[-7.043137963754038,-22.65590984496234],[-7.0871245666938485,-22.557976906402487],[-7.173073877334716,-22.406881644748765],[-7.240863331073182,-22.306325083134613],[-7.3325329328049635,-22.195155241179748],[-7.388805444456387,-22.138347527698798],[-7.519572131189774,-22.02806122001669],[-7.8229065805350695,-21.796120778863962],[-7.845394800355291,-21.80435338801289],[-7.94134316677993,-22.177827766216243],[-7.9742718719461765,-22.335138472207138],[-7.987497899897865,-22.462030493944205]],center:[-7.456798273348511,-22.890403912711033]};var Cf={center:[-1.7501424551010132,3.8930039405822754,-4.386573791503906],lit_srgb:[231,212,193],shade_srgb:[65,69,61],source_median_srgb:[241,236,227],changed_foot_faces:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,2908,2909,2910,2911,2912,2913,2914,2915,2916,2917,2918,2919,2920,2921,2922,2923,2924,2925,2926,2927,2928,2929,2930,2931,2932,2933,2934,2935,2936,2937,2938,2939,2940,4063,4067,4068,4072,4073,4077,4223,4224,4225,4226,4227,4229,4230,4231,4234,4235,4236,4414,4415,19439,19440,19441],weathered_corners:[-4.984452296074341,-.7439188854702072,7.915547703925659,7.7821],texture_source:"reference/textures/facade/whole-house-oil-v171.png",rear_shade_srgb:[124,119,103],front_lit_srgb:[222,190,165],side_texture_strength:.22};var Cl={materials:{WEB_HM_home_window_4:{reflection:.94,blur:1},WEB_HM_home_window_18:{reflection:1.02,blur:.92},WEB_HM_home_window_19:{reflection:.52,blur:1.25,interior:0},WEB_HM_home_window_20:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_21:{reflection:1.05,blur:.8,interior:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_22:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_23:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_24:{reflection:1.05,blur:1,frontGlazing:1,frontDaylight:0,interior:0,blindOpening:0,sideCurtains:0,roomVariation:0,lift:.6},WEB_HM_home_window_25:{reflection:.84,blur:1.45},WEB_HM_home_window_32:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_33:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_34:{reflection:1.05,blur:.8,interior:0,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:0},WEB_HM_home_window_35:{reflection:1.05,blur:.8,interior:.94,roomVariation:-.025,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1},WEB_HM_home_window_36:{reflection:1.05,blur:.8,interior:.94,roomVariation:.045,blindOpening:0,frontDaylight:1,frontGlazing:1,sideCurtains:1}},views:{original:{label:"Front upper left \u2014 closed curtains",eye:[1.3976149559020996,5.089506149291992,2.7602779865264893],target:[-.7384145855903625,5.089506149291992,.9640572667121887],fov:50},gathered:{label:"Front upper middle \u2014 closed curtains",eye:[4.105578891932964,5.188506126403809,-.45997825264930725],target:[1.969549410045147,5.188506126403809,-2.256199389696121],fov:50},closed:{label:"Front upper right \u2014 closed curtains",eye:[6.437035083770752,5.152506351470947,-3.2324986457824707],target:[4.3010053634643555,5.152506351470947,-5.028719902038574],fov:50},cafe:{label:"Front lower left \u2014 parted curtains",eye:[1.4343006610870361,3.1015024185180664,2.7166526317596436],target:[-.7017291188240051,3.1015024185180664,.9204317927360535],fov:50},swept:{label:"Front lower right \u2014 parted curtains",eye:[6.428346157073975,3.058502435684204,-3.2221665382385254],target:[4.292316436767578,3.058502435684204,-5.018387317657471],fov:50},roller:{label:"Rear upper left \u2014 roller",eye:[-8.710698127746582,5.148006439208984,-7.430671691894531],target:[-6.3545379638671875,5.148006439208984,-5.449339389801025],fov:50},roman:{label:"Rear upper right \u2014 roman",eye:[-5.94320011138916,5.148006439208984,-10.721724510192871],target:[-3.587040424346924,5.148006439208984,-8.740392684936523],fov:50},privacy:{label:"Small side window \u2014 privacy",eye:[-5.303554058074951,5.439507007598877,3.4764301776885986],target:[-4.0807085037231445,5.439507007598877,2.022246837615967],fov:50},attic:{label:"Attic window \u2014 centered",eye:[4.003900057220459,7.463011093139649,-11.229307524108886],target:[2.372250324630737,7.463011093139649,-9.288982740783691],fov:50}}};var co={centers:[[32.04795687668068,15.272394050647152,-2.9930031889886366],[34.04525666965455,13.5469589159488,-2.909783447090909],[30.50718275067227,12.511697835129787,-3.0572012755954545],[28.50988295769841,10.096088646552094,-3.140421017493182],[32.33328541853409,9.751001619612424,-2.9811146544318183],[31.534365501344546,7.737993962464345,-3.0144025511909094]],radii:[[1.4495844681818182,1.8945277778987915,2.2],[1.5729533590909088,1.3044289618319547,2.2],[3.1150644954545457,1.5218337888039473,2.9000000000000004],[2.251482259090909,1.925585610323362,2.9000000000000004],[2.8066422681818177,2.1740482697199246,2.9000000000000004],[.801897790909091,1.0870241348599623,1.2000000000000002]],right:[.999133,0,.04163],depth:[.04163,0,-.999133]};var L0={x0:21.507,x1:37.507000000000005,y0:3.114,y1:21.114,trunk_base_world:[29.507,1.114,-3.097],painted_crown_extent_m:{dx:[-3.4000000000000004,6.9],dy:[4.3,15.2]},reference_trunk_base_px:[3013,1060],px_per_m:30.624,note:"V223: keep-probability of a leaf by its drawn (x, y) in the world; the painting crown relative to its own trunk base, placed on ours (scripts/crown_mask.py)"};var or={points:[[-5.089419841766357,-7.194624722003937],[-5.43648081715508,-7.290950428933904],[-5.748990816535627,-7.428363466648519],[-6.038466831910721,-7.593168058219567],[-6.316425855283091,-7.771668426718831],[-6.558851281868285,-8.02407998877454],[-6.7608025342595734,-8.366365001993307],[-6.978364302466784,-8.68938999367238],[-7.22227557895765,-8.97978026500778]],width:.48,door_shift_local_x:-.7634999960743412,moved_vertices:1336};var Oe={about:"The Blender names the viewer depends on, by the role each plays. main.js reads them as M.* and carries no name of its own; tests/world-manifest.test.mjs checks every entry against web/island_world.glb, so a rename in Blender fails a test instead of the look.",nodes:{island:"WEB_island",meadow:"WEB_meadow",meadowTable:"WEB_meadow_table",house:"WEB_HM_home",tree:"WEB_HM_tree_og",water:"WEB_water"},materials:{housePaintRetint:"WEB_HM_home_paint_8",houseRoofEdgeTrim:"WEB_HM_home_paint_39",houseSillFlowers:"WEB_HM_home_garden_37",boat:"WEB_HM_shore_paint_0",rope:"WEB_HM_shore_paint_2",path0:"WEB_path_0",roofPaint1:"WEB_HM_home_paint_1",roofPaint2:"WEB_HM_home_paint_2"},prefixes:{housePart:"WEB_HM_home_",houseWindow:"WEB_HM_home_window_",housePlaster:"WEB_HM_home_plaster_",houseGarden:"WEB_HM_home_garden_",houseFlashing:"WEB_HM_home_flashing_",houseChimney:"WEB_HM_home_chimney_",path:"WEB_path_",treeTable:"WEB_tree_table_"},substrings:{house:"home",bench:"HM_bench",clothes:"clothes",bark:"IllustratedBark",leaf:"IllustratedLeaf",oil:"_Oil",petal:"petal"}};var Pf=new URLSearchParams(location.search).has("embed")&&window.parent!==window,Tn=s=>{Pf&&window.parent.postMessage({isola:"v1",...s},location.origin)};function D0(s,e,t){return new Promise(n=>{let i=null,r=!1,a=()=>{clearTimeout(o),removeEventListener("message",c),n(i)},o=setTimeout(()=>{r||a()},2500);function c(l){l.origin!==location.origin||!l.data||(l.data.isola==="ack"?r=!0:l.data.isola==="go"&&(l.data.world instanceof Blob&&(i=l.data.world),a()))}addEventListener("message",c),Tn({type:"hello",glb:s,build:e,bytes:t})})}var qn={c:{value:new T(0,.02,0)},axis:{value:new j(1,0)},heave:{value:0},roll:{value:0},pitch:{value:0},ready:!1};function I0(s){s.then(e=>{qn.c.value.set(e.center[0],.02,e.center[1]);let t=0,n=[1,0];for(let i of e.polygon)for(let r of e.polygon){let a=r[0]-i[0],o=r[1]-i[1],c=a*a+o*o;c>t&&(t=c,n=[a,o])}qn.axis.value.set(n[0],n[1]).normalize(),qn.ready=!0}).catch(()=>{})}function N0(s){qn.heave.value=.022*Math.sin(s*.85)+.01*Math.sin(s*1.9+1.3),qn.roll.value=.026*Math.sin(s*.62+.7)+.011*Math.sin(s*1.45),qn.pitch.value=.013*Math.sin(s*.5+2)}function F0(s,e,t){e.updateWorldMatrix(!0,!1);let n={value:e.matrixWorld.clone().invert()},i=s.onBeforeCompile;s.onBeforeCompile=r=>{i&&i(r),Object.assign(r.uniforms,{uBoatC:qn.c,uBoatAxis:qn.axis,uBoatHeave:qn.heave,uBoatRoll:qn.roll,uBoatPitch:qn.pitch,uBoatInv:n}),r.vertexShader=`uniform vec3 uBoatC; uniform vec2 uBoatAxis; uniform float uBoatHeave, uBoatRoll, uBoatPitch; uniform mat4 uBoatInv;
`+r.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        vec3 wpB = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vec3 rB = wpB - uBoatC;
        float wB = ${t?"1.0 - smoothstep(0.9, 2.4, length(rB.xz))":"1.0"};
        vec3 ax = vec3(uBoatAxis.x, 0.0, uBoatAxis.y), ay = vec3(-uBoatAxis.y, 0.0, uBoatAxis.x);
        rB += cross(ax * (uBoatRoll * wB), rB) + cross(ay * (uBoatPitch * wB), rB);
        rB.y += uBoatHeave * wB;
        transformed = (uBoatInv * vec4(rB + uBoatC, 1.0)).xyz;
      }`)},s.customProgramCacheKey=()=>"boat-v219-"+(t?"rope":"hull")}var Pl=[];function kS(s){let e=Math.min(Math.max((s-45)/65,0),1);return 1-.75*e*e*(3-2*e)}function Ll(s,e,t,n){if(!Pl.length)return;let i=n||!t&&e>=1,r=s.position.x,a=s.position.z;for(let{mesh:o,c}of Pl){let l=c.lodR1,h=l.length,u=h;if(!i){let d=Math.max(c.min[0]-r,0,r-c.max[0]),f=Math.max(c.min[2]-a,0,a-c.max[2]),m=Math.min(t?kS(Math.hypot(d,f)):1,e)+3e-5;if(m<1){let v=0,g=h;for(;v<g;){let p=v+g>>1;l[p]>m?g=p:v=p+1}u=v}}o.geometry.setDrawRange(0,u?c.lodEnd[u-1]:0)}}function Js(s){Tn({type:"error",message:s});let e=document.getElementById("loading");e||(e=document.createElement("div"),e.id="loading",document.body.appendChild(e)),e.style.opacity=1,e.textContent=s+" ";let t=document.createElement("button");t.textContent="Try again",t.style.font="inherit",t.style.marginLeft="8px",t.addEventListener("click",()=>location.reload()),e.appendChild(t)}function O0(){let s=document.getElementById("loading");return!!s&&s.isConnected&&s.style.opacity!=="0"}function U0(s){addEventListener("error",()=>{O0()&&Js("The island could not load.")}),addEventListener("unhandledrejection",()=>{O0()&&Js("The island could not load.")}),s.domElement.addEventListener("webglcontextlost",e=>{e.preventDefault(),Js("The graphics context was lost.")}),s.domElement.addEventListener("webglcontextrestored",()=>{location.reload()})}var k0=s=>!!s&&(typeof ImageBitmap<"u"&&s instanceof ImageBitmap||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement);function Lf(){(this.userData=this.userData||{}).bpe=this.array.BYTES_PER_ELEMENT,this.array=null}function Df(s,e){let t=0,n=new Set;return s.traverse(i=>{if(!i.isMesh||!i.geometry||e.has(i.geometry))return;let r=i.geometry;r.boundingSphere||r.computeBoundingSphere();for(let a of Object.values(r.attributes)){if(a.isInterleavedBufferAttribute){let o=a.data;if(!o.array||n.has(o))continue;n.add(o),t+=o.array.byteLength,o.onUpload(Lf);continue}!a.array||n.has(a)||(n.add(a),t+=a.array.byteLength,a.onUpload(Lf))}r.index&&r.index.array&&!n.has(r.index)&&(n.add(r.index),t+=r.index.array.byteLength,r.index.onUpload(Lf))}),t}function B0(s,e,t=[]){let n=new Set,i=r=>{r&&r.isTexture&&!r.isRenderTargetTexture&&!n.has(r)&&(n.add(r),e(r))};s.traverse(r=>{let a=r.material?Array.isArray(r.material)?r.material:[r.material]:[];for(let o of a){for(let c of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])i(o[c]);if(o.uniforms)for(let c of Object.values(o.uniforms))i(c&&c.value)}});for(let r of t)i(r)}function Dl(s,e=2048){let t=s.image;if(s.isDataTexture||s.userData.halved||!k0(t)||t.width<e)return!1;let n=document.createElement("canvas");return n.width=t.width>>1,n.height=t.height>>1,n.getContext("2d").drawImage(t,0,0,n.width,n.height),t.close&&t.close(),s.dispose(),s.image=n,s.userData.halved=!0,s.needsUpdate=!0,!0}function z0(s,e=[],t=2048){let n=0;B0(s,i=>{Dl(i,t)&&n++},e),console.info("memory tier: "+n+" textures halved")}function If(s,e,t=[]){let n=0;return B0(s,i=>{let r=i.image;if(i.isDataTexture||i.isCanvasTexture||!k0(r))return;let a=e.properties.get(i);if(!a.__webglTexture||a.__version!==i.version)return;let o=r.width,c=r.height;r.close&&r.close(),i.image={width:o,height:c},n++},t),n&&console.info("memory: "+n+" decoded images released after upload"),n}var BS="291ea798";var zS="204c1122";var HS=["erictliu.com","r2.dev","r2.cloudflarestorage.com","objects.githubusercontent.com"];function H0(s,e){let t=s.get("world"),n=null;if(t){try{let o=new URL(t);o.protocol==="https:"&&HS.some(c=>o.hostname===c||o.hostname.endsWith("."+c))&&(n=o.href)}catch{}n||console.warn("world: ignoring "+t+" (host not allowed)")}let i=e&&s.get("cb"),r=n||"./"+(e&&s.get("glbfile")||"island_world.glb")+"?v="+BS+(i?"&cb="+encodeURIComponent(i):""),a=(n?n.replace(/island_world\.glb/,"island_meadow.glb"):"./island_meadow.glb?v="+zS)+(i?(n?"?":"&")+"cb="+encodeURIComponent(i):"");return{WORLD_URL:n,GLB_URL:r,GLB_ABS:new URL(r,location.href).href,MEADOW_URL:a,MEADOW_ABS:new URL(a,location.href).href}}async function Nf({url:s,abs:e,blob:t,cache:n},i){if(t)return console.info("island_world.glb: handed over by the door"),t.arrayBuffer();try{if(window.caches){let d=await caches.match(e);if(d)return console.info("island_world.glb: from the door's cache"),d.arrayBuffer()}}catch(d){console.warn("cache lookup failed",d)}let r=await fetch(s);if(!r.ok)throw new Error("island_world.glb "+r.status);let a=+r.headers.get("content-length")||0;if(!r.body)return r.arrayBuffer();let o=r.body.getReader(),c=[],l=0;for(;;){let{done:d,value:f}=await o.read();if(d)break;c.push(f),l+=f.length,a&&i(l,a)}let h=new Uint8Array(l),u=0;for(let d of c)h.set(d,u),u+=d.length;if(n)try{await(await caches.open("isola-world")).put(e,new Response(h.slice(),{headers:{"Content-Type":"model/gltf-binary","Content-Length":String(l)}}))}catch(d){console.warn("could not cache "+s,d)}return h.buffer}var cr=s=>+(s/1048576).toFixed(1),Il="isola-visit";function V0(s){let e=s.isInterleavedBufferAttribute?s.data:s;return e.array?e.array.BYTES_PER_ELEMENT:e.userData&&e.userData.bpe||(s.normalized?2:4)}function VS(s){let e=new Set,t=0,n={};return s.traverse(i=>{if(!i.isMesh||!i.geometry)return;let r=i.geometry,a=0;for(let c of Object.values(r.attributes)){let l=c.isInterleavedBufferAttribute?c.data:c;e.has(l)||(e.add(l),a+=(c.isInterleavedBufferAttribute?l.stride*l.count:c.count*c.itemSize)*V0(c))}r.index&&!e.has(r.index)&&(e.add(r.index),a+=r.index.count*V0(r.index)),t+=a;let o=i.name.replace(/_c\d+(_c\d+)?$/,"")||i.material&&i.material.name||"?";n[o]=(n[o]||0)+a}),{bytes:t,by:n}}function GS(s,e=[]){let t=new Set,n=0,i=[],r=a=>{if(!a||!a.isTexture||a.isRenderTargetTexture||t.has(a)||!a.image)return;t.add(a);let o=a.image,c=o.width||0,l=o.height||0;if(!c||!l)return;let h=c*l*4*(a.generateMipmaps?4/3:1);n+=h,i.push({name:a.name||(o.src||"").split("/").pop().replace(/\?.*$/,"")||"unnamed",w:c,h:l,mb:cr(h)})};s.traverse(a=>{let o=a.material?[].concat(a.material):[];for(let c of o){for(let l of["map","alphaMap","emissiveMap","normalMap","roughnessMap"])r(c[l]);if(c.uniforms)for(let l of Object.values(c.uniforms))r(l&&l.value)}});for(let a of e)r(a);return i.sort((a,o)=>o.mb-a.mb),{bytes:n,list:i}}function G0(s){let{renderer:e,scene:t}=s,n=[],i=!1,r=null;try{let c=localStorage.getItem(Il);(c==="loading"||c==="ready")&&(r="died while "+c),localStorage.setItem(Il,"loading")}catch{}addEventListener("pagehide",()=>{try{localStorage.setItem(Il,"left")}catch{}});let a=()=>{let c=VS(t),l=GS(t,s.extraTextures||[]),h=(s.targets?s.targets():[]).map(x=>({...x,mb:cr(x.w*x.h*x.bpp)})),u=+h.reduce((x,b)=>x+b.mb,0).toFixed(1),d=n.slice().sort((x,b)=>x-b),f=d.length?{median:+d[d.length>>1].toFixed(1),p90:+d[Math.floor(d.length*.9)].toFixed(1),n:d.length}:null,m=performance.memory?cr(performance.memory.usedJSHeapSize):null,v=s.load?s.load():{},g=x=>v[x]===void 0?null:Math.round(v[x]-v.t0),p=e.domElement;return{build:s.build,ua:navigator.userAgent,tier:s.tier?s.tier():null,dpr:+e.getPixelRatio().toFixed(2),canvas:[p.width,p.height],css:[innerWidth,innerHeight],geometryMB:cr(c.bytes),geometryBy:Object.fromEntries(Object.entries(c.by).sort((x,b)=>b[1]-x[1]).slice(0,12).map(([x,b])=>[x,cr(b)])),texturesMB:cr(l.bytes),textures:l.list.slice(0,12),targetsMB:u,targets:h,totalMB:+(cr(c.bytes)+cr(l.bytes)+u+(m||0)).toFixed(0),heapMB:m,frame:f,programs:(e.info.programs||[]).length,load:{fetched:g("fetched"),parsed:g("parsed"),meadow:g("meadow"),visited:g("visited"),ready:g("ready"),meadowFetched:g("meadowFetched"),meadowReady:g("meadowReady")},ready:i,lastVisit:r}};window.STATS=a;let o=null;if(s.overlay){o=document.createElement("pre"),o.id="stats",o.style.cssText="position:fixed;left:calc(8px + env(safe-area-inset-left,0px));top:calc(8px + env(safe-area-inset-top,0px));z-index:50;margin:0;padding:6px 8px;font:11px/1.35 ui-monospace,Menlo,monospace;color:#f4efe3;background:rgba(20,22,36,.62);border-radius:6px;pointer-events:none;white-space:pre;",document.body.appendChild(o);let c=()=>{let l=a(),h=l.tier||{};o.textContent=[`${l.build}  ${h.memory?"phone tier":"desktop tier"}${h.touch?" touch":""}  dpr ${l.dpr}  ${l.canvas[0]}x${l.canvas[1]}`,`gpu  geo ${l.geometryMB} + tex ${l.texturesMB} + targets ${l.targetsMB}${l.heapMB!=null?" + heap "+l.heapMB:""} = ${l.totalMB} MB`,`frame ${l.frame?l.frame.median+" ms (p90 "+l.frame.p90+")":"-"}  programs ${l.programs}${h.applied&&h.applied.length?"  ladder "+JSON.stringify(h.applied):""}`,`load  fetch ${l.load.fetched}  parse ${l.load.parsed}  build ${l.load.visited}  ready ${l.load.ready} ms  meadow ${l.load.meadowReady} ms`,l.lastVisit?`last visit: ${l.lastVisit}`:""].filter(Boolean).join(`
`)};setInterval(c,1e3),setTimeout(c,100)}return{frame(c){c>0&&c<500&&(n.push(c),n.length>240&&n.shift())},ready(){i=!0;try{localStorage.setItem(Il,"ready")}catch{}},snapshot:a}}function W0({camera:s,grid:e,eye:t=1.8,pad:n=1.3}){let i={grid:e,boxes:[],trunk:null,eye:t,pad:n};function r(h){let d=h.geometry.attributes.position;h.updateWorldMatrix(!0,!1);let f=new T,m=new ft().setFromObject(h),v={N:112,x0:m.min.x,z0:m.min.z,cw:(m.max.x-m.min.x)/112,ch:(m.max.z-m.min.z)/112,h:new Float32Array(12544).fill(-1e9)};for(let g=0;g<d.count;g++){f.fromBufferAttribute(d,g).applyMatrix4(h.matrixWorld);let p=Math.min(111,Math.max(0,Math.floor((f.x-v.x0)/v.cw))),b=Math.min(111,Math.max(0,Math.floor((f.z-v.z0)/v.ch)))*112+p;f.y>v.h[b]&&(v.h[b]=f.y)}for(let g=0;g<6;g++){let p=v.h.slice();for(let x=0;x<112;x++)for(let b=0;b<112;b++){let _=x*112+b;if(p[_]>-1e8)continue;let R=-1e9;for(let[S,C]of[[1,0],[-1,0],[0,1],[0,-1]]){let L=b+S,y=x+C;if(L<0||y<0||L>=112||y>=112)continue;let w=p[y*112+L];w>R&&(R=w)}R>-1e8&&(v.h[_]=R)}}for(let g=0;g<12544;g++)v.h[g]<-1e8&&(v.h[g]=0);i.grid=v}function a(h,u){let d=i.grid;if(!d)return 0;let f=(h-d.x0)/d.cw-.5,m=(u-d.z0)/d.ch-.5;if(f<-1||m<-1||f>d.N||m>d.N)return 0;let v=Math.min(d.N-2,Math.max(0,Math.floor(f))),g=Math.min(d.N-2,Math.max(0,Math.floor(m))),p=Math.min(1,Math.max(0,f-v)),x=Math.min(1,Math.max(0,m-g)),b=d.h,_=d.N,R=b[g*_+v]*(1-p)+b[g*_+v+1]*p,S=b[(g+1)*_+v]*(1-p)+b[(g+1)*_+v+1]*p;return R*(1-x)+S*x}let o=new T;function c(h,u){h.updateWorldMatrix(!0,!1),h.geometry.computeBoundingBox();let d=new T;h.matrixWorld.decompose(new T,new dt,d);let f=h.geometry.boundingBox.clone();f.min.x-=u/d.x,f.max.x+=u/d.x,f.min.y-=u/d.y,f.max.y+=u/d.y,f.min.z-=u/d.z,f.max.z+=u/d.z,i.boxes.push({mat:h.matrixWorld.clone(),inv:h.matrixWorld.clone().invert(),bb:f})}function l(h){let u=s.position,d=Math.max(1.2,a(u.x,u.z)+i.eye);u.y<d&&(u.y=d,h&&h.y<0&&(h.y=0));for(let m of i.boxes){if(o.copy(u).applyMatrix4(m.inv),!m.bb.containsPoint(o))continue;let v=[o.x-m.bb.min.x,m.bb.max.x-o.x,o.y-m.bb.min.y,m.bb.max.y-o.y,o.z-m.bb.min.z,m.bb.max.z-o.z],g=0;for(let p=1;p<6;p++)v[p]<v[g]&&(g=p);g===0?o.x=m.bb.min.x:g===1?o.x=m.bb.max.x:g===2?o.y=m.bb.min.y:g===3?o.y=m.bb.max.y:g===4?o.z=m.bb.min.z:o.z=m.bb.max.z,u.copy(o.applyMatrix4(m.mat)),h&&h.multiplyScalar(.2)}let f=i.trunk;if(f&&u.y<f.top){let m=u.x-f.x,v=u.z-f.z,g=Math.hypot(m,v);if(g<f.r){let p=f.r/Math.max(g,1e-4);u.x=f.x+m*p,u.z=f.z+v*p,h&&h.multiplyScalar(.2)}}}return{COLLIDE:i,groundY:a,registerBox:c,buildGroundGrid:r,collideCamera:l}}function q0({camera:s,controls:e,canvas:t,hud:n,stickEl:i,turnEl:r,collideCamera:a,fov0:o,touchFirst:c,onHeroKey:l}){let h=n,u=0,d={on:!0,vel:new T,yaw:0,pitch:0,roll:0,lookX:0,lookY:0,drag:!1,lastX:0,lastY:0,fov0:o};function f(){let D=new T;s.getWorldDirection(D),d.pitch=Math.asin(rn.clamp(D.y,-1,1)),d.yaw=Math.atan2(-D.x,-D.z),d.roll=0,d.vel.set(0,0,0),d.lookX=d.lookY=0}let m={f:0,r:0},v=!1;function g(){if(!document.body.classList.contains("touch")&&(document.body.classList.add("touch"),v=!0,h.setAttribute("aria-label","Drag to look around. Use the stick to move."),r)){let D=!1;try{D=sessionStorage.getItem("isola-turn")==="1"}catch{}D&&r.classList.add("gone"),r.addEventListener("click",()=>{r.classList.add("gone");try{sessionStorage.setItem("isola-turn","1")}catch{}})}}let p=D=>{D.pointerId===d.dragId&&(d.drag=!1,document.body.classList.remove("dragging"))};t.addEventListener("pointerdown",D=>{if(!(!d.on||D.button>1)&&(D.pointerType==="touch"&&g(),!d.drag)){d.drag=!0,d.dragId=D.pointerId,d.lastX=D.clientX,d.lastY=D.clientY,document.body.classList.add("dragging");try{t.setPointerCapture(D.pointerId)}catch{}}}),addEventListener("pointermove",D=>{if(!d.on||!d.drag||D.pointerId!==d.dragId)return;let U=D.pointerType==="touch"?.003:.0016;d.lookX-=(D.clientX-d.lastX)*U,d.lookY-=(D.clientY-d.lastY)*U,d.lastX=D.clientX,d.lastY=D.clientY}),addEventListener("pointerup",p),addEventListener("pointercancel",p);let x=i.querySelector(".knob"),b={id:-1,cx:0,cy:0,R:40};function _(D){let U=D.clientX-b.cx,q=D.clientY-b.cy,k=Math.hypot(U,q),J=Math.min(k/b.R,1),ee=k>0?U/k:0,re=k>0?q/k:0,be=J<.12?0:(J-.12)/.88;m.r=ee*be,m.f=-re*be,x.style.transform=`translate(${(ee*J*b.R).toFixed(1)}px, ${(re*J*b.R).toFixed(1)}px)`}function R(D){D&&D.pointerId!==b.id||(b.id=-1,m.f=m.r=0,i.classList.remove("live"),x.style.transform="")}i.addEventListener("pointerdown",D=>{if(b.id>=0)return;g();let U=i.getBoundingClientRect();b.cx=U.left+U.width/2,b.cy=U.top+U.height/2,b.id=D.pointerId,i.classList.add("live");try{i.setPointerCapture(D.pointerId)}catch{}_(D),D.preventDefault()}),i.addEventListener("pointermove",D=>{D.pointerId===b.id&&_(D)}),i.addEventListener("pointerup",R),i.addEventListener("pointercancel",R),i.addEventListener("lostpointercapture",R),c&&g();function S(D){let U=1-Math.exp(-D*14),q=d.lookX*U,k=d.lookY*U;d.lookX-=q,d.lookY-=k,d.yaw+=q,d.pitch=rn.clamp(d.pitch+k,-1.25,1.25);let J=d.yaw,ee=d.pitch,re=Math.cos(ee),be=P.set(-Math.sin(J)*re,Math.sin(ee),-Math.cos(J)*re),Re=O.set(Math.cos(J),0,-Math.sin(J)),G=N.set(0,0,0);y.w&&G.add(be),y.s&&G.sub(be),y.d&&G.add(Re),y.a&&G.sub(Re),(m.f||m.r)&&G.addScaledVector(be,m.f).addScaledVector(Re,m.r);let te=G.lengthSq()>0,fe=18;if(te){let ke=G.length();G.multiplyScalar(fe*Math.min(ke,1)/ke)}let se=te?4:6;te&&(u+=D,u>=.65&&h.classList.add("used")),d.vel.lerp(G,1-Math.exp(-D*se)),!te&&d.vel.lengthSq()<1e-4&&d.vel.set(0,0,0),s.position.addScaledVector(d.vel,D),s.position.y<1.2&&(s.position.y=1.2,d.vel.y<0&&(d.vel.y=0));let ye=s.position.x-14.5,Ce=s.position.z,B=Math.hypot(ye,Ce);B>300&&(s.position.x=14.5+ye*300/B,s.position.z=Ce*300/B),d.roll=0,s.rotation.set(ee,J,0,"YXZ"),a(d.vel),e.target.copy(s.position).addScaledVector(be,60)}let C=new Set(["w","a","s","d"]);function L(D){return D instanceof Element&&!!D.closest('input, select, textarea, [contenteditable="true"]')}addEventListener("keydown",D=>{if(D.metaKey||D.ctrlKey||D.altKey||L(D.target))return;let U=D.key.toLowerCase();if(U==="h"){l();return}C.has(U)&&(y[U]=!0,h.querySelector(`[data-key="${U}"]`).classList.add("held"),D.preventDefault())}),addEventListener("keyup",D=>{let U=D.key.toLowerCase();C.has(U)&&(y[U]=!1,h.querySelector(`[data-key="${U}"]`).classList.remove("held"))});let y={w:!1,a:!1,s:!1,d:!1};function w(){for(let D in y)y[D]=!1;h.querySelectorAll(".held").forEach(D=>D.classList.remove("held")),d.drag=!1,document.body.classList.remove("dragging"),d.lookX=d.lookY=0,d.vel.set(0,0,0),R()}addEventListener("blur",w),addEventListener("focusin",D=>{L(D.target)&&w()}),addEventListener("visibilitychange",()=>{document.hidden&&w()});let P=new T,O=new T,N=new T;function E(D){if(!(y.w||y.a||y.s||y.d)||(s.getWorldDirection(P),P.y=0,P.lengthSq()<1e-6))return;P.normalize(),O.set(-P.z,0,P.x);let U=Math.max(e.getDistance(),8)*.2*D;N.set(0,0,0),y.w&&N.addScaledVector(P,U),y.s&&N.addScaledVector(P,-U),y.d&&N.addScaledVector(O,U),y.a&&N.addScaledVector(O,-U),s.position.add(N),e.target.add(N);let q=e.target.x-14.5,k=e.target.z,J=Math.hypot(q,k);if(J>260){let ee=260/J,re=new T(q*(ee-1),0,k*(ee-1));e.target.add(re),s.position.add(re)}}return{FLY:d,MOVE:m,KEYS:y,syncFromCamera:f,fly:S,walk:E,releaseMovement:w,enableTouch:g,get touchActive(){return v}}}function X0({renderer:s,q:e,touchFirst:t,dev:n,knobs:i,mirrorTarget:r,onDprChange:a}){let o=t||e.get("tier")==="phone";o&&(i.shadow=1024),n&&e.get("shadow")&&(i.shadow=+e.get("shadow"));let c=Math.min(devicePixelRatio,o?1.25:2),l=e.get("dpr")?Math.max(.5,Math.min(+e.get("dpr")||c,c)):c,h=o?2e6:42e5,u=p=>{let x=innerWidth*innerHeight*p*p;return x>h?p*Math.sqrt(h/x):p},d={on:!e.has("capture")&&e.get("tier")!=="full"&&!e.get("dpr"),readyAt:0,dts:[],lastStep:0,step:0,applied:[],ladder:[{dpr:1.5},{dpr:1.25},{dpr:1},{mirror:512},{shadow:2048}]};function f(p){l=p,s.setPixelRatio(u(l)),s.setSize(innerWidth,innerHeight),a()}function m(p){if(p.dpr!==void 0){if(p.dpr>=l)return!1;f(p.dpr)}if(p.mirror){let x=r();if(!x)return!1;x.setSize(p.mirror,p.mirror)}return p.shadow&&(i.shadow=Math.min(i.shadow||4096,p.shadow)),d.applied.push(p),console.info("tier: "+JSON.stringify(p)+" (frame interval median over 30 ms)"),!0}function v(p,x,b=30){if(p<200&&d.dts.push(p),d.dts.length<120)return;let _=d.dts.slice().sort((S,C)=>S-C),R=_[_.length>>1];if(d.dts.length=0,!(R<=b||x-d.lastStep<4e3)){for(;d.step<d.ladder.length;)if(m(d.ladder[d.step++])){d.lastStep=x;break}}}return{memory:o,TIER:d,get dpr(){return l},fitDpr:u,applyDpr:f,tierApply:m,tierStep:v,wholeLadder:()=>{for(let p of d.ladder)m(p)}}}function j0({renderer:s,samples:e}){let t=new Nt(2,2,{minFilter:lt,magFilter:lt,colorSpace:mt,samples:e});t.depthTexture=new Hr(2,2),t.depthTexture.type=Ti;let n=new Ci,i=new ei(-1,1,1,-1,0,1),r=new Gt({uniforms:{tDiffuse:{value:t.texture},tDepth:{value:t.depthTexture},tBox:{value:null},tBoxSq:{value:null},uFast:{value:0},uRes:{value:new j(2,2)},uRadius:{value:4},uGrain:{value:.04},uMix:{value:.12},uEdge:{value:.35},uSat:{value:1.1},uCel:{value:0},uSepia:{value:.1},uTime:{value:0},uNear:{value:.5},uFar:{value:6e3}},vertexShader:`varying vec2 vUv;
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
      }`});n.add(new rt(new Ri(2,2),r));let a={count:2,type:Wn,minFilter:xt,magFilter:xt,depthBuffer:!1,generateMipmaps:!1},o=new Nt(2,2,a),c=new Nt(2,2,a),l=new Gt({glslVersion:Ra,uniforms:{tA:{value:null},tB:{value:null},uStep:{value:new j},uSquare:{value:1}},vertexShader:`varying vec2 vUv;
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
      }`}),h=new Ci;h.add(new rt(new Ri(2,2),l));let u=(()=>{let v=s.getContext();return!!(v.getExtension("EXT_color_buffer_float")||v.getExtension("EXT_color_buffer_half_float"))})();u||console.warn("post: no float colour buffers - Kuwahara keeps the 100-tap loop");function d(){let v=s.getPixelRatio();t.setSize(innerWidth*v,innerHeight*v),o.setSize(innerWidth*v,innerHeight*v),c.setSize(innerWidth*v,innerHeight*v),r.uniforms.tDepth.value=t.depthTexture,r.uniforms.uRes.value.set(innerWidth*v,innerHeight*v)}d(),addEventListener("resize",d);function f(v,g,p){s.setRenderTarget(t),s.render(v,g);let x=u&&!p.kuwLoop&&r.uniforms.uRadius.value===4&&r.uniforms.uMix.value>.001;if(x){let b=l.uniforms;b.tA.value=t.texture,b.tB.value=null,b.uSquare.value=1,b.uStep.value.set(1/t.width,0),s.setRenderTarget(o),s.render(h,i),b.tA.value=o.textures[0],b.tB.value=o.textures[1],b.uSquare.value=0,b.uStep.value.set(0,1/t.height),s.setRenderTarget(c),s.render(h,i),r.uniforms.tBox.value=c.textures[0],r.uniforms.tBoxSq.value=c.textures[1]}r.uniforms.uFast.value=x?1:0,s.setRenderTarget(null),s.render(n,i)}return{material:r,resize:d,render:f,targets:()=>[{name:"painterly "+t.samples+"x",w:t.width,h:t.height,bpp:8*(t.samples+1)},{name:"kuwahara x2",w:o.width,h:o.height,bpp:32}]}}var Oi="v260",sv,jS=new Promise(s=>{sv=s}),Cn=new URLSearchParams(location.search).has("dev");Cn&&document.body.classList.add("dev");var av=Promise.resolve(P0).then(p0);I0(av);var ui=new URLSearchParams(location.search),ov=matchMedia("(hover: none) and (pointer: coarse)").matches,li={lodOff:!1,lodRangeOff:!1,mirrorKeep:void 0,kuwLoop:!1,shadow:0};window.KNOBS=li;var{WORLD_URL:KS,GLB_URL:YS,GLB_ABS:cv,MEADOW_URL:JS,MEADOW_ABS:ZS}=H0(ui,Cn);window.WORLD_URL=KS;var J0=Pf?D0(cv,Oi,42981988):null,vt=new Oa({powerPreference:"high-performance",antialias:ui.has("aa"),preserveDrawingBuffer:ui.has("capture")});vt.shadowMap.enabled=!0;vt.shadowMap.type=pl;var Fi=X0({renderer:vt,q:ui,touchFirst:ov,dev:Cn,knobs:li,mirrorTarget:()=>jn&&jn.getRenderTarget(),onDprChange:()=>Zl.resize()}),ur=Fi.memory,dr=Fi.TIER;window.TIER=dr;window.applyDpr=Fi.applyDpr;vt.setPixelRatio(Fi.fitDpr(Fi.dpr));vt.setSize(innerWidth,innerHeight);vt.toneMapping=On;vt.outputColorSpace=mt;document.getElementById("app").appendChild(vt.domElement);var pt=new Ci;pt.background=new ge("#8b95ab");pt.fog=new Ds("#98a0b2",900,3400);var lv={value:null},Xl={value:new T(.84,.242,.485).normalize()},Kf={value:1},Vf=await(window.GRIDS_FETCH||fetch("./world-grids.bin?v="+Oi)).then(async s=>{if(!s.ok)throw new Error("world-grids.bin "+s.status);let e=await s.arrayBuffer(),n=new DataView(e).getUint32(0,!0),i=JSON.parse(new TextDecoder().decode(new Uint8Array(e,4,n)).replace(/\0+$/,"")),r=(c,l)=>{let h=new Int16Array(e,l,c.count),u=new Float32Array(c.count);for(let d=0;d<c.count;d++)u[d]=h[d]/i.scale;return{N:c.N,x0:c.x0,z0:c.z0,cw:c.cw,ch:c.ch,h:u}},a=4+n,o=a+i.island.count*2;return{island:r(i.island,a),ground:r(i.ground,o),profile:i.profile}}),$r={...Vf.profile,originalGround:Vf.ground},hv=$r.offsets[Oe.nodes.house],Zr={value:1};for(let s of Object.values(Cl.views))for(let e of["eye","target"])s[e][1]+=hv;var Zs=[],Yf={value:new ri().load("./interior-warm-v1.webp?v="+Oi)};Zs.push(Yf.value);Yf.value.colorSpace=mt;{let s=document.createElement("canvas");s.width=4,s.height=512;let e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#1b558e"),t.addColorStop(.42,"#22629b"),t.addColorStop(.8,"#286ea6"),t.addColorStop(1,"#3a7cae"),e.fillStyle=t,e.fillRect(0,0,4,512);let n=new ka(s);n.colorSpace=mt;let i=new rt(new Xr(2900,48,32),new It({map:n,side:Vt,fog:!1,depthWrite:!1}));i.renderOrder=-3,pt.add(i);let r=new ri().load("./sky_panorama.jpg?v="+Oi,d=>{ur?Dl(d,1024):Cn&&ui.get("sky")==="half"&&Dl(d,1024)});Zs.push(r),r.colorSpace=mt,r.wrapS=kn,lv.value=r;let a=2500,o=Math.tan(28.74*Math.PI/180),c=Math.tan(-12.196*Math.PI/180),l=a*.747*(o-c),h=new It({map:r,side:Vt,fog:!1,depthWrite:!1,transparent:!0});h.onBeforeCompile=d=>{d.uniforms.uVisibleSun=Xl,d.uniforms.uVisibleSunOn=Kf,d.vertexShader=`varying vec3 vSkyDirection;
`+d.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSkyDirection=(modelMatrix*vec4(position,1.0)).xyz-cameraPosition;`),d.fragmentShader=Af+`varying vec3 vSkyDirection;
`+d.fragmentShader,d.fragmentShader=d.fragmentShader.replace("#include <map_fragment>",`{ float hv = 0.717; float v = vMapUv.y;
         float vv = v < hv ? v : hv + (v - hv) / 1.22;
         vec4 sampledDiffuseColor = texture2D( map, vec2(vMapUv.x, vv) );
         sampledDiffuseColor.rgb=paintedSun(vSkyDirection,sampledDiffuseColor.rgb);
         diffuseColor *= sampledDiffuseColor; }`),d.fragmentShader=d.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
       diffuseColor.a *= smoothstep(0.985, 0.72, vMapUv.y);
       diffuseColor.a *= smoothstep(0.02, 0.16, vMapUv.y);   // bottom seam too`)};let u=new rt(new $i(a,a,l,96,1,!0),h);u.position.y=a*.747*c+l/2,u.renderOrder=-2,pt.add(u)}var $S=18/36;function fo(s){return 2*Math.atan($S/Math.min(Math.max(s,1),2.4))*180/Math.PI}console.assert(Math.abs(fo(2.4)-23.5366)<.001,"heroFov(2.4) must be the hero lens, 36 mm on 36 mm at 2.4:1");var Ze=new bt(fo(innerWidth/innerHeight),innerWidth/innerHeight,1.5,6e3),uv={shift:.122},Z0=-.135;function QS(s){let e=Math.min(Math.max((s-2.4)/1.1555555555555554,0),1),t=Math.min(Math.max((s-1)/.6,0),1);return(Z0+e*(-.2068-Z0))*t}function po(){Ze.setViewOffset(innerWidth,innerHeight,QS(innerWidth/innerHeight)*innerWidth,-uv.shift*innerHeight,innerWidth,innerHeight)}po();var jl=new T(3,4.45,120),ho=new T(8,4.45,0);Ze.position.copy(jl);var qt=new wl(Ze,vt.domElement);qt.target.copy(ho);qt.enableDamping=!0;qt.dampingFactor=.06;qt.minDistance=6;qt.maxDistance=320;qt.maxPolarAngle=Math.PI*.495;var Jf=!1,{COLLIDE:ci,groundY:dv,registerBox:$0,buildGroundGrid:e1,collideCamera:fv}=W0({camera:Ze,grid:Vf.island});window.COLLIDE=ci;window.groundY=dv;var Vl=q0({camera:Ze,controls:qt,canvas:vt.domElement,hud:document.getElementById("hud"),stickEl:document.getElementById("stick"),turnEl:document.getElementById("turn"),collideCamera:fv,fov0:fo(innerWidth/innerHeight),touchFirst:ov,onHeroKey:()=>Kl()}),{FLY:Pn,MOVE:t1,fly:pv,walk:mv}=Vl,Zf=()=>Vl.syncFromCamera();window.MOVE=t1;window.LOOKAT=function(s,e,t,n,i,r){return Ze.position.set(s,e,t),Ze.lookAt(n,i,r),Zf(),{eye:Ze.position.toArray(),yaw:Pn.yaw,pitch:Pn.pitch}};function n1(s){if(Pn.on=s==="fly",Pn.on)qt.update(),Zf(),qt.enabled=!1,Jf=!1;else{let t=new T;Ze.getWorldDirection(t),qt.target.copy(Ze.position).addScaledVector(t,60),Ze.rotation.z=0,Ze.fov=Pn.fov0,po(),qt.enabled=!0,qt.update()}let e=document.getElementById("c-cam");e&&e.value!==s&&(e.value=s)}function Kl(){qt.enabled=!1,Jf=!1,Ze.position.copy(jl),qt.target.copy(ho),Ze.up.set(0,1,0),Ze.lookAt(ho),Ze.rotation.z=0,Ze.aspect=innerWidth/innerHeight,Ze.fov=Pn.fov0=fo(Ze.aspect),po(),Ze.updateProjectionMatrix(),Pn.on=!0,Zf();let s=document.getElementById("c-cam");s&&(s.value="fly")}window.restoreHero=Kl;var i1=1.33;function gv(){Kl(),Ze.position.lerpVectors(ho,jl,i1),qt.target.copy(ho)}window.restoreDefault=gv;var Bl=[],jn=null,r1=new T(0,1,0),Yn={t:{value:0},on:!0,spd:{value:1.8}},Yl=Rl(2.45,$r);function Nl(s,e){let t=Math.sin(s*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function Gf(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n;i=i*i*(3-2*i),r=r*r*(3-2*r);let a=Nl(t,n),o=Nl(t+1,n),c=Nl(t,n+1),l=Nl(t+1,n+1);return(a*(1-i)+o*i)*(1-r)+(c*(1-i)+l*i)*r}var Ff=Vd.toHalfFloat;function s1(){let s=0,e=0;for(;s===0;)s=Math.random();for(;e===0;)e=Math.random();return Math.sqrt(-2*Math.log(s))*Math.cos(2*Math.PI*e)}var Kn={dir:new j(.92,.39).normalize(),mean:1.8,U:1.8,adv:0,step(s){let t=.42*Math.sqrt(Math.max(this.mean,.3)/3);this.U+=.18*(this.mean-this.U)*s+t*Math.sqrt(s)*s1(),this.U=Math.max(0,Math.min(this.U,this.mean*1.6+.5)),this.adv+=this.U*.85*s,Yn.spd.value=this.U},at(s,e,t,n){let i=this.dir,r=s*i.x+t*i.y-this.adv,a=-s*i.y+t*i.x,o=Gf(r*.04,a*.1),c=Gf(r*.17+7.3,a*.24-3.1),l=.45+1*o+.35*(c-.5),h=.55+.45*Math.min(Math.max((e-Yl+.4)/5,0),1),u=this.U*l*h,d=(c-.5)*.45,f=Math.cos(d),m=Math.sin(d);return n.x=u*(i.x*f-i.y*m),n.y=u*(i.x*m+i.y*f),n}},hi={W:160,H:80,box:null,tex:null,d:null,v:null,w0:null,tmp:new j,uMin:{value:new j},uSize:{value:new j(1,1)},uTex:{value:null},uLean:{value:10},uFlut:{value:.03},init(s){this.box=s;let e=this.W*this.H;this.d=new Float32Array(e*2),this.v=new Float32Array(e*2),this.w0=new Float32Array(e);for(let t=0;t<this.H;t++)for(let n=0;n<this.W;n++)this.w0[t*this.W+n]=2*Math.PI*(1.15+.09*(Gf(n*.11,t*.13)-.5));this.data=new Uint16Array(e*4),this.tex=new gn(this.data,this.W,this.H,$t,Wn),this.tex.minFilter=this.tex.magFilter=lt,this.tex.wrapS=this.tex.wrapT=Ht,this.tex.needsUpdate=!0,this.uTex.value=this.tex,this.uMin.value.set(s.min.x,s.min.z),this.uSize.value.set(s.max.x-s.min.x,s.max.z-s.min.z)},step(s){if(!this.box)return;let{W:e,H:t,d:n,v:i,w0:r,data:a,tmp:o}=this,c=this.uSize.value.x/e,l=this.uSize.value.y/t,h=this.uMin.value.x,u=this.uMin.value.y,d=.38,f=.7,m=.16,v=3;for(let g=0;g<t;g++){let p=u+(g+.5)*l;for(let x=0;x<e;x++){let b=g*e+x,_=b*2;Kn.at(h+(x+.5)*c,Yl+.4,p,o);let R=Math.sqrt(o.x*o.x+o.y*o.y),S=r[b],C=x>0?_-2:_,L=x<e-1?_+2:_,y=g>0?_-2*e:_,w=g<t-1?_+2*e:_,P=n[C]+n[L]+n[y]+n[w]-4*n[_],O=n[C+1]+n[L+1]+n[y+1]+n[w+1]-4*n[_+1],N=f*R*o.x-S*S*n[_]-2*d*S*i[_]+v*P,E=f*R*o.y-S*S*n[_+1]-2*d*S*i[_+1]+v*O;i[_]+=N*s,i[_+1]+=E*s,n[_]+=i[_]*s,n[_+1]+=i[_+1]*s;let D=Math.sqrt(n[_]*n[_]+n[_+1]*n[_+1]);D>m&&(n[_]*=m/D,n[_+1]*=m/D),a[b*4]=Ff(n[_]),a[b*4+1]=Ff(n[_+1]),a[b*4+2]=Ff(R)}}this.tex.needsUpdate=!0}},Ct={base:3,height:17,cx:24,cz:3,tmp:new j,bbox:null,dynamics:_0(),uTrunk:{value:new j},uBranch:{value:Array.from({length:6},()=>new j)},uBase:{value:3},uHeight:{value:17},uFlutter:{value:0},uCentre:{value:new j},uWidth:{value:12},init(s){this.bbox?this.bbox.union(s):this.bbox=s.clone(),s=this.bbox,this.base=s.min.y,this.height=s.max.y-s.min.y,this.cx=(s.min.x+s.max.x)/2,this.cz=(s.min.z+s.max.z)/2,this.uBase.value=this.base,this.uHeight.value=this.height,this.uCentre.value.set(this.cx,this.cz),this.uWidth.value=Math.max(s.max.x-s.min.x,s.max.z-s.min.z),ci.trunk&&(ci.trunk.top=this.base+.55*this.height)},step(s){Kn.at(this.cx,this.base+this.height*.78,this.cz,this.tmp);let e=this.tmp.toArray();this.uFlutter.value=this.tmp.length();let t=Array.from({length:6},(n,i)=>{let r=i*2.39996323;return Kn.at(this.cx+Math.cos(r)*this.uWidth.value*.3,this.base+this.height*(.42+i*.095),this.cz+Math.sin(r)*this.uWidth.value*.3,this.tmp),this.tmp.toArray()});y0(this.dynamics,s,e,t),this.uTrunk.value.fromArray(this.dynamics.trunk.d),this.uBranch.value.forEach((n,i)=>n.fromArray(this.dynamics.branches[i].d))}},Of=new j,Xn=g0(ai,(s,e,t)=>(Kn.at(s,e,t,Of),[Of.x,Of.y]),new URLSearchParams(location.search).has("syncCloth")?null:{url:new URL("./cloth-worker.js?v="+Oi,import.meta.url).href,dir:Kn.dir.toArray(),top:Yl,state:()=>[Kn.U,Kn.adv]}),vv={level:{value:.02}};function a1(s){let e=s.onBeforeCompile;s.onBeforeCompile=t=>{e&&e(t),t.uniforms.uSea=vv.level,t.uniforms.uWt2=Yn.t,t.vertexShader=`varying vec3 vShoreW;
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
      }`)},s.needsUpdate=!0}var Fl={centers:{value:co.centers.map(s=>new T(s[0],s[1]+$r.offsets[Oe.nodes.tree],s[2]))},radii:{value:co.radii.map(s=>new T(...s))},right:{value:new T(...co.right)},depth:{value:new T(...co.depth)}},Q0=`#include <map_fragment>
  float leafChroma = max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))
                   - min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
  diffuseColor.a *= smoothstep(.026,.050,leafChroma);
  // the atlas alpha is coverage (bleedLeafAtlas); mip levels average
  // it down, so far leaves would fall under the .5 test - scale it by the
  // texel footprint of this pixel (1 at the leaf's own scale, x3 by 32 texels)
  float leafFoot = fwidth(vMapUv.x) * 1254.0;
  diffuseColor.a *= clamp(1.0 + 0.6 * log2(max(leafFoot, 1.0)), 1.0, 3.0);`;function o1(s){if(!s||!s.image||s.userData.bled)return;let e=performance.now(),t=s.image.width,n=s.image.height,i=document.createElement("canvas");i.width=t,i.height=n;let r=i.getContext("2d",{willReadFrequently:!0});r.drawImage(s.image,0,0);let a=r.getImageData(0,0,t,n),o=a.data,c=t*n,l=new Float32Array(c),h=0,u=0,d=0,f=0;for(let x=0;x<c;x++){let b=o[x*4],_=o[x*4+1],R=o[x*4+2],S=(Math.max(b,_,R)-Math.min(b,_,R))/255,C=Math.min(Math.max((S-.05)/.07,0),1),L=C*C*(3-2*C);l[x]=L,L>.95&&(h+=b,u+=_,d+=R,f++)}let m=h/Math.max(f,1),v=u/Math.max(f,1),g=d/Math.max(f,1),p=228;for(let x=0;x<c;x++){let b=l[x],_=x*4;if(b<.5)o[_]=m,o[_+1]=v,o[_+2]=g;else if(b<1)for(let R=0;R<3;R++)o[_+R]=Math.min(255,Math.max(0,(o[_+R]-(1-b)*p)/b));o[_+3]=Math.round(b*255)}r.putImageData(a,0,0),s.image=i,s.needsUpdate=!0,s.userData.bled=!0,console.info(`leaf atlas: ${f} leaf texels of ${c}, backdrop -> (${m|0},${v|0},${g|0}), ${(performance.now()-e).toFixed(0)} ms`)}var hr=Xl,Rn={mask:{value:null},box:{value:new $e(0,0,1,1)}};{let s=L0;Rn.box.value.set(s.x0,s.y0,1/(s.x1-s.x0),1/(s.y1-s.y0)),Rn.mask.value=await new Promise((e,t)=>new ri().load("./tree-crown-mask.png?v="+Oi,n=>{n.minFilter=lt,n.magFilter=lt,n.generateMipmaps=!1,n.wrapS=Ht,n.wrapT=Ht,n.colorSpace=Fn,e(n)},void 0,t))}var Ol=`uniform sampler2D uCrownMask; uniform vec4 uCrownBox; varying float vLightBias;
  vec2 crownSpread(vec2 pxz, vec2 c) {   // c = uTreeC (declared later in these programs)
    vec2 d = pxz - c;
    float leftness = 1.0 - smoothstep(-2.0, 0.5, pxz.x - c.x);   // 1 from 2 m left of the crown axis
    return d * 0.18 + vec2(0.0, d.y * 0.35 * leftness);
  }
`,c1=`attribute float _bare; varying float vBare;
`,l1=`
  {
    vec2 cm = clamp((_sroot.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
    if (_sroot.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.40) transformed = vec3(0.0, -1.0e4, 0.0);
  }
  transformed.xz += crownSpread(position.xz, uTreeC) * smoothstep(uCrownBox.y + 1.0, uCrownBox.y + 4.5, position.y);   // the leaves' spread, ramped in above the trunk`,ev=`
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
  transformed.xz += crownSpread(_leaf_pivot.xz, uTreeC);`,Xt={map:{value:null},matrix:{value:new Pe},size:{value:new j(2048,2048)},on:{value:0}},Wf={value:0},uo={value:1},Jl={value:1};ur&&(Jl.value=.35);var lo={value:1},Gl={c:{value:new T},h:{value:new T(1,1,1)}};function bv(s){let e=null,t=null;if(s.traverse(E=>{if(!E.isMesh)return;let D=E.material?.name||"";D.includes(Oe.substrings.bark)&&oi(E.geometry,"_sroot")?e=E:D.includes(Oe.substrings.leaf)&&oi(E.geometry,"_leaf_pivot")&&(t=E)}),!e||!t||!Rn.mask.value)return;let n=performance.now(),i=Rn.mask.value.image,r=document.createElement("canvas");r.width=i.width,r.height=i.height;let a=r.getContext("2d");a.drawImage(i,0,0);let o=a.getImageData(0,0,i.width,i.height).data,c=Rn.box.value,l=Ct.uCentre.value,h=E=>Math.min(Math.max(E,0),1),u=(E,D)=>{let U=h((E-c.x)*c.z),q=h((D-c.y)*c.w),k=Math.min(i.width-1,Math.floor(U*i.width)),J=Math.min(i.height-1,Math.floor((1-q)*i.height));return o[(J*i.width+k)*4]/255},d=(E,D,U)=>{let q=h((U-E)/(D-E));return q*q*(3-2*q)},f=(E,D)=>{let U=E-l.x,q=D-l.y,k=1-d(-2,.5,E-l.x);return[U*.18,q*.18+q*.35*k]},m=.25,v=2,g=c.x-1,p=c.y-1,x=l.y-8,b=Math.ceil(18/m),_=Math.ceil(20/m),R=Math.ceil(16/m),S=new Uint8Array(b*_*R),C=Uf(t.geometry,"_leaf_pivot"),L=Uf(t.geometry,"_leaf_seed");for(let E=0;E<C.count;E+=3){let D=C.getX(E),U=C.getY(E),q=C.getZ(E),k=f(D,q),J=D+k[0],ee=q+k[1];if(L.getX(E)>.76*d(.1,.35,u(J,U)))continue;let re=Math.floor((J-g)/m),be=Math.floor((U-p)/m),Re=Math.floor((ee-x)/m);for(let G=-v;G<=v;G++)for(let te=-v;te<=v;te++)for(let fe=-v;fe<=v;fe++){if(G*G+te*te+fe*fe>v*v+1)continue;let se=re+G,ye=be+te,Ce=Re+fe;se<0||ye<0||Ce<0||se>=b||ye>=_||Ce>=R||(S[(Ce*_+ye)*b+se]=1)}}let y=e.geometry.attributes.position,w=Uf(e.geometry,"_smeta"),P=y.count,O=new Float32Array(P),N=0;for(let E=0;E<P;E++){if(w.getZ(E)<.5)continue;let D=y.getX(E),U=y.getY(E),q=y.getZ(E);if(U<c.y+4.5)continue;let k=f(D,q),J=D+k[0],ee=q+k[1],re=Math.floor((J-g)/m),be=Math.floor((U-p)/m),Re=Math.floor((ee-x)/m);(!(re>=0&&be>=0&&Re>=0&&re<b&&be<_&&Re<R)||!S[(Re*_+be)*b+re])&&(O[E]=1,N++)}return e.geometry.setAttribute("_bare",new Be(O,1)),console.info(`bare twigs: ${N} of ${P} bark vertices marked in ${(performance.now()-n).toFixed(0)} ms`),N}window.markBareTwigs=bv;window.CROWN=Rn;var Wl={c:{value:new $e(0,0,1,0)},half:{value:new j(0,0)}},h1={value:or.points.slice(0,-1).map((s,e)=>new $e(...s,...or.points[e+1]))},u1=`
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
  const float ISLAND_TOP = ${Yl.toFixed(2)};
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
`,d1=new Set(["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"]),qf={_broot:0,_bmeta:3,_sroot:6,_smeta:9,_leaf_pivot:12,_leaf_axis:15,_leaf_seed:18},oi=(s,e)=>!!(s.attributes[e]||s.attributes[e+"q"]||s.userData.treeRows&&e in qf);function Uf(s,e){let t=s.attributes[e];if(t)return t;let n=s.userData.treeRows;if(n&&e in qf){let o=qf[e],c=n.rows,l=n.ids,h=(u,d)=>c[l.getX(u)*20+o+d];return{count:l.count,getX:u=>h(u,0),getY:u=>h(u,1),getZ:u=>h(u,2)}}let i=s.attributes[e+"q"],r=s.userData.quantGpu&&s.userData.quantGpu[e];if(!i||!r)return null;let a=(o,c)=>r.c[c]+r.h[c]*i.getComponent(o,c);return{count:i.count,getX:o=>a(o,0),getY:o=>a(o,1),getZ:o=>a(o,2)}}var Xf=new Map;function f1(s,e){let t=s.userData.treeTable,n=s.attributes._tree_id;if(!t||!n)return;let i=Xf.get(t);if(!i){let r=e.getObjectByName(t),a=r&&(r.geometry||r.children[0]?.geometry);if(!a){console.warn("tree table missing: "+t);return}let o=v=>{let g=v==="_BROOT"?"position":v.toLowerCase(),p=a.attributes[g]||a.attributes[g+"q"],x=a.userData.quant&&a.userData.quant[v==="_BROOT"?"POSITION":v]||a.userData.quantGpu&&a.userData.quantGpu[g],b=p.isInterleavedBufferAttribute?p.data.array:p.array,_=b instanceof Int16Array;return{count:p.count,n:p.itemSize,get:(R,S)=>_?x.c[S]+x.h[S]*p.getComponent(R,S):p.getComponent(R,S)}},c=["_BROOT","_BMETA","_SROOT","_SMETA","_LEAF_PIVOT","_LEAF_AXIS","_LEAF_SEED"].map(o),l=c[0].count,h=new Float32Array(l*20);for(let v=0;v<l;v++){let g=v*20;for(let p of c)for(let x=0;x<p.n;x++)h[g++]=p.get(v,x)}let u=1024,d=Math.ceil(l*5/u),f=new Float32Array(u*d*4);f.set(h.subarray(0,Math.min(h.length,u*d*4)));let m=new gn(f,u,d,$t,on);m.magFilter=m.minFilter=xt,m.needsUpdate=!0,i={rows:h,tex:m,n:l,uniforms:{uTreeTab:{value:m},uTreeTabW:{value:u}}},Xf.set(t,i),r.visible=!1,r.removeFromParent(),console.info(`tree table ${t}: ${l} records, ${u}x${d} float texels`)}s.userData.treeRows={rows:i.rows,ids:n}}function tv(s){if(s.userData.treeRows)return{__define:"TREE_TAB",...Xf.get(s.userData.treeTable).uniforms};let e=s.userData.quantGpu;if(!e)return null;let t={},n={_broot:"Broot",_bmeta:"Bmeta",_sroot:"Sroot",_smeta:"Smeta",_leaf_pivot:"LeafPivot",_leaf_axis:"LeafAxis",_leaf_seed:"LeafSeed"};for(let[i,r]of Object.entries(n)){let a=e[i];a&&(t["u"+r+"C"]={value:a.c.length===1?a.c[0]:new T(...a.c)},t["u"+r+"H"]={value:a.h.length===1?a.h[0]:new T(...a.h)})}return{__define:"TREE_Q",...t}}function lr(s,e,t=!1,n=[1,1,1],i=!1,r=!1,a=!1,o=null){let[c,l,h]=n.map(u=>u.toFixed(4));e==="tree"&&o&&(s.defines=Object.assign(s.defines||{},{[o.__define]:""})),s.onBeforeCompile=u=>{if(u.uniforms.uWt=Yn.t,e==="tree"&&o)for(let[d,f]of Object.entries(o))d!=="__define"&&(u.uniforms[d]=f);u.uniforms.uMirror=Wf,u.uniforms.uLod=uo,u.uniforms.uMirrorKeep=Jl,u.uniforms.uStepC=Wl.c,u.uniforms.uStepHalf=Wl.half,e!=="blade"&&(u.vertexShader=u.vertexShader.replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1")),e==="tree"&&t&&(u.vertexShader=M0+u.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
 objectNormal=leafMotion()*objectNormal;`)),e==="tree"&&(u.vertexShader=v0+u.vertexShader.replace("#include <defaultnormal_vertex>",`objectNormal=trunkRotation(treeAnchor(${t?"_leaf_pivot":"position"}).y)*branchRotation(_bmeta,.55)*branchRotation(_smeta,.85)*objectNormal;
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
`+u.vertexShader,u.uniforms.uGrow=lo,u.uniforms.uRootC=Gl.c,u.uniforms.uRootH=Gl.h,u.vertexShader=u.vertexShader.replace("attribute float _height;",`attribute vec4 _height4;
#define _height (_height4.x)`)):e==="blade"&&r&&(u.vertexShader=`#define HAS_ROOT
attribute vec2 _root;
`+u.vertexShader),u.uniforms.uGrassLean=hi.uLean,u.uniforms.uGrassFlut=hi.uFlut,u.uniforms.uGrassTex=hi.uTex,u.uniforms.uGrassMin=hi.uMin,u.uniforms.uGrassSize=hi.uSize,u.uniforms.uTrunk=Ct.uTrunk,u.uniforms.uBranch=Ct.uBranch,u.uniforms.uTreeBase=Ct.uBase,u.uniforms.uTreeH=Ct.uHeight,u.uniforms.uFlutter=Ct.uFlutter,u.uniforms.uTreeC=Ct.uCentre,u.uniforms.uTreeW=Ct.uWidth,u.uniforms.uShMatrix=Xt.matrix,u.uniforms.uShMap=Xt.map,u.uniforms.uShSize=Xt.size,u.uniforms.uShOn=Xt.on,e!=="tree"&&(u.uniforms.uRearEntry=h1,u.uniforms.uRearEntryBounds={value:new $e(Math.min(...or.points.map(d=>d[0]))-.6,Math.min(...or.points.map(d=>d[1]))-.6,Math.max(...or.points.map(d=>d[0]))+.6,Math.max(...or.points.map(d=>d[1]))+.6)},u.vertexShader=`uniform vec4 uRearEntry[8];
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
        #include <alphatest_fragment>`),u.fragmentShader=Ni+u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 ${e==="blade"?`diffuseColor.rgb=sceneMeadowPigment(diffuseColor.rgb,vEntryRest);
         // root-to-tip value gradient, so a blade reads as a blade at
         // 1-2 m instead of a flat shard. Mean 1.0 over the blade, so the
         // sub-pixel average at the hero distance is unchanged.
         diffuseColor.rgb*=mix(.84,1.16,clamp(vBladeH,0.,1.));`:""} diffuseColor.rgb *= sceneTurfLight(meadowShadow());`)),u.vertexShader=u1+u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      {
        #ifdef ROOT_REL
        transformed *= uGrow * uGrow * (3.0 - 2.0 * uGrow);   // the meadow grows in after the door opens
        transformed += _root3 / vec3(${c}, ${l}, ${h});   // root-relative position -> the blade's place (local units)
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
                 transformed.y -= 0.6 * dot(dspW,dspW) / ${l};
                 vec2 dsp = dspW / vec2(${c}, ${h});`:`// height above the ground in blade lengths, baked by the
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
                 transformed.y-=hf*.72*.78*compressed/${l};
                 hf*=1.-.78*compressed;
                 // Shorten only the ring beside the cottage foundation, retaining rooted motion.
                 vec2 homeDelta=wpos.xz-vec2(-1.75014,-4.38657);
                 vec2 homeLocal=vec2(dot(homeDelta,vec2(.6436,-.7654)),dot(homeDelta,vec2(-.7654,-.6436)));
                 vec2 outside=max(abs(homeLocal)-vec2(6.45,4.26),vec2(0.));
                 float foundation=1.-smoothstep(.25,2.4,length(outside));
                 transformed.y-=hf*.72*.43*foundation/${l};
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
                 transformed.x += fromRoot.x / ${c};
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
                 transformed.y -= (hgt - sqrt(max(hgt * hgt - dot(dspW, dspW), 0.0))) / ${l};
                 vec2 dsp = dspW / vec2(${c}, ${h});`}
             transformed.x += dsp.x;
             transformed.z += dsp.y;`}
        vShCoord = uShMatrix * vec4((modelMatrix * vec4(transformed, 1.0)).xyz, 1.0);
      }`)},s.needsUpdate=!0}pt.heroCone=20;pt.heroNear=.45;pt.heroForce=-1;pt.debugHero=!1;var zl={objs:[],logT:0},xv=ze.map_fragment.replace("texture2D( map, vMapUv )","mix( texture2D( uFlat, vMapUv ), texture2D( map, vMapUv ), uHero )");xv===ze.map_fragment&&console.warn("hero blend: map_fragment sample line not found - painting blend inactive");var _v=ze.emissivemap_fragment.replace("texture2D( emissiveMap, vEmissiveMapUv )","mix( texture2D( uFlat, vEmissiveMapUv ), texture2D( emissiveMap, vEmissiveMapUv ), uHero )");_v===ze.emissivemap_fragment&&console.warn("hero blend: emissivemap_fragment sample line not found - live-sun mode keeps the painting");function p1(s,e){let t=s.material,n=t.map;s.userData.heroBlend={uFlat:{value:n},uHero:{value:1},centre:new ft().setFromObject(s).getCenter(new T)},new ri().load("./tex_"+e+"_flat.jpg?v="+Oi,r=>{r.flipY=!1,r.colorSpace=mt,r.wrapS=n.wrapS,r.wrapT=n.wrapT,r.minFilter=n.minFilter,r.magFilter=n.magFilter,r.anisotropy=n.anisotropy,r.generateMipmaps=n.generateMipmaps,r.needsUpdate=!0,s.userData.heroBlend.uFlat.value=r},void 0,()=>console.warn("hero blend: no tex_"+e+"_flat.jpg - one texture, blend inactive for",e,"(expected for the house after the PROJECT_HOUSE=0 export; for the tree run scripts/export_web.sh)"));let i=t.onBeforeCompile;t.onBeforeCompile=r=>{i&&i(r),r.uniforms.uFlat=s.userData.heroBlend.uFlat,r.uniforms.uHero=s.userData.heroBlend.uHero,r.fragmentShader=`uniform sampler2D uFlat;
uniform float uHero;
`+r.fragmentShader.replace("#include <map_fragment>",xv).replace("#include <emissivemap_fragment>",_v)},t.customProgramCacheKey=()=>"heroblend-"+s.name,t.needsUpdate=!0,zl.objs.push(s)}var kf=new T,Bf=new T;function m1(s){let e=pt.heroCone,t=.35*e,n=pt.heroNear,i=.5*n,r=pt.debugHero&&s-zl.logT>=1e3;r&&(zl.logT=s);for(let a of zl.objs){let o=a.userData.heroBlend;if(pt.heroForce>=0)o.uHero.value=pt.heroForce;else{kf.subVectors(Ze.position,o.centre),Bf.subVectors(jl,o.centre);let c=rn.radToDeg(kf.angleTo(Bf)),l=kf.length(),h=Bf.length();o.uHero.value=(1-rn.smoothstep(c,t,e))*rn.smoothstep(l,i*h,n*h)}r&&console.log("hero",a.name,"uHero",o.uHero.value.toFixed(3))}}function g1(s,e,t){let n=s.geometry,i=n.attributes._height,r=n.attributes.position;if(i&&!n.userData.bladeRestBaked){let o=s.matrixWorld.elements,c=r.count,l=[];for(let v=0;v<8;v++){let g=e[v],p=e[v+1];l.push(g&&p?[g[0],g[1],p[0],p[1]]:[0,0,0,0])}let h=(v,g,p)=>{let x=Math.min(Math.max((p-v)/(g-v),0),1);return x*x*(3-2*x)},u=1/t.y,d=performance.now(),f=r.array,m=i.array;for(let v=0;v<c;v++){let g=f[v*3],p=f[v*3+1],x=f[v*3+2],b=o[0]*g+o[4]*p+o[8]*x+o[12],_=o[2]*g+o[6]*p+o[10]*x+o[14],R=Math.min(Math.max(m[v],0),1),S=1e3;for(let[U,q,k,J]of l){let ee=k-U,re=J-q,be=Math.min(Math.max(((b-U)*ee+(_-q)*re)/Math.max(ee*ee+re*re,1e-5),0),1),Re=b-(U+be*ee),G=_-(q+be*re);S=Math.min(S,Math.hypot(Re,G))}let C=1-h(.3,1.05,S),L=R*.72*.78*C;R*=1-.78*C;let y=b+1.75014,w=_+4.38657,P=y*.6436-w*.7654,O=-y*.7654-w*.6436,N=Math.max(Math.abs(P)-6.45,0),E=Math.max(Math.abs(O)-4.26,0),D=1-h(.25,2.4,Math.hypot(N,E));L+=R*.72*.43*D,R*=1-.43*D,f[v*3+1]=p-L*u,m[v]=R}r.needsUpdate=!0,i.needsUpdate=!0,n.userData.bladeRestBaked=!0,console.info(`blades: rest-pose corridor + foundation baked into ${c} verts in ${(performance.now()-d).toFixed(0)} ms`)}for(let o of["normal","uv","_flower_flex"])n.attributes[o]&&n.deleteAttribute(o);let a=n.attributes.color;if(a&&a.array instanceof Float32Array){let o=new Uint8Array(a.count*a.itemSize);for(let c=0;c<o.length;c++)o[c]=Math.round(Math.min(Math.max(a.array[c],0),1)*255);n.setAttribute("color",new Be(o,a.itemSize,!0))}}function v1(s){let e=s.geometry.userData.bladeChunks,t=s.geometry.index;if(!e||e.length<2||!t)return[s];let n=s.geometry,i=n.attributes.position,r=t.array,a=new T,o=e.map(l=>{let h=new He;for(let[d,f]of Object.entries(n.attributes))h.setAttribute(d,f);h.setIndex(new Be(r.subarray(l.start,l.start+l.count),1));let u=new ft;if(n.userData.meadowRepack&&l.min&&l.max)u.min.set(...l.min).divide(s.scale),u.max.set(...l.max).divide(s.scale);else for(let d=l.start;d<l.start+l.count;d++)u.expandByPoint(a.fromBufferAttribute(i,r[d]));return h.boundingBox=u,h.boundingSphere=u.getBoundingSphere(new wt),h.userData=n.userData,h});s.geometry=o[0],n.setIndex(null);for(let l of Object.keys(n.attributes))n.deleteAttribute(l);let c=[s];for(let l=1;l<o.length;l++){let h=new rt(o[l],s.material);h.name=s.name+"_c"+l,h.userData=s.userData,h.castShadow=s.castShadow,h.receiveShadow=s.receiveShadow,s.parent.add(h),h.position.copy(s.position),h.quaternion.copy(s.quaternion),h.scale.copy(s.scale),Bl.push(h),c.push(h)}return console.info(`blades: split into ${o.length} frustum-culled chunks`),c}function nv(s){let e=performance.now(),t=Al(s);return Cn&&(it.bake=it.bake||[]).push([s.name,Math.round(performance.now()-e)]),t}U0(vt);ao.useWorkers(Math.min(4,Math.max(2,(navigator.hardwareConcurrency||4)-1)));var yv=new MessageChannel,jf=null;yv.port1.onmessage=()=>{let s=jf;jf=null,s&&s()};var b1=()=>new Promise(s=>{jf=s,yv.port2.postMessage(0)}),ql=0,zf=async s=>{let e=performance.now();e-ql<80||(ql=e,s&&Tn(s),await b1())},it={t0:performance.now()};if(Cn){let s=(e,t,n)=>{let i=e[t];i&&(e[t]=function(...r){let a=performance.now();it[n+"First"]||(it[n+"First"]=a),it[n+"N"]=(it[n+"N"]||0)+1;let o=i.apply(this,r);return o&&o.then?o.then(c=>(it[n+"Last"]=performance.now(),c)):o})};s(ao,"decodeGltfBufferAsync","meshopt"),s(window,"createImageBitmap","bitmap")}var iv=new Ml().setMeshoptDecoder(ao),wv=J0?await J0:null,Hl;try{Hl=await Nf({url:YS,abs:cv,blob:wv},(s,e)=>{document.getElementById("loading").textContent=`pouring the watercolours\u2026 ${Math.round(100*s/e)}%`,Tn({type:"progress",loaded:s,total:e})})}catch(s){console.error("island_world.glb failed to load",s),Js("The island could not load."),Tn({type:"error",message:"The island could not load."})}Tn({type:"stage",stage:"decoding"});it.fetched=performance.now();Hl&&iv.parse(Hl,"./",async s=>{Hl=null,wv=null,it.parsed=performance.now(),await jS;let e=s.scene;s=null,w0(e,ai,$r);let t=c=>{let l=c;for(;l.parent;)l=l.parent;return l},n=async c=>{if(!c.isMesh)return;let l=c.geometry.userData&&c.geometry.userData.quant;if(l&&!c.geometry.userData.dequantized){c.geometry.userData.dequantized=!0;let P=performance.now();for(let[N,E]of Object.entries(l)){let D=performance.now(),U=N==="POSITION"?"position":N==="TEXCOORD_0"?"uv":N.startsWith("TEXCOORD_")?"uv"+N.slice(9):N.toLowerCase(),q=c.geometry.attributes[U];if(!q)continue;let k=q.isInterleavedBufferAttribute?q.data.array:q.array;if(!(k instanceof Int16Array))continue;if(d1.has(N)){c.geometry.setAttribute(U+"q",q),c.geometry.deleteAttribute(U),(c.geometry.userData.quantGpu=c.geometry.userData.quantGpu||{})[U]={c:E.c.slice(),h:E.h.slice()};continue}let J=q.itemSize,ee=q.count,re=new Float32Array(ee*J),be=q.isInterleavedBufferAttribute?q.data.stride:J,Re=q.isInterleavedBufferAttribute?q.offset:0,G=E.c,te=E.h.map(fe=>fe/32767);for(let fe=0,se=Re;fe<ee;fe++,se+=be)for(let ye=0;ye<J;ye++){let Ce=k[se+ye];re[fe*J+ye]=G[ye]+te[ye]*(Ce<-32767?-32767:Ce)}c.geometry.setAttribute(U,new Be(re,J)),Cn&&(it.dequantDetail=it.dequantDetail||[]).push([c.name,N,+(performance.now()-D).toFixed(1),q.isInterleavedBufferAttribute?"IL":"BA"])}let O=performance.now();c.geometry.boundingBox=null,c.geometry.boundingSphere=null,c.geometry.computeBoundingSphere(),Cn&&(it.dequant=it.dequant||[]).push([c.name,Math.round(performance.now()-P),"sphere",Math.round(performance.now()-O)])}if(c.geometry.attributes._tree_id&&f1(c.geometry,t(c)),c.name.startsWith(Oe.prefixes.treeTable)){c.visible=!1;return}if(c.name.includes(Oe.substrings.clothes)){let P=c.geometry.attributes.normal;if(P&&!(P.array instanceof Float32Array)){let O=new Float32Array(P.count*3);for(let N=0;N<P.count;N++)for(let E=0;E<3;E++)O[N*3+E]=P.getComponent(N,E);c.geometry.setAttribute("normal",new Be(O,3))}}c.name.includes(Oe.substrings.bench)&&(c.position.set(26.8,c.position.y,-2.3),c.updateWorldMatrix(!0,!1));let h=c.material,u=h&&(h.emissiveMap||h.map)||null;u&&(u.colorSpace=mt,c.userData.uniformPlaster=!!h?.name?.startsWith(Oe.prefixes.housePlaster),h?.name?.startsWith(Oe.prefixes.housePart)&&(u.anisotropy=Math.min(8,vt.capabilities.getMaxAnisotropy()))),c.geometry.attributes.color_1&&(c.geometry.setAttribute("color",c.geometry.attributes.color_1),c.geometry.deleteAttribute("color_1"));let d=!!c.geometry.attributes.color,f=!!h?.name?.startsWith(Oe.prefixes.path);f&&u&&(u.anisotropy=Math.min(8,vt.capabilities.getMaxAnisotropy()));let m=!!h?.name?.includes(Oe.substrings.bark),v=!!h?.name?.includes(Oe.substrings.leaf),g=!!h?.name?.endsWith(Oe.substrings.oil)&&(m||v),p=v,x=!p&&h&&h.name&&h.name.includes(Oe.substrings.petal);if(c.name===Oe.nodes.water){let P=new oo(new zs(2620,72),{clipBias:0,textureWidth:ur?512:1024,textureHeight:ur?512:1024,color:16777215});{let N=vt.getContext();!N.getExtension("EXT_color_buffer_float")&&!N.getExtension("EXT_color_buffer_half_float")&&(P.getRenderTarget().texture.type=Bn)}P.rotation.x=-Math.PI/2,P.position.set(14.5,.02,0);let O=P.material;O.uniforms.uTime=Yn.t,Object.assign(O.uniforms,{uShMatrix:Xt.matrix,uShMap:Xt.map,uShSize:Xt.size,uShOn:Xt.on}),O.uniforms.uBoatPointCount={value:0},O.uniforms.uBoatPoints={value:Array.from({length:32},()=>new j)},O.uniforms.uBoatCenter={value:new j},av.then(N=>{N.polygon.forEach((E,D)=>O.uniforms.uBoatPoints.value[D].set(...E)),O.uniforms.uBoatCenter.value.set(...N.center),O.uniforms.uBoatPointCount.value=N.polygon.length}).catch(N=>console.error(N)),O.uniforms.uCamF={value:new j(0,-1)},O.uniforms.uVfov={value:rn.degToRad(Ze.fov)},O.uniforms.uCamPitch={value:0},P.updateMatrixWorld(!0),O.uniforms.uSeaWorldInverse={value:P.matrixWorld.clone().invert()},O.polygonOffset=!0,O.polygonOffsetFactor=1,O.polygonOffsetUnits=4,O.vertexShader=`
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
        }`,O.fragmentShader=`
        ${Ni}
        ${m0}
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
          float n3 = vnoise(vec2(across*0.90, depth*1.60) + vec2(uTime*0.90, uTime*0.25));
          float v1 = VIS(4.5, depthPx), v2 = VIS(1.1, depthPx), v3 = VIS(0.6, depthPx);
          // MOVING WAVES ('the water waves should move as well'): two
          // wind-driven ripple octaves travelling downwind - they shimmer
          // the reflection and lift/darken the surface, strongest near
          // the island, melting toward the horizon
          // the slow octave runs along the wind too (8 m x 2.5 m
          // patches) - as round 3.3 m cells it read as pale discs near the eye
          float r1 = vnoise(vec2(across * 0.12, depth * 0.40) + vec2(uTime * 0.30, 0.0));
          float r2 = vnoise(vWorld.xz * 1.10 - wd * uTime * 0.70 + 7.0);
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
          float band2 = vnoise(vec2(across*0.04, depth*f2) + 5.3);
          float paws = smoothstep(0.35, 0.65, band2) * VIS(0.9, depthPx);   // (patch is reserved in GLSL)
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
          float mottle = (vnoise(vWorld.xz*2.1 + 11.0) - 0.5) * (1.0 - smoothstep(80.0, 250.0, d));
          col *= 1.0 + mottle*0.04;
          // melt into the band's far-shore base at the horizon
          col = mix(col, vec3(0.600,0.570,0.540), smoothstep(1400.0, 2500.0, d));   // warm pale horizon under the shore strip
          col*=mix(.96,1.,meadowShadow());
          gl_FragColor = vec4(srgb2lin(col), 1.0);   // composed in sRGB, handed over linear
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`;{let N=P.onBeforeRender;P.onBeforeRender=function(...E){Wf.value=1,Ll(Ze,Jl.value,uo.value>=.5,li.lodRangeOff);try{N.apply(this,E)}finally{Wf.value=0,Ll(Ze,1,uo.value>=.5,li.lodRangeOff)}}}pt.add(P),jn=P,c.visible=!1;return}let b=new It({map:u,vertexColors:p||m||f?d:d&&!u,side:zt,fog:!0});b.name=h?.name||"",h?.name===Oe.materials.housePaintRetint&&b.color.setRGB(.86,.82,.76),(h?.name===Oe.materials.boat||h?.name===Oe.materials.rope)&&F0(b,c,h.name===Oe.materials.rope),!u&&!d&&h&&b.color.copy(h.emissive&&h.emissive.getHex()?h.emissive:h.color),h?.name===Oe.materials.path0&&(b.transparent=!0,b.depthWrite=!1,b.forceSinglePass=!0),x&&(b.alphaTest=.5,b.transparent=!0),p&&(b.alphaTest=.5,b.transparent=!1,d||console.warn("tree cards: no COLOR_0 in the GLB - the per-card tint is missing (re-run scripts/export_web.sh)"),u||console.warn("tree cards: no atlas texture in the GLB")),h?.name?.startsWith(Oe.prefixes.houseWindow)&&(b.onBeforeCompile=P=>{P.uniforms.uWindowSky=lv,P.uniforms.uVisibleSun=Xl,P.uniforms.uVisibleSunOn=Kf;let O=Cl.materials[h.name]||{reflection:1,blur:1};P.uniforms.uGlazing={value:new j(O.reflection,O.blur)},P.uniforms.uRoomPaint=Yf,P.uniforms.uRoomSettings={value:new j(O.interior||0,O.roomVariation||0)},P.uniforms.uBlindOpening={value:O.blindOpening||0},P.uniforms.uFrontDaylight={value:O.frontDaylight||0},P.uniforms.uRoomSun=hr,P.uniforms.uFrontGlazing={value:O.frontGlazing||0},P.uniforms.uSideCurtains={value:O.sideCurtains||0},P.uniforms.uGlazingLift={value:O.lift||0},P.vertexShader=`varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
`+P.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
          vGlassWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          vGlassNormal = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix);
          vGlassUv = uv;`),P.fragmentShader=Af+`uniform sampler2D uWindowSky,uRoomPaint; uniform vec2 uGlazing,uRoomSettings; uniform float uBlindOpening,uFrontDaylight,uFrontGlazing,uSideCurtains,uGlazingLift; uniform vec3 uRoomSun; varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;
`+P.fragmentShader.replace("#include <opaque_fragment>",`
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
          #include <opaque_fragment>`)},b.customProgramCacheKey=()=>"painted-window-glass-v221"),c.userData.uniformPlaster&&C0(b,ai,Cf,hr,Xt,Ni,Zr);let _=!!h?.name?.startsWith(Oe.prefixes.houseChimney),R=!!h?.name?.startsWith(Oe.prefixes.houseFlashing);(_||R)&&A0(b,ai,hr,Xt,Ni,Zr,R);let S=c.name.includes(Oe.substrings.bench);S&&S0(b,hr,Xt,Ni,Zr);let C=!!h?.name?.startsWith(Oe.prefixes.houseGarden);if((C||f)&&E0(b,hr,Xt,Ni,Zr,f),h?.name?.startsWith(Oe.materials.houseSillFlowers)){c.updateWorldMatrix(!0,!1);let P=new Ve().setFromMatrix4(c.matrixWorld).invert();Rf(b,hi,Yn.t,P);let O=new ti({depthPacking:Kr,side:zt});Rf(O,hi,Yn.t,P),c.customDepthMaterial=O,c.frustumCulled=!1}if(c.material=b,c.userData.basic=b,c.userData.oilTree=g,c.userData.keepPainted=C||S||_||R||c.userData.uniformPlaster||f||d&&!u||x||!g&&(m||v),Bl.push(c),R0(c.name,h?.name)?(c.castShadow=!0,c.receiveShadow=!0,c.name.includes(Oe.substrings.house)?$0(c,ci.pad):(c.name.includes(Oe.substrings.bench)||c.name.includes(Oe.substrings.clothes))&&$0(c,.8)):c.receiveShadow=!0,g&&v&&(c.receiveShadow=!0),c.name===Oe.nodes.meadow||c.parent?.name===Oe.nodes.meadow){let P=t(c).getObjectByName(Oe.nodes.meadowTable),O=P&&(P.geometry||P.children[0]?.geometry);if(!O){console.warn("meadow repack: no WEB_meadow_table");return}let N=c.geometry,E=N.userData||{};Tn({type:"stage",stage:"expanding"});let D=E.patterns||[],U={root:O.attributes.position,col:O.attributes.color||null,ph:O.attributes._phase,cnt:O.attributes._count,pat:O.attributes._pattern},q=!!N.attributes.color,k=U.root.count,J=N.attributes.position.count,ee=performance.now();P.updateWorldMatrix(!0,!1);let re=(P.geometry?P:P.children[0]).matrixWorld,be=new T,Re=new Int16Array(J*4),G=q?null:new Uint8Array(J*3),te=new Uint16Array(J),fe=D.map(V=>V.length/3),se=ur&&!ui.has("fullmeadow"),ye=0,Ce=0,B=new Uint32Array(k+1),ke=new Uint32Array(k+1),Q=new Uint16Array(k),ae=new Float32Array(k*3);for(let V=0;V<k;V++){(V&16383)===0&&V&&await zf({type:"stage",stage:"expanding",frac:.6*V/k});let $=Math.round(U.root.getX(V)*32767),me=Math.round(U.root.getY(V)*32767),ue=Math.round(U.root.getZ(V)*32767);be.set($,me,ue).divideScalar(32767).applyMatrix4(re),ae[V*3]=be.x,ae[V*3+1]=be.y,ae[V*3+2]=be.z;let oe=U.cnt.getX(V),Ie=Math.round(U.ph.getX(V)*65535);if(B[V]=ye,Q[V]=Ie,ke[V]=Ce,Ce+=oe,!(se&&Ie>=32768)){for(let he=0;he<oe;he++){let ve=(ye+he)*4;Re[ve]=$,Re[ve+1]=me,Re[ve+2]=ue,te[ye+he]=Ie}if(G){let he=Math.round(U.col.getX(V)*255),ve=Math.round(U.col.getY(V)*255),Ee=Math.round(U.col.getZ(V)*255);for(let Me=0;Me<oe;Me++)G[(ye+Me)*3]=he,G[(ye+Me)*3+1]=ve,G[(ye+Me)*3+2]=Ee}ye+=oe}}B[k]=ye,ke[k]=Ce,Ce!==J&&console.warn("meadow repack: vertex count mismatch",Ce,J);let ie=V=>B[V+1]>B[V];{let V=new T,$=new dt,me=new T;re.decompose(V,$,me),Math.abs($.w)<.9999&&console.warn("meadow repack: the table node is rotated; roots will be off"),Gl.c.value.copy(V),Gl.h.value.copy(me)}N.attributes._height&&!N.attributes._height4&&(N.setAttribute("_height4",N.attributes._height),N.deleteAttribute("_height"));let de={},le=V=>{let $=V.isInterleavedBufferAttribute?V.data.array:V.array,me=V.itemSize,ue=V.isInterleavedBufferAttribute?V.data.stride:me,oe=V.isInterleavedBufferAttribute?V.offset:0,Ie=new $.constructor(ye*me);for(let he=0;he<k;he++){let ve=B[he+1]-B[he];if(!ve)continue;let Ee=B[he]*me,Me=ke[he]*ue+oe;for(let xe=0;xe<ve;xe++,Ee+=me,Me+=ue)for(let Fe=0;Fe<me;Fe++)Ie[Ee+Fe]=$[Me+Fe]}return new Be(Ie,me,V.normalized)};for(let[V,$]of Object.entries(N.attributes))de[V]=se?le($):$;se&&await zf(),de._root3q=new xn(new zn(se?Re.subarray(0,ye*4):Re,4),3,0,!0),de._phase=new Be(se?te.subarray(0,ye):te,1,!0),G&&(de.color=new Be(se?G.subarray(0,ye*3):G,3,!0));let Se=(V,$,me)=>V.isInterleavedBufferAttribute?new xn(V.data,V.itemSize,V.offset+$*V.data.stride,V.normalized):new Be(V.array.subarray($*V.itemSize,me*V.itemSize),V.itemSize,V.normalized),Le=O.userData||{},F=Le.bladeChunks&&Le.bladeChunks.length?Le.bladeChunks:[{bladeStart:0,bladeCount:k}],A=[];for(let V=0;V<F.length;V++){let $=F[V],me=$.bladeStart+$.bladeCount,ue=[-1e9,-1e9,-1e9],oe=[1e9,1e9,1e9];for(let Ee=$.bladeStart;Ee<me;Ee++)for(let Me=0;Me<3;Me++){let xe=ae[Ee*3+Me];xe>ue[Me]&&(ue[Me]=xe),xe<oe[Me]&&(oe[Me]=xe)}let Ie=$.max?[0,1,2].map(Ee=>Math.max($.max[Ee]-ue[Ee],oe[Ee]-$.min[Ee],0)):[1,1,1],he=Math.ceil($.bladeCount/4),ve=$.bladeStart;for(;ve<me;){let Ee=ve,Me=0;for(;Ee<me&&Ee-ve<he;){let Ae=B[Ee+1]-B[Ee];if(Me+Ae>65535)break;Me+=Ae,Ee++}Ee===ve&&(Ee=ve+1);let xe=Ee-ve,Fe=new Float64Array(xe);for(let Ae=0;Ae<xe;Ae++)Fe[Ae]=Q[ve+Ae]*1048576+Ae;Fe.sort();let Ke=0;for(let Ae=ve;Ae<Ee;Ae++)ie(Ae)&&(Ke+=fe[U.pat.getX(Ae)]||0);let at=new Uint16Array(Ke*3),Ge=new Float32Array(xe),M=new Uint32Array(xe),z=B[ve],X=B[Ee],ce=0;for(let Ae=0;Ae<xe;Ae++){let et=ve+Fe[Ae]%1048576,ht=Q[et];if(ie(et)){let tt=D[U.pat.getX(et)],St=B[et]-z;for(let ut=0;ut<tt.length;ut++)at[ce++]=St+tt[ut]}Ge[Ae]=ht===65535?0:Math.fround(ht/65535),M[Ae]=ce}let pe=[0,1,2].map(Ae=>{let et=1e9;for(let ht=ve;ht<Ee;ht++)et=Math.min(et,ae[ht*3+Ae]);return et-Ie[Ae]}),We=[0,1,2].map(Ae=>{let et=-1e9;for(let ht=ve;ht<Ee;ht++)et=Math.max(et,ae[ht*3+Ae]);return et+Ie[Ae]});A.push({vA:z,vB:X,index:at,min:pe,max:We,lodR1:Ge,lodEnd:M}),ve=Ee}await zf({type:"stage",stage:"expanding",frac:.6+.4*(V+1)/F.length})}P.removeFromParent(),O.dispose(),it.meadow=performance.now(),console.info(`meadow repack: ${k} blades, ${se?ye+" of "+J+" verts (phone: half the blades)":J+" verts"}, ${D.length} patterns, ${A.length} sub-chunks (uint16) expanded in ${(performance.now()-ee).toFixed(0)} ms`),c.updateWorldMatrix(!0,!1);let W=new T;c.matrixWorld.decompose(new T,new dt,W),b.vertexColors=!0,b.needsUpdate=!0,lr(b,"blade",!0,W.toArray(),!0,!0,!0);let ne=[];A.forEach((V,$)=>{let me=new He;for(let[Ie,he]of Object.entries(de))me.setAttribute(Ie,Se(he,V.vA,V.vB));me.setIndex(new Be(V.index,1));let ue=new ft;ue.min.set(...V.min).divide(c.scale),ue.max.set(...V.max).divide(c.scale),me.boundingBox=ue,me.boundingSphere=ue.getBoundingSphere(new wt),me.userData=N.userData;let oe;$===0?(oe=c,c.geometry=me):(oe=new rt(me,c.material),oe.name=c.name+"_c"+$,oe.userData=c.userData,oe.castShadow=c.castShadow,oe.receiveShadow=c.receiveShadow,c.parent.add(oe),oe.position.copy(c.position),oe.quaternion.copy(c.quaternion),oe.scale.copy(c.scale),Bl.push(oe)),ne.push(oe),Pl.push({mesh:oe,c:V})}),N.dispose(),console.info(`blades: ${ne.length} frustum-culled sub-chunks`),c.userData.keepPainted=!0,c.userData.shadowRole={material:h?.name,cast:!1,receive:!0,response:"meadow"};return}if(c.name===Oe.nodes.meadowTable||c.parent?.name===Oe.nodes.meadowTable){c.visible=!1;return}let L=(h?.name||"").startsWith(Oe.prefixes.housePart);if(d&&!u&&!f&&!C&&!L){c.updateWorldMatrix(!0,!1);let P=new T;c.matrixWorld.decompose(new T,new dt,P),g1(c,or.points,P),lr(b,"blade",!!c.geometry.attributes._height,P.toArray(),!!c.geometry.attributes._phase,!!c.geometry.attributes._root),c.geometry.attributes._root||console.warn("meadow: no _root attribute - blade LOD inactive (run scripts/optimize_glb.sh)"),v1(c),c.geometry.attributes._phase||console.warn("meadow: no _phase attribute in the GLB - blades fall back to a patch-scale pseudo-random (re-export for per-blade wind)")}else if(x){c.updateWorldMatrix(!0,!1);let P=new T;c.matrixWorld.decompose(new T,new dt,P),lr(b,"petal",!!c.geometry.attributes._flower_flex,P.toArray(),!1,!!c.geometry.attributes._flower_root);let O=new ti({depthPacking:Kr,map:u,alphaTest:.5,side:zt});lr(O,"petal",!!c.geometry.attributes._flower_flex,P.toArray(),!1,!!c.geometry.attributes._flower_root),O.customProgramCacheKey=()=>"petal-depth-v172",c.customDepthMaterial=O,c.castShadow=!0}else if(c.parent&&c.parent.name===Oe.nodes.island&&u&&!x&&!f)a1(b),ci.grid||setTimeout(()=>{ci.grid||e1(c)},1500);else if(c.name===Oe.nodes.tree||m){let P=nv(c);Ct.init(P);{let E=c.geometry.attributes.position,D=P.min.y+.04*(P.max.y-P.min.y),U=0,q=0,k=0;for(let J=0;J<E.count;J++)E.getY(J)<=D&&(U+=E.getX(J),q+=E.getZ(J),k++);ci.trunk={x:k?U/k:Ct.cx,z:k?q/k:Ct.cz,r:2.2,top:Ct.base+.55*Ct.height},console.log(`tree: root (${ci.trunk.x.toFixed(2)}, ${ci.trunk.z.toFixed(2)}) from ${k} verts, crown centre (${Ct.cx.toFixed(2)}, ${Ct.cz.toFixed(2)}), ${Ct.height.toFixed(1)} m tall`)}let O=tv(c.geometry);lr(b,"tree",!1,[1,1,1],!1,!1,!1,O);let N=new ti({depthPacking:Kr,side:zt});if(lr(N,"tree",!1,[1,1,1],!1,!1,!1,O),N.customProgramCacheKey=()=>"wood-depth-v166",m&&oi(c.geometry,"_sroot")){let E=(D,U)=>{let q=D.onBeforeCompile;D.onBeforeCompile=k=>{q&&q(k),k.uniforms.uCrownMask=Rn.mask,k.uniforms.uCrownBox=Rn.box,k.vertexShader=Ol+c1+`varying vec3 vBarkWorld;
`+k.vertexShader.replace("#include <project_vertex>",l1+`
 vBare = _bare; vBarkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;
#include <project_vertex>`),U&&(k.fragmentShader=Ol+`varying float vBare; varying vec3 vBarkWorld;
`+k.fragmentShader.replace("#include <map_fragment>",`
              { vec2 cm = clamp((vBarkWorld.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
                if (vBarkWorld.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.45) discard;
                if (vBare > 0.5) discard; }
              #include <map_fragment>`))}};E(b,!0),E(N,!1),N.customProgramCacheKey=()=>"wood-depth-v224"}c.customDepthMaterial=N}else if(p){let P=nv(c);Ct.init(P);let O=tv(c.geometry);lr(b,"tree",oi(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,O),g&&v&&o1(u);let N=b.onBeforeCompile;if(b.onBeforeCompile=E=>{if(N&&N(E),g){E.uniforms.uOilSun=hr,E.uniforms.uOilLive=Zr,E.uniforms.uCanopyC=Fl.centers,E.uniforms.uCanopyR=Fl.radii,E.uniforms.uCanopyRight=Fl.right,E.uniforms.uCanopyDepth=Fl.depth;let D=`uniform vec3 uCanopyC[6]; uniform vec3 uCanopyR[6];
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
            `,U=`uniform vec3 uOilSun; uniform float uOilLive;
`+D,q=oi(c.geometry,"_leaf_pivot")?ev:"";q&&(E.uniforms.uCrownMask=Rn.mask,E.uniforms.uCrownBox=Rn.box);let k=oi(c.geometry,"_leaf_seed");E.vertexShader=U+(q?Ol:"")+`varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed;
`+E.vertexShader.replace("#include <defaultnormal_vertex>",`#include <defaultnormal_vertex>
 vOilNormal = inverseTransformDirection(normalize(transformedNormal), viewMatrix);`).replace("#include <project_vertex>",`${q}
             vOilPosition = (modelMatrix * vec4(transformed,1.0)).xyz;
             vCanopyVis = canopyTransmission(${oi(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"}, normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)));
             // which side of the crown this leaf is on, lit (+1) to shade (-1).
             // the
             // form light comes from the upper right, so the split runs top
             // to underside, not just right to left
             vSunSide = dot(normalize(${oi(c.geometry,"_leaf_pivot")?"_leaf_pivot":"vOilPosition"} - vec3(uTreeC.x, uTreeBase + 0.72 * uTreeH, uTreeC.y)), normalize(normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)) + vec3(0.0, 0.8, 0.0)));
             vLeafSeed = ${k?"_leaf_seed":"0.5"};
             #include <project_vertex>`),E.fragmentShader=Ni+D+`uniform vec3 uOilSun; uniform float uOilLive; varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed; varying float vLightBias;
            `+E.fragmentShader.replace("#include <map_fragment>",Q0).replace("#include <opaque_fragment>",`
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
              #include <opaque_fragment>`)}E.fragmentShader=E.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
#ifdef USE_COLOR
  totalEmissiveRadiance *= vColor.rgb;
#endif`)},g){let E=new ti({depthPacking:Kr,map:u,alphaTest:.5,side:zt});lr(E,"tree",oi(c.geometry,"_leaf_pivot"),[1,1,1],!1,!1,!1,O);let D=E.onBeforeCompile;E.onBeforeCompile=U=>{D(U),oi(c.geometry,"_leaf_pivot")&&(U.uniforms.uCrownMask=Rn.mask,U.uniforms.uCrownBox=Rn.box,U.vertexShader=Ol+U.vertexShader.replace("#include <project_vertex>",ev+`
#include <project_vertex>`)),U.fragmentShader=U.fragmentShader.replace("#include <map_fragment>",Q0)},E.customProgramCacheKey=()=>"leaf-depth-v223-"+c.name,c.customDepthMaterial=E}b.customProgramCacheKey=()=>"treecards-"+c.name,console.log(`tree cards: ${c.geometry.attributes.position.count} verts, tint ${d?"COLOR_0":"none"}, canopy ${Ct.height.toFixed(1)} m x ${Ct.uWidth.value.toFixed(1)} m`)}else c.name.includes(Oe.substrings.clothes)&&(Xn.pending=c);let y=d&&!u&&!f&&!C&&!(h?.name||"").startsWith(Oe.prefixes.housePart)||x,w=c.userData.uniformPlaster||_||R||S||C||f||p||y;w||T0(b,hr,Xt,Zr,{wind:c.name===Oe.nodes.tree||m,turf:c.parent?.name===Oe.nodes.island,glass:!!h?.name?.startsWith(Oe.prefixes.houseWindow),roof:h?.name===Oe.materials.roofPaint1||h?.name===Oe.materials.roofPaint2,bark:m,soft:c.name.includes(Oe.substrings.clothes),trim:h?.name===Oe.materials.houseRoofEdgeTrim,houseCentre:new T(...Cf.center)}),c.userData.keepPainted=!0,c.userData.shadowRole={material:h?.name,cast:c.castShadow,receive:c.receiveShadow,response:p?"translucent canopy":y?"meadow":w?"authored sun/fill":"shared sun/fill"}},i=[];e.traverse(c=>{c.isMesh&&i.push(c)});let r=[];for(let c of i){ql=performance.now();let l=performance.now();await n(c),Cn&&r.push([c.name,Math.round(performance.now()-l)])}Cn&&(it.visits=r.sort((c,l)=>l[1]-c[1]).slice(0,8)),it.visited=performance.now(),pt.add(e);let a=async()=>{let c=performance.now(),l;try{l=await Nf({url:JS,abs:ZS,blob:null,cache:!0},()=>{})}catch(h){console.error("island_meadow.glb failed to load",h);return}it.meadowFetched=performance.now(),iv.parse(l,"./",async h=>{l=null;let u=h.scene;h=null,u.userData.terrainProfile!==$r.version&&console.warn("meadow: terrain profile "+u.userData.terrainProfile+" vs the core's "+$r.version);let d=[];u.traverse(f=>{f.isMesh&&d.push(f)});for(let f of d)ql=performance.now(),await n(f);ao.useWorkers(0),lo.value=ui.has("capture")?1:0,pt.add(u),Df(u,new Set),it.meadowReady=performance.now(),console.info(`meadow: fetched in ${Math.round(it.meadowFetched-c)} ms, built in ${Math.round(it.meadowReady-it.meadowFetched)} ms, ${Math.round(it.meadowReady-it.ready)} ms after ready`)},h=>console.error("island_meadow.glb could not be parsed",h))};bv(e),it.twigs=performance.now();{let c=e.getObjectByName(Oe.nodes.house);if(c){c.updateWorldMatrix(!0,!1);let l=c.localToWorld(new T(2.229,0,1.097)),h=new T(1,0,0).transformDirection(c.matrixWorld),u=new j(h.x,h.z).normalize();Wl.c.value.set(l.x,l.z,u.x,u.y),Wl.half.value.set(.85+.06,.393+.06)}}console.info("shadow-audit-v166 "+JSON.stringify(Bl.map(c=>({name:c.name,...c.userData.shadowRole,movingDepth:!!c.customDepthMaterial}))));{let c=e.getObjectByName(Oe.nodes.island),l=new ft().setFromObject(c||e);hi.init(l)}window.S=pt,window.RENDERER=vt,window.CAM=Ze,window.CTRL=qt,window.PHYS={Wind:Kn,Grass:hi,Tree:Ct,Cloth:Xn},Av(!0),it.halve0=performance.now(),ur&&z0(pt,Zs,1024),it.halve=performance.now();let o=Df(pt,new Set([(Xn.mesh||Xn.pending)&&(Xn.mesh||Xn.pending).geometry]));console.info(`memory: ${(o/1048576).toFixed(0)} MB of CPU geometry copies released after upload`),it.release=performance.now(),(async()=>{Tn({type:"stage",stage:"warming"});let c=1e9;it.warm=[];for(let u=0;u<12&&!(u>=3&&c<25);u++){let d=performance.now();$f(),c=performance.now()-d,it.warm.push(Math.round(c)),await new Promise(f=>setTimeout(f,0))}it.warmed=performance.now(),If(pt,vt,Zs),setTimeout(()=>If(pt,vt,Zs),15e3),it.ready=performance.now();let l=(u,d)=>Math.round(it[d]-it[u]);console.info(`load: fetch ${l("t0","fetched")} ms, parse ${l("fetched","parsed")} ms, build ${l("parsed","visited")} ms, finish ${l("visited","ready")} ms (warm-up included)`),window.T_LOAD=it;let h=document.getElementById("loading");h.style.opacity=0,setTimeout(()=>h.remove(),700),Tn({type:"ready"}),Sv.ready(),a(),dr.readyAt=performance.now(),Xn.pending&&setTimeout(()=>{let u=Xn.pending;Xn.pending=null;let d=performance.now();Xn.init(u),console.info(`cloth rig built after ready in ${Math.round(performance.now()-d)} ms`)},400),ui.get("tier")==="phone"&&Fi.wholeLadder()})()},s=>{console.error("island_world.glb failed to parse",s),Js("The island could not load."),Tn({type:"error",message:"The island could not load."})});addEventListener("resize",()=>{Ze.aspect=innerWidth/innerHeight,Ze.fov=Pn.fov0=fo(Ze.aspect),Ze.updateProjectionMatrix(),po(),vt.setPixelRatio(Fi.fitDpr(Fi.dpr)),vt.setSize(innerWidth,innerHeight)});var Mv=!0,Zl=j0({renderer:vt,samples:Cn&&+ui.get("msaa")||2}),Sv=G0({renderer:vt,scene:pt,extraTextures:Zs,build:Oi,overlay:ui.has("stats"),tier:()=>({memory:ur,touch:document.body.classList.contains("touch"),applied:dr.applied,ladderOn:dr.on}),load:()=>it,targets:()=>{let s=vt.domElement,e=[{name:"canvas",w:s.width,h:s.height,bpp:8}];if(e.push(...Zl.targets()),jn){let t=jn.getRenderTarget();e.push({name:"mirror",w:t.width,h:t.height,bpp:8})}return Pt.light&&Pt.light.shadow.map&&e.push({name:"shadow",w:Pt.light.shadow.mapSize.x,h:Pt.light.shadow.mapSize.y,bpp:8}),e}});matchMedia("(prefers-reduced-motion: reduce)").matches&&(Yn.on=!1);gv();function x1(s){Mv=s}var $s=new cn,Pt={base:new T(-.84,-.242,-.485).normalize(),light:null,t:.5};{let s=new tr("#ffedd2",.55);s.castShadow=!0,s.shadow.mapSize.set(4096,4096);let e=s.shadow.camera;e.left=-55,e.right=55,e.top=55,e.bottom=-55,e.near=200,e.far=700,s.shadow.bias=-8e-5,s.shadow.normalBias=.055;let t=new nt;t.position.set(8,2,0),$s.add(t),s.target=t,$s.add(s),$s.add(new Hs("#f4f2e8","#aeb492",.45)),Pt.light=s,Ev(.5)}function Ev(s){Pt.t=s;let e=(s-.5)*Math.PI*.85,t=Pt.base.clone().applyAxisAngle(new T(0,1,0),e);hr.value.copy(t).negate(),Pt.light.position.copy(t.multiplyScalar(-420)).add(Pt.light.target.position)}function Av(s){Zr.value=s?1:0,Kf.value=s?1:0,s?pt.add($s):pt.remove($s)}if(Cn){let{installDevPanel:s}=await Promise.resolve().then(()=>(Y0(),K0));await s({Vector3:T,MathUtils:rn,camera:Ze,FLY:Pn,setCamMode:n1,restoreHero:Kl,LOOKAT:window.LOOKAT,HOME_DROP:hv,postMat:Zl.material,Wind:Kn,WIND:Yn,placeSun:Ev,HORIZON:uv,applyHorizon:po,scene:pt,COLLIDE:ci,groundY:dv,windowVariants:Cl,TERRAIN_PROFILE:$r,setPainterly:x1,setLiveLight:Av,VISIBLE_SUN:Xl,BUILD:Oi})}var _1=document.getElementById("fps"),Ul=0,Hf=performance.now(),rv=0,kl=performance.now(),Jr=new T;vt.setAnimationLoop(()=>{if(Ul++,Vl.touchActive&&Ul&1)return;let e=performance.now(),t=Math.min((e-kl)/1e3,1/30);if(dr.on&&dr.readyAt&&e-dr.readyAt>3e3&&Fi.tierStep(e-kl,e,Vl.touchActive?40:30),dr.readyAt&&Sv.frame(e-kl),kl=e,lo.value<1&&(lo.value=Math.min(1,lo.value+t/1.2)),Yn.on&&(rv+=t,Kn.step(t),hi.step(t),Ct.step(t),Xn.step(t)),Yn.t.value=rv,Pn.on?pv(t):mv(t),Tv(),jn&&(jn.position.y=.02,vv.level.value=.02),e-Hf>=500&&(_1.textContent=`${Math.round(Ul*1e3/(e-Hf))} fps \xB7 wind ${Kn.U.toFixed(1)} m/s`,Ul=0,Hf=e),Jf){let n=qt.target,i=Ze.position.clone().sub(n);i.applyAxisAngle(r1,.0018),Ze.position.copy(n).add(i)}Pn.on||(qt.update(),fv(null)),m1(e),$f()});function Tv(){jn&&(Ze.getWorldDirection(Jr),jn.material.uniforms.uCamPitch.value=Math.min(Math.max(-Jr.y,0),1),jn.material.uniforms.uVfov.value=rn.degToRad(Ze.fov),Jr.y=0,Jr.lengthSq()>1e-6&&(Jr.normalize(),jn.material.uniforms.uCamF.value.set(Jr.x,Jr.z)))}function y1(){if(!Pt.light)return;let s=li.shadow||4096;s!==Pt.light.shadow.mapSize.x&&(Pt.light.shadow.mapSize.set(s,s),Pt.light.shadow.map&&(Pt.light.shadow.map.dispose(),Pt.light.shadow.map=null))}function w1(){Pt.light&&(Pt.light.shadow.map&&(Xt.map.value=Pt.light.shadow.map.texture,Xt.matrix.value.copy(Pt.light.shadow.matrix),Xt.size.value.copy(Pt.light.shadow.mapSize)),Xt.on.value=$s.parent===pt&&Pt.light.shadow.map?1:0)}var M1=0;function $f(){ur&&(vt.shadowMap.autoUpdate=!1,vt.shadowMap.needsUpdate=M1++%3===0),Tv(),y1(),w1(),N0(Yn.t.value),uo.value=li.lodOff?0:1,li.mirrorKeep!==void 0&&(Jl.value=li.mirrorKeep),Ll(Ze,1,uo.value>=.5,li.lodRangeOff),Mv?Zl.render(pt,Ze,li):vt.render(pt,Ze)}window.RENDER_ONCE=$f;window.STEP=s=>{Pn.on?pv(s):mv(s)};sv();
