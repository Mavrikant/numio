/**
 * Pregnancy Weight Gain Visualization
 * Line chart of recommended weight gain range over weeks (IOM 2009)
 * with user's current week marker.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { lazy, Suspense } from "react";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

ensureChartJsRegistered();

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

// IOM 2009 gain ranges
const GAIN_RANGES: Record<string, { minKg: number; maxKg: number; weeklyKg: number; firstTrimKg: number }> = {
  underweight: { minKg: 12.5, maxKg: 18, weeklyKg: 0.5, firstTrimKg: 1.5 },
  normal:      { minKg: 11.5, maxKg: 16, weeklyKg: 0.42, firstTrimKg: 1.5 },
  overweight:  { minKg: 7,   maxKg: 11.5, weeklyKg: 0.28, firstTrimKg: 1.0 },
  obese:       { minKg: 5,   maxKg: 9,   weeklyKg: 0.22, firstTrimKg: 0.75 },
};

function expectedGain(week: number, range: { weeklyKg: number; firstTrimKg: number }): number {
  if (week <= 13) return (week / 13) * range.firstTrimKg;
  return range.firstTrimKg + (week - 13) * range.weeklyKg;
}

const ON_TRACK_COLORS: Record<string, string> = {
  under: "#3b82f6",
  on_track: "#22c55e",
  over: "#ef4444",
};

const ON_TRACK_LABELS: Record<string, string> = {
  under: "Below recommended",
  on_track: "On track",
  over: "Above recommended",
};

export default function PregnancyWeightViz({ result, inputs }: VizProps) {
  const gestationalWeek = typeof inputs.gestationalWeek === "number" ? inputs.gestationalWeek : null;
  const bmiCategory = typeof result.bmiCategory === "string" ? result.bmiCategory : null;
  const currentGain = typeof result.currentGain === "number" ? result.currentGain : null;
  const onTrack = typeof result.onTrack === "string" ? result.onTrack : null;
  const recommendedTotalGainMin = typeof result.recommendedTotalGainMin === "number" ? result.recommendedTotalGainMin : null;
  const recommendedTotalGainMax = typeof result.recommendedTotalGainMax === "number" ? result.recommendedTotalGainMax : null;

  if (gestationalWeek === null || !bmiCategory || currentGain === null) return null;

  const range = GAIN_RANGES[bmiCategory] ?? GAIN_RANGES.normal!;
  const theme = getChartTheme();

  // Build week labels every 4 weeks + current week
  const TOTAL_WEEKS = 40;
  const weekSteps = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];

  const labels = weekSteps.map((w) => `Wk ${w}`);
  const midAtTerm = expectedGain(TOTAL_WEEKS, range);

  const minGains = weekSteps.map((w) => {
    const mid = expectedGain(w, range);
    return Math.round((mid / midAtTerm) * range.minKg * 10) / 10;
  });
  const maxGains = weekSteps.map((w) => {
    const mid = expectedGain(w, range);
    return Math.round((mid / midAtTerm) * range.maxKg * 10) / 10;
  });

  const trackColor = ON_TRACK_COLORS[onTrack ?? "on_track"] ?? "#22c55e";

  // Find the index of current week (or nearest)
  const weekIdx = weekSteps.findIndex((w) => w >= gestationalWeek);
  const currentGainArr = weekSteps.map((_, i) => (i === weekIdx ? currentGain : null));

  const lineData = {
    labels,
    datasets: [
      {
        label: "Max recommended",
        data: maxGains,
        borderColor: "rgba(34,197,94,0.5)",
        backgroundColor: "rgba(34,197,94,0.1)",
        fill: "+1",
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.3,
      },
      {
        label: "Min recommended",
        data: minGains,
        borderColor: "rgba(34,197,94,0.5)",
        backgroundColor: "transparent",
        fill: false,
        borderWidth: 1.5,
        pointRadius: 0,
        tension: 0.3,
      },
      {
        label: "Your gain",
        data: currentGainArr,
        borderColor: trackColor,
        backgroundColor: trackColor,
        pointRadius: 8,
        pointHoverRadius: 10,
        pointStyle: "star" as const,
        showLine: false,
        fill: false,
        spanGaps: false,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: theme.text,
          font: { size: 11 },
          filter: (item: { text: string }) => item.text !== "Min recommended",
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => {
            if (ctx.raw === null || ctx.raw === undefined) return "";
            return ` ${(ctx.dataset?.label ?? "") as string}: ${ctx.raw as string} kg`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
        title: { display: true, text: "Gestational Week", color: theme.text, font: { size: 11 } },
      },
      y: {
        ticks: { color: theme.text, font: { size: 10 } },
        grid: { color: theme.grid },
        title: { display: true, text: "Weight Gain (kg)", color: theme.text, font: { size: 11 } },
        min: 0,
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Pregnancy Weight Gain Chart
      </h2>
      <div className="mb-3 flex flex-wrap gap-2 text-sm">
        <span className="text-slate-600 dark:text-slate-300">
          Week {gestationalWeek} · Gained <strong>{currentGain} kg</strong>
        </span>
        <span className="font-medium" style={{ color: trackColor }}>
          {ON_TRACK_LABELS[onTrack ?? "on_track"]}
        </span>
        <span className="text-slate-400 dark:text-slate-500 text-xs self-center">
          IOM target: {recommendedTotalGainMin}–{recommendedTotalGainMax} kg total
        </span>
      </div>

      <Suspense fallback={<div className="h-56 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />}>
        <div style={{ height: 260 }}>
          <Line data={lineData} options={lineOptions} />
        </div>
      </Suspense>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        IOM 2009 recommended weight gain range (green band) for pre-pregnancy BMI category
        "{bmiCategory}". The star marks your current gain at week {gestationalWeek}.
      </p>
    </div>
  );
}
