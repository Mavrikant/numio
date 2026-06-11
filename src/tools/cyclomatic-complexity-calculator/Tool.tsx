import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, Field, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import {
  analyzeCode,
  formatReport,
  graphComplexity,
  riskOf,
  DEFAULT_SNIPPET,
  LANGUAGES,
  type CodeAnalysis,
  type LanguageId,
  type RiskLevel,
} from "./logic";

type Mode = "code" | "graph";

const RISK_BADGE: Record<RiskLevel, string> = {
  low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  moderate: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  high: "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "very-high": "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
};

const RISK_UI_KEY: Record<RiskLevel, string> = {
  low: "riskLow",
  moderate: "riskModerate",
  high: "riskHigh",
  "very-high": "riskVeryHigh",
};

function ComplexityResult({ complexity, ui }: { readonly complexity: number; readonly ui: Record<string, string> }) {
  const risk = riskOf(complexity);
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.complexity}</span>
      <span className="font-mono text-3xl font-bold text-slate-900 tabular-nums dark:text-slate-100">{complexity}</span>
      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${RISK_BADGE[risk]}`}>{ui[RISK_UI_KEY[risk]]}</span>
    </div>
  );
}

export default function CyclomaticComplexityCalculatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("code");

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["code", "graph"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              "rounded px-3 py-1.5 text-sm font-medium " +
              (mode === m
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800")
            }
          >
            {m === "code" ? ui.modeCode : ui.modeGraph}
          </button>
        ))}
      </div>

      {mode === "code" ? <CodePanel ui={ui} /> : <GraphPanel ui={ui} />}
    </div>
  );
}

function CodePanel({ ui }: { readonly ui: Record<string, string> }) {
  const [language, setLanguage] = useState<LanguageId>("javascript");
  const [code, setCode] = useState(DEFAULT_SNIPPET);

  const analysis = useMemo(() => analyzeCode(code, language), [code, language]);
  const empty = code.trim() === "";

  return (
    <div className="space-y-4">
      <Field label={ui.language}>
        <select value={language} onChange={(e) => setLanguage(e.target.value as LanguageId)} className={inputClass + " w-auto"}>
          {LANGUAGES.map((lang) => (
            <option key={lang.id} value={lang.id}>{lang.label}</option>
          ))}
        </select>
      </Field>

      <Field label={ui.code}>
        <TextArea value={code} onChange={setCode} placeholder={ui.codePlaceholder} rows={10} />
      </Field>

      {empty ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">{ui.emptyCode}</p>
      ) : (
        <CodeReport analysis={analysis} ui={ui} />
      )}
    </div>
  );
}

function CodeReport({ analysis, ui }: { readonly analysis: CodeAnalysis; readonly ui: Record<string, string> }) {
  return (
    <div className="space-y-4">
      <ComplexityResult complexity={analysis.complexity} ui={ui} />

      <p className="text-sm text-slate-600 dark:text-slate-400">
        {ui.decisionPoints}: <span className="font-mono tabular-nums">{analysis.decisions}</span> — {ui.basePathNote}
      </p>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {ui.testsNote.replace("{n}", String(analysis.complexity))}
      </p>

      {analysis.breakdown.length === 0 ? (
        <p className="text-sm text-slate-600 dark:text-slate-400">{ui.noDecisions}</p>
      ) : (
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.breakdown}</span>
            <CopyButton text={formatReport(analysis)} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-slate-300 text-left dark:border-slate-600">
                  <th className="px-2 py-1 font-medium text-slate-500 dark:text-slate-400">{ui.construct}</th>
                  <th className="px-2 py-1 font-medium text-slate-500 dark:text-slate-400">{ui.count}</th>
                </tr>
              </thead>
              <tbody>
                {analysis.breakdown.map((entry) => (
                  <tr key={entry.construct} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="px-2 py-1 font-mono text-slate-900 dark:text-slate-100" dir="ltr">{entry.construct}</td>
                    <td className="px-2 py-1 text-slate-700 tabular-nums dark:text-slate-300">{entry.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}

function GraphPanel({ ui }: { readonly ui: Record<string, string> }) {
  const [edges, setEdges] = useState("9");
  const [nodes, setNodes] = useState("8");
  const [components, setComponents] = useState("1");

  const parsed = useMemo(() => {
    const e = Number(edges);
    const n = Number(nodes);
    const p = Number(components);
    const valid =
      Number.isInteger(e) && e >= 0 && Number.isInteger(n) && n >= 1 && Number.isInteger(p) && p >= 1;
    return valid ? { value: graphComplexity(e, n, p) } : null;
  }, [edges, nodes, components]);

  const numberField = (value: string, setValue: (v: string) => void) => (
    <input
      className={inputClass}
      dir="ltr"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      inputMode="numeric"
      spellCheck={false}
    />
  );

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600 dark:text-slate-400">
        <span className="font-mono" dir="ltr">M = E − N + 2P</span> — {ui.formulaNote}
      </p>

      <div className="grid gap-3 sm:grid-cols-3">
        <Field label={ui.edges}>{numberField(edges, setEdges)}</Field>
        <Field label={ui.nodes}>{numberField(nodes, setNodes)}</Field>
        <Field label={ui.components}>{numberField(components, setComponents)}</Field>
      </div>

      {!parsed ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.graphInvalid}
        </div>
      ) : parsed.value < 1 ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {ui.graphLow}
        </div>
      ) : (
        <div className="space-y-3">
          <ComplexityResult complexity={parsed.value} ui={ui} />
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {ui.testsNote.replace("{n}", String(parsed.value))}
          </p>
        </div>
      )}
    </div>
  );
}
