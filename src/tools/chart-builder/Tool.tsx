/**
 * Chart Builder — a Plotly.com-style flexible chart maker.
 *
 * Pipeline:
 *   1. User uploads / pastes a CSV → CsvUploader produces a ParsedDataset.
 *   2. User picks a chart type (line, bar, scatter, area, pie, histogram, box),
 *      an X column (categories / horizontal axis) and one or more Y series.
 *   3. We build Plotly traces and render an interactive chart.
 *   4. User downloads the chart as a PNG raster or SVG vector image.
 *
 * Everything runs in the browser — the CSV never leaves the device.
 */

import { lazy, Suspense, useMemo, useRef, useState } from "react";
import type { Data, Layout } from "plotly.js";
import type { Locale } from "@/config/site";
import type { ParsedDataset, ParsedColumn } from "@/lib/csv";
import CsvUploader from "@/components/tools/CsvUploader";
import definition from "./definition";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

type ChartType = "line" | "bar" | "scatter" | "area" | "pie" | "histogram" | "box";

// Chart types that need an explicit X (category / horizontal) column.
const NEEDS_X: Record<ChartType, boolean> = {
  line: true,
  bar: true,
  scatter: true,
  area: true,
  pie: true,
  histogram: false,
  box: false,
};

const SAMPLE_CSV = `month,sales,profit
Jan,120,30
Feb,135,38
Mar,158,52
Apr,142,44
May,170,61
Jun,195,73
Jul,210,80
Aug,188,66
Sep,176,59
Oct,205,77
Nov,230,91
Dec,260,110`;

const PALETTE = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899", "#14b8a6", "#f97316"];

interface ToolProps {
  readonly locale: Locale;
}

/** Return a column's values as Plotly-friendly array (numbers when numeric, raw strings otherwise). */
function columnValues(col: ParsedColumn | undefined): Array<number | string | null> {
  if (!col) return [];
  return col.isNumeric ? col.numeric.slice() : col.raw.slice();
}

