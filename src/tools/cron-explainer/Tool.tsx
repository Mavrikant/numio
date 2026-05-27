import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { explainCron } from "./logic";

export default function CronExplainerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [expr, setExpr] = useState("0 9 * * 1-5");

  const { description, error } = explainCron(expr);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={expr} onChange={(e) => setExpr(e.target.value)} placeholder={ui.placeholder} className={inputClass} />
      </div>

      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>
      ) : (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.explanation}</span>
          <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-3 text-slate-800 first-letter:uppercase dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-100">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
