import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Standard Deviation — edge cases", () => {
  const parse = (values: string, type: "population" | "sample") => {
    try {
      return calculator.compute(calculator.inputSchema.parse({ values, type }));
    } catch (e) {
      return null;
    }
  };

  it("rejects empty input", () => {
    const result = parse("", "sample");
    expect(result).toBeNull();
  });

  it("rejects non-numeric input", () => {
    const result = parse("1, 2, abc, 4", "sample");
    expect(result).toBeNull();
  });

  it("handles single space around commas", () => {
    const result = parse("1 , 2 , 3", "population");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(3);
  });

  it("handles extra whitespace", () => {
    const result = parse("  1  ,  2  ,  3  ", "population");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(3);
  });

  it("handles very large numbers", () => {
    const result = parse("1e6, 2e6, 3e6", "sample");
    expect(result).not.toBeNull();
    expect(result?.mean).toBeGreaterThan(0);
  });

  it("handles decimal numbers", () => {
    const result = parse("0.1, 0.2, 0.3, 0.4, 0.5", "population");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(5);
    expect(result?.mean).toBeCloseTo(0.3, 4);
  });

  it("handles mix of integers and decimals", () => {
    const result = parse("1, 2.5, 3, 4.5", "sample");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(4);
  });

  it("handles negative numbers", () => {
    const result = parse("-5, -3, -1, 0, 1, 3, 5", "population");
    expect(result).not.toBeNull();
    expect(result?.mean).toBeCloseTo(0, 4);
  });

  it("all same values → zero variance and std dev", () => {
    const result = parse("42, 42, 42, 42, 42", "sample");
    expect(result).not.toBeNull();
    expect(result?.variance).toBe(0);
    expect(result?.standardDeviation).toBe(0);
  });

  it("two identical values → zero variance/std dev", () => {
    const result = parse("100, 100", "population");
    expect(result).not.toBeNull();
    expect(result?.variance).toBe(0);
    expect(result?.standardDeviation).toBe(0);
  });

  it("single value with sample mode → 0 std dev", () => {
    const result = parse("99", "sample");
    expect(result).not.toBeNull();
    expect(result?.standardDeviation).toBe(0);
    expect(result?.variance).toBe(0);
  });

  it("single value with population mode → 0 std dev", () => {
    const result = parse("99", "population");
    expect(result).not.toBeNull();
    expect(result?.standardDeviation).toBe(0);
  });

  it("handles many values", () => {
    const nums = Array.from({ length: 100 }, (_, i) => i + 1).join(", ");
    const result = parse(nums, "sample");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(100);
  });

  it("handles zero values", () => {
    const result = parse("0, 0, 0, 1, 2", "population");
    expect(result).not.toBeNull();
    expect(result?.mean).toBeCloseTo(0.6, 4);
  });

  it("numeric output precision is 4 decimal places", () => {
    const result = parse("1.123456, 2.654321, 3.111111", "sample");
    expect(result).not.toBeNull();
    // Check that values are rounded appropriately
    expect(result?.mean.toString().split(".")[1]?.length).toBeLessThanOrEqual(4);
  });
});
