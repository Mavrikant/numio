import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { findReplace, countMatches, type ReplaceOptions } from "./logic";

export default function FindAndReplaceTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [opts, setOpts] = useState<ReplaceOptions>({ caseInsensitive: false, regex: false });

  let output = text;
  let count = 0;
  let error = "";
  try {
    output = findReplace(text, find, replace, opts);
    count = countMatches(text, find, opts);
  } catch {
    error = ui.invalidRegex;
  }

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.find}</span>
          <input className={inputClass} value={find} onChange={(e) => setFind(e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.replaceWith}</span>
          <input className={inputClass} value={replace} onChange={(e) => setReplace(e.target.value)} />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={opts.caseInsensitive} onChange={(e) => setOpts((o) => ({ ...o, caseInsensitive: e.target.checked }))} className="h-4 w-4 accent-blue-600" />
          {ui.caseInsensitive}
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={opts.regex} onChange={(e) => setOpts((o) => ({ ...o, regex: e.target.checked }))} className="h-4 w-4 accent-blue-600" />
          {ui.regex}
        </label>
        {!error && find !== "" && (
          <span className="text-sm text-slate-500 dark:text-slate-400">{count} {ui.matches}</span>
        )}
      </div>
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <TextArea value={output} readOnly rows={6} />
      )}
      <div className="flex justify-end">
        <CopyButton text={error ? "" : output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
