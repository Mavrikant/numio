/** Build an inline SVG placeholder of `width × height` with optional label and colours. */
export function buildPlaceholderSvg(
  width: number,
  height: number,
  text: string,
  bg: string,
  fg: string,
): string {
  const w = Math.max(1, Math.round(width));
  const h = Math.max(1, Math.round(height));
  const label = (text || `${w}×${h}`).replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]!);
  const fontSize = Math.max(12, Math.min(w, h) * 0.18);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="100%" height="100%" fill="${bg}"/><text x="50%" y="50%" dy=".35em" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${fontSize}" fill="${fg}">${label}</text></svg>`;
}

/** Wrap an SVG string as a base64 data URL for use in `<img src>` or CSS `url()`. */
export function svgToDataUrl(svg: string): string {
  if (typeof btoa === "function") return `data:image/svg+xml;base64,${btoa(svg)}`;
  return `data:image/svg+xml;base64,${Buffer.from(svg, "utf-8").toString("base64")}`;
}
