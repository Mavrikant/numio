import type { ConcreteResult } from "./compute";

interface ConcreteVizProps {
  readonly result: ConcreteResult;
}

export default function ConcreteViz({ result }: ConcreteVizProps) {
  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {[
        { label: "Volume", value: result.volumeM3.toFixed(3), unit: "m³" },
        { label: "Volume", value: result.volumeYd3.toFixed(3), unit: "yd³" },
        { label: "40 kg Bags", value: String(result.bags40kg), unit: "bags" },
        { label: "60 lb Bags", value: String(result.bags60lb), unit: "bags" },
      ].map((item, idx) => (
        <div key={idx} className="rounded-lg bg-slate-100 p-3 text-center">
          <div className="text-lg font-bold text-brand-600">
            {item.value} <span className="text-sm">{item.unit}</span>
          </div>
          <div className="text-xs text-slate-500">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
