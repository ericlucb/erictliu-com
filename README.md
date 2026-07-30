# erictliu.com

Static personal site. No build step — `index.html` and `support.js` are served as-is.

## Local preview

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Background music

`DANCE MODE` plays `music.mp3` if it exists, and falls back to the built-in
synth beat if it does not. To use your own track:

1. Drop the file in this folder (`.mp3`, `.m4a`, and `.ogg` all work).
2. In `index.html`, find the `MUSIC` config near the top of the script and set
   `src` to the filename and `bpm` to the track's tempo — `bpm` is what keeps
   the head bobbing in time. `volume` is 0–1.

Keep the file under ~5 MB so the page stays quick to load.

## Deploying

Pushing to `main` publishes to GitHub Pages. `CNAME` points the site at
erictliu.com.
