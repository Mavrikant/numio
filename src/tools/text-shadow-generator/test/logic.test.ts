import { describe, it, expect } from "vitest";
import { buildTextShadow } from "../logic";

describe("text-shadow-generator", () => {
  it("builds a text-shadow value", () => {
    expect(buildTextShadow(2, 2, 4, "#000000")).toBe("2px 2px 4px #000000");
  });
});
