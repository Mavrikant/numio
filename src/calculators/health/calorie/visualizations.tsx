import type { CalorieResult } from "./compute";

interface CalorieVizProps {
  readonly result: CalorieResult;
}

export default function CalorieViz({ result }: CalorieVizProps) {
  const { tdee, target, deficit } = result;
  const isDeficit = deficit <= 0;
  const surplusDeficitColor = isDeficit ? "#ef4444" : "#22c55e";
  const surplusDeficitLabel = isDeficit ? "deficit" : "surplus";

  // Bar widths relative to TDEE
  const targetPct = Math.round((target / tdee) * 100);
  const absDeficit = Math.abs(deficit);

  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-sm mx-auto">
      {/* TDEE bar */}
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Maintenance (TDEE)</span>
          <span className="font-semibold text-slate-700">{tdee} kcal</span>
        </div>
        <div className="h-4 w-full rounded-full bg-blue-100 overflow-hidden">
          <div className="h-full rounded-full bg-blue-400" style={{ width: "100%" }} />
        </div>
      </div>

      {/* Target bar */}
      <div>
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Target</span>
          <span className="font-semibold text-slate-700">{target} kcal</span>
        </div>
        <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${Math.min(130, targetPct)}%`,
              backgroundColor: isDeficit ? "#f97316" : "#22c55e",
            }}
          />
        </div>
      </div>

      {/* Deficit / surplus chip */}
      <div
        className="flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-white text-sm font-semibold"
        style={{ backgroundColor: surplusDeficitColor }}
      >
        <span>{isDeficit ? "▼" : "▲"}</span>
        <span>
          {absDeficit} kcal / day {surplusDeficitLabel}
        </span>
      </div>

      <p className="text-xs text-slate-400 text-center">
        At this target, you can expect ~{(absDeficit / 7700).toFixed(2)} kg/week change.
      </p>
    </div>
  );
}
