import { describe, it, expect } from "vitest";
import { validateTcKimlik } from "../logic";

describe("tc-kimlik-validator", () => {
  it("accepts a number that satisfies both checksums", () => {
    // 1,2,3,4,5,6,7,8,9 → odd sum 25, even sum 20, digit10 = (25*7-20) mod 10 = 5,
    // sum of first 10 = 50, digit11 = 50 mod 10 = 0 → 12345678950
    expect(validateTcKimlik("12345678950").valid).toBe(true);
  });
  it("rejects a wrong 11th digit", () => {
    expect(validateTcKimlik("12345678951").error).toMatch(/digit 11/);
  });
  it("rejects a wrong 10th digit", () => {
    expect(validateTcKimlik("12345678940").error).toMatch(/digit 10/);
  });
  it("rejects a leading zero", () => {
    expect(validateTcKimlik("02345678950").error).toMatch(/first digit/i);
  });
  it("rejects non-11-digit input", () => {
    expect(validateTcKimlik("1234").error).toMatch(/11 digits/);
    expect(validateTcKimlik("1234567895a").error).toMatch(/11 digits/);
  });
  it("returns no error for empty input", () => {
    const r = validateTcKimlik("");
    expect(r.valid).toBe(false);
    expect(r.error).toBeNull();
  });
  it("strips whitespace", () => {
    expect(validateTcKimlik(" 1234 5678 950 ").valid).toBe(true);
  });
});
