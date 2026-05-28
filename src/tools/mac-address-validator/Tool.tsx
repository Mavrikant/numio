import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { validateMac } from "./logic";

export default function MacAddressValidatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const r = validateMac(text);
  const show = text.trim() !== "";

  const row = (label: string, value: string) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass + " font-mono"} />
      </label>

      {show && (
        <>
          <div
            className={
              "rounded-md border px-3 py-2 text-sm font-medium " +
              (r.valid
                ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
                : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300")
            }
          >
            {r.valid ? ui.valid : r.error || ui.invalid}
          </div>

          {r.valid && (
            <div className="rounded-lg border border-slate-200 dark:border-slate-700">
              {row(ui.canonical, r.canonical)}
              {row(ui.noSeparator, r.noSeparator)}
              {row(ui.cisco, r.cisco)}
              {row(ui.oui, r.oui)}
              {row(ui.type, r.type)}
            </div>
          )}
        </>
      )}
    </div>
  );
}
