import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Heart Rate compute — simple formula", () => {
  const parse = (inputs: { age: number; restingHeartRate: number; formula: "simple" | "karvonen" }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("age 30 → maxHR 190", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "simple" });
    expect(result.maxHR).toBe(190);
  });

  it("age 40 → maxHR 180", () => {
    const result = parse({ age: 40, restingHeartRate: 70, formula: "simple" });
    expect(result.maxHR).toBe(180);
  });

  it("simple: age 30 zone2 = 60-70% of 190 = 114-133", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "simple" });
    expect(result.zone2Min).toBe(114);
    expect(result.zone2Max).toBe(133);
  });

  it("simple: age 30 zone1 = 50-60% of 190 = 95-114", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "simple" });
    expect(result.zone1Min).toBe(95);
    expect(result.zone1Max).toBe(114);
  });

  it("simple: age 30 zone5 = 90-100% of 190 = 171-190", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "simple" });
    expect(result.zone5Min).toBe(171);
    expect(result.zone5Max).toBe(190);
  });
});

describe("Heart Rate compute — Karvonen formula", () => {
  const parse = (inputs: { age: number; restingHeartRate: number; formula: "simple" | "karvonen" }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("age 30, resting 60 → HRR = 130", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    expect(result.hrr).toBe(130);
  });

  it("karvonen: age 30, resting 60 → zone3 = 130×0.7+60=151 to 130×0.8+60=164", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    expect(result.zone3Min).toBeCloseTo(151, 0);
    expect(result.zone3Max).toBeCloseTo(164, 0);
  });

  it("karvonen: age 30, resting 60 → zone1 = 130×0.5+60=125 to 130×0.6+60=138", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    expect(result.zone1Min).toBe(125);
    expect(result.zone1Max).toBe(138);
  });

  it("karvonen: age 30, resting 60 → zone5 = 130×0.9+60=177 to 130×1.0+60=190", () => {
    const result = parse({ age: 30, restingHeartRate: 60, formula: "karvonen" });
    expect(result.zone5Min).toBe(177);
    expect(result.zone5Max).toBe(190);
  });

  it("higher resting HR gives higher Karvonen zone values (less range)", () => {
    const fit = parse({ age: 30, restingHeartRate: 50, formula: "karvonen" });
    const unfit = parse({ age: 30, restingHeartRate: 80, formula: "karvonen" });
    // Unfit person has higher resting HR → smaller HRR → zones start higher but cover less range
    expect(unfit.hrr).toBeLessThan(fit.hrr);
  });
});
