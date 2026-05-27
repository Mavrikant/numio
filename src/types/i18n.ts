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
  /**
   * Translation map for select-input option labels.
   *
   * Two shapes are accepted to fit two authoring styles that grew up in
   * this codebase:
   *   1. Flat:    `{ binary: "Binary", decimal: "Decimal" }` — shared
   *      label per option value (used by all conversion calcs whose
   *      fromUnit and toUnit share the same option set).
   *   2. Nested:  `{ unit: { metric: "Metric", imperial: "Imperial" } }`
   *      — useful when two inputs use the same option value with
   *      different meanings.
   *
   * InputField.tsx tries the nested lookup first, falls back to flat,
   * then defaults to the raw `opt.value`.
   */
  readonly options?: Readonly<
    Record<string, string | Readonly<Record<string, string>>>
  >;
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
