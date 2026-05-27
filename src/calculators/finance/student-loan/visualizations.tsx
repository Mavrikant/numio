import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function StudentLoanChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const apr = inputs.apr as number;
  const loanTerm = inputs.loanTerm as number;
  const balanceAfterGrace = result.balanceAfterGrace as number;
  const monthlyPayment = result.monthlyPayment as number;
  const monthsToPayoff = result.monthsToPayoff as number;

  if (balanceAfterGrace <= 0 || monthlyPayment <= 0) return null;

  const monthlyRate = apr / 12 / 100;
  const totalMonths = Math.min(monthsToPayoff, loanTerm * 12);

  const labels: string[] = [];
  const remainingBalance: number[] = [];
  const principalPaid: number[] = [];
  const interestPaid: number[] = [];

  let balance = balanceAfterGrace;
  let cumPrincipal = 0;
  let cumInterest = 0;

  // Sample every N months to keep chart readable
  const step = totalMonths > 120 ? 3 : 1;

  for (let m = 0; m <= totalMonths; m++) {
    if (m % step === 0 || m === totalMonths) {
      const yr = (m / 12).toFixed(1);
      labels.push(`Yr ${yr}`);
      remainingBalance.push(Math.max(0, Math.round(balance * 100) / 100));
      principalPaid.push(Math.round(cumPrincipal * 100) / 100);
      interestPaid.push(Math.round(cumInterest * 100) / 100);
    }

    if (m < totalMonths) {
      const interestCharge = balance * monthlyRate;
      const principal = monthlyPayment - interestCharge;
      cumInterest += interestCharge;
      cumPrincipal += Math.min(principal, balance);
      balance = Math.max(0, balance - principal);
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Remaining Balance",
        data: remainingBalance,
        borderColor: theme.palette[4],
        backgroundColor: `${theme.palette[4]}22`,
        fill: true,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
      {
        label: "Principal Paid",
        data: principalPaid,
        borderColor: theme.palette[1],
        backgroundColor: "transparent",
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
      {
        label: "Interest Paid",
        data: interestPaid,
        borderColor: theme.palette[3],
        backgroundColor: "transparent",
        fill: false,
        tension: 0.3,
        pointRadius: 0,
        pointHoverRadius: 4,
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
        ticks: { color: theme.text, maxTicksLimit: 10, font: { size: 10 } },
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

  const totalInterest = result.totalInterest as number;
  const totalPaid = result.totalPaid as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Student Loan Amortization
      </h2>
      <div style={{ height: 300 }}>
        <Line data={data} options={options} />
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span>Total paid: <strong>{formatCurrency(totalPaid, locale)}</strong></span>
        <span>
          Total interest:{" "}
          <strong className="text-red-600 dark:text-red-400">
            {formatCurrency(totalInterest, locale)}
          </strong>
        </span>
        <span>Monthly payment: <strong>{formatCurrency(monthlyPayment, locale)}</strong></span>
      </div>
    </div>
  );
}

export default function StudentLoanViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <StudentLoanChart {...props} />
    </Suspense>
  );
}
