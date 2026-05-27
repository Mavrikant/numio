/**
 * Logarithm — Line chart of y = log_b(x) for x ∈ (0, 100], user's x marked.
 *
 * Uses Chart.js Line via react-chartjs-2.
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function generateLogCurve(
  base: number,
  xMax: number,
  steps = 80,
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const xMin = 0.05;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = Math.log(x) / Math.log(base);
    if (Number.isFinite(y)) {
      points.push({ x: parseFloat(x.toFixed(4)), y: parseFloat(y.toFixed(6)) });
    }
  }
  return points;
}

export default function LogarithmViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const base = typeof inputs.base === "number" ? inputs.base : 10;
  const value = typeof inputs.value === "number" ? inputs.value : 1;
  const logResult = typeof result.result === "number" ? result.result : null;

  // Extend x-axis to at least the user's value
  const xMax = Math.max(100, value * 1.2);

  const curve = useMemo(
    () => generateLogCurve(base, xMax),
    [base, xMax],
  );

  if (base <= 0 || base === 1) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Logarithm Curve
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Base must be positive and ≠ 1 to show the curve.
        </p>
      </div>
    );
  }

  const markerY = logResult !== null ? logResult : Math.log(value) / Math.log(base);
  const showMarker = Number.isFinite(markerY) && value > 0;

  const data = {
    datasets: [
      {
        label: `y = log_${base}(x)`,
        data: curve,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        pointRadius: 0,
        borderWidth: 2,
        fill: false,
        tension: 0.2,
      },
      ...(showMarker
        ? [
            {
              label: `log_${base}(${value}) = ${parseFloat(markerY.toFixed(4))}`,
              data: [{ x: value, y: markerY }],
              borderColor: "#ef4444",
              backgroundColor: "#ef4444",
              pointRadius: 7,
              pointHoverRadius: 9,
              showLine: false,
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
    },
    scales: {
      x: {
        type: "linear" as const,
        title: { display: true, text: "x", color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
        min: 0,
      },
      y: {
        title: { display: true, text: `log_${base}(x)`, color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Logarithm Curve: y = log<sub>{base}</sub>(x)
      </h2>
      <Suspense
        fallback={
          <div className="flex h-56 items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        }
      >
        <div style={{ height: 260 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        The red dot marks log<sub>{base}</sub>({value}) ={" "}
        {showMarker ? parseFloat(markerY.toFixed(4)) : "undefined"}.
      </p>
    </div>
  );
}
