import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("overtime-pay compute", () => {
  // $20/h, 40 reg + 5 OT at 1.5×: reg 800, OT 5×30=150, total 950.
  runNumericTests(calc, [
    {
      inputs: { hourlyRate: 20, regularHours: 40, overtimeHours: 5, overtimeMultiplier: 1.5 },
      expected: { regularPay: 800, overtimePay: 150, totalPay: 950, overtimeRate: 30 },
      tolerance: 0.01,
    },
    { inputs: { hourlyRate: 25, regularHours: 38, overtimeHours: 0, overtimeMultiplier: 2 }, expected: { totalPay: 950, overtimePay: 0 }, tolerance: 0.01 },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { hourlyRate: 18.5, regularHours: 40, overtimeHours: 10, overtimeMultiplier: 1.5 }));
});

describe("overtime-pay i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("overtime-pay definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "overtime-pay", category: "finance" }));
});
