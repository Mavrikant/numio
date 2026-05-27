import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { parseItems, pickItems } from "./logic";

export default function RandomPickerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [unique, setUnique] = useState(true);
  const [output, setOutput] = useState("");

  const pick = () => setOutput(pickItems(parseItems(text), count, unique, cryptoRandom).join("\n"));

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={10000} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.unique}
        </label>
        <button type="button" onClick={pick} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.pick}
        </button>
      </div>
      <TextArea value={output} readOnly rows={4} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
