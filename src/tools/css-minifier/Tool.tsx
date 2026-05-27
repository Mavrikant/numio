import { useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { minifyCss } from "./logic";

export default function CssMinifierTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const run = () => setOutput(minifyCss(text));

  const origSize = new TextEncoder().encode(text).length;
  const minSize = new TextEncoder().encode(output).length;
  const savedPct = origSize > 0 && output !== "" ? (1 - minSize / origSize) * 100 : 0;

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={8} />
      <div className="flex items-center gap-3">
        <button type="button" onClick={run} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.minify}
        </button>
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
      {output !== "" && (
        <>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span>{ui.original}: <b className="text-slate-900 dark:text-slate-100">{formatNumber(origSize, locale)} B</b></span>
            <span>{ui.minified}: <b className="text-slate-900 dark:text-slate-100">{formatNumber(minSize, locale)} B</b></span>
            <span>{ui.saved}: <b className="text-green-600 dark:text-green-400">{formatNumber(savedPct, locale, { maximumFractionDigits: 1 })}%</b></span>
          </div>
          <TextArea value={output} readOnly rows={6} />
        </>
      )}
    </div>
  );
}
