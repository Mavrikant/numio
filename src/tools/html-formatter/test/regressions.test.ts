import { describe, it, expect } from "vitest";
import { formatHtml } from "../logic";

describe("html-formatter regressions", () => {
  it("pairs nested same-name inline tags with the matching close tag", () => {
    expect(formatHtml("<span>a<span>b</span></span>")).toBe("<span>a<span>b</span></span>");
  });
});
