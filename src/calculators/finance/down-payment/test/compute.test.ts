import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";
import { compute } from "../compute";

describe("Down Payment — numeric correctness", () => {
  it("$400k home, 20% down, 6.5%, 30yr → DP $80k, loan $320k, P&I ≈ $2,022.62", () => {
    // 20% × 400,000 = 80,000 down
    // loan = 320,000; r = 0.065/12 ≈ 0.005416667; n = 360
    // (1+r)^n ≈ 6.9919  →  M = 320000 × (r × 6.9919) / (6.9919 − 1) ≈ 2022.62
    // Reference: standard fixed-rate mortgage formula, CFPB.
    runNumericTests(calculator, [
      {
        inputs: {
          homePrice: 400000,
          downPaymentPercent: 20,
          annualRate: 6.5,
          termYears: 30,
          propertyTaxRate: 0,
          insuranceRate: 0,
          pmiRate: 0.7,
        },
        expected: {
          downPaymentAmount: 80000,
          loanAmount: 320000,
          monthlyPrincipalInterest: 2022.62,
          monthlyPmi: 0,
          pmiRequired: 0,
        },
        tolerance: 0.5,
      },
    ]);
  });

  it("$300k home, 10% down, 7%, 30yr → PMI applies, monthly PMI ≈ $157.50", () => {
    // 10% × 300,000 = 30,000 down → loan = 270,000.
    // PMI = 0.7% × 270,000 / 12 = 157.50
    runNumericTests(calculator, [
      {
        inputs: {
          homePrice: 300000,
          downPaymentPercent: 10,
          annualRate: 7,
          termYears: 30,
          propertyTaxRate: 0,
          insuranceRate: 0,
          pmiRate: 0.7,
        },
        expected: {
          downPaymentAmount: 30000,
          loanAmount: 270000,
          monthlyPmi: 157.5,
          pmiRequired: 1,
        },
        tolerance: 0.05,
      },
    ]);
  });

  it("amount-only down payment: $500k home, $50k down (no percent) → 10% DP", () => {
    // Schema lets us omit percent if amount is provided.
    const parsed = calculator.inputSchema.parse({
      homePrice: 500000,
      downPaymentAmount: 50000,
      annualRate: 6,
      termYears: 30,
      propertyTaxRate: 0,
      insuranceRate: 0,
      pmiRate: 0.5,
    });
    const r = calculator.compute(parsed);
    expect(r.downPaymentAmount).toBeCloseTo(50000, 0);
    expect(r.downPaymentPercent).toBeCloseTo(10, 1);
    expect(r.loanAmount).toBeCloseTo(450000, 0);
    expect(r.pmiRequired).toBe(1);
  });

  it("percent wins when both percent and amount are supplied", () => {
    const parsed = calculator.inputSchema.parse({
      homePrice: 400000,
      downPaymentPercent: 25,
      downPaymentAmount: 1000, // ignored
      annualRate: 6,
      termYears: 30,
      propertyTaxRate: 0,
      insuranceRate: 0,
      pmiRate: 0.5,
    });
    const r = calculator.compute(parsed);
    // 25% × 400k = 100k. Confirms % wins over the 1000 amount.
    expect(r.downPaymentAmount).toBeCloseTo(100000, 0);
    expect(r.downPaymentPercent).toBeCloseTo(25, 1);
    expect(r.pmiRequired).toBe(0); // ≥ 20%
  });

  it("taxes + insurance roll into monthly total: 1.1% tax + 0.35% ins on $400k", () => {
    // Annual tax = 4400 → monthly 366.67. Annual ins = 1400 → monthly 116.67.
    const parsed = calculator.inputSchema.parse({
      homePrice: 400000,
      downPaymentPercent: 20,
      annualRate: 6.5,
      termYears: 30,
      propertyTaxRate: 1.1,
      insuranceRate: 0.35,
      pmiRate: 0.7,
    });
    const r = calculator.compute(parsed);
    expect(r.monthlyTax).toBeCloseTo(366.67, 1);
    expect(r.monthlyInsurance).toBeCloseTo(116.67, 1);
    // Total should equal sum of its parts (within rounding).
    const sum =
      r.monthlyPrincipalInterest + r.monthlyTax + r.monthlyInsurance + r.monthlyPmi;
    expect(r.totalMonthlyPayment).toBeCloseTo(sum, 1);
  });

  it("0% interest: monthly P&I = loan / months", () => {
    const parsed = calculator.inputSchema.parse({
      homePrice: 240000,
      downPaymentPercent: 0,
      annualRate: 0,
      termYears: 20,
      propertyTaxRate: 0,
      insuranceRate: 0,
      pmiRate: 0.5,
    });
    const r = calculator.compute(parsed);
    // 240,000 / 240 = 1000
    expect(r.monthlyPrincipalInterest).toBeCloseTo(1000, 1);
    expect(r.loanToValue).toBeCloseTo(100, 1);
  });
});

describe("Down Payment — direct compute() smoke", () => {
  it("100% down → loan = 0, no PMI, P&I = 0", () => {
    const r = compute({
      homePrice: 300000,
      downPaymentPercent: 100,
      annualRate: 6,
      termYears: 30,
      propertyTaxRate: 0,
      insuranceRate: 0,
      pmiRate: 0.5,
    });
    expect(r.loanAmount).toBe(0);
    expect(r.monthlyPrincipalInterest).toBe(0);
    expect(r.monthlyPmi).toBe(0);
    expect(r.pmiRequired).toBe(0);
  });
});
