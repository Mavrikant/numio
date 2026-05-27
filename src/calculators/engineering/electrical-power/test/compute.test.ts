import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Electrical Power compute", () => {
  it("calculates power from voltage and current", () => {
    // 120V × 10A = 1200W
    const result = compute({
      knownQty1: "voltage",
      value1: 120,
      knownQty2: "current",
      value2: 10,
    });
    expect(result.voltage).toBeCloseTo(120, 1);
    expect(result.current).toBeCloseTo(10, 2);
    expect(result.power).toBeCloseTo(1200, 1);
  });

  it("calculates all values from voltage and resistance", () => {
    // 24V, 12Ω → I=2A, P=48W
    const result = compute({
      knownQty1: "voltage",
      value1: 24,
      knownQty2: "resistance",
      value2: 12,
    });
    expect(result.voltage).toBeCloseTo(24, 1);
    expect(result.current).toBeCloseTo(2, 2);
    expect(result.power).toBeCloseTo(48, 1);
  });

  it("calculates energy consumption correctly", () => {
    // 100W for 24 hours = 2.4 kWh
    const result = compute({
      knownQty1: "power",
      value1: 100,
      knownQty2: "voltage",
      value2: 10,
    });
    expect(result.energy24h).toBeCloseTo(2.4, 1);
    // 30 days
    expect(result.energy30d).toBeCloseTo(72, 1);
    // Cost: 72 kWh × $0.15 = $10.80
    expect(result.costPerMonth).toBeCloseTo(10.8, 1);
  });

  it("handles resistance and power inputs", () => {
    // R=10Ω, P=160W → I=4A, V=40V
    const result = compute({
      knownQty1: "resistance",
      value1: 10,
      knownQty2: "power",
      value2: 160,
    });
    expect(result.resistance).toBeCloseTo(10, 1);
    expect(result.power).toBeCloseTo(160, 1);
    expect(result.current).toBeCloseTo(4, 1);
    expect(result.voltage).toBeCloseTo(40, 1);
  });
});
