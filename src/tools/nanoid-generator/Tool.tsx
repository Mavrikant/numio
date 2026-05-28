import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateNanoId, DEFAULT_ALPHABET } from "./logic";

export default function NanoIdGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(5);
  const [size, setSize] = useState(21);
  const [alphabet, setAlphabet] = useState(DEFAULT_ALPHABET);
  const [ids, setIds] = useState<string[]>([]);
  const { copied, copy } = useCopy();

  const generate = useCallback(() => {
    const out: string[] = [];
    for (let i = 0; i < count; i++) {
      const bytes = crypto.getRandomValues(new Uint8Array(size));
      out.push(generateNanoId(size, alphabet, bytes));
    }
    setIds(out);
  }, [count, size, alphabet]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.count}</span>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.size}</span>
          <input type="number" min={1} max={128} value={size} onChange={(e) => setSize(Number(e.target.value))} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.alphabet}</span>
          <input type="text" value={alphabet} onChange={(e) => setAlphabet(e.target.value)} className={inputClass + " font-mono text-xs"} />
        </label>
      </div>

      <div className="flex items-center gap-3">
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>

      <div className="rounded-lg border border-slate-200 dark:border-slate-700">
        {ids.map((id, i) => (
          <button key={i} type="button" onClick={() => copy(id)} className="block w-full border-b border-slate-100 px-3 py-2 text-left font-mono text-sm text-slate-800 hover:bg-slate-50 last:border-b-0 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/50" title={ui.copy}>
            {id}
          </button>
        ))}
      </div>
    </div>
  );
}
