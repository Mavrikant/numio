/**
 * Ratio — Horizontal stacked bar showing the ratio split.
 * Pure SVG — no chart library.
 */

import { useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

export default function RatioViz({ inputs, result }: VizProps) {
  const num = typeof result.simplifiedNumerator === "number" ? result.simplifiedNumerator : 0;
  const den = typeof result.simplifiedDenominator === "number" ? result.simplifiedDenominator : 0;
  const origNum = typeof inputs.numerator === "number" ? inputs.numerator : num;
  const origDen = typeof inputs.denominator === "number" ? inputs.denominator : den;

  const total = num + den;

  const { fracA, fracB, pctA, pctB } = useMemo(() => {
    if (total === 0) return { fracA: 0.5, fracB: 0.5, pctA: 50, pctB: 50 };
    const fracA = num / total;
    const fracB = den / total;
    return {
      fracA,
      fracB,
      pctA: parseFloat((fracA * 100).toFixed(1)),
      pctB: parseFloat((fracB * 100).toFixed(1)),
    };
  }, [num, den, total]);

  const W = 300;
  const H = 52;
  const wA = fracA * W;
  const wB = fracB * W;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Ratio: {origNum} : {origDen}
        {(num !== origNum || den !== origDen) && (
          <span className="ml-2 text-sm font-normal text-slate-500">
            (simplified {num} : {den})
          </span>
        )}
      </h2>
      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ maxWidth: 380 }}
          aria-label={`Ratio bar: ${num} to ${den}`}
          role="img"
        >
          {/* Part A */}
          <rect x={0} y={8} width={wA} height={36} fill="#3b82f6" rx={wA > 6 ? 6 : 0} />
          {/* Part B */}
          <rect x={wA} y={8} width={wB} height={36} fill="#22c55e" rx={wB > 6 ? 6 : 0} />
          {/* Labels inside bars if there's room */}
          {wA > 40 && (
            <text x={wA / 2} y={30} textAnchor="middle" fontSize="12" fontWeight="600" fill="white">
              {num} ({pctA}%)
            </text>
          )}
          {wB > 40 && (
            <text x={wA + wB / 2} y={30} textAnchor="middle" fontSize="12" fontWeight="600" fill="white">
              {den} ({pctB}%)
            </text>
          )}
        </svg>
      </div>
      {/* Legend */}
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm bg-blue-500" />
          <span className="text-slate-700 dark:text-slate-300">
            Part A: {num} ({pctA}%)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-6 rounded-sm bg-green-500" />
          <span className="text-slate-700 dark:text-slate-300">
            Part B: {den} ({pctB}%)
          </span>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        Simplified ratio {num} : {den} — Part A is {pctA}% of the total.
      </p>
    </div>
  );
}
