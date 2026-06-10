import { describe, it, expect } from "vitest";
import { analyzeText } from "../logic";

describe("word-counter regressions", () => {
  it("counts a trailing unterminated sentence", () => {
    expect(analyzeText("Hello. World").sentences).toBe(2);
  });
  it("keeps single-fragment and terminated counts", () => {
    expect(analyzeText("World").sentences).toBe(1);
    expect(analyzeText("Hello. World.").sentences).toBe(2);
    expect(analyzeText("Hello!").sentences).toBe(1);
  });
});
