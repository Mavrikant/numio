import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { checkStrength } from "./logic";

const COLORS = ["bg-red-500", "bg-red-400", "bg-amber-400", "bg-green-500", "bg-emerald-600"];

export default function PasswordStrengthCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [password, setPassword] = useState("");
  const r = checkStrength(password);

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass + " font-mono"} />
      </label>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.strength}</span>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{r.label}</span>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className={"h-2 rounded " + (i <= r.score ? COLORS[r.score] : "bg-slate-200 dark:bg-slate-700")} />
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">{ui.entropy}</div>
          <div className="font-mono text-2xl text-slate-900 dark:text-slate-100">{r.entropy}</div>
        </div>
        <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
          <div className="text-xs text-slate-500 dark:text-slate-400">{ui.crackTime}</div>
          <div className="font-mono text-2xl text-slate-900 dark:text-slate-100">{r.crackTime}</div>
        </div>
      </div>

      {r.suggestions.length > 0 && (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.suggestions}</span>
          <ul className="list-disc space-y-1 rounded-lg border border-slate-200 px-6 py-3 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-200">
            {r.suggestions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
}
