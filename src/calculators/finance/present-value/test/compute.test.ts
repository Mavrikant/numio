import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("present-value compute", () => {
  // FV 10000, 5%, 10y: PV = 10000/1.05^10 = 6139.13; discount 3860.87.
  runNumericTests(calc, [
    {
      inputs: { futureValue: 10000, rate: 5, periods: 10 },
      expected: { presentValue: 6139.13, totalDiscount: 3860.87, discountFactor: 0.6139 },
      tolerance: { presentValue: 0.05, totalDiscount: 0.05, discountFactor: 0.001 },
    },
    { inputs: { futureValue: 1000, rate: 0, periods: 5 }, expected: { presentValue: 1000, totalDiscount: 0 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { futureValue: 5000, rate: 7, periods: 3 }));
});

describe("present-value i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("present-value definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "present-value", category: "finance" }));
});
