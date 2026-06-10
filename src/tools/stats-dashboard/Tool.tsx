/**
 * Descriptive Statistics Dashboard — comprehensive per-column stats with
 * mini-histograms and a Pearson correlation heatmap.
 *
 * Pipeline:
 *   1. User uploads CSV → CsvUploader produces ParsedDataset
 *   2. Dataset overview panel shows row/column/missing counts
 *   3. Each numeric column gets a card: full stats table + mini Plotly histogram
 *   4. If ≥2 numeric columns → Pearson correlation heatmap at the bottom
 *   5. If >50 columns → show first 12 with a "show all" toggle
 */

import { lazy, Suspense, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import type { ParsedDataset } from "@/lib/csv";
import { numericValues } from "@/lib/csv";
import { describe, pearson } from "@/lib/stats";
import CsvUploader from "@/components/tools/CsvUploader";
import definition from "./definition";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

// ── Sample dataset: 100 rows, 4 columns with varied distributions ──────────
const SAMPLE_CSV = (() => {
  const headers = ["age", "income", "height", "score"];
  const rows: string[] = [headers.join(",")];

  let seed = 42;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const randn = () => {
    const u1 = Math.max(1e-9, rand());
    const u2 = rand();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  };

  for (let i = 0; i < 100; i++) {
    // age: 20–65, slightly right-skewed
    const age = Math.max(18, Math.min(70, Math.round(35 + 12 * randn() + rand() * 8)));
    // income: log-normal (right-skewed), 25k–200k
    const income = Math.round(Math.exp(10.8 + 0.5 * randn()) / 100) * 100;
    // height: normal, ~170cm ±10
    const height = parseFloat((170 + 10 * randn()).toFixed(1));
    // score: uniform-ish 0–100 with slight left skew
    const score = Math.max(0, Math.min(100, Math.round(60 + 18 * randn() - rand() * 5)));
    rows.push([age, income, height, score].join(","));
  }
  return rows.join("\n");
})();

// ── Column limit for large datasets ───────────────────────────────────────
const INITIAL_COL_LIMIT = 12;

interface ToolProps {
  readonly locale: Locale;
}

export default function StatsDashboardTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [dataset, setDataset] = useState<ParsedDataset | null>(null);
  const [showAll, setShowAll] = useState(false);

  const numericCols = useMemo(
    () => (dataset ? dataset.columns.filter((c) => c.isNumeric) : []),
    [dataset],
  );
  const categoricalCols = useMemo(
    () => (dataset ? dataset.columns.filter((c) => !c.isNumeric) : []),
    [dataset],
  );
  const totalMissing = useMemo(
    () => (dataset ? dataset.columns.reduce((s, c) => s + c.nullCount, 0) : 0),
    [dataset],
  );

  const tooMany = numericCols.length > 50;
  const visibleCols = tooMany && !showAll ? numericCols.slice(0, INITIAL_COL_LIMIT) : numericCols;

  // Row-aligned numeric arrays (nulls preserved) for the correlation matrix
  const colAligned = useMemo(
    () =>
      numericCols.map((c) => {
        const col = dataset?.byName(c.name);
        return col ? col.numeric : [];
      }),
    [numericCols, dataset],
  );

  // Pearson correlation matrix (only for ≥2 numeric columns). Each pair uses
  // pairwise-complete rows so missing cells don't shift values out of line.
  const correlations = useMemo(() => {
    if (numericCols.length < 2) return null;
    const n = numericCols.length;
    const pairwise = (i: number, j: number): number => {
      const a = colAligned[i]!;
      const b = colAligned[j]!;
      const xs: number[] = [];
      const ys: number[] = [];
      const len = Math.min(a.length, b.length);
      for (let k = 0; k < len; k++) {
        const x = a[k];
        const y = b[k];
        if (x !== null && x !== undefined && y !== null && y !== undefined) {
          xs.push(x);
          ys.push(y);
        }
      }
      return pearson(xs, ys);
    };
    return Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => (i === j ? 1 : pairwise(i, j))),
    );
  }, [numericCols, colAligned]);

  return (
    <div className="space-y-6">
      <CsvUploader
        onParsed={(ds) => {
          setDataset(ds);
          setShowAll(false);
        }}
        sample={{ label: ui.sampleLabel ?? "Sample dataset", csv: SAMPLE_CSV }}
        labels={{ rowsCols: "Parsed: {summary}" }}
      />

      {/* No numeric columns warning */}
      {dataset && numericCols.length === 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.noNumericColumns}
        </div>
      )}

      {/* Empty state */}
      {!dataset && (
        <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500 dark:border-slate-600 dark:bg-slate-800/30 dark:text-slate-400">
          {ui.noDataYet}
        </div>
      )}

      {dataset && numericCols.length > 0 && (
        <>
          {/* Dataset overview */}
          <DatasetOverview
            totalRows={dataset.rowCount}
            totalColumns={dataset.columns.length}
            numericCount={numericCols.length}
            categoricalCount={categoricalCols.length}
            missingCount={totalMissing}
            ui={ui}
          />

          {/* Too-many-columns note */}
          {tooMany && (
            <div className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 text-sm text-blue-800 dark:border-blue-800/50 dark:bg-blue-950/30 dark:text-blue-300">
              {ui.tooManyColumns}
            </div>
          )}

          {/* Column cards grid */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {visibleCols.map((col) => {
              const column = dataset.byName(col.name);
              const vals = column ? numericValues(column) : [];
              return (
                <ColumnCard
                  key={col.name}
                  colName={col.name}
                  values={vals}
                  ui={ui}
                />
              );
            })}
          </div>

          {/* Show all / hide toggle */}
          {tooMany && (
            <div className="text-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="rounded-md border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {showAll ? (ui.hideColumns ?? "Show fewer") : (ui.showAllColumns ?? "Show all")}
              </button>
            </div>
          )}

          {/* Correlation matrix */}
          {correlations && (
            <CorrelationMatrix
              colNames={numericCols.map((c) => c.name)}
              matrix={correlations}
              title={ui.correlationMatrix ?? "Correlation matrix"}
            />
          )}
        </>
      )}
    </div>
  );
}

