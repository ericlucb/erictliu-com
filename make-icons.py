#!/usr/bin/env python3
"""Regenerate the favicons and the link-preview image from the portrait.

The drawing lives in index.html, so it is the single source of truth — this
pulls the <svg id="kSvg"> block straight out of the page rather than keeping a
second copy that could drift.

Needs rsvg-convert and ImageMagick:  brew install librsvg imagemagick
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


def portrait_markup() -> str:
    """The contents of the portrait <svg>, as well-formed XML."""
    src = (HERE / "index.html").read_text()
    start = src.index('<svg id="kSvg"')
    end = src.index("</svg>", start) + len("</svg>")
    svg = src[start:end].replace('style="will-change:transform;"', "")

    # The page markup carries one unmatched </g>. Browsers forgive it; the XML
    # parser behind rsvg-convert does not, so drop the stray closer.
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

    inner = re.sub(r'^<svg id="kSvg" viewBox="0 0 960 720"[^>]*>', "", svg, count=1)
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
    inner = portrait_markup()
    x, y, size, _ = HEAD_VIEWBOX.split()

    icon = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{HEAD_VIEWBOX}" '
        f'width="{size}" height="{size}">'
        f'<rect x="{x}" y="{y}" width="{size}" height="{size}" fill="{BG}"/>'
        f"{inner}</svg>"
    )
    (HERE / "icon.svg").write_text(icon)

    render(icon, 180, 180, HERE / "apple-touch-icon.png")

    with tempfile.TemporaryDirectory() as d:
        big = Path(d) / "icon512.png"
        render(icon, 512, 512, big)
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
