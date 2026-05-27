import { describe, it, expect } from "vitest";
import { reverseText } from "../logic";

describe("reverseText", () => {
  it("reverses characters", () => {
    expect(reverseText("hello", "characters")).toBe("olleh");
  });
  it("reverses word order preserving spacing", () => {
    expect(reverseText("one two three", "words")).toBe("three two one");
  });
  it("reverses line order", () => {
    expect(reverseText("a\nb\nc", "lines")).toBe("c\nb\na");
  });
  it("handles astral characters by code point", () => {
    expect(reverseText("a👍b", "characters")).toBe("b👍a");
  });
});
