import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildTextShadow } from "./logic";

export default function TextShadowGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [blur, setBlur] = useState(4);
  const [color, setColor] = useState("#000000");

  const value = buildTextShadow(x, y, blur, color);
  const css = `text-shadow: ${value};`;

  const num = (label: string, val: number, set: (n: number) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="number" value={val} onChange={(e) => set(Number(e.target.value))} className={inputClass} />
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {num(ui.offsetX, x, setX)}
        {num(ui.offsetY, y, setY)}
        {num(ui.blur, blur, setBlur)}
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color}</span>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{color}</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-40 w-full items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <span className="text-5xl font-bold text-slate-800 dark:text-slate-100" style={{ textShadow: value }}>
            Aa Bb Cc
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
        <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
