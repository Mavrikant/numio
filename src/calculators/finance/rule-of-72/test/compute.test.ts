import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("rule-of-72 compute", () => {
  runNumericTests(calc, [
    {
      inputs: { rate: 8 },
      expected: { years72: 9, years70: 8.75, years69: 8.6625, exactYears: 9.006 },
      tolerance: { years72: 0.001, years70: 0.001, years69: 0.001, exactYears: 0.01 },
    },
    { inputs: { rate: 6 }, expected: { years72: 12 }, tolerance: 0.001 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { rate: 5 }));
});

describe("rule-of-72 i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("rule-of-72 definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "rule-of-72", category: "finance" }));
});
