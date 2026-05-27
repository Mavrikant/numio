/**
 * Lean Body Mass Visualization
 * Donut chart: lean mass vs fat mass.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Doughnut = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Doughnut })),
);

export default function LbmViz({ result, inputs }: VizProps) {
  const lbm = typeof result.lbm === "number" ? result.lbm : null;
  const bodyFatMass = typeof result.bodyFatMass === "number" ? result.bodyFatMass : null;
  const bodyFatPct = typeof result.bodyFatPct === "number" ? result.bodyFatPct : null;

  if (lbm === null || bodyFatMass === null || bodyFatPct === null) return null;
  if (lbm <= 0 || bodyFatMass < 0) return null;

  const weight = typeof inputs.weight === "number" ? inputs.weight : lbm + bodyFatMass;
  const leanPct = Math.round((lbm / weight) * 1000) / 10;

  const donutData = {
    labels: ["Lean Mass", "Fat Mass"],
    datasets: [
      {
        data: [lbm, bodyFatMass],
        backgroundColor: ["#3b82f6", "#f97316"],
        borderColor: ["#2563eb", "#ea580c"],
        borderWidth: 2,
        hoverOffset: 6,
      },
    ],
  };

  const donutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "68%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#64748b", font: { size: 12 }, padding: 16 },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; raw: unknown }) =>
            ` ${ctx.label}: ${Number(ctx.raw).toFixed(1)} kg`,
        },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Body Composition
      </h2>
      <div className="mb-3 flex gap-4 text-sm">
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-blue-500">{lbm} kg</span> lean ({leanPct}%)
        </span>
        <span className="text-slate-600 dark:text-slate-300">
          <span className="font-semibold text-orange-500">{bodyFatMass} kg</span> fat ({bodyFatPct}%)
        </span>
      </div>

      <Suspense fallback={<div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 240 }}>
          <Doughnut data={donutData} options={donutOptions} />
        </div>
      </Suspense>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Lean body mass includes muscle, bone, water, and organs — everything except body fat.
        Calculated using the selected formula (Boer/James/Hume).
      </p>
    </div>
  );
}
