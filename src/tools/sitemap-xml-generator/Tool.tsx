import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildSitemap, parseEntries } from "./logic";

const FREQUENCIES = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"];

export default function SitemapXmlGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("https://numio.app/\nhttps://numio.app/calculators\nhttps://numio.app/tools");
  const [lastmod, setLastmod] = useState(new Date().toISOString().slice(0, 10));
  const [changefreq, setChangefreq] = useState("weekly");
  const [priority, setPriority] = useState("0.7");

  const entries = parseEntries(text, { lastmod, changefreq, priority });
  const output = buildSitemap(entries);

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.urls}</span>
        <TextArea value={text} onChange={setText} rows={8} />
      </label>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.lastmod}</span>
          <input type="date" value={lastmod} onChange={(e) => setLastmod(e.target.value)} className={inputClass} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.changefreq}</span>
          <select value={changefreq} onChange={(e) => setChangefreq(e.target.value)} className={inputClass}>
            {FREQUENCIES.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.priority}</span>
          <input type="number" step="0.1" min={0} max={1} value={priority} onChange={(e) => setPriority(e.target.value)} className={inputClass} />
        </label>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.output}</span>
          <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TextArea value={output} rows={12} readOnly />
      </div>
    </div>
  );
}
