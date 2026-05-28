import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { signJwt, type HmacAlg } from "./logic";

const ALGS: HmacAlg[] = ["HS256", "HS384", "HS512"];

export default function JwtSignerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [alg, setAlg] = useState<HmacAlg>("HS256");
  const [secret, setSecret] = useState("");
  const [payload, setPayload] = useState('{\n  "sub": "1234567890",\n  "name": "Numio",\n  "iat": 1700000000\n}');
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const sign = async () => {
    setError("");
    setBusy(true);
    try {
      const parsed = JSON.parse(payload);
      setToken(await signJwt(parsed, secret, alg));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.algorithm}</span>
          <select value={alg} onChange={(e) => setAlg(e.target.value as HmacAlg)} className={inputClass + " w-auto"}>
            {ALGS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.secret}</span>
          <input type="password" value={secret} onChange={(e) => setSecret(e.target.value)} className={inputClass} />
        </label>
      </div>

      <div className="space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.payload}</span>
        <TextArea value={payload} onChange={setPayload} rows={6} />
      </div>

      <button type="button" onClick={sign} disabled={busy || !secret} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
        {ui.sign}
      </button>

      {error && <div className="rounded-md border border-red-200 bg-red-50 px-3 py-2 font-mono text-sm text-red-700 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-300">{error}</div>}

      {token && (
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.token}</span>
            <CopyButton text={token} label={ui.copy} copiedLabel={ui.copied} />
          </div>
          <TextArea value={token} rows={4} readOnly />
        </div>
      )}
    </div>
  );
}
