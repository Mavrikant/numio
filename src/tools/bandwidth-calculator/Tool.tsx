import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { SIZE_UNITS, SPEED_UNITS, computeDownloadSeconds, formatSeconds, type SizeUnit, type SpeedUnit } from "./logic";

export default function BandwidthCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [size, setSize] = useState(1);
  const [sizeUnit, setSizeUnit] = useState<SizeUnit>("GB");
  const [speed, setSpeed] = useState(100);
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("Mbps");

  const seconds = computeDownloadSeconds(size, sizeUnit, speed, speedUnit);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.size}</span>
          <div className="flex gap-2">
            <input type="number" min={0} step="any" value={size} onChange={(e) => setSize(Number(e.target.value) || 0)} className={inputClass + " flex-1"} />
            <select value={sizeUnit} onChange={(e) => setSizeUnit(e.target.value as SizeUnit)} className={inputClass + " w-24"}>
              {SIZE_UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.speed}</span>
          <div className="flex gap-2">
            <input type="number" min={0} step="any" value={speed} onChange={(e) => setSpeed(Number(e.target.value) || 0)} className={inputClass + " flex-1"} />
            <select value={speedUnit} onChange={(e) => setSpeedUnit(e.target.value as SpeedUnit)} className={inputClass + " w-24"}>
              {SPEED_UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 px-4 py-4 dark:border-slate-700">
        <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{ui.duration}</div>
        <div className="mt-1 font-mono text-3xl text-slate-900 dark:text-slate-100">{formatSeconds(seconds)}</div>
      </div>
    </div>
  );
}
