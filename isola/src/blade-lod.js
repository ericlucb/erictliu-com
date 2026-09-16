// Blade LOD by draw range (V236). The loader writes each meadow chunk's index
// with its blades in ascending r1 (the random the shader tests against
// keep), so the blades a pass keeps are a prefix; per pass, per chunk, the
// draw range ends at the last blade with r1 <= keep(nearest point of the
// chunk's box). Every blade the shader would draw is drawn, every blade
// skipped would have collapsed to a point: the same pixels, a quarter of the
// vertex work at the painting's distance.
export const BLADE_LOD = [];         // [{ mesh, c }] - c.lodR1 sorted, c.lodEnd = index end per blade
export function bladeKeepAt(d) {     // the shader's keep(lodDist) with uLod = 1
  const t = Math.min(Math.max((d - 45) / 65, 0), 1);
  return 1 - 0.75 * t * t * (3 - 2 * t);
}
// camera: the eye of this pass (the mirror camera shares the eye's xz);
// cap: the pass's share of blades; lodOn: the LOD uniform; rangeOff: draw the full index (A/B)
export function applyBladeLod(camera, cap, lodOn, rangeOff) {
  if (!BLADE_LOD.length) return;
  const full = rangeOff || (!lodOn && cap >= 1);
  const cx = camera.position.x, cz = camera.position.z;
  for (const { mesh, c } of BLADE_LOD) {
    const r1 = c.lodR1, nb = r1.length;
    let n = nb;
    if (!full) {
      const dx = Math.max(c.min[0] - cx, 0, cx - c.max[0]), dz = Math.max(c.min[2] - cz, 0, cz - c.max[2]);
      const kmax = Math.min(lodOn ? bladeKeepAt(Math.hypot(dx, dz)) : 1, cap) + 3e-5;   // + a float32 ulp margin
      if (kmax < 1) { let lo = 0, hi = nb; while (lo < hi) { const m = (lo + hi) >> 1; if (r1[m] > kmax) hi = m; else lo = m + 1; } n = lo; }
    }
    mesh.geometry.setDrawRange(0, n ? c.lodEnd[n - 1] : 0);
  }
}
