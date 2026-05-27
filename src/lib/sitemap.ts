/**
 * sitemap.ts — shared helpers for building XML sitemaps with hreflang.
 *
 * Each entry is rendered using Google's recommended pattern:
 *   <url>
 *     <loc>...</loc>
 *     <lastmod>YYYY-MM-DD</lastmod>
 *     <changefreq>monthly</changefreq>
 *     <priority>0.9</priority>
 *     <xhtml:link rel="alternate" hreflang="..." href="..." />  (one per locale)
 *   </url>
 *
 * Validates via `xmllint --noout` and Google Search Console.
 */

import { SITE_URL, BASE_PATH, LOCALES, DEFAULT_LOCALE, LOCALE_HTML_LANG, type Locale } from "@/config/site";
import { buildAbsoluteUrl, getLocalizedSlug } from "@/lib/i18n";
import type { CalculatorCategory } from "@/types/calculator";

export type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export interface SitemapAlternate {
  readonly hreflang: string;
  readonly href: string;
}

export interface SitemapEntry {
  readonly loc: string;
  readonly lastmod?: string;
  readonly changefreq?: ChangeFreq;
  /** 0.0 – 1.0 */
  readonly priority?: number;
  /** Hreflang alternates rendered as <xhtml:link> */
  readonly alternates?: ReadonlyArray<SitemapAlternate>;
}

const XML_HEADER = `<?xml version="1.0" encoding="UTF-8"?>`;
const URLSET_OPEN = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`;
const URLSET_CLOSE = `</urlset>`;
const SITEMAPINDEX_OPEN = `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
const SITEMAPINDEX_CLOSE = `</sitemapindex>`;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function renderUrlEntry(e: SitemapEntry): string {
  const parts: string[] = ["<url>", `<loc>${escapeXml(e.loc)}</loc>`];
  if (e.lastmod) parts.push(`<lastmod>${e.lastmod}</lastmod>`);
  if (e.changefreq) parts.push(`<changefreq>${e.changefreq}</changefreq>`);
  if (e.priority !== undefined) parts.push(`<priority>${e.priority.toFixed(1)}</priority>`);
  if (e.alternates) {
    for (const alt of e.alternates) {
      parts.push(`<xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`);
    }
  }
  parts.push("</url>");
  return parts.join("");
}

export function renderUrlset(entries: ReadonlyArray<SitemapEntry>): string {
  return `${XML_HEADER}\n${URLSET_OPEN}\n${entries.map(renderUrlEntry).join("\n")}\n${URLSET_CLOSE}\n`;
}

export interface SitemapIndexEntry {
  readonly loc: string;
  readonly lastmod?: string;
}

export function renderSitemapIndex(entries: ReadonlyArray<SitemapIndexEntry>): string {
  const items = entries.map((e) => {
    const parts = ["<sitemap>", `<loc>${escapeXml(e.loc)}</loc>`];
    if (e.lastmod) parts.push(`<lastmod>${e.lastmod}</lastmod>`);
    parts.push("</sitemap>");
    return parts.join("");
  });
  return `${XML_HEADER}\n${SITEMAPINDEX_OPEN}\n${items.join("\n")}\n${SITEMAPINDEX_CLOSE}\n`;
}

// ---------------------------------------------------------------------------
// Build hreflang alternates for a calculator across all locales.
// Returns one entry per locale + an x-default pointing to the English URL.
// ---------------------------------------------------------------------------

export function calcAlternates(
  category: CalculatorCategory,
  canonicalSlug: string,
): SitemapAlternate[] {
  const out: SitemapAlternate[] = [];
  for (const locale of LOCALES) {
    const localizedSlug = getLocalizedSlug(canonicalSlug, locale);
    out.push({
      hreflang: LOCALE_HTML_LANG[locale],
      href: buildAbsoluteUrl(locale, category, localizedSlug),
    });
  }
  out.push({
    hreflang: "x-default",
    href: buildAbsoluteUrl(DEFAULT_LOCALE, category, getLocalizedSlug(canonicalSlug, DEFAULT_LOCALE)),
  });
  return out;
}

// ---------------------------------------------------------------------------
// Generic "page across all locales" alternates — used for tools, /api/, etc.
// pathBuilder is a function that takes a Locale and returns the path segment.
// ---------------------------------------------------------------------------

export function localeAlternates(
  pathBuilder: (locale: Locale) => string,
): SitemapAlternate[] {
  const out: SitemapAlternate[] = [];
  for (const locale of LOCALES) {
    out.push({
      hreflang: LOCALE_HTML_LANG[locale],
      href: `${SITE_URL}${BASE_PATH}${pathBuilder(locale)}`,
    });
  }
  out.push({
    hreflang: "x-default",
    href: `${SITE_URL}${BASE_PATH}${pathBuilder(DEFAULT_LOCALE)}`,
  });
  return out;
}

/** Today's date as YYYY-MM-DD for <lastmod> defaults. */
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Priority by calculator P-level. */
export function priorityFor(p: "P0" | "P1" | "P2"): number {
  return p === "P0" ? 0.9 : p === "P1" ? 0.7 : 0.5;
}
