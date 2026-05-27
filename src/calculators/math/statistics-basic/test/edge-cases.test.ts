import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Descriptive Statistics — edge cases", () => {
  const parse = (values: string) => {
    try {
      return calculator.compute(calculator.inputSchema.parse({ values }));
    } catch {
      return null;
    }
  };

  it("single value", () => {
    const result = parse("42");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(1);
    expect(result?.mean).toBe(42);
    expect(result?.median).toBe(42);
    expect(result?.variance).toBe(0);
  });

  it("two values", () => {
    const result = parse("10, 20");
    expect(result).not.toBeNull();
    expect(result?.median).toBeCloseTo(15, 1);
  });

  it("negative values", () => {
    const result = parse("-10, -5, 0, 5, 10");
    expect(result).not.toBeNull();
    expect(result?.mean).toBeCloseTo(0, 2);
  });

  it("decimal values", () => {
    const result = parse("1.5, 2.5, 3.5");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(3);
  });

  it("whitespace handling", () => {
    const result = parse("  1  ,  2  ,  3  ");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(3);
  });

  it("large dataset", () => {
    const nums = Array.from({ length: 100 }, (_, i) => i + 1).join(", ");
    const result = parse(nums);
    expect(result).not.toBeNull();
    expect(result?.count).toBe(100);
  });

  it("all outputs are non-negative where applicable", () => {
    const result = parse("1, 2, 3, 4, 5");
    expect(result).not.toBeNull();
    expect(result?.variance).toBeGreaterThanOrEqual(0);
    expect(result?.stdDev).toBeGreaterThanOrEqual(0);
    expect(result?.range).toBeGreaterThanOrEqual(0);
    expect(result?.iqr).toBeGreaterThanOrEqual(0);
  });

  it("empty input rejected", () => {
    const result = parse("");
    expect(result).toBeNull();
  });

  it("non-numeric input rejected", () => {
    const result = parse("1, 2, abc, 4");
    expect(result).toBeNull();
  });
});
