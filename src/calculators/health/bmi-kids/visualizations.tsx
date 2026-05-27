/**
 * BMI-for-Age Kids Visualization
 * Bar chart of percentile categories with user's percentile highlighted.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Bar = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Bar })),
);

type WeightStatus = "underweight" | "healthy" | "overweight" | "obese";

const CATEGORIES: { key: WeightStatus; label: string; range: string; color: string; activeColor: string }[] = [
  { key: "underweight", label: "Underweight", range: "<5th percentile", color: "rgba(59,130,246,0.3)", activeColor: "#3b82f6" },
  { key: "healthy", label: "Healthy Weight", range: "5th–84th percentile", color: "rgba(34,197,94,0.3)", activeColor: "#22c55e" },
  { key: "overweight", label: "Overweight", range: "85th–94th percentile", color: "rgba(234,179,8,0.3)", activeColor: "#eab308" },
  { key: "obese", label: "Obese", range: "≥95th percentile", color: "rgba(239,68,68,0.3)", activeColor: "#ef4444" },
];

// Representative relative widths (% of total scale)
const CATEGORY_WIDTHS = [5, 80, 10, 5]; // underweight, healthy, overweight, obese

export default function BmiKidsViz({ result }: VizProps) {
  const weightStatus = typeof result.weightStatus === "string" ? (result.weightStatus as WeightStatus) : null;
  const bmi = typeof result.bmi === "number" ? result.bmi : null;
  const percentileEstimate = typeof result.percentileEstimate === "string" ? result.percentileEstimate : "";

  if (!weightStatus || bmi === null) return null;

  const activeIdx = CATEGORIES.findIndex((c) => c.key === weightStatus);

  const barData = {
    labels: CATEGORIES.map((c) => c.label),
    datasets: [
      {
        label: "Percentile span",
        data: CATEGORY_WIDTHS,
        backgroundColor: CATEGORIES.map((c, i) => (i === activeIdx ? c.activeColor : c.color)),
        borderColor: CATEGORIES.map((c, i) => (i === activeIdx ? c.activeColor : "transparent")),
        borderWidth: CATEGORIES.map((_, i) => (i === activeIdx ? 2 : 0)),
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y" as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (_ctx: unknown) => "",
          title: (items: { label: string }[]) => {
            const idx = CATEGORIES.findIndex((c) => c.label === items[0]?.label);
            return idx >= 0 ? CATEGORIES[idx]!.range : "";
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
        max: 100,
      },
      y: {
        ticks: { color: "#334155", font: { size: 12 } },
        grid: { display: false },
      },
    },
  };

  const activeCategory = CATEGORIES[activeIdx]!;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        BMI-for-Age Percentile Category
      </h2>
      <p className="mb-3 text-sm font-medium" style={{ color: activeCategory.activeColor }}>
        {activeCategory.label} — {percentileEstimate}
      </p>

      <Suspense fallback={<div className="h-40 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 160 }}>
          <Bar data={barData} options={barOptions} />
        </div>
      </Suspense>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        CDC 2000 growth chart categories. Highlighted bar shows your child's weight status
        at a BMI of {bmi}. Categories are based on sex- and age-specific percentile cutoffs.
      </p>
    </div>
  );
}
