import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("age compute", () => {
  it("computes exact calendar age", () => {
    const r = compute({ birthDate: "1990-06-15", asOfDate: "2023-06-15" });
    expect(r.ageYears).toBe(33);
    expect(r.ageMonths).toBe(0);
    expect(r.ageDays).toBe(0);
    expect(r.daysToNextBirthday).toBe(0); // birthday is today
  });

  it("handles partial months and days with borrow", () => {
    // 2000-01-31 → 2000-03-01: 1 month and 1 day (Feb has 29 days in 2000).
    const r = compute({ birthDate: "2000-01-31", asOfDate: "2000-03-01" });
    expect(r.ageYears).toBe(0);
    expect(r.ageMonths).toBe(1);
    expect(r.ageDays).toBe(1);
  });

  it("computes totals", () => {
    const r = compute({ birthDate: "2020-01-01", asOfDate: "2021-01-01" });
    expect(r.totalDays).toBe(366); // 2020 is a leap year
    expect(r.totalWeeks).toBe(52);
    expect(r.totalMonths).toBe(12);
  });

  it("finds the next birthday and clamps Feb 29", () => {
    const r = compute({ birthDate: "2000-02-29", asOfDate: "2023-03-01" });
    expect(r.nextBirthday).toBe("2024-02-29"); // 2024 is a leap year
    const r2 = compute({ birthDate: "2000-02-29", asOfDate: "2023-01-01" });
    expect(r2.nextBirthday).toBe("2023-02-28"); // clamped in common year
  });

  it("is deterministic", () => {
    const a = compute({ birthDate: "1985-12-25", asOfDate: "2024-05-27" });
    const b = compute({ birthDate: "1985-12-25", asOfDate: "2024-05-27" });
    expect(a).toEqual(b);
  });
});

describe("age i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("age definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "age", category: "datetime" });
  });
});
