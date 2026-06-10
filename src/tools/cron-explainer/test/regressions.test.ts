import { describe, it, expect } from "vitest";
import { explainCron } from "../logic";

describe("cron-explainer regressions", () => {
  it("describes restricted day-of-month + day-of-week as OR", () => {
    const { description } = explainCron("0 0 1 * 1");
    expect(description).toContain("on day-of-month 1 or on Monday");
  });
  it("keeps the simple cases unchanged", () => {
    expect(explainCron("0 0 1 * *").description).toContain("on day-of-month 1");
    expect(explainCron("0 0 * * 1").description).toContain("on Monday");
  });
});
