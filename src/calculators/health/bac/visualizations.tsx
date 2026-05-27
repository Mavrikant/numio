/**
 * BAC Visualization
 * - Horizontal bar showing user's BAC vs legal limits
 * - Secondary line chart: hours-until-sober timeline
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);
const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

const THRESHOLDS = [
  { label: "Sober (<0.03)", color: "#22c55e" },
  { label: "Impaired (<0.08)", color: "#eab308" },
  { label: "Drunk (<0.15)", color: "#f97316" },
  { label: "Dangerous (≥0.15)", color: "#ef4444" },
];

function getBacColor(bac: number): string {
  if (bac < 0.03) return "#22c55e";
  if (bac < 0.08) return "#eab308";
  if (bac < 0.15) return "#f97316";
  return "#ef4444";
}

export default function BacViz({ result }: VizProps) {
  const bac = typeof result.bac === "number" ? result.bac : null;
  const hoursUntilSober =
    typeof result.hoursUntilSober === "number" ? result.hoursUntilSober : 0;

  if (bac === null || bac < 0) return null;

  const theme = getChartTheme();
  const bacColor = getBacColor(bac);

  // Gauge: compare BAC to reference values
  const gaugeData = {
    labels: ["Your BAC", "Legal limit", "Sober threshold"],
    datasets: [
      {
        data: [bac, 0.08, 0.03],
        backgroundColor: [bacColor, "rgba(239,68,68,0.25)", "rgba(34,197,94,0.25)"],
        borderColor: [bacColor, "#ef4444", "#22c55e"],
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  };

  const gaugeOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { raw: unknown }) => ` BAC: ${Number(ctx.raw).toFixed(3)} g/dL`,
        },
      },
    },
    scales: {
      x: {
        min: 0,
        max: Math.max(0.35, bac * 1.2),
        grid: { color: theme.grid },
        ticks: { color: theme.text, font: { size: 11 } },
        title: { display: true, text: "BAC (g/dL)", color: theme.text, font: { size: 11 } },
      },
      y: {
        ticks: { color: theme.text, font: { size: 11 } },
        grid: { display: false },
      },
    },
  };

  // Hours-until-sober line chart
  let soberLabels: string[] = [];
  let soberValues: number[] = [];

  if (hoursUntilSober > 0) {
    const steps = Math.min(20, Math.ceil(hoursUntilSober * 2));
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * hoursUntilSober;
      const b = Math.max(0, bac - 0.015 * t);
      soberLabels.push(`${Math.round(t * 10) / 10}h`);
      soberValues.push(Math.round(b * 1000) / 1000);
    }
  }

  const lineData = {
    labels: soberLabels,
    datasets: [
      {
        label: "BAC over time",
        data: soberValues,
        borderColor: bacColor,
        backgroundColor: `${bacColor}22`,
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { raw: unknown }) => ` BAC: ${ctx.raw} g/dL`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.text, font: { size: 10 }, maxTicksLimit: 8 },
        grid: { color: theme.grid },
        title: { display: true, text: "Hours from now", color: theme.text, font: { size: 11 } },
      },
      y: {
        min: 0,
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
        title: { display: true, text: "BAC (g/dL)", color: theme.text, font: { size: 11 } },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Blood Alcohol Content
      </h2>

      {/* Threshold legend */}
      <div className="mb-3 flex flex-wrap gap-2">
        {THRESHOLDS.map((t) => (
          <span
            key={t.label}
            className="flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: t.color }} />
            {t.label}
          </span>
        ))}
      </div>

      <Suspense fallback={<div className="h-24 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 120 }}>
          <Bar data={gaugeData} options={gaugeOptions} />
        </div>
      </Suspense>

      {hoursUntilSober > 0 && (
        <>
          <h2 className="mb-2 mt-5 text-base font-semibold text-slate-900 dark:text-slate-100">
            BAC Elimination Timeline (~{hoursUntilSober}h until sober)
          </h2>
          <Suspense fallback={<div className="h-40 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
            <div style={{ height: 160 }}>
              <Line data={lineData} options={lineOptions} />
            </div>
          </Suspense>
        </>
      )}

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        {bac > 0
          ? `Your BAC is ${bac.toFixed(3)} g/dL. Legal driving limit in most jurisdictions is 0.08 g/dL. Elimination ~0.015 g/dL/hr.`
          : "Your BAC is 0.000 — you are sober."}
      </p>
    </div>
  );
}
