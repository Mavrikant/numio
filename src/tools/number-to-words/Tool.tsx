import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { numberToWords } from "./logic";

export default function NumberToWordsTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [value, setValue] = useState("");

  let output = "";
  let error = "";
  try {
    if (value.trim() !== "") output = numberToWords(value);
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <input className={inputClass} value={value} onChange={(e) => setValue(e.target.value)} placeholder={ui.placeholder} inputMode="numeric" />
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <TextArea value={output} readOnly rows={3} />
      )}
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400 dark:text-slate-500">{ui.note}</span>
        <CopyButton text={error ? "" : output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
