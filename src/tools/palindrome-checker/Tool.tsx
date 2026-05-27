import { useState } from "react";
import type { Locale } from "@/config/site";
import { TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { checkPalindrome } from "./logic";

export default function PalindromeCheckerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [ignorePunctuation, setIgnorePunctuation] = useState(true);
  const result = checkPalindrome(text, ignoreCase, ignorePunctuation);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={3} />
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.ignoreCase}
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <input type="checkbox" checked={ignorePunctuation} onChange={(e) => setIgnorePunctuation(e.target.checked)} className="h-4 w-4 accent-blue-600" />
          {ui.ignorePunctuation}
        </label>
      </div>
      {text.trim() !== "" && (
        <div
          className={
            "rounded-lg border px-4 py-3 text-center text-lg font-semibold " +
            (result.isPalindrome
              ? "border-green-300 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
              : "border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-300")
          }
        >
          {result.isPalindrome ? ui.isPalindrome : ui.notPalindrome}
        </div>
      )}
    </div>
  );
}
