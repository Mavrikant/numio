import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

function RefinanceChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const currentMonthlyPayment = result.currentMonthlyPayment as number;
  const newMonthlyPayment = result.newMonthlyPayment as number;

  const currentRemainingYears = inputs.currentRemainingYears as number;
  const newTermYears = inputs.newTermYears as number;
  const closingCosts = inputs.closingCosts as number;
  const currentBalance = inputs.currentBalance as number;

  if (currentMonthlyPayment <= 0) return null;

  const currentTotalInterest = currentMonthlyPayment * currentRemainingYears * 12 - currentBalance;
  const newTotalInterest = newMonthlyPayment * newTermYears * 12 - currentBalance;

  const data = {
    labels: ["Current Loan", "Refinanced Loan"],
    datasets: [
      {
        label: "Monthly Payment",
        data: [currentMonthlyPayment, newMonthlyPayment],
        backgroundColor: [theme.palette[3], theme.palette[1]],
        borderRadius: 6,
      },
      {
        label: "Total Interest",
        data: [
          Math.max(0, currentTotalInterest),
          Math.max(0, newTotalInterest + closingCosts),
        ],
        backgroundColor: [`${theme.palette[4]}bb`, `${theme.palette[2]}bb`],
        borderRadius: 6,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: { color: theme.text, font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) =>
            ` ${ctx.dataset.label ?? ""}: ${formatCurrency(ctx.raw as number, locale)}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.text, font: { size: 12 } },
        grid: { display: false },
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

  const monthlySavings = result.monthlySavings as number;
  const breakEvenMonths = result.breakEvenMonths as number;
  const lifetimeInterestSaved = result.lifetimeInterestSaved as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Current vs Refinanced Loan
      </h2>
      <div style={{ height: 280 }}>
        <Bar data={data} options={options} />
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span>
          Monthly savings:{" "}
          <strong className="text-green-600 dark:text-green-400">
            {formatCurrency(monthlySavings, locale)}
          </strong>
        </span>
        {breakEvenMonths < 9999 && (
          <span>
            Break-even: <strong>{breakEvenMonths} months</strong>
          </span>
        )}
        {lifetimeInterestSaved > 0 && (
          <span>
            Lifetime savings:{" "}
            <strong className="text-green-600 dark:text-green-400">
              {formatCurrency(lifetimeInterestSaved, locale)}
            </strong>
          </span>
        )}
      </div>
    </div>
  );
}

export default function RefinanceViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <RefinanceChart {...props} />
    </Suspense>
  );
}
