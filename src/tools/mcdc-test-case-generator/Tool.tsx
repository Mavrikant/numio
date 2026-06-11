import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { analyzeMcdc, formatMinimalSet, type McdcAnalysis } from "./logic";

function Cell({ value }: { readonly value: boolean }) {
  return (
    <span className={value ? "font-mono text-emerald-600 dark:text-emerald-400" : "font-mono text-slate-400 dark:text-slate-500"}>
      {value ? "T" : "F"}
    </span>
  );
}

function TruthTable({
  analysis,
  rowIndices,
  ui,
}: {
  readonly analysis: McdcAnalysis;
  readonly rowIndices: readonly number[];
  readonly ui: Record<string, string>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-slate-300 text-left dark:border-slate-600">
            <th className="px-2 py-1 font-medium text-slate-500 dark:text-slate-400">#</th>
            {analysis.conditions.map((c) => (
              <th key={c} className="px-2 py-1 font-mono font-medium text-slate-700 dark:text-slate-200">{c}</th>
            ))}
            <th className="px-2 py-1 font-medium text-slate-700 dark:text-slate-200">{ui.decision}</th>
          </tr>
        </thead>
        <tbody>
          {rowIndices.map((r) => {
            const row = analysis.truthTable[r];
            return (
              <tr key={r} className="border-b border-slate-100 dark:border-slate-800">
                <td className="px-2 py-1 text-slate-400 tabular-nums dark:text-slate-500">{r}</td>
                {row.values.map((v, j) => (
                  <td key={analysis.conditions[j]} className="px-2 py-1">
                    <Cell value={v} />
                  </td>
                ))}
                <td className="px-2 py-1">
                  <Cell value={row.decision} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function McdcTestCaseGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [expr, setExpr] = useState("A && (B || C)");

  const result = useMemo(() => analyzeMcdc(expr), [expr]);

  let errorMessage = "";
  if (!result.ok) {
    if (result.error.kind === "too-many") errorMessage = ui.tooMany.replace("{n}", String(result.error.count));
    else if (result.error.kind === "no-conditions") errorMessage = ui.noConditions;
    else errorMessage = ui.parseError;
  }

  return (
    <div className="space-y-5">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.expression}</span>
        <input
          className={inputClass}
          dir="ltr"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder={ui.placeholder}
          spellCheck={false}
        />
      </label>

      {!result.ok ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {errorMessage}
        </div>
      ) : (
        <McdcReport analysis={result.analysis} ui={ui} />
      )}
    </div>
  );
}

function McdcReport({ analysis, ui }: { readonly analysis: McdcAnalysis; readonly ui: Record<string, string> }) {
  const minimalCsv = formatMinimalSet(analysis);
  const summary = ui.summary
    .replace("{tests}", String(analysis.minimalRows.length))
    .replace("{rows}", String(analysis.truthTable.length));

  return (
    <>
      {/* Minimal MC/DC test set */}
      <section className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.minimalSet}</span>
          <CopyButton text={minimalCsv} label={ui.copy} copiedLabel={ui.copied} />
        </div>
        <TruthTable analysis={analysis} rowIndices={analysis.minimalRows} ui={ui} />
        <p className="text-sm text-slate-600 dark:text-slate-400">{summary}</p>
        <p className={analysis.fullyAchievable ? "text-sm text-emerald-600 dark:text-emerald-400" : "text-sm text-amber-700 dark:text-amber-400"}>
          {analysis.fullyAchievable ? ui.achieved : ui.partial}
        </p>
      </section>

      {/* Independence pairs per condition */}
      <section className="space-y-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.pairs}</span>
        <ul className="space-y-1 text-sm">
          {analysis.conditions.map((c, k) => {
            const pair = analysis.provingPair[k] ?? analysis.pairs[k][0] ?? null;
            return (
              <li key={c} className="flex flex-wrap items-baseline gap-x-2">
                <span className="font-mono font-medium text-slate-700 dark:text-slate-200">{c}</span>
                {pair ? (
                  <span className="text-slate-600 dark:text-slate-400">
                    {ui.provedBy}: <span className="tabular-nums">#{pair.rowFalse}</span> ↔ <span className="tabular-nums">#{pair.rowTrue}</span>
                  </span>
                ) : (
                  <span className="text-amber-700 dark:text-amber-400">{ui.notProvable}</span>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Full truth table */}
      <section className="space-y-2">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.truthTable}</span>
        <TruthTable analysis={analysis} rowIndices={analysis.truthTable.map((_, i) => i)} ui={ui} />
      </section>
    </>
  );
}
