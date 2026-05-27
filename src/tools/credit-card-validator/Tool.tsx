import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { analyzeCard } from "./logic";

export default function CreditCardValidatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [value, setValue] = useState("");
  const result = value.replace(/\D/g, "") !== "" ? analyzeCard(value) : null;

  return (
    <div className="space-y-4">
      <input className={inputClass} value={value} onChange={(e) => setValue(e.target.value)} placeholder={ui.placeholder} inputMode="numeric" />
      {result && (
        <div className="space-y-3">
          <div
            className={
              "rounded-lg border px-4 py-3 text-center font-semibold " +
              (result.valid
                ? "border-green-300 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
                : "border-red-300 bg-red-50 text-red-800 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300")
            }
          >
            {result.valid ? ui.valid : ui.invalid}
          </div>
          <div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm dark:border-slate-700">
            <span className="text-slate-500 dark:text-slate-400">{ui.brand}</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">{result.brand ?? ui.unknownBrand}</span>
          </div>
        </div>
      )}
    </div>
  );
}
