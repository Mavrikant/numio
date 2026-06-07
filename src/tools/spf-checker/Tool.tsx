import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import { txtRecords } from "../_shared/doh";
import definition from "./definition";
import { parseSpf, findSpfRecord, type SpfResult } from "./logic";

export default function SpfCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [domain, setDomain] = useState("example.com");
  const [record, setRecord] = useState("");
  const [parsed, setParsed] = useState<SpfResult | null>(null);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [busy, setBusy] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  useEffect(() => () => ctrl.current?.abort(), []);

  const run = async () => {
    ctrl.current?.abort();
    const controller = new AbortController();
    ctrl.current = controller;
    setBusy(true);
    setError("");
    setNotFound(false);
    setParsed(null);
    setRecord("");
    const r = await txtRecords(domain.trim(), controller.signal);
    if (controller.signal.aborted) return;
    if (r.error) {
      setError(r.error);
      setBusy(false);
      return;
    }
    const spf = findSpfRecord(r.records);
    if (!spf) {
      setNotFound(true);
      setBusy(false);
      return;
    }
    setRecord(spf);
    setParsed(parseSpf(spf));
    setBusy(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_120px]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.domain}</span>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} className={inputClass + " font-mono"} placeholder="example.com" />
        </label>
        <button type="button" onClick={run} disabled={busy || !domain.trim()} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.check}
        </button>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">{ui.hint}</p>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {notFound && <div className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">{ui.noRecord}</div>}

      {parsed && (
        <div className="space-y-4">
          <div className="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.record}</span>
              <CopyButton text={record} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <div dir="ltr" className="break-all font-mono text-xs text-slate-800 dark:text-slate-100">{record}</div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
            <span>{ui.lookups}: <code className="font-mono">{parsed.dnsLookupCount}</code></span>
            {parsed.all && <span>all: <code className="font-mono">{parsed.all}</code></span>}
          </div>

          {parsed.mechanisms.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.mechanisms}</th>
                  </tr>
                </thead>
                <tbody>
                  {parsed.mechanisms.map((m, i) => (
                    <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                      <td dir="ltr" className="px-3 py-1.5 break-all font-mono text-xs text-slate-800 dark:text-slate-100">
                        {m.qualifier !== "+" ? m.qualifier : ""}{m.type}{m.value !== undefined ? `:${m.value}` : ""}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {parsed.warnings.length > 0 && (
            <div className="space-y-1 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/30 dark:text-amber-300">
              {parsed.warnings.map((w, i) => <div key={i}>{w}</div>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
