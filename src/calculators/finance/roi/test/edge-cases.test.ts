import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("roi — edge cases", () => {
  it("schema rejects initialInvestment <= 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { initialInvestment: 1, finalValue: 1000, years: 1 },
      { initialInvestment: 0, finalValue: 1000, years: 1 },
    );
  });

  it("schema rejects years < 0.01", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { initialInvestment: 1000, finalValue: 2000, years: 0.01 },
      { initialInvestment: 1000, finalValue: 2000, years: 0 },
    );
  });

  it("schema rejects finalValue < 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { initialInvestment: 1000, finalValue: 0, years: 1 },
      { initialInvestment: 1000, finalValue: -1, years: 1 },
    );
  });

  it("compute is pure (same inputs → same outputs, no side effects)", () => {
    const inputs = calculator.inputSchema.parse({
      initialInvestment: 10000,
      finalValue: 15000,
      years: 3,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("finalValue=0: total loss, ROI=-100%, MOIC=0", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 0,
        years: 1,
      }),
    );
    expect(result.roi).toBeCloseTo(-100, 4);
    expect(result.moic).toBeCloseTo(0, 4);
    expect(result.netProfit).toBeCloseTo(-10000, 2);
    // ruleOf72Years should be 0 when annualizedRoi <= 0
    expect(result.ruleOf72Years).toBe(0);
  });

  it("large values: $1B investment → $2B in 20 years", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 1_000_000_000,
        finalValue: 2_000_000_000,
        years: 20,
      }),
    );
    expect(result.roi).toBeCloseTo(100, 2);
    expect(result.moic).toBeCloseTo(2, 4);
    // CAGR = 2^(1/20)-1 ≈ 3.526%
    expect(result.annualizedRoi).toBeCloseTo(3.526, 1);
  });

  it("fractional years: 1.5 years period", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        initialInvestment: 10000,
        finalValue: 12000,
        years: 1.5,
      }),
    );
    // ROI = 20%
    expect(result.roi).toBeCloseTo(20, 4);
    // CAGR = 1.2^(1/1.5) - 1 = 1.2^(2/3) - 1 ≈ 0.1292 = 12.92%
    expect(result.annualizedRoi).toBeCloseTo(12.92, 1);
  });
});
