import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Torque i18n — completeness across all 12 locales", () => {
  it("has complete i18n bundle for all 12 locales (no placeholders)", () => {
    assertI18nComplete(calculator as unknown as AnyCalculatorDefinition);
  });
});
