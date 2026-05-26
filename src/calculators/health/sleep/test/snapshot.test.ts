import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Sleep definition — shape snapshot", () => {
  it("has the correct slug", () => {
    expect(calculator.slug).toBe("sleep");
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

  it("has correct input ids", () => {
    const ids = calculator.inputs.map((i) => i.id);
    expect(ids).toContain("mode");
    expect(ids).toContain("inputTime");
    expect(ids).toContain("cycleCount");
  });

  it("has exactly 3 outputs", () => {
    expect(calculator.outputs).toHaveLength(3);
  });

  it("has meta references", () => {
    expect(calculator.meta.references.length).toBeGreaterThanOrEqual(1);
  });

  it("compute returns cyclesOptions with 4 items", () => {
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown[];
    expect(options).toHaveLength(4);
  });

  it("compute produces 08:14 wake for 23:00 bedtime + 6 cycles", () => {
    // 23:00 + 14 + 6×90 = 23:00 + 554min = 08:14
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    const result = calculator.compute(inputs);
    const options = result.cyclesOptions as unknown as Array<{cycles: number; time: string}>;
    const sixCycle = options.find(o => o.cycles === 6);
    expect(sixCycle?.time).toBe("08:14");
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
