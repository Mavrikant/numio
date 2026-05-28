import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { analyzeEnv } from "./logic";

export default function EnvFileValidatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState('# Example\nDATABASE_URL="postgres://localhost/dev"\nAPI_KEY=abc123\nPORT=3000\n');

  const r = analyzeEnv(text);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={10} />
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.issues}</span>
        {r.issues.length === 0 ? (
          <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300">{ui.noIssues}</div>
        ) : (
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {r.issues.map((iss, i) => (
              <div key={i} className={"flex items-start gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800 " + (iss.severity === "error" ? "bg-red-50 dark:bg-red-950/20" : "bg-amber-50 dark:bg-amber-950/20")}>
                <span className="font-mono text-xs text-slate-500">{ui.line} {iss.line}</span>
                <span className="text-sm text-slate-800 dark:text-slate-100">{iss.message}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {r.entries.length > 0 && (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.parsed}</span>
          <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 dark:bg-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.key}</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.value}</th>
                </tr>
              </thead>
              <tbody>
                {r.entries.map((e, i) => (
                  <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                    <td className="px-3 py-1.5 font-mono text-sm text-slate-800 dark:text-slate-100">{e.key}</td>
                    <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{e.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
