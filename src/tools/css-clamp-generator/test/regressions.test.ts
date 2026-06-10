import { describe, it, expect } from "vitest";
import { buildClamp } from "../logic";

describe("css-clamp-generator regressions", () => {
  it("swaps the bounds when min size is larger than max size", () => {
    // 24px → 16px as the viewport grows: clamp() needs MIN <= MAX to stay fluid.
    expect(buildClamp(24, 16, 320, 1280)).toBe("clamp(1rem, 1.6667rem + -0.8333vw, 1.5rem)");
  });
  it("keeps the normal direction unchanged", () => {
    expect(buildClamp(16, 24, 320, 1280)).toBe("clamp(1rem, 0.8333rem + 0.8333vw, 1.5rem)");
  });
});
