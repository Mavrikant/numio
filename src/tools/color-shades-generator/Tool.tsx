import { useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateShades } from "./logic";

export default function ColorShadesGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [base, setBase] = useState("#3b82f6");
  const [steps, setSteps] = useState(10);
  const { copied, copy } = useCopy();

  const shades = generateShades(base, steps);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.baseColor}</span>
          <input type="color" value={base} onChange={(e) => setBase(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{base}</span>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.steps}</span>
          <input type="number" min={2} max={20} value={steps} onChange={(e) => setSteps(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </div>

      <div className="flex flex-wrap gap-2">
        {shades.map((c, i) => (
          <button key={i} type="button" onClick={() => copy(c)} className="overflow-hidden rounded-lg border border-slate-200 text-left dark:border-slate-700" title={ui.copy} style={{ width: 84 }}>
            <span className="block h-16" style={{ backgroundColor: c }} />
            <span className="block px-2 py-1 font-mono text-[10px] text-slate-700 dark:text-slate-300">{c}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
