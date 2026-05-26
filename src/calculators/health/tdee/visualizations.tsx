import type { TdeeResult } from "./compute";

interface TdeeMacroChartProps {
  readonly result: TdeeResult;
}

const COLORS = {
  protein: "#3b82f6",
  carbs: "#22c55e",
  fat: "#f97316",
  bmr: "#8b5cf6",
  tdee: "#ef4444",
};

export function TdeeMacroChart({ result }: TdeeMacroChartProps) {
  const proteinKcal = result.proteinTarget * 4;
  const fatKcal = result.fatTarget * 9;
  const carbKcal = result.carbTarget * 4;
  const totalMacroKcal = proteinKcal + fatKcal + carbKcal;

  // Pie chart segments
  const proteinPct = totalMacroKcal > 0 ? proteinKcal / totalMacroKcal : 0;
  const fatPct = totalMacroKcal > 0 ? fatKcal / totalMacroKcal : 0;
  const carbPct = totalMacroKcal > 0 ? carbKcal / totalMacroKcal : 0;

  const cx = 80, cy = 80, r = 60;

  function describeArc(startPct: number, endPct: number) {
    const startAngle = startPct * 2 * Math.PI - Math.PI / 2;
    const endAngle = endPct * 2 * Math.PI - Math.PI / 2;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = (endPct - startPct) > 0.5 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }

  let cumPct = 0;
  const segments = [
    { color: COLORS.protein, pct: proteinPct, label: "Protein" },
    { color: COLORS.fat, pct: fatPct, label: "Fat" },
    { color: COLORS.carbs, pct: carbPct, label: "Carbs" },
  ];

  return (
    <svg
      viewBox="0 0 320 185"
      aria-label="TDEE and macronutrient breakdown chart"
      role="img"
      style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}
    >
      {/* Pie chart */}
      {segments.map((seg) => {
        const start = cumPct;
        cumPct += seg.pct;
        if (seg.pct < 0.005) return null;
        return (
          <path
            key={seg.label}
            d={describeArc(start, cumPct)}
            fill={seg.color}
            opacity={0.85}
          />
        );
      })}

      {/* Legend */}
      {segments.map((seg, i) => (
        <g key={seg.label}>
          <rect x={175} y={20 + i * 30} width={14} height={14} fill={seg.color} rx={3} />
          <text x={194} y={31 + i * 30} fontSize="10" fill="#0f172a" fontWeight="600">
            {seg.label}
          </text>
          <text x={194} y={44 + i * 30} fontSize="9" fill="#64748b">
            {Math.round(seg.pct * 100)}% of calories
          </text>
        </g>
      ))}

      {/* BMR vs TDEE bar */}
      <text x={175} y={125} fontSize="10" fill="#0f172a" fontWeight="700">BMR</text>
      <rect x={205} y={113} width={100} height={12} rx={3} fill="#e2e8f0" />
      <rect x={205} y={113} width={Math.min(100, (result.bmr / result.tdee) * 100)} height={12} rx={3} fill={COLORS.bmr} />
      <text x={310} y={123} fontSize="9" fill="#64748b">{result.bmr}</text>

      <text x={175} y={147} fontSize="10" fill="#0f172a" fontWeight="700">TDEE</text>
      <rect x={205} y={135} width={100} height={12} rx={3} fill={COLORS.tdee} opacity={0.85} />
      <text x={310} y={145} fontSize="9" fill="#64748b">{result.tdee}</text>

      <text x={160} y={175} textAnchor="middle" fontSize="9" fill="#64748b">
        kcal/day
      </text>
    </svg>
  );
}
