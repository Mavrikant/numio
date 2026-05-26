import type { ResistorColorResult } from "./compute";

interface ResistorColorVizProps {
  readonly result: ResistorColorResult;
}

const COLOR_HEX: Record<string, string> = {
  Black: "#1a1a1a",
  Brown: "#8B4513",
  Red: "#dc2626",
  Orange: "#f97316",
  Yellow: "#eab308",
  Green: "#22c55e",
  Blue: "#3b82f6",
  Violet: "#8b5cf6",
  Gray: "#6b7280",
  White: "#f9fafb",
  Gold: "#d4af37",
  Silver: "#a8a9ad",
};

function ColorBand({ color, label }: { color: string; label: string }) {
  const hex = COLOR_HEX[color] ?? "#ccc";
  const isLight = ["White", "Yellow"].includes(color);
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className="w-8 h-20 rounded-sm border border-slate-300 shadow-inner"
        style={{ backgroundColor: hex }}
        aria-label={color}
      />
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}

export default function ResistorColorViz({ result }: ResistorColorVizProps) {
  const bands = [
    { color: result.colorName1, label: "B1" },
    { color: result.colorName2, label: "B2" },
    ...(result.colorName3 ? [{ color: result.colorName3, label: "B3" }] : []),
    { color: result.multiplierColorName, label: "×" },
    { color: result.toleranceColorName, label: "±" },
  ];

  const formatResistance = (r: number) => {
    if (r >= 1e9) return `${(r / 1e9).toFixed(2)} GΩ`;
    if (r >= 1e6) return `${(r / 1e6).toFixed(2)} MΩ`;
    if (r >= 1e3) return `${(r / 1e3).toFixed(2)} kΩ`;
    return `${r.toFixed(2)} Ω`;
  };

  return (
    <div className="p-4 space-y-4">
      {/* Resistor body */}
      <div className="flex items-center justify-center gap-1 bg-amber-100 rounded-xl p-4 border border-amber-200">
        <div className="w-8 h-3 bg-slate-400 rounded-l" />
        <div className="h-12 bg-amber-300 rounded px-2 flex items-center gap-1 border border-amber-400">
          {bands.map((b, i) => (
            <div
              key={i}
              className="w-4 h-full rounded-sm"
              style={{ backgroundColor: COLOR_HEX[b.color] ?? "#ccc" }}
              title={`${b.label}: ${b.color}`}
            />
          ))}
        </div>
        <div className="w-8 h-3 bg-slate-400 rounded-r" />
      </div>

      {/* Resistance display */}
      <div className="text-center">
        <div className="text-2xl font-bold text-brand-600">{formatResistance(result.resistance)}</div>
        <div className="text-sm text-slate-500">±{result.tolerancePct}% tolerance</div>
      </div>

      {/* Range */}
      <div className="grid grid-cols-2 gap-2 text-xs text-center">
        <div className="bg-slate-100 rounded p-2">
          <div className="font-semibold">{formatResistance(result.minValue)}</div>
          <div className="text-slate-400">Min</div>
        </div>
        <div className="bg-slate-100 rounded p-2">
          <div className="font-semibold">{formatResistance(result.maxValue)}</div>
          <div className="text-slate-400">Max</div>
        </div>
      </div>
    </div>
  );
}
