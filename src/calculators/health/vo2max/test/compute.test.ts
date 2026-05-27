import { describe, it, expect } from "vitest";
import { runNumericTests } from "@/test-utils";
import calculator from "../definition";

// References:
//  - Cooper KH (1968). JAMA 203(3):201–4. Cooper 12-min run formula.
//  - ACSM's Guidelines for Exercise Testing and Prescription, 11th ed. (2021).

describe("vo2max compute — Cooper 12-min run", () => {
  it("classic example: 2400 m in 12 min → ~42.4 ml/kg/min", () => {
    // (2400 − 504.9) / 44.73 = 42.36
    runNumericTests(calculator, [
      {
        inputs: { testType: "cooper-12min", distance: 2400, age: 30, sex: "male" },
        expected: { vo2maxMlKgMin: 42.4 },
        tolerance: 0.2,
        description: "Cooper formula reference case",
      },
    ]);
  });

  it("elite runner: 3500 m in 12 min → ~67.0 ml/kg/min", () => {
    // (3500 − 504.9) / 44.73 = 66.957 → 67.0 (1 d.p.)
    runNumericTests(calculator, [
      {
        inputs: { testType: "cooper-12min", distance: 3500, age: 25, sex: "male" },
        expected: { vo2maxMlKgMin: 67.0 },
        tolerance: 0.2,
        description: "Elite athlete — Cooper 12 min",
      },
    ]);
  });

  it("sedentary: 1500 m in 12 min → ~22.2 ml/kg/min", () => {
    // (1500 − 504.9) / 44.73 = 22.24
    runNumericTests(calculator, [
      {
        inputs: { testType: "cooper-12min", distance: 1500, age: 50, sex: "female" },
        expected: { vo2maxMlKgMin: 22.2 },
        tolerance: 0.2,
        description: "Sedentary individual",
      },
    ]);
  });
});

describe("vo2max compute — 1.5-mile run", () => {
  it("12 min for 1.5 mi → ~43.75 ml/kg/min", () => {
    // 483 / 12 + 3.5 = 40.25 + 3.5 = 43.75
    runNumericTests(calculator, [
      {
        inputs: { testType: "mile-and-half", timeMinutes: 12, age: 30, sex: "male" },
        expected: { vo2maxMlKgMin: 43.75 },
        tolerance: 0.2,
        description: "1.5-mile run, 12 min",
      },
    ]);
  });

  it("fast 1.5 mi (9 min) → ~57.2 ml/kg/min", () => {
    // 483 / 9 + 3.5 = 53.67 + 3.5 = 57.17
    runNumericTests(calculator, [
      {
        inputs: { testType: "mile-and-half", timeMinutes: 9, age: 25, sex: "male" },
        expected: { vo2maxMlKgMin: 57.2 },
        tolerance: 0.2,
        description: "Fast 1.5-mile run",
      },
    ]);
  });

  it("slow 1.5 mi (18 min) → ~30.3 ml/kg/min", () => {
    // 483 / 18 + 3.5 = 26.83 + 3.5 = 30.33
    runNumericTests(calculator, [
      {
        inputs: { testType: "mile-and-half", timeMinutes: 18, age: 55, sex: "female" },
        expected: { vo2maxMlKgMin: 30.3 },
        tolerance: 0.2,
        description: "Slow 1.5-mile run",
      },
    ]);
  });
});

describe("vo2max compute — fitness category classification", () => {
  const parse = (inputs: Record<string, unknown>) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("classifies elite male 25y as superior", () => {
    const r = parse({
      testType: "cooper-12min",
      distance: 3500,
      age: 25,
      sex: "male",
    });
    expect(r.fitnessCategory).toBe("superior");
  });

  it("classifies very low VO2 female 50y as poor", () => {
    // 1000 m → (1000 − 504.9) / 44.73 ≈ 11.1, well below female 50–59 fair=22
    const r = parse({
      testType: "cooper-12min",
      distance: 1000,
      age: 50,
      sex: "female",
    });
    expect(r.fitnessCategory).toBe("poor");
  });

  it("classifies typical 30y male (VO2≈42) in good range", () => {
    const r = parse({
      testType: "cooper-12min",
      distance: 2400,
      age: 30,
      sex: "male",
    });
    // 42.4 → in male 30–39 band: fair=33, good=40, excellent=46, superior=53 → "good"
    expect(r.fitnessCategory).toBe("good");
  });
});
