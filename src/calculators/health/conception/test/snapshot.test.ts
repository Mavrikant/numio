import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Conception definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("conception");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has input ids: mode, dateInput, cycleLength", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("mode");
    expect(ids).toContain("dateInput");
    expect(ids).toContain("cycleLength");
  });

  it("has exactly 4 outputs", () => {
    expect(calculator.outputs).toHaveLength(4);
  });

  it("conceptionDate output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "conceptionDate");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns expected output shape for from_lmp", () => {
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-01-01",
      cycleLength: 28,
    });
    const result = calculator.compute(inputs);
    expect(result).toHaveProperty("conceptionDate");
    expect(result).toHaveProperty("fertileWindowStart");
    expect(result).toHaveProperty("fertileWindowEnd");
    expect(result).toHaveProperty("estimatedDueDate");
    expect(result.conceptionDate).toBe("2024-01-15");
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
