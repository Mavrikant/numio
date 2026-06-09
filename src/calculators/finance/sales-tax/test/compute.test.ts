import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("sales-tax compute", () => {
  it("matches reference figures", () => {
    runNumericTests(definition, [
      // Add 8.25% to $100 → $8.25 tax, $108.25 total.
      // Reference: Investopedia sales tax worked example.
      {
        inputs: { mode: "add", amount: 100, taxRate: 8.25 },
        expected: { preTaxAmount: 100, taxAmount: 8.25, totalAmount: 108.25 },
      },
      // Remove 8.25% from a $108.25 total → $100 pre-tax, $8.25 tax.
      {
        inputs: { mode: "remove", amount: 108.25, taxRate: 8.25 },
        expected: { preTaxAmount: 100, taxAmount: 8.25, totalAmount: 108.25 },
      },
      // Zero rate is a pass-through: total equals the amount, no tax.
      {
        inputs: { mode: "add", amount: 49.99, taxRate: 0 },
        expected: { preTaxAmount: 49.99, taxAmount: 0, totalAmount: 49.99 },
      },
    ]);
  });
});
