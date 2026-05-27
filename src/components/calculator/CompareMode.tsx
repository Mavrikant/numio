/**
 * CompareMode.tsx — C1 "Compare scenarios" feature
 *
 * Renders two independent instances of inputs + results side-by-side.
 * URL syncs with prefixed params: ?compare=2&a.rate=6.5&b.rate=7.0
 * Diff section auto-computes delta for highlight=true outputs.
 *
 * Scenario A → subtle blue border
 * Scenario B → subtle purple border
 * Diff section → neutral (green/red tinting deferred until UX feedback)
 */

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import type { AnyCalculatorDefinition, OutputDef } from "@/types/calculator";
import type { Locale } from "@/config/site";
import { InputField } from "./InputField";
import { ResultPanel } from "./ResultPanel";
import {
  formatNumber,
  formatCurrency,
  formatPercent,
} from "@/lib/intl";
import { LOCALE_CURRENCY } from "@/config/site";

// ─── Types ────────────────────────────────────────────────────────────────────

type InputValues = Record<string, number | string | boolean>;

interface CompareModeLabels {
  readonly scenarioA: string;
  readonly scenarioB: string;
  readonly difference: string;
  readonly deltaLabel: string;
}

interface CompareModeProps {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
  readonly labels: CompareModeLabels;
  readonly onExit: () => void;
}

// ─── URL helpers ──────────────────────────────────────────────────────────────

function parsePrefixedInputsFromUrl(
  prefix: "a" | "b",
  defaults: InputValues,
): InputValues {
  if (typeof window === "undefined") return defaults;
  const params = new URLSearchParams(window.location.search);
  const result: InputValues = { ...defaults };
  for (const [rawKey, value] of params.entries()) {
    if (!rawKey.startsWith(`${prefix}.`)) continue;
    const key = rawKey.slice(prefix.length + 1);
    if (!(key in defaults)) continue;
    const defaultVal = defaults[key];
    if (typeof defaultVal === "number") {
      const parsed = parseFloat(value);
      if (!isNaN(parsed)) result[key] = parsed;
    } else if (typeof defaultVal === "boolean") {
      result[key] = value === "true";
    } else {
      result[key] = value;
    }
  }
  return result;
}

function buildCompareUrl(
  inputsA: InputValues,
  inputsB: InputValues,
): string {
  const params = new URLSearchParams();
  params.set("compare", "2");
  for (const [key, value] of Object.entries(inputsA)) {
    params.set(`a.${key}`, String(value));
  }
  for (const [key, value] of Object.entries(inputsB)) {
    params.set(`b.${key}`, String(value));
  }
  return `${window.location.pathname}?${params.toString()}`;
}

// ─── Diff formatting ──────────────────────────────────────────────────────────

function formatDiffValue(
  value: number,
  output: OutputDef,
  locale: Locale,
): string {
  const sign = value >= 0 ? "+" : "";
  switch (output.format) {
    case "currency": {
      const code = LOCALE_CURRENCY[locale];
      const formatted = formatCurrency(Math.abs(value), locale, code);
      return value >= 0 ? `+${formatted}` : `-${formatted.replace(/^-/, "")}`;
    }
    case "percent":
      return `${sign}${formatPercent(value, locale, 2)}`;
    case "number":
    default:
      return `${sign}${formatNumber(Math.abs(value), locale, { maximumFractionDigits: output.precision ?? 2 })}`;
  }
}

// ─── Single scenario column ───────────────────────────────────────────────────

interface ScenarioColumnProps {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
  readonly label: string;
  readonly colorScheme: "blue" | "purple";
  readonly inputs: InputValues;
  readonly onChange: (id: string, value: number | string | boolean) => void;
  readonly onReset: () => void;
}

