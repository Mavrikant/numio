/**
 * Electrical Power visualization — summary cards + energy bar chart.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar }))
);

export default function ElectricalPowerViz({ result }: VizProps) {
  ensureChartJsRegistered();

  const voltage = result.voltage as number;
  const current = result.current as number;
  const resistance = result.resistance as number;
  const power = result.power as number;
  const energy24h = result.energy24h as number;
  const energy30d = result.energy30d as number;
  const costPerMonth = result.costPerMonth as number;

  const theme = getChartTheme();

  // Show power (W), energy/day (Wh), energy/month (kWh) — normalised to same scale
  const data = {
    labels: ["Power (W)", "Energy/day (Wh)", "Energy/30d (kWh×10)"],
    datasets: [
      {
        label: "Value",
        data: [power, energy24h * 1000, energy30d * 10],
        backgroundColor: ["#3b82f6", "#22c55e", "#f97316"],
        borderColor: ["#2563eb", "#16a34a", "#ea580c"],
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const rawValues = [power, energy24h * 1000, energy30d * 10];
  const units = ["W", "Wh", "kWh×10"];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { dataIndex: number; raw: unknown }) =>
            ` ${(rawValues[ctx.dataIndex] ?? 0).toFixed(2)} ${units[ctx.dataIndex] ?? ""}`,
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
      <h2 className="mb-3 text-base font-semibold">Power & Energy Breakdown</h2>
      {/* Summary cards */}
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Voltage", value: `${voltage.toFixed(3)} V` },
          { label: "Current", value: `${current.toFixed(4)} A` },
          { label: "Resistance", value: `${resistance.toFixed(3)} Ω` },
          { label: "Power", value: `${power.toFixed(1)} W` },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-800"
          >
            <div className="text-base font-bold text-blue-600 dark:text-blue-400">
              {item.value}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{item.label}</div>
          </div>
        ))}
      </div>
      <Suspense
        fallback={
          <div className="h-48 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 200 }}>
          <Bar data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        24-hour energy: {(energy24h * 1000).toFixed(2)} Wh · Monthly: {energy30d.toFixed(2)} kWh ·
        Est. cost: ${costPerMonth.toFixed(2)}/month at $0.15/kWh.
      </p>
    </div>
  );
}
