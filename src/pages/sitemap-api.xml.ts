/**
 * /sitemap-api.xml — public JSON API endpoints, one per calculator.
 *
 * These are JSON not HTML; indexing them helps LLMs discover the tool surface.
 * Priority 0.5 since they're machine endpoints not landing pages.
 */
import type { APIRoute } from "astro";
import { getAllCalculators } from "@/lib/registry";
import {
  renderUrlset,
  todayIso,
  type SitemapEntry,
} from "@/lib/sitemap";
import { SITE_URL, BASE_PATH } from "@/config/site";

export const GET: APIRoute = () => {
  const calcs = getAllCalculators();
  const lastmod = todayIso();
  const entries: SitemapEntry[] = [];

  // API docs landing page
  entries.push({
    loc: `${SITE_URL}${BASE_PATH}/api/`,
    lastmod,
    changefreq: "monthly",
    priority: 0.6,
  });

  for (const calc of calcs) {
    entries.push({
      loc: `${SITE_URL}${BASE_PATH}/api/${calc.slug}.json`,
      lastmod,
      changefreq: "monthly",
      priority: 0.5,
    });
  }

  return new Response(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
