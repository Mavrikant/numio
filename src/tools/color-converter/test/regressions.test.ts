import { describe, it, expect } from "vitest";
import { convertColor } from "../logic";

describe("color-converter regressions", () => {
  it("wraps HSL hue angles above 360 instead of clamping", () => {
    expect(convertColor("hsl(480, 100%, 50%)")?.hex).toBe("#00ff00");
  });
});
