export interface FlexConfig {
  readonly direction: "row" | "row-reverse" | "column" | "column-reverse";
  readonly wrap: "nowrap" | "wrap" | "wrap-reverse";
  readonly justify: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  readonly align: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  readonly gap: number;
}

/** Render a CSS flex-container block from a flex config. */
export function buildFlexCss(config: FlexConfig): string {
  return [
    "display: flex;",
    `flex-direction: ${config.direction};`,
    `flex-wrap: ${config.wrap};`,
    `justify-content: ${config.justify};`,
    `align-items: ${config.align};`,
    `gap: ${config.gap}px;`,
  ].join("\n");
}
