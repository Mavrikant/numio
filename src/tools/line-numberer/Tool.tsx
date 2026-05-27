import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { numberLines } from "./logic";

export default function LineNumbererTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [start, setStart] = useState(1);
  const [step, setStep] = useState(1);
  const [separator, setSeparator] = useState(". ");
  const output = numberLines(text, start, step, separator);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.start}</span>
          <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.step}</span>
          <input type="number" value={step} onChange={(e) => setStep(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.separator}</span>
          <input value={separator} onChange={(e) => setSeparator(e.target.value)} className={inputClass + " w-24"} />
        </label>
      </div>
      <TextArea value={output} readOnly rows={6} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
