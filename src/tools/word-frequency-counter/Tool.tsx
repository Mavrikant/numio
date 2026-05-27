import { useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { wordFrequencies } from "./logic";

export default function WordFrequencyCounterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [caseInsensitive, setCaseInsensitive] = useState(true);
  const result = wordFrequencies(text, caseInsensitive);
  const max = result.entries[0]?.count ?? 1;

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={caseInsensitive} onChange={(e) => setCaseInsensitive(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.caseInsensitive}
        </label>
        <span className="text-sm text-slate-500 dark:text-slate-400">{ui.totalWords}: <b className="text-slate-900 dark:text-slate-100">{formatNumber(result.totalWords, locale)}</b></span>
        <span className="text-sm text-slate-500 dark:text-slate-400">{ui.uniqueWords}: <b className="text-slate-900 dark:text-slate-100">{formatNumber(result.uniqueWords, locale)}</b></span>
      </div>
      {result.entries.length > 0 && (
        <ul className="space-y-1">
          {result.entries.slice(0, 300).map((e) => (
            <li key={e.word} className="flex items-center gap-3">
              <span className="w-32 truncate font-mono text-sm text-slate-900 dark:text-slate-100">{e.word}</span>
              <span className="h-4 rounded bg-blue-500/70" style={{ width: `${(e.count / max) * 60}%`, minWidth: 4 }} />
              <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">{e.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
