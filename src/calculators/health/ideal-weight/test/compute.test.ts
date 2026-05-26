import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("Ideal Weight — Devine formula correctness", () => {
  it("Devine male 175 cm → 50 + 2.3×(175/2.54 - 60)", () => {
    // 175 cm / 2.54 = 68.898 in; over 5ft = 8.898; Devine male = 50 + 2.3×8.898 = 50 + 20.466 = 70.466
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", height: 175, unit: "metric" },
        expected: { devine: 70.47 },
        tolerance: 0.05,
      },
    ]);
  });

  it("Devine female 165 cm", () => {
    // 165/2.54 = 64.961 in; over 5ft = 4.961; Devine female = 45.5 + 2.3×4.961 = 45.5 + 11.41 = 56.91
    runNumericTests(calculator, [
      {
        inputs: { gender: "female", height: 165, unit: "metric" },
        expected: { devine: 56.91 },
        tolerance: 0.05,
      },
    ]);
  });

  it("Robinson male 180 cm", () => {
    // 180/2.54 = 70.866 in; over 5ft = 10.866; Robinson male = 52 + 1.9×10.866 = 52 + 20.645 = 72.645
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", height: 180, unit: "metric" },
        expected: { robinson: 72.65 },
        tolerance: 0.05,
      },
    ]);
  });

  it("Hamwi male 170 cm", () => {
    // 170/2.54 = 66.929 in; over 5ft = 6.929; Hamwi male = 48 + 2.7×6.929 = 48 + 18.708 = 66.71
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", height: 170, unit: "metric" },
        expected: { hamwi: 66.71 },
        tolerance: 0.1,
      },
    ]);
  });

  it("Imperial input: male 70 inches → same as metric equivalent", () => {
    // 70 inches = over 5ft by 10 inches
    // Devine = 50 + 2.3×10 = 73
    runNumericTests(calculator, [
      {
        inputs: { gender: "male", height: 70, unit: "imperial" },
        expected: { devine: 73 },
        tolerance: 0.1,
      },
    ]);
  });

  it("At exactly 5 feet (60 inches) → inchesOver5ft = 0, Devine male = 50", () => {
    const parsed = calculator.inputSchema.parse({ gender: "male", height: 60, unit: "imperial" });
    const result = calculator.compute(parsed);
    expect(result.devine).toBeCloseTo(50, 1);
    expect(result.inchesOver5ft).toBe(0);
  });

  it("Below 5 feet → inchesOver5ft clamped to 0", () => {
    const parsed = calculator.inputSchema.parse({ gender: "female", height: 55, unit: "imperial" });
    const result = calculator.compute(parsed);
    expect(result.inchesOver5ft).toBe(0);
    expect(result.devine).toBe(45.5); // base female constant
  });
});
