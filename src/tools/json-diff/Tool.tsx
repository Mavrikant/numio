import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { diffJson, type JsonDiff } from "./logic";

function badge(kind: JsonDiff["kind"], label: string): string {
  const base = "inline-block min-w-[80px] rounded px-2 py-0.5 text-xs font-semibold ";
  if (kind === "added") return base + "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300";
  if (kind === "removed") return base + "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300";
  return base + "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300";
}

export default function JsonDiffTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const { diffs, error } = diffJson(a, b);
  const labelFor = (k: JsonDiff["kind"]) => (k === "added" ? ui.added : k === "removed" ? ui.removed : ui.changed);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.left}</span>
          <TextArea value={a} onChange={setA} rows={8} />
        </div>
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.right}</span>
          <TextArea value={b} onChange={setB} rows={8} />
        </div>
      </div>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {!error && (a.trim() || b.trim()) && (
        <div className="rounded-lg border border-slate-200 dark:border-slate-700">
          {diffs.length === 0 ? (
            <div className="px-3 py-3 text-sm text-green-700 dark:text-green-300">{ui.identical}</div>
          ) : (
            diffs.map((d, i) => (
              <div key={i} className="flex flex-wrap items-start gap-2 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
                <span className={badge(d.kind, labelFor(d.kind))}>{labelFor(d.kind)}</span>
                <code className="flex-1 break-all font-mono text-sm text-slate-800 dark:text-slate-100">
                  {d.path} {d.kind === "changed" ? `: ${JSON.stringify(d.left)} → ${JSON.stringify(d.right)}` : `= ${JSON.stringify(d.value)}`}
                </code>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
