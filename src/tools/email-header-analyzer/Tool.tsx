import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { parseHeaders, type ParsedHeaders } from "./logic";

const SAMPLE = `Received: from mx.example.com (mx.example.com [203.0.113.7])
\tby mail.dest.com with ESMTPS; Tue, 03 Jun 2026 10:00:05 +0000
Authentication-Results: mail.dest.com; spf=pass dkim=pass dmarc=pass`;

function authColor(result?: string): string {
  if (!result) return "text-slate-400 dark:text-slate-500";
  return result.toLowerCase() === "pass"
    ? "text-emerald-600 dark:text-emerald-400"
    : "text-red-600 dark:text-red-400";
}

export default function EmailHeaderAnalyzerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [raw, setRaw] = useState("");
  const [submitted, setSubmitted] = useState("");

  const source = submitted;
  let result: ParsedHeaders | null = null;
  let error = "";
  try {
    if (source.trim() !== "") result = parseHeaders(source);
  } catch {
    error = ui.invalid;
  }

  const authRows: ReadonlyArray<[string, string | undefined]> = [
    ["SPF", result?.auth.spf],
    ["DKIM", result?.auth.dkim],
    ["DMARC", result?.auth.dmarc],
  ];

  return (
    <div className="space-y-4">
      <TextArea value={raw} onChange={setRaw} placeholder={ui.placeholder} rows={10} />
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSubmitted(raw)}
          disabled={raw.trim() === ""}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {ui.analyze}
        </button>
        <button
          type="button"
          onClick={() => {
            setRaw(SAMPLE);
            setSubmitted(SAMPLE);
          }}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.input}
        </button>
        <button
          type="button"
          onClick={() => {
            setRaw("");
            setSubmitted("");
          }}
          className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
        >
          {ui.clear}
        </button>
      </div>

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : result ? (
        <div className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.auth}</h3>
            <dl className="grid grid-cols-3 gap-2">
              {authRows.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center dark:border-slate-700 dark:bg-slate-900"
                >
                  <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</dt>
                  <dd className={"font-mono text-sm font-semibold " + authColor(value)} dir="ltr">
                    {value ?? "—"}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.hops}</h3>
            {result.hops.length === 0 ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">{ui.noHops}</p>
            ) : (
              <div className="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-700">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <tr>
                      <th className="px-3 py-2">{ui.hop}</th>
                      <th className="px-3 py-2">{ui.from}</th>
                      <th className="px-3 py-2">{ui.by}</th>
                      <th className="px-3 py-2">{ui.protocol}</th>
                      <th className="px-3 py-2">{ui.delay}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.hops.map((hop, i) => (
                      <tr key={i} className="border-t border-slate-200 dark:border-slate-700">
                        <td className="px-3 py-2 font-mono text-slate-900 dark:text-slate-100">{i + 1}</td>
                        <td className="px-3 py-2 font-mono break-all text-slate-700 dark:text-slate-300" dir="ltr">
                          {hop.from ?? "—"}
                        </td>
                        <td className="px-3 py-2 font-mono break-all text-slate-700 dark:text-slate-300" dir="ltr">
                          {hop.by ?? "—"}
                        </td>
                        <td className="px-3 py-2 font-mono text-slate-700 dark:text-slate-300" dir="ltr">
                          {hop.protocol ?? "—"}
                        </td>
                        <td className="px-3 py-2 font-mono text-slate-700 dark:text-slate-300" dir="ltr">
                          {hop.delaySec === undefined ? "—" : hop.delaySec + "s"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
