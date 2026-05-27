import { describe, it, expect } from "vitest";
import { encodeEntities, decodeEntities } from "../logic";

describe("html-entities", () => {
  it("encodes the five special characters", () => {
    expect(encodeEntities(`<a href="x">Tom & Jerry's</a>`)).toBe(
      "&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&#39;s&lt;/a&gt;",
    );
  });
  it("decodes named and numeric entities", () => {
    expect(decodeEntities("&lt;b&gt;&amp;&#39;&#x41;&copy;")).toBe("<b>&'A©");
  });
  it("round-trips the special set", () => {
    const s = `<>&"'`;
    expect(decodeEntities(encodeEntities(s))).toBe(s);
  });
  it("leaves unknown entities untouched", () => {
    expect(decodeEntities("&unknownentity;")).toBe("&unknownentity;");
  });
});
