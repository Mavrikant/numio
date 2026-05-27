/**
 * Statistics Basic — Box plot.
 *
 * Now follows the universal `VizProps` contract used by CalcVizSlot:
 *   default export accepts { inputs, result, locale } and renders a chart.
 *
 * Parser logic for the comma-separated `values` string still lives here
 * because the calc's compute() returns aggregated stats (min/max/Q1/Q3/mean)
 * but not the raw point array — which the box plot also needs for the strip
 * overlay.
 */

import { lazy, Suspense, useMemo } from "react";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

interface Props {
  readonly inputs: Record<string, unknown>;
  readonly result: Record<string, unknown>;
}

function parseValues(raw: unknown): number[] {
  if (typeof raw !== "string") return [];
  const out: number[] = [];
  for (const part of raw.split(",")) {
    const n = parseFloat(part.trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

function quantile(sorted: number[], q: number): number {
  if (sorted.length === 0) return NaN;
  const idx = q * (sorted.length - 1);
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo]!;
  return sorted[lo]! * (1 - (idx - lo)) + sorted[hi]! * (idx - lo);
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

export default function StatisticsBasicBoxPlot({ inputs, result }: Props) {
  const values = useMemo(() => parseValues(inputs.values), [inputs.values]);

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

  const sorted = [...values].sort((a, b) => a - b);
  const stats = {
    n: values.length,
    min: typeof result.min === "number" ? result.min : sorted[0]!,
    max: typeof result.max === "number" ? result.max : sorted[sorted.length - 1]!,
    median: typeof result.median === "number" ? result.median : quantile(sorted, 0.5),
    mean: typeof result.mean === "number" ? result.mean : NaN,
    q1: typeof result.q1 === "number" ? result.q1 : quantile(sorted, 0.25),
    q3: typeof result.q3 === "number" ? result.q3 : quantile(sorted, 0.75),
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex items-baseline justify-between gap-3 flex-wrap">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Box Plot
        </h2>
        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          n={stats.n} · min={fmt(stats.min)} · Q1={fmt(stats.q1)} · median={fmt(stats.median)} · Q3={fmt(stats.q3)} · max={fmt(stats.max)}
        </div>
      </div>
      <Suspense
        fallback={
          <div className="flex h-60 items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        }
      >
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
              marker: { color: "#1e40af", size: 7, opacity: 0.5, symbol: "circle" },
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
