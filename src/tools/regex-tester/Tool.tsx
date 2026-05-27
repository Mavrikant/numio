import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { getMatches, type RegexMatch } from "./logic";

export default function RegexTesterTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState("");

  let matches: RegexMatch[] = [];
  let error = "";
  try {
    matches = getMatches(pattern, flags, text);
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <label className="flex-1 space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pattern}</span>
          <input className={inputClass} value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="\\d+" />
        </label>
        <label className="w-28 space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.flags}</span>
          <input className={inputClass} value={flags} onChange={(e) => setFlags(e.target.value)} placeholder="gi" />
        </label>
      </div>
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={6} />
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : pattern !== "" ? (
        <div>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{matches.length} {ui.matches}</p>
          {matches.length === 0 ? (
            <p className="text-sm text-slate-400">{ui.noMatches}</p>
          ) : (
            <ul className="space-y-1.5">
              {matches.slice(0, 200).map((m, i) => (
                <li key={i} className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm dark:border-slate-700 dark:bg-slate-900">
                  <span className="font-mono font-medium text-slate-900 dark:text-slate-100">{m.match || "∅"}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{ui.index}: {m.index}</span>
                  {m.groups.length > 0 && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">{ui.groups}: [{m.groups.map((g) => (g === undefined ? "∅" : g)).join(", ")}]</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
    </div>
  );
}
