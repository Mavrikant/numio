import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Z-Score compute — numeric correctness", () => {
  it("z=0 when value equals mean", () => {
    // Referans: Standard z-score formula: z = (x - μ) / σ
    runNumericTests(calculator, [
      {
        inputs: { value: 100, mean: 100, standardDeviation: 15 },
        expected: { zScore: 0 },
        tolerance: 0.0001,
        description: "Value equals mean",
      },
    ]);
  });

  it("z=-2 when value is 2σ below mean", () => {
    // x=70, μ=100, σ=15 → z = (70-100)/15 = -30/15 = -2
    runNumericTests(calculator, [
      {
        inputs: { value: 70, mean: 100, standardDeviation: 15 },
        expected: { zScore: -2.0 },
        tolerance: 0.0001,
        description: "Two standard deviations below mean",
      },
    ]);
  });

  it("z=2 when value is 2σ above mean", () => {
    // x=130, μ=100, σ=15 → z = (130-100)/15 = 30/15 = 2
    runNumericTests(calculator, [
      {
        inputs: { value: 130, mean: 100, standardDeviation: 15 },
        expected: { zScore: 2.0 },
        tolerance: 0.0001,
        description: "Two standard deviations above mean",
      },
    ]);
  });

  it("percentile ~2.28% for z=-2", () => {
    // Referans: Standard normal CDF table, z=-2 → percentile ~2.28
    runNumericTests(calculator, [
      {
        inputs: { value: 70, mean: 100, standardDeviation: 15 },
        expected: { percentile: 2.28 },
        tolerance: 0.5,
        description: "Percentile at z=-2",
      },
    ]);
  });

  it("percentile ~97.72% for z=2", () => {
    // Referans: Standard normal CDF table, z=2 → percentile ~97.72
    runNumericTests(calculator, [
      {
        inputs: { value: 130, mean: 100, standardDeviation: 15 },
        expected: { percentile: 97.72 },
        tolerance: 0.5,
        description: "Percentile at z=2",
      },
    ]);
  });

  it("percentile ~50% for z=0", () => {
    runNumericTests(calculator, [
      {
        inputs: { value: 100, mean: 100, standardDeviation: 15 },
        expected: { percentile: 50.0 },
        tolerance: 1.0,
        description: "50th percentile at mean",
      },
    ]);
  });

  it("z-score with decimal standard deviation", () => {
    // x=10.5, μ=10, σ=0.5 → z = (10.5-10)/0.5 = 1
    runNumericTests(calculator, [
      {
        inputs: { value: 10.5, mean: 10, standardDeviation: 0.5 },
        expected: { zScore: 1.0 },
        tolerance: 0.0001,
        description: "Decimal standard deviation",
      },
    ]);
  });

  it("one-tailed p-value for z=2 (~0.0228)", () => {
    // P(Z > 2) ≈ 0.0228
    runNumericTests(calculator, [
      {
        inputs: { value: 130, mean: 100, standardDeviation: 15 },
        expected: { oneTailPValue: 0.0228 },
        tolerance: 0.01,
        description: "One-tailed p-value at z=2",
      },
    ]);
  });

  it("two-tailed p-value for z=2 (~0.0455)", () => {
    // P(|Z| > 2) ≈ 0.0455
    runNumericTests(calculator, [
      {
        inputs: { value: 130, mean: 100, standardDeviation: 15 },
        expected: { twoTailPValue: 0.0455 },
        tolerance: 0.01,
        description: "Two-tailed p-value at z=2",
      },
    ]);
  });
});

describe("Z-Score compute — formula verification", () => {
  const parse = (value: number, mean: number, stdDev: number) =>
    calculator.compute(calculator.inputSchema.parse({ value, mean, standardDeviation: stdDev }));

  it("two-tailed p-value equals 2x one-tailed for positive z", () => {
    // Both p-values are rounded to 4 decimals independently, so the
    // identity can be off by up to ±0.0001 due to half-up rounding plus
    // IEEE-754 noise; allow up to 0.001 (1 unit in the last place).
    const result = parse(130, 100, 15);
    expect(Math.abs(result.twoTailPValue - 2 * result.oneTailPValue)).toBeLessThan(0.001);
  });

  it("percentile is in range [0, 100]", () => {
    const results = [
      parse(50, 100, 15),
      parse(100, 100, 15),
      parse(150, 100, 15),
    ];
    results.forEach((r) => {
      expect(r.percentile).toBeGreaterThanOrEqual(0);
      expect(r.percentile).toBeLessThanOrEqual(100);
    });
  });

  it("interpretation matches z-score magnitude", () => {
    const within1 = parse(105, 100, 15);
    const within2 = parse(120, 100, 15);
    const within3 = parse(135, 100, 15);
    const extreme = parse(160, 100, 15);

    expect(within1.interpretation).toContain("1σ");
    expect(within2.interpretation).toContain("2σ");
    expect(within3.interpretation).toContain("3σ");
    expect(extreme.interpretation).toContain("extreme");
  });
});
