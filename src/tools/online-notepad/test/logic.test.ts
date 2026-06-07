import { describe, it, expect } from "vitest";
import { textStats } from "../logic";

describe("textStats", () => {
  it("returns zeros for empty text", () => {
    expect(textStats("")).toEqual({ words: 0, characters: 0, charactersNoSpaces: 0, lines: 0 });
  });

  it("counts a simple sentence", () => {
    expect(textStats("hello world")).toEqual({
      words: 2,
      characters: 11,
      charactersNoSpaces: 10,
      lines: 1,
    });
  });

  it("counts multiline text", () => {
    const s = textStats("line one\nline two\nthree");
    expect(s.lines).toBe(3);
    expect(s.words).toBe(5);
  });

  it("ignores leading/trailing whitespace for word counts", () => {
    expect(textStats("   spaced   out   ").words).toBe(2);
  });

  it("excludes whitespace from charactersNoSpaces", () => {
    expect(textStats("a b\tc\nd").charactersNoSpaces).toBe(4);
  });
});
