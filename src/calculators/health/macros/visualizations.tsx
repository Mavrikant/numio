/**
 * Macros Visualization
 * Pie chart: protein / carb / fat split by calories.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Pie = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Pie })),
);

export default function MacrosViz({ result }: VizProps) {
  const proteinKcal = typeof result.proteinKcal === "number" ? result.proteinKcal : null;
  const fatKcal = typeof result.fatKcal === "number" ? result.fatKcal : null;
  const carbsKcal = typeof result.carbsKcal === "number" ? result.carbsKcal : null;
  const proteinG = typeof result.proteinG === "number" ? result.proteinG : null;
  const fatG = typeof result.fatG === "number" ? result.fatG : null;
  const carbsG = typeof result.carbsG === "number" ? result.carbsG : null;
  const totalKcal = typeof result.totalKcal === "number" ? result.totalKcal : null;

  if (
    proteinKcal === null || fatKcal === null || carbsKcal === null ||
    proteinG === null || fatG === null || carbsG === null || totalKcal === null
  ) return null;
  if (totalKcal <= 0) return null;

  const pieData = {
    labels: ["Protein", "Carbohydrates", "Fat"],
    datasets: [
      {
        data: [proteinKcal, carbsKcal, fatKcal],
        backgroundColor: ["#3b82f6", "#22c55e", "#f97316"],
        borderColor: ["#2563eb", "#16a34a", "#ea580c"],
        borderWidth: 2,
        hoverOffset: 8,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#64748b", font: { size: 12 }, padding: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; raw: unknown; parsed: number }) => {
            const kcal = Number(ctx.raw);
            const pct = Math.round((kcal / totalKcal!) * 100);
            return ` ${ctx.label}: ${kcal} kcal (${pct}%)`;
          },
        },
      },
    },
  };

  const proteinPct = Math.round((proteinKcal / totalKcal) * 100);
  const carbsPct = Math.round((carbsKcal / totalKcal) * 100);
  const fatPct = Math.round((fatKcal / totalKcal) * 100);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Macro Split
      </h2>
      <div className="mb-3 flex flex-wrap gap-3 text-sm">
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-blue-500">Protein:</span> {proteinG}g · {proteinPct}%
        </span>
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-green-500">Carbs:</span> {carbsG}g · {carbsPct}%
        </span>
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-orange-500">Fat:</span> {fatG}g · {fatPct}%
        </span>
      </div>

      <Suspense fallback={<div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 240 }}>
          <Pie data={pieData} options={pieOptions} />
        </div>
      </Suspense>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Calorie distribution by macro: protein 4 kcal/g, carbohydrates 4 kcal/g, fat 9 kcal/g.
        Total daily target: {totalKcal} kcal.
      </p>
    </div>
  );
}
