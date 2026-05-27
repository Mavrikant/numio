import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Doughnut = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Doughnut })),
);

function BudgetChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const needsAmount = result.needsAmount as number;
  const wantsAmount = result.wantsAmount as number;
  const savingsAmount = result.savingsAmount as number;

  if (needsAmount <= 0 && wantsAmount <= 0 && savingsAmount <= 0) return null;

  const data = {
    labels: ["Needs", "Wants", "Savings"],
    datasets: [
      {
        data: [needsAmount, wantsAmount, savingsAmount],
        backgroundColor: [theme.palette[0], theme.palette[2], theme.palette[1]],
        borderColor: theme.background,
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          color: theme.text,
          padding: 16,
          font: { size: 12 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; raw: unknown }) =>
            ` ${ctx.label}: ${formatCurrency(ctx.raw as number, locale)}`,
        },
      },
    },
  };

  const monthlyIncome = inputs.monthlyIncome as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Monthly Budget Breakdown
      </h2>
      <div style={{ height: 280 }}>
        <Doughnut data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        Based on {formatCurrency(monthlyIncome, locale)} monthly income &mdash; 50/30/20 rule target
      </p>
    </div>
  );
}

export default function BudgetViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <BudgetChart {...props} />
    </Suspense>
  );
}
