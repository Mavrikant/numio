export interface UserAgentInfo {
  readonly browser: string;
  readonly browserVersion: string;
  readonly engine: string;
  readonly os: string;
  readonly device: string;
}

interface Rule {
  readonly re: RegExp;
  readonly name: string;
}

const BROWSERS: Rule[] = [
  { re: /Edg\/([\d.]+)/, name: "Edge" },
  { re: /OPR\/([\d.]+)/, name: "Opera" },
  { re: /Opera\/([\d.]+)/, name: "Opera" },
  { re: /Firefox\/([\d.]+)/, name: "Firefox" },
  { re: /CriOS\/([\d.]+)/, name: "Chrome (iOS)" },
  { re: /FxiOS\/([\d.]+)/, name: "Firefox (iOS)" },
  { re: /Chrome\/([\d.]+)/, name: "Chrome" },
  { re: /Version\/([\d.]+).*Safari/, name: "Safari" },
];

const OS_RULES: Rule[] = [
  { re: /Windows NT 10\.0/, name: "Windows 10/11" },
  { re: /Windows NT 6\.3/, name: "Windows 8.1" },
  { re: /Windows NT 6\.2/, name: "Windows 8" },
  { re: /Windows NT 6\.1/, name: "Windows 7" },
  { re: /Mac OS X 1[0-9]_[0-9_]+/, name: "macOS" },
  { re: /Android ([\d.]+)/, name: "Android" },
  { re: /iPhone OS [\d_]+/, name: "iOS" },
  { re: /iPad/, name: "iPadOS" },
  { re: /CrOS/, name: "ChromeOS" },
  { re: /Linux/, name: "Linux" },
];

function detectEngine(ua: string): string {
  if (/Gecko\//.test(ua)) return "Gecko";
  if (/AppleWebKit/.test(ua) && /Chrome\//.test(ua)) return "Blink";
  if (/AppleWebKit/.test(ua)) return "WebKit";
  if (/Trident/.test(ua)) return "Trident";
  return "Unknown";
}

function detectDevice(ua: string): string {
  if (/iPhone/.test(ua)) return "Mobile (iPhone)";
  if (/iPad/.test(ua)) return "Tablet (iPad)";
  if (/Android/.test(ua) && /Mobile/.test(ua)) return "Mobile (Android)";
  if (/Android/.test(ua)) return "Tablet (Android)";
  if (/Mobile/.test(ua)) return "Mobile";
  return "Desktop";
}

/** Parse a browser user-agent string into browser / engine / OS / device. */
export function parseUserAgent(ua: string): UserAgentInfo {
  const s = ua.trim();
  if (!s) return { browser: "", browserVersion: "", engine: "", os: "", device: "" };

  let browser = "Unknown";
  let browserVersion = "";
  for (const rule of BROWSERS) {
    const match = rule.re.exec(s);
    if (match) {
      browser = rule.name;
      browserVersion = match[1] ?? "";
      break;
    }
  }

  const osRule = OS_RULES.find((r) => r.re.test(s));
  const os = osRule?.name ?? "Unknown";

  return { browser, browserVersion, engine: detectEngine(s), os, device: detectDevice(s) };
}
