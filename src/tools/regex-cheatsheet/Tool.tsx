import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { searchEntries } from "./logic";

export default function RegexCheatsheetTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const groups = useMemo(() => searchEntries(query), [query]);

  return (
    <div className="space-y-4">
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.search} className={inputClass} />
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.category} className="space-y-2">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{g.category}</div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.pattern}</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.meaning}</th>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.example}</th>
                  </tr>
                </thead>
                <tbody>
                  {g.entries.map((e) => (
                    <tr key={e.pattern + e.example} className="border-t border-slate-100 dark:border-slate-800">
                      <td className="px-3 py-1.5 font-mono text-sm text-slate-800 dark:text-slate-100">{e.pattern}</td>
                      <td className="px-3 py-1.5 text-sm text-slate-700 dark:text-slate-200">{e.meaning}</td>
                      <td className="px-3 py-1.5 font-mono text-xs text-slate-500 dark:text-slate-400">{e.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
