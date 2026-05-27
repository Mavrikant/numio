import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { jsonToCsv } from "./logic";

export default function JsonToCsvTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");

  let output = "";
  let error = "";
  try {
    if (text.trim() !== "") output = jsonToCsv(text);
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={7} />
      {error ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{error}</div>
      ) : (
        <TextArea value={output} readOnly rows={7} />
      )}
      <div className="flex justify-end">
        <CopyButton text={error ? "" : output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
