export interface NeumorphismConfig {
  readonly background: string;
  readonly distance: number;
  readonly blur: number;
  readonly intensity: number;
  readonly radius: number;
  readonly inset: boolean;
}

function shade(hex: string, amount: number): string {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(hex.trim());
  if (!m) return hex;
  const h = m[1]!;
  const r = Math.max(0, Math.min(255, parseInt(h.slice(0, 2), 16) + amount));
  const g = Math.max(0, Math.min(255, parseInt(h.slice(2, 4), 16) + amount));
  const b = Math.max(0, Math.min(255, parseInt(h.slice(4, 6), 16) + amount));
  const toHex = (n: number) => n.toString(16).padStart(2, "0");
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/** Build the neumorphism CSS (soft inner/outer shadows on a matching background). */
export function buildNeumorphismCss(config: NeumorphismConfig): string {
  const light = shade(config.background, Math.round(config.intensity * 0.6));
  const dark = shade(config.background, -Math.round(config.intensity * 0.6));
  const prefix = config.inset ? "inset " : "";
  return [
    `background: ${config.background};`,
    `border-radius: ${config.radius}px;`,
    `box-shadow:`,
    `  ${prefix}${config.distance}px ${config.distance}px ${config.blur}px ${dark},`,
    `  ${prefix}-${config.distance}px -${config.distance}px ${config.blur}px ${light};`,
  ].join("\n");
}
