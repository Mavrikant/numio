import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("arithmetic-sequence definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "arithmetic-sequence",
      category: "math",
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(calculator as AnyCalculatorDefinition, {
      firstTerm: 2,
      commonDifference: 3,
      numberOfTerms: 10,
    });
  });
});
