import type { BodyFatResult } from "./compute";

interface BodyFatVizProps {
  readonly result: BodyFatResult;
}

const CATEGORY_COLORS: Record<string, string> = {
  essential: "#6366f1",
  athlete: "#22c55e",
  fitness: "#3b82f6",
  acceptable: "#eab308",
  obese: "#ef4444",
};

const CATEGORY_LABELS: Record<string, string> = {
  essential: "Essential Fat",
  athlete: "Athlete",
  fitness: "Fitness",
  acceptable: "Acceptable",
  obese: "Obese",
};

export default function BodyFatViz({ result }: BodyFatVizProps) {
  const color = CATEGORY_COLORS[result.category] ?? "#94a3b8";
  const label = CATEGORY_LABELS[result.category] ?? result.category;
  const pct = Math.min(70, Math.max(0, result.bodyFatPct));
  const barPct = (pct / 70) * 100;

  return (
    <div className="flex flex-col items-center gap-4 p-4 w-full max-w-sm mx-auto">
      {/* Main stat */}
      <div className="text-center">
        <div className="text-5xl font-bold" style={{ color }}>
          {result.bodyFatPct}%
        </div>
        <div className="text-sm text-slate-500 mt-1">Body Fat</div>
        <div
          className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      </div>

      {/* Fat vs lean bar */}
      <div className="w-full">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Fat: {result.fatMass} kg</span>
          <span>Lean: {result.leanMass} kg</span>
        </div>
        <div className="h-4 w-full rounded-full bg-slate-100 overflow-hidden flex">
          <div
            className="h-full"
            style={{ width: `${barPct}%`, backgroundColor: color }}
          />
          <div className="h-full flex-1 bg-blue-200" />
        </div>
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>0%</span>
          <span>Body fat scale</span>
          <span>70%</span>
        </div>
      </div>
    </div>
  );
}