export default function ChartBuilderTool({ locale }: ToolProps) {
  const bundle = definition.i18n[locale] ?? definition.i18n["en"];
  const ui = bundle.ui;

  const [dataset, setDataset] = useState<ParsedDataset | null>(null);
  const [chartType, setChartType] = useState<ChartType>("line");
  const [xCol, setXCol] = useState<string>("");
  const [yCols, setYCols] = useState<string[]>([]);
  const [title, setTitle] = useState<string>("");
  const [stacked, setStacked] = useState<boolean>(false);
  const [smooth, setSmooth] = useState<boolean>(false);

  const chartRef = useRef<HTMLDivElement>(null);

  const numericCols = useMemo(
    () => (dataset ? dataset.columns.filter((c) => c.isNumeric) : []),
    [dataset],
  );
  const allCols = dataset?.columns ?? [];

  const needsX = NEEDS_X[chartType];

  // Resolve effective selections (fall back to sensible defaults).
  const effectiveX =
    xCol && allCols.some((c) => c.name === xCol)
      ? xCol
      : allCols[0]?.name ?? "";

  const effectiveY = useMemo(() => {
    const valid = yCols.filter((y) => numericCols.some((c) => c.name === y));
    if (valid.length > 0) return valid;
    // Default: first numeric column that isn't the X column.
    const first = numericCols.find((c) => c.name !== effectiveX) ?? numericCols[0];
    return first ? [first.name] : [];
  }, [yCols, numericCols, effectiveX]);

  const traces = useMemo<Data[]>(() => {
    if (!dataset) return [];
    const xVals = columnValues(dataset.byName(effectiveX));

    if (chartType === "pie") {
      const yName = effectiveY[0];
      const col = dataset.byName(yName ?? "");
      if (!col) return [];
      return [
        {
          type: "pie",
          labels: xVals.map((v) => String(v ?? "")),
          values: col.numeric.map((n) => (n == null ? 0 : n)),
          textinfo: "label+percent",
          hovertemplate: "%{label}: %{value} (%{percent})<extra></extra>",
        } as Data,
      ];
    }

    if (chartType === "histogram") {
      return effectiveY.map((name, i) => {
        const col = dataset.byName(name);
        return {
          type: "histogram",
          x: col ? col.numeric.slice() : [],
          name,
          marker: { color: PALETTE[i % PALETTE.length], opacity: 0.7 },
          opacity: effectiveY.length > 1 ? 0.6 : 1,
        } as Data;
      });
    }

    if (chartType === "box") {
      return effectiveY.map((name, i) => {
        const col = dataset.byName(name);
        return {
          type: "box",
          y: col ? col.numeric.slice() : [],
          name,
          marker: { color: PALETTE[i % PALETTE.length] },
          boxpoints: "outliers",
        } as Data;
      });
    }

    // line / area / scatter / bar — one trace per Y series, shared X.
    return effectiveY.map((name, i) => {
      const col = dataset.byName(name);
      const yVals = col ? col.numeric.slice() : [];
      const color = PALETTE[i % PALETTE.length];
      if (chartType === "bar") {
        return {
          type: "bar",
          x: xVals,
          y: yVals,
          name,
          marker: { color },
        } as Data;
      }
      const isArea = chartType === "area";
      const isScatter = chartType === "scatter";
      return {
        type: "scatter",
        mode: isScatter ? "markers" : "lines+markers",
        x: xVals,
        y: yVals,
        name,
        fill: isArea ? "tozeroy" : undefined,
        line: { color, width: 2, shape: smooth && !isScatter ? "spline" : "linear" },
        marker: { color, size: isScatter ? 8 : 6 },
      } as Data;
    });
  }, [dataset, chartType, effectiveX, effectiveY, smooth]);

  const layout = useMemo<Partial<Layout>>(() => {
    const base: Partial<Layout> = {
      title: title ? { text: title } : undefined,
      showlegend: effectiveY.length > 1 || chartType === "pie",
      barmode: stacked ? "stack" : "group",
    };
    if (chartType !== "pie") {
      base.xaxis = { title: { text: needsX ? effectiveX : "" } };
      base.yaxis = { title: { text: effectiveY.length === 1 ? effectiveY[0] : "" } };
    }
    return base;
  }, [title, effectiveY, chartType, stacked, needsX, effectiveX]);

  async function downloadImage(format: "png" | "svg") {
    const gd = chartRef.current?.querySelector<HTMLElement>(".js-plotly-plot");
    if (!gd) return;
    const mod = await import("plotly.js-dist-min");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Plotly = (mod as any).default ?? mod;
    const safeName = (title || "chart").replace(/[^\w-]+/g, "_").slice(0, 60) || "chart";
    await Plotly.downloadImage(gd, {
      format,
      filename: safeName,
      width: 1200,
      height: 700,
      scale: format === "png" ? 2 : 1,
    });
  }

  const hasValidSelection =
    traces.length > 0 &&
    (needsX ? effectiveX !== "" : true) &&
    effectiveY.length > 0;

  function toggleY(name: string) {
    setYCols((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  }

  const chartTypes: ReadonlyArray<{ key: ChartType; label: string }> = [
    { key: "line", label: ui.typeLine },
    { key: "bar", label: ui.typeBar },
    { key: "scatter", label: ui.typeScatter },
    { key: "area", label: ui.typeArea },
    { key: "pie", label: ui.typePie },
    { key: "histogram", label: ui.typeHistogram },
    { key: "box", label: ui.typeBox },
  ];

  return (
    <div className="space-y-6">
      <CsvUploader
        onParsed={(ds) => {
          setDataset(ds);
          setXCol("");
          setYCols([]);
        }}
        sample={{ label: ui.sampleLabel, csv: SAMPLE_CSV }}
      />

      {dataset && (
        <>
          {/* Chart type picker */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {ui.chartType}
            </span>
            <div className="flex flex-wrap gap-2">
              {chartTypes.map((ct) => (
                <button
                  key={ct.key}
                  type="button"
                  onClick={() => setChartType(ct.key)}
                  className={[
                    "rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
                    chartType === ct.key
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700",
                  ].join(" ")}
                >
                  {ct.label}
                </button>
              ))}
            </div>
          </div>

          {/* Column / option controls */}
          <div className="grid gap-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50 sm:grid-cols-2 lg:grid-cols-3">
            {needsX && (
              <label className="flex flex-col gap-1 text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">{ui.xAxis}</span>
                <select
                  value={effectiveX}
                  onChange={(e) => setXCol(e.target.value)}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
                >
                  {allCols.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <div className="flex flex-col gap-1 text-sm sm:col-span-2 lg:col-span-1">
              <span className="font-medium text-slate-700 dark:text-slate-300">{ui.ySeries}</span>
              {numericCols.length === 0 ? (
                <p className="text-amber-700 dark:text-amber-400">{ui.needValues}</p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {numericCols.map((c) => {
                    const active = effectiveY.includes(c.name);
                    // For pie, only one series makes sense — clicking replaces.
                    return (
                      <button
                        key={c.name}
                        type="button"
                        onClick={() =>
                          chartType === "pie" ? setYCols([c.name]) : toggleY(c.name)
                        }
                        className={[
                          "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                          active
                            ? "border-blue-600 bg-blue-100 text-blue-800 dark:border-blue-500 dark:bg-blue-900/40 dark:text-blue-200"
                            : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300",
                        ].join(" ")}
                      >
                        {c.name}
                      </button>
                    );
                  })}
                </div>
              )}
              <span className="mt-0.5 text-xs text-slate-400">{ui.ySeriesHint}</span>
            </div>

            <label className="flex flex-col gap-1 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-300">{ui.chartTitle}</span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={ui.chartTitlePlaceholder}
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-800"
              />
            </label>

            {(chartType === "bar" || chartType === "line" || chartType === "area") && (
              <div className="flex flex-wrap items-center gap-4 text-sm sm:col-span-2 lg:col-span-3">
                <span className="font-medium text-slate-700 dark:text-slate-300">{ui.options}:</span>
                {chartType === "bar" && (
                  <label className="inline-flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={stacked}
                      onChange={(e) => setStacked(e.target.checked)}
                      className="rounded border-slate-300 accent-blue-600"
                    />
                    <span className="text-slate-700 dark:text-slate-300">{ui.stacked}</span>
                  </label>
                )}
                {(chartType === "line" || chartType === "area") && (
                  <label className="inline-flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={smooth}
                      onChange={(e) => setSmooth(e.target.checked)}
                      className="rounded border-slate-300 accent-blue-600"
                    />
                    <span className="text-slate-700 dark:text-slate-300">{ui.smooth}</span>
                  </label>
                )}
              </div>
            )}
          </div>

          {/* Chart + download */}
          {hasValidSelection ? (
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-end gap-2">
                <span className="mr-auto text-sm font-medium text-slate-700 dark:text-slate-300">
                  {ui.download}:
                </span>
                <button
                  type="button"
                  onClick={() => void downloadImage("png")}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                >
                  {ui.downloadPng}
                </button>
                <button
                  type="button"
                  onClick={() => void downloadImage("svg")}
                  className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
                >
                  {ui.downloadSvg}
                </button>
              </div>
              <div
                ref={chartRef}
                className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
              >
                <Suspense fallback={<ChartLoading />}>
                  <PlotlyChart
                    data={traces}
                    layout={layout}
                    config={{ displayModeBar: true }}
                    height={480}
                  />
                </Suspense>
              </div>
            </div>
          ) : (
            <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
              {ui.needColumns}
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
