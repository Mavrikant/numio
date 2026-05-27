import { describe, it, expect } from "vitest";
import { escapeString, unescapeString } from "../logic";

describe("string-escape", () => {
  it("escapes quotes, backslashes and control chars", () => {
    expect(escapeString('a"b\\c')).toBe('a\\"b\\\\c');
    expect(escapeString("line1\nline2\t!")).toBe("line1\\nline2\\t!");
  });
  it("round-trips", () => {
    for (const s of ['say "hi"', "tab\tand\nnewline", "back\\slash", "plain"]) {
      expect(unescapeString(escapeString(s))).toBe(s);
    }
  });
  it("throws on a bad escape sequence", () => {
    expect(() => unescapeString('bad\\')).toThrow();
  });
});
