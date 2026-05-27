import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("Electrical Power edge cases", () => {
  it("handles very small values", () => {
    const result = compute({
      knownQty1: "voltage",
      value1: 0.001,
      knownQty2: "current",
      value2: 0.001,
    });
    expect(result.power).toBeGreaterThan(0);
    expect(Number.isFinite(result.power)).toBe(true);
  });

  it("handles large values", () => {
    const result = compute({
      knownQty1: "voltage",
      value1: 10000,
      knownQty2: "current",
      value2: 1000,
    });
    expect(result.power).toBeLessThan(1e9);
    expect(Number.isFinite(result.power)).toBe(true);
  });

  it("rejects duplicate quantities", () => {
    const validation = inputSchema.safeParse({
      knownQty1: "voltage",
      value1: 120,
      knownQty2: "voltage",
      value2: 240,
    });
    expect(validation.success).toBe(false);
  });

  it("calculates high energy consumption correctly", () => {
    // 5000W running 24/7
    const result = compute({
      knownQty1: "power",
      value1: 5000,
      knownQty2: "voltage",
      value2: 120,
    });
    expect(result.energy24h).toBeCloseTo(120, 1);
    expect(result.energy30d).toBeCloseTo(3600, 1);
    expect(result.costPerMonth).toBeCloseTo(540, 0);
  });

  it("handles zero resistance boundary", () => {
    // Very small resistance should still work
    const result = compute({
      knownQty1: "voltage",
      value1: 12,
      knownQty2: "resistance",
      value2: 0.1,
    });
    expect(result.current).toBeGreaterThan(0);
    expect(result.power).toBeGreaterThan(0);
  });
});
