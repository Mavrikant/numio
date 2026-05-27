/**
 * Scatter Plot & Correlation tool — interactive data-analysis client component.
 *
 * Pipeline:
 *   1. User uploads CSV / pastes data → CsvUploader produces ParsedDataset
 *   2. We detect numeric columns and let user pick X and Y axes
 *   3. Compute Pearson r and optional linear regression (slope, intercept, r²)
 *   4. Render a Plotly scatter plot; optionally overlay the regression line
 *
 * All work happens in the browser; no SSR. PlotlyChart is lazy-loaded inside
 * its own component, so the page itself stays light until data is loaded.
 */

import { lazy, Suspense, useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import type { ParsedDataset } from "@/lib/csv";
import { pearson, linearRegression } from "@/lib/stats";
import CsvUploader from "@/components/tools/CsvUploader";
import definition from "./definition";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

// Sample dataset: height (cm) vs weight (kg), ~50 points, positive correlation.
// Values are deterministic so SSR snapshot stays stable.
const SAMPLE_CSV = `height_cm,weight_kg
158,55
160,57
162,60
163,61
164,63
165,62
166,65
167,66
168,67
169,68
170,70
171,72
172,73
173,74
174,75
175,76
176,78
177,79
178,80
179,82
180,83
181,84
182,86
183,87
184,89
185,90
186,92
187,93
188,95
189,96
190,98
155,52
156,53
157,54
161,58
164,64
166,64
168,69
170,71
172,74
174,76
176,77
178,81
180,84
182,87
184,91
186,94
162,59
171,71
179,83`;

interface ToolProps {
  readonly locale: Locale;
}

export default function ScatterTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [dataset, setDataset] = useState<ParsedDataset | null>(null);
  const [xCol, setXCol] = useState<string>("");
  const [yCol, setYCol] = useState<string>("");
  const [showRegression, setShowRegression] = useState<boolean>(false);

  const numericCols = useMemo(
    () => (dataset ? dataset.columns.filter((c) => c.isNumeric) : []),
    [dataset],
  );

  // Auto-pick X = first, Y = second numeric column when dataset changes
  const effectiveX =
    xCol && numericCols.some((c) => c.name === xCol) ? xCol : numericCols[0]?.name ?? "";
  const effectiveY =
    yCol && numericCols.some((c) => c.name === yCol)
      ? yCol
      : numericCols[1]?.name ?? numericCols[0]?.name ?? "";

  // Use only paired (non-null) rows
  const { xs, ys } = useMemo(() => {
    const colX = dataset?.byName(effectiveX);
    const colY = dataset?.byName(effectiveY);
    if (!colX || !colY) return { xs: [] as number[], ys: [] as number[] };
    const xArr: number[] = [];
    const yArr: number[] = [];
    const len = Math.min(colX.numeric.length, colY.numeric.length);
    for (let i = 0; i < len; i++) {
      const xv = colX.numeric[i];
      const yv = colY.numeric[i];
      if (xv !== null && xv !== undefined && yv !== null && yv !== undefined) {
        xArr.push(xv);
        yArr.push(yv);
      }
    }
    return { xs: xArr, ys: yArr };
  }, [dataset, effectiveX, effectiveY]);

  const r = useMemo(() => pearson(xs, ys), [xs, ys]);
  const regression = useMemo(
    () => (showRegression && xs.length >= 2 ? linearRegression(xs, ys) : null),
    [showRegression, xs, ys],
  );

  // Regression line endpoints
  const regressionLine = useMemo(() => {
    if (!regression || xs.length < 2) return null;
    const xMin = Math.min(...xs);
    const xMax = Math.max(...xs);
    return {
      x: [xMin, xMax],
      y: [regression.slope * xMin + regression.intercept, regression.slope * xMax + regression.intercept],
    };
  }, [regression, xs]);

  const pointCount = xs.length;
  const hasEnough = pointCount >= 2;
  const rIsValid = Number.isFinite(r);

  return (
    <div className="space-y-6">
      <CsvUploader
        onParsed={(ds) => {
          setDataset(ds);
          setXCol("");
          setYCol("");
        }}
        sample={{ label: ui.sampleLabel ?? "Sample: height vs weight", csv: SAMPLE_CSV }}
        labels={{
          rowsCols: "Parsed: {summary}",
        }}
      />

      {dataset && numericCols.length < 2 && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.noNumericColumns}
        </div>
      )}

      {dataset && numericCols.length >= 1 && (
        <>
          {/* Column controls */}
          <div className="flex flex-wrap items-end gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50">
            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {ui.selectXColumn}
              </span>
              <select
                value={effectiveX}
                onChange={(e) => setXCol(e.target.value)}
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
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {ui.selectYColumn}
              </span>
              <select
                value={effectiveY}
                onChange={(e) => setYCol(e.target.value)}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
              >
                {numericCols.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showRegression}
                onChange={(e) => setShowRegression(e.target.checked)}
                className="rounded border-slate-300 accent-blue-600"
              />
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {ui.showRegression}
              </span>
            </label>
          </div>

          {/* Chart */}
          {hasEnough && (
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <Suspense fallback={<ChartLoading />}>
                <PlotlyChart
                  data={[
                    {
                      type: "scatter",
                      mode: "markers",
                      x: xs,
                      y: ys,
                      name: `${effectiveX} vs ${effectiveY}`,
                      marker: { color: "#3b82f6", size: 8, opacity: 0.75 },
                      hovertemplate: `${effectiveX}: %{x}<br>${effectiveY}: %{y}<extra></extra>`,
                    },
                    ...(regressionLine
                      ? [
                          {
                            type: "scatter" as const,
                            mode: "lines" as const,
                            x: regressionLine.x,
                            y: regressionLine.y,
                            name: "Regression line",
                            line: { color: "#ef4444", width: 2, dash: "dash" as const },
                            hoverinfo: "skip" as const,
                          },
                        ]
                      : []),
                  ]}
                  layout={{
                    xaxis: { title: { text: effectiveX } },
                    yaxis: { title: { text: effectiveY } },
                    showlegend: showRegression,
                  }}
                  height={420}
                />
              </Suspense>
            </div>
          )}

          {!hasEnough && dataset && (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
              Need at least 2 paired data points to draw a scatter plot.
            </div>
          )}

          {/* Stats panel */}
          {hasEnough && (
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 lg:grid-cols-4">
                <StatRow label={ui.pointCount ?? "Points"} value={String(pointCount)} />
                <StatRow
                  label={ui.correlation ?? "Pearson r"}
                  value={rIsValid ? r.toFixed(4) : "—"}
                />
                <StatRow
                  label={ui.r2 ?? "R²"}
                  value={rIsValid ? (r * r).toFixed(4) : "—"}
                />
                {regression && Number.isFinite(regression.slope) && (
                  <>
                    <StatRow label={ui.slope ?? "Slope"} value={fmtStat(regression.slope)} />
                    <StatRow label={ui.intercept ?? "Intercept"} value={fmtStat(regression.intercept)} />
                  </>
                )}
              </dl>
              {rIsValid && (
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  {correlationInterpretation(r)}
                </p>
              )}
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

function StatRow({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="flex justify-between border-b border-slate-100 py-1 dark:border-slate-800">
      <dt className="text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="font-mono font-medium text-slate-900 dark:text-slate-100">{value}</dd>
    </div>
  );
}

function fmtStat(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const abs = Math.abs(n);
  if (abs !== 0 && (abs < 0.01 || abs >= 1e6)) return n.toExponential(3);
  return n.toFixed(abs < 1 ? 4 : 3);
}

function correlationInterpretation(r: number): string {
  const abs = Math.abs(r);
  const dir = r >= 0 ? "positive" : "negative";
  if (abs >= 0.9) return `Very strong ${dir} correlation (r = ${r.toFixed(4)}).`;
  if (abs >= 0.7) return `Strong ${dir} correlation (r = ${r.toFixed(4)}).`;
  if (abs >= 0.5) return `Moderate ${dir} correlation (r = ${r.toFixed(4)}).`;
  if (abs >= 0.3) return `Weak ${dir} correlation (r = ${r.toFixed(4)}).`;
  return `Very weak or no linear correlation (r = ${r.toFixed(4)}).`;
}
