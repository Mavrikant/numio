import { describe, it } from "vitest";
import { assertI18nComplete } from "@/test/i18n-utils";
import definition from "../definition";

describe("Triangle Calculator — i18n", () => {
  it("has complete translations for all 12 languages", () => {
    assertI18nComplete(definition);
  });
});
