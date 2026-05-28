export interface ViewportInfo {
  readonly viewportWidth: number;
  readonly viewportHeight: number;
  readonly screenWidth: number;
  readonly screenHeight: number;
  readonly devicePixelRatio: number;
  readonly orientation: string;
  readonly aspectRatio: string;
}

/** Format an aspect ratio as a simplified "W:H" pair. */
export function aspectRatio(width: number, height: number): string {
  if (width <= 0 || height <= 0) return "—";
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(width, height);
  return `${width / g}:${height / g}`;
}
