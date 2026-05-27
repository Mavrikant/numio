/**
 * Histogram & Box Plot tool — interactive data analysis client component.
 *
 * Pipeline:
 *   1. User uploads CSV / pastes data → CsvUploader produces ParsedDataset
 *   2. We detect numeric columns and let user pick one
 *   3. Compute summary stats (describe()) + histogram bins
 *   4. Render side-by-side: Plotly histogram (with marginal box) + box plot + stats table
 *
 * All work happens in the browser; no SSR. PlotlyChart is lazy-loaded inside
 * its own component, so the page itself stays light until data is loaded.
 */

import { lazy, Suspense, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import type { ParsedDataset } from "@/lib/csv";
import { numericValues } from "@/lib/csv";
import { describe, histogramBins } from "@/lib/stats";
import CsvUploader from "@/components/tools/CsvUploader";
import definition from "./definition";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

// A small built-in sample: 200 normally-distributed values (mean=50, sd=15).
// Pre-generated deterministically so SSR snapshot stays stable.
const SAMPLE_CSV = (() => {
  const lines = ["value"];
  // Box-Muller, seeded loop so result is deterministic across renders.
  let seed = 12345;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  for (let i = 0; i < 200; i++) {
    const u1 = Math.max(1e-9, rand());
    const u2 = rand();
    const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
    lines.push((50 + 15 * z).toFixed(2));
  }
  return lines.join("\n");
})();

interface ToolProps {
  readonly locale: Locale;
}

export default function HistogramTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [dataset, setDataset] = useState<ParsedDataset | null>(null);
  const [selectedCol, setSelectedCol] = useState<string>("");
  const [binCount, setBinCount] = useState<number | "auto">("auto");

  const numericCols = useMemo(
    () => (dataset ? dataset.columns.filter((c) => c.isNumeric) : []),
    [dataset],
  );

  // Auto-pick first numeric column when dataset changes
  const effectiveCol =
    selectedCol && numericCols.some((c) => c.name === selectedCol)
      ? selectedCol
      : numericCols[0]?.name ?? "";

  const column = dataset?.byName(effectiveCol);
  const values = column ? numericValues(column) : [];
  const stats = useMemo(() => (values.length > 0 ? describe(values) : null), [values]);
  const bins = useMemo(
    () =>
      values.length > 0
        ? histogramBins(values, { bins: binCount === "auto" ? "auto" : binCount })
        : null,
    [values, binCount],
  );

  return (
    <div className="space-y-6">
      <CsvUploader
        onParsed={(ds) => {
          setDataset(ds);
          setSelectedCol("");
        }}
        sample={{ label: ui.sampleLabel ?? "Sample", csv: SAMPLE_CSV }}
        labels={{
          rowsCols: "Parsed: {summary}",
        }}
      />

      {dataset && numericCols.length === 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.noNumericColumns}
        </div>
      )}

      {dataset && numericCols.length > 0 && (
        <>
          {/* Column / bin controls */}
          <div className="flex flex-wrap items-end gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {ui.selectColumn}
              </span>
              <select
                value={effectiveCol}
                onChange={(e) => setSelectedCol(e.target.value)}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
              >
                {numericCols.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">{ui.bins}</span>
              <select
                value={binCount === "auto" ? "auto" : String(binCount)}
                onChange={(e) =>
                  setBinCount(e.target.value === "auto" ? "auto" : Number(e.target.value))
                }
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
              >
                <option value="auto">{ui.autoBins}</option>
                {[5, 10, 15, 20, 25, 30, 40, 50].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Charts */}
          {bins && stats && (
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {ui.histogramTitle}
                </h3>
                <Suspense fallback={<ChartLoading />}>
                  <PlotlyChart
                    data={[
                      {
                        type: "bar",
                        x: bins.binEdges
                          .slice(0, -1)
                          .map((edge, i) => (edge + bins.binEdges[i + 1]!) / 2),
                        y: bins.counts,
                        width: bins.binEdges.slice(0, -1).map(() => bins.binWidth * 0.95),
                        marker: { color: "#3b82f6" },
                        name: effectiveCol,
                        hovertemplate: "%{x:.2f}<br>count: %{y}<extra></extra>",
                      },
                    ]}
                    layout={{
                      xaxis: { title: { text: effectiveCol } },
                      yaxis: { title: { text: "Frequency" } },
                    }}
                    height={360}
                  />
                </Suspense>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {ui.boxplotTitle}
                </h3>
                <Suspense fallback={<ChartLoading />}>
                  <PlotlyChart
                    data={[
                      {
                        type: "box",
                        y: values,
                        name: effectiveCol,
                        boxpoints: "outliers",
                        marker: { color: "#22c55e" },
                        line: { color: "#22c55e" },
                      },
                    ]}
                    layout={{
                      yaxis: { title: { text: effectiveCol } },
                    }}
                    height={360}
                  />
                </Suspense>
              </div>

              {/* Stats table */}
              <div className="lg:col-span-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {ui.summaryTitle}
                </h3>
                <StatsTable stats={stats} />
              </div>
            </div>
          )}
        </>
      )}

      {!dataset && (
        <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-400">
          {ui.noDataYet}
        </div>
      )}
    </div>
  );
}

function ChartLoading() {
  return (
    <div className="flex h-80 items-center justify-center text-sm text-slate-400">
      Loading chart…
    </div>
  );
}

function StatsTable({
  stats,
}: {
  readonly stats: ReturnType<typeof describe>;
}) {
  const rows: Array<[string, string]> = [
    ["count", String(stats.count)],
    ["mean", fmt(stats.mean)],
    ["std dev", fmt(stats.stdDev)],
    ["min", fmt(stats.min)],
    ["Q1 (25%)", fmt(stats.q1)],
    ["median", fmt(stats.median)],
    ["Q3 (75%)", fmt(stats.q3)],
    ["max", fmt(stats.max)],
    ["IQR", fmt(stats.iqr)],
    ["range", fmt(stats.range)],
    ["skewness", fmt(stats.skewness)],
    ["kurtosis", fmt(stats.kurtosis)],
  ];
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm sm:grid-cols-3 lg:grid-cols-4">
      {rows.map(([k, v]) => (
        <div key={k} className="flex justify-between border-b border-slate-100 py-1 dark:border-slate-800">
          <dt className="text-slate-500 dark:text-slate-400">{k}</dt>
          <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 0.01 || abs >= 1e6)) return n.toExponential(2);
  return n.toFixed(abs < 1 ? 4 : 2);
}
