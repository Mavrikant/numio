import { describe, it, expect } from "vitest";
import { jsonToCsv } from "../logic";

describe("jsonToCsv", () => {
  it("converts an array of objects", () => {
    expect(jsonToCsv('[{"name":"Alice","age":30},{"name":"Bob","age":25}]')).toBe("name,age\nAlice,30\nBob,25");
  });
  it("unions keys across rows", () => {
    expect(jsonToCsv('[{"a":1},{"b":2}]')).toBe("a,b\n1,\n,2");
  });
  it("quotes fields with commas, quotes and newlines", () => {
    expect(jsonToCsv('[{"x":"a,b"},{"x":"say \\"hi\\""}]')).toBe('x\n"a,b"\n"say ""hi"""');
  });
  it("throws on non-array or non-object rows", () => {
    expect(() => jsonToCsv("{}")).toThrow();
    expect(() => jsonToCsv("[1,2,3]")).toThrow();
    expect(() => jsonToCsv("not json")).toThrow();
  });
});
