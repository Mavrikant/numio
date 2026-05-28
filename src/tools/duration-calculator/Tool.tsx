import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { calcDuration } from "./logic";

function nowLocal(): string {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function DurationCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [start, setStart] = useState(nowLocal());
  const [end, setEnd] = useState(nowLocal());

  const r = calcDuration(start, end);

  const cell = (label: string, value: string) => (
    <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 font-mono text-xl text-slate-900 dark:text-slate-100">{value}</div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.start}</span>
          <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.end}</span>
          <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} className={inputClass + " font-mono"} />
        </label>
      </div>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {!r.error && (
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cell(ui.humanized, r.humanized || "—")}
          {cell(ui.days, r.days.toString())}
          {cell(ui.hours, r.hours.toString())}
          {cell(ui.minutes, r.minutes.toString())}
          {cell(ui.seconds, r.seconds.toString())}
          {cell(ui.weeks, r.weeks.toString())}
          {cell(ui.totalMs, r.totalMs.toLocaleString())}
        </div>
      )}
    </div>
  );
}
