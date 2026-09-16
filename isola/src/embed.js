// The door's protocol (V233-V241). erictliu.com opens this page in an iframe
// (?embed=1): the viewer says hello with its world URL, the page downloads
// the file with its own progress ring, hands the bytes over as a Blob with
// 'go' (and parks them in the Cache API for next time), and the viewer
// reports its stages and 'ready'. Standalone, every call here is a no-op.
export const EMBED = new URLSearchParams(location.search).has('embed') && window.parent !== window;
export const tellParent = (msg) => { if (EMBED) window.parent.postMessage({ isola: 'v1', ...msg }, location.origin); };
// wait for the door's 'go' (2.5 s at most - an older page never answers); the Blob it carries, or null
export function waitForDoor(glbAbs, build) {
  return new Promise((res) => {
    let blob = null;
    const t = setTimeout(() => res(blob), 2500);
    addEventListener('message', function onGo(ev) {
      if (ev.origin === location.origin && ev.data && ev.data.isola === 'go') {
        if (ev.data.world instanceof Blob) blob = ev.data.world;
        clearTimeout(t); removeEventListener('message', onGo); res(blob);
      }
    });
    tellParent({ type: 'hello', glb: glbAbs, build });
  });
}
