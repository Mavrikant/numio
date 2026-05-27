import { useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { HASH_ALGOS, hashText, type HashAlgo } from "./logic";

export default function HashGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [text, setText] = useState("");
  const [algo, setAlgo] = useState<HashAlgo>("SHA-256");
  const [hash, setHash] = useState("");

  useEffect(() => {
    let active = true;
    if (text === "") {
      setHash("");
      return;
    }
    hashText(text, algo).then((h) => {
      if (active) setHash(h);
    });
    return () => {
      active = false;
    };
  }, [text, algo]);

  return (
    <div className="space-y-4">
      <TextArea value={text} onChange={setText} placeholder={ui.placeholder} rows={5} />
      <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
        <span className="font-medium">{ui.algorithm}</span>
        <select value={algo} onChange={(e) => setAlgo(e.target.value as HashAlgo)} className={inputClass + " w-auto"}>
          {HASH_ALGOS.map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </label>
      <TextArea value={hash} readOnly rows={3} />
      <div className="flex justify-end">
        <CopyButton text={hash} label={ui.copy} copiedLabel={ui.copied} />
      </div>
    </div>
  );
}
