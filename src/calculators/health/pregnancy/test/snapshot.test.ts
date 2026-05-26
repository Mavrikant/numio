import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Pregnancy definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("pregnancy");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has the correct priority", () => {
    expect(calculator.priority).toBe("P0");
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has input ids: lmpDate, cycleLength, currentDate", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("lmpDate");
    expect(ids).toContain("cycleLength");
    expect(ids).toContain("currentDate");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("has output ids: dueDate, gestationalWeeks, gestationalDays, trimester, daysRemaining", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("dueDate");
    expect(ids).toContain("gestationalWeeks");
    expect(ids).toContain("gestationalDays");
    expect(ids).toContain("trimester");
    expect(ids).toContain("daysRemaining");
  });

  it("dueDate output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "dueDate");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns correct dueDate for standard case", () => {
    // LMP 2024-01-01 + 280 days (cycle 28) = 2024-10-07
    const inputs = calculator.inputSchema.parse({
      lmpDate: "2024-01-01",
      cycleLength: 28,
      currentDate: "2024-01-01",
    });
    const result = calculator.compute(inputs);
    expect(result.dueDate).toBe("2024-10-07");
    expect(result.daysRemaining).toBe(280);
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
