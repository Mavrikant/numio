import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { convertColor } from "./logic";

export default function ColorConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("#3b82f6");
  const result = convertColor(text);

  const rows: ReadonlyArray<[string, string]> = result
    ? [["HEX", result.hex], ["RGB", result.rgb], ["HSL", result.hsl]]
    : [];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={result ? result.hex : "#000000"}
          onChange={(e) => setText(e.target.value)}
          className="h-10 w-12 cursor-pointer rounded border border-slate-300 dark:border-slate-600"
          aria-label={ui.preview}
        />
        <input className={inputClass} value={text} onChange={(e) => setText(e.target.value)} placeholder={ui.placeholder} />
      </div>

      {!result ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.invalid}
        </div>
      ) : (
        <>
          <div
            className="h-20 rounded-lg border border-slate-200 dark:border-slate-700"
            style={{ backgroundColor: result.hex }}
            aria-label={ui.preview}
          />
          <dl className="space-y-2">
            {rows.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
                <dd className="flex items-center gap-2">
                  <span className="font-mono text-sm text-slate-900 dark:text-slate-100">{value}</span>
                  <CopyButton text={value} label={ui.copy} copiedLabel={ui.copied} />
                </dd>
              </div>
            ))}
          </dl>
        </>
      )}
    </div>
  );
}
