import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseUrl, type ParsedUrl } from "./logic";

export default function UrlParserTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  let parsed: ParsedUrl | null = null;
  let error = "";
  try {
    if (text.trim() !== "") parsed = parseUrl(text);
  } catch {
    error = ui.invalid;
  }

  const rows: ReadonlyArray<[string, string]> = parsed
    ? [
        [ui.protocol, parsed.protocol],
        [ui.host, parsed.hostname],
        [ui.port, parsed.port],
        [ui.path, parsed.pathname],
        [ui.query, parsed.search],
        [ui.hash, parsed.hash],
      ]
    : [];

  return (
    <div className="space-y-4">
      <input className={inputClass} value={text} onChange={(e) => setText(e.target.value)} placeholder={ui.placeholder} />
      {error && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      )}
      {parsed && (
        <div className="space-y-4">
          <dl className="space-y-1.5">
            {rows.filter(([, v]) => v !== "").map(([label, value]) => (
              <div key={label} className="flex items-start justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
                <dd className="break-all text-right font-mono text-sm text-slate-900 dark:text-slate-100">{value}</dd>
              </div>
            ))}
          </dl>
          {parsed.params.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.params}</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 dark:text-slate-400">
                    <th className="py-1 font-medium">{ui.key}</th>
                    <th className="py-1 font-medium">{ui.value}</th>
                  </tr>
                </thead>
                <tbody className="font-mono">
                  {parsed.params.map(([k, v], i) => (
                    <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                      <td className="py-1 pr-3 text-slate-900 dark:text-slate-100">{k}</td>
                      <td className="py-1 break-all text-slate-900 dark:text-slate-100">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
