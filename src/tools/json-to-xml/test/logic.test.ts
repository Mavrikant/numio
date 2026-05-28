import { describe, it, expect } from "vitest";
import { jsonToXml } from "../logic";

const DECL = '<?xml version="1.0" encoding="UTF-8"?>\n';

describe("json-to-xml", () => {
  it("converts a simple object", () => {
    expect(jsonToXml('{"a":1}')).toEqual({ output: DECL + "<root>\n  <a>1</a>\n</root>", error: null });
  });
  it("repeats the tag for arrays", () => {
    expect(jsonToXml('{"tags":["x","y"]}').output).toBe(DECL + "<root>\n  <tags>x</tags>\n  <tags>y</tags>\n</root>");
  });
  it("escapes special characters", () => {
    expect(jsonToXml('{"a":"<b>&"}').output).toBe(DECL + "<root>\n  <a>&lt;b&gt;&amp;</a>\n</root>");
  });
  it("renders null and empty objects as self-closing", () => {
    expect(jsonToXml('{"a":null,"b":{}}').output).toBe(DECL + "<root>\n  <a/>\n  <b/>\n</root>");
  });
  it("reports invalid JSON", () => {
    expect(jsonToXml("{nope}").error).not.toBeNull();
  });
  it("returns empty for empty input", () => {
    expect(jsonToXml("  ")).toEqual({ output: "", error: null });
  });
});
