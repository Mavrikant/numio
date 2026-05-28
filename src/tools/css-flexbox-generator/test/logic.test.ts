import { describe, it, expect } from "vitest";
import { buildFlexCss } from "../logic";

describe("css-flexbox-generator", () => {
  it("emits the six standard properties", () => {
    const css = buildFlexCss({ direction: "row", wrap: "nowrap", justify: "center", align: "center", gap: 16 });
    expect(css).toContain("display: flex;");
    expect(css).toContain("flex-direction: row;");
    expect(css).toContain("flex-wrap: nowrap;");
    expect(css).toContain("justify-content: center;");
    expect(css).toContain("align-items: center;");
    expect(css).toContain("gap: 16px;");
  });
  it("respects the supplied values", () => {
    const css = buildFlexCss({ direction: "column-reverse", wrap: "wrap-reverse", justify: "space-evenly", align: "baseline", gap: 0 });
    expect(css).toContain("flex-direction: column-reverse;");
    expect(css).toContain("justify-content: space-evenly;");
    expect(css).toContain("align-items: baseline;");
    expect(css).toContain("gap: 0px;");
  });
});
