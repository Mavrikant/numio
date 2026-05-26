import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Voltage Drop compute — numeric correctness", () => {
  it("AWG 12 copper, 30m, 15A, 120V — realistic branch circuit", () => {
    // AWG 12 = 3.31 mm² = 3.31e-6 m²
    // drop = 2 × 1.724e-8 × 15 × 30 / 3.31e-6
    // = 2 × 1.724e-8 × 450 / 3.31e-6 = 1.5516e-5 / 3.31e-6 ≈ 4.687 V
    runNumericTests(calculator, [
      {
        inputs: { conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 12, lengthM: 30, currentA: 15, voltage: 120 },
        expected: { voltageDrop: (2 * 1.724e-8 * 15 * 30) / (3.31e-6) },
        tolerance: 0.05,
        description: "AWG 12 Cu, 30m, 15A, 120V",
      },
    ]);
  });

  it("mm² input: 6mm², copper, 50m, 20A, 230V", () => {
    // drop = 2 × 1.724e-8 × 20 × 50 / 6e-6
    const expected = (2 * 1.724e-8 * 20 * 50) / 6e-6;
    runNumericTests(calculator, [
      {
        inputs: { conductorMaterial: "copper", wireGaugeUnit: "mm2", wireGauge: 6, lengthM: 50, currentA: 20, voltage: 230 },
        expected: { voltageDrop: expected },
        tolerance: 0.01,
      },
    ]);
  });

  it("aluminum has higher voltage drop than copper for same dimensions", () => {
    const base = { wireGaugeUnit: "mm2" as const, wireGauge: 16, lengthM: 100, currentA: 30, voltage: 230 };
    const inputsCu = calculator.inputSchema.parse({ conductorMaterial: "copper", ...base });
    const inputsAl = calculator.inputSchema.parse({ conductorMaterial: "aluminum", ...base });
    const resultCu = calculator.compute(inputsCu);
    const resultAl = calculator.compute(inputsAl);
    expect(resultAl.voltageDrop).toBeGreaterThan(resultCu.voltageDrop);
  });

  it("voltageDropPct = voltageDrop / voltage * 100", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "mm2", wireGauge: 6, lengthM: 50, currentA: 20, voltage: 230,
    });
    const result = calculator.compute(inputs);
    expect(result.voltageDropPct).toBeCloseTo((result.voltageDrop / 230) * 100, 4);
  });

  it("receivingVoltage = voltage - voltageDrop", () => {
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "awg", wireGauge: 10, lengthM: 25, currentA: 20, voltage: 120,
    });
    const result = calculator.compute(inputs);
    expect(result.receivingVoltage).toBeCloseTo(120 - result.voltageDrop, 4);
  });
});

describe("Voltage Drop — recommendation thresholds", () => {
  it("low drop (tiny wire, short run) → ok", () => {
    // 2.5mm², 5m, 5A, 230V → drop = 2×1.724e-8×5×5/2.5e-6 = 0.3448V → 0.15%
    const inputs = calculator.inputSchema.parse({
      conductorMaterial: "copper", wireGaugeUnit: "mm2", wireGauge: 2.5, lengthM: 5, currentA: 5, voltage: 230,
    });
    const result = calculator.compute(inputs);
    expect(result.recommendation).toBe("ok");
  });
});
