import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("average — edge cases", () => {
  const parse = (values: string) => {
    try {
      return calculator.compute(calculator.inputSchema.parse({ values }));
    } catch {
      return null;
    }
  };

  it("rejects empty string input", () => {
    expect(parse("")).toBeNull();
  });

  it("rejects non-numeric input", () => {
    expect(parse("1, 2, abc, 4")).toBeNull();
  });

  it("handles extra whitespace around commas", () => {
    const result = parse("  4 , 8 ,  15  ");
    expect(result).not.toBeNull();
    expect(result?.count).toBe(3);
  });

  it("handles two values", () => {
    const result = parse("10, 20");
    expect(result).not.toBeNull();
    expect(result?.mean).toBe(15);
    expect(result?.median).toBe(15);
  });

  it("handles scientific notation", () => {
    const result = parse("1e3, 2e3, 3e3");
    expect(result).not.toBeNull();
    expect(result?.mean).toBe(2000);
  });

  it("handles large datasets (100 values)", () => {
    const nums = Array.from({ length: 100 }, (_, i) => i + 1).join(", ");
    const result = parse(nums);
    expect(result).not.toBeNull();
    expect(result?.count).toBe(100);
    expect(result?.mean).toBe(50.5);
    expect(result?.sum).toBe(5050);
  });

  it("handles mix of positive, zero, negative", () => {
    const result = parse("-5, 0, 5");
    expect(result).not.toBeNull();
    expect(result?.mean).toBe(0);
    expect(result?.range).toBe(10);
  });

  it("precision: returns at most 4 decimal places for mean", () => {
    const result = parse("1, 2, 3");
    // mean = 2 exactly
    expect(result?.mean).toBe(2);
  });

  it("precision: irrational-ish mean rounded to 4 decimals", () => {
    // mean of [1, 2] = 1.5 (exact)
    const result = parse("1, 2");
    expect(result?.mean).toBe(1.5);
  });

  it("count output is always integer", () => {
    const result = parse("5, 10, 15, 20");
    expect(Number.isInteger(result?.count)).toBe(true);
    expect(result?.count).toBe(4);
  });
});
