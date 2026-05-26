import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Water Intake edge cases — schema validation", () => {
  it("rejects weight of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 0, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("rejects negative weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: -5, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("rejects weight above 300 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 301, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("rejects invalid activityLevel", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 70, activityLevel: "extreme", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("rejects invalid climate", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 70, activityLevel: "moderate", climate: "arctic", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("rejects NaN weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: NaN, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).toThrow();
  });

  it("accepts minimum weight (1 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 1, activityLevel: "sedentary", climate: "temperate", isPregnant: false, isBreastfeeding: false }),
    ).not.toThrow();
  });

  it("accepts maximum weight (300 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 300, activityLevel: "very_active", climate: "very_hot", isPregnant: false, isBreastfeeding: false }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { weight: 70, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false },
      { weight: 0, activityLevel: "moderate", climate: "temperate", isPregnant: false, isBreastfeeding: false },
    );
  });
});

describe("Water Intake edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      weight: 70, activityLevel: "moderate", climate: "hot", isPregnant: false, isBreastfeeding: false,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("all outputs are finite numbers", () => {
    const inputs = calculator.inputSchema.parse({
      weight: 70, activityLevel: "very_active", climate: "very_hot", isPregnant: true, isBreastfeeding: false,
    });
    const result = calculator.compute(inputs) as Record<string, unknown>;
    for (const key of ["dailyWaterMl", "dailyWaterL", "dailyWaterOz", "dailyWaterCups", "glassesOf250ml"]) {
      expect(typeof result[key]).toBe("number");
      expect(isFinite(result[key] as number)).toBe(true);
      expect(result[key] as number).toBeGreaterThan(0);
    }
  });
});
