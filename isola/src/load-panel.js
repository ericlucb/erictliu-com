// The loading panel's failure state: a failed world, a script error during
// load, or a lost GL context ends with one message and one button, never
// with 'pouring the watercolours…' forever.
import { tellParent } from './embed.js';
// ROBUSTNESS (ported from the Codex pass, PLAN_V4 'viewer & controls'): a
// failed GLB, a script error during load, or a lost GL context used to leave
// 'pouring the watercolours…' on screen forever. One panel, one button.
export function failPanel(msg) {
  tellParent({ type: 'error', message: msg });
  let el = document.getElementById('loading');
  if (!el) { el = document.createElement('div'); el.id = 'loading'; document.body.appendChild(el); }
  el.style.opacity = 1; el.textContent = msg + ' ';
  const b = document.createElement('button'); b.textContent = 'Try again';   // textContent above cleared any earlier one
  b.style.font = 'inherit'; b.style.marginLeft = '8px';
  b.addEventListener('click', () => location.reload());
  el.appendChild(b);
}
export function stillLoading() { const el = document.getElementById('loading'); return !!el && el.isConnected && el.style.opacity !== '0'; }
export function installLoadGuards(renderer) {
addEventListener('error', () => { if (stillLoading()) failPanel('The island could not load.'); });
addEventListener('unhandledrejection', () => { if (stillLoading()) failPanel('The island could not load.'); });
renderer.domElement.addEventListener('webglcontextlost', (e) => { e.preventDefault(); failPanel('The graphics context was lost.'); });
// r164 re-initialises the renderer on restore and the scene keeps running: drop the panel.
// REMOVE it, as the load path does - a faded #loading is still a full-screen
// fixed div on top of the canvas and would swallow every drag and wheel.
renderer.domElement.addEventListener('webglcontextrestored', () => {
  // V240: the CPU copies were released after upload, so nothing can be
  // re-uploaded - start over (the door's cache makes that cheap)
  location.reload();
});
}

