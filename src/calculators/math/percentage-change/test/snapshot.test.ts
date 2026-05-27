import { describe, it } from "vitest";
import { assertDefinitionShape } from "@/test-utils";
import calculator from "../definition";

describe("percentage-change definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "percentage-change",
      category: "math",
    });
  });
});
