import { describe, it, expect } from "vitest";
import { detectKind, rdapUrl, summarizeRdap } from "../logic";

describe("detectKind", () => {
  it("detects IPs", () => {
    expect(detectKind("8.8.8.8")).toBe("ip");
    expect(detectKind("2001:4860:4860::8888")).toBe("ip");
  });
  it("detects ASNs with and without the AS prefix", () => {
    expect(detectKind("AS15169")).toBe("autnum");
    expect(detectKind("15169")).toBe("autnum");
    expect(detectKind("as15169")).toBe("autnum");
  });
  it("falls back to domain", () => {
    expect(detectKind("example.com")).toBe("domain");
    expect(detectKind("sub.example.co.uk")).toBe("domain");
  });
});

describe("rdapUrl", () => {
  const base = "https://rdap.org";
  it("builds an IP URL", () => {
    expect(rdapUrl("8.8.8.8", base)).toBe("https://rdap.org/ip/8.8.8.8");
  });
  it("builds an autnum URL stripping the AS prefix", () => {
    expect(rdapUrl("AS15169", base)).toBe("https://rdap.org/autnum/15169");
    expect(rdapUrl("15169", base)).toBe("https://rdap.org/autnum/15169");
  });
  it("builds a domain URL, lowercased", () => {
    expect(rdapUrl("Example.COM", base)).toBe("https://rdap.org/domain/example.com");
  });
  it("tolerates a trailing slash on the base", () => {
    expect(rdapUrl("8.8.8.8", "https://rdap.org/")).toBe("https://rdap.org/ip/8.8.8.8");
  });
});

describe("summarizeRdap", () => {
  it("pulls handle, name, country, registrar, events and entities from a sample object", () => {
    const sample = {
      handle: "2906",
      ldhName: "example.com",
      country: "US",
      events: [
        { eventAction: "registration", eventDate: "1995-08-14T04:00:00Z" },
        { eventAction: "expiration", eventDate: "2026-08-13T04:00:00Z" },
      ],
      entities: [
        {
          roles: ["registrar"],
          handle: "376",
          vcardArray: ["vcard", [["version", {}, "text", "4.0"], ["fn", {}, "text", "RESERVED-Internet Assigned Numbers Authority"]]],
        },
        { roles: ["administrative"], handle: "ADMIN-123" },
      ],
    };
    const s = summarizeRdap(sample, "domain");
    expect(s.handle).toBe("2906");
    expect(s.name).toBe("example.com");
    expect(s.country).toBe("US");
    expect(s.registrar).toBe("RESERVED-Internet Assigned Numbers Authority");
    expect(s.events).toEqual([
      { action: "registration", date: "1995-08-14T04:00:00Z" },
      { action: "expiration", date: "2026-08-13T04:00:00Z" },
    ]);
    expect(s.entities).toContain("RESERVED-Internet Assigned Numbers Authority (registrar)");
    expect(s.entities).toContain("ADMIN-123 (administrative)");
  });

  it("handles a minimal / empty object without throwing", () => {
    const s = summarizeRdap({}, "ip");
    expect(s.events).toEqual([]);
    expect(s.entities).toEqual([]);
    expect(s.registrar).toBeUndefined();
  });
});
