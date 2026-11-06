import zlib
import struct
import math

W = 1200
H = 630

# Simple clean 8x12 font definition for critical characters, or a flexible rasterizer
# Let's create an anti-aliased font rasterizer using basic vector line / glyph descriptions or clean bitmaps
# For ultra-crisp results, let's design glyph definitions:
GLYPHS = {
    'A': [" ### ", "#   #", "#   #", "#####", "#   #", "#   #", "#   #"],
    'B': ["#### ", "#   #", "#   #", "#### ", "#   #", "#   #", "#### "],
    'C': [" ####", "#    ", "#    ", "#    ", "#    ", "#    ", " ####"],
    'D': ["#### ", "#   #", "#   #", "#   #", "#   #", "#   #", "#### "],
    'E': ["#####", "#    ", "#    ", "#### ", "#    ", "#    ", "#####"],
    'F': ["#####", "#    ", "#    ", "#### ", "#    ", "#    ", "#    "],
    'G': [" ####", "#    ", "#    ", "# ###", "#   #", "#   #", " ####"],
    'H': ["#   #", "#   #", "#   #", "#####", "#   #", "#   #", "#   #"],
    'I': ["#####", "  #  ", "  #  ", "  #  ", "  #  ", "  #  ", "#####"],
    'J': ["  ###", "    #", "    #", "    #", "#   #", "#   #", " ### "],
    'K': ["#   #", "#  # ", "# #  ", "##   ", "# #  ", "#  # ", "#   #"],
    'L': ["#    ", "#    ", "#    ", "#    ", "#    ", "#    ", "#####"],
    'M': ["#   #", "## ##", "# # #", "#   #", "#   #", "#   #", "#   #"],
    'N': ["#   #", "##  #", "# # #", "#  ##", "#   #", "#   #", "#   #"],
    'O': [" ### ", "#   #", "#   #", "#   #", "#   #", "#   #", " ### "],
    'P': ["#### ", "#   #", "#   #", "#### ", "#    ", "#    ", "#    "],
    'Q': [" ### ", "#   #", "#   #", "#   #", "# # #", "#  # ", " ## #"],
    'R': ["#### ", "#   #", "#   #", "#### ", "# #  ", "#  # ", "#   #"],
    'S': [" ####", "#    ", "#    ", " ### ", "    #", "    #", "#### "],
    'T': ["#####", "  #  ", "  #  ", "  #  ", "  #  ", "  #  ", "  #  "],
    'U': ["#   #", "#   #", "#   #", "#   #", "#   #", "#   #", " ### "],
    'V': ["#   #", "#   #", "#   #", "#   #", " # # ", " # # ", "  #  "],
    'W': ["#   #", "#   #", "#   #", "# # #", "# # #", "## ##", "#   #"],
    'X': ["#   #", " # # ", "  #  ", "  #  ", "  #  ", " # # ", "#   #"],
    'Y': ["#   #", "#   #", " # # ", "  #  ", "  #  ", "  #  ", "  #  "],
    'Z': ["#####", "    #", "   # ", "  #  ", " #   ", "#    ", "#####"],
    '0': [" ### ", "#  ##", "# # #", "# # #", "##  #", "#   #", " ### "],
    '1': ["  #  ", " ##  ", "  #  ", "  #  ", "  #  ", "  #  ", " ### "],
    '2': [" ### ", "#   #", "    #", "  ## ", " #   ", "#    ", "#####"],
    '3': ["#### ", "    #", "    #", " ### ", "    #", "    #", "#### "],
    '4': ["#   #", "#   #", "#   #", "#####", "    #", "    #", "    #"],
    '5': ["#####", "#    ", "#    ", "#### ", "    #", "    #", "#### "],
    '6': [" ### ", "#    ", "#### ", "#   #", "#   #", "#   #", " ### "],
    '7': ["#####", "    #", "   # ", "  #  ", "  #  ", "  #  ", "  #  "],
    '8': [" ### ", "#   #", "#   #", " ### ", "#   #", "#   #", " ### "],
    '9': [" ### ", "#   #", "#   #", " ####", "    #", "    #", " ### "],
    ' ': ["     ", "     ", "     ", "     ", "     ", "     ", "     "],
    '.': ["     ", "     ", "     ", "     ", "     ", " ##  ", " ##  "],
    ',': ["     ", "     ", "     ", "     ", "     ", "  #  ", " #   "],
    ':': ["     ", " ##  ", " ##  ", "     ", " ##  ", " ##  ", "     "],
    '-': ["     ", "     ", "     ", "#####", "     ", "     ", "     "],
    '—': ["     ", "     ", "     ", "#####", "     ", "     ", "     "],
    '|': ["  #  ", "  #  ", "  #  ", "  #  ", "  #  ", "  #  ", "  #  "],
    '/': ["    #", "   # ", "  #  ", "  #  ", " #   ", "#    ", "#    "],
    '(': ["  ## ", " #   ", "#    ", "#    ", "#    ", " #   ", "  ## "],
    ')': [" ##  ", "   # ", "    #", "    #", "    #", "   # ", " ##  "],
    '&': [" ##  ", "#  # ", " ##  ", "# # #", "#  # ", "#  # ", " ## #"],
    '+': ["     ", "  #  ", "  #  ", "#####", "  #  ", "  #  ", "     "],
    '@': [" ### ", "#   #", "## ##", "# # #", "# ## ", "#    ", " ### "],
    '•': ["     ", "     ", "  #  ", " ### ", "  #  ", "     ", "     "],
}

