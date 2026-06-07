import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateMac, type Separator } from "./logic";

export default function MacAddressGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [separator, setSeparator] = useState<Separator>(":");
  const [uppercase, setUppercase] = useState(false);
  const [localAdmin, setLocalAdmin] = useState(false);
  const [count, setCount] = useState(5);
  const [macs, setMacs] = useState<string[]>([]);

  const generate = useCallback(() => {
    const n = Math.min(20, Math.max(1, count));
    const out: string[] = [];
    for (let i = 0; i < n; i++) out.push(generateMac({ separator, uppercase, localAdmin }));
    setMacs(out);
  }, [separator, uppercase, localAdmin, count]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-4">
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.separator}</span>
          <select value={separator} onChange={(e) => setSeparator(e.target.value as Separator)} className={inputClass + " w-auto"}>
            <option value=":">{ui.colon}</option>
            <option value="-">{ui.hyphen}</option>
            <option value=".">{ui.dot}</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.count}</span>
          <input type="number" min={1} max={20} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
          <span>{ui.uppercase}</span>
        </label>
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={localAdmin} onChange={(e) => setLocalAdmin(e.target.checked)} />
          <span>{ui.localAdmin}</span>
        </label>
        <button type="button" onClick={generate} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          {ui.generate}
        </button>
      </div>

      <div className="space-y-2">
        {macs.map((mac, i) => (
          <div
            key={`${mac}-${i}`}
            className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
          >
            <span dir="ltr" className="font-mono break-all text-sm text-slate-900 dark:text-slate-100">
              {mac}
            </span>
            <CopyButton text={mac} label={ui.copy} copiedLabel={ui.copied} />
          </div>
        ))}
      </div>
    </div>
  );
}
