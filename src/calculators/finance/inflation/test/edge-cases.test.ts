import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("inflation — edge cases", () => {
  it("schema rejects amount <= 0", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 0.01, inflationRate: 3, years: 10, mode: "future_cost" },
      { amount: 0, inflationRate: 3, years: 10, mode: "future_cost" },
    );
  });

  it("schema rejects inflationRate > 50", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 1000, inflationRate: 50, years: 10, mode: "future_cost" },
      { amount: 1000, inflationRate: 51, years: 10, mode: "future_cost" },
    );
  });

  it("schema rejects years < 1", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { amount: 1000, inflationRate: 3, years: 1, mode: "future_cost" },
      { amount: 1000, inflationRate: 3, years: 0, mode: "future_cost" },
    );
  });

  it("compute is pure", () => {
    const inputs = calculator.inputSchema.parse({
      amount: 1000,
      inflationRate: 3,
      years: 10,
      mode: "future_cost",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("high inflation (50%) for 10 years: massive purchasing power loss", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        amount: 1000,
        inflationRate: 50,
        years: 10,
        mode: "future_cost",
      }),
    );
    // FV = 1000 * 1.5^10 = 57,665
    expect(result.result).toBeGreaterThan(50000);
    // purchasing power loss should be > 98%
    expect(result.purchasingPowerLoss).toBeGreaterThan(98);
  });

  it("present_value mode: result < amount (future money worth less today)", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        amount: 2000,
        inflationRate: 3,
        years: 20,
        mode: "present_value",
      }),
    );
    // PV = 2000 / 1.03^20 ≈ 1107.90 — less than 2000
    expect(result.result).toBeLessThan(2000);
    expect(result.result).toBeCloseTo(1107.35, 0);
  });

  it("1 year, 2% inflation: result matches direct calculation", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        amount: 1000,
        inflationRate: 2,
        years: 1,
        mode: "future_cost",
      }),
    );
    expect(result.result).toBeCloseTo(1020, 2);
    expect(result.cumulativeInflation).toBeCloseTo(2, 4);
  });
});
