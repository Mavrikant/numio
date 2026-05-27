import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Standard Deviation compute — numeric correctness", () => {
  it("sample standard deviation: [2, 4, 4, 4, 5, 5, 7, 9] → s ≈ 2.1381", () => {
    // Reference: Khan Academy sample std dev formula (n-1 divisor)
    // Mean = 40/8 = 5
    // Variance = [(2-5)² + (4-5)² + (4-5)² + (4-5)² + (5-5)² + (5-5)² + (7-5)² + (9-5)²] / 7
    //          = [9 + 1 + 1 + 1 + 0 + 0 + 4 + 16] / 7 = 32/7 ≈ 4.5714
    // StdDev = √4.5714 ≈ 2.1381
    runNumericTests(calculator, [
      {
        inputs: { values: "2, 4, 4, 4, 5, 5, 7, 9", type: "sample" },
        expected: { standardDeviation: 2.1381 },
        tolerance: 0.01,
        description: "[2,4,4,4,5,5,7,9] sample std dev",
      },
    ]);
  });

  it("population standard deviation: [2, 4, 4, 4, 5, 5, 7, 9] → σ ≈ 1.9957", () => {
    // Reference: Same data, population formula (n divisor)
    // Variance = 32/8 = 4
    // StdDev = √4 = 2 (slightly different due to exact arithmetic)
    runNumericTests(calculator, [
      {
        inputs: { values: "2, 4, 4, 4, 5, 5, 7, 9", type: "population" },
        expected: { standardDeviation: 2.0 },
        tolerance: 0.01,
        description: "[2,4,4,4,5,5,7,9] population std dev",
      },
    ]);
  });

  it("sample standard deviation: [10, 20, 30] → s ≈ 10", () => {
    // Reference: Simple arithmetic check
    // Mean = 20
    // Variance = [(10-20)² + (20-20)² + (30-20)²] / 2 = [100 + 0 + 100] / 2 = 100
    // StdDev = √100 = 10
    runNumericTests(calculator, [
      {
        inputs: { values: "10, 20, 30", type: "sample" },
        expected: { standardDeviation: 10.0, variance: 100.0 },
        tolerance: 0.1,
        description: "[10, 20, 30] sample std dev",
      },
    ]);
  });

  it("single value: [5] → sample std dev = 0 (undefined technically)", () => {
    // With n=1 and sample divisor (n-1=0), std dev is 0
    runNumericTests(calculator, [
      {
        inputs: { values: "5", type: "sample" },
        expected: { standardDeviation: 0, variance: 0 },
        tolerance: 0.001,
        description: "Single value [5]",
      },
    ]);
  });

  it("identical values: [7, 7, 7, 7] → std dev = 0", () => {
    // All values same as mean, zero deviation
    runNumericTests(calculator, [
      {
        inputs: { values: "7, 7, 7, 7", type: "population" },
        expected: { standardDeviation: 0, variance: 0, mean: 7 },
        tolerance: 0.001,
        description: "All identical values",
      },
    ]);
  });

  it("negative values: [-10, -5, 0, 5, 10] → mean=0, sample s ≈ 7.906", () => {
    // Reference: Symmetric around 0
    // Mean = 0
    // Variance = [100 + 25 + 0 + 25 + 100] / 4 = 250/4 = 62.5
    // StdDev = √62.5 ≈ 7.906
    runNumericTests(calculator, [
      {
        inputs: { values: "-10, -5, 0, 5, 10", type: "sample" },
        expected: { mean: 0, standardDeviation: 7.906 },
        tolerance: 0.01,
        description: "Symmetric negative to positive",
      },
    ]);
  });

  it("mean output correctness: [1, 2, 3, 4, 5] → mean = 3", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 2, 3, 4, 5", type: "population" },
        expected: { mean: 3.0, count: 5 },
        tolerance: 0.001,
        description: "Mean of 1-5",
      },
    ]);
  });
});

describe("Standard Deviation compute — formula verification", () => {
  const parse = (values: string, type: "population" | "sample") =>
    calculator.compute(calculator.inputSchema.parse({ values, type }));

  it("variance is standard deviation squared", () => {
    const result = parse("10, 20, 30, 40, 50", "sample");
    const varianceSquared = result.variance;
    const stdDevSquared = result.standardDeviation ** 2;
    expect(Math.abs(varianceSquared - stdDevSquared)).toBeLessThan(0.001);
  });

  it("sample std dev > population std dev for same data", () => {
    const data = "5, 10, 15, 20, 25";
    const sample = parse(data, "sample");
    const population = parse(data, "population");
    expect(sample.standardDeviation).toBeGreaterThan(population.standardDeviation);
  });

  it("count output matches input data", () => {
    const result = parse("1, 2, 3, 4, 5, 6, 7, 8, 9, 10", "sample");
    expect(result.count).toBe(10);
  });
});
