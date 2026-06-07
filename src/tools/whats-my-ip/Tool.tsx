import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton } from "@/components/tools/textToolKit";
import { fetchJson, IPWHOIS_URL, IPIFY_URL, type IpWhoIs } from "../_shared/net-fetch";
import definition from "./definition";
import { formatLocation, osmLink } from "./logic";

export default function WhatsMyIpTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [info, setInfo] = useState<IpWhoIs | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const ctrl = useRef<AbortController | null>(null);

  const run = async () => {
    ctrl.current?.abort();
    const controller = new AbortController();
    ctrl.current = controller;
    const { signal } = controller;
    setBusy(true);
    setError("");

    const primary = await fetchJson<IpWhoIs>(IPWHOIS_URL, signal);
    if (signal.aborted) return;
    if (primary.data && primary.data.success !== false) {
      setInfo(primary.data);
      setBusy(false);
      return;
    }

    // Fallback: api.ipify.org returns just { ip }, no geolocation.
    const fallback = await fetchJson<{ ip: string }>(IPIFY_URL, signal);
    if (signal.aborted) return;
    if (fallback.data?.ip) {
      setInfo({ ip: fallback.data.ip });
      setBusy(false);
      return;
    }

    setInfo(null);
    setError(ui.unavailable);
    setBusy(false);
  };

  useEffect(() => {
    run();
    return () => ctrl.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = info ? formatLocation(info) : "";
  const hasGeo = info?.latitude != null && info?.longitude != null;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.yourIp}</h2>
        <button type="button" onClick={run} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.refresh}
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">
          {error}
        </div>
      )}

      {info && (
        <>
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-700 dark:bg-slate-800/50">
            <span dir="ltr" className="break-all font-mono text-2xl font-bold text-slate-900 dark:text-slate-50">{info.ip}</span>
            {info.flag?.emoji && <span className="text-2xl">{info.flag.emoji}</span>}
            <CopyButton text={info.ip} label={ui.copy} copiedLabel={ui.copied} />
          </div>

          <dl className="grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 text-sm dark:border-slate-700 dark:bg-slate-700">
            <Row label={ui.location} value={location} />
            <Row label={ui.isp} value={[info.connection?.isp, info.connection?.org].filter(Boolean).join(" · ")} />
            <Row label={ui.asn} value={info.connection?.asn != null ? "AS" + info.connection.asn : ""} />
            <Row label={ui.timezone} value={[info.timezone?.id, info.timezone?.utc].filter(Boolean).join(" ")} />
          </dl>

          {hasGeo && (
            <a
              href={osmLink(info.latitude as number, info.longitude as number)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-slate-100 dark:border-slate-600 dark:text-blue-300 dark:hover:bg-slate-800"
            >
              {ui.map} ↗
            </a>
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
