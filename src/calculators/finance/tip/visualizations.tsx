import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

function TipChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const billAmount = inputs.billAmount as number;
  const tipAmount = result.tipAmount as number;
  const totalAmount = result.totalAmount as number;
  const numberOfPeople = inputs.numberOfPeople as number;
  const perPersonTotal = result.perPersonTotal as number;

  if (billAmount <= 0) return null;

  const hasMultiplePeople = numberOfPeople > 1;

  const labels = hasMultiplePeople
    ? ["Total Bill", "Total Tip", "Grand Total", "Per Person"]
    : ["Bill", "Tip", "Total"];

  const billData = hasMultiplePeople
    ? [billAmount, 0, billAmount, perPersonTotal - tipAmount / numberOfPeople]
    : [billAmount, 0, billAmount];

  const tipData = hasMultiplePeople
    ? [0, tipAmount, tipAmount, tipAmount / numberOfPeople]
    : [0, tipAmount, tipAmount];

  const data = {
    labels,
    datasets: [
      {
        label: "Bill",
        data: billData,
        backgroundColor: theme.palette[0],
        borderRadius: 6,
      },
      {
        label: "Tip",
        data: tipData,
        backgroundColor: theme.palette[2],
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
          label: (ctx: TooltipItem<"bar">) => {
            const val = ctx.raw as number;
            if (val === 0) return "";
            return ` ${ctx.dataset.label ?? ""}: ${formatCurrency(val, locale)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: theme.text, font: { size: 12 } },
        grid: { display: false },
      },
      y: {
        stacked: true,
        ticks: {
          color: theme.text,
          callback: (v: number | string) => formatCurrency(+v, locale),
          font: { size: 11 },
        },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Bill &amp; Tip Breakdown
      </h2>
      <div style={{ height: 260 }}>
        <Bar data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Grand total:{" "}
        <strong>{formatCurrency(totalAmount, locale)}</strong>
        {hasMultiplePeople && (
          <>
            {" "}
            &mdash; <strong>{formatCurrency(perPersonTotal, locale)}</strong> per person
          </>
        )}
      </p>
    </div>
  );
}

export default function TipViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-60 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <TipChart {...props} />
    </Suspense>
  );
}
