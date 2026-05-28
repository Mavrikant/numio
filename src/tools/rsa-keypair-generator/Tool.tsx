import { useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { generateRsaKeyPair } from "./logic";

type Size = 2048 | 3072 | 4096;

export default function RsaKeypairGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [size, setSize] = useState<Size>(2048);
  const [keys, setKeys] = useState<{ publicKey: string; privateKey: string }>({ publicKey: "", privateKey: "" });
  const [busy, setBusy] = useState(false);

  const generate = async () => {
    setBusy(true);
    try {
      setKeys(await generateRsaKeyPair(size));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.modulus}</span>
          <select value={size} onChange={(e) => setSize(Number(e.target.value) as Size)} className={inputClass + " w-auto"}>
            <option value={2048}>2048</option>
            <option value={3072}>3072</option>
            <option value={4096}>4096</option>
          </select>
        </label>
        <button type="button" onClick={generate} disabled={busy} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50">
          {busy ? "…" : ui.generate}
        </button>
      </div>

      {keys.publicKey && (
        <>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.publicKey}</span>
              <CopyButton text={keys.publicKey} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={keys.publicKey} rows={8} readOnly />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.privateKey}</span>
              <CopyButton text={keys.privateKey} label={ui.copy} copiedLabel={ui.copied} />
            </div>
            <TextArea value={keys.privateKey} rows={14} readOnly />
          </div>
        </>
      )}
    </div>
  );
}
