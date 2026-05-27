import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function RetirementChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const currentAge = inputs.currentAge as number;
  const retirementAge = inputs.retirementAge as number;
  const currentSavings = inputs.currentSavings as number;
  const monthlyContribution = inputs.monthlyContribution as number;
  const annualReturn = inputs.annualReturn as number;

  if (retirementAge <= currentAge) return null;

  const monthlyRate = annualReturn / 100 / 12;
  const labels: string[] = [];
  const balances: number[] = [];

  let balance = currentSavings;
  for (let age = currentAge; age <= retirementAge; age++) {
    labels.push(`Age ${age}`);
    balances.push(Math.round(balance * 100) / 100);
    // Grow 12 months
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
    }
  }

  const totalAtRetirement = result.totalAtRetirement as number;

  const data = {
    labels,
    datasets: [
      {
        label: "Nest Egg",
        data: balances,
        borderColor: theme.palette[1],
        backgroundColor: `${theme.palette[1]}22`,
        fill: true,
        tension: 0.3,
        pointRadius: retirementAge - currentAge <= 20 ? 4 : 0,
        pointHoverRadius: 5,
      },
      {
        label: "Target",
        data: Array(labels.length).fill(totalAtRetirement),
        borderColor: theme.palette[2],
        borderDash: [6, 4],
        borderWidth: 2,
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

  const totalContributions = result.totalContributions as number;
  const totalInterest = result.totalInterest as number;
  const monthlyIncome = result.monthlyIncome as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Retirement Nest Egg Growth
      </h2>
      <div style={{ height: 300 }}>
        <Line data={data} options={options} />
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span>
          At retirement:{" "}
          <strong className="text-green-600 dark:text-green-400">
            {formatCurrency(totalAtRetirement, locale)}
          </strong>
        </span>
        <span>Contributions: {formatCurrency(totalContributions, locale)}</span>
        <span>Growth: {formatCurrency(totalInterest, locale)}</span>
        <span>Monthly income: {formatCurrency(monthlyIncome, locale)}</span>
      </div>
    </div>
  );
}

export default function RetirementViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <RetirementChart {...props} />
    </Suspense>
  );
}
