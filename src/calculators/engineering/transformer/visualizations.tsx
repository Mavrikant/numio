/**
 * Transformer visualization — grouped bar chart comparing primary and secondary
 * voltage, current, and power.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

export default function TransformerViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const primaryV = inputs.primaryVoltage as number;
  const primaryI = inputs.primaryCurrent as number;
  const secondaryV = inputs.secondaryVoltage as number;
  const efficiency = inputs.efficiency as number;

  const turnsRatio = result.turnsRatio as number;
  const secondaryI = result.secondaryCurrent as number;
  const primaryPow = result.primaryPower as number;
  const secondaryPow = result.secondaryPower as number;
  const powerLoss = result.powerLoss as number;

  const theme = getChartTheme();

  const primaryVals = [primaryV, primaryI, primaryPow];
  const secondaryVals = [secondaryV, secondaryI, secondaryPow];
  const units = ["V", "A", "W"];

  const data = {
    labels: ["Voltage (V)", "Current (A)", "Power (W)"],
    datasets: [
      {
        label: "Primary",
        data: primaryVals,
        backgroundColor: "rgba(59,130,246,0.7)",
        borderColor: "#3b82f6",
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: "Secondary",
        data: secondaryVals,
        backgroundColor: "rgba(34,197,94,0.7)",
        borderColor: "#22c55e",
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: theme.text },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { datasetIndex: number; dataIndex: number; raw: unknown }) => {
            const label = ctx.datasetIndex === 0 ? "Primary" : "Secondary";
            return ` ${label}: ${(ctx.raw as number).toFixed(3)} ${units[ctx.dataIndex] ?? ""}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
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
      <h2 className="mb-3 text-base font-semibold">Transformer — Primary vs Secondary</h2>
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Turns ratio Np/Ns = {turnsRatio.toFixed(4)}
        </span>
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
          Efficiency = {efficiency}%
        </span>
        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">
          Loss = {powerLoss.toFixed(2)} W
        </span>
      </div>
      <Suspense
        fallback={
          <div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 260 }}>
          <Bar data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Primary: {primaryV} V × {primaryI} A = {primaryPow.toFixed(2)} W. Secondary:{" "}
        {secondaryV} V × {secondaryI.toFixed(4)} A = {secondaryPow.toFixed(2)} W. Power loss:{" "}
        {powerLoss.toFixed(2)} W ({(100 - efficiency)}% inefficiency).
      </p>
    </div>
  );
}
