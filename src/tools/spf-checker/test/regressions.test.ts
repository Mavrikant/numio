import { describe, it, expect } from "vitest";
import { parseSpf } from "../logic";

describe("spf-checker regressions", () => {
  it("counts dual-CIDR a/mx mechanisms toward the 10-lookup limit", () => {
    const r = parseSpf("v=spf1 a/24 mx/24 -all");
    expect(r.dnsLookupCount).toBe(2);
  });
});
