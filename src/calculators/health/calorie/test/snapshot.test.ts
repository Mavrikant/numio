import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Calorie definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("calorie");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 6 inputs", () => {
    expect(calculator.inputs).toHaveLength(6);
  });

  it("has expected input ids", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("gender");
    expect(ids).toContain("weight");
    expect(ids).toContain("height");
    expect(ids).toContain("age");
    expect(ids).toContain("activity");
    expect(ids).toContain("goal");
  });

  it("has exactly 3 outputs", () => {
    expect(calculator.outputs).toHaveLength(3);
  });

  it("tdee output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "tdee");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activity: "moderate", goal: "maintain",
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("tdee");
    expect(result).toHaveProperty("target");
    expect(result).toHaveProperty("deficit");
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
