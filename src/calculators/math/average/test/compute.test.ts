import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("average compute — numeric correctness", () => {
  it("basic mean: [1, 2, 3, 4, 5] → mean = 3", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 2, 3, 4, 5" },
        expected: { mean: 3, count: 5, sum: 15 },
        tolerance: 0.001,
        description: "simple 1-5 mean",
      },
    ]);
  });

  it("median of odd list: [1, 2, 3, 4, 5] → median = 3", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "5, 1, 3, 2, 4" },
        expected: { median: 3 },
        tolerance: 0.001,
      },
    ]);
  });

  it("median of even list: [1, 2, 3, 4] → median = 2.5", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 2, 3, 4" },
        expected: { median: 2.5 },
        tolerance: 0.001,
      },
    ]);
  });

  it("mode: [1, 2, 2, 3] → mode = 2", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1, 2, 2, 3" },
        expected: { mode: 2 },
        tolerance: 0.001,
      },
    ]);
  });

  it("range: [10, 3, 7] → range = 7", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "10, 3, 7" },
        expected: { range: 7 },
        tolerance: 0.001,
      },
    ]);
  });

  it("single value: [42] → mean = median = 42, count = 1, sum = 42, range = 0", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "42" },
        expected: { mean: 42, median: 42, count: 1, sum: 42, range: 0 },
        tolerance: 0.001,
      },
    ]);
  });

  it("negative numbers: [-3, -1, 0, 1, 3] → mean = 0, sum = 0", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "-3, -1, 0, 1, 3" },
        expected: { mean: 0, sum: 0, range: 6 },
        tolerance: 0.001,
      },
    ]);
  });

  it("decimal numbers: [1.5, 2.5, 3.5] → mean = 2.5", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "1.5, 2.5, 3.5" },
        expected: { mean: 2.5, sum: 7.5 },
        tolerance: 0.001,
      },
    ]);
  });

  it("all identical values: [7, 7, 7] → mean = median = mode = 7, range = 0", () => {
    runNumericTests(calculator, [
      {
        inputs: { values: "7, 7, 7" },
        expected: { mean: 7, median: 7, mode: 7, range: 0 },
        tolerance: 0.001,
      },
    ]);
  });
});

describe("average compute — formula checks", () => {
  const parse = (values: string) =>
    calculator.compute(calculator.inputSchema.parse({ values }));

  it("sum equals mean × count", () => {
    const result = parse("3, 7, 11, 15, 20");
    expect(Math.abs(result.sum - (result.mean as number) * (result.count as number))).toBeLessThan(0.001);
  });

  it("range equals max - min", () => {
    const result = parse("2, 8, 5, 1, 9");
    expect(result.range).toBe(8); // max=9, min=1, range=8
  });
});
