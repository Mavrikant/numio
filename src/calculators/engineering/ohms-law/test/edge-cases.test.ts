import { describe, it, expect } from "vitest";
import { assertComputeIsPure, assertSchemaValidates } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Ohm's Law edge cases — schema validation", () => {
  it("rejects same quantity for both inputs", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 12, knownQty2: "voltage", value2: 5 }),
    ).toThrow();
  });

  it("rejects zero value1", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 0, knownQty2: "current", value2: 2 }),
    ).toThrow();
  });

  it("rejects negative value2", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 12, knownQty2: "current", value2: -1 }),
    ).toThrow();
  });

  it("rejects missing knownQty2", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 12, value2: 2 }),
    ).toThrow();
  });

  it("rejects invalid quantity name", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "energy", value1: 12, knownQty2: "current", value2: 2 }),
    ).toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { knownQty1: "voltage", value1: 12, knownQty2: "current", value2: 2 },
      { knownQty1: "voltage", value1: 0, knownQty2: "current", value2: 2 },
    );
  });
});

describe("Ohm's Law edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      knownQty1: "voltage", value1: 12, knownQty2: "current", value2: 2,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Ohm's Law edge cases — boundary values", () => {
  it("accepts small resistance values (0.001 Ω)", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 1, knownQty2: "resistance", value2: 0.001 }),
    ).not.toThrow();
  });

  it("accepts large values (1000V, 1000A)", () => {
    expect(() =>
      calculator.inputSchema.parse({ knownQty1: "voltage", value1: 1000, knownQty2: "current", value2: 1000 }),
    ).not.toThrow();
  });
});
