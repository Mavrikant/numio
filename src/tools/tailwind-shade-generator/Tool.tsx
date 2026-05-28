import { useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateTailwindShades, TAILWIND_STEPS } from "./logic";

export default function TailwindShadeGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [base, setBase] = useState("#3b82f6");
  const { copied, copy } = useCopy();

  const shades = generateTailwindShades(base);

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{ui.baseColor}</span>
        <input type="color" value={base} onChange={(e) => setBase(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
        <span className="font-mono text-xs">{base}</span>
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </label>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.scale}</span>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-11">
          {TAILWIND_STEPS.map((step) => {
            const hex = shades[step];
            return (
              <button key={step} type="button" onClick={() => copy(hex)} className="overflow-hidden rounded-lg border border-slate-200 text-left dark:border-slate-700" title={ui.copy}>
                <span className="block h-16" style={{ backgroundColor: hex }} />
                <span className="block px-2 py-1 text-center text-[10px] text-slate-600 dark:text-slate-300">{step}</span>
                <span className="block px-2 pb-1 text-center font-mono text-[10px] text-slate-500 dark:text-slate-400">{hex}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
