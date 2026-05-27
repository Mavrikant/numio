import { describe, it, expect } from "vitest";
import { formatJson, minifyJson } from "../logic";

describe("json-formatter", () => {
  it("pretty-prints with spaces", () => {
    expect(formatJson('{"a":1,"b":[2,3]}', 2)).toBe('{\n  "a": 1,\n  "b": [\n    2,\n    3\n  ]\n}');
  });
  it("pretty-prints with tabs", () => {
    expect(formatJson('{"a":1}', "\t")).toBe('{\n\t"a": 1\n}');
  });
  it("minifies", () => {
    expect(minifyJson('{\n  "a": 1\n}')).toBe('{"a":1}');
  });
  it("throws on invalid JSON", () => {
    expect(() => formatJson("{bad}", 2)).toThrow();
    expect(() => minifyJson("nope")).toThrow();
  });
});
