import type { OhmsLawResult } from "./compute";

interface OhmsLawVizProps {
  readonly result: OhmsLawResult;
}

export default function OhmsLawViz({ result }: OhmsLawVizProps) {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {[
        { label: "Voltage", value: result.voltage?.toFixed(3), unit: "V" },
        { label: "Current", value: result.current?.toFixed(4), unit: "A" },
        { label: "Resistance", value: result.resistance?.toFixed(3), unit: "Ω" },
        { label: "Power", value: result.power?.toFixed(3), unit: "W" },
      ].map((item) => (
        <div key={item.label} className="rounded-lg bg-slate-100 p-3 text-center">
          <div className="text-lg font-bold text-brand-600">
            {item.value} {item.unit}
          </div>
          <div className="text-xs text-slate-500">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
