import { describe, it, expect } from "vitest";
import { sortLines } from "../logic";

const base = { reverse: false, caseInsensitive: false };

describe("sortLines", () => {
  it("sorts alphabetically", () => {
    expect(sortLines("banana\napple\ncherry", "alpha", base)).toBe("apple\nbanana\ncherry");
  });
  it("sorts by length", () => {
    expect(sortLines("ccc\na\nbb", "length", base)).toBe("a\nbb\nccc");
  });
  it("sorts numerically", () => {
    expect(sortLines("10\n2\n1", "numeric", base)).toBe("1\n2\n10");
  });
  it("reverses", () => {
    expect(sortLines("a\nb\nc", "alpha", { ...base, reverse: true })).toBe("c\nb\na");
  });
  it("ignores case when requested", () => {
    expect(sortLines("b\nA\nc", "alpha", { ...base, caseInsensitive: true })).toBe("A\nb\nc");
  });
});
