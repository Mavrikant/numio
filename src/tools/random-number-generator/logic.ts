/**
 * Generate `count` random integers in [min, max] inclusive. When `unique` is
 * set and the range is large enough, no value repeats. `rng()` returns [0, 1).
 */
export function randomIntegers(
  min: number,
  max: number,
  count: number,
  unique: boolean,
  rng: () => number,
): number[] {
  const lo = Math.ceil(Math.min(min, max));
  const hi = Math.floor(Math.max(min, max));
  const span = hi - lo + 1;
  const n = Math.max(1, Math.min(10000, Math.floor(count)));

  if (unique && span >= n) {
    const pool = new Set<number>();
    while (pool.size < n) pool.add(lo + Math.floor(rng() * span));
    return [...pool];
  }
  return Array.from({ length: n }, () => lo + Math.floor(rng() * span));
}
