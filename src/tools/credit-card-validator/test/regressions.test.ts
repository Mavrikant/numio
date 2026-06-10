import { describe, it, expect } from "vitest";
import { detectBrand } from "../logic";

describe("credit-card-validator regressions", () => {
  it("does not classify the 2220 prefix as Mastercard", () => {
    expect(detectBrand("2220990000000000")).toBeNull();
  });
  it("recognises the real 2-series boundaries", () => {
    expect(detectBrand("2221000000000000")).toBe("Mastercard");
    expect(detectBrand("2720990000000000")).toBe("Mastercard");
    expect(detectBrand("2721000000000000")).toBeNull();
  });
});
