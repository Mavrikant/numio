import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { searchAscii } from "./logic";

export default function AsciiTableTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const { copied, copy } = useCopy();

  const rows = useMemo(() => searchAscii(query), [query]);
  const th = "px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200";
  const td = "px-3 py-1.5 font-mono text-slate-800 dark:text-slate-100";

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.search} className={inputClass} />
        {copied && <span className="whitespace-nowrap text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className={th}>{ui.char}</th>
              <th className={th}>{ui.dec}</th>
              <th className={th}>{ui.hex}</th>
              <th className={th}>{ui.oct}</th>
              <th className={th}>{ui.bin}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.dec} onClick={() => copy(r.char)} className="cursor-pointer border-t border-slate-100 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50" title={ui.copy}>
                <td className={td + " font-semibold"}>{r.char}</td>
                <td className={td}>{r.dec}</td>
                <td className={td}>{r.hex}</td>
                <td className={td}>{r.oct}</td>
                <td className={td}>{r.bin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
