import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { validateIban } from "./logic";

export default function IbanValidatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const result = validateIban(text);
  const show = text.trim() !== "";

  const row = (label: string, value: string) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 py-1.5 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value || "—"}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={2} />
      </div>

      {show && (
        <>
          <div
            className={
              "rounded-md border px-3 py-2 text-sm font-medium " +
              (result.valid
                ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
                : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300")
            }
          >
            {result.valid ? ui.valid : result.error || ui.invalid}
          </div>

          <div className="rounded-lg border border-slate-200 px-4 py-2 dark:border-slate-700">
            {row(ui.country, result.country)}
            {row(ui.checkDigits, result.checkDigits)}
            {row(ui.bban, result.bban)}
          </div>

          {result.formatted && (
            <div className="flex items-center gap-3">
              <code className="flex-1 overflow-x-auto rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                {result.formatted}
              </code>
              <CopyButton text={result.formatted} label={ui.copy} copiedLabel={ui.copied} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
