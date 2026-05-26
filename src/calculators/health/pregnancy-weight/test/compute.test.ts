import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

describe("pregnancy-weight compute — numeric tests (IOM 2009)", () => {
  runNumericTests(calculator, [
    {
      label: "Normal BMI woman, week 20: preBmi and currentGain",
      inputs: {
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 70,
        gestationalWeek: 20,
        unit: "metric",
      },
      // preBMI = 65 / 1.65² = 65 / 2.7225 ≈ 23.87 → 23.9
      // expectedGain = 1.5 + (20-13) × 0.42 = 1.5 + 2.94 = 4.44 → 4.4
      // currentGain = 70 - 65 = 5.0
      expected: {
        preBmi: 23.9,
        recommendedTotalGainMin: 11.5,
        recommendedTotalGainMax: 16,
        currentGain: 5.0,
        expectedGainAtWeek: 4.4,
        weeklyRateKg: 0.42,
      },
      tolerance: 0.1,
    },
    {
      label: "Underweight woman, week 10, first trimester expected gain",
      inputs: {
        prePregnancyWeight: 45,
        height: 165,
        currentWeight: 46,
        gestationalWeek: 10,
        unit: "metric",
      },
      // preBMI = 45 / 2.7225 ≈ 16.53 → 16.5
      // expectedGain = (10/13) × 1.5 ≈ 1.15 → 1.2
      // currentGain = 46 - 45 = 1.0
      expected: {
        preBmi: 16.5,
        recommendedTotalGainMin: 12.5,
        recommendedTotalGainMax: 18,
        currentGain: 1.0,
        weeklyRateKg: 0.5,
      },
      tolerance: 0.15,
    },
    {
      label: "Overweight woman, week 30: expected gain and current gain",
      inputs: {
        prePregnancyWeight: 80,
        height: 165,
        currentWeight: 94,
        gestationalWeek: 30,
        unit: "metric",
      },
      // preBMI = 80 / 2.7225 ≈ 29.4
      // expectedGain = 1.0 + (30-13) × 0.28 = 1.0 + 4.76 = 5.76 → 5.8
      // currentGain = 94 - 80 = 14.0
      expected: {
        recommendedTotalGainMin: 7,
        recommendedTotalGainMax: 11.5,
        currentGain: 14.0,
        expectedGainAtWeek: 5.8,
        weeklyRateKg: 0.28,
      },
      tolerance: 0.1,
    },
    {
      label: "Obese woman, week 15: expected gain",
      inputs: {
        prePregnancyWeight: 95,
        height: 165,
        currentWeight: 94.5,
        gestationalWeek: 15,
        unit: "metric",
      },
      // preBMI = 95 / 2.7225 ≈ 34.9
      // expectedGain = 0.75 + (15-13) × 0.22 = 0.75 + 0.44 = 1.19 → 1.2
      // currentGain = 94.5 - 95 = -0.5
      expected: {
        recommendedTotalGainMin: 5,
        recommendedTotalGainMax: 9,
        currentGain: -0.5,
        expectedGainAtWeek: 1.2,
        weeklyRateKg: 0.22,
      },
      tolerance: 0.1,
    },
    {
      label: "Week 13 boundary — full 1st trimester gain for normal BMI",
      inputs: {
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 65,
        gestationalWeek: 13,
        unit: "metric",
      },
      // expectedGain = (13/13) × 1.5 = 1.5
      expected: {
        expectedGainAtWeek: 1.5,
      },
      tolerance: 0.05,
    },
    {
      label: "Week 14 — first week of 2nd trimester for normal BMI",
      inputs: {
        prePregnancyWeight: 65,
        height: 165,
        currentWeight: 65,
        gestationalWeek: 14,
        unit: "metric",
      },
      // expectedGain = 1.5 + (14-13) × 0.42 = 1.92 → 1.9
      expected: {
        expectedGainAtWeek: 1.9,
      },
      tolerance: 0.05,
    },
  ]);
});

describe("pregnancy-weight compute — result shape", () => {
  it("returns all required output keys as correct types", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 65,
      height: 165,
      currentWeight: 70,
      gestationalWeek: 20,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(typeof result.preBmi).toBe("number");
    expect(typeof result.bmiCategory).toBe("string");
    expect(typeof result.recommendedTotalGainMin).toBe("number");
    expect(typeof result.recommendedTotalGainMax).toBe("number");
    expect(typeof result.currentGain).toBe("number");
    expect(typeof result.expectedGainAtWeek).toBe("number");
    expect(typeof result.onTrack).toBe("string");
    expect(typeof result.weeklyRateKg).toBe("number");
  });

  it("bmiCategory is 'normal' for BMI 23.9", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 65,
      height: 165,
      currentWeight: 70,
      gestationalWeek: 20,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.bmiCategory).toBe("normal");
    expect(result.onTrack).toBe("on_track");
  });

  it("bmiCategory is 'underweight' for BMI below 18.5", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 45,
      height: 165,
      currentWeight: 46,
      gestationalWeek: 10,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.bmiCategory).toBe("underweight");
  });

  it("onTrack is 'over' when gain far exceeds expected", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 80,
      height: 165,
      currentWeight: 94,
      gestationalWeek: 30,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.onTrack).toBe("over");
  });

  it("onTrack is 'under' when gain far below expected", () => {
    const inputs = calculator.inputSchema.parse({
      prePregnancyWeight: 95,
      height: 165,
      currentWeight: 94.5,
      gestationalWeek: 15,
      unit: "metric",
    });
    const result = calculator.compute(inputs);
    expect(result.onTrack).toBe("under");
  });
});
