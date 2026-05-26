import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("BMI i18n — completeness across all 12 locales", () => {
  it("has complete i18n bundle for all 12 locales (no placeholders)", () => {
    // assertI18nComplete verifies:
    // — title, short, description, keywords present for every locale
    // — inputs.{id}.label present for every input and every locale
    // — outputs.{id}.label present for every output and every locale
    // — no "TODO", "FIXME", "XXX", "PLACEHOLDER" strings anywhere
    assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
  });
});
