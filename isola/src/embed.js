// The door's protocol (V233-V246). erictliu.com opens this page in an iframe
// (?embed=1). The door starts downloading the world file the moment ENTER is
// clicked (it knows the file's tag: stamped by scripts/site.mjs); the viewer
// says hello with the URL it will ask for, the door answers 'ack' (so the
// viewer holds its own download however long the door's takes), hands the
// bytes over as a Blob with 'go' (and parks them in the Cache API for next
// time), and the viewer reports its stages and 'ready'. Standalone, every
// call here is a no-op.
export const EMBED = new URLSearchParams(location.search).has('embed') && window.parent !== window;
export const tellParent = (msg) => { if (EMBED) window.parent.postMessage({ isola: 'v1', ...msg }, location.origin); };
// wait for the door's 'go': the Blob it carries, or null. A door that never
// acks within 2.5 s is an older page (or none): the viewer downloads itself.
export function waitForDoor(glbAbs, build, bytes) {
  return new Promise((res) => {
    let blob = null, acked = false;
    const done = () => { clearTimeout(t); removeEventListener('message', onMsg); res(blob); };
    const t = setTimeout(() => { if (!acked) done(); }, 2500);
    function onMsg(ev) {
      if (ev.origin !== location.origin || !ev.data) return;
      if (ev.data.isola === 'ack') acked = true;
      else if (ev.data.isola === 'go') { if (ev.data.world instanceof Blob) blob = ev.data.world; done(); }
    }
    addEventListener('message', onMsg);
    tellParent({ type: 'hello', glb: glbAbs, build, bytes });
  });
}
