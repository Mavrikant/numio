import type { BmrResult } from "./compute";

interface BmrVizProps {
  readonly result: BmrResult;
}

// BMR reference ranges (approximate adult averages)
const RANGES = [
  { label: "Low", max: 1200, color: "#3b82f6" },
  { label: "Average", max: 1800, color: "#22c55e" },
  { label: "High", max: 2400, color: "#f97316" },
  { label: "Very High", max: 3200, color: "#ef4444" },
];

function getColor(bmr: number): string {
  for (const r of RANGES) {
    if (bmr <= r.max) return r.color;
  }
  return "#7c3aed";
}

function getLabel(bmr: number): string {
  for (const r of RANGES) {
    if (bmr <= r.max) return r.label;
  }
  return "Very High";
}

export default function BmrViz({ result }: BmrVizProps) {
  const color = getColor(result.bmr);
  const label = getLabel(result.bmr);
  const bmrRounded = Math.round(result.bmr);

  // Bar fill: clamp 0-100% on a 800-3200 kcal scale
  const pct = Math.min(100, Math.max(0, ((bmrRounded - 800) / 2400) * 100));

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div className="text-center">
        <div className="text-5xl font-bold" style={{ color }}>
          {bmrRounded}
        </div>
        <div className="text-sm text-slate-500 mt-1">kcal / day</div>
        <div
          className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-xs">
        <div className="flex justify-between text-xs text-slate-400 mb-1">
          <span>800</span>
          <span>3200 kcal</span>
        </div>
        <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, backgroundColor: color }}
          />
        </div>
      </div>

      <p className="text-xs text-slate-400 text-center max-w-xs">
        Calories your body burns at complete rest (no activity included).
      </p>
    </div>
  );
}
