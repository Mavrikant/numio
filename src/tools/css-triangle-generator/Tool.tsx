import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildTriangle, type Direction } from "./logic";

const DIRECTIONS: Direction[] = ["up", "down", "left", "right"];

export default function CssTriangleGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [direction, setDirection] = useState<Direction>("up");
  const [size, setSize] = useState(60);
  const [color, setColor] = useState("#3b82f6");

  const css = buildTriangle(direction, size, color);
  const style: Record<string, string> = {};
  for (const line of css.split("\n")) {
    const [prop, val] = line.replace(/;$/, "").split(": ");
    if (prop && val) style[prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.direction}</span>
          <select value={direction} onChange={(e) => setDirection(e.target.value as Direction)} className={inputClass}>
            {DIRECTIONS.map((d) => <option key={d} value={d}>{ui[d]}</option>)}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.size}</span>
          <input type="number" min={1} max={400} value={size} onChange={(e) => setSize(Number(e.target.value) || 60)} className={inputClass} />
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.color}</span>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
          <span className="font-mono text-xs">{color}</span>
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex h-48 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
          <div style={style as React.CSSProperties} />
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CSS</span>
          <CopyButton text={css} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={css} rows={6} readOnly />
      </div>
    </div>
  );
}
