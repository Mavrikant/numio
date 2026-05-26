import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("net-worth i18n completeness", () => {
  it("all 12 locales are complete with no placeholders", () => {
    assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
  });
});
