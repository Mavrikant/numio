import { describe, it, expect } from "vitest";
import { extractDominantColors } from "../logic";

function makeBuffer(rgba: number[]): Uint8ClampedArray {
  return new Uint8ClampedArray(rgba);
}

describe("image-color-picker", () => {
  it("returns the single colour for a solid block", () => {
    const data = makeBuffer([255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255]);
    expect(extractDominantColors(data, 4)).toEqual(["#f80000"]);
  });
  it("orders by frequency", () => {
    // Three red, one blue → red first.
    const data = makeBuffer([255, 0, 0, 255, 255, 0, 0, 255, 255, 0, 0, 255, 0, 0, 255, 255]);
    const p = extractDominantColors(data, 4);
    expect(p[0]).toBe("#f80000");
    expect(p).toContain("#0000f8");
  });
  it("skips fully transparent pixels", () => {
    const data = makeBuffer([255, 0, 0, 0, 0, 255, 0, 255]);
    expect(extractDominantColors(data, 4)).toEqual(["#00f800"]);
  });
});
