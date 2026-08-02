// Draw-anywhere overlay for erictliu.com, bundled by build.sh into ../../draw.js
// (+ draw.css). The page lazy-loads it the first time DRAW is clicked and then
// talks to window.__drawesome.
import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Draw, SWATCHES_COMPACT } from "drawesome";
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

/* Compact chrome for phones: drawesome's sizes are fixed px, so shrink the
   whole dock. The origin matches the anchored edge, and the entrance
   animation is dropped because its keyframes would fight the transform. */
.kDrawCompact .Draw_toolbar { animation:none !important; transform:scale(0.78); }
.kDrawCompact[data-place="bottom"] .Draw_toolbar { transform-origin:50% 100%; }
.kDrawCompact[data-place="left"] .Draw_toolbar { transform-origin:0% 50%; }
/* Minimized on a portrait phone, drawesome's own disc keeps the bar's old
   spot (its resting position is baked into the morph, not the dock), so hide
   it there and offer #kDrawDot pinned to the bottom-right corner instead.
   ~= matches the exact class token: *= would also hit the always-present
   MorphBar_collapsedContent layer and hide the dock permanently. */
.kDrawCompact[data-place="left"] .Draw_toolbar:has([class~="MorphBar_collapsed"]) {
  visibility:hidden !important;
}
#kDrawDot { position:fixed; right:12px; bottom:12px; z-index:10; width:46px; height:46px;
  visibility:hidden; display:flex; align-items:center; justify-content:center;
  border-radius:50%; border:1px solid #e2e1dc; background:rgba(255,255,255,.95);
  color:#141414; font-size:19px; cursor:pointer;
  box-shadow:0 2px 8px rgba(0,0,0,.09); }
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

// Live media-query state, so rotating the phone re-lays the bar instead of
// keeping whichever layout it mounted with.
function useMQ(query) {
  const [on, setOn] = useState(() => matchMedia(query).matches);
  useEffect(() => {
    const mq = matchMedia(query);
    const sync = () => setOn(mq.matches);
    // Environments exist where the viewport changes without a reliable mq
    // change event (embedded webviews, emulated viewports), and a flip between
    // the initial render's read and this subscription would be missed — so
    // sync now, on resize, and on a slow poll as the backstop. setState with
    // an unchanged value is a no-op, so the poll costs nothing.
    sync();
    mq.addEventListener("change", sync);
    addEventListener("resize", sync);
    const iv = setInterval(sync, 600);
    return () => {
      mq.removeEventListener("change", sync);
      removeEventListener("resize", sync);
      clearInterval(iv);
    };
  }, [query]);
  return on;
}

function Overlay() {
  // compact: any phone-sized viewport in either orientation — trim the tools
  // and shrink the chrome so bar plus pills fit on screen. A landscape phone
  // is wider than 700px, which is why height is part of the test.
  // stand: portrait phones get the bar on the left, per the drawesome README.
  const compact = useMQ("(max-width: 700px), (max-height: 520px)");
  const stand = useMQ("(max-width: 700px) and (orientation: portrait)");

  const handle = useRef(null);
  const pills = useRef(null);
  const [hasInk, setHasInk] = useState(false);

  // Keep the pill glued to the toolbar: centred above a bar lying along the
  // bottom, tucked under one standing on the left. The bar moves (minimize
  // collapses it to a disc), so follow it per frame — and while it IS the
  // disc, stay hidden with it.
  useEffect(() => {
    // The morph container is the bar's real chrome: its class flips to
    // MorphBar_collapsed the moment Hide tools is clicked, while the rect
    // only shrinks as the animation plays. Keying on the class makes the
    // pills vanish on the click, not at the end of the morph.
    const place = () => {
      // Scoped inside the dock: bare [class*="MorphBar_bar"] can hit one of
      // drawesome's offscreen staging copies instead of the visible bar.
      const bar =
        host &&
        (host.querySelector('.Draw_toolbar [class*="MorphBar_bar"]') ||
          host.querySelector(".Draw_toolbar"));
      const el = pills.current;
      if (!bar || !el) return;
      const r = bar.getBoundingClientRect();
      const w = el.offsetWidth, h = el.offsetHeight;
      const minimized =
        /\bMorphBar_collapsed\b/.test(String(bar.className)) ||
        (r.width < 100 && r.height < 100);
      // On a portrait phone the native disc is hidden (see the CSS above), so
      // surface our corner dot as the way back; elsewhere the disc serves.
      const dot = document.getElementById("kDrawDot");
      const stand = el.dataset.stack === "1";
      if (dot) dot.style.visibility = minimized && stand ? "visible" : "hidden";
      if (minimized) {
        el.style.visibility = "hidden";
        return;
      }
      const horizontal = r.width >= r.height;
      const left = horizontal
        ? r.left + (r.width - w) / 2
        : Math.max(8, r.left + (r.width - w) / 2);
      const top = horizontal ? r.top - h - 9 : Math.min(r.bottom + 9, innerHeight - h - 8);
      el.style.left = Math.max(8, Math.min(left, innerWidth - w - 8)) + "px";
      el.style.top = Math.max(8, top) + "px";
      el.style.visibility = "visible";
    };
    // rAF follows the morph smoothly, but throttled tabs stop firing it, so a
    // slow interval and resize listeners keep the pills placed regardless.
    let raf;
    const loop = () => {
      place();
      raf = requestAnimationFrame(loop);
    };
    place();
    loop();
    const iv = setInterval(place, 350);
    addEventListener("resize", place);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
      removeEventListener("resize", place);
    };
  }, []);

  return (
    <>
      <style>{PILL_CSS}</style>
      <div
        style={{ position: "absolute", inset: 0 }}
        className={compact ? "kDrawCompact" : undefined}
        data-place={stand ? "left" : "bottom"}
      >
        <Draw
          ref={handle}
          background="transparent"
          theme="light"
          placement={stand ? "left" : "bottom"}
          inset={compact ? 10 : 20}
          tools={compact ? ["pencil", "pen", "marker", "highlighter", "brush"] : undefined}
          controls={compact ? { opacity: false, custom: false } : undefined}
          swatches={compact ? SWATCHES_COMPACT : undefined}
          drawWhenMinimized
          onChange={(strokes) => setHasInk(strokes.length > 0)}
        />
      </div>
      <div id="kDrawPills" ref={pills} data-stack={stand ? "1" : "0"}>
        <button
          type="button"
          disabled={!hasInk}
          onClick={() => handle.current && saveMasterpiece(handle.current)}
        >
          SAVE <span className="arrow">↓</span>
        </button>
        <button type="button" onClick={close} aria-label="Stop drawing (Esc)">
          DONE
        </button>
      </div>
      <button
        id="kDrawDot"
        type="button"
        aria-label="Show drawing tools"
        onClick={() => {
          const hit = host && host.querySelector('.Draw_toolbar [class*="expandHit"]');
          if (hit) hit.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        }}
      >
        ✎
      </button>
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
