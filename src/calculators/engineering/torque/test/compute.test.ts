import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Torque — compute function", () => {
  it("calculates torque from force and distance: τ = F × r", () => {
    // Reference: τ = 100 N × 0.5 m = 50 N·m
    const result = compute({
      force: 100,
      distance: 0.5,
      momentOrForce: "force",
    });

    expect(result.torqueNm).toBeCloseTo(50.0, 1);
    expect(result.forceN).toBeCloseTo(100.0, 1);
    expect(result.distanceM).toBeCloseTo(0.5, 2);
  });

  it("calculates force from torque and distance: F = τ / r", () => {
    // Reference: F = 50 N·m / 0.5 m = 100 N
    const result = compute({
      force: 50,
      distance: 0.5,
      momentOrForce: "moment",
    });

    expect(result.torqueNm).toBeCloseTo(50.0, 1);
    expect(result.forceN).toBeCloseTo(100.0, 1);
    expect(result.distanceM).toBeCloseTo(0.5, 2);
  });

  it("handles small distances", () => {
    const result = compute({
      force: 1000,
      distance: 0.01,
      momentOrForce: "force",
    });

    expect(result.torqueNm).toBeCloseTo(10.0, 1);
  });
});
