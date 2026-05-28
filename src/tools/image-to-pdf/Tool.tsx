import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { imagesToPdf, type PageSize } from "./logic";
import { downloadBytes } from "../_shared/pdf";

export default function ImageToPdfTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [files, setFiles] = useState<File[]>([]);
  const [pageSize, setPageSize] = useState<PageSize>("fit");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const add = (list: FileList | null) => {
    if (!list) return;
    setFiles((prev) => [...prev, ...Array.from(list).filter((f) => f.type === "image/jpeg" || f.type === "image/png")]);
  };

  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= files.length) return;
    const next = files.slice();
    [next[i], next[j]] = [next[j]!, next[i]!];
    setFiles(next);
  };

  const remove = (i: number) => setFiles(files.filter((_, j) => j !== i));

  const run = async () => {
    if (files.length === 0) return;
    setBusy(true);
    try {
      const images = await Promise.all(
        files.map(async (f) => ({
          bytes: new Uint8Array(await f.arrayBuffer()),
          type: f.type as "image/jpeg" | "image/png",
        })),
      );
      const out = await imagesToPdf(images, pageSize);
      downloadBytes(out, "images.pdf");
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
        onDrop={(e) => { e.preventDefault(); add(e.dataTransfer.files); }}
        className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-4 py-10 text-sm text-slate-500 hover:border-blue-400 dark:border-slate-600 dark:text-slate-400"
      >
        {ui.drop}
      </button>
      <input ref={inputRef} type="file" accept="image/jpeg,image/png" multiple className="hidden" onChange={(e) => add(e.target.files)} />

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pageSize}</span>
        <select value={pageSize} onChange={(e) => setPageSize(e.target.value as PageSize)} className={inputClass + " w-auto"}>
          <option value="fit">{ui.fit}</option>
          <option value="a4">{ui.a4}</option>
          <option value="letter">{ui.letter}</option>
        </select>
      </label>

      {files.length > 0 && (
        <div className="rounded-lg border border-slate-200 dark:border-slate-700">
          {files.map((f, i) => (
            <div key={i} className="flex items-center gap-2 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
              <span className="w-6 text-sm font-medium text-slate-500">{i + 1}.</span>
              <span className="flex-1 truncate text-sm text-slate-800 dark:text-slate-100">{f.name}</span>
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0} className="px-2 text-slate-500 hover:text-slate-800 disabled:opacity-30 dark:text-slate-400 dark:hover:text-slate-200" title={ui.up}>↑</button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === files.length - 1} className="px-2 text-slate-500 hover:text-slate-800 disabled:opacity-30 dark:text-slate-400 dark:hover:text-slate-200" title={ui.down}>↓</button>
              <button type="button" onClick={() => remove(i)} className="px-2 text-red-600 hover:text-red-800 dark:text-red-400" title={ui.remove}>×</button>
            </div>
          ))}
        </div>
      )}

      <button type="button" onClick={run} disabled={busy || files.length === 0} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
        {busy ? "…" : ui.build}
      </button>
    </div>
  );
}
