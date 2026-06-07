import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/config/site";
import { CopyButton } from "@/components/tools/textToolKit";
import definition from "./definition";
import { classifyQr } from "./logic";

type Decoder = (data: Uint8ClampedArray, width: number, height: number) => { data: string } | null;

export default function QrCodeScannerTool({ locale }: { readonly locale: Locale }) {
  const ui = (definition.i18n[locale] ?? definition.i18n.en).ui;
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [scanning, setScanning] = useState(false);

  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const jsqrRef = useRef<Decoder | null>(null);

  // Lazy-load jsQR only when the user actually scans, keeping it out of the main bundle.
  const getDecoder = async (): Promise<Decoder> => {
    if (!jsqrRef.current) {
      const mod = await import("jsqr");
      jsqrRef.current = mod.default as unknown as Decoder;
    }
    return jsqrRef.current;
  };

  const stopCamera = () => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setScanning(false);
  };

  useEffect(() => () => stopCamera(), []);

  const decodeFromImage = async (file: File | undefined) => {
    setError("");
    if (!file || !file.type.startsWith("image/")) return;
    const decode = await getDecoder();
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0);
        const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = decode(data, width, height);
        if (code?.data) setResult(code.data);
        else setError(ui.noQr);
      };
      img.src = typeof reader.result === "string" ? reader.result : "";
    };
    reader.readAsDataURL(file);
  };

  const startCamera = async () => {
    setError("");
    setResult("");
    if (!navigator.mediaDevices?.getUserMedia) {
      setError(ui.cameraDenied);
      return;
    }
    try {
      const decode = await getDecoder();
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      streamRef.current = stream;
      const video = videoRef.current;
      if (!video) return;
      video.srcObject = stream;
      await video.play();
      setScanning(true);

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      const tick = () => {
        if (!streamRef.current || !video || video.readyState !== video.HAVE_ENOUGH_DATA) {
          rafRef.current = requestAnimationFrame(tick);
          return;
        }
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        if (!ctx) return;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const { data, width, height } = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const code = decode(data, width, height);
        if (code?.data) {
          setResult(code.data);
          stopCamera();
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
    } catch {
      setError(ui.cameraDenied);
      stopCamera();
    }
  };

  const cls = result ? classifyQr(result) : null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {scanning ? (
          <button type="button" onClick={stopCamera} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
            {ui.stopCamera}
          </button>
        ) : (
          <button type="button" onClick={startCamera} className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            {ui.useCamera}
          </button>
        )}
        <button type="button" onClick={() => fileRef.current?.click()} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800">
          {ui.uploadImage}
        </button>
        <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={(e) => decodeFromImage(e.target.files?.[0])} />
      </div>

      <video
        ref={videoRef}
        className={scanning ? "w-full max-w-md rounded-lg border border-slate-200 dark:border-slate-700" : "hidden"}
        playsInline
        muted
      />

      {error && (
        <div className="rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-300">
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
          <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{ui.decoded}</div>
          <div dir="ltr" className="break-all font-mono text-sm text-slate-900 dark:text-slate-100">{result}</div>
          <div className="flex items-center gap-2 pt-1">
            <CopyButton text={result} label={ui.copy} copiedLabel={ui.copied} />
            {cls?.href && (
              <a href={cls.href} target="_blank" rel="noopener noreferrer" className="rounded-md border border-blue-300 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/40">
                {ui.openLink}
              </a>
            )}
          </div>
        </div>
      )}

      <p className="text-xs text-slate-500 dark:text-slate-400">{ui.privacyNote}</p>
    </div>
  );
}
