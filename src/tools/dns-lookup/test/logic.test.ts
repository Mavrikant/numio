import { describe, it, expect } from "vitest";
import { RECORD_TYPES } from "../logic";

describe("dns-lookup", () => {
  it("ships the standard record types", () => {
    expect(RECORD_TYPES).toContain("A");
    expect(RECORD_TYPES).toContain("AAAA");
    expect(RECORD_TYPES).toContain("MX");
    expect(RECORD_TYPES).toContain("TXT");
    expect(RECORD_TYPES).toContain("CNAME");
  });
});
