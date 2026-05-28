import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { extractPages, readPageCount, parsePageRanges } from "./logic";
import { downloadBytes } from "../_shared/pdf";

export default function PdfSplitterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState("1");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || file.type !== "application/pdf") return;
    file.arrayBuffer().then(async (buf) => {
      const u8 = new Uint8Array(buf);
      setBytes(u8);
      setCount(await readPageCount(u8));
    });
  };

  const run = async () => {
    if (!bytes) return;
    setBusy(true);
    try {
      const indices = parsePageRanges(pages, count);
      const out = await extractPages(bytes, indices);
      downloadBytes(out, "extracted.pdf");
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
        onDrop={(e) => { e.preventDefault(); load(e.dataTransfer.files[0]); }}
        className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-4 py-10 text-sm text-slate-500 hover:border-blue-400 dark:border-slate-600 dark:text-slate-400"
      >
        {ui.drop}
      </button>
      <input ref={inputRef} type="file" accept="application/pdf" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      {bytes && (
        <>
          <div className="text-sm text-slate-600 dark:text-slate-300">{ui.totalPages}: <code className="font-mono">{count}</code></div>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pages}</span>
            <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} className={inputClass + " font-mono"} />
          </label>
          <button type="button" onClick={run} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {busy ? "…" : ui.split}
          </button>
        </>
      )}
    </div>
  );
}
