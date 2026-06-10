import { describe, it, expect } from "vitest";
import { decodeBase32 } from "../logic";

describe("base32 regressions", () => {
  it("accepts padded input with a trailing newline", () => {
    expect(decodeBase32("MZXW6===\n")).toBe("foo");
  });
});
