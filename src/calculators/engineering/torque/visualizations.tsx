/**
 * Torque visualization — line chart of torque vs arm length (τ = F × d).
 * Marks the user's current input on the curve.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line }))
);

export default function TorqueViz({ result }: VizProps) {
  ensureChartJsRegistered();

  const torqueNm = result.torqueNm as number;
  const forceN = result.forceN as number;
  const distanceM = result.distanceM as number;

  const theme = getChartTheme();

  const N = 30;
  const dMax = Math.max(distanceM * 2, 1);
  const labels: string[] = [];
  const torqueData: number[] = [];

  for (let i = 0; i <= N; i++) {
    const d = (i / N) * dMax;
    labels.push(`${d.toFixed(2)} m`);
    torqueData.push(forceN * d);
  }

  const currentIdx = Math.round((distanceM / dMax) * N);

  const data = {
    labels,
    datasets: [
      {
        label: "Torque (N·m)",
        data: torqueData,
        borderColor: "#8b5cf6",
        backgroundColor: "rgba(139,92,246,0.1)",
        fill: true,
        pointRadius: torqueData.map((_, i) => (i === currentIdx ? 7 : 0)),
        pointBackgroundColor: "#8b5cf6",
        tension: 0.3,
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
          label: (ctx: { raw: unknown }) => ` ${(ctx.raw as number).toFixed(2)} N·m`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Torque (N·m)", color: theme.text },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      x: {
        title: { display: true, text: "Arm length (m)", color: theme.text },
        ticks: { color: theme.text, maxTicksLimit: 6 },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">Torque vs Arm Length (τ = F × d)</h2>
      {/* Summary cards */}
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[
          { label: "Force", value: `${forceN.toFixed(2)} N` },
          { label: "Distance", value: `${distanceM.toFixed(3)} m` },
          { label: "Torque", value: `${torqueNm.toFixed(2)} N·m` },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-800"
          >
            <div className="text-base font-bold text-purple-600 dark:text-purple-400">
              {item.value}
            </div>
            <div className="text-xs text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>
      <Suspense
        fallback={
          <div className="h-48 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 220 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Torque τ = F × d. The dot marks your input: {forceN.toFixed(2)} N at{" "}
        {distanceM.toFixed(3)} m = <strong>{torqueNm.toFixed(2)} N·m</strong>. Torque scales
        linearly with arm length for a constant force.
      </p>
    </div>
  );
}
