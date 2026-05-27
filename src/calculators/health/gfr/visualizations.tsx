/**
 * GFR / CKD Stage Visualization
 * Horizontal stacked bar showing CKD stages with user's eGFR marker.
 * Uses pure SVG for precise positioning — no chart lib needed.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";

type CkdStage = "stage1" | "stage2" | "stage3a" | "stage3b" | "stage4" | "stage5";

const STAGES: { key: CkdStage; label: string; shortLabel: string; min: number; max: number; color: string }[] = [
  { key: "stage5", label: "Stage 5 — Kidney Failure", shortLabel: "G5", min: 0, max: 15, color: "#7f1d1d" },
  { key: "stage4", label: "Stage 4 — Severely Decreased", shortLabel: "G4", min: 15, max: 30, color: "#ef4444" },
  { key: "stage3b", label: "Stage 3b — Mod–Severely Decreased", shortLabel: "G3b", min: 30, max: 45, color: "#f97316" },
  { key: "stage3a", label: "Stage 3a — Mildly–Moderately Decreased", shortLabel: "G3a", min: 45, max: 60, color: "#eab308" },
  { key: "stage2", label: "Stage 2 — Mildly Decreased", shortLabel: "G2", min: 60, max: 90, color: "#84cc16" },
  { key: "stage1", label: "Stage 1 — Normal or High", shortLabel: "G1", min: 90, max: 120, color: "#22c55e" },
];

const SCALE_MAX = 120;
const SVG_W = 500;
const SVG_H = 180;
const BAR_Y = 60;
const BAR_H = 32;
const LEFT = 40;
const RIGHT = SVG_W - 20;
const BAR_W = RIGHT - LEFT;

function gfrToX(gfr: number): number {
  const clamped = Math.max(0, Math.min(SCALE_MAX, gfr));
  return LEFT + (clamped / SCALE_MAX) * BAR_W;
}

export default function GfrViz({ result }: VizProps) {
  const eGfr = typeof result.eGfr === "number" ? result.eGfr : null;
  const stage = typeof result.stage === "string" ? (result.stage as CkdStage) : null;
  const stageLabel = typeof result.stageLabel === "string" ? result.stageLabel : "";

  if (eGfr === null || !stage) return null;

  const markerX = gfrToX(eGfr);
  const activeStage = STAGES.find((s) => s.key === stage);
  const markerColor = activeStage?.color ?? "#3b82f6";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        CKD Stage — eGFR Spectrum
      </h2>
      <p className="mb-3 text-sm font-medium" style={{ color: markerColor }}>
        eGFR {eGfr} mL/min/1.73m² · {stageLabel}
      </p>

      <svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        role="img"
        aria-label={`CKD stage chart showing eGFR ${eGfr}`}
        style={{ width: "100%", display: "block" }}
      >
        {/* Stage bars */}
        {STAGES.map((s) => {
          const x = LEFT + (s.min / SCALE_MAX) * BAR_W;
          const w = ((s.max - s.min) / SCALE_MAX) * BAR_W;
          const isActive = s.key === stage;
          return (
            <g key={s.key}>
              <rect
                x={x}
                y={BAR_Y}
                width={w}
                height={BAR_H}
                fill={s.color}
                opacity={isActive ? 1 : 0.25}
                rx={2}
              />
              <text
                x={x + w / 2}
                y={BAR_Y + BAR_H / 2 + 1}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontWeight={isActive ? "700" : "400"}
                fill={isActive ? "#ffffff" : "#64748b"}
              >
                {s.shortLabel}
              </text>
            </g>
          );
        })}

        {/* Scale labels */}
        {[0, 15, 30, 45, 60, 90, 120].map((v) => (
          <text
            key={v}
            x={gfrToX(v)}
            y={BAR_Y + BAR_H + 14}
            textAnchor="middle"
            fontSize="9"
            fill="#94a3b8"
          >
            {v}
          </text>
        ))}

        {/* User marker */}
        <line
          x1={markerX}
          y1={BAR_Y - 14}
          x2={markerX}
          y2={BAR_Y + BAR_H + 4}
          stroke={markerColor}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
        {/* Marker triangle */}
        <polygon
          points={`${markerX - 6},${BAR_Y - 14} ${markerX + 6},${BAR_Y - 14} ${markerX},${BAR_Y - 4}`}
          fill={markerColor}
        />
        {/* eGFR value label */}
        <text
          x={markerX}
          y={BAR_Y - 20}
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill={markerColor}
        >
          {eGfr}
        </text>

        {/* X-axis label */}
        <text x={LEFT + BAR_W / 2} y={SVG_H - 4} textAnchor="middle" fontSize="9" fill="#94a3b8">
          eGFR (mL/min/1.73m²)
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {STAGES.slice().reverse().map((s) => (
          <span key={s.key} className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
            {s.shortLabel}
          </span>
        ))}
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        KDIGO 2012 CKD classification. The marker shows your estimated GFR from the CKD-EPI 2021
        creatinine equation. Normal eGFR is ≥90 mL/min/1.73m².
      </p>
    </div>
  );
}
