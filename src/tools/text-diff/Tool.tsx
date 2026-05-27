import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { diffLines, diffStats } from "./logic";

export default function TextDiffTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const show = a !== "" || b !== "";
  const ops = show ? diffLines(a, b) : [];
  const stats = diffStats(ops);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.original}</span>
          <TextArea value={a} onChange={setA} placeholder={ui.placeholder} rows={8} />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.changed}</span>
          <TextArea value={b} onChange={setB} placeholder={ui.placeholder} rows={8} />
        </label>
      </div>
      {show && (
        <>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <span className="text-green-600 dark:text-green-400">+{stats.added} {ui.added}</span>
            {" · "}
            <span className="text-red-600 dark:text-red-400">−{stats.removed} {ui.removed}</span>
          </p>
          {stats.added === 0 && stats.removed === 0 ? (
            <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">{ui.identical}</p>
          ) : (
            <pre className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 text-sm dark:border-slate-700 dark:bg-slate-900">
              {ops.map((op, i) => (
                <div
                  key={i}
                  className={
                    "whitespace-pre-wrap font-mono " +
                    (op.type === "add"
                      ? "bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-300"
                      : op.type === "del"
                        ? "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-300"
                        : "text-slate-600 dark:text-slate-400")
                  }
                >
                  {op.type === "add" ? "+ " : op.type === "del" ? "− " : "  "}
                  {op.value || " "}
                </div>
              ))}
            </pre>
          )}
        </>
      )}
    </div>
  );
}
