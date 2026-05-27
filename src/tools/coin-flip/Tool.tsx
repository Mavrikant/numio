import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { flipCoins, type CoinResult } from "./logic";

export default function CoinFlipTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(1);
  const [result, setResult] = useState<CoinResult | null>(null);

  const flip = useCallback(() => setResult(flipCoins(count, cryptoRandom)), [count]);
  useEffect(() => {
    flip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={100000} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <button type="button" onClick={flip} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.flip}
        </button>
      </div>
      {result && (
        <>
          <div className="flex gap-6 text-center">
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{result.heads}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{ui.heads}</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
              <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">{result.tails}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{ui.tails}</div>
            </div>
          </div>
          {result.flips.length <= 200 && (
            <p className="break-words font-mono text-sm text-slate-600 dark:text-slate-400">
              {result.flips.map((f) => (f === "H" ? ui.heads[0] : ui.tails[0])).join(" ")}
            </p>
          )}
        </>
      )}
    </div>
  );
}
