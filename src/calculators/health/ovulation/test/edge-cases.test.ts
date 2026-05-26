import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("Ovulation edge cases — schema validation", () => {
  it("rejects cycleLength below 21", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 20 }),
    ).toThrow();
  });

  it("rejects cycleLength above 45", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 46 }),
    ).toThrow();
  });

  it("rejects invalid date format", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "01-01-2025", cycleLength: 28 }),
    ).toThrow();
  });

  it("rejects missing lmpDate", () => {
    expect(() =>
      calculator.inputSchema.parse({ cycleLength: 28 }),
    ).toThrow();
  });

  it("accepts minimum cycleLength (21)", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 21 }),
    ).not.toThrow();
  });

  it("accepts maximum cycleLength (45)", () => {
    expect(() =>
      calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 45 }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { lmpDate: "2025-01-01", cycleLength: 28 },
      { lmpDate: "2025-01-01", cycleLength: 10 },
    );
  });
});

describe("Ovulation edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-06-01", cycleLength: 28 });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("Ovulation edge cases — output ordering", () => {
  it("fertileStart is before ovulationDate", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    const result = calculator.compute(inputs);
    expect(result.fertileStart < result.ovulationDate).toBe(true);
  });

  it("ovulationDate is before fertileEnd", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    const result = calculator.compute(inputs);
    expect(result.ovulationDate < result.fertileEnd).toBe(true);
  });

  it("fertileEnd is before nextPeriod", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-01-01", cycleLength: 28 });
    const result = calculator.compute(inputs);
    expect(result.fertileEnd < result.nextPeriod).toBe(true);
  });

  it("lhSurgeDate is one day before ovulationDate", () => {
    const inputs = calculator.inputSchema.parse({ lmpDate: "2025-03-10", cycleLength: 28 });
    const result = calculator.compute(inputs);
    const lh = new Date(result.lhSurgeDate);
    const ov = new Date(result.ovulationDate);
    const diffMs = ov.getTime() - lh.getTime();
    expect(diffMs).toBe(86400000); // exactly 1 day
  });
});
