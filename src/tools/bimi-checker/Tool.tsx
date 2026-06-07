import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import { txtRecords } from "../_shared/doh";
import definition from "./definition";
import { parseBimi, buildBimi, type BimiResult } from "./logic";

type Mode = "check" | "generate";

export default function BimiCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("check");

  // Check mode state
  const [domain, setDomain] = useState("example.com");
  const [record, setRecord] = useState("");
  const [parsed, setParsed] = useState<BimiResult | null>(null);
  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [busy, setBusy] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  // Generate mode state
  const [logoUrl, setLogoUrl] = useState("");
  const [vmcUrl, setVmcUrl] = useState("");

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
    const host = `default._bimi.${domain.trim()}`;
    const r = await txtRecords(host, controller.signal);
    if (controller.signal.aborted) return;
    if (r.error) {
      setError(r.error);
      setBusy(false);
      return;
    }
    const bimi = r.records.find((rec) => rec.trim().toLowerCase().startsWith("v=bimi1"));
    if (!bimi) {
      setNotFound(true);
      setBusy(false);
      return;
    }
    setRecord(bimi);
    setParsed(parseBimi(bimi));
    setBusy(false);
  };

  const generated = logoUrl.trim() ? buildBimi({ l: logoUrl, a: vmcUrl }) : "";

  const tabClass = (active: boolean) =>
    `rounded-md px-3 py-1.5 text-sm font-medium ${active ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"}`;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button type="button" onClick={() => setMode("check")} className={tabClass(mode === "check")}>{ui.tabCheck}</button>
        <button type="button" onClick={() => setMode("generate")} className={tabClass(mode === "generate")}>{ui.tabGenerate}</button>
      </div>

      {mode === "check" ? (
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

              <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
                <table className="w-full text-sm">
                  <tbody>
                    {parsed.l !== undefined && (
                      <tr className="border-t border-slate-100 first:border-t-0 dark:border-slate-800">
                        <td className="px-3 py-1.5 font-medium text-slate-500 dark:text-slate-400">{ui.logo}</td>
                        <td dir="ltr" className="px-3 py-1.5 break-all font-mono text-xs text-slate-800 dark:text-slate-100">{parsed.l}</td>
                      </tr>
                    )}
                    {parsed.a !== undefined && (
                      <tr className="border-t border-slate-100 first:border-t-0 dark:border-slate-800">
                        <td className="px-3 py-1.5 font-medium text-slate-500 dark:text-slate-400">{ui.vmc}</td>
                        <td dir="ltr" className="px-3 py-1.5 break-all font-mono text-xs text-slate-800 dark:text-slate-100">{parsed.a}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {parsed.warnings.length > 0 && (
                <div className="space-y-1 rounded-md border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-700/50 dark:bg-amber-950/30 dark:text-amber-300">
                  {parsed.warnings.map((w, i) => <div key={i}>{w}</div>)}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.logoUrl}</span>
            <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className={inputClass + " font-mono"} placeholder="https://example.com/logo.svg" />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.vmcUrl} <span className="text-slate-400">({ui.vmcOptional})</span></span>
            <input type="text" value={vmcUrl} onChange={(e) => setVmcUrl(e.target.value)} className={inputClass + " font-mono"} placeholder="https://example.com/vmc.pem" />
          </label>

          {generated && (
            <div className="space-y-2 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.generated}</span>
                <CopyButton text={generated} label={ui.copy} copiedLabel={ui.copied} />
              </div>
              <div dir="ltr" className="break-all font-mono text-xs text-slate-800 dark:text-slate-100">{generated}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
