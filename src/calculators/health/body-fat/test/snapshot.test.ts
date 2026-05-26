import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Body Fat definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("body-fat");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 6 inputs", () => {
    expect(calculator.inputs).toHaveLength(6);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("bodyFatPct output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "bodyFatPct");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", height: 175, weight: 80, waist: 85, neck: 37,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("bodyFatPct");
    expect(result).toHaveProperty("fatMass");
    expect(result).toHaveProperty("leanMass");
    expect(result).toHaveProperty("category");
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
