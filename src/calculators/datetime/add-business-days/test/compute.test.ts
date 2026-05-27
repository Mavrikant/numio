import { describe, it, expect } from "vitest";
import calc from "../definition";
import { compute } from "../compute";
import { assertI18nComplete, assertDefinitionShape } from "@/test-utils";

describe("add-business-days compute", () => {
  it("adds business days skipping weekends", () => {
    // Mon 2024-01-01 + 5 business days = Mon 2024-01-08 (7 calendar days).
    const r = compute({ startDate: "2024-01-01", businessDays: 5 });
    expect(r.resultDate).toBe("2024-01-08");
    expect(r.calendarDays).toBe(7);
    expect(r.weekendDays).toBe(2);
  });
  it("subtracts business days backwards", () => {
    // Mon 2024-01-08 − 5 business days = Mon 2024-01-01.
    expect(compute({ startDate: "2024-01-08", businessDays: -5 }).resultDate).toBe("2024-01-01");
  });
  it("crosses a weekend within the week", () => {
    // Fri 2024-01-05 + 1 business day = Mon 2024-01-08.
    expect(compute({ startDate: "2024-01-05", businessDays: 1 }).resultDate).toBe("2024-01-08");
  });
});

describe("add-business-days i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("add-business-days definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "add-business-days", category: "datetime" }));
});
