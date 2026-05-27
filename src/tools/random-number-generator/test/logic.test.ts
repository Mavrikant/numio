import { describe, it, expect } from "vitest";
import { randomIntegers } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("randomIntegers", () => {
  it("produces the requested count within range", () => {
    const out = randomIntegers(1, 6, 20, false, seeded());
    expect(out).toHaveLength(20);
    expect(out.every((n) => n >= 1 && n <= 6)).toBe(true);
  });
  it("produces unique values when possible", () => {
    const out = randomIntegers(1, 50, 50, true, seeded(3));
    expect(new Set(out).size).toBe(out.length);
  });
  it("handles reversed min/max", () => {
    const out = randomIntegers(10, 1, 5, false, seeded());
    expect(out.every((n) => n >= 1 && n <= 10)).toBe(true);
  });
  it("is deterministic with a seeded rng", () => {
    expect(randomIntegers(1, 1000, 10, false, seeded(7))).toEqual(randomIntegers(1, 1000, 10, false, seeded(7)));
  });
});
