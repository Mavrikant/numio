import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { humanFileSize } from "./logic";

type Format = "image/jpeg" | "image/webp";

export default function ImageCompressorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [format, setFormat] = useState<Format>("image/jpeg");
  const [quality, setQuality] = useState(80);
  const [name, setName] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [dataUrl, setDataUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const compress = (file: File) => {
    setName(file.name);
    setOriginalSize(file.size);
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
        const url = canvas.toDataURL(format, quality / 100);
        setDataUrl(url);
        // Estimate compressed size from the data URL length (base64 overhead is ~33%).
        const base64Len = url.split(",")[1]?.length ?? 0;
        setCompressedSize(Math.floor(base64Len * 0.75));
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
    };
    reader.readAsDataURL(file);
  };

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    compress(file);
  };

  const reduction = originalSize > 0 ? Math.max(0, Math.round((1 - compressedSize / originalSize) * 100)) : 0;
  const ext = format === "image/jpeg" ? "jpg" : "webp";

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
          <select value={format} onChange={(e) => setFormat(e.target.value as Format)} className={inputClass}>
            <option value="image/jpeg">JPEG</option>
            <option value="image/webp">WebP</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.quality}: {quality}</span>
          <input type="range" min={1} max={100} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="w-full" />
        </label>
      </div>

      {dataUrl && (
        <>
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="text-sm"><span className="text-slate-500">{ui.originalSize}: </span><code className="font-mono">{humanFileSize(originalSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.compressedSize}: </span><code className="font-mono">{humanFileSize(compressedSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.reduction}: </span><code className="font-mono text-green-700 dark:text-green-300">{reduction}%</code></div>
          </div>
          <img src={dataUrl} alt="" className="max-h-80 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <a href={dataUrl} download={(name.replace(/\.[^.]+$/, "") || "compressed") + "." + ext} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </>
      )}
    </div>
  );
}
