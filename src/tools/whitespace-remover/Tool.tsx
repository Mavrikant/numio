import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { cleanWhitespace, type WhitespaceOptions } from "./logic";

export default function WhitespaceRemoverTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [opts, setOpts] = useState<WhitespaceOptions>({
    trimLines: true,
    collapseSpaces: true,
    removeBlankLines: false,
    removeAllSpaces: false,
  });
  const output = cleanWhitespace(text, opts);
  const set = <K extends keyof WhitespaceOptions>(k: K, v: WhitespaceOptions[K]) => setOpts((o) => ({ ...o, [k]: v }));

  const toggles: ReadonlyArray<[keyof WhitespaceOptions, string]> = [
    ["trimLines", ui.trimLines],
    ["collapseSpaces", ui.collapseSpaces],
    ["removeBlankLines", ui.removeBlankLines],
    ["removeAllSpaces", ui.removeAllSpaces],
  ];

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="flex flex-wrap items-center gap-4">
        {toggles.map(([k, label]) => (
          <label key={k} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input type="checkbox" checked={opts[k]} onChange={(e) => set(k, e.target.checked)} className="h-4 w-4 accent-blue-600" />
            {label}
          </label>
        ))}
      </div>
      <TextArea value={output} readOnly rows={6} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
