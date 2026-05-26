import { describe, it, expect } from "vitest";
import calculator from "../definition";

describe("Blood Pressure compute — category classification", () => {
  const parse = (inputs: { systolic: number; diastolic: number }) =>
    calculator.compute(calculator.inputSchema.parse(inputs));

  it("Normal: systolic < 120 AND diastolic < 80", () => {
    const result = parse({ systolic: 110, diastolic: 70 });
    expect(result.category).toBe("normal");
  });

  it("Normal boundary: 119/79", () => {
    const result = parse({ systolic: 119, diastolic: 79 });
    expect(result.category).toBe("normal");
  });

  it("Elevated: systolic 120-129 AND diastolic < 80", () => {
    const result = parse({ systolic: 125, diastolic: 75 });
    expect(result.category).toBe("elevated");
  });

  it("Elevated boundary: 120/79", () => {
    const result = parse({ systolic: 120, diastolic: 79 });
    expect(result.category).toBe("elevated");
  });

  it("Stage 1: systolic 130-139", () => {
    const result = parse({ systolic: 135, diastolic: 75 });
    expect(result.category).toBe("stage1");
  });

  it("Stage 1: diastolic 80-89", () => {
    const result = parse({ systolic: 115, diastolic: 85 });
    expect(result.category).toBe("stage1");
  });

  it("Stage 1: diastolic 80-89 takes precedence over elevated systolic", () => {
    // systolic 125 would be 'elevated' but diastolic 82 is 'stage1'
    const result = parse({ systolic: 125, diastolic: 82 });
    expect(result.category).toBe("stage1");
  });

  it("Stage 2: systolic >= 140", () => {
    const result = parse({ systolic: 145, diastolic: 70 });
    expect(result.category).toBe("stage2");
  });

  it("Stage 2: diastolic >= 90", () => {
    const result = parse({ systolic: 115, diastolic: 95 });
    expect(result.category).toBe("stage2");
  });

  it("Crisis: systolic > 180", () => {
    const result = parse({ systolic: 185, diastolic: 100 });
    expect(result.category).toBe("crisis");
  });

  it("Crisis: diastolic > 120", () => {
    const result = parse({ systolic: 150, diastolic: 125 });
    expect(result.category).toBe("crisis");
  });

  it("Crisis boundary: 181/80", () => {
    const result = parse({ systolic: 181, diastolic: 80 });
    expect(result.category).toBe("crisis");
  });

  it("returns systolicCategory and diastolicCategory separately", () => {
    const result = parse({ systolic: 150, diastolic: 70 });
    expect(result.systolicCategory).toBe("stage2");
    expect(result.diastolicCategory).toBe("normal");
    expect(result.category).toBe("stage2");
  });

  it("recommendation is defined for all categories", () => {
    const result = parse({ systolic: 110, diastolic: 70 });
    expect(typeof result.recommendation).toBe("string");
    expect(result.recommendation.length).toBeGreaterThan(0);
  });
});
