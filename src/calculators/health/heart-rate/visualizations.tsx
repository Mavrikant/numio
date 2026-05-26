import type { HeartRateResult } from "./compute";

interface HRZonesChartProps {
  readonly result: HeartRateResult;
}

const ZONE_COLORS = ["#3b82f6", "#22c55e", "#eab308", "#f97316", "#ef4444"];
const ZONE_NAMES = ["Zone 1\nRecovery", "Zone 2\nBase", "Zone 3\nAerobic", "Zone 4\nThreshold", "Zone 5\nMax"];

export function HRZonesChart({ result }: HRZonesChartProps) {
  const zones = [
    [result.zone1Min, result.zone1Max],
    [result.zone2Min, result.zone2Max],
    [result.zone3Min, result.zone3Max],
    [result.zone4Min, result.zone4Max],
    [result.zone5Min, result.zone5Max],
  ];

  const absoluteMin = result.zone1Min;
  const absoluteMax = result.maxHR;
  const range = absoluteMax - absoluteMin;

  return (
    <svg
      viewBox="0 0 320 190"
      aria-label="Heart rate training zones chart"
      role="img"
      style={{ width: "100%", maxWidth: 380, display: "block", margin: "0 auto" }}
    >
      {/* Max HR label */}
      <text x={160} y={16} textAnchor="middle" fontSize="11" fill="#0f172a" fontWeight="700">
        Max HR: {result.maxHR} bpm
      </text>

      {/* Zone bars */}
      {zones.map(([min, max], i) => {
        const barX = 20 + i * 58;
        const barWidth = 48;
        const maxBarHeight = 110;
        const zoneRange = max - min;
        const barHeight = (zoneRange / range) * maxBarHeight;
        const barY = 25 + (1 - (max - absoluteMin) / range) * maxBarHeight;

        return (
          <g key={i}>
            <rect
              x={barX}
              y={barY}
              width={barWidth}
              height={Math.max(barHeight, 8)}
              fill={ZONE_COLORS[i]}
              rx={3}
              opacity={0.85}
            />
            <text x={barX + barWidth / 2} y={barY + Math.max(barHeight, 8) / 2 - 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="700">
              {min}
            </text>
            <text x={barX + barWidth / 2} y={barY + Math.max(barHeight, 8) / 2 + 7} textAnchor="middle" fontSize="9" fill="white">
              {max}
            </text>
          </g>
        );
      })}

      {/* Zone labels */}
      {ZONE_NAMES.map((name, i) => {
        const x = 20 + i * 58 + 24;
        const lines = name.split("\n");
        return (
          <g key={i}>
            <text x={x} y={150} textAnchor="middle" fontSize="8" fill={ZONE_COLORS[i]} fontWeight="700">
              {lines[0]}
            </text>
            <text x={x} y={161} textAnchor="middle" fontSize="7" fill="#64748b">
              {lines[1]}
            </text>
          </g>
        );
      })}

      {/* HRR label */}
      <text x={160} y={180} textAnchor="middle" fontSize="9" fill="#64748b">
        HRR: {result.hrr} bpm
      </text>
    </svg>
  );
}
