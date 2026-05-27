import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("Logarithm — i18n", () => {
  it("has complete i18n for all 12 languages", () => {
    assertI18nComplete(definition as unknown as AnyCalculatorDefinition);
  });
});
