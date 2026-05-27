/** Build a CSS box-shadow value. */
export function buildBoxShadow(x: number, y: number, blur: number, spread: number, color: string, inset: boolean): string {
  return `${inset ? "inset " : ""}${x}px ${y}px ${blur}px ${spread}px ${color}`;
}
