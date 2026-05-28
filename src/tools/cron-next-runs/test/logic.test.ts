import { describe, it, expect } from "vitest";
import { nextRuns } from "../logic";

describe("cron-next-runs", () => {
  it("computes the next N hourly runs", () => {
    const start = new Date("2026-01-15T10:30:00");
    const runs = nextRuns("0 * * * *", start, 3);
    expect(runs).toHaveLength(3);
    expect(runs[0]!.getHours()).toBe(11);
    expect(runs[0]!.getMinutes()).toBe(0);
    expect(runs[1]!.getHours()).toBe(12);
  });
  it("respects day-of-week restrictions", () => {
    // 2026-05-28 is a Thursday (4).
    const start = new Date("2026-05-25T00:00:00"); // Mon
    const runs = nextRuns("0 9 * * 5", start, 2); // Fridays at 09:00
    expect(runs[0]!.getDay()).toBe(5);
    expect(runs[1]!.getDay()).toBe(5);
  });
  it("handles step values", () => {
    const start = new Date("2026-01-15T10:00:00");
    const runs = nextRuns("*/15 * * * *", start, 4);
    const minutes = runs.map((d) => d.getMinutes());
    expect(minutes).toEqual([15, 30, 45, 0]);
  });
  it("returns empty for an invalid expression", () => {
    expect(nextRuns("not cron", new Date(), 5)).toEqual([]);
    expect(nextRuns("99 * * * *", new Date(), 5)).toEqual([]);
  });
});
