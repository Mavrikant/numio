import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Data Storage Converter — edge cases", () => {
  it("validates non-negative values", () => {
    const result = inputSchema.safeParse({
      value: -1,
      fromUnit: "GB",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.success).toBe(false);
  });

  it("accepts zero", () => {
    const result = inputSchema.safeParse({
      value: 0,
      fromUnit: "GB",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.success).toBe(true);
  });

  it("handles very large numbers", () => {
    const result = compute({
      value: 1000000,
      fromUnit: "TB",
      toUnit: "PB",
      mode: "binary",
    });
    expect(result.result).toBeGreaterThan(0);
    expect(Number.isFinite(result.result)).toBe(true);
  });

  it("handles decimal mode with fractional results", () => {
    const result = compute({
      value: 1,
      fromUnit: "KB",
      toUnit: "MB",
      mode: "decimal",
    });
    expect(result.result).toBeCloseTo(0.001, 5);
  });

  it("validates input schema with invalid unit", () => {
    const result = inputSchema.safeParse({
      value: 1,
      fromUnit: "INVALID",
      toUnit: "MB",
      mode: "binary",
    });
    expect(result.success).toBe(false);
  });

  it("accepts bit units (byte-to-bit conversion)", () => {
    const result = inputSchema.safeParse({
      value: 1,
      fromUnit: "MB",
      toUnit: "Mbit",
      mode: "binary",
    });
    expect(result.success).toBe(true);
  });
});
