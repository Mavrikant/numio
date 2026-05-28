import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildHtaccess, type RedirectRule } from "./logic";

export default function HtaccessRedirectGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [rules, setRules] = useState<RedirectRule[]>([{ from: "/old", to: "https://example.com/new", status: "301" }]);

  const update = (i: number, patch: Partial<RedirectRule>) => setRules(rules.map((r, j) => j === i ? { ...r, ...patch } : r));
  const remove = (i: number) => setRules(rules.filter((_, j) => j !== i));
  const add = () => setRules([...rules, { from: "", to: "", status: "301" }]);

  const output = buildHtaccess(rules);

  return (
    <div className="space-y-4">
      {rules.map((r, i) => (
        <div key={i} className="grid items-end gap-2 rounded-lg border border-slate-200 p-3 sm:grid-cols-[1fr_1fr_100px_auto] dark:border-slate-700">
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.from}</span>
            <input type="text" value={r.from} onChange={(e) => update(i, { from: e.target.value })} className={inputClass + " font-mono"} />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.to}</span>
            <input type="text" value={r.to} onChange={(e) => update(i, { to: e.target.value })} className={inputClass + " font-mono"} />
          </label>
          <label className="block space-y-1">
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{ui.status}</span>
            <select value={r.status} onChange={(e) => update(i, { status: e.target.value as "301" | "302" })} className={inputClass}>
              <option value="301">301</option>
              <option value="302">302</option>
            </select>
          </label>
          <button type="button" onClick={() => remove(i)} className="rounded-md border border-slate-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:border-slate-600 dark:hover:bg-red-950/30">×</button>
        </div>
      ))}

      <button type="button" onClick={add} className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
        {ui.add}
      </button>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={output} rows={8} readOnly />
      </div>
    </div>
  );
}
