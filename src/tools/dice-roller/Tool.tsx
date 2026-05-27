import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import { inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { rollDice, type DiceResult } from "./logic";

export default function DiceRollerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(2);
  const [sides, setSides] = useState(6);
  const [result, setResult] = useState<DiceResult | null>(null);

  const roll = useCallback(() => setResult(rollDice(count, sides, cryptoRandom)), [count, sides]);
  useEffect(() => {
    roll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.sides}</span>
          <input type="number" min={2} max={1000} value={sides} onChange={(e) => setSides(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <button type="button" onClick={roll} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.roll}
        </button>
      </div>
      {result && (
        <>
          <div className="flex flex-wrap gap-2">
            {result.rolls.map((r, i) => (
              <span key={i} className="inline-flex h-10 min-w-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-2 text-lg font-bold text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
                {r}
              </span>
            ))}
          </div>
          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <span>{ui.sum}: <b className="text-slate-900 dark:text-slate-100">{result.sum}</b></span>
            <span>{ui.average}: <b className="text-slate-900 dark:text-slate-100">{formatNumber(result.average, locale, { maximumFractionDigits: 2 })}</b></span>
          </div>
        </>
      )}
    </div>
  );
}
