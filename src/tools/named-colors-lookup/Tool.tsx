import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { searchColors } from "./logic";

export default function NamedColorsLookupTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const { copied, copy } = useCopy();

  const colors = useMemo(() => searchColors(query), [query]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.search} className={inputClass} />
        {copied && <span className="whitespace-nowrap text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
        {colors.map((c) => (
          <button key={c.name} type="button" onClick={() => copy(c.hex)} className="flex items-center gap-2 rounded-lg border border-slate-200 p-2 text-left dark:border-slate-700" title={ui.copy}>
            <span className="h-8 w-8 shrink-0 rounded border border-slate-300 dark:border-slate-600" style={{ backgroundColor: c.hex }} />
            <span className="min-w-0">
              <span className="block truncate text-sm text-slate-800 dark:text-slate-100">{c.name}</span>
              <span className="block font-mono text-xs text-slate-500 dark:text-slate-400">{c.hex}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
