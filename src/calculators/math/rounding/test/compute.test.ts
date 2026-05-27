import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("rounding compute", () => {
  runNumericTests(calc, [
    {
      inputs: { value: 3.14159, decimals: 2 },
      expected: { rounded: 3.14, roundedUp: 3.15, roundedDown: 3.14, truncated: 3.14 },
      tolerance: 0.0001,
    },
    {
      inputs: { value: 2.5, decimals: 0 },
      expected: { rounded: 3, roundedUp: 3, roundedDown: 2, truncated: 2 },
      tolerance: 0.0001,
    },
    {
      inputs: { value: -1.235, decimals: 2 },
      expected: { rounded: -1.24, roundedUp: -1.23, roundedDown: -1.24, truncated: -1.23 },
      tolerance: 0.0001,
    },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { value: 9.87654, decimals: 3 }));
});

describe("rounding i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("rounding definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "rounding", category: "math" }));
});
