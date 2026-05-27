import { describe, it } from "vitest";
import calculator from "../definition";

describe("Torque — definition shape snapshot", () => {
  it("has required definition properties", ({ expect }) => {
    expect(calculator.slug).toBe("torque");
    expect(calculator.category).toBe("engineering");
    expect(calculator.priority).toBe("P1");
    expect(calculator.inputs.length).toBeGreaterThan(0);
    expect(calculator.outputs.length).toBeGreaterThan(0);
    expect(calculator.meta.references.length).toBeGreaterThan(0);
  });

  it("defines all required inputs", ({ expect }) => {
    const inputIds = calculator.inputs.map((i) => i.id);
    expect(inputIds).toContain("momentOrForce");
    expect(inputIds).toContain("force");
    expect(inputIds).toContain("distance");
  });

  it("defines all required outputs", ({ expect }) => {
    const outputIds = calculator.outputs.map((o) => o.id);
    expect(outputIds).toContain("torqueNm");
    expect(outputIds).toContain("forceN");
    expect(outputIds).toContain("distanceM");
  });
});
