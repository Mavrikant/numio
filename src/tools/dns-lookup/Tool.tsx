import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { RECORD_TYPES, dohQuery, type DnsAnswer, type RecordType } from "./logic";

export default function DnsLookupTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [hostname, setHostname] = useState("example.com");
  const [type, setType] = useState<RecordType>("A");
  const [answers, setAnswers] = useState<DnsAnswer[]>([]);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const run = async () => {
    setBusy(true);
    setError("");
    const r = await dohQuery(hostname, type);
    setAnswers(r.answers);
    setStatus(r.status);
    setError(r.error ?? "");
    setBusy(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_140px_120px]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.hostname}</span>
          <input type="text" value={hostname} onChange={(e) => setHostname(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.type}</span>
          <select value={type} onChange={(e) => setType(e.target.value as RecordType)} className={inputClass}>
            {RECORD_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </label>
        <button type="button" onClick={run} disabled={busy || !hostname.trim()} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.run}
        </button>
      </div>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {status && (
        <div className="text-sm text-slate-600 dark:text-slate-300">{ui.status}: <code className="font-mono">{status}</code></div>
      )}

      {answers.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.name}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.ttl}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.data}</th>
              </tr>
            </thead>
            <tbody>
              {answers.map((a, i) => (
                <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{a.name}</td>
                  <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{a.TTL}</td>
                  <td className="px-3 py-1.5 break-all font-mono text-xs text-slate-800 dark:text-slate-100">{a.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        status && <div className="rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">{ui.noAnswers}</div>
      )}
    </div>
  );
}
