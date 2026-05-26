import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Macros edge cases — schema validation", () => {
  it("rejects tdee below 800", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 799, goal: "maintenance", proteinPct: 30, fatPct: 30 }),
    ).toThrow();
  });

  it("rejects tdee above 10000", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 10001, goal: "maintenance", proteinPct: 30, fatPct: 30 }),
    ).toThrow();
  });

  it("rejects proteinPct below 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 2000, goal: "maintenance", proteinPct: 9, fatPct: 30 }),
    ).toThrow();
  });

  it("rejects proteinPct + fatPct > 90", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 2000, goal: "maintenance", proteinPct: 50, fatPct: 45 }),
    ).toThrow();
  });

  it("rejects invalid goal", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 2000, goal: "losing", proteinPct: 30, fatPct: 30 }),
    ).toThrow();
  });

  it("accepts proteinPct + fatPct exactly 90", () => {
    expect(() =>
      calculator.inputSchema.parse({ tdee: 2000, goal: "cutting", proteinPct: 50, fatPct: 40 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { tdee: 2000, goal: "maintenance", proteinPct: 30, fatPct: 30 },
      { tdee: 799, goal: "maintenance", proteinPct: 30, fatPct: 30 },
    );
  });
});

describe("Macros edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ tdee: 2000, goal: "maintenance", proteinPct: 30, fatPct: 30 });
    assertComputeIsPure(calculator, inputs);
  });

  it("all outputs are finite numbers", () => {
    const inputs = calculator.inputSchema.parse({ tdee: 2000, goal: "cutting", proteinPct: 40, fatPct: 30 });
    const result = calculator.compute(inputs) as Record<string, unknown>;
    for (const key of ["proteinG", "fatG", "carbsG", "proteinKcal", "fatKcal", "carbsKcal", "totalKcal"]) {
      expect(typeof result[key]).toBe("number");
      expect(isFinite(result[key] as number)).toBe(true);
    }
  });
});
