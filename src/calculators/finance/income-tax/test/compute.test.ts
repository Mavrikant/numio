import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("income-tax compute — US federal tax", () => {
  const parse = (inputs: Record<string, unknown>) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("US single filer $50,000 → estimated tax ~$4,016", () => {
    // Standard deduction $14,600 → taxable = $35,400
    // 10% on $11,600 = $1,160
    // 12% on ($35,400 - $11,600) = $23,800 × 0.12 = $2,856
    // Total = $4,016
    const result = parse({
      country: "us",
      grossIncome: 50000,
      filingStatus: "single",
      deductions: 0,
    });
    expect(result.estimatedTax).toBeCloseTo(4016, 0);
    expect(result.effectiveRate).toBeCloseTo(8.032, 1);
  });

  it("US single filer $100,000 → correct taxable income", () => {
    const result = parse({
      country: "us",
      grossIncome: 100000,
      filingStatus: "single",
      deductions: 0,
    });
    // taxable = 100000 - 14600 = 85400
    expect(result.taxableIncome).toBeCloseTo(85400, 0);
  });

  it("US married filer $100,000 → double standard deduction applied", () => {
    const result = parse({
      country: "us",
      grossIncome: 100000,
      filingStatus: "married",
      deductions: 0,
    });
    // taxable = 100000 - 29200 = 70800
    expect(result.taxableIncome).toBeCloseTo(70800, 0);
  });

  it("US after-tax income = grossIncome - estimatedTax", () => {
    const result = parse({
      country: "us",
      grossIncome: 50000,
      filingStatus: "single",
      deductions: 0,
    });
    expect(result.afterTaxIncome).toBeCloseTo(result.estimatedTax ? 50000 - result.estimatedTax : 50000, 0);
  });

  it("US $0 income → $0 tax", () => {
    const result = parse({
      country: "us",
      grossIncome: 0,
      filingStatus: "single",
      deductions: 0,
    });
    expect(result.estimatedTax).toBe(0);
    expect(result.effectiveRate).toBe(0);
  });

  it("US additional deductions reduce taxable income", () => {
    const withDeductions = parse({
      country: "us",
      grossIncome: 80000,
      filingStatus: "single",
      deductions: 10000,
    });
    const withoutDeductions = parse({
      country: "us",
      grossIncome: 80000,
      filingStatus: "single",
      deductions: 0,
    });
    expect(withDeductions.taxableIncome).toBeLessThan(withoutDeductions.taxableIncome);
    expect(withDeductions.estimatedTax).toBeLessThan(withoutDeductions.estimatedTax);
  });

  it("US bracket breakdown sums to total tax", () => {
    const result = parse({
      country: "us",
      grossIncome: 150000,
      filingStatus: "single",
      deductions: 0,
    });
    const sumFromBrackets = result.bracketBreakdown.reduce(
      (sum, b) => sum + b.taxOnBracket,
      0,
    );
    expect(sumFromBrackets).toBeCloseTo(result.estimatedTax, 1);
  });
});

describe("income-tax compute — Turkey", () => {
  const parse = (inputs: Record<string, unknown>) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("TR: income 100,000 TL → 15% bracket only → $15,000 tax", () => {
    const result = parse({
      country: "tr",
      grossIncome: 100000,
      deductions: 0,
    });
    expect(result.estimatedTax).toBeCloseTo(15000, 0);
  });

  it("TR: income 200,000 TL → mixed brackets", () => {
    // 15% on 110,000 = 16,500
    // 20% on (200,000-110,000) = 90,000*0.20 = 18,000
    // Total = 34,500
    const result = parse({
      country: "tr",
      grossIncome: 200000,
      deductions: 0,
    });
    expect(result.estimatedTax).toBeCloseTo(34500, 0);
  });

  it("TR: deductions reduce taxable income", () => {
    const result = parse({
      country: "tr",
      grossIncome: 110000,
      deductions: 10000,
    });
    // taxable = 100,000, tax = 15,000
    expect(result.taxableIncome).toBe(100000);
    expect(result.estimatedTax).toBeCloseTo(15000, 0);
  });

  it("TR bracket breakdown sums to total tax", () => {
    const result = parse({
      country: "tr",
      grossIncome: 500000,
      deductions: 0,
    });
    const sumFromBrackets = result.bracketBreakdown.reduce(
      (sum, b) => sum + b.taxOnBracket,
      0,
    );
    expect(sumFromBrackets).toBeCloseTo(result.estimatedTax, 1);
  });
});
