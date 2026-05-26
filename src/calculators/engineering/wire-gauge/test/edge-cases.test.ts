import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Wire Gauge edge cases — schema validation", () => {
  it("rejects invalid AWG string", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "7", current: 20, lengthM: 10 }),
    ).toThrow();
  });

  it("rejects negative current", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "12", current: -1, lengthM: 10 }),
    ).toThrow();
  });

  it("rejects length below minimum (0.05m)", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "12", current: 20, lengthM: 0.05 }),
    ).toThrow();
  });

  it("rejects length above maximum (1001m)", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "12", current: 20, lengthM: 1001 }),
    ).toThrow();
  });

  it("accepts 1/0 AWG notation", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "1/0", current: 100, lengthM: 50 }),
    ).not.toThrow();
  });

  it("accepts 4/0 AWG notation", () => {
    expect(() =>
      calculator.inputSchema.parse({ awg: "4/0", current: 190, lengthM: 20 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { awg: "12", current: 20, lengthM: 30 },
      { awg: "9", current: 20, lengthM: 30 },
    );
  });
});

describe("Wire Gauge edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ awg: "12", current: 20, lengthM: 30 });
    assertComputeIsPure(calculator as unknown as AnyCalculatorDefinition, inputs as Record<string, unknown>);
  });

  it("isSuitable is boolean", () => {
    const inputs = calculator.inputSchema.parse({ awg: "12", current: 20, lengthM: 30 });
    const result = calculator.compute(inputs) as { isSuitable: boolean };
    expect(typeof result.isSuitable).toBe("boolean");
  });
});
