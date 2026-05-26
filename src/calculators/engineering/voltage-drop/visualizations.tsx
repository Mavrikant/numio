import type { VoltageDropResult } from "./compute";

interface VoltageDropVizProps {
  readonly result: VoltageDropResult;
}

const STATUS_COLORS: Record<string, string> = {
  ok: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  critical: "bg-red-100 text-red-800",
};

export default function VoltageDropViz({ result }: VoltageDropVizProps) {
  const barWidth = Math.min(100, result.voltageDropPct * 20); // scale for visual
  const barColor = result.recommendation === "ok" ? "#22c55e" : result.recommendation === "warning" ? "#eab308" : "#ef4444";

  return (
    <div className="p-4 space-y-4">
      {/* Status badge */}
      <div className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${STATUS_COLORS[result.recommendation] ?? ""}`}>
        {result.recommendation.toUpperCase()} — {result.voltageDropPct.toFixed(2)}% drop
      </div>

      {/* Visual bar */}
      <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
        <div
          className="h-4 rounded-full transition-all"
          style={{ width: `${barWidth}%`, backgroundColor: barColor }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500">
        <span>0%</span>
        <span>3% NEC limit</span>
        <span>5%</span>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Drop", value: result.voltageDrop.toFixed(2), unit: "V" },
          { label: "Receiving", value: result.receivingVoltage.toFixed(2), unit: "V" },
          { label: "Area", value: result.areaMm2.toFixed(2), unit: "mm²" },
          { label: "Drop %", value: result.voltageDropPct.toFixed(2), unit: "%" },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-slate-100 p-3 text-center">
            <div className="text-lg font-bold text-brand-600">{item.value} {item.unit}</div>
            <div className="text-xs text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
