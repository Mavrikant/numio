import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Conception edge cases — schema validation", () => {
  it("rejects invalid date format", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "01/01/2024", cycleLength: 28 }),
    ).toThrow();
  });

  it("rejects cycle length below 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "2024-01-01", cycleLength: 20 }),
    ).toThrow();
  });

  it("rejects cycle length above 35", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "2024-01-01", cycleLength: 36 }),
    ).toThrow();
  });

  it("rejects invalid mode", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_egg", dateInput: "2024-01-01", cycleLength: 28 }),
    ).toThrow();
  });

  it("rejects empty date string", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "", cycleLength: 28 }),
    ).toThrow();
  });

  it("accepts minimum cycle length (21)", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "2024-01-01", cycleLength: 21 }),
    ).not.toThrow();
  });

  it("accepts maximum cycle length (35)", () => {
    expect(() =>
      calculator.inputSchema.parse({ mode: "from_lmp", dateInput: "2024-01-01", cycleLength: 35 }),
    ).not.toThrow();
  });

  it("uses assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { mode: "from_lmp", dateInput: "2024-01-01", cycleLength: 28 },
      { mode: "from_lmp", dateInput: "not-a-date", cycleLength: 28 },
    );
  });
});

describe("Conception edge cases — compute purity", () => {
  it("produces identical results across multiple calls (from_lmp)", () => {
    const inputs = calculator.inputSchema.parse({
      mode: "from_lmp",
      dateInput: "2024-06-15",
      cycleLength: 28,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results across multiple calls (from_duedate)", () => {
    const inputs = calculator.inputSchema.parse({
      mode: "from_duedate",
      dateInput: "2025-01-01",
      cycleLength: 28,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
