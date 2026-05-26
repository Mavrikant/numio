import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("inflation compute — numeric correctness", () => {
  // Reference: https://www.bls.gov/cpi/
  // Reference: https://www.investopedia.com/terms/i/inflation.asp

  it("future_cost: $1000 at 3% for 10 years = $1343.92", () => {
    // FV = 1000 * (1.03)^10 = 1000 * 1.343916 = 1343.92
    runNumericTests(calculator, [
      {
        inputs: { amount: 1000, inflationRate: 3, years: 10, mode: "future_cost" },
        expected: { result: 1343.92 },
        tolerance: 0.01,
        description: "1000 at 3% for 10yr: FV = 1000 * 1.03^10 = 1343.92",
      },
    ]);
  });

  it("present_value: $1343.92 in 10 years at 3% = ~$1000 today", () => {
    // PV = 1343.92 / (1.03)^10 = 1343.92 / 1.343916 ≈ 1000
    runNumericTests(calculator, [
      {
        inputs: { amount: 1343.92, inflationRate: 3, years: 10, mode: "present_value" },
        expected: { result: 1000 },
        tolerance: 0.1,
        description: "PV = 1343.92 / 1.03^10 ≈ 1000",
      },
    ]);
  });

  it("cumulative inflation: 3% for 10 years = 34.39%", () => {
    // cumulativeInflation = (1.03^10 - 1) * 100 = 34.392%
    runNumericTests(calculator, [
      {
        inputs: { amount: 1000, inflationRate: 3, years: 10, mode: "future_cost" },
        expected: { cumulativeInflation: 34.39 },
        tolerance: 0.1,
        description: "(1.03^10 - 1) * 100 = 34.392%",
      },
    ]);
  });

  it("purchasing power loss at 3% for 10 years ≈ 25.59%", () => {
    // purchasingPowerLoss = (1 - 1/1.03^10) * 100 = (1 - 0.7441) * 100 = 25.59%
    runNumericTests(calculator, [
      {
        inputs: { amount: 1000, inflationRate: 3, years: 10, mode: "future_cost" },
        expected: { purchasingPowerLoss: 25.59 },
        tolerance: 0.1,
        description: "(1 - 1/1.03^10) * 100 ≈ 25.59%",
      },
    ]);
  });

  it("zero inflation: future cost = amount, no loss", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        amount: 5000,
        inflationRate: 0,
        years: 20,
        mode: "future_cost",
      }),
    );
    expect(result.result).toBeCloseTo(5000, 2);
    expect(result.cumulativeInflation).toBeCloseTo(0, 4);
    expect(result.purchasingPowerLoss).toBeCloseTo(0, 4);
  });

  it("Fed target 2% for 30 years: $100 becomes ~$181.14", () => {
    // FV = 100 * (1.02)^30 = 100 * 1.8114 = 181.14
    runNumericTests(calculator, [
      {
        inputs: { amount: 100, inflationRate: 2, years: 30, mode: "future_cost" },
        expected: { result: 181.14 },
        tolerance: 0.1,
        description: "100 * 1.02^30 = 181.14",
      },
    ]);
  });
});
