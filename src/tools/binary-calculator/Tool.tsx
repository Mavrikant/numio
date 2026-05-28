import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { binaryCalculate, type BinaryOp } from "./logic";

const OPS: BinaryOp[] = ["+", "-", "*", "/", "%", "&", "|", "^", "<<", ">>"];

export default function BinaryCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [a, setA] = useState("1010");
  const [b, setB] = useState("0011");
  const [op, setOp] = useState<BinaryOp>("+");

  const r = binaryCalculate(a, op, b);

  const cell = (label: string, value: string) => (
    <div className="rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700">
      <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-1 break-all font-mono text-base text-slate-900 dark:text-slate-100">{value || "—"}</div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_100px_1fr]">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.a}</span>
          <input type="text" value={a} onChange={(e) => setA(e.target.value)} className={inputClass + " font-mono"} />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.op}</span>
          <select value={op} onChange={(e) => setOp(e.target.value as BinaryOp)} className={inputClass + " font-mono"}>
            {OPS.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.b}</span>
          <input type="text" value={b} onChange={(e) => setB(e.target.value)} className={inputClass + " font-mono"} />
        </label>
      </div>

      {r.error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{r.error}</div>}

      {!r.error && r.binary && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cell(ui.binary, r.binary)}
          {cell(ui.decimal, r.decimal)}
          {cell(ui.hex, r.hex)}
          {cell(ui.octal, r.octal)}
        </div>
      )}
    </div>
  );
}
