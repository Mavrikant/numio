import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { removeAccents } from "./logic";

export default function RemoveAccentsTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const output = removeAccents(text);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      <TextArea value={output} readOnly rows={5} />
      <div className="flex justify-end">
        <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
