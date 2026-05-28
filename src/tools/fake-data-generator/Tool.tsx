import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { fakePeople, peopleToCsv, type FakePerson } from "./logic";

export default function FakeDataGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [count, setCount] = useState(10);
  const [rows, setRows] = useState<FakePerson[]>([]);

  const generate = useCallback(() => setRows(fakePeople(count, cryptoRandom)), [count]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const csv = peopleToCsv(rows);
  const json = JSON.stringify(rows, null, 2);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.count}</span>
          <input type="number" min={1} max={500} value={count} onChange={(e) => setCount(Math.min(500, Math.max(1, Number(e.target.value) || 1)))} className={inputClass + " w-28"} />
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
        <CopyButton text={csv} label={ui.csv} copiedLabel={ui.copied} />
        <CopyButton text={json} label={ui.json} copiedLabel={ui.copied} />
      </div>

      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 dark:bg-slate-800">
            <tr>
              {["Name", "Email", "Phone", "City", "State", "Company"].map((h) => (
                <th key={h} className="px-3 py-2 text-left font-semibold text-slate-700 dark:text-slate-200">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{r.fullName}</td>
                <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{r.email}</td>
                <td className="px-3 py-1.5 font-mono text-xs text-slate-700 dark:text-slate-200">{r.phone}</td>
                <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{r.city}</td>
                <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{r.state}</td>
                <td className="px-3 py-1.5 text-slate-800 dark:text-slate-100">{r.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
