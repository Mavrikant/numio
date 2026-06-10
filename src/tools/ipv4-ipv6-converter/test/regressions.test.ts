import { describe, it, expect } from "vitest";
import { ipv6ExtractIpv4 } from "../logic";

describe("ipv4-ipv6-converter regressions", () => {
  it("rejects addresses that merely contain ::ffff: in the middle", () => {
    expect(() => ipv6ExtractIpv4("a::ffff:1:2")).toThrow();
    expect(() => ipv6ExtractIpv4("1:2:3::ffff:192.168.1.1")).toThrow();
  });
  it("still extracts genuine IPv4-mapped addresses", () => {
    expect(ipv6ExtractIpv4("::ffff:192.168.1.1")).toBe("192.168.1.1");
    expect(ipv6ExtractIpv4("::ffff:c0a8:0101")).toBe("192.168.1.1");
    expect(ipv6ExtractIpv4("0:0:0:0:0:ffff:c0a8:0101")).toBe("192.168.1.1");
  });
});
