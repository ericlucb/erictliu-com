// Memory passes (V240). three keeps a CPU copy of every uploaded buffer and
// every decoded image; this world has ~300 MB of each and no reader after
// load except the cloth. Everything here is called with what it needs -
// the renderer, the root, the extra textures - and touches no global.
export const isBitmapImage = (im) => !!im && ((typeof ImageBitmap !== 'undefined' && im instanceof ImageBitmap) || im instanceof HTMLImageElement || im instanceof HTMLCanvasElement);
// Freed on upload with three's own onUpload pattern; bounds are computed
// first so the cull never needs the array; a lost context reloads the page.
function disposeArray() { (this.userData = this.userData || {}).bpe = this.array.BYTES_PER_ELEMENT; this.array = null; }   // (the element size stays, for stats.js)
export function releaseCpuCopies(root, keep) {
  let bytes = 0; const seen = new Set();
  root.traverse(o => {
    if (!o.isMesh || !o.geometry || keep.has(o.geometry)) return;
    const g = o.geometry;
    if (!g.boundingSphere) g.computeBoundingSphere();
    for (const a of Object.values(g.attributes)) {
      if (a.isInterleavedBufferAttribute) {           // meshopt's padded streams: one buffer behind several attributes
        const d = a.data; if (!d.array || seen.has(d)) continue;
        seen.add(d); bytes += d.array.byteLength; d.onUpload(disposeArray); continue;
      }
      if (!a.array || seen.has(a)) continue;
      seen.add(a); bytes += a.array.byteLength; a.onUpload(disposeArray);
    }
    if (g.index && g.index.array && !seen.has(g.index)) { seen.add(g.index); bytes += g.index.array.byteLength; g.index.onUpload(disposeArray); }
  });
  return bytes;
}
export function forEachTexture(root, fn, extra = []) {
  const seen = new Set();
  const visit = (t) => { if (t && t.isTexture && !t.isRenderTargetTexture && !seen.has(t)) { seen.add(t); fn(t); } };
  root.traverse(o => {
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) { for (const k of ['map', 'alphaMap', 'emissiveMap', 'normalMap', 'roughnessMap']) visit(m[k]); if (m.uniforms) for (const u of Object.values(m.uniforms)) visit(u && u.value); }
  });
  for (const t of extra) visit(t);
}
export function halveTexture(t, minWidth = 2048) {
  const im = t.image; if (t.isDataTexture || !isBitmapImage(im) || im.width < minWidth) return false;
  const c = document.createElement('canvas'); c.width = im.width >> 1; c.height = im.height >> 1;
  c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
  if (im.close) im.close();
  t.image = c; t.needsUpdate = true; return true;
}
export function halveTextures(root, extra = [], minWidth = 2048) { let n = 0; forEachTexture(root, t => { if (halveTexture(t, minWidth)) n++; }, extra); console.info('memory tier: ' + n + ' textures halved'); }
// after the upload the decoded image is dead weight (a 2048^2 bitmap is
// 16 MB); keep only its size, which is all three reads without an update
// Only textures the GPU already holds (renderer.properties knows), never a
// DataTexture (the wind field re-uploads every frame from image.data) or a
// canvas texture that may be redrawn. Run again later: a texture first seen
// from another eye uploads then.
export function releaseImages(root, renderer, extra = []) {
  let n = 0;
  forEachTexture(root, t => {
    const im = t.image;
    if (t.isDataTexture || t.isCanvasTexture || !isBitmapImage(im)) return;
    if (!renderer.properties.get(t).__webglTexture) return;
    const w = im.width, h = im.height;   // (read before close(): a closed bitmap reports 0x0)
    if (im.close) im.close();
    t.image = { width: w, height: h }; n++;
  }, extra);
  if (n) console.info('memory: ' + n + ' decoded images released after upload');
  return n;
}