function ScenarioColumn({
  calc,
  locale,
  label,
  colorScheme,
  inputs,
  onChange,
  onReset,
}: ScenarioColumnProps) {
  const bundle = calc.i18n[locale] ?? calc.i18n["en"];

  const computeResult = useMemo<{
    result: Record<string, unknown> | null;
    errors: string[];
  }>(() => {
    const parsed = calc.inputSchema.safeParse(inputs);
    if (!parsed.success) {
      const errs = parsed.error.errors.map(
        (e: { path: (string | number)[]; message: string }) =>
          `${e.path.join(".")}: ${e.message}`,
      );
      return { result: null, errors: errs };
    }
    try {
      const res = calc.compute(parsed.data as Record<string, unknown>) as Record<string, unknown>;
      return { result: res, errors: [] };
    } catch (err) {
      return {
        result: null,
        errors: [err instanceof Error ? err.message : "Computation error"],
      };
    }
  }, [calc, inputs]);

  const borderClass =
    colorScheme === "blue"
      ? "border-blue-200 dark:border-blue-800"
      : "border-purple-200 dark:border-purple-800";

  const headerClass =
    colorScheme === "blue"
      ? "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200"
      : "bg-purple-50 text-purple-800 dark:bg-purple-950 dark:text-purple-200";

  return (
    <div className={`flex flex-col rounded-xl border-2 ${borderClass} overflow-hidden`}>
      {/* Scenario header */}
      <div className={`px-4 py-2 text-sm font-semibold ${headerClass}`}>
        {label}
      </div>

      {/* Inputs */}
      <div className="flex-1 space-y-0 divide-y divide-slate-100 dark:divide-slate-800">
        <div className="p-4">
          <div className="space-y-3">
            {calc.inputs.map((input) => (
              <InputField
                key={input.id}
                input={input}
                value={inputs[input.id] ?? input.defaultValue}
                bundle={bundle}
                onChange={onChange}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={onReset}
            className="mt-3 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {bundle.errors?.["reset"] ?? "Reset"}
          </button>
        </div>

        {/* Results */}
        <div className="p-4">
          <ResultPanel
            outputs={calc.outputs}
            result={computeResult.result}
            errors={computeResult.errors}
            bundle={bundle}
            locale={locale}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Diff section ─────────────────────────────────────────────────────────────

interface DiffSectionProps {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
  readonly resultA: Record<string, unknown> | null;
  readonly resultB: Record<string, unknown> | null;
  readonly label: string;
  readonly labelA: string;
  readonly labelB: string;
  readonly deltaLabel: string;
}

function DiffSection({
  calc,
  locale,
  resultA,
  resultB,
  label,
  labelA,
  labelB,
  deltaLabel,
}: DiffSectionProps) {
  const bundle = calc.i18n[locale] ?? calc.i18n["en"];

  // Only diff highlight=true outputs with numeric values
  const highlightOutputs = calc.outputs.filter((o) => o.highlight);
  if (highlightOutputs.length === 0 || !resultA || !resultB) return null;

  const diffRows = highlightOutputs
    .map((output) => {
      const valA = resultA[output.id];
      const valB = resultB[output.id];
      if (typeof valA !== "number" || typeof valB !== "number") return null;
      const delta = valB - valA;
      const outputLabels = bundle.outputs[output.id];
      const outLabel = outputLabels?.label ?? output.id;

      // Format individual values
      let formattedA: string;
      let formattedB: string;
      if (output.format === "currency") {
        const code = LOCALE_CURRENCY[locale];
        formattedA = formatCurrency(valA, locale, code);
        formattedB = formatCurrency(valB, locale, code);
      } else if (output.format === "percent") {
        formattedA = formatPercent(valA, locale, output.precision ?? 2);
        formattedB = formatPercent(valB, locale, output.precision ?? 2);
      } else {
        formattedA = formatNumber(valA, locale, { maximumFractionDigits: output.precision ?? 2 });
        formattedB = formatNumber(valB, locale, { maximumFractionDigits: output.precision ?? 2 });
      }

      const formattedDelta = formatDiffValue(delta, output, locale);

      return { output, outLabel, formattedA, formattedB, delta, formattedDelta };
    })
    .filter(Boolean);

  if (diffRows.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
      <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
        {label}
      </h3>
      <div className="space-y-2">
        {diffRows.map((row) => {
          if (!row) return null;
          const { output, outLabel, formattedA, formattedB, delta, formattedDelta } = row;
          const isZero = delta === 0;
          const deltaColorClass = isZero
            ? "text-slate-600 dark:text-slate-400"
            : delta > 0
            ? "text-amber-700 dark:text-amber-400"
            : "text-emerald-700 dark:text-emerald-400";

          return (
            <div
              key={output.id}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-2 items-baseline text-sm"
            >
              <span className="text-slate-600 dark:text-slate-400 truncate">
                {outLabel}
              </span>
              <span className="tabular-nums text-blue-700 dark:text-blue-300 whitespace-nowrap">
                {labelA}: {formattedA}
              </span>
              <span className="tabular-nums text-purple-700 dark:text-purple-300 whitespace-nowrap">
                {labelB}: {formattedB}
              </span>
              <span
                className={`tabular-nums font-semibold whitespace-nowrap ${deltaColorClass}`}
              >
                {deltaLabel} {formattedDelta}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main CompareMode component ───────────────────────────────────────────────

export function CompareMode({ calc, locale, labels, onExit }: CompareModeProps) {
  const bundle = calc.i18n[locale] ?? calc.i18n["en"];

  // Build defaults from definition
  const defaults = useMemo<InputValues>(() => {
    const d: InputValues = {};
    for (const input of calc.inputs) {
      d[input.id] = input.defaultValue as number | string | boolean;
    }
    return d;
  }, [calc]);

  // Initialize from URL (prefixed params)
  const [inputsA, setInputsA] = useState<InputValues>(() =>
    parsePrefixedInputsFromUrl("a", defaults),
  );
  const [inputsB, setInputsB] = useState<InputValues>(() =>
    parsePrefixedInputsFromUrl("b", defaults),
  );

  // URL sync (debounced)
  const urlSyncRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    urlSyncRef.current = setTimeout(() => {
      const newUrl = buildCompareUrl(inputsA, inputsB);
      window.history.replaceState(null, "", newUrl);
    }, 150);
    return () => {
      if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    };
  }, [inputsA, inputsB]);

  const handleChangeA = useCallback(
    (id: string, value: number | string | boolean) => {
      setInputsA((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleChangeB = useCallback(
    (id: string, value: number | string | boolean) => {
      setInputsB((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleResetA = useCallback(() => setInputsA(defaults), [defaults]);
  const handleResetB = useCallback(() => setInputsB(defaults), [defaults]);

  // Compute results for diff section
  const resultA = useMemo<Record<string, unknown> | null>(() => {
    const parsed = calc.inputSchema.safeParse(inputsA);
    if (!parsed.success) return null;
    try {
      return calc.compute(parsed.data as Record<string, unknown>) as Record<string, unknown>;
    } catch {
      return null;
    }
  }, [calc, inputsA]);

  const resultB = useMemo<Record<string, unknown> | null>(() => {
    const parsed = calc.inputSchema.safeParse(inputsB);
    if (!parsed.success) return null;
    try {
      return calc.compute(parsed.data as Record<string, unknown>) as Record<string, unknown>;
    } catch {
      return null;
    }
  }, [calc, inputsB]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header with exit button */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0v10m0-10a2 2 0 012 2h2a2 2 0 012-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
            </svg>
            {labels.scenarioA} vs {labels.scenarioB}
          </span>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {bundle.short}
          </p>
        </div>
        <button
          type="button"
          onClick={onExit}
          className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          ✕
        </button>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ScenarioColumn
          calc={calc}
          locale={locale}
          label={labels.scenarioA}
          colorScheme="blue"
          inputs={inputsA}
          onChange={handleChangeA}
          onReset={handleResetA}
        />
        <ScenarioColumn
          calc={calc}
          locale={locale}
          label={labels.scenarioB}
          colorScheme="purple"
          inputs={inputsB}
          onChange={handleChangeB}
          onReset={handleResetB}
        />
      </div>

      {/* Diff section */}
      {(resultA || resultB) && (
        <div className="mt-6">
          <DiffSection
            calc={calc}
            locale={locale}
            resultA={resultA}
            resultB={resultB}
            label={labels.difference}
            labelA={labels.scenarioA}
            labelB={labels.scenarioB}
            deltaLabel={labels.deltaLabel}
          />
        </div>
      )}
    </div>
  );
}
