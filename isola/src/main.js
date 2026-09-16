// Isola Quieta - the viewer. index.html is the markup, this is the program;
// the helpers beside it (cloth, wind, lighting bakes, terrain) are the
// modules it imports. Relative import specifiers resolve against this file
// (web/src/); fetch() and texture URLs resolve against index.html (web/).
// P2 of docs/ARCHITECTURE.md continues the split from here.
import * as THREE from 'three';
import { OrbitControls } from '../vendor/OrbitControls.js';
import { GLTFLoader } from '../vendor/GLTFLoader.js';
import { MeshoptDecoder } from '../vendor/meshopt_decoder.module.js';   // V216: EXT_meshopt_compression
import { Reflector } from '../vendor/Reflector.js';
import { validateWaterline, BOAT_WATER_MASK_GLSL } from './boat-water-mask.js';
import { createLaundry } from './laundry.js';
import { PAINTED_SUN_GLSL } from './painted-sun.js';
import { BRANCH_WIND_GLSL } from './branch-wind.js';
import { createTreeDynamics, stepTreeDynamics } from './tree-dynamics.js';
import { applyTerrainProfile, flattenedHeight } from './terrain-profile.js';
import { LEAF_WIND_GLSL } from './leaf-wind.js';
import { benchLighting } from './bench-lighting.js';
import { gardenLighting } from './garden-lighting.js';
import { sillWind } from './sill-wind.js';
import { chimneyLighting } from './chimney-lighting.js';
import { SCENE_SHADOW_FRAG as SHADOW_FRAG, sceneLighting, castsSceneShadow } from './scene-lighting.js';
import { plasterLighting } from './plaster-lighting.js';
import boatWaterlineJson from '../boat-waterline.json' with { type: 'json' };
import plasterColor from '../plaster-color.json' with { type: 'json' };
import windowVariants from '../window-variants.json' with { type: 'json' };
import treeVolumeData from '../tree-volume-lighting.json' with { type: 'json' };
import treeCrownJson from '../tree-crown.json' with { type: 'json' };
import rearEntryRoute from '../rear-entry-route.json' with { type: 'json' };
import { bakeWorldTransform } from './bake-world-transform.js';
import { EMBED, tellParent, waitForDoor } from './embed.js';
import { BOAT, initBoat, updateBoat, boatify } from './boat.js';
import { BLADE_LOD, applyBladeLod } from './blade-lod.js';
import { failPanel, installLoadGuards } from './load-panel.js';
import { releaseCpuCopies, halveTexture, halveTextures, releaseImages } from './memory.js';
import { WORLD_TAG, WORLD_BYTES, resolveWorldUrl, worldBytes } from './world-file.js';
import { installStats } from './stats.js';

// cache-buster: one label per build, so a reload re-uses the cached 117 MB
// GLB instead of fetching it again (v115 stamped the clock on every load)
const BUILD = 'v247';
// V242: the world's parse finishes in ~200 ms now (meshopt), sooner than
// this module finishes evaluating - it suspends on later top-level awaits -
// so the load callback must wait for the module's last line, or it reads
// constants still in their temporal dead zone (it did: 'Cannot access
// _camF before initialization', and the island 'could not load').
let moduleReadyResolve; const MODULE_READY = new Promise((r) => { moduleReadyResolve = r; });
// ?dev=1 shows the full LOOK panel (cameras, review views, painterly dials);
// visitors get only the settings control (V207)
const DEV = new URLSearchParams(location.search).has('dev');
// V233: ?embed=1 - the viewer is an iframe behind erictliu.com's door. It
// announces its world file, waits for the parent to hand it over through the
// Cache API, and reports progress and readiness by postMessage.
if (DEV) document.body.classList.add('dev');
const boatWaterlinePromise = Promise.resolve(boatWaterlineJson).then(validateWaterline);
// V219 - THE BOAT BOBS. Small, slow, two-period heave with a roll about the
// hull's long axis and a pitch across it (angles under 2 deg). The rope's
// boat end rides along. The sea level itself is frozen (Eric, earlier), so
// this is the only place the water's motion reaches a solid.
initBoat(boatWaterlinePromise);


// ?capture=1 keeps the drawing buffer so canvas.toDataURL() returns the frame
// instead of black - the only way to get a PNG of what this viewer actually
// ships out of a headless browser. OFF by default: preserving the buffer costs
// a full-screen copy every frame, and this is a 3.4 M vertex scene.
const Q = new URLSearchParams(location.search);
const TOUCH = matchMedia('(hover: none) and (pointer: coarse)').matches;
// V246: hello to the door before anything else here runs. The door started
// downloading the world at the click (it carries the world's tag); this
// names the URL the viewer will ask for and, with the door's 'ack', holds
// the viewer's own download until the door's Blob arrives.
const { WORLD_URL, GLB_URL, GLB_ABS } = resolveWorldUrl(Q, DEV);
window.WORLD_URL = WORLD_URL;
const DOOR = EMBED ? waitForDoor(GLB_ABS, BUILD, WORLD_BYTES) : null;
// V240 - THE PHONE'S MEMORY (Eric: 'on mobile chrome iOS it loads but then
// it just craps out'). iOS Chrome is WebKit, and WebKit kills a page that
// crosses its memory ceiling with no error - and this world at a phone's
// size was ~1.3 GB: 305 MB of geometry, 307 MB of textures, 230 MB of
// render targets and a 446 MB JS heap holding a CPU copy of every buffer
// (measured 2026-09-16, docs/PERF-2026-09-15.md). Two answers, both at
// load, before the first frame allocates anything: on EVERY device the CPU
// copies go after upload (releaseCpuCopies) and the decoded images after
// upload (releaseImages); on a touch-first device (or ?tier=phone) the
// MEMORY tier also halves textures 2048 px and up, draws the shadow map at
// 2048, the mirror at 512, the canvas at pixel ratio 1.5 with no MSAA on
// the canvas itself (the painterly target keeps its 4x; the post quad has
// no edges to smooth). The timed-frame ladder (V237) still runs on top.
const MEMORY_TIER = TOUCH || Q.get('tier') === 'phone';
if (MEMORY_TIER) window.SHADOW_FORCE = 2048;
const renderer = new THREE.WebGLRenderer({
  antialias: Q.has('aa'),            // the painterly path resolves its own MSAA; ?aa=1 for painterly-off dev views
  preserveDrawingBuffer: Q.has('capture'),
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// V237 - ONE CODEBASE, TIERED BY A TIMED FRAME (never by user agent). The
// renderer starts at the device's own pixel ratio (capped at 2, as always);
// once the world is up, a running median of the loop's frame interval
// above 30 ms steps down a ladder: pixel ratio 1.5, 1.25, 1.0, then the
// water's mirror to 512, then the shadow map to 2048. A desktop that holds
// 60 fps never moves and draws exactly what it drew before. ?dpr=1.25 pins
// the ratio, ?tier=phone applies the whole ladder at load (to compare on a
// phone), ?tier=full and ?capture=1 switch the ladder off (the harness).
const DPR_MAX = Math.min(devicePixelRatio, MEMORY_TIER ? 1.5 : 2);
let DPR = Q.get('dpr') ? Math.max(0.5, Math.min(+Q.get('dpr') || DPR_MAX, DPR_MAX)) : DPR_MAX;
// V240: a PIXEL BUDGET. The painterly pass owns three full-frame targets
// (4x MSAA colour+depth, two half-float MRT pairs) - at a 5K window and
// DPR 2 that is ~1 GB of GPU memory and a frame that never finishes. The
// effective pixel ratio shrinks so the frame never exceeds the budget; a
// 1440x600 review pane at DPR 2 (1.7 M px) is untouched.
const PIXEL_BUDGET = MEMORY_TIER ? 2.0e6 : 4.2e6;
function fitDpr(base) { const px = innerWidth * innerHeight * base * base; return px > PIXEL_BUDGET ? base * Math.sqrt(PIXEL_BUDGET / px) : base; }
renderer.setPixelRatio(fitDpr(DPR));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.NoToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color('#8b95ab');
scene.fog = new THREE.Fog('#98a0b2', 900, 3400);

const WINDOW_SKY = { value: null };
const VISIBLE_SUN={value:new THREE.Vector3(.840,.242,.485).normalize()};
const VISIBLE_SUN_ON={value:1};
// V244: the two 256x256 height grids (collision, the terrain profile's
// original ground) arrive as one binary at 0.1 mm (scripts/pack_grids.mjs);
// the profile's scalars ride in its header
const GRIDS = await (window.GRIDS_FETCH || fetch('./world-grids.bin?v=' + BUILD)).then(async (r) => {   // (index.html starts the fetch beside the program's own)
  if (!r.ok) throw new Error('world-grids.bin ' + r.status);
  const buf = await r.arrayBuffer(); const dv = new DataView(buf); const hl = dv.getUint32(0, true);
  const hd = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 4, hl)).replace(/\0+$/, ''));
  const grid = (meta, off) => { const q = new Int16Array(buf, off, meta.count); const h = new Float32Array(meta.count); for (let i = 0; i < meta.count; i++) h[i] = q[i] / hd.scale; return { N: meta.N, x0: meta.x0, z0: meta.z0, cw: meta.cw, ch: meta.ch, h }; };
  const o1 = 4 + hl, o2 = o1 + hd.island.count * 2;
  return { island: grid(hd.island, o1), ground: grid(hd.ground, o2), profile: hd.profile };
});
const TERRAIN_PROFILE = { ...GRIDS.profile, originalGround: GRIDS.ground };
const HOME_DROP=TERRAIN_PROFILE.offsets.WEB_HM_home;
const PLASTER_LIVE = {value:1};
for(const v of Object.values(windowVariants.views))for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
const EXTRA_TEXTURES = [];   // V240: textures loaded outside the GLB (the interior sheet, the sky band) join the memory passes
const ROOM_PAINT={value:new THREE.TextureLoader().load('./interior-warm-v1.webp?v='+BUILD)};
EXTRA_TEXTURES.push(ROOM_PAINT.value);
ROOM_PAINT.value.colorSpace=THREE.SRGBColorSpace;
// dusk gradient dome + the painting's own sky panorama on a band
{
  const cv = document.createElement('canvas');
  cv.width = 4; cv.height = 512;
  const g = cv.getContext('2d');
  // day sky continuing the v2 pano's top row (#74b7eb after the baked
  // band-shader grade) up to a deeper zenith
  // measured from the graded pano's own top rows (#4a76a0) so the dome
  // CONTINUES the band instead of butting against a different sky
  const grad = g.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0.00, '#1b558e');
  grad.addColorStop(0.42, '#22629b');
  grad.addColorStop(0.80, '#286ea6');
  grad.addColorStop(1.00, '#3a7cae');
  g.fillStyle = grad;
  g.fillRect(0, 0, 4, 512);
  const domeTex = new THREE.CanvasTexture(cv);
  domeTex.colorSpace = THREE.SRGBColorSpace;
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(2900, 48, 32),
    new THREE.MeshBasicMaterial({ map: domeTex, side: THREE.BackSide,
                                  fog: false, depthWrite: false }));
  dome.renderOrder = -3;
  scene.add(dome);

  const panoTex = new THREE.TextureLoader().load('./sky_panorama.jpg?v=' + BUILD, (t) => { if (MEMORY_TIER) halveTexture(t, 1024); });
  EXTRA_TEXTURES.push(panoTex);
  panoTex.colorSpace = THREE.SRGBColorSpace;
  panoTex.wrapS = THREE.RepeatWrapping;
  WINDOW_SKY.value = panoTex;
  // v2 pano: mirror the blend's band geometry - the image maps linearly
  // between z = r*tan(elev)*0.747 for elev -12.196..28.740 deg (the old
  // x1.55 stretch is baked into those angles; painting-cut towers above)
  const R_BAND = 2500;
  const tanTop = Math.tan(28.740 * Math.PI / 180);
  const tanBot = Math.tan(-12.196 * Math.PI / 180);
  const bandH = R_BAND * 0.747 * (tanTop - tanBot);
  const bandMat = new THREE.MeshBasicMaterial({
    map: panoTex, side: THREE.BackSide, fog: false,
    depthWrite: false, transparent: true });
  // TOP FADE ('look how bad this overlay looks, it's cut off'): the
  // band used to end on a hard horizontal line against the dome.
  // Dissolve its upper fifth so sky and band are continuous.
  bandMat.onBeforeCompile = (sh) => {
    sh.uniforms.uVisibleSun=VISIBLE_SUN;sh.uniforms.uVisibleSunOn=VISIBLE_SUN_ON;
    sh.vertexShader='varying vec3 vSkyDirection;\n'+sh.vertexShader.replace('#include <begin_vertex>',
      '#include <begin_vertex>\n vSkyDirection=(modelMatrix*vec4(position,1.0)).xyz-cameraPosition;');
    sh.fragmentShader=PAINTED_SUN_GLSL+'varying vec3 vSkyDirection;\n'+sh.fragmentShader;
    // PLAN_V3 D1: the painting's towers top out at +11.8 deg; the band put
    // them at ~9.7. Stretch only the rows ABOVE the horizon (v > 0.717) by
    // 1.22 in texture space so the horizon and the plum shelf stay seated.
    sh.fragmentShader = sh.fragmentShader.replace(
      '#include <map_fragment>',
      `{ float hv = 0.717; float v = vMapUv.y;
         float vv = v < hv ? v : hv + (v - hv) / 1.22;
         vec4 sampledDiffuseColor = texture2D( map, vec2(vMapUv.x, vv) );
         sampledDiffuseColor.rgb=paintedSun(vSkyDirection,sampledDiffuseColor.rgb);
         diffuseColor *= sampledDiffuseColor; }`);
    sh.fragmentShader = sh.fragmentShader.replace(
      '#include <alphamap_fragment>',
      `#include <alphamap_fragment>
       diffuseColor.a *= smoothstep(0.985, 0.72, vMapUv.y);
       diffuseColor.a *= smoothstep(0.02, 0.16, vMapUv.y);   // bottom seam too`);
  };
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(R_BAND, R_BAND, bandH, 96, 1, true),
    bandMat);
  band.position.y = R_BAND * 0.747 * tanBot + bandH / 2;
  band.renderOrder = -2;
  scene.add(band);
}

// === REAL GHIBLI CLOUDS (rendered from the Ghibli Cloud blend on this
// machine, cropped to alpha) - billboard sprites drifting above the
// painted band so the sky has depth instead of one flat wall.
const skyClouds = [];
{
  const loader2 = new THREE.TextureLoader();
  // (the six cloud cut-outs load only when a PUFF asks for them - the list is
  // empty since 2026-09-02 and the loads were six wasted requests)
  const texes = new Proxy({}, { get: (_, i) => { const t = loader2.load(`./clouds/paint_${i}.png?v=` + BUILD); t.colorSpace = THREE.SRGBColorSpace; return t; } });
  // SCATTERED, DRAMATICALLY VARIED ('different shapes, some long some
  // wider, scattered around, some bigger some smaller'). The island is
  // ~90 m across, so clouds run 60-260 m - the old ones were 700 m
  // pancakes lying on the water. Each entry:
  //   [azimuth, radius, altitude, width, aspect(w/h), texture]
  // aspect 3.4 = long wispy streak, 1.3 = compact puff.
  const PUFFS = [   // EMPTIED 2026-09-02 ('remove the extra clouds it looks bad') - the band carries the sky
  /*
    // above and nearer the home ('closer to the home a little bit'),
    // varied shapes: two towers, three band fragments, one tower top
    [0.35,  420, 150, 130, 2.63, 0], [1.20,  640, 210, 175, 3.03, 1],
    [2.05,  380, 120, 105, 4.01, 2], [2.85,  760, 260, 150, 3.08, 3],
    [3.60,  520, 170, 115, 2.28, 4], [4.35,  680, 230, 140, 1.86, 5],
    [5.10,  450, 140, 120, 2.63, 0], [5.80,  820, 280, 190, 3.03, 1],
    [0.80, 1050, 330, 210, 4.01, 2], [3.20, 1150, 360, 230, 1.86, 5],
  */
  ];
  for (const [az, R, alt, w, aspect, ti] of PUFFS) {
    const mat = new THREE.SpriteMaterial({
      map: texes[ti], transparent: true, depthWrite: false,
      fog: false, opacity: 0.92,            // painted cut-outs: as solid as the band
    });
    const sp = new THREE.Sprite(mat);
    sp.position.set(14.5 + Math.cos(az) * R, alt, Math.sin(az) * R);
    sp.scale.set(w, w / aspect, 1);
    sp.renderOrder = -1;
    sp.userData.az = az; sp.userData.R = R; sp.userData.alt = alt;
    scene.add(sp);
    skyClouds.push(sp);
  }
}

