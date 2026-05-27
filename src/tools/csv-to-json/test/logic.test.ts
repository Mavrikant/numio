import { describe, it, expect } from "vitest";
import { parseCsv, csvToJson } from "../logic";

describe("csv-to-json", () => {
  it("parses quoted fields with embedded commas and newlines", () => {
    expect(parseCsv('a,"b,c","line1\nline2"')).toEqual([["a", "b,c", "line1\nline2"]]);
  });
  it("handles escaped quotes", () => {
    expect(parseCsv('"say ""hi"""')).toEqual([['say "hi"']]);
  });
  it("converts to array of objects with header", () => {
    expect(JSON.parse(csvToJson("name,age\nAlice,30\nBob,25", true))).toEqual([
      { name: "Alice", age: "30" },
      { name: "Bob", age: "25" },
    ]);
  });
  it("converts to array of arrays without header", () => {
    expect(JSON.parse(csvToJson("a,b\nc,d", false))).toEqual([["a", "b"], ["c", "d"]]);
  });
  it("supports a custom delimiter", () => {
    expect(JSON.parse(csvToJson("a;b\nc;d", false, ";"))).toEqual([["a", "b"], ["c", "d"]]);
  });
});
