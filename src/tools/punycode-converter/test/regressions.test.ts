import { describe, it, expect } from "vitest";
import { decode, encode } from "../logic";

describe("punycode-converter regressions", () => {
  it("rejects punctuation as Punycode digits", () => {
    expect(() => decode("a-!a")).toThrow();
    expect(() => decode("a-@a")).toThrow();
  });
  it("still round-trips valid Punycode", () => {
    expect(decode(encode("münchen"))).toBe("münchen");
    expect(decode("bcher-kva")).toBe("bücher");
  });
});
