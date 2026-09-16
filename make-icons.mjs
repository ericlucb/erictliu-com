#!/usr/bin/env node
// The favicons and the touch icon from the portrait, posed looking a little to
// its left, with nothing but Chrome (puppeteer from ../isola-quieta). The
// Python make-icons.py does the same with rsvg + ImageMagick and also writes
// og.png. Renders the real page (hairD() smooths the hair at runtime), aims
// the rig, waits for the springs, and screenshots the head square.
//   node make-icons.mjs        -> icon.svg, favicon.ico (48 px PNG inside), apple-touch-icon.png
import puppeteer from '../isola-quieta/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname } from 'node:path';
const AIM = 0.28, TRAVEL = 120;   // 0.5 looks straight out; lower turns the head to its left
const page0 = readFileSync('index.html', 'utf8')
  .replace('<script src="./support.js"></script>', '<script>Math.random=function(){return 0;};</script>\n<script src="./support.js"></script>')
  + `<script>(function wait(){ if (window.__erk) { var el = document.querySelector('input[data-p="travel"]'); if (el) { el.value = ${TRAVEL}; el.dispatchEvent(new Event('input', {bubbles: true})); }
     __erk.aim(${AIM}, 0.5); __erk.settle(1.0); window.requestAnimationFrame = function(){ return 0; }; document.documentElement.setAttribute('data-render-ready', '1'); } else setTimeout(wait, 25); })();</script>`;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png' };
const server = createServer((req, res) => { const p = req.url.split('?')[0]; if (p === '/' || p === '/index.html') { res.setHeader('Content-Type', 'text/html'); res.end(page0); return; } try { res.setHeader('Content-Type', types[extname(p)] || 'application/octet-stream'); res.end(readFileSync('.' + p)); } catch (e) { res.statusCode = 404; res.end(); } });
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
await browser.close(); server.close();
console.log('icons: icon.svg', icon.length, 'B; apple-touch-icon.png 180 px; favicon.ico 48 px png; aim', AIM);
