/**
 * Bending Stress visualization — bar chart comparing computed stress vs
 * material yield strength, with safety-factor zone shaded.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

const CLASS_COLOR: Record<string, string> = {
  ok: "#22c55e",
  warning: "#eab308",
  critical: "#ef4444",
};

export default function BendingStressViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const stress = result.stressMPa as number;
  const yieldStrength = result.yieldStrengthMPa as number;
  const classification = result.classification as string;
  const safetyFactor = result.safetyFactor as number;
  const utilization = result.utilizationRatio as number;
  const material = inputs.materialType as string;

  const theme = getChartTheme();
  const stressColor = CLASS_COLOR[classification] ?? "#3b82f6";
  const allowableStress = yieldStrength / 1.5;

  const data = {
    labels: ["Computed Stress", "Allowable (fy/1.5)", "Yield Strength"],
    datasets: [
      {
        label: "Stress (MPa)",
        data: [stress, allowableStress, yieldStrength],
        backgroundColor: [stressColor, "rgba(59,130,246,0.6)", "rgba(239,68,68,0.3)"],
        borderColor: [stressColor, "#3b82f6", "#ef4444"],
        borderWidth: 2,
        borderRadius: 4,
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
          label: (ctx: { raw: unknown }) => ` ${(ctx.raw as number).toFixed(1)} MPa`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "MPa", color: theme.text },
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
        Stress vs Yield Strength — {material.charAt(0).toUpperCase() + material.slice(1)}
      </h2>
      <Suspense
        fallback={
          <div className="h-64 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 260 }}>
          <Bar data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Computed bending stress {stress.toFixed(1)} MPa vs yield strength {yieldStrength} MPa.
        Safety factor: <strong>{safetyFactor.toFixed(2)}</strong> — utilization:{" "}
        <strong>{(utilization * 100).toFixed(1)}%</strong>. Allowable = fy / 1.5 (γM per Eurocode 3).
      </p>
    </div>
  );
}
