import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { slugify } from "./logic";

export default function SlugifyTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [separator, setSeparator] = useState<"-" | "_">("-");
  const [lowercase, setLowercase] = useState(true);
  const output = slugify(text, separator, lowercase);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={3} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.separator}</span>
          <select
            value={separator}
            onChange={(e) => setSeparator(e.target.value as "-" | "_")}
            className={inputClass + " w-auto"}
          >
            <option value="-">{ui.hyphen}</option>
            <option value="_">{ui.underscore}</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.lowercase}
        </label>
      </div>
      <input className={inputClass} value={output} readOnly />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
