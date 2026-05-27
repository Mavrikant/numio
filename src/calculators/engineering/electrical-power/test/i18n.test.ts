import { describe, it, expect } from "vitest";
import definition from "../definition";
import { assertI18nComplete } from "@/lib/test-utils";

describe("Electrical Power i18n", () => {
  it("has complete translations for all 12 languages", () => {
    assertI18nComplete(definition.i18n);
  });

  it("contains no placeholder text", () => {
    const i18n = definition.i18n;
    const placeholders = ["TODO", "FIXME", "PLACEHOLDER", "XXX"];

    Object.entries(i18n).forEach(([locale, bundle]) => {
      const text = JSON.stringify(bundle);
      placeholders.forEach((p) => {
        expect(text).not.toContain(p);
      });
    });
  });
});
