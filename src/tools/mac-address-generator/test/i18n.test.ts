import { describe, it, expect } from "vitest";
import { LOCALES } from "@/config/site";
import i18n from "../i18n";

const REQUIRED_UI_KEYS = [
  "prefix",
  "prefixPlaceholder",
  "prefixHelp",
  "invalidPrefix",
  "format",
  "fmtColon",
  "fmtHyphen",
  "fmtDot",
  "fmtNone",
  "case",
  "uppercase",
  "lowercase",
  "count",
  "generate",
  "copyAll",
  // inherited from COMMON_UI
  "copy",
  "copied",
  "result",
] as const;

const PLACEHOLDERS = ["TODO", "FIXME", "PLACEHOLDER", "XXX"];

describe("mac-address-generator i18n", () => {
  it("provides a bundle for every locale", () => {
    for (const locale of LOCALES) {
      expect(i18n[locale], `missing locale ${locale}`).toBeDefined();
    }
  });

  it("has complete top-level metadata per locale", () => {
    for (const locale of LOCALES) {
      const b = i18n[locale];
      expect(b.title.length).toBeGreaterThan(0);
      expect(b.short.length).toBeGreaterThan(0);
      expect(b.description.length).toBeGreaterThan(0);
      expect(b.keywords.length).toBeGreaterThan(0);
    }
  });

  it("has every required UI key in every locale", () => {
    for (const locale of LOCALES) {
      const ui = i18n[locale].ui;
      for (const key of REQUIRED_UI_KEYS) {
        expect(ui[key], `${locale} missing ui.${key}`).toBeTruthy();
      }
    }
  });

  it("contains no placeholder strings", () => {
    for (const locale of LOCALES) {
      const blob = JSON.stringify(i18n[locale]);
      for (const ph of PLACEHOLDERS) {
        expect(blob.includes(ph), `${locale} contains ${ph}`).toBe(false);
      }
    }
  });
});
