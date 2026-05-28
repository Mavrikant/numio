import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseUserAgent } from "./logic";

export default function UserAgentParserTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const r = parseUserAgent(text);

  const row = (label: string, value: string) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
          <button type="button" onClick={() => setText(navigator.userAgent)} className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
            {ui.useMine}
          </button>
        </div>
        <TextArea value={text} onChange={setText} rows={3} />
      </div>

      {text.trim() && (
        <div className="rounded-lg border border-slate-200 dark:border-slate-700">
          {row(ui.browser, r.browser)}
          {row(ui.browserVersion, r.browserVersion)}
          {row(ui.engine, r.engine)}
          {row(ui.os, r.os)}
          {row(ui.device, r.device)}
        </div>
      )}
    </div>
  );
}
