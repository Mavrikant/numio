import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("prime-factorization edge cases", () => {
  it("handles zero input (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ number: 0 });
    expect(result.success).toBe(false);
  });

  it("handles 1 input (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ number: 1 });
    expect(result.success).toBe(false);
  });

  it("handles negative input (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ number: -5 });
    expect(result.success).toBe(false);
  });

  it("handles floating-point input (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ number: 2.5 });
    expect(result.success).toBe(false);
  });

  it("handles number at upper bound (1,000,000)", () => {
    const result = inputSchema.safeParse({ number: 1_000_000 });
    expect(result.success).toBe(true);
    if (result.success) {
      const computed = compute(result.data);
      expect(computed.factors.length).toBeGreaterThan(0);
      // 1,000,000 = 2^6 × 5^6
      expect(computed.factors).toContainEqual({ prime: 2, exponent: 6 });
      expect(computed.factors).toContainEqual({ prime: 5, exponent: 6 });
    }
  });

  it("handles number exceeding upper bound (should fail schema)", () => {
    const result = inputSchema.safeParse({ number: 1_000_001 });
    expect(result.success).toBe(false);
  });

  it("handles prime numbers correctly", () => {
    const computed = compute({ number: 13 });
    expect(computed.factors).toEqual([{ prime: 13, exponent: 1 }]);
    expect(computed.notation).toBe("13");
  });

  it("handles perfect powers", () => {
    // 8 = 2³
    const computed = compute({ number: 8 });
    expect(computed.factors).toEqual([{ prime: 2, exponent: 3 }]);
    expect(computed.notation).toBe("2³");
  });

  it("handles large prime numbers", () => {
    // 999983 is a large prime
    const computed = compute({ number: 999983 });
    expect(computed.factors).toEqual([{ prime: 999983, exponent: 1 }]);
  });
});
