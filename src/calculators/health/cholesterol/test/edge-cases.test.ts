import { describe, it, expect } from "vitest";
import { assertComputeIsPure } from "@/test-utils";
import calculator from "../definition";
import type { CholesterolResult } from "../compute";

describe("cholesterol edge cases — schema validation", () => {
  it("rejects TC below 50", () => {
    expect(() =>
      calculator.inputSchema.parse({ totalCholesterol: 49, hdl: 50, triglycerides: 150 }),
    ).toThrow();
  });

  it("rejects TC above 500", () => {
    expect(() =>
      calculator.inputSchema.parse({ totalCholesterol: 501, hdl: 50, triglycerides: 150 }),
    ).toThrow();
  });

  it("rejects HDL below 10", () => {
    expect(() =>
      calculator.inputSchema.parse({ totalCholesterol: 200, hdl: 9, triglycerides: 150 }),
    ).toThrow();
  });

  it("rejects triglycerides above 1000", () => {
    expect(() =>
      calculator.inputSchema.parse({ totalCholesterol: 200, hdl: 50, triglycerides: 1001 }),
    ).toThrow();
  });

  it("rejects non-zero LDL below 30", () => {
    expect(() =>
      calculator.inputSchema.parse({
        totalCholesterol: 200,
        hdl: 50,
        triglycerides: 150,
        ldl: 25,
      }),
    ).toThrow();
  });

  it("accepts ldl=0 as sentinel for Friedewald", () => {
    expect(() =>
      calculator.inputSchema.parse({
        totalCholesterol: 200,
        hdl: 50,
        triglycerides: 150,
        ldl: 0,
      }),
    ).not.toThrow();
  });
});

describe("cholesterol edge cases — Friedewald fallback for high TG", () => {
  it("clamps LDL when TG ≥ 400 mg/dL (Friedewald invalid)", () => {
    const inputs = calculator.inputSchema.parse({
      totalCholesterol: 220,
      hdl: 40,
      triglycerides: 500,
    });
    const r = calculator.compute(inputs) as CholesterolResult;
    // Falls back to non-HDL (180) — does not return a negative/absurd LDL value
    expect(r.ldlComputed).toBeGreaterThanOrEqual(0);
    expect(r.ldlComputed).toBeLessThanOrEqual(r.nonHdlCholesterol);
  });
});

describe("cholesterol edge cases — compute purity", () => {
  it("produces identical results across multiple calls", () => {
    const inputs = calculator.inputSchema.parse({
      totalCholesterol: 200,
      hdl: 50,
      triglycerides: 150,
    });
    assertComputeIsPure(calculator, inputs);
  });
});
