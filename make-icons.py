#!/usr/bin/env python3
"""Regenerate the favicons and the link-preview image from the portrait.

The drawing in index.html is only a rough placeholder: hairD() rebuilds the
hair as smooth beziers at runtime, and the theme colours are picked at random
on load. So this renders the real page in headless Chrome and takes the
portrait from the *rendered* DOM — building straight from the source markup
gives you the angular, unsmoothed version.

Needs Chrome, rsvg-convert and ImageMagick:
    brew install librsvg imagemagick
"""

import re
import subprocess
import tempfile
from pathlib import Path

HERE = Path(__file__).parent
BG = "#fbfbfa"
INK = "#141414"
MUTED = "#a6a7ac"

# The square of the drawing's own coordinate space that frames the head.
HEAD_VIEWBOX = "332 110 404 404"

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# Pin the random theme to PAIRS[0] (black on cream), point the eyes straight
# ahead, let the springs settle, then freeze so the dump is a still frame.
# settle() must stay short: idle drift re-engages after ~5.5s, so a long settle
# walks the head back off-centre.
HARNESS_HEAD = "<script>Math.random=function(){return 0;};</script>\n"
HARNESS_TAIL = """
<script>
(function wait(){
  if (window.__erk) {
    __erk.aim(0.5, 0.5);
    __erk.settle(1);
    window.requestAnimationFrame = function(){ return 0; };
    document.documentElement.setAttribute('data-render-ready', '1');
  } else setTimeout(wait, 25);
})();
</script>
"""


def rendered_dom() -> str:
    """index.html as the browser has it after the script has run and settled."""
    page = (HERE / "index.html").read_text()
    page = page.replace(
        '<script src="./support.js"></script>',
        HARNESS_HEAD + '<script src="./support.js"></script>', 1)

    # Must sit beside index.html so ./support.js still resolves.
    harness = HERE / ".render.html"
    harness.write_text(page + HARNESS_TAIL)
    try:
        dom = subprocess.run(
            [CHROME, "--headless", "--disable-gpu", "--no-sandbox",
             "--virtual-time-budget=8000", "--dump-dom", harness.resolve().as_uri()],
            check=True, capture_output=True, text=True,
        ).stdout
    finally:
        harness.unlink(missing_ok=True)

    if "data-render-ready" not in dom:
        raise SystemExit("the page never finished booting — nothing to capture")
    return dom


def portrait_markup(dom: str) -> str:
    """The contents of the portrait <svg>, as well-formed XML."""
    # The runtime adds its own attributes, so id="kSvg" is not necessarily first.
    marker = dom.index('id="kSvg"')
    start = dom.rindex("<svg", 0, marker)
    end = dom.index("</svg>", start) + len("</svg>")
    svg = dom[start:end]
    svg = svg.replace("will-change: transform;", "").replace("will-change:transform;", "")

    # Safety net: any unmatched </g> is fatal to an XML parser even though
    # browsers forgive it.
    tag = re.compile(r"<(/?)g(\s[^>]*?)?>")
    out, depth, pos = [], 0, 0
    for m in tag.finditer(svg):
        out.append(svg[pos:m.start()])
        pos = m.end()
        if m.group(1):
            if depth == 0:
                continue
            depth -= 1
        else:
            depth += 1
        out.append(m.group(0))
    out.append(svg[pos:])
    svg = "".join(out)

    inner = re.sub(r"^<svg\b[^>]*>", "", svg, count=1)
    if inner == svg:
        raise SystemExit("could not strip the <svg> wrapper")
    return inner[:inner.rindex("</svg>")]


def render(svg_text: str, width: int, height: int, out: Path) -> None:
    with tempfile.NamedTemporaryFile("w", suffix=".svg", delete=False) as f:
        f.write(svg_text)
        tmp = f.name
    subprocess.run(
        ["rsvg-convert", "-w", str(width), "-h", str(height), tmp, "-o", str(out)],
        check=True,
    )
    Path(tmp).unlink()


def main() -> None:
    inner = portrait_markup(rendered_dom())
    x, y, size, _ = (float(v) for v in HEAD_VIEWBOX.split())

    def tile(radius: float) -> str:
        clip, open_g = "", "<g>"
        if radius:
            clip = (f'<defs><clipPath id="kTile"><rect x="{x:g}" y="{y:g}" '
                    f'width="{size:g}" height="{size:g}" rx="{radius:g}"/>'
                    f"</clipPath></defs>")
            open_g = '<g clip-path="url(#kTile)">'
        return (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{HEAD_VIEWBOX}" '
            f'width="{size:g}" height="{size:g}">{clip}{open_g}'
            f'<rect x="{x:g}" y="{y:g}" width="{size:g}" height="{size:g}" '
            f'fill="#ffffff"/>{inner}</g></svg>'
        )

    rounded = tile(size * 0.22)
    (HERE / "icon.svg").write_text(rounded)

    # iOS masks apple-touch-icon itself and paints any transparency black, so
    # that one stays a square opaque tile.
    render(tile(0), 180, 180, HERE / "apple-touch-icon.png")

    with tempfile.TemporaryDirectory() as d:
        big = Path(d) / "icon512.png"
        render(rounded, 512, 512, big)
        subprocess.run(
            ["magick", str(big), "-define", "icon:auto-resize=48,32,16",
             str(HERE / "favicon.ico")],
            check=True,
        )

    og = f"""<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="{BG}"/>
<svg x="655" y="60" width="510" height="510" viewBox="{HEAD_VIEWBOX}">{inner}</svg>
<text x="105" y="330" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="112" font-weight="500" letter-spacing="-3" fill="{INK}">eric liu</text>
<text x="108" y="392" font-family="Menlo, ui-monospace, monospace" font-size="27" letter-spacing="5" fill="{MUTED}">ERICTLIU.COM</text>
</svg>"""
    render(og, 1200, 630, HERE / "og.png")

    for name in ("icon.svg", "favicon.ico", "apple-touch-icon.png", "og.png"):
        print(f"{name:24} {(HERE / name).stat().st_size:>8,} bytes")


if __name__ == "__main__":
    main()
