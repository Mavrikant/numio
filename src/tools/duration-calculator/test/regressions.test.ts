import { describe, it, expect } from "vitest";
import { calcDuration } from "../logic";

describe("duration-calculator regressions", () => {
  it("keeps all breakdown components unsigned for negative durations", () => {
    const r = calcDuration("2024-01-02T12:00", "2024-01-01T10:00");
    expect(r.totalMs).toBeLessThan(0);
    expect(r.days).toBe(1);
    expect(r.hours).toBe(2);
    expect(r.humanized.startsWith("-")).toBe(true);
  });
  it("keeps weeks consistent with days", () => {
    const r = calcDuration("2024-01-15T00:00", "2024-01-01T00:00");
    expect(r.days).toBe(14);
    expect(r.weeks).toBe(2);
  });
});
