import { describe, it } from "vitest";
import calc from "../definition";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("circle compute", () => {
  // r=5 → d=10, C=2π·5=31.4159, A=π·25=78.5398.
  runNumericTests(calc, [
    {
      inputs: { known: "radius", value: 5 },
      expected: { radius: 5, diameter: 10, circumference: 31.4159, area: 78.5398 },
      tolerance: { radius: 0.0001, diameter: 0.0001, circumference: 0.001, area: 0.001 },
    },
    // area=78.5398 → r=5.
    {
      inputs: { known: "area", value: 78.539816 },
      expected: { radius: 5, diameter: 10 },
      tolerance: { radius: 0.0001, diameter: 0.0001 },
    },
    // circumference=31.41593 → r=5, d=10.
    {
      inputs: { known: "circumference", value: 31.415927 },
      expected: { radius: 5, diameter: 10, area: 78.5398 },
      tolerance: { radius: 0.0001, diameter: 0.0001, area: 0.001 },
    },
  ]);

  it("is pure", () => {
    assertComputeIsPure(calc, { known: "diameter", value: 12.5 });
  });
});

describe("circle i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("circle definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "circle", category: "math" });
  });
});
