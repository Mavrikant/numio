import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("cagr edge cases", () => {
  it("reports a total loss as −100% CAGR when ending value is 0", () => {
    const r = compute({ beginningValue: 1000, endingValue: 0, years: 5 });
    expect(r.cagr).toBeCloseTo(-100, 6);
    expect(r.totalReturn).toBeCloseTo(-100, 6);
    expect(r.multiple).toBe(0);
  });

  it("handles a fractional holding period", () => {
    // Half a year doubling → 2^2 − 1 = 300% annualized.
    const r = compute({ beginningValue: 100, endingValue: 200, years: 0.5 });
    expect(r.cagr).toBeCloseTo(300, 4);
  });

  it("rejects a non-positive beginning value", () => {
    expect(inputSchema.safeParse({ beginningValue: 0, endingValue: 100, years: 1 }).success).toBe(false);
  });

  it("rejects a non-positive number of years", () => {
    expect(inputSchema.safeParse({ beginningValue: 100, endingValue: 200, years: 0 }).success).toBe(false);
  });
});
