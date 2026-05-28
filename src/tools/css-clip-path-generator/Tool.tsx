import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { SHAPES, buildClipPathCss, type ClipShape } from "./logic";

const SHAPE_NAMES = Object.keys(SHAPES) as ClipShape[];

export default function CssClipPathGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [shape, setShape] = useState<ClipShape>("hexagon");
  const [color, setColor] = useState("#3b82f6");

  const css = buildClipPathCss(shape);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.shape}</span>
          <select value={shape} onChange={(e) => setShape(e.target.value as ClipShape)} className={inputClass}>
            {SHAPE_NAMES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color}</span>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{color}</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-64 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <div className="h-40 w-40" style={{ clipPath: SHAPES[shape], backgroundColor: color }} />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
        <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
