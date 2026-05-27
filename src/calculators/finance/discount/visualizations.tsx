import { lazy, Suspense } from "react";
import type { ChartOptions, TooltipItem } from "chart.js";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency } from "@/lib/intl";

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

function DiscountChart({ inputs, result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const originalPrice = inputs.originalPrice as number;
  const salePrice = result.salePrice as number;
  const savings = result.savings as number;
  const finalPriceWithTax = result.finalPriceWithTax as number;

  if (originalPrice <= 0) return null;

  const data = {
    labels: ["Original Price", "Sale Price", "After Tax"],
    datasets: [
      {
        label: "Price",
        data: [salePrice, salePrice, finalPriceWithTax],
        backgroundColor: [theme.palette[0], theme.palette[1], theme.palette[1]],
        borderRadius: 6,
      },
      {
        label: "Savings",
        data: [savings, 0, 0],
        backgroundColor: [`${theme.palette[4]}bb`, "transparent", "transparent"],
        borderRadius: 6,
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
            return ` ${ctx.dataset.label ?? ""}: ${formatCurrency(val, locale)}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: theme.text,
          callback: (v: number | string) => formatCurrency(+v, locale),
          font: { size: 11 },
        },
        grid: { color: theme.grid },
      },
      y: {
        stacked: true,
        ticks: { color: theme.text, font: { size: 12 } },
        grid: { display: false },
      },
    },
  };

  const savingsPct = result.savingsPct as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Discount Breakdown
      </h2>
      <div style={{ height: 200 }}>
        <Bar data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        You save{" "}
        <strong className="text-green-600 dark:text-green-400">
          {formatCurrency(savings, locale)}
        </strong>{" "}
        ({savingsPct.toFixed(1)}% off {formatCurrency(originalPrice, locale)})
      </p>
    </div>
  );
}

export default function DiscountViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-48 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <DiscountChart {...props} />
    </Suspense>
  );
}
