import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { convertIpv4 } from "./logic";

export default function Ipv4ConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("192.168.1.1");

  const r = convertIpv4(text);

  const row = (label: string, value: string) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <div className="flex items-center gap-2">
        <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value}</code>
        {value && <CopyButton text={value} label={ui.copy} copiedLabel={ui.copied} />}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass + " font-mono"} />
      </label>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {!r.error && r.dotted && (
        <div className="rounded-lg border border-slate-200 dark:border-slate-700">
          {row(ui.dotted, r.dotted)}
          {row(ui.decimal, r.decimal)}
          {row(ui.hex, r.hex)}
          {row(ui.binary, r.binary)}
        </div>
      )}
    </div>
  );
}
