/**
 * Calorie Deficit Visualization
 * Line chart projecting weight over weeks until target reached.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

export default function CalorieDeficitViz({ result, inputs }: VizProps) {
  const weeksToGoal = typeof result.weeksToGoal === "number" ? result.weeksToGoal : 0;
  const weeklyLossKg = typeof result.weeklyLossKg === "number" ? result.weeklyLossKg : 0;
  const weightToLoseKg = typeof result.weightToLoseKg === "number" ? result.weightToLoseKg : 0;

  const unit = typeof inputs.unit === "string" ? inputs.unit : "metric";
  const rawCurrentWeight = typeof inputs.currentWeight === "number" ? inputs.currentWeight : 0;
  const rawTargetWeight = typeof inputs.targetWeight === "number" ? inputs.targetWeight : 0;

  if (weeksToGoal <= 0 || weeklyLossKg <= 0 || weightToLoseKg <= 0) return null;

  const displayWeeks = Math.min(weeksToGoal, 104);

  const LBS_TO_KG = 0.453592;
  const currentKg = unit === "imperial" ? rawCurrentWeight * LBS_TO_KG : rawCurrentWeight;
  const targetKg = unit === "imperial" ? rawTargetWeight * LBS_TO_KG : rawTargetWeight;
  const weightUnit = unit === "imperial" ? "lbs" : "kg";
  const currentDisplay = unit === "imperial" ? rawCurrentWeight : Math.round(currentKg * 10) / 10;
  const targetDisplay = unit === "imperial" ? rawTargetWeight : Math.round(targetKg * 10) / 10;

  // Sample up to 20 points for the chart
  const sampleCount = Math.min(displayWeeks, 20);
  const step = displayWeeks / sampleCount;

  const labels: string[] = [];
  const weights: number[] = [];
  const targetLine: number[] = [];

  for (let i = 0; i <= sampleCount; i++) {
    const w = Math.round(i * step);
    const weightKg = Math.max(targetKg, currentKg - weeklyLossKg * w);
    const weightDisplay = unit === "imperial"
      ? Math.round((weightKg / LBS_TO_KG) * 10) / 10
      : Math.round(weightKg * 10) / 10;
    labels.push(`Wk ${w}`);
    weights.push(weightDisplay);
    targetLine.push(Math.round(targetDisplay * 10) / 10);
  }

  const theme = getChartTheme();

  const lineData = {
    labels,
    datasets: [
      {
        label: `Weight (${weightUnit})`,
        data: weights,
        borderColor: theme.palette[0],
        backgroundColor: `${theme.palette[0]}18`,
        fill: true,
        tension: 0.3,
        pointRadius: sampleCount <= 12 ? 4 : 0,
        borderWidth: 2,
      },
      {
        label: "Target",
        data: targetLine,
        borderColor: theme.palette[1],
        borderDash: [6, 3],
        borderWidth: 1.5,
        pointRadius: 0,
        fill: false,
        tension: 0,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: theme.text, font: { size: 11 } } },
      tooltip: {
        callbacks: {
          label: (ctx: { dataset: { label?: string | undefined }; raw: unknown }) =>
            ` ${ctx.dataset.label ?? ""}: ${ctx.raw as string} ${weightUnit}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.text, font: { size: 10 }, maxTicksLimit: 10 },
        grid: { color: theme.grid },
        title: { display: true, text: "Weeks", color: theme.text, font: { size: 11 } },
      },
      y: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
        title: { display: true, text: `Weight (${weightUnit})`, color: theme.text, font: { size: 11 } },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Weight Loss Projection
      </h2>
      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        {currentDisplay} → {targetDisplay} {weightUnit} over ~{weeksToGoal} weeks
        (losing {weeklyLossKg} kg/week)
      </p>

      <Suspense fallback={<div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 240 }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      </Suspense>

      {weeksToGoal > 104 && (
        <p className="mt-2 text-xs text-amber-600 dark:text-amber-400">
          Chart shows first 104 weeks. Full projection extends to {weeksToGoal} weeks.
        </p>
      )}
      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Projected weight assuming a constant daily calorie deficit. Actual results depend on
        metabolic adaptation and adherence.
      </p>
    </div>
  );
}
