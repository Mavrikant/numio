import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("week-number compute", () => {
  it("computes ISO week numbers", () => {
    expect(compute({ date: "2024-01-01" })).toMatchObject({ week: 1, weekYear: 2024, dayOfYear: 1 });
    expect(compute({ date: "2024-12-31" }).week).toBe(1); // belongs to ISO week 1 of 2025
    expect(compute({ date: "2024-12-31" }).weekYear).toBe(2025);
  });
  it("handles a year that starts mid-week (2021-01-01 = week 53 of 2020)", () => {
    expect(compute({ date: "2021-01-01" })).toMatchObject({ week: 53, weekYear: 2020 });
  });
  it("computes day of year", () => {
    expect(compute({ date: "2024-03-01" }).dayOfYear).toBe(61); // leap year: 31+29+1
  });
});

describe("week-number i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("week-number definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "week-number", category: "datetime" }));
});
