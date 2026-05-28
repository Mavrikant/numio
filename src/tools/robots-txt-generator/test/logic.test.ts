import { describe, it, expect } from "vitest";
import { buildRobotsTxt } from "../logic";

describe("robots-txt-generator", () => {
  it("emits a basic group with Disallow", () => {
    expect(buildRobotsTxt({ groups: [{ userAgent: "*", allow: [], disallow: ["/admin/"], crawlDelay: "" }], sitemaps: [] })).toBe("User-agent: *\nDisallow: /admin/");
  });
  it("includes Allow before Disallow", () => {
    const out = buildRobotsTxt({ groups: [{ userAgent: "Googlebot", allow: ["/public/"], disallow: ["/private/"], crawlDelay: "" }], sitemaps: [] });
    expect(out.indexOf("Allow")).toBeLessThan(out.indexOf("Disallow"));
  });
  it("emits Crawl-delay when supplied", () => {
    expect(buildRobotsTxt({ groups: [{ userAgent: "*", allow: [], disallow: [], crawlDelay: "5" }], sitemaps: [] })).toContain("Crawl-delay: 5");
  });
  it("appends sitemap URLs after groups", () => {
    const out = buildRobotsTxt({ groups: [{ userAgent: "*", allow: [], disallow: ["/x"], crawlDelay: "" }], sitemaps: ["https://a.com/sitemap.xml"] });
    expect(out).toMatch(/Disallow: \/x\n\nSitemap: https:\/\/a\.com\/sitemap\.xml/);
  });
  it("returns empty for empty input", () => {
    expect(buildRobotsTxt({ groups: [], sitemaps: [] })).toBe("");
  });
  it("defaults blank user-agent to *", () => {
    expect(buildRobotsTxt({ groups: [{ userAgent: "", allow: [], disallow: ["/"], crawlDelay: "" }], sitemaps: [] })).toContain("User-agent: *");
  });
});
