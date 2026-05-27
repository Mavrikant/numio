import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { randomIntegers } from "./logic";

export default function RandomNumberGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [count, setCount] = useState(5);
  const [unique, setUnique] = useState(false);
  const [output, setOutput] = useState("");

  const generate = useCallback(() => {
    setOutput(randomIntegers(min, max, count, unique, cryptoRandom).join(", "));
  }, [min, max, count, unique]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.min}</span>
          <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.max}</span>
          <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={10000} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={unique} onChange={(e) => setUnique(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.unique}
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
      </div>
      <TextArea value={output} readOnly rows={4} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
