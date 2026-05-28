import { describe, it, expect } from "vitest";
import { fitWithin } from "../logic";

describe("image-resizer", () => {
  it("preserves aspect ratio when downscaling", () => {
    expect(fitWithin(1920, 1080, 800, 800)).toEqual({ width: 800, height: 450 });
  });
  it("fits portrait images to height", () => {
    expect(fitWithin(500, 1000, 200, 200)).toEqual({ width: 100, height: 200 });
  });
});
