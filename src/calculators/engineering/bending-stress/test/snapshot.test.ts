import { describe, it } from "vitest";
import calculator from "../definition";

describe("Bending Stress — definition shape snapshot", () => {
  it("has required definition properties", ({ expect }) => {
    expect(calculator.slug).toBe("bending-stress");
    expect(calculator.category).toBe("engineering");
    expect(calculator.priority).toBe("P2");
    expect(calculator.inputs.length).toBeGreaterThan(0);
    expect(calculator.outputs.length).toBeGreaterThan(0);
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("defines all required inputs", ({ expect }) => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("moment");
    expect(inputIds).toContain("sectionModulus");
    expect(inputIds).toContain("materialType");
  });

  it("defines all required outputs", ({ expect }) => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("stressMPa");
    expect(outputIds).toContain("yieldStrengthMPa");
    expect(outputIds).toContain("safetyFactor");
    expect(outputIds).toContain("utilizationRatio");
    expect(outputIds).toContain("classification");
  });
});