// open on the HERO pose (blender: cam (3,-120,4.45) -> target (8,0,4.45),
// lens 36 mm = 23.54 deg vertical) so the first frame IS the render framing
// near 1.5 (was 0.5): the lens island's ~2 deg beach is almost coplanar with
// the water for a metre around the waterline - at 0.5 the 24-bit depth
// buffer could not separate them at 100 m and the moving waterline sparkled
// FRAMING RULE (PLAN_V4, Eric's 'the sizing'): hold the painting's
// HORIZONTAL field. The hero lens is 36 mm on a 36 mm sensor (CAMERA_SPEC):
// tan of the half-width = 18 / 36 = 0.5, i.e. 23.54 deg vertical at the
// painting's 2.4:1 (v115 rounded it to 23.5, a 0.16 % scale error against
// every Blender render); a narrower window keeps that horizontal field and
// opens the vertical fov instead (16:9 -> 31.4 deg, the whole island in
// frame), clamped so portrait does not open to 116 deg (Codex's rule,
// refuted: it shrank the painting to 0.68x at 2.4:1). The clamp was 1.6:1;
// V237 ('work on mobile too') lowers it to 1:1 - a portrait phone at 1.6
// showed a 16 deg horizontal field with the island falling off the right
// edge; at 1:1 the lens is 53 deg vertical (a phone's own wide camera) and
// the default eye frames the island at ~80 % of the width. Nothing wider
// than 1.6:1 changes; a 4:3 desktop window opens from 35 to 41 deg.
const HERO_TAN_HALF_W = 18 / 36;   // tan of half the painting's horizontal field: half the sensor over the lens
function heroFov(a) { return 2 * Math.atan(HERO_TAN_HALF_W / Math.min(Math.max(a, 1.0), 2.4)) * 180 / Math.PI; }
console.assert(Math.abs(heroFov(2.4) - 23.5366) < 1e-3, 'heroFov(2.4) must be the hero lens, 36 mm on 36 mm at 2.4:1');
const camera = new THREE.PerspectiveCamera(heroFov(innerWidth / innerHeight), innerWidth / innerHeight, 1.5, 6000);
// PAINTER'S HORIZON ('bring the horizon lower - see the real example'):
// Oga puts the horizon at 60% of the frame while every vertical stays
// vertical - that is a lens SHIFT, not a pitched camera. A vertical view
// offset drops the horizon in the frame without tilting anything, and
// the Reflector copies the projection so the water stays consistent.
// 2026-09-09: 0.122 puts the painting's horizon (0.6219 of the height,
// docs/CAMERA_SPEC.md) through the calibrated camera; v115's 0.14 was tuned
// against the lifted 6.34 m eye and lands at 0.640 once the pose is level
const HORIZON = { shift: 0.122 };     // 'a little bit lower' (2026-09-02)      // fraction of frame height below centre
// PAINTER'S NEGATIVE SPACE: the calibrated hero camera (docs/CAMERA_SPEC.md)
// also carries a HORIZONTAL lens shift of -0.135 sensor widths - that is
// what keeps the island in the right half and leaves Oga's 40% of open
// water on the left. The viewer only ever applied the vertical term, so at
// the H pose everything sat ~13% of the frame too far left (PLAN_V3, A1).
// Negative = the frame moves left, the island moves right in it.
const HERO_SHIFT_X = -0.135;          // fraction of frame WIDTH
// WIDE WINDOWS (aspect > 2.4): the sky bake is registered to the painting;
// wider than 2.4 the frame opens into the 5120x1440 composition Eric
// attached (reference/hero-wide.jpg: hero.webp sits inside it at scale
// 0.8965, x0 ~1431), whose shift works out to -0.2068 at 3.556:1. Ramp
// between the two; at and below 2.4 the calibrated -0.135 is untouched.
// V237: below 1.6:1 the open water on the left has no room - the shift ramps
// to zero at 1:1 so a portrait phone centres the island instead of pushing
// it off the right edge (13.5 % of a 375 px frame is 51 px).
function heroShiftX(a) {
  const t = Math.min(Math.max((a - 2.4) / (5120 / 1440 - 2.4), 0), 1);
  const narrow = Math.min(Math.max((a - 1.0) / 0.6, 0), 1);
  return (HERO_SHIFT_X + t * (-0.2068 - HERO_SHIFT_X)) * narrow;
}
function applyHorizon() {
  camera.setViewOffset(innerWidth, innerHeight,
                       heroShiftX(innerWidth / innerHeight) * innerWidth, -HORIZON.shift * innerHeight,
                       innerWidth, innerHeight);
}
applyHorizon();
// the hero eye in three space (blender (3,-120,4.45) -> (x, z, -y)); the H
// key returns here and the painting blend measures the view against it
const HERO_POS = new THREE.Vector3(3, 4.45, 120);
// the Blender target (8, 0, 4.45) -> three (8, 4.45, 0): same height as the
// eye (level), 2.4 deg of yaw toward +x (scene_utils.HERO_TARGET, CAMERA_SPEC)
const HERO_TARGET = new THREE.Vector3(8, 4.45, 0);
camera.position.copy(HERO_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HERO_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 6;
controls.maxDistance = 320;      // 'shouldn't zoom all the way out' (2026-09-02; was 1400)
// stay above the water plane: the sea disc is single-sided and the band's
// sub-horizon rows (the video's far shore) live under it
controls.maxPolarAngle = Math.PI * 0.495;
let autorotate = false;

const moveHint = document.getElementById('hud');
let moveHintSeconds = 0, hintTimer = 0;
function flashHint() {           // the hint shows again for a moment when the look is paused or resumed
  moveHint.classList.remove('used'); clearTimeout(hintTimer);
  hintTimer = setTimeout(() => { if (moveHintSeconds >= .65) moveHint.classList.add('used'); }, 4000);
}
// Quiet flight: level horizon, steady lens, responsive easing and WASD only.
// Drag-to-look supplies direction; forward/backward follow the viewing ray.
const FLY = { on: true, vel: new THREE.Vector3(), yaw: 0, pitch: 0, roll: 0,
              lookX: 0, lookY: 0, drag: false, lastX: 0, lastY: 0, fov0: heroFov(innerWidth / innerHeight) };
// V246 - MOUSE LOOK (Eric: 'less sensitive'; 'it just shows the mouse and
// it isn't click to look around either'; before that, 'just follow the
// mouse when you enter'). One way to look on a mouse: the view turns with
// the mouse's motion, the cursor stays visible, nothing is clicked, dragged
// or held. Crossing the whole frame turns about 75 deg; at the frame's left
// or right edge the view keeps turning (a quadratic ramp over the outer
// 10 %, 46 deg/s at the very edge), so a full turn needs no lock; the top
// and bottom edges tilt, slower. The edge waits until the cursor has been
// through the middle of the frame, so a cursor parked where ENTER was
// cannot swing the view before the visitor touches the mouse - and looking
// only starts once the world is in view (V239's hover tracked the cursor
// through the load and opened onto the sea). Esc pauses it (the hint by
// the WASD keys says so); Esc, the hint or a click in the world resumes;
// neither changes the view. Off on touch (the drag and the stick) and in
// the capture harness. FLY.yaw/pitch is the only direction; the mouse's
// deltas go through FLY.lookX/Y and fly()'s smoothing, as the drag's do.
const LOOK = { on: false, inside: false, armed: false, mx: 0.5, my: 0.5 };
const LOOK_GAIN = 0.0009;                                   // rad per px (the old drag: 0.0016; 'moves way too much' was 0.0028)
const LOOK_EDGE_X = 0.10, LOOK_EDGE_Y = 0.06;               // the edge zones, as fractions of the frame
const LOOK_TURN_X = 0.8, LOOK_TURN_Y = 0.35;                // rad/s at the very edge
function lookEdge(dt) {                                     // the edge turn, into the smoothed deltas
  if (!LOOK.on || !LOOK.inside || !LOOK.armed) return;
  const ramp = (v, zone) => { const a = Math.abs(v); if (a < 1 - zone) return 0; const t = Math.min(1, (a - (1 - zone)) / zone); return Math.sign(v) * t * t; };
  FLY.lookX -= ramp((LOOK.mx - 0.5) * 2, LOOK_EDGE_X) * LOOK_TURN_X * dt;
  FLY.lookY -= ramp((LOOK.my - 0.5) * 2, LOOK_EDGE_Y) * LOOK_TURN_Y * dt;
}
function flySyncFromCamera() {
  const d = new THREE.Vector3(); camera.getWorldDirection(d);
  FLY.pitch = Math.asin(THREE.MathUtils.clamp(d.y, -1, 1));
  FLY.yaw = Math.atan2(-d.x, -d.z);
  FLY.roll = 0; FLY.vel.set(0, 0, 0); FLY.lookX = FLY.lookY = 0;
}
// A VERIFICATION HANDLE.  `window.CAM` has been exposed for a while, but moving
// it alone does nothing useful: fly() rewrites camera.rotation from FLY.yaw /
// FLY.pitch every frame, so a headless check that wants to look at the back of
// the house had to synthesise ~1600 px of mouse drag.  LOOKAT places the eye and
// then hands the direction to the controller the same way the orbit->fly switch
// does, so a screenshot taken after it is the shipped viewer's own render.
window.LOOKAT = function (ex, ey, ez, tx, ty, tz) {
  camera.position.set(ex, ey, ez);
  camera.lookAt(tx, ty, tz);
  flySyncFromCamera();
  return { eye: camera.position.toArray(), yaw: FLY.yaw, pitch: FLY.pitch };
};
function setCamMode(mode) {
  FLY.on = (mode === 'fly');
  if (FLY.on) {
    controls.update();                    // settle orbit's pose, then take it over
    flySyncFromCamera();
    controls.enabled = false; autorotate = false;
  } else {
    const d = new THREE.Vector3(); camera.getWorldDirection(d);
    controls.target.copy(camera.position).addScaledVector(d, 60);
    camera.rotation.z = 0; camera.fov = FLY.fov0; applyHorizon();
    controls.enabled = true; controls.update();
  }
  const sel = document.getElementById('c-cam'); if (sel && sel.value !== mode) sel.value = mode;
}
// THE HERO POSE (Eric, 2026-09-09, PLAN_V4: 'the hero eye has been 1.9 m
// too high for a week'). v115 restored H through OrbitControls, whose polar
// clamp (maxPolarAngle 0.495 pi, there to keep the eye above the sea disc)
// refused the level view and lifted the eye from 4.45 m to 6.34 m, pitched
// 0.9 deg down - every browser review since 2026-09-02 saw that pose. The
// pose is now set directly and NEVER passes through controls.update(): eye
// HERO_POS looking at HERO_TARGET, exactly the orientation v115 intended
// (position + target above, the Blender hero camera), the shift doing the
// composition. Used at startup and by H; window.restoreHero for testing.
function restoreHero() {
  controls.enabled = false; autorotate = false;
  camera.position.copy(HERO_POS);
  controls.target.copy(HERO_TARGET);
  camera.up.set(0, 1, 0);
  camera.lookAt(HERO_TARGET);
  camera.rotation.z = 0;
  camera.aspect = innerWidth / innerHeight;
  camera.fov = FLY.fov0 = heroFov(camera.aspect);
  applyHorizon();
  camera.updateProjectionMatrix();
  FLY.on = true;
  flySyncFromCamera();                  // pitch reads exactly 0 from the level direction
  const sel = document.getElementById('c-cam'); if (sel) sel.value = 'fly';
}
window.restoreHero = restoreHero;
// THE DEFAULT POSE (V207, Eric 2026-09-15: 'I want it this zoomed out by
// default'): the painting's direction, level, same lens and lens shift, but
// the eye a third further back along the hero ray (120 m -> ~160 m from the
// target), so the island spans ~40 % of the frame width at 16:10 instead of
// the painting's 53 %. Deliberately outside the calibrated framing; H and the
// 'hero comparison' review view still return the exact painting pose.
const DEFAULT_PULLBACK = 1.33;
function restoreDefault() {
  restoreHero();
  camera.position.lerpVectors(HERO_TARGET, HERO_POS, DEFAULT_PULLBACK);
  controls.target.copy(HERO_TARGET);
}
window.restoreDefault = restoreDefault;
// V237 - TOUCH. A touch-first device (no hover, coarse pointer) or the first
// touch pointer turns on body.touch: the thumb stick appears and the WASD
// hint goes. The look drag is bound to ONE pointer id, so the stick's finger
// and a second finger never steer it.
const MOVE = { f: 0, r: 0 };                 // the stick: forward / right in [-1, 1]
function enableTouch() {
  if (document.body.classList.contains('touch')) return;
  document.body.classList.add('touch');
  moveHint.setAttribute('aria-label', 'Drag to look around. Use the stick to move.');
  if (LOOK.on) setLooking(false);
}
// the drag: a finger's way to look (with the stick); a mouse never drags (V246)
renderer.domElement.addEventListener('pointerdown', (e) => {
  if (!FLY.on || e.pointerType !== 'touch') return;
  enableTouch();
  if (FLY.drag) return;                      // one finger looks; another is ignored
  FLY.drag = true; FLY.dragId = e.pointerId; FLY.lastX = e.clientX; FLY.lastY = e.clientY;
  try { renderer.domElement.setPointerCapture(e.pointerId); } catch (_) {}
});
addEventListener('pointermove', (e) => {
  if (!FLY.on || !FLY.drag || e.pointerId !== FLY.dragId) return;
  const sens = 0.0030;                       // a thumb travels less than a mouse
  FLY.lookX -= (e.clientX - FLY.lastX) * sens;
  FLY.lookY -= (e.clientY - FLY.lastY) * sens;
  FLY.lastX = e.clientX; FLY.lastY = e.clientY;
});
addEventListener('pointerup', (e) => { if (e.pointerId === FLY.dragId) FLY.drag = false; });
addEventListener('pointercancel', (e) => { if (e.pointerId === FLY.dragId) FLY.drag = false; });
// the mouse: its motion turns the view, its place in the frame drives the edge turn
addEventListener('mousemove', (e) => {
  if (document.body.classList.contains('touch')) return;      // a tap's synthetic mouse events
  LOOK.mx = e.clientX / innerWidth; LOOK.my = e.clientY / innerHeight;
  if (!LOOK.inside) { LOOK.inside = true; return; }          // the first event after entering the frame carries no honest delta
  if (Math.abs(LOOK.mx - 0.5) * 2 < 1 - LOOK_EDGE_X && Math.abs(LOOK.my - 0.5) * 2 < 1 - LOOK_EDGE_Y) LOOK.armed = true;
  if (!LOOK.on || !FLY.on) return;
  FLY.lookX -= THREE.MathUtils.clamp(e.movementX, -200, 200) * LOOK_GAIN;   // (a clamp against a jump the OS reports on re-entry; a flick is under 200 px an event)
  FLY.lookY -= THREE.MathUtils.clamp(e.movementY, -200, 200) * LOOK_GAIN;
});
document.documentElement.addEventListener('mouseleave', () => { LOOK.inside = false; });
// LOOKING or PAUSED. Esc (the key, or the hint by the WASD keys) toggles;
// a click in the world resumes. Nothing here changes the view direction.
function setLooking(on) {
  LOOK.on = on;
  FLY.lookX = FLY.lookY = 0;
  document.body.classList.toggle('free', !on);
  flashHint();
}
renderer.domElement.addEventListener('click', () => {
  if (!FLY.on || LOOK.on || document.body.classList.contains('touch')) return;
  setLooking(true);
});
const lookHint = document.getElementById('lookhint');
lookHint.addEventListener('click', () => { setLooking(!LOOK.on); lookHint.blur(); });
document.body.classList.toggle('free', true);   // looking starts when the world is in view (the ready block)
window.LOOK = LOOK; window.setLooking = setLooking;
// the thumb stick: its own pointer, captured; magnitude past a 12 % dead
// zone is the speed, direction is forward/right in the camera's frame
const stickEl = document.getElementById('stick'), stickKnob = stickEl.querySelector('.knob');
const STICK = { id: -1, cx: 0, cy: 0, R: 40 };
function stickMove(e) {
  const dx = e.clientX - STICK.cx, dy = e.clientY - STICK.cy, d = Math.hypot(dx, dy);
  const m = Math.min(d / STICK.R, 1), ux = d > 0 ? dx / d : 0, uy = d > 0 ? dy / d : 0;
  const a = m < 0.12 ? 0 : (m - 0.12) / 0.88;
  MOVE.r = ux * a; MOVE.f = -uy * a;
  stickKnob.style.transform = `translate(${(ux * m * STICK.R).toFixed(1)}px, ${(uy * m * STICK.R).toFixed(1)}px)`;
}
function stickEnd(e) {
  if (e && e.pointerId !== STICK.id) return;
  STICK.id = -1; MOVE.f = MOVE.r = 0; stickEl.classList.remove('live'); stickKnob.style.transform = '';
}
stickEl.addEventListener('pointerdown', (e) => {
  if (STICK.id >= 0) return;
  enableTouch();
  const b = stickEl.getBoundingClientRect(); STICK.cx = b.left + b.width / 2; STICK.cy = b.top + b.height / 2;
  STICK.id = e.pointerId; stickEl.classList.add('live');
  try { stickEl.setPointerCapture(e.pointerId); } catch (_) {}
  stickMove(e); e.preventDefault();
});
stickEl.addEventListener('pointermove', (e) => { if (e.pointerId === STICK.id) stickMove(e); });
stickEl.addEventListener('pointerup', stickEnd);
stickEl.addEventListener('pointercancel', stickEnd);
stickEl.addEventListener('lostpointercapture', stickEnd);
if (TOUCH) enableTouch();
window.MOVE = MOVE;                          // the harness drives the stick's numbers directly
function fly(dt) {
  lookEdge(dt);
  const k = 1 - Math.exp(-dt * 14);                       // look smoothing
  const ax = FLY.lookX * k, ay = FLY.lookY * k;
  FLY.lookX -= ax; FLY.lookY -= ay;
  FLY.yaw += ax;
  FLY.pitch = THREE.MathUtils.clamp(FLY.pitch + ay, -1.25, 1.25);
  const yaw = FLY.yaw, pitch = FLY.pitch;
  const cp = Math.cos(pitch);
  const fwd = _fwd.set(-Math.sin(yaw) * cp, Math.sin(pitch), -Math.cos(yaw) * cp);
  const rgt = _rgt.set(Math.cos(yaw), 0, -Math.sin(yaw));
  const want = _mv.set(0, 0, 0);
  if (KEYS.w) want.add(fwd);  if (KEYS.s) want.sub(fwd);
  if (KEYS.d) want.add(rgt);  if (KEYS.a) want.sub(rgt);
  if (MOVE.f || MOVE.r) want.addScaledVector(fwd, MOVE.f).addScaledVector(rgt, MOVE.r);   // V237: the stick, analog
  const moving = want.lengthSq() > 0;
  const vmax = 18;                                        // V219: 'a little too slow' at 12
  if (moving) { const L = want.length(); want.multiplyScalar(vmax * Math.min(L, 1) / L); }
  // Gentle pickup, short controlled release: no drifting past a detail.
  const acc = moving ? 4.0 : 6.0;
  if (moving) {
    moveHintSeconds += dt;
    if (moveHintSeconds >= .65) moveHint.classList.add('used');
  }
  FLY.vel.lerp(want, 1 - Math.exp(-dt * acc));
  if (!moving && FLY.vel.lengthSq() < .0001) FLY.vel.set(0, 0, 0);
  camera.position.addScaledVector(FLY.vel, dt);
  if (camera.position.y < 1.2) { camera.position.y = 1.2; if (FLY.vel.y < 0) FLY.vel.y = 0; }
  const rx = camera.position.x - 14.5, rz = camera.position.z, rr = Math.hypot(rx, rz);
  if (rr > 300) { camera.position.x = 14.5 + rx * 300 / rr; camera.position.z = rz * 300 / rr; }
  FLY.roll = 0;
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
  collideCamera(FLY.vel);
  controls.target.copy(camera.position).addScaledVector(fwd, 60);   // coherent for a mode switch
}

// ---- COLLISION ('you should never be able to go into the ground or into
// any structures'): a height grid built from the island's ground vertices
// keeps the eye above the meadow; the house is an oriented box, the tree
// trunk a cylinder, bench and line small boxes. Applied every frame in both
// camera modes.
const COLLIDE = { grid: null, boxes: [], trunk: null, eye: 1.8, pad: 1.3 };
window.COLLIDE = COLLIDE; window.groundY = (x, z) => groundY(x, z);   // inspectable from the console
// the exporter ray-casts the bare island and ships the grid (island_height.json)
COLLIDE.grid = GRIDS.island;
function buildGroundGrid(o) {
  const N = 112, pos = o.geometry.attributes.position; o.updateWorldMatrix(true, false);
  const v = new THREE.Vector3(); const bb = new THREE.Box3().setFromObject(o);
  const g = { N, x0: bb.min.x, z0: bb.min.z, cw: (bb.max.x - bb.min.x) / N, ch: (bb.max.z - bb.min.z) / N,
              h: new Float32Array(N * N).fill(-1e9) };
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld);
    const cx = Math.min(N - 1, Math.max(0, Math.floor((v.x - g.x0) / g.cw)));
    const cz = Math.min(N - 1, Math.max(0, Math.floor((v.z - g.z0) / g.ch)));
    const k = cz * N + cx; if (v.y > g.h[k]) g.h[k] = v.y;
  }
  // fill empty cells from neighbours (a few passes), else water level
  for (let pass = 0; pass < 6; pass++) {
    const src = g.h.slice();
    for (let z = 0; z < N; z++) for (let x = 0; x < N; x++) {
      const k = z * N + x; if (src[k] > -1e8) continue;
      let best = -1e9;
      for (const [dx, dz] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const xx = x + dx, zz = z + dz; if (xx < 0 || zz < 0 || xx >= N || zz >= N) continue;
        const s2 = src[zz * N + xx]; if (s2 > best) best = s2;
      }
      if (best > -1e8) g.h[k] = best;
    }
  }
  for (let k = 0; k < N * N; k++) if (g.h[k] < -1e8) g.h[k] = 0;
  COLLIDE.grid = g;
}
function groundY(x, z) {
  const g = COLLIDE.grid; if (!g) return 0;
  const fx = (x - g.x0) / g.cw - 0.5, fz = (z - g.z0) / g.ch - 0.5;
  if (fx < -1 || fz < -1 || fx > g.N || fz > g.N) return 0;
  const x0 = Math.min(g.N - 2, Math.max(0, Math.floor(fx))), z0 = Math.min(g.N - 2, Math.max(0, Math.floor(fz)));
  const tx = Math.min(1, Math.max(0, fx - x0)), tz = Math.min(1, Math.max(0, fz - z0));
  const h = g.h, N = g.N;
  const a = h[z0 * N + x0] * (1 - tx) + h[z0 * N + x0 + 1] * tx;
  const b = h[(z0 + 1) * N + x0] * (1 - tx) + h[(z0 + 1) * N + x0 + 1] * tx;
  return a * (1 - tz) + b * tz;
}
const _cl = new THREE.Vector3(), _cm = new THREE.Matrix4();
function registerBox(o, pad) {
  o.updateWorldMatrix(true, false); o.geometry.computeBoundingBox();
  const sc = new THREE.Vector3(); o.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), sc);
  const bb = o.geometry.boundingBox.clone();
  bb.min.x -= pad / sc.x; bb.max.x += pad / sc.x; bb.min.y -= pad / sc.y; bb.max.y += pad / sc.y; bb.min.z -= pad / sc.z; bb.max.z += pad / sc.z;
  COLLIDE.boxes.push({ mat: o.matrixWorld.clone(), inv: o.matrixWorld.clone().invert(), bb });
}
function collideCamera(vel) {
  const p = camera.position;
  const minY = Math.max(1.2, groundY(p.x, p.z) + COLLIDE.eye);
  if (p.y < minY) { p.y = minY; if (vel && vel.y < 0) vel.y = 0; }
  for (const b of COLLIDE.boxes) {
    _cl.copy(p).applyMatrix4(b.inv);
    if (!b.bb.containsPoint(_cl)) continue;
    // push out through the nearest face in the box's own frame
    const d = [_cl.x - b.bb.min.x, b.bb.max.x - _cl.x, _cl.y - b.bb.min.y, b.bb.max.y - _cl.y, _cl.z - b.bb.min.z, b.bb.max.z - _cl.z];
    let k = 0; for (let i = 1; i < 6; i++) if (d[i] < d[k]) k = i;
    if (k === 0) _cl.x = b.bb.min.x; else if (k === 1) _cl.x = b.bb.max.x; else if (k === 2) _cl.y = b.bb.min.y;
    else if (k === 3) _cl.y = b.bb.max.y; else if (k === 4) _cl.z = b.bb.min.z; else _cl.z = b.bb.max.z;
    p.copy(_cl.applyMatrix4(b.mat));
    if (vel) vel.multiplyScalar(0.2);
  }
  const t = COLLIDE.trunk;
  if (t && p.y < t.top) {
    const dx = p.x - t.x, dz = p.z - t.z, r = Math.hypot(dx, dz);
    if (r < t.r) { const s = t.r / Math.max(r, 1e-4); p.x = t.x + dx * s; p.z = t.z + dz * s; if (vel) vel.multiplyScalar(0.2); }
  }
}
const clouds = [];
const worldMeshes = [];
let seaMesh = null;      // the Reflector plane - its level breathes (ebb)
const UP = new THREE.Vector3(0, 1, 0);

// ======================================================================
// PHYSICS. Nothing here is a sine wave: one stochastic wind field drives
// three real dynamical systems, all integrated every frame -
//   * the laundry: XPBD cloth (particles, distance/shear/bend
//     constraints, gravity, aerodynamic drag, pinned to the rope) on a
//     coarse proxy grid per garment; the dense Meshy vertices are skinned
//     to the proxy (the Meshy atlas splits the mesh into 468 UV islands,
//     so its own edges cannot be the cloth topology)
//   * the tree: a reduced modal model - one trunk spring-damper + six
//     branch spring-dampers with different stiffness, driven by the wind
//     drag at crown height and coupled to the trunk's acceleration
//   * the meadow: a damped-oscillator field on a 128x64 grid over the
//     island (each cell = the blades there: inertia, spring-back,
//     overshoot), driven by the same wind, uploaded as a texture the blade
//     and petal shaders sample.
// The wind itself: mean speed as an Ornstein-Uhlenbeck process (it picks
// up and dies down), turbulence as advected multi-octave noise (Taylor's
// frozen-turbulence hypothesis: eddies ride downwind at ~0.85 U), a log-
// like height profile, and a small yaw jitter. CPU-side; the shaders only
// receive the results.
// ======================================================================
const WIND = { t: { value: 0 }, on: true, spd: { value: 1.8 } };
// meadow height (three y) - the blade wind ramp is measured from here so
// the tips, not the roots, carry the motion. Logged by the exporter.
const ISLAND_TOP = flattenedHeight(2.45,TERRAIN_PROFILE);

function whash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function wnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  let fx = x - ix, fy = y - iy;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
  const a = whash(ix, iy), b = whash(ix + 1, iy), c = whash(ix, iy + 1), d = whash(ix + 1, iy + 1);
  return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
}
const toHalf = THREE.DataUtils.toHalfFloat;
function gaussian() { let u = 0, v = 0; while (u === 0) u = Math.random(); while (v === 0) v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); }

const Wind = {
  dir: new THREE.Vector2(0.92, 0.39).normalize(),   // mostly screen-right, a little toward the hero camera
  mean: 1.8,        // target mean speed (slider), m/s - a slight breeze by default
  U: 1.8,           // instantaneous mean speed (OU process)
  adv: 0.0,         // advected distance of the turbulence field, m
  step(dt) {
    // Ornstein-Uhlenbeck around the slider value: gusts build and fade
    // over ~4 s instead of the field being stationary
    const theta = 0.18, sigma = 0.42 * Math.sqrt(Math.max(this.mean, 0.3) / 3);
    this.U += theta * (this.mean - this.U) * dt + sigma * Math.sqrt(dt) * gaussian();
    this.U = Math.max(0.0, Math.min(this.U, this.mean * 1.6 + 0.5));
    this.adv += this.U * 0.85 * dt;
    WIND.spd.value = this.U;
  },
  // wind velocity (x,z) at a world point. Two turbulence octaves ride
  // downwind; large eddies (~25 m) are stretched along the wind.
  at(x, y, z, out) {
    const d = this.dir;
    const p = x * d.x + z * d.y - this.adv;      // along-wind, advected
    const q = -x * d.y + z * d.x;                 // across-wind
    const g1 = wnoise(p * 0.040, q * 0.10);
    const g2 = wnoise(p * 0.17 + 7.3, q * 0.24 - 3.1);
    // gentle: linear in the large eddies (g1^2 made sharp, spiky fronts)
    const gust = 0.45 + 1.00 * g1 + 0.35 * (g2 - 0.5);
    const hprof = 0.55 + 0.45 * Math.min(Math.max((y - ISLAND_TOP + 0.4) / 5.0, 0), 1);
    const speed = this.U * gust * hprof;
    const yaw = (g2 - 0.5) * 0.45;
    const c = Math.cos(yaw), s = Math.sin(yaw);
    out.x = speed * (d.x * c - d.y * s);
    out.y = speed * (d.x * s + d.y * c);
    return out;
  },
};

