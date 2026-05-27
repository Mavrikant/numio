/**
 * PieChart / DoughnutChart — for proportions (macros, budget breakdown).
 */

import { Doughnut, Pie } from "react-chartjs-2";
import type { ChartData } from "chart.js";
import { ensureChartJsRegistered, getChartTheme } from "./ChartJsBase";

ensureChartJsRegistered();

export interface PieSegment {
  readonly label: string;
  readonly value: number;
  readonly color?: string;
}

interface PieChartProps {
  readonly segments: ReadonlyArray<PieSegment>;
  readonly title?: string;
  readonly height?: number;
  readonly variant?: "pie" | "doughnut";
  readonly showLegend?: boolean;
}

export default function PieChart({
  segments,
  title,
  height = 280,
  variant = "doughnut",
  showLegend = true,
}: PieChartProps) {
  const theme = getChartTheme();

  const data = {
    labels: segments.map((s) => s.label),
    datasets: [
      {
        data: segments.map((s) => s.value),
        backgroundColor: segments.map(
          (s, i) => s.color ?? theme.palette[i % theme.palette.length]!,
        ),
        borderColor: theme.background,
        borderWidth: 2,
      },
    ],
  } as ChartData<"pie"> & ChartData<"doughnut">;

  // Loose typing here — Chart.js types for the shared pie/doughnut options
  // require very specific generic params that conflict at the React wrapper
  // boundary. The component itself enforces correct runtime behavior.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: showLegend,
        position: "right" as const,
        labels: { color: theme.text, padding: 12 },
      },
      title: title ? { display: true, text: title, color: theme.text } : { display: false },
      tooltip: {
        backgroundColor: theme.background,
        titleColor: theme.text,
        bodyColor: theme.text,
        borderColor: theme.border,
        borderWidth: 1,
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => {
            const total = (ctx.dataset.data as number[]).reduce((a, b) => a + b, 0);
            const value = ctx.parsed as number;
            const pct = total > 0 ? ((value / total) * 100).toFixed(1) : "0";
            return `${ctx.label}: ${value} (${pct}%)`;
          },
        },
      },
    },
  };

  if (variant === "pie") {
    return (
      <div style={{ height }}>
        <Pie data={data as ChartData<"pie">} options={options} />
      </div>
    );
  }
  return (
    <div style={{ height }}>
      <Doughnut data={data as ChartData<"doughnut">} options={options} />
    </div>
  );
}
