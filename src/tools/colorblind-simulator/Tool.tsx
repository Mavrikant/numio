import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { simulateRgba, type ColorBlindness } from "./logic";

const KINDS: ColorBlindness[] = ["protanopia", "deuteranopia", "tritanopia", "achromatopsia"];

export default function ColorblindSimulatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [src, setSrc] = useState("");
  const [kind, setKind] = useState<ColorBlindness>("deuteranopia");
  const [out, setOut] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const load = (file: File | undefined) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (!src) {
      setOut("");
      return;
    }
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      simulateRgba(data.data, kind);
      ctx.putImageData(data, 0, 0);
      setOut(canvas.toDataURL("image/png"));
    };
    img.src = src;
  }, [src, kind]);

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
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.kind}</span>
            <select value={kind} onChange={(e) => setKind(e.target.value as ColorBlindness)} className={inputClass + " w-auto"}>
              {KINDS.map((k) => <option key={k} value={k}>{ui[k]}</option>)}
            </select>
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.original}</span>
              <img src={src} alt="" className="max-h-72 w-full rounded-lg border border-slate-200 object-contain dark:border-slate-700" />
            </div>
            <div className="space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.simulated}</span>
              {out && <img src={out} alt="" className="max-h-72 w-full rounded-lg border border-slate-200 object-contain dark:border-slate-700" />}
            </div>
          </div>
          {out && (
            <a href={out} download={`simulated-${kind}.png`} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              {ui.download}
            </a>
          )}
        </>
      )}
    </div>
  );
}
