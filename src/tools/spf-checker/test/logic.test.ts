import { describe, it, expect } from "vitest";
import { parseSpf, findSpfRecord } from "../logic";

describe("parseSpf", () => {
  it("parses a typical SPF record with includes", () => {
    const r = parseSpf("v=spf1 include:_spf.google.com include:mailgun.org ~all");
    expect(r.version).toBe("spf1");
    expect(r.all).toBe("~all");
    expect(r.valid).toBe(true);
    expect(r.dnsLookupCount).toBe(2);
    const includes = r.mechanisms.filter((m) => m.type === "include");
    expect(includes).toHaveLength(2);
    expect(includes[0].value).toBe("_spf.google.com");
    expect(includes[1].value).toBe("mailgun.org");
  });

  it("counts a, mx, ptr, exists and redirect toward the DNS lookup count", () => {
    const r = parseSpf("v=spf1 a mx ptr exists:%{i}.example.com include:x.com redirect=y.com");
    expect(r.dnsLookupCount).toBe(6);
  });

  it("flags a warning when DNS lookups exceed the RFC 7208 limit of 10", () => {
    const includes = Array.from({ length: 11 }, (_, i) => `include:host${i}.example.com`).join(" ");
    const r = parseSpf(`v=spf1 ${includes} ~all`);
    expect(r.dnsLookupCount).toBe(11);
    expect(r.warnings.some((w) => w.includes("10"))).toBe(true);
  });

  it("marks records that do not start with v=spf1 as invalid", () => {
    const r = parseSpf("include:_spf.google.com ~all");
    expect(r.valid).toBe(false);
    expect(r.warnings.length).toBeGreaterThan(0);
  });

  it("captures qualifiers on the all mechanism", () => {
    expect(parseSpf("v=spf1 -all").all).toBe("-all");
    expect(parseSpf("v=spf1 +all").all).toBe("+all");
  });
});

describe("findSpfRecord", () => {
  it("picks the record starting with v=spf1", () => {
    const records = ["google-site-verification=abc", "v=spf1 include:_spf.google.com ~all"];
    expect(findSpfRecord(records)).toBe("v=spf1 include:_spf.google.com ~all");
  });

  it("returns undefined when no SPF record is present", () => {
    expect(findSpfRecord(["some-other-txt"])).toBeUndefined();
  });
});
