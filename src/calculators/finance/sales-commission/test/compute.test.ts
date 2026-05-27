import { describe, it } from "vitest";
import calc from "../definition";
import { runNumericTests, assertI18nComplete, assertDefinitionShape, assertComputeIsPure } from "@/test-utils";

describe("sales-commission compute", () => {
  runNumericTests(calc, [
    {
      inputs: { saleAmount: 50000, commissionRate: 5, baseSalary: 0 },
      expected: { commission: 2500, totalPay: 2500, effectiveRate: 5 },
      tolerance: 0.01,
    },
    {
      inputs: { saleAmount: 50000, commissionRate: 5, baseSalary: 2000 },
      expected: { commission: 2500, totalPay: 4500, effectiveRate: 9 },
      tolerance: 0.01,
    },
  ]);
  it("is pure", () => assertComputeIsPure(calc, { saleAmount: 12000, commissionRate: 7.5, baseSalary: 1000 }));
});

describe("sales-commission i18n", () => {
  it("is complete", () => assertI18nComplete(calc));
});
describe("sales-commission definition", () => {
  it("is valid", () => assertDefinitionShape(calc, { slug: "sales-commission", category: "finance" }));
});
