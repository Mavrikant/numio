import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { domainToAscii, domainToUnicode } from "./logic";

export default function PunycodeConverterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [value, setValue] = useState("münchen.de");

  let unicode = "";
  let ascii = "";
  let error = "";
  const trimmed = value.trim();
  if (trimmed !== "") {
    try {
      unicode = domainToUnicode(trimmed);
      ascii = domainToAscii(unicode);
    } catch {
      error = ui.invalid;
    }
  }

  const swap = () => {
    if (!ascii) return;
    // Toggle the input between the ASCII (xn--) and Unicode representations.
    setValue(trimmed === ascii ? unicode : ascii);
  };

  const rows: ReadonlyArray<[string, string]> = error
    ? []
    : [[ui.unicode, unicode], [ui.ascii, ascii]];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block flex-1 space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.domain}</span>
          <input className={inputClass} value={value} onChange={(e) => setValue(e.target.value)} placeholder={ui.placeholder} dir="ltr" />
        </label>
        <button
          type="button"
          onClick={swap}
          disabled={!ascii}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.swap}
        </button>
      </div>
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <dl className="space-y-2">
          {rows.map(([label, val]) => (
            <div key={label} className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
              <dd className="flex items-center gap-2">
                <span dir="ltr" className="break-all font-mono text-sm text-slate-900 dark:text-slate-100">{val}</span>
                <CopyButton text={val} label={ui.copy} copiedLabel={ui.copied} />
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
