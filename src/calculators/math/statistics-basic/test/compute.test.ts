import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Descriptive Statistics compute — numeric correctness", () => {
  it("[2,5,7,9,3,8,5]: full statistics", () => {
    // Referans: Hand-calculated values
    // Mean = (2+5+7+9+3+8+5)/7 = 39/7 ≈ 5.5714
    // Sorted: [2,3,5,5,7,8,9], Median = 5
    // Mode = 5 (appears twice)
    // Range = 9-2 = 7
    runNumericTests(calculator, [
      {
        inputs: { values: "2, 5, 7, 9, 3, 8, 5" },
        expected: { count: 7, mean: 5.5714, median: 5.0, min: 2.0, max: 9.0, range: 7.0 },
        tolerance: 0.01,
        description: "Full statistics dataset",
      },
    ]);
  });

  it("[10,20,30]: simple case", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "10, 20, 30" },
        expected: { mean: 20.0, median: 20.0, min: 10.0, max: 30.0, range: 20.0 },
        tolerance: 0.1,
        description: "Simple arithmetic sequence",
      },
    ]);
  });

  it("[1,1,1,1,1]: all same (mode, zero variance)", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 1, 1, 1, 1" },
        expected: { mean: 1.0, variance: 0.0, stdDev: 0.0 },
        tolerance: 0.001,
        description: "All identical values",
      },
    ]);
  });

  it("[1,2,3,4,5]: quartiles and IQR", () => {
    // Q1=2, Q2(median)=3, Q3=4, IQR=2
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 2, 3, 4, 5" },
        expected: { count: 5, q1: 2.0, q3: 4.0, iqr: 2.0 },
        tolerance: 0.1,
        description: "Quartiles for 1-5",
      },
    ]);
  });
});

describe("Descriptive Statistics — formula verification", () => {
  const parse = (values: string) =>
    calculator.compute(calculator.inputSchema.parse({ values }));

  it("count matches input length", () => {
    const result = parse("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    expect(result.count).toBe(10);
  });

  it("min is minimum of dataset", () => {
    const result = parse("10, 5, 20, 3, 15");
    expect(result.min).toBe(3);
  });

  it("max is maximum of dataset", () => {
    const result = parse("10, 5, 20, 3, 15");
    expect(result.max).toBe(20);
  });

  it("range equals max - min", () => {
    const result = parse("10, 5, 20, 3, 15");
    expect(result.range).toBeCloseTo(result.max - result.min, 3);
  });

  it("IQR equals Q3 - Q1", () => {
    const result = parse("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
    expect(result.iqr).toBeCloseTo(result.q3 - result.q1, 3);
  });

  it("standard deviation is sqrt(variance)", () => {
    const result = parse("5, 10, 15, 20, 25");
    expect(result.stdDev * result.stdDev).toBeCloseTo(result.variance, 2);
  });
});
