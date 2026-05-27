/**
 * Standard Deviation — Bell curve (normal distribution PDF) with σ regions
 * shaded; user's data points overlaid as ticks.
 *
 * Uses Plotly for filled area regions (easier than Chart.js Filler plugin
 * for partial fills).
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

function parseValues(raw: unknown): number[] {
  if (typeof raw !== "string") return [];
  const out: number[] = [];
  for (const part of raw.split(",")) {
    const n = parseFloat(part.trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

function normalPDF(x: number, mu: number, sigma: number): number {
  if (sigma <= 0) return 0;
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

function buildBellCurve(
  mu: number,
  sigma: number,
  steps = 200,
): { x: number[]; y: number[] } {
  const xMin = mu - 4 * sigma;
  const xMax = mu + 4 * sigma;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    xs.push(x);
    ys.push(normalPDF(x, mu, sigma));
  }
  return { x: xs, y: ys };
}

function buildRegion(
  mu: number,
  sigma: number,
  lo: number,
  hi: number,
  steps = 60,
): { x: number[]; y: number[] } {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = lo + (i / steps) * (hi - lo);
    xs.push(x);
    ys.push(normalPDF(x, mu, sigma));
  }
  // close the region back to baseline
  xs.push(hi, lo);
  ys.push(0, 0);
  return { x: xs, y: ys };
}

export default function StandardDeviationViz({ inputs, result }: VizProps) {
  const values = useMemo(() => parseValues(inputs.values), [inputs.values]);

  const mu = typeof result.mean === "number" ? result.mean : 0;
  const sigma = typeof result.standardDeviation === "number" ? result.standardDeviation : 1;

  const { x: bx, y: by } = useMemo(() => buildBellCurve(mu, sigma), [mu, sigma]);

  if (values.length < 2 || sigma <= 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Normal Distribution
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter at least 2 numbers to see the distribution curve.
        </p>
      </div>
    );
  }

  const r1 = buildRegion(mu, sigma, mu - sigma, mu + sigma);
  const r2 = buildRegion(mu, sigma, mu - 2 * sigma, mu - sigma);
  const r2b = buildRegion(mu, sigma, mu + sigma, mu + 2 * sigma);
  const r3 = buildRegion(mu, sigma, mu - 3 * sigma, mu - 2 * sigma);
  const r3b = buildRegion(mu, sigma, mu + 2 * sigma, mu + 3 * sigma);

  const tickY = normalPDF(mu, mu, sigma) * 0.04;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plotData: any[] = [
    // ±1σ region (dark blue)
    {
      type: "scatter" as const,
      x: r1.x,
      y: r1.y,
      fill: "toself",
      fillcolor: "rgba(59, 130, 246, 0.3)",
      line: { color: "transparent" },
      name: "±1σ (68.3%)",
      hoverinfo: "name" as const,
    },
    // ±2σ regions (mid blue)
    {
      type: "scatter" as const,
      x: [...r2.x, ...r2b.x],
      y: [...r2.y, ...r2b.y],
      fill: "toself",
      fillcolor: "rgba(59, 130, 246, 0.15)",
      line: { color: "transparent" },
      name: "±2σ (95.5%)",
      hoverinfo: "name" as const,
    },
    // ±3σ regions (light blue)
    {
      type: "scatter" as const,
      x: [...r3.x, ...r3b.x],
      y: [...r3.y, ...r3b.y],
      fill: "toself",
      fillcolor: "rgba(59, 130, 246, 0.07)",
      line: { color: "transparent" },
      name: "±3σ (99.7%)",
      hoverinfo: "name" as const,
    },
    // Bell curve
    {
      type: "scatter" as const,
      x: bx,
      y: by,
      mode: "lines" as const,
      line: { color: "#3b82f6", width: 2 },
      name: "Normal PDF",
      hoverinfo: "x+y" as const,
    },
    // Data point ticks
    {
      type: "scatter" as const,
      x: values,
      y: Array(values.length).fill(tickY),
      mode: "markers" as const,
      marker: {
        symbol: "line-ns",
        size: 10,
        color: "#ef4444",
        line: { color: "#ef4444", width: 2 },
      },
      name: "Data points",
      hovertemplate: "%{x}<extra></extra>",
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex flex-wrap items-baseline gap-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Normal Distribution
        </h2>
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
          μ={mu} · σ={sigma} · n={values.length}
        </span>
      </div>
      <Suspense
        fallback={
          <div className="flex h-60 items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        }
      >
        <PlotlyChart
          data={plotData}
          layout={{
            margin: { t: 10, r: 20, b: 50, l: 20 },
            xaxis: { title: { text: "Value" }, zeroline: false },
            yaxis: { title: { text: "Probability Density" }, zeroline: false },
            showlegend: true,
            legend: { orientation: "h", y: -0.25 },
          }}
          height={280}
        />
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Blue shading: ±1σ (68.3%), ±2σ (95.5%), ±3σ (99.7%). Red ticks = your
        data points.
      </p>
    </div>
  );
}
