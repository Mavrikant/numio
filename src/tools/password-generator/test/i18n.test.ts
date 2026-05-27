import { describe, it, expect } from "vitest";
import { LOCALES } from "@/config/site";
import i18n from "../i18n";

const REQUIRED_UI_KEYS = [
  "length",
  "lowercase",
  "uppercase",
  "numbers",
  "symbols",
  "excludeAmbiguous",
  "generate",
  "regenerate",
  "copy",
  "copied",
  "metricsTitle",
  "strength",
  "entropy",
  "bits",
  "poolSize",
  "chars",
  "crackTitle",
  "crackSubtitle",
  "selectAtLeastOne",
  "level.veryWeak",
  "level.weak",
  "level.fair",
  "level.strong",
  "level.veryStrong",
  "scenario.onlineThrottled",
  "scenario.onlineFast",
  "scenario.offlineSlowHash",
  "scenario.offlineFastHash",
  "unit.second",
  "unit.minute",
  "unit.hour",
  "unit.day",
  "unit.month",
  "unit.year",
  "unit.century",
  "crack.instant",
  "crack.eternity",
] as const;

const PLACEHOLDERS = ["TODO", "FIXME", "PLACEHOLDER", "XXX"];

describe("password-generator i18n", () => {
  it("provides a bundle for all 12 locales", () => {
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
