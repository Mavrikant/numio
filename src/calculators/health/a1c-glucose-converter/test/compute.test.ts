import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("a1c-glucose-converter compute", () => {
  // A1C 6.5% → eAG = 28.7·6.5 − 46.7 = 139.85 mg/dL = 7.76 mmol/L.
  runNumericTests(calc, [
    {
      inputs: { mode: "a1c-to-glucose", value: 6.5 },
      expected: { a1cPercent: 6.5, glucoseMgDl: 139.85, glucoseMmol: 7.762 },
      tolerance: { a1cPercent: 0.001, glucoseMgDl: 0.05, glucoseMmol: 0.01 },
    },
    // 140 mg/dL → A1C = (140+46.7)/28.7 = 6.505%.
    {
      inputs: { mode: "glucose-to-a1c", value: 140 },
      expected: { glucoseMgDl: 140, a1cPercent: 6.505, glucoseMmol: 7.77 },
      tolerance: { glucoseMgDl: 0.01, a1cPercent: 0.01, glucoseMmol: 0.02 },
    },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { mode: "a1c-to-glucose", value: 7 }));
});

describe("a1c-glucose-converter i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("a1c-glucose-converter definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "a1c-glucose-converter", category: "health" }));
});
