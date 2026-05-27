/**
 * Capacitor RC charge/discharge visualization.
 * Line chart of V(t) = V₀(1 − e^(−t/τ)) over t = 0..5τ.
 * τ is derived from timeConstantFor1k (RC with 1 kΩ).
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line }))
);

export default function CapacitorViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const V0 = inputs.voltage as number;
  const tau = result.timeConstantFor1k as number;

  const N = 60;
  const tMax = 5 * tau;
  const labels: string[] = [];
  const chargeData: number[] = [];
  const dischargeData: number[] = [];

  for (let i = 0; i <= N; i++) {
    const t = (i / N) * tMax;
    labels.push(`${(t / tau).toFixed(2)}τ`);
    chargeData.push(V0 * (1 - Math.exp(-t / tau)));
    dischargeData.push(V0 * Math.exp(-t / tau));
  }

  const theme = getChartTheme();

  const data = {
    labels,
    datasets: [
      {
        label: "Charge V(t)",
        data: chargeData,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.1)",
        fill: true,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: "Discharge V(t)",
        data: dischargeData,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.07)",
        fill: true,
        pointRadius: 0,
        tension: 0.4,
        borderDash: [5, 3],
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) =>
            ` ${ctx.dataset?.label ?? ""}: ${(ctx.raw as number).toFixed(4)} V`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "Voltage (V)", color: theme.text },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
        min: 0,
        max: V0 * 1.05,
      },
      x: {
        title: { display: true, text: "Time (multiples of τ)", color: theme.text },
        ticks: {
          color: theme.text,
          maxTicksLimit: 6,
        },
        grid: { color: theme.grid },
      },
    },
  };

  const tauDisplay =
    tau < 0.001
      ? `${(tau * 1e6).toFixed(2)} µs`
      : tau < 1
      ? `${(tau * 1000).toFixed(2)} ms`
      : `${tau.toFixed(3)} s`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">RC Charge / Discharge Curve</h2>
      <Suspense
        fallback={
          <div className="h-64 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 280 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Charge: V(t) = V₀(1 − e^(−t/τ)). Discharge: V(t) = V₀ · e^(−t/τ). Time constant τ
        = R·C = {tauDisplay} (with R = 1 kΩ). At t = τ, capacitor reaches ≈63.2% of V₀.
      </p>
    </div>
  );
}
