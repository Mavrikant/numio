import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// Reference: Ainsworth BE et al. (2011). 2011 Compendium of Physical Activities.
// MET formula: kcal = MET × weight(kg) × hours.
// Intensity scaling: light = 0.7×, moderate = 1.0×, vigorous = 1.3×.

describe("calories-burned compute — numeric correctness", () => {
  it("running, moderate, 30 min, 70 kg → ~343 kcal", () => {
    // 9.8 × 1.0 × 70 × 0.5 = 343.0 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "running", intensity: "moderate", duration: 30, weight: 70 },
        expected: { caloriesBurned: 343, metValue: 9.8 },
        tolerance: 1,
        description: "Moderate running, 30 min, 70 kg (Ainsworth 2011)",
      },
    ]);
  });

  it("walking, light, 60 min, 80 kg → ~196 kcal", () => {
    // 3.5 × 0.7 × 80 × 1 = 196.0 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "walking", intensity: "light", duration: 60, weight: 80 },
        expected: { caloriesBurned: 196, metValue: 2.45 },
        tolerance: 1,
        description: "Light walking, 60 min, 80 kg",
      },
    ]);
  });

  it("cycling, vigorous, 45 min, 75 kg → ~548 kcal", () => {
    // 7.5 × 1.3 × 75 × 0.75 = 548.4 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "cycling", intensity: "vigorous", duration: 45, weight: 75 },
        expected: { caloriesBurned: 548, metValue: 9.75 },
        tolerance: 1,
        description: "Vigorous cycling, 45 min, 75 kg",
      },
    ]);
  });

  it("yoga, light, 60 min, 60 kg → ~105 kcal", () => {
    // 2.5 × 0.7 × 60 × 1 = 105.0 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "yoga", intensity: "light", duration: 60, weight: 60 },
        expected: { caloriesBurned: 105, metValue: 1.75 },
        tolerance: 1,
        description: "Light yoga, 60 min, 60 kg",
      },
    ]);
  });

  it("jumping-rope, vigorous, 20 min, 70 kg → ~373 kcal", () => {
    // 12.3 × 1.3 × 70 × (20/60) = 373.1 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "jumping-rope", intensity: "vigorous", duration: 20, weight: 70 },
        expected: { caloriesBurned: 373, metValue: 15.99 },
        tolerance: 1.5,
        description: "Vigorous jumping rope, 20 min, 70 kg",
      },
    ]);
  });

  it("swimming, moderate, 40 min, 65 kg → ~347 kcal", () => {
    // 8.0 × 1.0 × 65 × (40/60) = 346.67 kcal
    runNumericTests(calculator, [
      {
        inputs: { activity: "swimming", intensity: "moderate", duration: 40, weight: 65 },
        expected: { caloriesBurned: 347, metValue: 8.0 },
        tolerance: 1,
        description: "Moderate swimming, 40 min, 65 kg",
      },
    ]);
  });
});

describe("calories-burned compute — equivalent foods string", () => {
  const parse = (inputs: {
    activity: string;
    intensity: "light" | "moderate" | "vigorous";
    duration: number;
    weight: number;
  }) => calculator.compute(calculator.inputSchema.parse(inputs));

  it("returns a non-empty equivalentFoods string", () => {
    const result = parse({
      activity: "running",
      intensity: "moderate",
      duration: 30,
      weight: 70,
    });
    expect(typeof result.equivalentFoods).toBe("string");
    expect((result.equivalentFoods as string).length).toBeGreaterThan(0);
  });
});
