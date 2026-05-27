/**
 * Heat Transfer visualization — line chart of temperature gradient
 * across wall thickness (T_hot → T_cold).
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line }))
);

export default function HeatTransferViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const deltaT = inputs.temperatureDifference as number;
  const R = inputs.thermalResistance as number;
  const heatW = result.heatFluxW as number;
  const heatBtu = result.heatFluxBtu as number;

  // Assume T_cold = 20°C (room temp) and T_hot = 20 + ΔT
  const T_cold = 20;
  const T_hot = T_cold + deltaT;

  const N = 20;
  const labels: string[] = [];
  const temps: number[] = [];
  for (let i = 0; i <= N; i++) {
    const x = i / N;
    labels.push(`${(x * 100).toFixed(0)}%`);
    temps.push(T_hot - x * deltaT);
  }

  const theme = getChartTheme();

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderColor: "#ef4444",
        backgroundColor: "rgba(239,68,68,0.08)",
        fill: true,
        pointRadius: 0,
        tension: 0,
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
          label: (ctx: { raw: unknown }) => ` ${(ctx.raw as number).toFixed(1)} °C`,
        },
      },
    },
    scales: {
      y: {
        title: { display: true, text: "Temperature (°C)", color: theme.text },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      x: {
        title: { display: true, text: "Wall (0% = hot side → 100% = cold side)", color: theme.text },
        ticks: { color: theme.text, maxTicksLimit: 6 },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">Temperature Gradient Across Wall</h2>
      <Suspense
        fallback={
          <div className="h-64 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 260 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Linear temperature drop from {T_hot.toFixed(1)}°C (hot side) to {T_cold.toFixed(1)}°C
        (cold side) across thermal resistance R = {R} K/W. Heat flux:{" "}
        <strong>{heatW.toFixed(2)} W</strong> ({heatBtu.toFixed(2)} BTU/h).
      </p>
    </div>
  );
}
