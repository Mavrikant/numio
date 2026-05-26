import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

const VALID = {
  annualSalary: 75000,
  filingStatus: "single" as const,
  stateIncomeTaxRate: 5,
  preTaxDeductions: 0,
};

describe("Salary edge cases — schema rejects invalid inputs", () => {
  it("rejects annualSalary of 0", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: 0 })).toThrow();
  });

  it("rejects negative annualSalary", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: -1000 })).toThrow();
  });

  it("rejects annualSalary above 10,000,000", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: 10_000_001 })).toThrow();
  });

  it("rejects invalid filingStatus", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID, filingStatus: "widow" as "single" }),
    ).toThrow();
  });

  it("rejects stateIncomeTaxRate below 0", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, stateIncomeTaxRate: -1 })).toThrow();
  });

  it("rejects stateIncomeTaxRate above 15", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, stateIncomeTaxRate: 16 })).toThrow();
  });

  it("rejects negative preTaxDeductions", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, preTaxDeductions: -500 })).toThrow();
  });

  it("rejects NaN annualSalary", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: NaN })).toThrow();
  });
});

describe("Salary edge cases — schema accepts valid boundary values", () => {
  it("accepts minimum salary ($1)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: 1 })).not.toThrow();
  });

  it("accepts maximum salary ($10,000,000)", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, annualSalary: 10_000_000 })).not.toThrow();
  });

  it("accepts zero state tax rate", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, stateIncomeTaxRate: 0 })).not.toThrow();
  });

  it("accepts all three filing statuses", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, filingStatus: "single" })).not.toThrow();
    expect(() => calculator.inputSchema.parse({ ...VALID, filingStatus: "married" })).not.toThrow();
    expect(() => calculator.inputSchema.parse({ ...VALID, filingStatus: "head" })).not.toThrow();
  });

  it("accepts zero preTaxDeductions", () => {
    expect(() => calculator.inputSchema.parse({ ...VALID, preTaxDeductions: 0 })).not.toThrow();
  });

  it("assertSchemaValidates helper works", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      VALID,
      { ...VALID, annualSalary: 0 },
    );
  });
});

describe("Salary edge cases — boundary behaviors", () => {
  it("large pre-tax deductions don't result in negative taxes", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 50000,
      filingStatus: "single",
      stateIncomeTaxRate: 5,
      preTaxDeductions: 50000, // deductions equal to salary
    });
    const result = calculator.compute(parsed);
    expect((result.federalIncomeTax as number)).toBeGreaterThanOrEqual(0);
    expect((result.stateIncomeTax as number)).toBeGreaterThanOrEqual(0);
    expect((result.netAnnual as number)).toBeGreaterThanOrEqual(0);
  });

  it("$1 minimum salary returns valid result", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 1,
      filingStatus: "single",
      stateIncomeTaxRate: 0,
      preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    expect(typeof result.netAnnual).toBe("number");
    expect(isFinite(result.netAnnual as number)).toBe(true);
    expect((result.grossAnnual as number)).toBe(1);
  });

  it("SS tax does not exceed 168,600 × 6.2% = 10,453.20", () => {
    const parsed = calculator.inputSchema.parse({
      annualSalary: 10_000_000,
      filingStatus: "single",
      stateIncomeTaxRate: 0,
      preTaxDeductions: 0,
    });
    const result = calculator.compute(parsed);
    const maxSS = 168_600 * 0.062;
    expect((result.socialSecurityTax as number)).toBeCloseTo(maxSS, 0);
  });
});

describe("Salary edge cases — compute purity", () => {
  it("produces identical results across multiple calls (single filer)", () => {
    const inputs = calculator.inputSchema.parse(VALID);
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results across multiple calls (married filer)", () => {
    const inputs = calculator.inputSchema.parse({ ...VALID, filingStatus: "married", annualSalary: 120000 });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for head of household", () => {
    const inputs = calculator.inputSchema.parse({ ...VALID, filingStatus: "head", annualSalary: 90000 });
    assertComputeIsPure(calculator, inputs);
  });
});
