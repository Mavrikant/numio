import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton } from "@/components/tools/textToolKit";
import definition from "./definition";
import { snippets, humanFileSize } from "./logic";

export default function ImageToBase64Tool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [dataUrl, setDataUrl] = useState("");
  const [size, setSize] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    setSize(file.size);
    const reader = new FileReader();
    reader.onload = () => setDataUrl(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };

  const snip = dataUrl ? snippets(dataUrl) : null;
  const block = (label: string, value: string, rows = 3) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
        <CopyButton text={value} label={ui.copy} copiedLabel={ui.copied} />
      </div>
      <textarea readOnly value={value} rows={rows} className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 font-mono text-xs text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100" />
    </div>
  );

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          load(e.dataTransfer.files[0]);
        }}
        className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-4 py-10 text-sm text-slate-500 hover:border-blue-400 dark:border-slate-600 dark:text-slate-400"
      >
        {ui.drop}
      </button>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      {dataUrl && (
        <>
          <div className="flex items-center gap-4">
            <img src={dataUrl} alt={ui.preview} className="h-24 w-24 rounded-md border border-slate-200 object-contain dark:border-slate-700" />
            <span className="text-sm text-slate-600 dark:text-slate-300">{ui.size}: {humanFileSize(size)}</span>
          </div>
          {block(ui.dataUrl, dataUrl, 4)}
          {snip && block(ui.css, snip.css)}
          {snip && block(ui.html, snip.html)}
        </>
      )}
    </div>
  );
}
