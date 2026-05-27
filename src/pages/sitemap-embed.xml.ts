/**
 * /sitemap-embed.xml — embed widget routes (one per calc per locale).
 *
 * Lower priority (0.4) since these are for iframe consumption, not direct
 * user landing. Still indexable so they show up as backlink-bait pages.
 *
 * NOTE: If B1 (embed) is not merged yet at sitemap generation time, the
 * URLs simply won't resolve; that's OK — Google handles missing pages.
 */
import type { APIRoute } from "astro";
import { LOCALES } from "@/config/site";
import { getAllCalculators } from "@/lib/registry";
import { getLocalizedSlug } from "@/lib/i18n";
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

  for (const calc of calcs) {
    for (const locale of LOCALES) {
      const localizedSlug = getLocalizedSlug(calc.slug, locale);
      entries.push({
        loc: `${SITE_URL}${BASE_PATH}/embed/${locale}/${calc.category}/${localizedSlug}/`,
        lastmod,
        changefreq: "monthly",
        priority: 0.4,
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
