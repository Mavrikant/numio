import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("unit-price compute", () => {
  // A: 3.5/500 = 0.007; B: 6/1000 = 0.006; B cheaper by (0.007-0.006)/0.007 = 14.29%.
  runNumericTests(calc, [
    {
      inputs: { priceA: 3.5, quantityA: 500, priceB: 6, quantityB: 1000 },
      expected: { unitPriceA: 0.007, unitPriceB: 0.006, savingsPercent: 14.286 },
      tolerance: { unitPriceA: 0.0001, unitPriceB: 0.0001, savingsPercent: 0.01 },
    },
    { inputs: { priceA: 10, quantityA: 2, priceB: 10, quantityB: 2 }, expected: { savingsPercent: 0 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { priceA: 2, quantityA: 3, priceB: 5, quantityB: 8 }));
});

describe("unit-price i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("unit-price definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "unit-price", category: "conversion" }));
});
