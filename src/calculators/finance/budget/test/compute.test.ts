import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: 50/30/20 rule
// needsAmount = monthlyIncome × needsPct / 100
// wantsAmount = monthlyIncome × wantsPct / 100
// savingsAmount = monthlyIncome × savingsPct / 100

describe("budget compute — numeric correctness", () => {
  it("$5,000 income — standard 50/30/20 split", () => {
    // needs = 5000 × 50% = 2500
    // wants = 5000 × 30% = 1500
    // savings = 5000 × 20% = 1000
    // annualIncome = 60000, annualSavings = 12000
    // savingsRate = 20, monthlyEmergencyFund = 2500 × 3 = 7500
    runNumericTests(calculator, [
      {
        inputs: { monthlyIncome: 5000, needsPct: 50, wantsPct: 30, savingsPct: 20 },
        expected: {
          needsAmount: 2500,
          wantsAmount: 1500,
          savingsAmount: 1000,
          annualIncome: 60000,
          annualSavings: 12000,
          savingsRate: 20,
          monthlyEmergencyFund: 7500,
        },
        tolerance: 1,
        description: "Standard 50/30/20 on $5,000 monthly income",
      },
    ]);
  });

  it("$3,000 income — 60/25/15 split", () => {
    // needs = 3000 × 60% = 1800
    // wants = 3000 × 25% = 750
    // savings = 3000 × 15% = 450
    runNumericTests(calculator, [
      {
        inputs: { monthlyIncome: 3000, needsPct: 60, wantsPct: 25, savingsPct: 15 },
        expected: {
          needsAmount: 1800,
          wantsAmount: 750,
          savingsAmount: 450,
          annualIncome: 36000,
          annualSavings: 5400,
          savingsRate: 15,
          monthlyEmergencyFund: 5400,
        },
        tolerance: 1,
        description: "60/25/15 split on $3,000 monthly income",
      },
    ]);
  });

  it("$10,000 income — 40/30/30 split", () => {
    runNumericTests(calculator, [
      {
        inputs: { monthlyIncome: 10000, needsPct: 40, wantsPct: 30, savingsPct: 30 },
        expected: {
          needsAmount: 4000,
          wantsAmount: 3000,
          savingsAmount: 3000,
          annualIncome: 120000,
          annualSavings: 36000,
          savingsRate: 30,
          monthlyEmergencyFund: 12000,
        },
        tolerance: 1,
        description: "40/30/30 split on $10,000 monthly income",
      },
    ]);
  });

  it("zero income gives all zeros", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ monthlyIncome: 0, needsPct: 50, wantsPct: 30, savingsPct: 20 }),
    );
    expect(result.needsAmount).toBe(0);
    expect(result.wantsAmount).toBe(0);
    expect(result.savingsAmount).toBe(0);
    expect(result.annualIncome).toBe(0);
    expect(result.annualSavings).toBe(0);
    expect(result.savingsRate).toBe(0);
    expect(result.monthlyEmergencyFund).toBe(0);
  });

  it("savingsRate equals savingsPct when all percentages sum to 100", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({ monthlyIncome: 8000, needsPct: 50, wantsPct: 30, savingsPct: 20 }),
    );
    expect(result.savingsRate).toBeCloseTo(20, 5);
  });
});
