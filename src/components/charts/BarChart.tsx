/**
 * BarChart — wrapper for vertical/horizontal bar charts (histograms, comparisons).
 */

import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { ensureChartJsRegistered, getChartTheme } from "./ChartJsBase";

ensureChartJsRegistered();

export interface BarSeries {
  readonly label: string;
  readonly data: ReadonlyArray<number>;
  readonly color?: string;
}

interface BarChartProps {
  readonly labels: ReadonlyArray<string | number>;
  readonly series: ReadonlyArray<BarSeries>;
  readonly xLabel?: string;
  readonly yLabel?: string;
  readonly title?: string;
  readonly height?: number;
  readonly horizontal?: boolean;
  readonly stacked?: boolean;
}

export default function BarChart({
  labels,
  series,
  xLabel,
  yLabel,
  title,
  height = 320,
  horizontal = false,
  stacked = false,
}: BarChartProps) {
  const theme = getChartTheme();

  const data: ChartData<"bar"> = {
    labels: labels.map((l) => String(l)),
    datasets: series.map((s, i) => {
      const color = s.color ?? theme.palette[i % theme.palette.length];
      return {
        label: s.label,
        data: [...s.data],
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
      };
    }),
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: horizontal ? "y" : "x",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: series.length > 1,
        labels: { color: theme.text },
      },
      title: title ? { display: true, text: title, color: theme.text } : { display: false },
      tooltip: {
        backgroundColor: theme.background,
        titleColor: theme.text,
        bodyColor: theme.text,
        borderColor: theme.border,
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        stacked,
        title: xLabel ? { display: true, text: xLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text },
        grid: { color: theme.grid, display: !horizontal },
      },
      y: {
        stacked,
        title: yLabel ? { display: true, text: yLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text },
        grid: { color: theme.grid, display: horizontal },
      },
    },
  };

  return (
    <div style={{ height }}>
      <Bar data={data} options={options} />
    </div>
  );
}
