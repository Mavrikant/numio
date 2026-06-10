/**
 * Time Series Visualizer — interactive client component.
 *
 * Pipeline:
 *   1. User uploads CSV → CsvUploader produces ParsedDataset
 *   2. Tool auto-detects date-like columns (Date.parse); falls back to numeric columns
 *   3. User picks a time column + one or more value columns (multi-select checkboxes)
 *   4. Renders Plotly line chart with one trace per value column
 *   5. Optional centered moving average overlay (dotted lines) per series
 *   6. Summary stats table: min / max / mean / latest / change
 *
 * All computation is in the browser. PlotlyChart is lazy-loaded.
 */

import { lazy, Suspense, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import type { ParsedDataset } from "@/lib/csv";
import { numericValues } from "@/lib/csv";
import CsvUploader from "@/components/tools/CsvUploader";
import definition from "./definition";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

// ─── Sample data ─────────────────────────────────────────────────────────────
// 30-day deterministic random walk for two "stock" series.
const SAMPLE_CSV = (() => {
  const dates: string[] = [];
  const a: number[] = [];
  const b: number[] = [];
  let seedA = 42;
  let seedB = 137;
  const lcg = (s: number) => ((s * 1664525 + 1013904223) & 0x7fffffff) / 0x7fffffff;

  let priceA = 100;
  let priceB = 50;
  const base = new Date("2024-01-01");

  for (let i = 0; i < 30; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    dates.push(d.toISOString().slice(0, 10));

    seedA = Math.floor(lcg(seedA) * 0x7fffffff);
    seedB = Math.floor(lcg(seedB) * 0x7fffffff);
    const ra = (seedA / 0x7fffffff) * 2 - 1;
    const rb = (seedB / 0x7fffffff) * 2 - 1;
    priceA = Math.max(50, priceA + ra * 2.5);
    priceB = Math.max(20, priceB + rb * 1.5);
    a.push(parseFloat(priceA.toFixed(2)));
    b.push(parseFloat(priceB.toFixed(2)));
  }
  const rows = dates.map((d, i) => `${d},${a[i]},${b[i]}`);
  return ["date,stock_a,stock_b", ...rows].join("\n");
})();

// ─── Moving average helper ────────────────────────────────────────────────────
/**
 * Compute a centered simple moving average. Even windows are widened to the
 * next odd number so the window stays symmetric around each point. Points
 * without a full window on either side are returned as null so the caller can
 * easily filter/skip them.
 */
function movingAverage(values: number[], window: number): (number | null)[] {
  if (window < 2) return values.map((v) => v);
  const half = Math.floor(window / 2);
  // averages indices i-half … i+half, i.e. an odd window of 2*half+1 points
  return values.map((_, i) => {
    const lo = i - half;
    const hi = i + half;
    if (lo < 0 || hi >= values.length) return null;
    let sum = 0;
    for (let j = lo; j <= hi; j++) sum += values[j]!;
    return sum / (hi - lo + 1);
  });
}

// ─── Chart colours (10 distinct) ─────────────────────────────────────────────
const SERIES_COLORS = [
  "#3b82f6", // blue
  "#22c55e", // green
  "#f59e0b", // amber
  "#ec4899", // pink
  "#8b5cf6", // violet
  "#06b6d4", // cyan
  "#f97316", // orange
  "#14b8a6", // teal
  "#a855f7", // purple
  "#ef4444", // red
];

// ─── Props ────────────────────────────────────────────────────────────────────
interface ToolProps {
  readonly locale: Locale;
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function TimeSeriesToolComponent({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [dataset, setDataset] = useState<ParsedDataset | null>(null);
  const [timeCol, setTimeCol] = useState<string>("");
  const [valueCols, setValueCols] = useState<string[]>([]);
  const [showMA, setShowMA] = useState(false);
  const [windowSize, setWindowSize] = useState(7);

  // ── Derived column lists ────────────────────────────────────────────────────
  const { dateCandidates, numericCols } = useMemo(() => {
    if (!dataset) return { dateCandidates: [], numericCols: [] };
    const nonNumeric = dataset.columns.filter((c) => !c.isNumeric);
    const datelike = nonNumeric.filter((c) => {
      // Check first non-empty cell
      const sample = c.raw.find((v) => v.trim() !== "");
      return sample !== undefined && !Number.isNaN(Date.parse(sample));
    });
    const numeric = dataset.columns.filter((c) => c.isNumeric);
    return { dateCandidates: datelike, numericCols: numeric };
  }, [dataset]);

  // All columns that could serve as the time axis
  const timeAxisCandidates = useMemo(
    () => [...dateCandidates, ...numericCols],
    [dateCandidates, numericCols],
  );

  // Auto-pick when dataset changes
  const effectiveTimeCol: string = useMemo(() => {
    if (timeCol && timeAxisCandidates.some((c) => c.name === timeCol)) return timeCol;
    return dateCandidates[0]?.name ?? numericCols[0]?.name ?? "";
  }, [timeCol, timeAxisCandidates, dateCandidates, numericCols]);

  const effectiveValueCols: string[] = useMemo(() => {
    const valid = valueCols.filter(
      (n) => n !== effectiveTimeCol && numericCols.some((c) => c.name === n),
    );
    if (valid.length > 0) return valid;
    // Auto-pick first numeric col that isn't the time col
    return numericCols
      .filter((c) => c.name !== effectiveTimeCol)
      .slice(0, 2)
      .map((c) => c.name);
  }, [valueCols, effectiveTimeCol, numericCols]);

  // ── Build chart traces ──────────────────────────────────────────────────────
  const { traces, xIsDate } = useMemo(() => {
    if (!dataset || !effectiveTimeCol || effectiveValueCols.length === 0) {
      return { traces: [], xIsDate: false };
    }

    const timeColumn = dataset.byName(effectiveTimeCol);
    if (!timeColumn) return { traces: [], xIsDate: false };

    // Row-aligned x values (null where the time cell is missing) so each y
    // keeps the date from its own row even when other rows have gaps.
    let xValues: (string | number | null)[];
    let isDate = false;
    if (!timeColumn.isNumeric) {
      // Try to parse as dates
      const first = timeColumn.raw.find((v) => v.trim() !== "");
      if (first && !Number.isNaN(Date.parse(first))) {
        xValues = timeColumn.raw.map((v) => (v.trim() === "" ? null : v.trim()));
        isDate = true;
      } else {
        xValues = timeColumn.raw.map((_, i) => i);
      }
    } else {
      xValues = [...timeColumn.numeric];
    }

    const built: object[] = [];

    effectiveValueCols.forEach((colName, idx) => {
      const col = dataset.byName(colName);
      if (!col) return;
      const yAligned = col.isNumeric
        ? col.numeric
        : col.raw.map((v) => {
            const n = Number(v);
            return Number.isFinite(n) ? n : null;
          });
      // Pair x/y by row index, skipping rows where either side is missing.
      const xs: (string | number)[] = [];
      const ys: number[] = [];
      yAligned.forEach((y, i) => {
        const x = xValues[i];
        if (y !== null && y !== undefined && x !== null && x !== undefined) {
          xs.push(x);
          ys.push(y);
        }
      });
      const color = SERIES_COLORS[idx % SERIES_COLORS.length];

      built.push({
        type: "scatter",
        mode: "lines",
        name: colName,
        x: xs,
        y: ys,
        line: { color, width: 2 },
        hovertemplate: `%{x}<br>${colName}: %{y:.4g}<extra></extra>`,
      });

      if (showMA && windowSize >= 2) {
        const ma = movingAverage(ys, windowSize);
        const maX: (string | number)[] = [];
        const maY: number[] = [];
        ma.forEach((v, i) => {
          if (v !== null) {
            maX.push(xs[i]!);
            maY.push(v);
          }
        });
        if (maY.length > 0) {
          built.push({
            type: "scatter",
            mode: "lines",
            name: `${colName} (MA${windowSize})`,
            x: maX,
            y: maY,
            line: { color, width: 2, dash: "dot" },
            hovertemplate: `%{x}<br>MA${windowSize}: %{y:.4g}<extra></extra>`,
            opacity: 0.8,
          });
        }
      }
    });

    return { traces: built, xIsDate: isDate };
  }, [dataset, effectiveTimeCol, effectiveValueCols, showMA, windowSize]);

  // ── Summary stats per series ────────────────────────────────────────────────
  const summaryRows = useMemo(() => {
    if (!dataset) return [];
    return effectiveValueCols.map((colName, idx) => {
      const col = dataset.byName(colName);
      if (!col) return null;
      const vals = numericValues(col);
      if (vals.length === 0) return null;
      const min = Math.min(...vals);
      const max = Math.max(...vals);
      const sum = vals.reduce((a, b) => a + b, 0);
      const avg = sum / vals.length;
      const latest = vals[vals.length - 1]!;
      const first = vals[0]!;
      const change = first !== 0 ? ((latest - first) / first) * 100 : 0;
      return {
        name: colName,
        color: SERIES_COLORS[idx % SERIES_COLORS.length],
        min,
        max,
        mean: avg,
        latest,
        change,
      };
    }).filter(Boolean) as Array<{
      name: string; color: string; min: number; max: number;
      mean: number; latest: number; change: number;
    }>;
  }, [dataset, effectiveValueCols]);

  // ── Checkbox toggle for value columns ──────────────────────────────────────
  const toggleValueCol = (name: string, checked: boolean) => {
    if (checked) {
      setValueCols((prev) => [...prev, name]);
    } else {
      setValueCols((prev) => prev.filter((c) => c !== name));
    }
  };

  // ── Reset state when new dataset loaded ────────────────────────────────────
  const handleParsed = (ds: ParsedDataset) => {
    setDataset(ds);
    setTimeCol("");
    setValueCols([]);
  };

  const ready = traces.length > 0;

  return (
    <div className="space-y-6">
      {/* 1. CSV Uploader */}
      <CsvUploader
        onParsed={handleParsed}
        sample={{ label: ui.sampleLabel ?? "Sample", csv: SAMPLE_CSV }}
        labels={{ rowsCols: "Parsed: {summary}" }}
      />

      {/* 2. Column selectors */}
      {dataset && (
        <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50 space-y-4">
          {/* Time column */}
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex flex-col gap-1 text-sm min-w-[180px]">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {ui.timeColumn}
              </span>
              <select
                value={effectiveTimeCol}
                onChange={(e) => {
                  setTimeCol(e.target.value);
                  setValueCols([]);
                }}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
              >
                {timeAxisCandidates.length === 0 && (
                  <option value="">{ui.selectPlaceholder}</option>
                )}
                {timeAxisCandidates.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Value columns — checkbox list */}
          {numericCols.length > 0 && (
            <div>
              <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                {ui.valueColumns}
              </p>
              <div className="flex flex-wrap gap-3">
                {numericCols
                  .filter((c) => c.name !== effectiveTimeCol)
                  .map((c) => {
                    const selIdx = effectiveValueCols.indexOf(c.name);
                    const checked = selIdx !== -1;
                    // Swatch must match the trace color, which is indexed by
                    // position among the *selected* columns.
                    const color = checked ? SERIES_COLORS[selIdx % SERIES_COLORS.length] : undefined;
                    return (
                      <label
                        key={c.name}
                        className="inline-flex items-center gap-2 text-sm cursor-pointer select-none"
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) => toggleValueCol(c.name, e.target.checked)}
                          className="rounded border-slate-300"
                          style={{ accentColor: color }}
                        />
                        <span
                          className="font-medium"
                          style={{ color }}
                        >
                          {c.name}
                        </span>
                      </label>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Moving average controls */}
          <div className="flex flex-wrap items-center gap-4">
            <label className="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showMA}
                onChange={(e) => setShowMA(e.target.checked)}
                className="rounded border-slate-300"
              />
              <span className="text-slate-700 dark:text-slate-300">{ui.showMovingAverage}</span>
            </label>
            {showMA && (
              <label className="inline-flex items-center gap-2 text-sm">
                <span className="text-slate-600 dark:text-slate-400">{ui.windowSize}:</span>
                <input
                  type="number"
                  min={3}
                  step={2}
                  max={Math.max(3, (dataset?.rowCount ?? 30) - 1)}
                  value={windowSize}
                  onChange={(e) => {
                    const v = parseInt(e.target.value, 10);
                    // Keep the window odd so it matches the centered average
                    // (and the MA{n} trace label).
                    if (!Number.isNaN(v) && v >= 2) setWindowSize(v % 2 === 0 ? v + 1 : v);
                  }}
                  className="w-20 rounded-md border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-800"
                />
              </label>
            )}
          </div>
        </div>
      )}

      {/* 3. Validation messages */}
      {dataset && !effectiveTimeCol && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.noTimeColumn}
        </div>
      )}
      {dataset && effectiveTimeCol && effectiveValueCols.length === 0 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.noValueColumns}
        </div>
      )}

      {/* 4. Chart */}
      {ready && (
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <Suspense fallback={<ChartLoading />}>
            <PlotlyChart
              data={traces as import("plotly.js").Data[]}
              layout={{
                xaxis: {
                  title: { text: effectiveTimeCol },
                  ...(xIsDate ? { type: "date" } : {}),
                },
                yaxis: {
                  title: { text: effectiveValueCols.join(" / ") },
                },
                legend: { orientation: "h", y: -0.15 },
                hovermode: "x unified",
              }}
              height={420}
            />
          </Suspense>
        </div>
      )}

      {/* 5. Summary stats table */}
      {summaryRows.length > 0 && (
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
            {ui.summaryTable}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <th className="py-1.5 pr-4 font-medium text-slate-500 dark:text-slate-400">Series</th>
                  <th className="py-1.5 pr-4 font-medium text-slate-500 dark:text-slate-400">Min</th>
                  <th className="py-1.5 pr-4 font-medium text-slate-500 dark:text-slate-400">Max</th>
                  <th className="py-1.5 pr-4 font-medium text-slate-500 dark:text-slate-400">Mean</th>
                  <th className="py-1.5 pr-4 font-medium text-slate-500 dark:text-slate-400">{ui.latest}</th>
                  <th className="py-1.5 font-medium text-slate-500 dark:text-slate-400">{ui.change}</th>
                </tr>
              </thead>
              <tbody>
                {summaryRows.map((row) => (
                  <tr
                    key={row.name}
                    className="border-b border-slate-100 dark:border-slate-800 last:border-0"
                  >
                    <td className="py-1.5 pr-4 font-medium" style={{ color: row.color }}>
                      {row.name}
                    </td>
                    <td className="py-1.5 pr-4 font-mono text-slate-900 dark:text-slate-100">
                      {fmtNum(row.min)}
                    </td>
                    <td className="py-1.5 pr-4 font-mono text-slate-900 dark:text-slate-100">
                      {fmtNum(row.max)}
                    </td>
                    <td className="py-1.5 pr-4 font-mono text-slate-900 dark:text-slate-100">
                      {fmtNum(row.mean)}
                    </td>
                    <td className="py-1.5 pr-4 font-mono text-slate-900 dark:text-slate-100">
                      {fmtNum(row.latest)}
                    </td>
                    <td className={[
                      "py-1.5 font-mono font-medium",
                      row.change >= 0
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400",
                    ].join(" ")}>
                      {row.change >= 0 ? "+" : ""}
                      {row.change.toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. Empty state */}
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
    <div className="flex h-96 items-center justify-center text-sm text-slate-400">
      Loading chart…
    </div>
  );
}

function fmtNum(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 0.01 || abs >= 1e7)) return n.toExponential(3);
  return n.toLocaleString("en-US", { maximumFractionDigits: 4 });
}
