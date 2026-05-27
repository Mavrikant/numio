import { describe, it, expect } from "vitest";
import { htmlToText } from "../logic";

describe("htmlToText", () => {
  it("strips tags and decodes entities", () => {
    expect(htmlToText("<p>Hello <b>world</b> &amp; friends</p>")).toBe("Hello world & friends");
  });
  it("turns <br> and block ends into newlines", () => {
    expect(htmlToText("a<br>b<p>c</p>d")).toBe("a\nb\nc\nd");
  });
  it("drops script and style content", () => {
    expect(htmlToText("<style>.x{color:red}</style><p>hi</p><script>alert(1)</script>")).toBe("hi");
  });
});
