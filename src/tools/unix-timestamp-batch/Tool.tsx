import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseTimestamps } from "./logic";

export default function UnixTimestampBatchTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("1716902400\n1716902400000\n2026-05-28T10:00:00Z");

  const rows = parseTimestamps(text, new Date());

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>

      {rows.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                {["", ui.iso, ui.utc, ui.local, ui.relative].map((h, i) => (
                  <th key={i} className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-100 align-top dark:border-slate-800">
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{r.input}</td>
                  {r.error ? (
                    <td colSpan={4} className="px-3 py-1.5 text-sm text-red-600 dark:text-red-400">{r.error}</td>
                  ) : (
                    <>
                      <td className="px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-100">{r.iso}</td>
                      <td className="px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-100">{r.utc}</td>
                      <td className="px-3 py-1.5 font-mono text-xs text-slate-800 dark:text-slate-100">{r.local}</td>
                      <td className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300">{r.relative}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
