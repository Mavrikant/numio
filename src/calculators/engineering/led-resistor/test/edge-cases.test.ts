import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("LED Resistor edge cases — schema validation", () => {
  it("rejects supply voltage equal to total forward voltage", () => {
    // supplyVoltage must be > forwardVoltage × ledCount
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 2.0, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1 }),
    ).toThrow();
  });

  it("rejects supply voltage less than total forward voltage", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 5, forwardVoltage: 3.0, forwardCurrentMa: 20, ledCount: 2 }),
    ).toThrow();
  });

  it("rejects supply voltage below minimum (0.5V)", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 0.5, forwardVoltage: 0.5, forwardCurrentMa: 10, ledCount: 1 }),
    ).toThrow();
  });

  it("rejects forward current below 1mA", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 0.5, ledCount: 1 }),
    ).toThrow();
  });

  it("rejects ledCount of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 0 }),
    ).toThrow();
  });

  it("rejects ledCount of 11 (max is 10)", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 60, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 11 }),
    ).toThrow();
  });

  it("accepts valid inputs with ledCount=10", () => {
    expect(() =>
      calculator.inputSchema.parse({ supplyVoltage: 60, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 10 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1 },
      { supplyVoltage: 2.0, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1 },
    );
  });
});

describe("LED Resistor edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1,
    });
    assertComputeIsPure(calculator as unknown as AnyCalculatorDefinition, inputs as Record<string, unknown>);
  });

  it("result is a plain object (no mutation possible)", () => {
    const inputs = calculator.inputSchema.parse({
      supplyVoltage: 12, forwardVoltage: 3.2, forwardCurrentMa: 20, ledCount: 1,
    });
    const result = calculator.compute(inputs);
    expect(typeof result).toBe("object");
    expect(result).not.toBeNull();
  });

  it("resistorColorCode is a non-empty string", () => {
    const inputs = calculator.inputSchema.parse({
      supplyVoltage: 5, forwardVoltage: 2.0, forwardCurrentMa: 20, ledCount: 1,
    });
    const result = calculator.compute(inputs);
    expect(typeof result.resistorColorCode).toBe("string");
    expect((result.resistorColorCode as string).length).toBeGreaterThan(0);
  });
});
