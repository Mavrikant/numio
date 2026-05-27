import { describe, it, expect } from "vitest";
import { rollDice } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("rollDice", () => {
  it("rolls the right number of dice in range", () => {
    const r = rollDice(5, 6, seeded());
    expect(r.rolls).toHaveLength(5);
    expect(r.rolls.every((x) => x >= 1 && x <= 6)).toBe(true);
  });
  it("computes sum and average", () => {
    const r = rollDice(3, 6, seeded(2));
    expect(r.sum).toBe(r.rolls.reduce((a, b) => a + b, 0));
    expect(r.average).toBeCloseTo(r.sum / 3, 6);
  });
  it("is deterministic with a seeded rng", () => {
    expect(rollDice(10, 20, seeded(9)).rolls).toEqual(rollDice(10, 20, seeded(9)).rolls);
  });
});
