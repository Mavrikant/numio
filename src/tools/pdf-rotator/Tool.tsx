import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { rotatePdfPages, parsePageRanges, downloadBytes, type Rotation } from "./logic";

export default function PdfRotatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [bytes, setBytes] = useState<Uint8Array | null>(null);
  const [angle, setAngle] = useState<Rotation>(90);
  const [pages, setPages] = useState("");
  const [busy, setBusy] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || file.type !== "application/pdf") return;
    file.arrayBuffer().then((buf) => setBytes(new Uint8Array(buf)));
  };

  const run = async () => {
    if (!bytes) return;
    setBusy(true);
    try {
      // We pass a generous upper bound so all listed pages are kept; pdf-lib will skip out-of-range indices.
      const indices = pages.trim() === "" ? [] : parsePageRanges(pages, 10000);
      const out = await rotatePdfPages(bytes, indices, angle);
      downloadBytes(out, "rotated.pdf");
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
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.angle}</span>
              <select value={angle} onChange={(e) => setAngle(Number(e.target.value) as Rotation)} className={inputClass + " w-auto"}>
                <option value={90}>90°</option>
                <option value={180}>180°</option>
                <option value={270}>270°</option>
              </select>
            </label>
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pages}</span>
              <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="1,3-5" className={inputClass + " font-mono"} />
            </label>
          </div>
          <button type="button" onClick={run} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
            {busy ? "…" : ui.run}
          </button>
        </>
      )}
    </div>
  );
}