# Image buffer: W * H of [r, g, b]
pixels = [[10, 14, 23] for _ in range(W * H)]

def set_pixel(x, y, r, g, b, alpha=1.0):
    if 0 <= x < W and 0 <= y < H:
        idx = y * W + x
        if alpha >= 1.0:
            pixels[idx] = [r, g, b]
        else:
            cr, cg, cb = pixels[idx]
            nr = int(cr * (1 - alpha) + r * alpha)
            ng = int(cg * (1 - alpha) + g * alpha)
            nb = int(cb * (1 - alpha) + b * alpha)
            pixels[idx] = [nr, ng, nb]

# 1. Fill rich gradient and subtle tech grid
for y in range(H):
    ny = y / H
    for x in range(W):
        nx = x / W
        
        # Base dark blue/slate gradient
        r = int(9 + ny * 6 + nx * 4)
        g = int(14 + ny * 10 + nx * 6)
        b = int(24 + ny * 20 + nx * 14)

        # Subtle glowing circles
        # Cyan glow around (300, 200)
        d1 = math.sqrt((x - 280)**2 + (y - 180)**2)
        if d1 < 450:
            glow1 = (1 - d1 / 450)**2 * 0.22
            r = int(r * (1 - glow1) + 14 * glow1)
            g = int(g * (1 - glow1) + 165 * glow1)
            b = int(b * (1 - glow1) + 233 * glow1)

        # Purple glow around (950, 450)
        d2 = math.sqrt((x - 960)**2 + (y - 420)**2)
        if d2 < 420:
            glow2 = (1 - d2 / 420)**2 * 0.18
            r = int(r * (1 - glow2) + 99 * glow2)
            g = int(g * (1 - glow2) + 102 * glow2)
            b = int(b * (1 - glow2) + 241 * glow2)

        # Subtle cyber grid lines every 40px
        if (x % 40 == 0 or y % 40 == 0) and (x > 40 and x < W - 40 and y > 40 and y < H - 40):
            r = min(255, r + 4)
            g = min(255, g + 8)
            b = min(255, b + 14)

        pixels[y * W + x] = [r, g, b]

# 2. Draw sleek Card boundary
card_x1, card_y1, card_x2, card_y2 = 60, 60, W - 60, H - 60
card_w = card_x2 - card_x1
card_h = card_y2 - card_y1

# Card background fill with slight glassmorphism tint
for y in range(card_y1, card_y2):
    for x in range(card_x1, card_x2):
        set_pixel(x, y, 15, 23, 42, 0.45)

# Card border (1px high-tech glowing border)
for x in range(card_x1, card_x2):
    # gradient border from cyan to indigo
    t = (x - card_x1) / card_w
    br = int(14 * (1 - t) + 99 * t)
    bg = int(165 * (1 - t) + 102 * t)
    bb = int(233 * (1 - t) + 241 * t)
    set_pixel(x, card_y1, br, bg, bb, 0.6)
    set_pixel(x, card_y2, br, bg, bb, 0.3)

for y in range(card_y1, card_y2):
    set_pixel(card_x1, y, 14, 165, 233, 0.5)
    set_pixel(card_x2, y, 99, 102, 241, 0.4)

