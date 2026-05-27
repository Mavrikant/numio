import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test/i18n-validator";
import definition from "../definition";

describe("Percentage Calculator - i18n", () => {
  it("should have complete 12-language i18n", () => {
    assertI18nComplete(definition);
  });
});
