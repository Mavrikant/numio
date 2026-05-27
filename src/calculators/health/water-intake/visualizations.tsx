/**
 * Water Intake Visualization
 * Bar chart distributing daily intake across 8 wake-hour sessions.
 * Cumulative overlay shown via a second bar dataset (lighter fill).
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

// 8 two-hour sessions starting at 7am
const SLOTS = ["7:00", "9:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];

export default function WaterIntakeViz({ result }: VizProps) {
  const dailyWaterMl = typeof result.dailyWaterMl === "number" ? result.dailyWaterMl : null;
  const dailyWaterL = typeof result.dailyWaterL === "number" ? result.dailyWaterL : null;
  const glassesOf250ml = typeof result.glassesOf250ml === "number" ? result.glassesOf250ml : null;

  if (dailyWaterMl === null || dailyWaterL === null || glassesOf250ml === null) return null;
  if (dailyWaterMl <= 0) return null;

  const perSlot = Math.round(dailyWaterMl / SLOTS.length);
  const theme = getChartTheme();

  const chartData = {
    labels: SLOTS,
    datasets: [
      {
        label: "Per session (ml)",
        data: SLOTS.map(() => perSlot),
        backgroundColor: `${theme.palette[0]}99`,
        borderColor: theme.palette[0],
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: { raw: unknown }) =>
            ` ${Number(ctx.raw)} ml per session`,
          afterLabel: (ctx: { dataIndex: number }) =>
            ` Cumulative: ${perSlot * (ctx.dataIndex + 1)} ml`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
      },
      y: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
        min: 0,
        max: Math.round(perSlot * 1.5),
      },
    },
  };

  // Cumulative progress bar (SVG)
  const cumulativePct = Math.min(1, dailyWaterL / (dailyWaterL > 0 ? dailyWaterL : 1));
  void cumulativePct;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Daily Hydration Schedule
      </h2>
      <div className="mb-3 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
        <span>Total: <strong>{dailyWaterL} L</strong></span>
        <span>≈ {glassesOf250ml} glasses (250 ml each)</span>
        <span>~{perSlot} ml every 2 hours</span>
      </div>

      <Suspense fallback={<div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 260 }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </Suspense>

      {/* Cumulative tracker */}
      <div className="mt-4">
        <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>0 ml</span>
          <span>Cumulative across the day</span>
          <span>{dailyWaterMl} ml</span>
        </div>
        <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full rounded-full"
            style={{ width: "100%", backgroundColor: theme.palette[0], opacity: 0.7 }}
          />
        </div>
        <div className="mt-1 flex justify-between text-xs text-slate-400 dark:text-slate-500">
          {SLOTS.map((s, i) => (
            <span key={s}>{Math.round(dailyWaterMl * (i + 1) / SLOTS.length)}</span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Suggested intake spread evenly across 8 two-hour sessions (7am–9pm). Tooltip shows cumulative
        water consumed at each checkpoint.
      </p>
    </div>
  );
}
