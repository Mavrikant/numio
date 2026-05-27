import { describe, it, expect } from "vitest";
import { checkPalindrome } from "../logic";

describe("checkPalindrome", () => {
  it("detects simple palindromes", () => {
    expect(checkPalindrome("racecar", true, true).isPalindrome).toBe(true);
    expect(checkPalindrome("hello", true, true).isPalindrome).toBe(false);
  });
  it("ignores case and punctuation when enabled", () => {
    expect(checkPalindrome("A man, a plan, a canal: Panama", true, true).isPalindrome).toBe(true);
  });
  it("respects case when not ignoring", () => {
    expect(checkPalindrome("Aa", false, true).isPalindrome).toBe(false);
    expect(checkPalindrome("Aa", true, true).isPalindrome).toBe(true);
  });
  it("empty string is not a palindrome", () => {
    expect(checkPalindrome("", true, true).isPalindrome).toBe(false);
  });
});
