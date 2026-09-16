// Where the world file is and how its bytes arrive.
// WORLD_TAG is the file's own sha256[:8] (scripts/stamp_world.mjs writes it,
// optimize_glb.sh runs that, tests/world-tag.test.mjs checks it): the URL is
// keyed by the world, not the viewer, so a viewer-only deploy never makes a
// visitor download it again, and the door's cache entry stays valid.
export const WORLD_TAG = '2d65b32b';
export const WORLD_BYTES = 67643908;   // the file's raw size (stamped with the tag): a gzip host's content-length is the compressed size, so the ring uses this
// ?world=<https URL> names a copy hosted elsewhere (R2 with a CORS rule for
// the site); hosts are allow-listed so a shared link cannot point the viewer
// at an arbitrary file. Dev: ?cb=<x> busts the file's cache, ?glbfile=<name>
// loads another file beside the page (A/B).
const WORLD_HOSTS = ['erictliu.com', 'r2.dev', 'r2.cloudflarestorage.com', 'objects.githubusercontent.com'];
export function resolveWorldUrl(Q, DEV) {
  const w = Q.get('world'); let WORLD_URL = null;
  if (w) {
    try { const u = new URL(w); if (u.protocol === 'https:' && WORLD_HOSTS.some(h => u.hostname === h || u.hostname.endsWith('.' + h))) WORLD_URL = u.href; } catch (e) {}
    if (!WORLD_URL) console.warn('world: ignoring ' + w + ' (host not allowed)');
  }
  const cb = DEV && Q.get('cb');
  const GLB_URL = WORLD_URL || './' + (DEV && Q.get('glbfile') || 'island_world.glb') + '?v=' + WORLD_TAG + (cb ? '&cb=' + encodeURIComponent(cb) : '');
  return { WORLD_URL, GLB_URL, GLB_ABS: new URL(GLB_URL, location.href).href };
}
// The bytes: the door's Blob, the door's Cache API entry, or a fetch with a
// byte count (the standalone viewer shows the same percentage) - one
// ArrayBuffer for loader.parse, no object URL round trip.
export async function worldBytes({ url, abs, blob }, onProgress) {
  if (blob) { console.info('island_world.glb: handed over by the door'); return blob.arrayBuffer(); }
  try {
    if (window.caches) { const hit = await caches.match(abs); if (hit) { console.info('island_world.glb: from the door\'s cache'); return hit.arrayBuffer(); } }
  } catch (e) { console.warn('cache lookup failed', e); }
  const res = await fetch(url);
  if (!res.ok) throw new Error('island_world.glb ' + res.status);
  const total = +res.headers.get('content-length') || 0;
  if (!res.body) return res.arrayBuffer();
  const reader = res.body.getReader(), chunks = []; let got = 0;
  for (;;) { const { done, value } = await reader.read(); if (done) break; chunks.push(value); got += value.length; if (total) onProgress(got, total); }
  const out = new Uint8Array(got); let off = 0; for (const c of chunks) { out.set(c, off); off += c.length; }
  return out.buffer;
}
