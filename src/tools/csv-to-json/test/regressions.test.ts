import { describe, it, expect } from "vitest";
import { parseCsv } from "../logic";

describe("csv-to-json regressions", () => {
  it("keeps a row consisting of a single quoted empty field", () => {
    expect(parseCsv('name\nAlice\n""\nBob')).toEqual([["name"], ["Alice"], [""], ["Bob"]]);
  });
  it("still skips truly blank lines", () => {
    expect(parseCsv("a\n\nb")).toEqual([["a"], ["b"]]);
  });
});
