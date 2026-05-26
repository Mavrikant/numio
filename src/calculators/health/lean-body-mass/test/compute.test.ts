import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Boer P. (1984). Crit Care Med 12(3):190-194
// Reference: Hume R. (1966). J Clin Pathol 19(4):389-391

describe("LBM compute — Boer formula numeric correctness", () => {
  it("Boer male: 70 kg, 175 cm → LBM ≈ 57.845 kg", () => {
    // Male: 0.407×70 + 0.267×175 − 19.2 = 28.49 + 46.725 − 19.2 = 56.015
    // Wait: let's recalculate: 0.407*70=28.49, 0.267*175=46.725, 46.725+28.49-19.2=56.015
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 70, height: 175, formula: "boer" },
        expected: { lbm: 56.02 },
        tolerance: 0.05,
      },
    ]);
  });

  it("Boer female: 60 kg, 162 cm → LBM ≈ 28.326 kg", () => {
    // Female: 0.252×60 + 0.473×162 − 48.3 = 15.12 + 76.626 − 48.3 = 43.446
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", weight: 60, height: 162, formula: "boer" },
        expected: { lbm: 43.446 },
        tolerance: 0.05,
      },
    ]);
  });

  it("Boer male: 80 kg, 180 cm → LBM ≈ 61.4 kg", () => {
    // Male: 0.407×80 + 0.267×180 − 19.2 = 32.56 + 48.06 − 19.2 = 61.42
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 80, height: 180, formula: "boer" },
        expected: { lbm: 61.42 },
        tolerance: 0.05,
      },
    ]);
  });
});

describe("LBM compute — Hume formula numeric correctness", () => {
  it("Hume male: 70 kg, 175 cm → LBM ≈ 55.45 kg", () => {
    // Male: 0.3281×70 + 0.33929×175 − 29.5336 = 22.967 + 59.376 − 29.5336 = 52.809
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", weight: 70, height: 175, formula: "hume" },
        expected: { lbm: 52.809 },
        tolerance: 0.1,
      },
    ]);
  });

  it("Hume female: 60 kg, 162 cm → LBM ≈ 41.5 kg", () => {
    // Female: 0.29569×60 + 0.41813×162 − 43.2933 = 17.741 + 67.737 − 43.2933 = 42.185
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", weight: 60, height: 162, formula: "hume" },
        expected: { lbm: 42.185 },
        tolerance: 0.1,
      },
    ]);
  });
});

describe("LBM compute — bodyFatMass and bodyFatPct", () => {
  it("bodyFatMass = weight - LBM", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, formula: "boer",
    });
    const result = calculator.compute(inputs);
    const lbm = result.lbm as number;
    const fatMass = result.bodyFatMass as number;
    expect(Math.abs(lbm + fatMass - 70)).toBeLessThan(0.05);
  });

  it("bodyFatPct = bodyFatMass / weight * 100", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "female", weight: 60, height: 162, formula: "boer",
    });
    const result = calculator.compute(inputs);
    const fatMass = result.bodyFatMass as number;
    const fatPct = result.bodyFatPct as number;
    expect(Math.abs(fatMass / 60 * 100 - fatPct)).toBeLessThan(0.5);
  });

  it("lbmLb = lbm * 2.20462 approximately", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, formula: "boer",
    });
    const result = calculator.compute(inputs);
    const lbm = result.lbm as number;
    const lbmLb = result.lbmLb as number;
    expect(Math.abs(lbm * 2.20462 - lbmLb)).toBeLessThan(0.1);
  });
});
