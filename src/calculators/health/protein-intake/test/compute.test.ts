import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("protein-intake compute", () => {
  // 70 kg active: 1.2–1.6 g/kg → 84–112, midpoint 98, per meal 24.5.
  runNumericTests(calc, [
    {
      inputs: { weight: 70, activity: "active" },
      expected: { proteinGrams: 98, proteinLow: 84, proteinHigh: 112, perMeal: 24.5 },
      tolerance: 0.01,
    },
    { inputs: { weight: 80, activity: "athlete" }, expected: { proteinLow: 128, proteinHigh: 176, proteinGrams: 152 }, tolerance: 0.01 },
    { inputs: { weight: 60, activity: "sedentary" }, expected: { proteinLow: 48, proteinHigh: 60 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { weight: 75, activity: "active" }));
});

describe("protein-intake i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("protein-intake definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "protein-intake", category: "health" }));
});
