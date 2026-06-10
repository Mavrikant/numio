import { describe, it, expect } from "vitest";
import { analyzeEnv } from "../logic";

describe("env-file-validator regressions", () => {
  it("flags a lonely quote as unterminated", () => {
    const r = analyzeEnv('A="');
    expect(r.issues.some((i) => i.message.includes("Unterminated"))).toBe(true);
  });
  it("flags mismatched quotes as unterminated", () => {
    const r = analyzeEnv("A=\"abc'");
    expect(r.issues.some((i) => i.message.includes("Unterminated"))).toBe(true);
  });
  it("still accepts properly quoted values", () => {
    expect(analyzeEnv('A="abc"').issues).toHaveLength(0);
  });
});
