import { lazy, Suspense } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";
import { formatCurrency, formatPercent } from "@/lib/intl";

const Pie = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Pie })),
);

function SalaryChart({ result, locale }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const netAnnual = result.netAnnual as number;
  const federalIncomeTax = result.federalIncomeTax as number;
  const socialSecurityTax = result.socialSecurityTax as number;
  const medicareTax = result.medicareTax as number;
  const stateIncomeTax = result.stateIncomeTax as number;
  const grossAnnual = result.grossAnnual as number;

  if (grossAnnual <= 0) return null;

  const data = {
    labels: [
      "Net Pay",
      "Federal Income Tax",
      "Social Security",
      "Medicare",
      "State Tax",
    ],
    datasets: [
      {
        data: [netAnnual, federalIncomeTax, socialSecurityTax, medicareTax, stateIncomeTax],
        backgroundColor: [
          theme.palette[1],
          theme.palette[4],
          theme.palette[3],
          theme.palette[2],
          theme.palette[5],
        ],
        borderColor: theme.background,
        borderWidth: 3,
        hoverOffset: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: theme.text,
          padding: 12,
          font: { size: 11 },
        },
      },
      tooltip: {
        callbacks: {
          label: (ctx: { label: string; raw: unknown }) => {
            const val = ctx.raw as number;
            const pct = grossAnnual > 0 ? (val / grossAnnual) * 100 : 0;
            return ` ${ctx.label}: ${formatCurrency(val, locale)} (${pct.toFixed(1)}%)`;
          },
        },
      },
    },
  };

  const effectiveTaxRate = result.effectiveTaxRate as number;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-800 dark:text-slate-100">
        Gross Salary Breakdown
      </h2>
      <div style={{ height: 280 }}>
        <Pie data={data} options={options} />
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Effective tax rate:{" "}
        <strong>{formatPercent(effectiveTaxRate, locale)}</strong> &mdash; Net annual pay:{" "}
        <strong className="text-green-600 dark:text-green-400">
          {formatCurrency(netAnnual, locale)}
        </strong>
      </p>
    </div>
  );
}

export default function SalaryViz(props: VizProps) {
  return (
    <Suspense
      fallback={
        <div className="h-64 animate-pulse rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/50" />
      }
    >
      <SalaryChart {...props} />
    </Suspense>
  );
}
