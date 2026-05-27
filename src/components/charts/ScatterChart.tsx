/**
 * ScatterChart — XY scatter for correlation, function plots, distribution.
 */

import { Scatter } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import { ensureChartJsRegistered, getChartTheme } from "./ChartJsBase";

ensureChartJsRegistered();

export interface ScatterSeries {
  readonly label: string;
  readonly points: ReadonlyArray<{ x: number; y: number }>;
  readonly color?: string;
  readonly showLine?: boolean;
  readonly pointRadius?: number;
}

interface ScatterChartProps {
  readonly series: ReadonlyArray<ScatterSeries>;
  readonly xLabel?: string;
  readonly yLabel?: string;
  readonly title?: string;
  readonly height?: number;
}

export default function ScatterChart({
  series,
  xLabel,
  yLabel,
  title,
  height = 320,
}: ScatterChartProps) {
  const theme = getChartTheme();

  const data: ChartData<"scatter"> = {
    datasets: series.map((s, i) => {
      const color = s.color ?? theme.palette[i % theme.palette.length];
      return {
        label: s.label,
        data: s.points.map((p) => ({ x: p.x, y: p.y })),
        backgroundColor: color,
        borderColor: color,
        showLine: s.showLine ?? false,
        pointRadius: s.pointRadius ?? 3,
        borderWidth: 2,
      };
    }),
  };

  const options: ChartOptions<"scatter"> = {
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
        type: "linear",
        position: "bottom",
        title: xLabel ? { display: true, text: xLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
      y: {
        title: yLabel ? { display: true, text: yLabel, color: theme.text } : { display: false },
        ticks: { color: theme.text },
        grid: { color: theme.grid },
      },
    },
  };

  return (
    <div style={{ height }}>
      <Scatter data={data} options={options} />
    </div>
  );
}
