export interface CoinResult {
  readonly flips: ReadonlyArray<"H" | "T">;
  readonly heads: number;
  readonly tails: number;
}

/** Flip `count` coins. `rng()` returns [0, 1); ≥0.5 is heads. */
export function flipCoins(count: number, rng: () => number): CoinResult {
  const n = Math.max(1, Math.min(100000, Math.floor(count)));
  const flips = Array.from({ length: n }, () => (rng() < 0.5 ? "T" : "H") as "H" | "T");
  const heads = flips.filter((f) => f === "H").length;
  return { flips, heads, tails: n - heads };
}
