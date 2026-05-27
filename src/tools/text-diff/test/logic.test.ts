import { describe, it, expect } from "vitest";
import { diffLines, diffStats } from "../logic";

describe("text-diff", () => {
  it("marks identical text as all equal", () => {
    const ops = diffLines("a\nb", "a\nb");
    expect(ops.every((o) => o.type === "eq")).toBe(true);
    expect(diffStats(ops)).toEqual({ added: 0, removed: 0 });
  });
  it("detects an added line", () => {
    const ops = diffLines("a\nc", "a\nb\nc");
    expect(diffStats(ops)).toEqual({ added: 1, removed: 0 });
    expect(ops.find((o) => o.type === "add")?.value).toBe("b");
  });
  it("detects a removed line", () => {
    const ops = diffLines("a\nb\nc", "a\nc");
    expect(diffStats(ops)).toEqual({ added: 0, removed: 1 });
    expect(ops.find((o) => o.type === "del")?.value).toBe("b");
  });
  it("handles a changed line as del + add", () => {
    const ops = diffLines("hello", "world");
    expect(diffStats(ops)).toEqual({ added: 1, removed: 1 });
  });
});
