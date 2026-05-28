import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { convertIpv6 } from "./logic";

export default function Ipv6ExpandCompressTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("2001:db8::1");

  const r = convertIpv6(text);

  const row = (label: string, value: string) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <CopyButton text={value} label={ui.copy} copiedLabel={ui.copied} />
      </div>
      <code className="block overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass + " font-mono"} />
      </label>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {!r.error && r.expanded && (
        <>
          {row(ui.expanded, r.expanded)}
          {row(ui.compressed, r.compressed)}
        </>
      )}
    </div>
  );
}
