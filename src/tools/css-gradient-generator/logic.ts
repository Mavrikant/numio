export type GradientType = "linear" | "radial";

/** Build a CSS gradient value from two color stops. */
export function buildGradient(type: GradientType, angle: number, color1: string, color2: string): string {
  const stops = `${color1}, ${color2}`;
  return type === "radial" ? `radial-gradient(circle, ${stops})` : `linear-gradient(${angle}deg, ${stops})`;
}
