import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea } from "@/components/tools/textToolKit";
import definition from "./definition";
import { decodeJwt } from "./logic";

export default function JwtDecoderTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [token, setToken] = useState("");

  let decoded: { header: string; payload: string; signature: string } | null = null;
  let error = "";
  try {
    if (token.trim() !== "") decoded = decodeJwt(token);
  } catch {
    error = ui.invalid;
  }

  return (
    <div className="space-y-4">
      <TextArea value={token} onChange={setToken} placeholder={ui.placeholder} rows={4} />
      {error && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      )}
      {decoded && (
        <div className="space-y-4">
          {([["header", decoded.header], ["payload", decoded.payload]] as const).map(([key, val]) => (
            <div key={key} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{ui[key]}</span>
                <CopyButton text={val} label={ui.copy} copiedLabel={ui.copied} />
              </div>
              <TextArea value={val} readOnly rows={key === "payload" ? 7 : 4} />
            </div>
          ))}
          <div className="space-y-1">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{ui.signature}</span>
            <TextArea value={decoded.signature} readOnly rows={2} />
          </div>
        </div>
      )}
    </div>
  );
}
