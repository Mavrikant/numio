import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { TIMEZONES, formatInTimezone, offsetLabel } from "./logic";

function nowLocalIsoMinutes(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function parseLocalInTimezone(localValue: string, sourceZone: string): Date {
  // Treat the entered "YYYY-MM-DDTHH:mm" as wall time in `sourceZone`. Iterate
  // to find the UTC instant that the source zone displays as that wall time.
  const target = localValue + ":00";
  let guess = new Date(target);
  for (let i = 0; i < 3; i++) {
    const shown = formatInTimezone(guess, sourceZone).replace(" ", "T") + ":00";
    if (shown === target) return guess;
    const diff = new Date(target).getTime() - new Date(shown).getTime();
    guess = new Date(guess.getTime() + diff);
  }
  return guess;
}

export default function TimezoneConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  const [sourceZone, setSourceZone] = useState(browserZone);
  const [sourceTime, setSourceTime] = useState(nowLocalIsoMinutes());
  const [zones, setZones] = useState<string[]>(["UTC", "America/New_York", "Europe/London", "Asia/Tokyo"]);

  const instant = parseLocalInTimezone(sourceTime, sourceZone);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.sourceTime}</span>
          <input type="datetime-local" value={sourceTime} onChange={(e) => setSourceTime(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.sourceZone}</span>
          <select value={sourceZone} onChange={(e) => setSourceZone(e.target.value)} className={inputClass}>
            {TIMEZONES.map((tz) => <option key={tz} value={tz}>{tz}</option>)}
          </select>
        </label>
      </div>

      <div className="rounded-lg border border-slate-200 dark:border-slate-700">
        {zones.map((tz, i) => (
          <div key={i} className="flex items-center gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
            <select value={tz} onChange={(e) => setZones(zones.map((x, j) => j === i ? e.target.value : x))} className={inputClass + " w-auto flex-1"}>
              {TIMEZONES.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
            </select>
            <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{formatInTimezone(instant, tz)}</code>
            <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{offsetLabel(instant, tz)}</span>
            <button type="button" onClick={() => setZones(zones.filter((_, j) => j !== i))} className="px-2 text-red-600 hover:text-red-800 dark:text-red-400" title={ui.removeZone}>×</button>
          </div>
        ))}
      </div>

      <button type="button" onClick={() => setZones([...zones, "UTC"])} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
        {ui.addZone}
      </button>
    </div>
  );
}
