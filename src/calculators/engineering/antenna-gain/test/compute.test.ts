import { describe, it } from "vitest";
import calc from "../definition";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("antenna-gain compute", () => {
  // Reference: G = η(πD/λ)², HPBW ≈ 70λ/D.
  // D=1.2 m, f=12 GHz, η=0.55 → λ=0.02498 m, G≈40.98 dBi, HPBW≈1.457°.
  runNumericTests(calc, [
    {
      inputs: { diameterM: 1.2, frequencyMHz: 12000, efficiencyPct: 55 },
      expected: { gainDbi: 40.98, beamwidthDeg: 1.457, wavelengthM: 0.02498 },
      tolerance: { gainDbi: 0.05, beamwidthDeg: 0.005, wavelengthM: 0.00005 },
    },
    // D=3 m, f=4 GHz, η=0.6 → λ=0.07495 m, G≈10log10(0.6·(π·3/0.07495)²)≈39.77 dBi.
    {
      inputs: { diameterM: 3, frequencyMHz: 4000, efficiencyPct: 60 },
      expected: { gainDbi: 39.77 },
      tolerance: { gainDbi: 0.1 },
    },
  ]);

  it("is pure", () => {
    assertComputeIsPure(calc, { diameterM: 2, frequencyMHz: 6000, efficiencyPct: 60 });
  });
});

describe("antenna-gain i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("antenna-gain definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "antenna-gain", category: "engineering" });
  });
});
