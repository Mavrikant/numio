import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import {
  runNumericTests,
  assertI18nComplete,
  assertDefinitionShape,
} from "@/test-utils";

describe("time-duration compute", () => {
  // 09:00–17:30 with 30-min break = 8h 00m = 480 min.
  runNumericTests(calc, [
    {
      inputs: { startTime: "09:00", endTime: "17:30", breakMinutes: 30 },
      expected: { totalMinutes: 480, totalHours: 8, hoursPart: 8, minutesPart: 0 },
      tolerance: { totalMinutes: 0.5, totalHours: 0.01, hoursPart: 0.5, minutesPart: 0.5 },
    },
    // overnight 22:00–06:00, no break = 8h.
    {
      inputs: { startTime: "22:00", endTime: "06:00", breakMinutes: 0 },
      expected: { totalHours: 8, totalMinutes: 480 },
      tolerance: { totalHours: 0.01, totalMinutes: 0.5 },
    },
  ]);

  it("formats as Hh MMm", () => {
    expect(compute({ startTime: "09:00", endTime: "17:15", breakMinutes: 0 }).formatted).toBe("8h 15m");
  });

  it("does not go negative", () => {
    const r = compute({ startTime: "09:00", endTime: "09:10", breakMinutes: 60 });
    expect(r.totalMinutes).toBe(0);
  });
});

describe("time-duration i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("time-duration definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "time-duration", category: "datetime" });
  });
});
