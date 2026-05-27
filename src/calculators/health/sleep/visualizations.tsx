/**
 * Sleep Visualization
 * Stacked horizontal bar of sleep stages across ~5 cycles (NREM 1/2/3 + REM).
 * Uses pure SVG — no chart lib needed, keeps bundle minimal.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";

// Each 90-min cycle has approximate stage proportions:
// NREM1: ~5 min, NREM2: ~45 min, NREM3: ~15 min (less in later cycles), REM: ~25 min
// Cycles 1–3 have more deep sleep; 4–5 have more REM.
const CYCLE_STAGES: { label: string; color: string; pct: number }[][] = [
  // Cycle 1
  [
    { label: "NREM 1", color: "#93c5fd", pct: 0.05 },
    { label: "NREM 2", color: "#3b82f6", pct: 0.50 },
    { label: "NREM 3", color: "#1e40af", pct: 0.25 },
    { label: "REM",    color: "#8b5cf6", pct: 0.20 },
  ],
  // Cycle 2
  [
    { label: "NREM 1", color: "#93c5fd", pct: 0.05 },
    { label: "NREM 2", color: "#3b82f6", pct: 0.50 },
    { label: "NREM 3", color: "#1e40af", pct: 0.20 },
    { label: "REM",    color: "#8b5cf6", pct: 0.25 },
  ],
  // Cycle 3
  [
    { label: "NREM 1", color: "#93c5fd", pct: 0.05 },
    { label: "NREM 2", color: "#3b82f6", pct: 0.50 },
    { label: "NREM 3", color: "#1e40af", pct: 0.15 },
    { label: "REM",    color: "#8b5cf6", pct: 0.30 },
  ],
  // Cycle 4
  [
    { label: "NREM 1", color: "#93c5fd", pct: 0.05 },
    { label: "NREM 2", color: "#3b82f6", pct: 0.55 },
    { label: "NREM 3", color: "#1e40af", pct: 0.05 },
    { label: "REM",    color: "#8b5cf6", pct: 0.35 },
  ],
  // Cycle 5
  [
    { label: "NREM 1", color: "#93c5fd", pct: 0.05 },
    { label: "NREM 2", color: "#3b82f6", pct: 0.55 },
    { label: "NREM 3", color: "#1e40af", pct: 0.00 },
    { label: "REM",    color: "#8b5cf6", pct: 0.40 },
  ],
];

const SVG_W = 500;
const ROW_H = 28;
const ROW_GAP = 6;
const LEFT = 54;
const RIGHT = SVG_W - 10;
const BAR_W = RIGHT - LEFT;

const STAGE_COLORS = [
  { label: "NREM 1 (Light)", color: "#93c5fd" },
  { label: "NREM 2 (Core)", color: "#3b82f6" },
  { label: "NREM 3 (Deep)", color: "#1e40af" },
  { label: "REM", color: "#8b5cf6" },
];

export default function SleepViz({ result, inputs }: VizProps) {
  const cycleCount = typeof inputs.cycleCount === "number" ? inputs.cycleCount : null;
  const sleepDurationHours = typeof result.sleepDurationHours === "number" ? result.sleepDurationHours : null;

  if (!cycleCount || sleepDurationHours === null) return null;

  // Show as many cycles as selected (max 5 from our data, can be 4–7 in result)
  const visibleCycles = Math.min(cycleCount, CYCLE_STAGES.length);
  const svgHeight = visibleCycles * (ROW_H + ROW_GAP) + 60;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Sleep Stage Architecture
      </h2>
      <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
        {cycleCount} cycles · {sleepDurationHours}h total (90 min per cycle)
      </p>

      <svg
        viewBox={`0 0 ${SVG_W} ${svgHeight}`}
        role="img"
        aria-label="Sleep stage chart"
        style={{ width: "100%", display: "block" }}
      >
        {/* Time axis labels (0, 1h, 2h, …) */}
        {Array.from({ length: visibleCycles + 1 }, (_, i) => {
          const x = LEFT + (i / visibleCycles) * BAR_W;
          const hrs = (i * 90) / 60;
          return (
            <text key={i} x={x} y={svgHeight - 8} textAnchor="middle" fontSize="9" fill="#94a3b8">
              {hrs % 1 === 0 ? `${hrs}h` : `${hrs.toFixed(1)}h`}
            </text>
          );
        })}

        {/* Cycle rows */}
        {CYCLE_STAGES.slice(0, visibleCycles).map((stages, ci) => {
          const y = ci * (ROW_H + ROW_GAP) + 2;
          let offsetX = LEFT;
          return (
            <g key={ci}>
              <text x={LEFT - 4} y={y + ROW_H / 2 + 4} textAnchor="end" fontSize="9" fill="#64748b">
                C{ci + 1}
              </text>
              {stages.map((stage) => {
                const w = stage.pct * BAR_W * (1 / visibleCycles) * visibleCycles;
                // Each cycle is 1/visibleCycles of total bar width
                const stageW = stage.pct * (BAR_W / visibleCycles);
                const rect = (
                  <rect
                    key={stage.label}
                    x={offsetX}
                    y={y}
                    width={stageW}
                    height={ROW_H}
                    fill={stage.color}
                    opacity={stage.pct === 0 ? 0 : 1}
                    rx={ci === 0 && stages.indexOf(stage) === 0 ? 3 : 0}
                  />
                );
                void w;
                offsetX += stageW;
                return rect;
              })}
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {STAGE_COLORS.map((s) => (
          <span key={s.label} className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: s.color }} />
            {s.label}
          </span>
        ))}
      </div>

      <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
        Typical sleep architecture: each 90-min cycle contains NREM stages (light, core, deep) and
        REM. Deep sleep (NREM 3) dominates early cycles; REM lengthens toward morning.
      </p>
    </div>
  );
}
