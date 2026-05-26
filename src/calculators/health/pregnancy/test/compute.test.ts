import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: ACOG Committee Opinion 700 — Naegele's Rule
// Due date = LMP + 280 days (+ cycle adjustment)

describe("Pregnancy compute — due date correctness", () => {
  it("standard 28-day cycle: LMP 2024-01-01 → due date 2024-10-07", () => {
    // 2024 is a leap year; Jan 1 + 280 days:
    // Jan: 31 days remain = 30, Feb: 29, Mar: 31, Apr: 30, May: 31, Jun: 30,
    // Jul: 31, Aug: 31, Sep: 30, Oct: 1-7 → Oct 7
    // 30+29+31+30+31+30+31+31+30+7 = 280 ✓
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-01-01" },
        expected: { daysRemaining: 280, gestationalWeeks: 0, gestationalDays: 0, trimester: 1 },
        tolerance: 1,
      },
    ]);
  });

  it("standard 28-day cycle: at 10 weeks gestation", () => {
    // LMP: 2024-01-01, currentDate: 2024-03-11 (70 days elapsed)
    // gestationalWeeks = 10, gestationalDays = 0
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-03-11" },
        expected: { gestationalWeeks: 10, gestationalDays: 0, trimester: 1, daysRemaining: 210 },
        tolerance: 1,
      },
    ]);
  });

  it("32-day cycle shifts due date 4 days later", () => {
    // LMP 2024-01-01, cycle 32: dueDate = 2024-01-01 + 280 + 4 = +284 days
    // At LMP (day 0): daysRemaining = 284
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 32, currentDate: "2024-01-01" },
        expected: { daysRemaining: 284, trimester: 1 },
        tolerance: 1,
      },
    ]);
  });

  it("21-day cycle shifts due date 7 days earlier", () => {
    // cycle 21: dueDate = LMP + 280 - 7 = LMP + 273 days
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 21, currentDate: "2024-01-01" },
        expected: { daysRemaining: 273, trimester: 1 },
        tolerance: 1,
      },
    ]);
  });

  it("second trimester: 15 weeks (105 days elapsed)", () => {
    // 15 weeks = 105 days → trimester 2 (98–195)
    // gestationalWeeks = 15, gestationalDays = 0
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-04-15" },
        expected: { gestationalWeeks: 15, gestationalDays: 0, trimester: 2 },
        tolerance: 1,
      },
    ]);
  });

  it("third trimester: 30 weeks (210 days elapsed)", () => {
    // 210 days / 7 = 30 weeks → trimester 3 (≥196)
    runNumericTests(calculator, [
      {
        inputs: { lmpDate: "2024-01-01", cycleLength: 28, currentDate: "2024-07-29" },
        expected: { gestationalWeeks: 30, gestationalDays: 0, trimester: 3 },
        tolerance: 1,
      },
    ]);
  });

  it("due date result is a valid YYYY-MM-DD string", () => {
    const parsed = calculator.inputSchema.parse({
      lmpDate: "2024-01-01",
      cycleLength: 28,
      currentDate: "2024-01-01",
    });
    const result = calculator.compute(parsed);
    expect(typeof result.dueDate).toBe("string");
    expect(result.dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(result.dueDate).toBe("2024-10-07");
  });
});
