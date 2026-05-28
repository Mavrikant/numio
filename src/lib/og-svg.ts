/**
 * Shared 1200×630 Open Graph SVG builder used by /og/{category}/{slug}.svg
 * (calculators) and /og/tools/{slug}.svg (tools). Extracted to keep the two
 * dynamic image routes in sync.
 */
import { SITE_NAME } from "../config/site";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function wrapText(text: string, maxChars: number, maxLines: number): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    if (lines.length >= maxLines) break;
    if (current.length === 0) {
      current = word;
    } else if (current.length + 1 + word.length <= maxChars) {
      current += " " + word;
    } else {
      lines.push(current);
      current = word;
      if (lines.length >= maxLines) break;
    }
  }
  if (current && lines.length < maxLines) {
    if (lines.length === maxLines - 1 && current.length > maxChars) {
      current = current.slice(0, maxChars - 1) + "…";
    }
    lines.push(current);
  }

  return lines;
}

export function buildOgSvg(
  title: string,
  short: string,
  category: string,
  icon: string,
): string {
  const W = 1200;
  const H = 630;

  const titleLines = wrapText(title, 32, 2);
  const descTruncated = short.length > 120 ? short.slice(0, 117) + "…" : short;
  const descLines = wrapText(descTruncated, 72, 2);

  const titleFontSize = 64;
  const titleLineHeight = titleFontSize * 1.2;
  const descFontSize = 28;
  const descLineHeight = descFontSize * 1.4;

  const totalTitleH = titleLines.length * titleLineHeight;
  const totalDescH = descLines.length * descLineHeight + 20;
  const contentH = totalTitleH + totalDescH;
  const centerY = H / 2 - contentH / 2 + 40;

  let titleSvg = "";
  for (let i = 0; i < titleLines.length; i++) {
    const line = titleLines[i] ?? "";
    const y = centerY + i * titleLineHeight;
    titleSvg += `<text x="${W / 2}" y="${y}" font-size="${titleFontSize}" font-weight="700" fill="white" text-anchor="middle" font-family="Inter, system-ui, -apple-system, sans-serif">${esc(line)}</text>\n    `;
  }

  let descSvg = "";
  const descStartY = centerY + totalTitleH + 20;
  for (let i = 0; i < descLines.length; i++) {
    const line = descLines[i] ?? "";
    const y = descStartY + i * descLineHeight;
    descSvg += `<text x="${W / 2}" y="${y}" font-size="${descFontSize}" fill="rgba(203,213,225,0.9)" text-anchor="middle" font-family="Inter, system-ui, -apple-system, sans-serif">${esc(line)}</text>\n    `;
  }

  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e3a5f"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="none" stroke="rgba(99,102,241,0.05)" stroke-width="1"/>
  <rect x="0" y="0" width="${W}" height="5" fill="url(#accent)"/>
  <rect x="0" y="${H - 5}" width="${W}" height="5" fill="url(#accent)"/>

  <text x="48" y="64" font-size="22" font-weight="600" fill="rgba(148,163,184,0.9)" font-family="Inter, system-ui, -apple-system, sans-serif">${esc(SITE_NAME)}</text>

  <circle cx="${W / 2}" cy="88" r="2" fill="rgba(99,102,241,0.6)"/>

  ${titleSvg}
  ${descSvg}

  <rect x="${W - 220}" y="${H - 72}" width="180" height="36" rx="18" fill="rgba(99,102,241,0.25)"/>
  <text x="${W - 130}" y="${H - 48}" font-size="18" fill="rgba(165,180,252,0.95)" text-anchor="middle" font-family="Inter, system-ui, -apple-system, sans-serif">${esc(categoryLabel)}</text>

  <text x="${W - 48}" y="${H - 48}" font-size="16" fill="rgba(148,163,184,0.5)" text-anchor="end" font-family="Inter, system-ui, -apple-system, sans-serif">${esc(icon)}</text>
</svg>`;
}
