import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { lookupMime } from "./logic";

export default function MimeTypeLookupTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("");
  const results = lookupMime(query);

  return (
    <div className="space-y-4">
      <input className={inputClass} value={query} onChange={(e) => setQuery(e.target.value)} placeholder={ui.searchPlaceholder} />
      {results.length === 0 ? (
        <p className="text-sm text-slate-400">{ui.noResults}</p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500 dark:text-slate-400">
              <th className="py-1 pr-4 font-medium">{ui.extension}</th>
              <th className="py-1 font-medium">{ui.mimeType}</th>
              <th />
            </tr>
          </thead>
          <tbody className="font-mono">
            {results.map((m) => (
              <tr key={m.ext + m.type} className="border-t border-slate-100 dark:border-slate-800">
                <td className="py-1 pr-4 text-slate-900 dark:text-slate-100">.{m.ext}</td>
                <td className="py-1 break-all text-slate-600 dark:text-slate-400">{m.type}</td>
                <td className="py-1 text-right"><CopyButton text={m.type} label={ui.copy} copiedLabel={ui.copied} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
