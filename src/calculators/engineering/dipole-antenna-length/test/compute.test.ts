import { describe, it } from "vitest";
import calc from "../definition";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("dipole-antenna-length compute", () => {
  // Reference: L = fraction · λ · vf, λ = c/f.
  // 14.1 MHz, half-wave, vf=0.95 → λ=21.262 m, L=10.099 m (≈142.5/f), each leg 5.050 m.
  runNumericTests(calc, [
    {
      inputs: { frequencyMHz: 14.1, type: "half-wave-dipole", velocityFactorPct: 95 },
      expected: { lengthM: 10.0994, legLengthM: 5.0497, wavelengthM: 21.2619, lengthCm: 1009.94 },
      tolerance: { lengthM: 0.001, legLengthM: 0.001, wavelengthM: 0.001, lengthCm: 0.1 },
    },
    // Quarter-wave monopole at 100 MHz, vf=0.95 → λ=2.99792 m, L=0.25·λ·0.95=0.71201 m.
    {
      inputs: { frequencyMHz: 100, type: "quarter-wave-monopole", velocityFactorPct: 95 },
      expected: { lengthM: 0.712, legLengthM: 0.712, wavelengthM: 2.99792 },
      tolerance: { lengthM: 0.001, legLengthM: 0.001, wavelengthM: 0.001 },
    },
  ]);

  it("is pure", () => {
    assertComputeIsPure(calc, {
      frequencyMHz: 28.5,
      type: "full-wave-loop",
      velocityFactorPct: 95,
    });
  });
});

describe("dipole-antenna-length i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("dipole-antenna-length definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "dipole-antenna-length", category: "engineering" });
  });
});
