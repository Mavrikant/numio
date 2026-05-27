import { describe, it, expect } from "vitest";
import { generatePalette } from "../logic";

const hex = /^#[0-9a-f]{6}$/;

describe("color-palette-generator", () => {
  it("returns the right count per harmony", () => {
    expect(generatePalette("#6366f1", "complementary")).toHaveLength(2);
    expect(generatePalette("#6366f1", "analogous")).toHaveLength(3);
    expect(generatePalette("#6366f1", "triadic")).toHaveLength(3);
    expect(generatePalette("#6366f1", "tetradic")).toHaveLength(4);
    expect(generatePalette("#6366f1", "monochromatic")).toHaveLength(5);
  });
  it("produces valid hex colors", () => {
    expect(generatePalette("#ff0000", "triadic").every((c) => hex.test(c))).toBe(true);
  });
  it("the first color of non-mono schemes is the base hue", () => {
    expect(generatePalette("#ff0000", "triadic")[0]).toBe("#ff0000");
  });
  it("returns empty for invalid input", () => {
    expect(generatePalette("nope", "triadic")).toEqual([]);
  });
});
