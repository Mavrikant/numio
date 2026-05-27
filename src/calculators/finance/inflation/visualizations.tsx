import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency, formatPercent } from "@/lib/intl";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function InflationChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const amount = inputs.amount as number;
  const inflationRate = inputs.inflationRate as number;
  const years = inputs.years as number;

  if (amount <= 0 || years <= 0) return null;

  const rate = inflationRate / 100;
  const labels: string[] = [];
  const purchasingPower: number[] = [];

  for (let y = 0; y <= years; y++) {
    labels.push(`Year ${y}`);
    // Purchasing power of "amount" in today's dollars, eroded by inflation
    const power = amount / Math.pow(1 + rate, y);
    purchasingPower.push(Math.round(power * 100) / 100);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Purchasing Power (today's $)",
        data: purchasingPower,
        borderColor: theme.palette[4],
        backgroundColor: `${theme.palette[4]}22`,
        fill: true,
        tension: 0.3,
        pointRadius: years <= 20 ? 4 : 0,
        pointHoverRadius: 5,
      },
      {
        label: "Original Amount",
        data: Array(years + 1).fill(amount),
        borderColor: theme.palette[0],
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
        ticks: { color: theme.text, maxTicksLimit: 12, font: { size: 11 } },
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

  const purchasingPowerLoss = result.purchasingPowerLoss as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Purchasing Power Decay
      </h2>
      <div style={{ height: 300 }}>
        <Line data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        At {inflationRate}% inflation, {formatCurrency(amount, locale)} loses{" "}
        <strong className="text-red-600 dark:text-red-400">
          {formatPercent(purchasingPowerLoss, locale)}
        </strong>{" "}
        of its purchasing power over {years} years.
      </p>
    </div>
  );
}

export default function InflationViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <InflationChart {...props} />
    </Suspense>
  );
}
