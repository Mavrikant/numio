const round = (n: number): number => Math.round(n * 10000) / 10000;

/**
 * Build a responsive CSS `clamp()` value for fluid sizing between a min and max
 * pixel size across a min and max viewport width. Sizes are emitted in rem
 * (assuming a 16px root) with a viewport-relative slope.
 */
export function buildClamp(minPx: number, maxPx: number, minVw: number, maxVw: number): string {
  const minRem = round(minPx / 16);
  const maxRem = round(maxPx / 16);
  const slope = maxVw === minVw ? 0 : (maxPx - minPx) / (maxVw - minVw);
  const interceptRem = round((minPx - slope * minVw) / 16);
  const slopeVw = round(slope * 100);
  return `clamp(${minRem}rem, ${interceptRem}rem + ${slopeVw}vw, ${maxRem}rem)`;
}
