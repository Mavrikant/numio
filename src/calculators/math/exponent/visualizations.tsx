/**
 * Exponent — Line chart of y = base^x for x ∈ [-3, 3], with user's exponent
 * highlighted as a marker.
 *
 * Uses Chart.js Line via react-chartjs-2.
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function generateCurve(base: number, steps = 80): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const xMin = -4;
  const xMax = 4;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = Math.pow(base, x);
    if (Number.isFinite(y) && Math.abs(y) < 1e6) {
      points.push({ x: parseFloat(x.toFixed(4)), y: parseFloat(y.toFixed(6)) });
    }
  }
  return points;
}

export default function ExponentViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const base = typeof inputs.base === "number" ? inputs.base : 2;
  const exponent = typeof inputs.exponent === "number" ? inputs.exponent : 1;
  const resultVal = typeof result.result === "number" ? result.result : null;

  const curve = useMemo(() => generateCurve(base), [base]);

  if (base <= 0 || base === 1) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="mb-2 text-base font-semibold text-slate-900 dark:text-slate-100">
          Exponential Curve
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Base must be positive and not equal to 1 to show a meaningful curve.
        </p>
      </div>
    );
  }

  const markerY = resultVal !== null ? resultVal : Math.pow(base, exponent);
  const showMarker = Number.isFinite(markerY) && Math.abs(markerY) < 1e6;

  const data = {
    datasets: [
      {
        label: `y = ${base}^x`,
        data: curve,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        pointRadius: 0,
        borderWidth: 2,
        fill: false,
        tension: 0.4,
      },
      ...(showMarker
        ? [
            {
              label: `(${exponent}, ${parseFloat(markerY.toFixed(4))})`,
              data: [{ x: exponent, y: markerY }],
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
        title: { display: true, text: "Exponent (x)", color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
      y: {
        title: { display: true, text: `${base}^x`, color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Exponential Curve: y = {base}^x
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
        The red dot marks the user's input: x = {exponent},{" "}
        y = {base}^{exponent} ={" "}
        {showMarker ? parseFloat(markerY.toFixed(4)) : "undefined"}.
      </p>
    </div>
  );
}
