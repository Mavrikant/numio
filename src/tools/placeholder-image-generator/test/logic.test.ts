import { describe, it, expect } from "vitest";
import { buildPlaceholderSvg, svgToDataUrl } from "../logic";

describe("placeholder-image-generator", () => {
  it("uses width×height as the default label", () => {
    const svg = buildPlaceholderSvg(200, 100, "", "#fff", "#000");
    expect(svg).toContain("200×100");
    expect(svg).toContain('width="200"');
    expect(svg).toContain('height="100"');
  });
  it("honours a custom label", () => {
    expect(buildPlaceholderSvg(100, 100, "Hello", "#fff", "#000")).toContain(">Hello</text>");
  });
  it("escapes label HTML characters", () => {
    expect(buildPlaceholderSvg(100, 100, "<x>", "#fff", "#000")).toContain("&lt;x&gt;");
  });
  it("rounds and clamps dimensions to at least 1", () => {
    expect(buildPlaceholderSvg(0, 0, "", "#fff", "#000")).toContain('width="1"');
  });
  it("wraps SVG into a base64 data URL", () => {
    const url = svgToDataUrl(buildPlaceholderSvg(10, 10, "x", "#fff", "#000"));
    expect(url.startsWith("data:image/svg+xml;base64,")).toBe(true);
  });
});
