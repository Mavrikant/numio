import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("cagr definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "cagr",
      category: "finance",
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(calculator as AnyCalculatorDefinition, {
      beginningValue: 1000,
      endingValue: 2000,
      years: 5,
    });
  });
});
