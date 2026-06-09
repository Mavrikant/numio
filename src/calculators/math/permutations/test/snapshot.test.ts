import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("permutations definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "permutations",
      category: "math",
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(calculator as AnyCalculatorDefinition, {
      n: 10,
      r: 3,
      allowRepetition: false,
    });
  });
});
