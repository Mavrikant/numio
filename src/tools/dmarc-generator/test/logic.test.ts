import { describe, it, expect } from "vitest";
import { buildDmarc, dmarcHost } from "../logic";

describe("buildDmarc", () => {
  it("builds a record from a policy, percentage and rua", () => {
    expect(buildDmarc({ p: "reject", pct: "100", rua: "mailto:a@x.com" })).toBe(
      "v=DMARC1; p=reject; pct=100; rua=mailto:a@x.com",
    );
  });

  it("emits a minimal record from only the policy", () => {
    expect(buildDmarc({ p: "none" })).toBe("v=DMARC1; p=none");
  });

  it("emits optional tags in canonical order and skips empty values", () => {
    const record = buildDmarc({
      p: "quarantine",
      sp: "reject",
      pct: "50",
      rua: "mailto:a@x.com",
      ruf: "",
      adkim: "s",
      aspf: "r",
    });
    expect(record).toBe("v=DMARC1; p=quarantine; sp=reject; pct=50; rua=mailto:a@x.com; adkim=s; aspf=r");
  });

  it("includes fo when provided", () => {
    expect(buildDmarc({ p: "reject", fo: "1" })).toBe("v=DMARC1; p=reject; fo=1");
  });
});

describe("dmarcHost", () => {
  it("prefixes the domain with _dmarc.", () => {
    expect(dmarcHost("example.com")).toBe("_dmarc.example.com");
  });

  it("trims whitespace from the domain", () => {
    expect(dmarcHost("  example.com  ")).toBe("_dmarc.example.com");
  });
});
