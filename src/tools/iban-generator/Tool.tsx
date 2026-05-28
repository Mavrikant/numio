import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { COUNTRIES, formatIban, generateIban } from "./logic";

export default function IbanGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [country, setCountry] = useState("TR");
  const [count, setCount] = useState(5);
  const [ibans, setIbans] = useState<string[]>([]);
  const { copied, copy } = useCopy();

  const generate = useCallback(() => {
    const out: string[] = [];
    for (let i = 0; i < count; i++) out.push(generateIban(country, cryptoRandom));
    setIbans(out);
  }, [country, count]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.country}</span>
          <select value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass + " w-auto"}>
            {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.count}</span>
          <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value) || 5)} className={inputClass + " w-24"} />
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
        <div className="rounded-lg border border-slate-200 dark:border-slate-700">
          {ibans.map((iban, i) => (
            <button key={i} type="button" onClick={() => copy(iban)} className="block w-full border-b border-slate-100 px-3 py-2 text-left font-mono text-sm text-slate-800 hover:bg-slate-50 last:border-b-0 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/50" title={ui.copy}>
              {formatIban(iban)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
