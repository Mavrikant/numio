import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("sales-tax definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "sales-tax",
      category: "finance",
    });
  });

  it("compute is pure", () => {
    assertComputeIsPure(calculator as AnyCalculatorDefinition, {
      amount: 100,
      taxRate: 8.25,
      mode: "add",
    });
  });
});
