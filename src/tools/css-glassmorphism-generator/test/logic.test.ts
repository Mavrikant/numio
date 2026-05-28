import { describe, it, expect } from "vitest";
import { buildGlassmorphismCss } from "../logic";

describe("css-glassmorphism-generator", () => {
  it("emits a translucent white background", () => {
    expect(buildGlassmorphismCss({ blur: 12, transparency: 0.2, saturation: 180, borderRadius: 12, borderOpacity: 0.3 })).toContain("background: rgba(255, 255, 255, 0.20);");
  });
  it("emits backdrop-filter with blur and saturate", () => {
    const css = buildGlassmorphismCss({ blur: 10, transparency: 0.1, saturation: 150, borderRadius: 0, borderOpacity: 0.2 });
    expect(css).toContain("backdrop-filter: blur(10px) saturate(150%);");
    expect(css).toContain("-webkit-backdrop-filter: blur(10px) saturate(150%);");
  });
  it("emits a translucent border with the requested opacity", () => {
    expect(buildGlassmorphismCss({ blur: 0, transparency: 0, saturation: 100, borderRadius: 0, borderOpacity: 0.5 })).toContain("border: 1px solid rgba(255, 255, 255, 0.50);");
  });
  it("clamps transparency and border opacity into [0,1]", () => {
    const css = buildGlassmorphismCss({ blur: 0, transparency: 2, saturation: 100, borderRadius: 0, borderOpacity: -0.5 });
    expect(css).toContain("rgba(255, 255, 255, 1.00)");
    expect(css).toContain("rgba(255, 255, 255, 0.00)");
  });
});
