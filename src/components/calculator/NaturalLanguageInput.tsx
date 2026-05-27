/**
 * NaturalLanguageInput — React island that lets a user paste free-form text
 * ("I'm 30 years old, 70kg, 175cm" or "$400k loan, 7% APR, 30 years") and
 * have the calculator's form auto-fill from it.
 *
 * Entirely client-side: no LLM API, no external service. The work is done by
 * deterministic regex extraction in `src/lib/nl-parser.ts`.
 *
 * Mounted by CalculatorView above the input panel ONLY when the calc has
 * `meta.nlEnabled === true` (P0 calcs: BMI, BMR, Calorie, Mortgage,
 * Retirement, Savings Goal, Auto Loan, BAC).
 */

import { useState, useCallback, useRef } from "react";
import type { AnyCalculatorDefinition } from "@/types/calculator";
import type { Locale } from "@/config/site";
import { parseNaturalLanguage } from "@/lib/nl-parser";

export interface NlLabels {
  readonly toggle: string;
  readonly placeholder: string;
  readonly fill: string;
  readonly matched: string; // template with {n}/{total}
  readonly unmatched: string; // template with {fields}
}

interface Props {
  readonly calc: AnyCalculatorDefinition;
  readonly locale: Locale;
  readonly labels: NlLabels;
  readonly onParsed: (inputs: Record<string, number | string | boolean>) => void;
}

export default function NaturalLanguageInput({
  calc,
  locale,
  labels,
  onParsed,
}: Props) {
  const [open, setOpen] = useState(false);
  const [feedback, setFeedback] = useState<{
    kind: "success" | "warn" | "empty";
    matchedN: number;
    total: number;
    unmatched: ReadonlyArray<string>;
  } | null>(null);
  const taRef = useRef<HTMLTextAreaElement | null>(null);

  const handleParse = useCallback(() => {
    const text = taRef.current?.value.trim() ?? "";
    if (!text) {
      setFeedback({ kind: "empty", matchedN: 0, total: calc.inputs.length, unmatched: [] });
      return;
    }
    const result = parseNaturalLanguage(text, calc, locale);
    const n = result.matched.length;
    const total = calc.inputs.length;
    if (n === 0) {
      setFeedback({ kind: "warn", matchedN: 0, total, unmatched: result.unmatched });
      return;
    }
    setFeedback({
      kind: n === total ? "success" : "warn",
      matchedN: n,
      total,
      unmatched: result.unmatched,
    });
    // Pass only the type-safe values that match calc.inputs[].id
    const safe: Record<string, number | string | boolean> = {};
    for (const k of Object.keys(result.inputs)) {
      const v = result.inputs[k];
      if (typeof v === "number" || typeof v === "string" || typeof v === "boolean") {
        safe[k] = v;
      }
    }
    onParsed(safe);
  }, [calc, locale, onParsed]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      // Ctrl/Cmd + Enter triggers parse
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleParse();
      }
    },
    [handleParse],
  );

  if (!open) {
    return (
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-violet-300 bg-violet-50/50 px-3 py-1.5 text-sm font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-700 dark:bg-violet-950/30 dark:text-violet-300 dark:hover:bg-violet-900/50"
          aria-expanded="false"
        >
          {labels.toggle}
        </button>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-xl border border-violet-200 bg-violet-50/40 p-4 dark:border-violet-800 dark:bg-violet-950/30">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-violet-900 dark:text-violet-200">
          {labels.toggle}
        </h3>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setFeedback(null);
          }}
          className="text-xs text-violet-600 hover:text-violet-900 dark:text-violet-400 dark:hover:text-violet-100"
          aria-label="Close"
        >
          ✕
        </button>
      </div>
      <textarea
        ref={taRef}
        rows={2}
        placeholder={labels.placeholder}
        onKeyDown={handleKeyDown}
        className="w-full rounded-md border border-violet-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 dark:border-violet-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
      <div className="mt-2 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleParse}
          className="rounded-md bg-violet-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 min-h-[44px] sm:min-h-0"
        >
          {labels.fill}
        </button>
        {feedback && (
          <div
            className={[
              "text-xs",
              feedback.kind === "success"
                ? "text-emerald-700 dark:text-emerald-400"
                : feedback.kind === "warn"
                  ? "text-amber-700 dark:text-amber-400"
                  : "text-slate-500 dark:text-slate-400",
            ].join(" ")}
            role="status"
          >
            {feedback.matchedN > 0 &&
              labels.matched
                .replace("{n}", String(feedback.matchedN))
                .replace("{total}", String(feedback.total))}
            {feedback.unmatched.length > 0 && (
              <>
                {feedback.matchedN > 0 ? " · " : ""}
                {labels.unmatched.replace("{fields}", feedback.unmatched.join(", "))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
