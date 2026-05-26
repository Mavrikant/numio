/**
 * ResultPanel — displays computed output values.
 *
 * Output unit dynamic display strategy:
 * BMI compute always returns healthyMin/MaxWeight in the user's current unit
 * system (kg for metric, lb for imperial). We accept that — OutputDef.unit is
 * the "static" hint, but if the result object contains a `_unit_{id}` field we
 * use that as an override. This keeps ResultPanel flexible without touching any
 * compute function.
 *
 * For BMI: compute returns metric-or-imperial weights, and the `unit` input
 * value drives the OutputDef.unit override via `_unit_healthyMinWeight` /
 * `_unit_healthyMaxWeight` fields (if present in result). If absent we fall
 * back to OutputDef.unit.
 */

import type { OutputDef, OutputFormat } from "@/types/calculator";
import type { CalculatorI18nBundle } from "@/types/i18n";
import type { Locale } from "@/config/site";
import {
  formatNumber,
  formatCurrency,
  formatPercent,
  formatDuration,
} from "@/lib/format";

interface ResultPanelProps {
  readonly outputs: ReadonlyArray<OutputDef>;
  readonly result: Record<string, unknown> | null;
  readonly errors: string[];
  readonly bundle: CalculatorI18nBundle;
  readonly locale: Locale;
}

function formatValue(
  value: unknown,
  format: OutputFormat,
  precision: number,
  locale: Locale,
): string {
  if (value === null || value === undefined) return "—";

  switch (format) {
    case "number":
      return typeof value === "number"
        ? formatNumber(value, locale, precision)
        : String(value);

    case "currency":
      return typeof value === "number"
        ? formatCurrency(value, locale, "USD", precision)
        : String(value);

    case "percent":
      // Accept raw percent (e.g. 42.5 meaning 42.5%) — divide by 100 for Intl
      return typeof value === "number"
        ? formatPercent(value / 100, locale, precision)
        : String(value);

    case "duration":
      return typeof value === "number"
        ? formatDuration(value)
        : String(value);

    case "text":
      return String(value);

    case "date":
      return value instanceof Date
        ? value.toLocaleDateString()
        : String(value);

    case "list":
      return Array.isArray(value) ? (value as unknown[]).join(", ") : String(value);

    default:
      return String(value);
  }
}

export function ResultPanel({
  outputs,
  result,
  errors,
  bundle,
  locale,
}: ResultPanelProps) {
  if (errors.length > 0) {
    return (
      <div
        role="alert"
        className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950"
      >
        <h3 className="mb-2 text-sm font-semibold text-red-800 dark:text-red-200">
          {bundle.errors?.["invalid"] ?? "Invalid inputs"}
        </h3>
        <ul className="space-y-1">
          {errors.map((err, i) => (
            <li
              key={i}
              className="text-sm text-red-700 dark:text-red-300"
            >
              {err}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex h-24 items-center justify-center rounded-lg border border-dashed border-slate-300 text-sm text-slate-400 dark:border-slate-700 dark:text-slate-500">
        {bundle.errors?.["noResults"] ?? "Enter values to see results"}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {outputs.map((output) => {
        const rawValue = result[output.id];
        // Dynamic unit override: check for `_unit_<id>` in result
        const dynamicUnit = result[`_unit_${output.id}`] as string | undefined;
        const displayUnit = dynamicUnit ?? output.unit;

        const formatted = formatValue(
          rawValue,
          output.format,
          output.precision ?? 2,
          locale,
        );

        const outputLabels = bundle.outputs[output.id];
        const label = outputLabels?.label ?? output.id;
        const suffix = outputLabels?.suffix;
        const help = outputLabels?.help;

        return (
          <div
            key={output.id}
            className={
              output.highlight
                ? "rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950"
                : "rounded-lg border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
            }
          >
            <div className="flex items-baseline justify-between gap-2">
              <span
                className={`text-sm font-medium ${
                  output.highlight
                    ? "text-blue-700 dark:text-blue-300"
                    : "text-slate-600 dark:text-slate-400"
                }`}
              >
                {label}
              </span>
              <span
                className={`text-right font-semibold tabular-nums ${
                  output.highlight
                    ? "text-xl text-blue-900 dark:text-blue-100"
                    : "text-base text-slate-900 dark:text-slate-100"
                }`}
              >
                {formatted}
                {displayUnit && output.format === "number" && (
                  <span className="ml-1 text-sm font-normal text-slate-500 dark:text-slate-400">
                    {displayUnit}
                  </span>
                )}
                {suffix && (
                  <span className="ml-1 text-sm font-normal text-slate-500 dark:text-slate-400">
                    {suffix}
                  </span>
                )}
              </span>
            </div>
            {help && (
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {help}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
