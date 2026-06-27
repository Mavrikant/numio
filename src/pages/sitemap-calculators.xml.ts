/**
 * /sitemap-calculators.xml — every calculator page in every locale.
 *
 * 90 calcs × 16 locales = ~1,440 URLs. Each <url> includes xhtml:link
 * hreflang annotations for the same calculator in the other 15 locales,
 * which is Google's required pattern for multilingual sites.
 *
 * Priority: P0 = 0.9, P1 = 0.7, P2 = 0.5. Changefreq: monthly (formulas
 * don't change often; content might be tweaked).
 */
import type { APIRoute } from "astro";
import { LOCALES, LOCALE_HTML_LANG, type Locale } from "@/config/site";
import { buildAbsoluteUrl, getLocalizedSlug } from "@/lib/i18n";
import { getAllCalculators } from "@/lib/registry";
import {
  calcAlternates,
  priorityFor,
  renderUrlset,
  todayIso,
  type SitemapEntry,
} from "@/lib/sitemap";

export const GET: APIRoute = () => {
  const calcs = getAllCalculators();
  const lastmod = todayIso();
  const entries: SitemapEntry[] = [];

  for (const calc of calcs) {
    const alternates = calcAlternates(calc.category, calc.slug);
    for (const locale of LOCALES) {
      const localizedSlug = getLocalizedSlug(calc.slug, locale);
      entries.push({
        loc: buildAbsoluteUrl(locale, calc.category, localizedSlug),
        lastmod,
        changefreq: "monthly",
        priority: priorityFor(calc.priority),
        alternates,
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

// Silence unused-import warnings when ts-strict is on
void LOCALE_HTML_LANG;
void ((_: Locale) => _);
