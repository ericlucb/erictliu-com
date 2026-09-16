// The rowboat (V219): a small, slow, two-period heave with a roll about its
// own axes, applied in the hull's and rope's vertex shaders; the mooring
// rope's boat end follows, its pier end stays put. The axis and centre come
// from the waterline polygon (boat-waterline.json).
import * as THREE from 'three';
export const BOAT = { c: { value: new THREE.Vector3(0, 0.02, 0) }, axis: { value: new THREE.Vector2(1, 0) },
               heave: { value: 0 }, roll: { value: 0 }, pitch: { value: 0 }, ready: false };
export function initBoat(waterlinePromise) {
  waterlinePromise.then(d => {
  BOAT.c.value.set(d.center[0], 0.02, d.center[1]);
  let best = 0, ax = [1, 0];
  for (const a of d.polygon) for (const b of d.polygon) {
    const dx = b[0] - a[0], dz = b[1] - a[1], l = dx * dx + dz * dz;
    if (l > best) { best = l; ax = [dx, dz]; }
  }
  BOAT.axis.value.set(ax[0], ax[1]).normalize(); BOAT.ready = true;
  }).catch(() => {});
}
export function updateBoat(t) {
  BOAT.heave.value = 0.022 * Math.sin(t * 0.85) + 0.010 * Math.sin(t * 1.9 + 1.3);
  BOAT.roll.value  = 0.026 * Math.sin(t * 0.62 + 0.7) + 0.011 * Math.sin(t * 1.45);
  BOAT.pitch.value = 0.013 * Math.sin(t * 0.50 + 2.0);
}
export function boatify(material, o, rope) {
  o.updateWorldMatrix(true, false);
  const inv = { value: o.matrixWorld.clone().invert() };
  const prev = material.onBeforeCompile;
  material.onBeforeCompile = (sh) => {
    if (prev) prev(sh);
    Object.assign(sh.uniforms, { uBoatC: BOAT.c, uBoatAxis: BOAT.axis, uBoatHeave: BOAT.heave,
                                 uBoatRoll: BOAT.roll, uBoatPitch: BOAT.pitch, uBoatInv: inv });
    sh.vertexShader = 'uniform vec3 uBoatC; uniform vec2 uBoatAxis; uniform float uBoatHeave, uBoatRoll, uBoatPitch; uniform mat4 uBoatInv;\n'
      + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      {
        vec3 wpB = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vec3 rB = wpB - uBoatC;
        float wB = ${rope ? '1.0 - smoothstep(0.9, 2.4, length(rB.xz))' : '1.0'};
        vec3 ax = vec3(uBoatAxis.x, 0.0, uBoatAxis.y), ay = vec3(-uBoatAxis.y, 0.0, uBoatAxis.x);
        rB += cross(ax * (uBoatRoll * wB), rB) + cross(ay * (uBoatPitch * wB), rB);
        rB.y += uBoatHeave * wB;
        transformed = (uBoatInv * vec4(rB + uBoatC, 1.0)).xyz;
      }`);
  };
  material.customProgramCacheKey = () => 'boat-v219-' + (rope ? 'rope' : 'hull');
}
