import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

/**
 * Numeric oracle for the wire-gauge calculator.
 *
 * The compute() function uses the round-trip resistance formula:
 *   R = 2 · L · ρ · k_ac / A
 *   V_drop = I · R,   P_loss = I² · R
 *
 * with ρ_Cu = 1.724e-8 Ω·m, ρ_Al = 2.82e-8 Ω·m,
 * and AC factor k_ac ∈ {1.00 (DC), 1.02 (50 Hz), 1.03 (60 Hz)}.
 *
 * Areas come from the AWG ↔ diameter formula
 *   d_mm = 0.127 · 92^((36 − AWG)/39),  A = π·(d/2)².
 */

describe("Wire Gauge compute — numeric correctness", () => {
  it("AWG 12 copper, 10 m, 20 A DC: round-trip drop ≈ 2.08 V", () => {
    // AWG 12 ⇒ d = 2.053 mm ⇒ A = 3.309 mm²
    // R = 2 · 10 · 1.724e-8 / 3.309e-6 = 0.1042 Ω
    // V = 20 · 0.1042 = 2.084 V
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "awg", wireSize: 12, wireLength: 10, current: 20, material: "copper", frequency: "dc" },
        expected: { voltageDrop: 2.084, resistance: 0.1042 },
        tolerance: { voltageDrop: 0.05, resistance: 0.005 },
        description: "AWG 12 copper 10 m 20 A DC",
      },
    ]);
  });

  it("2.5 mm² copper, 50 m, 16 A AC60: round-trip drop ≈ 11.36 V", () => {
    // R_dc = 2 · 50 · 1.724e-8 / 2.5e-6 = 0.6896 Ω
    // R_ac60 = 0.6896 · 1.03 = 0.7103 Ω
    // V = 16 · 0.7103 = 11.365 V
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "mm2", wireSize: 2.5, wireLength: 50, current: 16, material: "copper", frequency: "ac60" },
        expected: { voltageDrop: 11.365, resistance: 0.7103 },
        tolerance: { voltageDrop: 0.05, resistance: 0.005 },
        description: "2.5 mm² copper 50 m 16 A AC 60 Hz",
      },
    ]);
  });

  it("AWG 6 aluminum, 30 m, 40 A DC: power loss ≈ 204 W", () => {
    // AWG 6 ⇒ d ≈ 4.115 mm ⇒ A ≈ 13.30 mm²
    // R = 2 · 30 · 2.82e-8 / 13.30e-6 = 0.1273 Ω
    // P = 40² · 0.1273 = 203.6 W
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "awg", wireSize: 6, wireLength: 30, current: 40, material: "aluminum", frequency: "dc" },
        expected: { powerLoss: 203.6, resistance: 0.1273 },
        tolerance: { powerLoss: 1, resistance: 0.005 },
        description: "AWG 6 aluminum 30 m 40 A DC",
      },
    ]);
  });

  it("converts between mm² and AWG consistently", () => {
    // 2.5 mm² ↔ AWG ≈ 13.21; AWG 12 ↔ 3.309 mm²
    runNumericTests(calculator, [
      {
        inputs: { sizeUnit: "mm2", wireSize: 2.5, wireLength: 1, current: 1, material: "copper", frequency: "dc" },
        expected: { awgEquivalent: 13.21, crossSectionArea: 2.5 },
        tolerance: { awgEquivalent: 0.05, crossSectionArea: 0.001 },
        description: "2.5 mm² ⇒ AWG ≈ 13.21",
      },
      {
        inputs: { sizeUnit: "awg", wireSize: 12, wireLength: 1, current: 1, material: "copper", frequency: "dc" },
        expected: { awgEquivalent: 12, crossSectionArea: 3.309 },
        tolerance: { awgEquivalent: 0.01, crossSectionArea: 0.005 },
        description: "AWG 12 ⇒ 3.31 mm²",
      },
    ]);
  });
});

describe("Wire Gauge compute — schema edge cases", () => {
  const parse = (inputs: any) => calculator.compute(calculator.inputSchema.parse(inputs));

  it("a thick conductor (AWG 1) has very low resistance per metre", () => {
    // AWG 1 ⇒ d ≈ 7.35 mm, A ≈ 42.4 mm². R = 2·1·1.724e-8/42.4e-6 ≈ 8.13e-4 Ω.
    const result = parse({
      sizeUnit: "awg",
      wireSize: 1,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.resistance).toBeGreaterThan(0);
    expect(result.resistance).toBeLessThan(0.002);
  });

  it("a hair-thin conductor (AWG 40) has very high resistance per metre", () => {
    // AWG 40 ⇒ d ≈ 0.08 mm, A ≈ 0.005 mm². R ≈ 6.9 Ω/m round-trip.
    const result = parse({
      sizeUnit: "awg",
      wireSize: 40,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.resistance).toBeGreaterThan(1);
  });

  it("a fat 100 mm² conductor has high ampacity (>200 A)", () => {
    // NEC-interpolated: 95 mm² → 200 A, 120 mm² → 250 A, so 100 mm² ≈ 210 A.
    const result = parse({
      sizeUnit: "mm2",
      wireSize: 100,
      wireLength: 1,
      current: 1,
      material: "copper",
      frequency: "dc",
    });
    expect(result.ampacityRating).toBeGreaterThan(200);
  });

  it("aluminum is derated below the copper ampacity", () => {
    const cu = parse({
      sizeUnit: "mm2", wireSize: 10, wireLength: 1, current: 1,
      material: "copper", frequency: "dc",
    });
    const al = parse({
      sizeUnit: "mm2", wireSize: 10, wireLength: 1, current: 1,
      material: "aluminum", frequency: "dc",
    });
    expect(al.ampacityRating).toBeLessThan(cu.ampacityRating);
    expect(al.resistance).toBeGreaterThan(cu.resistance);
  });

  it("AC bumps resistance above DC", () => {
    const dc = parse({
      sizeUnit: "mm2", wireSize: 10, wireLength: 100, current: 50,
      material: "copper", frequency: "dc",
    });
    const ac60 = parse({
      sizeUnit: "mm2", wireSize: 10, wireLength: 100, current: 50,
      material: "copper", frequency: "ac60",
    });
    expect(ac60.resistance).toBeGreaterThan(dc.resistance);
  });
});
