import { useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { OCR_LANGUAGES, cleanOcrText } from "./logic";

export default function ImageToTextOcrTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [lang, setLang] = useState("eng");
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    setError("");
    setText("");
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };

  const extract = async () => {
    if (!src) return;
    setBusy(true);
    setError("");
    setText("");
    setProgress(0);
    try {
      // Lazy-load the OCR engine only when the user runs it; it fetches its WASM
      // core and language data from a CDN on first use.
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker(lang, 1, {
        logger: (m: { status: string; progress: number }) => {
          if (m.status === "recognizing text") setProgress(Math.round(m.progress * 100));
        },
      });
      const { data } = await worker.recognize(src);
      await worker.terminate();
      setText(cleanOcrText(data.text));
    } catch {
      setError(ui.failed);
    } finally {
      setBusy(false);
    }
  };

  const download = () => {
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "extracted-text.txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); load(e.dataTransfer.files[0]); }}
        className="flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-slate-300 px-4 py-10 text-sm text-slate-500 hover:border-blue-400 dark:border-slate-600 dark:text-slate-400"
      >
        {ui.drop}
      </button>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => load(e.target.files?.[0])} />

      {src && (
        <>
          <img src={src} alt="" className="max-h-64 rounded-lg border border-slate-200 dark:border-slate-700" />
          <div className="flex flex-wrap items-end gap-3">
            <label className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.language}</span>
              <select value={lang} onChange={(e) => setLang(e.target.value)} className={inputClass + " w-auto"}>
                {OCR_LANGUAGES.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
              </select>
            </label>
            <button type="button" onClick={extract} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
              {busy ? `${ui.working} ${progress}%` : ui.extract}
            </button>
          </div>
        </>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400">{ui.engineNote}</p>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>
      )}

      {text && (
        <div className="space-y-2">
          <TextArea value={text} readOnly rows={10} />
          <div className="flex gap-2">
            <CopyButton text={text} label={ui.copy} copiedLabel={ui.copied} />
            <button type="button" onClick={download} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
              {ui.download}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
