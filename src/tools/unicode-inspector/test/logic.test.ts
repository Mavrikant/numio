import { describe, it, expect } from "vitest";
import { inspect } from "../logic";

describe("inspect", () => {
  it("reports code point, decimal and UTF-8 for ASCII", () => {
    expect(inspect("A")).toEqual([{ char: "A", codePoint: 65, hex: "U+0041", utf8: "41" }]);
  });
  it("handles multi-byte UTF-8", () => {
    const [c] = inspect("é");
    expect(c.codePoint).toBe(233);
    expect(c.utf8).toBe("C3 A9");
  });
  it("treats an emoji as one code point with 4 UTF-8 bytes", () => {
    const r = inspect("👍");
    expect(r).toHaveLength(1);
    expect(r[0].hex).toBe("U+1F44D");
    expect(r[0].utf8.split(" ")).toHaveLength(4);
  });
});
