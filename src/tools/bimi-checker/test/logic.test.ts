import { describe, it, expect } from "vitest";
import { parseBimi, buildBimi } from "../logic";

describe("parseBimi", () => {
  it("parses a record with logo and VMC URLs", () => {
    const r = parseBimi("v=BIMI1; l=https://x.com/logo.svg; a=https://x.com/cert.pem");
    expect(r.v).toBe("BIMI1");
    expect(r.l).toBe("https://x.com/logo.svg");
    expect(r.a).toBe("https://x.com/cert.pem");
    expect(r.valid).toBe(true);
  });

  it("warns when the VMC (a) tag is missing", () => {
    const r = parseBimi("v=BIMI1; l=https://x.com/logo.svg");
    expect(r.l).toBe("https://x.com/logo.svg");
    expect(r.a).toBeUndefined();
    expect(r.warnings.some((w) => w.includes("'a'"))).toBe(true);
  });

  it("marks records without v=BIMI1 or l as invalid", () => {
    expect(parseBimi("l=https://x.com/logo.svg").valid).toBe(false);
    expect(parseBimi("v=BIMI1").valid).toBe(false);
  });
});

describe("buildBimi", () => {
  it("builds a record with only a logo URL", () => {
    expect(buildBimi({ l: "https://x.com/logo.svg" })).toBe("v=BIMI1; l=https://x.com/logo.svg;");
  });

  it("includes the VMC URL when given", () => {
    expect(buildBimi({ l: "https://x.com/logo.svg", a: "https://x.com/cert.pem" })).toBe(
      "v=BIMI1; l=https://x.com/logo.svg; a=https://x.com/cert.pem;",
    );
  });

  it("round-trips through parseBimi", () => {
    const built = buildBimi({ l: "https://x.com/logo.svg", a: "https://x.com/cert.pem" });
    const parsed = parseBimi(built);
    expect(parsed.l).toBe("https://x.com/logo.svg");
    expect(parsed.a).toBe("https://x.com/cert.pem");
    expect(parsed.valid).toBe(true);
  });
});
