import { describe, it, expect } from "vitest";
import { convertIpv6, expandIpv6, compressIpv6 } from "../logic";

describe("ipv6-expand-compress", () => {
  it("expands shorthand", () => {
    expect(convertIpv6("2001:db8::1").expanded).toBe("2001:0db8:0000:0000:0000:0000:0000:0001");
  });
  it("compresses the longest zero run", () => {
    expect(convertIpv6("2001:0db8:0000:0000:0000:0000:0000:0001").compressed).toBe("2001:db8::1");
  });
  it("compresses loopback to ::1", () => {
    expect(convertIpv6("0:0:0:0:0:0:0:1").compressed).toBe("::1");
  });
  it("compresses unspecified to ::", () => {
    expect(convertIpv6("0:0:0:0:0:0:0:0").compressed).toBe("::");
  });
  it("does not collapse a single zero group", () => {
    expect(compressIpv6(["2001", "0db8", "0000", "1234", "0000", "0000", "0000", "0001"])).toBe("2001:db8:0:1234::1");
  });
  it("rejects multiple :: tokens", () => {
    expect(expandIpv6("2001::db8::1")).toBeNull();
  });
  it("rejects non-hex groups", () => {
    expect(expandIpv6("xyz::1")).toBeNull();
  });
  it("returns empty for empty input", () => {
    expect(convertIpv6("")).toMatchObject({ expanded: "", error: null });
  });
});
