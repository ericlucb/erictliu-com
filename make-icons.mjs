#!/usr/bin/env node
// The favicons and the touch icon from the portrait, posed looking a little to
// its left, with nothing but Chrome (puppeteer from ../isola-quieta). The
// Python make-icons.py does the same with rsvg + ImageMagick and also writes
// og.png. Renders the real page (hairD() smooths the hair at runtime), aims
// the rig, waits for the springs, and screenshots the head square.
//   node make-icons.mjs        -> icon.svg, favicon.ico (48 px PNG inside), apple-touch-icon.png, og.png
// og.png (the link preview, 1200 x 630) is the real page at its resting angle - the name and the
// portrait as the site draws them - with the door and the icon row hidden.
import { createRequire } from 'node:module';
const puppeteer = (await import(createRequire(new URL('../isola-quieta/package.json', import.meta.url)).resolve('puppeteer'))).default;   // the viewer's puppeteer, whatever its layout
import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname } from 'node:path';
const AIM = 0.28, TRAVEL = 120;   // 0.5 looks straight out; lower turns the head to its left
const AIM_OG = 0.44;              // the preview: the page's resting look, a slight turn (the three-quarter of the old og.png sat the lens on the nose)
const pageFor = (aim, extraCss = '') => readFileSync('index.html', 'utf8')
  .replace('<script src="./support.js"></script>', '<script>Math.random=function(){return 0;};</script>\n<script src="./support.js"></script>')
  + (extraCss ? `<style>${extraCss}</style>` : '')
  + `<script>(function wait(){ if (window.__erk) { var el = document.querySelector('input[data-p="travel"]'); if (el) { el.value = ${TRAVEL}; el.dispatchEvent(new Event('input', {bubbles: true})); }
     __erk.aim(${aim}, 0.5); __erk.settle(1.0); window.requestAnimationFrame = function(){ return 0; }; document.documentElement.setAttribute('data-render-ready', '1'); } else setTimeout(wait, 25); })();</script>`;
const page0 = pageFor(AIM);
let pageServed = page0;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = createServer((req, res) => { const p = req.url.split('?')[0]; if (p === '/' || p === '/index.html') { res.setHeader('Content-Type', 'text/html'); res.end(pageServed); return; } try { res.setHeader('Content-Type', types[extname(p)] || 'application/octet-stream'); res.end(readFileSync('.' + p)); } catch (e) { res.statusCode = 404; res.end(); } });
await new Promise(r => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/`;
const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage(); await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => document.documentElement.getAttribute('data-render-ready') === '1', { timeout: 30000 });
await new Promise(r => setTimeout(r, 300));
// the rendered portrait, as the Python does it: the svg's inner markup, will-change stripped
const inner = await page.evaluate(() => { const svg = document.getElementById('kSvg'); return svg.innerHTML.replace(/will-change:\s*transform;?/g, ''); });
const HEAD = '332 110 404 404';
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${HEAD}" width="404" height="404"><defs><clipPath id="kTile"><rect x="332" y="110" width="404" height="404" rx="88.88"/></clipPath></defs><g clip-path="url(#kTile)"><rect x="332" y="110" width="404" height="404" fill="#ffffff"/>${inner}</g></svg>`;
writeFileSync('icon.svg', icon);
// raster: a page that shows the svg at the wanted size, screenshotted
const shot = async (size) => { const p = await browser.newPage(); await p.setViewport({ width: size, height: size, deviceScaleFactor: 1 });
  await p.setContent(`<!doctype html><html><body style="margin:0;background:transparent">${icon.replace('width="404" height="404"', `width="${size}" height="${size}"`)}</body></html>`);
  const buf = await p.screenshot({ type: 'png', omitBackground: true, clip: { x: 0, y: 0, width: size, height: size } }); await p.close(); return buf; };
writeFileSync('apple-touch-icon.png', await shot(180));
const png48 = await shot(48);
// favicon.ico: one 48 px PNG entry (every current browser reads PNG-in-ICO)
const ico = Buffer.alloc(6 + 16); ico.writeUInt16LE(0, 0); ico.writeUInt16LE(1, 2); ico.writeUInt16LE(1, 4);
ico[6] = 48; ico[7] = 48; ico[8] = 0; ico[9] = 0; ico.writeUInt16LE(1, 10); ico.writeUInt16LE(32, 12); ico.writeUInt32LE(png48.length, 14); ico.writeUInt32LE(22, 18);
writeFileSync('favicon.ico', Buffer.concat([ico, png48]));
// og.png: the page itself at 1200 x 630, resting, the door and the icon row hidden, the links under the name too
// (the site's runtime rebuilds the page from its template, so the styling goes in after the render:
// the door, the icon row and the links hidden, the portrait's box enlarged so the head fills the card)
pageServed = pageFor(AIM_OG);
const og = await browser.newPage(); await og.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
await og.goto(url, { waitUntil: 'load' });
await og.waitForFunction(() => document.documentElement.getAttribute('data-render-ready') === '1', { timeout: 30000 });
await og.addStyleTag({ content: '#kNav, #kPanel { display:none !important; } #kCopy > *:not(h1) { display:none !important; } #kStage { --pw: 1040px !important; --mr: -150px !important; } #kCopy { left: 8% !important; } #kCopy h1 { font-size: 104px !important; }' });
await new Promise(r => setTimeout(r, 400));
writeFileSync('og.png', await og.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } }));
await og.close();
await browser.close(); server.close();
console.log('icons: icon.svg', icon.length, 'B; apple-touch-icon.png 180 px; favicon.ico 48 px png; aim', AIM, '; og.png 1200x630 at aim', AIM_OG);
