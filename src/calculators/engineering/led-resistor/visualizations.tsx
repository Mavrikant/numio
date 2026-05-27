/**
 * LED Resistor visualization — horizontal stacked bar showing:
 *  - Voltage drop across LEDs (Vf × count)
 *  - Voltage drop across resistor (Vsupply − Vf_total)
 *  - Power dissipated by resistor
 */
import type { VizProps } from "@/components/calculator/CalcVizSlot";

export default function LedResistorViz({ inputs, result }: VizProps) {
  const supplyV = inputs.supplyVoltage as number;
  const forwardV = inputs.forwardVoltage as number;
  const ledCount = inputs.ledCount as number;
  const powerW = result.powerDissipatedW as number;
  const stdOhm = result.standardResistanceOhm as number;
  const exactOhm = result.exactResistanceOhm as number;
  const actualMa = result.actualCurrentMa as number;
  const colorCode = result.resistorColorCode as string;

  const vLed = forwardV * ledCount;
  const vResistor = supplyV - vLed;
  const total = supplyV;

  const ledPct = (vLed / total) * 100;
  const resPct = (vResistor / total) * 100;

  // Power rating bar: max 0.5W → full bar
  const powerPct = Math.min(100, (powerW / 0.5) * 100);
  const powerColor = powerW > 0.25 ? "#ef4444" : powerW > 0.125 ? "#eab308" : "#22c55e";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h2 className="mb-3 text-base font-semibold">LED Circuit Voltage Distribution</h2>

      {/* Voltage stacked bar */}
      <div className="mb-2 text-xs font-medium text-slate-600 dark:text-slate-400">
        Supply Voltage Breakdown ({supplyV} V total)
      </div>
      <div className="flex h-8 w-full overflow-hidden rounded-lg">
        <div
          className="flex items-center justify-center text-xs font-semibold text-white"
          style={{ width: `${ledPct}%`, backgroundColor: "#f59e0b" }}
          title={`LED drop: ${vLed.toFixed(2)} V`}
        >
          {ledPct > 12 ? `${vLed.toFixed(1)}V LED` : ""}
        </div>
        <div
          className="flex items-center justify-center text-xs font-semibold text-white"
          style={{ width: `${resPct}%`, backgroundColor: "#3b82f6" }}
          title={`Resistor drop: ${vResistor.toFixed(2)} V`}
        >
          {resPct > 12 ? `${vResistor.toFixed(1)}V R` : ""}
        </div>
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-400">
        <span>LED(s) — {vLed.toFixed(2)} V</span>
        <span>Resistor — {vResistor.toFixed(2)} V</span>
      </div>

      {/* Power dissipation bar */}
      <div className="mt-4 mb-1 text-xs font-medium text-slate-600 dark:text-slate-400">
        Resistor Power Dissipation ({powerW.toFixed(3)} W of 0.5 W limit)
      </div>
      <div className="h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
        <div
          className="h-4 rounded-full transition-all"
          style={{ width: `${powerPct}%`, backgroundColor: powerColor }}
        />
      </div>

      {/* Summary cards */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[
          { label: "Exact R", value: `${exactOhm.toFixed(1)} Ω` },
          { label: "Standard R", value: `${stdOhm} Ω` },
          { label: "Actual I", value: `${actualMa.toFixed(1)} mA` },
          { label: "Power", value: `${powerW.toFixed(3)} W` },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-lg bg-slate-50 p-2 text-center dark:bg-slate-800"
          >
            <div className="text-sm font-bold text-blue-600 dark:text-blue-400">{item.value}</div>
            <div className="text-xs text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
        Color code (4-band): <strong>{colorCode}</strong>. Use a resistor rated ≥{" "}
        {(powerW * 2).toFixed(2)} W for 2× safety margin.
      </p>
    </div>
  );
}
