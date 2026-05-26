import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("savings-goal compute — numeric correctness", () => {
  it("basic: $10,000 target, $0 current, $200/mo, 5% → correct months", () => {
    runNumericTests(calculator, [
      {
        inputs: {
          targetAmount: 10000,
          currentSavings: 0,
          monthlyContribution: 200,
          annualReturn: 5,
        },
        expected: { monthsToGoal: 46 },
        tolerance: 1,
        description: "$0 start, $200/mo, 5% — ~46 months (FV annuity formula: n≈45.5 → 46)",
      },
    ]);
  });

  it("zero return: $10,000 target, $1,000 current, $300/mo → simple division", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 1000,
        monthlyContribution: 300,
        annualReturn: 0,
      }),
    );
    // (10000 - 1000) / 300 = 30 months exactly
    expect(result.monthsToGoal).toBe(30);
    expect(result.totalInterest).toBe(0);
  });

  it("already at goal: currentSavings >= targetAmount → 0 months", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 5000,
        currentSavings: 5000,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    );
    expect(result.monthsToGoal).toBe(0);
    expect(result.yearsToGoal).toBe(0);
    expect(result.totalInterest).toBe(0);
  });

  it("yearsToGoal = monthsToGoal / 12", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    );
    expect(result.yearsToGoal).toBeCloseTo(result.monthsToGoal / 12, 1);
  });

  it("totalContributions includes currentSavings + monthly deposits", () => {
    const inputs = calculator.inputSchema.parse({
      targetAmount: 10000,
      currentSavings: 1000,
      monthlyContribution: 200,
      annualReturn: 0,
    });
    const result = calculator.compute(inputs);
    // 1000 + 200 * 30 = 7000 ... wait, 9000/200 = 45 months
    // Actually (10000-1000)/200 = 45 months, total = 1000 + 45*200 = 10000
    expect(result.totalContributions).toBe(1000 + result.monthsToGoal * 200);
  });

  it("interest earned is positive with non-zero return", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        targetAmount: 10000,
        currentSavings: 0,
        monthlyContribution: 200,
        annualReturn: 5,
      }),
    );
    expect(result.totalInterest).toBeGreaterThan(0);
  });
});
