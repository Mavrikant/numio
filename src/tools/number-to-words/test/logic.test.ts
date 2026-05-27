import { describe, it, expect } from "vitest";
import { numberToWords } from "../logic";

describe("numberToWords", () => {
  it("handles small numbers", () => {
    expect(numberToWords(0)).toBe("zero");
    expect(numberToWords(7)).toBe("seven");
    expect(numberToWords(15)).toBe("fifteen");
    expect(numberToWords(42)).toBe("forty-two");
  });
  it("handles hundreds and scales", () => {
    expect(numberToWords(100)).toBe("one hundred");
    expect(numberToWords(1234)).toBe("one thousand two hundred thirty-four");
    expect(numberToWords(1000000)).toBe("one million");
    expect(numberToWords("1234567")).toBe("one million two hundred thirty-four thousand five hundred sixty-seven");
  });
  it("handles negatives", () => {
    expect(numberToWords(-5)).toBe("negative five");
  });
  it("throws on non-integers", () => {
    expect(() => numberToWords("3.14")).toThrow();
    expect(() => numberToWords("abc")).toThrow();
  });
});
