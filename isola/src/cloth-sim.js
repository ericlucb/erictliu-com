// V214 (2026-09-15): the laundry simulation as one self-contained object -
// the XPBD patches, the skinning of the scan's vertices and the vertex
// normals - so it can run in a Web Worker (cloth-worker.js) and be checked
// against laundry.js's synchronous path in node (tests/cloth-worker.test.mjs).
//
// Byte-identity with the synchronous path is the contract:
//   * the same ClothPatch, fed the same wind numbers (makeWind replicates
//     index.html's Wind.at verbatim; U and the advection come from the main
//     thread each step);
//   * the same binding arithmetic, in the same order;
//   * normals accumulated per triangle in index order with the same float32
//     round-trips BufferGeometry.computeVertexNormals makes through the
//     attribute, scaled by 1/length like Vector3.normalize. Only the vertices
//     of triangles that touch a bound vertex are recomputed per step; every
//     other vertex keeps the value from the full pass at init, which is what
//     a full recompute would give it again.
import { ClothPatch } from './cloth-physics.js';

function whash(x, y) { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); }
function wnoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  let fx = x - ix, fy = y - iy;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
  const a = whash(ix, iy), b = whash(ix + 1, iy), c = whash(ix, iy + 1), d = whash(ix + 1, iy + 1);
  return (a * (1 - fx) + b * fx) * (1 - fy) + (c * (1 - fx) + d * fx) * fy;
}
// index.html's Wind.at: (x, y, z, U, adv) -> [wx, wz]
export function makeWind(dir, top) {
  const dx = dir[0], dy = dir[1];
  return (x, y, z, U, adv) => {
    const p = x * dx + z * dy - adv;
    const q = -x * dy + z * dx;
    const g1 = wnoise(p * 0.040, q * 0.10);
    const g2 = wnoise(p * 0.17 + 7.3, q * 0.24 - 3.1);
    const gust = 0.45 + 1.00 * g1 + 0.35 * (g2 - 0.5);
    const hprof = 0.55 + 0.45 * Math.min(Math.max((y - top + 0.4) / 5.0, 0), 1);
    const speed = U * gust * hprof;
    const yaw = (g2 - 0.5) * 0.45;
    const c = Math.cos(yaw), s = Math.sin(yaw);
    return [speed * (dx * c - dy * s), speed * (dx * s + dy * c)];
  };
}

// garments: [{nx, ny, positions, pins, ids, keys(4 per id), weights(4 per id), blend}]
export function createClothSim({ rest, index, garments, dir, top }) {
  const pos = Float32Array.from(rest);
  const nrm = new Float32Array(rest.length);
  const nv = rest.length / 3;
  const wind = makeWind(dir, top);
  let U = 0, adv = 0;
  const windAt = (x, y, z) => wind(x, y, z, U, adv);
  // vertex -> triangle adjacency, triangles in index order
  const count = new Int32Array(nv + 1);
  for (let i = 0; i < index.length; i++) count[index[i] + 1]++;
  const adjStart = new Int32Array(nv + 1);
  for (let v = 0; v < nv; v++) adjStart[v + 1] = adjStart[v] + count[v + 1];
  const adjTris = new Int32Array(index.length);
  const fill = Int32Array.from(adjStart);
  for (let t = 0; t < index.length / 3; t++) for (let k = 0; k < 3; k++) adjTris[fill[index[t * 3 + k]]++] = t;
  function accumulate(ids) {
    for (let n = 0; n < ids.length; n++) {
      const v = ids[n], o = v * 3;
      nrm[o] = 0; nrm[o + 1] = 0; nrm[o + 2] = 0;
      for (let t = adjStart[v]; t < adjStart[v + 1]; t++) {
        const tri = adjTris[t] * 3;
        const A = index[tri] * 3, B = index[tri + 1] * 3, C = index[tri + 2] * 3;
        const cbx = pos[C] - pos[B], cby = pos[C + 1] - pos[B + 1], cbz = pos[C + 2] - pos[B + 2];
        const abx = pos[A] - pos[B], aby = pos[A + 1] - pos[B + 1], abz = pos[A + 2] - pos[B + 2];
        nrm[o] += cby * abz - cbz * aby;
        nrm[o + 1] += cbz * abx - cbx * abz;
        nrm[o + 2] += cbx * aby - cby * abx;
      }
      const len = Math.sqrt(nrm[o] * nrm[o] + nrm[o + 1] * nrm[o + 1] + nrm[o + 2] * nrm[o + 2]);
      const inv = 1 / (len || 1);
      nrm[o] *= inv; nrm[o + 1] *= inv; nrm[o + 2] *= inv;
    }
  }
  const all = new Int32Array(nv); for (let v = 0; v < nv; v++) all[v] = v;
  accumulate(all);
  const rigs = garments.map(g => ({
    patch: new ClothPatch({ nx: g.nx, ny: g.ny, positions: g.positions, pins: g.pins }),
    ids: g.ids, keys: g.keys, weights: g.weights, blend: g.blend }));
  const bound = new Uint8Array(nv);
  for (const g of rigs) for (const id of g.ids) bound[id] = 1;
  const touched = new Uint8Array(nv);
  for (let t = 0; t < index.length / 3; t++) {
    const a = index[t * 3], b = index[t * 3 + 1], c = index[t * 3 + 2];
    if (bound[a] || bound[b] || bound[c]) { touched[a] = touched[b] = touched[c] = 1; }
  }
  const list = []; for (let v = 0; v < nv; v++) if (touched[v]) list.push(v);
  const affected = Int32Array.from(list);
  return {
    pos, nrm, affected, rigs,
    step(dt, u, a) {
      U = u; adv = a;
      for (const g of rigs) {
        const { patch, ids, keys, weights, blend } = g;
        patch.step(dt, windAt);
        for (let n = 0; n < ids.length; n++) {
          const id = ids[n];
          for (let c = 0; c < 3; c++) {
            let delta = 0;
            for (let k = 0; k < 4; k++) delta += (patch.x[keys[n * 4 + k] * 3 + c] - patch.rest[keys[n * 4 + k] * 3 + c]) * weights[n * 4 + k];
            pos[id * 3 + c] = rest[id * 3 + c] + delta * blend[n];
          }
        }
      }
      accumulate(affected);
    },
    maxStretch() { return Math.max(...rigs.map(g => g.patch.maxStretch())); },
  };
}
