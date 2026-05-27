import { describe, it, expect } from "vitest";
import { findReplace, countMatches } from "../logic";

const lit = { caseInsensitive: false, regex: false };

describe("findReplace", () => {
  it("replaces all literal occurrences", () => {
    expect(findReplace("a.b.a", "a", "X", lit)).toBe("X.b.X");
  });
  it("treats find literally (dots are not wildcards)", () => {
    expect(findReplace("axb a.b", ".", "_", lit)).toBe("axb a_b");
  });
  it("is case-insensitive when requested", () => {
    expect(findReplace("Foo foo FOO", "foo", "x", { caseInsensitive: true, regex: false })).toBe("x x x");
  });
  it("supports regex with capture groups", () => {
    expect(findReplace("2024-01-02", "(\\d+)-(\\d+)-(\\d+)", "$3/$2/$1", { caseInsensitive: false, regex: true })).toBe("02/01/2024");
  });
  it("counts matches and throws on bad regex", () => {
    expect(countMatches("a a a", "a", lit)).toBe(3);
    expect(() => findReplace("x", "(", "y", { caseInsensitive: false, regex: true })).toThrow();
  });
});
