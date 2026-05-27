import { describe, it, expect } from "vitest";
import { flipCoins } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("flipCoins", () => {
  it("flips the requested count", () => {
    const r = flipCoins(100, seeded());
    expect(r.flips).toHaveLength(100);
    expect(r.heads + r.tails).toBe(100);
  });
  it("only produces H or T", () => {
    expect(flipCoins(50, seeded(2)).flips.every((f) => f === "H" || f === "T")).toBe(true);
  });
  it("is roughly balanced over many flips", () => {
    const r = flipCoins(10000, seeded(5));
    expect(r.heads).toBeGreaterThan(4000);
    expect(r.heads).toBeLessThan(6000);
  });
});
