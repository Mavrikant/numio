import { describe, it, expect } from "vitest";
import calculator from "../definition";

const parse = (inputs: Record<string, unknown>) =>
  calculator.compute(calculator.inputSchema.parse(inputs));

describe("home-affordability compute — numeric correctness", () => {
  it("$100k income, $500 debt, $40k down, 7% 30yr, 1.2%/0.35% → ~$327k max price (front-end binds)", () => {
    // Ref: CFPB 28/36 rule + standard amortization formula.
    // monthlyIncome = 8,333.33
    // frontMax = 8,333.33 × 0.28 = 2,333.33
    // backMax  = 8,333.33 × 0.36 − 500 = 2,500.00  ⇒ front-end binds, maxPITI = 2,333.33
    // piFactor(7%, 30y) ≈ 0.006653
    // monthlyTI = (0.012 + 0.0035)/12 ≈ 0.001292
    // H = (2333.33 + 40000 × 0.006653) / (0.006653 + 0.001292) ≈ 327,180
    const r = parse({
      annualIncome: 100000,
      monthlyDebts: 500,
      downPayment: 40000,
      annualRate: 7,
      termYears: 30,
      propertyTaxRate: 1.2,
      insuranceRate: 0.35,
    });
    expect(r.maxHomePrice).toBeGreaterThan(325000);
    expect(r.maxHomePrice).toBeLessThan(330000);
    expect(r.bindingRule).toBe("front");
    expect(r.monthlyPiti).toBeCloseTo(2333.33, 0);
  });

  it("high-debt scenario → back-end binds", () => {
    // $100k income, $2,000 other debts: front allows $2,333, back allows
    // 0.36 × 8,333 − 2,000 = 1,000.  Back binds, much lower maxHomePrice.
    const r = parse({
      annualIncome: 100000,
      monthlyDebts: 2000,
      downPayment: 40000,
      annualRate: 7,
      termYears: 30,
      propertyTaxRate: 1.2,
      insuranceRate: 0.35,
    });
    expect(r.bindingRule).toBe("back");
    expect(r.monthlyPiti).toBeCloseTo(1000, 0);
  });

  it("0% mortgage rate — uses linear amortization (P&I = loan / n)", () => {
    // At 0% the closed-form solution should still hold; binding rule = front.
    // monthlyIncome = 5000; frontMax = 1400; backMax = 1800 → front binds.
    // piFactor = 1/360 ≈ 0.002778. monthlyTI = 0.001292.
    // H = (1400 + 0 × 0.002778) / (0.002778 + 0.001292) ≈ 1400 / 0.00407 ≈ 343,980 — wait,
    // verify: 1/(0.002778+0.001292) ≈ 245.7; × 1400 ≈ 344k. With 0 DP:
    const r = parse({
      annualIncome: 60000,
      monthlyDebts: 0,
      downPayment: 0,
      annualRate: 0,
      termYears: 30,
      propertyTaxRate: 1.2,
      insuranceRate: 0.35,
    });
    expect(r.maxHomePrice).toBeGreaterThan(340000);
    expect(r.maxHomePrice).toBeLessThan(350000);
    expect(r.monthlyPi).toBeCloseTo(r.maxLoanAmount / 360, 1);
  });

  it("piti = pi + tax + insurance (definitional)", () => {
    const r = parse({
      annualIncome: 120000,
      monthlyDebts: 300,
      downPayment: 50000,
      annualRate: 6.5,
      termYears: 30,
      propertyTaxRate: 1.0,
      insuranceRate: 0.4,
    });
    expect(r.monthlyPiti).toBeCloseTo(r.monthlyPi + r.monthlyTax + r.monthlyInsurance, 1);
  });

  it("backEndDti = (PITI + debts) / monthlyIncome × 100", () => {
    const r = parse({
      annualIncome: 90000,
      monthlyDebts: 400,
      downPayment: 30000,
      annualRate: 6.5,
      termYears: 30,
      propertyTaxRate: 1.2,
      insuranceRate: 0.35,
    });
    const monthlyIncome = 90000 / 12;
    const expected = ((r.monthlyPiti + 400) / monthlyIncome) * 100;
    expect(r.backEndDti).toBeCloseTo(expected, 1);
  });

  it("higher down payment increases max home price", () => {
    const base = {
      annualIncome: 100000,
      monthlyDebts: 500,
      annualRate: 7,
      termYears: 30,
      propertyTaxRate: 1.2,
      insuranceRate: 0.35,
    };
    const lowDp = parse({ ...base, downPayment: 20000 });
    const highDp = parse({ ...base, downPayment: 100000 });
    expect(highDp.maxHomePrice).toBeGreaterThan(lowDp.maxHomePrice);
  });
});
