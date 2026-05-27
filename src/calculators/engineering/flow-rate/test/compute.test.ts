import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("flow-rate — compute", () => {
  it("should calculate flow velocity (10 m³/h, 50mm dia)", () => {
    // Q = 10 m³/h = 10/3600 m³/s ≈ 0.00278 m³/s
    const result = compute({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 0,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    expect(result.velocityMs).toBeGreaterThan(1);
    expect(result.flowRateLs).toBeCloseTo(2.78, 1);
  });

  it("should classify laminar flow (Re < 2300)", () => {
    const result = compute({
      flowRateM3h: 0.1,
      diameterMm: 100,
      pipeLength: 0,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    expect(result.reynoldsNumber).toBeLessThan(2300);
    expect(result.flowRegime).toBe("laminar");
  });

  it("should classify turbulent flow (Re > 4000)", () => {
    const result = compute({
      flowRateM3h: 100,
      diameterMm: 50,
      pipeLength: 0,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    expect(result.reynoldsNumber).toBeGreaterThan(4000);
    expect(result.flowRegime).toBe("turbulent");
  });

  it("should calculate head loss with Darcy-Weisbach", () => {
    const result = compute({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 100,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    expect(result.headLossM).toBeGreaterThan(0);
    expect(result.headLossPa).toBeGreaterThan(0);
  });

  it("should have zero head loss when pipe length is zero", () => {
    const result = compute({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 0,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    expect(result.headLossM).toBe(0);
    expect(result.headLossPa).toBe(0);
  });

  it("should handle oil (different viscosity)", () => {
    const water = compute({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 100,
      pipeType: "commercial_steel",
      fluidType: "water",
    });
    const oil = compute({
      flowRateM3h: 10,
      diameterMm: 50,
      pipeLength: 100,
      pipeType: "commercial_steel",
      fluidType: "oil",
    });
    expect(oil.reynoldsNumber).toBeLessThan(water.reynoldsNumber);
  });
});
