import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Salary compute — Social Security numeric correctness", () => {
  it("$80,000 salary → SS tax = $4,960 (6.2% × 80,000)", () => {
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 80000, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0 },
        expected: { socialSecurityTax: 4960 },
        tolerance: 1,
      },
    ]);
  });

  it("$200,000 salary → SS tax capped at $168,600 wage base = $10,453.20", () => {
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 200000, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0 },
        expected: { socialSecurityTax: 10453.2 },
        tolerance: 1,
      },
    ]);
  });
});

describe("Salary compute — Medicare numeric correctness", () => {
  it("$80,000 salary → Medicare = $1,160 (1.45% × 80,000)", () => {
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 80000, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0 },
        expected: { medicareTax: 1160 },
        tolerance: 1,
      },
    ]);
  });

  it("$250,000 single → Medicare includes 0.9% surtax on $50,000 above threshold", () => {
    // 250,000 × 1.45% = 3,625; (250,000 - 200,000) × 0.9% = 450; total = 4,075
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 250000, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0 },
        expected: { medicareTax: 4075 },
        tolerance: 1,
      },
    ]);
  });

  it("$250,000 married → no Medicare surtax (threshold is $250,000 for married)", () => {
    // 250,000 × 1.45% = 3,625; no surtax (at threshold, not above)
    const parsed = calculator.inputSchema.parse({
      annualSalary: 250000,
      filingStatus: "married",
      stateIncomeTaxRate: 0,
      preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    expect((result.medicareTax as number)).toBeCloseTo(3625, 0);
  });
});

describe("Salary compute — state income tax", () => {
  it("$50,000 salary, 5% state rate → state tax = $2,500", () => {
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 50000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 0 },
        expected: { stateIncomeTax: 2500 },
        tolerance: 1,
      },
    ]);
  });

  it("state income tax = 0 when rate is 0", () => {
    runNumericTests(calculator, [
      {
        inputs: { annualSalary: 100000, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0 },
        expected: { stateIncomeTax: 0 },
        tolerance: 0.01,
      },
    ]);
  });

  it("pre-tax deductions reduce state income tax", () => {
    // $60,000 salary, $10,000 deductions → taxable = $50,000 × 5% = $2,500
    const parsedWith = calculator.inputSchema.parse({
      annualSalary: 60000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 10000,
    });
    const parsedWithout = calculator.inputSchema.parse({
      annualSalary: 60000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 0,
    });
    const resultWith = calculator.compute(parsedWith);
    const resultWithout = calculator.compute(parsedWithout);
    expect((resultWith.stateIncomeTax as number)).toBeLessThan((resultWithout.stateIncomeTax as number));
    expect((resultWith.stateIncomeTax as number)).toBeCloseTo(2500, 0);
  });
});

describe("Salary compute — net pay and totals", () => {
  it("netAnnual = grossAnnual - totalTax", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 75000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 6000,
    });
    const result = calculator.compute(parsed);
    const expected = (result.grossAnnual as number) - (result.totalTax as number);
    expect((result.netAnnual as number)).toBeCloseTo(expected, 0);
  });

  it("netMonthly = netAnnual / 12", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 75000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    expect((result.netMonthly as number)).toBeCloseTo((result.netAnnual as number) / 12, 0);
  });

  it("totalTax = federalIncomeTax + socialSecurityTax + medicareTax + stateIncomeTax", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 100000, filingStatus: "married", stateIncomeTaxRate: 4, preTaxDeductions: 5000,
    });
    const result = calculator.compute(parsed);
    const sum =
      (result.federalIncomeTax as number) +
      (result.socialSecurityTax as number) +
      (result.medicareTax as number) +
      (result.stateIncomeTax as number);
    expect((result.totalTax as number)).toBeCloseTo(sum, 0);
  });

  it("effectiveTaxRate = totalTax / grossAnnual × 100", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 90000, filingStatus: "single", stateIncomeTaxRate: 5, preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    const expected = ((result.totalTax as number) / (result.grossAnnual as number)) * 100;
    expect((result.effectiveTaxRate as number)).toBeCloseTo(expected, 1);
  });

  it("married filer pays less federal tax than single filer at same salary", () => {
    const salary = 120000;
    const parsedSingle = calculator.inputSchema.parse({
      annualSalary: salary, filingStatus: "single", stateIncomeTaxRate: 0, preTaxDeductions: 0,
    });
    const parsedMarried = calculator.inputSchema.parse({
      annualSalary: salary, filingStatus: "married", stateIncomeTaxRate: 0, preTaxDeductions: 0,
    });
    const single = calculator.compute(parsedSingle);
    const married = calculator.compute(parsedMarried);
    expect((married.federalIncomeTax as number)).toBeLessThan((single.federalIncomeTax as number));
  });
});
