/**
 * /sitemap-index.xml — root sitemap that points to per-section sitemaps.
 *
 * Google fetches this first, then each <sitemap> child URL. Splitting by
 * section (calculators / embeds / tools / api / pages) keeps each file well
 * under the 50k-URL / 50MB limit and makes diagnostics easier.
 */
import type { APIRoute } from "astro";
import { SITE_URL, BASE_PATH } from "@/config/site";
import { renderSitemapIndex, todayIso } from "@/lib/sitemap";

export const GET: APIRoute = () => {
  const base = `${SITE_URL}${BASE_PATH}`;
  const lastmod = todayIso();
  const xml = renderSitemapIndex([
    { loc: `${base}/sitemap-pages.xml`, lastmod },
    { loc: `${base}/sitemap-calculators.xml`, lastmod },
    { loc: `${base}/sitemap-tools.xml`, lastmod },
    { loc: `${base}/sitemap-embed.xml`, lastmod },
    { loc: `${base}/sitemap-api.xml`, lastmod },
  ]);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
