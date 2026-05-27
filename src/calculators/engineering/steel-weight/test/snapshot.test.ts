import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("steel-weight — definition snapshot", () => {
  it("should have correct slug and properties", () => {
    expect(definition.slug).toBe("steel-weight");
    expect(definition.category).toBe("engineering");
    expect(definition.priority).toBe("P2");
  });

  it("should have required inputs", () => {
    const ids = definition.inputs.map(i => i.id);
    expect(ids).toContain("type");
    expect(ids).toContain("material");
    expect(ids).toContain("lengthM");
    expect(ids).toContain("quantity");
  });

  it("should have required outputs", () => {
    const ids = definition.outputs.map(o => o.id);
    expect(ids).toContain("weightKgPerMeter");
    expect(ids).toContain("totalWeightKg");
    expect(ids).toContain("totalWeightLb");
    expect(ids).toContain("materialDensity");
  });

  it("should have references", () => {
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });
});
