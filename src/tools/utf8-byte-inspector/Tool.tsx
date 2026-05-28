import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { hexByte, hexCodePoint, inspectUtf8 } from "./logic";

export default function Utf8ByteInspectorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("Hello 👋 Café");

  const r = inspectUtf8(text);

  const cell = (label: string, value: string | number) => (
    <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 font-mono text-xl text-slate-900 dark:text-slate-100">{value}</div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={4} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {cell(ui.characters, r.characters)}
        {cell(ui.codePoints, r.codePoints)}
        {cell(ui.utf8Bytes, r.utf8Bytes)}
        {cell(ui.utf16Units, r.utf16CodeUnits)}
      </div>

      {r.entries.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.char}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.codePoint}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.utf8}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.utf16}</th>
              </tr>
            </thead>
            <tbody>
              {r.entries.map((e, i) => (
                <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-1.5 text-lg text-slate-800 dark:text-slate-100">{e.char}</td>
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{hexCodePoint(e.codePoint)}</td>
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{e.utf8.map(hexByte).join(" ")}</td>
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{e.utf16.map((c) => c.toString(16).toUpperCase().padStart(4, "0")).join(" ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
