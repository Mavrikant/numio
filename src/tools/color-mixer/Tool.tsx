import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton } from "@/components/tools/textToolKit";
import definition from "./definition";
import { mixColors } from "./logic";

export default function ColorMixerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [c1, setC1] = useState("#ff0000");
  const [c2, setC2] = useState("#0000ff");
  const [ratio, setRatio] = useState(50);

  const mixed = mixColors(c1, c2, ratio / 100) ?? "#000000";

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color1}</span>
          <input type="color" value={c1} onChange={(e) => setC1(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{c1}</span>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color2}</span>
          <input type="color" value={c2} onChange={(e) => setC2(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{c2}</span>
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.ratio}: {ratio}%</span>
        <input type="range" min={0} max={100} value={ratio} onChange={(e) => setRatio(Number(e.target.value))} className="w-full" />
      </label>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.mixed}</span>
        <div className="flex items-center gap-3">
          <div className="h-16 flex-1 rounded-lg border border-slate-200 dark:border-slate-700" style={{ backgroundColor: mixed }} />
          <code className="rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{mixed}</code>
          <CopyButton text={mixed} label={ui.copy} copiedLabel={ui.copied} />
        </div>
      </div>
    </div>
  );
}
