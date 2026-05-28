import { describe, it, expect } from "vitest";
import { checkStrength } from "../logic";

describe("password-strength-checker", () => {
  it("rates an empty password as 0", () => {
    expect(checkStrength("").score).toBe(0);
  });
  it("rates known common passwords as very weak", () => {
    expect(checkStrength("password").score).toBe(0);
    expect(checkStrength("123456").score).toBe(0);
  });
  it("rates a long random password as very strong", () => {
    expect(checkStrength("9h2K-fA?7zQ!pX4mWvB8u").score).toBeGreaterThanOrEqual(3);
  });
  it("suggests adding character classes for purely lowercase", () => {
    const r = checkStrength("abcdefgh");
    expect(r.suggestions.some((s) => /digit|uppercase|symbol/i.test(s))).toBe(true);
  });
  it("rounds entropy to one decimal place", () => {
    const r = checkStrength("hello");
    expect(Number.isInteger(r.entropy * 10)).toBe(true);
  });
  it("penalises sequential digits", () => {
    const r = checkStrength("Password123");
    expect(r.suggestions.some((s) => /sequence/i.test(s))).toBe(true);
  });
});
