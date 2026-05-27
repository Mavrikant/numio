/**
 * Percentage — Doughnut chart showing the percentage as a slice of the whole,
 * with the value as center label. Pure SVG — no chart lib overhead.
 */

import { useMemo } from "react";
import type { VizProps } from "@/components/calculator/CalcVizSlot";

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
): string {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const sx = cx + r * Math.cos(toRad(startAngle - 90));
  const sy = cy + r * Math.sin(toRad(startAngle - 90));
  const ex = cx + r * Math.cos(toRad(endAngle - 90));
  const ey = cy + r * Math.sin(toRad(endAngle - 90));
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${sx} ${sy} A ${r} ${r} 0 ${large} 1 ${ex} ${ey}`;
}

export default function PercentageViz({ inputs, result }: VizProps) {
  const problemType = typeof inputs.problemType === "string" ? inputs.problemType : "";
  const resultVal = typeof result.result === "number" ? result.result : null;

  const { pct, sliceLabel, wholeLabel } = useMemo(() => {
    if (resultVal === null) return { pct: 0, sliceLabel: "?", wholeLabel: "?" };

    if (problemType === "percentage-of") {
      // value1% of value2
      const pct = Math.min(100, Math.max(0, typeof inputs.value1 === "number" ? inputs.value1 : 0));
      return {
        pct,
        sliceLabel: `${pct}%`,
        wholeLabel: `of ${inputs.value2}`,
      };
    }

    if (problemType === "what-percentage") {
      const pct = Math.min(100, Math.max(0, resultVal));
      return {
        pct,
        sliceLabel: `${parseFloat(pct.toFixed(2))}%`,
        wholeLabel: `of ${inputs.value2}`,
      };
    }

    // percentage-change
    const pct = Math.min(200, Math.max(-200, resultVal));
    const displayPct = Math.abs(pct);
    return {
      pct: Math.min(100, displayPct),
      sliceLabel: `${pct > 0 ? "+" : ""}${parseFloat(resultVal.toFixed(2))}%`,
      wholeLabel: pct >= 0 ? "increase" : "decrease",
    };
  }, [resultVal, problemType, inputs.value1, inputs.value2]);

  const CX = 100;
  const CY = 100;
  const R = 72;
  const INNER = 46;

  const angle = (pct / 100) * 360;
  const clampedAngle = Math.min(359.9, Math.max(0, angle));

  const sliceColor = problemType === "percentage-change"
    ? (typeof resultVal === "number" && resultVal >= 0 ? "#22c55e" : "#ef4444")
    : "#3b82f6";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold text-slate-900 dark:text-slate-100">
        Percentage Visualized
      </h2>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
        <svg
          viewBox="0 0 200 200"
          width={200}
          height={200}
          aria-label={`Doughnut chart: ${sliceLabel}`}
          role="img"
        >
          {/* Background ring */}
          <circle
            cx={CX}
            cy={CY}
            r={(R + INNER) / 2}
            fill="none"
            stroke="#e2e8f0"
            strokeWidth={R - INNER}
          />
          {/* Slice arc */}
          {clampedAngle > 0 && (
            <path
              d={describeArc(CX, CY, (R + INNER) / 2, 0, clampedAngle)}
              fill="none"
              stroke={sliceColor}
              strokeWidth={R - INNER}
              strokeLinecap="butt"
            />
          )}
          {/* Center label */}
          <text
            x={CX}
            y={CY - 6}
            textAnchor="middle"
            fontSize="20"
            fontWeight="700"
            fill="#0f172a"
          >
            {sliceLabel}
          </text>
          <text
            x={CX}
            y={CY + 14}
            textAnchor="middle"
            fontSize="11"
            fill="#64748b"
          >
            {wholeLabel}
          </text>
        </svg>
        {/* Legend */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: sliceColor }}
            />
            <span className="text-slate-700 dark:text-slate-300">{sliceLabel}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-slate-200" />
            <span className="text-slate-700 dark:text-slate-300">Remainder</span>
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400 text-center">
        The coloured arc represents the computed percentage.
      </p>
    </div>
  );
}
