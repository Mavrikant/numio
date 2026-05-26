import { describe, it, expect } from "vitest";
import { assertSchemaValidates, assertComputeIsPure } from "@/test-utils";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import calculator from "../definition";

describe("LBM edge cases — schema validation", () => {
  it("rejects weight below 1 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 0.5, height: 170, formula: "boer" }),
    ).toThrow();
  });

  it("rejects weight above 300 kg", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 301, height: 170, formula: "boer" }),
    ).toThrow();
  });

  it("rejects height below 50 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 49, formula: "boer" }),
    ).toThrow();
  });

  it("rejects height above 250 cm", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 251, formula: "boer" }),
    ).toThrow();
  });

  it("rejects invalid gender", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "other", weight: 70, height: 170, formula: "boer" }),
    ).toThrow();
  });

  it("rejects invalid formula", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 70, height: 170, formula: "katch" }),
    ).toThrow();
  });

  it("rejects NaN weight", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: NaN, height: 170, formula: "boer" }),
    ).toThrow();
  });

  it("uses assertSchemaValidates helper", () => {
    assertSchemaValidates(
      calculator as unknown as AnyCalculatorDefinition,
      { gender: "male", weight: 70, height: 175, formula: "boer" },
      { gender: "male", weight: 0, height: 175, formula: "boer" },
    );
  });
});

describe("LBM edge cases — valid boundary values", () => {
  it("accepts minimum valid weight (1 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 1, height: 170, formula: "boer" }),
    ).not.toThrow();
  });

  it("accepts maximum valid weight (300 kg)", () => {
    expect(() =>
      calculator.inputSchema.parse({ gender: "male", weight: 300, height: 170, formula: "boer" }),
    ).not.toThrow();
  });

  it("LBM is clamped above 0 for extreme inputs", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 1, height: 50, formula: "james",
    });
    const result = calculator.compute(inputs);
    expect((result.lbm as number)).toBeGreaterThan(0);
  });
});

describe("LBM edge cases — compute purity", () => {
  it("produces identical results across multiple calls (Boer male)", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "male", weight: 75, height: 178, formula: "boer",
    });
    assertComputeIsPure(calculator, inputs);
  });

  it("produces identical results across multiple calls (Hume female)", () => {
    const inputs = calculator.inputSchema.parse({
      gender: "female", weight: 58, height: 160, formula: "hume",
    });
    assertComputeIsPure(calculator, inputs);
  });
});
