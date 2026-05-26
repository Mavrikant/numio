import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: WHO Technical Report Series 894 (2000)
// Male risk: <0.90 low, 0.90-0.99 moderate, ≥1.00 high
// Female risk: <0.80 low, 0.80-0.85 moderate, ≥0.86 high

describe("WHR compute — numeric correctness", () => {
  it("male waist 80 cm, hip 96 cm → WHR = 0.83 (low risk)", () => {
    // WHR = 80 / 96 = 0.8333... → rounds to 0.83
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", waist: 80, hip: 96, unit: "metric" },
        expected: { whr: 0.83 },
        tolerance: 0.01,
      },
    ]);
  });

  it("male waist 94 cm, hip 100 cm → WHR = 0.94 (moderate risk)", () => {
    // WHR = 94 / 100 = 0.94
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", waist: 94, hip: 100, unit: "metric" },
        expected: { whr: 0.94 },
        tolerance: 0.01,
      },
    ]);
  });

  it("male waist 102 cm, hip 100 cm → WHR = 1.02 (high risk)", () => {
    // WHR = 102 / 100 = 1.02
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", waist: 102, hip: 100, unit: "metric" },
        expected: { whr: 1.02 },
        tolerance: 0.01,
      },
    ]);
  });

  it("female waist 75 cm, hip 100 cm → WHR = 0.75 (low risk)", () => {
    // WHR = 75 / 100 = 0.75
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", waist: 75, hip: 100, unit: "metric" },
        expected: { whr: 0.75 },
        tolerance: 0.01,
      },
    ]);
  });

  it("female waist 82 cm, hip 98 cm → WHR = 0.84 (moderate risk)", () => {
    // WHR = 82 / 98 = 0.8367... → 0.84
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", waist: 82, hip: 98, unit: "metric" },
        expected: { whr: 0.84 },
        tolerance: 0.01,
      },
    ]);
  });
});

describe("WHR compute — risk categories", () => {
  it("male WHR 0.83 → low risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 80, hip: 96, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("low");
  });

  it("male WHR 0.94 → moderate risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 94, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("moderate");
  });

  it("male WHR 1.02 → high risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 102, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("high");
  });

  it("female WHR 0.75 → low risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "female", waist: 75, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("low");
  });

  it("female WHR 0.84 → moderate risk", () => {
    const inputs = calculator.inputSchema.parse({ gender: "female", waist: 82, hip: 98, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.riskCategory).toBe("moderate");
  });
});

describe("WHR compute — central obesity thresholds", () => {
  it("male waist 102 cm → central obesity risk true", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 102, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.centralObesityRisk).toBe(true);
  });

  it("male waist 90 cm → central obesity risk false", () => {
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 90, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.centralObesityRisk).toBe(false);
  });

  it("female waist 88 cm → central obesity risk true", () => {
    const inputs = calculator.inputSchema.parse({ gender: "female", waist: 88, hip: 100, unit: "metric" });
    const result = calculator.compute(inputs);
    expect(result.centralObesityRisk).toBe(true);
  });

  it("imperial: male waist 40 in → convert to 101.6 cm, no central obesity", () => {
    // 40 inches = 40 * 2.54 = 101.6 cm < 102 → false
    const inputs = calculator.inputSchema.parse({ gender: "male", waist: 40, hip: 44, unit: "imperial" });
    const result = calculator.compute(inputs);
    expect(result.centralObesityRisk).toBe(false);
    expect((result.waistCm as number)).toBeCloseTo(101.6, 0);
  });
});
