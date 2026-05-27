import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("average-speed compute", () => {
  // 120 km in 1h30m = 80 km/h = 22.22 m/s = 49.71 mph.
  runNumericTests(calc, [
    {
      inputs: { distance: 120, hours: 1, minutes: 30 },
      expected: { speedKmh: 80, speedMs: 22.222, speedMph: 49.71 },
      tolerance: { speedKmh: 0.01, speedMs: 0.01, speedMph: 0.01 },
    },
    { inputs: { distance: 100, hours: 2, minutes: 0 }, expected: { speedKmh: 50 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { distance: 42.195, hours: 3, minutes: 30 }));
});

describe("average-speed i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("average-speed definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "average-speed", category: "conversion" }));
});
