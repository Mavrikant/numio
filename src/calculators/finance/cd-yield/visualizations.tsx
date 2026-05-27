import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function CdYieldChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const principal = inputs.principal as number;
  const apr = inputs.apr as number;
  const termMonths = inputs.termMonths as number;
  const compoundFreq = (inputs.compoundFreq as number) ?? 12;

  if (principal <= 0 || termMonths <= 0) return null;

  const r = apr / 100;
  const n = compoundFreq;

  const labels: string[] = [];
  const balances: number[] = [];

  for (let month = 0; month <= termMonths; month++) {
    const years = month / 12;
    const balance =
      r === 0 ? principal : principal * Math.pow(1 + r / n, n * years);
    labels.push(`Mo ${month}`);
    balances.push(Math.round(balance * 100) / 100);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: balances,
        borderColor: theme.palette[0],
        backgroundColor: `${theme.palette[0]}22`,
        fill: true,
        tension: 0.3,
        pointRadius: termMonths <= 24 ? 4 : 0,
        pointHoverRadius: 5,
      },
      {
        label: "Principal",
        data: Array(termMonths + 1).fill(principal),
        borderColor: theme.palette[4],
        borderDash: [6, 4],
        borderWidth: 1.5,
        pointRadius: 0,
        fill: false,
        tension: 0,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: theme.text, font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"line">) =>
            ` ${ctx.dataset.label ?? ""}: ${formatCurrency(ctx.raw as number, locale)}`,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.text,
          maxTicksLimit: 12,
          font: { size: 11 },
        },
        grid: { color: theme.grid },
      },
      y: {
        ticks: {
          color: theme.text,
          callback: (v: number | string) => formatCurrency(+v, locale),
          font: { size: 11 },
        },
        grid: { color: theme.grid },
      },
    },
  };

  const interestEarned = result.interestEarned as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        CD Balance Growth
      </h2>
      <div style={{ height: 300 }}>
        <Line data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Interest earned over {termMonths} months:{" "}
        <strong>{formatCurrency(interestEarned, locale)}</strong>
      </p>
    </div>
  );
}

export default function CdYieldViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <CdYieldChart {...props} />
    </Suspense>
  );
}
