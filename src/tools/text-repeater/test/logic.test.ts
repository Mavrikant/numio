import { describe, it, expect } from "vitest";
import { repeatText } from "../logic";

describe("repeatText", () => {
  it("repeats with each separator", () => {
    expect(repeatText("ab", 3, "none")).toBe("ababab");
    expect(repeatText("ab", 3, "space")).toBe("ab ab ab");
    expect(repeatText("ab", 3, "newline")).toBe("ab\nab\nab");
    expect(repeatText("ab", 2, "comma")).toBe("ab, ab");
  });
  it("returns empty for zero count or empty text", () => {
    expect(repeatText("ab", 0, "none")).toBe("");
    expect(repeatText("", 5, "none")).toBe("");
  });
});
