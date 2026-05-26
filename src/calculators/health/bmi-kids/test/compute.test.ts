import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: CDC 2000 Growth Charts (Kuczmarski et al., Adv Data, 2002)
// BMI formula: weight(kg) / height(m)^2

describe("BMI Kids compute — BMI numeric correctness", () => {
  it("male age 10, 35 kg, 140 cm → BMI ≈ 17.86", () => {
    // BMI = 35 / (1.40^2) = 35 / 1.96 = 17.857 → rounds to 17.9
    runNumericTests(calculator, [
      {
        inputs: { age: 10, gender: "male", weight: 35, height: 140, unit: "metric" },
        expected: { bmi: 17.9 },
        tolerance: 0.1,
      },
    ]);
  });

  it("female age 12, 45 kg, 150 cm → BMI ≈ 20.0", () => {
    // BMI = 45 / (1.50^2) = 45 / 2.25 = 20.0
    runNumericTests(calculator, [
      {
        inputs: { age: 12, gender: "female", weight: 45, height: 150, unit: "metric" },
        expected: { bmi: 20.0 },
        tolerance: 0.1,
      },
    ]);
  });

  it("male age 15, 70 kg, 170 cm → BMI ≈ 24.2 (overweight)", () => {
    // BMI = 70 / (1.70^2) = 70 / 2.89 = 24.22
    runNumericTests(calculator, [
      {
        inputs: { age: 15, gender: "male", weight: 70, height: 170, unit: "metric" },
        expected: { bmi: 24.2 },
        tolerance: 0.2,
      },
    ]);
  });

  it("imperial conversion: male age 10, 77 lb, 55 in → metric approx 34.9 kg, 139.7 cm", () => {
    // 77 lb * 0.453592 = 34.93 kg; 55 in * 2.54 = 139.7 cm
    // BMI = 34.93 / (1.397^2) = 34.93 / 1.952 = 17.9
    runNumericTests(calculator, [
      {
        inputs: { age: 10, gender: "male", weight: 77, height: 55, unit: "imperial" },
        expected: { bmi: 17.9 },
        tolerance: 0.3,
      },
    ]);
  });
});

describe("BMI Kids compute — weight status classification", () => {
  it("male age 10, BMI ~17.9 → healthy weight (between P5 and P85)", () => {
    // P85 for male age 10 = 18.9, so 17.9 < 18.9 → healthy
    const inputs = calculator.inputSchema.parse({
      age: 10, gender: "male", weight: 35, height: 140, unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.weightStatus).toBe("healthy");
  });

  it("male age 10 with high BMI (25) → obese (above P95 = 20.8)", () => {
    // BMI 25 > P95 (20.8) for male age 10 → obese
    // weight = 25 * (1.40^2) = 25 * 1.96 = 49 kg
    const inputs = calculator.inputSchema.parse({
      age: 10, gender: "male", weight: 49, height: 140, unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.weightStatus).toBe("obese");
  });

  it("female age 8 with low BMI (13.5) → underweight (below P5 = ~14.3)", () => {
    // P5 female age 8 = 14.3
    // BMI 13.5: weight = 13.5 * (1.25^2) = 13.5 * 1.5625 = 21.1 kg, height=125 cm
    const inputs = calculator.inputSchema.parse({
      age: 8, gender: "female", weight: 21, height: 125, unit: "metric",
    });
    const result = calculator.compute(inputs);
    // BMI = 21/(1.25^2) = 21/1.5625 = 13.44 → underweight
    expect(result.weightStatus).toBe("underweight");
  });

  it("male age 12, BMI between P85 and P95 → overweight", () => {
    // P85 male age 12 = 20.6, P95 = 23.0
    // BMI 22: weight = 22 * (1.55^2) = 22 * 2.4025 = 52.86 kg, height = 155 cm
    const inputs = calculator.inputSchema.parse({
      age: 12, gender: "male", weight: 53, height: 155, unit: "metric",
    });
    const result = calculator.compute(inputs);
    // BMI = 53/(1.55^2) = 53/2.4025 = 22.06 → overweight
    expect(result.weightStatus).toBe("overweight");
  });

  it("returns a percentile estimate string", () => {
    const inputs = calculator.inputSchema.parse({
      age: 10, gender: "male", weight: 35, height: 140, unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(typeof result.percentileEstimate).toBe("string");
    expect((result.percentileEstimate as string).length).toBeGreaterThan(0);
  });
});
