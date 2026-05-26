import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Pregnancy edge cases — schema rejects invalid inputs", () => {
  it("rejects invalid lmpDate format", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "01/01/2024", cycleLength: 28, currentDate: "2024-01-01" }),
    ).toThrow();
  });

  it("rejects cycleLength below 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 20, currentDate: "2024-01-01" }),
    ).toThrow();
  });

  it("rejects cycleLength above 35", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 36, currentDate: "2024-01-01" }),
    ).toThrow();
  });

  it("rejects currentDate before lmpDate", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-06-01", cycleLength: 28, currentDate: "2024-05-01" }),
    ).toThrow();
  });

  it("rejects missing lmpDate", () => {
    expect(() =>
      calculator.inputSchema.parse({ cycleLength: 28, currentDate: "2024-01-01" }),
    ).toThrow();
  });

  it("rejects non-integer cycleLength", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 28.5, currentDate: "2024-01-01" }),
    ).toThrow();
  });

  it("rejects invalid date string '2024-13-01'", () => {
    // Month 13 is invalid — Date parse returns NaN
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-13-01", cycleLength: 28, currentDate: "2024-01-01" }),
    ).toThrow();
  });
});

describe("Pregnancy edge cases — schema accepts valid inputs", () => {
  it("accepts minimum cycleLength 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 21, currentDate: "2024-01-01" }),
    ).not.toThrow();
  });

  it("accepts maximum cycleLength 35", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 35, currentDate: "2024-01-01" }),
    ).not.toThrow();
  });

  it("accepts currentDate equal to lmpDate", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-01-01" }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-06-01" },
      { lmpDate: "2024-01-01", cycleLength: 50, currentDate: "2024-06-01" },
    );
  });
});

describe("Pregnancy edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      lmpDate: "2024-01-01",
      cycleLength: 28,
      currentDate: "2024-06-01",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("daysRemaining is 0 when currentDate equals dueDate", () => {
    // LMP 2024-01-01 + 280 = 2024-10-07
    const parsed = calculator.inputSchema.parse({
      lmpDate: "2024-01-01",
      cycleLength: 28,
      currentDate: "2024-10-07",
    });
    const result = calculator.compute(parsed);
    expect(result.daysRemaining).toBe(0);
  });

  it("daysRemaining is 0 when currentDate is past dueDate", () => {
    // After due date, daysRemaining should be 0 (clamped)
    const parsed = calculator.inputSchema.parse({
      lmpDate: "2023-01-01",
      cycleLength: 28,
      currentDate: "2024-01-01",
    });
    const result = calculator.compute(parsed);
    expect(result.daysRemaining).toBe(0);
  });
});
