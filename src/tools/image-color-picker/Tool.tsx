import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { useCopy, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { extractDominantColors } from "./logic";

export default function ImageColorPickerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [count, setCount] = useState(8);
  const [palette, setPalette] = useState<string[]>([]);
  const [imageData, setImageData] = useState<Uint8ClampedArray | null>(null);
  const { copied, copy } = useCopy();
  const inputRef = useRef<HTMLInputElement>(null);

  // Recompute the palette when the image or the colour count changes.
  useEffect(() => {
    if (!imageData) return;
    setPalette(extractDominantColors(imageData, Math.min(20, Math.max(2, count))));
  }, [imageData, count]);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === "string" ? reader.result : "";
      setSrc(dataUrl);
      const img = new Image();
      img.onload = () => {
        // Downscale for speed: at most 200×200 px before quantization.
        const scale = Math.min(1, 200 / Math.max(img.naturalWidth, img.naturalHeight));
        const w = Math.max(1, Math.round(img.naturalWidth * scale));
        const h = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, w, h);
        setImageData(ctx.getImageData(0, 0, w, h).data);
      };
      img.src = dataUrl;
    };
    reader.readAsDataURL(file);
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
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>{ui.count}</span>
        <input type="number" min={2} max={20} value={count} onChange={(e) => setCount(Number(e.target.value) || 8)} className={inputClass + " w-20"} />
        {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
      </label>

      {src && palette.length > 0 && (
        <>
          <img src={src} alt="" className="max-h-64 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <div className="space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.palette}</span>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
              {palette.map((c) => (
                <button key={c} type="button" onClick={() => copy(c)} className="overflow-hidden rounded-lg border border-slate-200 text-left dark:border-slate-700" title={ui.copy}>
                  <span className="block h-16" style={{ backgroundColor: c }} />
                  <span className="block px-2 py-1 font-mono text-xs text-slate-700 dark:text-slate-300">{c}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
