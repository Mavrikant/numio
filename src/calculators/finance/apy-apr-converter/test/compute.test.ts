import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("apy-apr-converter compute", () => {
  // 12% APR compounded monthly → APY = (1+0.12/12)^12 − 1 = 12.6825%.
  runNumericTests(calc, [
    {
      inputs: { mode: "apr-to-apy", rate: 12, compounding: "monthly" },
      expected: { apr: 12, apy: 12.6825, difference: 0.6825 },
      tolerance: { apr: 0.001, apy: 0.001, difference: 0.001 },
    },
    // round trip: 12.6825% APY monthly → ~12% APR.
    {
      inputs: { mode: "apy-to-apr", rate: 12.6825, compounding: "monthly" },
      expected: { apr: 12, apy: 12.6825 },
      tolerance: { apr: 0.01, apy: 0.001 },
    },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { mode: "apr-to-apy", rate: 5, compounding: "daily" }));
});

describe("apy-apr-converter i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("apy-apr-converter definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "apy-apr-converter", category: "finance" }));
});
