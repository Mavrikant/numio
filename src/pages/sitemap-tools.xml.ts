/**
 * /sitemap-tools.xml — standalone data-analysis tools (histogram, scatter,
 * time-series, stats-dashboard) in every locale.
 *
 * Tools are high-value engagement features, so priority 0.8.
 */
import type { APIRoute } from "astro";
import { LOCALES } from "@/config/site";
import { getAllTools } from "@/lib/tools-registry";
import {
  localeAlternates,
  renderUrlset,
  todayIso,
  type SitemapEntry,
} from "@/lib/sitemap";
import { SITE_URL, BASE_PATH } from "@/config/site";

export const GET: APIRoute = () => {
  const tools = getAllTools();
  const lastmod = todayIso();
  const entries: SitemapEntry[] = [];

  // Per-tool, per-locale URL
  for (const tool of tools) {
    const alternates = localeAlternates((l) => `/${l}/tools/${tool.slug}/`);
    for (const locale of LOCALES) {
      entries.push({
        loc: `${SITE_URL}${BASE_PATH}/${locale}/tools/${tool.slug}/`,
        lastmod,
        changefreq: "monthly",
        priority: 0.8,
        alternates,
      });
    }
  }

  // Tools landing page (per locale)
  const indexAlternates = localeAlternates((l) => `/${l}/tools/`);
  for (const locale of LOCALES) {
    entries.push({
      loc: `${SITE_URL}${BASE_PATH}/${locale}/tools/`,
      lastmod,
      changefreq: "weekly",
      priority: 0.7,
      alternates: indexAlternates,
    });
  }

  return new Response(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
