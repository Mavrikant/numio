import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildClamp } from "./logic";

export default function CssClampGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [minSize, setMinSize] = useState(16);
  const [maxSize, setMaxSize] = useState(24);
  const [minVw, setMinVw] = useState(320);
  const [maxVw, setMaxVw] = useState(1280);

  const value = buildClamp(minSize, maxSize, minVw, maxVw);
  const css = `font-size: ${value};`;

  const num = (label: string, val: number, set: (n: number) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="number" value={val} onChange={(e) => set(Number(e.target.value))} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {num(ui.minSize, minSize, setMinSize)}
        {num(ui.maxSize, maxSize, setMaxSize)}
        {num(ui.minViewport, minVw, setMinVw)}
        {num(ui.maxViewport, maxVw, setMaxVw)}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
        <div className="flex items-center gap-3">
          <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
          <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
        <span className="text-slate-800 dark:text-slate-100" style={{ fontSize: value }}>
          The quick brown fox
        </span>
      </div>
    </div>
  );
}
