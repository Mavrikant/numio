import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { inspect } from "./logic";

export default function UnicodeInspectorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const rows = inspect(text).slice(0, 2000);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={3} />
      {rows.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-500 dark:text-slate-400">
                <th className="py-1 pr-4 font-medium">{ui.character}</th>
                <th className="py-1 pr-4 font-medium">{ui.codePoint}</th>
                <th className="py-1 pr-4 font-medium">{ui.decimal}</th>
                <th className="py-1 font-medium">{ui.utf8}</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="py-1 pr-4 text-lg text-slate-900 dark:text-slate-100">{r.char === " " ? "␠" : r.char}</td>
                  <td className="py-1 pr-4 text-slate-900 dark:text-slate-100">{r.hex}</td>
                  <td className="py-1 pr-4 text-slate-600 dark:text-slate-400">{r.codePoint}</td>
                  <td className="py-1 text-slate-600 dark:text-slate-400">{r.utf8}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
