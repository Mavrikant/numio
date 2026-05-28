import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildPlaceholderSvg, svgToDataUrl } from "./logic";

export default function PlaceholderImageGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(360);
  const [text, setText] = useState("");
  const [bg, setBg] = useState("#e2e8f0");
  const [fg, setFg] = useState("#475569");

  const svg = buildPlaceholderSvg(width, height, text, bg, fg);
  const dataUrl = svgToDataUrl(svg);

  const num = (label: string, val: number, set: (n: number) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="number" min={1} value={val} onChange={(e) => set(Number(e.target.value) || 0)} className={inputClass} />
    </label>
  );

  const color = (label: string, val: string, set: (s: string) => void) => (
    <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
      <span>{label}</span>
      <input type="color" value={val} onChange={(e) => set(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
      <span className="font-mono text-xs">{val}</span>
    </label>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {num(ui.width, width, setWidth)}
        {num(ui.height, height, setHeight)}
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.text}</span>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder={`${width}×${height}`} className={inputClass} />
        </label>
      </div>
      <div className="flex flex-wrap gap-4">
        {color(ui.background, bg, setBg)}
        {color(ui.foreground, fg, setFg)}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
        <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
          <img src={dataUrl} alt={ui.preview} className="max-h-80 max-w-full" />
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.svg}</span>
          <CopyButton text={svg} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <textarea readOnly value={svg} rows={3} className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
      </div>

      <a href={dataUrl} download={`placeholder-${width}x${height}.svg`} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        {ui.download}
      </a>
    </div>
  );
}
