import zlib
import struct
import math

def render_favicon_png(size, out_path):
    W = size
    H = size
    pixels = [[11, 15, 25] for _ in range(W * H)]

    def set_pixel(x, y, r, g, b, alpha=1.0):
        if 0 <= x < W and 0 <= y < H:
            idx = y * W + x
            if alpha >= 1.0:
                pixels[idx] = [r, g, b]
            else:
                cr, cg, cb = pixels[idx]
                pixels[idx] = [
                    int(cr * (1 - alpha) + r * alpha),
                    int(cg * (1 - alpha) + g * alpha),
                    int(cb * (1 - alpha) + b * alpha)
                ]

    # Render Squircle background
    radius = size * 0.22
    cx, cy = size / 2, size / 2
    margin = size * 0.04

    for y in range(H):
        for x in range(W):
            # Distance from rounded box
            dx = max(0, abs(x - cx) - (cx - radius - margin))
            dy = max(0, abs(y - cy) - (cy - radius - margin))
            dist = math.sqrt(dx*dx + dy*dy)

            if dist <= radius:
                # Inside squircle
                t = (x + y) / (W + H)
                # Background gradient #0b0f19 to #020617
                r = int(11 * (1 - t) + 2 * t)
                g = int(15 * (1 - t) + 6 * t)
                b = int(25 * (1 - t) + 23 * t)

                # Ambient cyan center glow
                cd = math.sqrt((x - cx)**2 + (y - cy)**2) / (size * 0.5)
                if cd < 1.0:
                    glow = (1 - cd)**2 * 0.25
                    r = int(r * (1 - glow) + 14 * glow)
                    g = int(g * (1 - glow) + 165 * glow)
                    b = int(b * (1 - glow) + 233 * glow)

                # Border stroke detection
                if dist >= radius - (size * 0.03):
                    # Border glow gradient
                    br = int(56 * (1 - t) + 99 * t)
                    bg = int(189 * (1 - t) + 102 * t)
                    bb = int(248 * (1 - t) + 241 * t)
                    set_pixel(x, y, br, bg, bb, 0.9)
                else:
                    set_pixel(x, y, r, g, b, 1.0)
            elif dist <= radius + 1.0:
                # Anti-aliasing edge
                alpha = max(0.0, min(1.0, 1.0 - (dist - radius)))
                set_pixel(x, y, 14, 165, 233, alpha * 0.5)

    # Render Architectural "G" symbol
    # Normalize coords (0..1)
    scale = size / 512.0
    for y in range(H):
        ny = y / scale
        for x in range(W):
            nx = x / scale
            
            # G geometry check
            dx = nx - 250
            dy = ny - 270
            dist = math.sqrt(dx*dx + dy*dy)

            # Ring between radius 80 and 135
            is_g = False
            if 70 <= dist <= 135:
                # Angle around center
                angle = math.atan2(dy, dx) # -pi to pi
                # Opening on top right: between -0.8 and 0.1 radians
                if not (-0.85 < angle < 0.05):
                    is_g = True

            # Horizontal bar: x between 240 and 365, y between 255 and 295
            if 240 <= nx <= 365 and 255 <= ny <= 295:
                is_g = True
            # Right vertical spur: x between 330 and 365, y between 255 and 335
            if 330 <= nx <= 365 and 255 <= ny <= 335:
                is_g = True

            # Top terminal cap
            if 290 <= nx <= 335 and 145 <= ny <= 185:
                td = math.sqrt((nx - 312)**2 + (ny - 165)**2)
                if td <= 25:
                    is_g = True

            if is_g:
                # Gradient fill from #38bdf8 to #6366f1
                gt = (nx + ny) / 512.0
                gr = int(56 * (1 - gt) + 99 * gt)
                gg = int(189 * (1 - gt) + 102 * gt)
                gb = int(248 * (1 - gt) + 241 * gt)
                set_pixel(x, y, gr, gg, gb, 1.0)

            # Core cyber pulse dot at (250, 205)
            dot_dist = math.sqrt((nx - 250)**2 + (ny - 205)**2)
            if dot_dist <= 15:
                set_pixel(x, y, 56, 189, 248, 1.0)
            elif dot_dist <= 26:
                set_pixel(x, y, 14, 165, 233, (1 - (dot_dist - 15) / 11) * 0.4)

    # Encode as PNG
    raw_data = bytearray()
    for y in range(H):
        raw_data.append(0)
        for x in range(W):
            r, g, b = pixels[y * W + x]
            raw_data.extend((r, g, b))

    def make_chunk(chunk_type, data):
        crc = zlib.crc32(chunk_type + data) & 0xffffffff
        return struct.pack('>I', len(data)) + chunk_type + data + struct.pack('>I', crc)

    png = b'\x89PNG\r\n\x1a\n'
    png += make_chunk(b'IHDR', struct.pack('>IIBBBBB', W, H, 8, 2, 0, 0, 0))
    png += make_chunk(b'IDAT', zlib.compress(raw_data, 9))
    png += make_chunk(b'IEND', b'')

    with open(out_path, 'wb') as f:
        f.write(png)
    print(f"Generated {out_path}: {len(png)} bytes")

render_favicon_png(180, r"c:\Users\Yen\.gemini\antigravity\scratch\geoffrey-portfolio\public\apple-touch-icon.png")
render_favicon_png(64, r"c:\Users\Yen\.gemini\antigravity\scratch\geoffrey-portfolio\public\favicon-64x64.png")
render_favicon_png(32, r"c:\Users\Yen\.gemini\antigravity\scratch\geoffrey-portfolio\public\favicon-32x32.png")

