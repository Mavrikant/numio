import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("bac edge cases", () => {
  it("clamps BAC to 0 when fully metabolized", () => {
    const result = compute({ drinks: 1, weightKg: 80, sex: "male", hoursElapsed: 10 });
    expect(result.bac).toBe(0);
    expect(result.hoursUntilSober).toBe(0);
    expect(result.category).toBe("sober");
  });

  it("dangerous category at BAC >= 0.15", () => {
    const result = compute({ drinks: 10, weightKg: 60, sex: "female", hoursElapsed: 0 });
    expect(result.bac).toBeGreaterThanOrEqual(0.15);
    expect(result.isDangerous).toBe(true);
    expect(result.isLegal).toBe(false);
    expect(result.category).toBe("dangerous");
  });

  it("minimal category for very low BAC", () => {
    const result = compute({ drinks: 1, weightKg: 120, sex: "male", hoursElapsed: 0 });
    // BAC = (1*14)/(120*0.68*1000)*100 = 1400/81600 * 100 = 0.01715... → 0.017
    expect(result.bac).toBeGreaterThan(0.01);
    expect(result.bac).toBeLessThan(0.03);
    expect(result.category).toBe("minimal");
  });

  it("isLegal false when BAC >= 0.08", () => {
    const result = compute({ drinks: 4, weightKg: 55, sex: "female", hoursElapsed: 0 });
    expect(result.bac).toBeGreaterThanOrEqual(0.08);
    expect(result.isLegal).toBe(false);
  });

  it("hoursUntilSober is 0 when already sober", () => {
    const result = compute({ drinks: 0, weightKg: 70, sex: "male", hoursElapsed: 0 });
    expect(result.hoursUntilSober).toBe(0);
  });

  it("female has higher BAC than male at same weight and drinks", () => {
    const male = compute({ drinks: 3, weightKg: 70, sex: "male", hoursElapsed: 0 });
    const female = compute({ drinks: 3, weightKg: 70, sex: "female", hoursElapsed: 0 });
    expect(female.bac).toBeGreaterThan(male.bac);
  });
});
