import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { hashBcrypt, verifyBcrypt } from "./logic";

export default function BcryptHashGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<"hash" | "verify">("hash");
  const [password, setPassword] = useState("");
  const [rounds, setRounds] = useState(10);
  const [hash, setHash] = useState("");
  const [hashInput, setHashInput] = useState("");
  const [matches, setMatches] = useState<boolean | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const run = async () => {
    setError("");
    setMatches(null);
    setBusy(true);
    try {
      if (mode === "hash") setHash(await hashBcrypt(password, rounds));
      else setMatches(await verifyBcrypt(password, hashInput));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["hash", "verify"] as const).map((m) => (
          <button key={m} type="button" onClick={() => setMode(m)} className={"rounded px-4 py-1.5 text-sm font-medium " + (m === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {ui[m]}
          </button>
        ))}
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.password}</span>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
      </label>

      {mode === "hash" ? (
        <label className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>{ui.rounds}</span>
          <input type="number" min={4} max={15} value={rounds} onChange={(e) => setRounds(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
      ) : (
        <div className="space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.hashToVerify}</span>
          <TextArea value={hashInput} onChange={setHashInput} rows={2} />
        </div>
      )}

      <button type="button" onClick={run} disabled={busy || !password} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
        {mode === "hash" ? ui.hash : ui.verify}
      </button>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {mode === "hash" && hash && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
            <CopyButton text={hash} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <TextArea value={hash} rows={2} readOnly />
        </div>
      )}

      {mode === "verify" && matches !== null && (
        <div
          className={
            "rounded-md border px-3 py-2 text-sm font-medium " +
            (matches
              ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800/50 dark:bg-green-950/30 dark:text-green-300"
              : "border-red-200 bg-red-50 text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300")
          }
        >
          {matches ? ui.match : ui.noMatch}
        </div>
      )}
    </div>
  );
}
