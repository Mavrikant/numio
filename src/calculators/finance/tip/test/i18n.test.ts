import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("tip — i18n completeness", () => {
  it("all 12 locales have complete i18n bundles without placeholders", () => {
    assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
  });
});
