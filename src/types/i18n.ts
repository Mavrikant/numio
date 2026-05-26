import {
  LOCALES,
  DEFAULT_LOCALE,
  type Locale,
  type RTLLocale,
} from "../config/site";

export type { Locale, RTLLocale };

export const SUPPORTED_LOCALES: readonly Locale[] = LOCALES;
export const FALLBACK_LOCALE: Locale = DEFAULT_LOCALE;

export type LocalizedString = {
  [K in Locale]: string;
};

export type PartialLocalizedString = Partial<LocalizedString> & {
  [K in typeof DEFAULT_LOCALE]: string;
};

export interface I18nMessages {
  readonly [key: string]: string | I18nMessages;
}

export type CalculatorI18n = {
  readonly [K in Locale]: CalculatorI18nBundle;
};

export interface CalculatorI18nBundle {
  readonly title: string;
  readonly short: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly inputs: Readonly<Record<string, InputLabels>>;
  readonly outputs: Readonly<Record<string, OutputLabels>>;
  readonly options?: Readonly<Record<string, Readonly<Record<string, string>>>>;
  readonly errors?: Readonly<Record<string, string>>;
  readonly faq?: ReadonlyArray<{ q: string; a: string }>;
}

export interface InputLabels {
  readonly label: string;
  readonly help?: string;
  readonly placeholder?: string;
}

export interface OutputLabels {
  readonly label: string;
  readonly help?: string;
  readonly suffix?: string;
}
