import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, TextArea, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildCharset, randomString, type CharsetOptions } from "./logic";

function secureRandomInt(maxExclusive: number): number {
  if (maxExclusive <= 1) return 0;
  const limit = Math.floor(0xffffffff / maxExclusive) * maxExclusive;
  const buf = new Uint32Array(1);
  let x: number;
  do {
    crypto.getRandomValues(buf);
    x = buf[0]!;
  } while (x >= limit);
  return x % maxExclusive;
}

export default function RandomStringGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(5);
  const [opts, setOpts] = useState<CharsetOptions>({ lowercase: true, uppercase: true, numbers: true, symbols: false });
  const [output, setOutput] = useState("");

  const charset = buildCharset(opts);
  const generate = useCallback(() => {
    if (charset === "") {
      setOutput("");
      return;
    }
    const n = Math.max(1, Math.min(100, count));
    setOutput(Array.from({ length: n }, () => randomString(length, charset, secureRandomInt)).join("\n"));
  }, [charset, count, length]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const set = <K extends keyof CharsetOptions>(k: K, v: boolean) => setOpts((o) => ({ ...o, [k]: v }));
  const toggles: ReadonlyArray<[keyof CharsetOptions, string]> = [
    ["lowercase", ui.lowercase],
    ["uppercase", ui.uppercase],
    ["numbers", ui.numbers],
    ["symbols", ui.symbols],
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.length}</span>
          <input type="number" min={1} max={4096} value={length} onChange={(e) => setLength(Number(e.target.value))} className={inputClass + " w-24"} />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="font-medium">{ui.count}</span>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value))} className={inputClass + " w-20"} />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        {toggles.map(([k, label]) => (
          <label key={k} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
            <input type="checkbox" checked={opts[k]} onChange={(e) => set(k, e.target.checked)} className="h-4 w-4 accent-blue-600" />
            {label}
          </label>
        ))}
        <button type="button" onClick={generate} disabled={charset === ""} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50">
          {ui.generate}
        </button>
      </div>
      {charset === "" ? (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">{ui.selectOne}</div>
      ) : (
        <>
          <TextArea value={output} readOnly rows={Math.min(12, Math.max(3, count))} />
          <div className="flex justify-end">
            <CopyButton text={output} label={ui.copy} copiedLabel={ui.copied} />
          </div>
        </>
      )}
    </div>
  );
}
