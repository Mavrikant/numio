import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: ACOG Menstrual Cycle FAQ
// https://www.acog.org/womens-health/faqs/menstrual-cycle
// Next period = lastPeriodDate + cycleLength
// Ovulation = nextPeriod - 14 days
// Fertile window: ovulation - 5 days to ovulation + 1 day

describe("Period compute — next period date correctness", () => {
  it("28-day cycle: Jan 1 → next period Feb 28... Jan 1 + 28 = Jan 29", () => {
    // 2024-01-01 + 28 days = 2024-01-29
    runNumericTests(calculator, [
      {
        inputs: { lastPeriodDate: "2024-01-01", cycleLength: 28, periodLength: 5 },
        expected: { daysUntilNextPeriod: 28 },
        tolerance: 1,
      },
    ]);
  });

  it("35-day cycle from Jan 1: daysUntilNextPeriod = 35", () => {
    runNumericTests(calculator, [
      {
        inputs: { lastPeriodDate: "2024-01-01", cycleLength: 35, periodLength: 5 },
        expected: { daysUntilNextPeriod: 35 },
        tolerance: 1,
      },
    ]);
  });

  it("21-day cycle from Jan 1: daysUntilNextPeriod = 21", () => {
    runNumericTests(calculator, [
      {
        inputs: { lastPeriodDate: "2024-01-01", cycleLength: 21, periodLength: 3 },
        expected: { daysUntilNextPeriod: 21 },
        tolerance: 1,
      },
    ]);
  });
});

describe("Period compute — ovulation date correctness", () => {
  it("28-day cycle: nextPeriod = Jan 29, ovulation = Jan 29 - 14 = Jan 15", () => {
    // lastPeriodDate: 2024-01-01, cycleLength: 28
    // nextPeriodDate: 2024-01-29
    // ovulationDate: 2024-01-29 - 14 = 2024-01-15
    const parsed = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 28,
      periodLength: 5,
    });
    const result = calculator.compute(parsed);
    expect(result.nextPeriodDate).toBe("2024-01-29");
    expect(result.ovulationDate).toBe("2024-01-15");
  });

  it("35-day cycle: nextPeriod = Feb 5, ovulation = Jan 22", () => {
    // lastPeriodDate: 2024-01-01, cycleLength: 35
    // nextPeriodDate: 2024-01-01 + 35 = 2024-02-05
    // ovulationDate: 2024-02-05 - 14 = 2024-01-22
    const parsed = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 35,
      periodLength: 5,
    });
    const result = calculator.compute(parsed);
    expect(result.nextPeriodDate).toBe("2024-02-05");
    expect(result.ovulationDate).toBe("2024-01-22");
  });
});

describe("Period compute — fertile window correctness", () => {
  it("fertile window: ovulation Jan 15, window Jan 10 to Jan 16", () => {
    // ovulation: 2024-01-15
    // fertileWindowStart: 2024-01-15 - 5 = 2024-01-10
    // fertileWindowEnd: 2024-01-15 + 1 = 2024-01-16
    const parsed = calculator.inputSchema.parse({
      lastPeriodDate: "2024-01-01",
      cycleLength: 28,
      periodLength: 5,
    });
    const result = calculator.compute(parsed);
    expect(result.fertileWindowStart).toBe("2024-01-10");
    expect(result.fertileWindowEnd).toBe("2024-01-16");
  });

  it("all output fields are YYYY-MM-DD strings", () => {
    const parsed = calculator.inputSchema.parse({
      lastPeriodDate: "2024-03-15",
      cycleLength: 28,
      periodLength: 5,
    });
    const result = calculator.compute(parsed);
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    expect(result.nextPeriodDate).toMatch(dateRegex);
    expect(result.ovulationDate).toMatch(dateRegex);
    expect(result.fertileWindowStart).toMatch(dateRegex);
    expect(result.fertileWindowEnd).toMatch(dateRegex);
  });
});
