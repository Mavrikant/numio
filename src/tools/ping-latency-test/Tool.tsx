import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { DEFAULT_TARGETS, probe, summarise, type Target } from "./logic";

interface Row {
  readonly target: Target;
  readonly samples: number[];
  readonly failed: number;
}

export default function PingLatencyTestTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [n, setN] = useState(5);
  const [busy, setBusy] = useState(false);
  const [rows, setRows] = useState<Row[]>(DEFAULT_TARGETS.map((t) => ({ target: t, samples: [], failed: 0 })));

  const run = async () => {
    setBusy(true);
    try {
      const next: Row[] = DEFAULT_TARGETS.map((t) => ({ target: t, samples: [], failed: 0 }));
      setRows(next);
      for (let i = 0; i < n; i++) {
        await Promise.all(
          next.map(async (row, idx) => {
            const ms = await probe(row.target.url);
            if (ms === null) {
              next[idx] = { ...row, failed: row.failed + 1 };
            } else {
              next[idx] = { ...row, samples: [...row.samples, ms] };
            }
          }),
        );
        setRows([...next]);
      }
    } finally {
      setBusy(false);
    }
  };

  const fmt = (ms: number) => `${Math.round(ms)} ms`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.samples}</span>
          <input type="number" min={1} max={20} value={n} onChange={(e) => setN(Math.max(1, Math.min(20, Number(e.target.value) || 5)))} className={inputClass + " w-24"} />
        </label>
        <button type="button" onClick={run} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {busy ? "…" : ui.run}
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.target}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.avg}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.min}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.max}</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{ui.jitter}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => {
              const s = summarise(row.samples);
              return (
                <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{row.target.label}</td>
                  <td className="px-3 py-1.5 font-mono text-slate-800 dark:text-slate-100">{s ? fmt(s.avg) : "—"}</td>
                  <td className="px-3 py-1.5 font-mono text-slate-800 dark:text-slate-100">{s ? fmt(s.min) : "—"}</td>
                  <td className="px-3 py-1.5 font-mono text-slate-800 dark:text-slate-100">{s ? fmt(s.max) : "—"}</td>
                  <td className="px-3 py-1.5 font-mono text-slate-800 dark:text-slate-100">{s ? fmt(s.jitter) : "—"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