// ── Dataset overview panel ─────────────────────────────────────────────────

function DatasetOverview({
  totalRows,
  totalColumns,
  numericCount,
  categoricalCount,
  missingCount,
  ui,
}: {
  readonly totalRows: number;
  readonly totalColumns: number;
  readonly numericCount: number;
  readonly categoricalCount: number;
  readonly missingCount: number;
  readonly ui: Readonly<Record<string, string>>;
}) {
  const items = [
    { label: ui.totalRows ?? "Total rows", value: totalRows.toLocaleString() },
    { label: ui.totalColumns ?? "Total columns", value: totalColumns.toLocaleString() },
    { label: ui.numericColumns ?? "Numeric columns", value: numericCount.toLocaleString() },
    { label: ui.categoricalColumns ?? "Categorical columns", value: categoricalCount.toLocaleString() },
    { label: ui.missingValues ?? "Missing values", value: missingCount.toLocaleString() },
  ];

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
      <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
        {ui.datasetOverview ?? "Dataset overview"}
      </h2>
      <dl className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map(({ label, value }) => (
          <div key={label} className="flex flex-col">
            <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
            <dd className="text-lg font-semibold tabular-nums text-slate-900 dark:text-slate-100">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ── Per-column card ────────────────────────────────────────────────────────

function ColumnCard({
  colName,
  values,
  ui,
}: {
  readonly colName: string;
  readonly values: number[];
  readonly ui: Readonly<Record<string, string>>;
}) {
  const stats = useMemo(() => (values.length > 0 ? describe(values) : null), [values]);

  if (!stats) return null;

  const rows: Array<[string, string]> = [
    [ui.count ?? "Count", String(stats.count)],
    [ui.mean ?? "Mean", fmt(stats.mean)],
    [ui.median ?? "Median", fmt(stats.median)],
    [ui.mode ?? "Mode", stats.mode !== null ? fmt(stats.mode) : "—"],
    [ui.stdDev ?? "Std dev", fmt(stats.stdDev)],
    [ui.variance ?? "Variance", fmt(stats.variance)],
    [ui.min ?? "Min", fmt(stats.min)],
    [ui.q1 ?? "Q1", fmt(stats.q1)],
    [ui.q3 ?? "Q3", fmt(stats.q3)],
    [ui.max ?? "Max", fmt(stats.max)],
    [ui.iqr ?? "IQR", fmt(stats.iqr)],
    [ui.range ?? "Range", fmt(stats.range)],
    [ui.skewness ?? "Skewness", fmt(stats.skewness)],
    [ui.kurtosis ?? "Kurtosis", fmt(stats.kurtosis)],
  ];

  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="border-b border-slate-100 px-4 py-2.5 dark:border-slate-800">
        <h3 className="truncate font-semibold text-slate-800 dark:text-slate-200" title={colName}>
          {colName}
        </h3>
      </div>

      {/* Mini histogram */}
      <div className="px-2 pt-2">
        <Suspense fallback={<MiniChartLoading />}>
          <PlotlyChart
            data={[
              {
                type: "histogram",
                x: values,
                marker: { color: "#3b82f6" },
                name: colName,
                hovertemplate: "%{x:.2f}<extra></extra>",
              },
            ]}
            layout={{
              margin: { t: 4, r: 8, b: 28, l: 36 },
              xaxis: { showticklabels: true, tickfont: { size: 9 } },
              yaxis: { showticklabels: true, tickfont: { size: 9 } },
              showlegend: false,
              bargap: 0.05,
            }}
            height={180}
          />
        </Suspense>
      </div>

      {/* Stats table */}
      <dl className="grid grid-cols-2 gap-x-4 px-4 py-3 text-xs">
        {rows.map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between border-b border-slate-100 py-0.5 dark:border-slate-800"
          >
            <dt className="text-slate-500 dark:text-slate-400">{k}</dt>
            <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ── Correlation heatmap ────────────────────────────────────────────────────

function CorrelationMatrix({
  colNames,
  matrix,
  title,
}: {
  readonly colNames: string[];
  readonly matrix: number[][];
  readonly title: string;
}) {
  // Truncate long names for heatmap axis
  const shortNames = colNames.map((n) => (n.length > 14 ? n.slice(0, 12) + "…" : n));
  const height = Math.max(300, Math.min(600, 80 + colNames.length * 40));

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">{title}</h2>
      <Suspense fallback={<div className="flex items-center justify-center py-16 text-sm text-slate-400">Loading chart…</div>}>
        <PlotlyChart
          data={[
            {
              type: "heatmap",
              z: matrix,
              x: shortNames,
              y: shortNames,
              colorscale: "RdBu",
              zmid: 0,
              zmin: -1,
              zmax: 1,
              text: matrix.map((row) => row.map((v) => (Number.isFinite(v) ? v.toFixed(2) : "N/A"))),
              texttemplate: "%{text}",
              hovertemplate: "%{y} × %{x}: %{z:.3f}<extra></extra>",
              showscale: true,
            } as Record<string, unknown>,
          ]}
          layout={{
            margin: { t: 20, r: 80, b: 80, l: 80 },
            xaxis: { side: "bottom", tickangle: -30 },
            yaxis: { autorange: "reversed" },
          }}
          height={height}
        />
      </Suspense>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

function MiniChartLoading() {
  return (
    <div className="flex h-[180px] items-center justify-center text-xs text-slate-400">
      Loading…
    </div>
  );
}

function fmt(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 0.01 || abs >= 1e6)) return n.toExponential(2);
  return n.toFixed(abs < 1 ? 4 : 2);
}
