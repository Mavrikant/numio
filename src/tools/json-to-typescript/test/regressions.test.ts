import { describe, it, expect } from "vitest";
import { jsonToTypescript } from "../logic";

describe("json-to-typescript regressions", () => {
  it("never emits identifiers starting with a digit", () => {
    const out = jsonToTypescript('{"1key": {"a": 1}}').output;
    expect(out).not.toMatch(/interface \d/);
    expect(out).toContain("export interface _1key");
  });
  it("sanitizes a root name containing spaces", () => {
    const out = jsonToTypescript('{"a": 1}', "my type").output;
    expect(out).toContain("export interface Mytype");
  });
});
