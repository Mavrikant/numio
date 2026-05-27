import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("GFR edge cases", () => {
  it("handles minimum creatinine", () => {
    const result = compute({
      creatinineUmolL: 1,
      ageYears: 30,
      sex: "male",
      race: "other",
    });
    expect(result.eGfr).toBeGreaterThan(150);
    expect(result.stage).toBe("stage1");
  });

  it("handles very high creatinine", () => {
    const result = compute({
      creatinineUmolL: 5000,
      ageYears: 80,
      sex: "female",
      race: "other",
    });
    expect(result.eGfr).toBeLessThan(5);
    expect(result.stage).toBe("stage5");
  });

  it("handles minimum age (18)", () => {
    const result = compute({
      creatinineUmolL: 85,
      ageYears: 18,
      sex: "male",
      race: "other",
    });
    expect(result.eGfr).toBeGreaterThan(100);
  });

  it("handles maximum age (120)", () => {
    const result = compute({
      creatinineUmolL: 85,
      ageYears: 120,
      sex: "female",
      race: "other",
    });
    // Very old age reduces eGFR
    expect(result.eGfr).toBeGreaterThan(0);
  });

  it("rejects negative creatinine", () => {
    const validation = inputSchema.safeParse({
      creatinineUmolL: -50,
      ageYears: 45,
      sex: "male",
      race: "other",
    });
    expect(validation.success).toBe(false);
  });

  it("rejects age below 18", () => {
    const validation = inputSchema.safeParse({
      creatinineUmolL: 90,
      ageYears: 17,
      sex: "male",
      race: "other",
    });
    expect(validation.success).toBe(false);
  });

  it("rejects age above 120", () => {
    const validation = inputSchema.safeParse({
      creatinineUmolL: 90,
      ageYears: 121,
      sex: "male",
      race: "other",
    });
    expect(validation.success).toBe(false);
  });

  it("rejects invalid sex", () => {
    const validation = inputSchema.safeParse({
      creatinineUmolL: 90,
      ageYears: 45,
      sex: "other",
      race: "other",
    });
    expect(validation.success).toBe(false);
  });

  it("rejects invalid race", () => {
    const validation = inputSchema.safeParse({
      creatinineUmolL: 90,
      ageYears: 45,
      sex: "male",
      race: "unknown",
    });
    expect(validation.success).toBe(false);
  });

  it("handles floating-point precision", () => {
    // 0.1 + 0.2 style edge case
    const result = compute({
      creatinineUmolL: 0.1,
      ageYears: 25,
      sex: "male",
      race: "other",
    });
    expect(result.eGfr).toBeGreaterThan(0);
    expect(Number.isFinite(result.eGfr)).toBe(true);
  });
});
