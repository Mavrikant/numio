import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape } from "@/test-utils";

describe("paycheck definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "paycheck",
      category: "finance",
    });
  });
});
