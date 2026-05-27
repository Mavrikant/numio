import { describe, it } from "vitest";
import { assertDefinitionShape } from "@/test-utils";
import calculator from "../definition";

describe("down-payment definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "down-payment",
      category: "finance",
    });
  });
});
