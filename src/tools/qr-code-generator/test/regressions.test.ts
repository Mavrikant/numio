import { describe, it, expect } from "vitest";
import { buildVCardString } from "../logic";

describe("qr-code-generator regressions", () => {
  it("escapes vCard special characters per RFC 2426", () => {
    const out = buildVCardString({
      name: "Smith; John",
      phone: "",
      email: "a@b.c",
      org: "Acme, Inc.",
      url: "",
    });
    expect(out).toContain("FN:Smith\\; John");
    expect(out).toContain("ORG:Acme\\, Inc.");
  });
});
