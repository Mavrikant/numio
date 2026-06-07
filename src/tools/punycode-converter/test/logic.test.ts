import { describe, it, expect } from "vitest";
import { domainToAscii, domainToUnicode, encode, decode } from "../logic";

describe("punycode encode/decode", () => {
  it("round-trips a German label", () => {
    expect(encode("münchen")).toBe("mnchen-3ya");
    expect(decode("mnchen-3ya")).toBe("münchen");
  });
  it("round-trips a Japanese label", () => {
    expect(encode("例え")).toBe("r8jz45g");
    expect(decode("r8jz45g")).toBe("例え");
  });
});

describe("domainToAscii", () => {
  it("encodes münchen.de", () => {
    expect(domainToAscii("münchen.de")).toBe("xn--mnchen-3ya.de");
  });
  it("encodes 例え.jp", () => {
    expect(domainToAscii("例え.jp")).toBe("xn--r8jz45g.jp");
  });
  it("passes pure-ASCII domains through unchanged", () => {
    expect(domainToAscii("example.com")).toBe("example.com");
    expect(domainToAscii("sub.example.co.uk")).toBe("sub.example.co.uk");
  });
});

describe("domainToUnicode", () => {
  it("decodes xn--mnchen-3ya.de", () => {
    expect(domainToUnicode("xn--mnchen-3ya.de")).toBe("münchen.de");
  });
  it("decodes xn--r8jz45g.jp", () => {
    expect(domainToUnicode("xn--r8jz45g.jp")).toBe("例え.jp");
  });
  it("passes pure-ASCII domains through unchanged", () => {
    expect(domainToUnicode("example.com")).toBe("example.com");
  });
  it("round-trips multi-label domains", () => {
    const u = "münchen.例え.com";
    expect(domainToUnicode(domainToAscii(u))).toBe(u);
  });
});
