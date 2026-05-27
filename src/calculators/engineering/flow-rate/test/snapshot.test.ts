import { describe, it, expect } from "vitest";
import definition from "../definition";

describe("flow-rate — definition snapshot", () => {
  it("should have correct properties", () => {
    expect(definition.slug).toBe("flow-rate");
    expect(definition.category).toBe("engineering");
    expect(definition.priority).toBe("P1");
  });

  it("should have required inputs", () => {
    const ids = definition.inputs.map((i) => i.id);
    expect(ids).toContain("flowRateM3h");
    expect(ids).toContain("diameterMm");
    expect(ids).toContain("pipeLength");
    expect(ids).toContain("pipeType");
    expect(ids).toContain("fluidType");
  });

  it("should have required outputs", () => {
    const ids = definition.outputs.map((o) => o.id);
    expect(ids).toContain("velocityMs");
    expect(ids).toContain("reynoldsNumber");
    expect(ids).toContain("flowRegime");
    expect(ids).toContain("frictionFactor");
    expect(ids).toContain("headLossM");
  });

  it("should have formula", () => {
    expect(definition.meta.formulaLatex).toBeDefined();
  });

  it("should have references", () => {
    expect(definition.meta.references.length).toBeGreaterThan(0);
  });
});
