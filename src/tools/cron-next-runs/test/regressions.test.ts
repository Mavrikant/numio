import { describe, it, expect } from "vitest";
import { nextRuns } from "../logic";

describe("cron-next-runs regressions", () => {
  it("rejects a malformed negative field instead of treating it as 0-N", () => {
    expect(nextRuns("-5 * * * *", new Date("2024-01-01T12:00:00Z"), 3)).toEqual([]);
  });
  it("still accepts real ranges", () => {
    const runs = nextRuns("0-5 * * * *", new Date("2024-01-01T12:00:30Z"), 3);
    expect(runs).toHaveLength(3);
  });
});
