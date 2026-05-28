import { useEffect, useState } from "react";
import QRCode from "qrcode";
import type { Locale } from "@/config/site";
import { inputClass } from "@/components/tools/textToolKit";
import definition from "./definition";
import { buildWifiString, buildVCardString, type WifiEncryption } from "./logic";

type Mode = "text" | "wifi" | "vcard";

export default function QrCodeGeneratorTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [mode, setMode] = useState<Mode>("text");
  const [text, setText] = useState("https://numio.app");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState<WifiEncryption>("WPA");
  const [hidden, setHidden] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [url, setUrl] = useState("");
  const [dataUrl, setDataUrl] = useState("");

  const payload =
    mode === "text"
      ? text
      : mode === "wifi"
        ? buildWifiString(ssid, password, encryption, hidden)
        : buildVCardString({ name, phone, email, org, url });

  useEffect(() => {
    if (!payload) {
      setDataUrl("");
      return;
    }
    QRCode.toDataURL(payload, { width: 320, margin: 2, errorCorrectionLevel: "M" })
      .then(setDataUrl)
      .catch(() => setDataUrl(""));
  }, [payload]);

  const MODES: { id: Mode; label: string }[] = [
    { id: "text", label: ui.modeText },
    { id: "wifi", label: ui.modeWifi },
    { id: "vcard", label: ui.modeVcard },
  ];

  return (
    <div className="space-y-4">
      <div className="inline-flex flex-wrap rounded-md border border-slate-300 p-0.5 dark:border-slate-600">
        {MODES.map((m) => (
          <button key={m.id} type="button" onClick={() => setMode(m.id)} className={"rounded px-4 py-1.5 text-sm font-medium " + (m.id === mode ? "bg-blue-600 text-white" : "text-slate-600 dark:text-slate-300")}>
            {m.label}
          </button>
        ))}
      </div>

      {mode === "text" && (
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.text}</span>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} className={inputClass} />
        </label>
      )}

      {mode === "wifi" && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.ssid}</span>
            <input type="text" value={ssid} onChange={(e) => setSsid(e.target.value)} className={inputClass} />
          </label>
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.encryption}</span>
            <select value={encryption} onChange={(e) => setEncryption(e.target.value as WifiEncryption)} className={inputClass}>
              <option value="WPA">WPA / WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select>
          </label>
          {encryption !== "nopass" && (
            <label className="block space-y-1 sm:col-span-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{ui.password}</span>
              <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} />
            </label>
          )}
          <label className="flex items-center gap-2 text-sm font-medium text-slate-700 sm:col-span-2 dark:text-slate-300">
            <input type="checkbox" checked={hidden} onChange={(e) => setHidden(e.target.checked)} className="h-4 w-4" />
            <span>{ui.hidden}</span>
          </label>
        </div>
      )}

      {mode === "vcard" && (
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { label: ui.name, val: name, set: setName },
            { label: ui.phone, val: phone, set: setPhone },
            { label: ui.email, val: email, set: setEmail },
            { label: ui.org, val: org, set: setOrg },
            { label: ui.url, val: url, set: setUrl },
          ].map((f) => (
            <label key={f.label} className="block space-y-1">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{f.label}</span>
              <input type="text" value={f.val} onChange={(e) => f.set(e.target.value)} className={inputClass} />
            </label>
          ))}
        </div>
      )}

      {dataUrl && (
        <div className="flex flex-col items-center gap-3">
          <img src={dataUrl} alt="QR code" className="rounded-md border border-slate-200 dark:border-slate-700" width={280} height={280} />
          <a href={dataUrl} download="qr-code.png" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.download}
          </a>
        </div>
      )}
    </div>
  );
}
