import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency, formatPercent } from "@/lib/intl";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

function RoiChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const initialInvestment = inputs.initialInvestment as number;
  const finalValue = inputs.finalValue as number;
  const netProfit = result.netProfit as number;

  if (initialInvestment <= 0) return null;

  const isProfit = netProfit >= 0;
  const profitColor = isProfit ? theme.palette[1] : theme.palette[4];

  const data = {
    labels: ["Initial Investment", "Net Profit / Loss", "Final Value"],
    datasets: [
      {
        label: "Value",
        data: [initialInvestment, Math.abs(netProfit), finalValue],
        backgroundColor: [theme.palette[0], profitColor, theme.palette[2]],
        borderRadius: 8,
        barThickness: 48,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"bar">) =>
            ` ${formatCurrency(ctx.raw as number, locale)}`,
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

  const roi = result.roi as number;
  const annualizedRoi = result.annualizedRoi as number;
  const moic = result.moic as number;
  const years = inputs.years as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Investment Return Overview
      </h2>
      <div style={{ height: 260 }}>
        <Bar data={data} options={options} />
      </div>
      <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <span>
          ROI:{" "}
          <strong className={isProfit ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
            {formatPercent(roi, locale)}
          </strong>
        </span>
        {years > 0 && (
          <span>
            Annualized (CAGR):{" "}
            <strong>{formatPercent(annualizedRoi, locale)}/yr</strong>
          </span>
        )}
        <span>
          MOIC: <strong>{moic.toFixed(2)}×</strong>
        </span>
      </div>
    </div>
  );
}

export default function RoiViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-60 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <RoiChart {...props} />
    </Suspense>
  );
}
