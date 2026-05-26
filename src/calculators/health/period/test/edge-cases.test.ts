import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Period edge cases — schema rejects invalid inputs", () => {
  it("rejects cycleLength below 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 20, periodLength: 5 }),
    ).toThrow();
  });

  it("rejects cycleLength above 35", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 36, periodLength: 5 }),
    ).toThrow();
  });

  it("rejects periodLength below 2", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 1 }),
    ).toThrow();
  });

  it("rejects periodLength above 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 11 }),
    ).toThrow();
  });

  it("rejects invalid date format", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "01/01/2024", cycleLength: 28, periodLength: 5 }),
    ).toThrow();
  });

  it("rejects invalid calendar date", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-13-01", cycleLength: 28, periodLength: 5 }),
    ).toThrow();
  });

  it("rejects non-integer cycleLength", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28.5, periodLength: 5 }),
    ).toThrow();
  });

  it("rejects non-integer periodLength", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 5.5 }),
    ).toThrow();
  });
});

describe("Period edge cases — schema accepts valid inputs", () => {
  it("accepts minimum cycleLength 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 21, periodLength: 5 }),
    ).not.toThrow();
  });

  it("accepts maximum cycleLength 35", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 35, periodLength: 5 }),
    ).not.toThrow();
  });

  it("accepts minimum periodLength 2", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 2 }),
    ).not.toThrow();
  });

  it("accepts maximum periodLength 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 10 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 5 },
      { lastPeriodDate: "2024-01-01", cycleLength: 50, periodLength: 5 },
    );
  });
});

describe("Period edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 28,
      periodLength: 5,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("fertile window always spans 7 days", () => {
    // fertileWindowStart = ovulation - 5, fertileWindowEnd = ovulation + 1
    // Duration = 6 days (inclusive), daysUntilNextPeriod = cycleLength
    const parsed = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 28,
      periodLength: 5,
    });
    const result = calculator.compute(parsed);
    const start = new Date(result.fertileWindowStart as string + "T00:00:00Z");
    const end = new Date(result.fertileWindowEnd as string + "T00:00:00Z");
    const diffDays = Math.round((end.getTime() - start.getTime()) / 86_400_000);
    expect(diffDays).toBe(6); // 5 before + 1 after = 6 day span
  });
});
