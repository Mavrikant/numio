import { useState } from "react";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { validateTcKimlik } from "./logic";

export default function TcKimlikValidatorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  const result = validateTcKimlik(text);
  const show = text.trim() !== "";

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.input}</span>
        <input
          type="text"
          inputMode="numeric"
          maxLength={11}
          value={text}
          onChange={(e) => setText(e.target.value.replace(/\D/g, ""))}
          className={inputClass + " font-mono tracking-widest"}
        />
      </label>

      {show && (
        <div
          className={
            "rounded-md border px-3 py-2 text-sm font-medium " +
            (result.valid
              ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300")
          }
        >
          {result.valid ? ui.valid : result.error || ui.invalid}
        </div>
      )}
    </div>
  );
}
