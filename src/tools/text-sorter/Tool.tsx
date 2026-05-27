import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { sortLines, type SortMode } from "./logic";

export default function TextSorterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [mode, setMode] = useState<SortMode>("alpha");
  const [reverse, setReverse] = useState(false);
  const [caseInsensitive, setCaseInsensitive] = useState(false);
  const output = sortLines(text, mode, { reverse, caseInsensitive });

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={7} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.mode}</span>
          <select value={mode} onChange={(e) => setMode(e.target.value as SortMode)} className={inputClass + " w-auto"}>
            <option value="alpha">{ui.alphabetical}</option>
            <option value="length">{ui.byLength}</option>
            <option value="numeric">{ui.numeric}</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={reverse} onChange={(e) => setReverse(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.reverse}
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={caseInsensitive} onChange={(e) => setCaseInsensitive(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.caseInsensitive}
        </label>
      </div>
      <TextArea value={output} readOnly rows={7} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
