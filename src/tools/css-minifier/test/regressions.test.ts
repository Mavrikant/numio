import { describe, it, expect } from "vitest";
import { minifyCss } from "../logic";

describe("css-minifier regressions", () => {
  it("keeps whitespace around + so calc() stays valid", () => {
    expect(minifyCss(".x { margin: calc(1rem + 5px); }")).toBe(".x{margin:calc(1rem + 5px)}");
  });
  it("preserves the contents of quoted strings", () => {
    expect(minifyCss('a::before { content: "Hello, world; ok > fine"; }')).toBe(
      'a::before{content:"Hello, world; ok > fine"}',
    );
  });
  it("still collapses around child/sibling combinators", () => {
    expect(minifyCss("a > b ~ c { color: red; }")).toBe("a>b~c{color:red}");
  });
});
