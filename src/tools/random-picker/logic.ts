/** Parse a textarea into a clean list of items (one per non-blank line). */
export function parseItems(text: string): string[] {
  return text.split(/\r?\n/).map((l) => l.trim()).filter((l) => l !== "");
}

/**
 * Pick `count` items at random from `items`. With `unique`, items are drawn
 * without replacement (Fisher–Yates) and the result is capped at the list size.
 * `rng()` returns [0, 1).
 */
export function pickItems(items: string[], count: number, unique: boolean, rng: () => number): string[] {
  if (items.length === 0) return [];
  const n = Math.max(1, Math.floor(count));
  if (unique) {
    const pool = [...items];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [pool[i], pool[j]] = [pool[j]!, pool[i]!];
    }
    return pool.slice(0, Math.min(n, pool.length));
  }
  return Array.from({ length: n }, () => items[Math.floor(rng() * items.length)]!);
}
