import { describe, it, expect } from "vitest";
import { decodeBase64 } from "../logic";

describe("base64 regressions", () => {
  it("rejects input with length ≡ 1 (mod 4) instead of emitting a garbage byte", () => {
    expect(() => decodeBase64("A")).toThrow();
    expect(() => decodeBase64("QQQQQ")).toThrow();
  });
});
