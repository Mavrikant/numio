import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("waist-to-height-ratio compute", () => {
  runNumericTests(calc, [
    {
      inputs: { waist: 85, height: 175 },
      expected: { ratio: 0.4857, percentOfHeight: 48.571, healthyWaistMax: 87.5 },
      tolerance: { ratio: 0.001, percentOfHeight: 0.01, healthyWaistMax: 0.01 },
    },
    { inputs: { waist: 100, height: 200 }, expected: { ratio: 0.5, healthyWaistMax: 100 }, tolerance: 0.001 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { waist: 90, height: 180 }));
});

describe("waist-to-height-ratio i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("waist-to-height-ratio definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "waist-to-height-ratio", category: "health" }));
});
