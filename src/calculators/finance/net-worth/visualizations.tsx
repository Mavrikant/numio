import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

function NetWorthChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const cashAndSavings = inputs.cashAndSavings as number;
  const investmentAccounts = inputs.investmentAccounts as number;
  const retirementAccounts = inputs.retirementAccounts as number;
  const homeValue = inputs.homeValue as number;
  const otherRealEstate = inputs.otherRealEstate as number;
  const vehicleValue = inputs.vehicleValue as number;
  const otherAssets = inputs.otherAssets as number;

  const mortgage = inputs.mortgage as number;
  const carLoans = inputs.carLoans as number;
  const studentLoans = inputs.studentLoans as number;
  const creditCardDebt = inputs.creditCardDebt as number;
  const otherDebts = inputs.otherDebts as number;

  const totalAssets = result.totalAssets as number;
  const totalLiabilities = result.totalLiabilities as number;
  const netWorth = result.netWorth as number;

  if (totalAssets <= 0 && totalLiabilities <= 0) return null;

  const data = {
    labels: [
      "Cash & Savings",
      "Investments",
      "Retirement",
      "Home",
      "Other Real Estate",
      "Vehicles",
      "Other Assets",
      "Mortgage",
      "Car Loans",
      "Student Loans",
      "Credit Cards",
      "Other Debts",
    ],
    datasets: [
      {
        label: "Assets",
        data: [
          cashAndSavings,
          investmentAccounts,
          retirementAccounts,
          homeValue,
          otherRealEstate,
          vehicleValue,
          otherAssets,
          0,
          0,
          0,
          0,
          0,
        ],
        backgroundColor: theme.palette[1],
        borderRadius: 4,
      },
      {
        label: "Liabilities",
        data: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          -mortgage,
          -carLoans,
          -studentLoans,
          -creditCardDebt,
          -otherDebts,
        ],
        backgroundColor: theme.palette[4],
        borderRadius: 4,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        position: "top",
        labels: { color: theme.text, font: { size: 12 } },
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) => {
            const val = ctx.raw as number;
            if (val === 0) return "";
            return ` ${ctx.dataset.label ?? ""}: ${formatCurrency(Math.abs(val), locale)}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.text,
          callback: (v: number | string) => formatCurrency(Math.abs(+v), locale),
          font: { size: 10 },
        },
        grid: { color: theme.grid },
      },
      y: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { display: false },
      },
    },
  };

  const netWorthColor =
    netWorth >= 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-800 dark:text-slate-100">
        Assets &amp; Liabilities
      </h2>
      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        Net Worth:{" "}
        <strong className={netWorthColor}>{formatCurrency(netWorth, locale)}</strong>
      </p>
      <div style={{ height: 320 }}>
        <Bar data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Total assets: {formatCurrency(totalAssets, locale)} &mdash; Total liabilities:{" "}
        {formatCurrency(totalLiabilities, locale)}
      </p>
    </div>
  );
}

export default function NetWorthViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-80 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <NetWorthChart {...props} />
    </Suspense>
  );
}
