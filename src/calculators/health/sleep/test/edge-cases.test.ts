import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Sleep edge cases — schema validation", () => {
  it("rejects cycleCount below 4", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 3 }),
    ).toThrow();
  });

  it("rejects cycleCount above 9", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 10 }),
    ).toThrow();
  });

  it("rejects invalid mode", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_naptime", inputTime: "23:00", cycleCount: 6 }),
    ).toThrow();
  });

  it("rejects invalid time format (no colon)", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "2300", cycleCount: 6 }),
    ).toThrow();
  });

  it("rejects invalid time format (letters)", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "ab:cd", cycleCount: 6 }),
    ).toThrow();
  });

  it("accepts boundary cycleCount 4", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 4 }),
    ).not.toThrow();
  });

  it("accepts boundary cycleCount 9", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 9 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 },
      { mode: "from_bedtime", inputTime: "23:00", cycleCount: 3 },
    );
  });
});

describe("Sleep edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ mode: "from_bedtime", inputTime: "23:00", cycleCount: 6 });
    assertComputeIsPure(calculator, inputs);
  });

  it("waketime mode produces identical results", () => {
    const inputs = calculator.inputSchema.parse({ mode: "from_waketime", inputTime: "07:00", cycleCount: 6 });
    assertComputeIsPure(calculator, inputs);
  });

  it("returns 4 cycle options for both modes", () => {
    for (const mode of ["from_bedtime", "from_waketime"] as const) {
      const inputs = calculator.inputSchema.parse({ mode, inputTime: "07:00", cycleCount: 6 });
      const result = calculator.compute(inputs);
      const options = result.cyclesOptions as unknown[];
      expect(options).toHaveLength(4);
    }
  });
});
