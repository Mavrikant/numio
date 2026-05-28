import { describe, it, expect } from "vitest";
import { ASPECT_PRESETS, clampCrop } from "../logic";

describe("image-cropper", () => {
  it("lists the standard presets", () => {
    expect(ASPECT_PRESETS.map((p) => p.id)).toContain("1:1");
    expect(ASPECT_PRESETS.map((p) => p.id)).toContain("16:9");
  });
  it("clamps a rect that exceeds image bounds", () => {
    expect(clampCrop({ x: 50, y: 50, width: 200, height: 200 }, 100, 100)).toEqual({ x: 0, y: 0, width: 100, height: 100 });
  });
  it("keeps rects fully inside by adjusting x/y", () => {
    expect(clampCrop({ x: 90, y: 90, width: 30, height: 30 }, 100, 100)).toEqual({ x: 70, y: 70, width: 30, height: 30 });
  });
  it("clamps negative origins", () => {
    expect(clampCrop({ x: -10, y: -20, width: 50, height: 50 }, 100, 100)).toEqual({ x: 0, y: 0, width: 50, height: 50 });
  });
  it("enforces width and height of at least 1", () => {
    expect(clampCrop({ x: 0, y: 0, width: 0, height: 0 }, 100, 100)).toEqual({ x: 0, y: 0, width: 1, height: 1 });
  });
});
