import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("running-pace compute", () => {
  // 10 km in 50:00 → 300 s/km (5:00), 12 km/h, 7.4565 mph.
  runNumericTests(calc, [
    {
      inputs: { distanceValue: 10, distanceUnit: "km", hours: 0, minutes: 50, seconds: 0 },
      expected: { paceSecPerKm: 300, paceSecPerMile: 482.8, speedKmh: 12, speedMph: 7.4565 },
      tolerance: { paceSecPerKm: 0.5, paceSecPerMile: 0.5, speedKmh: 0.01, speedMph: 0.001 },
    },
    // 5 mi in 40:00 → distance 8.04672 km, 12.07 km/h.
    {
      inputs: { distanceValue: 5, distanceUnit: "mi", hours: 0, minutes: 40, seconds: 0 },
      expected: { speedKmh: 12.07, speedMph: 7.5 },
      tolerance: { speedKmh: 0.01, speedMph: 0.01 },
    },
  ]);

  it("formats pace as m:ss", () => {
    const r = compute({ distanceValue: 10, distanceUnit: "km", hours: 0, minutes: 50, seconds: 0 });
    expect(r.pacePerKm).toBe("5:00");
    expect(r.pacePerMile).toBe("8:03");
  });

  it("is pure", () => {
    assertComputeIsPure(calc, { distanceValue: 21.0975, distanceUnit: "km", hours: 1, minutes: 45, seconds: 0 });
  });
});

describe("running-pace i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("running-pace definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "running-pace", category: "health" });
  });
});
