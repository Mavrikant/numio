import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { convertBase, type Base } from "./logic";

export default function NumberBaseConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState<Base>(10);

  let result: ReturnType<typeof convertBase> | null = null;
  let error = "";
  try {
    if (value.trim() !== "") result = convertBase(value, fromBase);
  } catch {
    error = ui.invalid;
  }

  const rows: ReadonlyArray<[string, string]> = result
    ? [[ui.binary, result.binary], [ui.octal, result.octal], [ui.decimal, result.decimal], [ui.hex, result.hex]]
    : [];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <input className={inputClass + " flex-1"} value={value} onChange={(e) => setValue(e.target.value)} placeholder={ui.placeholder} />
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.fromBase}</span>
          <select value={fromBase} onChange={(e) => setFromBase(Number(e.target.value) as Base)} className={inputClass + " w-auto"}>
            <option value={2}>2</option>
            <option value={8}>8</option>
            <option value={10}>10</option>
            <option value={16}>16</option>
          </select>
        </label>
      </div>
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <dl className="space-y-2">
          {rows.map(([label, val]) => (
            <div key={label} className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
              <dd className="flex items-center gap-2">
                <span className="break-all font-mono text-sm text-slate-900 dark:text-slate-100">{val}</span>
                <CopyButton text={val} label={ui.copy} copiedLabel={ui.copied} />
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
