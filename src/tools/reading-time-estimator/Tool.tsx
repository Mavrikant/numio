import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { estimateReadingTime } from "./logic";

export default function ReadingTimeEstimatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [wpm, setWpm] = useState(200);

  const r = estimateReadingTime(text, wpm);

  const row = (label: string, value: string | number) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={8} />
      </div>

      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{ui.wpm}</span>
        <input type="number" min={50} max={1000} value={wpm} onChange={(e) => setWpm(Number(e.target.value) || 200)} className={inputClass + " w-28"} />
      </label>

      <div className="rounded-lg border border-slate-200 dark:border-slate-700">
        {row(ui.words, r.words.toLocaleString())}
        {row(ui.characters, r.characters.toLocaleString())}
        {row(ui.time, r.pretty)}
      </div>
    </div>
  );
}
