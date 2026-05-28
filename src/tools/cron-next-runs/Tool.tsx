import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { nextRuns } from "./logic";

export default function CronNextRunsTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [expr, setExpr] = useState("*/15 * * * 1-5");
  const [count, setCount] = useState(10);

  const runs = nextRuns(expr, new Date(), count);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_120px]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.expression}</span>
          <input type="text" value={expr} onChange={(e) => setExpr(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.count}</span>
          <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(Number(e.target.value) || 10)} className={inputClass} />
        </label>
      </div>

      {runs.length > 0 && (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.upcoming}</span>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {runs.map((d, i) => (
              <div key={i} className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
                <span className="text-xs text-slate-400">#{i + 1}</span>
                <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{d.toLocaleString()}</code>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
