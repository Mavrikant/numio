import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass, Field } from "@/components/tools/textToolKit";
import definition from "./definition";
import { raidCapacity, type RaidLevel } from "./logic";

const LEVELS: ReadonlyArray<RaidLevel> = ["0", "1", "5", "6", "10"];

export default function RaidCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [level, setLevel] = useState<RaidLevel>("5");
  const [disks, setDisks] = useState(4);
  const [sizeTB, setSizeTB] = useState(4);

  let result: ReturnType<typeof raidCapacity> | null = null;
  let error = "";
  try {
    result = raidCapacity({ level, disks, sizeTB });
  } catch {
    error = ui.invalid;
  }

  const fmt = (n: number) => (Number.isInteger(n) ? n.toString() : n.toFixed(2));

  const rows: ReadonlyArray<[string, string]> = result
    ? [
        [ui.usable, `${fmt(result.usableTB)} ${ui.tb}`],
        [ui.redundancy, `${fmt(result.redundancyTB)} ${ui.tb}`],
        [ui.faultTolerance, `${result.faultTolerance} ${ui.disksUnit}`],
        [ui.efficiency, `${fmt(result.efficiencyPct)}%`],
      ]
    : [];

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <Field label={ui.level}>
          <select value={level} onChange={(e) => setLevel(e.target.value as RaidLevel)} className={inputClass}>
            {LEVELS.map((l) => (
              <option key={l} value={l}>
                RAID {l}
              </option>
            ))}
          </select>
        </Field>
        <Field label={ui.disks}>
          <input type="number" min={1} max={64} value={disks} onChange={(e) => setDisks(Number(e.target.value))} className={inputClass} />
        </Field>
        <Field label={ui.size}>
          <input type="number" min={0} step="any" value={sizeTB} onChange={(e) => setSizeTB(Number(e.target.value))} className={inputClass} />
        </Field>
      </div>

      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      ) : (
        <dl className="rounded-lg border border-slate-200 dark:border-slate-700">
          {rows.map(([label, val]) => (
            <div
              key={label}
              className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800"
            >
              <dt className="text-sm text-slate-600 dark:text-slate-400">{label}</dt>
              <dd dir="ltr" className="font-mono break-all text-sm text-slate-900 dark:text-slate-100">
                {val}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}
