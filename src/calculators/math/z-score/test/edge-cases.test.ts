import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Z-Score — edge cases", () => {
  const parse = (value: number, mean: number, stdDev: number) => {
    try {
      return calculator.compute(calculator.inputSchema.parse({ value, mean, standardDeviation: stdDev }));
    } catch {
      return null;
    }
  };

  it("rejects zero standard deviation", () => {
    const result = parse(100, 100, 0);
    expect(result).toBeNull();
  });

  it("rejects negative standard deviation", () => {
    const result = parse(100, 100, -5);
    expect(result).toBeNull();
  });

  it("handles very large z-scores", () => {
    const result = parse(1000, 100, 15);
    expect(result).not.toBeNull();
    expect(Math.abs(result?.zScore || 0)).toBeGreaterThan(50);
  });

  it("handles very small z-scores (close to 0)", () => {
    const result = parse(100.001, 100, 15);
    expect(result).not.toBeNull();
    expect(Math.abs(result?.zScore || 0)).toBeLessThan(0.01);
  });

  it("handles negative values correctly", () => {
    const result = parse(-50, 0, 10);
    expect(result).not.toBeNull();
    expect(result?.zScore).toBeLessThan(0);
  });

  it("handles decimal values", () => {
    const result = parse(100.5, 100.0, 15.3);
    expect(result).not.toBeNull();
    expect(result?.zScore).toBeCloseTo(0.0327, 3);
  });

  it("extreme negative z-score has percentile near 0", () => {
    const result = parse(1, 100, 15);
    expect(result).not.toBeNull();
    expect(result?.percentile).toBeLessThan(1);
  });

  it("extreme positive z-score has percentile near 100", () => {
    const result = parse(199, 100, 15);
    expect(result).not.toBeNull();
    expect(result?.percentile).toBeGreaterThan(99);
  });

  it("p-values are in [0, 1]", () => {
    const result = parse(150, 100, 15);
    expect(result).not.toBeNull();
    expect(result?.oneTailPValue).toBeGreaterThanOrEqual(0);
    expect(result?.oneTailPValue).toBeLessThanOrEqual(1);
    expect(result?.twoTailPValue).toBeGreaterThanOrEqual(0);
    expect(result?.twoTailPValue).toBeLessThanOrEqual(1);
  });

  it("interpretation is never empty", () => {
    const results = [
      parse(50, 100, 15),
      parse(100, 100, 15),
      parse(150, 100, 15),
      parse(200, 100, 15),
    ];
    results.forEach((r) => {
      expect(r?.interpretation).toBeTruthy();
      expect(r?.interpretation?.length).toBeGreaterThan(0);
    });
  });
});
