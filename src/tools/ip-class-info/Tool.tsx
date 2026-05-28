import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { classifyIp } from "./logic";

export default function IpClassInfoTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("192.168.1.42");
  const r = classifyIp(text);
  const show = text.trim() !== "" && !r.error;

  const row = (label: string, value: string | boolean) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{typeof value === "boolean" ? (value ? "✓" : "—") : value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass + " font-mono"} />
      </label>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {show && (
        <>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {row(ui.version, r.version ?? "—")}
            {r.version === "IPv4" && row(ui.classful, r.classfulClass)}
            {row(ui.privateRange, r.isPrivate)}
            {row(ui.loopback, r.isLoopback)}
            {row(ui.linkLocal, r.isLinkLocal)}
            {row(ui.multicast, r.isMulticast)}
            {row(ui.documentation, r.isDocumentation)}
          </div>

          {r.notes.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.notes}</span>
              <ul className="list-disc space-y-1 rounded-lg border border-slate-200 px-6 py-3 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200">
                {r.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
