import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import { dohQuery, txtRecords } from "../_shared/doh";
import definition from "./definition";
import { assembleReport, answerData, type CheckRow } from "./logic";

const PILL: Record<CheckRow["status"], string> = {
  ok: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-300",
  warn: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  fail: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-300",
};

export default function DnsHealthCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [domain, setDomain] = useState("example.com");
  const [rows, setRows] = useState<CheckRow[]>([]);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  useEffect(() => () => ctrl.current?.abort(), []);

  const run = async () => {
    ctrl.current?.abort();
    const controller = new AbortController();
    ctrl.current = controller;
    const { signal } = controller;
    setBusy(true);
    setError("");
    setRows([]);
    const name = domain.trim();

    const [ns, a, aaaa, mx, spf, dmarc] = await Promise.all([
      dohQuery(name, "NS", signal),
      dohQuery(name, "A", signal),
      dohQuery(name, "AAAA", signal),
      dohQuery(name, "MX", signal),
      txtRecords(name, signal),
      txtRecords("_dmarc." + name, signal),
    ]);
    if (signal.aborted) return;

    // Surface an error only when every lookup failed (e.g. CORS / rate-limit /
    // offline). Partial failures still render the rows that succeeded.
    const allFailed =
      ns.error && a.error && aaaa.error && mx.error && spf.error && dmarc.error;
    if (allFailed) {
      setError(ui.unavailable);
      setBusy(false);
      return;
    }

    setRows(
      assembleReport({
        ns: answerData(ns.answers),
        a: answerData(a.answers),
        aaaa: answerData(aaaa.answers),
        mx: answerData(mx.answers),
        spfTxt: spf.records,
        dmarcTxt: dmarc.records,
      }),
    );
    setBusy(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_120px]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.domain}</span>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} className={inputClass + " font-mono"} placeholder={ui.placeholder} />
        </label>
        <button type="button" onClick={run} disabled={busy || !domain.trim()} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.run}
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {rows.length > 0 && (
        <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.check}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.status}</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.detail}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.check} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-2 font-mono text-xs font-semibold text-slate-700 dark:text-slate-200">{r.check}</td>
                  <td className="px-3 py-2">
                    <span className={"inline-block rounded-full px-2 py-0.5 text-xs font-semibold uppercase " + PILL[r.status]}>{r.status}</span>
                  </td>
                  <td className="px-3 py-2 break-all font-mono text-xs text-slate-800 dark:text-slate-100" dir="ltr">{r.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
