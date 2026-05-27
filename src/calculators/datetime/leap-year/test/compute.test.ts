import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("leap-year compute", () => {
  it("identifies leap years", () => {
    expect(compute({ year: 2024 })).toMatchObject({ daysInYear: 366, daysInFebruary: 29 });
    expect(compute({ year: 2000 }).daysInYear).toBe(366);
  });
  it("identifies common years (incl. century non-leap)", () => {
    expect(compute({ year: 2023 })).toMatchObject({ daysInYear: 365, daysInFebruary: 28 });
    expect(compute({ year: 1900 }).daysInYear).toBe(365);
  });
  it("finds neighbouring leap years", () => {
    expect(compute({ year: 2023 })).toMatchObject({ nextLeapYear: 2024, previousLeapYear: 2020 });
    expect(compute({ year: 1900 }).nextLeapYear).toBe(1904);
  });
});

describe("leap-year i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("leap-year definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "leap-year", category: "datetime" }));
});
