import { describe, it, expect } from "vitest";
import { buildUtmUrl } from "../logic";

const empty = { url: "", source: "", medium: "", campaign: "", term: "", content: "", id: "" };

describe("utm-builder", () => {
  it("appends utm_source / medium / campaign", () => {
    const r = buildUtmUrl({ ...empty, url: "https://example.com/", source: "newsletter", medium: "email", campaign: "spring" });
    expect(r.url).toBe("https://example.com/?utm_source=newsletter&utm_medium=email&utm_campaign=spring");
  });
  it("preserves existing query params", () => {
    const r = buildUtmUrl({ ...empty, url: "https://example.com/?a=1", source: "x", medium: "y", campaign: "z" });
    expect(r.url).toContain("a=1");
    expect(r.url).toContain("utm_source=x");
  });
  it("omits empty utm fields", () => {
    const r = buildUtmUrl({ ...empty, url: "https://example.com/", source: "x" });
    expect(r.url).toBe("https://example.com/?utm_source=x");
    expect(r.url).not.toContain("utm_medium");
  });
  it("flags invalid URLs", () => {
    expect(buildUtmUrl({ ...empty, url: "not a url" }).error).not.toBeNull();
  });
  it("returns empty for empty URL", () => {
    expect(buildUtmUrl(empty)).toEqual({ url: "", error: null });
  });
});
