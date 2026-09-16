# erictliu.com

Static personal site. No build step — `index.html` and `support.js` are served
as-is. (`draw.js`/`draw.css` are a prebuilt vendored bundle; see Draw mode.)
`isola/` is the island world behind the ENTER door; see The door.

## Draw mode

The `DRAW` button in the panel closes it and lays a transparent
[drawesome](https://github.com/benjitaylor/drawesome) canvas over the whole
page — the site itself is the paper, and the portrait keeps tracking the pen.
`SAVE MASTERPIECE ↓` exports a PNG of the page as it looks that instant
(background, portrait mid-pose, name) with the drawing on top. `DONE` or `Esc`
leaves; minimizing the toolbar hides the pills with it.

`draw.js` + `draw.css` are React + drawesome (MIT) bundled by
`tools/draw-bundle/build.sh`, lazy-loaded on first use so the page itself stays
light. To change the overlay (tools, placement, export), edit
`tools/draw-bundle/entry.jsx`, run the build script, and bump the `V` constant
in `openDraw()` in `index.html` — that string busts the old cached bundle.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Background music

`DANCE MODE` plays `music.mp3`, and falls back to the built-in synth beat if
that file is missing or will not play.

Current track: **Back To You (UK Garage)** by JayStacksBeats, from Pixabay
under the [Pixabay Content License](https://pixabay.com/service/license-summary/)
(free for commercial use, no attribution required). Re-encoded from 256 kbps to
128 kbps to halve the download.

To swap it out:

1. Drop the file in this folder (`.mp3`, `.m4a`, and `.ogg` all work), and
   re-encode if it is much over ~3 MB:
   `ffmpeg -i in.mp3 -b:a 128k -ar 44100 music.mp3`
2. In `index.html`, update the `MUSIC` config near the top of the script.
   `bpm` and `offset` place the beat grid the head bobs on — `offset` is where
   the first beat lands, in seconds. Getting these right is what makes the
   bop land on the beat rather than near it.

The animation reads the audio element's own clock, so it stays locked to the
track for its full length instead of drifting.

Use something you have the rights to — the repo and the site are both public.

## Deploying

Pushing to `main` publishes to GitHub Pages, live at https://erictliu.com.

## Icons and link preview

`icon.svg`, `favicon.ico`, `apple-touch-icon.png` and `og.png` are all
generated from the portrait already in `index.html` by `make-icons.py`:

```bash
python3 make-icons.py
```

Re-run it after changing the drawing. It needs `rsvg-convert` and ImageMagick
(`brew install librsvg imagemagick`).

## Domain

Registered at Cloudflare, which also serves the DNS. The apex has four A
records pointing at GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`,
`.111.153`) and `www` is a CNAME to `ericlucb.github.io`; `www` redirects to
the apex. All of them are **DNS only** (grey cloud) — turning Cloudflare's
proxy on stops GitHub from renewing its Let's Encrypt certificate.

`CNAME` in this repo is what binds the domain to the site. Deleting it
unbinds the domain, so leave it in place.

## The door (ENTER → Isola Quieta)

`ENTER` (right edge) opens a door onto Isola Quieta, Kazuo Oga's island
cottage rebuilt as a walkable three.js world. The world lives in `isola/`, a
verbatim copy of the `web/` folder of
[ericlucb/isola-quieta](https://github.com/ericlucb/isola-quieta) (private).
To update it after the viewer changes:

```bash
rsync -a --delete --exclude README.md --exclude .DS_Store ../isola-quieta/web/ isola/
```

Nothing else needs bumping — the viewer cache-busts its own files with its
`BUILD` constant. The world file `isola/island_world.glb` is ~58 MB; GitHub
warns above 50 MB but Pages serves files up to 100 MB.

**Hosting the world off the repo.** Every world update adds ~58 MB to this
repo's history. To move the file to Cloudflare R2: create a bucket, upload
`isola/island_world.glb`, give the bucket a public domain (`*.r2.dev` or a
subdomain of erictliu.com), add a CORS rule allowing `GET` from
`https://erictliu.com` with `Content-Length` exposed (the ring reads the body
and needs the size), then set `static WORLD = 'https://…/island_world.glb'`
in `index.html` (the `Component` class, just above `openDoor()`) and delete
`isola/island_world.glb`. The door passes the URL to the viewer as
`?world=`; the viewer accepts only `*.r2.dev`, `*.r2.cloudflarestorage.com`
and `erictliu.com` hosts. Cache-busting is then by file name (put the
viewer's build tag in the object key).

How the door works (`openDoor()` in `index.html`): nothing is fetched until
the click. Then the ENTER link becomes a small door with a ring around it,
the viewer starts in an iframe at `isola/?embed=1` behind the page, and the
viewer posts `{isola:'v1', type:'hello', glb}` with the exact URL of its world
file. The page downloads that file itself so the ring is honest, stores it
in the Cache API (`isola-world`) under that URL, and answers `{isola:'go'}`;
the viewer finds it in the cache (no second download), decodes it while the
ring spins full, and posts `ready`, at which point the little door swings
open, the world fades in over the page, the portrait's animation loop pauses
and the iframe takes focus. `LEAVE` (top left) or Esc closes it and restores
ENTER. If the page never answers, the viewer loads the world itself after
2.5 s, so `isola/` also works on its own.
