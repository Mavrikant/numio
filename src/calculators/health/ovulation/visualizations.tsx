import type { OvulationResult } from "./compute";

interface OvulationCalendarProps {
  readonly result: OvulationResult;
}

const COLORS = {
  fertile: "#86efac",
  ovulation: "#22c55e",
  lhSurge: "#fbbf24",
  nextPeriod: "#f87171",
  normal: "#f1f5f9",
  text: "#0f172a",
  muted: "#64748b",
} as const;

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

export function OvulationCalendar({ result }: OvulationCalendarProps) {
  const events = [
    { label: "Fertile Window Start", date: result.fertileStart, color: COLORS.fertile },
    { label: "LH Surge", date: result.lhSurgeDate, color: COLORS.lhSurge },
    { label: "Ovulation", date: result.ovulationDate, color: COLORS.ovulation },
    { label: "Fertile Window End", date: result.fertileEnd, color: COLORS.fertile },
    { label: "Next Period", date: result.nextPeriod, color: COLORS.nextPeriod },
  ];

  return (
    <svg
      viewBox="0 0 320 220"
      aria-label="Ovulation cycle timeline"
      role="img"
      style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}
    >
      {/* Timeline line */}
      <line x1={30} y1={110} x2={290} y2={110} stroke="#e2e8f0" strokeWidth={4} strokeLinecap="round" />

      {/* Events */}
      {events.map((ev, i) => {
        const x = 30 + (i / (events.length - 1)) * 260;
        const isTop = i % 2 === 0;
        const labelY = isTop ? 75 : 155;
        const lineY1 = isTop ? 82 : 118;
        const lineY2 = isTop ? 105 : 142;

        return (
          <g key={ev.label}>
            <line
              x1={x} y1={lineY1}
              x2={x} y2={lineY2}
              stroke={ev.color}
              strokeWidth={1.5}
              strokeDasharray="3 2"
            />
            <circle cx={x} cy={110} r={8} fill={ev.color} />
            <text
              x={x}
              y={labelY}
              textAnchor="middle"
              fontSize="8"
              fill={COLORS.muted}
              fontWeight="600"
            >
              {ev.label}
            </text>
            <text
              x={x}
              y={labelY + 11}
              textAnchor="middle"
              fontSize="8"
              fill={COLORS.text}
            >
              {formatDate(ev.date)}
            </text>
          </g>
        );
      })}

      {/* Legend */}
      <rect x={10} y={185} width={10} height={10} fill={COLORS.fertile} rx={2} />
      <text x={24} y={194} fontSize="8" fill={COLORS.muted}>Fertile</text>
      <rect x={70} y={185} width={10} height={10} fill={COLORS.lhSurge} rx={2} />
      <text x={84} y={194} fontSize="8" fill={COLORS.muted}>LH Surge</text>
      <rect x={140} y={185} width={10} height={10} fill={COLORS.ovulation} rx={2} />
      <text x={154} y={194} fontSize="8" fill={COLORS.muted}>Ovulation</text>
      <rect x={215} y={185} width={10} height={10} fill={COLORS.nextPeriod} rx={2} />
      <text x={229} y={194} fontSize="8" fill={COLORS.muted}>Next Period</text>
    </svg>
  );
}
