import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { repeatText, type RepeatSeparator } from "./logic";

export default function TextRepeaterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [count, setCount] = useState(3);
  const [separator, setSeparator] = useState<RepeatSeparator>("newline");
  const output = repeatText(text, count, separator);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={3} />
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={100000} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.separator}</span>
          <select value={separator} onChange={(e) => setSeparator(e.target.value as RepeatSeparator)} className={inputClass + " w-auto"}>
            <option value="none">{ui.none}</option>
            <option value="space">{ui.space}</option>
            <option value="newline">{ui.newline}</option>
            <option value="comma">{ui.comma}</option>
          </select>
        </label>
      </div>
      <TextArea value={output} readOnly rows={8} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
