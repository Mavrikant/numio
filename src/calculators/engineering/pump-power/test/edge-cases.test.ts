import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("Pump Power edge cases — schema validation", () => {
  it("rejects zero flow rate", () => {
    expect(() =>
      calculator.inputSchema.parse({
        flowRate: 0,
        flowUnit: "m3h",
        head: 20,
        density: 1000,
        pumpEfficiency: 75,
        motorEfficiency: 90,
        energyCost: 0.12,
        operatingHours: 8000,
      }),
    ).toThrow();
  });

  it("rejects pump efficiency > 100%", () => {
    expect(() =>
      calculator.inputSchema.parse({
        flowRate: 100,
        flowUnit: "m3h",
        head: 20,
        density: 1000,
        pumpEfficiency: 120,
        motorEfficiency: 90,
        energyCost: 0.12,
        operatingHours: 8000,
      }),
    ).toThrow();
  });

  it("rejects negative head", () => {
    expect(() =>
      calculator.inputSchema.parse({
        flowRate: 100,
        flowUnit: "m3h",
        head: -5,
        density: 1000,
        pumpEfficiency: 75,
        motorEfficiency: 90,
        energyCost: 0.12,
        operatingHours: 8000,
      }),
    ).toThrow();
  });

  it("accepts 100% efficiency boundary (lossless ideal pump+motor)", () => {
    const parsed = calculator.inputSchema.parse({
      flowRate: 100,
      flowUnit: "m3h",
      head: 20,
      density: 1000,
      pumpEfficiency: 100,
      motorEfficiency: 100,
      energyCost: 0.12,
      operatingHours: 8000,
    }) as Record<string, unknown>;
    const result = calculator.compute(parsed) as Record<string, number>;
    // With 100% efficiency, electrical = shaft = hydraulic
    expect(result.electricalPowerKw).toBeCloseTo(result.hydraulicPowerKw!, 3);
    expect(result.overallEfficiency).toBeCloseTo(100, 3);
  });

  it("handles zero operating hours → zero annual energy/cost", () => {
    const parsed = calculator.inputSchema.parse({
      flowRate: 100,
      flowUnit: "m3h",
      head: 20,
      density: 1000,
      pumpEfficiency: 75,
      motorEfficiency: 90,
      energyCost: 0.12,
      operatingHours: 0,
    }) as Record<string, unknown>;
    const result = calculator.compute(parsed) as Record<string, number>;
    expect(result.annualEnergyKwh).toBe(0);
    expect(result.annualCost).toBe(0);
    // Power outputs should still be non-zero
    expect(result.hydraulicPowerKw!).toBeGreaterThan(0);
  });
});

describe("Pump Power edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      flowRate: 100,
      flowUnit: "m3h",
      head: 20,
      density: 1000,
      pumpEfficiency: 75,
      motorEfficiency: 90,
      energyCost: 0.12,
      operatingHours: 8000,
    }) as Record<string, unknown>;
    assertComputeIsPure(calculator, inputs);
  });
});
