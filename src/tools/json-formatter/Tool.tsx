import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { formatJson, minifyJson } from "./logic";

export default function JsonFormatterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [indent, setIndent] = useState<"2" | "4" | "tab">("2");

  const run = (mode: "format" | "minify") => {
    try {
      const out =
        mode === "minify"
          ? minifyJson(text)
          : formatJson(text, indent === "tab" ? "\t" : Number(indent));
      setText(out);
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };
  const [error, setError] = useState("");

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={10} />
      <div className="flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.indent}</span>
          <select value={indent} onChange={(e) => setIndent(e.target.value as "2" | "4" | "tab")} className={inputClass + " w-auto"}>
            <option value="2">2 {ui.spaces}</option>
            <option value="4">4 {ui.spaces}</option>
            <option value="tab">{ui.tab}</option>
          </select>
        </label>
        <button type="button" onClick={() => run("format")} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.format}
        </button>
        <button type="button" onClick={() => run("minify")} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
          {ui.minify}
        </button>
        <CopyButton text={text} label={ui.copy} copiedLabel={ui.copied} />
      </div>
      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}
    </div>
  );
}
