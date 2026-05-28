import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { xmlToJson } from "./logic";

export default function XmlToJsonTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState('<?xml version="1.0"?>\n<root>\n  <item id="1">Hello</item>\n  <item id="2">World</item>\n</root>');
  const { output, error } = xmlToJson(text);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={8} />
      </div>
      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}
      {!error && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
            <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <TextArea value={output} rows={10} readOnly />
        </div>
      )}
    </div>
  );
}
