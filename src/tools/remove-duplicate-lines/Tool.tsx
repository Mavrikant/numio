import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { processLines, type LineOptions } from "./logic";

export default function RemoveDuplicateLinesTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [opts, setOpts] = useState<LineOptions>({
    dedupe: true,
    trim: false,
    removeEmpty: false,
    caseInsensitive: false,
    sort: "none",
  });
  const output = processLines(text, opts);
  const set = <K extends keyof LineOptions>(k: K, v: LineOptions[K]) => setOpts((o) => ({ ...o, [k]: v }));

  const toggles: ReadonlyArray<[keyof LineOptions, string]> = [
    ["dedupe", ui.dedupe],
    ["trim", ui.trim],
    ["removeEmpty", ui.removeEmpty],
    ["caseInsensitive", ui.caseInsensitive],
  ];

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={7} />
      <div className="flex flex-wrap items-center gap-4">
        {toggles.map(([k, label]) => (
          <label key={k} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input type="checkbox" checked={opts[k] as boolean} onChange={(e) => set(k, e.target.checked as never)} className="h-4 w-4 accent-blue-600" />
            {label}
          </label>
        ))}
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.sort}</span>
          <select value={opts.sort} onChange={(e) => set("sort", e.target.value as LineOptions["sort"])} className={inputClass + " w-auto"}>
            <option value="none">{ui.none}</option>
            <option value="asc">{ui.asc}</option>
            <option value="desc">{ui.desc}</option>
          </select>
        </label>
      </div>
      <TextArea value={output} readOnly rows={7} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
