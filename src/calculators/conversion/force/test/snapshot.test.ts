import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape } from "@/test-utils";

describe("force definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "force",
      category: "conversion",
    });
  });
});
