/** A random #rrggbb hex color. `rng()` returns [0, 1). */
export function randomHexColor(rng: () => number): string {
  const n = Math.floor(rng() * 0x1000000);
  return "#" + n.toString(16).padStart(6, "0");
}

/** Generate `count` random hex colors. */
export function randomColors(count: number, rng: () => number): string[] {
  const n = Math.max(1, Math.min(1000, Math.floor(count)));
  return Array.from({ length: n }, () => randomHexColor(rng));
}
