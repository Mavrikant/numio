import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { searchStatuses, statusClass } from "./logic";

const CLASS_COLOR: Record<number, string> = {
  1: "text-sky-700 dark:text-sky-300",
  2: "text-green-700 dark:text-green-300",
  3: "text-amber-700 dark:text-amber-300",
  4: "text-orange-700 dark:text-orange-300",
  5: "text-red-700 dark:text-red-300",
};

export default function HttpStatusCodesTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const results = searchStatuses(query);

  return (
    <div className="space-y-4">
      <input className={inputClass} value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.searchPlaceholder} />
      {results.length === 0 ? (
        <p className="text-sm text-slate-400">{ui.noResults}</p>
      ) : (
        <ul className="divide-y divide-slate-100 dark:divide-slate-800">
          {results.map((s) => (
            <li key={s.code} className="flex items-baseline gap-3 py-2">
              <span className={"w-12 font-mono text-lg font-bold " + (CLASS_COLOR[statusClass(s.code)] ?? "")}>{s.code}</span>
              <span className="text-slate-900 dark:text-slate-100">{s.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
