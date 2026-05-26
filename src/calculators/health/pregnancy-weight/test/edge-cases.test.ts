import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

const VALID_INPUT = {
  prePregnancyWeight: 65,
  height: 165,
  currentWeight: 70,
  gestationalWeek: 20,
  unit: "metric",
};

describe("pregnancy-weight — schema validation", () => {
  it("accepts valid metric inputs", () => {
    expect(() => calculator.inputSchema.parse(VALID_INPUT)).not.toThrow();
  });

  it("accepts valid imperial inputs", () => {
    expect(() =>
      calculator.inputSchema.parse({
        prePregnancyWeight: 143,
        height: 65,
        currentWeight: 154,
        gestationalWeek: 20,
        unit: "imperial",
      })
    ).not.toThrow();
  });

  it("accepts minimum boundary values", () => {
    expect(() =>
      calculator.inputSchema.parse({
        prePregnancyWeight: 30,
        height: 100,
        currentWeight: 30,
        gestationalWeek: 1,
        unit: "metric",
      })
    ).not.toThrow();
  });

  it("accepts maximum boundary values", () => {
    expect(() =>
      calculator.inputSchema.parse({
        prePregnancyWeight: 300,
        height: 220,
        currentWeight: 350,
        gestationalWeek: 42,
        unit: "metric",
      })
    ).not.toThrow();
  });

  it("rejects missing unit", () => {
    expect(() =>
      calculator.inputSchema.parse({
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 70,
        gestationalWeek: 20,
      })
    ).toThrow();
  });

  it("rejects invalid unit value", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID_INPUT, unit: "pounds" })
    ).toThrow();
  });

  it("rejects pre-pregnancy weight below minimum (30 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID_INPUT, prePregnancyWeight: 20 })
    ).toThrow();
  });

  it("rejects gestational week 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID_INPUT, gestationalWeek: 0 })
    ).toThrow();
  });

  it("rejects gestational week 43 (out of range)", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID_INPUT, gestationalWeek: 43 })
    ).toThrow();
  });

  it("rejects non-integer gestational week", () => {
    expect(() =>
      calculator.inputSchema.parse({ ...VALID_INPUT, gestationalWeek: 20.5 })
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      VALID_INPUT,
      { ...VALID_INPUT, gestationalWeek: 0 },
    );
  });
});

describe("pregnancy-weight — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse(VALID_INPUT);
    assertComputeIsPure(calculator, inputs);
  });
});

describe("pregnancy-weight — edge cases", () => {
  it("weight loss (negative gain) returns 'under'", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        prePregnancyWeight: 70,
        height: 165,
        currentWeight: 68,
        gestationalWeek: 20,
        unit: "metric",
      })
    );
    expect(result.currentGain as number).toBe(-2);
    expect(result.onTrack).toBe("under");
  });

  it("extreme obesity still returns valid categories", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        prePregnancyWeight: 120,
        height: 160,
        currentWeight: 125,
        gestationalWeek: 15,
        unit: "metric",
      })
    );
    expect(result.bmiCategory).toBe("obese");
    expect(result.recommendedTotalGainMin as number).toBe(5);
    expect(result.recommendedTotalGainMax as number).toBe(9);
  });

  it("week 13 boundary — last 1st trimester week expected = firstTrimesterGain", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 66.5,
        gestationalWeek: 13,
        unit: "metric",
      })
    );
    expect(result.expectedGainAtWeek as number).toBeCloseTo(1.5, 1);
  });

  it("week 14 boundary — first 2nd trimester week adds weekly rate", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 67,
        gestationalWeek: 14,
        unit: "metric",
      })
    );
    // 1.5 + (14-13) × 0.42 = 1.92
    expect(result.expectedGainAtWeek as number).toBeCloseTo(1.9, 1);
  });

  it("returns all required output keys", () => {
    const result = calculator.compute(calculator.inputSchema.parse(VALID_INPUT));
    const keys = [
      "preBmi", "bmiCategory", "recommendedTotalGainMin", "recommendedTotalGainMax",
      "currentGain", "expectedGainAtWeek", "onTrack", "weeklyRateKg",
    ];
    for (const key of keys) {
      expect(result).toHaveProperty(key);
    }
  });
});
