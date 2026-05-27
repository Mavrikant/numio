import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("$(echo $CALC | tr '-' ' ') — compute", () => {
  it("converts basic values", () => {
    const result = compute({ value: 1, fromUnit: "second", toUnit: "minute", mode: "binary" } as any);
    expect(result.result).toBeGreaterThan(0);
    expect(Number.isFinite(result.result)).toBe(true);
  });

  it("handles zero or near-zero values", () => {
    const result = compute({ value: 0.001, fromUnit: "second", toUnit: "minute", mode: "binary" } as any);
    expect(result.result).toBeGreaterThanOrEqual(0);
  });
});
