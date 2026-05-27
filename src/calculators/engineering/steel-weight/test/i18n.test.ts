import { describe, it, expect } from "vitest";
import i18n from "../i18n";

describe("steel-weight — i18n", () => {
  it("should have all 12 languages", () => {
    const languages = Object.keys(i18n);
    expect(languages.length).toBe(12);
  });

  it("should have no placeholder text", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      const json = JSON.stringify(content);
      expect(json).not.toContain("TODO");
      expect(json).not.toContain("FIXME");
    });
  });

  it("should have material options", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      expect(content.options.material.steel).toBeDefined();
      expect(content.options.material.aluminum).toBeDefined();
      expect(content.options.material.copper).toBeDefined();
    });
  });
});
