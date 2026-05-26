import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("pregnancy-weight i18n — completeness", () => {
  it("has complete i18n bundle for all 12 locales (no placeholders)", () => {
    assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
  });
});
