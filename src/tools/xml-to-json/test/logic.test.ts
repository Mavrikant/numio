import { describe, it, expect } from "vitest";
import { xmlToJson } from "../logic";

describe("xml-to-json", () => {
  it("converts a simple element", () => {
    const r = xmlToJson("<a>hello</a>");
    expect(r.error).toBeNull();
    expect(JSON.parse(r.output)).toEqual({ a: "hello" });
  });
  it("emits attributes with @ prefix", () => {
    const r = xmlToJson('<a id="1">hi</a>');
    expect(JSON.parse(r.output)).toEqual({ a: { "@id": "1", "#text": "hi" } });
  });
  it("groups repeated elements into arrays", () => {
    const r = xmlToJson("<root><x>a</x><x>b</x></root>");
    expect(JSON.parse(r.output)).toEqual({ root: { x: ["a", "b"] } });
  });
  it("handles nested objects", () => {
    const r = xmlToJson("<root><a><b>1</b></a></root>");
    expect(JSON.parse(r.output)).toEqual({ root: { a: { b: "1" } } });
  });
  it("decodes common entities", () => {
    const r = xmlToJson("<a>1 &lt; 2 &amp; 3</a>");
    expect(JSON.parse(r.output)).toEqual({ a: "1 < 2 & 3" });
  });
  it("returns empty for empty input", () => {
    expect(xmlToJson("")).toEqual({ output: "", error: null });
  });
  it("reports mismatched closing tags", () => {
    expect(xmlToJson("<a><b></a>").error).toMatch(/Mismatched|Unclosed/);
  });
});
