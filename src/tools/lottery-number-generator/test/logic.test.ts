import { describe, it, expect } from "vitest";
import { pickUnique, drawLottery, PRESETS } from "../logic";

function seeded(seed = 1): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 0x100000000;
  };
}

describe("lottery-number-generator", () => {
  it("returns the requested count, sorted ascending", () => {
    const r = pickUnique(5, 50, seeded(7));
    expect(r).toHaveLength(5);
    expect(r).toEqual([...r].sort((a, b) => a - b));
  });
  it("only emits unique numbers within range", () => {
    const r = pickUnique(6, 49, seeded(3));
    expect(new Set(r).size).toBe(r.length);
    expect(r.every((n) => n >= 1 && n <= 49)).toBe(true);
  });
  it("clamps when count exceeds the pool", () => {
    expect(pickUnique(10, 3, seeded(1))).toHaveLength(3);
  });
  it("draws main + bonus for each preset", () => {
    for (const p of PRESETS) {
      const d = drawLottery(p, seeded(2));
      expect(d.main).toHaveLength(p.mainCount);
      expect(d.bonus).toHaveLength(p.bonusCount);
    }
  });
});
