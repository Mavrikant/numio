import { describe, it, expect } from "vitest";
import { calcDuration } from "../logic";

describe("duration-calculator", () => {
  it("computes a positive duration", () => {
    const r = calcDuration("2026-01-01T00:00:00Z", "2026-01-02T03:04:05Z");
    expect(r.days).toBe(1);
    expect(r.hours).toBe(3);
    expect(r.minutes).toBe(4);
    expect(r.seconds).toBe(5);
    expect(r.humanized).toBe("1d 3h 4m 5s");
  });
  it("marks negative durations with a leading minus", () => {
    expect(calcDuration("2026-01-02T00:00:00Z", "2026-01-01T00:00:00Z").humanized).toMatch(/^-/);
  });
  it("computes weeks from days", () => {
    expect(calcDuration("2026-01-01T00:00:00Z", "2026-01-15T00:00:00Z").weeks).toBe(2);
  });
  it("returns 0s for identical datetimes", () => {
    expect(calcDuration("2026-01-01T00:00:00Z", "2026-01-01T00:00:00Z").humanized).toBe("0s");
  });
  it("flags invalid input", () => {
    expect(calcDuration("not a date", "2026-01-01").error).toBe("Invalid date.");
  });
});
