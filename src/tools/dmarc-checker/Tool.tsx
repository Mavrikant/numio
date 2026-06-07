import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import { txtRecords } from "../_shared/doh";
import definition from "./definition";
import { parseDmarc, findDmarcRecord, type DmarcResult } from "./logic";

export default function DmarcCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [domain, setDomain] = useState("example.com");
  const [record, setRecord] = useState("");
  const [parsed, setParsed] = useState<DmarcResult | null>(null);
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
    const host = `_dmarc.${domain.trim()}`;
    const r = await txtRecords(host, controller.signal);
    if (controller.signal.aborted) return;
    if (r.error) {
      setError(r.error);
      setBusy(false);
      return;
    }
    const dmarc = findDmarcRecord(r.records);
    if (!dmarc) {
      setNotFound(true);
      setBusy(false);
      return;
    }
    setRecord(dmarc);
    setParsed(parseDmarc(dmarc));
    setBusy(false);
  };

  const rows: ReadonlyArray<[string, string]> = parsed
    ? [
        ...(parsed.p !== undefined ? [[ui.policy, parsed.p] as [string, string]] : []),
        ...(parsed.sp !== undefined ? [[ui.subPolicy, parsed.sp] as [string, string]] : []),
        ...(parsed.pct !== undefined ? [[ui.pct, parsed.pct] as [string, string]] : []),
        ...(parsed.adkim !== undefined ? [[`${ui.alignment} (adkim)`, parsed.adkim] as [string, string]] : []),
        ...(parsed.aspf !== undefined ? [[`${ui.alignment} (aspf)`, parsed.aspf] as [string, string]] : []),
        ...(parsed.rua.length ? [[ui.rua, parsed.rua.join(", ")] as [string, string]] : []),
        ...(parsed.ruf.length ? [[ui.ruf, parsed.ruf.join(", ")] as [string, string]] : []),
      ]
    : [];

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

          {rows.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
              <table className="w-full text-sm">
                <tbody>
                  {rows.map(([label, val]) => (
                    <tr key={label} className="border-t border-slate-100 first:border-t-0 dark:border-slate-800">
                      <td className="px-3 py-1.5 font-medium text-slate-500 dark:text-slate-400">{label}</td>
                      <td dir="ltr" className="px-3 py-1.5 break-all font-mono text-xs text-slate-800 dark:text-slate-100">{val}</td>
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
