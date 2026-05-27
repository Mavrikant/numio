import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { csvToJson } from "./logic";

export default function CsvToJsonTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [header, setHeader] = useState(true);
  const [delimiter, setDelimiter] = useState(",");
  const output = text.trim() === "" ? "" : csvToJson(text, header, delimiter);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={header} onChange={(e) => setHeader(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.header}
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.delimiter}</span>
          <select value={delimiter} onChange={(e) => setDelimiter(e.target.value)} className={inputClass + " w-auto"}>
            <option value=",">{ui.comma}</option>
            <option value=";">{ui.semicolon}</option>
            <option value={"\t"}>{ui.tab}</option>
          </select>
        </label>
      </div>
      <TextArea value={output} readOnly rows={8} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
