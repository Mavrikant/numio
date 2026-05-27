/** Build a CSS text-shadow value. */
export function buildTextShadow(x: number, y: number, blur: number, color: string): string {
  return `${x}px ${y}px ${blur}px ${color}`;
}
