import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Period definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("period");
  });

  it("has the correct category", () => {
    expect(calculator.category).toBe("health");
  });

  it("has the correct priority", () => {
    expect(calculator.priority).toBe("P1");
  });

  it("has exactly 3 inputs", () => {
    expect(calculator.inputs).toHaveLength(3);
  });

  it("has input ids: lastPeriodDate, cycleLength, periodLength", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("lastPeriodDate");
    expect(ids).toContain("cycleLength");
    expect(ids).toContain("periodLength");
  });

  it("has exactly 5 outputs", () => {
    expect(calculator.outputs).toHaveLength(5);
  });

  it("has output ids: nextPeriodDate, ovulationDate, fertileWindowStart, fertileWindowEnd, daysUntilNextPeriod", () => {
    const ids = calculator.outputs.map((o) => o.id);
    expect(ids).toContain("nextPeriodDate");
    expect(ids).toContain("ovulationDate");
    expect(ids).toContain("fertileWindowStart");
    expect(ids).toContain("fertileWindowEnd");
    expect(ids).toContain("daysUntilNextPeriod");
  });

  it("nextPeriodDate output is highlighted", () => {
    const out = calculator.outputs.find((o) => o.id === "nextPeriodDate");
    expect(out?.highlight).toBe(true);
  });

  it("has at least 1 meta reference", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns correct nextPeriodDate for 28-day cycle", () => {
    // 2024-01-01 + 28 days = 2024-01-29
    const inputs = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 28,
      periodLength: 5,
    });
    const result = calculator.compute(inputs);
    expect(result.nextPeriodDate).toBe("2024-01-29");
    expect(result.daysUntilNextPeriod).toBe(28);
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
