import { describe, it, expect } from "vitest";
import { aspectRatio } from "../logic";

describe("viewport-info", () => {
  it("simplifies the aspect ratio", () => {
    expect(aspectRatio(1920, 1080)).toBe("16:9");
    expect(aspectRatio(1280, 800)).toBe("8:5");
    expect(aspectRatio(800, 600)).toBe("4:3");
  });
  it("returns dash for zero or negative dimensions", () => {
    expect(aspectRatio(0, 100)).toBe("—");
    expect(aspectRatio(100, 0)).toBe("—");
  });
});