// ---- meadow: damped-oscillator field -> texture -----------------------
const Grass = {
  W: 160, H: 80, box: null, tex: null, d: null, v: null, w0: null, tmp: new THREE.Vector2(),
  uMin: { value: new THREE.Vector2() }, uSize: { value: new THREE.Vector2(1, 1) },
  uTex: { value: null },
  // blade look knobs, live from the console (PHYS.Grass.uLean.value = 4):
  // uLean scales the field's tip lean into world metres of bow (the blade
  // then soft-saturates at its OWN reach, 0.26-0.40 of its height, drawn
  // per blade so neighbours never saturate together), uFlut is the metres
  // of per-blade flutter per m/s of local wind at the tip.
  uLean: { value: 10.0 }, uFlut: { value: 0.030 },
  init(bbox) {
    this.box = bbox;
    const n = this.W * this.H;
    this.d = new Float32Array(n * 2); this.v = new Float32Array(n * 2);
    this.w0 = new Float32Array(n);
    for (let j = 0; j < this.H; j++) for (let i = 0; i < this.W; i++) {
      // natural frequency ~1.15 Hz with a SMOOTH +-8% spatial variation
      // (a per-cell random spread made neighbouring patches oscillate out
      // of phase - the field shimmered like particles instead of rolling)
      this.w0[j * this.W + i] = 2 * Math.PI * (1.15 + 0.09 * (wnoise(i * 0.11, j * 0.13) - 0.5));
    }
    // HALF-FLOAT field: the old RGBA8 encoding quantised the tip lean to
    // 4 mm steps - a 2 cm sway happened in five visible jumps ('8 bit')
    this.data = new Uint16Array(n * 4);
    this.tex = new THREE.DataTexture(this.data, this.W, this.H, THREE.RGBAFormat, THREE.HalfFloatType);
    this.tex.minFilter = this.tex.magFilter = THREE.LinearFilter;
    this.tex.wrapS = this.tex.wrapT = THREE.ClampToEdgeWrapping;
    this.tex.needsUpdate = true;
    this.uTex.value = this.tex;
    this.uMin.value.set(bbox.min.x, bbox.min.z);
    this.uSize.value.set(bbox.max.x - bbox.min.x, bbox.max.z - bbox.min.z);
  },
  step(dt) {
    if (!this.box) return;
    const { W, H, d, v, w0, data, tmp } = this;
    const sx = this.uSize.value.x / W, sz = this.uSize.value.y / H;
    const x0 = this.uMin.value.x, z0 = this.uMin.value.y;
    // Beaufort 2 (~2 m/s) only stirs tips a few cm; gusts to ~7 cm.
    // (Ghost of Tsushima-style field: noise direction+bend, tips move most)
    const zeta = 0.38, ca = 0.7, DMAX = 0.16, KAP = 3.0;    // KAP: neighbour coupling; DMAX: the field's tip-lean cap - 0.24 saturated every cell in gusts (coherent flat streaks); a blade also self-caps at 35 % of its height in the shader
    for (let j = 0; j < H; j++) {
      const z = z0 + (j + 0.5) * sz;
      for (let i = 0; i < W; i++) {
        const k = j * W + i, k2 = k * 2;
        Wind.at(x0 + (i + 0.5) * sx, ISLAND_TOP + 0.4, z, tmp);
        const sp = Math.sqrt(tmp.x * tmp.x + tmp.y * tmp.y);
        // quadratic drag on the blade tips, restoring spring, damping,
        // plus a weak Laplacian coupling to the neighbours - the visual
        // proxy for the coherence of real turbulence: motion rolls across
        // the field as smooth waves instead of flickering per cell
        const ww = w0[k];
        const kl = (i > 0 ? k2 - 2 : k2), kr = (i < W - 1 ? k2 + 2 : k2);
        const ku = (j > 0 ? k2 - 2 * W : k2), kd = (j < H - 1 ? k2 + 2 * W : k2);
        const lapx = d[kl] + d[kr] + d[ku] + d[kd] - 4 * d[k2];
        const lapz = d[kl + 1] + d[kr + 1] + d[ku + 1] + d[kd + 1] - 4 * d[k2 + 1];
        const ax = ca * sp * tmp.x - ww * ww * d[k2] - 2 * zeta * ww * v[k2] + KAP * lapx;
        const az = ca * sp * tmp.y - ww * ww * d[k2 + 1] - 2 * zeta * ww * v[k2 + 1] + KAP * lapz;
        v[k2] += ax * dt; v[k2 + 1] += az * dt;
        d[k2] += v[k2] * dt; d[k2 + 1] += v[k2 + 1] * dt;
        const m = Math.sqrt(d[k2] * d[k2] + d[k2 + 1] * d[k2 + 1]);
        if (m > DMAX) { d[k2] *= DMAX / m; d[k2 + 1] *= DMAX / m; }
        data[k * 4] = toHalf(d[k2]);              // metres, tip lean x
        data[k * 4 + 1] = toHalf(d[k2 + 1]);      // metres, tip lean z
        data[k * 4 + 2] = toHalf(sp);             // local wind speed (flutter)
      }
    }
    this.tex.needsUpdate = true;
  },
};

// ---- connected elastic tree, in world metres -------------------------
const Tree = {
  base:3,height:17,cx:24,cz:3,tmp:new THREE.Vector2(),bbox:null,
  dynamics:createTreeDynamics(),
  uTrunk:{value:new THREE.Vector2()},
  uBranch:{value:Array.from({length:6},()=>new THREE.Vector2())},
  uBase:{value:3},uHeight:{value:17},uFlutter:{value:0},
  uCentre:{value:new THREE.Vector2()},uWidth:{value:12},
  init(bbox){
    if(this.bbox)this.bbox.union(bbox);else this.bbox=bbox.clone();
    bbox=this.bbox;
    this.base=bbox.min.y;this.height=bbox.max.y-bbox.min.y;
    this.cx=(bbox.min.x+bbox.max.x)/2;this.cz=(bbox.min.z+bbox.max.z)/2;
    this.uBase.value=this.base;this.uHeight.value=this.height;
    this.uCentre.value.set(this.cx,this.cz);
    this.uWidth.value=Math.max(bbox.max.x-bbox.min.x,bbox.max.z-bbox.min.z);
    if(COLLIDE.trunk)COLLIDE.trunk.top=this.base+.55*this.height;
  },
  step(dt){
    Wind.at(this.cx,this.base+this.height*.78,this.cz,this.tmp);
    const trunkWind=this.tmp.toArray();this.uFlutter.value=this.tmp.length();
    // Different branch modes see different parts of the same advecting wind
    // field; their natural frequencies create delayed spring-back, not a wave.
    const branchWinds=Array.from({length:6},(_,i)=>{
      const angle=i*2.39996323;
      Wind.at(this.cx+Math.cos(angle)*this.uWidth.value*.30,
        this.base+this.height*(.42+i*.095),
        this.cz+Math.sin(angle)*this.uWidth.value*.30,this.tmp);
      return this.tmp.toArray();
    });
    stepTreeDynamics(this.dynamics,dt,trunkWind,branchWinds);
    this.uTrunk.value.fromArray(this.dynamics.trunk.d);
    this.uBranch.value.forEach((u,i)=>u.fromArray(this.dynamics.branches[i].d));
  },
};

// Each garment is attached to the rope and simulated at a fixed 120 Hz.
const clothWind = new THREE.Vector2();
// V214: the solver runs in cloth-worker.js (16 ms of main-thread JS per frame
// gone); ?syncCloth=1 keeps it on the main thread for A/B checks
const Cloth = createLaundry(THREE, (x,y,z) => {
  Wind.at(x,y,z,clothWind); return [clothWind.x,clothWind.y];
}, new URLSearchParams(location.search).has('syncCloth') ? null
   : { url: new URL('./cloth-worker.js?v=' + BUILD, import.meta.url).href, dir: Wind.dir.toArray(), top: ISLAND_TOP, state: () => [Wind.U, Wind.adv] });

// SUN SHADOWS ON THE PAINTED MEADOW: blades and petals are unlit
// MeshBasic (the painting IS their light), so three's shadow pipeline
// never touches them and the tree/house shadows vanished on the grass.
// They sample the sun's shadow map themselves (same matrix + RGBA depth
// packing three uses) and darken by it in live-sun mode.
// LIVE SHORE: the ground material knows the current sea level, so the damp
// band and the lapping foam line follow the ebb instead of sitting where
// the bake put them (small waves lapping an island: a thin white swash edge
// with broken ends, wet sand a hand's width above it)
const SEA = { level: { value: 0.02 } };
function shorify(material) {
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (sh) => {
    if (prev) prev(sh);
    sh.uniforms.uSea = SEA.level;
    sh.uniforms.uWt2 = WIND.t;
    sh.vertexShader = 'varying vec3 vShoreW;\n' + sh.vertexShader.replace(
      '#include <worldpos_vertex>',
      '#include <worldpos_vertex>\n vShoreW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = `
      uniform float uSea; uniform float uWt2; varying vec3 vShoreW;
      float shHash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float shNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(shHash(i), shHash(i+vec2(1,0)), f.x), mix(shHash(i+vec2(0,1)), shHash(i+vec2(1,1)), f.x), f.y); }
    ` + sh.fragmentShader.replace('#include <map_fragment>', `#include <map_fragment>
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
      }`);
  };
  material.needsUpdate = true;
}
const TREE_VOLUME = {
  centers: {value:treeVolumeData.centers.map(p=>new THREE.Vector3(p[0],p[1]+TERRAIN_PROFILE.offsets.WEB_HM_tree_og,p[2]))},
  radii: {value:treeVolumeData.radii.map(p=>new THREE.Vector3(...p))},
  right: {value:new THREE.Vector3(...treeVolumeData.right)},
  depth: {value:new THREE.Vector3(...treeVolumeData.depth)},
};
// Neutral preview pixels in the generated leaf sheet are keyed in the shader,
// including the depth pass. The oil paint itself stays unchanged.
const LEAF_CUTOUT = `#include <map_fragment>
  float leafChroma = max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))
                   - min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
  diffuseColor.a *= smoothstep(.026,.050,leafChroma);
  // V225: the atlas alpha is coverage (bleedLeafAtlas); mip levels average
  // it down, so far leaves would fall under the .5 test - scale it by the
  // texel footprint of this pixel (1 at the leaf's own scale, x3 by 32 texels)
  float leafFoot = fwidth(vMapUv.x) * 1254.0;
  diffuseColor.a *= clamp(1.0 + 0.6 * log2(max(leafFoot, 1.0)), 1.0, 3.0);`;
// V225 (Eric: 'why from far away is it so light? the tree should be the same
// colour as zoomed in, more rich and dark'): the leaf atlas is an OPAQUE
// painting of leaves on a light grey card (228,228,228 over 64 % of it; the
// cut-out is by chroma in LEAF_CUTOUT). Every mip level averaged the leaves
// with that grey, so at the hero the sampled colour went pale and the brush
// term saturated at its maximum. At load the atlas is rebuilt: alpha from
// chroma, the grey replaced by the leaves' own mean colour, edge texels
// un-mixed from the grey - so a mip texel is leaf colour whatever its level.
function bleedLeafAtlas(tex) {
  if (!tex || !tex.image || tex.userData.bled) return;
  const t0 = performance.now();
  const w = tex.image.width, h = tex.image.height;
  const cvs = document.createElement('canvas'); cvs.width = w; cvs.height = h;
  const ctx = cvs.getContext('2d', { willReadFrequently: true }); ctx.drawImage(tex.image, 0, 0);
  const img = ctx.getImageData(0, 0, w, h), d = img.data, n = w * h;
  const alpha = new Float32Array(n); let sr = 0, sg = 0, sb = 0, cnt = 0;
  for (let i = 0; i < n; i++) {
    const r = d[i * 4], g = d[i * 4 + 1], b = d[i * 4 + 2];
    const ch = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
    const a = Math.min(Math.max((ch - 0.05) / 0.07, 0), 1); const aa = a * a * (3 - 2 * a);
    alpha[i] = aa; if (aa > 0.95) { sr += r; sg += g; sb += b; cnt++; }
  }
  const mr = sr / Math.max(cnt, 1), mg = sg / Math.max(cnt, 1), mb = sb / Math.max(cnt, 1), grey = 228;
  for (let i = 0; i < n; i++) {
    const a = alpha[i], o = i * 4;
    if (a < 0.5) { d[o] = mr; d[o + 1] = mg; d[o + 2] = mb; }
    else if (a < 1) { for (let c = 0; c < 3; c++) d[o + c] = Math.min(255, Math.max(0, (d[o + c] - (1 - a) * grey) / a)); }
    d[o + 3] = Math.round(a * 255);
  }
  ctx.putImageData(img, 0, 0);
  tex.image = cvs; tex.needsUpdate = true; tex.userData.bled = true;
  console.info(`leaf atlas: ${cnt} leaf texels of ${n}, backdrop -> (${mr | 0},${mg | 0},${mb | 0}), ${(performance.now() - t0).toFixed(0)} ms`);
}
const OIL_SUN = VISIBLE_SUN;
// V219 (Eric: the tree 'a bit wider but not as dense'): every fourth leaf,
// by its own seed, collapses away and the rest slide 12 % outward from the
// crown's axis - the same crown, airier and a little broader. Applied in the
// depth pass too, so the shadow agrees. (The asset itself is unchanged.)
// V223 (Eric: 'the tree is looking slightly too dense on the left side...
// look at the original and model the shape a bit more exactly to it, on all
// sides'): the plate's crown, as a keep-probability over the drawn (x, y) of
// a leaf. scripts/crown_mask.py reads the foliage of reference/hero.webp
// relative to the painting's own trunk base (30.6 px/m at the hero
// calibration) and web/tree-crown.json places that box on our trunk base;
// a leaf outside the painted silhouette collapses, inside it the V219 rate
// (76 %) stands. The mask is read at the leaf's drawn position (after the
// V219 spread). Leaves keep their depth, so the crown stays a solid from
// every other direction; only the painting's gaps become see-through.
const CROWN = { mask: { value: null }, box: { value: new THREE.Vector4(0, 0, 1, 1) } };
{ const cb = treeCrownJson;
  CROWN.box.value.set(cb.x0, cb.y0, 1 / (cb.x1 - cb.x0), 1 / (cb.y1 - cb.y0));
  CROWN.mask.value = await new Promise((res, rej) => new THREE.TextureLoader().load('./tree-crown-mask.png?v=' + BUILD, t => {
    t.minFilter = THREE.LinearFilter; t.magFilter = THREE.LinearFilter; t.generateMipmaps = false;
    t.wrapS = THREE.ClampToEdgeWrapping; t.wrapT = THREE.ClampToEdgeWrapping; t.colorSpace = THREE.NoColorSpace; res(t); }, undefined, rej)); }
// V231 (Eric: 'from this angle you can add a bit more branch there... don't
// change the overall shape from the original angle'): the left mass gains
// volume in DEPTH - its leaves and branches spread 35 % more along z about
// the crown centre, ramped in over the trunk's left. The x-y silhouette (the
// hero, the mask) is untouched; from a close low eye the far side of that
// mass projects further left and fills the gap he drew.
const LEAF_SHAPE_DECL = `uniform sampler2D uCrownMask; uniform vec4 uCrownBox; varying float vLightBias;
  vec2 crownSpread(vec2 pxz, vec2 c) {   // c = uTreeC (declared later in these programs)
    vec2 d = pxz - c;
    float leftness = 1.0 - smoothstep(-2.0, 0.5, pxz.x - c.x);   // 1 from 2 m left of the crown axis
    return d * 0.18 + vec2(0.0, d.y * 0.35 * leftness);
  }
