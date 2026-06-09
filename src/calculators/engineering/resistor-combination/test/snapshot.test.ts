import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("resistor-combination definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "resistor-combination",
      category: "engineering",
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(calculator as AnyCalculatorDefinition, { r1: 100, r2: 200 });
  });
});
