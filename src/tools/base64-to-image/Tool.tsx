import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseImageInput } from "./logic";

export default function Base64ToImageTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const parsed = parseImageInput(text);
  const show = text.trim() !== "";

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={6} />
      </div>

      {show && !parsed.valid && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{ui.invalid}</div>
      )}

      {show && parsed.valid && (
        <div className="space-y-3">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.preview}</span>
          <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/50">
            <img src={parsed.dataUrl} alt={ui.preview} className="max-h-80 max-w-full object-contain" />
          </div>
          <a href={parsed.dataUrl} download={`image.${parsed.extension}`} className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </div>
      )}
    </div>
  );
}
