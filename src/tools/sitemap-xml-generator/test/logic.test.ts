import { describe, it, expect } from "vitest";
import { buildSitemap, parseEntries } from "../logic";

describe("sitemap-xml-generator", () => {
  it("emits a valid XML header and urlset", () => {
    const out = buildSitemap([{ url: "https://a.com/" }]);
    expect(out).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(out).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    expect(out).toContain("<loc>https://a.com/</loc>");
    expect(out.endsWith("</urlset>")).toBe(true);
  });
  it("includes optional fields when provided", () => {
    const out = buildSitemap([{ url: "https://a.com/", lastmod: "2026-01-01", changefreq: "daily", priority: "0.8" }]);
    expect(out).toContain("<lastmod>2026-01-01</lastmod>");
    expect(out).toContain("<changefreq>daily</changefreq>");
    expect(out).toContain("<priority>0.8</priority>");
  });
  it("skips blank URLs", () => {
    expect(buildSitemap([{ url: "" }, { url: "https://a.com/" }])).toContain("<loc>https://a.com/</loc>");
  });
  it("escapes special characters in URLs", () => {
    expect(buildSitemap([{ url: "https://a.com/?q=<x>&y=1" }])).toContain("&lt;x&gt;&amp;");
  });
  it("parses a textarea of URLs with defaults", () => {
    const entries = parseEntries("https://a.com\nhttps://b.com\n", { changefreq: "weekly" });
    expect(entries).toHaveLength(2);
    expect(entries[0]!.changefreq).toBe("weekly");
  });
});
