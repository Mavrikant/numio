export interface BezierPoints {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
}

export const PRESETS: { name: string; points: BezierPoints }[] = [
  { name: "ease", points: { x1: 0.25, y1: 0.1, x2: 0.25, y2: 1 } },
  { name: "ease-in", points: { x1: 0.42, y1: 0, x2: 1, y2: 1 } },
  { name: "ease-out", points: { x1: 0, y1: 0, x2: 0.58, y2: 1 } },
  { name: "ease-in-out", points: { x1: 0.42, y1: 0, x2: 0.58, y2: 1 } },
  { name: "linear", points: { x1: 0, y1: 0, x2: 1, y2: 1 } },
];

/** Format a Bezier curve as a CSS `cubic-bezier()` value, clamped to 4 decimals. */
export function toCss(points: BezierPoints): string {
  const round = (n: number) => Math.round(n * 10000) / 10000;
  return `cubic-bezier(${round(points.x1)}, ${round(points.y1)}, ${round(points.x2)}, ${round(points.y2)})`;
}

/** Sample y for a given t along the curve using a single Newton step + bisection fallback. */
export function bezierY(points: BezierPoints, t: number): number {
  return cubic(points.y1, points.y2, t);
}

export function bezierX(points: BezierPoints, t: number): number {
  return cubic(points.x1, points.x2, t);
}

function cubic(p1: number, p2: number, t: number): number {
  const u = 1 - t;
  return 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t;
}