`;
// V224: per-vertex 'no leaf within 0.5 m' flag written by markBareTwigs at
// load (the tree model carries twig brooms with no leaves on them; a summer
// tree has none showing). Cut per fragment along the interpolated flag.
const BARK_DECL = 'attribute float _bare; varying float vBare;\n';
// the same silhouette for the bark: a sub-branch rooted in the crown but
// outside the painted mass collapses whole (every vertex of it shares
// _sroot, so no triangle is torn), which takes the bare twigs with it
// (the bark mesh carries _leaf_pivot / _leaf_seed too - pivot = its own
// position, seed 0 - so the choice between the two rules goes by material)
const BARK_SHAPE = `
  {
    vec2 cm = clamp((_sroot.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
    if (_sroot.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.40) transformed = vec3(0.0, -1.0e4, 0.0);
  }
  transformed.xz += crownSpread(position.xz, uTreeC) * smoothstep(uCrownBox.y + 1.0, uCrownBox.y + 4.5, position.y);   // the leaves' spread, ramped in above the trunk`;
const LEAF_SHAPE = `
  {
    vec3 drawn = _leaf_pivot; drawn.xz += crownSpread(drawn.xz, uTreeC);
    vec2 cm = clamp((drawn.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
    // V224: full rate from mask .35 up; the bark is cut below .45, inside
    // that, so the twig brooms at the fringe never show bare (Eric: 'weird
    // random branches that look stripped'); 18 % spread (was 12) reaches
    // the plate's right lobe, 6.8 m from the trunk
    vec4 cmask = texture2D(uCrownMask, cm);
    float crown = smoothstep(0.10, 0.35, cmask.r);
    vLightBias = cmask.g - 0.5;                   // V232: the painted light bias (-.5 .. +.5)
    if (_leaf_seed > 0.76 * crown) transformed = vec3(0.0, -1.0e4, 0.0);
  }
  transformed.xz += crownSpread(_leaf_pivot.xz, uTreeC);`;
const SHADOW = { map: { value: null }, matrix: { value: new THREE.Matrix4() },
                 size: { value: new THREE.Vector2(2048, 2048) }, on: { value: 0.0 } };
// V217: 1 while the water's Reflector is drawing the scene into its 1024^2
// mirror (a texel is ~25 cm at the island there) - blades skip their flutter
const MIRROR = { value: 0 };
// V218: 1 = blade LOD on; window.LOD_OFF = true switches it off for A/B checks
const LOD = { value: 1 };
// V236: the share of blades drawn into the water's mirror (1 = every blade
// the main pass draws). window.MIRROR_KEEP sets it for A/B measurement.
const MIRROR_KEEP = { value: 1 };
const ROOT_Q = { c: { value: new THREE.Vector3() }, h: { value: new THREE.Vector3(1, 1, 1) } };   // V245: the blade table's node transform, for the shader's root
// V236 - LOD BY DRAW RANGE. The blade LOD (V218) collapses a dropped blade in
// the VERTEX shader, so the GPU still transforms every one of the meadow's
// 3.4 M vertices through the wind shader; measured at the hero, drawing 10 %
// of the blades into the mirror cost the same as drawing all of them. The
// loader now writes each chunk's index with its blades in ascending r1 (the
// random the shader tests against `keep`), so the blades a pass keeps are a
// PREFIX of the chunk's index: per pass, per chunk, the draw range ends at
// the last blade with r1 <= keep(nearest point of the chunk). Every blade
// the shader would draw is drawn, every blade skipped would have collapsed
// to a point - the pixels are the same, the vertex work is not.
// window.LOD_RANGE_OFF = true draws the full index again for A/B checks.
const TIER = { on: !Q.has('capture') && Q.get('tier') !== 'full' && !Q.get('dpr'), readyAt: 0, dts: [], lastStep: 0, step: 0, applied: [],
               ladder: [{ dpr: 1.5 }, { dpr: 1.25 }, { dpr: 1.0 }, { mirror: 512 }, { shadow: 2048 }] };
function applyDpr(v) { DPR = v; renderer.setPixelRatio(fitDpr(DPR)); renderer.setSize(innerWidth, innerHeight); sizePost(); }
function tierApply(st) {
  if (st.dpr !== undefined) { if (st.dpr >= DPR) return false; applyDpr(st.dpr); }
  if (st.mirror) { if (!seaMesh) return false; seaMesh.getRenderTarget().setSize(st.mirror, st.mirror); }
  if (st.shadow) window.SHADOW_FORCE = st.shadow;
  TIER.applied.push(st); console.info('tier: ' + JSON.stringify(st) + ' (frame interval median over 30 ms)');
  return true;
}
function tierStep(rawMs, now) {          // called every loop frame once the world is up
  if (rawMs < 200) TIER.dts.push(rawMs); // a tab switch is not a slow frame
  if (TIER.dts.length < 120) return;
  const a = TIER.dts.slice().sort((x, y) => x - y), med = a[a.length >> 1]; TIER.dts.length = 0;
  if (med <= 30 || now - TIER.lastStep < 4000) return;
  while (TIER.step < TIER.ladder.length) { if (tierApply(TIER.ladder[TIER.step++])) { TIER.lastStep = now; break; } }
}
window.TIER = TIER; window.applyDpr = applyDpr;
// V224 (Eric: 'there shouldn't be these weird random branches that look
// stripped'): the tree model carries twig brooms that never had leaves, and
// the crown mask exposes more of them at the fringe. At load, every bark
// vertex of a sub-branch above the crown's foot is tested against the leaves
// the shader will actually draw (the same seed/mask rule, at the same spread):
// no leaf pivot within 0.5 m marks it bare (a 0.25 m occupancy grid), and the
// bark fragment shader cuts along that flag. Trunk and boughs are never marked.
function markBareTwigs(root) {
  let bark = null, leaf = null;
  root.traverse(o => { if (!o.isMesh) return;
    const name = o.material?.name || '';
    if (/IllustratedBark/.test(name) && o.geometry.attributes._sroot) bark = o;
    else if (/IllustratedLeaf/.test(name) && o.geometry.attributes._leaf_pivot) leaf = o; });
  if (!bark || !leaf || !CROWN.mask.value) return;
  const t0 = performance.now();
  const img = CROWN.mask.value.image;
  const cvs = document.createElement('canvas'); cvs.width = img.width; cvs.height = img.height;
  const ctx = cvs.getContext('2d'); ctx.drawImage(img, 0, 0); const px = ctx.getImageData(0, 0, img.width, img.height).data;
  const box = CROWN.box.value, cx = Tree.uCentre.value;
  const clamp01 = v => Math.min(Math.max(v, 0), 1);
  const maskAt = (x, y) => { const u = clamp01((x - box.x) * box.z), v = clamp01((y - box.y) * box.w);
    const ix = Math.min(img.width - 1, Math.floor(u * img.width)), iy = Math.min(img.height - 1, Math.floor((1 - v) * img.height));
    return px[(iy * img.width + ix) * 4] / 255; };
  const smooth = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const spread = (x, z) => { const dx = x - cx.x, dz = z - cx.y, left = 1 - smooth(-2.0, 0.5, x - cx.x); return [dx * 0.18, dz * 0.18 + dz * 0.35 * left]; };   // = crownSpread
  // occupancy: every 0.25 m cell within 0.5 m of a DRAWN leaf pivot
  const res = 0.25, R = 2, x0 = box.x - 1, y0 = box.y - 1, z0 = cx.y - 8;
  const nx = Math.ceil(18 / res), ny = Math.ceil(20 / res), nz = Math.ceil(16 / res);
  const occ = new Uint8Array(nx * ny * nz);
  const P = leaf.geometry.attributes._leaf_pivot, S = leaf.geometry.attributes._leaf_seed;
  for (let i = 0; i < P.count; i += 3) {
    const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
    const sp = spread(x, z), dx = x + sp[0], dz = z + sp[1];             // where LEAF_SHAPE draws it
    if (S.getX(i) > 0.76 * smooth(0.10, 0.35, maskAt(dx, y))) continue;   // the shader collapses this leaf
    const ix = Math.floor((dx - x0) / res), iy = Math.floor((y - y0) / res), iz = Math.floor((dz - z0) / res);
    for (let a = -R; a <= R; a++) for (let b = -R; b <= R; b++) for (let c = -R; c <= R; c++) {
      if (a * a + b * b + c * c > R * R + 1) continue;
      const jx = ix + a, jy = iy + b, jz = iz + c;
      if (jx < 0 || jy < 0 || jz < 0 || jx >= nx || jy >= ny || jz >= nz) continue;
      occ[(jz * ny + jy) * nx + jx] = 1;
    }
  }
  const pos = bark.geometry.attributes.position, sm = bark.geometry.attributes._smeta, n = pos.count;
  const bare = new Float32Array(n); let count = 0;
  for (let i = 0; i < n; i++) {
    if (sm.getZ(i) < 0.5) continue;                       // trunk and boughs stay
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    if (y < box.y + 4.5) continue;
    const sp = spread(x, z), dx = x + sp[0], dz = z + sp[1];             // BARK_SHAPE spreads the branches the same way
    const ix = Math.floor((dx - x0) / res), iy = Math.floor((y - y0) / res), iz = Math.floor((dz - z0) / res);
    const inside = ix >= 0 && iy >= 0 && iz >= 0 && ix < nx && iy < ny && iz < nz;
    if (!inside || !occ[(iz * ny + iy) * nx + ix]) { bare[i] = 1; count++; }
  }
  bark.geometry.setAttribute('_bare', new THREE.BufferAttribute(bare, 1));
  console.info(`bare twigs: ${count} of ${n} bark vertices marked in ${(performance.now() - t0).toFixed(0)} ms`);
  return count;
}
window.markBareTwigs = markBareTwigs; window.CROWN = CROWN;   // dev hooks (re-run after editing the mask)
// V221: the front door step's footprint (world xz centre, the house's local
// x axis in world xz) and half extents; blades rooted inside collapse. Zero
// extents until the GLB is in and the house's frame is known.
const STEP = { c: { value: new THREE.Vector4(0, 0, 1, 0) }, half: { value: new THREE.Vector2(0, 0) } };
// shader side: blades/petals read the meadow field texture, the tree
// reads its modal state - no procedural motion left in GLSL
// The centered rear doorway moves only the last three metres of its tread.
const REAR_ENTRY = {value:rearEntryRoute.points.slice(0,-1).map((p,i)=>new THREE.Vector4(...p,...rearEntryRoute.points[i+1]))};
const WIND_GLSL = `
  varying vec2 vEntryRest;
  varying float vBladeH;      // V213: height fraction along the blade (0 root .. 1 tip)

  uniform mat4 uShMatrix;
  varying vec4 vShCoord;
  uniform float uWt;
  uniform float uMirror;
  uniform float uLod;
  uniform float uMirrorKeep;   // V236: blade share in the mirror pass
  uniform vec4 uStepC;      // V221: step footprint centre.xz, axis.xz
  uniform vec2 uStepHalf;
  uniform sampler2D uGrassTex;
  uniform vec2 uGrassMin, uGrassSize;
  uniform float uGrassLean, uGrassFlut;
  uniform vec2 uTrunk;
  uniform vec2 uBranch[6];
  uniform float uTreeBase, uTreeH, uFlutter, uTreeW;
  uniform vec2 uTreeC;
  const float ISLAND_TOP = ${ISLAND_TOP.toFixed(2)};
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
`;
function windify(material, kind, hasHeight = false, scl = [1, 1, 1], hasPhase = false, hasRoot = false, rootRel = false) {
  const [SX, SY, SZ] = scl.map(v => v.toFixed(4));
  material.onBeforeCompile = (sh) => {
    sh.uniforms.uWt = WIND.t;
    sh.uniforms.uMirror = MIRROR;
    sh.uniforms.uLod = LOD;
    sh.uniforms.uMirrorKeep = MIRROR_KEEP;
    sh.uniforms.uStepC = STEP.c; sh.uniforms.uStepHalf = STEP.half;
    // V215: blades never use their normal (unlit, no shadow cast); forcing
    // the normal path made 3.4 M vertices fetch and transform one for nothing
    if (kind !== 'blade') sh.vertexShader=sh.vertexShader.replace('#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )','#if 1');
    if (kind === 'tree' && hasHeight) {
      sh.vertexShader=LEAF_WIND_GLSL+sh.vertexShader.replace('#include <beginnormal_vertex>',
        '#include <beginnormal_vertex>\n objectNormal=leafMotion()*objectNormal;');
    }

    if (kind === 'tree') {
      sh.vertexShader=BRANCH_WIND_GLSL+sh.vertexShader.replace('#include <defaultnormal_vertex>',
        `objectNormal=trunkRotation(treeAnchor(${hasHeight ? '_leaf_pivot' : 'position'}).y)*branchRotation(_bmeta,.55)*branchRotation(_smeta,.85)*objectNormal;\n#include <defaultnormal_vertex>`);
    }
    if (kind === 'blade' && hasHeight) {
      // the exporter's per-vertex height-above-ground (blade lengths)
      sh.vertexShader = '#define HAS_HEIGHT\nattribute float _height;\n' + sh.vertexShader;
    }
    if (kind === 'petal' && hasHeight) {
      sh.vertexShader = '#define HAS_FLOWER_FLEX\nattribute float _flower_flex;\n' + sh.vertexShader;
    }
    if (kind === 'petal' && hasRoot) {
      sh.vertexShader = '#define HAS_FLOWER_ROOT\nattribute vec3 _flower_root;\n' + sh.vertexShader;
    }
    if (kind === 'blade' && hasPhase) {
      // the exporter's per-BLADE random (constant along one blade)
      sh.vertexShader = '#define HAS_PHASE\nattribute float _phase;\n' + sh.vertexShader;
    }
    if (kind === 'blade' && hasRoot && rootRel) {
      // V234: the repacked meadow - POSITION is relative to the blade's root
      // (int16 over the node's scale), the world root is _root3 (expanded
      // from the blade table at load); _root, as the LOD reads it, is its xz
      // V245: the root ships as the table's own int16 (padded to four), scaled
      // in the shader by the table node's translation and scale - the same
      // metres the CPU expansion used to write as float32 per vertex
      sh.vertexShader = '#define HAS_ROOT\n#define ROOT_REL\nattribute vec4 _root3q;\nuniform vec3 uRootC, uRootH;\n#define _root3 (uRootC + uRootH * _root3q.xyz)\n#define _root (_root3.xz)\n' + sh.vertexShader;
      sh.uniforms.uRootC = ROOT_Q.c; sh.uniforms.uRootH = ROOT_Q.h;
      // the repack ships _height as a (hf, 0) uint16 pair - see optimize_glb.py
      sh.vertexShader = sh.vertexShader.replace('attribute float _height;', 'attribute vec4 _height4;\n#define _height (_height4.x)');
    } else if (kind === 'blade' && hasRoot) {
      // V218: the blade's root (world xz), written by scripts/optimize_glb.py
      sh.vertexShader = '#define HAS_ROOT\nattribute vec2 _root;\n' + sh.vertexShader;
    }
    sh.uniforms.uGrassLean = Grass.uLean; sh.uniforms.uGrassFlut = Grass.uFlut;
    sh.uniforms.uGrassTex = Grass.uTex; sh.uniforms.uGrassMin = Grass.uMin; sh.uniforms.uGrassSize = Grass.uSize;
    sh.uniforms.uTrunk = Tree.uTrunk; sh.uniforms.uBranch = Tree.uBranch;
    sh.uniforms.uTreeBase = Tree.uBase; sh.uniforms.uTreeH = Tree.uHeight; sh.uniforms.uFlutter = Tree.uFlutter;
    sh.uniforms.uTreeC = Tree.uCentre; sh.uniforms.uTreeW = Tree.uWidth;
    sh.uniforms.uShMatrix = SHADOW.matrix; sh.uniforms.uShMap = SHADOW.map;
    sh.uniforms.uShSize = SHADOW.size; sh.uniforms.uShOn = SHADOW.on;
    if (kind !== 'tree') {
      sh.uniforms.uRearEntry = REAR_ENTRY;
      sh.uniforms.uRearEntryBounds = {value:new THREE.Vector4(
        Math.min(...rearEntryRoute.points.map(p=>p[0]))-.6,Math.min(...rearEntryRoute.points.map(p=>p[1]))-.6,
        Math.max(...rearEntryRoute.points.map(p=>p[0]))+.6,Math.max(...rearEntryRoute.points.map(p=>p[1]))+.6)};
      sh.vertexShader = 'uniform vec4 uRearEntry[8];\n' + sh.vertexShader;
      sh.fragmentShader = 'uniform vec4 uRearEntry[8]; uniform vec4 uRearEntryBounds; varying vec2 vEntryRest; varying float vBladeH;\n' + sh.fragmentShader.replace('#include <alphatest_fragment>', `
        // Fixed world corridor removes encroaching plants as complete fragments;
        // the original blade/root positions and wind system remain untouched.
        if(all(greaterThan(vEntryRest,uRearEntryBounds.xy)) && all(lessThan(vEntryRest,uRearEntryBounds.zw))) {
        float entryDistance=1000.0;
        for(int i=0;i<8;i++) {
          vec2 a=uRearEntry[i].xy,b=uRearEntry[i].zw,v=b-a;
          float t=clamp(dot(vEntryRest-a,v)/max(dot(v,v),.00001),0.0,1.0);
          entryDistance=min(entryDistance,length(vEntryRest-(a+t*v)));
        }
        ${kind === 'petal' ? 'if(entryDistance<.46) discard;' : ''}
        }
        ${kind === 'petal' ? `// Generated botanical pigment has a neutral backing; key it in
        // both visible and shadow passes, preserving colored pale petal tips.
        #ifdef USE_MAP
        vec3 flowerPigment=texture2D(map,vMapUv).rgb;
        float flowerChroma=max(max(flowerPigment.r,flowerPigment.g),flowerPigment.b)-min(min(flowerPigment.r,flowerPigment.g),flowerPigment.b);
        diffuseColor.a*=smoothstep(.012,.035,flowerChroma);
        #endif
        // V209: the plate's island is one wash at 120 m - no white specks.
        // Beyond ~35 m the blooms take the distant meadow colour instead of
        // popping out (alpha would cut them at the alphaTest edge).
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.262,.223,.188),smoothstep(35.,70.,length(cameraPosition.xz-vEntryRest)));` : ''}
        #include <alphatest_fragment>`);
      sh.fragmentShader = SHADOW_FRAG + sh.fragmentShader.replace(
        '#include <color_fragment>',
        `#include <color_fragment>\n ${kind==='blade'?`diffuseColor.rgb=sceneMeadowPigment(diffuseColor.rgb,vEntryRest);
         // V213: root-to-tip value gradient, so a blade reads as a blade at
         // 1-2 m instead of a flat shard. Mean 1.0 over the blade, so the
         // sub-pixel average at the hero distance is unchanged.
         diffuseColor.rgb*=mix(.84,1.16,clamp(vBladeH,0.,1.));`:''} diffuseColor.rgb *= sceneTurfLight(meadowShadow());`);
    }
    sh.vertexShader = WIND_GLSL + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        #ifdef ROOT_REL
        transformed += _root3 / vec3(${SX}, ${SY}, ${SZ});   // V234: root-relative position -> the blade's place (local units)
        #endif
        vec3 wpos = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vEntryRest = wpos.xz;
        ${kind === 'tree'
          ? `vec3 anchor=treeAnchor(${hasHeight ? '_leaf_pivot' : 'wpos'});
             ${hasHeight ? 'transformed.xyz = _leaf_pivot + leafMotion()*(wpos-_leaf_pivot);' : ''}
             transformed.xyz=moveTrunk(moveBranch(transformed.xyz),anchor);`
          : `vec4 fld = texture2D(uGrassTex, (wpos.xz - uGrassMin) / uGrassSize);
             vec2 lean = fld.rg;                            // metres, tip
             float spd = fld.b;
             // 'transformed' is LOCAL space and this mesh is scaled ~(38,41,38):
             // a field lean of 0.16 added locally used to smear a blade across
             // SEVEN world metres at max wind. Both paths below work in WORLD
             // metres, cap there, then convert the delta back through the
             // inverse scale. Both plants and blades use world-metre bending.
             ${kind === 'petal'
              ? `// Blooms follow the same gust field and flutter cadence as grass.
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
                 transformed.y -= 0.6 * dot(dspW,dspW) / ${SY};
                 vec2 dsp = dspW / vec2(${SX}, ${SZ});`
              : `// height above the ground in blade lengths, baked by the
                 // exporter into the _HEIGHT attribute - the old world-y ramp
                 // only worked on a flat plateau; on the tapered island blades
                 // on the slopes stood still and the top ones slid at the root
                 #ifdef HAS_HEIGHT
                 // V215: the rear-entry corridor and the foundation ring are
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
                 transformed.y-=hf*.72*.78*compressed/${SY};
                 hf*=1.-.78*compressed;
                 // Shorten only the ring beside the cottage foundation, retaining rooted motion.
                 vec2 homeDelta=wpos.xz-vec2(-1.75014,-4.38657);
                 vec2 homeLocal=vec2(dot(homeDelta,vec2(.6436,-.7654)),dot(homeDelta,vec2(-.7654,-.6436)));
                 vec2 outside=max(abs(homeLocal)-vec2(6.45,4.26),vec2(0.));
                 float foundation=1.-smoothstep(.25,2.4,length(outside));
                 transformed.y-=hf*.72*.43*foundation/${SY};
                 hf*=1.-.43*foundation;
                 #endif
                 vBladeH = hf;
                 float sh = hf * sqrt(hf);                     // bending blade
                 // EVERY STRAND ON ITS OWN (Eric, 2026-09-10: 'the grass moves
                 // like water... each strand should move with the wind, I don't
                 // know how it moves like a unit when it should all move as
                 // grass'). Nothing in here used to differ between neighbouring
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
                 // V218 - BLADE LOD. From the hero eye a blade is a fraction
                 // of a pixel wide and the meadow rasterises 21 triangles per
                 // pixel. Beyond ~45 m keep a distance-dependent share of the
                 // blades, chosen by each blade's own random so the choice is
                 // stable, and widen the survivors about their root so the
                 // meadow's coverage and colour statistics are unchanged. A
                 // dropped blade collapses to a point far below the world -
                 // zero area, no raster cost, no shadow (blades cast none).
                 float lodDist = length(cameraPosition.xz - _root);
                 float keep = mix(1.0, mix(1.0, 0.25, smoothstep(45.0, 110.0, lodDist)), uLod);
                 // V236: in the mirror pass the blades are a fraction of a texel
                 // (a 1024^2 target over the whole frame); the same widening
                 // keeps the coverage with fewer of them
                 if (uMirror > 0.5) keep = min(keep, uMirrorKeep);
                 if (r1 > keep) transformed.xyz = vec3(0.0, -1.0e4, 0.0);
                 // V221 (Eric: 'there shouldn't be grass underneath the front
                 // door step moving around'): a blade rooted under the step's
                 // slab collapses the same way. The box is the slab's
                 // footprint in the house's own frame (STEP, set after load).
                 vec2 sd = _root - uStepC.xy;
                 vec2 sl = vec2(dot(sd, uStepC.zw), dot(sd, vec2(-uStepC.w, uStepC.z)));
                 if (abs(sl.x) < uStepHalf.x && abs(sl.y) < uStepHalf.y) transformed.xyz = vec3(0.0, -1.0e4, 0.0);
                 vec2 fromRoot = (wpos.xz - _root) * (1.0 / keep - 1.0);
                 transformed.x += fromRoot.x / ${SX};
                 transformed.z += fromRoot.y / ${SZ};
                 #endif
                 // A BLADE CANNOT OUTRUN ITS OWN LENGTH ('it stretches too
                 // far... it should have a max length of movement'): the tip
                 // travels at most 50 % of this vertex's height above ground
                 // (world metres), and drops on the TRUE arc, distance to the
                 // root preserved - a gust bows the blade, never smears it.
                 // The cap used to be a hard min() at 0.5*hgt and the raw lean
                 // ran ~10x over it, so EVERY blade clipped to exactly the same
                 // magnitude and only the direction moved: that is the sheet of
                 // water Eric saw. Two changes fix it, and the SECOND is the
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
                 //     meadow in rolling waves - but each blade takes it with
                 //     its own gain AND its own reach.
                 vec2 leanW = lean * sh * uGrassLean * (0.75 + 0.5 * r2);
                 leanW *= inversesqrt(1.0 + dot(leanW, leanW) / (cap * cap));
                 // (2) FLUTTER is the blade's own: own phase, own frequency
                 //     (1.30-2.20 Hz), along and across the wind, a few cm at
                 //     the tip in a breeze and nothing at the root. It is added
                 //     AFTER the lean's knee (inside it, a saturating gust
                 //     annihilated the flutter too) and soft-knees on its own
                 //     at 0.10*hgt, which leaves 0.26+0.14+0.10 = 0.50 of the
                 //     height: the hard clamp below is then never reached
                 //     (measured worst tip travel 0.4746 * height at 8 m/s).
                 vec2 flut = vec2(0.0);
                 if (uMirror < 0.5) {          // V217: sub-texel in the mirror, skipped there
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
                 transformed.y -= (hgt - sqrt(max(hgt * hgt - dot(dspW, dspW), 0.0))) / ${SY};
                 vec2 dsp = dspW / vec2(${SX}, ${SZ});`}
             transformed.x += dsp.x;
             transformed.z += dsp.y;`}
        vShCoord = uShMatrix * vec4((modelMatrix * vec4(transformed, 1.0)).xyz, 1.0);
      }`);
  };
  material.needsUpdate = true;
}

// ---- THE PAINTING vs THE MODEL (Eric, 2026-09-08: 'the house looks busted
// off-axis' - the projected painting's windows ghosted against Meshy's
// recessed windows from every other angle; 'the tree back side is bare
// Meshy olive'). The generated house and tree now ship a Meshy RETEXTURE:
// one consistent painted 360-degree skin that agrees with the geometry.
// The exporter bakes it twice per asset - "flat" (retexture, lit, no
// projection: tex_<key>_flat.jpg) and "painted" (the same + the painting
// projected on the hero-facing side: the GLB texture). The shader mixes
// them by uHero: 1 at the hero pose (the hero view IS the painting), 0 as
// the camera leaves the hero direction (angular cone) or gets close (the
// projection's pixels are only ~2 cm at the hero distance), so every other
// view is the consistent painted model. Tunable from the panel / console.
scene.heroCone = 20;      // S.heroCone: A1, degrees off the hero direction where the painting is gone (A0 = 0.35 A1)
scene.heroNear = 0.45;    // S.heroNear: D1, fraction of the hero distance under which the painting is gone (D0 = 0.5 D1)
scene.heroForce = -1;     // S.heroForce: >= 0 pins uHero to that value (1 = painting, 0 = retexture only)
scene.debugHero = false;  // S.debugHero: log uHero per object once a second
const HERO = { objs: [], logT: 0 };
// r164 map_fragment with the one sample swapped for the blend - derived from
// the vendored chunk itself so the DECODE_VIDEO_TEXTURE lines stay intact
const HERO_MAP_FRAG = THREE.ShaderChunk.map_fragment.replace(
  'texture2D( map, vMapUv )', 'mix( texture2D( uFlat, vMapUv ), texture2D( map, vMapUv ), uHero )');
if (HERO_MAP_FRAG === THREE.ShaderChunk.map_fragment) console.warn('hero blend: map_fragment sample line not found - painting blend inactive');
// the live-sun clone (the mode the viewer opens in) is a Lambert that ALSO
// rides the GLB atlas as emissiveMap at 0.66 - blend that sample too, or
// two thirds of the projected windows come back at every angle; a no-op on
// the basic material, whose shader has no emissivemap_fragment
const HERO_EMISSIVE_FRAG = THREE.ShaderChunk.emissivemap_fragment.replace(
  'texture2D( emissiveMap, vEmissiveMapUv )', 'mix( texture2D( uFlat, vEmissiveMapUv ), texture2D( emissiveMap, vEmissiveMapUv ), uHero )');
if (HERO_EMISSIVE_FRAG === THREE.ShaderChunk.emissivemap_fragment) console.warn('hero blend: emissivemap_fragment sample line not found - live-sun mode keeps the painting');
function heroBlendify(o, key) {
  const material = o.material, painted = material.map;
  // until the flat atlas arrives (or if it 404s) uFlat IS the GLB texture,
  // so mix() is a no-op and the asset shows exactly as before
  o.userData.heroBlend = { uFlat: { value: painted }, uHero: { value: 1 },
                           centre: new THREE.Box3().setFromObject(o).getCenter(new THREE.Vector3()) };
  new THREE.TextureLoader().load('./tex_' + key + '_flat.jpg?v=' + BUILD, (t) => {
    t.flipY = false;                       // glTF UV convention, like the GLB atlas
    t.colorSpace = THREE.SRGBColorSpace;   // decoded on the GPU in r164, same as the map
    t.wrapS = painted.wrapS; t.wrapT = painted.wrapT;
    t.minFilter = painted.minFilter; t.magFilter = painted.magFilter;
    t.anisotropy = painted.anisotropy; t.generateMipmaps = painted.generateMipmaps;
    t.needsUpdate = true;
    o.userData.heroBlend.uFlat.value = t;
  }, undefined, () => console.warn('hero blend: no tex_' + key + '_flat.jpg - one texture, blend inactive for', key, '(expected for the house after the PROJECT_HOUSE=0 export; for the tree run scripts/export_web.sh)'));
  // CHAIN the hook: windify() has already claimed the tree's onBeforeCompile
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (sh) => {
    if (prev) prev(sh);
    sh.uniforms.uFlat = o.userData.heroBlend.uFlat;
    sh.uniforms.uHero = o.userData.heroBlend.uHero;
    sh.fragmentShader = 'uniform sampler2D uFlat;\nuniform float uHero;\n'
      + sh.fragmentShader.replace('#include <map_fragment>', HERO_MAP_FRAG)
                         .replace('#include <emissivemap_fragment>', HERO_EMISSIVE_FRAG);
  };
  material.customProgramCacheKey = () => 'heroblend-' + o.name;   // per object: the wind hook rides along for the tree
  material.needsUpdate = true;
  HERO.objs.push(o);
}
const _hc = new THREE.Vector3(), _hv = new THREE.Vector3();
function updateHeroBlend(now) {
  const A1 = scene.heroCone, A0 = 0.35 * A1, D1 = scene.heroNear, D0 = 0.5 * D1;
  const log = scene.debugHero && now - HERO.logT >= 1000;
  if (log) HERO.logT = now;
  for (const o of HERO.objs) {
    const hb = o.userData.heroBlend;
    if (scene.heroForce >= 0) hb.uHero.value = scene.heroForce;
    else {
      _hc.subVectors(camera.position, hb.centre); _hv.subVectors(HERO_POS, hb.centre);
      const a = THREE.MathUtils.radToDeg(_hc.angleTo(_hv)), d = _hc.length(), dHero = _hv.length();
      hb.uHero.value = (1 - THREE.MathUtils.smoothstep(a, A0, A1)) * THREE.MathUtils.smoothstep(d, D0 * dHero, D1 * dHero);
    }
    if (log) console.log('hero', o.name, 'uHero', hb.uHero.value.toFixed(3));
  }
}
// V215 (2026-09-15) - THE BLADE DIET. The meadow is 3.4 M vertices, drawn
// twice a frame (world + mirror). Two things in its vertex shader were
// rest-pose facts recomputed per vertex per frame: the distance to the eight
// rear-entry segments (the trodden corridor) and the foundation ring beside
// the cottage. Both depend only on the blade's resting xz, so they are folded
// here, once, into the same two places the shader wrote them - the final
// height fraction into _height and the vertical drop into POSITION (local
// units, /scale.y, exactly as the shader did). The blade also shipped NORMAL,
// TEXCOORD_0 and _FLOWER_FLEX it never reads and a float32 colour: 60 bytes a
// vertex; 24 after this. A GLB whose exporter already baked these marks the
// primitive with extras.bladeRestBaked and is left alone.
function bakeBladeRest(o, points, sc) {
  const g = o.geometry, H = g.attributes._height, P = g.attributes.position;
  if (H && !g.userData.bladeRestBaked) {
    const m = o.matrixWorld.elements, n = P.count;
    const segs = [];
    for (let i = 0; i < 8; i++) {           // uRearEntry[8]: unset slots are (0,0)-(0,0), as the shader saw them
      const a = points[i], b = points[i + 1];
      segs.push(a && b ? [a[0], a[1], b[0], b[1]] : [0, 0, 0, 0]);
    }
    const sm = (e0, e1, x) => { const t = Math.min(Math.max((x - e0) / (e1 - e0), 0), 1); return t * t * (3 - 2 * t); };
    const invSY = 1 / sc.y, t0 = performance.now();
    const PA = P.array, HA = H.array;
    for (let i = 0; i < n; i++) {
      const px = PA[i * 3], py = PA[i * 3 + 1], pz = PA[i * 3 + 2];
      const wx = m[0] * px + m[4] * py + m[8] * pz + m[12];
      const wz = m[2] * px + m[6] * py + m[10] * pz + m[14];
      let hf = Math.min(Math.max(HA[i], 0), 1);
      let td = 1000;
      for (const [ax, az, bx, bz] of segs) {
        const vx = bx - ax, vz = bz - az;
        const t = Math.min(Math.max(((wx - ax) * vx + (wz - az) * vz) / Math.max(vx * vx + vz * vz, 1e-5), 0), 1);
        const dx = wx - (ax + t * vx), dz = wz - (az + t * vz);
        td = Math.min(td, Math.hypot(dx, dz));
      }
      const compressed = 1 - sm(0.30, 1.05, td);
      let drop = hf * 0.72 * 0.78 * compressed;
      hf *= 1 - 0.78 * compressed;
      const hdx = wx + 1.75014, hdz = wz + 4.38657;
      const lx = hdx * 0.6436 - hdz * 0.7654, lz = -hdx * 0.7654 - hdz * 0.6436;
      const ox = Math.max(Math.abs(lx) - 6.45, 0), oz = Math.max(Math.abs(lz) - 4.26, 0);
      const foundation = 1 - sm(0.25, 2.4, Math.hypot(ox, oz));
      drop += hf * 0.72 * 0.43 * foundation;
      hf *= 1 - 0.43 * foundation;
      PA[i * 3 + 1] = py - drop * invSY;
      HA[i] = hf;
    }
    P.needsUpdate = true; H.needsUpdate = true;
    g.userData.bladeRestBaked = true;
    console.info(`blades: rest-pose corridor + foundation baked into ${n} verts in ${(performance.now() - t0).toFixed(0)} ms`);
  }
  for (const k of ['normal', 'uv', '_flower_flex']) if (g.attributes[k]) g.deleteAttribute(k);
  const c = g.attributes.color;
  if (c && c.array instanceof Float32Array) {
    const u = new Uint8Array(c.count * c.itemSize);
    for (let k = 0; k < u.length; k++) u[k] = Math.round(Math.min(Math.max(c.array[k], 0), 1) * 255);
    g.setAttribute('color', new THREE.BufferAttribute(u, c.itemSize, true));
  }
}
// V218: scripts/optimize_glb.py sorts the blade index into a 4x4 grid of
// chunks over the island and records the ranges in the primitive extras. Turn
// the one 2.5 M-triangle mesh into up to 16 meshes that share every attribute
// buffer and differ only in their index range and bounds, so the frustum
// culls the meadow behind and beside a close camera. The first mesh keeps
// the original object (material, userData, shadow roles); siblings copy it.
function splitBladeChunks(o) {
  const chunks = o.geometry.userData.bladeChunks;
  const idx = o.geometry.index;
  if (!chunks || chunks.length < 2 || !idx) return [o];
  const g0 = o.geometry, pos = g0.attributes.position, ia = idx.array, v = new THREE.Vector3();
  const geoms = chunks.map(c => {
    const g = new THREE.BufferGeometry();
    for (const [k, a] of Object.entries(g0.attributes)) g.setAttribute(k, a);
    g.setIndex(new THREE.BufferAttribute(ia.subarray(c.start, c.start + c.count), 1));
    // bounds from the vertices actually in this range, in the geometry's
    // own (possibly quantized) space - the extras' bounds are pre-quantization.
    // V234: the repacked meadow's positions are root-relative, so its chunk
    // bounds come from the table (world metres) scaled into the node's space
    const bb = new THREE.Box3();
    if (g0.userData.meadowRepack && c.min && c.max) { bb.min.set(...c.min).divide(o.scale); bb.max.set(...c.max).divide(o.scale); }
    else for (let i = c.start; i < c.start + c.count; i++) bb.expandByPoint(v.fromBufferAttribute(pos, ia[i]));
    g.boundingBox = bb;
    g.boundingSphere = bb.getBoundingSphere(new THREE.Sphere());
    g.userData = g0.userData;
    return g;
  });
  o.geometry = geoms[0];
  g0.setIndex(null); for (const k of Object.keys(g0.attributes)) g0.deleteAttribute(k);   // V244: the chunks own the views; the base buffers go when they upload
  const meshes = [o];
  for (let i = 1; i < geoms.length; i++) {
    const m = new THREE.Mesh(geoms[i], o.material);
    m.name = o.name + '_c' + i; m.userData = o.userData;
    m.castShadow = o.castShadow; m.receiveShadow = o.receiveShadow;
    o.parent.add(m);
    m.position.copy(o.position); m.quaternion.copy(o.quaternion); m.scale.copy(o.scale);
    worldMeshes.push(m); meshes.push(m);
  }
  console.info(`blades: split into ${geoms.length} frustum-culled chunks`);
  return meshes;
}
// Bake a GLB node's transform into its geometry so local IS world (metres)
// and modelMatrix is the identity - what windify's tree branch assumes (it
// adds WORLD-metre offsets to 'transformed'). Shared by the tree's two
// objects, WEB_HM_tree_og (trunk + core) and WEB_HM_tree_og_cards, so both
// read the same Tree uniforms in the same space. Returns the world bbox.
function bakeNodeTransform(o) {
  const t = performance.now(); const bb = bakeWorldTransform(o);
  if (DEV) (T_LOAD.bake = T_LOAD.bake || []).push([o.name, Math.round(performance.now() - t)]);
  return bb;
}
// (the house's dark interior core is part of the asset now - HM_home_core,
// built by blender/scripts/import_generated.py and shipped in the GLB - so
// the window recesses read as dark rooms in every renderer, not just here)

installLoadGuards(renderer);

// V216: the shipped GLB is meshopt-compressed with quantized normals/uv/colour
// (scripts/optimize_glb.sh); the Draco loader stays for an unoptimised export
// V241 - THE LOAD NEVER BLOCKS THE PAGE. The door's ring (and the parent
// page's timers - a same-origin iframe shares the main thread) stalled for
// 3-4 s at 82 %: meshopt decoded 60 MB of streams on the main thread and
// the meadow expansion ran 425 k blades in one synchronous loop. Meshopt
// now decodes on a worker pool (the loader's async path) and the expansion
// yields every 65 k blades and every four chunks, reporting its fraction.
if (!Q.has('nomw')) MeshoptDecoder.useWorkers(Math.min(4, Math.max(2, (navigator.hardwareConcurrency || 4) - 1)));   // ?nomw=1: decode on the main thread (A/B)
// a macrotask boundary (MessageChannel: no 4 ms clamp, no forced render -
// scheduler.yield() waits for a frame and cost 60 ms a call here); the
// loops below take it every ~80 ms of work, enough for a ring at 8 Hz
const yieldCh = new MessageChannel(); let yieldRes = null; yieldCh.port1.onmessage = () => { const r = yieldRes; yieldRes = null; if (r) r(); };
const yieldNow = () => new Promise((r) => { yieldRes = r; yieldCh.port2.postMessage(0); });
let lastYield = 0;
const maybeYield = async (progress) => { const now = performance.now(); if (now - lastYield < 80) return; lastYield = now; if (progress) tellParent(progress); await yieldNow(); };
const T_LOAD = { t0: performance.now() };
if (DEV) {   // where the parse goes: first call / last resolve of the two decoders and of the image decode
  const wrap = (obj, key, tag) => { const orig = obj[key]; if (!orig) return; obj[key] = function (...a) { const t = performance.now(); if (!T_LOAD[tag + 'First']) T_LOAD[tag + 'First'] = t; T_LOAD[tag + 'N'] = (T_LOAD[tag + 'N'] || 0) + 1; const r = orig.apply(this, a); return r && r.then ? r.then((v) => { T_LOAD[tag + 'Last'] = performance.now(); return v; }) : r; }; };
  wrap(MeshoptDecoder, 'decodeGltfBufferAsync', 'meshopt'); wrap(window, 'createImageBitmap', 'bitmap');
}
const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);   // V242: meshopt only, no Draco
let WORLD_BLOB = DOOR ? await DOOR : null;   // the door's bytes, if it answered (the hello went out at the top of this file)
let worldBuf;
try {
  worldBuf = await worldBytes({ url: GLB_URL, abs: GLB_ABS, blob: WORLD_BLOB }, (loaded, total) => {
    document.getElementById('loading').textContent = `pouring the watercolours… ${Math.round(100 * loaded / total)}%`;
    tellParent({ type: 'progress', loaded, total });
  });
} catch (err) {
  console.error('island_world.glb failed to load', err);
  failPanel('The island could not load.');
  tellParent({ type: 'error', message: 'The island could not load.' });
}
tellParent({ type: 'stage', stage: 'decoding' });
T_LOAD.fetched = performance.now();
if (worldBuf) loader.parse(worldBuf, './', async (gltf) => {
  worldBuf = null; WORLD_BLOB = null;   // the parser holds what it needs; 69 MB less for the GC to walk during the build
  T_LOAD.parsed = performance.now();
  MeshoptDecoder.useWorkers(0);          // V244: the decode is done; the workers' heaps (~100 MB) go with them
  await MODULE_READY;
  // V244 - HOLD NOTHING BUT THE SCENE. `gltf` carries the parser and its cache
  // of every decoded buffer plus the file itself (~200 MB). Every closure
  // made in here (a material's onBeforeCompile lives as long as the
  // material) shares this function's context, so a single reference to
  // `gltf` from any of them kept all of it alive forever. Only `root` is
  // used below; `gltf` is dropped here.
  const root = gltf.scene; gltf = null;
  applyTerrainProfile(root,THREE,TERRAIN_PROFILE);
  // every mesh in traversal order, visited one at a time so the meadow's
  // expansion can yield (three's traverse is synchronous; the list is taken
  // first, so the chunk meshes splitBladeChunks adds are not revisited)
  const visit = async (o) => {
    if (!o.isMesh) return;
    // V242: the props ship int16-quantised, each attribute over its own
    // centre / half-range (primitive extras.quant, scripts/optimize_glb.py);
    // back to float32 metres here, before any shader, bake or CPU read sees
    // them - exactly the floats Draco used to hand over, at finer precision
    const qn = o.geometry.userData && o.geometry.userData.quant;
    if (qn && !o.geometry.userData.dequantized) {
      o.geometry.userData.dequantized = true;
      const tq = performance.now();
      for (const [sem, q] of Object.entries(qn)) {
        const ta = performance.now();
        const name = sem === 'POSITION' ? 'position' : sem === 'TEXCOORD_0' ? 'uv' : sem.startsWith('TEXCOORD_') ? 'uv' + sem.slice(9) : sem.toLowerCase();
        const a = o.geometry.attributes[name]; if (!a) continue;
        const src = a.isInterleavedBufferAttribute ? a.data.array : a.array; if (!(src instanceof Int16Array)) continue;
        const n = a.itemSize, cnt = a.count, out = new Float32Array(cnt * n);
        const stride = a.isInterleavedBufferAttribute ? a.data.stride : n, off = a.isInterleavedBufferAttribute ? a.offset : 0;
        const c = q.c, h = q.h.map(v => v / 32767);
        for (let i = 0, p = off; i < cnt; i++, p += stride) for (let k = 0; k < n; k++) { const v = src[p + k]; out[i * n + k] = c[k] + h[k] * (v < -32767 ? -32767 : v); }
        o.geometry.setAttribute(name, new THREE.BufferAttribute(out, n));
        if (DEV) (T_LOAD.dequantDetail = T_LOAD.dequantDetail || []).push([o.name, sem, +(performance.now() - ta).toFixed(1), a.isInterleavedBufferAttribute ? 'IL' : 'BA']);
      }
      const ts = performance.now();
      // the loader took the bounds from the int16 accessor's min/max (a unit
      // box); with metres back in POSITION they must be recomputed, or the
      // frustum cull drops whole pieces (the windows vanished from one eye)
      o.geometry.boundingBox = null; o.geometry.boundingSphere = null; o.geometry.computeBoundingSphere();
      if (DEV) (T_LOAD.dequant = T_LOAD.dequant || []).push([o.name, Math.round(performance.now() - tq), 'sphere', Math.round(performance.now() - ts)]);
    }
    if (o.name.includes('clothes')) {   // the cloth rig writes float normals back into this array every frame
      const nA = o.geometry.attributes.normal;
      if (nA && !(nA.array instanceof Float32Array)) { const out = new Float32Array(nA.count * 3); for (let i = 0; i < nA.count; i++) for (let k = 0; k < 3; k++) out[i * 3 + k] = nA.getComponent(i, k); o.geometry.setAttribute('normal', new THREE.BufferAttribute(out, 3)); }
    }
    // V227 (Eric: 'move the bench closer to the tree, it's too far'): the
    // export has it 8.8 m from the trunk; Oga's sits 2 m to its left. Moved
    // here, before its collider is registered below. The turf is level
    // between the two spots (1.18 and 1.19 m), so the height stands.
    if (/HM_bench/.test(o.name)) { o.position.set(26.8, o.position.y, -2.3); o.updateWorldMatrix(true, false); }
    const m = o.material;
    const tex = (m && (m.emissiveMap || m.map)) || null;
    if (tex) {
      tex.colorSpace = THREE.SRGBColorSpace;
      // Preserve dedicated joinery detail at an oblique inspection angle.
      o.userData.uniformPlaster = !!m?.name?.startsWith('WEB_HM_home_plaster_');
      if (m?.name?.startsWith('WEB_HM_home_')) {
        tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      }
    }
    // exporter 5.2.40 can write a white placeholder COLOR_0 and the real
    // colour as COLOR_1 (three names it color_1); adopt the real one
    if (o.geometry.attributes.color_1) {
      o.geometry.setAttribute('color', o.geometry.attributes.color_1);
      o.geometry.deleteAttribute('color_1');
    }
    const hasVC = !!o.geometry.attributes.color;
    const isPath = !!m?.name?.startsWith('WEB_path_');
    if (isPath && tex) tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const isCloud = o.name.startsWith('WEBCLOUD');
    // round 7: the card canopy (build_card_tree.py -> 50_export_web.py
    // WEB_HM_tree_og_cards) is decided by OBJECT name, before the material
    // name ('..._cards_mat' contains 'card') can file it under the meadow's
    // petal path: it takes the TREE wind, not the field, and a hard cut
    const isIllustratedBark = !!m?.name?.includes('IllustratedBark');
    const isIllustratedLeaf = !!m?.name?.includes('IllustratedLeaf');
    const isOilTree = !!m?.name?.endsWith('_Oil') && (isIllustratedBark || isIllustratedLeaf);
    const isTreeCards = o.name === 'WEB_HM_tree_og_cards' || isIllustratedLeaf;
    const isPetal = !isTreeCards && (m && m.name && (m.name.includes('petal') || m.name.includes('card')));   // tree pad cards cut out like petals
    if (o.name === 'WEB_water') {
      // DYNAMIC WATER ('watercolor overlay, but there should be
      // reflections - create that dynamically'): a Reflector renders
      // the mirrored scene each frame; its shader is replaced with a
      // watercolor one - the reflection is wobbled by two noise
      // octaves (the water addon's swell + ripple structure), tinted
      // and vertically smeared like Oga's, laid over the painting's
      // water gradient with horizontal streak bands and grain.
      // Radius still MUST exceed the sky band's 2500 (the pano's
      // below-horizon rows carry the video's green far shore).
      const sea = new Reflector(new THREE.CircleGeometry(2620, 72), {
        // Clip exactly at sea level. A normalized bias admits submerged terrain
        // into the reflection by a distance that grows with the camera range,
        // producing a muddy halo around the island when zoomed out.
        clipBias: 0.0,
        textureWidth: MEMORY_TIER ? 512 : 1024, textureHeight: MEMORY_TIER ? 512 : 1024,
        color: 0xffffff,
      });
      // RGBA8 fallback (ported from the Codex pass): the Reflector target
      // is HalfFloatType, unrenderable on a GL without float colour buffers
      { const gl = renderer.getContext();
        if (!gl.getExtension('EXT_color_buffer_float') && !gl.getExtension('EXT_color_buffer_half_float')) sea.getRenderTarget().texture.type = THREE.UnsignedByteType; }
      sea.rotation.x = -Math.PI / 2;
      sea.position.set(14.5, 0.02, 0);
      const rm = sea.material;
      rm.uniforms.uTime = WIND.t;
      Object.assign(rm.uniforms,{uShMatrix:SHADOW.matrix,uShMap:SHADOW.map,uShSize:SHADOW.size,uShOn:SHADOW.on});
      rm.uniforms.uBoatPointCount = { value: 0 };
      rm.uniforms.uBoatPoints = { value: Array.from({length:32}, () => new THREE.Vector2()) };
      rm.uniforms.uBoatCenter = { value: new THREE.Vector2() };
      boatWaterlinePromise.then(data => {
        data.polygon.forEach((p,i) => rm.uniforms.uBoatPoints.value[i].set(...p));
        rm.uniforms.uBoatCenter.value.set(...data.center);
        rm.uniforms.uBoatPointCount.value = data.polygon.length;
      }).catch(error => console.error(error));
      rm.uniforms.uCamF = { value: new THREE.Vector2(0, -1) };   // camera forward in xz, per frame
      rm.uniforms.uVfov = { value: THREE.MathUtils.degToRad(camera.fov) };
      rm.uniforms.uCamPitch = { value: 0 };
      sea.updateMatrixWorld(true);
      rm.uniforms.uSeaWorldInverse = { value: sea.matrixWorld.clone().invert() };
      // push the water a hair back in depth so the beach wins the near-tie
      // along the waterline (no z-fight shimmer as the level breathes)
      rm.polygonOffset = true;
      rm.polygonOffsetFactor = 1.0;
      rm.polygonOffsetUnits = 4.0;
      rm.vertexShader = `
        uniform mat4 uShMatrix; varying vec4 vShCoord;
        uniform mat4 textureMatrix;
        uniform mat4 uSeaWorldInverse;   // the Reflector's textureMatrix expects the sea's LOCAL space
        uniform vec2 uCamF;
        varying vec4 vUvR;
        varying vec3 vWorld;
        varying vec4 vHorizon;           // the mirror image's horizon row: the vanishing point of the level view (V208)
        void main() {
          vUvR = textureMatrix * vec4(position, 1.0);
          vHorizon = textureMatrix * vec4(mat3(uSeaWorldInverse) * vec3(uCamF.x, 0.0, uCamF.y), 0.0);
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          vShCoord=uShMatrix*wp;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }`;
      rm.fragmentShader = `
        ${SHADOW_FRAG}
        ${BOAT_WATER_MASK_GLSL}
        uniform sampler2D tDiffuse;
        uniform mat4 textureMatrix;      // V223: the mirror's projection, for the compressed read
        uniform mat4 uSeaWorldInverse;
        uniform float uTime;
        uniform vec2 uCamF;
        uniform float uVfov;          // camera vertical fov, radians (V208)
        uniform float uCamPitch;      // 0 level .. 1 looking straight down (V208)
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
          // V219 fixed the brush frame in the WORLD so the strokes stay put
          // while the eye moves. V221 (Eric: 'when I look around the
          // glistening on the water is crazy, it moves around like wild'):
          // the frame was world-fixed but its FREQUENCIES were not - the
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
          // V208 - THE PAINTER'S VARIABLE. Measured row by row off the plate
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
          // V225 (Eric: 'some slight movement in the water, very slight, it
          // makes the whole thing feel alive'): a fine, quicker octave - 1 m
          // ripples running down the wind - that wavers the reflection's
          // edges by a few pixels where they are close enough to show
          float n3 = vnoise(vec2(across*0.90, depth*1.60) + vec2(uTime*0.90, uTime*0.25));
          float v1 = VIS(4.5, depthPx), v2 = VIS(1.1, depthPx), v3 = VIS(0.6, depthPx);
          // MOVING WAVES ('the water waves should move as well'): two
          // wind-driven ripple octaves travelling downwind - they shimmer
          // the reflection and lift/darken the surface, strongest near
          // the island, melting toward the horizon
          // V223: the slow octave runs along the wind too (8 m x 2.5 m
          // patches) - as round 3.3 m cells it read as pale discs near the eye
          float r1 = vnoise(vec2(across * 0.12, depth * 0.40) + vec2(uTime * 0.30, 0.0));
          float r2 = vnoise(vWorld.xz * 1.10 - wd * uTime * 0.70 + 7.0);
          float vr1 = VIS(2.5, depthPx), vr2 = VIS(0.9, planePx);
          float nearW = 1.0 - smoothstep(120.0, 700.0, d);
          // amplitudes were 0.09 / 0.045 on a linear value; the same visual
          // swell in sRGB is ~1/2.4 of that
          float ripple = ((r1 - 0.5) * 0.03 * vr1 + (r2 - 0.5) * 0.03 * vr2) * nearW;
          // the reflection's displacement: a 0.3 deg surface slope bends the
          // reflected ray 0.6 deg, ~1 % of the mirror's height. V219 used 3 %
          // in 33 m x 8 m cells - from above that lifted whole cloud rows into
          // the dark water in patches the size of the island.
          vec2 wob = vec2((n1-0.5)*0.005*v1 + (r2-0.5)*0.003*vr2*nearW + (n3-0.5)*0.0035*v3,
                          (n1-0.5)*0.011*v1 + (n2-0.5)*0.005*v2 + (r1-0.5)*0.006*vr1*nearW + (n3-0.5)*0.006*v3);
          // V208 - the painter's compression: Oga's house reflection is ~0.6
          // of the house and the cloud bank's ~0.5. Every point of water
          // shows the sky a little higher up than a mirror would, e' = e(1+6e)
          // in radians, which pulls the whole reflection toward the horizon.
          // V223 (Eric: 'when I rotate up the reflection shoots upward... at
          // some point the whole world stretches down'): V208 wrote that law
          // in mirror-texture ROWS (so it changed with the camera's pitch) and
          // V219 gated it on the pitch (so it switched off as the eye tilted
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
          // V208 - the value law, re-measured: the plate's water is the scene
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
          // are L116-121 under a bank that is L170 in the sky). V221: from
          // well above (an elevated orbit, 6-30 deg) the body colour takes
          // over further - Fresnel is a few percent there, and the bright
          // cloud bank was arriving on the near water at full strength.
          float kAng = mix(0.92, 0.32, smoothstep(0.45, 5.0, ang)) * mix(1.0, 0.55, smoothstep(6.0, 30.0, ang));
          // the plate's cloud reflection is laid down in broken bands (local
          // L contrast 5-6 under the island against a mirror's 2): the
          // roughened patches keep a touch more of the diffused, brighter
          // sky. 10 % - V219's 18 % in bands that re-scaled with the eye
          // was the source of the flipping blobs.
          float k = kAng * (0.88 + 0.10 * paws)
                  * (1.0 - 0.5 * smoothstep(1200.0, 2500.0, d));
          vec3 col = mix(base, refl, k);
          col *= 1.0 + ripple;
          // V208 - THE GLOW. Under the shelf's dark reflection (the first
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
        }`;
      // V217: flag the mirror pass for the blade shader (see MIRROR)
      { const seaRender = sea.onBeforeRender;
        sea.onBeforeRender = function (...a) { MIRROR.value = 1; applyBladeLod(camera, MIRROR_KEEP.value, LOD.value >= 0.5, !!window.LOD_RANGE_OFF); try { seaRender.apply(this, a); } finally { MIRROR.value = 0; applyBladeLod(camera, 1, LOD.value >= 0.5, !!window.LOD_RANGE_OFF); } }; }
      scene.add(sea);
      seaMesh = sea;
      o.visible = false;
      return;
    }
    const mat = new THREE.MeshBasicMaterial({
      map: tex,
      // the card canopy is sprite x per-card tint: the exporter ships the
      // builder's Col as COLOR_0 next to the RGBA atlas, so it is the one
      // textured mesh that also multiplies its vertex colour
      vertexColors: (isTreeCards || isIllustratedBark || isPath) ? hasVC : (hasVC && !tex),
      side: THREE.DoubleSide,
      fog: !isCloud,
    });
    mat.name=m?.name||'';
    // V211: the plate's front door is a deeper tan (#c29d6c) than the
    // ingredient's pale oak; a modest multiply, the grain untouched
    if (m?.name === 'WEB_HM_home_paint_8') mat.color.setRGB(0.86, 0.82, 0.76);
    // V219: the rowboat rides the water (heave, roll, pitch about its own
    // axes); the mooring rope's boat end follows, its pier end stays put
    if (m?.name === 'WEB_HM_shore_paint_0' || m?.name === 'WEB_HM_shore_paint_2') boatify(mat, o, m.name.endsWith('_2'));
    if (!tex && !hasVC && m) {
      mat.color.copy(m.emissive && m.emissive.getHex() ? m.emissive : m.color);
    }
    // Compressed green turf feathers into the meadow through vertex alpha.
    if (m?.name === 'WEB_path_0') {
      mat.transparent = true;
      mat.depthWrite = false;
      mat.forceSinglePass = true;
    }
    if (isCloud) { mat.transparent = true; mat.depthWrite = false; }
    if (isPetal) { mat.alphaTest = 0.5; mat.transparent = true; }
    if (isTreeCards) {
      // hard 1-bit cut like the reference files (AnimeTree: GREATER_THAN
      // 0.5, DITHERED) - opaque pass, depth-written, no sorting
      mat.alphaTest = 0.5; mat.transparent = false;
      if (!hasVC) console.warn('tree cards: no COLOR_0 in the GLB - the per-card tint is missing (re-run scripts/export_web.sh)');
      if (!tex) console.warn('tree cards: no atlas texture in the GLB');
    }
    // Window paint is the interior; sky reflection is sampled from the same
    // cylindrical panorama as the world, using the reflected viewing ray.
    // A continuous world ray spans all panes; muntins and reveals stay matte.
    if (m?.name?.startsWith('WEB_HM_home_window_')) {
      mat.onBeforeCompile = (sh) => {
        sh.uniforms.uWindowSky = WINDOW_SKY;
        sh.uniforms.uVisibleSun=VISIBLE_SUN;sh.uniforms.uVisibleSunOn=VISIBLE_SUN_ON;
        const glazing = windowVariants.materials[m.name] || {reflection:1,blur:1};
        sh.uniforms.uGlazing = {value: new THREE.Vector2(glazing.reflection,glazing.blur)};
        sh.uniforms.uRoomPaint=ROOM_PAINT;
        sh.uniforms.uRoomSettings={value:new THREE.Vector2(glazing.interior||0,glazing.roomVariation||0)};
        sh.uniforms.uBlindOpening={value:glazing.blindOpening||0};
        sh.uniforms.uFrontDaylight={value:glazing.frontDaylight||0};
        sh.uniforms.uRoomSun=OIL_SUN;
        sh.uniforms.uFrontGlazing={value:glazing.frontGlazing||0};
        sh.uniforms.uSideCurtains={value:glazing.sideCurtains||0};
        // V221: a per-window lift of the reflected sky toward a pale daylight
        // (the west gable's pane in the plate is near-white against the dark
        // wall; the panorama behind that glass is the plum shelf)
        sh.uniforms.uGlazingLift={value:glazing.lift||0};
        sh.vertexShader = 'varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;\n' + sh.vertexShader.replace(
          '#include <begin_vertex>', `#include <begin_vertex>
          vGlassWorld = (modelMatrix * vec4(position, 1.0)).xyz;
          vGlassNormal = inverseTransformDirection(normalize(normalMatrix * normal), viewMatrix);
          vGlassUv = uv;`);
        sh.fragmentShader = PAINTED_SUN_GLSL+'uniform sampler2D uWindowSky,uRoomPaint; uniform vec2 uGlazing,uRoomSettings; uniform float uBlindOpening,uFrontDaylight,uFrontGlazing,uSideCurtains,uGlazingLift; uniform vec3 uRoomSun; varying vec3 vGlassWorld; varying vec3 vGlassNormal; varying vec2 vGlassUv;\n' + sh.fragmentShader.replace(
          '#include <opaque_fragment>', `
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
          #include <opaque_fragment>`);
      };
      mat.customProgramCacheKey = () => 'painted-window-glass-v221';
    }
    if (o.userData.uniformPlaster) plasterLighting(mat,THREE,plasterColor,OIL_SUN,SHADOW,SHADOW_FRAG,PLASTER_LIVE);
    const isChimney=!!m?.name?.startsWith('WEB_HM_home_chimney_');
    const isFlashing=!!m?.name?.startsWith('WEB_HM_home_flashing_');
    if(isChimney||isFlashing) chimneyLighting(mat,THREE,OIL_SUN,SHADOW,SHADOW_FRAG,PLASTER_LIVE,isFlashing);
    const isBench = /HM_bench/.test(o.name);
    if(isBench) benchLighting(mat,OIL_SUN,SHADOW,SHADOW_FRAG,PLASTER_LIVE);
    const isGarden=!!m?.name?.startsWith('WEB_HM_home_garden_');
    if(isGarden||isPath) gardenLighting(mat,OIL_SUN,SHADOW,SHADOW_FRAG,PLASTER_LIVE,isPath);
    if(m?.name?.startsWith('WEB_HM_home_garden_37')) {
      o.updateWorldMatrix(true,false);
      const worldToLocal=new THREE.Matrix3().setFromMatrix4(o.matrixWorld).invert();
      sillWind(mat,Grass,WIND.t,worldToLocal);
      const depth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});
      sillWind(depth,Grass,WIND.t,worldToLocal);
      o.customDepthMaterial=depth;
      o.frustumCulled=false; // The small flower tips can bend beyond their rest bounds.
    }
    o.material = mat;
    o.userData.basic = mat;
    o.userData.oilTree = isOilTree;
    o.userData.keepPainted = isGarden || isBench || isChimney || isFlashing || o.userData.uniformPlaster || isPath || (hasVC && !tex) || isPetal || (!isOilTree && (isIllustratedBark || isIllustratedLeaf));
    worldMeshes.push(o);
    // shadow roles (only visible in live-sun mode - MeshBasic ignores
    // light): props cast, the ground and blades receive
    if (castsSceneShadow(o.name,m?.name)) {
      o.castShadow = true;
      o.receiveShadow = true;
      if (/home/.test(o.name)) registerBox(o, COLLIDE.pad);
      else if (/bench|clothes/.test(o.name)) registerBox(o, 0.8);
    } else if (!isCloud) {
      o.receiveShadow = true;
    }
    // Canopy transmission keeps overlapping cards readable while their custom
    // receiver samples the same soft shadow map as the ground.
    if (isOilTree && isIllustratedLeaf) o.receiveShadow = true;
    // physics hookup: blades are the vertex-coloured primitive, petals by
    // material name (both read the meadow field), the tree gets the modal
    // model, the laundry becomes real cloth
    // V234: the repacked meadow (scripts/optimize_glb.py) - WEB_meadow holds
    // every blade vertex relative to its root; WEB_meadow_table (a POINTS
    // primitive, one record per blade) holds root, tint, phase, vertex count
    // and triangle pattern. Expand the table per vertex, generate the index,
    // split into the spatial chunks; the blade shader runs in ROOT_REL mode.
    if (o.name === 'WEB_meadow' || o.parent?.name === 'WEB_meadow') {
      const table = root.getObjectByName('WEB_meadow_table');
      const tg = table && (table.geometry || table.children[0]?.geometry);
      if (!tg) { console.warn('meadow repack: no WEB_meadow_table'); return; }
      const g = o.geometry, ex = g.userData || {};   // three puts primitive extras on the geometry
      tellParent({ type: 'stage', stage: 'expanding' });
      const patterns = ex.patterns || [];
      const T = { root: tg.attributes.position, col: tg.attributes.color || null, ph: tg.attributes._phase, cnt: tg.attributes._count, pat: tg.attributes._pattern };
      const hasVertexColour = !!g.attributes.color;                 // V234 final layout: the gradient ships per vertex
      const nb = T.root.count, nv = g.attributes.position.count;
      const t0 = performance.now();
      // roots ship as int16 over the table node's box: world = matrixWorld * normalized
      table.updateWorldMatrix(true, false); const TM = (table.geometry ? table : table.children[0]).matrixWorld; const rv = new THREE.Vector3();
      // V245 - THE MEADOW ON THE GPU AT ITS OWN PRECISION. Roots stay the
      // table's int16 (padded to four shorts; the shader scales them by the
      // table node's transform), and the index is uint16 per sub-chunk: each
      // file chunk (a 4 m cell run of blades) is cut into runs of at most
      // 65 535 vertices, every sub-chunk views the shared vertex streams at
      // its own element offset and owns a small local index. 39 + 30 MB of
      // float32 roots and uint32 indices became 27 + 15; no float32 copy is
      // made at load. The draw-range LOD (V236) works per sub-chunk as before.
      const rootQ = new Int16Array(nv * 4), color = hasVertexColour ? null : new Uint8Array(nv * 3), phase = new Uint16Array(nv);
      const trisPer = patterns.map(p => p.length / 3);
      let v = 0;
      const vstart = new Uint32Array(nb + 1), bph = new Uint16Array(nb), rootW = new Float32Array(nb * 3);
      for (let b = 0; b < nb; b++) {
        if ((b & 0x3fff) === 0 && b) await maybeYield({ type: 'stage', stage: 'expanding', frac: 0.6 * b / nb });
        // (the table's streams are stride-padded by the compressor, so three
        // hands them over as interleaved attributes: read through getX, never
        // the raw array; getX denormalises, so scale back to the byte / short)
        const qx = Math.round(T.root.getX(b) * 32767), qy = Math.round(T.root.getY(b) * 32767), qz = Math.round(T.root.getZ(b) * 32767);
        rv.set(qx, qy, qz).divideScalar(32767).applyMatrix4(TM); rootW[b * 3] = rv.x; rootW[b * 3 + 1] = rv.y; rootW[b * 3 + 2] = rv.z;
        const c = T.cnt.getX(b);
        const ph = Math.round(T.ph.getX(b) * 65535);
        vstart[b] = v; bph[b] = ph;
        for (let j = 0; j < c; j++) { const q = (v + j) * 4; rootQ[q] = qx; rootQ[q + 1] = qy; rootQ[q + 2] = qz; phase[v + j] = ph; }
        if (color) { const c0 = Math.round(T.col.getX(b) * 255), c1 = Math.round(T.col.getY(b) * 255), c2 = Math.round(T.col.getZ(b) * 255); for (let j = 0; j < c; j++) { color[(v + j) * 3] = c0; color[(v + j) * 3 + 1] = c1; color[(v + j) * 3 + 2] = c2; } }
        v += c;
      }
      vstart[nb] = v;
      if (v !== nv) console.warn('meadow repack: vertex count mismatch', v, nv);
      { const t = new THREE.Vector3(), r = new THREE.Quaternion(), sc = new THREE.Vector3(); TM.decompose(t, r, sc);
        if (Math.abs(r.w) < 0.9999) console.warn('meadow repack: the table node is rotated; roots will be off');
        ROOT_Q.c.value.copy(t); ROOT_Q.h.value.copy(sc); }
      // the vertex streams every sub-chunk will view: the file's (interleaved
      // by the compressor) and the expanded ones
      if (g.attributes._height && !g.attributes._height4) { g.setAttribute('_height4', g.attributes._height); g.deleteAttribute('_height'); }
      const streams = {};
      for (const [k, a] of Object.entries(g.attributes)) streams[k] = a;
      streams._root3q = new THREE.InterleavedBufferAttribute(new THREE.InterleavedBuffer(rootQ, 4), 3, 0, true);
      streams._phase = new THREE.BufferAttribute(phase, 1, true);
      if (color) streams.color = new THREE.BufferAttribute(color, 3, true);
      const view = (a, vA, vB) => {   // the stream from vertex vA, so that local index 0 is vertex vA
        if (a.isInterleavedBufferAttribute) return new THREE.InterleavedBufferAttribute(a.data, a.itemSize, a.offset + vA * a.data.stride, a.normalized);
        return new THREE.BufferAttribute(a.array.subarray(vA * a.itemSize, vB * a.itemSize), a.itemSize, a.normalized);
      };
      // sub-chunks: at most 65 535 vertices (uint16), about four per file chunk
      const tex = tg.userData || {};
      const chunkDefs = (tex.bladeChunks && tex.bladeChunks.length) ? tex.bladeChunks : [{ bladeStart: 0, bladeCount: nb }];
      const chunks = [];
      for (let ci = 0; ci < chunkDefs.length; ci++) {
        const ch = chunkDefs[ci], bEnd = ch.bladeStart + ch.bladeCount;
        // the file chunk's box is the roots' box plus the blade reach: recover the reach
        let rmax = [-1e9, -1e9, -1e9], rmin = [1e9, 1e9, 1e9];
        for (let b = ch.bladeStart; b < bEnd; b++) for (let k = 0; k < 3; k++) { const r = rootW[b * 3 + k]; if (r > rmax[k]) rmax[k] = r; if (r < rmin[k]) rmin[k] = r; }
        const pad = ch.max ? [0, 1, 2].map(k => Math.max(ch.max[k] - rmax[k], rmin[k] - ch.min[k], 0)) : [1, 1, 1];
        const target = Math.ceil(ch.bladeCount / 4);
        let bA = ch.bladeStart;
        while (bA < bEnd) {
          let bB = bA, vc = 0;
          while (bB < bEnd && (bB - bA) < target) { const c = vstart[bB + 1] - vstart[bB]; if (vc + c > 65535) break; vc += c; bB++; }
          if (bB === bA) { bB = bA + 1; }   // (a single blade never exceeds 65 535)
          const n = bB - bA, keys = new Float64Array(n);
          for (let i = 0; i < n; i++) keys[i] = bph[bA + i] * 1048576 + i;   // (phase << 20) | local id: one numeric sort
          keys.sort();
          let ntriC = 0; for (let b = bA; b < bB; b++) ntriC += trisPer[T.pat.getX(b)] || 0;
          const index = new Uint16Array(ntriC * 3), lodR1 = new Float32Array(n), lodEnd = new Uint32Array(n);
          const vA = vstart[bA], vB = vstart[bB]; let k = 0;
          for (let i = 0; i < n; i++) {
            const b = bA + (keys[i] % 1048576), ph = bph[b];
            const pat = patterns[T.pat.getX(b)], v0 = vstart[b] - vA;
            for (let j = 0; j < pat.length; j++) index[k++] = v0 + pat[j];
            lodR1[i] = ph === 65535 ? 0 : Math.fround(ph / 65535);   // fract() of the normalised ushort
            lodEnd[i] = k;
          }
          const min = [0, 1, 2].map(k => { let m = 1e9; for (let b = bA; b < bB; b++) m = Math.min(m, rootW[b * 3 + k]); return m - pad[k]; });
          const max = [0, 1, 2].map(k => { let m = -1e9; for (let b = bA; b < bB; b++) m = Math.max(m, rootW[b * 3 + k]); return m + pad[k]; });
          chunks.push({ vA, vB, index, min, max, lodR1, lodEnd });
          bA = bB;
        }
        await maybeYield({ type: 'stage', stage: 'expanding', frac: 0.6 + 0.4 * (ci + 1) / chunkDefs.length });
      }
      table.removeFromParent(); tg.dispose();           // V240: its streams are expanded; nothing reads it again
      T_LOAD.meadow = performance.now();
      console.info(`meadow repack: ${nb} blades, ${nv} verts, ${patterns.length} patterns, ${chunks.length} sub-chunks (uint16) expanded in ${(performance.now() - t0).toFixed(0)} ms`);
      o.updateWorldMatrix(true, false);
      const sc = new THREE.Vector3(); o.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), sc);
      mat.vertexColors = true; mat.needsUpdate = true;      // the tint comes from the table, not the primitive
      windify(mat, 'blade', true, sc.toArray(), true, true, true);
      // one mesh per sub-chunk: shared streams at an offset, its own index and bounds
      const chunkMeshes = [];
      chunks.forEach((c, i) => {
        const cg = new THREE.BufferGeometry();
        for (const [k, a] of Object.entries(streams)) cg.setAttribute(k, view(a, c.vA, c.vB));
        cg.setIndex(new THREE.BufferAttribute(c.index, 1));
        const bb = new THREE.Box3(); bb.min.set(...c.min).divide(o.scale); bb.max.set(...c.max).divide(o.scale);
        cg.boundingBox = bb; cg.boundingSphere = bb.getBoundingSphere(new THREE.Sphere());
        cg.userData = g.userData;
        let m;
        if (i === 0) { m = o; o.geometry = cg; }
        else { m = new THREE.Mesh(cg, o.material); m.name = o.name + '_c' + i; m.userData = o.userData; m.castShadow = o.castShadow; m.receiveShadow = o.receiveShadow; o.parent.add(m); m.position.copy(o.position); m.quaternion.copy(o.quaternion); m.scale.copy(o.scale); worldMeshes.push(m); }
        chunkMeshes.push(m); BLADE_LOD.push({ mesh: m, c });
      });
      g.dispose();
      console.info(`blades: ${chunkMeshes.length} frustum-culled sub-chunks`);
      o.userData.keepPainted = true;                          // (o.material, userData.basic and worldMeshes were set above)
      o.userData.shadowRole = { material: m?.name, cast: false, receive: true, response: 'meadow' };
      return;
    }
    if (o.name === 'WEB_meadow_table' || o.parent?.name === 'WEB_meadow_table') { o.visible = false; return; }
    // V233 (Eric: 'a weird artifact on the chimney when zoomed out that
    // disappears zoomed in'): the chimney caps (paint_17) and the flashing
    // (flashing_16) are vertex-coloured and untextured too, so they fell in
    // here and swayed in the wind as 0.7 m blades - a 20 cm lean of a cap is
    // a pale slab beside the chimney from 160 m. House pieces never blow.
    const isHousePiece = /^WEB_HM_home_/.test(m?.name || '');
    if (hasVC && !tex && !isPath && !isGarden && !isHousePiece) {
      o.updateWorldMatrix(true, false);
      const sc = new THREE.Vector3();
      o.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), sc);
      bakeBladeRest(o, rearEntryRoute.points, sc);   // V215
      windify(mat, 'blade', !!o.geometry.attributes._height, sc.toArray(),
              !!o.geometry.attributes._phase, !!o.geometry.attributes._root);
      if (!o.geometry.attributes._root) console.warn('meadow: no _root attribute - blade LOD inactive (run scripts/optimize_glb.sh)');
      splitBladeChunks(o);                          // V218
      if (!o.geometry.attributes._phase) console.warn('meadow: no _phase attribute in the GLB -'
        + ' blades fall back to a patch-scale pseudo-random (re-export for per-blade wind)');
    } else if (isPetal) {
      o.updateWorldMatrix(true, false);
      const sc = new THREE.Vector3();
      o.matrixWorld.decompose(new THREE.Vector3(), new THREE.Quaternion(), sc);
      windify(mat, 'petal', !!o.geometry.attributes._flower_flex, sc.toArray(), false, !!o.geometry.attributes._flower_root);
      const petalDepth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:tex,alphaTest:.5,side:THREE.DoubleSide});
      windify(petalDepth,'petal',!!o.geometry.attributes._flower_flex,sc.toArray(),false,!!o.geometry.attributes._flower_root);
      petalDepth.customProgramCacheKey=()=> 'petal-depth-v172';
      o.customDepthMaterial=petalDepth;
      o.castShadow=true;
    }
    else if (o.parent && o.parent.name === 'WEB_island' && tex && !isPetal && !isPath) { shorify(mat); if (!COLLIDE.grid) setTimeout(() => { if (!COLLIDE.grid) buildGroundGrid(o); }, 1500); }
    else if (o.name === 'WEB_HM_tree_og' || isIllustratedBark) {   // the tree's woody body registers its collider
      // WIND SPACE (PLAN_V4: 'the rubbery, over-sized, wrongly-directed
      // sway'): windify's tree branch computes WORLD-metre offsets and adds
      // them to 'transformed', which is LOCAL - under this node's scale
      // ~10.08/8.40/10.08 and 100 deg yaw that was ~10x the amplitude,
      // rotated. Bake the node transform into the geometry (as Cloth.init
      // does) so local IS world and modelMatrix is the identity.
      const bb = bakeNodeTransform(o);
      Tree.init(bb);
      // the collider stands at the trunk ROOT (centroid of the lowest 4 %
      // of the tree), not at the crown's bbox centre: the crown leans
      { const P = o.geometry.attributes.position, yCut = bb.min.y + 0.04 * (bb.max.y - bb.min.y);
        let sx = 0, sz = 0, n = 0;
        for (let i = 0; i < P.count; i++) if (P.getY(i) <= yCut) { sx += P.getX(i); sz += P.getZ(i); n++; }
        COLLIDE.trunk = { x: n ? sx / n : Tree.cx, z: n ? sz / n : Tree.cz, r: 2.2, top: Tree.base + 0.55 * Tree.height };
        console.log(`tree: root (${COLLIDE.trunk.x.toFixed(2)}, ${COLLIDE.trunk.z.toFixed(2)}) from ${n} verts, crown centre (${Tree.cx.toFixed(2)}, ${Tree.cz.toFixed(2)}), ${Tree.height.toFixed(1)} m tall`);
      }
      windify(mat, 'tree');
      const woodDepth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,side:THREE.DoubleSide});
      windify(woodDepth,'tree');
      woodDepth.customProgramCacheKey=()=> 'wood-depth-v166';
      // V224: the bark follows the painted crown too (BARK_SHAPE: sub-branches
      // rooted outside the mask collapse, the same 18 % spread as the leaves)
      // and is cut per fragment where it leaves the mass or carries no leaves
      // (vBare, from markBareTwigs). This is the bark's path - the canopy
      // block below only ever sees the leaf mesh.
      if (isIllustratedBark && o.geometry.attributes._sroot) {
        const chain = (material, fragment) => {
          const prev = material.onBeforeCompile;
          material.onBeforeCompile = sh => { if (prev) prev(sh);
            sh.uniforms.uCrownMask = CROWN.mask; sh.uniforms.uCrownBox = CROWN.box;
            sh.vertexShader = LEAF_SHAPE_DECL + BARK_DECL + 'varying vec3 vBarkWorld;\n' + sh.vertexShader.replace('#include <project_vertex>',
              BARK_SHAPE + '\n vBare = _bare; vBarkWorld = (modelMatrix * vec4(transformed, 1.0)).xyz;\n#include <project_vertex>');
            if (fragment) sh.fragmentShader = LEAF_SHAPE_DECL + 'varying float vBare; varying vec3 vBarkWorld;\n' + sh.fragmentShader.replace('#include <map_fragment>', `
              { vec2 cm = clamp((vBarkWorld.xy - uCrownBox.xy) * uCrownBox.zw, 0.0, 1.0);
                if (vBarkWorld.y > uCrownBox.y + 4.5 && texture2D(uCrownMask, cm).r < 0.45) discard;
                if (vBare > 0.5) discard; }
              #include <map_fragment>`);
          };
        };
        chain(mat, true); chain(woodDepth, false);
        woodDepth.customProgramCacheKey=()=> 'wood-depth-v224';
      }
      o.customDepthMaterial=woodDepth;
    } else if (isTreeCards) {
      // Leaf attributes are already in world metres. Bake the rest mesh into
      // that same frame; each leaf rotates as one shape about its petiole.
      const bb = bakeNodeTransform(o);
      Tree.init(bb);
      windify(mat, 'tree', !!o.geometry.attributes._leaf_pivot);
      if (isOilTree && isIllustratedLeaf) bleedLeafAtlas(tex);
      // live-sun mode clones this material as MeshLambert with emissiveMap =
      // the atlas: three multiplies vColor into the DIFFUSE term only, so
      // the emissive copy would show the untinted sprite. Chain a fragment
      // hook after windify's (as heroBlendify does) that tints the emissive
      // term too; the basic shader has no emissivemap_fragment, so the
      // replace is a no-op there and the hook only matters on the clone.
      const prev = mat.onBeforeCompile;
      mat.onBeforeCompile = (sh) => {
        if (prev) prev(sh);
        if (isOilTree) {
          sh.uniforms.uOilSun = OIL_SUN;
          sh.uniforms.uOilLive = PLASTER_LIVE;
          sh.uniforms.uCanopyC = TREE_VOLUME.centers;
          sh.uniforms.uCanopyR = TREE_VOLUME.radii;
          sh.uniforms.uCanopyRight = TREE_VOLUME.right;
          sh.uniforms.uCanopyDepth = TREE_VOLUME.depth;
          // V217: the canopy's transmission field varies over metres; a leaf is
          // ~10 cm. Evaluate it once per leaf at the petiole in the vertex
          // shader instead of six ellipsoid intersections per fragment.
          // V230: the transmission function on its own, so the FRAGMENT shader
          // can trace each fragment's own path to the sun (the Codex checkpoint
          // did; V217 moved it to the petiole for speed and lost the within-
          // leaf and within-cluster gradation). Extinction back to .78.
          const CANOPY_FN = `uniform vec3 uCanopyC[6]; uniform vec3 uCanopyR[6];
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
            `;
          const CANOPY_GLSL = 'uniform vec3 uOilSun; uniform float uOilLive;\n' + CANOPY_FN;
          const crownShape = o.geometry.attributes._leaf_pivot ? LEAF_SHAPE : '';
          if (crownShape) { sh.uniforms.uCrownMask = CROWN.mask; sh.uniforms.uCrownBox = CROWN.box; }
          const hasSeed = !!o.geometry.attributes._leaf_seed;
          sh.vertexShader = CANOPY_GLSL + (crownShape ? LEAF_SHAPE_DECL : '') + 'varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed;\n' + sh.vertexShader.replace(
            '#include <defaultnormal_vertex>',
            '#include <defaultnormal_vertex>\n vOilNormal = inverseTransformDirection(normalize(transformedNormal), viewMatrix);').replace(
            '#include <project_vertex>',
            `${crownShape}
             vOilPosition = (modelMatrix * vec4(transformed,1.0)).xyz;
             vCanopyVis = canopyTransmission(${o.geometry.attributes._leaf_pivot ? '_leaf_pivot' : 'vOilPosition'}, normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)));
             // V226: which side of the crown this leaf is on, lit (+1) to shade (-1).
             // V228 (Eric: 'the dark side is basically the underside'): the
             // form light comes from the upper right, so the split runs top
             // to underside, not just right to left
             vSunSide = dot(normalize(${o.geometry.attributes._leaf_pivot ? '_leaf_pivot' : 'vOilPosition'} - vec3(uTreeC.x, uTreeBase + 0.72 * uTreeH, uTreeC.y)), normalize(normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive)) + vec3(0.0, 0.8, 0.0)));
             vLeafSeed = ${hasSeed ? '_leaf_seed' : '0.5'};
             #include <project_vertex>`);
          sh.fragmentShader = SHADOW_FRAG + CANOPY_FN + `uniform vec3 uOilSun; uniform float uOilLive; varying vec3 vOilNormal; varying vec3 vOilPosition; varying float vCanopyVis; varying float vSunSide; varying float vLeafSeed; varying float vLightBias;
            ` + sh.fragmentShader.replace('#include <map_fragment>', LEAF_CUTOUT).replace(
            '#include <opaque_fragment>', `
              vec3 sunDir=normalize(mix(vec3(.840,.242,.485),uOilSun,uOilLive));
              // V229 (Eric: 'more texture with the lighting, it looks too
              // two-tone... some bright, some dark, you can tell the light
              // is hitting the leaves... a very dark side and a very light
              // side'). The light is decided PER LEAF, the way a painter lays
              // a stroke - lit or shade - and the crown's form only moves the
              // threshold. A leaf's score: how much it faces the lifted key
              // (its top or its underside), how far out on the shell it sits
              // (canopy transmission), and its own random. On the sun side
              // the threshold is low - most strokes lit, the undersides dark;
              // on the shade side it is high - a few lit flecks over deep
              // green. A per-leaf value jitter keeps neighbours from matching.
              // (V212-V228 blended smooth terms into one lightAmount, and the
              // form term dominated: two tones.)
              vec3 leafKey=normalize(sunDir+vec3(0.,.6,0.));
              float facing=clamp(dot(normalize(vOilNormal),leafKey)*.5+.5,0.,1.);
              // V230 (Eric: 'it still looks very two-tone... see the lighted
              // section at the top, then the lighted section at the bottom...
              // look at the version Codex worked'): the light follows the
              // CLUSTERS. Each fragment traces its own path to the sun through
              // the six lobes fitted to the canopy - a lobe's top is a short
              // path (lit), its underside a long one (dark), and the lobes
              // behind shade the ones in front - so every cluster gets a lit
              // crest and a dark belly, top to bottom, as in the plate. That
              // is the main term of the score now; the crown-wide side is
              // only a mild bias (V226-V229 let it swamp everything).
              float shell=pow(canopyTransmission(vOilPosition,sunDir),.7);
              float form=smoothstep(-0.55,0.65,vSunSide);
              float r1=fract(vLeafSeed*13.37), r2=fract(vLeafSeed*47.11+.31);
              float score=0.45*facing+0.60*shell+0.28*(r1-0.5);
              // the crown's own shadow map (leaf-scale, noisy) moves the
              // threshold instead of dimming the stroke.
              // V231 (Eric: 'more light parts than dark parts, like the
              // original... the same contrast but not as hard lines, it
              // almost looks cel shaded'): lower thresholds (the plate's
              // crown is lit over more than half its area, median L 112)
              // and a transition twice as wide, so a stroke can be half
              // lit and the shell's gradation shows within a leaf
              // V232: the painted bias (crown mask, green channel) moves the
              // threshold - Eric's lighter spots and the top lobe's dark belly
              float thr=mix(0.66,0.33,form)+0.10*(1.0-meadowShadow())-0.6*vLightBias;
              float lit=smoothstep(thr-0.22,thr+0.22,score);
              float brush=clamp(dot(diffuseColor.rgb,vec3(.2126,.7152,.0722))/.21,.70,1.18);
              // three tones (linear). V232 (Eric: 'a little less dark and
              // contrast... show a bit more green, a little less bright on
              // the high end and less dark on the dark end... in the context
              // of the whole island'): the range shortened at both ends and
              // every tone pulled toward the meadow's green
              vec3 shadeCol=vec3(.050,.080,.028);
              vec3 midCol=vec3(.13,.20,.045);
              vec3 litCol=mix(vec3(.38,.50,.08),vec3(.47,.59,.12),form);
              vec3 col=lit<0.5?mix(shadeCol,midCol,lit*2.0):mix(midCol,litCol,(lit-0.5)*2.0);
              col*=0.86+0.28*r2;
              outgoingLight=col*brush;
              #include <opaque_fragment>`);
        }
        sh.fragmentShader = sh.fragmentShader.replace(
          '#include <emissivemap_fragment>',
          '#include <emissivemap_fragment>\n#ifdef USE_COLOR\n  totalEmissiveRadiance *= vColor.rgb;\n#endif');
      };
      if (isOilTree) {
        const depthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:tex,alphaTest:.5,side:THREE.DoubleSide});
        windify(depthMaterial,'tree',!!o.geometry.attributes._leaf_pivot);
        const depthWind=depthMaterial.onBeforeCompile;
        depthMaterial.onBeforeCompile=sh=>{depthWind(sh);
          if(o.geometry.attributes._leaf_pivot){ sh.uniforms.uCrownMask = CROWN.mask; sh.uniforms.uCrownBox = CROWN.box;
            sh.vertexShader=LEAF_SHAPE_DECL+sh.vertexShader.replace('#include <project_vertex>',LEAF_SHAPE+'\n#include <project_vertex>'); }
          sh.fragmentShader=sh.fragmentShader.replace('#include <map_fragment>',LEAF_CUTOUT);};
        depthMaterial.customProgramCacheKey=()=> 'leaf-depth-v223-'+o.name;
        o.customDepthMaterial=depthMaterial;
      }
      mat.customProgramCacheKey = () => 'treecards-' + o.name;
      console.log(`tree cards: ${o.geometry.attributes.position.count} verts, tint ${hasVC ? 'COLOR_0' : 'none'}, canopy ${Tree.height.toFixed(1)} m x ${Tree.uWidth.value.toFixed(1)} m`);
    } else if (o.name.includes('clothes')) {
      Cloth.pending = o;   // V242: the rig (0.5 s on an M3 Max) is built after the door opens; the laundry hangs still until then
    }
    const isMeadow=(hasVC&&!tex&&!isPath&&!isGarden&&!/^WEB_HM_home_/.test(m?.name||''))||isPetal;
    const hasAuthoredLighting=o.userData.uniformPlaster||isChimney||isFlashing||isBench||isGarden||isPath||isTreeCards||isMeadow;
    if(!isCloud&&!hasAuthoredLighting) sceneLighting(mat,OIL_SUN,SHADOW,PLASTER_LIVE,{
      wind:o.name==='WEB_HM_tree_og'||isIllustratedBark,
      turf:o.parent?.name==='WEB_island',
      glass:!!m?.name?.startsWith('WEB_HM_home_window_'),
      roof:/^WEB_HM_home_paint_[12]$/.test(m?.name||''),
      bark:isIllustratedBark,                              // V219: darker away side on the trunk
      soft:o.name.includes('clothes'),                     // V219: 'too much shadow' on the laundry
      trim:m?.name==='WEB_HM_home_paint_39',               // V219: the roof edge's underside goes dark
      houseCentre:new THREE.Vector3(...plasterColor.center),
    });
    o.userData.keepPainted=true;
    o.userData.shadowRole={material:m?.name,cast:o.castShadow,receive:o.receiveShadow,
      response:isCloud?'sky':isTreeCards?'translucent canopy':isMeadow?'meadow':hasAuthoredLighting?'authored sun/fill':'shared sun/fill'};
    // painting <-> retexture blend, AFTER windify so the tree's wind hook is
    // chained, not replaced. Eric (2026-09-09) accepted the ONE-TEXTURE house
    // (PLAN_V4): the exporter now bakes the house without the projection and
    // sweeps tex_HM_home_flat.jpg. The blend stays wired for the house on
    // purpose: it self-gates (a 404 leaves uFlat = the GLB map, mix() a
    // no-op), so the re-exported GLB shows one texture from every angle with
    // no viewer change - while the SHIPPED GLB is still v115's projected bake
    // (PROJECT_HOUSE=1), dropping the blend here would put the painting's
    // windows on the house off-axis, the ghosting Eric rejected on 09-08.
    // Eric (2026-09-10): both assets are ONE texture now - the house since
    // PROJECT_HOUSE=0, the tree since its trunk+core went multi-material (the
    // exporter logs 'PROJECT_TREE ignored'). Nothing writes tex_*_flat.jpg any
    // more, so asking for it only cost two 404s a load. heroBlendify stays
    // below, unused, for the day a single-material projected asset returns.
    void heroBlendify;
    if (isCloud) {
      o.userData.baseQuat = o.quaternion.clone();
      o.userData.baseYaw = Math.atan2(camera.position.x - o.position.x,
                                      camera.position.z - o.position.z);
      clouds.push(o);
    }
  };
  const meshList = []; root.traverse((o) => { if (o.isMesh) meshList.push(o); });
  const slow = [];
  for (const o of meshList) { lastYield = performance.now(); const tv = performance.now(); await visit(o); if (DEV) slow.push([o.name, Math.round(performance.now() - tv)]); }
  if (DEV) T_LOAD.visits = slow.sort((a, b) => b[1] - a[1]).slice(0, 8);
  T_LOAD.visited = performance.now();
  scene.add(root);
  markBareTwigs(root);
  T_LOAD.twigs = performance.now();
  // V221: the step slab (WEB_HM_home_garden_27, 396 triangles) spans kit-local
  // x 1.379..3.079, plan y -1.49..-0.704 (GLB local z 0.704..1.49); its
  // footprint plus a 6 cm margin, in world, for the blade cull
  { const house = root.getObjectByName('WEB_HM_home');
    if (house) {
      house.updateWorldMatrix(true, false);
      const c = house.localToWorld(new THREE.Vector3(2.229, 0, 1.097));
      const ax = new THREE.Vector3(1, 0, 0).transformDirection(house.matrixWorld);
      const ax2 = new THREE.Vector2(ax.x, ax.z).normalize();
      STEP.c.value.set(c.x, c.z, ax2.x, ax2.y);
      STEP.half.value.set(0.85 + 0.06, 0.393 + 0.06);
    } }
  console.info('shadow-audit-v166 '+JSON.stringify(worldMeshes.map(o=>({name:o.name,...o.userData.shadowRole,movingDepth:!!o.customDepthMaterial}))));
  // the meadow field covers the island's footprint
  {
    const isl = root.getObjectByName('WEB_island');
    const bb = new THREE.Box3().setFromObject(isl || root);
    Grass.init(bb);
  }
  window.S = scene; window.CLOUDS = clouds; window.RENDERER = renderer;
  window.CAM = camera; window.CTRL = controls;
  window.PHYS = { Wind, Grass, Tree, Cloth };
  // live sun is the default mode - apply it once the world exists
  $('c-light').dispatchEvent(new Event('change'));
  T_LOAD.halve0 = performance.now();
  if (MEMORY_TIER) halveTextures(scene, EXTRA_TEXTURES, 1024);   // V245: a phone's screen resolves no more; the house's 1024x1536 sheets go to 512x768
  T_LOAD.halve = performance.now();
  const freed = Q.has('nofree') ? 0 : releaseCpuCopies(scene, new Set([(Cloth.mesh || Cloth.pending) && (Cloth.mesh || Cloth.pending).geometry]));   // dev: ?nofree=1 keeps the CPU copies for inspection
  console.info(`memory: ${(freed / 1048576).toFixed(0)} MB of CPU geometry copies released after upload`);
  T_LOAD.release = performance.now();
  // V240: warm the shaders and uploads BEFORE saying ready, so the door
  // opens onto frames that already run at speed (the first frames after a
  // load cost 100+ ms each - a stutter right through the fade)
  (async () => {
    tellParent({ type: 'stage', stage: 'warming' });
    let ms = 1e9; T_LOAD.warm = [];
    for (let i = 0; i < 12 && !(i >= 3 && ms < 25); i++) {
      const a = performance.now(); drawFrame(); ms = performance.now() - a; T_LOAD.warm.push(Math.round(ms));
      await new Promise(r => setTimeout(r, 0));
    }
    T_LOAD.warmed = performance.now();
    releaseImages(scene, renderer, EXTRA_TEXTURES);
    setTimeout(() => releaseImages(scene, renderer, EXTRA_TEXTURES), 15000);   // whatever another eye has uploaded since
    T_LOAD.ready = performance.now();
    const span = (a, b) => Math.round(T_LOAD[b] - T_LOAD[a]);
    console.info(`load: fetch ${span('t0', 'fetched')} ms, parse ${span('fetched', 'parsed')} ms, build ${span('parsed', 'visited')} ms, finish ${span('visited', 'ready')} ms (warm-up included)`);
    window.T_LOAD = T_LOAD;
    const el = document.getElementById('loading');
    el.style.opacity = 0;
    setTimeout(() => el.remove(), 700);
    tellParent({ type: 'ready' });
    STATS.ready();
    // the mouse look starts once the world is in view: the door's fade runs ~2 s after ready
    if (!TOUCH && !Q.has('capture')) setTimeout(() => { if (!document.body.classList.contains('touch')) setLooking(true); }, EMBED ? 1800 : 0);
    TIER.readyAt = performance.now();
    if (Cloth.pending) setTimeout(() => { const o = Cloth.pending; Cloth.pending = null; const t = performance.now(); Cloth.init(o); console.info(`cloth rig built after ready in ${Math.round(performance.now() - t)} ms`); }, 400);
    if (Q.get('tier') === 'phone') for (const st of TIER.ladder) tierApply(st);
  })();
}, (err) => {
  console.error('island_world.glb failed to parse', err);
  failPanel('The island could not load.');
  tellParent({ type: 'error', message: 'The island could not load.' });
});

