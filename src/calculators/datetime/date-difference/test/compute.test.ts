import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("date-difference compute", () => {
  it("counts total days", () => {
    const r = compute({ startDate: "2024-01-01", endDate: "2024-01-31" });
    expect(r.totalDays).toBe(30);
    expect(r.weeks).toBe(4);
    expect(r.remainderDays).toBe(2);
  });

  it("is order-agnostic", () => {
    const a = compute({ startDate: "2024-03-01", endDate: "2024-01-01" });
    expect(a.totalDays).toBe(60); // Jan(31) + Feb(29) in 2024
  });

  it("gives a calendar breakdown", () => {
    const r = compute({ startDate: "2020-01-15", endDate: "2023-04-20" });
    expect(r.years).toBe(3);
    expect(r.months).toBe(3);
    expect(r.days).toBe(5);
  });

  it("counts business days excluding weekends", () => {
    // Mon 2024-01-01 → Mon 2024-01-08: gains 5 weekdays (Tue–Fri + next Mon).
    const r = compute({ startDate: "2024-01-01", endDate: "2024-01-08" });
    expect(r.businessDays).toBe(5);
  });

  it("is deterministic", () => {
    const a = compute({ startDate: "2024-01-01", endDate: "2024-12-31" });
    const b = compute({ startDate: "2024-01-01", endDate: "2024-12-31" });
    expect(a).toEqual(b);
  });
});

describe("date-difference i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("date-difference definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "date-difference", category: "datetime" });
  });
});
