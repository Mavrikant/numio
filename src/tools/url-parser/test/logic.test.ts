import { describe, it, expect } from "vitest";
import { parseUrl } from "../logic";

describe("parseUrl", () => {
  it("breaks a URL into components", () => {
    const p = parseUrl("https://example.com:8080/path/to?x=1&y=2#frag");
    expect(p.protocol).toBe("https:");
    expect(p.hostname).toBe("example.com");
    expect(p.port).toBe("8080");
    expect(p.pathname).toBe("/path/to");
    expect(p.hash).toBe("#frag");
  });
  it("extracts query parameters", () => {
    expect(parseUrl("https://x.com/?a=1&b=hello%20world").params).toEqual([
      ["a", "1"],
      ["b", "hello world"],
    ]);
  });
  it("throws on an invalid/relative URL", () => {
    expect(() => parseUrl("/just/a/path")).toThrow();
    expect(() => parseUrl("not a url")).toThrow();
  });
});