const movementKeys = new Set(['w', 'a', 's', 'd']);
function isEditingControl(target) {
  return target instanceof Element && !!target.closest('input, select, textarea, [contenteditable="true"]');
}
addEventListener('keydown', (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey || isEditingControl(e.target)) return;
  if (e.key === 'Escape') { if (!document.body.classList.contains('touch')) setLooking(!LOOK.on); return; }
  const key = e.key.toLowerCase();
  if (key === 'h') { restoreHero(); return; }          // the painting's exact pose (V207: the default is pulled back)
  if (!movementKeys.has(key)) return;
  KEYS[key] = true;
  moveHint.querySelector(`[data-key="${key}"]`).classList.add('held');
  e.preventDefault();
});
addEventListener('keyup', (e) => {
  const key = e.key.toLowerCase();
  if (!movementKeys.has(key)) return;
  KEYS[key] = false;
  moveHint.querySelector(`[data-key="${key}"]`).classList.remove('held');
});
// WASD WALK ('I should be able to use wasd to move around'): camera and
// orbit target glide together along the view's horizontal forward/right,
// at a speed proportional to the orbit distance so it feels constant.
const KEYS = { w: false, a: false, s: false, d: false };
// a key held when the tab loses focus never gets its keyup, and the fly-cam
// would keep its momentum forever: clear everything on blur
function releaseMovement() {
  for (const k in KEYS) KEYS[k] = false;
  moveHint.querySelectorAll('.held').forEach(key => key.classList.remove('held'));
  FLY.drag = false; FLY.lookX = FLY.lookY = 0; FLY.vel.set(0, 0, 0); LOOK.inside = false;
  stickEnd();
}
addEventListener('blur', releaseMovement);
addEventListener('focusin', e => { if (isEditingControl(e.target)) releaseMovement(); });
addEventListener('visibilitychange', () => { if (document.hidden) releaseMovement(); });
const _fwd = new THREE.Vector3(), _rgt = new THREE.Vector3(), _mv = new THREE.Vector3();
function walk(dt) {
  if (!(KEYS.w || KEYS.a || KEYS.s || KEYS.d)) return;
  camera.getWorldDirection(_fwd); _fwd.y = 0;
  if (_fwd.lengthSq() < 1e-6) return;
  _fwd.normalize();
  _rgt.set(-_fwd.z, 0, _fwd.x);
  const sp = Math.max(controls.getDistance(), 8) * 0.20 * dt;   // 0.55 flew past the island
  _mv.set(0, 0, 0);
  if (KEYS.w) _mv.addScaledVector(_fwd, sp);
  if (KEYS.s) _mv.addScaledVector(_fwd, -sp);
  if (KEYS.d) _mv.addScaledVector(_rgt, sp);
  if (KEYS.a) _mv.addScaledVector(_rgt, -sp);
  camera.position.add(_mv);
  controls.target.add(_mv);
  // stay on the sea: the orbit target keeps within 260 m of the island
  const tx = controls.target.x - 14.5, tz = controls.target.z;
  const tr = Math.hypot(tx, tz);
  if (tr > 260) {
    const k = 260 / tr;
    const push = new THREE.Vector3(tx * (k - 1), 0, tz * (k - 1));
    controls.target.add(push);
    camera.position.add(push);
  }
}
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.fov = FLY.fov0 = heroFov(camera.aspect);   // the framing rule follows the window
  camera.updateProjectionMatrix();
  applyHorizon();
  renderer.setPixelRatio(fitDpr(DPR));
  renderer.setSize(innerWidth, innerHeight);
});

