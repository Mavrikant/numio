import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("BMR edge cases — schema validation rejects invalid inputs", () => {
  it("rejects weight of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 0, height: 175, age: 30 }),
    ).toThrow();
  });

  it("rejects negative weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: -10, height: 175, age: 30 }),
    ).toThrow();
  });

  it("rejects height below 50 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 49, age: 30 }),
    ).toThrow();
  });

  it("rejects height above 250 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 251, age: 30 }),
    ).toThrow();
  });

  it("rejects weight above 300 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 301, height: 175, age: 30 }),
    ).toThrow();
  });

  it("rejects age of 0", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 175, age: 0 }),
    ).toThrow();
  });

  it("rejects age above 120", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 175, age: 121 }),
    ).toThrow();
  });

  it("rejects invalid formula value", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "katch", gender: "male", weight: 70, height: 175, age: 30 }),
    ).toThrow();
  });

  it("rejects invalid gender value", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "other", weight: 70, height: 175, age: 30 }),
    ).toThrow();
  });

  it("rejects NaN weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: NaN, height: 175, age: 30 }),
    ).toThrow();
  });
});

describe("BMR edge cases — valid boundary values", () => {
  it("accepts minimum valid weight (1 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 1, height: 175, age: 30 }),
    ).not.toThrow();
  });

  it("accepts maximum valid weight (300 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 300, height: 175, age: 30 }),
    ).not.toThrow();
  });

  it("accepts minimum valid height (50 cm)", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 50, age: 30 }),
    ).not.toThrow();
  });

  it("accepts maximum valid age (120 years)", () => {
    expect(() =>
      calculator.inputSchema.parse({ formula: "mifflin", gender: "male", weight: 70, height: 175, age: 120 }),
    ).not.toThrow();
  });

  it("assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { formula: "mifflin", gender: "male", weight: 70, height: 175, age: 30 },
      { formula: "mifflin", gender: "male", weight: 0, height: 175, age: 30 },
    );
  });
});

describe("BMR edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      formula: "mifflin", gender: "male", weight: 70, height: 175, age: 30,
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results for harris-benedict formula", () => {
    const inputs = calculator.inputSchema.parse({
      formula: "harris", gender: "female", weight: 60, height: 162, age: 25,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
