import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("fraction — edge cases", () => {
  const compute = (args: object) => {
    try {
      return calculator.compute(calculator.inputSchema.parse(args));
    } catch {
      return null;
    }
  };

  it("rejects zero denominator 1", () => {
    expect(compute({ numerator1: 1, denominator1: 0, operation: "simplify" })).toBeNull();
  });

  it("handles numerator = 0: 0/5 = 0", () => {
    const r = compute({ numerator1: 0, denominator1: 5, operation: "simplify" });
    expect(r).not.toBeNull();
    expect(r?.numerator).toBe(0);
    expect(r?.denominator).toBe(1);
    expect(r?.decimal).toBe(0);
  });

  it("handles whole fraction: 10/5 = 2/1", () => {
    const r = compute({ numerator1: 10, denominator1: 5, operation: "simplify" });
    expect(r?.numerator).toBe(2);
    expect(r?.denominator).toBe(1);
  });

  it("handles negative numerator: -6/9 = -2/3", () => {
    const r = compute({ numerator1: -6, denominator1: 9, operation: "simplify" });
    expect(r?.numerator).toBe(-2);
    expect(r?.denominator).toBe(3);
  });

  it("addition with zero second fraction: 3/4 + 0/1 = 3/4", () => {
    const r = compute({ numerator1: 3, denominator1: 4, numerator2: 0, denominator2: 1, operation: "add" });
    expect(r?.numerator).toBe(3);
    expect(r?.denominator).toBe(4);
  });

  it("subtraction resulting in zero: 1/2 - 1/2 = 0", () => {
    const r = compute({ numerator1: 1, denominator1: 2, numerator2: 1, denominator2: 2, operation: "subtract" });
    expect(r?.numerator).toBe(0);
    expect(r?.denominator).toBe(1);
  });

  it("multiply by zero: 5/6 × 0/1 = 0", () => {
    const r = compute({ numerator1: 5, denominator1: 6, numerator2: 0, denominator2: 1, operation: "multiply" });
    expect(r?.numerator).toBe(0);
  });

  it("denominators are always positive in output", () => {
    const r = compute({ numerator1: 1, denominator1: 2, operation: "simplify" });
    expect(r?.denominator).toBeGreaterThan(0);
  });

  it("mixed number whole part is 0 for proper fraction", () => {
    const r = compute({ numerator1: 3, denominator1: 4, operation: "simplify" });
    expect(r?.mixedWhole).toBe(0);
    expect(r?.mixedNumerator).toBe(3);
    expect(r?.mixedDenominator).toBe(4);
  });

  it("large numbers: 1000/2000 simplifies to 1/2", () => {
    const r = compute({ numerator1: 1000, denominator1: 2000, operation: "simplify" });
    expect(r?.numerator).toBe(1);
    expect(r?.denominator).toBe(2);
  });

  it("prime fractions: 7/11 stays 7/11", () => {
    const r = compute({ numerator1: 7, denominator1: 11, operation: "simplify" });
    expect(r?.numerator).toBe(7);
    expect(r?.denominator).toBe(11);
  });
});
