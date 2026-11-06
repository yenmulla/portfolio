import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <!-- Background Gradient -->
    <linearGradient id="canvasBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080b11" />
      <stop offset="45%" stop-color="#0d131f" />
      <stop offset="100%" stop-color="#05070b" />
    </linearGradient>

    <!-- Ambient Glows -->
    <radialGradient id="cyanAura" cx="15%" cy="20%" r="55%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.22" />
      <stop offset="60%" stop-color="#0ea5e9" stop-opacity="0.04" />
      <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0" />
    </radialGradient>

    <radialGradient id="indigoAura" cx="85%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.2" />
      <stop offset="65%" stop-color="#6366f1" stop-opacity="0.03" />
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
    </radialGradient>

    <!-- Card Frame Gradient -->
    <linearGradient id="cardBorder" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.5" />
      <stop offset="30%" stop-color="#1e293b" stop-opacity="0.8" />
      <stop offset="70%" stop-color="#334155" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#818cf8" stop-opacity="0.5" />
    </linearGradient>

    <!-- Glassmorphism Card Fill -->
    <linearGradient id="cardFill" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" stop-opacity="0.82" />
      <stop offset="100%" stop-color="#090d16" stop-opacity="0.88" />
    </linearGradient>

    <!-- Pill Gradients -->
    <linearGradient id="pillGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05" />
    </linearGradient>
    <linearGradient id="pillGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.05" />
    </linearGradient>
    <linearGradient id="pillGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#9333ea" stop-opacity="0.05" />
    </linearGradient>
    <linearGradient id="pillGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15" />
      <stop offset="100%" stop-color="#059669" stop-opacity="0.05" />
    </linearGradient>

    <!-- Monogram Gradients -->
    <linearGradient id="gLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>

    <filter id="cardGlow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="16" stdDeviation="24" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Canvas Background -->
  <rect width="1200" height="630" fill="url(#canvasBg)" />
  <rect width="1200" height="630" fill="url(#cyanAura)" />
  <rect width="1200" height="630" fill="url(#indigoAura)" />

  <!-- Subtle Architectural Grid Pattern -->
  <g stroke="#334155" stroke-opacity="0.12" stroke-width="1">
    <line x1="120" y1="0" x2="120" y2="630" />
    <line x1="240" y1="0" x2="240" y2="630" />
    <line x1="360" y1="0" x2="360" y2="630" />
    <line x1="480" y1="0" x2="480" y2="630" />
    <line x1="600" y1="0" x2="600" y2="630" />
    <line x1="720" y1="0" x2="720" y2="630" />
    <line x1="840" y1="0" x2="840" y2="630" />
    <line x1="960" y1="0" x2="960" y2="630" />
    <line x1="1080" y1="0" x2="1080" y2="630" />

    <line x1="0" y1="105" x2="1200" y2="105" />
    <line x1="0" y1="210" x2="1200" y2="210" />
    <line x1="0" y1="315" x2="1200" y2="315" />
    <line x1="0" y1="420" x2="1200" y2="420" />
    <line x1="0" y1="525" x2="1200" y2="525" />
  </g>

  <!-- Main Card Container -->
  <g filter="url(#cardGlow)">
    <rect x="54" y="50" width="1092" height="530" rx="24" fill="url(#cardFill)" stroke="url(#cardBorder)" stroke-width="1.5" />
  </g>

  <!-- Top Navigation / Status Header inside Card -->
  <g transform="translate(104, 98)">
    <!-- Brand Logo Squircle -->
    <g transform="translate(0, 0)">
      <rect width="44" height="44" rx="12" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5" />
      <path d="M 30 16 C 27 13, 22 12, 18 14 C 13 16, 10 21, 10 26 C 10 33, 15 37, 21 37 C 27 37, 32 33, 33 27 L 23 27 L 23 23 L 33 23 L 33 27 Z" fill="url(#gLogoGrad)" />
      <circle cx="22" cy="19" r="2.5" fill="#38bdf8" />
    </g>

    <!-- Verified Domain Pill -->
    <g transform="translate(58, 4)">
      <rect width="268" height="36" rx="18" fill="#1e293b" fill-opacity="0.75" stroke="#334155" stroke-width="1" />
      <circle cx="20" cy="18" r="4.5" fill="#10b981" />
      <circle cx="20" cy="18" r="9" fill="#10b981" fill-opacity="0.2" />
      <text x="36" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="13.5" font-weight="600" fill="#f1f5f9" letter-spacing="0.5">jeff.moonlist.site</text>
      <text x="175" y="23" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="12" font-weight="500" fill="#64748b">• Verified</text>
    </g>

    <!-- Engineering Track Badge on Right -->
    <g transform="translate(680, 4)">
      <rect width="260" height="36" rx="8" fill="#1e293b" fill-opacity="0.5" stroke="#334155" stroke-width="1" />
      <text x="18" y="22.5" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="12.5" font-weight="500" fill="#94a3b8">ENGINEERING TRACK RECORD</text>
    </g>
  </g>

  <!-- Primary Headline & Identity -->
  <g transform="translate(104, 230)">
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="54" font-weight="800" fill="#ffffff" letter-spacing="-1.2">Geoffrey Githii</text>
    <text x="390" y="-3" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="34" font-weight="600" fill="#64748b">(Jeff)</text>

    <!-- Role / Title -->
    <text x="0" y="48" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="24" font-weight="600" fill="#38bdf8" letter-spacing="-0.2">
      Software Engineer &amp; System Architect
    </text>

    <!-- Summary Bio -->
    <text x="0" y="94" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
      Delivering robust system architecture, cross-platform mobile apps, EVM smart contracts,
    </text>
    <text x="0" y="122" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif" font-size="18" font-weight="400" fill="#94a3b8">
      and high-throughput decentralized protocols across production environments.
    </text>
  </g>

  <!-- Capability Badges / Tech Stack -->
  <g transform="translate(104, 415)">
    <!-- Badge 1: Moonlist Ecosystem -->
    <g transform="translate(0, 0)">
      <rect width="186" height="40" rx="8" fill="url(#pillGrad1)" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="18" cy="20" r="4" fill="#0ea5e9" />
      <text x="32" y="25" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#38bdf8">Moonlist Ecosystem</text>
    </g>

    <!-- Badge 2: Flutter / Dart -->
    <g transform="translate(202, 0)">
      <rect width="158" height="40" rx="8" fill="url(#pillGrad2)" stroke="#6366f1" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="18" cy="20" r="4" fill="#6366f1" />
      <text x="32" y="25" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#a5b4fc">Flutter &amp; Dart</text>
    </g>

    <!-- Badge 3: Solidity & EVM -->
    <g transform="translate(376, 0)">
      <rect width="176" height="40" rx="8" fill="url(#pillGrad3)" stroke="#a855f7" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="18" cy="20" r="4" fill="#a855f7" />
      <text x="32" y="25" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#d8b4fe">Solidity &amp; EVM</text>
    </g>

    <!-- Badge 4: React & TypeScript -->
    <g transform="translate(568, 0)">
      <rect width="194" height="40" rx="8" fill="url(#pillGrad4)" stroke="#10b981" stroke-opacity="0.4" stroke-width="1" />
      <circle cx="18" cy="20" r="4" fill="#10b981" />
      <text x="32" y="25" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="13" font-weight="600" fill="#6ee7b7">React &amp; TypeScript</text>
    </g>

    <!-- Badge 5: Distributed Systems -->
    <g transform="translate(778, 0)">
      <rect width="192" height="40" rx="8" fill="#1e293b" fill-opacity="0.7" stroke="#475569" stroke-width="1" />
      <text x="18" y="25" font-family="ui-monospace, 'JetBrains Mono', monospace" font-size="13" font-weight="500" fill="#cbd5e1">Distributed Systems</text>
    </g>
  </g>

  <!-- Divider Line -->
  <line x1="104" y1="495" x2="1084" y2="495" stroke="#1e293b" stroke-width="1" />

  <!-- Bottom Proof Bar -->
  <g transform="translate(104, 532)">
    <g transform="translate(0, 0)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#64748b">📍 Nairobi, Kenya</text>
    </g>

    <g transform="translate(230, 0)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#64748b">🐙 github.com/yenmulla</text>
    </g>

    <g transform="translate(500, 0)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="500" fill="#64748b">✈️ t.me/moon_jeff</text>
    </g>

    <g transform="translate(760, 0)">
      <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="600" fill="#38bdf8">✉️ jeff@app.moonlist.app</text>
    </g>
  </g>
</svg>`;

const publicDir = path.resolve('public');
const svgPath = path.join(publicDir, 'og-image.svg');
const pngPath = path.join(publicDir, 'og-image.png');

// 1. Write the SVG
fs.writeFileSync(svgPath, svgContent, 'utf-8');
console.log('Written:', svgPath);

// 2. Render high-res PNG using Resvg
const resvg = new Resvg(svgContent, {
  fitTo: {
    mode: 'width',
    value: 1200
  },
  font: {
    loadSystemFonts: true,
    defaultFontFamily: 'Segoe UI'
  }
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();
fs.writeFileSync(pngPath, pngBuffer);
console.log('Rendered studio-quality PNG:', pngPath, pngBuffer.length, 'bytes');
