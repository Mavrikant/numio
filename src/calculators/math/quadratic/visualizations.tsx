/**
 * Quadratic — Line chart of the parabola y = ax² + bx + c, with roots and
 * vertex marked. Uses Chart.js Line via react-chartjs-2.
 */

import { lazy, Suspense, useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";
import { ensureChartJsRegistered, getChartTheme } from "@/components/charts/ChartJsBase";

const Line = lazy(() =>
  import("react-chartjs-2").then((m) => ({ default: m.Line })),
);

function generateParabola(
  a: number,
  b: number,
  c: number,
  vertexX: number,
  steps = 120,
): { x: number; y: number }[] {
  const xMin = vertexX - 6;
  const xMax = vertexX + 6;
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const y = a * x * x + b * x + c;
    if (Number.isFinite(y) && Math.abs(y) < 1e8) {
      points.push({ x: parseFloat(x.toFixed(4)), y: parseFloat(y.toFixed(4)) });
    }
  }
  return points;
}

export default function QuadraticViz({ inputs, result }: VizProps) {
  ensureChartJsRegistered();
  const theme = getChartTheme();

  const a = typeof inputs.a === "number" ? inputs.a : 1;
  const b = typeof inputs.b === "number" ? inputs.b : 0;
  const c = typeof inputs.c === "number" ? inputs.c : 0;
  const vertexX = typeof result.vertex_x === "number" ? result.vertex_x : -b / (2 * a);
  const vertexY = typeof result.vertex_y === "number" ? result.vertex_y : a * vertexX * vertexX + b * vertexX + c;
  const discriminant = typeof result.discriminant === "number" ? result.discriminant : b * b - 4 * a * c;
  const root1_type = result.root1_type as string | undefined;

  const curve = useMemo(
    () => generateParabola(a, b, c, vertexX),
    [a, b, c, vertexX],
  );

  const hasRealRoots = discriminant >= 0 && root1_type !== "complex";

  // Parse roots from result
  const root1 =
    typeof result.root1 === "number"
      ? result.root1
      : null;
  const root2 =
    typeof result.root2 === "number"
      ? result.root2
      : null;

  const markerDatasets = [
    // Vertex
    {
      label: `Vertex (${parseFloat(vertexX.toFixed(3))}, ${parseFloat(vertexY.toFixed(3))})`,
      data: [{ x: vertexX, y: vertexY }],
      borderColor: "#f97316",
      backgroundColor: "#f97316",
      pointRadius: 8,
      pointHoverRadius: 10,
      showLine: false,
    },
    // Root markers
    ...(hasRealRoots && root1 !== null && root2 !== null
      ? [
          {
            label:
              root1 === root2
                ? `Root (${parseFloat((root1 as number).toFixed(4))}, 0)`
                : `Roots: x=${parseFloat((root1 as number).toFixed(4))}, x=${parseFloat((root2 as number).toFixed(4))}`,
            data:
              root1 === root2
                ? [{ x: root1 as number, y: 0 }]
                : [
                    { x: root1 as number, y: 0 },
                    { x: root2 as number, y: 0 },
                  ],
            borderColor: "#22c55e",
            backgroundColor: "#22c55e",
            pointRadius: 7,
            pointHoverRadius: 9,
            showLine: false,
          },
        ]
      : []),
  ];

  const data = {
    datasets: [
      {
        label: `y = ${a}x² ${b >= 0 ? "+" : ""}${b}x ${c >= 0 ? "+" : ""}${c}`,
        data: curve,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.08)",
        pointRadius: 0,
        borderWidth: 2,
        fill: false,
        tension: 0.3,
      },
      ...markerDatasets,
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: { color: theme.text, boxWidth: 14, font: { size: 10 } },
      },
    },
    scales: {
      x: {
        type: "linear" as const,
        title: { display: true, text: "x", color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
      y: {
        title: { display: true, text: "y", color: theme.text },
        grid: { color: theme.grid },
        ticks: { color: theme.text },
      },
    },
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Parabola: y = {a}x² {b >= 0 ? "+" : ""}{b}x {c >= 0 ? "+" : ""}{c}
      </h2>
      <Suspense
        fallback={
          <div className="flex h-56 items-center justify-center text-sm text-slate-400">
            Loading chart…
          </div>
        }
      >
        <div style={{ height: 280 }}>
          <Line data={data} options={options} />
        </div>
      </Suspense>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Orange dot = vertex ({parseFloat(vertexX.toFixed(3))}, {parseFloat(vertexY.toFixed(3))}).
        {hasRealRoots && root1 !== null && root2 !== null
          ? ` Green dot(s) = root(s) where y = 0.`
          : ` Discriminant < 0 — no real roots.`}
      </p>
    </div>
  );
}
