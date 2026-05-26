import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("TDEE definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("tdee");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 5 inputs", () => {
    expect(calculator.inputs).toHaveLength(5);
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("tdee output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "tdee");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns all expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("bmr");
    expect(result).toHaveProperty("tdee");
    expect(result).toHaveProperty("proteinTarget");
    expect(result).toHaveProperty("carbTarget");
    expect(result).toHaveProperty("fatTarget");
  });

  it("snapshot: male sedentary", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        gender: "male", weight: 70, height: 175, age: 30, activityLevel: "sedentary",
      }),
    );
    expect(result).toMatchSnapshot();
  });

  it("snapshot: female moderately active", () => {
    const result = calculator.compute(
      calculator.inputSchema.parse({
        gender: "female", weight: 60, height: 165, age: 25, activityLevel: "moderatelyActive",
      }),
    );
    expect(result).toMatchSnapshot();
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
