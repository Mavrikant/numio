import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape } from "@/test-utils";

describe("dynamic-viscosity definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "dynamic-viscosity",
      category: "conversion",
    });
  });
});
