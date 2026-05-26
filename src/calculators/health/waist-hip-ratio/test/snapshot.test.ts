import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("WHR definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("waist-hip-ratio");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 4 inputs", () => {
    expect(calculator.inputs).toHaveLength(4);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("whr output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "whr");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns expected output for male moderate risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 94, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.whr).toBeCloseTo(0.94, 2);
    expect(result.riskCategory).toBe("moderate");
    expect(typeof result.centralObesityRisk).toBe("boolean");
  });

  it("snapshot: definition shape", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
