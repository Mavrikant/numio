import { describe, it } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/test-utils/i18n";

describe("Numeral System Converter - i18n", () => {
  it("should have complete and valid i18n for all 12 languages", () => {
    assertI18nComplete(definition);
  });
});
