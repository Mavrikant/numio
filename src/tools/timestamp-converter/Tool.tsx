import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { unixToIso, unixToUtc, dateToUnix, type TsUnit } from "./logic";

export default function TimestampConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<"toDate" | "toUnix">("toDate");
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState<TsUnit>("s");

  const rows: Array<[string, string]> = [];
  let error = "";
  try {
    if (value.trim() !== "") {
      if (mode === "toDate") {
        const n = Number(value.trim());
        if (!Number.isFinite(n)) throw new Error("nan");
        rows.push([ui.iso, unixToIso(n, unit)], [ui.utc, unixToUtc(n, unit)]);
      } else {
        const { seconds, ms } = dateToUnix(value);
        rows.push([ui.seconds, String(seconds)], [ui.milliseconds, String(ms)]);
      }
    }
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["toDate", "toUnix"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={"rounded px-3 py-1.5 text-sm font-medium " + (m === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {ui[m]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <input className={inputClass + " flex-1"} value={value} onChange={(e) => setValue(e.target.value)} placeholder={mode === "toDate" ? ui.tsPlaceholder : ui.datePlaceholder} />
        {mode === "toDate" && (
          <select value={unit} onChange={(e) => setUnit(e.target.value as TsUnit)} className={inputClass + " w-auto"}>
            <option value="s">{ui.seconds}</option>
            <option value="ms">{ui.milliseconds}</option>
          </select>
        )}
        <button
          type="button"
          onClick={() => setValue(mode === "toDate" ? String(unit === "s" ? Math.floor(Date.now() / 1000) : Date.now()) : new Date().toISOString())}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.now}
        </button>
      </div>

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <dl className="space-y-2">
          {rows.map(([label, val]) => (
            <div key={label} className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
              <dd className="flex items-center gap-2">
                <span className="font-mono text-sm text-slate-900 dark:text-slate-100">{val}</span>
                <CopyButton text={val} label={ui.copy} copiedLabel={ui.copied} />
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
