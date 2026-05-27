/**
 * Average — Strip plot (1-D scatter) of all input values with mean/median
 * markers as vertical lines.
 *
 * Uses Chart.js Scatter chart via react-chartjs-2.
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Scatter = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Scatter })),
);

function parseValues(raw: unknown): number[] {
  if (typeof raw !== "string") return [];
  const out: number[] = [];
  for (const part of raw.split(",")) {
    const n = parseFloat(part.trim());
    if (Number.isFinite(n)) out.push(n);
  }
  return out;
}

export default function AverageViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const values = useMemo(() => parseValues(inputs.values), [inputs.values]);
  const mean = typeof result.mean === "number" ? result.mean : null;
  const median = typeof result.median === "number" ? result.median : null;

  if (values.length < 2) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Value Distribution
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter at least 2 numbers to see the strip plot.
        </p>
      </div>
    );
  }

  // Strip plot: all points at y = 0, jitter slightly for visibility
  const stripPoints = values.map((x, i) => ({ x, y: (i % 3) * 0.15 - 0.15 }));

  // Vertical marker lines for mean and median via annotation-style datasets
  const yMin = -0.4;
  const yMax = 0.4;

  const data = {
    datasets: [
      {
        label: "Values",
        data: stripPoints,
        backgroundColor: "rgba(59, 130, 246, 0.6)",
        pointRadius: 6,
        pointHoverRadius: 8,
        showLine: false,
      },
      ...(mean !== null
        ? [
            {
              label: "Mean",
              data: [
                { x: mean, y: yMin },
                { x: mean, y: yMax },
              ],
              borderColor: "#ef4444",
              backgroundColor: "#ef4444",
              pointRadius: 0,
              showLine: true,
              borderWidth: 2,
              borderDash: [],
            },
          ]
        : []),
      ...(median !== null
        ? [
            {
              label: "Median",
              data: [
                { x: median, y: yMin },
                { x: median, y: yMax },
              ],
              borderColor: "#22c55e",
              backgroundColor: "#22c55e",
              pointRadius: 0,
              showLine: true,
              borderWidth: 2,
              borderDash: [6, 3],
            },
          ]
        : []),
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: { color: theme.text, boxWidth: 14, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => {
            if (ctx.dataset.label === "Values") return `Value: ${ctx.parsed.x}`;
            return `${ctx.dataset.label}: ${ctx.parsed.x}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: "Value", color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
      y: {
        display: false,
        min: yMin - 0.1,
        max: yMax + 0.1,
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Value Distribution
      </h2>
      <Suspense
        fallback={
          <div className="flex h-56 items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        }
      >
        <div style={{ height: 240 }}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          <Scatter data={data as any} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Each dot is an input value. The red line marks the mean
        {mean !== null ? ` (${mean})` : ""}; the green dashed line marks the
        median{median !== null ? ` (${median})` : ""}.
      </p>
    </div>
  );
}
