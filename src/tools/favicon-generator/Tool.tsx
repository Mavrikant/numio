import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { FAVICON_SIZES, buildHtmlSnippet, buildManifest } from "./logic";

export default function FaviconGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [siteName, setSiteName] = useState("My Site");
  const [previews, setPreviews] = useState<{ size: number; url: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!src) {
      setPreviews([]);
      return;
    }
    const img = new Image();
    img.onload = () => {
      const next: { size: number; url: string }[] = [];
      for (const size of FAVICON_SIZES) {
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) continue;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, size, size);
        next.push({ size, url: canvas.toDataURL("image/png") });
      }
      setPreviews(next);
    };
    img.src = src;
  }, [src]);

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

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.siteName}</span>
        <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} className={inputClass} />
      </label>

      {previews.length > 0 && (
        <>
          <div className="space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.sizes}</span>
            <div className="flex flex-wrap items-end gap-3">
              {previews.map((p) => (
                <div key={p.size} className="text-center">
                  <img src={p.url} alt="" width={Math.min(64, p.size)} height={Math.min(64, p.size)} className="rounded border border-slate-200 dark:border-slate-700" />
                  <a href={p.url} download={`favicon-${p.size}x${p.size}.png`} className="mt-1 block text-xs text-blue-600 hover:underline dark:text-blue-400">{p.size}px</a>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.html}</span>
              <CopyButton text={buildHtmlSnippet()} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={buildHtmlSnippet()} rows={5} readOnly />
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.manifest}</span>
              <CopyButton text={buildManifest(siteName)} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={buildManifest(siteName)} rows={10} readOnly />
          </div>
        </>
      )}
    </div>
  );
}
