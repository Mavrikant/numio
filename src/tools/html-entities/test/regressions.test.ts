import { describe, it, expect } from "vitest";
import { decodeEntities } from "../logic";

describe("html-entities regressions", () => {
  it("does not throw on out-of-range numeric entities", () => {
    expect(decodeEntities("&#1114112;")).toBe("&#1114112;");
    expect(decodeEntities("&#x110000;")).toBe("&#x110000;");
  });
  it("still decodes the maximum valid code point", () => {
    expect(decodeEntities("&#x10FFFF;")).toBe(String.fromCodePoint(0x10ffff));
  });
});
