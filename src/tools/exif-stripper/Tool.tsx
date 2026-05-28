import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import definition from "./definition";
import { stripJpegMetadata } from "./logic";
import { humanFileSize } from "../_shared/image";

export default function ExifStripperTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [origSize, setOrigSize] = useState(0);
  const [strippedSize, setStrippedSize] = useState(0);
  const [dataUrl, setDataUrl] = useState("");
  const [name, setName] = useState("");
  const [ext, setExt] = useState("jpg");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setName(file.name);
    setOrigSize(file.size);
    if (file.type === "image/jpeg") {
      setExt("jpg");
      file.arrayBuffer().then((buf) => {
        const cleaned = stripJpegMetadata(new Uint8Array(buf));
        setStrippedSize(cleaned.length);
        const blob = new Blob([cleaned as BlobPart], { type: "image/jpeg" });
        setDataUrl(URL.createObjectURL(blob));
      });
      return;
    }
    // Re-encode through canvas to drop metadata for non-JPEG inputs.
    const outMime = file.type === "image/png" ? "image/png" : "image/webp";
    setExt(file.type === "image/png" ? "png" : "webp");
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
        const url = canvas.toDataURL(outMime, 0.92);
        setDataUrl(url);
        const base64 = url.split(",")[1] ?? "";
        setStrippedSize(Math.floor(base64.length * 0.75));
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
    };
    reader.readAsDataURL(file);
  };

  const reduction = origSize > 0 ? Math.max(0, Math.round((1 - strippedSize / origSize) * 100)) : 0;

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

      {dataUrl && (
        <>
          <div className="flex flex-wrap items-center gap-6 rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
            <div className="text-sm"><span className="text-slate-500">{ui.originalSize}: </span><code className="font-mono">{humanFileSize(origSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.strippedSize}: </span><code className="font-mono">{humanFileSize(strippedSize)}</code></div>
            <div className="text-sm"><span className="text-slate-500">{ui.reduction}: </span><code className="font-mono text-green-700 dark:text-green-300">{reduction}%</code></div>
          </div>
          <img src={dataUrl} alt="" className="max-h-80 max-w-full rounded-lg border border-slate-200 dark:border-slate-700" />
          <a href={dataUrl} download={(name.replace(/\.[^.]+$/, "") || "cleaned") + "." + ext} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </>
      )}
    </div>
  );
}
