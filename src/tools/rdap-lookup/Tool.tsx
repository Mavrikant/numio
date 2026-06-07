import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import { fetchJson, RDAP_BASE } from "../_shared/net-fetch";
import definition from "./definition";
import { detectKind, rdapUrl, summarizeRdap, type RdapSummary } from "./logic";

export default function RdapLookupTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [query, setQuery] = useState("example.com");
  const [summary, setSummary] = useState<RdapSummary | null>(null);
  const [raw, setRaw] = useState("");
  const [showRaw, setShowRaw] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  useEffect(() => () => ctrl.current?.abort(), []);

  const kind = detectKind(query);

  const run = async () => {
    ctrl.current?.abort();
    const controller = new AbortController();
    ctrl.current = controller;
    setBusy(true);
    setError("");
    setSummary(null);
    setRaw("");

    const r = await fetchJson<unknown>(rdapUrl(query, RDAP_BASE), controller.signal);
    if (controller.signal.aborted) return;
    if (!r.data) {
      setError(ui.unavailable);
      setBusy(false);
      return;
    }
    setSummary(summarizeRdap(r.data, detectKind(query)));
    setRaw(JSON.stringify(r.data, null, 2));
    setBusy(false);
  };

  return (
    <div className="space-y-4">
      <div className="grid items-end gap-3 sm:grid-cols-[1fr_120px]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.query}</span>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className={inputClass + " font-mono"} placeholder={ui.placeholder} />
        </label>
        <button type="button" onClick={run} disabled={busy || !query.trim()} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.run}
        </button>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        {ui.detected}: <code className="font-mono">{kind}</code>
      </p>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {summary && (
        <>
          <dl className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 text-sm dark:border-slate-700 dark:bg-slate-700">
            <Row label={ui.handle} value={summary.handle ?? ""} />
            <Row label={ui.name} value={summary.name ?? ""} />
            <Row label={ui.registrar} value={summary.registrar ?? ""} />
            <Row label={ui.country} value={summary.country ?? ""} />
            {summary.events.length > 0 && (
              <Row label={ui.events} value={summary.events.map((e) => `${e.action}: ${e.date}`).join("  •  ")} />
            )}
            {summary.entities.length > 0 && <Row label={ui.entities} value={summary.entities.join(", ")} />}
          </dl>

          {raw && (
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setShowRaw((s) => !s)}
                className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {showRaw ? "▾ " : "▸ "}{ui.raw}
              </button>
              {showRaw && (
                <pre dir="ltr" className="max-h-96 overflow-auto rounded-lg border border-slate-200 bg-slate-50 p-3 font-mono text-xs text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                  {raw}
                </pre>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Row({ label, value }: { readonly label: string; readonly value: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] bg-white dark:bg-slate-900">
      <dt className="px-3 py-2 font-medium text-slate-600 dark:text-slate-300">{label}</dt>
      <dd dir="ltr" className="break-all px-3 py-2 font-mono text-slate-800 dark:text-slate-100">{value || "—"}</dd>
    </div>
  );
}
