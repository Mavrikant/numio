import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("GFR compute", () => {
  it("calculates eGFR for a healthy adult male", () => {
    // Reference: 45-year-old male, creatinine 90 µmol/L, race=other
    // CKD-EPI 2021: should be around 95-100 mL/min/1.73m²
    const result = compute({
      creatinineUmolL: 90,
      ageYears: 45,
      sex: "male",
      race: "other",
    });
    expect(result.eGfr).toBeGreaterThan(90);
    expect(result.stage).toBe("stage1");
  });

  it("calculates eGFR for a female with mild decline", () => {
    // Reference: 60-year-old female, creatinine 120 µmol/L, race=other
    // Should show stage 2 (mildly decreased)
    const result = compute({
      creatinineUmolL: 120,
      ageYears: 60,
      sex: "female",
      race: "other",
    });
    expect(result.eGfr).toBeGreaterThan(30);
    expect(result.eGfr).toBeLessThan(90);
    expect(result.stage).toMatch(/stage2|stage3/);
  });

  it("correctly applies race adjustment for Black individuals", () => {
    // Same inputs except race
    const black = compute({
      creatinineUmolL: 100,
      ageYears: 50,
      sex: "male",
      race: "black",
    });
    const other = compute({
      creatinineUmolL: 100,
      ageYears: 50,
      sex: "male",
      race: "other",
    });
    // Black adjustment multiplier is 1.012, so Black should be slightly higher
    expect(black.eGfr).toBeGreaterThan(other.eGfr);
  });

  it("handles severe kidney disease (stage 4)", () => {
    // High creatinine indicates poor kidney function
    const result = compute({
      creatinineUmolL: 400,
      ageYears: 70,
      sex: "male",
      race: "other",
    });
    expect(result.eGfr).toBeLessThan(30);
    expect(result.stage).toBe("stage4");
  });

  it("handles kidney failure (stage 5)", () => {
    // Very high creatinine
    const result = compute({
      creatinineUmolL: 800,
      ageYears: 65,
      sex: "female",
      race: "other",
    });
    expect(result.eGfr).toBeLessThan(15);
    expect(result.stage).toBe("stage5");
  });
});
