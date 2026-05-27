import { describe, it, expect } from "vitest";
import calculator from "../definition";

// Helper: parse string → call compute
const run = (values: string) =>
  calculator.compute(calculator.inputSchema.parse({ values }));

describe("average compute — numeric correctness", () => {
  it("basic mean: [1, 2, 3, 4, 5] → mean = 3", () => {
    const r = run("1, 2, 3, 4, 5");
    expect(r.mean).toBeCloseTo(3, 3);
    expect(r.count).toBe(5);
    expect(r.sum).toBeCloseTo(15, 3);
  });

  it("median of odd list: [5, 1, 3, 2, 4] → median = 3", () => {
    const r = run("5, 1, 3, 2, 4");
    expect(r.median).toBeCloseTo(3, 3);
  });

  it("median of even list: [1, 2, 3, 4] → median = 2.5", () => {
    const r = run("1, 2, 3, 4");
    expect(r.median).toBeCloseTo(2.5, 3);
  });

  it("mode: [1, 2, 2, 3] → mode = 2", () => {
    const r = run("1, 2, 2, 3");
    expect(r.mode).toBeCloseTo(2, 3);
  });

  it("range: [10, 3, 7] → range = 7", () => {
    const r = run("10, 3, 7");
    expect(r.range).toBeCloseTo(7, 3);
  });

  it("single value: [42] → mean = median = 42, count = 1, sum = 42, range = 0", () => {
    const r = run("42");
    expect(r.mean).toBeCloseTo(42, 3);
    expect(r.median).toBeCloseTo(42, 3);
    expect(r.count).toBe(1);
    expect(r.sum).toBeCloseTo(42, 3);
    expect(r.range).toBeCloseTo(0, 3);
  });

  it("negative numbers: [-3, -1, 0, 1, 3] → mean = 0, sum = 0, range = 6", () => {
    const r = run("-3, -1, 0, 1, 3");
    expect(r.mean).toBeCloseTo(0, 3);
    expect(r.sum).toBeCloseTo(0, 3);
    expect(r.range).toBeCloseTo(6, 3);
  });

  it("decimal numbers: [1.5, 2.5, 3.5] → mean = 2.5, sum = 7.5", () => {
    const r = run("1.5, 2.5, 3.5");
    expect(r.mean).toBeCloseTo(2.5, 3);
    expect(r.sum).toBeCloseTo(7.5, 3);
  });

  it("all identical values: [7, 7, 7] → mean = median = mode = 7, range = 0", () => {
    const r = run("7, 7, 7");
    expect(r.mean).toBeCloseTo(7, 3);
    expect(r.median).toBeCloseTo(7, 3);
    expect(r.mode).toBeCloseTo(7, 3);
    expect(r.range).toBeCloseTo(0, 3);
  });
});

describe("average compute — formula checks", () => {
  it("sum equals mean × count", () => {
    const r = run("3, 7, 11, 15, 20");
    expect(Math.abs((r.sum as number) - (r.mean as number) * (r.count as number))).toBeLessThan(0.001);
  });

  it("range equals max - min for [2, 8, 5, 1, 9]", () => {
    const r = run("2, 8, 5, 1, 9");
    expect(r.range).toBe(8); // max=9, min=1, range=8
  });
});
