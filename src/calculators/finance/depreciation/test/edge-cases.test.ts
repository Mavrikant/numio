import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Depreciation edge cases — schema validation", () => {
  it("rejects salvage value exceeding asset cost", () => {
    expect(() =>
      calculator.inputSchema.parse({
        assetCost: 1000,
        salvageValue: 2000,
        usefulLife: 5,
        method: "straight-line",
      }),
    ).toThrow();
  });

  it("rejects useful life of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({
        assetCost: 1000,
        salvageValue: 100,
        usefulLife: 0,
        method: "straight-line",
      }),
    ).toThrow();
  });

  it("rejects useful life above 100", () => {
    expect(() =>
      calculator.inputSchema.parse({
        assetCost: 1000,
        salvageValue: 100,
        usefulLife: 101,
        method: "straight-line",
      }),
    ).toThrow();
  });

  it("rejects unknown method", () => {
    expect(() =>
      calculator.inputSchema.parse({
        assetCost: 1000,
        salvageValue: 100,
        usefulLife: 5,
        method: "made-up-method",
      }),
    ).toThrow();
  });

  it("accepts salvage equal to asset cost (zero depreciation)", () => {
    const parsed = calculator.inputSchema.parse({
      assetCost: 1000,
      salvageValue: 1000,
      usefulLife: 5,
      method: "straight-line",
    });
    const result = calculator.compute(parsed);
    expect(result.totalDepreciation).toBeCloseTo(0, 1);
    expect(result.bookValueEndOfLife).toBeCloseTo(1000, 1);
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { assetCost: 50000, salvageValue: 5000, usefulLife: 5, method: "straight-line", decliningRate: 20 },
      { assetCost: 50000, salvageValue: 60000, usefulLife: 5, method: "straight-line", decliningRate: 20 },
    );
  });
});

describe("Depreciation edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      assetCost: 50000,
      salvageValue: 5000,
      usefulLife: 5,
      method: "straight-line",
    });
    assertComputeIsPure(calculator, inputs);
  });
});
