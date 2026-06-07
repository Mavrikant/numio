import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildDmarc, dmarcHost } from "./logic";

export default function DmarcGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [domain, setDomain] = useState("example.com");
  const [p, setP] = useState("reject");
  const [sp, setSp] = useState("");
  const [pct, setPct] = useState("100");
  const [rua, setRua] = useState("");
  const [ruf, setRuf] = useState("");
  const [adkim, setAdkim] = useState("");
  const [aspf, setAspf] = useState("");

  const record = buildDmarc({
    p,
    sp: sp || undefined,
    pct: pct || undefined,
    rua: rua.trim() || undefined,
    ruf: ruf.trim() || undefined,
    adkim: adkim || undefined,
    aspf: aspf || undefined,
  });
  const host = dmarcHost(domain);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.domain}</span>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} className={inputClass + " font-mono"} placeholder="example.com" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.policy}</span>
          <select value={p} onChange={(e) => setP(e.target.value)} className={inputClass}>
            <option value="none">{ui.none}</option>
            <option value="quarantine">{ui.quarantine}</option>
            <option value="reject">{ui.reject}</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.subPolicy}</span>
          <select value={sp} onChange={(e) => setSp(e.target.value)} className={inputClass}>
            <option value="">{ui.notSet}</option>
            <option value="none">{ui.none}</option>
            <option value="quarantine">{ui.quarantine}</option>
            <option value="reject">{ui.reject}</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pct}</span>
          <input type="number" min={0} max={100} value={pct} onChange={(e) => setPct(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.rua}</span>
          <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} className={inputClass + " font-mono"} placeholder="mailto:dmarc@example.com" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.ruf}</span>
          <input type="text" value={ruf} onChange={(e) => setRuf(e.target.value)} className={inputClass + " font-mono"} placeholder="mailto:forensic@example.com" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.adkim}</span>
          <select value={adkim} onChange={(e) => setAdkim(e.target.value)} className={inputClass}>
            <option value="">{ui.notSet}</option>
            <option value="s">{ui.strict}</option>
            <option value="r">{ui.relaxed}</option>
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.aspf}</span>
          <select value={aspf} onChange={(e) => setAspf(e.target.value)} className={inputClass}>
            <option value="">{ui.notSet}</option>
            <option value="s">{ui.strict}</option>
            <option value="r">{ui.relaxed}</option>
          </select>
        </label>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">{ui.hint}</p>

      <div className="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.host}</span>
          <CopyButton text={host} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <div dir="ltr" className="break-all font-mono text-xs text-slate-800 dark:text-slate-100">{host}</div>
      </div>

      <div className="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.record}</span>
          <CopyButton text={record} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <div dir="ltr" className="break-all font-mono text-xs text-slate-800 dark:text-slate-100">{record}</div>
      </div>
    </div>
  );
}
