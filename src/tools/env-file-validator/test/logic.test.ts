import { describe, it, expect } from "vitest";
import { analyzeEnv } from "../logic";

describe("env-file-validator", () => {
  it("parses valid key/value pairs", () => {
    const r = analyzeEnv("FOO=bar\nBAZ=qux");
    expect(r.entries.map((e) => e.key)).toEqual(["FOO", "BAZ"]);
    expect(r.entries[0]!.value).toBe("bar");
    expect(r.issues).toEqual([]);
  });
  it("strips matched double quotes", () => {
    expect(analyzeEnv('FOO="bar baz"').entries[0]!.value).toBe("bar baz");
  });
  it("skips comments and blanks", () => {
    expect(analyzeEnv("\n# comment\nFOO=bar\n").entries).toHaveLength(1);
  });
  it("flags missing equals", () => {
    expect(analyzeEnv("FOOBAR").issues[0]!.message).toMatch(/Missing/);
  });
  it("flags invalid keys", () => {
    expect(analyzeEnv("1FOO=bar").issues[0]!.message).toMatch(/Invalid key/);
  });
  it("flags duplicates as warnings", () => {
    const r = analyzeEnv("FOO=1\nFOO=2");
    expect(r.duplicates).toContain("FOO");
    expect(r.issues[0]!.severity).toBe("warning");
  });
  it("warns about unquoted hashes", () => {
    expect(analyzeEnv("MSG=hello #world").issues[0]!.message).toMatch(/`#`/);
  });
  it("flags unterminated quotes", () => {
    expect(analyzeEnv('MSG="hi').issues[0]!.message).toMatch(/Unterminated/);
  });
});
