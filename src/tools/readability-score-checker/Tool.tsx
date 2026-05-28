import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { readabilityScores } from "./logic";

export default function ReadabilityScoreCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const r = readabilityScores(text);
  const row = (label: string, value: number | string) => (
    <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-3 py-2 last:border-b-0 dark:border-slate-800">
      <span className="text-sm text-slate-600 dark:text-slate-400">{label}</span>
      <code className="font-mono text-sm text-slate-800 dark:text-slate-100">{value}</code>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <TextArea value={text} onChange={setText} rows={10} />
      </div>

      {text.trim() && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {row(ui.sentences, r.sentences)}
            {row(ui.words, r.words)}
            {row(ui.syllables, r.syllables)}
            {row(ui.complexWords, r.complexWords)}
            {row(ui.characters, r.characters)}
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {row(ui.flesch, r.fleschReadingEase)}
            {row(ui.fk, r.fleschKincaidGrade)}
            {row(ui.fog, r.gunningFog)}
            {row(ui.ari, r.automatedReadabilityIndex)}
            {row(ui.smog, r.smog)}
          </div>
        </div>
      )}
    </div>
  );
}
