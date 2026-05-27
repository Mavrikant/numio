import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildGradient, type GradientType } from "./logic";

export default function CssGradientGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [type, setType] = useState<GradientType>("linear");
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState("#6366f1");
  const [color2, setColor2] = useState("#ec4899");

  const value = buildGradient(type, angle, color1, color2);
  const css = `background: ${value};`;

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.type}</span>
          <select value={type} onChange={(e) => setType(e.target.value as GradientType)} className={inputClass}>
            <option value="linear">{ui.linear}</option>
            <option value="radial">{ui.radial}</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.angle}</span>
          <input
            type="number"
            min={0}
            max={360}
            value={angle}
            disabled={type === "radial"}
            onChange={(e) => setAngle(Number(e.target.value))}
            className={inputClass + " disabled:opacity-50"}
          />
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color1}</span>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{color1}</span>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color2}</span>
          <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{color2}</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="h-40 w-full rounded-lg border border-slate-200 dark:border-slate-700" style={{ background: value }} />
      </div>

      <div className="flex items-center gap-3">
        <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{css}</code>
        <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
