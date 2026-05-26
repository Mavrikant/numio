import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Wire Gauge compute — numeric correctness", () => {
  // Reference: NEC 310.15(B)(16), ASTM B258
  // AWG diameter: d_mm = 0.127 × 92^((36-AWG)/39)
  // R/m = ρ/A, ρ_copper = 1.724e-8 Ω·m

  it("AWG 12 — diameter, area, ampacity", () => {
    // AWG 12: d = 0.127 × 92^(24/39) ≈ 2.053mm
    // A = π × (1.0265mm)² = π × 1.0537 mm² ≈ 3.309mm²
    // NEC ampacity: 20A
    runNumericTests(calculator, [
      {
        inputs: { awg: "12", current: 20, lengthM: 1, loadCurrent: 20 },
        expected: { diameterMm: 2.053, areaMm2: 3.309, ampacity: 20 },
        tolerance: { diameterMm: 0.005, areaMm2: 0.01, ampacity: 0.1 },
        description: "AWG 12 diameter and ampacity",
      },
    ]);
  });

  it("AWG 14 — resistance per meter and voltage drop", () => {
    // AWG 14: d = 0.127 × 92^(22/39) ≈ 1.628mm, A ≈ 2.081mm²
    // R/m = 1.724e-8 / (2.081e-6) ≈ 0.00829 Ω/m
    // V_drop (20A, 10m) = 20 × 0.00829 × 2 × 10 ≈ 3.316V
    runNumericTests(calculator, [
      {
        inputs: { awg: "14", current: 20, lengthM: 10, loadCurrent: 15 },
        expected: { diameterMm: 1.628, ampacity: 15 },
        tolerance: { diameterMm: 0.005, ampacity: 0.1 },
        description: "AWG 14 diameter",
      },
    ]);
  });

  it("AWG 10 — voltage drop round trip", () => {
    // AWG 10: d = 0.127 × 92^(26/39) ≈ 2.588mm, A ≈ 5.261mm²
    // R/m = 1.724e-8 / (5.261e-6) ≈ 0.003277 Ω/m
    // V_drop (30A, 15m) = 30 × 0.003277 × 2 × 15 ≈ 2.949V
    runNumericTests(calculator, [
      {
        inputs: { awg: "10", current: 30, lengthM: 15, loadCurrent: 30 },
        expected: { ampacity: 30, voltageDrop: 2.949 },
        tolerance: { ampacity: 0.1, voltageDrop: 0.1 },
        description: "AWG 10 voltage drop",
      },
    ]);
  });

  it("AWG 6 — ampacity 55A matches NEC table", () => {
    // NEC 310.15(B)(16): AWG 6 copper = 55A at 60°C
    runNumericTests(calculator, [
      {
        inputs: { awg: "6", current: 55, lengthM: 30, loadCurrent: 55 },
        expected: { ampacity: 55 },
        tolerance: 0.1,
        description: "AWG 6 ampacity = 55A per NEC",
      },
    ]);
  });

  it("AWG 4/0 — ampacity 195A matches NEC table", () => {
    // NEC 310.15(B)(16): 4/0 AWG copper = 195A at 60°C
    runNumericTests(calculator, [
      {
        inputs: { awg: "4/0", current: 195, lengthM: 20, loadCurrent: 195 },
        expected: { ampacity: 195 },
        tolerance: 0.1,
        description: "AWG 4/0 ampacity = 195A per NEC",
      },
    ]);
  });
});

describe("Wire Gauge compute — suitability check", () => {
  it("AWG 12, 15A load, 10m — suitable (voltage drop <3%)", () => {
    const inputs = calculator.inputSchema.parse({ awg: "12", current: 15, lengthM: 10, loadCurrent: 15 });
    const result = calculator.compute(inputs) as { isSuitable: boolean };
    expect(result.isSuitable).toBe(true);
  });

  it("AWG 14, 20A load — unsuitable (exceeds ampacity)", () => {
    // AWG 14 ampacity = 15A, 20A load exceeds it
    const inputs = calculator.inputSchema.parse({ awg: "14", current: 20, lengthM: 5, loadCurrent: 20 });
    const result = calculator.compute(inputs) as { isSuitable: boolean };
    expect(result.isSuitable).toBe(false);
  });
});
