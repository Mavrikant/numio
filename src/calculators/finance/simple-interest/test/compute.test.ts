import { describe, it } from "vitest";
import calc from "../definition";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
  assertComputeIsPure,
} from "@/test-utils";

describe("simple-interest compute", () => {
  // I = P·r·t. 10000 at 5%/yr for 3 yr → 1500 interest, 11500 total.
  runNumericTests(calc, [
    {
      inputs: { principal: 10000, annualRatePct: 5, timeValue: 3, timeUnit: "years" },
      expected: { interest: 1500, totalAmount: 11500, years: 3 },
      tolerance: { interest: 0.001, totalAmount: 0.001, years: 0.0001 },
    },
    // 5000 at 12%/yr for 6 months → 0.5 yr, 300 interest.
    {
      inputs: { principal: 5000, annualRatePct: 12, timeValue: 6, timeUnit: "months" },
      expected: { interest: 300, totalAmount: 5300, years: 0.5 },
      tolerance: { interest: 0.01, totalAmount: 0.01, years: 0.0001 },
    },
    // 1000 at 7.3%/yr for 365 days → 1 yr, 73 interest.
    {
      inputs: { principal: 1000, annualRatePct: 7.3, timeValue: 365, timeUnit: "days" },
      expected: { interest: 73, totalAmount: 1073, years: 1 },
      tolerance: { interest: 0.01, totalAmount: 0.01, years: 0.0001 },
    },
  ]);

  it("is pure", () => {
    assertComputeIsPure(calc, { principal: 25000, annualRatePct: 4.5, timeValue: 18, timeUnit: "months" });
  });
});

describe("simple-interest i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("simple-interest definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "simple-interest", category: "finance" });
  });
});
