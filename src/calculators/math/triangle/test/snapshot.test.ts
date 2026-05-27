import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("Triangle Calculator — definition snapshot", () => {
  it("has correct calculator shape and required fields", () => {
    expect(definition.slug).toBe("triangle");
    expect(definition.category).toBe("math");
    expect(definition.priority).toBe("P1");
    expect(definition.icon).toBe("triangle");
    expect(definition.inputs).toBeDefined();
    expect(definition.outputs).toBeDefined();
    expect(definition.compute).toBeDefined();
    expect(definition.i18n).toBeDefined();
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });

  it("has all required input fields", () => {
    const inputIds = definition.inputs.map((i) => i.id);
    expect(inputIds).toContain("method");
    expect(inputIds).toContain("sideA");
    expect(inputIds).toContain("sideB");
    expect(inputIds).toContain("sideC");
    expect(inputIds).toContain("angleA");
    expect(inputIds).toContain("angleB");
    expect(inputIds).toContain("angleC");
  });

  it("has all required output fields", () => {
    const outputIds = definition.outputs.map((o) => o.id);
    expect(outputIds).toContain("sideA");
    expect(outputIds).toContain("sideB");
    expect(outputIds).toContain("sideC");
    expect(outputIds).toContain("angleA");
    expect(outputIds).toContain("angleB");
    expect(outputIds).toContain("angleC");
    expect(outputIds).toContain("area");
    expect(outputIds).toContain("perimeter");
    expect(outputIds).toContain("triangleType");
  });
});
