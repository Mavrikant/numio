/**
 * Statistics Basic — Box plot island.
 *
 * This is a standalone client component (own React island, separate from
 * CalculatorView) that lives below the calculator on the page. It:
 *   - reads the `values` input from the URL search params on mount
 *   - subscribes to the `calc:inputs-changed` window event that CalculatorView
 *     dispatches whenever the user edits inputs (URL replaceState doesn't fire
 *     popstate, so we use a custom event)
 *   - renders a horizontal Plotly box plot with strip-plot overlay of individual
 *     points, plus the five-number summary as a caption
 *
 * Why separate island (instead of being passed via CalculatorView's vizComponents
 * prop): hauling chart libs into the main calculator chunk via import.meta.glob
 * triggered a React-as-null circular-import error. Keeping it in its own island
 * means Plotly is only loaded on calculator pages that actually use it.
 */

import { lazy, Suspense, useEffect, useState, useMemo } from "react";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

function parseValues(raw: string | null): number[] {
  if (!raw) return [];
  const out: number[] = [];
  for (const part of raw.split(",")) {
    const n = parseFloat(part.trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

function readValuesFromUrl(): string {
  if (typeof window === "undefined") return "";
  return new URL(window.location.href).searchParams.get("values") ?? "";
}

function quantile(sorted: number[], q: number): number {
  if (sorted.length === 0) return NaN;
  const idx = q * (sorted.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo]!;
  return sorted[lo]! * (1 - (idx - lo)) + sorted[hi]! * (idx - lo);
}

const DEFAULT_VALUES = "2, 5, 7, 9, 3, 8, 5";

export default function StatisticsBasicBoxPlot() {
  const [valuesString, setValuesString] = useState<string>(DEFAULT_VALUES);

  useEffect(() => {
    // Initial read from URL (falls back to default if absent)
    const initial = readValuesFromUrl();
    if (initial) setValuesString(initial);

    // Subscribe to CalculatorView's input updates
    const handler = (e: Event) => {
      const ce = e as CustomEvent<{ slug: string; inputs: Record<string, unknown> }>;
      if (ce.detail?.slug !== "statistics-basic") return;
      const v = ce.detail.inputs?.values;
      if (typeof v === "string") setValuesString(v);
    };
    window.addEventListener("calc:inputs-changed", handler);
    // Also listen to popstate as a fallback for back/forward navigation
    const onPop = () => setValuesString(readValuesFromUrl() || DEFAULT_VALUES);
    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("calc:inputs-changed", handler);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  const values = useMemo(() => parseValues(valuesString), [valuesString]);
  const stats = useMemo(() => {
    if (values.length < 2) return null;
    const sorted = [...values].sort((a, b) => a - b);
    const sum = values.reduce((s, x) => s + x, 0);
    return {
      n: values.length,
      min: sorted[0]!,
      max: sorted[sorted.length - 1]!,
      mean: sum / values.length,
      median: quantile(sorted, 0.5),
      q1: quantile(sorted, 0.25),
      q3: quantile(sorted, 0.75),
    };
  }, [values]);

  if (values.length < 2) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Box Plot
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter at least 2 numbers above to see the box plot.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-baseline justify-between gap-3 flex-wrap">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Box Plot
        </h2>
        {stats && (
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            n={stats.n} · min={fmt(stats.min)} · Q1={fmt(stats.q1)} · median={fmt(stats.median)} · Q3={fmt(stats.q3)} · max={fmt(stats.max)}
          </div>
        )}
      </div>
      <Suspense fallback={<ChartLoading />}>
        <PlotlyChart
          data={[
            {
              type: "box",
              x: values,
              name: "values",
              boxpoints: "outliers",
              orientation: "h",
              marker: { color: "#3b82f6", outliercolor: "#ef4444" },
              line: { color: "#3b82f6" },
              fillcolor: "rgba(59, 130, 246, 0.2)",
              boxmean: true,
              hoverinfo: "x",
            },
            {
              type: "scatter",
              mode: "markers",
              x: values,
              y: Array(values.length).fill("values"),
              marker: {
                color: "#1e40af",
                size: 7,
                opacity: 0.5,
                symbol: "circle",
              },
              name: "points",
              showlegend: false,
              hovertemplate: "%{x}<extra></extra>",
            },
          ]}
          layout={{
            margin: { t: 10, r: 20, b: 50, l: 20 },
            xaxis: { title: { text: "Value" }, zeroline: false },
            yaxis: { showticklabels: false },
            showlegend: false,
          }}
          height={240}
        />
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        The box spans Q1–Q3 (the middle 50%). The line inside is the median; the
        dashed line is the mean. Whiskers extend to 1.5·IQR; red dots are outliers.
      </p>
    </div>
  );
}

function ChartLoading() {
  return (
    <div className="flex h-60 items-center justify-center text-sm text-slate-400">
      Loading chart…
    </div>
  );
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}
