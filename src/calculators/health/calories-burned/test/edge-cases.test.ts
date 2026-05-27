import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";

describe("calories-burned edge cases — schema validation", () => {
  it("rejects zero duration", () => {
    expect(() =>
      calculator.inputSchema.parse({
        activity: "running",
        intensity: "moderate",
        duration: 0,
        weight: 70,
      }),
    ).toThrow();
  });

  it("rejects negative weight", () => {
    expect(() =>
      calculator.inputSchema.parse({
        activity: "running",
        intensity: "moderate",
        duration: 30,
        weight: -10,
      }),
    ).toThrow();
  });

  it("rejects duration over 1440 minutes (24 h)", () => {
    expect(() =>
      calculator.inputSchema.parse({
        activity: "running",
        intensity: "moderate",
        duration: 1441,
        weight: 70,
      }),
    ).toThrow();
  });

  it("rejects unknown activity value", () => {
    expect(() =>
      calculator.inputSchema.parse({
        activity: "moonwalking",
        intensity: "moderate",
        duration: 30,
        weight: 70,
      }),
    ).toThrow();
  });

  it("rejects unknown intensity value", () => {
    expect(() =>
      calculator.inputSchema.parse({
        activity: "running",
        intensity: "extreme",
        duration: 30,
        weight: 70,
      }),
    ).toThrow();
  });
});

describe("calories-burned edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      activity: "running",
      intensity: "moderate",
      duration: 30,
      weight: 70,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
