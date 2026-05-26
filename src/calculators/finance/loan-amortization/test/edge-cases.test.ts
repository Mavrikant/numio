import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Loan Amortization edge cases — schema validation", () => {
  it("rejects principal below minimum (< 100)", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 50, annualRate: 5, termMonths: 60 }),
    ).toThrow();
  });

  it("rejects principal above maximum (> 10,000,000)", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10_000_001, annualRate: 5, termMonths: 60 }),
    ).toThrow();
  });

  it("rejects annualRate above 50%", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 51, termMonths: 60 }),
    ).toThrow();
  });

  it("rejects termMonths above 600", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 5, termMonths: 601 }),
    ).toThrow();
  });

  it("accepts 0% interest rate", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 0, termMonths: 60 }),
    ).not.toThrow();
  });

  it("accepts optional startDate omitted", () => {
    expect(() =>
      calculator.inputSchema.parse({ principal: 10000, annualRate: 5, termMonths: 60 }),
    ).not.toThrow();
  });

  it("schema validates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { principal: 10000, annualRate: 5, termMonths: 60 },
      { principal: 50, annualRate: 5, termMonths: 60 },
    );
  });
});

describe("Loan Amortization edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 60,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("all schedule entries have non-negative balance", () => {
    const inputs = calculator.inputSchema.parse({
      principal: 10000,
      annualRate: 5,
      termMonths: 60,
    });
    const result = calculator.compute(inputs);
    for (const row of result.amortizationSchedule) {
      expect(row.balance).toBeGreaterThanOrEqual(0);
    }
  });
});
