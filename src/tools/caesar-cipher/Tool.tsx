import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { caesarShift } from "./logic";

export default function CaesarCipherTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [shift, setShift] = useState(3);
  const output = caesarShift(text, shift);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex flex-1 items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium whitespace-nowrap">{ui.shift}: {shift}</span>
          <input type="range" min={0} max={25} value={shift} onChange={(e) => setShift(Number(e.target.value))} className="flex-1 accent-blue-600" />
        </label>
        <button type="button" onClick={() => setShift(13)} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
          {ui.rot13}
        </button>
      </div>
      <TextArea value={output} readOnly rows={5} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
