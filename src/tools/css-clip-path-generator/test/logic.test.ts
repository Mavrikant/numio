import { describe, it, expect } from "vitest";
import { SHAPES, buildClipPathCss } from "../logic";

describe("css-clip-path-generator", () => {
  it("ships a useful set of shapes", () => {
    expect(Object.keys(SHAPES)).toContain("triangle");
    expect(Object.keys(SHAPES)).toContain("hexagon");
    expect(Object.keys(SHAPES)).toContain("star");
    expect(Object.keys(SHAPES)).toContain("circle");
  });
  it("wraps the value in a clip-path property", () => {
    expect(buildClipPathCss("triangle")).toBe(`clip-path: ${SHAPES.triangle};`);
  });
  it("uses circle/ellipse for non-polygon shapes", () => {
    expect(SHAPES.circle.startsWith("circle(")).toBe(true);
    expect(SHAPES.ellipse.startsWith("ellipse(")).toBe(true);
  });
});
