import { useState } from "react";
import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/format";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { checkContrast } from "./logic";

function Badge({ ok, label }: { readonly ok: boolean; readonly label: string }) {
  return (
    <span
      className={
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium " +
        (ok
          ? "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
          : "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300")
      }
    >
      {label}
    </span>
  );
}

export default function ColorContrastCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [fg, setFg] = useState("#1f2937");
  const [bg, setBg] = useState("#ffffff");
  const result = checkContrast(fg, bg);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.foreground}</span>
          <input className={inputClass} value={fg} onChange={(e) => setFg(e.target.value)} />
        </label>
        <label className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.background}</span>
          <input className={inputClass} value={bg} onChange={(e) => setBg(e.target.value)} />
        </label>
      </div>

      {!result ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{ui.invalid}</div>
      ) : (
        <>
          <div className="rounded-lg border border-slate-200 p-6 text-center dark:border-slate-700" style={{ backgroundColor: bg, color: fg }}>
            <p className="text-base">{ui.sample}</p>
            <p className="mt-2 text-2xl font-bold">{ui.sample}</p>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">{formatNumber(result.ratio, locale, { maximumFractionDigits: 2 })}:1</span>
            <span className="ml-2 text-sm text-slate-500 dark:text-slate-400">{ui.ratio}</span>
          </div>
          <dl className="grid grid-cols-2 gap-3">
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 dark:border-slate-700">
              <dt className="text-sm text-slate-600 dark:text-slate-400">AA · {ui.normalText}</dt>
              <dd><Badge ok={result.aaNormal} label={result.aaNormal ? ui.pass : ui.fail} /></dd>
            </div>
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 dark:border-slate-700">
              <dt className="text-sm text-slate-600 dark:text-slate-400">AA · {ui.largeText}</dt>
              <dd><Badge ok={result.aaLarge} label={result.aaLarge ? ui.pass : ui.fail} /></dd>
            </div>
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 dark:border-slate-700">
              <dt className="text-sm text-slate-600 dark:text-slate-400">AAA · {ui.normalText}</dt>
              <dd><Badge ok={result.aaaNormal} label={result.aaaNormal ? ui.pass : ui.fail} /></dd>
            </div>
            <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 dark:border-slate-700">
              <dt className="text-sm text-slate-600 dark:text-slate-400">AAA · {ui.largeText}</dt>
              <dd><Badge ok={result.aaaLarge} label={result.aaaLarge ? ui.pass : ui.fail} /></dd>
            </div>
          </dl>
        </>
      )}
    </div>
  );
}
