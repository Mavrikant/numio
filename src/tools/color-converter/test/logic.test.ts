import { describe, it, expect } from "vitest";
import { convertColor, parseColor, rgbToHsl, hslToRgb } from "../logic";

describe("color-converter", () => {
  it("parses 3- and 6-digit hex", () => {
    expect(parseColor("#fff")).toEqual({ r: 255, g: 255, b: 255 });
    expect(parseColor("3b82f6")).toEqual({ r: 59, g: 130, b: 246 });
  });
  it("converts to all formats", () => {
    const r = convertColor("rgb(59,130,246)")!;
    expect(r.hex).toBe("#3b82f6");
    expect(r.rgb).toBe("rgb(59, 130, 246)");
    expect(r.hsl).toBe("hsl(217, 91%, 60%)");
  });
  it("round-trips hsl <-> rgb closely", () => {
    const rgb = hslToRgb(217, 91, 60);
    expect(rgbToHsl(rgb)).toEqual([217, 91, 60]);
  });
  it("returns null for invalid input", () => {
    expect(convertColor("not a color")).toBeNull();
  });
  it("parses hsl input", () => {
    expect(parseColor("hsl(0, 100%, 50%)")).toEqual({ r: 255, g: 0, b: 0 });
  });
});
