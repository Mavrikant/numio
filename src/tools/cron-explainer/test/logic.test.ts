import { describe, it, expect } from "vitest";
import { explainCron } from "../logic";

describe("cron-explainer", () => {
  it("describes a fixed daily time", () => {
    expect(explainCron("0 9 * * 1-5")).toEqual({ description: "at 09:00, on 1-5", error: null });
  });
  it("describes step minutes", () => {
    expect(explainCron("*/15 * * * *").description).toBe("every 15 minutes");
  });
  it("names months and weekdays", () => {
    expect(explainCron("0 0 * 1 0").description).toBe("at 00:00, in January, on Sunday");
  });
  it("describes every minute", () => {
    expect(explainCron("* * * * *").description).toBe("every minute");
  });
  it("rejects the wrong field count", () => {
    expect(explainCron("* * *").error).toMatch(/5 fields/);
  });
  it("rejects out-of-range values", () => {
    expect(explainCron("99 * * * *").error).toMatch(/field 1/i);
  });
});
