import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, useCopy, inputClass } from "@/components/tools/textToolKit";
import { cryptoRandom } from "../_shared/random";
import definition from "./definition";
import { type MacFormat, generateMacs, parsePrefix } from "./logic";

export default function MacAddressGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [prefix, setPrefix] = useState("");
  const [format, setFormat] = useState<MacFormat>("colon");
  const [uppercase, setUppercase] = useState(true);
  const [count, setCount] = useState(5);
  const [macs, setMacs] = useState<string[]>([]);
  const { copied, copy } = useCopy();

  const prefixValid = parsePrefix(prefix) !== null;

  const generate = useCallback(() => {
    const prefixHex = parsePrefix(prefix);
    if (prefixHex === null) return;
    setMacs(generateMacs({ prefixHex, format, uppercase, count }, cryptoRandom));
  }, [prefix, format, uppercase, count]);

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allText = macs.join("\n");

  return (
    <div className="space-y-4">
      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.prefix}</span>
        <input
          type="text"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          placeholder={ui.prefixPlaceholder}
          className={inputClass + (prefixValid ? "" : " border-red-400 dark:border-red-500")}
        />
        <span className={"block text-xs " + (prefixValid ? "text-slate-500 dark:text-slate-400" : "text-red-600 dark:text-red-400")}>
          {prefixValid ? ui.prefixHelp : ui.invalidPrefix}
        </span>
      </label>

      <div className="flex flex-wrap items-end gap-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.format}</span>
          <select value={format} onChange={(e) => setFormat(e.target.value as MacFormat)} className={inputClass + " w-auto"}>
            <option value="colon">{ui.fmtColon} (AB:CD:EF:12:34:56)</option>
            <option value="hyphen">{ui.fmtHyphen} (AB-CD-EF-12-34-56)</option>
            <option value="dot">{ui.fmtDot} (abcd.ef12.3456)</option>
            <option value="none">{ui.fmtNone} (ABCDEF123456)</option>
          </select>
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.case}</span>
          <select value={uppercase ? "upper" : "lower"} onChange={(e) => setUppercase(e.target.value === "upper")} className={inputClass + " w-auto"}>
            <option value="upper">{ui.uppercase}</option>
            <option value="lower">{ui.lowercase}</option>
          </select>
        </label>

        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.count}</span>
          <input type="number" min={1} max={100} value={count} onChange={(e) => setCount(Number(e.target.value) || 1)} className={inputClass + " w-24"} />
        </label>

        <button
          type="button"
          onClick={generate}
          disabled={!prefixValid}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {ui.generate}
        </button>
      </div>

      {macs.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.result}</span>
            <CopyButton text={allText} label={ui.copyAll} copiedLabel={ui.copied} />
          </div>
          <div className="rounded-lg border border-slate-200 dark:border-slate-700">
            {macs.map((mac, i) => (
              <button
                key={i}
                type="button"
                onClick={() => copy(mac)}
                className="block w-full border-b border-slate-100 px-3 py-2 text-left font-mono text-sm text-slate-800 hover:bg-slate-50 last:border-b-0 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800/50"
                title={ui.copy}
              >
                {mac}
              </button>
            ))}
          </div>
          {copied && <span className="text-sm text-green-600 dark:text-green-400">{ui.copied}</span>}
        </div>
      )}
    </div>
  );
}
