import { describe, it, expect } from "vitest";
import calculator from "../definition";
import { runNumericTests } from "@/test-utils";

describe("square-root compute — numeric correctness", () => {
  it("sqrt(144) = 12", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 144, nthRoot: 2 },
        expected: { root: 12 },
        tolerance: 0.001,
      },
    ]);
  });

  it("sqrt(2) ≈ 1.41421", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 2, nthRoot: 2 },
        expected: { root: 1.41421 },
        tolerance: 0.0001,
      },
    ]);
  });

  it("sqrt(0) = 0", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 0, nthRoot: 2 },
        expected: { root: 0 },
        tolerance: 0.001,
      },
    ]);
  });

  it("cube root of 27 = 3", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 27, nthRoot: 3 },
        expected: { root: 3 },
        tolerance: 0.001,
      },
    ]);
  });

  it("4th root of 16 = 2", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 16, nthRoot: 4 },
        expected: { root: 2 },
        tolerance: 0.001,
      },
    ]);
  });

  it("sqrt(1) = 1", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 1, nthRoot: 2 },
        expected: { root: 1 },
        tolerance: 0.001,
      },
    ]);
  });

  it("sqrt(100) = 10, perfect square", () => {
    const parsed = calculator.inputSchema.parse({ value: 100, nthRoot: 2 });
    const result = calculator.compute(parsed);
    expect(result.root).toBe(10);
    expect(result.isPerfectSquare).toBe(true);
  });

  it("sqrt(2) is NOT perfect square", () => {
    const parsed = calculator.inputSchema.parse({ value: 2, nthRoot: 2 });
    const result = calculator.compute(parsed);
    expect(result.isPerfectSquare).toBe(false);
  });
});

describe("square-root compute — simplified radical form", () => {
  const compute = (value: number, n = 2) =>
    calculator.compute(calculator.inputSchema.parse({ value, nthRoot: n }));

  it("√4 = 2√1 (simplified: coefficient=2, radicand=1)", () => {
    const r = compute(4);
    expect(r.simplifiedCoefficient).toBe(2);
    expect(r.simplifiedRadicand).toBe(1);
  });

  it("√8 = 2√2 (coefficient=2, radicand=2)", () => {
    const r = compute(8);
    expect(r.simplifiedCoefficient).toBe(2);
    expect(r.simplifiedRadicand).toBe(2);
  });

  it("√12 = 2√3 (coefficient=2, radicand=3)", () => {
    const r = compute(12);
    expect(r.simplifiedCoefficient).toBe(2);
    expect(r.simplifiedRadicand).toBe(3);
  });

  it("√45 = 3√5 (coefficient=3, radicand=5)", () => {
    const r = compute(45);
    expect(r.simplifiedCoefficient).toBe(3);
    expect(r.simplifiedRadicand).toBe(5);
  });

  it("√7 stays √7 (coefficient=1, radicand=7)", () => {
    const r = compute(7);
    expect(r.simplifiedCoefficient).toBe(1);
    expect(r.simplifiedRadicand).toBe(7);
  });
});
