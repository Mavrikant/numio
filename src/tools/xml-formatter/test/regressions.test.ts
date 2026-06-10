import { describe, it, expect } from "vitest";
import { formatXml } from "../logic";

describe("xml-formatter regressions", () => {
  it("does not report unbalanced tags for newlines inside text content", () => {
    const r = formatXml("<p>hello\nworld</p>");
    expect(r.error).toBeNull();
  });
  it("still detects genuinely unbalanced XML", () => {
    expect(formatXml("<a><b></a>").error).not.toBeNull();
  });
});
