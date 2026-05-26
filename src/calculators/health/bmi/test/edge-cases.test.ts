import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import type { BmiResult } from "../compute";
import calculator from "../definition";

describe("BMI edge cases — schema validation", () => {
  it("rejects zero weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 0, height: 170 }),
    ).toThrow();
  });

  it("rejects negative weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: -10, height: 170 }),
    ).toThrow();
  });

  it("rejects zero height", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: 0 }),
    ).toThrow();
  });

  it("rejects negative height", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: -170 }),
    ).toThrow();
  });

  it("rejects NaN weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: NaN, height: 170 }),
    ).toThrow();
  });

  it("rejects NaN height", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: NaN }),
    ).toThrow();
  });

  it("rejects weight above metric maximum (> 500 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 501, height: 170 }),
    ).toThrow();
  });

  it("rejects height above metric maximum (> 250 cm)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: 251 }),
    ).toThrow();
  });

  it("rejects height below metric minimum (< 50 cm)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: 49 }),
    ).toThrow();
  });

  it("rejects weight above imperial maximum (> 1100 lb)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "imperial", weight: 1101, height: 69 }),
    ).toThrow();
  });

  it("rejects height above imperial maximum (> 100 in)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "imperial", weight: 154, height: 101 }),
    ).toThrow();
  });

  it("rejects height below imperial minimum (< 20 in)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "imperial", weight: 154, height: 19 }),
    ).toThrow();
  });

  it("rejects invalid unit value", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "gallons", weight: 70, height: 170 }),
    ).toThrow();
  });

  it("rejects missing unit field", () => {
    expect(() =>
      calculator.inputSchema.parse({ weight: 70, height: 170 }),
    ).toThrow();
  });
});

describe("BMI edge cases — valid boundary values", () => {
  it("accepts minimum valid metric weight (1 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 1, height: 170 }),
    ).not.toThrow();
  });

  it("accepts maximum valid metric weight (500 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 500, height: 170 }),
    ).not.toThrow();
  });

  it("accepts minimum valid metric height (50 cm)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: 50 }),
    ).not.toThrow();
  });

  it("accepts maximum valid metric height (250 cm)", () => {
    expect(() =>
      calculator.inputSchema.parse({ unit: "metric", weight: 70, height: 250 }),
    ).not.toThrow();
  });

  it("schema validates — assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { unit: "metric", weight: 70, height: 175 },
      { unit: "metric", weight: 0, height: 175 },
    );
  });
});

describe("BMI edge cases — compute purity", () => {
  it("produces identical results across multiple calls (assertComputeIsPure)", () => {
    const inputs = calculator.inputSchema.parse({
      unit: "metric",
      weight: 70,
      height: 175,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for imperial inputs", () => {
    const inputs = calculator.inputSchema.parse({
      unit: "imperial",
      weight: 154,
      height: 69,
    });
    assertComputeIsPure(calculator, inputs);
  });
});

describe("BMI edge cases — float precision", () => {
  it("handles float weight without precision drift (70.1 kg / 170.3 cm)", () => {
    const inputs = calculator.inputSchema.parse({
      unit: "metric",
      weight: 70.1,
      height: 170.3,
    });
    const result = calculator.compute(inputs) as BmiResult;
    // BMI = 70.1 / (1.703)² = 70.1 / 2.9002 ≈ 24.17
    expect(result.bmi).toBeCloseTo(24.2, 1);
    expect(typeof result.bmi).toBe("number");
    expect(isFinite(result.bmi)).toBe(true);
  });
});
