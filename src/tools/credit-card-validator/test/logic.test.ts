import { describe, it, expect } from "vitest";
import { luhnValid, detectBrand, analyzeCard } from "../logic";

describe("credit-card-validator", () => {
  it("validates known test numbers via Luhn", () => {
    expect(luhnValid("4242 4242 4242 4242")).toBe(true); // Visa test
    expect(luhnValid("4111111111111111")).toBe(true);
    expect(luhnValid("4111111111111121")).toBe(false);
  });
  it("detects brands", () => {
    expect(detectBrand("4111111111111111")).toBe("Visa");
    expect(detectBrand("5500005555555559")).toBe("Mastercard");
    expect(detectBrand("340000000000009")).toBe("American Express");
    expect(detectBrand("6011000000000004")).toBe("Discover");
    expect(detectBrand("1234")).toBeNull();
  });
  it("analyzes a card", () => {
    const r = analyzeCard("4242-4242-4242-4242");
    expect(r).toEqual({ valid: true, brand: "Visa", digits: 16 });
  });
});
