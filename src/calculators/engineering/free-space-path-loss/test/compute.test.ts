import { describe, it } from "vitest";
import calc from "../definition";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("free-space-path-loss compute", () => {
  // Reference: FSPL = 20log10(d_m) + 20log10(f_Hz) − 147.55.
  // 2400 MHz, 1 km → 60 + 187.604 − 147.551 = 100.05 dB; λ = c/2.4e9 = 0.12491 m.
  runNumericTests(calc, [
    {
      inputs: { frequencyMHz: 2400, distanceKm: 1, txPowerDbm: 20, txGainDbi: 0, rxGainDbi: 0 },
      expected: { fsplDb: 100.05, wavelengthM: 0.1249, eirpDbm: 20, rxPowerDbm: -80.05 },
      tolerance: { fsplDb: 0.05, wavelengthM: 0.0005, eirpDbm: 0.01, rxPowerDbm: 0.05 },
    },
    // 900 MHz, 10 km → 80 + 179.085 − 147.551 = 111.53 dB.
    {
      inputs: { frequencyMHz: 900, distanceKm: 10, txPowerDbm: 30, txGainDbi: 12, rxGainDbi: 3 },
      expected: { fsplDb: 111.53, eirpDbm: 42 },
      tolerance: { fsplDb: 0.05, eirpDbm: 0.01 },
    },
  ]);

  it("is pure", () => {
    assertComputeIsPure(calc, {
      frequencyMHz: 2400,
      distanceKm: 5,
      txPowerDbm: 20,
      txGainDbi: 6,
      rxGainDbi: 6,
    });
  });
});

describe("free-space-path-loss i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("free-space-path-loss definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "free-space-path-loss", category: "engineering" });
  });
});
