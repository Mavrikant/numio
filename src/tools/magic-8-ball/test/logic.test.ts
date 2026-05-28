import { describe, it, expect } from "vitest";
import { ANSWERS, shake } from "../logic";

describe("magic-8-ball", () => {
  it("ships the classic 20 answers", () => {
    expect(ANSWERS).toHaveLength(20);
  });
  it("groups answers into three sentiment buckets", () => {
    const kinds = new Set(ANSWERS.map((a) => a.kind));
    expect(kinds.has("yes")).toBe(true);
    expect(kinds.has("noncommittal")).toBe(true);
    expect(kinds.has("no")).toBe(true);
  });
  it("uses the supplied random source", () => {
    let calls = 0;
    const r = () => { calls++; return 0; };
    expect(shake(r)).toBe(ANSWERS[0]);
    expect(calls).toBe(1);
  });
  it("returns the last answer at rand=0.999...", () => {
    expect(shake(() => 0.9999999)).toBe(ANSWERS[ANSWERS.length - 1]);
  });
});
