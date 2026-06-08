import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("time-convert — compute", () => {
  it("converts 60 seconds to 1 minute", () => {
    // 60 seconds = 1 minute
    const result = compute({ value: 60, fromUnit: "second", toUnit: "minute" });
    expect(result.result).toBe(1);
  });

  it("converts 24 hours to 1 day", () => {
    // 24 hours = 1 day
    const result = compute({ value: 24, fromUnit: "hour", toUnit: "day" });
    expect(result.result).toBe(1);
  });

  it("converts 365.25 days to ~1 year (Gregorian average)", () => {
    // 365.25 days ≈ 1 year (accounting for leap years, within rounding)
    const result = compute({ value: 365.25, fromUnit: "day", toUnit: "year" });
    expect(result.result).toBeCloseTo(1, 4);
  });

  it("handles zero input", () => {
    const result = compute({ value: 0, fromUnit: "second", toUnit: "minute" });
    expect(result.result).toBe(0);
  });

  it("converts 1 second to 1000 milliseconds", () => {
    const result = compute({
      value: 1,
      fromUnit: "second",
      toUnit: "millisecond",
    });
    expect(result.result).toBeCloseTo(1000, 2);
  });

  it("converts 1 second to 1e9 nanoseconds", () => {
    const result = compute({
      value: 1,
      fromUnit: "second",
      toUnit: "nanosecond",
    });
    expect(result.result).toBeCloseTo(1e9, 1);
  });

  it("converts 1 decade to 10 years", () => {
    // 365.25-day year, so decade = 10 × year exactly
    const result = compute({ value: 1, fromUnit: "decade", toUnit: "year" });
    expect(result.result).toBeCloseTo(10, 2);
  });

  it("converts 1 millennium to 1000 years", () => {
    const result = compute({
      value: 1,
      fromUnit: "millennium",
      toUnit: "year",
    });
    expect(result.result).toBeCloseTo(1000, 2);
  });
});
