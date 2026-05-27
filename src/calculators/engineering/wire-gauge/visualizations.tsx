/**
 * Wire Gauge visualization — line chart of voltage drop vs wire length,
 * with the user's actual length marked and the NEC 3 % limit (of a 230 V
 * reference) shown as a dashed line.
 */
import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

const NOMINAL_VOLTAGE = 230; // typical EU mains; informational only
const NEC_DROP_LIMIT_PCT = 3;

export default function WireGaugeViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();

  const sizeUnit = inputs.sizeUnit as string;
  const wireSize = inputs.wireSize as number;
  const wireLength = inputs.wireLength as number;
  const current = inputs.current as number;
  const material = inputs.material as string;
  const frequency = inputs.frequency as string;

  const crossSectionArea = result.crossSectionArea as number;
  const awgEquivalent = result.awgEquivalent as number;
  const resistance = result.resistance as number;
  const voltageDrop = result.voltageDrop as number;
  const powerLoss = result.powerLoss as number;
  const ampacityRating = result.ampacityRating as number;

  // Per-metre resistance (after AC adjustment) — recover from total R/L.
  // The compute returns round-trip R = 2·L·ρ·k_ac/A, so V(l) = 2·l·(I·ρ·k_ac/A) = (R/L)·l·I.
  const resistancePerMetreTotal = resistance / Math.max(wireLength, 1e-9);
  const dropLimitVolts = (NEC_DROP_LIMIT_PCT / 100) * NOMINAL_VOLTAGE;

  const isSuitable =
    current <= ampacityRating && voltageDrop <= dropLimitVolts;

  const theme = getChartTheme();

  const N = 50;
  const lMax = Math.max(wireLength * 2, 10);
  const labels: string[] = [];
  const dropData: number[] = [];
  const limitLine: number[] = [];

  for (let i = 0; i <= N; i++) {
    const l = (i / N) * lMax;
    labels.push(`${l.toFixed(0)} m`);
    dropData.push(current * resistancePerMetreTotal * l);
    limitLine.push(dropLimitVolts);
  }

  const userIdx = Math.round((wireLength / lMax) * N);

  const sizeLabel =
    sizeUnit === "awg" ? `AWG ${wireSize}` : `${wireSize} mm²`;

  const data = {
    labels,
    datasets: [
      {
        label: `${sizeLabel} drop (V)`,
        data: dropData,
        borderColor: isSuitable ? "#3b82f6" : "#ef4444",
        backgroundColor: isSuitable
          ? "rgba(59,130,246,0.08)"
          : "rgba(239,68,68,0.08)",
        fill: true,
        pointRadius: dropData.map((_, i) => (i === userIdx ? 7 : 0)),
        pointBackgroundColor: isSuitable ? "#3b82f6" : "#ef4444",
        tension: 0.3,
      },
      {
        label: `NEC 3 % limit (${dropLimitVolts.toFixed(1)} V @ ${NOMINAL_VOLTAGE} V)`,
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
      legend: { labels: { color: theme.text } },
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
        title: { display: true, text: "Voltage drop (V)", color: theme.text },
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
      <h2 className="mb-3 text-base font-semibold">
        {sizeLabel} ({material}, {frequency.toUpperCase()}) — Voltage Drop vs Length
      </h2>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: statusColor }}
        >
          {statusLabel}
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {current} A load · Ampacity: {ampacityRating.toFixed(0)} A · Area:{" "}
          {crossSectionArea.toFixed(3)} mm² · AWG≈ {awgEquivalent.toFixed(1)} ·{" "}
          P_loss: {powerLoss.toFixed(2)} W
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
        At {wireLength} m with {current} A: drop = {voltageDrop.toFixed(3)} V (
        {((voltageDrop / NOMINAL_VOLTAGE) * 100).toFixed(2)}% of {NOMINAL_VOLTAGE} V).
        NEC limit is {NEC_DROP_LIMIT_PCT}% = {dropLimitVolts.toFixed(1)} V.
        Dot marks your length.
      </p>
    </div>
  );
}
