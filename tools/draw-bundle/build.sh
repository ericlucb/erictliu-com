#!/bin/sh
# Bundle the draw-anywhere overlay into ../../draw.js + ../../draw.css.
# React + ReactDOM + drawesome in one IIFE; the page lazy-loads it on DRAW.
set -e
cd "$(dirname "$0")"
[ -d node_modules ] || npm install
npx esbuild entry.jsx \
  --bundle --minify --format=iife \
  --define:process.env.NODE_ENV='"production"' \
  --banner:js='/* Bundled for erictliu.com — drawesome 0.1.0 (MIT, (c) Benji Taylor), react + react-dom 19.1.1 (MIT, (c) Meta). Source: tools/draw-bundle/ */' \
  --outfile=../../draw.js
ls -la ../../draw.js ../../draw.css
