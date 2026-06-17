export const SITE_URL = "https://karaman.dev";
// IMPORTANT: BASE_PATH drives Astro's `site` + `base` config, the PWA
// manifest scope, the service-worker registration path, every canonical,
// every sitemap entry, hreflang, OG images, and the embed-widget src
// URLs. Changing it here cascades automatically.
export const BASE_PATH = "/numio";
export const SITE_NAME = "Numio";

export const LOCALES = [
  "en",
  "tr",
  "de",
  "fr",
  "es",
  "it",
  "pt",
  "id",
  "ar",
  "ru",
  "zh",
  "ja",
  "ko",
  "hi",
  "nl",
  "pl",
] as const;

export const DEFAULT_LOCALE = "en" as const;

export const RTL_LOCALES = ["ar"] as const;

export const CJK_LOCALES = ["zh", "ja", "ko"] as const;

export type Locale = (typeof LOCALES)[number];
export type RTLLocale = (typeof RTL_LOCALES)[number];
export type CJKLocale = (typeof CJK_LOCALES)[number];

export const LOCALE_NATIVE_NAMES: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  de: "Deutsch",
  fr: "Français",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  id: "Bahasa Indonesia",
  ar: "العربية",
  ru: "Русский",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  hi: "हिन्दी",
  nl: "Nederlands",
  pl: "Polski",
};

export const LOCALE_ENGLISH_NAMES: Record<Locale, string> = {
  en: "English",
  tr: "Turkish",
  de: "German",
  fr: "French",
  es: "Spanish",
  it: "Italian",
  pt: "Portuguese",
  id: "Indonesian",
  ar: "Arabic",
  ru: "Russian",
  zh: "Chinese (Simplified)",
  ja: "Japanese",
  ko: "Korean",
  hi: "Hindi",
  nl: "Dutch",
  pl: "Polish",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  tr: "tr",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  pt: "pt",
  id: "id",
  ar: "ar",
  ru: "ru",
  zh: "zh-Hans",
  ja: "ja",
  ko: "ko",
  hi: "hi",
  nl: "nl",
  pl: "pl",
};

export type CurrencyCode =
  | "USD"
  | "TRY"
  | "EUR"
  | "GBP"
  | "JPY"
  | "RUB"
  | "CNY"
  | "KRW"
  | "INR"
  | "IDR"
  | "PLN";

export const LOCALE_CURRENCY: Record<Locale, CurrencyCode> = {
  en: "USD",
  tr: "TRY",
  de: "EUR",
  fr: "EUR",
  es: "EUR",
  it: "EUR",
  pt: "EUR",
  id: "IDR",
  ar: "USD",
  ru: "RUB",
  zh: "CNY",
  ja: "JPY",
  ko: "KRW",
  hi: "INR",
  nl: "EUR",
  pl: "PLN",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function isRTL(locale: Locale): boolean {
  return (RTL_LOCALES as readonly string[]).includes(locale);
}

export function isCJK(locale: Locale): boolean {
  return (CJK_LOCALES as readonly string[]).includes(locale);
}
