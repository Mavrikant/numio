/**
 * Concrete Mix visualization — doughnut chart of volumetric proportions
 * (cement / sand / aggregate / water).
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Doughnut = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Doughnut }))
);

export default function ConcreteMixViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const cement = result.cementKg as number;
  const sand = result.sandKg as number;
  const aggregate = result.aggregateKg as number;
  const water = result.waterLiters as number;
  const mixGrade = inputs.mixGrade as string;

  const theme = getChartTheme();
  const total = cement + sand + aggregate + water;

  const data = {
    labels: ["Cement (kg)", "Sand (kg)", "Aggregate (kg)", "Water (L)"],
    datasets: [
      {
        data: [cement, sand, aggregate, water],
        backgroundColor: [
          "#f97316", // orange — cement
          "#eab308", // yellow — sand
          "#64748b", // slate — aggregate
          "#3b82f6", // blue — water
        ],
        borderColor: theme.background,
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: { color: theme.text, padding: 12, font: { size: 11 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; raw: unknown }) => {
            const pct = ((ctx.raw as number) / total * 100).toFixed(1);
            return ` ${ctx.label}: ${(ctx.raw as number).toFixed(1)} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">
        Mix Proportions — Grade {mixGrade}
      </h2>
      <Suspense
        fallback={
          <div className="h-64 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 260 }}>
          <Doughnut data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Volumetric breakdown per {result.totalDryVolumeM3 as number} m³ dry volume.
        Cement bag count: {result.cementBags as number} bags (50 kg each).
        W/C ratio: {result.actualWaterCementRatio as number}.
      </p>
    </div>
  );
}
