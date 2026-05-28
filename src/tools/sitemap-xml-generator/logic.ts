export interface SitemapEntry {
  readonly url: string;
  readonly lastmod?: string;
  readonly changefreq?: string;
  readonly priority?: string;
}

const esc = (s: string): string => s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c]!);

/** Render an XML sitemap from a list of URL entries. */
export function buildSitemap(entries: SitemapEntry[]): string {
  const lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];
  for (const entry of entries) {
    if (!entry.url.trim()) continue;
    lines.push("  <url>");
    lines.push(`    <loc>${esc(entry.url.trim())}</loc>`);
    if (entry.lastmod) lines.push(`    <lastmod>${esc(entry.lastmod)}</lastmod>`);
    if (entry.changefreq) lines.push(`    <changefreq>${esc(entry.changefreq)}</changefreq>`);
    if (entry.priority) lines.push(`    <priority>${esc(entry.priority)}</priority>`);
    lines.push("  </url>");
  }
  lines.push("</urlset>");
  return lines.join("\n");
}

/** Parse a textarea of URLs (one per line, optionally with comma-separated metadata) into entries. */
export function parseEntries(text: string, defaults: { lastmod?: string; changefreq?: string; priority?: string }): SitemapEntry[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((url) => ({ url, ...defaults }));
}
