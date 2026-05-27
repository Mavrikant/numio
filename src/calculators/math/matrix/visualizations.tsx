/**
 * Matrix — Heatmap-style SVG grid visualizing the result matrix with cell
 * coloring by magnitude.
 *
 * Pure SVG, no chart lib needed.
 */

import { useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

/** Extract up to a 3×3 result matrix from result fields c11..c33 */
function extractResultMatrix(
  inputs: Record<string, unknown>,
  result: Record<string, unknown>,
): { matrix: (number | null)[][]; size: 2 | 3; label: string } {
  const size = inputs.matrixSize === "3x3" ? 3 : 2;
  const operation = typeof inputs.operation === "string" ? inputs.operation : "";

  if (operation === "determinant") {
    // Show the input matrix A
    const rows: (number | null)[][] = [];
    for (let r = 1; r <= size; r++) {
      const row: (number | null)[] = [];
      for (let c = 1; c <= size; c++) {
        const key = `a${r}${c}`;
        const v = inputs[key];
        row.push(typeof v === "number" ? v : null);
      }
      rows.push(row);
    }
    const det = typeof result.determinant === "number" ? result.determinant : null;
    return { matrix: rows, size: size as 2 | 3, label: `Input Matrix A  (det = ${det ?? "?"})` };
  }

  // add / subtract / multiply — show result matrix C
  const rows: (number | null)[][] = [];
  for (let r = 1; r <= size; r++) {
    const row: (number | null)[] = [];
    for (let c = 1; c <= size; c++) {
      const key = `c${r}${c}`;
      const v = result[key];
      row.push(typeof v === "number" ? v : null);
    }
    rows.push(row);
  }
  const opLabel = operation === "add" ? "A + B" : operation === "subtract" ? "A − B" : "A × B";
  return { matrix: rows, size: size as 2 | 3, label: `Result Matrix (${opLabel})` };
}

/** Map a value to a blue-red heatmap colour */
function heatColor(value: number | null, min: number, max: number): string {
  if (value === null) return "#f1f5f9";
  if (min === max) return "#93c5fd"; // single value — mid-blue
  const t = (value - min) / (max - min); // 0..1
  // interpolate: 0 = blue, 0.5 = white, 1 = red
  if (t < 0.5) {
    const tt = t * 2;
    const r = Math.round(59 + (255 - 59) * tt);
    const g = Math.round(130 + (255 - 130) * tt);
    const b = Math.round(246 + (255 - 246) * tt);
    return `rgb(${r},${g},${b})`;
  } else {
    const tt = (t - 0.5) * 2;
    const r = Math.round(255 + (239 - 255) * tt);
    const g = Math.round(255 + (68 - 255) * tt);
    const b = Math.round(255 + (68 - 255) * tt);
    return `rgb(${r},${g},${b})`;
  }
}

function fmt(v: number | null): string {
  if (v === null) return "?";
  if (Number.isInteger(v)) return String(v);
  return v.toFixed(2);
}

export default function MatrixViz({ inputs, result }: VizProps) {
  const { matrix, size, label } = useMemo(
    () => extractResultMatrix(inputs, result),
    [inputs, result],
  );

  const flat = matrix.flat().filter((v): v is number => v !== null);
  const min = flat.length ? Math.min(...flat) : 0;
  const max = flat.length ? Math.max(...flat) : 0;

  const cellSize = size === 2 ? 72 : 56;
  const padding = 12;
  const svgW = cellSize * size + padding * 2;
  const svgH = cellSize * size + padding * 2;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Matrix Heatmap
      </h2>
      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          width={svgW}
          height={svgH}
          aria-label={label}
          role="img"
          style={{ maxWidth: "100%" }}
        >
          {matrix.map((row, ri) =>
            row.map((val, ci) => {
              const x = padding + ci * cellSize;
              const y = padding + ri * cellSize;
              const bg = heatColor(val, min, max);
              // Contrast text
              const isLight =
                val === null ||
                (val - min) / (max - min + 0.0001) > 0.3 &&
                  (val - min) / (max - min + 0.0001) < 0.7;
              const textFill = isLight ? "#1e293b" : "#fff";
              return (
                <g key={`${ri}-${ci}`}>
                  <rect
                    x={x + 2}
                    y={y + 2}
                    width={cellSize - 4}
                    height={cellSize - 4}
                    fill={bg}
                    rx={6}
                  />
                  <text
                    x={x + cellSize / 2}
                    y={y + cellSize / 2 + 5}
                    textAnchor="middle"
                    fontSize={size === 2 ? 16 : 13}
                    fontWeight="600"
                    fill={textFill}
                  >
                    {fmt(val)}
                  </text>
                  {/* Row/col subscript */}
                  <text
                    x={x + 8}
                    y={y + 14}
                    fontSize="9"
                    fill="#64748b"
                  >
                    {ri + 1},{ci + 1}
                  </text>
                </g>
              );
            }),
          )}
        </svg>
      </div>
      <p className="mt-3 text-center text-sm font-medium text-slate-600 dark:text-slate-300">
        {label}
      </p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 text-center">
        Cell colour ranges from blue (min) to red (max) by absolute magnitude.
      </p>
    </div>
  );
}
