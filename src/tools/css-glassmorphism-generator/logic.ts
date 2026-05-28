export interface GlassmorphismConfig {
  readonly blur: number;
  readonly transparency: number;
  readonly saturation: number;
  readonly borderRadius: number;
  readonly borderOpacity: number;
}

/** Build the frosted-glass CSS effect (backdrop-filter + translucent background + subtle border). */
export function buildGlassmorphismCss(config: GlassmorphismConfig): string {
  const a = Math.max(0, Math.min(1, config.transparency)).toFixed(2);
  const b = Math.max(0, Math.min(1, config.borderOpacity)).toFixed(2);
  return [
    `background: rgba(255, 255, 255, ${a});`,
    `backdrop-filter: blur(${config.blur}px) saturate(${config.saturation}%);`,
    `-webkit-backdrop-filter: blur(${config.blur}px) saturate(${config.saturation}%);`,
    `border: 1px solid rgba(255, 255, 255, ${b});`,
    `border-radius: ${config.borderRadius}px;`,
  ].join("\n");
}
