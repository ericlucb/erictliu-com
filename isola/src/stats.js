// The viewer's own numbers, from inside the page: what the GPU holds
// (geometry, textures, render targets), the frame interval, the heap where
// the browser tells, the load timeline, and whether the last visit died.
// One estimator for three readers: the on-screen overlay (?stats=1 - the
// way to read a real phone without a cable), scripts/audit.mjs (Chrome) and
// scripts/webkit.mjs (WebKit), both of which call window.STATS().
// Everything is passed in; nothing here reaches for a global.
const MB = (b) => +(b / 1048576).toFixed(1);
const VISIT_KEY = 'isola-visit';
function bytesPerElement(a) {
  const d = a.isInterleavedBufferAttribute ? a.data : a;
  if (d.array) return d.array.BYTES_PER_ELEMENT;
  return (d.userData && d.userData.bpe) || (a.normalized ? 2 : 4);   // (memory.js records bpe before it frees the array)
}
export function measureGeometry(scene) {
  const seen = new Set(); let bytes = 0; const by = {};
  scene.traverse(o => {
    if (!o.isMesh || !o.geometry) return;
    const g = o.geometry; let b = 0;
    for (const a of Object.values(g.attributes)) {
      const d = a.isInterleavedBufferAttribute ? a.data : a; if (seen.has(d)) continue; seen.add(d);
      b += (a.isInterleavedBufferAttribute ? d.stride * d.count : a.count * a.itemSize) * bytesPerElement(a);
    }
    if (g.index && !seen.has(g.index)) { seen.add(g.index); b += g.index.count * bytesPerElement(g.index); }
    bytes += b; const k = o.name.replace(/_c\d+(_c\d+)?$/, '') || (o.material && o.material.name) || '?'; by[k] = (by[k] || 0) + b;
  });
  return { bytes, by };
}
export function measureTextures(scene, extra = []) {
  const seen = new Set(); let bytes = 0; const list = [];
  const visit = (t) => {
    if (!t || !t.isTexture || t.isRenderTargetTexture || seen.has(t) || !t.image) return; seen.add(t);
    const im = t.image, w = im.width || 0, h = im.height || 0; if (!w || !h) return;
    const b = w * h * 4 * (t.generateMipmaps ? 4 / 3 : 1); bytes += b;
    list.push({ name: t.name || (im.src || '').split('/').pop().replace(/\?.*$/, '') || 'unnamed', w, h, mb: MB(b) });
  };
  scene.traverse(o => {
    const mats = o.material ? [].concat(o.material) : [];
    for (const m of mats) { for (const k of ['map', 'alphaMap', 'emissiveMap', 'normalMap', 'roughnessMap']) visit(m[k]); if (m.uniforms) for (const u of Object.values(m.uniforms)) visit(u && u.value); }
  });
  for (const t of extra) visit(t);
  list.sort((a, b) => b.mb - a.mb);
  return { bytes, list };
}
export function measurePrograms(renderer) {
  const gl = renderer.getContext(); const out = [];
  for (const p of renderer.info.programs || []) {
    const g = p.program; if (!g) continue;
    const nU = gl.getProgramParameter(g, gl.ACTIVE_UNIFORMS); let uVec = 0;
    for (let i = 0; i < nU; i++) { const u = gl.getActiveUniform(g, i); const rows = { [gl.FLOAT_MAT4]: 4, [gl.FLOAT_MAT3]: 3, [gl.FLOAT_MAT2]: 2 }[u.type] || 1; uVec += rows * u.size; }
    out.push({ name: p.name, attribs: gl.getProgramParameter(g, gl.ACTIVE_ATTRIBUTES), uniformVec4s: uVec });
  }
  return out;
}
export function glLimits(renderer) {
  const gl = renderer.getContext(); const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  return { attribs: gl.getParameter(gl.MAX_VERTEX_ATTRIBS), varyings: gl.getParameter(gl.MAX_VARYING_VECTORS), fragUniforms: gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
           vertUniforms: gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS), texSize: gl.getParameter(gl.MAX_TEXTURE_SIZE), renderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER) };
}
// { renderer, scene, extraTextures, targets(): [{ name, w, h, bpp }], tier(): {...}, load(): T_LOAD, build, overlay: bool }
export function installStats(opts) {
  const { renderer, scene } = opts;
  const dts = []; let ready = false;
  let lastVisit = null;
  try { const prev = localStorage.getItem(VISIT_KEY); if (prev === 'loading' || prev === 'ready') lastVisit = 'died while ' + prev; localStorage.setItem(VISIT_KEY, 'loading'); } catch (e) {}
  addEventListener('pagehide', () => { try { localStorage.setItem(VISIT_KEY, 'left'); } catch (e) {} });
  const snapshot = () => {
    const geo = measureGeometry(scene), tex = measureTextures(scene, opts.extraTextures || []);
    const targets = (opts.targets ? opts.targets() : []).map(t => ({ ...t, mb: MB(t.w * t.h * t.bpp) }));
    const targetsMB = +targets.reduce((s, t) => s + t.mb, 0).toFixed(1);
    const a = dts.slice().sort((x, y) => x - y);
    const frame = a.length ? { median: +a[a.length >> 1].toFixed(1), p90: +a[Math.floor(a.length * 0.9)].toFixed(1), n: a.length } : null;
    const heapMB = performance.memory ? MB(performance.memory.usedJSHeapSize) : null;
    const T = opts.load ? opts.load() : {}; const rel = (k) => T[k] === undefined ? null : Math.round(T[k] - T.t0);
    const cv = renderer.domElement;
    return { build: opts.build, ua: navigator.userAgent, tier: opts.tier ? opts.tier() : null, dpr: +renderer.getPixelRatio().toFixed(2), canvas: [cv.width, cv.height], css: [innerWidth, innerHeight],
             geometryMB: MB(geo.bytes), geometryBy: Object.fromEntries(Object.entries(geo.by).sort((x, y) => y[1] - x[1]).slice(0, 12).map(([k, v]) => [k, MB(v)])),
             texturesMB: MB(tex.bytes), textures: tex.list.slice(0, 12), targetsMB, targets, totalMB: +(MB(geo.bytes) + MB(tex.bytes) + targetsMB + (heapMB || 0)).toFixed(0),
             heapMB, frame, programs: (renderer.info.programs || []).length, load: { fetched: rel('fetched'), parsed: rel('parsed'), meadow: rel('meadow'), visited: rel('visited'), ready: rel('ready') },
             ready, lastVisit };
  };
  window.STATS = snapshot;
  let el = null;
  if (opts.overlay) {
    el = document.createElement('pre'); el.id = 'stats';
    el.style.cssText = 'position:fixed;left:calc(8px + env(safe-area-inset-left,0px));top:calc(8px + env(safe-area-inset-top,0px));z-index:50;margin:0;padding:6px 8px;font:11px/1.35 ui-monospace,Menlo,monospace;color:#f4efe3;background:rgba(20,22,36,.62);border-radius:6px;pointer-events:none;white-space:pre;';
    document.body.appendChild(el);
    const paint = () => {
      const s = snapshot();
      const t = s.tier || {};
      el.textContent = [
        `${s.build}  ${t.memory ? 'phone tier' : 'desktop tier'}${t.touch ? ' touch' : ''}  dpr ${s.dpr}  ${s.canvas[0]}x${s.canvas[1]}`,
        `gpu  geo ${s.geometryMB} + tex ${s.texturesMB} + targets ${s.targetsMB}${s.heapMB != null ? ' + heap ' + s.heapMB : ''} = ${s.totalMB} MB`,
        `frame ${s.frame ? s.frame.median + ' ms (p90 ' + s.frame.p90 + ')' : '-'}  programs ${s.programs}${t.applied && t.applied.length ? '  ladder ' + JSON.stringify(t.applied) : ''}`,
        `load  fetch ${s.load.fetched}  parse ${s.load.parsed}  build ${s.load.visited}  ready ${s.load.ready} ms`,
        s.lastVisit ? `last visit: ${s.lastVisit}` : '',
      ].filter(Boolean).join('\n');
    };
    setInterval(paint, 1000); setTimeout(paint, 100);
  }
  return {
    frame(rawMs) { if (rawMs > 0 && rawMs < 500) { dts.push(rawMs); if (dts.length > 240) dts.shift(); } },
    ready() { ready = true; try { localStorage.setItem(VISIT_KEY, 'ready'); } catch (e) {} },
    snapshot,
  };
}
