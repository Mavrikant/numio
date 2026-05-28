import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { encryptText, decryptText } from "./logic";

export default function TextEncryptTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<"encrypt" | "decrypt">("encrypt");
  const [message, setMessage] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const run = async () => {
    setError("");
    setResult("");
    setBusy(true);
    try {
      setResult(mode === "encrypt" ? await encryptText(message, passphrase) : await decryptText(message, passphrase));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["encrypt", "decrypt"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={"rounded px-4 py-1.5 text-sm font-medium " + (m === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {ui[m]}
          </button>
        ))}
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.message}</span>
        <TextArea value={message} onChange={setMessage} rows={5} />
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.passphrase}</span>
        <input type="password" value={passphrase} onChange={(e) => setPassphrase(e.target.value)} className={inputClass} />
      </label>

      <button type="button" onClick={run} disabled={busy || !message || !passphrase} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
        {mode === "encrypt" ? ui.encrypt : ui.decrypt}
      </button>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>
      )}

      {result && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
            <CopyButton text={result} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <TextArea value={result} rows={5} readOnly />
        </div>
      )}
    </div>
  );
}
