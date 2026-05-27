import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("fraction compute — simplify", () => {
  const simplify = (n: number, d: number) =>
    calculator.compute(
      calculator.inputSchema.parse({ numerator1: n, denominator1: d, operation: "simplify" })
    );

  it("simplifies 6/8 to 3/4", () => {
    const r = simplify(6, 8);
    expect(r.numerator).toBe(3);
    expect(r.denominator).toBe(4);
  });

  it("simplifies 12/36 to 1/3", () => {
    const r = simplify(12, 36);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(3);
  });

  it("simplifies -4/8 to -1/2", () => {
    const r = simplify(-4, 8);
    expect(r.numerator).toBe(-1);
    expect(r.denominator).toBe(2);
  });

  it("simplifies already-reduced 3/7 unchanged", () => {
    const r = simplify(3, 7);
    expect(r.numerator).toBe(3);
    expect(r.denominator).toBe(7);
  });

  it("gives correct decimal for 1/4", () => {
    const r = simplify(1, 4);
    expect(r.decimal).toBeCloseTo(0.25, 5);
  });

  it("mixed number: 7/4 → whole=1, num=3, den=4", () => {
    const r = simplify(7, 4);
    expect(r.mixedWhole).toBe(1);
    expect(r.mixedNumerator).toBe(3);
    expect(r.mixedDenominator).toBe(4);
  });
});

describe("fraction compute — addition", () => {
  const add = (n1: number, d1: number, n2: number, d2: number) =>
    calculator.compute(
      calculator.inputSchema.parse({ numerator1: n1, denominator1: d1, numerator2: n2, denominator2: d2, operation: "add" })
    );

  it("1/2 + 1/3 = 5/6", () => {
    const r = add(1, 2, 1, 3);
    expect(r.numerator).toBe(5);
    expect(r.denominator).toBe(6);
  });

  it("1/4 + 1/4 = 1/2", () => {
    const r = add(1, 4, 1, 4);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(2);
  });

  it("3/4 + 1/4 = 1 (whole number)", () => {
    const r = add(3, 4, 1, 4);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(1);
  });
});

describe("fraction compute — subtraction", () => {
  const sub = (n1: number, d1: number, n2: number, d2: number) =>
    calculator.compute(
      calculator.inputSchema.parse({ numerator1: n1, denominator1: d1, numerator2: n2, denominator2: d2, operation: "subtract" })
    );

  it("3/4 - 1/4 = 1/2", () => {
    const r = sub(3, 4, 1, 4);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(2);
  });

  it("1/3 - 1/2 = -1/6 (negative result)", () => {
    const r = sub(1, 3, 1, 2);
    expect(r.numerator).toBe(-1);
    expect(r.denominator).toBe(6);
  });
});

describe("fraction compute — multiplication", () => {
  const mul = (n1: number, d1: number, n2: number, d2: number) =>
    calculator.compute(
      calculator.inputSchema.parse({ numerator1: n1, denominator1: d1, numerator2: n2, denominator2: d2, operation: "multiply" })
    );

  it("2/3 × 3/4 = 1/2", () => {
    const r = mul(2, 3, 3, 4);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(2);
  });

  it("5/6 × 6/5 = 1", () => {
    const r = mul(5, 6, 6, 5);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(1);
  });
});

describe("fraction compute — division", () => {
  const div = (n1: number, d1: number, n2: number, d2: number) =>
    calculator.compute(
      calculator.inputSchema.parse({ numerator1: n1, denominator1: d1, numerator2: n2, denominator2: d2, operation: "divide" })
    );

  it("3/4 ÷ 1/2 = 3/2", () => {
    const r = div(3, 4, 1, 2);
    expect(r.numerator).toBe(3);
    expect(r.denominator).toBe(2);
  });

  it("2/3 ÷ 4/3 = 1/2", () => {
    const r = div(2, 3, 4, 3);
    expect(r.numerator).toBe(1);
    expect(r.denominator).toBe(2);
  });

  it("decimal output for 1/2 ÷ 1/4 = 2.0", () => {
    const r = div(1, 2, 1, 4);
    expect(r.decimal).toBeCloseTo(2.0, 5);
  });
});
