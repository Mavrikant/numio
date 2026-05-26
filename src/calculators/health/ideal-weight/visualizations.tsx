import type { IdealWeightResult } from "./compute";

interface IdealWeightVizProps {
  readonly result: IdealWeightResult;
}

const FORMULAS: Array<{ key: keyof IdealWeightResult; label: string; color: string }> = [
  { key: "devine", label: "Devine", color: "#6366f1" },
  { key: "robinson", label: "Robinson", color: "#22c55e" },
  { key: "miller", label: "Miller", color: "#f97316" },
  { key: "hamwi", label: "Hamwi", color: "#0ea5e9" },
];

export default function IdealWeightViz({ result }: IdealWeightVizProps) {
  const values = FORMULAS.map((f) => result[f.key] as number);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 10) / 10;
  const range = max - min || 1;

  return (
    <div className="flex flex-col gap-3 p-4 w-full max-w-sm mx-auto">
      <div className="text-center mb-2">
        <div className="text-xs text-slate-500 uppercase tracking-wide">Average</div>
        <div className="text-3xl font-bold text-indigo-600">{avg} kg</div>
      </div>

      {FORMULAS.map((f) => {
        const val = result[f.key] as number;
        const pct = Math.round(((val - min) / range) * 60) + 20;
        return (
          <div key={f.key}>
            <div className="flex justify-between text-xs text-slate-500 mb-1">
              <span>{f.label}</span>
              <span className="font-semibold text-slate-700">{val} kg</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, backgroundColor: f.color }}
              />
            </div>
          </div>
        );
      })}

      <div className="text-xs text-slate-400 text-center mt-1">
        Range: {min}–{max} kg across 4 formulas
      </div>
    </div>
  );
}
