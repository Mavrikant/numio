import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { asciiBanner } from "./logic";

type Style = "block" | "hash" | "dot";

export default function AsciiBannerGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("Hello");
  const [style, setStyle] = useState<Style>("block");

  const output = asciiBanner(text, style);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.style}</span>
          <select value={style} onChange={(e) => setStyle(e.target.value as Style)} className={inputClass + " w-auto"}>
            <option value="block">{ui.block}</option>
            <option value="hash">{ui.hash}</option>
            <option value="dot">{ui.dot}</option>
          </select>
        </label>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <pre className="overflow-x-auto rounded-md border border-slate-200 bg-slate-50 px-3 py-3 font-mono text-sm leading-tight text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">{output}</pre>
      </div>
    </div>
  );
}
