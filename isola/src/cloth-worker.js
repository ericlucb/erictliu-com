// V214 (2026-09-15): the laundry off the main thread. All the arithmetic is
// in cloth-sim.js (shared with the byte-identity test); this file is the
// message plumbing. Per step the worker returns positions and normals for the
// affected vertices only, in a buffer that ping-pongs with the main thread.
import { createClothSim } from './cloth-sim.js';

let sim = null;
onmessage = (e) => {
  const m = e.data;
  if (m.type === 'init') {
    sim = createClothSim({ rest: m.rest, index: m.index, garments: m.garments, dir: m.dir, top: m.top });
    postMessage({ type: 'ready', affected: sim.affected, normals: sim.nrm.slice() });
    return;
  }
  if (m.type === 'step' && sim) {
    sim.step(m.dt, m.U, m.adv);
    const A = sim.affected, pos = sim.pos, nrm = sim.nrm;
    const out = (m.buffer && m.buffer.byteLength === A.length * 24) ? new Float32Array(m.buffer) : new Float32Array(A.length * 6);
    for (let n = 0; n < A.length; n++) {
      const o = A[n] * 3, w = n * 6;
      out[w] = pos[o]; out[w + 1] = pos[o + 1]; out[w + 2] = pos[o + 2];
      out[w + 3] = nrm[o]; out[w + 4] = nrm[o + 1]; out[w + 5] = nrm[o + 2];
    }
    postMessage({ type: 'result', data: out.buffer, maxStretch: sim.maxStretch() }, [out.buffer]);
  }
};
