/**
 * Waist-Hip Ratio Visualization
 * Semicircle gauge showing user's WHR vs WHO risk thresholds.
 * Pure SVG — no chart lib.
 */

import type { VizProps } from "@/components/calculator/CalcVizSlot";

type RiskCategory = "low" | "moderate" | "high";

// WHO thresholds
const THRESHOLDS = {
  male:   { low: 0.90, moderate: 1.00, displayMax: 1.20 },
  female: { low: 0.80, moderate: 0.85, displayMax: 1.05 },
};

const RISK_COLORS: Record<RiskCategory, string> = {
  low: "#22c55e",
  moderate: "#eab308",
  high: "#ef4444",
};

const RISK_LABELS: Record<RiskCategory, string> = {
  low: "Low Risk",
  moderate: "Moderate Risk",
  high: "High Risk",
};

const CX = 150;
const CY = 130;
const R = 100;
const STROKE_W = 28;

function whrToAngle(whr: number, displayMin: number, displayMax: number): number {
  const clamped = Math.max(displayMin, Math.min(displayMax, whr));
  const ratio = (clamped - displayMin) / (displayMax - displayMin);
  // 180° (left) → 0° (right)
  return 180 - ratio * 180;
}

function polarToXY(angle: number, r: number): { x: number; y: number } {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

function arc(r: number, startAngle: number, endAngle: number): string {
  const start = polarToXY(startAngle, r);
  const end = polarToXY(endAngle, r);
  const large = Math.abs(endAngle - startAngle) > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} ${endAngle > startAngle ? 0 : 1} ${end.x} ${end.y}`;
}

export default function WhrViz({ result, inputs }: VizProps) {
  const whr = typeof result.whr === "number" ? result.whr : null;
  const riskCategory = typeof result.riskCategory === "string" ? (result.riskCategory as RiskCategory) : null;
  const gender = typeof inputs.gender === "string" ? (inputs.gender as "male" | "female") : "male";

  if (whr === null || !riskCategory) return null;

  const thresholds = THRESHOLDS[gender];
  const displayMin = gender === "male" ? 0.60 : 0.55;
  const displayMax = thresholds.displayMax;

  // Segment angles (left=high ratio, right=low ratio for clarity — reversed like BMI gauge)
  // Actually: left = displayMin, right = displayMax (increasing L→R)
  const lowEnd = whrToAngle(thresholds.low, displayMin, displayMax);      // boundary low/moderate
  const modEnd = whrToAngle(thresholds.moderate, displayMin, displayMax);  // boundary moderate/high
  const leftEdge = 180;
  const rightEdge = 0;

  const segments = [
    { start: rightEdge, end: modEnd, color: RISK_COLORS.high },    // high risk (right side)
    { start: modEnd, end: lowEnd, color: RISK_COLORS.moderate },    // moderate
    { start: lowEnd, end: leftEdge, color: RISK_COLORS.low },       // low (left side)
  ];

  const markerAngle = whrToAngle(whr, displayMin, displayMax);
  const markerRad = ((markerAngle - 90) * Math.PI) / 180;
  const tipX = CX + (R - 4) * Math.cos(markerRad);
  const tipY = CY + (R - 4) * Math.sin(markerRad);
  const baseX = CX + 12 * Math.cos(markerRad + Math.PI);
  const baseY = CY + 12 * Math.sin(markerRad + Math.PI);

  const markerColor = RISK_COLORS[riskCategory];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-1 text-base font-semibold text-slate-900 dark:text-slate-100">
        Waist-Hip Ratio Gauge
      </h2>
      <p className="mb-2 text-sm font-medium" style={{ color: markerColor }}>
        WHR {whr.toFixed(2)} — {RISK_LABELS[riskCategory]} ({gender})
      </p>

      <svg
        viewBox="0 0 300 145"
        role="img"
        aria-label={`WHR gauge: ${whr} — ${RISK_LABELS[riskCategory]}`}
        style={{ width: "100%", maxWidth: 340, display: "block", margin: "0 auto" }}
      >
        {/* Coloured arc segments */}
        {segments.map((seg, i) => (
          <path
            key={i}
            d={arc(R, seg.end, seg.start)}
            fill="none"
            stroke={seg.color}
            strokeWidth={STROKE_W}
            strokeLinecap="butt"
            opacity={0.85}
          />
        ))}

        {/* Inner mask */}
        <circle cx={CX} cy={CY} r={R - STROKE_W - 2} fill="white" />

        {/* Needle */}
        <line x1={baseX} y1={baseY} x2={tipX} y2={tipY} stroke="#1e293b" strokeWidth={3} strokeLinecap="round" />
        <circle cx={CX} cy={CY} r={6} fill="#1e293b" />

        {/* WHR value */}
        <text x={CX} y={CY - 16} textAnchor="middle" fontSize="20" fontWeight="700" fill="#0f172a">
          {whr.toFixed(2)}
        </text>
        <text x={CX} y={CY - 2} textAnchor="middle" fontSize="10" fill="#475569">
          {RISK_LABELS[riskCategory]}
        </text>

        {/* Scale labels */}
        <text x={14} y={135} fontSize="8" fill="#94a3b8">{displayMin}</text>
        <text x={272} y={135} fontSize="8" fill="#94a3b8">{displayMax}</text>

        {/* Threshold labels */}
        {(() => {
          const lowX = polarToXY(lowEnd, R + 16);
          const modX = polarToXY(modEnd, R + 16);
          return (
            <>
              <text x={lowX.x} y={lowX.y} textAnchor="middle" fontSize="7.5" fill="#64748b">
                {thresholds.low}
              </text>
              <text x={modX.x} y={modX.y} textAnchor="middle" fontSize="7.5" fill="#64748b">
                {thresholds.moderate}
              </text>
            </>
          );
        })()}
      </svg>

      {/* Risk legend */}
      <div className="mt-2 flex justify-center gap-4">
        {(["low", "moderate", "high"] as RiskCategory[]).map((r) => (
          <span key={r} className="flex items-center gap-1 text-xs" style={{ color: RISK_COLORS[r] }}>
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ backgroundColor: RISK_COLORS[r] }} />
            {RISK_LABELS[r]}
          </span>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        WHO risk thresholds: {gender === "male"
          ? "≤0.90 low, 0.91–0.99 moderate, ≥1.00 high"
          : "≤0.80 low, 0.81–0.85 moderate, ≥0.86 high"}.
        A higher WHR indicates greater central adiposity risk.
      </p>
    </div>
  );
}
