import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { searchPorts } from "./logic";

export default function PortLookupTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const rows = useMemo(() => searchPorts(query), [query]);

  return (
    <div className="space-y-4">
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.search} className={inputClass} />
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.port}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.protocol}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.name}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.desc}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.port + p.protocol + p.name} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-3 py-1.5 font-mono text-sm text-slate-800 dark:text-slate-100">{p.port}</td>
                <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{p.protocol}</td>
                <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{p.name}</td>
                <td className="px-3 py-1.5 text-slate-600 dark:text-slate-300">{p.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
