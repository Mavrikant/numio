/**
 * Z-Score — Bell curve (normal PDF) with the user's z-score position marked
 * and the percentile area shaded.
 *
 * Uses Plotly for the filled area (easier than Chart.js Filler for one-sided
 * shading).
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

const PlotlyChart = lazy(() => import("@/components/charts/PlotlyChart"));

function normalPDF(x: number): number {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

function buildStandardCurve(steps = 200): { x: number[]; y: number[] } {
  const xMin = -4;
  const xMax = 4;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    xs.push(parseFloat(x.toFixed(4)));
    ys.push(normalPDF(x));
  }
  return { x: xs, y: ys };
}

/** Build the shaded region from -∞ (clamped at -4) to z */
function buildShadeRegion(
  zVal: number,
  steps = 120,
): { x: number[]; y: number[] } {
  const lo = -4;
  const hi = Math.min(4, zVal);
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = lo + (i / steps) * (hi - lo);
    xs.push(x);
    ys.push(normalPDF(x));
  }
  // Close polygon back to x-axis
  xs.push(hi, lo);
  ys.push(0, 0);
  return { x: xs, y: ys };
}

export default function ZScoreViz({ inputs, result }: VizProps) {
  const zVal = typeof result.zScore === "number" ? result.zScore : null;
  const percentile = typeof result.percentile === "number" ? result.percentile : null;
  const mu = typeof inputs.mean === "number" ? inputs.mean : 0;
  const sigma = typeof inputs.standardDeviation === "number" ? inputs.standardDeviation : 1;
  const value = typeof inputs.value === "number" ? inputs.value : 0;

  const curve = useMemo(() => buildStandardCurve(), []);
  const shade = useMemo(
    () => (zVal !== null ? buildShadeRegion(zVal) : null),
    [zVal],
  );

  if (zVal === null || sigma <= 0) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Z-Score Distribution
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter a valid standard deviation (σ &gt; 0) to see the chart.
        </p>
      </div>
    );
  }

  const clampedZ = Math.max(-4, Math.min(4, zVal));
  const markerY = normalPDF(clampedZ);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plotData: any[] = [
    // Percentile shading
    ...(shade
      ? [
          {
            type: "scatter" as const,
            x: shade.x,
            y: shade.y,
            fill: "toself",
            fillcolor: "rgba(59, 130, 246, 0.2)",
            line: { color: "transparent" },
            name: `Percentile area (${percentile?.toFixed(1) ?? "?"}%)`,
            hoverinfo: "name" as const,
          },
        ]
      : []),
    // Bell curve
    {
      type: "scatter" as const,
      x: curve.x,
      y: curve.y,
      mode: "lines" as const,
      line: { color: "#3b82f6", width: 2 },
      name: "Standard Normal PDF",
      hoverinfo: "x+y" as const,
    },
    // Z-score vertical line
    {
      type: "scatter" as const,
      x: [clampedZ, clampedZ],
      y: [0, markerY],
      mode: "lines" as const,
      line: { color: "#ef4444", width: 2, dash: "dash" },
      name: `z = ${zVal.toFixed(4)}`,
      hoverinfo: "name" as const,
    },
    // Z-score marker dot
    {
      type: "scatter" as const,
      x: [clampedZ],
      y: [markerY],
      mode: "markers" as const,
      marker: { color: "#ef4444", size: 10 },
      name: `z = ${zVal.toFixed(4)}`,
      showlegend: false,
      hovertemplate: `z=${zVal.toFixed(4)}<extra></extra>`,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex flex-wrap items-baseline gap-3">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-100">
          Z-Score Distribution
        </h2>
        <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
          x={value} · μ={mu} · σ={sigma} → z={zVal.toFixed(4)}
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
            xaxis: {
              title: { text: "z-score" },
              zeroline: true,
              tickvals: [-3, -2, -1, 0, 1, 2, 3],
              ticktext: ["-3σ", "-2σ", "-1σ", "μ", "+1σ", "+2σ", "+3σ"],
            },
            yaxis: { title: { text: "Probability Density" }, zeroline: false },
            showlegend: true,
            legend: { orientation: "h", y: -0.3 },
          }}
          height={280}
        />
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        The blue shaded area represents the percentile:{" "}
        {percentile !== null ? `${percentile.toFixed(2)}%` : "?"} of values fall
        below z = {zVal.toFixed(4)}. The red dashed line marks the z-score
        position.
      </p>
    </div>
  );
}
