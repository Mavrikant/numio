import {
  LOCALES,
  DEFAULT_LOCALE,
  BASE_PATH,
  SITE_URL,
  LOCALE_HTML_LANG,
  isLocale,
  isRTL,
  type Locale,
} from "../config/site";
import type { CalculatorI18nBundle, I18nMessages } from "../types/i18n";

export { LOCALES, DEFAULT_LOCALE, isLocale, isRTL, type Locale };

const uiMessages = import.meta.glob<{ default: I18nMessages }>(
  "../i18n/ui/*.json",
  { eager: true },
);

const categoryMessages = import.meta.glob<{ default: Record<string, string> }>(
  "../i18n/categories/*.json",
  { eager: true },
);

const calcSlugMessages = import.meta.glob<{ default: Record<string, string> }>(
  "../i18n/slugs/*.json",
  { eager: true },
);

function loadByLocale<T>(
  modules: Record<string, { default: T }>,
  pattern: RegExp,
): Map<Locale, T> {
  const map = new Map<Locale, T>();
  for (const [path, mod] of Object.entries(modules)) {
    const match = path.match(pattern);
    if (!match) continue;
    const lang = match[1];
    if (lang && isLocale(lang)) {
      map.set(lang, mod.default);
    }
  }
  return map;
}

const uiByLocale = loadByLocale<I18nMessages>(
  uiMessages,
  /\/ui\/([a-z]{2})\.json$/,
);

const categoryByLocale = loadByLocale<Record<string, string>>(
  categoryMessages,
  /\/categories\/([a-z]{2})\.json$/,
);

const slugByLocale = loadByLocale<Record<string, string>>(
  calcSlugMessages,
  /\/slugs\/([a-z]{2})\.json$/,
);

export function t(locale: Locale, key: string): string {
  const messages = uiByLocale.get(locale) ?? uiByLocale.get(DEFAULT_LOCALE);
  if (!messages) return key;
  const value = resolveKey(messages, key);
  if (value !== undefined) return value;

  const fallback = uiByLocale.get(DEFAULT_LOCALE);
  if (!fallback) return key;
  return resolveKey(fallback, key) ?? key;
}

function resolveKey(messages: I18nMessages, key: string): string | undefined {
  const parts = key.split(".");
  let current: I18nMessages | string = messages;
  for (const part of parts) {
    if (typeof current === "string") return undefined;
    const next: string | I18nMessages | undefined = current[part];
    if (next === undefined) return undefined;
    current = next;
  }
  return typeof current === "string" ? current : undefined;
}

export function getCategoryLabel(
  locale: Locale,
  category: string,
): string {
  return (
    categoryByLocale.get(locale)?.[category] ??
    categoryByLocale.get(DEFAULT_LOCALE)?.[category] ??
    category
  );
}

export function getCalculatorI18n(
  bundle: { [K in Locale]?: CalculatorI18nBundle },
  locale: Locale,
): CalculatorI18nBundle | undefined {
  return bundle[locale] ?? bundle[DEFAULT_LOCALE];
}

export function getLocalizedSlug(
  canonicalSlug: string,
  locale: Locale,
): string {
  const slugMap = slugByLocale.get(locale);
  return slugMap?.[canonicalSlug] ?? canonicalSlug;
}

export function getCanonicalSlugFromLocalized(
  localizedSlug: string,
  locale: Locale,
): string | undefined {
  const slugMap = slugByLocale.get(locale);
  if (!slugMap) return undefined;
  for (const [canonical, localized] of Object.entries(slugMap)) {
    if (localized === localizedSlug) return canonical;
  }
  return undefined;
}

export function buildPath(
  locale: Locale,
  ...segments: string[]
): string {
  const cleanSegments = segments
    .map((s) => s.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean);
  const base = BASE_PATH.replace(/\/+$/, "");
  return `${base}/${locale}/${cleanSegments.join("/")}/`.replace(/\/+/g, "/");
}

export function buildAbsoluteUrl(
  locale: Locale,
  ...segments: string[]
): string {
  return `${SITE_URL}${buildPath(locale, ...segments)}`;
}

export function getHtmlLang(locale: Locale): string {
  return LOCALE_HTML_LANG[locale];
}

export function localesForHreflang(): Array<{
  locale: Locale;
  hreflang: string;
}> {
  return LOCALES.map((locale) => ({
    locale,
    hreflang: LOCALE_HTML_LANG[locale],
  }));
}
