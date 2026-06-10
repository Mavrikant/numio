import { describe, it, expect } from "vitest";
import { extractDominantColors } from "../logic";

describe("image-color-picker regressions", () => {
  it("reports pure white as #ffffff, not the bucket floor #f8f8f8", () => {
    const data = new Uint8ClampedArray([255, 255, 255, 255, 255, 255, 255, 255]);
    expect(extractDominantColors(data, 4)).toEqual(["#ffffff"]);
  });
  it("averages pixel values within a bucket", () => {
    // 250 and 254 share the 0xf8 bucket → average 252.
    const data = new Uint8ClampedArray([250, 0, 0, 255, 254, 0, 0, 255]);
    expect(extractDominantColors(data, 4)).toEqual(["#fc0000"]);
  });
});
