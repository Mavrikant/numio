import { useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generatePalette, type Harmony } from "./logic";

const HARMONIES: Harmony[] = ["complementary", "analogous", "triadic", "tetradic", "monochromatic"];

export default function ColorPaletteGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [base, setBase] = useState("#6366f1");
  const [harmony, setHarmony] = useState<Harmony>("analogous");
  const { copied, copy } = useCopy();

  const palette = generatePalette(base, harmony);

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.baseColor}</span>
          <input type="color" value={base} onChange={(e) => setBase(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{base}</span>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.harmony}</span>
          <select value={harmony} onChange={(e) => setHarmony(e.target.value as Harmony)} className={inputClass}>
            {HARMONIES.map((h) => (
              <option key={h} value={h}>{ui[h]}</option>
            ))}
          </select>
        </label>
      </div>

      {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {palette.map((c, i) => (
          <button key={i} type="button" onClick={() => copy(c)} className="overflow-hidden rounded-lg border border-slate-200 text-left dark:border-slate-700" title={ui.copy}>
            <span className="block h-20" style={{ backgroundColor: c }} />
            <span className="block px-2 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">{c}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
