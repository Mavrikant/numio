import { describe, it, expect } from "vitest";
import { ipv4ToIpv6, ipv6ExtractIpv4 } from "../logic";

describe("ipv4ToIpv6", () => {
  it("produces the three IPv6 forms", () => {
    expect(ipv4ToIpv6("192.168.1.1")).toEqual({
      mappedHex: "::ffff:c0a8:0101",
      mappedDotted: "::ffff:192.168.1.1",
      sixToFour: "2002:c0a8:0101::",
    });
  });
  it("handles 0.0.0.0 and 255.255.255.255", () => {
    expect(ipv4ToIpv6("0.0.0.0").mappedHex).toBe("::ffff:0000:0000");
    expect(ipv4ToIpv6("255.255.255.255").sixToFour).toBe("2002:ffff:ffff::");
  });
  it("throws on invalid IPv4", () => {
    expect(() => ipv4ToIpv6("192.168.1")).toThrow();
    expect(() => ipv4ToIpv6("256.0.0.1")).toThrow();
    expect(() => ipv4ToIpv6("a.b.c.d")).toThrow();
  });
});

describe("ipv6ExtractIpv4", () => {
  it("extracts from hex IPv4-mapped form", () => {
    expect(ipv6ExtractIpv4("::ffff:c0a8:0101")).toBe("192.168.1.1");
  });
  it("extracts from dotted IPv4-mapped form", () => {
    expect(ipv6ExtractIpv4("::ffff:192.168.1.1")).toBe("192.168.1.1");
  });
  it("extracts from 6to4 form", () => {
    expect(ipv6ExtractIpv4("2002:c0a8:0101::")).toBe("192.168.1.1");
  });
  it("throws when no IPv4 is embedded", () => {
    expect(() => ipv6ExtractIpv4("2001:db8::1")).toThrow();
    expect(() => ipv6ExtractIpv4("not-an-address")).toThrow();
  });
});
