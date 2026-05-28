import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { ASPECT_PRESETS, clampCrop } from "./logic";

export default function ImageCropperTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [imgW, setImgW] = useState(0);
  const [imgH, setImgH] = useState(0);
  const [aspect, setAspect] = useState<string>("free");
  const [rect, setRect] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [out, setOut] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const side = Math.min(img.naturalWidth, img.naturalHeight);
        setImgW(img.naturalWidth);
        setImgH(img.naturalHeight);
        setRect({ x: Math.floor((img.naturalWidth - side) / 2), y: Math.floor((img.naturalHeight - side) / 2), width: side, height: side });
        setSrc(typeof reader.result === "string" ? reader.result : "");
        setOut("");
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!imgW || !imgH) return;
    const preset = ASPECT_PRESETS.find((p) => p.id === aspect);
    if (!preset || preset.ratio === null) return;
    const target = preset.ratio;
    const maxFromW = rect.width;
    const maxFromH = Math.round(maxFromW / target);
    setRect((r) => clampCrop({ ...r, height: maxFromH }, imgW, imgH));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aspect]);

  const crop = () => {
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const safe = clampCrop(rect, imgW, imgH);
      canvas.width = safe.width;
      canvas.height = safe.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, safe.x, safe.y, safe.width, safe.height, 0, 0, safe.width, safe.height);
      setOut(canvas.toDataURL("image/png"));
    };
    img.src = src;
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

      {src && (
        <>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.aspect}</span>
            <select value={aspect} onChange={(e) => setAspect(e.target.value)} className={inputClass + " w-auto"}>
              {ASPECT_PRESETS.map((p) => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </label>

          <div className="grid gap-3 sm:grid-cols-4">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.x}</span>
              <input type="number" min={0} value={rect.x} onChange={(e) => setRect(clampCrop({ ...rect, x: Number(e.target.value) || 0 }, imgW, imgH))} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.y}</span>
              <input type="number" min={0} value={rect.y} onChange={(e) => setRect(clampCrop({ ...rect, y: Number(e.target.value) || 0 }, imgW, imgH))} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.width}</span>
              <input type="number" min={1} value={rect.width} onChange={(e) => setRect(clampCrop({ ...rect, width: Number(e.target.value) || 1 }, imgW, imgH))} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.height}</span>
              <input type="number" min={1} value={rect.height} onChange={(e) => setRect(clampCrop({ ...rect, height: Number(e.target.value) || 1 }, imgW, imgH))} className={inputClass} />
            </label>
          </div>

          <button type="button" onClick={crop} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.crop}
          </button>
        </>
      )}

      {out && (
        <>
          <img src={out} alt="" className="max-h-80 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <a href={out} download={(name.replace(/\.[^.]+$/, "") || "cropped") + ".png"} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </>
      )}
    </div>
  );
}
