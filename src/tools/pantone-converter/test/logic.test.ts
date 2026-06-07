import { describe, it, expect } from "vitest";
import { PANTONE_PMS, cmykToRgb, hexToRgb, hsvToRgb, nearestPantone, rgbToHex } from "../logic";

describe("hexToRgb / rgbToHex", () => {
  it("parses 6-digit hex", () => {
    expect(hexToRgb("#E4002B")).toEqual({ r: 228, g: 0, b: 43 });
  });
  it("parses 3-digit shorthand", () => {
    expect(hexToRgb("#fff")).toEqual({ r: 255, g: 255, b: 255 });
  });
  it("round-trips through rgbToHex", () => {
    expect(rgbToHex(228, 0, 43)).toBe("#E4002B");
  });
  it("throws on invalid hex", () => {
    expect(() => hexToRgb("nope")).toThrow();
    expect(() => hexToRgb("#12")).toThrow();
  });
});

describe("cmykToRgb", () => {
  it("0,0,0,0 is white", () => {
    expect(cmykToRgb(0, 0, 0, 0)).toEqual({ r: 255, g: 255, b: 255 });
  });
  it("0,0,0,100 is black", () => {
    expect(cmykToRgb(0, 0, 0, 100)).toEqual({ r: 0, g: 0, b: 0 });
  });
  it("0,100,100,0 is red", () => {
    expect(cmykToRgb(0, 100, 100, 0)).toEqual({ r: 255, g: 0, b: 0 });
  });
});

describe("hsvToRgb", () => {
  it("converts basic primaries", () => {
    expect(hsvToRgb(0, 100, 100)).toEqual({ r: 255, g: 0, b: 0 });
    expect(hsvToRgb(120, 100, 100)).toEqual({ r: 0, g: 255, b: 0 });
    expect(hsvToRgb(240, 100, 100)).toEqual({ r: 0, g: 0, b: 255 });
  });
  it("zero saturation is grayscale", () => {
    expect(hsvToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 });
    expect(hsvToRgb(200, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
  });
});

describe("nearestPantone", () => {
  it("has a curated dataset of ~150 colours", () => {
    expect(PANTONE_PMS.length).toBeGreaterThanOrEqual(150);
    expect(PANTONE_PMS.every((p) => /^#[0-9A-Fa-f]{6}$/.test(p.hex))).toBe(true);
  });

  it("returns the exact code when given a dataset hex", () => {
    const sample = PANTONE_PMS.find((p) => p.code === "PMS 185 C")!;
    const result = nearestPantone(sample.hex);
    expect(result.code).toBe("PMS 185 C");
    expect(result.distance).toBe(0);
  });

  it("matches Black C for near-black input", () => {
    const result = nearestPantone("#2D2926");
    expect(result.code).toBe("PMS Black C");
  });
});
