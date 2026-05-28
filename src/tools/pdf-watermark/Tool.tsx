import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { addWatermark } from "./logic";
import { downloadBytes } from "../_shared/pdf";

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  if (!m) return { r: 200, g: 200, b: 200 };
  const h = m[1]!;
  return { r: parseInt(h.slice(0, 2), 16), g: parseInt(h.slice(2, 4), 16), b: parseInt(h.slice(4, 6), 16) };
}

export default function PdfWatermarkTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [text, setText] = useState("DRAFT");
  const [fontSize, setFontSize] = useState(72);
  const [rotation, setRotation] = useState(30);
  const [color, setColor] = useState("#808080");
  const [opacity, setOpacity] = useState(35);
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || file.type !== "application/pdf") return;
    file.arrayBuffer().then((buf) => setBytes(new Uint8Array(buf)));
  };

  const run = async () => {
    if (!bytes) return;
    setBusy(true);
    try {
      const out = await addWatermark(bytes, {
        text,
        fontSize,
        opacity: opacity / 100,
        rotation,
        color: hexToRgb(color),
      });
      downloadBytes(out, "watermarked.pdf");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); load(e.dataTransfer.files[0]); }}
        className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-4 py-10 text-sm text-slate-500 hover:border-blue-400 dark:border-slate-600 dark:text-slate-400"
      >
        {ui.drop}
      </button>
      <input ref={inputRef} type="file" accept="application/pdf" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      {bytes && (
        <>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.text}</span>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass} />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.fontSize}</span>
              <input type="number" min={6} max={400} value={fontSize} onChange={(e) => setFontSize(Number(e.target.value) || 72)} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.rotation}: {rotation}°</span>
              <input type="range" min={-90} max={90} value={rotation} onChange={(e) => setRotation(Number(e.target.value))} className="w-full" />
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span>{ui.color}</span>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="h-9 w-14 cursor-pointer rounded border border-slate-300 dark:border-slate-600" />
              <span className="font-mono text-xs">{color}</span>
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.opacity}: {opacity}%</span>
              <input type="range" min={5} max={100} value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full" />
            </label>
          </div>
          <button type="button" onClick={run} disabled={busy || !text} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {busy ? "…" : ui.run}
          </button>
        </>
      )}
    </div>
  );
}
