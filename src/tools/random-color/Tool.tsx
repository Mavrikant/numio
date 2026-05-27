import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { randomColors } from "./logic";

export default function RandomColorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(8);
  const [colors, setColors] = useState<string[]>([]);
  const { copied, copy } = useCopy();

  const generate = useCallback(() => setColors(randomColors(count, cryptoRandom)), [count]);
  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={1000} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {colors.map((c, i) => (
          <button key={i} type="button" onClick={() => copy(c)} className="overflow-hidden rounded-lg border border-slate-200 text-left dark:border-slate-700" title={ui.copy}>
            <span className="block h-16" style={{ backgroundColor: c }} />
            <span className="block px-2 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">{c}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
