import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Federal Student Aid standard amortization formula
// M = P × [r(1+r)^n] / [(1+r)^n - 1]

describe("student-loan compute — numeric correctness", () => {
  it("standard: $30,000 at 5.5% APR, 10-year term, 6-month grace", () => {
    // Grace balance: 30000 × (1 + 0.055/12)^6 = 30000 × 1.027867 ≈ 30836.01
    // Monthly rate: 0.055/12 ≈ 0.0045833
    // n = 120 months
    // M = 30836.01 × [0.0045833 × (1.0045833)^120] / [(1.0045833)^120 - 1]
    // (1.0045833)^120 ≈ 1.73318
    // M = 30836.01 × [0.0045833 × 1.73318] / [1.73318 - 1]
    // M = 30836.01 × 0.007941 / 0.73318 ≈ 333.87
    runNumericTests(calculator, [
      {
        inputs: {
          balance: 30000,
          apr: 5.5,
          loanTerm: 10,
          graceMonths: 6,
          extraMonthlyPayment: 0,
        },
        expected: {
          balanceAfterGrace: 30834.51,
          monthlyPayment: 334.64,
        },
        tolerance: 1.0,
        description: "Standard 10-year term with 6-month grace at 5.5% APR",
      },
    ]);
  });

  it("zero APR: $12,000 at 0%, 4-year term, no grace", () => {
    // No interest: monthly payment = 12000 / 48 = 250
    // Total paid = 12000, total interest = 0
    const result = calculator.compute(
      calculator.inputSchema.parse({
        balance: 12000,
        apr: 0,
        loanTerm: 4,
        graceMonths: 0,
        extraMonthlyPayment: 0,
      }),
    );
    // Reference: simple division — 12000 / 48 = 250
    expect(result.monthlyPayment).toBeCloseTo(250, 1);
    expect(result.totalInterest).toBeCloseTo(0, 1);
    expect(result.balanceAfterGrace).toBe(12000);
    expect(result.monthsToPayoff).toBe(48);
  });

  it("no grace period: $20,000 at 6% APR, 5-year term", () => {
    // balanceAfterGrace = 20000 (no grace)
    // n = 60, r = 0.005
    // M = 20000 × [0.005 × (1.005)^60] / [(1.005)^60 - 1]
    // (1.005)^60 ≈ 1.34885
    // M = 20000 × [0.005 × 1.34885] / [0.34885] = 20000 × 0.006742 / 0.34885 ≈ 386.66
    runNumericTests(calculator, [
      {
        inputs: {
          balance: 20000,
          apr: 6,
          loanTerm: 5,
          graceMonths: 0,
          extraMonthlyPayment: 0,
        },
        expected: {
          balanceAfterGrace: 20000,
          monthlyPayment: 386.66,
          totalPaid: 23199.6,
          totalInterest: 3199.6,
        },
        tolerance: 1.0,
        description: "No grace period, 5-year term at 6% APR",
      },
    ]);
  });

  it("extra payment reduces months to payoff", () => {
    // $30,000, 5.5% APR, 10-year term, $100 extra/month
    const result = calculator.compute(
      calculator.inputSchema.parse({
        balance: 30000,
        apr: 5.5,
        loanTerm: 10,
        graceMonths: 0,
        extraMonthlyPayment: 100,
      }),
    );
    // Without extra: 120 months; with extra: fewer months
    expect(result.monthsToPayoff).toBeLessThan(120);
    expect(result.interestSavedByExtra).toBeGreaterThan(0);
  });

  it("high APR: $50,000 at 8% APR, 25-year term, 0-month grace", () => {
    // n = 300, r = 0.08/12 ≈ 0.006667
    // (1.006667)^300 ≈ 7.2446
    // M = 50000 × 0.006667 × 7.2446 / (7.2446 - 1) = 50000 × 0.04830 / 6.2446 ≈ 386.39
    runNumericTests(calculator, [
      {
        inputs: {
          balance: 50000,
          apr: 8,
          loanTerm: 25,
          graceMonths: 0,
          extraMonthlyPayment: 0,
        },
        expected: {
          monthlyPayment: 386.08,
        },
        tolerance: 2.0,
        description: "High APR 25-year term",
      },
    ]);
  });
});
