# Isola Quieta — web viewer

The whole v2 world (island, realized grass + flowers, house, tree, cloud
billboards, sky panorama) baked unlit into `island_world.glb` (~75 MB: the
island under EXT_meshopt_compression + KHR_mesh_quantization, the props under
Draco - see `scripts/optimize_glb.sh`) and rendered with three.js. No build
step, no external requests — deployable as-is to GitHub Pages or any static
host. The laundry's cloth solver runs in `cloth-worker.js` (a module Worker);
`?syncCloth=1` keeps it on the main thread, `?dev=1` shows the full panel.

Run locally:

    python3 -m http.server 8795 --directory web
    open http://localhost:8795

Controls: drag to orbit, wheel to zoom, right-drag to pan, `R` toggles
autorotate.

Refresh after a big version update:

    bash scripts/export_web.sh

Known deviations from the Blender renders: no Kuwahara painterly pass
(browser shows the raw NPR), water is a flat dusk tone, and flowers read
denser because nothing occludes them at canopy height.

## Embedding (erictliu.com's door)

`?embed=1` inside an iframe: the viewer posts `{isola:'v1', type:'hello', glb}`
to its parent with the absolute URL of `island_world.glb`, waits up to 2.5 s
for `{isola:'go'}`, then looks that URL up in the Cache API before fetching
(the parent downloads it with a progress bar and `cache.put`s it there), and
posts `progress {loaded,total}`, `ready`, and `error {message}`. Without a
parent, or if none answers, it loads on its own. The site's copy of this
folder is `erictliu-com/isola/` (rsync; see that README).
