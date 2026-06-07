import { describe, it, expect } from "vitest";
import { parseIpv6, formatIpv6, cidrToRange, rangeToCidr } from "../logic";

describe("parseIpv6 / formatIpv6", () => {
  it("round-trips compressed addresses", () => {
    expect(formatIpv6(parseIpv6("2001:db8::"))).toBe("2001:db8::");
    expect(formatIpv6(parseIpv6("2001:db8::3"))).toBe("2001:db8::3");
    expect(formatIpv6(parseIpv6("::1"))).toBe("::1");
    expect(formatIpv6(parseIpv6("::"))).toBe("::");
  });
  it("expands an explicit full address and compresses zeros", () => {
    expect(formatIpv6(parseIpv6("2001:0db8:0000:0000:0000:0000:0000:0001"))).toBe("2001:db8::1");
  });
  it("throws on invalid input", () => {
    expect(() => parseIpv6("2001:db8:::1")).toThrow();
    expect(() => parseIpv6("xyz::1")).toThrow();
    expect(() => parseIpv6("1:2:3:4:5:6:7:8:9")).toThrow();
    expect(() => parseIpv6("")).toThrow();
  });
});

describe("cidrToRange", () => {
  it("expands 2001:db8::/126", () => {
    expect(cidrToRange("2001:db8::/126")).toEqual({
      first: "2001:db8::",
      last: "2001:db8::3",
      count: "4",
    });
  });
  it("handles /128 and /0", () => {
    expect(cidrToRange("::1/128")).toEqual({ first: "::1", last: "::1", count: "1" });
    const all = cidrToRange("::/0");
    expect(all.first).toBe("::");
    expect(all.count).toBe((1n << 128n).toString());
  });
  it("throws on invalid CIDR", () => {
    expect(() => cidrToRange("2001:db8::")).toThrow();
    expect(() => cidrToRange("2001:db8::/129")).toThrow();
    expect(() => cidrToRange("zzz::/64")).toThrow();
  });
});

describe("rangeToCidr", () => {
  it("collapses an aligned range into a single CIDR", () => {
    expect(rangeToCidr("2001:db8::", "2001:db8::3")).toEqual(["2001:db8::/126"]);
  });
  it("covers an unaligned small range with multiple blocks", () => {
    const blocks = rangeToCidr("2001:db8::1", "2001:db8::4");
    expect(blocks).toEqual(["2001:db8::1/128", "2001:db8::2/127", "2001:db8::4/128"]);
  });
  it("covers a single address", () => {
    expect(rangeToCidr("2001:db8::5", "2001:db8::5")).toEqual(["2001:db8::5/128"]);
  });
  it("throws when start > end", () => {
    expect(() => rangeToCidr("2001:db8::5", "2001:db8::1")).toThrow();
    expect(() => rangeToCidr("nope", "2001:db8::1")).toThrow();
  });
});
