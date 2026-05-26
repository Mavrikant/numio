import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Mortgage edge cases — schema validation", () => {
  it("rejects loanAmount below minimum (< 1000)", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 500, annualRate: 5, termYears: 30, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects loanAmount above maximum (> 10,000,000)", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 10_000_001, annualRate: 5, termYears: 30, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects annualRate above 30%", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 31, termYears: 30, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects negative annualRate", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: -1, termYears: 30, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects termYears below minimum (< 1)", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 5, termYears: 0, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects termYears above maximum (> 30)", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 5, termYears: 31, downPayment: 0 }),
    ).toThrow();
  });

  it("rejects downPayment exceeding loanAmount", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 5, termYears: 30, downPayment: 250000 }),
    ).toThrow();
  });

  it("accepts downPayment equal to loanAmount", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 5, termYears: 30, downPayment: 200000 }),
    ).not.toThrow();
  });

  it("accepts 0% interest rate", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 0, termYears: 30, downPayment: 0 }),
    ).not.toThrow();
  });

  it("accepts 30% interest rate (boundary)", () => {
    expect(() =>
      calculator.inputSchema.parse({ loanAmount: 200000, annualRate: 30, termYears: 30, downPayment: 0 }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { loanAmount: 200000, annualRate: 6, termYears: 30, downPayment: 0 },
      { loanAmount: 500, annualRate: 6, termYears: 30, downPayment: 0 },
    );
  });
});

describe("Mortgage edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("amortization schedule entries all have positive payment", () => {
    const inputs = calculator.inputSchema.parse({
      loanAmount: 200000,
      annualRate: 6,
      termYears: 30,
      downPayment: 0,
    });
    const result = calculator.compute(inputs);
    for (const row of result.amortizationSchedule) {
      expect(row.payment).toBeGreaterThan(0);
      expect(row.balance).toBeGreaterThanOrEqual(0);
    }
  });
});
