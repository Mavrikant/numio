export interface DiceResult {
  readonly rolls: number[];
  readonly sum: number;
  readonly average: number;
}

/** Roll `count` dice each with `sides` faces. `rng()` returns [0, 1). */
export function rollDice(count: number, sides: number, rng: () => number): DiceResult {
  const n = Math.max(1, Math.min(1000, Math.floor(count)));
  const s = Math.max(2, Math.min(1000, Math.floor(sides)));
  const rolls = Array.from({ length: n }, () => 1 + Math.floor(rng() * s));
  const sum = rolls.reduce((a, b) => a + b, 0);
  return { rolls, sum, average: sum / n };
}
