import { describe, it } from "vitest";
import calculator from "../definition";
import { assertDefinitionShape } from "@/test-utils";

describe("flow-rate-convert definition shape", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calculator, {
      slug: "flow-rate-convert",
      category: "conversion",
    });
  });
});
