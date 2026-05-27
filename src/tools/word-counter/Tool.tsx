import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { analyzeText } from "./logic";

export default function WordCounterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const stats = useMemo(() => analyzeText(text), [text]);

  const cells: ReadonlyArray<[string, string]> = [
    [ui.words, formatNumber(stats.words, locale)],
    [ui.characters, formatNumber(stats.characters, locale)],
    [ui.charactersNoSpaces, formatNumber(stats.charactersNoSpaces, locale)],
    [ui.sentences, formatNumber(stats.sentences, locale)],
    [ui.paragraphs, formatNumber(stats.paragraphs, locale)],
    [ui.lines, formatNumber(stats.lines, locale)],
    [ui.readingTime, `${formatNumber(Math.max(stats.readingMinutes, stats.words > 0 ? 0.1 : 0), locale, { maximumFractionDigits: 1 })} ${ui.min}`],
  ];

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={10} />
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setText("")}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.clear}
        </button>
      </div>
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cells.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-700 dark:bg-slate-900">
            <dd className="text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</dd>
            <dt className="mt-1 text-xs text-slate-500 dark:text-slate-400">{label}</dt>
          </div>
        ))}
      </dl>
    </div>
  );
}
