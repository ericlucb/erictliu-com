# erictliu.com

Static personal site. No build step — `index.html` and `support.js` are served as-is.

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

## Domain

Registered at Cloudflare, which also serves the DNS. The apex has four A
records pointing at GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`,
`.111.153`) and `www` is a CNAME to `ericlucb.github.io`; `www` redirects to
the apex. All of them are **DNS only** (grey cloud) — turning Cloudflare's
proxy on stops GitHub from renewing its Let's Encrypt certificate.

`CNAME` in this repo is what binds the domain to the site. Deleting it
unbinds the domain, so leave it in place.
