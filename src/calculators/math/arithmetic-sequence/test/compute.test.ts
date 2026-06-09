import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("arithmetic-sequence compute", () => {
  it("matches reference values", () => {
    runNumericTests(definition, [
      // 2, 5, 8, … (a₁=2, d=3): a₁₀ = 2 + 9·3 = 29, S₁₀ = 10/2·(2+29) = 155.
      // Reference: MathWorld arithmetic series.
      {
        inputs: { firstTerm: 2, commonDifference: 3, numberOfTerms: 10 },
        expected: { nthTerm: 29, sum: 155 },
      },
      // 1 + 2 + … + 100 (a₁=1, d=1, n=100): a₁₀₀ = 100, S = 5050 (Gauss).
      {
        inputs: { firstTerm: 1, commonDifference: 1, numberOfTerms: 100 },
        expected: { nthTerm: 100, sum: 5050 },
      },
      // Decreasing sequence (a₁=10, d=-2, n=5): a₅ = 2, S = 5/2·(10+2) = 30.
      {
        inputs: { firstTerm: 10, commonDifference: -2, numberOfTerms: 5 },
        expected: { nthTerm: 2, sum: 30 },
      },
    ]);
  });
});
