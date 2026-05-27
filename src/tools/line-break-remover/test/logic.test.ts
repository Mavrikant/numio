import { describe, it, expect } from "vitest";
import { removeLineBreaks } from "../logic";

describe("removeLineBreaks", () => {
  it("replaces breaks with spaces", () => {
    expect(removeLineBreaks("a\nb\nc", "spaces")).toBe("a b c");
  });
  it("removes breaks completely", () => {
    expect(removeLineBreaks("a\nb\nc", "remove")).toBe("abc");
  });
  it("keeps paragraph gaps", () => {
    expect(removeLineBreaks("line1\nline2\n\nline3\nline4", "paragraphs")).toBe("line1 line2\n\nline3 line4");
  });
});
