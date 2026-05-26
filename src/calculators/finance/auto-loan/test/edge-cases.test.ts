import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Auto Loan edge cases — schema validation", () => {
  it("rejects vehiclePrice below minimum", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 500, downPayment: 0, tradeInValue: 0, annualRate: 5, termMonths: 60 }),
    ).toThrow();
  });

  it("rejects annualRate above 40%", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 25000, downPayment: 0, tradeInValue: 0, annualRate: 41, termMonths: 60 }),
    ).toThrow();
  });

  it("rejects termMonths below 12", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 25000, downPayment: 0, tradeInValue: 0, annualRate: 5, termMonths: 6 }),
    ).toThrow();
  });

  it("rejects termMonths above 96", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 25000, downPayment: 0, tradeInValue: 0, annualRate: 5, termMonths: 120 }),
    ).toThrow();
  });

  it("rejects downPayment + tradeInValue > vehiclePrice", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 25000, downPayment: 15000, tradeInValue: 15000, annualRate: 5, termMonths: 60 }),
    ).toThrow();
  });

  it("accepts downPayment + tradeInValue = vehiclePrice", () => {
    expect(() =>
      calculator.inputSchema.parse({ vehiclePrice: 25000, downPayment: 15000, tradeInValue: 10000, annualRate: 5, termMonths: 60 }),
    ).not.toThrow();
  });

  it("schema validates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { vehiclePrice: 25000, downPayment: 0, tradeInValue: 0, annualRate: 5, termMonths: 60 },
      { vehiclePrice: 500, downPayment: 0, tradeInValue: 0, annualRate: 5, termMonths: 60 },
    );
  });
});

describe("Auto Loan edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      vehiclePrice: 30000, downPayment: 3000, tradeInValue: 2000, annualRate: 6.5, termMonths: 60,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
