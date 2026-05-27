/**
 * Wire Gauge visualization — line chart of voltage drop vs wire length,
 * with the user's actual length marked and NEC 3% limit as a dashed line.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line }))
);

export default function WireGaugeViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const awg = inputs.awg as string;
  const lengthM = inputs.lengthM as number;
  const current = inputs.current as number;
  const loadCurrent = (inputs.loadCurrent as number | undefined) ?? current;

  const diameterMm = result.diameterMm as number;
  const areaMm2 = result.areaMm2 as number;
  const ampacity = result.ampacity as number;
  const resistancePerMeter = result.resistancePerMeterOhm as number;
  const voltageDropAtLength = result.voltageDrop as number;
  const voltageDropPct = result.voltageDropPct as number;
  const isSuitable = result.isSuitable as boolean;

  const theme = getChartTheme();

  const N = 50;
  const lMax = Math.max(lengthM * 2, 10);
  const labels: string[] = [];
  const dropData: number[] = [];
  const limitLine: number[] = [];

  for (let i = 0; i <= N; i++) {
    const l = (i / N) * lMax;
    labels.push(`${l.toFixed(0)} m`);
    dropData.push(loadCurrent * resistancePerMeter * 2 * l);
    limitLine.push(3.6); // 3% of 120V NEC limit
  }

  const userIdx = Math.round((lengthM / lMax) * N);

  const data = {
    labels,
    datasets: [
      {
        label: `AWG ${awg} Drop (V)`,
        data: dropData,
        borderColor: isSuitable ? "#3b82f6" : "#ef4444",
        backgroundColor: isSuitable ? "rgba(59,130,246,0.08)" : "rgba(239,68,68,0.08)",
        fill: true,
        pointRadius: dropData.map((_, i) => (i === userIdx ? 7 : 0)),
        pointBackgroundColor: isSuitable ? "#3b82f6" : "#ef4444",
        tension: 0.3,
      },
      {
        label: "NEC 3% Limit (3.6 V @ 120 V)",
        data: limitLine,
        borderColor: "#ef4444",
        borderDash: [6, 3],
        pointRadius: 0,
        fill: false,
        tension: 0,
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
            ` ${ctx.dataset?.label ?? ""}: ${(ctx.raw as number).toFixed(3)} V`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: "Voltage Drop (V)", color: theme.text },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      x: {
        title: { display: true, text: "One-way length (m)", color: theme.text },
        ticks: { color: theme.text, maxTicksLimit: 6 },
        grid: { color: theme.grid },
      },
    },
  };

  const statusColor = isSuitable ? "#22c55e" : "#ef4444";
  const statusLabel = isSuitable ? "SUITABLE" : "NOT SUITABLE";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">AWG {awg} — Voltage Drop vs Length</h2>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: statusColor }}
        >
          {statusLabel}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {loadCurrent} A load · Ampacity: {ampacity} A · Dia: {diameterMm.toFixed(3)} mm ·
          Area: {areaMm2.toFixed(3)} mm²
        </span>
      </div>
      <Suspense
        fallback={
          <div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
        }
      >
        <div style={{ height: 260 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        At {lengthM} m with {loadCurrent} A: drop = {voltageDropAtLength.toFixed(3)} V (
        {voltageDropPct.toFixed(2)}% of 120 V). NEC limit is 3% = 3.6 V. Dot marks your length.
      </p>
    </div>
  );
}
