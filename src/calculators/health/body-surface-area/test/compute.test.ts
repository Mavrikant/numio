import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("body-surface-area compute", () => {
  // 70 kg, 175 cm: Mosteller √(175·70/3600)=√3.4028=1.8447;
  // Du Bois 0.007184·175^0.725·70^0.425=1.847; Haycock 0.024265·175^0.3964·70^0.5378=1.840.
  runNumericTests(calc, [
    {
      inputs: { weight: 70, height: 175 },
      expected: { mosteller: 1.845, duBois: 1.847, haycock: 1.847 },
      tolerance: { mosteller: 0.005, duBois: 0.01, haycock: 0.01 },
    },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { weight: 60, height: 165 }));
});

describe("body-surface-area i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("body-surface-area definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "body-surface-area", category: "health" }));
});
