import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";

export default function ImageResizerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [origW, setOrigW] = useState(0);
  const [origH, setOrigH] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [lock, setLock] = useState(true);
  const [out, setOut] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setOrigW(img.naturalWidth);
        setOrigH(img.naturalHeight);
        setWidth(img.naturalWidth);
        setHeight(img.naturalHeight);
        setSrc(typeof reader.result === "string" ? reader.result : "");
        setOut("");
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
    };
    reader.readAsDataURL(file);
  };

  const onWidth = (w: number) => {
    setWidth(w);
    if (lock && origW > 0) setHeight(Math.round((w / origW) * origH));
  };
  const onHeight = (h: number) => {
    setHeight(h);
    if (lock && origH > 0) setWidth(Math.round((h / origH) * origW));
  };

  const resize = () => {
    if (!src || width < 1 || height < 1) return;
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, 0, 0, width, height);
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
          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.width}</span>
              <input type="number" min={1} value={width} onChange={(e) => onWidth(Number(e.target.value) || 0)} className={inputClass} />
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.height}</span>
              <input type="number" min={1} value={height} onChange={(e) => onHeight(Number(e.target.value) || 0)} className={inputClass} />
            </label>
            <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
              <input type="checkbox" checked={lock} onChange={(e) => setLock(e.target.checked)} className="h-4 w-4" />
              <span>{ui.lockAspect}</span>
            </label>
          </div>
          <button type="button" onClick={resize} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.width} × {ui.height}: {width} × {height}
          </button>
        </>
      )}

      {out && (
        <>
          <img src={out} alt="" className="max-h-80 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <a href={out} download={(name.replace(/\.[^.]+$/, "") || "resized") + ".png"} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </>
      )}
    </div>
  );
}
