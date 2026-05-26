/**
 * BMI Gauge visualization — pure SVG, no external chart libraries.
 *
 * The gauge is a half-circle (semicircle) split into 5 coloured segments
 * representing WHO BMI categories. A pointer needle rotates to the user's BMI.
 *
 * Bundle notes: no ECharts, no React animation libraries. Calculations happen
 * in SVG coordinate space so this island stays tiny.
 */

import type { BmiResult } from "./compute";

interface BmiGaugeProps {
  readonly result: BmiResult;
}

// Gauge colour palette aligned with WHO risk levels
const SEGMENT_COLORS = {
  underweight: "#3b82f6",  // blue
  normal: "#22c55e",       // green
  overweight: "#eab308",   // yellow
  obese: "#f97316",        // orange
  severelyObese: "#ef4444", // red
} as const;

// BMI scale clamped to a displayable range
const GAUGE_MIN_BMI = 10;
const GAUGE_MAX_BMI = 50;

// Segment boundaries on the display scale (clamped at GAUGE_MIN/MAX)
const SEGMENTS: Array<{ label: string; min: number; max: number; color: string }> = [
  { label: "Underweight", min: 10, max: 18.5, color: SEGMENT_COLORS.underweight },
  { label: "Normal",      min: 18.5, max: 25, color: SEGMENT_COLORS.normal },
  { label: "Overweight",  min: 25, max: 30,   color: SEGMENT_COLORS.overweight },
  { label: "Obese",       min: 30, max: 40,   color: SEGMENT_COLORS.obese },
  { label: "Severely Obese", min: 40, max: 50, color: SEGMENT_COLORS.severelyObese },
];

// SVG viewBox constants
const CX = 150;  // centre x
const CY = 150;  // centre y — placed at bottom of semicircle
const R = 120;   // outer radius
const STROKE_WIDTH = 28;
const INNER_R = R - STROKE_WIDTH;

/** Map a BMI value to an angle on the half-circle (180° → 0°, left → right). */
function bmiToAngle(bmi: number): number {
  const clamped = Math.max(GAUGE_MIN_BMI, Math.min(GAUGE_MAX_BMI, bmi));
  const ratio = (clamped - GAUGE_MIN_BMI) / (GAUGE_MAX_BMI - GAUGE_MIN_BMI);
  // 180° (left) to 0° (right) — we go counter-clockwise from left
  return 180 - ratio * 180;
}

/** Convert polar coords (angle in degrees) to SVG cartesian. */
function polarToCartesian(
  cx: number,
  cy: number,
  r: number,
  angleDeg: number,
): { x: number; y: number } {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

/** Build an SVG arc path for a segment spanning startAngle → endAngle (degrees). */
function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
): string {
  const start = polarToCartesian(cx, cy, r, startAngle);
  const end = polarToCartesian(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? "0" : "1";
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

export function BmiGauge({ result }: BmiGaugeProps) {
  const pointerAngle = bmiToAngle(result.bmi);
  const pointerRad = ((pointerAngle - 90) * Math.PI) / 180;

  // Needle tip and base
  const tipX = CX + (R - 4) * Math.cos(pointerRad);
  const tipY = CY + (R - 4) * Math.sin(pointerRad);
  const baseX = CX + 14 * Math.cos(pointerRad + Math.PI);
  const baseY = CY + 14 * Math.sin(pointerRad + Math.PI);

  return (
    <svg
      viewBox="0 0 300 165"
      aria-label={`BMI gauge showing ${result.bmi} — ${result.category}`}
      role="img"
      style={{ width: "100%", maxWidth: 340, display: "block", margin: "0 auto" }}
    >
      {/* Segments */}
      {SEGMENTS.map((seg) => {
        const startAngle = bmiToAngle(seg.max); // reversed because left=high, right=low would be confusing
        const endAngle = bmiToAngle(seg.min);
        // We draw the semicircle left-to-right (increasing BMI left→right)
        const sA = 180 - ((seg.min - GAUGE_MIN_BMI) / (GAUGE_MAX_BMI - GAUGE_MIN_BMI)) * 180;
        const eA = 180 - ((seg.max - GAUGE_MIN_BMI) / (GAUGE_MAX_BMI - GAUGE_MIN_BMI)) * 180;
        void startAngle; void endAngle; // computed above but we use sA/eA

        return (
          <path
            key={seg.label}
            d={describeArc(CX, CY, R, eA, sA)}
            fill="none"
            stroke={seg.color}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap="butt"
          />
        );
      })}

      {/* Inner circle background — covers segment inner edges */}
      <circle cx={CX} cy={CY} r={INNER_R - 2} fill="white" />

      {/* Needle */}
      <line
        x1={baseX}
        y1={baseY}
        x2={tipX}
        y2={tipY}
        stroke="#1e293b"
        strokeWidth={3}
        strokeLinecap="round"
      />
      <circle cx={CX} cy={CY} r={7} fill="#1e293b" />

      {/* BMI value label */}
      <text
        x={CX}
        y={CY - 18}
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="#0f172a"
      >
        {result.bmi}
      </text>

      {/* Scale labels */}
      <text x={12} y={158} fontSize="9" fill="#64748b">10</text>
      <text x={136} y={36} fontSize="9" fill="#64748b">30</text>
      <text x={270} y={158} fontSize="9" fill="#64748b">50</text>

      {/* Category label */}
      <text x={CX} y={CY + 10} textAnchor="middle" fontSize="11" fill="#475569">
        {result.category}
      </text>
    </svg>
  );
}
