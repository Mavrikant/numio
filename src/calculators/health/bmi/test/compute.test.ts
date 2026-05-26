import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Referans: WHO BMI classification (who.int) ve CDC BMI calculator (cdc.gov)

describe("BMI compute — numeric correctness", () => {
  it("metric: normal weight adult (70 kg / 175 cm → BMI ~22.9)", () => {
    // Referans: WHO BMI classification — 18.5–24.9 = Normal weight
    runNumericTests(calculator, [
      {
        inputs: { unit: "metric", weight: 70, height: 175 },
        expected: { bmi: 22.9 },
        tolerance: 0.1,
        description: "70 kg, 175 cm — normal weight adult",
      },
    ]);
  });

  it("metric: underweight adult (50 kg / 180 cm → BMI ~15.4)", () => {
    // Referans: WHO BMI classification — below 18.5 = Underweight
    runNumericTests(calculator, [
      {
        inputs: { unit: "metric", weight: 50, height: 180 },
        expected: { bmi: 15.4 },
        tolerance: 0.1,
        description: "50 kg, 180 cm — underweight",
      },
    ]);
  });

  it("metric: obese adult (100 kg / 170 cm → BMI ~34.6)", () => {
    // Referans: WHO BMI classification — 30.0–39.9 = Obese
    runNumericTests(calculator, [
      {
        inputs: { unit: "metric", weight: 100, height: 170 },
        expected: { bmi: 34.6 },
        tolerance: 0.1,
        description: "100 kg, 170 cm — obese",
      },
    ]);
  });

  it("imperial: normal weight adult (154 lb / 69 in → BMI ~22.7)", () => {
    // Referans: CDC BMI calculator — same formula, imperial unit path
    runNumericTests(calculator, [
      {
        inputs: { unit: "imperial", weight: 154, height: 69 },
        expected: { bmi: 22.7 },
        tolerance: 0.2,
        description: "154 lb, 69 in — normal weight (imperial)",
      },
    ]);
  });

  it("metric: healthy weight range is correct for 175 cm", () => {
    // At 175 cm: min = 18.5 × (1.75)² = 18.5 × 3.0625 = 56.66 kg
    //            max = 24.9 × (1.75)² = 24.9 × 3.0625 = 76.26 kg
    runNumericTests(calculator, [
      {
        inputs: { unit: "metric", weight: 70, height: 175 },
        expected: {
          healthyMinWeight: 56.66,
          healthyMaxWeight: 76.26,
        },
        tolerance: 0.05,
        description: "Healthy weight range at 175 cm",
      },
    ]);
  });

  it("metric: severely obese adult (130 kg / 165 cm → BMI ~47.8)", () => {
    // Referans: WHO BMI classification — ≥40 = Severely obese
    runNumericTests(calculator, [
      {
        inputs: { unit: "metric", weight: 130, height: 165 },
        expected: { bmi: 47.8 },
        tolerance: 0.2,
        description: "130 kg, 165 cm — severely obese",
      },
    ]);
  });
});

describe("BMI compute — category classification", () => {
  const parse = (inputs: { unit: "metric" | "imperial"; weight: number; height: number }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("classifies underweight correctly (BMI < 18.5)", () => {
    const result = parse({ unit: "metric", weight: 50, height: 180 });
    expect(result.category).toBe("underweight");
  });

  it("classifies normal weight correctly (18.5 ≤ BMI < 25)", () => {
    const result = parse({ unit: "metric", weight: 70, height: 175 });
    expect(result.category).toBe("normal");
  });

  it("classifies overweight correctly (25 ≤ BMI < 30)", () => {
    const result = parse({ unit: "metric", weight: 80, height: 170 });
    expect(result.category).toBe("overweight");
  });

  it("classifies obese correctly (30 ≤ BMI < 40)", () => {
    const result = parse({ unit: "metric", weight: 100, height: 170 });
    expect(result.category).toBe("obese");
  });

  it("classifies severely obese correctly (BMI ≥ 40)", () => {
    const result = parse({ unit: "metric", weight: 130, height: 165 });
    expect(result.category).toBe("severelyObese");
  });
});
