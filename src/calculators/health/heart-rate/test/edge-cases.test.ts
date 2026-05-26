import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Heart Rate edge cases — schema validation", () => {
  it("rejects age below 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 9, restingHeartRate: 60, formula: "simple" }),
    ).toThrow();
  });

  it("rejects age above 100", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 101, restingHeartRate: 60, formula: "simple" }),
    ).toThrow();
  });

  it("rejects restingHeartRate below 30", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 30, restingHeartRate: 29, formula: "karvonen" }),
    ).toThrow();
  });

  it("rejects restingHeartRate above 100", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 30, restingHeartRate: 101, formula: "karvonen" }),
    ).toThrow();
  });

  it("rejects invalid formula", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 30, restingHeartRate: 60, formula: "fancy" }),
    ).toThrow();
  });

  it("accepts boundary age 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 10, restingHeartRate: 60, formula: "simple" }),
    ).not.toThrow();
  });

  it("accepts boundary age 100", () => {
    expect(() =>
      calculator.inputSchema.parse({ age: 100, restingHeartRate: 60, formula: "simple" }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { age: 30, restingHeartRate: 60, formula: "karvonen" },
      { age: 200, restingHeartRate: 60, formula: "karvonen" },
    );
  });
});

describe("Heart Rate edge cases — compute purity", () => {
  it("produces identical results for simple formula", () => {
    const inputs = calculator.inputSchema.parse({ age: 35, restingHeartRate: 65, formula: "simple" });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for karvonen formula", () => {
    const inputs = calculator.inputSchema.parse({ age: 35, restingHeartRate: 65, formula: "karvonen" });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Heart Rate edge cases — zone ordering", () => {
  const parse = (inputs: { age: number; restingHeartRate: number; formula: "simple" | "karvonen" }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("zones are ordered (zone1 < zone2 < zone3 < zone4 < zone5)", () => {
    const result = parse({ age: 40, restingHeartRate: 65, formula: "karvonen" });
    expect(result.zone1Min).toBeLessThan(result.zone2Min);
    expect(result.zone2Min).toBeLessThan(result.zone3Min);
    expect(result.zone3Min).toBeLessThan(result.zone4Min);
    expect(result.zone4Min).toBeLessThan(result.zone5Min);
  });

  it("zone5Max equals maxHR for simple formula", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "simple" });
    expect(result.zone5Max).toBe(result.maxHR);
  });

  it("zone5Max equals maxHR for Karvonen formula", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    expect(result.zone5Max).toBe(result.maxHR);
  });
});
