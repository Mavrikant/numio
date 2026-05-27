import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildBorderRadius } from "./logic";

export default function BorderRadiusGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [tl, setTl] = useState(12);
  const [tr, setTr] = useState(12);
  const [br, setBr] = useState(12);
  const [bl, setBl] = useState(12);

  const value = buildBorderRadius(tl, tr, br, bl);
  const css = `border-radius: ${value};`;

  const num = (label: string, val: number, set: (n: number) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="number" min={0} value={val} onChange={(e) => set(Number(e.target.value))} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {num(ui.topLeft, tl, setTl)}
        {num(ui.topRight, tr, setTr)}
        {num(ui.bottomRight, br, setBr)}
        {num(ui.bottomLeft, bl, setBl)}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-48 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <div className="h-28 w-44 bg-indigo-500" style={{ borderRadius: value }} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
        <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
