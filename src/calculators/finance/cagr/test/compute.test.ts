import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("cagr compute", () => {
  it("matches reference figures", () => {
    runNumericTests(definition, [
      // $1,000 → $2,000 over 5 years: 2^(1/5) − 1 = 14.8698%.
      // Reference: Investopedia CAGR worked example.
      {
        inputs: { beginningValue: 1000, endingValue: 2000, years: 5 },
        expected: { cagr: 14.8698, totalReturn: 100, multiple: 2 },
        tolerance: { cagr: 0.001, totalReturn: 0.01, multiple: 0.0001 },
      },
      // No change: 0% CAGR, 0% total return, multiple of 1.
      {
        inputs: { beginningValue: 5000, endingValue: 5000, years: 3 },
        expected: { cagr: 0, totalReturn: 0, multiple: 1 },
      },
      // $100 → $400 over 2 years: 4^(1/2) − 1 = 100%.
      {
        inputs: { beginningValue: 100, endingValue: 400, years: 2 },
        expected: { cagr: 100, totalReturn: 300, multiple: 4 },
        tolerance: { cagr: 0.001, totalReturn: 0.01, multiple: 0.0001 },
      },
    ]);
  });
});
