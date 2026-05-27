import { describe, it } from "vitest";
import definition from "../definition";
import { runNumericTests } from "@/test-utils";

describe("prime-factorization compute", () => {
  it("runs numeric tests successfully", () => {
    runNumericTests(definition, [
      {
        // Reference: 60 = 2² × 3 × 5 (trial division up to √60≈7.75)
        description: "factorize 60",
        inputs: { number: 60 },
        expected: {
          factors: [
            { prime: 2, exponent: 2 },
            { prime: 3, exponent: 1 },
            { prime: 5, exponent: 1 },
          ],
          notation: "2² × 3 × 5",
        },
      },
      {
        // Reference: 120 = 2³ × 3 × 5
        description: "factorize 120",
        inputs: { number: 120 },
        expected: {
          factors: [
            { prime: 2, exponent: 3 },
            { prime: 3, exponent: 1 },
            { prime: 5, exponent: 1 },
          ],
          notation: "2³ × 3 × 5",
        },
      },
      {
        // Reference: 97 is prime
        description: "factorize prime 97",
        inputs: { number: 97 },
        expected: {
          factors: [{ prime: 97, exponent: 1 }],
          notation: "97",
        },
      },
      {
        // Reference: 2 is prime (smallest prime)
        description: "factorize 2",
        inputs: { number: 2 },
        expected: {
          factors: [{ prime: 2, exponent: 1 }],
          notation: "2",
        },
      },
      {
        // Reference: 1024 = 2^10
        description: "factorize 1024",
        inputs: { number: 1024 },
        expected: {
          factors: [{ prime: 2, exponent: 10 }],
          notation: "2¹⁰",
        },
      },
    ]);
  });
});
