import { describe, it, expect } from "vitest";
import { jsonToXml } from "../logic";

describe("json-to-xml regressions", () => {
  it("wraps a root array in a single root element", () => {
    const out = jsonToXml("[1,2]").output;
    expect(out).toContain("<root>");
    expect(out).toContain("<item>1</item>");
    expect(out).toContain("<item>2</item>");
    expect(out.match(/<root>/g)).toHaveLength(1);
  });
  it("does not flatten nested arrays", () => {
    expect(jsonToXml("[[1],[2]]").output).not.toBe(jsonToXml("[1,2]").output);
  });
});
