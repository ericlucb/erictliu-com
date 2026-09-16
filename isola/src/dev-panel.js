// The LOOK panel: cameras, review views, wind, sun angle, the painterly
// dials. Only with ?dev=1 (the gate's harness drives its wind slider; the
// review scripts drive its cameras); a visitor's bundle never carries it -
// main.js imports it dynamically and scripts/build.mjs splits it into its
// own chunk. Everything it touches arrives in ctx - the two three.js classes
// it uses included: an import of its own, or the THREE namespace passed as a
// value, made esbuild emit a chunk every visitor would fetch. It reaches for
// nothing.
const PANEL_HTML = `<details id="panel" class="hud-panel">
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
</details>`;
export async function installDevPanel(ctx) {
  const { Vector3, MathUtils, camera, FLY, setCamMode, restoreHero, LOOKAT, HOME_DROP, postMat, Wind, WIND, placeSun, HORIZON, applyHorizon, scene, COLLIDE, groundY,
          windowVariants, TERRAIN_PROFILE, setPainterly, setLiveLight, VISIBLE_SUN, BUILD } = ctx;
  document.body.insertAdjacentHTML('beforeend', PANEL_HTML);
  const $ = (id) => document.getElementById(id);
  function bindRange(id, out, apply, digits = 2) {
    const el = $(id);
    el.addEventListener('input', () => {
      $(out).textContent = (+el.value).toFixed(digits);
      apply(+el.value);
    });
  }
  bindRange('c-mix', 'o-mix', v => postMat.uniforms.uMix.value = v);
  bindRange('c-rad', 'o-rad', v => postMat.uniforms.uRadius.value = v, 0);
  bindRange('c-edge', 'o-edge', v => postMat.uniforms.uEdge.value = v);
  bindRange('c-grain', 'o-grain', v => postMat.uniforms.uGrain.value = v);
  bindRange('c-sat', 'o-sat', v => postMat.uniforms.uSat.value = v);
  bindRange('c-cel', 'o-cel', v => postMat.uniforms.uCel.value = v);
  bindRange('c-sepia', 'o-sepia', v => postMat.uniforms.uSepia.value = v);
  $('c-wind').addEventListener('change', () => WIND.on = $('c-wind').checked);
  $('c-wind').checked = WIND.on;
  bindRange('c-wspd', 'o-wspd', v => Wind.mean = v, 1);
  bindRange('c-sun', 'o-sun', v => placeSun(v));
  bindRange('c-hz', 'o-hz', v => { HORIZON.shift = v; applyHorizon(); }, 3);
  bindRange('c-hcone', 'o-hcone', v => scene.heroCone = v, 0);
  bindRange('c-hnear', 'o-hnear', v => scene.heroNear = v);
  $('c-cam').addEventListener('change', () => setCamMode($('c-cam').value));
  $('c-shore').addEventListener('click', () => {
    setCamMode('fly');
    const target = new Vector3(-7.5, .25, -21.1);
    const eye = new Vector3(-13.5, 4.8, -31.0).sub(target)
      .multiplyScalar(Math.max(1, .9 / camera.aspect)).add(target);
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-hero').addEventListener('click', restoreHero);
  $('c-house').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target = new Vector3(1.5126, 4.4430, -1.6429);
    const eye = new Vector3(10.0855, 4.9430, 6.8075).sub(target)
      .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
    eye.y+=HOME_DROP; target.y+=HOME_DROP;
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-rear').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target = new Vector3(-5.0129, 5.7930, -7.1303);
    const eye = new Vector3(-25.8342, 8.8930, -18.1064).sub(target)
      .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
    eye.y+=HOME_DROP; target.y+=HOME_DROP;
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  const rearRemodelCameras = await fetch('./rear-remodel-cameras.json?v='+BUILD).then(r=>r.json());
  for(const v of Object.values(rearRemodelCameras))for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
  for (const [id,key] of [['c-chimney','chimney'],['c-chimney-back','chimney_reverse'],['c-rear-detail','rear_detail']]) {
    $(id).addEventListener('click',()=>{
      setCamMode('fly'); camera.clearViewOffset(); camera.fov=50; camera.updateProjectionMatrix();
      const c=rearRemodelCameras[key],target=new Vector3(...c.target);
      const eye=new Vector3(...c.eye).sub(target).multiplyScalar(Math.max(1,.9/camera.aspect)).add(target);
      LOOKAT(...eye.toArray(),...target.toArray());
    });
  }
  $('c-gable').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target = new Vector3(2.4011, 5.7930, -9.3231);
    const eye = new Vector3(14.2643, 8.4930, -28.0919).sub(target)
      .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
    eye.y+=HOME_DROP; target.y+=HOME_DROP;
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-pier').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target = new Vector3(-7.8551, .2, -19.7783);
    const eye = new Vector3(-13.3603, 1.05, -24.1752).sub(target)
      .multiplyScalar(Math.max(1, 1.35 / camera.aspect)).add(target);
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-path').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target = new Vector3(-5.8992, 2.5430, -8.8731);
    const eye = new Vector3(-9.8791, 3.8930, -12.2198).sub(target)
      .multiplyScalar(Math.max(1, 1.2 / camera.aspect)).add(target);
    eye.y+=HOME_DROP; target.y+=HOME_DROP;
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-flowers').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
    // Focus an actual retained meadow plant, clear of the doorway wear mask.
    const target = new Vector3(16.0026,1.64,2.9909);
    const eye = new Vector3(16.4526,2.02,4.0409).sub(target)
      .multiplyScalar(Math.max(1, 1.2 / camera.aspect)).add(target);
    eye.y=Math.max(eye.y,groundY(eye.x,eye.z)+COLLIDE.eye+.02);
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  const entryCamera = await fetch('./front-approach-camera.json').then(r=>r.json());
  for(const v of [entryCamera])for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
  $('c-entry').addEventListener('click',()=>{
   setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
   const target=new Vector3(...entryCamera.target);
   const eye=new Vector3(...entryCamera.eye).sub(target).multiplyScalar(Math.max(1,1.15/camera.aspect)).add(target);
   LOOKAT(...eye.toArray(),...target.toArray());
  });
  for (const [state,v] of Object.entries(windowVariants.views)) {
    const option=document.createElement('option'); option.value=state; option.textContent=v.label;
    $('c-window-variant').appendChild(option);
  }
  $('c-window-variant').addEventListener('change',()=>{
    const v=windowVariants.views[$('c-window-variant').value]; if(!v)return;
    setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=v.fov; camera.updateProjectionMatrix();
    const eye=[...v.eye]; eye[1]=Math.max(eye[1],groundY(eye[0],eye[2])+COLLIDE.eye+.05);
    LOOKAT(...eye,...v.target);
  });
  const joineryCameras = await fetch('./joinery-cameras.json').then(r => r.json());
  for(const v of Object.values(joineryCameras))for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
  $('c-eave').addEventListener('click',()=>{
   setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();
   const v=joineryCameras.window_angle;
   LOOKAT(v.eye[0]+.8,v.eye[1]+1.15,v.eye[2]+1.3,v.target[0],v.target[1]+1.15,v.target[2]);
  });

  for (const name of ['window_detail','window_angle','door_detail']) {
    $('c-'+name.replace('_','-')).addEventListener('click', () => {
      const v=joineryCameras[name]; setCamMode('fly'); camera.clearViewOffset();
      camera.fov=FLY.fov0=v.fov; camera.updateProjectionMatrix();
      const eye=[...v.eye]; eye[1]=Math.max(eye[1],groundY(eye[0],eye[2])+COLLIDE.eye+.05);
      LOOKAT(...eye,...v.target);
    });
  }
  const reviewCameras = await fetch('./review-cameras.json?v='+BUILD).then(r => r.json());
  $('c-review').addEventListener('change', () => {
    const name = $('c-review').value;
    if (name === 'hero_camera') { restoreHero(); return; }
    if (name === 'tree_reference') {
      setCamMode('fly'); camera.clearViewOffset();
      camera.fov = FLY.fov0 = MathUtils.radToDeg(2 * Math.atan(24.1758 / 240));
      camera.updateProjectionMatrix();
      LOOKAT(23.940, 8.462, 116.774, 28.936, 8.462, -3.122); return;
    }
    const view = reviewCameras[name]; if (!view) return;
    setCamMode('fly'); camera.clearViewOffset();
    camera.fov = FLY.fov0 = MathUtils.radToDeg(2 * Math.atan(36 / (2 * view.lens * camera.aspect)));
    camera.updateProjectionMatrix();
    LOOKAT(...view.eye, ...view.target);
  });
  $('c-plaster').addEventListener('click',()=>{setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();LOOKAT(11.65,5.15,-6.06,5.665,3.64,-6.579);});
  $('c-bench').addEventListener('click',()=>{setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();LOOKAT(17.0,4.0,5.2,23.42,2.2,3.25);});
  $('c-tree').addEventListener('click', () => {
    setCamMode('fly');
    const target = new Vector3(30, 8, -.5);
    const eye = new Vector3(26, 10.5, 32).sub(target)
      .multiplyScalar(Math.max(1, .8 / camera.aspect)).add(target);
    eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og;
    LOOKAT(...eye.toArray(), ...target.toArray());
  });
  $('c-laundry').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset();
    const target=new Vector3(11.5,3.25,-7.7);
    const eye=new Vector3(10.5,3.7,1.2).sub(target)
      .multiplyScalar(Math.max(1,1.3/camera.aspect)).add(target);
    eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_clothes_line; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_clothes_line;
    LOOKAT(...eye.toArray(),...target.toArray());
  });
  $('c-tree-side').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
    const target=new Vector3(31,9.8,-3);
    const eye=new Vector3(51,11,-2).sub(target).multiplyScalar(Math.max(1,.80/camera.aspect)).add(target);
    eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og;
    LOOKAT(...eye.toArray(),...target.toArray());
  });
  $('c-twigs').addEventListener('click', () => {
    setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
    LOOKAT(29.2,12.6,3.8,30.5,12.5,-.6);
  });
  $('c-bark').addEventListener('click', () => {
    setCamMode('fly'); LOOKAT(25.5, 5, 8.5, 29.2, 4.5, -2.3);
  });
  $('c-leaves').addEventListener('click', () => {
    setCamMode('fly'); LOOKAT(27, 13, 9, 31, 13, -.5);
  });
  $('c-on').addEventListener('change', () => setPainterly($('c-on').checked));
  $('c-sun-view').addEventListener('click',()=>{
    setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=40;camera.updateProjectionMatrix();
    const eye=camera.position.clone(),target=eye.clone().addScaledVector(VISIBLE_SUN.value,100);
    LOOKAT(...eye.toArray(),...target.toArray());
  });
  $('c-light').addEventListener('change', () => setLiveLight($('c-light').value === 'sun'));

}
