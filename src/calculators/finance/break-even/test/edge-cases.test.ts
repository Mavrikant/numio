import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Break-even edge cases — schema validation", () => {
  it("rejects price equal to variable cost (zero contribution margin)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        fixedCosts: 1000,
        variableCostPerUnit: 10,
        pricePerUnit: 10,
      }),
    ).toThrow();
  });

  it("rejects price below variable cost (negative contribution margin)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        fixedCosts: 1000,
        variableCostPerUnit: 15,
        pricePerUnit: 10,
      }),
    ).toThrow();
  });

  it("rejects negative fixed costs", () => {
    expect(() =>
      calculator.inputSchema.parse({
        fixedCosts: -100,
        variableCostPerUnit: 5,
        pricePerUnit: 15,
      }),
    ).toThrow();
  });

  it("rejects negative variable cost", () => {
    expect(() =>
      calculator.inputSchema.parse({
        fixedCosts: 1000,
        variableCostPerUnit: -1,
        pricePerUnit: 15,
      }),
    ).toThrow();
  });

  it("accepts price marginally above variable cost", () => {
    expect(() =>
      calculator.inputSchema.parse({
        fixedCosts: 1000,
        variableCostPerUnit: 9.99,
        pricePerUnit: 10,
      }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { fixedCosts: 1000, variableCostPerUnit: 5, pricePerUnit: 15 },
      { fixedCosts: 1000, variableCostPerUnit: 20, pricePerUnit: 10 },
    );
  });
});

describe("Break-even edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      fixedCosts: 10000,
      variableCostPerUnit: 5,
      pricePerUnit: 15,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
