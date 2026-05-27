import { describe, it, expect } from "vitest";
import definition from "../definition";
import { compute } from "../compute";

describe("prime-factorization compute", () => {
  it("factorizes 60 correctly", () => {
    // Reference: 60 = 2² × 3 × 5 (trial division up to √60≈7.75)
    const result = compute({ number: 60 });
    expect(result.factors).toEqual([
      { prime: 2, exponent: 2 },
      { prime: 3, exponent: 1 },
      { prime: 5, exponent: 1 },
    ]);
    expect(result.notation).toBe("2² × 3 × 5");
  });

  it("factorizes 120 correctly", () => {
    // Reference: 120 = 2³ × 3 × 5
    const result = compute({ number: 120 });
    expect(result.factors).toEqual([
      { prime: 2, exponent: 3 },
      { prime: 3, exponent: 1 },
      { prime: 5, exponent: 1 },
    ]);
    expect(result.notation).toBe("2³ × 3 × 5");
  });

  it("factorizes prime 97 correctly", () => {
    // Reference: 97 is prime
    const result = compute({ number: 97 });
    expect(result.factors).toEqual([{ prime: 97, exponent: 1 }]);
    expect(result.notation).toBe("97");
  });

  it("factorizes 2 correctly", () => {
    // Reference: 2 is prime (smallest prime)
    const result = compute({ number: 2 });
    expect(result.factors).toEqual([{ prime: 2, exponent: 1 }]);
    expect(result.notation).toBe("2");
  });

  it("factorizes 1024 correctly", () => {
    // Reference: 1024 = 2^10
    const result = compute({ number: 1024 });
    expect(result.factors).toEqual([{ prime: 2, exponent: 10 }]);
    expect(result.notation).toBe("2¹⁰");
  });
});
