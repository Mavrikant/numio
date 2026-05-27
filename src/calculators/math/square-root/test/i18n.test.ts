import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";

describe("square-root i18n", () => {
  it("has all 12 locales with required fields", () => {
    assertI18nComplete(definition as unknown as AnyCalculatorDefinition);
  });
});
