import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton, Field, inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { decodeArinc429, encodeArinc429, parseWord, type DataType } from "./logic";

type Mode = "decode" | "encode";

function ErrorBox({ children }: { readonly children: string }) {
  return (
    <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
      {children}
    </div>
  );
}

function Row({ label, children }: { readonly label: string; readonly children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
      <dt className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</dt>
      <dd className="flex items-center gap-2">{children}</dd>
    </div>
  );
}

const mono = "break-all font-mono text-sm text-slate-900 dark:text-slate-100";

export default function Arinc429DecoderTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("decode");
  const [dataType, setDataType] = useState<DataType>("bnr");

  return (
    <div className="space-y-5">
      <div className="inline-flex rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {(["decode", "encode"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={
              "rounded px-3 py-1.5 text-sm font-medium " +
              (mode === m
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800")
            }
          >
            {m === "decode" ? ui.decode : ui.encode}
          </button>
        ))}
      </div>

      <Field label={ui.dataType}>
        <select value={dataType} onChange={(e) => setDataType(e.target.value as DataType)} className={inputClass + " w-auto"}>
          <option value="bnr">{ui.bnr}</option>
          <option value="bcd">{ui.bcd}</option>
        </select>
      </Field>

      {mode === "decode" ? <DecodePanel ui={ui} dataType={dataType} /> : <EncodePanel ui={ui} dataType={dataType} />}
    </div>
  );
}

function DecodePanel({ ui, dataType }: { readonly ui: Record<string, string>; readonly dataType: DataType }) {
  const [word, setWord] = useState("0x2D0000A8");
  const [scale, setScale] = useState("");

  const result = useMemo(() => {
    try {
      const w = parseWord(word);
      const bnrScale = scale.trim() === "" ? undefined : Number(scale);
      return { ok: true as const, value: decodeArinc429(w, { dataType, bnrScale: Number.isFinite(bnrScale) ? bnrScale : undefined }) };
    } catch {
      return { ok: false as const };
    }
  }, [word, scale, dataType]);

  return (
    <div className="space-y-4">
      <Field label={ui.word}>
        <input className={inputClass} dir="ltr" value={word} onChange={(e) => setWord(e.target.value)} placeholder={ui.wordPlaceholder} spellCheck={false} />
      </Field>
      {dataType === "bnr" && (
        <Field label={ui.scale}>
          <input className={inputClass + " w-auto"} dir="ltr" value={scale} onChange={(e) => setScale(e.target.value)} placeholder="1" inputMode="decimal" />
        </Field>
      )}

      {!result.ok ? (
        <ErrorBox>{ui.invalidWord}</ErrorBox>
      ) : (
        <dl className="space-y-2">
          <Row label={ui.label}>
            <span className={mono}>{result.value.labelOctal}</span>
          </Row>
          <Row label={ui.sdi}>
            <span className={mono}>{result.value.sdi}</span>
          </Row>
          <Row label={ui.ssm}>
            <span className={mono}>
              {result.value.ssm} — {result.value.ssmMeaning}
            </span>
          </Row>
          <Row label={ui.data}>
            <span className={mono}>{result.value.dataHex}</span>
          </Row>
          {result.value.bnrValue !== null && (
            <Row label={ui.bnrValue}>
              <span className={mono}>
                {result.value.bnrValue}
                {result.value.bnrScaled !== null ? ` · ${ui.scaled}: ${result.value.bnrScaled}` : ""}
              </span>
            </Row>
          )}
          {result.value.bcdDigits !== null && (
            <Row label={ui.bcdDigits}>
              <span className={mono}>{result.value.bcdDigits.join(" ")}</span>
            </Row>
          )}
          <Row label={ui.parity}>
            <span className={result.value.parityValid ? "font-mono text-sm text-emerald-600 dark:text-emerald-400" : "font-mono text-sm text-amber-600 dark:text-amber-400"}>
              {result.value.parityBit} — {result.value.parityValid ? ui.parityValid : ui.parityInvalid}
            </span>
          </Row>
          <Row label={ui.binary}>
            <span className="break-all font-mono text-xs text-slate-700 dark:text-slate-300">{result.value.binary}</span>
          </Row>
        </dl>
      )}
    </div>
  );
}

function EncodePanel({ ui, dataType }: { readonly ui: Record<string, string>; readonly dataType: DataType }) {
  const [label, setLabel] = useState("203");
  const [sdi, setSdi] = useState(0);
  const [ssm, setSsm] = useState(3);
  const [value, setValue] = useState("0");

  const result = useMemo(() => {
    try {
      return { ok: true as const, value: encodeArinc429({ labelOctal: label, sdi, ssm, dataType, value: Number(value) || 0 }) };
    } catch {
      return { ok: false as const };
    }
  }, [label, sdi, ssm, dataType, value]);

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label={ui.label}>
          <input className={inputClass} dir="ltr" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="203" spellCheck={false} />
        </Field>
        <Field label={ui.value}>
          <input className={inputClass} dir="ltr" value={value} onChange={(e) => setValue(e.target.value)} inputMode="numeric" spellCheck={false} />
        </Field>
        <Field label={ui.sdi}>
          <select value={sdi} onChange={(e) => setSdi(Number(e.target.value))} className={inputClass + " w-auto"}>
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>
        <Field label={ui.ssm}>
          <select value={ssm} onChange={(e) => setSsm(Number(e.target.value))} className={inputClass + " w-auto"}>
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </Field>
      </div>

      {!result.ok ? (
        <ErrorBox>{ui.invalidFields}</ErrorBox>
      ) : (
        <dl className="space-y-2">
          <Row label={ui.hex}>
            <span className={mono}>{result.value.hex}</span>
            <CopyButton text={result.value.hex} label={ui.copy} copiedLabel={ui.copied} />
          </Row>
          <Row label={ui.binary}>
            <span className="break-all font-mono text-xs text-slate-700 dark:text-slate-300">{result.value.binary}</span>
            <CopyButton text={result.value.binary} label={ui.copy} copiedLabel={ui.copied} />
          </Row>
          <Row label={ui.parity}>
            <span className={mono}>{result.value.parityBit}</span>
          </Row>
        </dl>
      )}
    </div>
  );
}
