import { describe, it, expect } from "vitest";
import { diffJson } from "../logic";

describe("json-diff", () => {
  it("returns no diffs for identical JSON", () => {
    expect(diffJson('{"a":1,"b":[1,2]}', '{"a":1,"b":[1,2]}').diffs).toEqual([]);
  });
  it("detects added keys", () => {
    const r = diffJson('{"a":1}', '{"a":1,"b":2}').diffs;
    expect(r).toEqual([{ kind: "added", path: "b", value: 2 }]);
  });
  it("detects removed keys", () => {
    const r = diffJson('{"a":1,"b":2}', '{"a":1}').diffs;
    expect(r).toEqual([{ kind: "removed", path: "b", value: 2 }]);
  });
  it("detects value changes", () => {
    const r = diffJson('{"a":1}', '{"a":2}').diffs;
    expect(r).toEqual([{ kind: "changed", path: "a", left: 1, right: 2 }]);
  });
  it("handles nested paths", () => {
    const r = diffJson('{"a":{"b":1}}', '{"a":{"b":2}}').diffs;
    expect(r[0]!.path).toBe("a.b");
  });
  it("handles array index paths", () => {
    const r = diffJson('{"a":[1,2,3]}', '{"a":[1,9,3]}').diffs;
    expect(r[0]!.path).toBe("a[1]");
  });
  it("reports JSON parse errors", () => {
    expect(diffJson("{bad}", "{}").error).not.toBeNull();
  });
});
