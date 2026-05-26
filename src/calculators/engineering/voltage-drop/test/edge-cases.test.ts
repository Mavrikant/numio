import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Voltage Drop edge cases — schema", () => {
  it("rejects zero current", () => {
    expect(() =>
      calculator.inputSchema.parse({ conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 0, voltage: 120 }),
    ).toThrow();
  });

  it("rejects negative length", () => {
    expect(() =>
      calculator.inputSchema.parse({ conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: -1, currentA: 15, voltage: 120 }),
    ).toThrow();
  });

  it("rejects invalid material", () => {
    expect(() =>
      calculator.inputSchema.parse({ conductorMaterial: "gold", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 15, voltage: 120 }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 15, voltage: 120 },
      { conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: -1, currentA: 15, voltage: 120 },
    );
  });
});

describe("Voltage Drop edge cases — compute purity", () => {
  it("produces identical results on multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 15, voltage: 120,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Voltage Drop edge cases — output validation", () => {
  it("all outputs are finite numbers", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "mm2", wireGauge: 4, lengthM: 100, currentA: 25, voltage: 230,
    });
    const result = calculator.compute(inputs);
    expect(isFinite(result.voltageDrop)).toBe(true);
    expect(isFinite(result.voltageDropPct)).toBe(true);
    expect(isFinite(result.receivingVoltage)).toBe(true);
    expect(isFinite(result.areaMm2)).toBe(true);
  });

  it("recommendation is one of: ok, warning, critical", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "aluminum", wireGaugeUnit: "awg", wireGauge: 14, lengthM: 50, currentA: 15, voltage: 120,
    });
    const result = calculator.compute(inputs);
    expect(["ok", "warning", "critical"]).toContain(result.recommendation);
  });
});