# Text renderer function
def draw_text(text, start_x, start_y, scale=2, color=(255, 255, 255), spacing=1):
    cx = start_x
    for char in text.upper():
        glyph = GLYPHS.get(char, GLYPHS[' '])
        gw = len(glyph[0])
        gh = len(glyph)
        for gy in range(gh):
            row = glyph[gy]
            for gx in range(gw):
                if row[gx] == '#':
                    for sy in range(scale):
                        for sx in range(scale):
                            set_pixel(cx + gx * scale + sx, start_y + gy * scale + sy, color[0], color[1], color[2])
        cx += (gw + spacing) * scale

def draw_pill(text, x, y, bg_color=(30, 41, 59), border_color=(56, 189, 248), text_color=(224, 242, 254), scale=2):
    char_w = 6 * scale
    pad_x = 14
    pad_y = 8
    pill_w = len(text) * char_w + pad_x * 2
    pill_h = 7 * scale + pad_y * 2
    
    # Fill
    for py in range(y, y + pill_h):
        for px in range(x, x + pill_w):
            set_pixel(px, py, bg_color[0], bg_color[1], bg_color[2], 0.85)
            
    # Border
    for px in range(x, x + pill_w):
        set_pixel(px, y, border_color[0], border_color[1], border_color[2], 0.8)
        set_pixel(px, y + pill_h - 1, border_color[0], border_color[1], border_color[2], 0.8)
    for py in range(y, y + pill_h):
        set_pixel(x, py, border_color[0], border_color[1], border_color[2], 0.8)
        set_pixel(x + pill_w - 1, py, border_color[0], border_color[1], border_color[2], 0.8)
        
    draw_text(text, x + pad_x, y + pad_y, scale=scale, color=text_color)
    return pill_w

# Draw Top Header Badge: JEFF.MOONLIST.SITE
badge_x = 110
badge_y = 115

# Green active indicator dot
for dy in range(-4, 5):
    for dx in range(-4, 5):
        if dx*dx + dy*dy <= 16:
            set_pixel(badge_x + dx, badge_y + 8 + dy, 16, 185, 129, 0.95)
# Glow
for dy in range(-7, 8):
    for dx in range(-7, 8):
        if dx*dx + dy*dy <= 49:
            set_pixel(badge_x + dx, badge_y + 8 + dy, 52, 211, 153, 0.3)

draw_text("JEFF.MOONLIST.SITE  |  OFFICIAL TECHNICAL PORTFOLIO", badge_x + 18, badge_y, scale=2, color=(56, 189, 248))

# Main Title: GEOFFREY MWANGI (JEFF)
draw_text("GEOFFREY MWANGI", 110, 165, scale=7, color=(255, 255, 255))

# Subtitle
draw_text("SOFTWARE ENGINEER & SYSTEM ARCHITECT", 110, 270, scale=3, color=(148, 163, 184))

# Bio summary line
draw_text("EVM SMART CONTRACTS  -  FLUTTER CLIENTS  -  SCALABLE BACKENDS", 110, 325, scale=2, color=(203, 213, 225))

# Tech Stack Pills
curr_x = 110
pill_y = 380
curr_x += draw_pill("MOONLIST ECOSYSTEM", curr_x, pill_y, bg_color=(15, 23, 42), border_color=(14, 165, 233), text_color=(56, 189, 248), scale=2) + 16
curr_x += draw_pill("FLUTTER / MOBILE", curr_x, pill_y, bg_color=(15, 23, 42), border_color=(99, 102, 241), text_color=(165, 180, 252), scale=2) + 16
curr_x += draw_pill("SOLIDITY / EVM", curr_x, pill_y, bg_color=(15, 23, 42), border_color=(168, 85, 247), text_color=(216, 180, 254), scale=2) + 16
curr_x += draw_pill("REACT / TYPESCRIPT", curr_x, pill_y, bg_color=(15, 23, 42), border_color=(34, 197, 94), text_color=(134, 239, 172), scale=2)

# Bottom Bar Info
draw_text("NAIROBI, KENYA", 110, 495, scale=2, color=(100, 116, 139))
draw_text("GITHUB.COM/YENMULLA", 350, 495, scale=2, color=(100, 116, 139))
draw_text("T.ME/MOON_JEFF", 690, 495, scale=2, color=(100, 116, 139))
draw_text("JEFF@APP.MOONLIST.APP", 920, 495, scale=2, color=(56, 189, 248))

# Encode as standard PNG
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

out_path = r"c:\Users\Yen\.gemini\antigravity\scratch\geoffrey-portfolio\public\og-image.png"
with open(out_path, 'wb') as f:
    f.write(png)

print("Generated og-image.png:", len(png), "bytes")

