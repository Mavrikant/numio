import { describe, it, expect } from "vitest";
import { parseDkim, findDkimRecord } from "../logic";

describe("parseDkim", () => {
  it("parses a record with a public key", () => {
    const r = parseDkim("v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GN");
    expect(r.hasPublicKey).toBe(true);
    expect(r.k).toBe("rsa");
    expect(r.v).toBe("DKIM1");
    expect(r.valid).toBe(true);
  });

  it("flags an empty public key as revoked", () => {
    const r = parseDkim("v=DKIM1; k=rsa; p=");
    expect(r.hasPublicKey).toBe(false);
    expect(r.valid).toBe(false);
    expect(r.warnings.some((w) => w.toLowerCase().includes("revoked"))).toBe(true);
  });

  it("captures the t (flags) tag when present", () => {
    const r = parseDkim("v=DKIM1; k=rsa; t=s; p=AAAA");
    expect(r.t).toBe("s");
  });

  it("warns when no p tag is present", () => {
    const r = parseDkim("v=DKIM1; k=rsa");
    expect(r.hasPublicKey).toBe(false);
    expect(r.valid).toBe(false);
    expect(r.warnings.length).toBeGreaterThan(0);
  });
});

describe("findDkimRecord", () => {
  it("picks a record starting with v=DKIM1", () => {
    const records = ["other", "v=DKIM1; k=rsa; p=AAAA"];
    expect(findDkimRecord(records)).toBe("v=DKIM1; k=rsa; p=AAAA");
  });

  it("falls back to a record containing a p= tag", () => {
    const records = ["k=rsa; p=AAAA"];
    expect(findDkimRecord(records)).toBe("k=rsa; p=AAAA");
  });

  it("returns undefined when no DKIM-like record is present", () => {
    expect(findDkimRecord(["v=spf1 ~all"])).toBeUndefined();
  });
});
