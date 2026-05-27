import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("square-footage — definition snapshot", () => {
  it("should have correct basic properties", () => {
    expect(definition.slug).toBe("square-footage");
    expect(definition.category).toBe("engineering");
    expect(definition.priority).toBe("P1");
    expect(definition.icon).toBe("square");
  });

  it("should have all required input fields", () => {
    expect(definition.inputs.length).toBeGreaterThan(0);
    const inputIds = definition.inputs.map((i) => i.id);
    expect(inputIds).toContain("shape");
    expect(inputIds).toContain("length");
    expect(inputIds).toContain("width");
    expect(inputIds).toContain("radius");
    expect(inputIds).toContain("diameter");
    expect(inputIds).toContain("base");
    expect(inputIds).toContain("height");
  });

  it("should have all required output fields", () => {
    expect(definition.outputs.length).toBeGreaterThan(0);
    const outputIds = definition.outputs.map((o) => o.id);
    expect(outputIds).toContain("areaM2");
    expect(outputIds).toContain("areaFt2");
    expect(outputIds).toContain("perimeterM");
    expect(outputIds).toContain("perimeterFt");
  });

  it("should have valid references", () => {
    expect(definition.meta.references).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
    definition.meta.references.forEach((ref) => {
      expect(ref.title).toBeDefined();
      expect(ref.url).toBeDefined();
    });
  });

  it("should have formula", () => {
    expect(definition.meta.formulaLatex).toBeDefined();
  });

  it("should have valid i18n", () => {
    expect(definition.i18n).toBeDefined();
    expect(definition.i18n.en).toBeDefined();
    expect(definition.i18n.tr).toBeDefined();
  });
});
