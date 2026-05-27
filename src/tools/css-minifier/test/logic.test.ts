import { describe, it, expect } from "vitest";
import { minifyCss } from "../logic";

describe("minifyCss", () => {
  it("removes comments and collapses whitespace", () => {
    const css = `/* header */\n.box {\n  color: red;\n  margin: 0 auto;\n}`;
    expect(minifyCss(css)).toBe(".box{color:red;margin:0 auto}");
  });
  it("drops the last semicolon in a block", () => {
    expect(minifyCss("a { color: blue; }")).toBe("a{color:blue}");
  });
  it("tightens combinators and commas", () => {
    expect(minifyCss("h1, h2 > a { x: 1 }")).toBe("h1,h2>a{x:1}");
  });
});
