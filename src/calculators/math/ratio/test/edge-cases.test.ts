import { describe, it, expect } from "vitest";
import { compute } from "../compute";

describe("Ratio — edge cases", () => {
  it("identical numbers: 5:5 → 1:1", () => {
    const result = compute({ numerator: 5, denominator: 5 });
    expect(result.simplifiedNumerator).toBe(1);
    expect(result.simplifiedDenominator).toBe(1);
    expect(result.decimal).toBe(1);
  });

  it("large GCD: 1000:1500 → 2:3", () => {
    // GCD(1000, 1500) = 500
    const result = compute({ numerator: 1000, denominator: 1500 });
    expect(result.simplifiedNumerator).toBe(2);
    expect(result.simplifiedDenominator).toBe(3);
  });

  it("coprime numbers: 13:17 → 13:17", () => {
    // GCD(13, 17) = 1, both prime
    const result = compute({ numerator: 13, denominator: 17 });
    expect(result.simplifiedNumerator).toBe(13);
    expect(result.simplifiedDenominator).toBe(17);
  });

  it("one:x form with decimal", () => {
    const result = compute({ numerator: 2, denominator: 5 });
    expect(result.oneToXForm).toBe("1:2.5");
  });

  it("x:one form with decimal", () => {
    const result = compute({ numerator: 5, denominator: 2 });
    expect(result.xToOneForm).toBe("2.5:1");
  });

  it("boundary: 1:1 ratio", () => {
    const result = compute({ numerator: 1, denominator: 1 });
    expect(result.decimal).toBe(1);
    expect(result.percentValue).toBe(100);
  });

  it("large numbers: 999999:1000000", () => {
    // GCD(999999, 1000000) = 1
    const result = compute({ numerator: 999999, denominator: 1000000 });
    expect(result.simplifiedNumerator).toBe(999999);
    expect(result.simplifiedDenominator).toBe(1000000);
    expect(result.decimal).toBeCloseTo(0.999999, 5);
  });

  it("decimal precision: 1:3 → 33.33%", () => {
    const result = compute({ numerator: 1, denominator: 3 });
    expect(result.percentValue).toBeCloseTo(33.33, 1);
  });
});
