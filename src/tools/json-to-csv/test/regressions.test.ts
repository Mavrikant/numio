import { describe, it, expect } from "vitest";
import { jsonToCsv } from "../logic";

describe("json-to-csv regressions", () => {
  it("quotes fields containing a custom delimiter", () => {
    expect(jsonToCsv('[{"a":"x;y","b":1}]', ";")).toBe('a;b\n"x;y";1');
  });
  it("quotes fields containing carriage returns", () => {
    expect(jsonToCsv('[{"a":"x\\ry"}]')).toBe('a\n"x\ry"');
  });
});
