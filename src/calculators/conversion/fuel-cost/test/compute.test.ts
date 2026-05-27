import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("fuel-cost compute", () => {
  // 500 km, 7 L/100km, 1.5/L: fuel 35 L, cost 52.5, per km 0.105.
  runNumericTests(calc, [
    {
      inputs: { distance: 500, efficiency: 7, fuelPrice: 1.5 },
      expected: { fuelUsed: 35, totalCost: 52.5, costPerDistance: 0.105 },
      tolerance: { fuelUsed: 0.01, totalCost: 0.01, costPerDistance: 0.0001 },
    },
    { inputs: { distance: 100, efficiency: 10, fuelPrice: 2 }, expected: { fuelUsed: 10, totalCost: 20 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { distance: 250, efficiency: 6.5, fuelPrice: 1.8 }));
});

describe("fuel-cost i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("fuel-cost definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "fuel-cost", category: "conversion" }));
});
