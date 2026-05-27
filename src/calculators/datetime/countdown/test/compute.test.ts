import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("countdown compute", () => {
  it("counts days and weeks to a target", () => {
    const r = compute({ fromDate: "2024-01-01", targetDate: "2024-01-31" });
    expect(r.totalDays).toBe(30);
    expect(r.fullWeeks).toBe(4);
  });
  it("gives a Y/M/D breakdown", () => {
    const r = compute({ fromDate: "2024-01-01", targetDate: "2025-03-15" });
    expect(r).toMatchObject({ years: 1, months: 2, days: 14 });
  });
  it("counts business days", () => {
    expect(compute({ fromDate: "2024-01-01", targetDate: "2024-01-08" }).businessDays).toBe(5);
  });
});

describe("countdown i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("countdown definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "countdown", category: "datetime" }));
});
