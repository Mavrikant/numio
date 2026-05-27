import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateLorem, type LoremUnit } from "./logic";

const UNITS: readonly LoremUnit[] = ["paragraphs", "sentences", "words"];

export default function LoremIpsumTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<LoremUnit>("paragraphs");
  const [startWith, setStartWith] = useState(true);
  const [output, setOutput] = useState("");

  const generate = useCallback(() => {
    setOutput(generateLorem(unit, count, startWith, Math.random));
  }, [unit, count, startWith]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        <select value={unit} onChange={(e) => setUnit(e.target.value as LoremUnit)} className={inputClass + " w-auto"}>
          {UNITS.map((u) => (
            <option key={u} value={u}>{ui[u]}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={startWith} onChange={(e) => setStartWith(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.startWith}
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
      </div>
      <TextArea value={output} readOnly rows={10} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
