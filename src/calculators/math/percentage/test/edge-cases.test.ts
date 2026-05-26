import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("percentage edge cases", () => {
  it("returns 0 when y is 0 for x_is_what_pct_of_y", () => {
    const result = compute({ mode: "x_is_what_pct_of_y", x: 10, y: 0 });
    expect(result.result).toBe(0);
  });

  it("returns 0 when x is 0 for pct_change", () => {
    const result = compute({ mode: "pct_change", x: 0, y: 50 });
    expect(result.result).toBe(0);
  });

  it("returns 0 for 0% of any number", () => {
    const result = compute({ mode: "what_is_x_pct_of_y", x: 0, y: 500 });
    expect(result.result).toBe(0);
  });

  it("handles negative pct_change correctly", () => {
    const result = compute({ mode: "pct_change", x: 200, y: 100 });
    expect(result.result).toBeCloseTo(-50, 1);
    expect(result.absoluteDifference).toBe(-100);
  });

  it("handles decimals correctly", () => {
    const result = compute({ mode: "what_is_x_pct_of_y", x: 7.5, y: 40 });
    expect(result.result).toBeCloseTo(3, 2);
  });
});
