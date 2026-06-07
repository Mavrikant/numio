import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { computeTimecard, type TimecardRow } from "./logic";

interface RowState {
  in: string;
  out: string;
  breakMin: string;
}

const EMPTY_ROW: RowState = { in: "09:00", out: "17:00", breakMin: "0" };

export default function TimeCardCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [rows, setRows] = useState<RowState[]>([{ ...EMPTY_ROW }, { ...EMPTY_ROW }]);
  const [otThreshold, setOtThreshold] = useState("40");
  const [rate, setRate] = useState("0");

  const updateRow = (i: number, patch: Partial<RowState>) =>
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const addRow = () => setRows((rs) => [...rs, { ...EMPTY_ROW }]);
  const removeRow = (i: number) => setRows((rs) => (rs.length > 1 ? rs.filter((_, idx) => idx !== i) : rs));

  let result: ReturnType<typeof computeTimecard> | null = null;
  let error = "";
  try {
    const parsed: TimecardRow[] = rows.map((r) => ({
      in: r.in,
      out: r.out,
      breakMin: r.breakMin.trim() === "" ? 0 : Number(r.breakMin),
    }));
    result = computeTimecard(parsed, {
      otThresholdH: Number(otThreshold),
      rate: Number(rate),
    });
  } catch {
    error = ui.invalid;
  }

  const fmt = (n: number) => (Math.round(n * 100) / 100).toString();

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-md border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <tr>
              <th className="px-3 py-2">{ui.timeIn}</th>
              <th className="px-3 py-2">{ui.timeOut}</th>
              <th className="px-3 py-2">{ui.breakMin}</th>
              <th className="px-3 py-2">{ui.hours}</th>
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-200 dark:border-slate-700">
                <td className="px-3 py-2">
                  <input type="time" className={inputClass} value={r.in} onChange={(e) => updateRow(i, { in: e.target.value })} />
                </td>
                <td className="px-3 py-2">
                  <input type="time" className={inputClass} value={r.out} onChange={(e) => updateRow(i, { out: e.target.value })} />
                </td>
                <td className="px-3 py-2">
                  <input
                    type="number"
                    min={0}
                    className={inputClass + " w-24"}
                    value={r.breakMin}
                    onChange={(e) => updateRow(i, { breakMin: e.target.value })}
                  />
                </td>
                <td className="px-3 py-2 font-mono text-slate-900 dark:text-slate-100" dir="ltr">
                  {result ? fmt(result.perRow[i]) : "—"}
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    onClick={() => removeRow(i)}
                    disabled={rows.length <= 1}
                    className="rounded-md border border-slate-300 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {ui.remove}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={addRow}
        className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        {ui.addRow}
      </button>

      <div className="flex flex-wrap gap-4">
        <label className="space-y-1">
          <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">{ui.otThreshold}</span>
          <input type="number" min={0} className={inputClass + " w-36"} value={otThreshold} onChange={(e) => setOtThreshold(e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">{ui.rate}</span>
          <input type="number" min={0} step="0.01" className={inputClass + " w-36"} value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
      </div>

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : result ? (
        <dl className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {([
            [ui.total, fmt(result.totalH)],
            [ui.regular, fmt(result.regularH)],
            [ui.overtime, fmt(result.overtimeH)],
            [ui.pay, fmt(result.pay)],
          ] as ReadonlyArray<[string, string]>).map(([label, val]) => (
            <div key={label} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-center dark:border-slate-700 dark:bg-slate-900">
              <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</dt>
              <dd className="font-mono text-lg font-semibold text-slate-900 dark:text-slate-100" dir="ltr">
                {val}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
