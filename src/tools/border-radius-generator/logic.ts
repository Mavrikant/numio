/** Build a CSS border-radius value from four corner radii (px). */
export function buildBorderRadius(tl: number, tr: number, br: number, bl: number): string {
  return `${tl}px ${tr}px ${br}px ${bl}px`;
}
