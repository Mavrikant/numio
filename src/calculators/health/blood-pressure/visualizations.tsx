import type { BloodPressureResult, BPCategory } from "./compute";

interface BPVisualizationProps {
  readonly result: BloodPressureResult;
  readonly systolic: number;
  readonly diastolic: number;
}

const CATEGORY_COLORS: Record<BPCategory, string> = {
  normal: "#22c55e",
  elevated: "#eab308",
  stage1: "#f97316",
  stage2: "#ef4444",
  crisis: "#7f1d1d",
};

const CATEGORY_LABELS: Record<BPCategory, string> = {
  normal: "Normal",
  elevated: "Elevated",
  stage1: "Stage 1",
  stage2: "Stage 2",
  crisis: "Crisis",
};

const CATEGORIES: BPCategory[] = ["normal", "elevated", "stage1", "stage2", "crisis"];

export function BPVisualization({ result, systolic, diastolic }: BPVisualizationProps) {
  const color = CATEGORY_COLORS[result.category];

  return (
    <svg
      viewBox="0 0 320 180"
      aria-label={`Blood pressure ${systolic}/${diastolic} — ${CATEGORY_LABELS[result.category]}`}
      role="img"
      style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}
    >
      {/* Reading display */}
      <rect x={95} y={10} width={130} height={70} rx={8} fill={color} opacity={0.15} />
      <rect x={95} y={10} width={130} height={70} rx={8} fill="none" stroke={color} strokeWidth={2} />

      <text x={160} y={42} textAnchor="middle" fontSize="32" fontWeight="700" fill={color}>
        {systolic}
      </text>
      <line x1={115} y1={55} x2={205} y2={55} stroke={color} strokeWidth={1.5} />
      <text x={160} y={73} textAnchor="middle" fontSize="22" fontWeight="600" fill={color}>
        {diastolic}
      </text>

      {/* mmHg label */}
      <text x={237} y={48} fontSize="9" fill="#64748b">mmHg</text>

      {/* Category bars */}
      {CATEGORIES.map((cat, i) => {
        const x = 20 + i * 58;
        const isActive = cat === result.category;
        return (
          <g key={cat}>
            <rect
              x={x}
              y={100}
              width={52}
              height={12}
              rx={3}
              fill={CATEGORY_COLORS[cat]}
              opacity={isActive ? 1 : 0.25}
            />
            <text
              x={x + 26}
              y={125}
              textAnchor="middle"
              fontSize="7"
              fill={isActive ? CATEGORY_COLORS[cat] : "#94a3b8"}
              fontWeight={isActive ? "700" : "400"}
            >
              {CATEGORY_LABELS[cat]}
            </text>
          </g>
        );
      })}

      {/* Category label */}
      <text x={160} y={155} textAnchor="middle" fontSize="12" fontWeight="600" fill={color}>
        {CATEGORY_LABELS[result.category]}
      </text>
      <text x={160} y={170} textAnchor="middle" fontSize="9" fill="#64748b">
        AHA/ACC 2017
      </text>
    </svg>
  );
}
