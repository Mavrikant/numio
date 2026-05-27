/**
 * Flow Rate visualization — horizontal bar comparing velocity, Reynolds zone, and head loss.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

const REGIME_COLORS: Record<string, string> = {
  laminar: "#22c55e",
  transitional: "#eab308",
  turbulent: "#ef4444",
};

export default function FlowRateViz({ result }: VizProps) {
  ensureChartJsRegistered();

  const velocity = result.velocityMs as number;
  const reynolds = result.reynoldsNumber as number;
  const flowRegime = result.flowRegime as string;
  const headLossM = result.headLossM as number;
  const headLossPa = result.headLossPa as number;
  const flowRateLs = result.flowRateLs as number;
  const frictionFactor = result.frictionFactor as number;

  const theme = getChartTheme();
  const regimeColor = REGIME_COLORS[flowRegime] ?? "#3b82f6";

  const rawValues = [flowRateLs, velocity, headLossM, frictionFactor * 100];
  const units = ["L/s", "m/s", "m", "f×100"];

  const data = {
    labels: ["Flow Rate (L/s)", "Velocity (m/s)", "Head Loss (m)", "Friction × 100"],
    datasets: [
      {
        label: "Value",
        data: rawValues,
        backgroundColor: ["#3b82f6", regimeColor, "#f97316", "#8b5cf6"],
        borderColor: ["#2563eb", regimeColor, "#ea580c", "#7c3aed"],
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { dataIndex: number; raw: unknown }) =>
            ` ${(ctx.raw as number).toFixed(3)} ${units[ctx.dataIndex] ?? ""}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      y: {
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">Flow Analysis Summary</h2>
      <div className="mb-3 inline-flex items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: regimeColor }}
        >
          {flowRegime.toUpperCase()} FLOW
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Re = {reynolds.toLocaleString()}
        </span>
      </div>
      <Suspense
        fallback={
          <div className="h-48 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 220 }}>
          <Bar data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Reynolds number {reynolds.toLocaleString()} → {flowRegime} flow. Head loss:{" "}
        {headLossM.toFixed(3)} m ({(headLossPa / 1000).toFixed(2)} kPa) via Darcy-Weisbach.
        Friction factor f = {frictionFactor.toFixed(4)}.
      </p>
    </div>
  );
}
