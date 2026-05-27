import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: 1 m/s = 3.6 km/h = 2.237 mph = 1.944 knots = 3.281 ft/s
// Source: SI standards and NIST conversion tables

describe("Speed compute — numeric correctness", () => {
  it("converts 100 km/h to mph correctly", () => {
    // 100 km/h ≈ 62.14 mph
    runNumericTests(calculator, [
      {
        inputs: { value: 100, fromUnit: "kmh", toUnit: "mph" },
        expected: { result: 62.1371, mph: 62.1371 },
        tolerance: 0.01,
        description: "100 km/h to mph",
      },
    ]);
  });

  it("converts 60 mph to km/h correctly", () => {
    // 60 mph ≈ 96.56 km/h
    runNumericTests(calculator, [
      {
        inputs: { value: 60, fromUnit: "mph", toUnit: "kmh" },
        expected: { result: 96.5606, kmh: 96.5606 },
        tolerance: 0.01,
        description: "60 mph to km/h",
      },
    ]);
  });

  it("converts 10 m/s to knots correctly", () => {
    // 10 m/s ≈ 19.44 knots
    runNumericTests(calculator, [
      {
        inputs: { value: 10, fromUnit: "ms", toUnit: "knots" },
        expected: { result: 19.44, knots: 19.44 },
        tolerance: 0.01,
        description: "10 m/s to knots",
      },
    ]);
  });

  it("shows all conversions from single input", () => {
    // 50 km/h reference: 50/3.6 = 13.888 m/s
    runNumericTests(calculator, [
      {
        inputs: { value: 50, fromUnit: "kmh", toUnit: "ms" },
        expected: {
          result: 13.888888,
          kmh: 50,
          mph: 31.0686,
          ms: 13.888888,
          knots: 26.9977,
          fts: 45.5730,
        },
        tolerance: 0.01,
        description: "50 km/h shows all units",
      },
    ]);
  });

  it("handles zero speed correctly", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 0, fromUnit: "kmh", toUnit: "mph" },
        expected: { result: 0 },
        tolerance: 0.001,
        description: "Zero speed",
      },
    ]);
  });

  it("converts 1 knot to m/s correctly", () => {
    // 1 knot = 0.51444 m/s
    runNumericTests(calculator, [
      {
        inputs: { value: 1, fromUnit: "knots", toUnit: "ms" },
        expected: { ms: 0.51444 },
        tolerance: 0.001,
        description: "1 knot to m/s",
      },
    ]);
  });
});
