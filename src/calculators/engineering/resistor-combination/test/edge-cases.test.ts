import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("resistor-combination edge cases", () => {
  it("parallel resistance is always below the smaller resistor", () => {
    const r = compute({ r1: 100, r2: 200 });
    expect(r.parallel).toBeLessThan(100);
  });

  it("series resistance is always above the larger resistor", () => {
    const r = compute({ r1: 100, r2: 200 });
    expect(r.series).toBeGreaterThan(200);
  });

  it("a much larger resistor barely changes the parallel result", () => {
    // 10 Ω parallel 1,000,000 Ω ≈ 10 Ω (dominated by the smaller).
    const r = compute({ r1: 10, r2: 1_000_000 });
    expect(r.parallel).toBeCloseTo(9.9999, 3);
  });

  it("rejects zero or negative resistance", () => {
    expect(inputSchema.safeParse({ r1: 0, r2: 100 }).success).toBe(false);
    expect(inputSchema.safeParse({ r1: -5, r2: 100 }).success).toBe(false);
  });
});
