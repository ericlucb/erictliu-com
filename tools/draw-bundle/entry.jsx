// Draw-anywhere overlay for erictliu.com, bundled by build.sh into ../../draw.js
// (+ draw.css). The page lazy-loads it the first time DRAW is clicked and then
// talks to window.__drawesome.
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Draw } from "drawesome";
import "drawesome/styles.css";

let host = null;
let root = null;

const onKey = (e) => {
  if (e.key === "Escape") {
    e.stopPropagation();
    close();
  }
};

// The site's text-pill look, so the cluster reads as part of the page.
const PILL_CSS = `
#kDrawPills { position:fixed; display:flex; gap:8px; visibility:hidden; z-index:10; }
#kDrawPills button { display:inline-flex; align-items:center; gap:6px;
  font:10px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing:.09em; padding:7px 13px; border-radius:999px; border:1px solid #e2e1dc;
  background:rgba(255,255,255,.92); color:#a6a7ac; cursor:pointer; white-space:nowrap;
  transition:color .16s, border-color .16s, opacity .16s; }
#kDrawPills button:hover { color:#141414; border-color:#141414; }
#kDrawPills button[disabled] { opacity:.45; cursor:default; }
#kDrawPills button[disabled]:hover { color:#a6a7ac; border-color:#e2e1dc; }
#kDrawPills .arrow { font-size:14px; line-height:1; }
#kDrawPills[data-stack="1"] { flex-direction:column; align-items:flex-start; }
`;

// "Save Masterpiece" saves what you actually made: the page as it looks right
// now — background, the portrait mid-pose, the name — with the drawing on top.
async function saveMasterpiece(handle) {
  const S = 2;
  const vw = innerWidth, vh = innerHeight;
  const c = document.createElement("canvas");
  c.width = vw * S;
  c.height = vh * S;
  const ctx = c.getContext("2d");
  ctx.scale(S, S);

  const stage = document.getElementById("kStage");
  ctx.fillStyle = stage ? getComputedStyle(stage).backgroundColor : "#fbfbfa";
  ctx.fillRect(0, 0, vw, vh);

  // The portrait, exactly as posed and themed this instant. It is one inline
  // <svg> of pure paths, so a serialized clone rasterises without tainting.
  const svg = document.getElementById("kSvg");
  if (svg) {
    const r = svg.getBoundingClientRect();
    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", r.width);
    clone.setAttribute("height", r.height);
    clone.removeAttribute("style");
    const markup = new XMLSerializer().serializeToString(clone);
    const img = new Image();
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(markup);
    });
    ctx.drawImage(img, r.x, r.y, r.width, r.height);
  }

  // The name, in the page's own (already loaded) font.
  const h1 = document.querySelector("#kCopy h1");
  if (h1) {
    const r = h1.getBoundingClientRect();
    const cs = getComputedStyle(h1);
    ctx.fillStyle = cs.color;
    ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
    if ("letterSpacing" in ctx) ctx.letterSpacing = cs.letterSpacing;
    ctx.fillText(h1.textContent.trim(), r.x, r.y + parseFloat(cs.fontSize) * 0.8);
  }

  const blob = await handle.toPng(S);
  const bmp = await createImageBitmap(blob);
  ctx.drawImage(bmp, 0, 0, vw, vh);

  const out = await new Promise((res) => c.toBlob(res, "image/png"));
  const url = URL.createObjectURL(out);
  const a = document.createElement("a");
  a.href = url;
  a.download = "masterpiece.png";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function Overlay() {
  // A phone has more height than width: stand the bar up and trim it, per the
  // drawesome README's own recipe. Tracked live so rotating the phone re-lays
  // the bar instead of keeping whichever layout it mounted with.
  const [narrow, setNarrow] = useState(() => matchMedia("(max-width: 700px)").matches);
  useEffect(() => {
    const mq = matchMedia("(max-width: 700px)");
    const sync = () => setNarrow(mq.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const handle = useRef(null);
  const pills = useRef(null);
  const [hasInk, setHasInk] = useState(false);

  // Keep the pill glued to the toolbar: centred above a bar lying along the
  // bottom, tucked under one standing on the left. The bar moves (minimize
  // collapses it to a disc), so follow it per frame — and while it IS the
  // disc, stay hidden with it.
  useEffect(() => {
    let raf;
    const tick = () => {
      // The morph container is the bar's real chrome: its class flips to
      // MorphBar_collapsed the moment Hide tools is clicked, while the rect
      // only shrinks as the animation plays. Keying on the class makes the
      // pills vanish on the click, not at the end of the morph.
      const bar =
        host &&
        (host.querySelector('[class*="MorphBar_bar"]') || host.querySelector(".Draw_toolbar"));
      const el = pills.current;
      if (bar && el) {
        const r = bar.getBoundingClientRect();
        const w = el.offsetWidth, h = el.offsetHeight;
        const minimized =
          /collapsed/.test(String(bar.className)) || (r.width < 100 && r.height < 100);
        if (minimized) {
          el.style.visibility = "hidden";
        } else {
          const horizontal = r.width >= r.height;
          const left = horizontal
            ? r.left + (r.width - w) / 2
            : Math.max(8, r.left + (r.width - w) / 2);
          const top = horizontal ? r.top - h - 9 : Math.min(r.bottom + 9, innerHeight - h - 8);
          el.style.left = Math.max(8, Math.min(left, innerWidth - w - 8)) + "px";
          el.style.top = Math.max(8, top) + "px";
          el.style.visibility = "visible";
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{PILL_CSS}</style>
      <div style={{ position: "absolute", inset: 0 }}>
        <Draw
          ref={handle}
          background="transparent"
          theme="light"
          placement={narrow ? "left" : "bottom"}
          inset={narrow ? 10 : 20}
          tools={narrow ? ["pencil", "pen", "marker", "highlighter", "brush"] : undefined}
          controls={narrow ? { opacity: false, custom: false } : undefined}
          drawWhenMinimized
          onChange={(strokes) => setHasInk(strokes.length > 0)}
        />
      </div>
      <div id="kDrawPills" ref={pills} data-stack={narrow ? "1" : "0"}>
        <button
          type="button"
          disabled={!hasInk}
          onClick={() => handle.current && saveMasterpiece(handle.current)}
        >
          SAVE MASTERPIECE <span className="arrow">↓</span>
        </button>
        <button type="button" onClick={close} aria-label="Stop drawing (Esc)">
          DONE
        </button>
      </div>
    </>
  );
}

function open() {
  if (host) return;
  host = document.createElement("div");
  host.id = "kDrawHost";
  host.style.cssText = "position:fixed; inset:0; z-index:40;";
  document.body.appendChild(host);
  root = createRoot(host);
  root.render(<Overlay />);
  window.addEventListener("keydown", onKey, true);
}

function close() {
  if (!host) return;
  window.removeEventListener("keydown", onKey, true);
  root.unmount();
  host.remove();
  host = null;
  root = null;
}

window.__drawesome = { open, close };
