import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { SUPPORTED_FORMATS, extensionFor, type SupportedFormat } from "./logic";

export default function ImageFormatConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [target, setTarget] = useState<SupportedFormat>("image/webp");
  const [quality, setQuality] = useState(90);
  const [out, setOut] = useState("");
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const url = canvas.toDataURL(target, target === "image/png" ? undefined : quality / 100);
        setOut(url);
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
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

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.format}</span>
          <select value={target} onChange={(e) => setTarget(e.target.value as SupportedFormat)} className={inputClass}>
            {SUPPORTED_FORMATS.map((f) => <option key={f} value={f}>{f.replace("image/", "").toUpperCase()}</option>)}
          </select>
        </label>
        {target !== "image/png" && (
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.quality}: {quality}</span>
            <input type="range" min={1} max={100} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full" />
          </label>
        )}
      </div>

      {out && (
        <>
          <img src={out} alt="" className="max-h-80 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <a href={out} download={(name.replace(/\.[^.]+$/, "") || "converted") + "." + extensionFor(target)} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </>
      )}
    </div>
  );
}
