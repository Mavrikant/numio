import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { toBionicHtml } from "./logic";

export default function BionicReadingTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("Bionic reading bolds the first part of each word to help your eyes scan more quickly.");
  const [fraction, setFraction] = useState(0.5);

  const html = toBionicHtml(text, fraction);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.fraction}: {Math.round(fraction * 100)}%</span>
        <input type="range" min={20} max={80} step={5} value={Math.round(fraction * 100)} onChange={(e) => setFraction(Number(e.target.value) / 100)} className="w-full" />
      </label>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div
          className="rounded-md border border-slate-200 bg-white px-4 py-3 text-base leading-relaxed text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
