import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildRewrite, type RewriteOutput } from "./logic";

export default function UrlRewriteGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [pretty, setPretty] = useState("/product/:id/:slug");
  const [target, setTarget] = useState("product.php?id=$1&slug=$2");

  let result: RewriteOutput | null = null;
  let error = "";
  try {
    result = buildRewrite({ pretty, target });
  } catch {
    error = ui.invalid;
  }

  const blocks: ReadonlyArray<[string, string]> = result
    ? [[ui.apache, result.apache], [ui.nginx, result.nginx]]
    : [];

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pretty}</span>
        <input className={inputClass} value={pretty} onChange={(e) => setPretty(e.target.value)} placeholder={ui.prettyPlaceholder} />
      </label>
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.target}</span>
        <input className={inputClass} value={target} onChange={(e) => setTarget(e.target.value)} placeholder={ui.targetPlaceholder} />
      </label>
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        blocks.map(([label, code]) => (
          <div key={label} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
              <CopyButton text={code} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <pre dir="ltr" className="overflow-x-auto rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-sm break-all whitespace-pre-wrap text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">{code}</pre>
          </div>
        ))
      )}
    </div>
  );
}
