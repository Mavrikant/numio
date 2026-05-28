import { describe, it, expect } from "vitest";
import { validateIban, formatIban } from "../logic";

describe("iban-validator", () => {
  it("validates known-good IBANs", () => {
    expect(validateIban("GB82 WEST 1234 5698 7654 32").valid).toBe(true);
    expect(validateIban("DE89 3704 0044 0532 0130 00").valid).toBe(true);
    expect(validateIban("TR33 0006 1005 1978 6457 8413 26").valid).toBe(true);
  });
  it("extracts country, check digits and BBAN", () => {
    const r = validateIban("TR330006100519786457841326");
    expect(r.country).toBe("TR");
    expect(r.checkDigits).toBe("33");
    expect(r.bban).toBe("0006100519786457841326");
  });
  it("rejects a wrong checksum", () => {
    expect(validateIban("GB82 WEST 1234 5698 7654 33").valid).toBe(false);
  });
  it("rejects wrong length for a known country", () => {
    expect(validateIban("DE89 3704 0044 0532").error).toMatch(/22 characters/);
  });
  it("rejects garbage input", () => {
    expect(validateIban("not an iban").valid).toBe(false);
  });
  it("formats into groups of four", () => {
    expect(formatIban("de89370400440532013000")).toBe("DE89 3704 0044 0532 0130 00");
  });
  it("returns no error for empty input", () => {
    const r = validateIban("");
    expect(r.valid).toBe(false);
    expect(r.error).toBeNull();
  });
});
