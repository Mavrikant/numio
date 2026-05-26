import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Ideal Weight definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("ideal-weight");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("devine output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "devine");
    expect(out?.highlight).toBe(true);
  });

  it("compute returns all 4 formula values", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", height: 175, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("devine");
    expect(result).toHaveProperty("robinson");
    expect(result).toHaveProperty("miller");
    expect(result).toHaveProperty("hamwi");
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
