import { describe, it, expect } from "vitest";
import { buildBoxShadow } from "../logic";

describe("box-shadow-generator", () => {
  it("builds a box-shadow value", () => {
    expect(buildBoxShadow(4, 4, 12, 0, "#000000", false)).toBe("4px 4px 12px 0px #000000");
  });
  it("prefixes inset when enabled", () => {
    expect(buildBoxShadow(0, 2, 6, 1, "#333", true)).toBe("inset 0px 2px 6px 1px #333");
  });
});
