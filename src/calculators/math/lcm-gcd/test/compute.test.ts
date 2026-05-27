import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("lcm-gcd compute", () => {
  it("computes GCD and LCM for 12 and 18 correctly", () => {
    // Reference: GCD(12,18)=6 using Euclidean: 18=12*1+6, 12=6*2+0 → GCD=6
    // LCM(12,18) = (12*18)/6 = 36
    const result = compute({ a: 12, b: 18 });
    expect(result.gcdValue).toBe(6);
    expect(result.lcmValue).toBe(36);
    expect(result.product).toBe(12 * 18);
  });

  it("computes GCD and LCM for coprime numbers", () => {
    // Reference: GCD(7,11)=1 (coprime), LCM(7,11)=77
    const result = compute({ a: 7, b: 11 });
    expect(result.gcdValue).toBe(1);
    expect(result.lcmValue).toBe(77);
  });

  it("computes GCD and LCM where one divides the other", () => {
    // Reference: GCD(5,20)=5, LCM(5,20)=20
    const result = compute({ a: 5, b: 20 });
    expect(result.gcdValue).toBe(5);
    expect(result.lcmValue).toBe(20);
  });

  it("verifies GCD*LCM = a*b identity", () => {
    // Verify: GCD(a,b) * LCM(a,b) = a * b
    const result = compute({ a: 12, b: 18 });
    expect(result.gcdValue * result.lcmValue).toBe(result.product);
  });

  it("tracks Euclidean algorithm steps correctly", () => {
    // Reference: GCD(60,36) via Euclidean:
    // 60 = 36*1 + 24
    // 36 = 24*1 + 12
    // 24 = 12*2 + 0
    // Final GCD = 12
    const result = compute({ a: 60, b: 36 });
    expect(result.gcdValue).toBe(12);
    expect(result.gcdSteps.length).toBe(3);
    expect(result.gcdSteps[0]).toEqual({
      step: 1,
      a: 60,
      b: 36,
      remainder: 24,
    });
  });
});
