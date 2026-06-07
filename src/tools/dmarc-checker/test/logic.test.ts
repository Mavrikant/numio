import { describe, it, expect } from "vitest";
import { parseDmarc, findDmarcRecord } from "../logic";

describe("parseDmarc", () => {
  it("parses a typical enforcing DMARC record", () => {
    const r = parseDmarc("v=DMARC1; p=reject; rua=mailto:a@x.com; pct=100");
    expect(r.v).toBe("DMARC1");
    expect(r.p).toBe("reject");
    expect(r.rua).toEqual(["mailto:a@x.com"]);
    expect(r.pct).toBe("100");
    expect(r.valid).toBe(true);
  });

  it("warns when policy is p=none", () => {
    const r = parseDmarc("v=DMARC1; p=none; rua=mailto:a@x.com");
    expect(r.p).toBe("none");
    expect(r.warnings.some((w) => w.toLowerCase().includes("none"))).toBe(true);
  });

  it("parses sp, alignment tags and multiple report addresses", () => {
    const r = parseDmarc("v=DMARC1; p=quarantine; sp=reject; adkim=s; aspf=r; rua=mailto:a@x.com,mailto:b@x.com; ruf=mailto:f@x.com");
    expect(r.sp).toBe("reject");
    expect(r.adkim).toBe("s");
    expect(r.aspf).toBe("r");
    expect(r.rua).toEqual(["mailto:a@x.com", "mailto:b@x.com"]);
    expect(r.ruf).toEqual(["mailto:f@x.com"]);
  });

  it("marks records not starting with v=DMARC1 as invalid", () => {
    const r = parseDmarc("p=reject; rua=mailto:a@x.com");
    expect(r.valid).toBe(false);
  });

  it("flags a missing policy tag", () => {
    const r = parseDmarc("v=DMARC1; rua=mailto:a@x.com");
    expect(r.valid).toBe(false);
    expect(r.warnings.some((w) => w.includes("'p'"))).toBe(true);
  });
});

describe("findDmarcRecord", () => {
  it("picks the record starting with v=DMARC1", () => {
    const records = ["something-else", "v=DMARC1; p=reject"];
    expect(findDmarcRecord(records)).toBe("v=DMARC1; p=reject");
  });

  it("returns undefined when no DMARC record is present", () => {
    expect(findDmarcRecord(["v=spf1 ~all"])).toBeUndefined();
  });
});
