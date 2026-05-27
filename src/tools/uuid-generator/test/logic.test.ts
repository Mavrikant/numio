import { describe, it, expect } from "vitest";
import { formatUuid, isUuid } from "../logic";

const SAMPLE = "1b4e28ba-2fa1-11d2-883f-0016d3cca427";

describe("uuid-generator logic", () => {
  it("recognises canonical UUIDs", () => {
    expect(isUuid(SAMPLE)).toBe(true);
    expect(isUuid("nope")).toBe(false);
  });
  it("applies uppercase and hyphen options", () => {
    expect(formatUuid(SAMPLE, false, true)).toBe(SAMPLE);
    expect(formatUuid(SAMPLE, true, true)).toBe(SAMPLE.toUpperCase());
    expect(formatUuid(SAMPLE, false, false)).toBe("1b4e28ba2fa111d2883f0016d3cca427");
    expect(formatUuid(SAMPLE, true, false)).toBe("1B4E28BA2FA111D2883F0016D3CCA427");
  });
});
