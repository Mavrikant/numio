import { describe, it, expect } from "vitest";
import { compute, inputSchema } from "../compute";

describe("lcm-gcd edge cases", () => {
  it("handles zero (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ a: 0, b: 10 });
    expect(result.success).toBe(false);
  });

  it("handles negative numbers (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ a: -5, b: 10 });
    expect(result.success).toBe(false);
  });

  it("handles identical numbers", () => {
    // GCD(15, 15) = 15, LCM(15, 15) = 15
    const result = compute({ a: 15, b: 15 });
    expect(result.gcdValue).toBe(15);
    expect(result.lcmValue).toBe(15);
  });

  it("handles 1 as input", () => {
    // GCD(1, 100) = 1, LCM(1, 100) = 100
    const result = compute({ a: 1, b: 100 });
    expect(result.gcdValue).toBe(1);
    expect(result.lcmValue).toBe(100);
  });

  it("handles large numbers", () => {
    // GCD(1000000, 500000) = 500000, LCM = 1000000
    const result = compute({ a: 1_000_000, b: 500_000 });
    expect(result.gcdValue).toBe(500_000);
    expect(result.lcmValue).toBe(1_000_000);
  });

  it("handles numbers at upper bound", () => {
    const result = inputSchema.safeParse({ a: 1_000_000, b: 1_000_000 });
    expect(result.success).toBe(true);
    if (result.success) {
      const computed = compute(result.data);
      expect(computed.gcdValue).toBe(1_000_000);
    }
  });

  it("handles numbers exceeding upper bound (should fail schema)", () => {
    const result = inputSchema.safeParse({ a: 1_000_001, b: 100 });
    expect(result.success).toBe(false);
  });

  it("handles floating-point numbers (should be rejected by schema)", () => {
    const result = inputSchema.safeParse({ a: 2.5, b: 5 });
    expect(result.success).toBe(false);
  });
});
