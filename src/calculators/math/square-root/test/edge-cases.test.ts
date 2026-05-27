import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("square-root — edge cases", () => {
  const compute = (value: number, nthRoot = 2) => {
    try {
      return calculator.compute(calculator.inputSchema.parse({ value, nthRoot }));
    } catch {
      return null;
    }
  };

  it("rejects negative values", () => {
    expect(compute(-1)).toBeNull();
  });

  it("sqrt(0) = 0", () => {
    const r = compute(0);
    expect(r).not.toBeNull();
    expect(r?.root).toBe(0);
    expect(r?.isPerfectSquare).toBe(true);
    expect(r?.isPerfectNthRoot).toBe(true);
  });

  it("rejects root index < 2", () => {
    expect(compute(9, 1)).toBeNull();
  });

  it("rejects root index 0", () => {
    expect(compute(9, 0)).toBeNull();
  });

  it("handles large perfect square: sqrt(10000) = 100", () => {
    const r = compute(10000);
    expect(r?.root).toBe(100);
    expect(r?.isPerfectSquare).toBe(true);
  });

  it("handles decimal input: sqrt(2.25) = 1.5", () => {
    const r = compute(2.25);
    expect(r).not.toBeNull();
    expect(r?.root).toBeCloseTo(1.5, 5);
  });

  it("cube root of 8 is perfect", () => {
    const r = compute(8, 3);
    expect(r?.root).toBeCloseTo(2, 5);
    expect(r?.isPerfectNthRoot).toBe(true);
  });

  it("cube root of 9 is not perfect", () => {
    const r = compute(9, 3);
    expect(r?.isPerfectNthRoot).toBe(false);
  });

  it("simplified radicand=0 for value=0", () => {
    const r = compute(0);
    expect(r?.simplifiedCoefficient).toBe(0);
    expect(r?.simplifiedRadicand).toBe(0);
  });

  it("handles root index 10", () => {
    const r = compute(1024, 10); // 2^10 = 1024, 10th root = 2
    expect(r?.root).toBeCloseTo(2, 4);
  });

  it("large non-perfect: sqrt(2) never triggers isPerfectSquare", () => {
    const r = compute(2);
    expect(r?.isPerfectSquare).toBe(false);
  });
});
