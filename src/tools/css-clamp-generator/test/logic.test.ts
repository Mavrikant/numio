import { describe, it, expect } from "vitest";
import { buildClamp } from "../logic";

describe("css-clamp-generator", () => {
  it("builds a fluid clamp value", () => {
    expect(buildClamp(16, 24, 320, 1280)).toBe("clamp(1rem, 0.8333rem + 0.8333vw, 1.5rem)");
  });
  it("handles equal viewports without dividing by zero", () => {
    expect(buildClamp(16, 24, 320, 320)).toBe("clamp(1rem, 1rem + 0vw, 1.5rem)");
  });
});
