import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("date-add compute", () => {
  it("adds days", () => {
    const r = compute({ startDate: "2024-01-01", operation: "add", years: 0, months: 0, weeks: 0, days: 30 });
    expect(r.resultDate).toBe("2024-01-31");
    expect(r.totalDaysOffset).toBe(30);
  });

  it("subtracts days", () => {
    const r = compute({ startDate: "2024-01-31", operation: "subtract", years: 0, months: 0, weeks: 0, days: 30 });
    expect(r.resultDate).toBe("2024-01-01");
    expect(r.totalDaysOffset).toBe(-30);
  });

  it("adds months with end-of-month clamping", () => {
    const r = compute({ startDate: "2024-01-31", operation: "add", years: 0, months: 1, weeks: 0, days: 0 });
    expect(r.resultDate).toBe("2024-02-29"); // 2024 leap year
  });

  it("combines years, months, weeks and days", () => {
    const r = compute({ startDate: "2020-01-01", operation: "add", years: 1, months: 2, weeks: 1, days: 3 });
    // +1y2m → 2021-03-01, +10 days → 2021-03-11
    expect(r.resultDate).toBe("2021-03-11");
  });

  it("is deterministic", () => {
    const a = compute({ startDate: "2024-06-15", operation: "add", years: 0, months: 6, weeks: 0, days: 0 });
    const b = compute({ startDate: "2024-06-15", operation: "add", years: 0, months: 6, weeks: 0, days: 0 });
    expect(a).toEqual(b);
  });
});

describe("date-add i18n", () => {
  it("is complete across all locales", () => {
    assertI18nComplete(calc);
  });
});

describe("date-add definition", () => {
  it("satisfies the CalculatorDefinition contract", () => {
    assertDefinitionShape(calc, { slug: "date-add", category: "datetime" });
  });
});
