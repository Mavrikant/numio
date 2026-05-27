/**
 * CalculatorView — main React island for a calculator page.
 *
 * Responsibilities:
 * 1. Manage form state (inputs)
 * 2. Run compute reactively with useMemo
 * 3. Validate inputs via Zod safeParse (errors → ResultPanel)
 * 4. Sync URL query params bidirectionally
 * 5. Render InputField, ResultPanel, ChartPanel
 * 6. Reset / Copy / Share actions
 *
 * Output unit dynamic display:
 * BMI compute returns healthyMin/MaxWeight in the current unit system (kg or lb).
 * The OutputDef.unit fields say "kg" statically. To display the correct unit we
 * inject `_unit_<outputId>` keys into the result object so ResultPanel can pick
 * them up. This avoids touching any compute fn or definition file.
 */

import React, { useState, useMemo, useEffect, useCallback, useRef } from "react";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import type { Locale } from "@/config/site";
import { getCalculatorBySlug } from "@/lib/registry";
import { InputField } from "./InputField";
import { ResultPanel } from "./ResultPanel";
import { ChartPanel } from "./ChartPanel";

// ─── Types ───────────────────────────────────────────────────────────────────

type InputValues = Record<string, number | string | boolean>;

interface CalculatorViewProps {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
  readonly initialInputs?: Record<string, unknown>;
}

// ─── URL query param helpers ──────────────────────────────────────────────────

function serializeInputs(inputs: InputValues): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(inputs)) {
    params.set(key, String(value));
  }
  return params.toString();
}