// PAINTERLY POST — the Susurrus recipe: a single simplified Kuwahara
// pass (after Maxime Heckel's implementation) is the whole watercolor
// trick. Plus a whisper of paper grain to match the compositor.
let painterly = true;
// V210: 4x MSAA on the painterly target. Until now painterly mode drew the
// world into a single-sample target and only the post quad reached the
// antialiased canvas, so gable and chimney edges were stair-stepped while
// painterly-off was clean. r164 resolves the depth buffer into the depth
// texture on blit, so the ink/background masks keep working.
const rt = new THREE.WebGLRenderTarget(2, 2, {
  minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
  colorSpace: THREE.SRGBColorSpace, samples: 4 });
// depth rides along so the ink line can be MASKED to the near world - at
// 0.8 it was outlining every cloud lobe and water streak ('background
// too dark'); the painting's sky and water carry no drawn line
rt.depthTexture = new THREE.DepthTexture(2, 2);
rt.depthTexture.type = THREE.UnsignedIntType;
const postScene = new THREE.Scene();
const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const postMat = new THREE.ShaderMaterial({
  uniforms: {
    tDiffuse: { value: rt.texture },
    tDepth: { value: rt.depthTexture },
    tBox: { value: null }, tBoxSq: { value: null }, uFast: { value: 0 },   // V215: separable sector means
    uRes: { value: new THREE.Vector2(2, 2) },
    uRadius: { value: 4.0 },
    uGrain: { value: 0.04 },
    uMix: { value: 0.12 },     // PLAN_V3 E2: the marks live in the textures now; Kuwahara only smeared them
    uEdge: { value: 0.35 },    // gouache has no outlines; a whisper for the props
    uSat: { value: 1.10 },
    uCel: { value: 0.0 },
    uSepia: { value: 0.10 },      // optional posterized-luma toon pass
    uTime: { value: 0.0 },
    uNear: { value: 0.5 },
    uFar: { value: 6000.0 },
  },
  vertexShader: `varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: `
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
        // V215: at radius 4 each sector is a 5x5 box centred at (+-2, +-2);
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
      // V210 (2026-09-15): the background is exempt - the band and dome ARE
      // the painting, and the grade had pushed its clouds +4 b warmer and its
      // blue less blue than the plate.
      vec3 afternoon = result * vec3(1.075, 1.018, .935);
      result = mix(afternoon * (luma(result) / max(luma(afternoon), .00001)), raw, bgMask);
      gl_FragColor = vec4(result, 1.0);
      // the sRGB render target hardware-DECODES to linear when sampled;
      // without this encode the pass writes linear values into an sRGB
      // canvas and the whole world renders a gamma darker
      #include <colorspace_fragment>
    }`,
});
postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMat));

// V215 - SEPARABLE KUWAHARA. The pass above summed a 5x5 window four times
// per pixel (100 taps, 5.4 ms at 2880x1200). A quadrant mean is a 5x5 box
// mean centred two texels diagonally away, and a box is separable: one
// horizontal 5-tap pass writes the running means of colour and colour^2 into
// two half-float targets, one vertical pass finishes them, and the post pass
// reads eight texels. Identical sums in a different order; only at radius 4
// (the shipped value) - the dev slider's other radii keep the loop.
const kuwOpts = { count: 2, type: THREE.HalfFloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter,
                  depthBuffer: false, generateMipmaps: false };
const kuwH = new THREE.WebGLRenderTarget(2, 2, kuwOpts);
const kuwV = new THREE.WebGLRenderTarget(2, 2, kuwOpts);
// V247: the viewer's own numbers (web/src/stats.js) - ?stats=1 draws them on
// screen, which is how a real phone is read; window.STATS() is what the
// audit and the WebKit run collect. Render targets by their real sizes:
// the painterly target is colour + depth, each S samples plus its resolve.
const STATS = installStats({
  renderer, scene, extraTextures: EXTRA_TEXTURES, build: BUILD, overlay: Q.has('stats'),
  tier: () => ({ memory: MEMORY_TIER, touch: document.body.classList.contains('touch'), applied: TIER.applied, ladderOn: TIER.on }),
  load: () => T_LOAD,
  targets: () => {
    const cv = renderer.domElement, list = [{ name: 'canvas', w: cv.width, h: cv.height, bpp: 8 }];
    list.push({ name: 'painterly ' + rt.samples + 'x', w: rt.width, h: rt.height, bpp: 8 * (rt.samples + 1) });
    list.push({ name: 'kuwahara x2', w: kuwH.width, h: kuwH.height, bpp: 32 });
    if (seaMesh) { const m = seaMesh.getRenderTarget(); list.push({ name: 'mirror', w: m.width, h: m.height, bpp: 8 }); }
    if (SUN.light && SUN.light.shadow.map) list.push({ name: 'shadow', w: SUN.light.shadow.mapSize.x, h: SUN.light.shadow.mapSize.y, bpp: 8 });
    return list;
  },
});
const boxMat = new THREE.ShaderMaterial({
  glslVersion: THREE.GLSL3,
  uniforms: { tA: { value: null }, tB: { value: null }, uStep: { value: new THREE.Vector2() }, uSquare: { value: 1 } },
  vertexShader: `varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: `precision highp float;
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
    }`,
});
const boxScene = new THREE.Scene();
boxScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), boxMat));
const kuwFast = (() => { const gl = renderer.getContext();
  return !!(gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float')); })();
if (!kuwFast) console.warn('post: no float colour buffers - Kuwahara keeps the 100-tap loop');

function sizePost() {
  const dpr = renderer.getPixelRatio();
  rt.setSize(innerWidth * dpr, innerHeight * dpr);
  kuwH.setSize(innerWidth * dpr, innerHeight * dpr);
  kuwV.setSize(innerWidth * dpr, innerHeight * dpr);
  postMat.uniforms.tDepth.value = rt.depthTexture;
  postMat.uniforms.uRes.value.set(innerWidth * dpr, innerHeight * dpr);
}
sizePost();
addEventListener('resize', sizePost);

// ---- look panel ----------------------------------------------------
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
// reduced motion (ported from the Codex pass): the meadow, tree, cloth and
// water all move with the wind - a visitor who asked for less motion gets it off
if (matchMedia('(prefers-reduced-motion: reduce)').matches) { WIND.on = false; $('c-wind').checked = false; }
bindRange('c-wspd', 'o-wspd', v => Wind.mean = v, 1);
bindRange('c-sun', 'o-sun', v => placeSun(v));
bindRange('c-hz', 'o-hz', v => { HORIZON.shift = v; applyHorizon(); }, 3);
bindRange('c-hcone', 'o-hcone', v => scene.heroCone = v, 0);
bindRange('c-hnear', 'o-hnear', v => scene.heroNear = v);
$('c-cam').addEventListener('change', () => setCamMode($('c-cam').value));
$('c-shore').addEventListener('click', () => {
  setCamMode('fly');
  const target = new THREE.Vector3(-7.5, .25, -21.1);
  const eye = new THREE.Vector3(-13.5, 4.8, -31.0).sub(target)
    .multiplyScalar(Math.max(1, .9 / camera.aspect)).add(target);
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-hero').addEventListener('click', restoreHero);
$('c-house').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target = new THREE.Vector3(1.5126, 4.4430, -1.6429);
  const eye = new THREE.Vector3(10.0855, 4.9430, 6.8075).sub(target)
    .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
  eye.y+=HOME_DROP; target.y+=HOME_DROP;
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-rear').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target = new THREE.Vector3(-5.0129, 5.7930, -7.1303);
  const eye = new THREE.Vector3(-25.8342, 8.8930, -18.1064).sub(target)
    .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
  eye.y+=HOME_DROP; target.y+=HOME_DROP;
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
if (DEV) {   // the review cameras below feed the dev panel only (V244: not fetched for visitors)
const rearRemodelCameras = await fetch('./rear-remodel-cameras.json?v='+BUILD).then(r=>r.json());
for(const v of Object.values(rearRemodelCameras))for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
for (const [id,key] of [['c-chimney','chimney'],['c-chimney-back','chimney_reverse'],['c-rear-detail','rear_detail']]) {
  $(id).addEventListener('click',()=>{
    setCamMode('fly'); camera.clearViewOffset(); camera.fov=50; camera.updateProjectionMatrix();
    const c=rearRemodelCameras[key],target=new THREE.Vector3(...c.target);
    const eye=new THREE.Vector3(...c.eye).sub(target).multiplyScalar(Math.max(1,.9/camera.aspect)).add(target);
    window.LOOKAT(...eye.toArray(),...target.toArray());
  });
}
$('c-gable').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target = new THREE.Vector3(2.4011, 5.7930, -9.3231);
  const eye = new THREE.Vector3(14.2643, 8.4930, -28.0919).sub(target)
    .multiplyScalar(Math.max(1, 1.5 / camera.aspect)).add(target);
  eye.y+=HOME_DROP; target.y+=HOME_DROP;
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-pier').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target = new THREE.Vector3(-7.8551, .2, -19.7783);
  const eye = new THREE.Vector3(-13.3603, 1.05, -24.1752).sub(target)
    .multiplyScalar(Math.max(1, 1.35 / camera.aspect)).add(target);
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-path').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target = new THREE.Vector3(-5.8992, 2.5430, -8.8731);
  const eye = new THREE.Vector3(-9.8791, 3.8930, -12.2198).sub(target)
    .multiplyScalar(Math.max(1, 1.2 / camera.aspect)).add(target);
  eye.y+=HOME_DROP; target.y+=HOME_DROP;
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-flowers').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
  // Focus an actual retained meadow plant, clear of the doorway wear mask.
  const target = new THREE.Vector3(16.0026,1.64,2.9909);
  const eye = new THREE.Vector3(16.4526,2.02,4.0409).sub(target)
    .multiplyScalar(Math.max(1, 1.2 / camera.aspect)).add(target);
  eye.y=Math.max(eye.y,groundY(eye.x,eye.z)+COLLIDE.eye+.02);
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
const entryCamera = await fetch('./front-approach-camera.json').then(r=>r.json());
for(const v of [entryCamera])for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
$('c-entry').addEventListener('click',()=>{
 setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
 const target=new THREE.Vector3(...entryCamera.target);
 const eye=new THREE.Vector3(...entryCamera.eye).sub(target).multiplyScalar(Math.max(1,1.15/camera.aspect)).add(target);
 window.LOOKAT(...eye.toArray(),...target.toArray());
});
for (const [state,v] of Object.entries(windowVariants.views)) {
  const option=document.createElement('option'); option.value=state; option.textContent=v.label;
  $('c-window-variant').appendChild(option);
}
$('c-window-variant').addEventListener('change',()=>{
  const v=windowVariants.views[$('c-window-variant').value]; if(!v)return;
  setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=v.fov; camera.updateProjectionMatrix();
  const eye=[...v.eye]; eye[1]=Math.max(eye[1],groundY(eye[0],eye[2])+COLLIDE.eye+.05);
  window.LOOKAT(...eye,...v.target);
});
const joineryCameras = await fetch('./joinery-cameras.json').then(r => r.json());
for(const v of Object.values(joineryCameras))for(const k of ['eye','target'])v[k][1]+=HOME_DROP;
$('c-eave').addEventListener('click',()=>{
 setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();
 const v=joineryCameras.window_angle;
 window.LOOKAT(v.eye[0]+.8,v.eye[1]+1.15,v.eye[2]+1.3,v.target[0],v.target[1]+1.15,v.target[2]);
});

for (const name of ['window_detail','window_angle','door_detail']) {
  $('c-'+name.replace('_','-')).addEventListener('click', () => {
    const v=joineryCameras[name]; setCamMode('fly'); camera.clearViewOffset();
    camera.fov=FLY.fov0=v.fov; camera.updateProjectionMatrix();
    const eye=[...v.eye]; eye[1]=Math.max(eye[1],groundY(eye[0],eye[2])+COLLIDE.eye+.05);
    window.LOOKAT(...eye,...v.target);
  });
}
const reviewCameras = await fetch('./review-cameras.json?v='+BUILD).then(r => r.json());
$('c-review').addEventListener('change', () => {
  const name = $('c-review').value;
  if (name === 'hero_camera') { restoreHero(); return; }
  if (name === 'tree_reference') {
    setCamMode('fly'); camera.clearViewOffset();
    camera.fov = FLY.fov0 = THREE.MathUtils.radToDeg(2 * Math.atan(24.1758 / 240));
    camera.updateProjectionMatrix();
    window.LOOKAT(23.940, 8.462, 116.774, 28.936, 8.462, -3.122); return;
  }
  const view = reviewCameras[name]; if (!view) return;
  setCamMode('fly'); camera.clearViewOffset();
  camera.fov = FLY.fov0 = THREE.MathUtils.radToDeg(2 * Math.atan(36 / (2 * view.lens * camera.aspect)));
  camera.updateProjectionMatrix();
  window.LOOKAT(...view.eye, ...view.target);
});
}
$('c-plaster').addEventListener('click',()=>{setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();window.LOOKAT(11.65,5.15,-6.06,5.665,3.64,-6.579);});
$('c-bench').addEventListener('click',()=>{setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=50;camera.updateProjectionMatrix();window.LOOKAT(17.0,4.0,5.2,23.42,2.2,3.25);});
$('c-tree').addEventListener('click', () => {
  setCamMode('fly');
  const target = new THREE.Vector3(30, 8, -.5);
  const eye = new THREE.Vector3(26, 10.5, 32).sub(target)
    .multiplyScalar(Math.max(1, .8 / camera.aspect)).add(target);
  eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og;
  window.LOOKAT(...eye.toArray(), ...target.toArray());
});
$('c-laundry').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset();
  const target=new THREE.Vector3(11.5,3.25,-7.7);
  const eye=new THREE.Vector3(10.5,3.7,1.2).sub(target)
    .multiplyScalar(Math.max(1,1.3/camera.aspect)).add(target);
  eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_clothes_line; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_clothes_line;
  window.LOOKAT(...eye.toArray(),...target.toArray());
});
$('c-tree-side').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
  const target=new THREE.Vector3(31,9.8,-3);
  const eye=new THREE.Vector3(51,11,-2).sub(target).multiplyScalar(Math.max(1,.80/camera.aspect)).add(target);
  eye.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og; target.y+=TERRAIN_PROFILE.offsets.WEB_HM_tree_og;
  window.LOOKAT(...eye.toArray(),...target.toArray());
});
$('c-twigs').addEventListener('click', () => {
  setCamMode('fly'); camera.clearViewOffset(); camera.fov=FLY.fov0=50; camera.updateProjectionMatrix();
  window.LOOKAT(29.2,12.6,3.8,30.5,12.5,-.6);
});
$('c-bark').addEventListener('click', () => {
  setCamMode('fly'); window.LOOKAT(25.5, 5, 8.5, 29.2, 4.5, -2.3);
});
$('c-leaves').addEventListener('click', () => {
  setCamMode('fly'); window.LOOKAT(27, 13, 9, 31, 13, -.5);
});
restoreDefault();                     // the first frame: the painting's direction, pulled back (V207)
// the two visitor sliders drive the same bindings as the dev panel's
$('c-on').addEventListener('change', () => painterly = $('c-on').checked);
// Painted pigments share one moving sun and shadow map. Turning live light
// off restores the authored reference direction without material swapping.
const sunRig = new THREE.Group();
// blender sun: elevation 14 deg, azimuth 60 deg (toward (0.840,-0.485,0.242));
// light TRAVELS the opposite way; blender->three is (x, z, -y)
const SUN = { base: new THREE.Vector3(-0.840, -0.242, -0.485).normalize(),
              light: null, t: 0.5 };
{
  // blender sun d=(-0.55, 0.33, -0.76) -> three (x, z, -y).
  // Balance rebuilt for the 'make it look like blender' round: mostly
  // ambient (the bakes already carry the painter's light), a gentle
  // warm key for modelling, PCF-soft cast shadows for the realness.
  const sun = new THREE.DirectionalLight('#ffedd2', 0.55);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const sc = sun.shadow.camera;
  sc.left = -55; sc.right = 55; sc.top = 55; sc.bottom = -55;
  sc.near = 200; sc.far = 700;
  sun.shadow.bias = -0.00008;
  sun.shadow.normalBias = 0.055;
  const tgt = new THREE.Object3D();
  tgt.position.set(8, 2, 0);
  sunRig.add(tgt);
  sun.target = tgt;
  sunRig.add(sun);
  sunRig.add(new THREE.HemisphereLight('#f4f2e8', '#aeb492', 0.45));
  SUN.light = sun;
  placeSun(0.5);
}
function placeSun(t) {
  SUN.t = t;
  const yaw = (t - 0.5) * Math.PI * 0.85;   // +-76 deg around the blend sun
  const d = SUN.base.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
  OIL_SUN.value.copy(d).negate();
  SUN.light.position.copy(d.multiplyScalar(-420)).add(SUN.light.target.position);
}
$('c-sun-view').addEventListener('click',()=>{
  setCamMode('fly');camera.clearViewOffset();camera.fov=FLY.fov0=40;camera.updateProjectionMatrix();
  const eye=camera.position.clone(),target=eye.clone().addScaledVector(VISIBLE_SUN.value,100);
  window.LOOKAT(...eye.toArray(),...target.toArray());
});
$('c-light').addEventListener('change', () => {
  const live = $('c-light').value === 'sun';
  PLASTER_LIVE.value=live?1:0;
  VISIBLE_SUN_ON.value=live?1:0;
  // Every painted material shares live uniforms; no emissive Lambert clone.
  if (live) scene.add(sunRig); else scene.remove(sunRig);
});

const fpsEl = document.getElementById('fps');
let fpsFrames = 0, fpsT0 = performance.now();
let windT = 0, lastNow = performance.now();
const q = new THREE.Quaternion();
const _camF = new THREE.Vector3();
renderer.setAnimationLoop(() => {
  fpsFrames++;
  const now = performance.now();
  const dt = Math.min((now - lastNow) / 1000, 1 / 30);   // clamp: tab-switch gaps must not explode the sims
  if (TIER.on && TIER.readyAt && now - TIER.readyAt > 3000) tierStep(now - lastNow, now);
  if (TIER.readyAt) STATS.frame(now - lastNow);
  lastNow = now;
  if (WIND.on) {
    windT += dt;
    for (const sp of skyClouds) {          // slow cloud drift
      const a = sp.userData.az + windT * 0.0016;
      sp.position.set(14.5 + Math.cos(a) * sp.userData.R,
                      sp.userData.alt, Math.sin(a) * sp.userData.R);
    }
    Wind.step(dt);
    Grass.step(dt);
    Tree.step(dt);
    Cloth.step(dt);
  }
  WIND.t.value = windT;
  if (FLY.on) fly(dt); else walk(dt);
  updateWaterCamera();               // camera-aligned water streaks (every frame)
  // EBB: the water level breathes a few centimetres on two slow swell
  // periods, so the waterline creeps up and down the beach ('the water
  // needs to move slightly on the edges'); the reflection follows.
  if (seaMesh) {
    // LEVEL FROZEN (Eric: 'don't have the water ebb and flow, but just
    // move around the edges') - the sea stays put; all the motion lives
    // in the shore shader's drifting foam swash + the water wobble.
    seaMesh.position.y = 0.02;
    SEA.level.value = 0.02;
  }
  if (now - fpsT0 >= 500) {
    fpsEl.textContent = `${Math.round(fpsFrames * 1000 / (now - fpsT0))} fps · wind ${Wind.U.toFixed(1)} m/s`;
    fpsFrames = 0; fpsT0 = now;
  }
  if (autorotate) {
    const t = controls.target;
    const v = camera.position.clone().sub(t);
    v.applyAxisAngle(UP, 0.0018);
    camera.position.copy(t).add(v);
  }
  if (!FLY.on) { controls.update(); collideCamera(null); }
  updateHeroBlend(now);              // painting <-> retexture, from the settled camera
  // (the meadow shadow uniforms follow the live sun inside drawFrame)
  for (const c of clouds) {
    const yaw = Math.atan2(camera.position.x - c.position.x,
                           camera.position.z - c.position.z);
    q.setFromAxisAngle(UP, yaw - c.userData.baseYaw);
    c.quaternion.copy(q).multiply(c.userData.baseQuat);
  }
  drawFrame();
});
// The water reads the camera every frame: its forward vector in xz (streak
// axis and the mirror's horizon row), the vertical fov and the pitch. Shared
// by the loop and RENDER_ONCE, so a headless capture of an orbit pose is drawn
// with that pose's forward vector (V208: captures made through RENDER_ONCE
// alone showed the hero's streak axis as radial spokes in every orbit view).
function updateWaterCamera() {
  if (!seaMesh) return;
  camera.getWorldDirection(_camF);
  seaMesh.material.uniforms.uCamPitch.value = Math.min(Math.max(-_camF.y, 0), 1);
  seaMesh.material.uniforms.uVfov.value = THREE.MathUtils.degToRad(camera.fov);
  _camF.y = 0;
  if (_camF.lengthSq() > 1e-6) {
    _camF.normalize();
    seaMesh.material.uniforms.uCamF.value.set(_camF.x, _camF.z);
  }
}
// V217 tried a 2048 shadow map beyond 70 m from the island; measured at the
// hero it moved 14 % of the pixels by more than 2 L (the tree's and the
// house's penumbrae on the meadow doubled in width), so the map stays 4096.
// window.SHADOW_FORCE = 2048 keeps the experiment reachable.
function updateShadowMapSize() {
  if (!SUN.light) return;
  const want = window.SHADOW_FORCE || 4096;
  if (want !== SUN.light.shadow.mapSize.x) {
    SUN.light.shadow.mapSize.set(want, want);
    if (SUN.light.shadow.map) { SUN.light.shadow.map.dispose(); SUN.light.shadow.map = null; }
  }
}
// the custom receivers sample the sun's shadow map through their own uniforms
// (three's pipeline never touches the unlit materials); refresh them from the
// light every draw, so RENDER_ONCE sees the same map the loop would
function updateShadowUniforms() {
  if (!SUN.light) return;
  if (SUN.light.shadow.map) {
    SHADOW.map.value = SUN.light.shadow.map.texture;
    SHADOW.matrix.value.copy(SUN.light.shadow.matrix);
    SHADOW.size.value.copy(SUN.light.shadow.mapSize);
  }
  SHADOW.on.value = (sunRig.parent === scene && SUN.light.shadow.map) ? 1.0 : 0.0;
}
function drawFrame() {
  updateWaterCamera();
  updateShadowMapSize();
  updateShadowUniforms();
  updateBoat(WIND.t.value);
  LOD.value = window.LOD_OFF ? 0 : 1;
  if (window.MIRROR_KEEP !== undefined) MIRROR_KEEP.value = window.MIRROR_KEEP;
  applyBladeLod(camera, 1, LOD.value >= 0.5, !!window.LOD_RANGE_OFF);
  if (painterly) {
    renderer.setRenderTarget(rt);
    renderer.render(scene, camera);
    // window.KUW_LOOP = true forces the 100-tap loop (A/B check of the separable path)
    const fast = kuwFast && !window.KUW_LOOP && postMat.uniforms.uRadius.value === 4 && postMat.uniforms.uMix.value > 0.001;
    if (fast) {
      const u = boxMat.uniforms;
      u.tA.value = rt.texture; u.tB.value = null; u.uSquare.value = 1; u.uStep.value.set(1 / rt.width, 0);
      renderer.setRenderTarget(kuwH); renderer.render(boxScene, postCam);
      u.tA.value = kuwH.textures[0]; u.tB.value = kuwH.textures[1]; u.uSquare.value = 0; u.uStep.value.set(0, 1 / rt.height);
      renderer.setRenderTarget(kuwV); renderer.render(boxScene, postCam);
      postMat.uniforms.tBox.value = kuwV.textures[0]; postMat.uniforms.tBoxSq.value = kuwV.textures[1];
    }
    postMat.uniforms.uFast.value = fast ? 1 : 0;
    renderer.setRenderTarget(null);
    renderer.render(postScene, postCam);
  } else {
    renderer.render(scene, camera);
  }
}
// The other half of the verification handle (see window.LOOKAT). A hidden or
// backgrounded tab stops firing requestAnimationFrame, so setAnimationLoop never
// runs and a headless capture reads whatever frame happened to be left in the
// buffer - five captures of five different camera poses came back byte-identical.
// RENDER_ONCE draws the pose you just set, synchronously, through the same path
// the loop uses (painterly render target included). Pair it with ?capture=1.
window.RENDER_ONCE = drawFrame;
// V237: one controller step without the animation loop (a hidden pane never
// fires rAF), so the harness can prove the stick and the look drag move the eye.
window.STEP = (dt) => { if (FLY.on) fly(dt); else walk(dt); };
moduleReadyResolve();   // the last line: everything above is initialised (see MODULE_READY)
