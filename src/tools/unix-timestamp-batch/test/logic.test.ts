import { describe, it, expect } from "vitest";
import { parseTimestamps } from "../logic";

const now = new Date("2026-05-28T12:00:00Z");

describe("unix-timestamp-batch", () => {
  it("parses 10-digit seconds", () => {
    const r = parseTimestamps("1716902400", now)[0]!;
    expect(r.iso).toBe(new Date(1716902400 * 1000).toISOString());
  });
  it("parses 13-digit milliseconds", () => {
    const r = parseTimestamps("1716902400000", now)[0]!;
    expect(r.iso).toBe(new Date(1716902400000).toISOString());
  });
  it("parses ISO 8601 strings", () => {
    const r = parseTimestamps("2026-05-28T10:00:00Z", now)[0]!;
    expect(r.iso).toBe("2026-05-28T10:00:00.000Z");
  });
  it("flags unparseable lines", () => {
    expect(parseTimestamps("not a date", now)[0]!.error).toBeDefined();
  });
  it("skips blank lines", () => {
    expect(parseTimestamps("\n\n1716902400\n\n", now)).toHaveLength(1);
  });
  it("emits relative labels", () => {
    const past = parseTimestamps("2026-05-27T12:00:00Z", now)[0]!;
    expect(past.relative).toMatch(/ago/);
    const future = parseTimestamps("2026-05-29T12:00:00Z", now)[0]!;
    expect(future.relative).toMatch(/from now/);
  });
});