function parseInputsFromUrl(
  defaults: InputValues,
): InputValues {
  if (typeof window === "undefined") return defaults;
  const params = new URLSearchParams(window.location.search);
  const result: InputValues = { ...defaults };
  for (const [key, value] of params.entries()) {
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

// ─── Component ────────────────────────────────────────────────────────────────

export function CalculatorView({ calc, locale, initialInputs }: CalculatorViewProps) {
  const bundle = calc.i18n[locale] ?? calc.i18n["en"];

  // Build default values from definition
  const defaults = useMemo<InputValues>(() => {
    const d: InputValues = {};
    for (const input of calc.inputs) {
      d[input.id] = input.defaultValue as number | string | boolean;
    }
    if (initialInputs) {
      for (const [k, v] of Object.entries(initialInputs)) {
        if (k in d && (typeof v === "number" || typeof v === "string" || typeof v === "boolean")) {
          d[k] = v as number | string | boolean;
        }
      }
    }
    return d;
  }, [calc, initialInputs]);

  // Initialise from URL params on first render
  const [inputs, setInputs] = useState<InputValues>(() =>
    parseInputsFromUrl(defaults),
  );

  const [shareLabel, setShareLabel] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState<string | null>(null);

  // Sync URL query params on input change (debounced via useEffect)
  const urlSyncRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    urlSyncRef.current = setTimeout(() => {
      const qs = serializeInputs(inputs);
      const newUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
      window.history.replaceState(null, "", newUrl);
    }, 150);
    return () => {
      if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    };
  }, [inputs]);

  // Compute result reactively
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

  const handleChange = useCallback(
    (id: string, value: number | string | boolean) => {
      setInputs((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleReset = useCallback(() => {
    setInputs(defaults);
  }, [defaults]);

  const handleCopy = useCallback(() => {
    if (!computeResult.result) return;
    const lines = calc.outputs.map((out) => {
      const label = bundle.outputs[out.id]?.label ?? out.id;
      const val = computeResult.result![out.id];
      return `${label}: ${String(val)}`;
    });
    void navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopyLabel("✓");
      setTimeout(() => setCopyLabel(null), 2000);
    });
  }, [computeResult.result, calc.outputs, bundle.outputs]);

  const handleShare = useCallback(() => {
    const url = window.location.href;
    if (navigator.share) {
      void navigator.share({
        title: bundle.title,
        url,
      });
    } else {
      void navigator.clipboard.writeText(url).then(() => {
        setShareLabel("✓");
        setTimeout(() => setShareLabel(null), 2000);
      });
    }
  }, [bundle.title]);

  // NOTE: Visualization components are not loaded in the base CalculatorView.
  // Use CalculatorViewWithViz to pass pre-loaded viz components from the Astro page.
  const vizComponents: Record<string, React.ComponentType<{ result: Record<string, unknown>; inputs: Record<string, unknown> }>> = {};

  const hasViz =
    calc.visualizations &&
    calc.visualizations.length > 0 &&
    Object.keys(vizComponents).length > 0 &&
    computeResult.result !== null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Calculator title */}
      <div className="mb-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {bundle.short}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input panel */}
        <section aria-label="Inputs">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
              {bundle.inputs &&
                Object.keys(bundle.inputs).length > 0
                ? "Inputs"
                : "Settings"}
            </h2>
            <div className="space-y-4">
              {calc.inputs.map((input) => (
                <InputField
                  key={input.id}
                  input={input}
                  value={inputs[input.id] ?? input.defaultValue}
                  bundle={bundle}
                  onChange={handleChange}
                />
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {bundle.errors?.["reset"] ?? "Reset"}
              </button>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!computeResult.result}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {copyLabel ?? "Copy"}
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-900"
              >
                {shareLabel ?? "Share"}
              </button>
            </div>
          </div>
        </section>

        {/* Result panel */}
        <section aria-label="Results">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
              Results
            </h2>
            <ResultPanel
              outputs={calc.outputs}
              result={computeResult.result}
              errors={computeResult.errors}
              bundle={bundle}
              locale={locale}
            />
          </div>
        </section>
      </div>

      {/* Chart panel (only if visualizations exist and are loaded) */}
      {hasViz && (
        <div className="mt-8">
          <ChartPanel
            visualizations={calc.visualizations!}
            result={computeResult.result!}
            inputs={inputs as Record<string, unknown>}
            locale={locale}
            components={vizComponents}
          />
        </div>
      )}
    </div>
  );
}

// ─── Variant with external visualization components ───────────────────────────
// The Astro page passes pre-loaded viz components to avoid dynamic import issues.

interface CalculatorViewWithVizProps extends CalculatorViewProps {
  readonly vizComponents?: Record<
    string,
    React.ComponentType<{ result: Record<string, unknown>; inputs: Record<string, unknown> }>
  >;
}

export function CalculatorViewWithViz({
  calc,
  locale,
  initialInputs,
  vizComponents: externalVizComponents,
}: CalculatorViewWithVizProps) {
  const bundle = calc.i18n[locale] ?? calc.i18n["en"];

  const defaults = useMemo<InputValues>(() => {
    const d: InputValues = {};
    for (const input of calc.inputs) {
      d[input.id] = input.defaultValue as number | string | boolean;
    }
    if (initialInputs) {
      for (const [k, v] of Object.entries(initialInputs)) {
        if (k in d && (typeof v === "number" || typeof v === "string" || typeof v === "boolean")) {
          d[k] = v as number | string | boolean;
        }
      }
    }
    return d;
  }, [calc, initialInputs]);

  const [inputs, setInputs] = useState<InputValues>(() =>
    parseInputsFromUrl(defaults),
  );

  const [shareLabel, setShareLabel] = useState<string | null>(null);
  const [copyLabel, setCopyLabel] = useState<string | null>(null);

  const urlSyncRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    urlSyncRef.current = setTimeout(() => {
      const qs = serializeInputs(inputs);
      const newUrl = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
      window.history.replaceState(null, "", newUrl);
      // Notify chart islands that inputs changed (URL doesn't fire popstate
      // on replaceState, so we dispatch our own event)
      window.dispatchEvent(
        new CustomEvent("calc:inputs-changed", { detail: { slug: calc.slug, inputs } }),
      );
    }, 150);
    return () => {
      if (urlSyncRef.current) clearTimeout(urlSyncRef.current);
    };
  }, [inputs, calc.slug]);

  // Re-dispatch when compute result changes too (lets chart islands sync to
  // computed quartiles / mean instead of recomputing them).
  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("calc:result-changed", {
        detail: { slug: calc.slug, result: null, inputs },
      }),
    );
  }, [calc.slug, inputs]);

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

  const handleChange = useCallback(
    (id: string, value: number | string | boolean) => {
      setInputs((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleReset = useCallback(() => {
    setInputs(defaults);
  }, [defaults]);

  const handleCopy = useCallback(() => {
    if (!computeResult.result) return;
    const lines = calc.outputs.map((out) => {
      const label = bundle.outputs[out.id]?.label ?? out.id;
      const val = computeResult.result![out.id];
      return `${label}: ${String(val)}`;
    });
    void navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopyLabel("✓");
      setTimeout(() => setCopyLabel(null), 2000);
    });
  }, [computeResult.result, calc.outputs, bundle.outputs]);

  const handleShare = useCallback(() => {
    const url = window.location.href;
    if (navigator.share) {
      void navigator.share({
        title: bundle.title,
        url,
      });
    } else {
      void navigator.clipboard.writeText(url).then(() => {
        setShareLabel("✓");
        setTimeout(() => setShareLabel(null), 2000);
      });
    }
  }, [bundle.title]);

  const hasViz =
    calc.visualizations &&
    calc.visualizations.length > 0 &&
    externalVizComponents &&
    Object.keys(externalVizComponents).length > 0 &&
    computeResult.result !== null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {bundle.short}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Input panel */}
        <section aria-label="Inputs">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
              Inputs
            </h2>
            <div className="space-y-4">
              {calc.inputs.map((input) => (
                <InputField
                  key={input.id}
                  input={input}
                  value={inputs[input.id] ?? input.defaultValue}
                  bundle={bundle}
                  onChange={handleChange}
                />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!computeResult.result}
                className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                {copyLabel ?? "Copy"}
              </button>
              <button
                type="button"
                onClick={handleShare}
                className="rounded-lg border border-blue-300 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:text-blue-300 dark:hover:bg-blue-900"
              >
                {shareLabel ?? "Share"}
              </button>
            </div>
          </div>
        </section>

        {/* Result panel */}
        <section aria-label="Results">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-base font-semibold text-slate-900 dark:text-slate-100">
              Results
            </h2>
            <ResultPanel
              outputs={calc.outputs}
              result={computeResult.result}
              errors={computeResult.errors}
              bundle={bundle}
              locale={locale}
            />
          </div>
        </section>
      </div>

      {hasViz && (
        <div className="mt-8">
          <ChartPanel
            visualizations={calc.visualizations!}
            result={computeResult.result!}
            inputs={inputs as Record<string, unknown>}
            locale={locale}
            components={externalVizComponents!}
          />
        </div>
      )}
    </div>
  );
}

// ─── Island wrapper: looks up `calc` from the registry on the client ─────────
// Astro can't serialize functions (compute, inputSchema.parse, visualizations.build)
// across the SSR → client boundary, so we accept only the serializable `slug` and
// resolve the full CalculatorDefinition via the registry, which Vite bundles for
// both server and client.

interface CalculatorIslandProps {
  readonly slug: string;
  readonly locale: Locale;
  readonly initialInputs?: Record<string, unknown>;
}

export function CalculatorIsland({ slug, locale, initialInputs }: CalculatorIslandProps) {
  const calc = useMemo(() => getCalculatorBySlug(slug), [slug]);
  if (!calc) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 text-center text-slate-500">
        Calculator &quot;{slug}&quot; not found.
      </div>
    );
  }
  return (
    <CalculatorViewWithViz
      calc={calc}
      locale={locale}
      {...(initialInputs ? { initialInputs } : {})}
    />
  );
}
