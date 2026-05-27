/**
 * /sitemap-pages.xml — static / chrome pages:
 *   - Home (per locale)
 *   - Category index pages (5 × 12 locales)
 *   - Static pages (about, contact, privacy)
 *
 * High priority for home (1.0) and category indexes (0.8) — these are the
 * primary navigation destinations.
 */
import type { APIRoute } from "astro";
import { LOCALES, type Locale } from "@/config/site";
import { CATEGORIES } from "@/types/calculator";
import { getAvailableCategories } from "@/lib/registry";
import {
  localeAlternates,
  renderUrlset,
  todayIso,
  type SitemapEntry,
} from "@/lib/sitemap";
import { SITE_URL, BASE_PATH } from "@/config/site";

const STATIC_PAGES = ["about", "contact", "privacy", "sitemap"] as const;

export const GET: APIRoute = () => {
  const lastmod = todayIso();
  const entries: SitemapEntry[] = [];
  const activeCategories = getAvailableCategories();

  // 1. Root home page (canonical, no locale)
  entries.push({
    loc: `${SITE_URL}${BASE_PATH}/`,
    lastmod,
    changefreq: "weekly",
    priority: 1.0,
    alternates: localeAlternates((l) => `/${l}/`),
  });

  // 2. Per-locale home pages
  const homeAlternates = localeAlternates((l) => `/${l}/`);
  for (const locale of LOCALES) {
    entries.push({
      loc: `${SITE_URL}${BASE_PATH}/${locale}/`,
      lastmod,
      changefreq: "weekly",
      priority: 0.9,
      alternates: homeAlternates,
    });
  }

  // 3. Category index pages — one per category per locale
  for (const cat of CATEGORIES) {
    if (!activeCategories.includes(cat)) continue;
    const catAlternates = localeAlternates((l: Locale) => `/${l}/${cat}/`);
    for (const locale of LOCALES) {
      entries.push({
        loc: `${SITE_URL}${BASE_PATH}/${locale}/${cat}/`,
        lastmod,
        changefreq: "weekly",
        priority: 0.8,
        alternates: catAlternates,
      });
    }
  }

  // 4. Static pages (about, contact, privacy) — one per locale
  for (const page of STATIC_PAGES) {
    const pageAlternates = localeAlternates((l: Locale) => `/${l}/${page}/`);
    for (const locale of LOCALES) {
      entries.push({
        loc: `${SITE_URL}${BASE_PATH}/${locale}/${page}/`,
        lastmod,
        changefreq: "yearly",
        priority: 0.3,
        alternates: pageAlternates,
      });
    }
  }

  return new Response(renderUrlset(entries), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
