import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildUtmUrl } from "./logic";

export default function UtmBuilderTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [url, setUrl] = useState("https://example.com/landing");
  const [source, setSource] = useState("newsletter");
  const [medium, setMedium] = useState("email");
  const [campaign, setCampaign] = useState("spring-sale");
  const [term, setTerm] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState("");

  const r = buildUtmUrl({ url, source, medium, campaign, term, content, id });

  const field = (label: string, val: string, set: (v: string) => void) => (
    <label className="block space-y-1">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{label}</span>
      <input type="text" value={val} onChange={(e) => set(e.target.value)} className={inputClass + " font-mono text-sm"} />
    </label>
  );

  return (
    <div className="space-y-4">
      {field(ui.url, url, setUrl)}
      <div className="grid gap-3 sm:grid-cols-2">
        {field(ui.source, source, setSource)}
        {field(ui.medium, medium, setMedium)}
        {field(ui.campaign, campaign, setCampaign)}
        {field(ui.term, term, setTerm)}
        {field(ui.content, content, setContent)}
        {field(ui.id, id, setId)}
      </div>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {!r.error && r.url && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
            <CopyButton text={r.url} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <code className="block break-all rounded-md bg-slate-100 px-3 py-2 font-mono text-sm text-slate-800 dark:bg-slate-800 dark:text-slate-100">{r.url}</code>
        </div>
      )}
    </div>
  );
}
