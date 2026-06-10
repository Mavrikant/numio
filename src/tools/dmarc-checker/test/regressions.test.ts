import { describe, it, expect } from "vitest";
import { parseDmarc } from "../logic";

describe("dmarc-checker regressions", () => {
  it("flags unknown policy values as invalid", () => {
    const r = parseDmarc("v=DMARC1; p=banana");
    expect(r.valid).toBe(false);
    expect(r.warnings.some((w) => w.includes("banana"))).toBe(true);
  });
  it("accepts the three RFC 7489 policies", () => {
    for (const p of ["none", "quarantine", "reject"]) {
      expect(parseDmarc(`v=DMARC1; p=${p}`).valid).toBe(true);
    }
  });
});
