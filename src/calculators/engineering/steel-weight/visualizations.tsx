/**
 * Steel Weight visualization — bar chart showing single-piece vs total weight.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

export default function SteelWeightViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const weightPerMeter = result.weightKgPerMeter as number;
  const totalKg = result.totalWeightKg as number;
  const totalLb = result.totalWeightLb as number;
  const density = result.materialDensity as number;
  const length = inputs.lengthM as number;
  const quantity = inputs.quantity as number;
  const material = inputs.material as string;
  const type = inputs.type as string;

  const singlePieceKg = weightPerMeter * length;

  const theme = getChartTheme();

  const data = {
    labels: ["Single piece (kg)", `Total × ${quantity} (kg)`],
    datasets: [
      {
        label: "Weight (kg)",
        data: [singlePieceKg, totalKg],
        backgroundColor: ["rgba(59,130,246,0.7)", "rgba(239,68,68,0.7)"],
        borderColor: ["#3b82f6", "#ef4444"],
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { raw: unknown }) => ` ${(ctx.raw as number).toFixed(3)} kg`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Weight (kg)", color: theme.text },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      x: {
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">
        {material.charAt(0).toUpperCase() + material.slice(1)}{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)} Weight
      </h2>
      <Suspense
        fallback={
          <div className="h-48 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 220 }}>
          <Bar data={data} options={options} />
        </div>
      </Suspense>
      <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500 dark:text-slate-400">
        <span>Density: {density} kg/m³</span>
        <span>·</span>
        <span>{weightPerMeter.toFixed(4)} kg/m</span>
        <span>·</span>
        <span>
          × {quantity} piece{quantity !== 1 ? "s" : ""} × {length} m
        </span>
        <span>·</span>
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          Total: {totalKg.toFixed(2)} kg ({totalLb.toFixed(2)} lb)
        </span>
      </div>
    </div>
  );
}
