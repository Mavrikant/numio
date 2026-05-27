/**
 * LineChart — thin wrapper around react-chartjs-2 Line.
 *
 * Use for time-series, growth curves, math function plots (sin/log/parabola).
 * Inputs are deliberately simple; consumers pass typed datasets and labels.
 */

import { Line } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { ensureChartJsRegistered, getChartTheme } from "./ChartJsBase";

ensureChartJsRegistered();

export interface LineSeries {
  readonly label: string;
  readonly data: ReadonlyArray<number>;
  readonly color?: string;
  readonly fill?: boolean;
  readonly tension?: number;
  readonly dashed?: boolean;
}

interface LineChartProps {
  readonly labels: ReadonlyArray<string | number>;
  readonly series: ReadonlyArray<LineSeries>;
  readonly xLabel?: string;
  readonly yLabel?: string;
  readonly title?: string;
  readonly height?: number;
  readonly logY?: boolean;
}

export default function LineChart({
  labels,
  series,
  xLabel,
  yLabel,
  title,
  height = 320,
  logY = false,
}: LineChartProps) {
  const theme = getChartTheme();

  const data: ChartData<"line"> = {
    labels: labels.map((l) => String(l)),
    datasets: series.map((s, i) => {
      const color = s.color ?? theme.palette[i % theme.palette.length]!;
      const ds: ChartData<"line">["datasets"][number] = {
        label: s.label,
        data: [...s.data],
        borderColor: color,
        backgroundColor: color + "33",
        fill: s.fill ?? false,
        tension: s.tension ?? 0.25,
        pointRadius: labels.length > 50 ? 0 : 3,
        borderWidth: 2,
      };
      if (s.dashed) ds.borderDash = [6, 4];
      return ds;
    }),
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
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
        title: xLabel ? { display: true, text: xLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text, maxTicksLimit: 10 },
        grid: { color: theme.grid },
      },
      y: {
        type: logY ? "logarithmic" : "linear",
        title: yLabel ? { display: true, text: yLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div style={{ height }}>
      <Line data={data} options={options} />
    </div>
  );
}
