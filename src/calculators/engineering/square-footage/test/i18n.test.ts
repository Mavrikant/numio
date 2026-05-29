import { describe, it, expect } from "vitest";
import i18n from "../i18n";
import { LOCALES } from "@/config/site";

describe("square-footage — i18n", () => {
  it("has an entry for every required locale", () => {
    const languages = Object.keys(i18n);
    for (const loc of LOCALES) expect(languages).toContain(loc);
    expect(languages.length).toBe(LOCALES.length);
  });

  it("should have required keys in each language", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      expect(content.title).toBeDefined();
      expect(content.title.length).toBeGreaterThan(0);
      expect(content.short).toBeDefined();
      expect(content.description).toBeDefined();
      expect(content.keywords).toBeDefined();
      expect(Array.isArray(content.keywords)).toBe(true);
      expect(content.inputs).toBeDefined();
      expect(content.outputs).toBeDefined();
      expect(content.faq).toBeDefined();
    });
  });

  it("should not have placeholder text", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      const values = JSON.stringify(content);
      expect(values).not.toContain("TODO");
      expect(values).not.toContain("FIXME");
      expect(values).not.toContain("PLACEHOLDER");
    });
  });

  it("should have input labels for all shape inputs", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      expect(content.inputs.shape).toBeDefined();
      expect(content.inputs.length).toBeDefined();
      expect(content.inputs.width).toBeDefined();
      expect(content.inputs.radius).toBeDefined();
      expect(content.inputs.diameter).toBeDefined();
      expect(content.inputs.base).toBeDefined();
      expect(content.inputs.height).toBeDefined();
    });
  });

  it("should have output labels for all outputs", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      expect(content.outputs.areaM2).toBeDefined();
      expect(content.outputs.areaFt2).toBeDefined();
      expect(content.outputs.perimeterM).toBeDefined();
      expect(content.outputs.perimeterFt).toBeDefined();
    });
  });

  it("should have shape options", () => {
    Object.entries(i18n).forEach(([lang, content]) => {
      expect(content.options.shape).toBeDefined();
      expect(content.options.shape.rectangle).toBeDefined();
      expect(content.options.shape.circle).toBeDefined();
      expect(content.options.shape.triangle).toBeDefined();
    });
  });
});
