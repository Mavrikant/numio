import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("GFR definition snapshot", () => {
  it("has correct slug and category", () => {
    expect(definition.slug).toBe("gfr");
    expect(definition.category).toBe("health");
  });

  it("has priority P0", () => {
    expect(definition.priority).toBe("P0");
  });

  it("has correct number of inputs", () => {
    expect(definition.inputs).toHaveLength(4);
  });

  it("has correct number of outputs", () => {
    expect(definition.outputs).toHaveLength(4);
  });

  it("has required metadata", () => {
    expect(definition.meta.references).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
    expect(definition.meta.disclaimer).toBeDefined();
  });

  it("has all input IDs present in i18n", () => {
    definition.inputs.forEach((input) => {
      expect(definition.i18n.en.inputs[input.id as keyof typeof definition.i18n.en.inputs]).toBeDefined();
    });
  });

  it("has all output IDs present in i18n", () => {
    definition.outputs.forEach((output) => {
      expect(definition.i18n.en.outputs[output.id as keyof typeof definition.i18n.en.outputs]).toBeDefined();
    });
  });
});
