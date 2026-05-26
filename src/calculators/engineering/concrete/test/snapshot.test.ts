import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Concrete definition — shape snapshot", () => {
  it("has the correct slug", () => expect(calculator.slug).toBe("concrete"));
  it("has the correct category", () => expect(calculator.category).toBe("engineering"));
  it("has an icon", () => { expect(typeof calculator.icon).toBe("string"); expect(calculator.icon.length).toBeGreaterThan(0); });
  it("has output ids: volumeM3, volumeYd3, bags40kg, bags60lb", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("volumeM3");
    expect(ids).toContain("volumeYd3");
    expect(ids).toContain("bags40kg");
    expect(ids).toContain("bags60lb");
  });
  it("volumeM3 is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "volumeM3");
    expect(out?.highlight).toBe(true);
  });
  it("has a compute function", () => expect(typeof calculator.compute).toBe("function"));
  it("compute returns object with expected keys", () => {
    const inputs = calculator.inputSchema.parse({
      shape: "slab", unit: "metric", length: 5, width: 3, thickness: 0.15, diameter: 0.3, height: 3,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("volumeM3");
    expect(result).toHaveProperty("bags40kg");
  });
  it("snapshot matches", () => {
    expect(calculator).toMatchSnapshot({
      slug: expect.any(String),
      category: expect.any(String),
      priority: expect.any(String),
      icon: expect.any(String),
    });
  });
});
