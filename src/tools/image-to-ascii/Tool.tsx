import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { bufferToAscii, RAMPS, type Ramp } from "./logic";

export default function ImageToAsciiTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [cols, setCols] = useState(80);
  const [ramp, setRamp] = useState<Ramp>("short");
  const [invert, setInvert] = useState(false);
  const [ascii, setAscii] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!src) {
      setAscii("");
      return;
    }
    const img = new Image();
    img.onload = () => {
      // Account for monospace character aspect (~0.5 height factor) by halving the row count.
      const w = Math.max(1, cols);
      const h = Math.max(1, Math.round((img.naturalHeight / img.naturalWidth) * w * 0.5));
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);
      const data = ctx.getImageData(0, 0, w, h).data;
      setAscii(bufferToAscii(data, w, h, RAMPS[ramp], invert));
    };
    img.src = src;
  }, [src, cols, ramp, invert]);

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
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      {src && (
        <>
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.width}</span>
              <input type="number" min={20} max={300} value={cols} onChange={(e) => setCols(Number(e.target.value) || 80)} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.ramp}</span>
              <select value={ramp} onChange={(e) => setRamp(e.target.value as Ramp)} className={inputClass}>
                <option value="short">{ui.short2}</option>
                <option value="long">{ui.long}</option>
              </select>
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <input type="checkbox" checked={invert} onChange={(e) => setInvert(e.target.checked)} className="h-4 w-4" />
              <span>{ui.invert}</span>
            </label>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
              <CopyButton text={ascii} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={ascii} rows={20} readOnly />
          </div>
        </>
      )}
    </div>
  );
}
