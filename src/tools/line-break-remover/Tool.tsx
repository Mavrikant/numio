import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { removeLineBreaks, type BreakMode } from "./logic";

export default function LineBreakRemoverTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [mode, setMode] = useState<BreakMode>("spaces");
  const output = removeLineBreaks(text, mode);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <span className="font-medium">{ui.mode}</span>
        <select value={mode} onChange={(e) => setMode(e.target.value as BreakMode)} className={inputClass + " w-auto"}>
          <option value="spaces">{ui.spaces}</option>
          <option value="remove">{ui.remove}</option>
          <option value="paragraphs">{ui.paragraphs}</option>
        </select>
      </label>
      <TextArea value={output} readOnly rows={6} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
