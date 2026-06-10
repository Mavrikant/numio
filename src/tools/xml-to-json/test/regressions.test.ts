import { describe, it, expect } from "vitest";
import { xmlToJson } from "../logic";

describe("xml-to-json regressions", () => {
  it("handles > inside quoted attribute values", () => {
    const r = xmlToJson('<root><a title="x > y">hi</a></root>', 0);
    expect(r.error).toBeNull();
    expect(JSON.parse(r.output)).toEqual({ root: { a: { "@title": "x > y", "#text": "hi" } } });
  });
  it("accepts a DOCTYPE declaration", () => {
    const r = xmlToJson("<!DOCTYPE note><note>hi</note>", 0);
    expect(r.error).toBeNull();
    expect(JSON.parse(r.output)).toEqual({ note: "hi" });
  });
  it("decodes entities in attribute values", () => {
    const r = xmlToJson('<a t="x &amp; y"/>', 0);
    expect(JSON.parse(r.output)).toEqual({ a: { "@t": "x & y" } });
  });
  it("treats CDATA sections as literal text", () => {
    const r = xmlToJson("<a><![CDATA[1 < 2]]></a>", 0);
    expect(r.error).toBeNull();
    expect(JSON.parse(r.output)).toEqual({ a: "1 < 2" });
  });
});
