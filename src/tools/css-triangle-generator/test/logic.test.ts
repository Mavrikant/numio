import { describe, it, expect } from "vitest";
import { buildTriangle } from "../logic";

describe("css-triangle-generator", () => {
  it("places the coloured border opposite the pointing direction", () => {
    expect(buildTriangle("up", 60, "#f00")).toContain("border-bottom: 60px solid #f00");
    expect(buildTriangle("down", 60, "#f00")).toContain("border-top: 60px solid #f00");
    expect(buildTriangle("left", 60, "#f00")).toContain("border-right: 60px solid #f00");
    expect(buildTriangle("right", 60, "#f00")).toContain("border-left: 60px solid #f00");
  });
  it("zeros the box dimensions", () => {
    const css = buildTriangle("up", 50, "#000");
    expect(css).toContain("width: 0;");
    expect(css).toContain("height: 0;");
  });
  it("uses transparent borders on the two perpendicular sides", () => {
    const css = buildTriangle("up", 30, "#000");
    expect(css).toContain("border-left: 30px solid transparent");
    expect(css).toContain("border-right: 30px solid transparent");
  });
});
