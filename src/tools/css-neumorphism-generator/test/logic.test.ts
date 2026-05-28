import { describe, it, expect } from "vitest";
import { buildNeumorphismCss } from "../logic";

describe("css-neumorphism-generator", () => {
  it("emits background, radius and dual box-shadows", () => {
    const css = buildNeumorphismCss({ background: "#e0e5ec", distance: 10, blur: 20, intensity: 30, radius: 12, inset: false });
    expect(css).toContain("background: #e0e5ec;");
    expect(css).toContain("border-radius: 12px;");
    expect(css).toContain("10px 10px 20px");
    expect(css).toContain("-10px -10px 20px");
  });
  it("derives a lighter and a darker shade from the background", () => {
    const css = buildNeumorphismCss({ background: "#808080", distance: 5, blur: 10, intensity: 40, radius: 0, inset: false });
    expect(css).toMatch(/#[6-9a-f][0-9a-f]{5}/i);
  });
  it("prefixes inset when pressed", () => {
    const css = buildNeumorphismCss({ background: "#e0e5ec", distance: 5, blur: 10, intensity: 20, radius: 0, inset: true });
    expect(css).toContain("inset 5px 5px");
    expect(css).toContain("inset -5px -5px");
  });
});
