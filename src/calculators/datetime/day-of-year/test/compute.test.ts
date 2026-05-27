import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("day-of-year compute", () => {
  it("computes ordinal day and remainder (leap year)", () => {
    expect(compute({ date: "2024-01-01" })).toMatchObject({ dayOfYear: 1, daysInYear: 366, daysRemaining: 365 });
    expect(compute({ date: "2024-12-31" })).toMatchObject({ dayOfYear: 366, daysRemaining: 0 });
  });
  it("uses 365 days in a common year", () => {
    expect(compute({ date: "2023-12-31" }).daysInYear).toBe(365);
  });
  it("computes percent elapsed", () => {
    expect(compute({ date: "2023-12-31" }).percentElapsed).toBeCloseTo(100, 5);
  });
});

describe("day-of-year i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("day-of-year definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "day-of-year", category: "datetime" }));
});
